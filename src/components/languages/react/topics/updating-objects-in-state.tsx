'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  PackageOpen,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Copy,
  Sparkles,
  Layers,
  Zap,
  RefreshCw,
  Clock,
  Code2,
  CheckSquare,
} from 'lucide-react';

export default function UpdatingObjectsInState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={PackageOpen}
        category="React · Managing State"
        title="Updating Objects in State"
        description="Master object state updates in React. Learn immutability, spread operator, state batching, and JSX component patterns."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* State is Immutable */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State is Immutable"
              description="Never mutate state objects directly"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In React, state should be treated as <strong>read-only</strong>. When you need to update an object in state, you must create a <strong>new object</strong> rather than modifying the existing one. This ensures React can detect changes and trigger re-renders.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Direct Mutation</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [user, setUser] = useState({'{'}</div>
                    <div className="pl-4">name: 'Sarah',</div>
                    <div className="pl-4">age: 25</div>
                    <div>{'}'});</div>
                    <div className="mt-2"></div>
                    <div className="text-red-600 dark:text-red-400">// ❌ Won't trigger re-render</div>
                    <div className="text-red-600 dark:text-red-400">user.age = 26;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React can't detect the change because the object reference is unchanged.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Create New Object</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [user, setUser] = useState({'{'}</div>
                    <div className="pl-4">name: 'Sarah',</div>
                    <div className="pl-4">age: 25</div>
                    <div>{'}'});</div>
                    <div className="mt-2"></div>
                    <div className="text-green-600 dark:text-green-400">// ✅ Triggers re-render</div>
                    <div className="text-green-600 dark:text-green-400">setUser({'{'} ...user, age: 26 {'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  New object reference lets React detect the change.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Why Immutability Matters</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                React uses reference equality (===) to detect state changes. If you mutate an object, the reference stays the same, so React thinks nothing changed and won't re-render your component.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Spread Operator */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Copy className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Spread Operator"
              description="Copy objects and update properties efficiently"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">...</code> spread operator is your best friend for updating objects. It copies all existing properties into a new object, then you can override specific properties.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">How Spread Updates Work</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Original State</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        profile = {'{'} name: 'Alex', role: 'Developer', active: true {'}'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Apply Spread</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        {'{'} ...profile, active: false {'}'}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Copy all properties, then change active to false
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">New Object</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        {'{'} name: 'Alex', role: 'Developer', active: false {'}'}
                      </div>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                      ✅ New reference = React detects change!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">💡 Order is Critical!</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-900 p-3 rounded">
                  <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-1">
                    {'{'} ...profile, role: 'Senior' {'}'}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Spread first, then override ✅</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded">
                  <div className="font-mono text-xs text-red-600 dark:text-red-400 mb-1">
                    {'{'} role: 'Senior', ...profile {'}'}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Override gets overwritten ❌</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: User Profile */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Playground: User Profile"
            description="Practice updating object properties in a JSX component"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="User Profile Editor"
            description="Update user information and see real-time changes"
            colorTheme="cyan"
            react={`function UserProfile() {
  const [user, setUser] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Frontend Developer',
    active: true,
    avatar: '👨‍💻'
  });

  const toggleActive = () => {
    setUser({
      ...user,
      active: !user.active
    });
  };

  const updateRole = (newRole) => {
    setUser({
      ...user,
      role: newRole
    });
  };

  return (
    <div className="container">
      <h1>👤 User Profile Editor</h1>
      
      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar">{user.avatar}</div>
          <div className="status-badge">
            {user.active ? '🟢 Active' : '🔴 Inactive'}
          </div>
        </div>
        
        <div className="info-section">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <p className="role">{user.role}</p>
        </div>
      </div>

      <div className="form-section">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({
              ...user,
              name: e.target.value
            })}
            placeholder="Enter name"
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })}
            placeholder="Enter email"
          />
        </div>

        <div className="role-selector">
          <label>Role</label>
          <div className="role-buttons">
            {['Frontend Developer', 'Backend Developer', 'Full Stack', 'Designer'].map(role => (
              <button
                key={role}
                className={user.role === role ? 'active' : ''}
                onClick={() => updateRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="toggle-btn"
          onClick={toggleActive}
        >
          {user.active ? '🔴 Deactivate' : '🟢 Activate'} User
        </button>
      </div>

      <div className="state-display">
        <h3>📋 Current State</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(<UserProfile />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function UserProfile() {
    const [user, setUser] = useState({
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Frontend Developer',
      active: true,
      avatar: '👨‍💻'
    });

    const toggleActive = () => {
      setUser({
        ...user,
        active: !user.active
      });
    };

    const updateRole = (newRole) => {
      setUser({
        ...user,
        role: newRole
      });
    };

    return h('div', { className: 'container' },
      h('h1', null, '👤 User Profile Editor'),
      
      h('div', { className: 'profile-card' },
        h('div', { className: 'avatar-section' },
          h('div', { className: 'avatar' }, user.avatar),
          h('div', { className: 'status-badge' }, 
            user.active ? '🟢 Active' : '🔴 Inactive'
          )
        ),
        
        h('div', { className: 'info-section' },
          h('h2', null, user.name),
          h('p', { className: 'email' }, user.email),
          h('p', { className: 'role' }, user.role)
        )
      ),

      h('div', { className: 'form-section' },
        h('div', { className: 'input-group' },
          h('label', null, 'Name'),
          h('input', {
            type: 'text',
            value: user.name,
            onChange: (e) => setUser({
              ...user,
              name: e.target.value
            }),
            placeholder: 'Enter name'
          })
        ),

        h('div', { className: 'input-group' },
          h('label', null, 'Email'),
          h('input', {
            type: 'email',
            value: user.email,
            onChange: (e) => setUser({
              ...user,
              email: e.target.value
            }),
            placeholder: 'Enter email'
          })
        ),

        h('div', { className: 'role-selector' },
          h('label', null, 'Role'),
          h('div', { className: 'role-buttons' },
            ['Frontend Developer', 'Backend Developer', 'Full Stack', 'Designer'].map(role =>
              h('button', {
                key: role,
                className: user.role === role ? 'active' : '',
                onClick: () => updateRole(role)
              }, role)
            )
          )
        ),

        h('button', {
          className: 'toggle-btn',
          onClick: toggleActive
        }, user.active ? '🔴 Deactivate' : '🟢 Activate' + ' User')
      ),

      h('div', { className: 'state-display' },
        h('h3', null, '📋 Current State'),
        h('pre', null, JSON.stringify(user, null, 2))
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(UserProfile));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}


#root {
  width: 100%;
  display: flex;
  justify-content: center;
}


.container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  width: 100%;
}


h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}


.profile-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
}


.avatar-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}


.avatar {
  font-size: 60px;
  background: rgba(255, 255, 255, 0.2);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}


.status-badge {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  backdrop-filter: blur(10px);
}


.info-section h2 {
  color: white;
  font-size: 28px;
  margin-bottom: 8px;
}


.info-section .email {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-bottom: 4px;
}


.info-section .role {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}


.form-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}


.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}


.input-group label {
  color: #667eea;
  font-weight: 600;
  font-size: 14px;
}


.input-group input {
  padding: 14px 18px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}


.input-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}


.role-selector label {
  color: #667eea;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;
}


.role-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}


.role-buttons button {
  padding: 12px 16px;
  border: 2px solid #e0e7ff;
  background: white;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #667eea;
  font-weight: 500;
}


.role-buttons button:hover {
  border-color: #667eea;
  background: #f0f4ff;
}


.role-buttons button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}


.toggle-btn {
  padding: 16px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}


.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
}


.state-display {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}


.state-display h3 {
  color: #475569;
  font-size: 16px;
  margin-bottom: 12px;
}


.state-display pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', monospace;
}


@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .input-group label {
    color: #60a5fa;
  }

  .role-selector label {
    color: #60a5fa;
  }

  .input-group input {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input-group input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .role-buttons button {
    background: #374151;
    border-color: #4b5563;
    color: #60a5fa;
  }

  .role-buttons button:hover {
    border-color: #60a5fa;
    background: #1e3a8a;
  }

  .state-display {
    background: #1e293b;
    border-color: #334155;
  }

  .state-display h3 {
    color: #94a3b8;
  }
}`}
          />
        </div>

        {/* State Updates are Batched */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="State Updates are Batched"
              description="React queues and batches state updates for performance"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              React doesn't update state immediately. Instead, it <strong>batches</strong> multiple state updates together for better performance. This means that calling setState multiple times in the same event might not work as you expect.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Understanding Batching</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <h5 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Common Mistake</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-3">
                    <div className="text-red-600 dark:text-red-400">
                      <div>const [count, setCount] = useState(0);</div>
                      <div className="mt-2"></div>
                      <div>const handleClick = () ={'>'} {'{'}</div>
                      <div className="pl-2">setCount(count + 1);</div>
                      <div className="pl-2">setCount(count + 1);</div>
                      <div className="pl-2">setCount(count + 1);</div>
                      <div>{'}'};</div>
                      <div className="mt-2 text-gray-500 dark:text-gray-400">// Result: count = 1, not 3!</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    All three updates use the same count value (0), so the result is 1.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <h5 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Correct Approach</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-3">
                    <div className="text-green-600 dark:text-green-400">
                      <div>const [count, setCount] = useState(0);</div>
                      <div className="mt-2"></div>
                      <div>const handleClick = () ={'>'} {'{'}</div>
                      <div className="pl-2">setCount(c ={'>'} c + 1);</div>
                      <div className="pl-2">setCount(c ={'>'} c + 1);</div>
                      <div className="pl-2">setCount(c ={'>'} c + 1);</div>
                      <div>{'}'};</div>
                      <div className="mt-2 text-gray-500 dark:text-gray-400">// Result: count = 3 ✅</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Using functional updates ensures each call gets the latest state.
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Use Functional Updates</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                When the new state depends on the previous state, always use the functional form: setState(prevState ={'>'} newState). This ensures you're working with the most recent state value.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Essential concepts for updating objects in React state"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Never Mutate State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always create new objects. React uses reference equality to detect changes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Spread Operator</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">{'{'} ...obj, key: value {'}'}</code> copies and updates efficiently.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Functional Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">setState(prev ={'>'} newState)</code> when new state depends on previous.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">State Batching</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React batches updates for performance. Multiple setStates may not update immediately.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">JSX Component Patterns</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                When writing JSX components, treat state as immutable data that flows down. Use the spread operator for clean, readable updates and functional forms for dependent updates. This makes your components predictable and easy to debug!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}


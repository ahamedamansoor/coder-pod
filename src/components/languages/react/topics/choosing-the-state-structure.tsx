'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code2,
  Zap,
  Settings,
  Target,
  ArrowRight,
  Database,
  Box,
  GitBranch,
  Package,
  Shield,
  TrendingUp,
} from 'lucide-react';

export default function ChoosingTheStateStructure() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Layers}
        category="React · State Management"
        title="Choosing the State Structure"
        description="Learn how to organize your component state for maximum clarity and maintainability"
        colorTheme="teal"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is State Structure */}
        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-teal-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-teal-600 dark:text-teal-400" />}
              title="What is State Structure?"
              description="The foundation of maintainable React components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              State structure refers to how you organize and shape your component's state data. A well-designed state structure makes your components predictable, easier to debug, and simpler to maintain.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-200 dark:border-teal-800">
              <h4 className="font-bold mb-4 text-teal-700 dark:text-teal-300">The Three Pillars of Good State Structure</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Group Related Data</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Keep related pieces of information together in logical groups
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Avoid Redundancy</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Don't store data that can be calculated from existing state
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300">Keep it Flat</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Avoid deeply nested structures when possible
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border-teal-300 dark:border-teal-700">
              <Target className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <AlertTitle className="text-teal-900 dark:text-teal-100">Key Principle</AlertTitle>
              <AlertDescription className="text-teal-800 dark:text-teal-200">
                Your state structure should reflect your UI structure. Think about what data needs to be rendered together and group accordingly.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* State Structure Patterns */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="State Structure Patterns"
              description="Common patterns for organizing component state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Different scenarios call for different state structures. Let's explore the most common patterns and when to use each one.
            </p>

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Pattern 1: Primitive Values</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Use individual primitive values for simple, independent state.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div><span className="text-purple-600">const</span> [<span className="text-green-600">name</span>, <span className="text-blue-600">setName</span>] = <span className="text-orange-600">useState</span>(<span className="text-red-600">''</span>);</div>
                    <div><span className="text-purple-600">const</span> [<span className="text-green-600">age</span>, <span className="text-blue-600">setAge</span>] = <span className="text-orange-600">useState</span>(<span className="text-orange-600">0</span>);</div>
                    <div><span className="text-purple-600">const</span> [<span className="text-green-600">isActive</span>, <span className="text-blue-600">setIsActive</span>] = <span className="text-orange-600">useState</span>(<span className="text-purple-600">false</span>);</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    <strong>Best for:</strong> Simple forms, toggles, counters
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Pattern 2: Single Object</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Group related data into a single object when pieces change together.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div><span className="text-purple-600">const</span> [<span className="text-green-600">user</span>, <span className="text-blue-600">setUser</span>] = <span className="text-orange-600">useState</span>({'{'}</div>
                    <div className="pl-4"><span className="text-green-600">name</span>: <span className="text-red-600">''</span>,</div>
                    <div className="pl-4"><span className="text-green-600">email</span>: <span className="text-red-600">''</span>,</div>
                    <div className="pl-4"><span className="text-green-600">age</span>: <span className="text-orange-600">0</span></div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    <strong>Best for:</strong> User profiles, form data, configuration objects
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Pattern 3: Nested Objects</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Use nested structures for complex data with clear hierarchy.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div><span className="text-purple-600">const</span> [<span className="text-green-600">app</span>, <span className="text-blue-600">setApp</span>] = <span className="text-orange-600">useState</span>({'{'}</div>
                    <div className="pl-4"><span className="text-green-600">user</span>: {'{'} <span className="text-green-600">name</span>: <span className="text-red-600">''</span>, <span className="text-green-600">role</span>: <span className="text-red-600">''</span> {'}'},</div>
                    <div className="pl-4"><span className="text-green-600">settings</span>: {'{'} <span className="text-green-600">theme</span>: <span className="text-red-600">'light'</span>, <span className="text-green-600">notifications</span>: <span className="text-purple-600">true</span> {'}'}</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    <strong>Best for:</strong> Complex applications, multi-step forms, dashboard data
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Structure Principles */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="State Structure Principles"
              description="Guidelines for designing maintainable state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Follow these principles to create state structures that are easy to understand and maintain as your application grows.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">✅ Do This</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Group related state together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep state structure flat when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use descriptive property names</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consider derived state vs stored state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Match state to UI structure</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">❌ Avoid This</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Deeply nested state (more than 2-3 levels)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Redundant or calculated data in state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Unrelated data grouped together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Vague property names (data, info, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Over-normalizing simple component state</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Think Ahead</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Consider how your state might evolve. Choose a structure that can accommodate future changes without major refactoring.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: User Profile Form */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Interactive Playground: User Profile Form"
            description="Compare different state structures for the same form"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="User Profile with Structured State"
            description="See how organized state makes form management easier"
            colorTheme="indigo"
            react={`function UserProfile() {
  const [user, setUser] = React.useState({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    preferences: {
      newsletter: false,
      notifications: true,
      theme: 'light'
    },
    account: {
      username: '',
      bio: '',
      website: ''
    }
  });

  const updatePersonalInfo = (field, value) => {
    setUser(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const updatePreferences = (field, value) => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const updateAccount = (field, value) => {
    setUser(prev => ({
      ...prev,
      account: {
        ...prev.account,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated: ' + JSON.stringify(user, null, 2));
  };

  return (
    <div className="container">
      <h1>👤 User Profile</h1>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <input
              type="text"
              placeholder="First Name"
              value={user.personal.firstName}
              onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={user.personal.lastName}
              onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={user.personal.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="form-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={user.personal.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Preferences</h2>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={user.preferences.newsletter}
                onChange={(e) => updatePreferences('newsletter', e.target.checked)}
              />
              Newsletter Subscription
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={user.preferences.notifications}
                onChange={(e) => updatePreferences('notifications', e.target.checked)}
              />
              Push Notifications
            </label>
            <select
              value={user.preferences.theme}
              onChange={(e) => updatePreferences('theme', e.target.value)}
              className="form-select"
            >
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Account Details</h2>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Username"
              value={user.account.username}
              onChange={(e) => updateAccount('username', e.target.value)}
              className="form-input"
            />
            <input
              type="url"
              placeholder="Website"
              value={user.account.website}
              onChange={(e) => updateAccount('website', e.target.value)}
              className="form-input"
            />
            <textarea
              placeholder="Bio"
              value={user.account.bio}
              onChange={(e) => updateAccount('bio', e.target.value)}
              className="form-textarea"
              rows={3}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          💾 Save Profile
        </button>
      </form>

      <div className="state-display">
        <h3>🔍 Current State Structure</h3>
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
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      preferences: {
        newsletter: false,
        notifications: true,
        theme: 'light'
      },
      account: {
        username: '',
        bio: '',
        website: ''
      }
    });

    const updatePersonalInfo = (field, value) => {
      setUser(prev => ({
        ...prev,
        personal: {
          ...prev.personal,
          [field]: value
        }
      }));
    };

    const updatePreferences = (field, value) => {
      setUser(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [field]: value
        }
      }));
    };

    const updateAccount = (field, value) => {
      setUser(prev => ({
        ...prev,
        account: {
          ...prev.account,
          [field]: value
        }
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Profile updated: ' + JSON.stringify(user, null, 2));
    };

    return h('div', { className: 'container' },
      h('h1', null, '👤 User Profile'),
      
      h('form', { onSubmit: handleSubmit, className: 'profile-form' },
        h('div', { className: 'form-section' },
          h('h2', null, 'Personal Information'),
          h('div', { className: 'form-grid' },
            h('input', {
              type: 'text',
              placeholder: 'First Name',
              value: user.personal.firstName,
              onChange: (e) => updatePersonalInfo('firstName', e.target.value),
              className: 'form-input'
            }),
            h('input', {
              type: 'text',
              placeholder: 'Last Name',
              value: user.personal.lastName,
              onChange: (e) => updatePersonalInfo('lastName', e.target.value),
              className: 'form-input'
            }),
            h('input', {
              type: 'email',
              placeholder: 'Email',
              value: user.personal.email,
              onChange: (e) => updatePersonalInfo('email', e.target.value),
              className: 'form-input'
            }),
            h('input', {
              type: 'tel',
              placeholder: 'Phone',
              value: user.personal.phone,
              onChange: (e) => updatePersonalInfo('phone', e.target.value),
              className: 'form-input'
            })
          )
        ),

        h('div', { className: 'form-section' },
          h('h2', null, 'Preferences'),
          h('div', { className: 'checkbox-group' },
            h('label', { className: 'checkbox-label' },
              h('input', {
                type: 'checkbox',
                checked: user.preferences.newsletter,
                onChange: (e) => updatePreferences('newsletter', e.target.checked)
              }),
              ' Newsletter Subscription'
            ),
            h('label', { className: 'checkbox-label' },
              h('input', {
                type: 'checkbox',
                checked: user.preferences.notifications,
                onChange: (e) => updatePreferences('notifications', e.target.checked)
              }),
              ' Push Notifications'
            ),
            h('select', {
              value: user.preferences.theme,
              onChange: (e) => updatePreferences('theme', e.target.value),
              className: 'form-select'
            },
              h('option', { value: 'light' }, 'Light Theme'),
              h('option', { value: 'dark' }, 'Dark Theme'),
              h('option', { value: 'auto' }, 'Auto')
            )
          )
        ),

        h('div', { className: 'form-section' },
          h('h2', null, 'Account Details'),
          h('div', { className: 'form-grid' },
            h('input', {
              type: 'text',
              placeholder: 'Username',
              value: user.account.username,
              onChange: (e) => updateAccount('username', e.target.value),
              className: 'form-input'
            }),
            h('input', {
              type: 'url',
              placeholder: 'Website',
              value: user.account.website,
              onChange: (e) => updateAccount('website', e.target.value),
              className: 'form-input'
            }),
            h('textarea', {
              placeholder: 'Bio',
              value: user.account.bio,
              onChange: (e) => updateAccount('bio', e.target.value),
              className: 'form-textarea',
              rows: 3
            })
          )
        ),

        h('button', { type: 'submit', className: 'submit-btn' }, '💾 Save Profile')
      ),

      h('div', { className: 'state-display' },
        h('h3', null, '🔍 Current State Structure'),
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
  align-items: flex-start;
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
  max-width: 900px;
  width: 100%;
  margin-top: 20px;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-section {
  background: #f8fafc;
  padding: 25px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
}

.form-section h2 {
  color: #1e293b;
  margin-bottom: 20px;
  font-size: 1.3rem;
  font-weight: 600;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.form-input, .form-select, .form-textarea {
  padding: 12px 16px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #667eea;
}

.submit-btn {
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.state-display {
  background: #1e293b;
  border-radius: 12px;
  padding: 20px;
  margin-top: 30px;
}

.state-display h3 {
  color: #e2e8f0;
  margin-bottom: 15px;
  font-size: 16px;
}

.state-display pre {
  color: #e2e8f0;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', monospace;
  line-height: 1.5;
  overflow-x: auto;
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
}

@media (max-width: 640px) {
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
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

  .form-section {
    background: #374151;
    border-color: #4b5563;
  }

  .form-section h2 {
    color: #e5e7eb;
  }

  .form-input, .form-select, .form-textarea {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .checkbox-label {
    color: #e5e7eb;
  }

  .state-display {
    background: #0f172a;
  }

  .state-display h3 {
    color: #e2e8f0;
  }

  .state-display pre {
    color: #e2e8f0;
    background: #1e293b;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Shopping Cart */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Shopping Cart"
            description="Structured state for complex e-commerce scenarios"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Shopping Cart with Structured State"
            description="Organized state for products, cart, and user interactions"
            colorTheme="purple"
            react={`function ShoppingCart() {
  const [shopState, setShopState] = React.useState({
    products: [
      { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
      { id: 2, name: 'Book', price: 29, category: 'Education', inStock: true },
      { id: 3, name: 'Headphones', price: 199, category: 'Electronics', inStock: false },
      { id: 4, name: 'Coffee Mug', price: 15, category: 'Lifestyle', inStock: true }
    ],
    cart: {
      items: [],
      total: 0,
      itemCount: 0
    },
    filters: {
      category: 'all',
      inStockOnly: false,
      searchTerm: ''
    },
    ui: {
      showCart: false,
      loading: false,
      error: null
    }
  });

  const addToCart = (product) => {
    setShopState(prev => {
      const existingItem = prev.cart.items.find(item => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        newItems = prev.cart.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prev.cart.items, { ...product, quantity: 1 }];
      }

      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...prev,
        cart: {
          items: newItems,
          total: newTotal,
          itemCount: newItemCount
        }
      };
    });
  };

  const removeFromCart = (productId) => {
    setShopState(prev => {
      const newItems = prev.cart.items.filter(item => item.id !== productId);
      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...prev,
        cart: {
          items: newItems,
          total: newTotal,
          itemCount: newItemCount
        }
      };
    });
  };

  const updateFilter = (filterType, value) => {
    setShopState(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        [filterType]: value
      }
    }));
  };

  const toggleCart = () => {
    setShopState(prev => ({
      ...prev,
      ui: {
        ...prev.ui,
        showCart: !prev.ui.showCart
      }
    }));
  };

  const filteredProducts = shopState.products.filter(product => {
    const matchesCategory = shopState.filters.category === 'all' || product.category === shopState.filters.category;
    const matchesStock = !shopState.filters.inStockOnly || product.inStock;
    const matchesSearch = product.name.toLowerCase().includes(shopState.filters.searchTerm.toLowerCase());
    return matchesCategory && matchesStock && matchesSearch;
  });

  return (
    <div className="container">
      <h1>🛒 Shopping Cart</h1>
      
      <div className="shop-layout">
        <div className="main-content">
          <div className="filters-section">
            <h2>Filters</h2>
            <div className="filter-controls">
              <input
                type="text"
                placeholder="Search products..."
                value={shopState.filters.searchTerm}
                onChange={(e) => updateFilter('searchTerm', e.target.value)}
                className="search-input"
              />
              <select
                value={shopState.filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Education">Education</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={shopState.filters.inStockOnly}
                  onChange={(e) => updateFilter('inStockOnly', e.target.checked)}
                />
                In Stock Only
              </label>
            </div>
          </div>

          <div className="products-section">
            <h2>Products</h2>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    <p className="price">$\{product.price\}</p>
                    {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="add-to-cart-btn"
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Cart ({shopState.cart.itemCount})</h2>
            <button onClick={toggleCart} className="toggle-cart-btn">
              {shopState.ui.showCart ? 'Hide' : 'Show'}
            </button>
          </div>
          
          {shopState.ui.showCart && (
            <div className="cart-content">
              {shopState.cart.items.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                <>
                  <div className="cart-items">
                    {shopState.cart.items.map(item => (
                      <div key={item.id} className="cart-item">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>$\{item.price\} x \{item.quantity\}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-summary">
                    <div className="total">
                      <strong>Total: $\{shopState.cart.total\}</strong>
                    </div>
                    <button className="checkout-btn">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="state-display">
        <h3>🔍 Current State Structure</h3>
        <pre>{JSON.stringify(shopState, null, 2)}</pre>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<ShoppingCart />);`}
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

  function ShoppingCart() {
    const [shopState, setShopState] = useState({
      products: [
        { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
        { id: 2, name: 'Book', price: 29, category: 'Education', inStock: true },
        { id: 3, name: 'Headphones', price: 199, category: 'Electronics', inStock: false },
        { id: 4, name: 'Coffee Mug', price: 15, category: 'Lifestyle', inStock: true }
      ],
      cart: {
        items: [],
        total: 0,
        itemCount: 0
      },
      filters: {
        category: 'all',
        inStockOnly: false,
        searchTerm: ''
      },
      ui: {
        showCart: false,
        loading: false,
        error: null
      }
    });

    const addToCart = (product) => {
      setShopState(prev => {
        const existingItem = prev.cart.items.find(item => item.id === product.id);
        let newItems;
        
        if (existingItem) {
          newItems = prev.cart.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          newItems = [...prev.cart.items, { ...product, quantity: 1 }];
        }

        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

        return {
          ...prev,
          cart: {
            items: newItems,
            total: newTotal,
            itemCount: newItemCount
          }
        };
      });
    };

    const removeFromCart = (productId) => {
      setShopState(prev => {
        const newItems = prev.cart.items.filter(item => item.id !== productId);
        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

        return {
          ...prev,
          cart: {
            items: newItems,
            total: newTotal,
            itemCount: newItemCount
          }
        };
      });
    };

    const updateFilter = (filterType, value) => {
      setShopState(prev => ({
        ...prev,
        filters: {
          ...prev.filters,
          [filterType]: value
        }
      }));
    };

    const toggleCart = () => {
      setShopState(prev => ({
        ...prev,
        ui: {
          ...prev.ui,
          showCart: !prev.ui.showCart
        }
      }));
    };

    const filteredProducts = shopState.products.filter(product => {
      const matchesCategory = shopState.filters.category === 'all' || product.category === shopState.filters.category;
      const matchesStock = !shopState.filters.inStockOnly || product.inStock;
      const matchesSearch = product.name.toLowerCase().includes(shopState.filters.searchTerm.toLowerCase());
      return matchesCategory && matchesStock && matchesSearch;
    });

    return h('div', { className: 'container' },
      h('h1', null, '🛒 Shopping Cart'),
      
      h('div', { className: 'shop-layout' },
        h('div', { className: 'main-content' },
          h('div', { className: 'filters-section' },
            h('h2', null, 'Filters'),
            h('div', { className: 'filter-controls' },
              h('input', {
                type: 'text',
                placeholder: 'Search products...',
                value: shopState.filters.searchTerm,
                onChange: (e) => updateFilter('searchTerm', e.target.value),
                className: 'search-input'
              }),
              h('select', {
                value: shopState.filters.category,
                onChange: (e) => updateFilter('category', e.target.value),
                className: 'filter-select'
              },
                h('option', { value: 'all' }, 'All Categories'),
                h('option', { value: 'Electronics' }, 'Electronics'),
                h('option', { value: 'Education' }, 'Education'),
                h('option', { value: 'Lifestyle' }, 'Lifestyle')
              ),
              h('label', { className: 'checkbox-label' },
                h('input', {
                  type: 'checkbox',
                  checked: shopState.filters.inStockOnly,
                  onChange: (e) => updateFilter('inStockOnly', e.target.checked)
                }),
                ' In Stock Only'
              )
            )
          ),

          h('div', { className: 'products-section' },
            h('h2', null, 'Products'),
            h('div', { className: 'products-grid' },
              filteredProducts.map(product =>
                h('div', { key: product.id, className: 'product-card' },
                  h('div', { className: 'product-info' },
                    h('h3', null, product.name),
                    h('p', { className: 'category' }, product.category),
                    h('p', { className: 'price' }, '$' + product.price),
                    !product.inStock && h('span', { className: 'out-of-stock' }, 'Out of Stock')
                  ),
                  h('button', {
                    onClick: () => addToCart(product),
                    disabled: !product.inStock,
                    className: 'add-to-cart-btn'
                  }, product.inStock ? 'Add to Cart' : 'Out of Stock')
                )
              )
            )
          )
        ),

        h('div', { className: 'cart-sidebar' },
          h('div', { className: 'cart-header' },
            h('h2', null, 'Cart (' + shopState.cart.itemCount + ')'),
            h('button', { onClick: toggleCart, className: 'toggle-cart-btn' },
              shopState.ui.showCart ? 'Hide' : 'Show'
            )
          ),
          
          shopState.ui.showCart && h('div', { className: 'cart-content' },
            shopState.cart.items.length === 0 ? 
              h('p', { className: 'empty-cart' }, 'Your cart is empty') :
              h('div', null,
                h('div', { className: 'cart-items' },
                  shopState.cart.items.map(item =>
                    h('div', { key: item.id, className: 'cart-item' },
                      h('div', { className: 'item-info' },
                        h('h4', null, item.name),
                        h('p', null, '$' + item.price + ' x ' + item.quantity)
                      ),
                      h('button', {
                        onClick: () => removeFromCart(item.id),
                        className: 'remove-btn'
                      }, 'Remove')
                    )
                  )
                ),
                h('div', { className: 'cart-summary' },
                  h('div', { className: 'total' },
                    h('strong', null, 'Total: $' + shopState.cart.total)
                  ),
                  h('button', { className: 'checkout-btn' }, 'Checkout')
                )
              )
          )
        )
      ),

      h('div', { className: 'state-display' },
        h('h3', null, '🔍 Current State Structure'),
        h('pre', null, JSON.stringify(shopState, null, 2))
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ShoppingCart));
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
  align-items: flex-start;
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
  max-width: 1200px;
  width: 100%;
  margin-top: 20px;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
}

.shop-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  margin-bottom: 30px;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.filters-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
}

.filters-section h2 {
  color: #1e293b;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.search-input, .filter-select {
  padding: 10px 14px;
  border: 2px solid #e0e7ff;
  border-radius: 8px;
  font-size: 14px;
  background: white;
}

.search-input:focus, .filter-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #667eea;
}

.products-section h2 {
  color: #1e293b;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.product-info h3 {
  color: #1e293b;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.product-info .category {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 8px;
}

.product-info .price {
  color: #667eea;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.out-of-stock {
  display: inline-block;
  background: #ef4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 12px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.add-to-cart-btn:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.cart-sidebar {
  background: #f8fafc;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  overflow: hidden;
  position: sticky;
  top: 20px;
  height: fit-content;
}

.cart-header {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.1rem;
}

.toggle-cart-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.cart-content {
  padding: 20px;
}

.empty-cart {
  text-align: center;
  color: #64748b;
  padding: 40px 0;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-info h4 {
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 14px;
}

.item-info p {
  color: #64748b;
  font-size: 12px;
}

.remove-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.cart-summary {
  border-top: 2px solid #e2e8f0;
  padding-top: 20px;
}

.total {
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #1e293b;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.state-display {
  background: #1e293b;
  border-radius: 12px;
  padding: 20px;
}

.state-display h3 {
  color: #e2e8f0;
  margin-bottom: 15px;
  font-size: 16px;
}

.state-display pre {
  color: #e2e8f0;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', monospace;
  line-height: 1.5;
  overflow-x: auto;
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
}

@media (max-width: 968px) {
  .shop-layout {
    grid-template-columns: 1fr;
  }
  
  .cart-sidebar {
    position: static;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
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

  .filters-section, .product-card, .cart-sidebar {
    background: #374151;
    border-color: #4b5563;
  }

  .filters-section h2, .products-section h2 {
    color: #e5e7eb;
  }

  .product-info h3 {
    color: #e5e7eb;
  }

  .search-input, .filter-select {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .search-input:focus, .filter-select:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .checkbox-label {
    color: #e5e7eb;
  }

  .cart-header {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  }

  .cart-content {
    background: #374151;
  }

  .empty-cart {
    color: #9ca3af;
  }

  .cart-item {
    border-color: #4b5563;
  }

  .item-info h4 {
    color: #e5e7eb;
  }

  .cart-summary {
    border-color: #4b5563;
  }

  .total {
    color: #e5e7eb;
  }

  .state-display {
    background: #0f172a;
  }

  .state-display h3 {
    color: #e2e8f0;
  }

  .state-display pre {
    color: #e2e8f0;
    background: #1e293b;
  }
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State Structure Best Practices"
              description="Guidelines for maintainable state architecture"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">✅ Start Simple</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Begin with primitive values and only group data when you see a clear pattern or relationship.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">✅ Group by Update Logic</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Put data that updates together in the same object. This makes state updates more predictable.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">✅ Avoid Deep Nesting</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep nesting to 2-3 levels maximum. Deep nesting makes updates complex and error-prone.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">✅ Use Derived State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calculate values on the fly instead of storing them in state when they depend on other state values.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Your state structure should make your component's render logic simple. If you find yourself writing complex calculations in your JSX, consider restructuring your state.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Key Takeaways"
              description="Essential concepts for state structure design"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Structure Matters</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Good state structure makes your components easier to understand, debug, and maintain.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Group Related Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep related pieces of information together in logical groups that update together.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Keep it Simple</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Start simple and only add complexity when you have a clear need for it.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Match UI Structure</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Your state structure should reflect how your UI is organized and what data is rendered together.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Remember</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                State structure is not just about organizing data—it's about making your components predictable and maintainable. Invest time in designing good state structure, and your future self will thank you.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

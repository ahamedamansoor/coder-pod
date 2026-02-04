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
  GitMerge,
} from 'lucide-react';

export default function UpdatingObjectsInState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={PackageOpen}
        category="React · Managing State"
        title="Updating Objects in State"
        description="Learn how to properly update objects in React state. Understand immutability, the spread operator, and how to handle nested objects."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Treat State as Read-Only */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Treat State as Read-Only"
              description="Never mutate objects directly in state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              State can hold any kind of JavaScript value, including objects. But you should <strong>never change objects directly</strong> that you hold in state. Instead, when you want to update an object, you need to create a new one and set state to use the new object.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong - Direct Mutation</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [person, setPerson] = useState({'{'}</div>
                    <div className="pl-4">name: 'John',</div>
                    <div className="pl-4">age: 30</div>
                    <div>{'}'});</div>
                    <div className="mt-2"></div>
                    <div className="text-red-600 dark:text-red-400">// ❌ This won't trigger a re-render!</div>
                    <div className="text-red-600 dark:text-red-400">person.age = 31;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React doesn't detect the change because the object reference is the same.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right - Create New Object</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [person, setPerson] = useState({'{'}</div>
                    <div className="pl-4">name: 'John',</div>
                    <div className="pl-4">age: 30</div>
                    <div>{'}'});</div>
                    <div className="mt-2"></div>
                    <div className="text-green-600 dark:text-green-400">// ✅ Creates new object</div>
                    <div className="text-green-600 dark:text-green-400">setPerson({'{'} ...person, age: 31 {'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Creates a new object with updated values, triggering a re-render.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Why Mutation Doesn't Work</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                React compares the old and new state values by reference. If you mutate an object, the reference stays the same, so React thinks nothing changed!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Spread Operator */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Copy className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Using the Spread Operator"
              description="Copy objects and update specific properties"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">...</code> spread operator lets you copy all properties from an existing object into a new object, then override specific properties.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">How Spread Works</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Original Object</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        person = {'{'} name: 'Alice', age: 25, city: 'NYC' {'}'}
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
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Spread & Override</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        {'{'} ...person, age: 26 {'}'}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Copies all properties, then sets age to 26
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
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">New Object Created</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        {'{'} name: 'Alice', age: 26, city: 'NYC' {'}'}
                      </div>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                      ✅ Different reference - React detects change!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">💡 Order Matters!</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-900 p-3 rounded">
                  <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-1">
                    {'{'} ...person, age: 26 {'}'}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Spread first, override after ✅</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded">
                  <div className="font-mono text-xs text-red-600 dark:text-red-400 mb-1">
                    {'{'} age: 26, ...person {'}'}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Override gets replaced ❌</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See It In Action"
            description="Update object properties and see the changes"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Update Object Properties"
            description="Try updating different properties"
            colorTheme="cyan"
            react={`function PersonForm() {
  const [person, setPerson] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    age: 30
  });

  return (
    <div className="container">
      <h1>👤 Update Person Info</h1>
      
      <div className="display-card">
        <h3>Current Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Name:</span>
            <span className="value">{person.firstName} {person.lastName}</span>
          </div>
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">{person.email}</span>
          </div>
          <div className="info-item">
            <span className="label">Age:</span>
            <span className="value">{person.age}</span>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="input-group">
          <label>First Name</label>
          <input
            value={person.firstName}
            onChange={(e) => setPerson({
              ...person,
              firstName: e.target.value
            })}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            value={person.lastName}
            onChange={(e) => setPerson({
              ...person,
              lastName: e.target.value
            })}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            value={person.email}
            onChange={(e) => setPerson({
              ...person,
              email: e.target.value
            })}
          />
        </div>

        <button 
          className="btn-age"
          onClick={() => setPerson({
            ...person,
            age: person.age + 1
          })}
        >
          🎂 Increment Age
        </button>
      </div>

      <div className="note">
        💡 Each update creates a new object using the spread operator!
      </div>
    </div>
  );
}

ReactDOM.render(<PersonForm />, document.getElementById('root'));`}
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

  function PersonForm() {
    const [person, setPerson] = useState({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      age: 30
    });

    return h('div', { className: 'container' },
      h('h1', null, '👤 Update Person Info'),
      
      h('div', { className: 'display-card' },
        h('h3', null, 'Current Information'),
        h('div', { className: 'info-grid' },
          h('div', { className: 'info-item' },
            h('span', { className: 'label' }, 'Name:'),
            h('span', { className: 'value' }, person.firstName + ' ' + person.lastName)
          ),
          h('div', { className: 'info-item' },
            h('span', { className: 'label' }, 'Email:'),
            h('span', { className: 'value' }, person.email)
          ),
          h('div', { className: 'info-item' },
            h('span', { className: 'label' }, 'Age:'),
            h('span', { className: 'value' }, person.age)
          )
        )
      ),

      h('div', { className: 'form-section' },
        h('div', { className: 'input-group' },
          h('label', null, 'First Name'),
          h('input', {
            value: person.firstName,
            onChange: (e) => setPerson({
              ...person,
              firstName: e.target.value
            })
          })
        ),

        h('div', { className: 'input-group' },
          h('label', null, 'Last Name'),
          h('input', {
            value: person.lastName,
            onChange: (e) => setPerson({
              ...person,
              lastName: e.target.value
            })
          })
        ),

        h('div', { className: 'input-group' },
          h('label', null, 'Email'),
          h('input', {
            value: person.email,
            onChange: (e) => setPerson({
              ...person,
              email: e.target.value
            })
          })
        ),

        h('button', {
          className: 'btn-age',
          onClick: () => setPerson({
            ...person,
            age: person.age + 1
          })
        }, '🎂 Increment Age')
      ),

      h('div', { className: 'note' },
        '💡 Each update creates a new object using the spread operator!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(PersonForm));
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.display-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.display-card h3 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
}

.info-grid {
  display: grid;
  gap: 12px;
}

.info-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
}

.label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 600;
}

.value {
  color: white;
  font-size: 15px;
  font-weight: 700;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
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
  padding: 12px 16px;
  border: 2px solid #e0e7ff;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.btn-age {
  padding: 15px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-age:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-age:active {
  transform: translateY(0);
}

.note {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
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

  .input-group input {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input-group input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .note {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Updating Nested Objects */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Updating Nested Objects"
              description="Handle objects within objects"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Objects can be nested inside other objects. When you want to update a nested object, you need to create copies from the point where you're updating upwards.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Example: Nested Object Structure</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`const [person, setPerson] = useState({
  name: 'Alice',
  address: {
    city: 'New York',
    country: 'USA'
  }
});`}</code>
                </pre>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <h5 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Wrong - Only Copies Top Level</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-2">
                    <div className="text-red-600 dark:text-red-400">
                      setPerson({'{'} ...person, address.city: 'Boston' {'}'});
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This syntax is invalid and won't work!
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Right - Copy Nested Object Too</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-2">
                    <div className="text-green-600 dark:text-green-400">
                      <div>setPerson({'{'}</div>
                      <div className="pl-4">...person,</div>
                      <div className="pl-4">address: {'{'}</div>
                      <div className="pl-8">...person.address,</div>
                      <div className="pl-8">city: 'Boston'</div>
                      <div className="pl-4">{'}'}</div>
                      <div>{'}'});</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Creates new objects at both levels!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Visual Breakdown</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                  <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Step 1: Copy outer object</p>
                  <code className="text-xs font-mono text-slate-700 dark:text-slate-300">{'{'} ...person, ... {'}'}</code>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-indigo-500" />
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">Step 2: Copy nested object</p>
                  <code className="text-xs font-mono text-slate-700 dark:text-slate-300">address: {'{'} ...person.address, ... {'}'}</code>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-indigo-500" />
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Step 3: Update the property</p>
                  <code className="text-xs font-mono text-slate-700 dark:text-slate-300">city: 'Boston'</code>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Deep Nesting Gets Repetitive</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                If your state is deeply nested, updating it can become verbose. Consider flattening your state or using a library like Immer!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Nested Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<GitMerge className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Nested Object Updates"
            description="Practice updating nested properties"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Update Nested Address"
            description="Change city and country in a nested object"
            colorTheme="cyan"
            react={`function NestedForm() {
  const [person, setPerson] = React.useState({
    name: 'Alice Johnson',
    address: {
      city: 'New York',
      country: 'USA',
      zipCode: '10001'
    }
  });

  return (
    <div className="container">
      <h1>🏠 Update Address</h1>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">👤</div>
          <h2>{person.name}</h2>
        </div>
        
        <div className="address-display">
          <div className="address-icon">📍</div>
          <div className="address-text">
            <div className="city">{person.address.city}</div>
            <div className="country">{person.address.country}</div>
            <div className="zip">{person.address.zipCode}</div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="input-group">
          <label>Name</label>
          <input
            value={person.name}
            onChange={(e) => setPerson({
              ...person,
              name: e.target.value
            })}
          />
        </div>

        <div className="nested-section">
          <h3>📮 Address Details</h3>
          
          <div className="input-group">
            <label>City</label>
            <input
              value={person.address.city}
              onChange={(e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  city: e.target.value
                }
              })}
            />
          </div>

          <div className="input-group">
            <label>Country</label>
            <input
              value={person.address.country}
              onChange={(e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  country: e.target.value
                }
              })}
            />
          </div>

          <div className="input-group">
            <label>Zip Code</label>
            <input
              value={person.address.zipCode}
              onChange={(e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  zipCode: e.target.value
                }
              })}
            />
          </div>
        </div>
      </div>

      <div className="note">
        💡 Notice how we spread both person and person.address!
      </div>
    </div>
  );
}

ReactDOM.render(<NestedForm />, document.getElementById('root'));`}
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

  function NestedForm() {
    const [person, setPerson] = useState({
      name: 'Alice Johnson',
      address: {
        city: 'New York',
        country: 'USA',
        zipCode: '10001'
      }
    });

    return h('div', { className: 'container' },
      h('h1', null, '🏠 Update Address'),
      
      h('div', { className: 'profile-card' },
        h('div', { className: 'profile-header' },
          h('div', { className: 'avatar' }, '👤'),
          h('h2', null, person.name)
        ),
        
        h('div', { className: 'address-display' },
          h('div', { className: 'address-icon' }, '📍'),
          h('div', { className: 'address-text' },
            h('div', { className: 'city' }, person.address.city),
            h('div', { className: 'country' }, person.address.country),
            h('div', { className: 'zip' }, person.address.zipCode)
          )
        )
      ),

      h('div', { className: 'form-section' },
        h('div', { className: 'input-group' },
          h('label', null, 'Name'),
          h('input', {
            value: person.name,
            onChange: (e) => setPerson({
              ...person,
              name: e.target.value
            })
          })
        ),

        h('div', { className: 'nested-section' },
          h('h3', null, '📮 Address Details'),
          
          h('div', { className: 'input-group' },
            h('label', null, 'City'),
            h('input', {
              value: person.address.city,
              onChange: (e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  city: e.target.value
                }
              })
            })
          ),

          h('div', { className: 'input-group' },
            h('label', null, 'Country'),
            h('input', {
              value: person.address.country,
              onChange: (e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  country: e.target.value
                }
              })
            })
          ),

          h('div', { className: 'input-group' },
            h('label', null, 'Zip Code'),
            h('input', {
              value: person.address.zipCode,
              onChange: (e) => setPerson({
                ...person,
                address: {
                  ...person.address,
                  zipCode: e.target.value
                }
              })
            })
          )
        )
      ),

      h('div', { className: 'note' },
        '💡 Notice how we spread both person and person.address!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(NestedForm));
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
  max-width: 600px;
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
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  backdrop-filter: blur(10px);
}

.profile-header h2 {
  color: white;
  font-size: 22px;
  margin: 0;
}

.address-display {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  backdrop-filter: blur(10px);
}

.address-icon {
  font-size: 30px;
}

.address-text {
  flex: 1;
}

.city {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.country {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  margin-bottom: 4px;
}

.zip {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.nested-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #06b6d4;
}

.nested-section h3 {
  color: #0891b2;
  font-size: 16px;
  margin-bottom: 15px;
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

.nested-section .input-group label {
  color: #0891b2;
}

.input-group input {
  padding: 12px 16px;
  border: 2px solid #e0e7ff;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.nested-section .input-group input {
  border-color: #bae6fd;
}

.nested-section .input-group input:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

.note {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
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

  .nested-section {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .nested-section h3 {
    color: #60a5fa;
  }

  .input-group label {
    color: #60a5fa;
  }

  .nested-section .input-group label {
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

  .nested-section .input-group input {
    background: #1e293b;
    border-color: #334155;
  }

  .nested-section .input-group input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .note {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Use Immer for Simpler Updates */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Use Immer for Simpler Updates"
              description="Write code that 'mutates' but stays immutable"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If your state is deeply nested, you might want to consider <strong>flattening it</strong>. But if you don't want to restructure, React recommends using <strong>Immer</strong>, a popular library that lets you write code using convenient mutating syntax.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                    Without Immer
                  </Badge>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>setPerson({'{'}</div>
                    <div className="pl-2">...person,</div>
                    <div className="pl-2">address: {'{'}</div>
                    <div className="pl-4">...person.address,</div>
                    <div className="pl-4">city: 'Boston'</div>
                    <div className="pl-2">{'}'}</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  Verbose and repetitive for deep nesting
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                    With Immer
                  </Badge>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>updatePerson(draft =&gt; {'{'}</div>
                    <div className="pl-2">draft.address.city = 'Boston';</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  Concise and easy to read!
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">How to Use Immer</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Install Immer</p>
                    <code className="text-xs bg-white dark:bg-gray-900 px-3 py-1.5 rounded border border-emerald-200 dark:border-emerald-700">
                      npm install use-immer
                    </code>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0 text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Replace useState with useImmer</p>
                    <div className="bg-white dark:bg-gray-900 p-3 rounded border border-emerald-200 dark:border-emerald-700 font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div className="text-gray-500 dark:text-gray-400">// Before:</div>
                        <div>const [person, setPerson] = useState({'{'} ... {'}'});</div>
                        <div className="mt-2 text-gray-500 dark:text-gray-400">// After:</div>
                        <div>const [person, updatePerson] = useImmer({'{'} ... {'}'});</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Write mutating code!</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Immer creates a copy behind the scenes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Recommended by React</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                Immer is a popular choice for reducing boilerplate when updating nested state. It's safe, concise, and officially recommended by the React team!
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
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Never Mutate State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always create a new object instead of modifying the existing one directly.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Spread Operator</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">{'{'} ...obj, key: value {'}'}</code> creates a copy with updates.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Copy All Levels</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For nested objects, spread at every level you're updating.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Consider Immer</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For complex nested state, use Immer to simplify your code.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Think Immutably</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Treating state as read-only is a fundamental React concept. It ensures predictable updates and helps React optimize performance!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

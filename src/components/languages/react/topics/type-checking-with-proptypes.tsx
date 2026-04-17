'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Shield, AlertTriangle, Code } from 'lucide-react';

export default function TypeCheckingWithPropTypes() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="React · Advanced Patterns"
        title="Type Checking with PropTypes"
        description="Add runtime type validation to your React components using PropTypes for better debugging and developer experience."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is PropTypes?"
              description="Runtime type checking for props"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>PropTypes</strong> is a library for runtime type checking in React. It validates prop types during development and shows warnings in the console when types don't match!
            </p>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">TypeScript is Preferred!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                For new projects, use TypeScript for compile-time type checking. PropTypes is mainly for legacy projects or quick prototypes.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Advantages</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Catches bugs early</li>
                  <li>• Documents expected props</li>
                  <li>• Console warnings in dev</li>
                  <li>• No build step needed</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Limitations</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Runtime only (not compile-time)</li>
                  <li>• Removed in production</li>
                  <li>• Extra bundle size</li>
                  <li>• TypeScript is better</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="PropTypes Validation - Live Demo"
            description="See type checking in action"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="PropTypes Type Checker"
            description="Try different prop types and see validation in action!"
            colorTheme="green"
            react={`// Note: PropTypes is for React validation
// This demo simulates the concept

function UserCard({ name, age, email, role, isActive }) {
  // Manual type checking (simulating PropTypes behavior)
  const warnings = [];
  
  if (typeof name !== 'string') warnings.push('name should be string');
  if (typeof age !== 'number') warnings.push('age should be number');
  if (email && typeof email !== 'string') warnings.push('email should be string');
  if (typeof isActive !== 'boolean') warnings.push('isActive should be boolean');
  
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email || 'Not provided'}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Status:</strong> {isActive ? '🟢 Active' : '⚫ Inactive'}</p>
      
      {warnings.length > 0 && (
        <div className="warnings">
          <strong>⚠️ PropTypes Warnings:</strong>
          {warnings.map((w, i) => (
            <div key={i} className="warning-item">{w}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [config, setConfig] = React.useState({
    useCorrectTypes: true
  });

  // Correct types
  const correctProps = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com',
    role: 'Developer',
    isActive: true
  };

  // Wrong types (to trigger warnings)
  const wrongProps = {
    name: 'Jane Smith',
    age: '30',  // ❌ String instead of number
    email: 'jane@example.com',
    role: 'Designer',
    isActive: 'yes'  // ❌ String instead of boolean
  };

  const props = config.useCorrectTypes ? correctProps : wrongProps;

  return (
    <div className="demo-app">
      <div className="controls">
        <h2>PropTypes Validation Demo</h2>
        <p className="subtitle">Toggle to see type validation</p>
        
        <button 
          onClick={() => setConfig({ useCorrectTypes: !config.useCorrectTypes })}
          className="toggle-btn"
        >
          {config.useCorrectTypes ? '✅ Correct Types' : '❌ Wrong Types'}
        </button>
      </div>

      <div className="props-display">
        <h3>Current Props:</h3>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>

      <UserCard {...props} />

      <div className="info-box">
        <p><strong>💡 How PropTypes Works:</strong></p>
        <ul>
          <li>Validates prop types at runtime</li>
          <li>Shows warnings in console (dev mode)</li>
          <li>Helps catch bugs early</li>
          <li>Documents expected prop types</li>
        </ul>
      </div>
    </div>
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

.demo-app {
  max-width: 700px;
  margin: 0 auto;
}

.controls {
  background: white;
  padding: 30px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls h2 {
  color: #10b981;
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 20px;
}

.toggle-btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.props-display {
  background: white;
  padding: 20px;
  border-top: 1px solid #e5e7eb;
}

.props-display h3 {
  color: #1f2937;
  margin-bottom: 10px;
}

.props-display pre {
  background: #f9fafb;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
  color: #374151;
}

.user-card {
  background: white;
  padding: 30px;
  border-top: 1px solid #e5e7eb;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.user-card h3 {
  color: #10b981;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.user-card p {
  color: #4b5563;
  margin: 8px 0;
  font-size: 15px;
}

.user-card strong {
  color: #1f2937;
}

.warnings {
  margin-top: 20px;
  padding: 15px;
  background: #fef2f2;
  border: 2px solid #ef4444;
  border-radius: 12px;
}

.warnings strong {
  display: block;
  color: #dc2626;
  margin-bottom: 10px;
  font-size: 16px;
}

.warning-item {
  padding: 8px 12px;
  background: white;
  border-left: 3px solid #ef4444;
  margin: 5px 0;
  font-size: 14px;
  color: #dc2626;
  font-family: monospace;
}

.info-box {
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box p {
  color: #10b981;
  font-weight: 600;
  margin-bottom: 10px;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  padding: 8px 0;
  color: #4b5563;
  font-size: 14px;
}

.info-box li:before {
  content: "✓ ";
  color: #10b981;
  font-weight: bold;
  margin-right: 8px;
}

@media (prefers-color-scheme: dark) {
  .controls,
  .props-display,
  .user-card,
  .info-box {
    background: #1f2937;
  }

  .controls h2 {
    color: #6ee7b7;
  }

  .subtitle {
    color: #9ca3af;
  }

  .props-display h3 {
    color: #e5e7eb;
  }

  .props-display pre {
    background: #111827;
    color: #9ca3af;
  }

  .user-card h3 {
    color: #6ee7b7;
  }

  .user-card p {
    color: #d1d5db;
  }

  .user-card strong {
    color: #f3f4f6;
  }

  .warnings {
    background: #7f1d1d;
    border-color: #ef4444;
  }

  .warning-item {
    background: #991b1b;
    color: #fca5a5;
  }

  .info-box p {
    color: #6ee7b7;
  }

  .info-box li {
    color: #d1d5db;
  }
}`}
          />
        </div>

        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Available PropTypes"
              description="All built-in validators"
              size="lg"
            />

            <CodeSnippetWithOutput
              title="PropTypes Reference"
              description="Common type validators"
              language="javascript"
              colorTheme="blue"
              code={`import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // Basic types
  optionalString: PropTypes.string,
  optionalNumber: PropTypes.number,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalSymbol: PropTypes.symbol,
  optionalObject: PropTypes.object,
  optionalArray: PropTypes.array,

  // Anything that can be rendered
  optionalNode: PropTypes.node,
  
  // React element
  optionalElement: PropTypes.element,
  
  // Instance of a class
  optionalMessage: PropTypes.instanceOf(Message),
  
  // Enum (one of)
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  
  // One of types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  
  // Array of specific type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  
  // Object with property types
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  
  // Object with specific shape
  optionalObjectWithShape: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  
  // Object with exact shape (strict)
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  
  // Required prop
  requiredFunc: PropTypes.func.isRequired,
  
  // Custom validator
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error('Invalid prop');
    }
  }
};`}
              output={[
                '📚 Comprehensive type validation',
                '',
                'Basic types:',
                '• string, number, bool, func',
                '• array, object, symbol',
                '',
                'Advanced:',
                '• oneOf, oneOfType',
                '• arrayOf, objectOf',
                '• shape, exact',
                '• instanceOf',
                '',
                '✅ Add .isRequired for required props'
              ]}
            />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Complex Shapes"
            description="Validating nested objects and arrays"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Advanced PropTypes"
            description="Complex data structures"
            language="javascript"
            colorTheme="purple"
            code={`import PropTypes from 'prop-types';

// Complex user object with nested data
function UserProfile({ user, settings, onUpdate }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Theme: {settings.theme}</p>
    </div>
  );
}

UserProfile.propTypes = {
  // Nested object with shape
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zipCode: PropTypes.string
    })
  }).isRequired,
  
  // Object with exact properties
  settings: PropTypes.exact({
    theme: PropTypes.oneOf(['light', 'dark']),
    notifications: PropTypes.bool
  }),
  
  // Function with specific signature (documented)
  onUpdate: PropTypes.func.isRequired
};

// Array of objects
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool
    })
  ).isRequired
};`}
            output={[
              '✅ shape() - Object with specific properties',
              '✅ exact() - Object with ONLY these properties',
              '✅ arrayOf() - Array of specific type',
              '',
              'Nested validation:',
              '• Validates deep object structures',
              '• Catches missing required fields',
              '• Documents complex prop structures',
              '',
              '💡 Great for component documentation!'
            ]}
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
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Runtime Validation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  PropTypes validates props during development only
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Console Warnings</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shows helpful errors in dev console when types mismatch
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Documentation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  PropTypes serve as inline documentation for props
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Use TypeScript</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For new projects, TypeScript provides better type safety
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Modern Alternative!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                While PropTypes is useful, TypeScript offers compile-time type checking, better IDE support, and no runtime overhead. Consider TypeScript for new React projects!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

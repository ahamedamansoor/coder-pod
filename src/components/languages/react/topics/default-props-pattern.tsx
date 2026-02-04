'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Settings, Code } from 'lucide-react';

export default function DefaultPropsPattern() {
  const destructuringCode = `// ✅ BEST: Destructuring with default values (Modern)
function Button({ text = 'Click me', color = 'blue', disabled = false }) {
  return (
    <button 
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Usage:
<Button />  
// Uses all defaults: text="Click me", color="blue", disabled=false

<Button text="Submit" />  
// Overrides text, uses default color and disabled

<Button text="Delete" color="red" disabled={true} />  
// All props provided, no defaults used`;

  const objectSyntaxCode = `// Default values with object destructuring
function UserCard({
  name = 'Anonymous',
  age = 0,
  role = 'User',
  avatar = '/default-avatar.png',
  isOnline = false
}) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <span>{isOnline ? '🟢 Online' : '⚫ Offline'}</span>
    </div>
  );
}

// Different usage scenarios:
<UserCard />  
// All defaults

<UserCard name="John" age={25} />  
// Partial props

<UserCard 
  name="Jane" 
  age={30} 
  role="Admin" 
  avatar="/jane.jpg" 
  isOnline={true} 
/>
// All props provided`;

  const complexDefaultsCode = `// Complex default values (objects, arrays, functions)
function DataTable({
  data = [],  // Empty array default
  columns = ['Name', 'Email', 'Status'],  // Array default
  config = { sortable: true, paginated: false },  // Object default
  onRowClick = () => console.log('Row clicked'),  // Function default
  pageSize = 10
}) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.slice(0, pageSize).map((row, i) => (
          <tr key={i} onClick={() => onRowClick(row)}>
            {columns.map(col => <td key={col}>{row[col]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage:
<DataTable />  // Works with empty data
<DataTable data={users} />  // Custom data, default columns
<DataTable 
  data={users} 
  columns={['ID', 'Username']} 
  onRowClick={(row) => alert(row.ID)}
/>`;

  const legacyCode = `// ⚠️ LEGACY: Using defaultProps (Old way - still works)
function Button(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
}

// Define defaults separately
Button.defaultProps = {
  text: 'Click me',
  color: 'blue',
  disabled: false
};

// Note: This works but is outdated
// Modern React prefers destructuring with defaults`;

  const nullishCode = `// Handling null/undefined vs false/0
function Counter({ 
  count = 0,  // Default when undefined
  showLabel = true 
}) {
  return (
    <div>
      {showLabel && <label>Count:</label>}
      <span>{count}</span>
    </div>
  );
}

// ⚠️ Watch out for falsy values!
<Counter count={0} />  
// count is 0 (not default), because 0 is provided

<Counter count={null} />  
// count is null (not default), because null is provided

<Counter />  
// count is 0 (default), because undefined

// Use nullish coalescing for null/undefined only:
function Component({ value }) {
  const actualValue = value ?? 'default';  // Only defaults if null/undefined
  // vs
  const wrongValue = value || 'default';  // Defaults if 0, false, '', null, undefined
}`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Settings}
        category="React · Advanced Patterns"
        title="Default Props"
        description="Learn modern approaches to setting default values for component props in React, from simple destructuring to complex defaults."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Default Props?"
              description="Fallback values when props aren't provided"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Default props</strong> provide fallback values for component props when they're not specified. This makes components more flexible and prevents errors from missing props!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Benefits</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Prevent undefined errors</li>
                  <li>• Make props optional</li>
                  <li>• Sensible fallback values</li>
                  <li>• Cleaner component usage</li>
                  <li>• Self-documenting code</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">💡 Use Cases</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Configuration options</li>
                  <li>• UI component variants</li>
                  <li>• Optional callbacks</li>
                  <li>• Default text/labels</li>
                  <li>• Initial states</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Modern Approach!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Modern React uses destructuring with default values instead of the old defaultProps syntax!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="✅ Modern Way: Destructuring"
            description="The recommended approach"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Default Props - Live Demo"
            description="See default values in action! Hover to see what props each button uses"
            colorTheme="green"
            react={`function Button({ 
  text = 'Click me', 
  color = '#3b82f6', 
  size = 'medium',
  disabled = false 
}) {
  const sizes = {
    small: { padding: '8px 16px', fontSize: '14px' },
    medium: { padding: '12px 24px', fontSize: '16px' },
    large: { padding: '16px 32px', fontSize: '18px' }
  };

  return (
    <button
      style={{
        ...sizes[size],
        backgroundColor: disabled ? '#9ca3af' : color,
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        opacity: disabled ? 0.5 : 1
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <div className="demo-app">
      <h2>⚙️ Default Props Demo</h2>
      <p className="subtitle">See how defaults fill in missing props</p>

      <div className="examples">
        <div className="example-item">
          <code className="props-display">&lt;Button /&gt;</code>
          <p className="desc">All defaults used</p>
          <Button />
        </div>

        <div className="example-item">
          <code className="props-display">&lt;Button text="Submit" /&gt;</code>
          <p className="desc">Only text provided</p>
          <Button text="Submit" />
        </div>

        <div className="example-item">
          <code className="props-display">&lt;Button text="Delete" color="#ef4444" /&gt;</code>
          <p className="desc">Custom text & color</p>
          <Button text="Delete" color="#ef4444" />
        </div>

        <div className="example-item">
          <code className="props-display">&lt;Button size="small" /&gt;</code>
          <p className="desc">Small size variant</p>
          <Button size="small" />
        </div>

        <div className="example-item">
          <code className="props-display">&lt;Button size="large" color="#10b981" /&gt;</code>
          <p className="desc">Large green button</p>
          <Button size="large" color="#10b981" />
        </div>

        <div className="example-item">
          <code className="props-display">&lt;Button disabled={'{true}'} /&gt;</code>
          <p className="desc">Disabled state</p>
          <Button disabled={true} />
        </div>
      </div>

      <div className="info-box">
        <p>💡 Each button uses defaults for props not provided!</p>
        <ul>
          <li>text: "Click me"</li>
          <li>color: "#3b82f6" (blue)</li>
          <li>size: "medium"</li>
          <li>disabled: false</li>
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
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.demo-app {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #6366f1;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.example-item {
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.props-display {
  display: block;
  font-size: 12px;
  color: #6366f1;
  background: #eef2ff;
  padding: 6px 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  overflow-x: auto;
  white-space: nowrap;
}

.desc {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 15px;
}

.example-item button {
  width: 100%;
}

.info-box {
  padding: 20px;
  background: #eef2ff;
  border-radius: 12px;
  border: 2px solid #6366f1;
}

.info-box p {
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 10px;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: #4b5563;
  font-size: 14px;
  padding: 4px 0;
  font-family: monospace;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  }

  .demo-app {
    background: #1f2937;
  }

  h2 {
    color: #a5b4fc;
  }

  .subtitle {
    color: #9ca3af;
  }

  .example-item {
    background: #111827;
    border-color: #374151;
  }

  .props-display {
    background: #1e1b4b;
    color: #a5b4fc;
  }

  .desc {
    color: #9ca3af;
  }

  .info-box {
    background: #1e1b4b;
    border-color: #a5b4fc;
  }

  .info-box p {
    color: #a5b4fc;
  }

  .info-box li {
    color: #d1d5db;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Multiple Default Props"
            description="Handling many props with defaults"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Complex Component with Defaults"
            description="Multiple props with sensible defaults"
            language="javascript"
            colorTheme="blue"
            code={objectSyntaxCode}
            output={[
              '<UserCard />',
              '→ Shows: Anonymous, Age: 0, Role: User',
              '→ Default avatar, Offline',
              '',
              '<UserCard name="John" age={25} />',
              '→ Shows: John, Age: 25, Role: User',
              '→ Default avatar, Offline',
              '',
              '✅ Flexible: Provide only what you need',
              '✅ Safe: Never undefined values'
            ]}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Complex Default Values"
            description="Arrays, objects, and functions"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Advanced Defaults"
            description="Complex types as default values"
            language="javascript"
            colorTheme="purple"
            code={complexDefaultsCode}
            output={[
              '✅ Empty array default:',
              '→ Component renders even with no data',
              '',
              '✅ Array default for columns:',
              '→ Works out of the box',
              '',
              '✅ Object default for config:',
              '→ Configuration options included',
              '',
              '✅ Function default for callbacks:',
              '→ No errors if callback not provided',
              '',
              '💡 Prevents "cannot read property" errors'
            ]}
          />
        </div>

        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="⚠️ Legacy: defaultProps"
              description="Old syntax (still works but not recommended)"
              size="lg"
            />
            <CodeSnippetWithOutput
              title="Old defaultProps Syntax"
              description="Legacy approach - avoid in new code"
              language="javascript"
              colorTheme="orange"
              code={legacyCode}
              output={[
                '⚠️ This is the OLD way',
                '✅ Still works in React',
                '❌ Not recommended for new code',
                '❌ Verbose and separated from component',
                '',
                'Why modern is better:',
                '• Inline with parameters',
                '• Better TypeScript support',
                '• Standard JavaScript',
                '• Less code to write',
                '',
                '💡 Use destructuring instead!'
              ]}
            />
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="⚠️ Gotcha: Falsy Values"
              description="Watch out for 0, false, empty string"
              size="lg"
            />
            <CodeSnippetWithOutput
              title="Falsy Values vs Undefined"
              description="Understanding when defaults apply"
              language="javascript"
              colorTheme="red"
              code={nullishCode}
              output={[
                '⚠️ Default only applies if prop is undefined',
                '',
                '<Counter count={0} />',
                '→ count is 0 (NOT default)',
                '→ 0 is a valid value!',
                '',
                '<Counter count={false} />',
                '→ count is false (NOT default)',
                '',
                '<Counter />',
                '→ count is 0 (default)',
                '→ prop is undefined',
                '',
                '💡 Use ?? for null/undefined only',
                '💡 Use || to treat falsy as default'
              ]}
            />
          </CardContent>
        </Card>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use Destructuring</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Modern approach: inline default values in function parameters
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🎯 Sensible Defaults</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Choose defaults that make sense for most use cases
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">⚠️ Watch Falsy Values</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  0, false, '' are valid - only undefined triggers defaults
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">📚 Document Defaults</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Defaults serve as documentation for expected values
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Always use destructuring with default values in modern React. It's cleaner, more readable, and works great with TypeScript!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

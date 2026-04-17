'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Shield, ArrowRight, Database, RefreshCw } from 'lucide-react';

export default function ControlledComponentsPattern() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="React · Advanced Patterns"
        title="Controlled Components"
        description="Master the controlled components pattern where React state is the single source of truth for form inputs."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Controlled Components */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Controlled Components?"
              description="React controls the input value"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A <strong>controlled component</strong> is a form element whose value is controlled by React state. The input's value is always driven by React state, making it the <strong>single source of truth</strong>!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Flow Diagram</h4>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="px-4 py-3 bg-green-100 dark:bg-green-900 rounded-lg font-semibold text-green-700 dark:text-green-300">
                  User Types
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="px-4 py-3 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold text-blue-700 dark:text-blue-300">
                  onChange Event
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="px-4 py-3 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold text-purple-700 dark:text-purple-300">
                  Update State
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="px-4 py-3 bg-orange-100 dark:bg-orange-900 rounded-lg font-semibold text-orange-700 dark:text-orange-300">
                  Re-render
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="px-4 py-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg font-semibold text-cyan-700 dark:text-cyan-300">
                  Input Shows New Value
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Advantages</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Single source of truth</li>
                  <li>• Easy validation</li>
                  <li>• Conditional rendering</li>
                  <li>• Form data readily available</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Considerations</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• More boilerplate code</li>
                  <li>• Requires onChange handler</li>
                  <li>• Re-renders on every keystroke</li>
                  <li>• Slight performance overhead</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Recommended Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Controlled components are the preferred way to handle forms in React for most use cases!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Controlled Input"
            description="State drives the value"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Controlled Form - Live Demo"
            description="Try typing! State updates on every keystroke"
            colorTheme="green"
            react={`function ControlledForm() {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="controlled-form">
      <h2>✅ Controlled Form</h2>
      <p className="subtitle">React state controls every input</p>
      
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      
      <div className="form-group">
        <label>Age</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
      </div>

      <div className="state-display">
        <strong>🔍 Current State:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ControlledForm />);`}
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.controlled-form {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #10b981;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.state-display {
  margin-top: 30px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px solid #10b981;
}

.state-display strong {
  display: block;
  margin-bottom: 10px;
  color: #10b981;
}

pre {
  font-size: 13px;
  color: #374151;
  overflow-x: auto;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .controlled-form {
    background: #1f2937;
  }

  h2 {
    color: #6ee7b7;
  }

  .subtitle {
    color: #9ca3af;
  }

  label {
    color: #e5e7eb;
  }

  input {
    background: #111827;
    border-color: #374151;
    color: #f3f4f6;
  }

  input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .state-display {
    background: #111827;
    border-color: #6ee7b7;
  }

  .state-display strong {
    color: #6ee7b7;
  }

  pre {
    color: #9ca3af;
  }
}`}
          />
        </div>

        {/* Advanced Patterns */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Advanced Patterns"
              description="Common controlled component scenarios"
              size="lg"
            />

            <CodeSnippetWithOutput
              title="Controlled with Validation"
              description="Validate input in real-time"
              language="javascript"
              colorTheme="purple"
              code={`function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validate in real-time
    if (value && !/\\S+@\\S+\\.\\S+/.test(value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}

// Controlled with transformation
function UppercaseInput() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // Transform to uppercase automatically
    setValue(e.target.value.toUpperCase());
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

// Controlled with character limit
function LimitedInput() {
  const [text, setText] = useState('');
  const maxLength = 100;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
      />
      <p>{text.length} / {maxLength}</p>
    </div>
  );
}`}
              output={[
                '✅ Real-time validation',
                '✅ Transform input automatically',
                '✅ Enforce character limits',
                '',
                'Email validation:',
                '> Invalid email format (until valid)',
                '',
                'Uppercase:',
                '> Type "hello" → Shows "HELLO"',
                '',
                'Character limit:',
                '> Stops accepting after 100 chars'
              ]}
            />
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">State Controlled</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Input value is always derived from React state</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">onChange Required</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Must provide onChange to update state</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Single Source</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">State is the single source of truth</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Powerful</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Enables validation, transformation, limits</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

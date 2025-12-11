'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Unlock, Database, AlertTriangle } from 'lucide-react';

export default function UncontrolledComponentsPattern() {
  const basicCode = `function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} defaultValue="John" />
      <input ref={emailRef} defaultValue="john@example.com" />
      <button type="submit">Submit</button>
    </form>
  );
}`;

  const fileCode = `function FileUpload() {
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    console.log('File:', file.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} />
      <button type="submit">Upload</button>
    </form>
  );
}`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Unlock}
        category="React · Advanced Patterns"
        title="Uncontrolled Components"
        description="Learn when and how to use uncontrolled components where the DOM handles form data instead of React state."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Unlock className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Uncontrolled Components?"
              description="DOM manages the state"
              size="lg"
            />
            <p className="text-base text-gray-700 dark:text-gray-300">
              An <strong>uncontrolled component</strong> stores its own state internally in the DOM. You access the value using a <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">ref</code> when needed!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Use Cases</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• File inputs</li>
                  <li>• Simple forms</li>
                  <li>• Integrating with non-React code</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Limitations</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• No real-time validation</li>
                  <li>• Less control over input</li>
                  <li>• Can't conditionally disable</li>
                  <li>• Harder to test</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Basic Uncontrolled"
            description="Using refs to access values"
            size="lg"
          />
          <FrontendCodePreview
            title="Uncontrolled Form - Live Demo"
            description="Type and submit! No re-renders until you click submit"
            colorTheme="green"
            react={`function UncontrolledForm() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const [submitted, setSubmitted] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value
    };
    setSubmitted(data);
  };

  const handleReset = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    setSubmitted(null);
  };

  return (
    <div className="uncontrolled-form">
      <h2>⚡ Uncontrolled Form</h2>
      <p className="subtitle">DOM manages state, React reads on submit</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            ref={nameRef}
            defaultValue="John Doe"
            placeholder="Enter name"
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            ref={emailRef}
            defaultValue="john@example.com"
            placeholder="Enter email"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit Form
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>

      {submitted && (
        <div className="submitted-data">
          <strong>📤 Submitted Data:</strong>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
          <p className="note">💡 Values accessed only on submit!</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UncontrolledForm />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.uncontrolled-form {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #f59e0b;
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
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.submit-btn, .reset-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.reset-btn {
  background: #e5e7eb;
  color: #374151;
}

.reset-btn:hover {
  background: #d1d5db;
}

.submitted-data {
  margin-top: 30px;
  padding: 20px;
  background: #fffbeb;
  border-radius: 12px;
  border: 2px solid #f59e0b;
}

.submitted-data strong {
  display: block;
  margin-bottom: 10px;
  color: #f59e0b;
}

pre {
  font-size: 13px;
  color: #374151;
  overflow-x: auto;
  margin-bottom: 10px;
}

.note {
  color: #f59e0b;
  font-size: 13px;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  }

  .uncontrolled-form {
    background: #1f2937;
  }

  h2 {
    color: #fbbf24;
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
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
  }

  .reset-btn {
    background: #374151;
    color: #e5e7eb;
  }

  .reset-btn:hover {
    background: #4b5563;
  }

  .submitted-data {
    background: #78350f;
    border-color: #fbbf24;
  }

  .submitted-data strong {
    color: #fbbf24;
  }

  pre {
    color: #9ca3af;
  }

  .note {
    color: #fbbf24;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Perfect for File Inputs"
            description="File inputs must be uncontrolled"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="File Upload (Must be Uncontrolled)"
            description="File inputs cannot be controlled"
            language="javascript"
            colorTheme="blue"
            code={fileCode}
            output={[
              '// File inputs MUST be uncontrolled',
              '// Security: Cannot set file value programmatically',
              '',
              'Select file and submit:',
              'File: photo.jpg',
              '',
              '✅ Only way to handle files in React'
            ]}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Controlled vs Uncontrolled"
              description="When to use each"
              size="lg"
            />
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="text-left p-3 text-gray-700 dark:text-gray-300">Feature</th>
                    <th className="text-left p-3 text-green-600 dark:text-green-400">Controlled</th>
                    <th className="text-left p-3 text-blue-600 dark:text-blue-400">Uncontrolled</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Data source</td>
                    <td className="p-3">React state</td>
                    <td className="p-3">DOM</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Access value</td>
                    <td className="p-3">From state</td>
                    <td className="p-3">From ref</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Re-renders</td>
                    <td className="p-3">On every change</td>
                    <td className="p-3">Only on submit</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Validation</td>
                    <td className="p-3">Real-time ✅</td>
                    <td className="p-3">On submit only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Best for</td>
                    <td className="p-3">Most forms</td>
                    <td className="p-3">File inputs, simple forms</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Use Refs</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Access DOM values directly with useRef</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">File Inputs</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Must be uncontrolled for security reasons</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Less Re-renders</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Better performance for simple cases</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Use Sparingly</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Prefer controlled for most forms</p>
              </div>
            </div>
            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use uncontrolled for file inputs and simple forms. For everything else, prefer controlled components!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

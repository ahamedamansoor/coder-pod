'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Puzzle,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Copy,
  Sparkles,
  Layers,
  Zap,
  Target,
  GitMerge,
  Package,
} from 'lucide-react';

export default function ChoosingTheStateStructure() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Puzzle}
        category="React · Managing State"
        title="Choosing the State Structure"
        description="Learn principles for organizing state effectively. Make your components easier to update and debug with well-structured state."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Principles Overview */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Principles for Structuring State"
              description="Guidelines for well-organized state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When you write a component that holds state, you'll have to make choices about how many state variables to use and what the shape of their data should be. Here are some principles to help you make good choices:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                    1
                  </div>
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Group Related State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you always update two or more state variables together, consider merging them into one.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    2
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Avoid Contradictions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When state is structured so that pieces can contradict each other, you leave room for bugs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                    3
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Avoid Redundant State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you can calculate some information from props or existing state during rendering, don't put it in state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    4
                  </div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Avoid Duplication</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When the same data is duplicated between multiple state variables, it's hard to keep them in sync.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    5
                  </div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Avoid Deeply Nested State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Deeply hierarchical state is not convenient to update. When possible, prefer to structure state in a flat way.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Goal of These Principles</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Make state easy to update without introducing bugs. Removing redundant and duplicate data helps ensure all pieces stay in sync!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Group Related State */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Group Related State"
              description="Combine state that changes together"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If two state variables <strong>always change together</strong>, it might be a good idea to unify them into a single state variable.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Separate Variables</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [x, setX] = useState(0);</div>
                    <div>const [y, setY] = useState(0);</div>
                    <div className="mt-2"></div>
                    <div className="text-red-600 dark:text-red-400">// Always updated together</div>
                    <div>setX(e.clientX);</div>
                    <div>setY(e.clientY);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Easy to forget to update one of them
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Single Object</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [position, setPosition] = </div>
                    <div className="pl-2">useState({'{'} x: 0, y: 0 {'}'});</div>
                    <div className="mt-2"></div>
                    <div className="text-green-600 dark:text-green-400">// Update together</div>
                    <div>setPosition({'{'}</div>
                    <div className="pl-2">x: e.clientX,</div>
                    <div className="pl-2">y: e.clientY</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Guaranteed to stay in sync
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong className="text-purple-700 dark:text-purple-300">💡 Rule of thumb:</strong> If you don't know how many state variables you'll need, group them into an object. You can always split them later if needed!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Avoid Contradictions */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Avoid Contradictions in State"
              description="State should not contradict itself"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Avoid state where multiple pieces can contradict each other. This creates bugs because it's possible for the state to be in an <strong>impossible combination</strong>.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ Bad Example: Contradictory State</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);

// Problem: Both could be true at once!
// This is impossible - can't be sending AND sent
if (isSending && isSent) {
  // What should happen here? 🤔
}`}</code>
                </pre>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-red-700 dark:text-red-400">The problem:</strong> With two booleans, there are 4 possible combinations, but only 3 are valid states (typing, sending, sent). The invalid state leads to bugs!
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`// ✅ Better: Use a single status variable
const [status, setStatus] = useState('typing');
// Can only be: 'typing' | 'sending' | 'sent'

// No contradictions possible!
if (status === 'sending') {
  // Definitely sending
}
if (status === 'sent') {
  // Definitely sent
}`}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See the Difference"
            description="Compare contradictory vs clear state"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Form with Clear State"
            description="Using status instead of multiple booleans"
            colorTheme="cyan"
            react={`function FeedbackForm() {
  const [status, setStatus] = React.useState('typing');
  const [message, setMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('typing');
        setMessage('');
      }, 2000);
    }, 2000);
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  return (
    <div className="container">
      <h1>📝 Feedback Form</h1>
      
      <div className="status-display">
        <div className={'status-badge ' + status}>
          {status === 'typing' && '✍️ Typing'}
          {status === 'sending' && '📤 Sending...'}
          {status === 'sent' && '✅ Sent!'}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSending || isSent}
          placeholder="Share your feedback..."
        />
        
        <button
          type="submit"
          disabled={isSending || isSent || message.length === 0}
          className="btn-submit"
        >
          {isSending ? 'Sending...' : 'Send Feedback'}
        </button>
      </form>

      {isSent && (
        <div className="success-message">
          🎉 Thank you for your feedback!
        </div>
      )}

      <div className="info">
        💡 Single status state - no contradictions possible!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FeedbackForm />);`}
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

  function FeedbackForm() {
    const [status, setStatus] = useState('typing');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      setStatus('sending');
      
      setTimeout(() => {
        setStatus('sent');
        setTimeout(() => {
          setStatus('typing');
          setMessage('');
        }, 2000);
      }, 2000);
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    return h('div', { className: 'container' },
      h('h1', null, '📝 Feedback Form'),
      
      h('div', { className: 'status-display' },
        h('div', { className: 'status-badge ' + status },
          status === 'typing' ? '✍️ Typing' :
          status === 'sending' ? '📤 Sending...' :
          '✅ Sent!'
        )
      ),

      h('form', { onSubmit: handleSubmit },
        h('textarea', {
          value: message,
          onChange: (e) => setMessage(e.target.value),
          disabled: isSending || isSent,
          placeholder: 'Share your feedback...'
        }),
        
        h('button', {
          type: 'submit',
          disabled: isSending || isSent || message.length === 0,
          className: 'btn-submit'
        }, isSending ? 'Sending...' : 'Send Feedback')
      ),

      isSent && h('div', { className: 'success-message' },
        '🎉 Thank you for your feedback!'
      ),

      h('div', { className: 'info' },
        '💡 Single status state - no contradictions possible!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(FeedbackForm));
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
  margin-bottom: 25px;
  font-size: 2rem;
}

.status-display {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
}

.status-badge {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  border: 2px solid;
  transition: all 0.3s ease;
}

.status-badge.typing {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
  color: #1e40af;
}

.status-badge.sending {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border-color: #f59e0b;
  color: #92400e;
  animation: pulse 1s ease-in-out infinite;
}

.status-badge.sent {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
  color: #065f46;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
}

textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

textarea:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
}

.btn-submit {
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.success-message {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #10b981;
  text-align: center;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 15px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info {
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

  .status-badge.typing {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
    color: #93c5fd;
  }

  .status-badge.sending {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fcd34d;
  }

  .status-badge.sent {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #6ee7b7;
  }

  textarea {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  textarea:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  textarea:disabled {
    background: #1f2937;
  }

  .success-message {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #d1fae5;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Avoid Redundant State */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Copy className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Avoid Redundant State"
              description="Don't duplicate what you can calculate"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If you can calculate some information from props or existing state <strong>during rendering</strong>, you should not put that information into state.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">Example: Full Name</h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Badge className="mb-2 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700">
                    ❌ Redundant
                  </Badge>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>const [firstName, setFirstName] =</div>
                      <div className="pl-2">useState('');</div>
                      <div>const [lastName, setLastName] =</div>
                      <div className="pl-2">useState('');</div>
                      <div className="text-red-600 dark:text-red-400">// ❌ Don't do this!</div>
                      <div>const [fullName, setFullName] =</div>
                      <div className="pl-2">useState('');</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Badge className="mb-2 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                    ✅ Calculated
                  </Badge>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>const [firstName, setFirstName] =</div>
                      <div className="pl-2">useState('');</div>
                      <div>const [lastName, setLastName] =</div>
                      <div className="pl-2">useState('');</div>
                      <div className="text-green-600 dark:text-green-400">// ✅ Calculate it!</div>
                      <div>const fullName =</div>
                      <div className="pl-2">firstName + ' ' + lastName;</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-green-700 dark:text-green-400">Why?</strong> With redundant state, you have to update both <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">firstName</code>, <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">lastName</code>, AND <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">fullName</code>. Easy to forget and create bugs!
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">💡 More Examples of Redundant State</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Item count from array:</strong> Use <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">items.length</code> instead of storing count</li>
                <li>• <strong>Selected item:</strong> Store ID and find item with <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">items.find()</code></li>
                <li>• <strong>Derived values:</strong> Calculate during render, don't store</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Avoid Duplication */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitMerge className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Avoid Duplication in State"
              description="Keep data in one place"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When the same data is duplicated between multiple state variables, or within nested objects, it's difficult to keep them in sync.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <h4 className="font-bold mb-4 text-orange-700 dark:text-orange-300">Example: Selected Item</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <h5 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Duplicated Data</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-2">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>const [items, setItems] = useState([...]);</div>
                      <div className="text-red-600 dark:text-red-400">// ❌ Stores entire object</div>
                      <div>const [selectedItem, setSelectedItem] =</div>
                      <div className="pl-2">useState(items[0]);</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Problem: If you edit an item, you must update both <code className="px-1 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">items</code> and <code className="px-1 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">selectedItem</code>!
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Single Source of Truth</h5>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs mb-2">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>const [items, setItems] = useState([...]);</div>
                      <div className="text-green-600 dark:text-green-400">// ✅ Store only ID</div>
                      <div>const [selectedId, setSelectedId] =</div>
                      <div className="pl-2">useState(0);</div>
                      <div className="mt-2 text-green-600 dark:text-green-400">// Find when needed</div>
                      <div>const selectedItem = items.find(</div>
                      <div className="pl-2">i =&gt; i.id === selectedId</div>
                      <div>);</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Better: Items array is the single source. Selected item is always in sync!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avoid Deeply Nested State */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Avoid Deeply Nested State"
              description="Prefer flat structure"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Deeply nested state is hard to update. When possible, prefer to <strong>flatten your state</strong> structure.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ Deeply Nested</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200 text-xs">
                    <div>{'{'}</div>
                    <div className="pl-2">places: [{'{'}</div>
                    <div className="pl-4">id: 1,</div>
                    <div className="pl-4">places: [{'{'}</div>
                    <div className="pl-6">id: 2,</div>
                    <div className="pl-6">places: [...]</div>
                    <div className="pl-4">{'}'}]</div>
                    <div className="pl-2">{'}'}]</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hard to update deep items
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ Flat Structure</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200 text-xs">
                    <div>{'{'}</div>
                    <div className="pl-2">0: {'{'} id: 0, childIds: [1, 2] {'}'},</div>
                    <div className="pl-2">1: {'{'} id: 1, childIds: [] {'}'},</div>
                    <div className="pl-2">2: {'{'} id: 2, childIds: [3] {'}'},</div>
                    <div className="pl-2">3: {'{'} id: 3, childIds: [] {'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Easy to update by ID
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">💡 Normalization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                This pattern is called <strong>"normalizing"</strong> or <strong>"flattening"</strong> your data. Similar to how databases work - each item gets a unique ID, and relationships are stored as IDs.
              </p>
            </div>
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
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Group Related State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If two variables always change together, merge them into one.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">No Contradictions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avoid state where pieces can contradict each other. Use a status enum.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Calculate, Don't Store</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you can derive it during render, don't put it in state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Single Source of Truth</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't duplicate data. Keep it in one place and derive what you need.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Prefer Flat Structure</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Deeply nested state is hard to update. Normalize/flatten your data structure.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">The Goal</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Well-structured state makes components easier to update, debug, and maintain. Eliminate redundancy and contradictions!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

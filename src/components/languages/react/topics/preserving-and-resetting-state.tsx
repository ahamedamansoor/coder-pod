'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Save,
  RefreshCw,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ArrowUp,
  Sparkles,
  Database,
  Zap,
  GitBranch,
  RotateCcw,
  Shield,
  Clock,
} from 'lucide-react';

export default function PreservingAndResettingState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Save}
        category="React · State Management"
        title="Preserving and Resetting State"
        description="Master React's state preservation techniques. Learn how to maintain state across renders, reset state when needed, and control component lifecycle."
        colorTheme="emerald"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is State Preservation */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="What is State Preservation?"
              description="Understanding how React maintains state across component renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>State preservation</strong> is React's ability to maintain component state between renders. When a component re-renders, React preserves its state values unless explicitly reset. This is fundamental to how React applications maintain user interactions and data.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Preserved State</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`// First render`}</div>
                    <div>{`const [count, setCount] = useState(0);`}</div>
                    <div>{`// count = 0`}</div>
                    <div className="mt-2">{`// After click`}</div>
                    <div>{`setCount(1);`}</div>
                    <div>{`// Re-render, count = 1 (preserved!)`}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State values persist across re-renders automatically.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <RotateCcw className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">🔄 Reset State</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`// Component unmounts/remounts`}</div>
                    <div>{`// OR key prop changes`}</div>
                    <div>{`// OR parent re-renders with different props`}</div>
                    <div className="mt-2 text-red-600 dark:text-red-400">{`// State resets to initial value!`}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State resets when component identity changes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When State Resets */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RotateCcw className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="When Does State Reset?"
              description="Understanding the conditions that cause React to reset component state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              React resets state when it considers a component to be a <strong>different instance</strong>. This happens in specific scenarios that change the component's identity in React's virtual DOM.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Component Unmounts</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When a component is removed from the DOM and later re-added
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-amber-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Key Prop Changes</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When the key prop value changes, React creates a new component instance
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-amber-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Conditional Rendering</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When components are rendered conditionally with different logic
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Key Insight</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                React uses component identity to determine whether to preserve or reset state. The same component instance preserves state; different instances reset state.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: State Preservation */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Interactive Playground: State Preservation Demo"
            description="See how React preserves state across re-renders and resets it when needed"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="State Preservation and Reset"
            description="Interactive demo showing when state is preserved vs reset"
            colorTheme="emerald"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [showCounter, setShowCounter] = React.useState(true);
  const [counterKey, setCounterKey] = React.useState(0);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  const resetCounter = () => {
    setCounterKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>🔄 State Preservation Demo</h1>
      <p className="description">
        See how React handles state preservation and reset
      </p>
      
      <div className="controls">
        <button onClick={toggleCounter} className="btn btn-primary">
          {showCounter ? '🙈 Hide Counter' : '👁️ Show Counter'}
        </button>
        <button onClick={resetCounter} className="btn btn-danger">
          🔄 Reset Counter (Change Key)
        </button>
      </div>

      <div className="demo-area">
        {showCounter && (
          <Counter key={counterKey} />
        )}
      </div>

      <div className="info-panel">
        <h3>📊 Current State</h3>
        <div className="state-info">
          <p><strong>Counter Visible:</strong> {showCounter ? 'Yes' : 'No'}</p>
          <p><strong>Counter Key:</strong> {counterKey}</p>
          <p><strong>State Status:</strong> {showCounter ? 'Preserved' : 'Hidden'}</p>
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('User');

  React.useEffect(() => {
    console.log('Counter component mounted/updated');
  });

  return (
    <div className="counter-card">
      <h3>🎯 Counter Component</h3>
      <p className="component-id">Component Instance</p>
      
      <div className="counter-display">
        <div className="count-value">{count}</div>
        <p className="count-label">Current Count</p>
      </div>

      <div className="input-section">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          ➕ Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="btn btn-warning">
          ➖ Decrement
        </button>
        <button onClick={() => setCount(0)} className="btn btn-secondary">
          🔄 Reset Count
        </button>
      </div>

      <div className="state-display">
        <h4>📝 Current State</h4>
        <p><strong>Count:</strong> {count}</p>
        <p><strong>Name:</strong> {name}</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useEffect } = React;
  const { createRoot } = ReactDOM;

  function App() {
    const [showCounter, setShowCounter] = useState(true);
    const [counterKey, setCounterKey] = useState(0);

    const toggleCounter = () => {
      setShowCounter(!showCounter);
    };

    const resetCounter = () => {
      setCounterKey(prev => prev + 1);
    };

    return h('div', { className: 'app' },
      h('h1', null, '🔄 State Preservation Demo'),
      h('p', { className: 'description' },
        'See how React handles state preservation and reset'
      ),
      
      h('div', { className: 'controls' },
        h('button', { 
          onClick: toggleCounter, 
          className: 'btn btn-primary' 
        }, showCounter ? '🙈 Hide Counter' : '👁️ Show Counter'),
        h('button', { 
          onClick: resetCounter, 
          className: 'btn btn-danger' 
        }, '🔄 Reset Counter (Change Key)')
      ),

      h('div', { className: 'demo-area' },
        showCounter && h(Counter, { key: counterKey })
      ),

      h('div', { className: 'info-panel' },
        h('h3', null, '📊 Current State'),
        h('div', { className: 'state-info' },
          h('p', null, h('strong', null, 'Counter Visible: '), showCounter ? 'Yes' : 'No'),
          h('p', null, h('strong', null, 'Counter Key: '), counterKey),
          h('p', null, h('strong', null, 'State Status: '), showCounter ? 'Preserved' : 'Hidden')
        )
      )
    );
  }

  function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('User');

    useEffect(() => {
      console.log('Counter component mounted/updated');
    });

    return h('div', { className: 'counter-card' },
      h('h3', null, '🎯 Counter Component'),
      h('p', { className: 'component-id' }, 'Component Instance'),
      
      h('div', { className: 'counter-display' },
        h('div', { className: 'count-value' }, count),
        h('p', { className: 'count-label' }, 'Current Count')
      ),

      h('div', { className: 'input-section' },
        h('label', null, 'Name:'),
        h('input', {
          type: 'text',
          value: name,
          onChange: (e) => setName(e.target.value),
          className: 'input-field'
        })
      ),

      h('div', { className: 'button-group' },
        h('button', { 
          onClick: () => setCount(count + 1), 
          className: 'btn btn-success' 
        }, '➕ Increment'),
        h('button', { 
          onClick: () => setCount(count - 1), 
          className: 'btn btn-warning' 
        }, '➖ Decrement'),
        h('button', { 
          onClick: () => setCount(0), 
          className: 'btn btn-secondary' 
        }, '🔄 Reset Count')
      ),

      h('div', { className: 'state-display' },
        h('h4', null, '📝 Current State'),
        h('p', null, h('strong', null, 'Count: '), count),
        h('p', null, h('strong', null, 'Name: '), name)
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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

.app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #10b981;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
}

.description {
  text-align: center;
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
}

.btn-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.demo-area {
  margin-bottom: 30px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-card {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #10b981;
  border-radius: 15px;
  padding: 25px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
}

.counter-card h3 {
  color: #10b981;
  text-align: center;
  margin-bottom: 5px;
}

.component-id {
  text-align: center;
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.counter-display {
  text-align: center;
  margin-bottom: 25px;
}

.count-value {
  font-size: 3rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 5px;
}

.count-label {
  color: #6b7280;
  font-size: 0.9rem;
}

.input-section {
  margin-bottom: 25px;
}

.input-section label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 600;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #10b981;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.button-group .btn {
  flex: 1;
  min-width: 120px;
  font-size: 14px;
  padding: 10px 16px;
}

.state-display {
  background: rgba(16, 185, 129, 0.1);
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #10b981;
}

.state-display h4 {
  color: #10b981;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.state-display p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #374151;
}

.info-panel {
  background: #f9fafb;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #10b981;
}

.info-panel h3 {
  color: #10b981;
  margin-bottom: 15px;
}

.state-info p {
  margin: 8px 0;
  color: #4b5563;
}

.state-info strong {
  color: #1f2937;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .button-group .btn {
    width: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .app {
    background: #1f2937;
    color: #f9fafb;
  }

  h1 {
    color: #34d399;
  }

  .description {
    color: #9ca3af;
  }

  .counter-card {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #34d399;
  }

  .counter-card h3 {
    color: #34d399;
  }

  .component-id {
    color: #9ca3af;
  }

  .count-value {
    color: #34d399;
  }

  .count-label {
    color: #9ca3af;
  }

  .input-section label {
    color: #f9fafb;
  }

  .input-field {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .input-field:focus {
    border-color: #34d399;
  }

  .state-display {
    background: rgba(52, 211, 153, 0.1);
  }

  .state-display h4 {
    color: #34d399;
  }

  .state-display p {
    color: #d1d5db;
  }

  .info-panel {
    background: #374151;
  }

  .info-panel h3 {
    color: #34d399;
  }

  .state-info p {
    color: #d1d5db;
  }

  .state-info strong {
    color: #f9fafb;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Form State */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Form State Management"
            description="Learn how to preserve and reset form state in different scenarios"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Form State Preservation"
            description="Multi-step form with state preservation and reset capabilities"
            colorTheme="purple"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formKey, setFormKey] = React.useState(0);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setFormKey(prev => prev + 1);
    setCurrentStep(1);
  };

  return (
    <div className="app">
      <h1>📝 Form State Management</h1>
      <p className="description">
        Navigate between steps and see how state is preserved or reset
      </p>
      
      <div className="step-indicator">
        <div className={'step ' + (currentStep >= 1 ? 'active' : '')}>
          <span className="step-number">1</span>
          <span className="step-label">Personal Info</span>
        </div>
        <div className={'step ' + (currentStep >= 2 ? 'active' : '')}>
          <span className="step-number">2</span>
          <span className="step-label">Contact</span>
        </div>
        <div className={'step ' + (currentStep >= 3 ? 'active' : '')}>
          <span className="step-number">3</span>
          <span className="step-label">Review</span>
        </div>
      </div>

      <div className="form-container">
        <MultiStepForm 
          key={formKey}
          currentStep={currentStep}
          onNext={nextStep}
          onPrev={prevStep}
          onReset={resetForm}
        />
      </div>

      <div className="controls">
        <button onClick={resetForm} className="btn btn-danger">
          🔄 Reset Entire Form
        </button>
      </div>
    </div>
  );
}

function MultiStepForm({ currentStep, onNext, onPrev, onReset }) {
  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const [contactInfo, setContactInfo] = React.useState({
    email: '',
    phone: '',
    address: ''
  });

  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const updateContactInfo = (field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-card">
      {currentStep === 1 && (
        <PersonalInfoStep 
          data={personalInfo}
          onChange={updatePersonalInfo}
          onNext={onNext}
        />
      )}
      
      {currentStep === 2 && (
        <ContactStep 
          data={contactInfo}
          onChange={updateContactInfo}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
      
      {currentStep === 3 && (
        <ReviewStep 
          personalInfo={personalInfo}
          contactInfo={contactInfo}
          onPrev={onPrev}
          onReset={onReset}
        />
      )}
    </div>
  );
}

function PersonalInfoStep({ data, onChange, onNext }) {
  const isFormValid = data.firstName && data.lastName && data.age;

  return (
    <div className="step-content">
      <h3>👤 Personal Information</h3>
      <p className="step-description">Tell us about yourself</p>
      
      <div className="form-fields">
        <div className="field-group">
          <label>First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="input-field"
            placeholder="Enter your first name"
          />
        </div>
        
        <div className="field-group">
          <label>Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="input-field"
            placeholder="Enter your last name"
          />
        </div>
        
        <div className="field-group">
          <label>Age</label>
          <input
            type="number"
            value={data.age}
            onChange={(e) => onChange('age', e.target.value)}
            className="input-field"
            placeholder="Enter your age"
          />
        </div>
      </div>

      <div className="step-navigation">
        <button 
          onClick={onNext}
          disabled={!isFormValid}
          className="btn btn-primary"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}

function ContactStep({ data, onChange, onNext, onPrev }) {
  const isFormValid = data.email && data.phone;

  return (
    <div className="step-content">
      <h3>📞 Contact Information</h3>
      <p className="step-description">How can we reach you?</p>
      
      <div className="form-fields">
        <div className="field-group">
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="input-field"
            placeholder="your@email.com"
          />
        </div>
        
        <div className="field-group">
          <label>Phone</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div className="field-group">
          <label>Address</label>
          <textarea
            value={data.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="input-field textarea"
            placeholder="123 Main St, City, State"
            rows={3}
          />
        </div>
      </div>

      <div className="step-navigation">
        <button onClick={onPrev} className="btn btn-secondary">
          ← Previous
        </button>
        <button 
          onClick={onNext}
          disabled={!isFormValid}
          className="btn btn-primary"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}

function ReviewStep({ personalInfo, contactInfo, onPrev, onReset }) {
  const allFieldsFilled = personalInfo.firstName && personalInfo.lastName && 
                          personalInfo.age && contactInfo.email && contactInfo.phone;

  return (
    <div className="step-content">
      <h3>📋 Review Your Information</h3>
      <p className="step-description">Please review and confirm your details</p>
      
      <div className="review-sections">
        <div className="review-section">
          <h4>👤 Personal Information</h4>
          <div className="review-data">
            <p><strong>Name:</strong> {personalInfo.firstName} {personalInfo.lastName}</p>
            <p><strong>Age:</strong> {personalInfo.age}</p>
          </div>
        </div>
        
        <div className="review-section">
          <h4>📞 Contact Information</h4>
          <div className="review-data">
            <p><strong>Email:</strong> {contactInfo.email}</p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
            {contactInfo.address && <p><strong>Address:</strong> {contactInfo.address}</p>}
          </div>
        </div>
      </div>

      <div className="step-navigation">
        <button onClick={onPrev} className="btn btn-secondary">
          ← Previous
        </button>
        <button 
          onClick={onReset}
          className="btn btn-success"
          disabled={!allFieldsFilled}
        >
          ✅ Submit & Reset
        </button>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));`}
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

  function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formKey, setFormKey] = useState(0);

    const nextStep = () => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    };

    const prevStep = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };

    const resetForm = () => {
      setFormKey(prev => prev + 1);
      setCurrentStep(1);
    };

    return h('div', { className: 'app' },
      h('h1', null, '📝 Form State Management'),
      h('p', { className: 'description' },
        'Navigate between steps and see how state is preserved or reset'
      ),
      
      h('div', { className: 'step-indicator' },
        h('div', { className: 'step ' + (currentStep >= 1 ? 'active' : '') },
          h('span', { className: 'step-number' }, '1'),
          h('span', { className: 'step-label' }, 'Personal Info')
        ),
        h('div', { className: 'step ' + (currentStep >= 2 ? 'active' : '') },
          h('span', { className: 'step-number' }, '2'),
          h('span', { className: 'step-label' }, 'Contact')
        ),
        h('div', { className: 'step ' + (currentStep >= 3 ? 'active' : '') },
          h('span', { className: 'step-number' }, '3'),
          h('span', { className: 'step-label' }, 'Review')
        )
      ),

      h('div', { className: 'form-container' },
        h(MultiStepForm, { 
          key: formKey,
          currentStep: currentStep,
          onNext: nextStep,
          onPrev: prevStep,
          onReset: resetForm
        })
      ),

      h('div', { className: 'controls' },
        h('button', { onClick: resetForm, className: 'btn btn-danger' },
          '🔄 Reset Entire Form'
        )
      )
    );
  }

  function MultiStepForm({ currentStep, onNext, onPrev, onReset }) {
    const [personalInfo, setPersonalInfo] = useState({
      firstName: '',
      lastName: '',
      age: ''
    });

    const [contactInfo, setContactInfo] = useState({
      email: '',
      phone: '',
      address: ''
    });

    const updatePersonalInfo = (field, value) => {
      setPersonalInfo(prev => ({ ...prev, [field]: value }));
    };

    const updateContactInfo = (field, value) => {
      setContactInfo(prev => ({ ...prev, [field]: value }));
    };

    return h('div', { className: 'form-card' },
      currentStep === 1 && h(PersonalInfoStep, { 
        data: personalInfo,
        onChange: updatePersonalInfo,
        onNext: onNext
      }),
      
      currentStep === 2 && h(ContactStep, { 
        data: contactInfo,
        onChange: updateContactInfo,
        onNext: onNext,
        onPrev: onPrev
      }),
      
      currentStep === 3 && h(ReviewStep, { 
        personalInfo: personalInfo,
        contactInfo: contactInfo,
        onPrev: onPrev,
        onReset: onReset
      })
    );
  }

  function PersonalInfoStep({ data, onChange, onNext }) {
    const isFormValid = data.firstName && data.lastName && data.age;

    return h('div', { className: 'step-content' },
      h('h3', null, '👤 Personal Information'),
      h('p', { className: 'step-description' }, 'Tell us about yourself'),
      
      h('div', { className: 'form-fields' },
        h('div', { className: 'field-group' },
          h('label', null, 'First Name'),
          h('input', {
            type: 'text',
            value: data.firstName,
            onChange: (e) => onChange('firstName', e.target.value),
            className: 'input-field',
            placeholder: 'Enter your first name'
          })
        ),
        
        h('div', { className: 'field-group' },
          h('label', null, 'Last Name'),
          h('input', {
            type: 'text',
            value: data.lastName,
            onChange: (e) => onChange('lastName', e.target.value),
            className: 'input-field',
            placeholder: 'Enter your last name'
          })
        ),
        
        h('div', { className: 'field-group' },
          h('label', null, 'Age'),
          h('input', {
            type: 'number',
            value: data.age,
            onChange: (e) => onChange('age', e.target.value),
            className: 'input-field',
            placeholder: 'Enter your age'
          })
        )
      ),

      h('div', { className: 'step-navigation' },
        h('button', { 
          onClick: onNext,
          disabled: !isFormValid,
          className: 'btn btn-primary'
        }, 'Next Step →')
      )
    );
  }

  function ContactStep({ data, onChange, onNext, onPrev }) {
    const isFormValid = data.email && data.phone;

    return h('div', { className: 'step-content' },
      h('h3', null, '📞 Contact Information'),
      h('p', { className: 'step-description' }, 'How can we reach you?'),
      
      h('div', { className: 'form-fields' },
        h('div', { className: 'field-group' },
          h('label', null, 'Email'),
          h('input', {
            type: 'email',
            value: data.email,
            onChange: (e) => onChange('email', e.target.value),
            className: 'input-field',
            placeholder: 'your@email.com'
          })
        ),
        
        h('div', { className: 'field-group' },
          h('label', null, 'Phone'),
          h('input', {
            type: 'tel',
            value: data.phone,
            onChange: (e) => onChange('phone', e.target.value),
            className: 'input-field',
            placeholder: '+1 (555) 123-4567'
          })
        ),
        
        h('div', { className: 'field-group' },
          h('label', null, 'Address'),
          h('textarea', {
            value: data.address,
            onChange: (e) => onChange('address', e.target.value),
            className: 'input-field textarea',
            placeholder: '123 Main St, City, State',
            rows: 3
          })
        )
      ),

      h('div', { className: 'step-navigation' },
        h('button', { onClick: onPrev, className: 'btn btn-secondary' },
          '← Previous'
        ),
        h('button', { 
          onClick: onNext,
          disabled: !isFormValid,
          className: 'btn btn-primary'
        }, 'Next Step →')
      )
    );
  }

  function ReviewStep({ personalInfo, contactInfo, onPrev, onReset }) {
    const allFieldsFilled = personalInfo.firstName && personalInfo.lastName && 
                            personalInfo.age && contactInfo.email && contactInfo.phone;

    return h('div', { className: 'step-content' },
      h('h3', null, '📋 Review Your Information'),
      h('p', { className: 'step-description' }, 'Please review and confirm your details'),
      
      h('div', { className: 'review-sections' },
        h('div', { className: 'review-section' },
          h('h4', null, '👤 Personal Information'),
          h('div', { className: 'review-data' },
            h('p', null, h('strong', null, 'Name: '), personalInfo.firstName + ' ' + personalInfo.lastName),
            h('p', null, h('strong', null, 'Age: '), personalInfo.age)
          )
        ),
        
        h('div', { className: 'review-section' },
          h('h4', null, '📞 Contact Information'),
          h('div', { className: 'review-data' },
            h('p', null, h('strong', null, 'Email: '), contactInfo.email),
            h('p', null, h('strong', null, 'Phone: '), contactInfo.phone),
            contactInfo.address && h('p', null, h('strong', null, 'Address: '), contactInfo.address)
          )
        )
      ),

      h('div', { className: 'step-navigation' },
        h('button', { onClick: onPrev, className: 'btn btn-secondary' },
          '← Previous'
        ),
        h('button', { 
          onClick: onReset,
          className: 'btn btn-success',
          disabled: !allFieldsFilled
        }, '✅ Submit & Reset')
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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

.app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
}

.description {
  text-align: center;
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
}

.step-indicator::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e5e7eb;
  z-index: 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e5e7eb;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;
}

.step.active .step-number {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.step-label {
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  max-width: 80px;
}

.step.active .step-label {
  color: #8b5cf6;
  font-weight: 600;
}

.form-container {
  margin-bottom: 30px;
}

.form-card {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border: 2px solid #8b5cf6;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
}

.step-content h3 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.step-description {
  text-align: center;
  color: #6b7280;
  margin-bottom: 30px;
}

.form-fields {
  margin-bottom: 30px;
}

.field-group {
  margin-bottom: 20px;
}

.field-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 600;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.textarea {
  resize: vertical;
  min-height: 80px;
}

.step-navigation {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.controls {
  display: flex;
  justify-content: center;
}

.review-sections {
  margin-bottom: 30px;
}

.review-section {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  border-left: 4px solid #8b5cf6;
}

.review-section h4 {
  color: #8b5cf6;
  margin-bottom: 15px;
}

.review-data p {
  margin: 8px 0;
  color: #374151;
}

.review-data strong {
  color: #1f2937;
}

@media (max-width: 768px) {
  .step-indicator {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .step-indicator::before {
    display: none;
  }

  .step-navigation {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  }

  .app {
    background: #1f2937;
    color: #f9fafb;
  }

  h1 {
    color: #a78bfa;
  }

  .description {
    color: #9ca3af;
  }

  .step-indicator::before {
    background: #4b5563;
  }

  .step-number {
    background: #4b5563;
    color: #9ca3af;
  }

  .step.active .step-number {
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    color: white;
  }

  .step-label {
    color: #9ca3af;
  }

  .step.active .step-label {
    color: #a78bfa;
  }

  .form-card {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
    border-color: #a78bfa;
  }

  .step-content h3 {
    color: #a78bfa;
  }

  .step-description {
    color: #9ca3af;
  }

  .field-group label {
    color: #f9fafb;
  }

  .input-field {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .input-field:focus {
    border-color: #a78bfa;
    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
  }

  .review-section {
    background: #374151;
  }

  .review-section h4 {
    color: #a78bfa;
  }

  .review-data p {
    color: #d1d5db;
  }

  .review-data strong {
    color: #f9fafb;
  }
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Best Practices for State Management"
              description="Guidelines for effective state preservation and reset"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 dark:text-blue-300">✅ Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use keys purposefully to reset component state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Keep state local to components that own it
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Lift state up when multiple components need it
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use derived state instead of duplicating data
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 dark:text-blue-300">❌ Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't change keys unnecessarily
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid storing derived data in state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't reset state unless absolutely necessary
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid complex state reset logic
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Performance Tip</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Unnecessary state resets can cause performance issues. Only reset state when the component truly needs to be treated as a new instance.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Key Takeaways"
              description="Essential concepts to remember about state preservation"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-green-700 dark:text-green-300">🎯 Core Concepts</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Component Identity:</strong> Same instance = preserved state</li>
                  <li>• <strong>Key Prop:</strong> Changes create new component instances</li>
                  <li>• <strong>Conditional Rendering:</strong> Can cause state resets</li>
                  <li>• <strong>Local State:</strong> Preserved by default</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-green-700 dark:text-green-300">🔄 Reset Triggers</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Component unmounts and remounts</li>
                  <li>• Key prop value changes</li>
                  <li>• Parent re-renders with different component type</li>
                  <li>• Manual key changes for reset control</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">💡 Remember</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                State preservation is React's default behavior. Understanding when and why state resets helps you build more predictable and efficient applications.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

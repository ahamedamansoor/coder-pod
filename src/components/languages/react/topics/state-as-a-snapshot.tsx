'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Camera,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
  Sparkles,
  Image,
  Zap,
  Eye,
  Film,
  Timer,
  Pause,
  Play,
} from 'lucide-react';

export default function StateAsASnapshot() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Camera}
        category="React · Adding Interactivity"
        title="State as a Snapshot"
        description="Understand how state behaves like a snapshot in time. Learn why setting state doesn't change the variable in the current render, and how React schedules updates."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Introduction */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Camera className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State is Like a Photograph"
              description="Each render sees its own snapshot of state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              State might seem like a regular variable that you can read and write. However, state behaves more like a <strong>snapshot</strong>. Setting it does not change the state variable you already have, but instead triggers a re-render with a new snapshot.
            </p>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                State variables are <strong>immutable</strong> during a render. Each render "sees" its own version of state, like looking at a photograph taken at that moment.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* State Snapshot Visualizer */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
              title="State Snapshot Visualizer"
              description="See how state behaves like snapshots over time"
              size="lg"
            />

          <FrontendCodePreviewReact
            title="Snapshot Counter"
            description="Click multiple times to see state batching in action"
            colorTheme="purple"
            react={`function SnapshotCounter() {
  const [count, setCount] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log('Before setCount - count:', count);
    
    setCount(count + 1);
    console.log('After setCount - count:', count);
    
    // This won't show the updated count!
    alert('Count in this render: ' + count);
  };

  
  return (
    <div className="snapshot-container">
      <h1 className="snapshot-title">
        📸 State Snapshot Demo
      </h1>
      
      <div className="snapshot-box">
        <h3 className="snapshot-subtitle">
          Current Render Snapshot
        </h3>
        <div className="snapshot-count">
          Count: {count}
        </div>
        <div className="snapshot-clicks">
          Clicks: {clicks}
        </div>
      </div>

      <button className="snapshot-button" onClick={handleClick}>
        📸 Take Snapshot (+1)
      </button>

      <div className="snapshot-notice">
        <strong>💡 Notice:</strong> The alert shows the <em>old</em> count value! 
        State doesn't update until the next render.
      </div>
    </div>
  );
}

// This code triggers the INITIAL RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnapshotCounter />);`}
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

  function SnapshotCounter() {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
      setClicks(clicks + 1);
      console.log('Before setCount - count:', count);
      
      setCount(count + 1);
      console.log('After setCount - count:', count);
      
      alert('Count in this render: ' + count);
    };

    return h('div', { className: 'snapshot-container' },
      h('h1', { className: 'snapshot-title' }, '📸 State Snapshot Demo'),
      h('div', { className: 'snapshot-box' },
        h('h3', { className: 'snapshot-subtitle' }, 'Current Render Snapshot'),
        h('div', { className: 'snapshot-count' }, 'Count: ' + count),
        h('div', { className: 'snapshot-clicks' }, 'Clicks: ' + clicks)
      ),
      h('button', {
        className: 'snapshot-button',
        onClick: handleClick
      }, '📸 Take Snapshot (+1)'),
      h('div', { className: 'snapshot-notice' },
        h('strong', null, '💡 Notice: '), 'The alert shows the ', h('em', null, 'old'), ' count value! State doesn\'t update until the next render.')
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(SnapshotCounter));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`/* Snapshot Counter Styles */
.snapshot-container {
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.snapshot-title {
  font-size: 28px;
  margin-bottom: 20px;
}

.snapshot-box {
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 15px 0;
  backdrop-filter: blur(10px);
}

.snapshot-subtitle {
  font-size: 16px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.snapshot-count {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.snapshot-clicks {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 15px;
}

.snapshot-button {
  background: #1f2937;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s ease;
}

.snapshot-button:hover {
  background: #374151;
  transform: translateY(-2px);
}

.snapshot-notice {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 20px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .snapshot-container {
    background: linear-gradient(135deg, #7c3aed 0%, #db2777 100%);
  }
  
  .snapshot-box,
  .snapshot-notice {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
  }
  
  .snapshot-button {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
  }
  
  .snapshot-button:hover {
    background: rgba(255,255,255,0.15);
  }
}`}
          />

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Camera className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Snapshot Behavior</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Each time you click, React takes a "snapshot" of the state. The current render only sees the snapshot from when it started!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* State Batching */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/10 dark:to-red-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Timer className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="State Batching"
              description="React batches state updates for better performance"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              React <strong>batches</strong> multiple state updates together. This means that if you call setState multiple times in the same event, React will wait until the end to apply all updates at once.
            </p>

            <FrontendCodePreviewReact
              title="Batching Example"
              description="See how multiple state updates are batched into one re-render"
              colorTheme="orange"
              react={`function BatchingExample() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('React');

  const handleBatchUpdate = () => {
    console.log('Before updates - Count:', count, 'Name:', name);
    
    // These will be batched together!
    setCount(count + 1);
    setName('JavaScript');
    setCount(count + 2); // This will overwrite the previous setCount!
    
    console.log('After updates - Count:', count, 'Name:', name);
    console.log('Still the old values because of batching!');
  };

  return (
    <div className="batching-container">
      <h1 className="batching-title">
        ⚡ State Batching Demo
      </h1>
      
      <div className="batching-box">
        <div className="batching-value">
          Count: <strong>{count}</strong>
        </div>
        <div className="batching-value">
          Name: <strong>{name}</strong>
        </div>
      </div>

      <button className="batching-button" onClick={handleBatchUpdate}>
        🚀 Batch Updates
      </button>

      <div className="batching-notice">
        <strong>🎯 Key Point:</strong> All three state updates happen in ONE re-render!
        Check the console to see the batching behavior.
      </div>
    </div>
  );
}

// This code triggers the INITIAL RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BatchingExample />);`}
              html={`<div id="root"></div>`}
              css={`/* Batching Example Styles */
.batching-container {
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(249, 115, 22, 0.3);
}

.batching-title {
  font-size: 28px;
  margin-bottom: 20px;
}

.batching-box {
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 15px 0;
}

.batching-value {
  font-size: 20px;
  margin-bottom: 10px;
}

.batching-button {
  background: #1f2937;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s ease;
}

.batching-button:hover {
  background: #374151;
  transform: translateY(-2px);
}

.batching-notice {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 20px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .batching-container {
    background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  }
  
  .batching-box,
  .batching-notice {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
  }
  
  .batching-button {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
  }
  
  .batching-button:hover {
    background: rgba(255,255,255,0.15);
  }
}`}
            />

            <Alert className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-300 dark:border-orange-700">
              <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Performance Optimization</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Batching prevents unnecessary re-renders. Multiple state updates in the same event only trigger ONE re-render!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Pitfalls */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Common Pitfalls"
              description="Avoid these mistakes when working with state snapshots"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Reading State After Setting It</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Don't expect to read the updated state immediately after calling setState:
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  <code className="text-sm text-red-800 dark:text-red-200">
                    {`setCount(count + 1);
console.log(count); // ❌ Still the old value!`}
                  </code>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Using State in Calculations</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Don't use current state to calculate the next state in a loop:
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  <code className="text-sm text-red-800 dark:text-red-200">
                    {`// ❌ This won't work as expected
for (let i = 0; i < 5; i++) {
  setCount(count + 1); // Always uses the same count!
}`}
                  </code>
                </div>
              </div>

              <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Use Functional Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Use the functional form when you need the previous state:
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <code className="text-sm text-green-800 dark:text-green-200">
                    {`// ✅ This works correctly
for (let i = 0; i < 5; i++) {
  setCount(prevCount => prevCount + 1);
}`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important concepts about state snapshots"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">State is Immutable</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State variables don't change during a render. Each render sees its own "snapshot" of state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Timer className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Updates are Batched</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Multiple state updates in the same event are batched together for better performance.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Triggers Re-render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Setting state doesn't change the current variable, but schedules a new render with the updated value.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Use Functional Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When you need the previous state, use the functional form: setState(prev {'=>'} prev + 1).
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Why This Matters</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Understanding state snapshots helps you avoid bugs and write more predictable React components. It's fundamental to how React works!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

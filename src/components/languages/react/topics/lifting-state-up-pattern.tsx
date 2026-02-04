'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, ArrowUp, Share2, Database } from 'lucide-react';

export default function LiftingStateUpPattern() {
  const exampleCode = `// ❌ Before: State in child components (can't share)
function TemperatureInput({ scale }) {
  const [temperature, setTemperature] = useState('');
  // Problem: Other component can't access this!
  return <input value={temperature} onChange={e => setTemperature(e.target.value)} />;
}

// ✅ After: Lift state to parent (shared!)
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const celsius = scale === 'f' ? (temperature - 32) * 5/9 : temperature;
  const fahrenheit = scale === 'c' ? (temperature * 9/5) + 32 : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={(temp) => {
          setTemperature(temp);
          setScale('c');
        }}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={(temp) => {
          setTemperature(temp);
          setScale('f');
        }}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:</legend>
      <input
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}`;

  const simplifiedCode = `// Simple Example: Sharing Count
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Display count={count} />
      <Button1 count={count} setCount={setCount} />
      <Button2 count={count} setCount={setCount} />
    </div>
  );
}

function Display({ count }) {
  return <h1>Count: {count}</h1>;
}

function Button1({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>+1</button>;
}

function Button2({ count, setCount }) {
  return <button onClick={() => setCount(count + 5)}>+5</button>;
}`;

  const previewReactCode = `const { useState } = React;

function ParentPreview() {
  const [count, setCount] = useState(0);

  return (
    <div className="preview">
      <Display count={count} />
      <div className="actions">
        <ActionButton label="+1" onClick={() => setCount((c) => c + 1)} />
        <ActionButton label="+5" onClick={() => setCount((c) => c + 5)} />
      </div>
    </div>
  );
}

function Display({ count }) {
  return (
    <div className="display">
      <p>Shared Count</p>
      <strong>{count}</strong>
    </div>
  );
}

function ActionButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="preview-btn">
      {label}
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ParentPreview />);
`;

  const previewCss = `* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #ecfccb 0%, #a7f3d0 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#root {
  width: 100%;
  display: flex;
  justify-content: center;
}
.preview {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
  max-width: 420px;
  width: min(90vw, 420px);
  text-align: center;
}
.display {
  border-radius: 16px;
  padding: 25px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  margin-bottom: 20px;
}
.display p {
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  opacity: 0.7;
}
.display strong {
  font-size: 2.5rem;
  display: block;
  margin-top: 5px;
}
.actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.preview-btn {
  flex: 1;
  padding: 14px 0;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.25);
}
.preview-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 24px rgba(16, 185, 129, 0.35);
}`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ArrowUp}
        category="React · Advanced Patterns"
        title="Lifting State Up"
        description="Learn how to share state between components by moving it to their closest common ancestor."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ArrowUp className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Lifting State Up?"
              description="Share state between components"
              size="lg"
            />
            <p className="text-base text-gray-700 dark:text-gray-300">
              When multiple components need to share the same data, <strong>lift the state up</strong> to their closest common ancestor. The parent manages the state and passes it down via props!
            </p>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">The Pattern</h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-500">1</Badge>
                  <span>Identify components that need the same state</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-orange-500">2</Badge>
                  <span>Find their closest common parent</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-yellow-500">3</Badge>
                  <span>Move state to the parent</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500">4</Badge>
                  <span>Pass state and updater functions as props</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Benefits</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Share state between siblings</li>
                  <li>• Single source of truth</li>
                  <li>• Synchronized data</li>
                  <li>• Easier to debug</li>
                </ul>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">💡 When to Use</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Multiple components need same data</li>
                  <li>• Sibling components communicate</li>
                  <li>• Keep data in sync</li>
                  <li>• Derived values needed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Simple Example"
            description="Sharing count between buttons"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Lifting State to Parent"
            description="State lifted from children to parent"
            language="javascript"
            colorTheme="green"
            code={simplifiedCode}
            output={[
              '// State lives in Parent',
              '// Both buttons update the same count',
              '// Display shows synchronized value',
              '',
              'Click Button1: Count: 1',
              'Click Button2: Count: 6',
              'Click Button1: Count: 7',
              '',
              '✅ All components share the same state',
              '✅ Single source of truth'
            ]}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Interactive Preview"
            description="See lifting state up in action"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Shared Count Dashboard"
            description="Parent owns the shared count and both buttons update it"
            colorTheme="emerald"
            html={`<div id="root"></div>`}
            css={previewCss}
            react={previewReactCode}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Real-World Example"
            description="Temperature converter with derived values"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Temperature Calculator"
            description="Lifting state enables two-way sync and derived calculations"
            language="javascript"
            colorTheme="blue"
            code={exampleCode}
            output={[
              '// Type in Celsius input: 100',
              '> Fahrenheit automatically shows: 212',
              '> Verdict: "The water would boil."',
              '',
              '// Type in Fahrenheit input: 50',
              '> Celsius automatically shows: 10',
              '> Verdict: "The water would not boil."',
              '',
              '✅ Both inputs stay synchronized',
              '✅ Verdict updates automatically'
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
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Single Source of Truth</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">State lives in one place, shared via props</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Parent Manages State</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Closest common ancestor owns the state</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Pass Updaters Down</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Children call functions to update parent state</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Synchronized Data</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">All components see the same state</p>
              </div>
            </div>
            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Fundamental Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Lifting state up is one of the most important patterns in React. Master it for effective component communication!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  AlertCircle,
  Zap,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  GitPullRequest,
  Radio,
  Workflow,
  Clock,
  TrendingUp,
  AlertTriangle,
  UserPlus,
} from 'lucide-react';

interface RxjsPushPullProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

// Animated Push vs Pull Component
const AnimatedPushPull = () => {
  const [mode, setMode] = useState<'pull' | 'push'>('pull');
  const [isAnimating, setIsAnimating] = useState(false);
  const [consumerRequesting, setConsumerRequesting] = useState(false);
  const [producerSending, setProducerSending] = useState(false);
  const [dataFlow, setDataFlow] = useState<Array<{ id: number; value: number }>>([]);
  const [operations, setOperations] = useState<string[]>([]);

  const runPullAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMode('pull');
    setDataFlow([]);
    setOperations([]);
    setConsumerRequesting(false);
    setProducerSending(false);

    await new Promise(resolve => setTimeout(resolve, 500));
    setOperations(['🔵 Pull System Started']);
    await new Promise(resolve => setTimeout(resolve, 800));

    // Consumer requests data
    for (let i = 1; i <= 3; i++) {
      setOperations(prev => [...prev, `→ Consumer requests data #${i}`]);
      setConsumerRequesting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setOperations(prev => [...prev, `← Producer responds with value: ${i * 10}`]);
      setConsumerRequesting(false);
      setProducerSending(true);
      await new Promise(resolve => setTimeout(resolve, 800));

      setDataFlow(prev => [...prev, { id: i, value: i * 10 }]);
      setProducerSending(false);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setOperations(prev => [...prev, '✅ Consumer controlled all requests']);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset
    setDataFlow([]);
    setOperations([]);
    setIsAnimating(false);
  };

  const runPushAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMode('push');
    setDataFlow([]);
    setOperations([]);
    setConsumerRequesting(false);
    setProducerSending(false);

    await new Promise(resolve => setTimeout(resolve, 500));
    setOperations(['🔴 Push System Started']);
    await new Promise(resolve => setTimeout(resolve, 800));

    setOperations(prev => [...prev, '→ Consumer subscribes (passive)']);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Producer pushes data
    for (let i = 1; i <= 3; i++) {
      setOperations(prev => [...prev, `← Producer pushes value: ${i * 10}`]);
      setProducerSending(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setDataFlow(prev => [...prev, { id: i, value: i * 10 }]);
      setProducerSending(false);
      await new Promise(resolve => setTimeout(resolve, 1200));
    }

    setOperations(prev => [...prev, '✅ Producer controlled all emissions']);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset
    setDataFlow([]);
    setOperations([]);
    setIsAnimating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Workflow className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
          Animated Push vs Pull Visualization
        </CardTitle>
        <CardDescription className="text-base">
          Watch how data flows differently in Pull (consumer-driven) vs Push (producer-driven) systems
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mode Indicator */}
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border text-center">
          <Badge className={`text-sm ${
            mode === 'pull' ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'
          }`}>
            {mode === 'pull' ? '🔵 Pull System (Consumer Controlled)' : '🔴 Push System (Producer Controlled)'}
          </Badge>
        </div>

        {/* Visualization */}
        <div className="p-6 bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/20 rounded-xl border-2 border-indigo-200/50 dark:border-indigo-800/30">
          <div className="flex items-center justify-between">
            {/* Producer */}
            <div className="flex flex-col items-center space-y-3">
              <div className={`w-24 h-24 rounded-xl flex items-center justify-center transition-all ${
                producerSending
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl scale-110 animate-pulse'
                  : 'bg-gradient-to-br from-purple-400 to-pink-400 text-white opacity-70'
              }`}>
                <Radio className="w-8 h-8" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm">Producer</h4>
                <p className="text-xs text-muted-foreground">Data Source</p>
              </div>
            </div>

            {/* Data Flow Arrow */}
            <div className="flex-1 mx-4 relative">
              <div className="flex items-center justify-center gap-2">
                {mode === 'pull' ? (
                  <>
                    {consumerRequesting && (
                      <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
                    )}
                    {producerSending && (
                      <ArrowLeft className="w-6 h-6 text-purple-600 animate-pulse" />
                    )}
                  </>
                ) : (
                  <>
                    {producerSending && (
                      <ArrowRight className="w-6 h-6 text-rose-600 animate-pulse" />
                    )}
                  </>
                )}
              </div>
              
              {/* Data Values */}
              <div className="mt-4 flex gap-2 justify-center flex-wrap min-h-[40px]">
                {dataFlow.map((data) => (
                  <div
                    key={data.id}
                    className={`px-3 py-1.5 rounded-lg text-white font-mono text-sm animate-in zoom-in ${
                      mode === 'pull'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        : 'bg-gradient-to-r from-rose-500 to-orange-500'
                    }`}
                  >
                    {data.value}
                  </div>
                ))}
              </div>
            </div>

            {/* Consumer */}
            <div className="flex flex-col items-center space-y-3">
              <div className={`w-24 h-24 rounded-xl flex items-center justify-center transition-all ${
                consumerRequesting
                  ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl scale-110 animate-pulse'
                  : 'bg-gradient-to-br from-blue-400 to-cyan-400 text-white opacity-70'
              }`}>
                <UserPlus className="w-8 h-8" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm">Consumer</h4>
                <p className="text-xs text-muted-foreground">Data Receiver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Log */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">System Operations</h4>
          <div className="min-h-[150px] max-h-[200px] overflow-y-auto p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
            {operations.length === 0 ? (
              <div className="text-slate-500">Select a system type to see how data flows...</div>
            ) : (
              <div className="space-y-1">
                {operations.map((op, index) => (
                  <div
                    key={index}
                    className={`animate-in fade-in duration-300 ${
                      op.includes('✅') ? 'text-green-400 font-bold' :
                      op.includes('→') ? 'text-cyan-400' :
                      op.includes('←') ? 'text-purple-400' :
                      op.includes('🔵') ? 'text-blue-400 font-bold' :
                      op.includes('🔴') ? 'text-rose-400 font-bold' :
                      'text-slate-400'
                    }`}
                  >
                    {op}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t flex-wrap">
          <Button
            onClick={runPullAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50"
          >
            <GitPullRequest className="w-4 h-4 mr-2" />
            Run Pull System
          </Button>
          <Button
            onClick={runPushAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-rose-600 to-orange-600 text-white hover:from-rose-500 hover:to-orange-500 disabled:opacity-50"
          >
            <Radio className="w-4 h-4 mr-2" />
            Run Push System
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Key Difference</AlertTitle>
          <AlertDescription>
            <strong className="text-blue-600 dark:text-blue-400">Pull</strong>: Consumer decides when to request data (synchronous, blocking). 
            <strong className="text-rose-600 dark:text-rose-400 ml-2">Push</strong>: Producer decides when to send data (asynchronous, non-blocking).
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function RxjsPushPull({}: RxjsPushPullProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Workflow}
        category="RxJS Fundamentals"
        title="Push vs Pull Systems"
        description="Master the fundamental difference between Pull and Push data flow paradigms - the foundation for understanding Observables and reactive programming."
        colorTheme="indigo"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What are Push and Pull Systems?
          </CardTitle>
          <CardDescription className="text-base">
            Push and Pull are two different protocols describing how data producers and consumers communicate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of it like a restaurant: In a <strong>Pull system</strong>, you (consumer) walk to the kitchen and ask for food when you want it. In a <strong>Push system</strong>, the waiter (producer) brings food to your table when it's ready - you don't control the timing!
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <GitPullRequest className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Pull System</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Consumer controls when data is received
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Consumer requests → Producer responds
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Synchronous & blocking
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Examples: Functions, Iterators
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold text-sm">Push System</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Producer controls when data is sent
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Producer sends → Consumer reacts
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Asynchronous & non-blocking
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Examples: Promises, Observables
                </li>
              </ul>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Core Concept</AlertTitle>
            <AlertDescription>
              The key difference: <strong>Who decides when data is delivered?</strong> In Pull, the consumer is in control. In Push, the producer is in control. This fundamentally changes how we write asynchronous code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <AnimatedPushPull />

      {/* Pull Systems Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitPullRequest className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Pull Systems (Consumer Controlled)
          </CardTitle>
          <CardDescription className="text-base">
            The consumer actively requests data when needed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Functions */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Functions (Pull)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">Synchronous</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Function: Consumer pulls data
function getData() {
  return "Hello World";
}

// Consumer controls WHEN to get data
const data1 = getData(); // Pull now
console.log(data1);

// Wait...
setTimeout(() => {
  const data2 = getData(); // Pull later
  console.log(data2);
}, 1000);`}</pre>
              <SnippetOutput lines={['Hello World', '(after 1s) Hello World']} />
              <p className="text-xs text-muted-foreground">
                ✅ Consumer calls function when ready
              </p>
            </div>

            {/* Iterators */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Iterators (Pull)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">Lazy</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Iterator: Consumer pulls each value
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = numberGenerator();

// Consumer controls pace
console.log(iterator.next().value); // 1
// Do some work...
console.log(iterator.next().value); // 2
// More work...
console.log(iterator.next().value); // 3`}</pre>
              <SnippetOutput lines={['1', '2', '3']} />
              <p className="text-xs text-muted-foreground">
                ✅ Consumer pulls values one at a time
              </p>
            </div>

            {/* Array Iteration */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Array Iteration (Pull)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const numbers = [1, 2, 3, 4, 5];

// Consumer pulls each value
for (const num of numbers) {
  console.log(num);
  // Consumer controls when to pull next value
  if (num === 3) break; // Can stop anytime
}

// Output: 1, 2, 3 (stopped early)`}</pre>
              <SnippetOutput lines={['1', '2', '3']} />
            </div>

            {/* Async Iterator */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Async Iterators (Pull)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function* asyncGen() {
  yield await fetch('/api/data1');
  yield await fetch('/api/data2');
  yield await fetch('/api/data3');
}

// Consumer pulls async values
for await (const data of asyncGen()) {
  console.log(data);
  // Control when to pull next
}`}</pre>
            </div>
          </div>

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Pull Characteristics</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Consumer decides WHEN to get data
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Usually synchronous and blocking
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Lazy evaluation - data computed on demand
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Consumer can stop/pause anytime
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Push Systems Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Radio className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Push Systems (Producer Controlled)
          </CardTitle>
          <CardDescription className="text-base">
            The producer sends data when it's ready
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Promises */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Promises (Push)</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 text-xs">Single Value</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Promise: Producer pushes data when ready
const promise = fetch('/api/data');

// Consumer subscribes (passive)
promise.then(data => {
  console.log(data);
  // Producer decided WHEN to send data
  // Consumer just reacts
});

// Can't control when data arrives
// Producer is in control`}</pre>
              <SnippetOutput lines={['(when ready) { data: "..." }']} />
              <p className="text-xs text-muted-foreground">
                ✅ Producer resolves when data is ready
              </p>
            </div>

            {/* Observables */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Observables (Push)</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 text-xs">Multiple Values</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`import { interval } from 'rxjs';

// Observable: Producer pushes values
const observable$ = interval(1000);

// Consumer subscribes (passive)
observable$.subscribe(value => {
  console.log(value);
  // Producer controls timing
  // Values arrive every 1 second
});

// Output: 0, 1, 2, 3... (pushed by producer)`}</pre>
              <SnippetOutput lines={['0', '1', '2', '3', '...']} />
              <p className="text-xs text-muted-foreground">
                ✅ Producer pushes values over time
              </p>
            </div>

            {/* Event Listeners */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Event Listeners (Push)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Events: Producer pushes when user acts
button.addEventListener('click', (event) => {
  console.log('Clicked!', event);
  // Producer (browser) decides when to push
  // Based on user action
});

// Consumer can't control when clicks happen
// Just reacts to pushed events`}</pre>
              <SnippetOutput lines={['(when clicked) Clicked! MouseEvent {...}']} />
            </div>

            {/* WebSocket */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">WebSocket (Push)</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const socket = new WebSocket('ws://server');

// Consumer subscribes to messages
socket.onmessage = (event) => {
  console.log('Received:', event.data);
  // Server pushes data when available
  // Consumer just reacts
};

// Data pushed by server, not pulled by client`}</pre>
            </div>
          </div>

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Push Characteristics</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Producer decides WHEN to send data
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Asynchronous and non-blocking
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Eager evaluation - producer controls flow
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Consumer reacts to pushed data
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="bg-gradient-to-br from-slate-50/60 to-indigo-50/60 dark:from-slate-950/10 dark:to-indigo-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Pull vs Push Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Pull System</th>
                  <th className="text-left p-3 font-semibold text-rose-600 dark:text-rose-400">Push System</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">Control</td>
                  <td className="p-3">Consumer decides when</td>
                  <td className="p-3">Producer decides when</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Flow</td>
                  <td className="p-3">Request → Response</td>
                  <td className="p-3">Subscribe → Receive</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Timing</td>
                  <td className="p-3">Synchronous (usually)</td>
                  <td className="p-3">Asynchronous</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Values</td>
                  <td className="p-3">On demand</td>
                  <td className="p-3">When available</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Examples</td>
                  <td className="p-3">Functions, Iterators, Generators</td>
                  <td className="p-3">Promises, Observables, Events</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Use Case</td>
                  <td className="p-3">Known data, user-paced</td>
                  <td className="p-3">Unknown timing, events, streams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Real-World Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pull Use Case 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-blue-600" />
                Pull: Pagination
              </h4>
              <p className="text-xs text-muted-foreground">
                User controls when to load more data
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// User clicks "Load More" button
async function loadMore() {
  const page = currentPage + 1;
  // Consumer pulls next page
  const data = await fetchPage(page);
  displayData(data);
}

// Consumer decides when to pull
button.onClick = loadMore;`}</pre>
            </div>

            {/* Push Use Case 1 */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-orange-50/60 dark:from-rose-950/10 dark:to-orange-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Radio className="w-5 h-5 text-rose-600" />
                Push: Live Updates
              </h4>
              <p className="text-xs text-muted-foreground">
                Server pushes new data when available
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Stock prices pushed from server
const stockStream$ = new WebSocket('ws://stocks');

stockStream$.subscribe(price => {
  updateUI(price);
  // Producer (server) controls timing
  // Consumer just reacts
});

// Data pushed automatically`}</pre>
            </div>

            {/* Pull Use Case 2 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold">Pull: Database Queries</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Query database when needed
async function getUser(id) {
  // Pull data on demand
  return await db.users.findById(id);
}

// Application controls when to query
const user = await getUser(123);`}</pre>
            </div>

            {/* Push Use Case 2 */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-orange-50/60 dark:from-rose-950/10 dark:to-orange-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
              <h4 className="font-semibold">Push: Chat Messages</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Messages pushed when received
chatSocket.on('message', (msg) => {
  displayMessage(msg);
  // Server pushes when message arrives
  // Can't control timing
});

// Messages arrive asynchronously`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Observables are Push */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Why RxJS Observables are Push-Based
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Observables are the <strong>ultimate push system</strong> - they can push multiple values over time, asynchronously, and the producer controls when values are emitted.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Observable Creation</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`import { Observable } from 'rxjs';

// Create observable (producer)
const observable$ = new Observable(subscriber => {
  // Producer controls timing
  subscriber.next(1);
  setTimeout(() => subscriber.next(2), 1000);
  setTimeout(() => subscriber.next(3), 2000);
  setTimeout(() => subscriber.complete(), 3000);
});

// Consumer subscribes (passive)
observable$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Done!')
});`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple Subscribers</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`import { Subject } from 'rxjs';

// Subject: Push to multiple consumers
const subject$ = new Subject();

// Consumer 1
subject$.subscribe(val => console.log('A:', val));

// Consumer 2
subject$.subscribe(val => console.log('B:', val));

// Producer pushes to all
subject$.next(1); // A: 1, B: 1
subject$.next(2); // A: 2, B: 2`}</pre>
            </div>
          </div>

          <Alert>
            <Zap className="h-4 w-4" />
            <AlertTitle>Observable Power</AlertTitle>
            <AlertDescription>
              Observables combine the best of both worlds: they're lazy (don't execute until subscribed) like Pull systems, but deliver values asynchronously like Push systems. They're push-based because once subscribed, the producer controls when values are emitted.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Common Mistakes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-rose-700 dark:text-rose-300">❌ Treating Observables like Functions</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">Wrong</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// WRONG: Treating as Pull
const data = observable$.getValue(); // No such method!

// Observables don't have synchronous getValue()
// They PUSH values asynchronously`}</pre>
            </div>

            {/* Solution 1 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">✅ Subscribe to Receive</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Correct</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// CORRECT: Subscribe to pushed values
observable$.subscribe(data => {
  console.log(data);
  // Wait for producer to push
});

// Or use async/await with firstValueFrom
const data = await firstValueFrom(observable$);`}</pre>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold text-rose-700 dark:text-rose-300">❌ Blocking for Promises</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// WRONG: Treating Promise as Pull
function getData() {
  const promise = fetch('/api');
  // Can't get value synchronously!
  return promise; // Still pending
}

const data = getData(); // Promise, not data`}</pre>
            </div>

            {/* Solution 2 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">✅ Await Push</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// CORRECT: Await pushed value
async function getData() {
  const data = await fetch('/api');
  return data; // Actual data
}

// Or use .then()
fetch('/api').then(data => console.log(data));`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Use Pull When
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  Data is available synchronously
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  Consumer should control pace
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  One-time data fetching
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5" />
                  User-triggered actions
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600" />
                Use Push When
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rose-500 mt-0.5" />
                  Data arrives asynchronously
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rose-500 mt-0.5" />
                  Multiple values over time
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rose-500 mt-0.5" />
                  Real-time data streams
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rose-500 mt-0.5" />
                  Event-driven systems
                </li>
              </ul>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription>
              <strong>Pull for control, Push for reactivity.</strong> If you need to control when data is retrieved, use Pull (functions, iterators). If you need to react to data as it arrives, use Push (Promises, Observables, events).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

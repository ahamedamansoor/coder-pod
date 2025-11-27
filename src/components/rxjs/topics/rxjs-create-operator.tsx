'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Zap,
  Wrench,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Code2,
  ArrowRight,
  Trash2,
} from 'lucide-react';

interface RxjsCreateOperatorProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">
        IO
      </span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">
        Output
      </p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">
      {lines.join('\n')}
    </pre>
  </div>
);

// Animated visualization for "create" style custom observable
const AnimatedCustomObservable = () => {
  const [phase, setPhase] = useState<'idle' | 'subscribed' | 'emitting' | 'completed' | 'teardown'>('idle');
  const [emissions, setEmissions] = useState<Array<{ id: number; value: number; method: 'next'; status: 'calling' | 'emitted' }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCall, setCurrentCall] = useState<string | null>(null);
  const [subscriberMethods, setSubscriberMethods] = useState<{ next: number; error: number; complete: number }>({
    next: 0,
    error: 0,
    complete: 0
  });

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('subscribed');
    setEmissions([]);
    setLogLines(['new Observable((subscriber) => { ... })', 'Subscription started', 'Observable function executing...']);
    setSubscriberMethods({ next: 0, error: 0, complete: 0 });
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setPhase('emitting');
    setLogLines((prev) => [...prev, 'Calling subscriber methods...']);
    
    const values = [10, 20, 30];

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      
      // Show calling
      setCurrentCall(`subscriber.next(${value})`);
      setLogLines((prev) => [...prev, `→ subscriber.next(${value})`]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      // Add emission
      setEmissions((prev) => [...prev, { id: i, value, method: 'next', status: 'calling' }]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      // Mark as emitted
      setEmissions((prev) =>
        prev.map((e) => e.id === i ? { ...e, status: 'emitted' } : e)
      );
      setSubscriberMethods((prev) => ({ ...prev, next: prev.next + 1 }));
      setLogLines((prev) => [...prev, `  ✓ Observer received: ${value}`]);
      setCurrentCall(null);
      
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    // Complete
    setPhase('completed');
    setCurrentCall('subscriber.complete()');
    setLogLines((prev) => [...prev, '→ subscriber.complete()']);
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    setSubscriberMethods((prev) => ({ ...prev, complete: prev.complete + 1 }));
    setLogLines((prev) => [...prev, '  ✓ Stream completed!']);
    setCurrentCall(null);
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Teardown
    setPhase('teardown');
    setLogLines((prev) => [...prev, 'Teardown function executing...', '🧹 Resources cleaned up']);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset
    setEmissions([]);
    setLogLines([]);
    setPhase('idle');
    setSubscriberMethods({ next: 0, error: 0, complete: 0 });
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated new Observable() - Custom Creation
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>new Observable((subscriber) =&gt; &#123;...&#125;)</code> gives you full control over emissions. The animation shows subscription, subscriber method calls, and teardown with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            Custom observables let you manually control <code>next()</code>, <code>error()</code>, <code>complete()</code>, and cleanup!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Lifecycle Phase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Lifecycle Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'subscribed' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30' :
                phase === 'emitting' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                phase === 'completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' :
                'bg-orange-100 text-orange-700 dark:bg-orange-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' :
                 phase === 'subscribed' ? 'Subscribed' :
                 phase === 'emitting' ? 'Emitting' :
                 phase === 'completed' ? 'Completed' :
                 'Teardown'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[240px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Subscriber API</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'subscribed' || phase === 'emitting'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'completed'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : phase === 'teardown'
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'subscribed' || phase === 'emitting' ? (
                      <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                    ) : phase === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : phase === 'teardown' ? (
                      <Trash2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Wrench className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to subscribe' :
                     phase === 'subscribed' ? 'Observable executing' :
                     phase === 'emitting' ? 'Calling methods' :
                     phase === 'completed' ? 'Stream ended' :
                     'Cleaning up'}
                  </span>
                </div>

                {/* Method Call Counter */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">next() calls:</span>
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{subscriberMethods.next}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">error() calls:</span>
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">{subscriberMethods.error}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">complete() calls:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{subscriberMethods.complete}</span>
                  </div>
                </div>

                {currentCall && (
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded border border-indigo-400 dark:border-indigo-600">
                    <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono animate-pulse">
                      Calling: {currentCall}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Emissions Stream */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-600" />
                Emission Stream
              </h4>
            </div>
            <div className="min-h-[240px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Emitted Values</p>
              
              <div className="space-y-2">
                {emissions.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Values appear as next() is called</span>
                )}
                {emissions.map((emission) => (
                  <div
                    key={emission.id}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      emission.status === 'calling'
                        ? 'bg-indigo-100 dark:bg-indigo-900/20 border-indigo-400 dark:border-indigo-600 animate-pulse'
                        : 'bg-emerald-100 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold ${
                      emission.status === 'calling'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-sm'
                    }`}>
                      {emission.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">
                        {emission.status === 'calling' ? 'Calling next()...' : 'Emitted'}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        subscriber.next({emission.value})
                      </div>
                    </div>
                    {emission.status === 'emitted' && (
                      <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                ))}
                
                {phase === 'completed' && (
                  <div className="flex items-center gap-2 p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg border border-emerald-400 dark:border-emerald-600">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Complete</div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        subscriber.complete()
                      </div>
                    </div>
                  </div>
                )}
                
                {phase === 'teardown' && (
                  <div className="flex items-center gap-2 p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg border border-orange-400 dark:border-orange-600">
                    <Trash2 className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Teardown</div>
                      <div className="text-[10px] text-muted-foreground">
                        Cleanup function called
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Observer Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Execution Log
              </h4>
            </div>
            <div className="min-h-[240px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[240px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Observable execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('new Observable') ? 'text-purple-400' :
                      line.includes('Subscription started') ? 'text-blue-400' :
                      line.includes('→ subscriber.next') ? 'text-yellow-400' :
                      line.includes('✓ Observer received') ? 'text-cyan-400' :
                      line.includes('→ subscriber.complete') ? 'text-orange-400' :
                      line.includes('✓ Stream completed') ? 'text-emerald-400' :
                      line.includes('Teardown') ? 'text-amber-400' :
                      line.includes('🧹') ? 'text-green-400' :
                      'text-slate-300'
                    }`}
                  >
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const custom$ = new Observable<number>((subscriber) => {
  subscriber.next(10);
  subscriber.next(20);
  subscriber.next(30);
  subscriber.complete();
  
  // Teardown function - called on unsubscribe/complete
  return () => console.log('🧹 Cleanup!');
});

custom$.subscribe({
  next: (value) => console.log('Received:', value),
  complete: () => console.log('Done!')
});`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsCreateOperator({}: RxjsCreateOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Wrench}
        category="RxJS · Creation Operators"
        title="Custom Observables with create()"
        description="Learn how to build your own observables with new Observable(), when to do it, and how to avoid common pitfalls."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why “create” your own observables?
          </CardTitle>
          <CardDescription className="text-base">
            Most of the time you&apos;ll use helpers like <code>of</code>, <code>from</code>, or <code>fromEvent</code>. But sometimes you
            need full control over <code>next</code>, <code>error</code>, <code>complete</code>, and teardown logic.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Wrap non-RxJS APIs',
              text: 'Turn callback-based APIs, custom event emitters, and low-level resources into observables.',
            },
            {
              title: 'Define clear lifecycles',
              text: 'Explicitly control when values emit, when the stream ends, and how everything is cleaned up.',
            },
            {
              title: 'Teach and prototype',
              text: 'Understanding custom observables makes it much easier to reason about all other RxJS streams.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What "create" looks like in modern RxJS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wrench className="w-6 h-6 text-indigo-600" />
            Modern create(): new Observable()
          </CardTitle>
          <CardDescription className="text-base">
            In RxJS 7/8, <code>Observable.create</code> is deprecated. You create observables with <code>new Observable(subscriber =&gt; &#123;
            ... &#125;)</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Basic custom observable</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

const myObservable$ = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

myObservable$.subscribe({
  next: (value) => console.log('value', value),
  complete: () => console.log('complete'),
});

// Output:
// value 1
// value 2
// value 3
// complete`}
            </pre>
            <SnippetOutput
              lines={[
                'value 1',
                'value 2',
                'value 3',
                'complete',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              This is the foundation: the function you pass to <code>new Observable()</code> is called once per subscription and receives a
              <code>subscriber</code> with <code>next</code>, <code>error</code>, and <code>complete</code>.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Teardown logic</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const ticking$ = new Observable<number>((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // Teardown: called on complete, error, or unsubscribe
  return () => {
    clearInterval(id);
    console.log('🧹 interval cleared');
  };
});`}
            </pre>
            <SnippetOutput lines={['0', '1', '2', '🧹 interval cleared']} />
            <p className="text-xs text-muted-foreground">
              Always release timers, sockets, and listeners in the teardown function so they don&apos;t leak when the subscription ends.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated visualization */}
      <AnimatedCustomObservable />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns for custom observables
          </CardTitle>
          <CardDescription className="text-base">
            When built-in creators don&apos;t fit, custom observables shine—especially around callbacks and resources.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Wrap a Node-style callback API</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

function readFile$(path: string) {
  return new Observable<string>((subscriber) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        subscriber.error(err);
        return;
      }
      subscriber.next(data);
      subscriber.complete();
    });
  });
}`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Here <code>new Observable</code> acts like <code>fromCallback</code>: it exposes a clean observable interface around a callback
              API.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Wrap a WebSocket with cleanup</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

function socket$(url: string) {
  return new Observable<string>((subscriber) => {
    const socket = new WebSocket(url);

    socket.addEventListener('message', (event) => subscriber.next(event.data));
    socket.addEventListener('error', (err) => subscriber.error(err));
    socket.addEventListener('close', () => subscriber.complete());

    // Teardown closes the socket
    return () => socket.close();
  });
}`}
            </pre>
            <SnippetOutput
              lines={["msg 'hello'", "msg 'goodbye'", '// socket closed on unsubscribe']}
            />
            <p className="text-xs text-muted-foreground">
              This pattern shows the full lifecycle: subscription opens the socket, teardown closes it when you unsubscribe or complete.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* When to prefer helpers like defer() */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            create() vs defer() vs from()
          </CardTitle>
          <CardDescription className="text-base">
            Custom observables are powerful, but many patterns are easier with built-in helpers—and easier to test.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <Alert>
            <AlertTitle>Tip</AlertTitle>
            <AlertDescription>
              Reach for <code>defer()</code>, <code>from()</code>, or <code>fromEvent()</code> first; use <code>new Observable()</code> when
              none of them fit your scenario.
            </AlertDescription>
          </Alert>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">
                    new Observable()
                  </th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">
                    defer()
                  </th>
                  <th className="text-left p-3 font-semibold text-sky-600 dark:text-sky-400">
                    from()
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">Control</td>
                  <td className="p-3">Full manual control</td>
                  <td className="p-3">Factory that returns observables</td>
                  <td className="p-3">Wrap existing promises/iterables</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typical use</td>
                  <td className="p-3">Wrapping low-level APIs, teaching</td>
                  <td className="p-3">Lazy creation of HTTP or streams</td>
                  <td className="p-3">Bridging async data sources</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for custom observables
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Always implement teardown logic for timers, sockets, and listeners.</li>
              <li>✅ Call <code>complete()</code> or <code>error()</code> exactly once and never emit after that.</li>
              <li>✅ Document the contract: what values emit, in what order, and when the stream ends.</li>
              <li>✅ Prefer composition: use operators inside the observable body sparingly; keep it focused on wiring.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Reimplementing helpers like <code>fromEvent</code> or <code>from</code>—use built-ins when possible.</li>
              <li>❌ Forgetting to clean up resources, leading to memory leaks or duplicate events.</li>
              <li>❌ Emitting values after <code>complete()</code> or <code>error()</code>—subscribers will never see them.</li>
              <li>❌ Hiding complex side effects in the observable constructor; keep it predictable and testable.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


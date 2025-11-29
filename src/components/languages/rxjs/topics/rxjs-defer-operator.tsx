'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Activity,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Factory,
  Clock,
  UserPlus,
  Repeat,
} from 'lucide-react';

interface RxjsDeferOperatorProps {}

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

const AnimatedDeferFactories = () => {
  const [phase, setPhase] = useState<'idle' | 'defining' | 'subscribing'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [eagerValue, setEagerValue] = useState<number | null>(null);
  const [deferFactoryCalls, setDeferFactoryCalls] = useState(0);
  const [subscriptions, setSubscriptions] = useState<Array<{
    id: number;
    type: 'eager' | 'defer';
    value: number;
    factoryCall: number;
  }>>([]);
  const [currentAction, setCurrentAction] = useState<string | null>(null);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('defining');
    setLogLines(['// Defining observables...']);
    setEagerValue(null);
    setDeferFactoryCalls(0);
    setSubscriptions([]);
    setCurrentAction(null);

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Eager evaluation - value captured immediately
    setCurrentAction('Eager: of(Date.now()) - evaluating now!');
    const eagerTimestamp = Date.now() % 100000;
    setEagerValue(eagerTimestamp);
    setLogLines((prev) => [...prev, `const eager$ = of(${eagerTimestamp})`, `  → Factory executed immediately!`, `  → Value captured: ${eagerTimestamp}`]);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Defer - no evaluation yet
    setCurrentAction('Defer: defer(() => of(Date.now()))');
    setLogLines((prev) => [...prev, `const defer$ = defer(() => of(Date.now()))`, `  → Factory NOT executed yet`, `  → Waiting for subscription...`]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCurrentAction(null);

    // First subscription
    setPhase('subscribing');
    setLogLines((prev) => [...prev, '', '// First subscription:']);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Eager subscribe 1
    setCurrentAction('eager$.subscribe()');
    setSubscriptions([{ id: 1, type: 'eager', value: eagerTimestamp, factoryCall: 0 }]);
    setLogLines((prev) => [...prev, `eager$.subscribe()`, `  → Returns cached value: ${eagerTimestamp}`]);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Defer subscribe 1
    setCurrentAction('defer$.subscribe() - calling factory!');
    setDeferFactoryCalls(1);
    const defer1Value = (Date.now() % 100000);
    setSubscriptions((prev) => [...prev, { id: 2, type: 'defer', value: defer1Value, factoryCall: 1 }]);
    setLogLines((prev) => [...prev, `defer$.subscribe()`, `  → Factory executed (call #1)`, `  → Fresh value: ${defer1Value}`]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCurrentAction(null);

    // Second subscription
    setLogLines((prev) => [...prev, '', '// Second subscription:']);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Eager subscribe 2
    setCurrentAction('eager$.subscribe()');
    setSubscriptions((prev) => [...prev, { id: 3, type: 'eager', value: eagerTimestamp, factoryCall: 0 }]);
    setLogLines((prev) => [...prev, `eager$.subscribe()`, `  → Returns same cached value: ${eagerTimestamp}`]);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Defer subscribe 2
    setCurrentAction('defer$.subscribe() - calling factory again!');
    setDeferFactoryCalls(2);
    const defer2Value = (Date.now() % 100000);
    setSubscriptions((prev) => [...prev, { id: 4, type: 'defer', value: defer2Value, factoryCall: 2 }]);
    setLogLines((prev) => [...prev, `defer$.subscribe()`, `  → Factory executed (call #2)`, `  → Fresh value: ${defer2Value}`]);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setCurrentAction(null);

    setPhase('idle');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset
    setLogLines([]);
    setEagerValue(null);
    setDeferFactoryCalls(0);
    setSubscriptions([]);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated defer() - Lazy Factory Execution
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>defer(() =&gt; of(Date.now()))</code> delays factory execution until subscription time, creating fresh values for each subscriber. Compare this with eager evaluation where the value is captured immediately.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>defer()</code> runs the factory function on every subscribe(), enabling fresh state capture and lazy initialization!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Factory Execution Tracking */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Factory Calls
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'defining' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30' :
                'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'defining' ? 'Defining' : 'Subscribing'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[240px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Execution Tracking</p>
              
              <div className="space-y-4">
                {/* Eager */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">Eager Observable</span>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="text-[10px] font-mono mb-2">of(Date.now())</div>
                  {eagerValue !== null ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Executed at definition</span>
                      </div>
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800">
                        <span className="text-[10px] font-mono">Value: {eagerValue}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-[10px] text-muted-foreground">Not executed yet</span>
                  )}
                </div>

                {/* Defer */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">Defer Observable</span>
                    <Factory className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-[10px] font-mono mb-2">defer(() =&gt; of(Date.now()))</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <Repeat className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Factory calls: {deferFactoryCalls}</span>
                    </div>
                    {deferFactoryCalls === 0 ? (
                      <div className="text-[10px] text-muted-foreground">⏳ Waiting for subscribe...</div>
                    ) : (
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400">✓ Fresh value per call!</div>
                    )}
                  </div>
                </div>

                {currentAction && (
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded border border-indigo-400 dark:border-indigo-600 animate-pulse">
                    <p className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">
                      {currentAction}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-indigo-600" />
                Subscriptions
              </h4>
            </div>
            <div className="min-h-[240px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Subscriber Values</p>
              
              <div className="space-y-2">
                {subscriptions.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Subscriptions appear here</span>
                )}
                {subscriptions.map((sub) => (
                  <div
                    key={sub.id}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      sub.type === 'eager'
                        ? 'bg-orange-100 dark:bg-orange-900/20 border-orange-400 dark:border-orange-600'
                        : 'bg-emerald-100 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                      sub.type === 'eager'
                        ? 'bg-orange-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {sub.type === 'eager' ? 'E' : 'D'}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">
                        {sub.type === 'eager' ? 'Eager' : 'Defer'} #{Math.floor(sub.id / 2) + 1}
                      </div>
                      <div className="text-[10px] font-mono">
                        Value: {sub.value}
                      </div>
                      {sub.type === 'defer' && (
                        <div className="text-[9px] text-emerald-600 dark:text-emerald-400">
                          Factory call #{sub.factoryCall}
                        </div>
                      )}
                    </div>
                    {sub.type === 'defer' && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Execution Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Execution Log
              </h4>
            </div>
            <div className="min-h-[240px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[240px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// defer() execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('// Defining') || line.includes('// First') || line.includes('// Second') ? 'text-gray-500 mt-1' :
                      line.includes('const eager') ? 'text-orange-400' :
                      line.includes('const defer') ? 'text-emerald-400' :
                      line.includes('→ Factory executed immediately') ? 'text-orange-300' :
                      line.includes('→ Value captured') ? 'text-orange-300' :
                      line.includes('→ Factory NOT executed') ? 'text-amber-400' :
                      line.includes('→ Waiting for') ? 'text-slate-400' :
                      line.includes('eager$.subscribe') ? 'text-orange-400' :
                      line.includes('defer$.subscribe') ? 'text-emerald-400' :
                      line.includes('→ Returns cached') ? 'text-orange-300' :
                      line.includes('→ Returns same cached') ? 'text-orange-300' :
                      line.includes('→ Factory executed (call') ? 'text-green-400' :
                      line.includes('→ Fresh value') ? 'text-green-400' :
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
{`const eager$ = of(Date.now());      // ⚡ Executed NOW
const defer$ = defer(() =>          // 💤 Lazy - waits
  of(Date.now())
);

eager$.subscribe(); // Returns cached value
defer$.subscribe(); // Executes factory, fresh value

eager$.subscribe(); // Same cached value again
defer$.subscribe(); // Executes factory again, new fresh value`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsDeferOperator({}: RxjsDeferOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="RxJS · Creation Operators"
        title="defer() – Lazy observable factories"
        description="Use defer() when you need a fresh observable per subscription, defer side effects, or ensure state is captured right before the stream runs."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why defer() matters
          </CardTitle>
          <CardDescription className="text-base">
            <code>defer()</code> delays observable creation until subscription time, ensuring each subscriber observes fresh data and
            side effects happen only when needed.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Fresh values for each subscriber',
              text: 'Time stamps, random numbers, tokens, and state snapshots are captured at subscribe time.',
            },
            {
              title: 'Lazy work',
              text: 'Avoid running side effects at module load—defer them until someone actually subscribes.',
            },
            {
              title: 'Clean per-subscription resources',
              text: 'Use defer() to return new observables with their own teardown logic for each subscriber.',
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

      {/* Basic usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Basic defer() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>defer(factory)</code> runs the factory inside each subscribe call. The factory should return an observable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Eager vs deferred timestamps</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, defer } from 'rxjs';

const eager$ = of(Date.now());
const deferred$ = defer(() => of(Date.now()));

setTimeout(() => {
  eager$.subscribe((value) => console.log('eager', value));
  deferred$.subscribe((value) => console.log('defer', value));
}, 1000);

// eager: timestamp captured at definition time
// defer: timestamp captured at subscribe time`}
            </pre>
            <SnippetOutput
              lines={[
                'eager  1710000000000',
                'defer  1710000001000',
              ]}
            />
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Lazy resource creation</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { defer, Observable } from 'rxjs';

const socket$ = defer(() =>
  new Observable<MessageEvent>((subscriber) => {
    const socket = new WebSocket('wss://example.com');
    socket.addEventListener('message', (event) => subscriber.next(event));
    socket.addEventListener('close', () => subscriber.complete());
    return () => socket.close();
  })
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Each subscription gets its own WebSocket with dedicated teardown—perfect for per-view resources.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated visualization */}
      <AnimatedDeferFactories />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world defer() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Lazy HTTP, configuration-aware streams, and per-subscription factories.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Lazy HTTP with latest token</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { defer, from } from 'rxjs';

const user$ = defer(() =>
  from(
    fetch('/api/user', {
      headers: { Authorization: 'Bearer ' + authStore.getToken() },
    }).then((r) => r.json())
  )
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              defer() ensures the latest auth token is used when you subscribe, not when the module loads.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Per-subscriber configuration</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function configureStream(config: Config) {
  return defer(() => baseStream$.pipe(applyConfig(config)));
}`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Each subscriber gets a fresh pipeline configured with its own settings.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            defer() vs new Observable() vs from()
          </CardTitle>
          <CardDescription className="text-base">
            All three create observables, but they run at different moments and suit different responsibilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">
                    defer()
                  </th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">
                    new Observable()
                  </th>
                  <th className="text-left p-3 font-semibold text-sky-600 dark:text-sky-400">
                    from()
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">When factory runs</td>
                  <td className="p-3">On every subscribe()</td>
                  <td className="p-3">Inside constructor per subscribe()</td>
                  <td className="p-3">Immediately when subscribed, wrapping existing value/promise/iterable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typical use</td>
                  <td className="p-3">Lazy, state-dependent streams</td>
                  <td className="p-3">Wrapping low-level APIs</td>
                  <td className="p-3">Bridging async values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Scheduling note */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            defer() and schedulers
          </CardTitle>
          <CardDescription className="text-base">
            defer() controls when the factory runs; the returned observable decides timing. It plays nicely with <code>scheduled()</code>
            and marbles.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Lazy async work</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const lazyJSON$ = defer(() =>
  from(fetch('/api/data').then((res) => res.json()))
);`}
            </pre>
            <p>
              The factory runs at subscribe time, but the HTTP response itself is still asynchronous.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Test scheduler friendly</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// In tests you can subscribe under TestScheduler to control when defer() factories execute.`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for defer()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>defer()</code> when you need current state, auth tokens, or random values per subscriber.</li>
              <li>✅ Return existing creators (of(), from(), ajax()) from the factory.</li>
              <li>✅ Keep factories idempotent and document side effects.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Running heavy initialization inside defer() without caching when shared subscribers expect a single resource.</li>
              <li>❌ Using defer() when a simple of() or from() would produce the same, simpler stream.</li>
              <li>❌ Forgetting that every subscription may now run new side effects unless you share() the result.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

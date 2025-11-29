'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Layers, ShieldCheck, AlertTriangle, Cpu, Activity, PlayCircle, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';

interface RxjsFromOperatorProps {}

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

// Animated visualization for from()
const AnimatedFromSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'iterating' | 'completed'>('idle');
  const [source, setSource] = useState<Array<{ id: number; value: number; status: 'pending' | 'processing' | 'emitted' }>>([]);
  const [emitted, setEmitted] = useState<Array<{ id: number; value: number }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const baseValues = [
    { id: 0, value: 10 },
    { id: 1, value: 20 },
    { id: 2, value: 30 },
  ];

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('iterating');
    setEmitted([]);
    setLogLines(['Observable created: from([10, 20, 30])', 'Iterating array...']);
    setCurrentIndex(null);
    
    // Initialize source with all values as pending
    setSource(baseValues.map(v => ({ ...v, status: 'pending' })));
    await new Promise((resolve) => setTimeout(resolve, 800));

    for (let i = 0; i < baseValues.length; i++) {
      const current = baseValues[i];
      
      // Mark as processing
      setCurrentIndex(i);
      setSource((prev) =>
        prev.map((item) =>
          item.id === i ? { ...item, status: 'processing' } : item
        )
      );
      setLogLines((prev) => [...prev, `Iterating index ${i}...`]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      // Emit the value
      setEmitted((prev) => [...prev, current]);
      setSource((prev) =>
        prev.map((item) =>
          item.id === i ? { ...item, status: 'emitted' } : item
        )
      );
      setLogLines((prev) => [...prev, `next(${current.value})`]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setPhase('completed');
    setCurrentIndex(null);
    setLogLines((prev) => [...prev, 'complete()', 'All items iterated!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setSource([]);
    setEmitted([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated from() - Iterating Collections
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>from([10, 20, 30])</code> iterates through the array, emitting each element individually. The animation shows the iteration process with visual feedback and auto-resets for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>from()</code> takes an iterable (array, Set, Map, etc.) and emits each element one by one, then completes.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Phase & Source Array */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'iterating' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'iterating' ? 'Iterating' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[180px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Source Array</p>
              <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border mb-3">
                from([10, 20, 30])
              </div>
              
              <div className="space-y-2">
                {source.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Array items appear here</span>
                )}
                {source.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-2 rounded border transition-all duration-300 ${
                      item.status === 'processing'
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-600 animate-pulse'
                        : item.status === 'emitted'
                        ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-300 dark:border-emerald-700'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded flex items-center justify-center font-bold text-xs ${
                      item.status === 'processing'
                        ? 'bg-yellow-500 text-white'
                        : item.status === 'emitted'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-400 text-white'
                    }`}>
                      {item.value}
                    </div>
                    <span className="text-[10px] font-mono">
                      [{idx}] {
                        item.status === 'processing' ? '⚡ processing' :
                        item.status === 'emitted' ? '✓ emitted' :
                        'waiting'
                      }
                    </span>
                    {item.status === 'processing' && (
                      <ArrowRight className="w-3 h-3 text-yellow-600 dark:text-yellow-400 ml-auto animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              {phase === 'completed' && (
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 mt-3">
                  <CheckCircle2 className="w-3 h-3" />
                  Iteration Complete
                </div>
              )}
            </div>
          </div>

          {/* Emitted Values Stream */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Output Stream
              </h4>
            </div>
            <div className="min-h-[180px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Emitted Values</p>
              <div className="flex flex-wrap gap-2">
                {emitted.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Emissions appear here</span>
                )}
                {emitted.map((item) => (
                  <div
                    key={item.id}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-lg animate-in zoom-in duration-300"
                  >
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Observer Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Observer Log
              </h4>
            </div>
            <div className="min-h-[180px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[180px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Iteration logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('complete') ? 'text-emerald-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('Iterating index') ? 'text-yellow-400' :
                      line.includes('iterated') ? 'text-green-400' :
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
{`from([10, 20, 30]).subscribe({
  next: (value) => console.log('next(' + value + ')'),
  complete: () => console.log('complete()')
});
// Each array element emitted separately!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsFromOperator({}: RxjsFromOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="RxJS · Creation Operators"
        title="from() – Turn Collections & Promises into Streams"
        description="Master from(): convert arrays, promises, and async iterables into observables, and learn when to reach for it over of()."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why from() is powerful
          </CardTitle>
          <CardDescription className="text-base">
            <code>from()</code> turns collections and one-off async results into observables. It&apos;s your bridge from “pull” worlds (arrays,
            promises, async generators) into push-based streams.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Work with existing data',
              text: 'Arrays, Sets, strings, and other iterables become streams you can map, filter, and combine.',
            },
            {
              title: 'Bridge promises to observables',
              text: 'from(promise) lets you use operators and cancellation strategies around one-shot async calls.',
            },
            {
              title: 'Support async iterables',
              text: 'Async generators (for await...of) can be converted into observables that integrate with the rest of RxJS.',
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

      {/* What is from()? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            What does from() do?
          </CardTitle>
          <CardDescription className="text-base">
            <code>from()</code> inspects its argument: if it&apos;s an iterable, it emits each element; if it&apos;s a promise, it emits the
            resolved value; if it&apos;s already an observable, it normalizes it.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Arrays & iterables</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from } from 'rxjs';

const numbers$ = from([1, 2, 3]);

numbers$.subscribe((value) => console.log('value', value));

// Output:
// value 1
// value 2
// value 3`}
            </pre>
            <SnippetOutput
              lines={['value 1', 'value 2', 'value 3']}
            />
            <p className="text-xs text-muted-foreground">
              Each element of the array becomes a separate emission. For strings, from('hi') would emit 'h', then 'i'.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Promises</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const userPromise = fetch('/api/user').then((r) => r.json());

const user$ = from(userPromise);

user$.subscribe({
  next: (user) => console.log('user', user),
  error: (err) => console.error('error', err),
  complete: () => console.log('complete'),
});`}
            </pre>
            <SnippetOutput
              lines={['user { id: 1, name: "Ada" }', 'complete']}
            />
            <p className="text-xs text-muted-foreground">
              Promises always emit at most one value. After resolution (or rejection), the observable completes or errors.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Async iterables</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`async function* asyncRange(count: number) {
  for (let i = 0; i < count; i++) {
    await new Promise((r) => setTimeout(r, 200));
    yield i;
  }
}

const range$ = from(asyncRange(3));

range$.subscribe((value) => console.log('async value', value));`}
            </pre>
            <SnippetOutput
              lines={['async value 0', 'async value 1', 'async value 2']}
            />
            <p className="text-xs text-muted-foreground">
              This is where <code>from()</code> shines: you can treat async generators like observables and compose them with other streams.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated from() visualization */}
      <AnimatedFromSequence />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns with from()
          </CardTitle>
          <CardDescription className="text-base">
            Practical ways to use from() when working with HTTP, arrays, and async workflows.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">HTTP: Retry a single call as a stream</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const fetchUser$ = from(fetch('/api/user').then((r) => r.json())).pipe(
  retry(2),
  catchError(() => of({ id: 0, name: 'Guest' }))
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Wrapping <code>fetch</code> in <code>from()</code> lets you attach retry, timeout, and error-handling operators that are hard to
              express with promises alone.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Process arrays reactively</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

from([10, 5, 8, 20])
  .pipe(
    filter((n) => n > 7),
    map((n) => n * 2),
    toArray()
  )
  .subscribe((result) => console.log('result', result));

// Output:
// result [16, 40]`}
            </pre>
            <SnippetOutput
              lines={['result [16, 40]']}
            />
            <p className="text-xs text-muted-foreground">
              <code>from()</code> + <code>toArray()</code> gives you a “reactive map/filter” over static data sets, with the same operator
              language you&apos;ll use for live streams.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* of() vs from() recap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            When to use from() vs of()
          </CardTitle>
          <CardDescription className="text-base">
            Both operators create observables, but they answer slightly different questions.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Use from() when…</p>
            <ul className="space-y-1">
              <li>• You have an array, Set, Map, or string and want to emit each element.</li>
              <li>• You have a Promise and want to compose it with other RxJS operators.</li>
              <li>• You have an async generator or async iterable.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Use of() when…</p>
            <ul className="space-y-1">
              <li>• You already have individual values: <code>of(1, 2, 3)</code>.</li>
              <li>• You want to emit a single value (like a default object) and complete.</li>
              <li>• You&apos;re building tiny test streams or constant configuration streams.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Scheduling & modern RxJS note */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            from() and scheduling in modern RxJS
          </CardTitle>
          <CardDescription className="text-base">
            Like <code>of()</code>, <code>from()</code> is synchronous for arrays and synchronous/async for promises depending on the source.
            Use schedulers when you need precise timing control.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Array sources</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`console.log('before from');

from([1, 2, 3]).subscribe((v) => console.log('value', v));

console.log('after from');`}
            </pre>
            <SnippetOutput
              lines={['before from', 'value 1', 'value 2', 'value 3', 'after from']}
            />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Promise sources</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`console.log('before from(promise)');

from(fetch('/api/data')).subscribe(() => console.log('value resolved'));

console.log('after from(promise)');

// Output order:
// before from(promise)
// after from(promise)
// value resolved (later, when the promise fulfills)`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for from()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>from()</code> to bridge arrays, promises, and async generators into RxJS pipelines.</li>
              <li>✅ Combine <code>from(promise)</code> with <code>retry</code>, <code>timeout</code>, and <code>catchError</code> for robust HTTP flows.</li>
              <li>✅ Use <code>from()</code> + <code>toArray()</code> to collect transformed results back into arrays.</li>
              <li>✅ Remember that each subscription to <code>from(promise)</code> starts a new promise chain; share if necessary.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using <code>from()</code> when you really want to emit a single array value—use <code>of([…])</code> instead.</li>
              <li>❌ Assuming <code>from(promise)</code> can be cancelled by <code>unsubscribe()</code> alone—combine with <code>AbortController</code> for true cancellation.</li>
              <li>❌ Forgetting that multiple subscribers to <code>from(promise)</code> each trigger their own promise work.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


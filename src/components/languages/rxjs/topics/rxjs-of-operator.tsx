'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Layers, ShieldCheck, AlertTriangle, Cpu, Activity, PlayCircle, CheckCircle2, RefreshCw } from 'lucide-react';

interface RxjsOfOperatorProps {}

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

// Animated visualization for of()
const AnimatedOfSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'emitting' | 'completed'>('idle');
  const [values, setValues] = useState<Array<{ id: number; value: number; status: 'pending' | 'emitted' }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEmitting, setCurrentEmitting] = useState<number | null>(null);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('emitting');
    setValues([]);
    setLogLines([]);
    setCurrentEmitting(null);

    const emitted = [10, 20, 30];
    
    setLogLines(['Observable created: of(10, 20, 30)', 'Subscription started...']);
    await new Promise((resolve) => setTimeout(resolve, 800));

    for (let i = 0; i < emitted.length; i++) {
      const value = emitted[i];
      
      // Show value is about to emit
      setCurrentEmitting(value);
      setValues((prev) => [...prev, { id: i, value, status: 'pending' }]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      // Mark as emitted
      setValues((prev) => 
        prev.map((v) => v.id === i ? { ...v, status: 'emitted' } : v)
      );
      setLogLines((prev) => [...prev, `next(${value})`]);
      setCurrentEmitting(null);
      
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setPhase('completed');
    setLogLines((prev) => [...prev, 'complete()', 'Stream finished!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Reset
    setValues([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  const hasEmissions = values.length > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated of() Emissions - Synchronous Stream
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>of(10, 20, 30)</code> synchronously emits all values then completes. The animation shows each emission phase with visual feedback and auto-resets for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>of()</code> emits all values synchronously in sequence, then immediately calls <code>complete()</code>. No async delays!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Phase Indicator */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'emitting' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'emitting' ? 'Emitting' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[140px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Source Observable</p>
              <div className="space-y-2">
                <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                  of(10, 20, 30)
                </div>
                {phase === 'emitting' && currentEmitting !== null && (
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 animate-pulse">
                    → Emitting: {currentEmitting}
                  </div>
                )}
                {phase === 'completed' && (
                  <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Stream Complete
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Emission Timeline */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Value Stream
              </h4>
            </div>
            <div className="min-h-[140px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Emitted Values</p>
              <div className="flex flex-col gap-2">
                {!hasEmissions && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Press play to see emissions</span>
                )}
                {values.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      item.status === 'pending'
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700 animate-pulse'
                        : 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-700'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                      item.status === 'pending'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gradient-to-br from-indigo-500 to-cyan-500 text-white'
                    }`}>
                      {item.value}
                    </div>
                    <span className="text-xs font-mono">
                      {item.status === 'pending' ? 'emitting...' : 'emitted ✓'}
                    </span>
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
            <div className="min-h-[140px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[140px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Observer callbacks appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('complete') ? 'text-emerald-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('finished') ? 'text-green-400' :
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
{`of(10, 20, 30).subscribe({
  next: (value) => console.log('next(' + value + ')'),
  complete: () => console.log('complete()')
});
// All emissions are synchronous!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsOfOperator({}: RxjsOfOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Sparkles}
        category="RxJS · Creation Operators"
        title="of() – Create Streams from Values"
        description="Learn how of() turns plain values into a finite observable sequence, and how to use it for defaults, testing, and composition."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Layers className="w-7 h-7 text-indigo-600" />
            Why of() is important
          </CardTitle>
          <CardDescription className="text-base">
            <code>of()</code> is the simplest way to create a finite observable: it emits the values you give it, then completes. You&apos;ll
            use it for defaults, tests, and quick compositions every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Tiny, finite streams',
              text: 'Emit 1, 2, 3… and then complete. Great for configuration, fallbacks, and unit tests.',
            },
            {
              title: 'Type-safe value factories',
              text: 'of() preserves TypeScript types, making it easy to model “constant” streams or simple sequences.',
            },
            {
              title: 'Composition friendly',
              text: 'Combine of() with map, merge, concat, or switchMap to build more complex flows from small building blocks.',
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

      {/* What is of()? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            What does of() do?
          </CardTitle>
          <CardDescription className="text-base">
            <code>of()</code> takes any number of values and returns an observable that synchronously emits them in order, then completes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Basic usage</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of } from 'rxjs';

// Create an observable that emits 1, 2, 3 and then completes
const numbers$ = of(1, 2, 3);

numbers$.subscribe({
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
              lines={['value 1', 'value 2', 'value 3', 'complete']}
            />
            <p className="text-xs text-muted-foreground">
              <code>of()</code> is synchronous by default: all values are pushed in the same macrotask before <code>complete</code> fires.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Typed values</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`type UserRole = 'guest' | 'user' | 'admin';

const roles$ = of<UserRole>('guest', 'user', 'admin');

roles$.subscribe((role) => console.log('role', role));`}
            </pre>
            <SnippetOutput
              lines={['role guest', 'role user', 'role admin']}
            />
            <p className="text-xs text-muted-foreground">
              Use generics to make the stream&apos;s element type explicit—especially for union types or complex objects.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated of() visualization */}
      <AnimatedOfSequence />

      {/* Core patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Common patterns with of()
          </CardTitle>
          <CardDescription className="text-base">
            Practical ways of() shows up in everyday RxJS code: defaults, test data, and stream composition.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">1. Provide fallback values</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const user$ = http.get('/api/user').pipe(
  catchError(() => {
    // Fallback: emit a default user and complete
    return of({ id: 0, name: 'Guest' });
  })
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              When errors occur, <code>of()</code> can emit a safe default instead of failing the entire stream.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">2. Test & demo streams</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// Instead of hitting a real API in tests:
const mockUsers$ = of(
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Lin' }
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              In tests and storybook-style demos, <code>of()</code> provides deterministic, synchronous observables that are easy to assert
              against.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">3. Build small sequences</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of } from 'rxjs';
import { map, scan } from 'rxjs/operators';

of(1, 2, 3)
  .pipe(
    map((n) => n * 2),
    scan((sum, n) => sum + n, 0)
  )
  .subscribe((total) => console.log('running total', total));`}
            </pre>
            <SnippetOutput
              lines={[
                'running total 2',
                'running total 6',
                'running total 12',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              <code>of()</code> is the easiest way to drive a pipeline with a small, known sequence of values.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison: of() vs from() */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            of() vs from()
          </CardTitle>
          <CardDescription className="text-base">
            Both <code>of()</code> and <code>from()</code> create observables, but they treat their arguments very differently.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">
                    of()
                  </th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">
                    from()
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">Input</td>
                  <td className="p-3">Values: of(1, 2, 3)</td>
                  <td className="p-3">Single iterable/promise: from([1,2,3])</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Emissions</td>
                  <td className="p-3">Each argument is one emission</td>
                  <td className="p-3">Iterates or resolves the source</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typical usage</td>
                  <td className="p-3">Constants, small sequences, defaults</td>
                  <td className="p-3">Arrays, promises, async iterables</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <h4 className="font-semibold text-sm">of(): each argument emits</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`of([1, 2, 3]).subscribe(console.log);
// Emits one value: [1, 2, 3]`}
              </pre>
            </div>
            <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <h4 className="font-semibold text-sm">from(): iterate or resolve</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`from([1, 2, 3]).subscribe(console.log);
// Emits: 1, then 2, then 3`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern scheduling note */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            of() and scheduling in modern RxJS
          </CardTitle>
          <CardDescription className="text-base">
            In current RxJS versions, <code>of()</code> is synchronous by default. To change when values emit, use schedulers via helpers
            like <code>scheduled()</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Synchronous by default</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`console.log('before');

of(1, 2, 3).subscribe((v) => console.log('value', v));

console.log('after');

// Output:
// before
// value 1
// value 2
// value 3
// after`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Using scheduled() for async emission</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { scheduled, asyncScheduler } from 'rxjs';

console.log('before');

scheduled([1, 2, 3], asyncScheduler).subscribe((v) =>
  console.log('value', v)
);

console.log('after');

// Output:
// before
// after
// value 1
// value 2
// value 3`}
            </pre>
            <p>
              Modern RxJS prefers <code>scheduled([...values], scheduler)</code> instead of passing schedulers directly to <code>of()</code>,
              keeping <code>of()</code> simple and synchronous.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for of()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>of()</code> for small, known sets of values.</li>
              <li>✅ Use <code>of()</code> in tests and fallback branches for predictable behavior.</li>
              <li>✅ Prefer <code>of()</code> over <code>from()</code> when you already have individual values.</li>
              <li>✅ Combine <code>of()</code> with operators (<code>map</code>, <code>scan</code>, <code>concat</code>) for quick pipelines.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using <code>of()</code> to wrap arrays when you mean to emit each element—use <code>from()</code> instead.</li>
              <li>❌ Assuming <code>of()</code> is async; remember it&apos;s synchronous by default.</li>
              <li>❌ Passing schedulers directly to <code>of()</code> in modern RxJS—prefer <code>scheduled()</code>.</li>
              <li>❌ Building huge sequences with <code>of()</code> where a loop or generator would be clearer.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

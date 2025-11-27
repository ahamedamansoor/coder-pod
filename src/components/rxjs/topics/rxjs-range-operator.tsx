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
  Hash,
  ArrowRight,
} from 'lucide-react';

interface RxjsRangeOperatorProps {}

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

// Animated visualization for range()
const AnimatedRangeSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'generating' | 'completed'>('idle');
  const [numbers, setNumbers] = useState<Array<{ id: number; value: number; status: 'pending' | 'generating' | 'emitted' }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('generating');
    setNumbers([]);
    setLogLines(['Observable created: range(3, 5)', 'Subscription started...', 'Generating sequence...']);
    setProgress(0);

    const start = 3;
    const count = 5; // 3,4,5,6,7

    // Initialize all numbers as pending
    const initialNumbers = Array.from({ length: count }, (_, i) => ({
      id: i,
      value: start + i,
      status: 'pending' as const
    }));
    setNumbers(initialNumbers);
    
    await new Promise((resolve) => setTimeout(resolve, 800));

    for (let i = 0; i < count; i++) {
      const value = start + i;
      setCurrentIndex(i);
      
      // Mark as generating
      setNumbers((prev) =>
        prev.map((n) => n.id === i ? { ...n, status: 'generating' } : n)
      );
      
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      // Mark as emitted
      setNumbers((prev) =>
        prev.map((n) => n.id === i ? { ...n, status: 'emitted' } : n)
      );
      
      const progressPercent = ((i + 1) / count) * 100;
      setProgress(progressPercent);
      setLogLines((prev) => [...prev, `next(${value}) - index ${i}`]);
      setCurrentIndex(null);
      
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    setPhase('completed');
    setLogLines((prev) => [...prev, 'Sequence generation complete!', 'Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setNumbers([]);
    setLogLines([]);
    setPhase('idle');
    setProgress(0);
    setCurrentIndex(null);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated range() - Finite Sequence Generation
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>range(3, 5)</code> generates a finite sequence of 5 consecutive integers starting from 3 (3, 4, 5, 6, 7). The animation shows synchronous generation with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>range(start, count)</code> creates a predictable integer sequence. Unlike interval(), it&apos;s synchronous and finite by design!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Generation Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Generation Status
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'generating' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'generating' ? 'Generating' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[220px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Sequence Parameters</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'generating'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'completed'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'generating' ? (
                      <Hash className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                    ) : phase === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Layers className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'generating' ? `${Math.round(progress)}% complete` :
                     phase === 'completed' ? 'Finished' :
                     'Ready to start'}
                  </span>
                </div>

                {/* Progress Bar */}
                {phase === 'generating' && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-muted-foreground">
                      <span>Sequence progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 bg-slate-100 dark:bg-slate-800 rounded">
                    <span className="text-muted-foreground">Start:</span>
                    <span className="font-mono font-bold">3</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-100 dark:bg-slate-800 rounded">
                    <span className="text-muted-foreground">Count:</span>
                    <span className="font-mono font-bold">5</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-100 dark:bg-slate-800 rounded">
                    <span className="text-muted-foreground">Range:</span>
                    <span className="font-mono font-bold">3 → 7</span>
                  </div>
                </div>

                {currentIndex !== null && (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    <span>Generating index {currentIndex}...</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Number Sequence */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Number Sequence
              </h4>
            </div>
            <div className="min-h-[220px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Generated Values</p>
              
              <div className="space-y-2">
                {numbers.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Sequence: 3, 4, 5, 6, 7</span>
                )}
                {numbers.map((n) => (
                  <div
                    key={n.id}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      n.status === 'pending'
                        ? 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        : n.status === 'generating'
                        ? 'bg-indigo-100 dark:bg-indigo-900/20 border-indigo-400 dark:border-indigo-600 animate-pulse'
                        : 'bg-emerald-100 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      n.status === 'pending'
                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                        : n.status === 'generating'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-sm'
                    }`}>
                      {n.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">
                        {n.status === 'pending' ? 'Pending' :
                         n.status === 'generating' ? 'Generating...' :
                         'Emitted'}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        index: {n.id}
                      </div>
                    </div>
                    {n.status === 'emitted' && (
                      <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Observer Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Observer Log
              </h4>
            </div>
            <div className="min-h-[220px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[220px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Range sequence logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('Generating') ? 'text-blue-400' :
                      line.includes('generation complete') ? 'text-green-400' :
                      line.includes('Stream completed') ? 'text-emerald-400' :
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
{`const numbers$ = range(3, 5); // start=3, count=5

numbers$.subscribe({
  next: (value) => console.log('Value:', value),
  complete: () => console.log('Sequence complete!')
});

// Output: 3, 4, 5, 6, 7 (synchronously), then complete`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsRangeOperator({}: RxjsRangeOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="RxJS · Creation Operators"
        title="range() – Finite Number Sequences"
        description="Use range() to create predictable numeric sequences for paging, retries, and demos—without manual loops."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why range() is handy
          </CardTitle>
          <CardDescription className="text-base">
            <code>range()</code> creates a finite sequence of integers: perfect for demos, retries, batching, and situations where you&apos;d
            otherwise write a for-loop.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Finite by design',
              text: 'range() always completes after a known number of emissions, unlike interval().',
            },
            {
              title: 'Loop replacement',
              text: 'Turn “for i from A to B” into a stream that can be mapped, filtered, and combined like any other observable.',
            },
            {
              title: 'Great for control flows',
              text: 'Use range() to drive retries, pagination, and staged animations without manual counters.',
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

      {/* What is range()? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Basic range() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>range(start, count)</code> emits <code>count</code> numbers starting from <code>start</code>, then completes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Simple sequence</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { range } from 'rxjs';

const numbers$ = range(1, 5); // 1,2,3,4,5

numbers$.subscribe({
  next: (value) => console.log('value', value),
  complete: () => console.log('complete'),
});

// Output:
// value 1
// value 2
// value 3
// value 4
// value 5
// complete`}
            </pre>
            <SnippetOutput
              lines={[
                'value 1',
                'value 2',
                'value 3',
                'value 4',
                'value 5',
                'complete',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Unlike <code>interval()</code>, <code>range()</code> is synchronous by default and finite: all values emit in one turn of the
              event loop.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Custom start offsets</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// Emit 10, 11, 12
const threeIds$ = range(10, 3);

threeIds$.subscribe((id) => console.log('id', id));`}
            </pre>
            <SnippetOutput lines={['id 10', 'id 11', 'id 12']} />
            <p className="text-xs text-muted-foreground">
              You can use <code>range(start, count)</code> to generate ID-like values or offsets without manually computing each value.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated range visualization */}
      <AnimatedRangeSequence />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns with range()
          </CardTitle>
          <CardDescription className="text-base">
            Practical uses: retries, pagination, and mock data generation.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Retry with backoff windows</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { range } from 'rxjs';
import { concatMap, delay, tap } from 'rxjs/operators';

// 3 attempts with increasing delays: 0ms, 500ms, 1000ms
const attempts$ = range(0, 3).pipe(
  concatMap((attempt) =>
    httpCall().pipe(
      tap(() => console.log('attempt', attempt + 1)),
      delay(attempt * 500)
    )
  )
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              <code>range()</code> can drive retry loops without manual counters; combine with <code>concatMap</code> or
              <code>exhaustMap</code> to coordinate attempts.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Generate mock data</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { range } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

const mockUsers$ = range(1, 3).pipe(
  map((i) => ({ id: i, name: \`User \${i}\` })),
  toArray()
);

mockUsers$.subscribe((users) => console.log('users', users));

// Output:
// users [
//   { id: 1, name: 'User 1' },
//   { id: 2, name: 'User 2' },
//   { id: 3, name: 'User 3' }
// ]`}
            </pre>
            <SnippetOutput
              lines={[
                "users [ { id: 1, name: 'User 1' },",
                "  { id: 2, name: 'User 2' },",
                "  { id: 3, name: 'User 3' } ]",
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Use <code>range()</code> with <code>map()</code> and <code>toArray()</code> to synthesize arrays of objects for demos and tests.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison & scheduling notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            range() vs interval() vs of()
          </CardTitle>
          <CardDescription className="text-base">
            These three creation helpers look similar but target slightly different use cases.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">range()</th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">interval()</th>
                  <th className="text-left p-3 font-semibold text-sky-600 dark:text-sky-400">of()</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">Emissions</td>
                  <td className="p-3">Finite integer sequence</td>
                  <td className="p-3">Infinite 0,1,2,… until stopped</td>
                  <td className="p-3">Whatever values you pass in</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Timing</td>
                  <td className="p-3">Synchronous by default</td>
                  <td className="p-3">Time-based (async)</td>
                  <td className="p-3">Synchronous by default</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typical use</td>
                  <td className="p-3">Indexes, retries, mock data</td>
                  <td className="p-3">Timers, polling, heartbeats</td>
                  <td className="p-3">Constants, small sequences, defaults</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Scheduling note (modern RxJS) */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            range() and schedulers
          </CardTitle>
          <CardDescription className="text-base">
            By default <code>range()</code> is synchronous. You can schedule its emissions differently using helper APIs if you need to.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Synchronous emission</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`console.log('before');

range(1, 3).subscribe((v) => console.log('value', v));

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
{`import { scheduled, asyncScheduler, range } from 'rxjs';

// In modern RxJS, prefer wrapping range values if you need async timing
const asyncRange$ = scheduled(range(1, 3), asyncScheduler);`}
            </pre>
            <p>
              Modern RxJS leans on <code>scheduled()</code> with a scheduler rather than passing schedulers directly into
              <code>range()</code>, keeping creation helpers simple and predictable.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for range()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>range()</code> when you need a simple integer sequence and want to stay “in RxJS land”.</li>
              <li>✅ Combine range() with <code>map</code>, <code>filter</code>, and <code>toArray</code> to generate test and mock data.</li>
              <li>✅ Use range() to drive retry counts, step indexes, or staged animations instead of manual counters.</li>
              <li>✅ Remember that range() is finite and completes—great for predictable lifecycles.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using range() for huge sequences on the main thread—consider chunking or lazy async generators instead.</li>
              <li>❌ Treating range() as time-based—it only controls values, not time; use interval()/timer() for timing.</li>
              <li>❌ Nesting range() inside subscriptions instead of composing pipelines.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


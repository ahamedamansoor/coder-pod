'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Activity, AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';

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

const AnimatedReduceCompletion = () => {
  const [phase, setPhase] = useState<'idle' | 'processing' | 'emitted'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [animationMessage, setAnimationMessage] = useState('Final value hidden until completion');
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('processing');
    setLogLines([]);
    setAnimationMessage('Accumulating values...');

    const items = [4, 7, -2, 6];
    let total = 0;

    for (let index = 0; index < items.length; index += 1) {
      total += items[index];
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLogLines((prev) => [...prev, `scan step ${index + 1}: ${total}`]);
    }

    setPhase('emitted');
    setAnimationMessage(`Emitted final total: ${total}`);
    setLogLines((prev) => [...prev, `reduce() emits ${total}`]);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setPhase('idle');
    setLogLines([]);
    setAnimationMessage('Final value hidden until completion');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated reduce() completion
        </CardTitle>
        <CardDescription className="text-base">
          Play to see how reduce() keeps a running accumulator but only emits once the source completes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            {animationMessage}
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play reduce() animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Waiting' : phase === 'processing' ? 'Processing' : 'Final emitted'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[100px]">
              <div className="text-[12px] text-indigo-600 font-semibold">
                {phase === 'emitted' ? 'reduce() released the final number' : 'reduce() is waiting to complete'}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Observer log
              </h4>
            </div>
            <div className="min-h-[100px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// logs appear after each emission</span>
              ) : (
                logLines.map((line, index) => <div key={index}>{line}</div>)
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function RxjsReduceOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={TrendingUp}
        category="RxJS - Transformation Operators"
        title="reduce() - Wait for the final result"
        description="Use reduce() to aggregate a stream into a single value once it completes, perfect for totals, statistics, and final-state snapshots."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why reduce() waits for completion
          </CardTitle>
          <CardDescription className="text-base">
            reduce() keeps the accumulator internal and emits the final result after the source completes, so subscribers only see the final summary.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Final emission only',
              text: 'Great when only the summary matters and intermediate values would be noisy.',
            },
            {
              title: 'Custom accumulator',
              text: 'Seed with objects, maps, strings, or custom helper classes to structure final output.',
            },
            {
              title: 'Mirrors Array.reduce',
              text: 'If you know Array.reduce, the RxJS version behaves the same but over async streams.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{card.title}</p>
              <p className="text-muted-foreground text-sm">{card.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            reduce() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `reduce(accumulator, seed)` - accumulator gets the running result + current value; reduce emits after the final emission and completion.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, reduce } from 'rxjs';

of(
  { value: 8 },
  { value: 5 },
  { value: 12 },
)
  .pipe(
    reduce((sum, item) => sum + item.value, 0),
  )
  .subscribe((total) => console.log('total value', total));

// Output:
// total value 25`}
          </pre>
          <SnippetOutput lines={['total value 25']} />
          <Alert>
            <AlertTitle>RxJS 8 tip</AlertTitle>
            <AlertDescription>
              `reduce()` now ships from the root `rxjs` bundle. The accumulator receives the current index as a third argument, so you can
              change behavior over time (for example, divide totals differently on every third emission).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedReduceCompletion />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world reduce() patterns
          </CardTitle>
          <CardDescription className="text-base">
            reduce() is ideal when you need the final state or summary after processing a sequence of events.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Daily totals</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax, reduce } from 'rxjs';

ajax('/api/daily-sales')
  .pipe(
    reduce((acc, payload) => acc + payload.total, 0),
  )
  .subscribe((dailyTotal) => showDaily(dailyTotal));`}
              </pre>
              <SnippetOutput lines={['showDaily 4820']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Audit trail</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { scan, reduce } from 'rxjs';

const events$ = ...;

events$
  .pipe(
    scan((state, event) => [...state, event], []),
    reduce((state) => state.length, 0),
  )
  .subscribe((count) => console.log('event count', count));`}
              </pre>
              <SnippetOutput lines={['event count 42']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            reduce() vs scan()
          </CardTitle>
          <CardDescription className="text-base">
            Both accumulate state, but reduce() emits once at completion while scan() streams intermediate results.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">reduce()</p>
            <p className="text-xs text-muted-foreground">
              Emits the final aggregated value after the source completes.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(reduce((acc, value) => acc + value, 0)).subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">scan()</p>
            <p className="text-xs text-muted-foreground">
              Streams every running total so the UI can react immediately.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(scan((acc, value) => acc + value, 0)).subscribe(console.log);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            reduce() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[ok] Provide a seed value to avoid undefined results on empty streams.</li>
              <li>[ok] Keep accumulators pure to make unit testing straightforward.</li>
              <li>[ok] Use reduce() with take or first to simulate Array.reduce over slices.</li>
              <li>[ok] Pair with tap() before reduce() for debugging without affecting the final value.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Do not mutate the accumulator; always return a new object or primitive.</li>
              <li>X Avoid reduce() when you need immediate side effects; use scan().</li>
              <li>X Do not feed infinite streams without take or takeWhile - reduce() will never emit.</li>
              <li>X Avoid chaining reduce() with other reduce() calls; prefer combining logic into one accumulator.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

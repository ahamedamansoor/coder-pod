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
  Infinity,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  RefreshCw,
  Ban,
  Clock,
  Pause,
  HelpCircle,
} from 'lucide-react';

interface RxjsNeverOperatorProps {}

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

const AnimatedNeverSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'waiting'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('waiting');
    setLogLines(['never()', 'Observable created...', 'Subscription started...']);
    setElapsedTime(0);

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Start elapsed time counter
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 100);
    }, 100);
    setIntervalId(id);

    setLogLines((prev) => [...prev, 'Waiting for emissions...', '  ⏳ Still waiting...']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLogLines((prev) => [...prev, '  ⏳ Still waiting...', '  ⏳ Nothing yet...']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLogLines((prev) => [...prev, '  ⏳ Infinite silence...', '  ∞ Will never emit, error, or complete']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Stop timer
    if (id) clearInterval(id);
    setIntervalId(null);

    // Reset
    setLogLines([]);
    setElapsedTime(0);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated never() - Infinite Silence
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>never()</code> creates an observable that never emits, never errors, and never completes. The animation shows the infinite waiting state with elapsed time tracking and auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>never()</code> represents eternal silence—perfect for guards, placeholders, and testing scenarios where nothing should happen!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Waiting State */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Observable State
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                'bg-purple-100 text-purple-700 dark:bg-purple-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : 'Waiting Forever'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-lg border border-purple-200/60 dark:border-purple-700 min-h-[240px]">
              <p className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 mb-3">Infinite Wait</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'waiting'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'waiting' ? (
                      <Infinity className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-pulse" />
                    ) : (
                      <Pause className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to subscribe' : 'Waiting infinitely...'}
                  </span>
                </div>

                {/* Elapsed Time */}
                {phase === 'waiting' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg border">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs font-semibold">Elapsed Time</span>
                      </div>
                      <span className="text-lg font-mono font-bold text-purple-600 dark:text-purple-400">
                        {(elapsedTime / 1000).toFixed(1)}s
                      </span>
                    </div>
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
                      <p className="text-[10px] text-purple-600 dark:text-purple-400 text-center">
                        ∞ Will continue forever...
                      </p>
                    </div>
                  </div>
                )}

                {/* Observable Info */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Emissions:</span>
                    <span className="font-mono font-bold">0 (forever)</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Will complete:</span>
                    <span className="font-mono font-bold">Never</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Will error:</span>
                    <span className="font-mono font-bold">Never</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Observer Methods */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                Observer Methods
              </h4>
            </div>
            <div className="min-h-[240px] p-4 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-lg border border-slate-200/60 dark:border-slate-700">
              <p className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 mb-3">Method Call Status</p>
              
              <div className="space-y-2">
                {/* next() */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">next()</span>
                    <Ban className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                    <span className="line-through">Never called</span>
                  </div>
                  <div className="mt-1 text-[9px] text-muted-foreground">
                    No values will ever be emitted
                  </div>
                </div>

                {/* error() */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">error()</span>
                    <Ban className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                    <span className="line-through">Never called</span>
                  </div>
                  <div className="mt-1 text-[9px] text-muted-foreground">
                    No error will ever be thrown
                  </div>
                </div>

                {/* complete() */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">complete()</span>
                    <Ban className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                    <span className="line-through">Never called</span>
                  </div>
                  <div className="mt-1 text-[9px] text-muted-foreground">
                    Stream will never complete
                  </div>
                </div>

                <div className="mt-4 p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
                  <p className="text-[10px] text-purple-600 dark:text-purple-400 text-center font-semibold">
                    ∞ Subscription stays alive forever
                  </p>
                </div>
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
                <span className="text-slate-500">// never() execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('never()') ? 'text-purple-400' :
                      line.includes('Observable created') ? 'text-blue-400' :
                      line.includes('Subscription started') ? 'text-cyan-400' :
                      line.includes('Waiting for emissions') ? 'text-slate-400' :
                      line.includes('⏳') ? 'text-amber-400' :
                      line.includes('∞') ? 'text-purple-400' :
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
{`const silent$ = never();

const subscription = silent$.subscribe({
  next: (value) => console.log('Never called'),     // ❌ Never
  error: (err) => console.log('Never called'),      // ❌ Never
  complete: () => console.log('Never called')       // ❌ Never
});

// Subscription stays open forever until manually unsubscribed
// subscription.unsubscribe(); // Only way to stop it`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsNeverOperator({}: RxjsNeverOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Infinity}
        category="RxJS · Creation Operators"
        title="never() – Emit nothing forever"
        description="never() is your silent stream: it never emits, never errors, and never completes. Excellent for placeholders, guards, and representing idle channels."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why never() exists
          </CardTitle>
          <CardDescription className="text-base">
            Use never() to represent streams that should stay alive indefinitely without emitting—common in guards, idle signals, and hybrid flows.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Idle channel',
              text: 'Represents a stream that should stay open but silent until another stream triggers.',
            },
            {
              title: 'Guards & cancels',
              text: 'Return never() from switchMap to cancel downstream logic when conditions are not met.',
            },
            {
              title: 'Tests',
              text: 'Use never() to assert that no emission should happen, only completion or error from another stream.',
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Basic never() usage
          </CardTitle>
          <CardDescription className="text-base">
            never() never emits or completes—subscribe() stays open forever until unsubscribed.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Always silent</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { never } from 'rxjs';

never().subscribe({
  next: () => console.log('never emits'),
  complete: () => console.log('never completes'),
});`}
            </pre>
            <SnippetOutput lines={['// no output']} />
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Guarded switchMap</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { never, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const feature$ = of({ enabled: false });

feature$.pipe(
  switchMap((feature) => (feature.enabled ? of('on') : never()))
).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('complete'),
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              when <code>never()</code> is returned, downstream subscribers stay subscribed but no values are emitted.
            </p>
          </div>
        </CardContent>
      </Card>

      <AnimatedNeverSequence />

      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world never() patterns
          </CardTitle>
          <CardDescription className="text-base">
            never() often pairs with user interactions, routing guards, or error-handled replacements.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Idle signal</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const idle$ = userActive ? userEvents$ : never();`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Returning never() keeps the pipeline alive but silent when certain conditions aren&apos;t met.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Testing for no emissions</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`expectObservable(never()).toBe('-');`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Marble tests use never() to assert absence of emissions while still observing the subscription lifetime.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use never() as a silent placeholder or guard in pipelines.</li>
              <li>✅ Combine with takeUntil or switchMap to stop other streams when needed.</li>
              <li>✅ Use never() explicitly in tests for “no emission” expectations.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Forgetting to unsubscribe from never()—it never completes.</li>
              <li>❌ Using never() when a fallback value (of()) is more appropriate.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

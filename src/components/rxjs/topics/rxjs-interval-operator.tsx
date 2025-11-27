'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Clock3,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Timer,
  Pause,
} from 'lucide-react';

interface RxjsIntervalOperatorProps {}

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

// Animated visualization for interval()
const AnimatedIntervalTimer = () => {
  const [phase, setPhase] = useState<'idle' | 'ticking' | 'completed'>('idle');
  const [ticks, setTicks] = useState<Array<{ id: number; value: number; timestamp: number }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTick, setCurrentTick] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTicking, setIsTicking] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('ticking');
    setTicks([]);
    setLogLines(['Observable created: interval(1000)', 'Subscription started...', 'Timer started ⏱️']);
    setElapsedTime(0);
    setIsTicking(true);
    
    await new Promise((resolve) => setTimeout(resolve, 800));

    const maxTicks = 5;
    const startTime = Date.now();

    for (let i = 0; i < maxTicks; i++) {
      // Wait for 1 second interval
      setCurrentTick(i);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const timestamp = Date.now() - startTime;
      setTicks((prev) => [...prev, { id: i, value: i, timestamp }]);
      setElapsedTime(timestamp);
      setLogLines((prev) => [...prev, `next(${i}) at ${Math.round(timestamp)}ms`]);
      setCurrentTick(null);
      
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setPhase('completed');
    setIsTicking(false);
    setLogLines((prev) => [...prev, 'unsubscribe() called', 'Timer stopped ⏹️', 'Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setTicks([]);
    setLogLines([]);
    setPhase('idle');
    setElapsedTime(0);
    setCurrentTick(null);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated interval() - Time-Based Emissions
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>interval(1000)</code> emits sequential values (0, 1, 2...) every second. The animation shows real-time tick generation, timestamps, and cleanup with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>interval()</code> creates an infinite observable that emits incrementing numbers at fixed intervals. Always remember to unsubscribe!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Timer Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Timer Status
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'ticking' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'ticking' ? 'Ticking' : 'Stopped'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[200px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Interval Timer</p>
              
              <div className="space-y-4">
                {/* Clock Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    isTicking
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 animate-pulse'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {isTicking ? (
                      <Timer className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" style={{ animationDuration: '2s' }} />
                    ) : phase === 'completed' ? (
                      <Pause className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Clock3 className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {isTicking ? `${Math.round(elapsedTime / 1000)}s elapsed` : 'Waiting...'}
                  </span>
                </div>

                <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded border">
                  interval(1000)
                </div>

                {currentTick !== null && (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    <span>Tick {currentTick} pending...</span>
                  </div>
                )}

                {phase === 'completed' && (
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Timer stopped</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tick Timeline */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-indigo-600" />
                Tick Timeline
              </h4>
            </div>
            <div className="min-h-[200px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Emitted Values</p>
              
              <div className="space-y-2">
                {ticks.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Ticks appear every 1000ms</span>
                )}
                {ticks.map((tick) => (
                  <div
                    key={tick.id}
                    className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 animate-in slide-in-from-top duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                      {tick.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Tick #{tick.value}</div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        @ {Math.round(tick.timestamp)}ms
                      </div>
                    </div>
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
            <div className="min-h-[200px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[200px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Interval logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('started ⏱️') ? 'text-green-400' :
                      line.includes('unsubscribe') ? 'text-orange-400' :
                      line.includes('stopped ⏹️') ? 'text-red-400' :
                      line.includes('completed') ? 'text-emerald-400' :
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
{`const timer$ = interval(1000).pipe(take(5));

const subscription = timer$.subscribe({
  next: (value) => console.log('Tick:', value),
  complete: () => console.log('Timer stopped')
});

// Infinite by default, so always unsubscribe or use take()!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsIntervalOperator({}: RxjsIntervalOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Clock3}
        category="RxJS · Creation Operators"
        title="interval() – Time-based Streams"
        description="Use interval() to create ticking streams driven by time, then combine them with operators to build timers, polling, and animations."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why interval() is essential
          </CardTitle>
          <CardDescription className="text-base">
            <code>interval()</code> emits steadily over time: 0, 1, 2, 3… until you stop it. It powers timers, polling, progress bars, and
            many “heartbeat” flows in reactive systems.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Heartbeat for your app',
              text: 'Drive periodic work: refresh dashboards, check connectivity, update clocks.',
            },
            {
              title: 'Precise timing with operators',
              text: 'Combine interval with take, takeUntil, and switchMap to control lifetimes and side effects.',
            },
            {
              title: 'Animation & UX',
              text: 'Use interval with animationFrameScheduler or CSS transitions to build progress indicators and subtle UI feedback.',
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

      {/* What is interval()? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Clock3 className="w-6 h-6 text-indigo-600" />
            Basic interval() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>interval(period)</code> creates an observable that emits an increasing counter every <code>period</code> milliseconds.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Simple ticking stream</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';

const ticks$ = interval(1000);

const subscription = ticks$.subscribe((value) => {
  console.log('tick', value);
});

// Later: stop the stream
setTimeout(() => {
  subscription.unsubscribe();
}, 3500);

// Sample output:
// tick 0
// tick 1
// tick 2`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2']} />
            <p className="text-xs text-muted-foreground">
              <strong>Important:</strong> <code>interval()</code> is infinite by default—always plan how and when you will stop it.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Finite stream with take()</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, take } from 'rxjs';

const limited$ = interval(1000).pipe(take(3));

limited$.subscribe({
  next: (value) => console.log('tick', value),
  complete: () => console.log('done'),
});

// Output:
// tick 0
// tick 1
// tick 2
// done`}
            </pre>
            <SnippetOutput
              lines={['tick 0', 'tick 1', 'tick 2', 'done']}
            />
            <p className="text-xs text-muted-foreground">
              Using <code>take()</code> is often safer than manually unsubscribing: the stream completes itself after a fixed number of
              emissions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated interval visualization */}
      <AnimatedIntervalTimer />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns with interval()
          </CardTitle>
          <CardDescription className="text-base">
            Timers, countdowns, and polling flows you&apos;ll implement in everyday apps.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Countdown timer (seconds)</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, map, take } from 'rxjs';

const seconds = 5;

const countdown$ = interval(1000).pipe(
  take(seconds + 1),
  map((elapsed) => seconds - elapsed)
);

countdown$.subscribe((remaining) => {
  console.log('remaining', remaining);
});

// Output:
// remaining 5
// remaining 4
// remaining 3
// remaining 2
// remaining 1
// remaining 0`}
            </pre>
            <SnippetOutput
              lines={[
                'remaining 5',
                'remaining 4',
                'remaining 3',
                'remaining 2',
                'remaining 1',
                'remaining 0',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Combine <code>interval()</code> with <code>map()</code> to derive countdown numbers, percentages, or progress states.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Polling an API</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, from } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

const POLL_MS = 5000;

const stats$ = interval(POLL_MS).pipe(
  startWith(0), // fire immediately
  switchMap(() => from(fetch('/api/stats').then((r) => r.json())))
);

const subscription = stats$.subscribe((stats) => {
  console.log('stats', stats);
});

// Later: subscription.unsubscribe();`}
            </pre>
            <SnippetOutput
              lines={['stats { ... }', 'stats { ... }', '...']}
            />
            <p className="text-xs text-muted-foreground">
              <code>interval()</code> plus <code>switchMap()</code> is the most common polling pattern—just remember to unsubscribe when the
              view or feature goes away.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Scheduling & modern RxJS note */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            interval() and schedulers
          </CardTitle>
          <CardDescription className="text-base">
            By default interval() uses the async scheduler (setInterval-like). For animation-heavy work, you can use animationFrameScheduler to
            align with the browser&apos;s render cycle.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Default async scheduler</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// interval(1000) is equivalent to using asyncScheduler under the hood
const ticks$ = interval(1000 /*, asyncScheduler */);`}
            </pre>
            <p>
              In most cases you don&apos;t need to pass a scheduler: the default is already asynchronous and suitable for timers and polling.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Animation-friendly intervals</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { animationFrameScheduler, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const animation$ = interval(0, animationFrameScheduler).pipe(
  map(() => performance.now())
);`}
            </pre>
            <p>
              Using <code>animationFrameScheduler</code> aligns emissions with repaint cycles—great for progress indicators that update
              smoothly without spamming the event loop.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for interval()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Always pair interval() with a cleanup strategy: <code>take</code>, <code>takeUntil</code>, or unsubscribing in lifecycles.</li>
              <li>✅ Use interval() for time-based domain logic, not heavy computation—keep work small per tick.</li>
              <li>✅ Prefer <code>switchMap</code> for polling to avoid overlapping requests.</li>
              <li>✅ Consider <code>animationFrameScheduler</code> when building UI animations or progress indicators.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Leaving interval() streams running after components unmount—this is a common source of memory leaks.</li>
              <li>❌ Using very small periods (like 0–10ms) without a clear need—it can starve the event loop.</li>
              <li>❌ Nesting interval() inside other subscriptions instead of composing pipelines.</li>
              <li>❌ Assuming interval() aligns to wall-clock time; it&apos;s based on scheduled delays, not absolute time.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


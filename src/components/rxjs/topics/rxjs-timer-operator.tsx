'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Hourglass,
  Clock3,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Timer,
  Zap,
} from 'lucide-react';

interface RxjsTimerOperatorProps {}

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

// Animated visualization for timer()
const AnimatedTimerSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'waiting' | 'emitting' | 'completed'>('idle');
  const [ticks, setTicks] = useState<Array<{ id: number; value: number; timestamp: number }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [delayProgress, setDelayProgress] = useState(0);
  const [currentTick, setCurrentTick] = useState<number | null>(null);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('waiting');
    setTicks([]);
    setLogLines(['Observable created: timer(2000, 1000)', 'Subscription started...', 'Waiting for initial delay...']);
    setDelayProgress(0);
    
    const startTime = Date.now();
    const dueTime = 2000;
    const period = 1000;

    // Animate the delay countdown
    const delayInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / dueTime) * 100, 100);
      setDelayProgress(progress);
    }, 50);

    await new Promise((resolve) => setTimeout(resolve, dueTime));
    clearInterval(delayInterval);
    setDelayProgress(100);
    
    setPhase('emitting');
    setLogLines((prev) => [...prev, 'Initial delay complete! Starting emissions...']);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const maxTicks = 3;
    const emissionStart = Date.now();

    for (let i = 0; i < maxTicks; i++) {
      setCurrentTick(i);
      await new Promise((resolve) => setTimeout(resolve, period));
      
      const timestamp = Date.now() - emissionStart;
      setTicks((prev) => [...prev, { id: i, value: i, timestamp }]);
      setLogLines((prev) => [...prev, `next(${i}) at ${Math.round(timestamp)}ms`]);
      setCurrentTick(null);
      
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setPhase('completed');
    setLogLines((prev) => [...prev, 'unsubscribe() called', 'Timer stopped', 'Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setTicks([]);
    setLogLines([]);
    setPhase('idle');
    setDelayProgress(0);
    setCurrentTick(null);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated timer() - Delayed Start with Interval
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>timer(2000, 1000)</code> waits 2 seconds (dueTime), then emits incrementing values every 1 second (period). The animation shows the initial delay countdown and subsequent interval emissions with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>timer(dueTime, period)</code> combines a delayed start with interval behavior. Perfect for delayed polling or staged onboarding!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Delay Phase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Timer Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'waiting' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30' :
                phase === 'emitting' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'waiting' ? 'Waiting (dueTime)' : phase === 'emitting' ? 'Emitting' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[220px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Initial Delay</p>
              
              <div className="space-y-4">
                {/* Hourglass Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'waiting'
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                      : phase === 'emitting'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'completed'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'waiting' ? (
                      <Hourglass className="w-8 h-8 text-amber-600 dark:text-amber-400 animate-pulse" />
                    ) : phase === 'emitting' ? (
                      <Timer className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" style={{ animationDuration: '2s' }} />
                    ) : phase === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Clock3 className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'waiting' ? `${Math.round(delayProgress)}% complete` :
                     phase === 'emitting' ? 'Ticking...' :
                     phase === 'completed' ? 'Done' :
                     'Ready to start'}
                  </span>
                </div>

                {/* Progress Bar for Delay */}
                {phase === 'waiting' && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-muted-foreground">
                      <span>2000ms delay</span>
                      <span>{Math.round(delayProgress)}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-100"
                        style={{ width: `${delayProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded border">
                  timer(2000, 1000)
                </div>

                {currentTick !== null && (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    <span>Tick {currentTick} pending...</span>
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
                Emitted Values
              </h4>
            </div>
            <div className="min-h-[220px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Output Stream</p>
              
              <div className="space-y-2">
                {ticks.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Values appear after delay</span>
                )}
                {phase === 'waiting' && ticks.length === 0 && (
                  <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 animate-pulse">
                    <Hourglass className="w-4 h-4" />
                    <span>Waiting for initial delay...</span>
                  </div>
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
                    <Zap className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
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
                <span className="text-slate-500">// Timer logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('Waiting for') ? 'text-amber-400' :
                      line.includes('delay complete') ? 'text-green-400' :
                      line.includes('Starting emissions') ? 'text-blue-400' :
                      line.includes('unsubscribe') ? 'text-orange-400' :
                      line.includes('stopped') ? 'text-red-400' :
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
{`const delayedTimer$ = timer(2000, 1000).pipe(take(3));

const subscription = delayedTimer$.subscribe({
  next: (value) => console.log('Tick:', value),
  complete: () => console.log('Timer completed')
});

// Wait 2s, then emit 0, 1, 2 at 1s intervals`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsTimerOperator({}: RxjsTimerOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Hourglass}
        category="RxJS · Creation Operators"
        title="timer() – Delayed & Scheduled Streams"
        description="Use timer() to schedule one-off or repeating emissions in the future, and combine it with operators to build delays, timeouts, and reminders."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why timer() is different from interval()
          </CardTitle>
          <CardDescription className="text-base">
            <code>interval()</code> starts ticking immediately. <code>timer()</code> lets you control when the first tick happens—and
            optionally how often it repeats.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Run something later',
              text: 'Schedule a single emission after a delay or at a specific Date, like a setTimeout that speaks RxJS.',
            },
            {
              title: 'Delayed polling',
              text: 'Wait for an initial grace period, then start regular polling with timer(dueTime, period).',
            },
            {
              title: 'Time-based control in streams',
              text: 'Combine timer with takeUntil, merge, or switchMap to orchestrate complex timelines.',
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

      {/* Basic timer patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Clock3 className="w-6 h-6 text-indigo-600" />
            Basic timer() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>timer(dueTime)</code> emits 0 once after a delay and completes. <code>timer(dueTime, period)</code> emits repeatedly.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Single delayed emission</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { timer } from 'rxjs';

// Emits 0 after 2000ms, then completes
const reminder$ = timer(2000);

reminder$.subscribe({
  next: (value) => console.log('reminder tick', value),
  complete: () => console.log('done'),
});

// Output (~2 seconds later):
// reminder tick 0
// done`}
            </pre>
            <SnippetOutput lines={['reminder tick 0', 'done']} />
            <p className="text-xs text-muted-foreground">
              Think of this as a setTimeout wrapped in an observable: you get a single emission and a clear completion signal.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Delayed start + interval</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

// Wait 2s, then emit every 1s: 0,1,2 then complete
const delayedTicks$ = timer(2000, 1000).pipe(take(3));

delayedTicks$.subscribe({
  next: (value) => console.log('tick', value),
  complete: () => console.log('done'),
});`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2', 'done']} />
            <p className="text-xs text-muted-foreground">
              This is how you build “start later, then repeat” flows—perfect for progressive onboarding or deferred polling.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated timer visualization */}
      <AnimatedTimerSequence />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns with timer()
          </CardTitle>
          <CardDescription className="text-base">
            Delayed tooltips, inactivity timeouts, and staged UI flows built on top of timer().
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Delayed tooltip / helper message</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

const button = document.querySelector<HTMLButtonElement>('#info-btn')!;

const hover$ = fromEvent(button, 'mouseenter');
const leave$ = fromEvent(button, 'mouseleave');

hover$
  .pipe(
    switchMap(() =>
      timer(800).pipe(
        takeUntil(leave$) // cancel if user moves away quickly
      )
    )
  )
  .subscribe(() => {
    console.log('Show helper tooltip');
  });`}
            </pre>
            <SnippetOutput lines={['Show helper tooltip']} />
            <p className="text-xs text-muted-foreground">
              Here <code>timer(800)</code> delays the tooltip so it only appears when the user truly hovers—not on accidental flicks.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Inactivity timeout</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { merge, fromEvent, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const activity$ = merge(
  fromEvent(document, 'click'),
  fromEvent(document, 'keydown'),
  fromEvent(document, 'mousemove')
);

activity$
  .pipe(
    // Each new activity resets the timer
    switchMap(() => timer(5 * 60 * 1000))
  )
  .subscribe(() => {
    console.log('User inactive for 5 minutes – lock screen');
  });`}
            </pre>
            <SnippetOutput lines={['User inactive for 5 minutes – lock screen']} />
            <p className="text-xs text-muted-foreground">
              Each activity event cancels the previous timer and starts a new one—an elegant way to implement inactivity detection.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Schedulers & timing notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            timer() and schedulers
          </CardTitle>
          <CardDescription className="text-base">
            Like interval(), timer() uses the async scheduler by default, but you can use other schedulers for testing or animation-aligned
            work.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Testing with virtual time</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// In tests you can use the TestScheduler to virtualize time
// and assert timer() behavior without waiting in real time.`}
            </pre>
            <p>
              Modern RxJS works well with the <code>TestScheduler</code>, letting you simulate timers instantly in marble tests instead of
              waiting for real delays.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">UI-friendly scheduling</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// For most apps, timer()'s default scheduler is enough
const onceLater$ = timer(1000 /*, asyncScheduler */);`}
            </pre>
            <p>
              For advanced scenarios (like server-side rendering or special scheduler strategies), you can pass an explicit scheduler as the
              third argument in older RxJS versions or via helper APIs in newer ones.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for timer()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>timer(dueTime)</code> instead of <code>setTimeout</code> when working inside RxJS pipelines.</li>
              <li>✅ Use <code>timer(dueTime, period)</code> for “start later, then repeat” behavior.</li>
              <li>✅ Combine timer() with <code>take</code>, <code>takeUntil</code>, or <code>switchMap</code> for clear lifecycles.</li>
              <li>✅ Use timer() for inactivity detection, delayed UI hints, and staged onboarding flows.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Forgetting that timer() can be infinite when used with a period—still needs a cleanup strategy.</li>
              <li>❌ Using many overlapping timer() streams instead of composing a single pipeline.</li>
              <li>❌ Relying on timer() for precise wall-clock scheduling across long durations—use it for relative time, not calendar logic.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


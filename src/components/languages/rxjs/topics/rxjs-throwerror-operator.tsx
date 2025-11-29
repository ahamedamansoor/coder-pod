'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Flame,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  XCircle,
  AlertOctagon,
  Ban,
} from 'lucide-react';

interface RxjsThrowErrorOperatorProps {}

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

const AnimatedThrowError = () => {
  const [phase, setPhase] = useState<'idle' | 'subscribing' | 'throwing' | 'error_handled'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorDetails, setErrorDetails] = useState<{ type: string; message: string } | null>(null);
  const [normalEmissions, setNormalEmissions] = useState<boolean>(false);

  const run = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('subscribing');
    setLogLines(['throwError(() => new Error("Boom!"))', 'Observable created...', 'Subscription started...']);
    setErrorDetails(null);
    setNormalEmissions(false);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show that no normal emissions happen
    setLogLines((prev) => [...prev, 'Checking for next() emissions...', '  ❌ No values will be emitted']);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Throw error
    setPhase('throwing');
    setLogLines((prev) => [...prev, '→ Throwing error immediately!']);
    await new Promise((resolve) => setTimeout(resolve, 600));

    setErrorDetails({
      type: 'Error',
      message: 'Boom!'
    });
    setLogLines((prev) => [...prev, 'error(new Error("Boom!"))', '  ✗ Error thrown to observer']);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Error handled
    setPhase('error_handled');
    setLogLines((prev) => [...prev, 'Observer error handler called', '  ⚠ Stream terminated with error']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setErrorDetails(null);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated throwError() - Immediate Error Emission
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>throwError(() =&gt; new Error("Boom!"))</code> immediately throws an error without emitting any values. The animation shows the error lifecycle with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>throwError()</code> creates an observable that errors instantly—perfect for testing error handlers and simulating failures!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={run}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Error Phase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Error Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'subscribing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                phase === 'throwing' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                'bg-orange-100 text-orange-700 dark:bg-orange-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' :
                 phase === 'subscribing' ? 'Subscribing' :
                 phase === 'throwing' ? 'Throwing' :
                 'Error Handled'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg border border-red-200/60 dark:border-red-700 min-h-[240px]">
              <p className="text-[10px] font-semibold text-red-600 dark:text-red-400 mb-3">Observable Lifecycle</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'subscribing'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                      : phase === 'throwing'
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30 animate-pulse'
                      : phase === 'error_handled'
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'subscribing' ? (
                      <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
                    ) : phase === 'throwing' ? (
                      <AlertOctagon className="w-8 h-8 text-red-600 dark:text-red-400" />
                    ) : phase === 'error_handled' ? (
                      <XCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Flame className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to throw' :
                     phase === 'subscribing' ? 'Preparing error' :
                     phase === 'throwing' ? 'Error thrown!' :
                     'Error propagated'}
                  </span>
                </div>

                {/* Lifecycle Path */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded border">
                    <Ban className="w-4 h-4 text-slate-400" />
                    <span className="text-muted-foreground line-through">next() - Never called</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-100 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-800">
                    <AlertOctagon className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="font-bold text-red-600 dark:text-red-400">error() - Called</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded border">
                    <Ban className="w-4 h-4 text-slate-400" />
                    <span className="text-muted-foreground line-through">complete() - Never called</span>
                  </div>
                </div>

                {phase !== 'idle' && (
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded border border-red-400 dark:border-red-600">
                    <p className="text-[10px] text-red-600 dark:text-red-400 font-semibold">
                      ⚠ Stream terminated by error
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Error Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-red-600" />
                Error Details
              </h4>
            </div>
            <div className="min-h-[240px] p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-orange-200/60 dark:border-orange-700">
              <p className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 mb-3">Thrown Error</p>
              
              <div className="space-y-2">
                {!errorDetails && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Error details appear here</span>
                )}
                
                {phase === 'subscribing' && (
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 animate-pulse">
                    <Activity className="w-4 h-4" />
                    <span>Preparing to throw error...</span>
                  </div>
                )}

                {errorDetails && (
                  <div className="bg-red-100 dark:bg-red-900/20 rounded-lg border-2 border-red-400 dark:border-red-600 p-3 animate-in zoom-in duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertOctagon className="w-8 h-8 text-red-600 dark:text-red-400" />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-red-600 dark:text-red-400">{errorDetails.type}</div>
                          <div className="text-[10px] text-red-500 dark:text-red-300 font-mono break-all">
                            {errorDetails.message}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-red-300 dark:border-red-700 pt-2">
                        <div className="text-[10px] space-y-1">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status:</span>
                            <span className="font-mono text-red-600 dark:text-red-400">THROWN</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Values emitted:</span>
                            <span className="font-mono">0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Stream state:</span>
                            <span className="font-mono text-orange-600 dark:text-orange-400">TERMINATED</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {phase === 'error_handled' && errorDetails && (
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                      <XCircle className="w-3 h-3" />
                      <span>Error propagated to observer</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Error handler executed</span>
                    </div>
                  </div>
                )}

                {!errorDetails && phase !== 'subscribing' && isPlaying && (
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Ban className="w-4 h-4" />
                    <span>No normal emissions</span>
                  </div>
                )}
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
                <span className="text-slate-500">// throwError() execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('throwError') ? 'text-red-400' :
                      line.includes('Observable created') ? 'text-blue-400' :
                      line.includes('Subscription started') ? 'text-cyan-400' :
                      line.includes('Checking for next') ? 'text-slate-400' :
                      line.includes('❌ No values') ? 'text-slate-400' :
                      line.includes('→ Throwing error') ? 'text-red-400' :
                      line.includes('error(') ? 'text-red-400' :
                      line.includes('✗ Error thrown') ? 'text-orange-400' :
                      line.includes('Observer error handler') ? 'text-orange-400' :
                      line.includes('⚠ Stream terminated') ? 'text-red-400' :
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
{`const error$ = throwError(() => new Error('Boom!'));

error$.subscribe({
  next: (value) => console.log('Never called'), // ❌ Skipped
  error: (err) => console.error('Error:', err.message), // ✓ Called
  complete: () => console.log('Never called') // ❌ Skipped
});

// Output: Error: Boom!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsThrowErrorOperator({}: RxjsThrowErrorOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
      icon={Flame}
        category="RxJS · Creation Operators"
        title="throwError() – Emit errors immediately"
        description="Use throwError() when a stream should fail instantly—ideal for testing error handling, simulating API failures, or short-circuiting logic."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why throwError() matters
          </CardTitle>
          <CardDescription className="text-base">
            throwError() creates an observable that errors immediately. Great for building failure paths, testing, and forcing downstream cancellation.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Simulate failures',
              text: 'Perfect for testing error handling and retry logic without hitting a real server.',
            },
            {
              title: 'Control flow',
              text: 'Short-circuit pipes by throwing an error when a condition isn’t met.',
            },
            {
              title: 'Combine with catchError',
              text: 'Use catchError to provide fallbacks after throwError() or to log/report the failure.',
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
            Basic throwError() usage
          </CardTitle>
          <CardDescription className="text-base">
            throwError() emits an error and completes immediately. It never emits <code>next</code> values.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Simple throwError()</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { throwError } from 'rxjs';

throwError(() => new Error('Boom!')).subscribe({
  next: () => console.log('never happens'),
  error: (err) => console.error('error', err.message),
});`}
            </pre>
            <SnippetOutput lines={['error Boom!']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Guarded flow</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const data$ = of(null).pipe(
  switchMap((value) => (value ? of(value) : throwError(() => new Error('Missing value'))))
);

data$.subscribe({
  next: console.log,
  error: (err) => console.error('guarded', err.message),
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              throwError() helps early exit when prerequisites aren’t met.
            </p>
          </div>
        </CardContent>
      </Card>

      <AnimatedThrowError />

      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns
          </CardTitle>
          <CardDescription className="text-base">
            throwError() integrates with retry, catchError, and fallback strategies for dependable apps.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">force error into stream</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { throwError } from 'rxjs';

const guard$ = userId ? of(userId) : throwError(() => new Error('No user'));

guard$.subscribe({
  next: console.log,
  error: (err) => console.error('guard failed', err.message),
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Short-circuit flows when required data is missing.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Testing error handling</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// Marble test
const source$ = throwError(() => new Error('fail'));

expectObservable(source$).toBe('#');`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Use throwError() in tests to verify catchError or retry logic.
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
              <li>✅ Use throwError() to signal error paths in streams clearly.</li>
              <li>✅ Combine throwError() with catchError() for graceful recovery.</li>
              <li>✅ Use it in tests to verify error handling logic.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Swallowing errors after throwError()—always handle it.</li>
              <li>❌ Calling throwError() inside operators when a fallback value is sufficient.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

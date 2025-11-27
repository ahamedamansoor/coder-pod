'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Moon, Activity, ShieldCheck, AlertTriangle, Cpu, Layers } from 'lucide-react';

interface RxjsEmptyOperatorProps {}

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

// Animated visualization: empty() just completes
const AnimatedEmptySequence = () => {
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setLogLines(['subscribe()']);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLogLines((prev) => [...prev, 'complete (no values)']);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLogLines([]);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Activity className="w-6 h-6 text-indigo-600" />
          Animated empty()
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>empty()</code> simply completes immediately without emitting any values. Reset after every run for clarity.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <strong>Idea:</strong> <code>empty()</code> behaves like a completed observable with zero emissions—perfect for stubs and fallbacks.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying…' : 'Play animation'}
          </Button>
        </div>
        <div className="bg-gradient-to-r from-indigo-50 to-slate-50 dark:from-indigo-950/20 dark:to-slate-950/20 rounded-lg border border-dashed border-indigo-300 dark:border-indigo-700 p-4 text-[11px] font-mono text-slate-900 dark:text-slate-100">
          {logLines.length === 0 ? (
            <span className="text-slate-500">// subscribe() triggers immediate completion</span>
          ) : (
            logLines.map((line, index) => <div key={index}>{line}</div>)
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default function RxjsEmptyOperator({}: RxjsEmptyOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Moon}
        category="RxJS · Creation Operators"
        title="empty() – Complete without values"
        description="Emits nothing and completes immediately. Use empty() for graceful fallbacks, conditional flows, and testing."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            empty() in a nutshell
          </CardTitle>
          <CardDescription className="text-base">
            Use <code>empty()</code> whenever you need an observable that completes immediately—no next events, just a complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Graceful fallbacks',
              text: 'Switch to empty() when there is nothing to emit but you still need a stream in the pipeline.',
            },
            {
              title: 'Conditional flows',
              text: 'Use empty() inside switchMap/concatMap when some branches should not emit any values.',
            },
            {
              title: 'Testing & mocks',
              text: 'Empty streams keep marble diagrams clear without injecting fake data.',
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
            Basic empty() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>empty()</code> emits complete without values. Use it directly or inside switchMap/concatMap for control paths.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Simple empty()</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { empty } from 'rxjs';

empty().subscribe({
  next: () => console.log('never happens'),
  complete: () => console.log('complete'),
});`}
            </pre>
            <SnippetOutput lines={['complete']} />
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Conditional branch</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { empty, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const cache$ = null; // no cached value

cache$
  ? of(cache$)
  : empty();`}
            </pre>
            <p className="text-xs text-muted-foreground">
              <code>switchMap</code> can skip emission by returning <code>empty()</code> when a condition isn&apos;t met.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated visualization */}
      <AnimatedEmptySequence />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Real-world empty() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Use empty() for API stubs, silent branches, and defaulting to completion.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Fallback when data absent</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const cachedItem$ = cache ? of(cache) : empty();

cachedItem$.subscribe({
  next: (value) => console.log('use cache', value),
  complete: () => console.log('no cache'),
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              When there&apos;s nothing to emit, <code>empty()</code> lets the pipeline complete without errors.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Testing no values</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// Marble test
const source$ = empty();

expectObservable(source$).toBe('|');`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Marble tests can assert that a stream completes immediately using <code>empty()</code> for clarity.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison & notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            empty() vs never() vs of()
          </CardTitle>
          <CardDescription className="text-base">
            Comparing these creation helpers clarifies intent: emit nothing, never complete, or emit constants.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">
                    empty()
                  </th>
                  <th className="text-left p-3 font-semibold text-rose-600 dark:text-rose-400">
                    never()
                  </th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">
                    of()
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">Emits</td>
                  <td className="p-3">Nothing, completes immediately</td>
                  <td className="p-3">Nothing, never completes</td>
                  <td className="p-3">Given values, then completes</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Use case</td>
                  <td className="p-3">Control-flow fallbacks</td>
                  <td className="p-3">Represent never-ending streams</td>
                  <td className="p-3">Emit constants</td>
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
            Best practices for empty()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code>empty()</code> for silent branches that should still complete.</li>
              <li>✅ Prefer <code>empty()</code> in tests and stubs to signal “no emissions”.</li>
              <li>✅ Combine with <code>switchMap</code> or <code>concat</code> to gracefully skip work.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Confusing <code>empty()</code> with <code>never()</code>; they behave very differently.</li>
              <li>❌ Returning <code>empty()</code> from a stream where a value is expected—use <code>of()</code> or default values instead.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

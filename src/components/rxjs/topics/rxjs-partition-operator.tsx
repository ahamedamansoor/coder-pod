'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, DivideSquare } from 'lucide-react';

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

const AnimatedPartition = () => {
  const [phase, setPhase] = useState<'idle' | 'routing' | 'done'>('idle');
  const [left, setLeft] = useState<number[]>([]);
  const [right, setRight] = useState<number[]>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const source = [1, 2, 3, 4, 5, 6];

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('routing');
    setLeft([]);
    setRight([]);
    setLogLines([]);

    for (const value of source) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const target = value % 2 === 0 ? right : left;
      if (value % 2 === 0) {
        setRight((prev) => [...prev, value]);
      } else {
        setLeft((prev) => [...prev, value]);
      }
      setLogLines((prev) => [...prev, `value ${value} -> ${value % 2 === 0 ? 'even' : 'odd'}`]);
    }

    setPhase('done');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLeft([]);
    setRight([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated partition()
        </CardTitle>
        <CardDescription className="text-base">
          partition() splits the stream based on a predicate; replay to see the odd/even routing reset.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            Items are routed to one of two streams. We animate the buckets filling, then reset so you watch it again.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <DivideSquare className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">{phase === 'idle' ? 'Idle' : phase === 'routing' ? 'Routing' : 'Done'}</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold">odd</p>
                  <div className="min-h-[40px] rounded border border-dashed border-indigo-300/70 p-2">{left.join(', ') || <span className="text-[11px] text-muted-foreground">// waiting</span>}</div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">even</p>
                  <div className="min-h-[40px] rounded border border-dashed border-indigo-300/70 p-2">{right.join(', ') || <span className="text-[11px] text-muted-foreground">// waiting</span>}</div>
                </div>
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
            <div className="min-h-[120px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// logs stream each predicate result</span>
              ) : (
                logLines.map((line, index) => <div key={index}>{line}</div>)
              )}
            </div>
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const [odds$, evens$] = partition(source$, (value) => value % 2 === 0);`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsPartitionOperator() {
  const groups = useMemo(() => ({ odd: [1, 3, 5], even: [2, 4, 6] }), []);

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="partition() - Split into two streams"
        description="partition() returns a tuple [true$, false$] based on a predicate."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why partition() stays binary
          </CardTitle>
          <CardDescription className="text-base">
            Use partition() when you only need two paths—typically true/false, success/failure, or odd/even splits.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            { title: 'Binary split', text: 'Always returns two Observables so you know the branches ahead of time.' },
            { title: 'Lazy evaluation', text: 'Each branch mirrors the original source and completes once the source completes.' },
            { title: 'Safe cleanup', text: 'Cancel one branch without affecting the other by managing the returned tuple.' },
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
            partition() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            <code>partition(source$, predicate)</code> returns <code>[true$, false$]</code>. Internally it uses multicasting to share the source.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { partition, from } from 'rxjs';

const source$ = from([1, 2, 3, 4]);

const [odds$, evens$] = partition(source$, (value) => value % 2 !== 0);

odds$.subscribe((odd) => console.log('odd', odd));
evens$.subscribe((even) => console.log('even', even));`}
          </pre>
          <SnippetOutput lines={['odd 1', 'odd 3', 'even 2', 'even 4']} />
          <Alert>
            <AlertTitle>RxJS 8 tip</AlertTitle>
            <AlertDescription>
              partition() now exports from <code>rxjs</code> and returns tuples typed as <code>[Observable&lt;T&gt;, Observable&lt;T&gt;]</code>, so TypeScript keeps the branches safe.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedPartition />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world partition() uses
          </CardTitle>
          <CardDescription className="text-base">
            Use true/false splits for guards, validators, or sentinel events.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Authentication guard</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`partition(auth$, (user) => user.isAuthenticated)`},
              </pre>
              <SnippetOutput lines={['authenticated branch', 'guest branch']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Error/success streams</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`partition(response$, (event) => event.status === 'success')`}
              </pre>
              <SnippetOutput lines={['success branch', 'failure branch']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            partition() vs filter()
          </CardTitle>
          <CardDescription className="text-base">
            filter() removes unwanted values; partition() gives you both the kept and discarded streams simultaneously.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">partition()</p>
            <p className="text-xs text-muted-foreground">
              Emits two streams for pass/fail.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`partition(source$, predicate);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">filter()</p>
            <p className="text-xs text-muted-foreground">
              Emits only the values which pass.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(filter(predicate));`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            partition() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>* Combine partition() with mergeMap for grouped processing.</li>
              <li>* Use the returned tuple names to avoid mixing up true/false branches.</li>
              <li>* Keep predicate logic side-effect free for predictable routing.</li>
              <li>* Cancel both streams when the parent completes to avoid leaks.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don&apos;t ignore the false branch; it often contains data you need for logging.</li>
              <li>X Avoid complex predicates—split them into helper functions when needed.</li>
              <li>X Don&apos;t mix partition() results without keeping track of completion order.</li>
              <li>X Avoid partition() when you only need one path; use filter().</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

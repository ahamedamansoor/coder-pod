'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Activity, AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, Repeat } from 'lucide-react';

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

const AnimatedExpand = () => {
  const [phase, setPhase] = useState<'idle' | 'expanding' | 'done'>('idle');
  const [branches, setBranches] = useState<string[]>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) {
      return;
    }
    setIsPlaying(true);
    setPhase('expanding');
    setBranches([]);
    setLogLines([]);

    const values = [0, 1, 2];
    for (const value of values) {
      await new Promise((resolve) => setTimeout(resolve, 550));
      setBranches((prev) => [...prev, `branch(${value})`]);
      setLogLines((prev) => [...prev, `expand() emitted branch ${value}`]);
    }

    setPhase('done');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setBranches([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated expand()
        </CardTitle>
        <CardDescription className="text-base">
          See expand() spawn child observables while carrying the accumulator forward, and reset to replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            expand() legs out new observables while the accumulator grows. Play the animation to see each branch appear.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play expand animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Repeat className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'expanding' ? 'Expanding' : 'Done'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              <div className="flex flex-wrap gap-2">
                {branches.length === 0 ? (
                  <span className="text-[11px] text-muted-foreground">// branches render here</span>
                ) : (
                  branches.map((branch) => (
                    <span key={branch} className="rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-1 text-xs font-semibold border shadow-sm">
                      {branch}
                    </span>
                  ))
                )}
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
                <span className="text-slate-500">// logs show every branch creation</span>
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

export default function RxjsExpandOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="expand() - Recurse while reducing"
        description="expand() recursively subscribes to every inner observable while giving you the previous accumulator result in each call."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why expand() extends streams
          </CardTitle>
          <CardDescription className="text-base">
            Unlike map() or mergeMap(), expand() can emit a stream of streams by reusing the accumulator to spawn new observables until a condition stops it.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Recursive expansion',
              text: 'Each emission can produce a new observable. Useful for breadth-first search or tree traversal.',
            },
            {
              title: 'Accumulator support',
              text: 'You get the previous value so you can make decisions based on the growing state.',
            },
            {
              title: 'Pausable by condition',
              text: 'Return EMPTY when your stop criteria is met to halt the recursion gracefully.',
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
            expand() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `expand(project, concurrent = Infinity)` - project returns a new observable based on the current value and index. concurrency limits parallel inner subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, expand, take } from 'rxjs';

of(1)
  .pipe(
    expand((value, index) => (index < 3 ? of(value + 1) : EMPTY)),
    take(4),
  )
  .subscribe((value) => console.log('expand value', value));

// Output:
// expand value 1
// expand value 2
// expand value 3
// expand value 4`}
          </pre>
          <SnippetOutput lines={['expand value 1', 'expand value 2', 'expand value 3', 'expand value 4']} />
          <Alert>
            <AlertTitle>RxJS 8 detail</AlertTitle>
            <AlertDescription>
              expand() now ships from the root `rxjs` package with better typings and concurrency controls - pass a number to limit how many inner observables run at once.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedExpand />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world expand() patterns
          </CardTitle>
          <CardDescription className="text-base">
            narrow tree traversal, polling, or retries that depend on prior response content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Polling until condition</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax, expand, takeWhile } from 'rxjs';

ajax('/api/status')
  .pipe(
    expand((response) => (response.complete ? EMPTY : ajax('/api/status'))),
    takeWhile((response) => !response.complete, true),
  )
  .subscribe((state) => console.log('state', state));`}
              </pre>
              <SnippetOutput lines={['state { complete: false }', 'state { complete: true }']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Tree traversal</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { expand, of } from 'rxjs';

const nodes = {
  value: 1,
  children: [{ value: 2 }, { value: 3 }],
};

of(nodes)
  .pipe(
    expand((node) => from(node.children || [])),
  )
  .subscribe((node) => console.log('node', node.value));`}
              </pre>
              <SnippetOutput lines={['node 1', 'node 2', 'node 3']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            expand() vs map()
          </CardTitle>
          <CardDescription className="text-base">
            map() projects to a value; expand() projects to another observable and re-injects it into the stream.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">expand()</p>
            <p className="text-xs text-muted-foreground">
              Useful for recursively exploring data where each result may spawn another observable.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(expand((value) => of(value + 1))).subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">map()</p>
            <p className="text-xs text-muted-foreground">
              Transforms value to another value, not another stream.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(map((value) => value * 2)).subscribe(console.log);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            expand() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Always provide a termination condition to avoid infinite recursion.</li>
              <li>Limit concurrency when inner observables may take time.</li>
              <li>Use tap before expand() to observe each emission without altering the accumulator.</li>
              <li>Import expand from `rxjs` to have typed signatures.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Do not spawn unbounded inner observables; keep the tree width manageable.</li>
              <li>X Never mutate the accumulator inside the project function.</li>
              <li>X Avoid expand() when you just need a single synchronous map.</li>
              <li>X Don't forget to cancel inner streams with takeUntil for long-running recursion.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

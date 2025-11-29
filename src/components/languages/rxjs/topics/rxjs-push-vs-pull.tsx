'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, ShieldCheck, Link2, Activity, GitPullRequest, GitCommit } from 'lucide-react';

interface RxjsPushPullProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function RxjsPushPull({}: RxjsPushPullProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={GitPullRequest}
        category="RxJS Fundamentals"
        title="Push vs Pull Systems"
        description="Push streams emit when data is ready; pull APIs wait until the consumer asks. Master both models to bridge RxJS with iterators, generators, and async/await."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Activity className="w-7 h-7 text-indigo-600" />
            Why it matters
          </CardTitle>
          <CardDescription className="text-base">
            Cold/pull APIs (arrays, generators, Promises) give you values when you request them. Push APIs (observables, DOM events, WebSockets) notify you when values exist. RxJS 8 adds utilities to shuttle between these worlds.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Pull (consumer-driven)', text: 'Iterators, async generators, synchronous loops. Consumer controls backpressure.' },
            { title: 'Push (producer-driven)', text: 'Observables, EventEmitter, WebSocket streams. Producer controls pace.' },
            { title: 'Interop', text: 'RxJS exposes fromAsyncGenerator / toAsyncIterator, AbortSignal-aware firstValueFrom, etc.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCommit className="w-6 h-6 text-indigo-600" />
            Code comparison: iterator vs observable
          </CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Pull</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function* chunk(array, size) {
  for (let i = 0; i < array.length; i += size) {
    yield array.slice(i, i + size);
  }
}

const iterator = chunk([1,2,3,4], 2);
console.log(iterator.next().value); // [1,2]
console.log(iterator.next().value); // [3,4]`}
            </pre>
            <SnippetOutput lines={['[1,2]', '[3,4]', '{ done: true }']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Push</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const chunk$ = interval(500).pipe(
  bufferCount(2),
  take(2)
);

chunk$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('done!')
});`}
            </pre>
            <SnippetOutput lines={['[0,1]', '[2,3]', 'done!']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            Bridging push & pull (RxJS 8 highlights)
          </CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">Pull → Push</h4>
            <p className="text-sm text-muted-foreground">Wrap iterables, async iterables, or generator functions.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const iterable = new Set([1,2,3]);
const numbers$ = from(iterable);
numbers$.subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">Push → Pull</h4>
            <p className="text-sm text-muted-foreground">Use <code>toAsyncGenerator()</code> (RxJS 8) to consume observables inside <code>for await ... of</code>.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const generator = toAsyncGenerator(interval(1000).pipe(take(2)));
for await (const value of generator) {
  console.log(value);
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Document whether a helper returns hot/cold or pull/push semantics.</li>
              <li>✅ Convert UI events (push) into pullable async generators for testing.</li>
              <li>✅ Use schedulers (<code>observeOn</code>) when turning pull work into push so UI stays responsive.</li>
              <li>✅ Propagate cancellation signals when bridging (AbortController → unsubscribe).</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Running blocking pull loops inside push subscriptions.</li>
              <li>❌ Ignoring backpressure—use <code>throttleTime</code> / <code>requestAnimationFrame</code> scheduling.</li>
              <li>❌ Creating a new WebSocket (push) for every pull call.</li>
              <li>❌ Converting to Promise too early (lose multi-value stream semantics).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .push-pull-diagram {
          display: grid;
          gap: 14px;
        }
        .lane {
          position: relative;
          border-radius: 999px;
          height: 14px;
          overflow: hidden;
          background: rgba(99, 102, 241, 0.25);
        }
        .lane-pull {
          background: rgba(129, 140, 248, 0.4);
        }
        .lane .label {
          position: absolute;
          top: -26px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: rgba(15, 23, 42, 0.65);
        }
        .pulse {
          position: absolute;
          top: -2px;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          box-shadow: 0 0 8px currentColor;
        }
        .push-one { left: 0%; background: #2563eb; animation: pushFlow 3.2s linear infinite; }
        .push-two { left: 0%; background: #3b82f6; animation: pushFlow 3.2s linear infinite 0.8s; }
        .push-three { left: 0%; background: #60a5fa; animation: pushFlow 3.2s linear infinite 1.6s; }
        .pull-one { left: 0%; background: #a855f7; animation: pullFlow 4s steps(1) infinite; }
        .pull-two { left: 0%; background: #c084fc; animation: pullFlow 4s steps(1) infinite 1.6s; }

        @keyframes pushFlow {
          0% { transform: translateX(0%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes pullFlow {
          0% { transform: translateX(0%); opacity: 0; }
          10% { opacity: 1; }
          40% { opacity: 1; }
          50% { opacity: 0; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

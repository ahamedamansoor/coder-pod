'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Eye,
  Activity,
  Code,
  ShieldCheck,
  AlertTriangle,
  Link2,
  Zap,
  UserCheck,
  Cpu,
  Server,
  Clock9,
} from 'lucide-react';

interface RxjsObserversSubscriptionsProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function RxjsObserversSubscriptions({}: RxjsObserversSubscriptionsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={UserCheck}
        category="RxJS Fundamentals"
        title="Observers & Subscriptions"
        description="Understand the contract between a producer (observable) and the consumer (observer), plus how to manage subscription lifecycles safely."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Eye className="w-7 h-7 text-indigo-600" />
            What is an observer?
          </CardTitle>
          <CardDescription className="text-base">
            An observer is just an object with three optional callbacks: <code>next</code>, <code>error</code>, and <code>complete</code>. Subscribing attaches that observer to an observable and returns a <strong>Subscription</strong> object.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'next(value)', text: 'Called on every emission; keep work minimal.' },
            { title: 'error(err)', text: 'Called once on failure. Stream stops afterward.' },
            { title: 'complete()', text: 'Called when observable finishes normally.' },
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
            <Code className="w-6 h-6 text-indigo-600" />
            Observer + subscription basics
          </CardTitle>
          <CardDescription>Give every example input, pipeline, and output.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Full observer object</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const observer = {
  next: (value) => console.log('next', value),
  error: (err) => console.error('error', err),
  complete: () => console.log('complete!')
};

const subscription = interval(500).pipe(take(3)).subscribe(observer);

setTimeout(() => subscription.unsubscribe(), 1200);`}
            </pre>
            <SnippetOutput lines={['next 0', 'next 1', 'complete!', '(stream stops before value 2 because of unsubscribe)']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Function shorthand</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click').pipe(
  map((event) => ({ x: event.clientX, y: event.clientY }))
);

const subscription = clicks$.subscribe(
  (coords) => console.log('coords', coords),
  (err) => console.error(err),
  () => console.log('stream completed')
);`}
            </pre>
            <SnippetOutput lines={['coords { x: 181, y: 95 }', 'coords { x: 320, y: 210 }', '...until you unsubscribe']} />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/70 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-indigo-600" />
            Subscription lifecycles
          </CardTitle>
          <CardDescription>Each subscription controls a unique execution of the observable. Manage them like file handles or sockets.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><Link2 className="w-4 h-4 text-indigo-600" /> add / teardown logic</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const parent = interval(1000).subscribe(console.log);

const child = interval(1000).subscribe((value) => console.log('child', value));
parent.add(child);

setTimeout(() => parent.unsubscribe(), 3100);`}
            </pre>
            <SnippetOutput lines={['0', 'child 0', '1', 'child 1', '2', 'child 2', '(both unsubscribed together)']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><Clock9 className="w-4 h-4 text-indigo-600" /> Auto-cleanup with takeUntil</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const destroy$ = new Subject<void>();

interval(1000).pipe(
  takeUntil(destroy$)
).subscribe((value) => console.log('tick', value));

// Later...
destroy$.next();
destroy$.complete();`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', '(stream completes automatically when destroy$ emits)']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Server className="w-6 h-6 text-indigo-600" />
            Real-world patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">HTTP request cancellation</h4>
            <p className="text-sm text-muted-foreground">Use subscriptions to abort pending requests when the component unmounts or a tab goes inactive.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const controller = new AbortController();
const sub = from(fetch('/api/data', { signal: controller.signal }))
  .subscribe({
    next: console.log,
    error: console.error
  });

window.addEventListener('beforeunload', () => {
  controller.abort();
  sub.unsubscribe();
});`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">WebSocket reconnection</h4>
            <p className="text-sm text-muted-foreground">Subscriptions let you close sockets deterministically when the user navigates away.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const socket$ = new Observable((subscriber) => {
  const socket = new WebSocket('wss://example.com');
  socket.addEventListener('message', (event) => subscriber.next(event.data));
  socket.addEventListener('error', (err) => subscriber.error(err));
  socket.addEventListener('close', () => subscriber.complete());

  return () => socket.close();
});`}
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
              <li>✅ Store subscriptions and clear them in <code>ngOnDestroy</code> / <code>useEffect</code> cleanup.</li>
              <li>✅ Use <code>takeUntil</code>, <code>Subscription.add</code>, or <code>share</code> for shared streams.</li>
              <li>✅ Provide friendly error objects (wrap low-level errors).</li>
              <li>✅ Prefer <code>tap</code> for side effects, keeping <code>next</code> pure.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Nested subscriptions—flatten with <code>switchMap</code>/<code>mergeMap</code>.</li>
              <li>❌ Forgetting to unsubscribe from long-lived streams.</li>
              <li>❌ Swallowing errors (console.log without propagation).</li>
              <li>❌ Sharing the same observer object across unrelated streams.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            RxJS 8 enhancements
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Signal-friendly subscriptions</p>
            <p>Angular v17 + RxJS 8 add <code>takeUntilDestroyed</code> and <code>toObservable()</code>, so cleanup is automatic in components.</p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">SubscriptionLike</p>
            <p>Custom resources can now implement the Subscription interface—handy when wrapping native APIs (Web Bluetooth, BroadcastChannel).</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

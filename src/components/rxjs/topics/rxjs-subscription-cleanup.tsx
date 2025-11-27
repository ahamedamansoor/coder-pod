/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Activity,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Link2,
  Clock3,
  Cpu,
} from 'lucide-react';

interface RxjsSubscriptionCleanupProps {}

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

export default function RxjsSubscriptionCleanup({}: RxjsSubscriptionCleanupProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Activity}
        category="RxJS Fundamentals"
        title="Subscription Cleanup"
        description="Learn how and when RxJS subscriptions end, how teardown logic runs, and how to avoid memory leaks with modern patterns."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-sky-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-sky-950/15 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-indigo-600" />
            Why subscription cleanup matters
          </CardTitle>
          <CardDescription className="text-base">
            Every <code>subscribe()</code> creates a running execution. Cleanup is how you stop that work, release resources, and prevent
            ghost listeners and memory leaks.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Stop infinite streams',
              text: 'Intervals, DOM events, and WebSockets never complete on their own—subscriptions must be ended or they will keep emitting.',
            },
            {
              title: 'Release external resources',
              text: 'Timers, event listeners, sockets, and custom resources live beyond the subscription unless you clean them up.',
            },
            {
              title: 'Avoid subtle memory leaks',
              text: 'Leaking subscriptions often look “fine” at first but slowly degrade performance and cause bugs on navigation.',
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

      {/* What actually gets cleaned up? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-indigo-600" />
            What subscription cleanup really is
          </CardTitle>
          <CardDescription className="text-base">
            In RxJS, cleanup is everything that happens when a subscription ends: unsubscribing, running teardown logic, and operators closing
            their inner subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>
              • <strong>Subscription</strong>: the object returned by <code>observable.subscribe(...)</code>, with an{' '}
              <code>unsubscribe()</code> method.
            </li>
            <li>
              • <strong>Teardown logic</strong>: optional function returned from the <code>Observable</code> constructor, run when the
              subscription ends.
            </li>
            <li>
              • <strong>Operator cleanup</strong>: operators like <code>take</code>, <code>takeUntil</code>, and <code>timeout</code> end the
              subscription automatically under certain conditions.
            </li>
            <li>
              • <strong>Framework helpers</strong>: Angular&apos;s <code>takeUntilDestroyed</code>, React&apos;s effect cleanup, and other
              helpers tie subscriptions to component lifecycles.
            </li>
          </ul>
          <Alert>
            <AlertTitle>Key mental model</AlertTitle>
            <AlertDescription>
              Think of a subscription like a running process. Cleanup is the moment that process stops, closes files and sockets, and gives
              memory back.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Manual unsubscribe vs auto-complete */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            Manual unsubscribe vs auto-completion
          </CardTitle>
          <CardDescription className="text-base">
            Some streams complete on their own (HTTP requests), others run forever (events, intervals). Cleanup strategies differ for each.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">1. Finite streams (complete automatically)</h4>
            <p className="text-xs text-muted-foreground">
              One-shot observables (like HTTP calls) complete automatically. RxJS disposes internal resources after <code>complete</code>,
              so you rarely need manual unsubscribe.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from } from 'rxjs';

const todos$ = from(fetch('/api/todos').then((r) => r.json()));

todos$.subscribe({
  next: (data) => console.log('✅ data', data),
  error: (err) => console.error('❌ fail', err),
  complete: () => console.log('🎯 finished'),
});

// After "complete", the subscription is cleaned up automatically.`}
            </pre>
            <SnippetOutput lines={['✅ data [ {...}, {...} ]', '🎯 finished']} />
            <p className="text-xs text-muted-foreground">
              For these finite streams, manual <code>unsubscribe()</code> is only needed when you want to cancel <em>before</em> completion.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">2. Infinite streams (require explicit cleanup)</h4>
            <p className="text-xs text-muted-foreground">
              Intervals and events don&apos;t complete by default—you are responsible for terminating them via <code>unsubscribe()</code> or
              operators like <code>take</code>.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, take } from 'rxjs';

// Emits 0, 1, 2 then completes
const threeTicks$ = interval(1000).pipe(take(3));

threeTicks$.subscribe({
  next: (v) => console.log('tick', v),
  complete: () => console.log('done (auto-cleanup)'),
});

// Output:
// tick 0
// tick 1
// tick 2
// done (auto-cleanup)`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2', 'done (auto-cleanup)']} />
            <p className="text-xs text-muted-foreground">
              Using <code>take</code>, <code>first</code>, or <code>takeUntil</code> is often safer than remembering to call{' '}
              <code>unsubscribe()</code> manually.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Teardown logic and finalize */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/10 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Teardown logic & finalize()
          </CardTitle>
          <CardDescription className="text-base">
            Custom observables can define teardown functions; <code>finalize()</code> lets you run logic exactly once when a subscription ends.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">3. Teardown inside the Observable</h4>
            <p className="text-xs text-muted-foreground">
              The function passed to <code>new Observable()</code> may return another function. RxJS calls this teardown when the subscription
              completes, errors, or is unsubscribed.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

const countdown$ = new Observable<string>((subscriber) => {
  subscriber.next('3...');
  const id = setInterval(() => subscriber.next('tick'), 1000);

  const timeoutId = setTimeout(() => {
    subscriber.next('liftoff!');
    subscriber.complete();
  }, 3200);

  // Teardown: runs on complete, error, or unsubscribe
  return () => {
    clearInterval(id);
    clearTimeout(timeoutId);
    console.log('🧹 teardown: timers cleared');
  };
});

const sub = countdown$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('🚀 done'),
});`}
            </pre>
            <SnippetOutput
              lines={[
                '3...',
                'tick',
                'tick',
                'liftoff!',
                '🚀 done',
                '🧹 teardown: timers cleared',
              ]}
            />
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">4. finalize(): one place for “stream ended” logic</h4>
            <p className="text-xs text-muted-foreground">
              <code>finalize</code> runs once when the subscription ends, regardless of how. It&apos;s perfect for loading spinners and
              metrics.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, take, finalize } from 'rxjs';

let activeRequests = 0;

const poll$ = interval(1000).pipe(
  take(5),
  finalize(() => {
    activeRequests--;
    console.log('🧹 finalize: activeRequests =', activeRequests);
  })
);

activeRequests++;
const sub = poll$.subscribe((value) => {
  console.log('poll value', value);
});

// Unsubscribe early if needed
setTimeout(() => sub.unsubscribe(), 2600);`}
            </pre>
            <SnippetOutput
              lines={[
                'poll value 0',
                'poll value 1',
                'poll value 2',
                '🧹 finalize: activeRequests = 0',
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Framework & real-world cleanup patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            Framework-aware cleanup patterns
          </CardTitle>
          <CardDescription className="text-base">
            How React, Angular, and RxJS 8 helpers make subscription cleanup easier and safer.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">5. React effects: return a cleanup function</h4>
            <p className="text-xs text-muted-foreground">
              In React, you subscribe inside <code>useEffect</code> and return a function that unsubscribes when the component unmounts or
              dependencies change.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`useEffect(() => {
  const sub = notifications$
    .pipe(filter((n) => !n.read))
    .subscribe((n) => console.log('🔔 notification', n));

  return () => {
    // Cleanup on unmount / dependency change
    sub.unsubscribe();
  };
}, []);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Keep the subscription logic in one place and always return a cleanup function—React will call it reliably.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">6. Angular signals + RxJS 8: takeUntilDestroyed</h4>
            <p className="text-xs text-muted-foreground">
              Angular v17+ with RxJS 8 adds <code>takeUntilDestroyed</code> and <code>toObservable()</code> so subscriptions are tied to the
              component&apos;s lifetime automatically.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`@Component({...})
export class ChatComponent {
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    messages$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((msg) => console.log('msg', msg));
  }
}`}
            </pre>
            <p className="text-xs text-muted-foreground">
              When Angular destroys the component, <code>takeUntilDestroyed</code> completes the stream and cleans up the subscription.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Modern subscription helpers */}
      <Card className="bg-gradient-to-br from-indigo-50/70 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Clock3 className="w-6 h-6 text-indigo-600" />
            Modern RxJS cleanup helpers
          </CardTitle>
          <CardDescription className="text-base">
            Newer RxJS APIs make it easier to ensure subscriptions end correctly—even when bridging to Promises or async iterators.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">SubscriptionLike and parent subscriptions</p>
            <p>
              Anything that implements <code>SubscriptionLike</code> can be added to a parent subscription with <code>add()</code> so one
              <code>unsubscribe()</code> cleans up everything.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const sub = interval(1000).subscribe(console.log);

const wsResource: SubscriptionLike = {
  closed: false,
  unsubscribe() {
    socket.close();
    this.closed = true;
  },
};

// Both interval and WebSocket close together
sub.add(wsResource);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Promise bridges: firstValueFrom / lastValueFrom</p>
            <p>
              These helpers subscribe internally, resolve a Promise with the first/last value, and then auto-unsubscribe—perfect for one-off
              async workflows.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { firstValueFrom } from 'rxjs';

async function loadUser() {
  const user$ = http.get('/api/user');
  const user = await firstValueFrom(user$);
  console.log('Loaded user', user); // subscription already cleaned up
}`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Async iterator interop</p>
            <p>
              With helpers like <code>toAsyncGenerator</code>, you can <code>for await...of</code> an observable; ending the loop completes the
              subscription.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { interval, take } from 'rxjs';
import { toAsyncGenerator } from 'rxjs/interop';

const numbers$ = interval(500).pipe(take(3));

for await (const n of toAsyncGenerator(numbers$)) {
  console.log('value', n);
}
// After the loop, the subscription is done and cleaned up.`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">AbortSignal integration (DOM + fetch)</p>
            <p>
              Many modern APIs (including <code>fetch</code>) support <code>AbortSignal</code>. Combining <code>AbortController</code> with
              subscriptions lets you cancel network requests and streams together.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const controller = new AbortController();

const sub = from(fetch('/api/data', { signal: controller.signal }))
  .subscribe({
    next: console.log,
    error: console.error,
  });

// Later...
controller.abort(); // cancels fetch
sub.unsubscribe();  // completes subscription`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best practices summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Best practices for subscription cleanup
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Treat every subscription as a resource that must end.</li>
              <li>✅ Prefer operator-based cleanup (<code>take</code>, <code>takeUntil</code>, <code>timeout</code>).</li>
              <li>✅ Use teardown functions and <code>finalize</code> for non-RxJS resources.</li>
              <li>✅ Tie subscriptions to component lifecycles in frameworks.</li>
              <li>✅ Group related resources with parent <code>Subscription</code> and <code>SubscriptionLike</code>.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Leaving infinite streams (intervals, Subjects, events) subscribed forever.</li>
              <li>❌ Relying only on manual <code>unsubscribe()</code> without operators.</li>
              <li>❌ Forgetting to clean up timers, sockets, or DOM listeners in teardown.</li>
              <li>❌ Nesting subscriptions instead of composing with operators.</li>
              <li>❌ Sharing one subscription across unrelated features with no clear owner.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


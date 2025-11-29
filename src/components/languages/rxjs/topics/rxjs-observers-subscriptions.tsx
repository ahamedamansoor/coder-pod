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
            <Link2 className="w-6 h-6 text-indigo-600" />
            Subscribe & unsubscribe in practice
          </CardTitle>
          <CardDescription>
            How subscriptions look in real codebases—short-lived listeners, UI components, and framework helpers that manage cleanup for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">1. Short-lived subscription with manual cleanup</h4>
            <p className="text-xs text-muted-foreground">
              For infinite streams (like <code>interval</code>) you <strong>must</strong> call <code>unsubscribe()</code> yourself, or they will keep emitting forever.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';

// Infinite stream: 0, 1, 2, 3, ...
const ticks$ = interval(1000);

console.log('Subscribing...');
const sub = ticks$.subscribe((value) => {
  console.log('tick', value);
});

// Stop after ~2.5 seconds
setTimeout(() => {
  console.log('Unsubscribing now');
  sub.unsubscribe();
}, 2500);

// Sample output:
// Subscribing...
// tick 0
// tick 1
// Unsubscribing now`}
            </pre>
            <SnippetOutput
              lines={[
                'Subscribing...',
                'tick 0',
                'tick 1',
                'Unsubscribing now',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Think of a <code>Subscription</code> like a file handle: you open it with <code>subscribe()</code> and you are responsible for closing it.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">2. UI components: subscribe on mount, unsubscribe on destroy</h4>
            <p className="text-xs text-muted-foreground">
              In UI frameworks (React, Angular, etc.) the safest pattern is: <strong>subscribe in setup</strong>, <strong>unsubscribe in cleanup</strong>.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// React-style pattern using useEffect
useEffect(() => {
  const sub = userStatus$.subscribe((status) => {
    console.log('status', status);
  });

  // Cleanup: called when component unmounts
  return () => {
    sub.unsubscribe();
  };
}, []);

// Angular v17+ with takeUntilDestroyed (RxJS 8 interop)
@Component({...})
export class ProfileComponent {
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    userStatus$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((status) => console.log('status', status));
  }
}`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Modern Angular&apos;s <code>takeUntilDestroyed</code> and React&apos;s effect cleanup both express the same idea: tie subscription lifetime to component lifetime.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/10 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Subscription cleanup patterns
          </CardTitle>
          <CardDescription className="text-base">
            Different ways RxJS tears down work when a subscription ends: manual unsubscribe, teardown logic, operators, and modern helpers.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">3. Teardown logic inside the observable</h4>
            <p className="text-xs text-muted-foreground">
              When you create an <code>Observable</code> manually, you can return a cleanup function. RxJS runs it on <strong>complete</strong>, <strong>error</strong>, or
              when the consumer calls <code>unsubscribe()</code>.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

const clicksPerSecond$ = new Observable<number>((subscriber) => {
  let count = 0;

  const id = setInterval(() => {
    count += 1;
    subscriber.next(count);
  }, 1000);

  // Teardown: called on complete, error, or unsubscribe
  return () => {
    clearInterval(id);
    console.log('🧹 teardown: stopped counting clicks per second');
  };
});

const sub = clicksPerSecond$.subscribe((value) => {
  console.log('count', value);
});

setTimeout(() => {
  sub.unsubscribe(); // triggers teardown
}, 2500);

// Sample output:
// count 1
// count 2
// 🧹 teardown: stopped counting clicks per second`}
            </pre>
            <SnippetOutput
              lines={[
                'count 1',
                'count 2',
                '🧹 teardown: stopped counting clicks per second',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Always release timers, listeners, and sockets in teardown functions so they don&apos;t leak when subscribers go away.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">4. finalize(): run cleanup logic on end or unsubscribe</h4>
            <p className="text-xs text-muted-foreground">
              The <code>finalize</code> operator runs exactly once when the subscription ends—no matter whether it completed, errored, or was unsubscribed early.
              It&apos;s ideal for logging and releasing side resources.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, take, finalize } from 'rxjs';

const limited$ = interval(500).pipe(
  take(10), // would emit 0..9
  finalize(() => {
    console.log('🧹 finalize: stream stopped (complete or unsubscribe)');
  })
);

const sub = limited$.subscribe((value) => {
  console.log('tick', value);
});

// Unsubscribe before take(10) completes
setTimeout(() => {
  console.log('Manually unsubscribing');
  sub.unsubscribe();
}, 2100);

// Sample output:
// tick 0
// tick 1
// tick 2
// Manually unsubscribing
// 🧹 finalize: stream stopped (complete or unsubscribe)`}
            </pre>
            <SnippetOutput
              lines={[
                'tick 0',
                'tick 1',
                'tick 2',
                'Manually unsubscribing',
                '🧹 finalize: stream stopped (complete or unsubscribe)',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Combine <code>finalize</code> with <code>take</code>, <code>takeUntil</code>, or framework helpers so cleanup code always runs, even if you call
              <code>unsubscribe()</code> early.
            </p>
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
            <p>
              Angular v17 + RxJS 8 add <code>takeUntilDestroyed</code> and <code>toObservable()</code>, so cleanup is automatic in components:
              when the view is destroyed, all linked subscriptions unsubscribe.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`effect(() => {
  // toObservable() bridges signals -> Observable
  const value = mySignal();
  console.log('signal value', value);
}); // Automatically cleaned up with component`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">SubscriptionLike interfaces</p>
            <p>
              Modern RxJS exposes <code>SubscriptionLike</code> so your own resources can act like subscriptions—anything with
              <code>unsubscribe()</code> can be added to a parent subscription and torn down together.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const sub = interval(1000).subscribe(console.log);

// Wrap a non-RxJS resource
const customResource: SubscriptionLike = {
  closed: false,
  unsubscribe() {
    socket.close();
    this.closed = true;
  }
};

sub.add(customResource); // unsubscribes both`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Promise helpers: firstValueFrom / lastValueFrom</p>
            <p>
              <code>firstValueFrom</code> and <code>lastValueFrom</code> subscribe under the hood, resolve a Promise with the first/last value,
              and then <strong>auto-unsubscribe</strong>—great for one-off async operations.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { firstValueFrom } from 'rxjs';

// One-off async bridge
const user$ = http.get('/api/user');

const user = await firstValueFrom(user$);
console.log('Loaded user', user); // subscription is already cleaned up`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Async iterator interop</p>
            <p>
              RxJS 8 adds helpers like <code>toAsyncGenerator</code> / <code>fromAsyncGenerator</code> so you can
              <code>for await ... of</code> an observable; exiting the loop closes the underlying subscription automatically.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { interval, take } from 'rxjs';
import { toAsyncGenerator } from 'rxjs/interop';

const numbers$ = interval(500).pipe(take(3));

for await (const n of toAsyncGenerator(numbers$)) {
  console.log('value', n);
}
// After the loop, subscription is complete and cleaned up.`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  AlertTriangle,
  Activity,
  Brain,
  ShieldCheck,
  Zap,
  Link2,
  Cpu,
} from 'lucide-react';

interface RxjsUnderstandingMemoryLeaksProps {}

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

export default function RxjsUnderstandingMemoryLeaks({}: RxjsUnderstandingMemoryLeaksProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Brain}
        category="RxJS Fundamentals"
        title="Understanding Memory Leaks"
        description="Learn how RxJS streams can leak memory, how to spot the patterns, and how modern cleanup tools keep long‑running apps healthy."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-rose-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-rose-950/15 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-rose-600" />
            What is a memory leak in RxJS?
          </CardTitle>
          <CardDescription className="text-base">
            A memory leak happens when subscriptions, listeners, or cached values stay alive after your app is “done” with them—keeping
            objects in memory and still reacting to events.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Leaked subscriptions',
              text: 'You subscribe to a stream but never unsubscribe or complete it, even when a component or screen is gone.',
            },
            {
              title: 'Leaked listeners & timers',
              text: 'Observables are often backed by intervals, DOM listeners, or sockets. If the subscription never ends, those resources stay open.',
            },
            {
              title: 'Leaked cached values',
              text: 'Improper use of shareReplay or Subjects can cache values forever and hold onto large objects (like HTTP responses).',
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

      {/* Anatomy of a leaking subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-indigo-600" />
            Anatomy of a leaking stream
          </CardTitle>
          <CardDescription className="text-base">
            The leak pattern is always the same: a subscription outlives the code that created it, holding onto references and resources.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>• A long-lived observable (interval, Subject, event stream, WebSocket, etc.).</li>
            <li>• A subscription created when a view, service, or request starts.</li>
            <li>• No <code>unsubscribe()</code>, no completion, and no operator like <code>takeUntil</code> to end it.</li>
            <li>• References from closures keep UI state, DOM elements, or data in memory—even after navigation.</li>
          </ul>
          <Alert>
            <AlertTitle>Rule of thumb</AlertTitle>
            <AlertDescription>
              If a stream is infinite by nature, always ask: “Who owns this subscription, and when does it end?”
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Example: leaking interval in a component */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600" />
            Example: leaking interval in a UI component
          </CardTitle>
          <CardDescription className="text-base">
            A common leak: subscribing to an interval in a component but never unsubscribing when the component unmounts.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Leaking pattern
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// ❌ Leaks: interval keeps running after component unmounts
useEffect(() => {
  interval(1000).subscribe((value) => {
    console.log('tick', value);
  });
}, []);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Every time this component mounts, a new subscription is created. None of them are ever cleaned up.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Fixed with cleanup
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// ✅ Proper cleanup: unsubscribe on unmount
useEffect(() => {
  const sub = interval(1000).subscribe((value) => {
    console.log('tick', value);
  });

  return () => {
    sub.unsubscribe();
  };
}, []);`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2', '// component unmounted, subscription cleaned']} />
            <p className="text-xs text-muted-foreground">
              In React, always return a cleanup function from <code>useEffect</code> when you subscribe inside it.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Example: shareReplay misuse */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Example: shareReplay and cached leaks
          </CardTitle>
          <CardDescription className="text-base">
            <code>shareReplay</code> is powerful—but misconfigured, it can keep large responses in memory and leak subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Risky configuration
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// ❌ Can leak: shared forever, never torn down
const user$ = http.get('/api/user').pipe(
  shareReplay(1) // old signature: no config object
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              In older code, <code>shareReplay(1)</code> without configuration can hold onto the last value indefinitely and keep the
              underlying subscription alive.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Safer RxJS 7/8 configuration
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// ✅ Safer: refCount + resetOnRefCountZero
const user$ = http.get('/api/user').pipe(
  shareReplay({
    bufferSize: 1,
    refCount: true,           // auto-unsubscribe when last subscriber leaves
    resetOnRefCountZero: true // clear cache when no one is listening
  })
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              In modern RxJS, prefer the config object overload with <code>refCount: true</code> so shared streams can clean themselves up.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Real-world patterns: route & component cleanup */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/10 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            Route and component lifetime patterns
          </CardTitle>
          <CardDescription className="text-base">
            Tie stream lifetimes to navigation and UI lifecycles so subscriptions cannot leak.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Route-scoped subscriptions</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// A "destroy" subject that fires on route leave
const destroy$ = new Subject<void>();

routeEvents$
  .pipe(
    filter((e) => e.type === 'RouteLoaded'),
    takeUntil(destroy$)
  )
  .subscribe((e) => console.log('Route event', e));

// On route leave:
destroy$.next();
destroy$.complete();`}
            </pre>
            <SnippetOutput lines={['Route event {...}', 'Route event {...}', '// route left, no more logs']} />
            <p className="text-xs text-muted-foreground">
              A single <code>destroy$</code> stream can fan out to many <code>takeUntil</code> pipes, turning off multiple subscriptions at
              once when a route ends.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Angular v17 + RxJS 8: takeUntilDestroyed</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`@Component({...})
export class ProfileComponent {
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    userStream$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => console.log('user', user));
  }
}`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Angular&apos;s <code>takeUntilDestroyed</code> automatically ends subscriptions when the view is destroyed, eliminating a large
              class of memory leaks.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Modern helpers that help prevent leaks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            Modern RxJS helpers that reduce leaks
          </CardTitle>
          <CardDescription className="text-base">
            RxJS 7/8 introduce helpers that manage subscription lifetimes for you when bridging to other paradigms.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">firstValueFrom / lastValueFrom</p>
            <p>
              These helpers subscribe internally, resolve a Promise, then auto-unsubscribe. Perfect for one-off async flows without leaking.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { firstValueFrom } from 'rxjs';

async function loadSettings() {
  const settings$ = http.get('/api/settings');
  const settings = await firstValueFrom(settings$);
  console.log('Settings loaded', settings);
  // Under the hood: subscription has already completed and cleaned up
}`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Async iterator interop</p>
            <p>
              With <code>toAsyncGenerator</code> / <code>fromAsyncGenerator</code> helpers, the subscription ends when the async iterator
              completes or the loop breaks.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { interval, take } from 'rxjs';
import { toAsyncGenerator } from 'rxjs/interop';

const numbers$ = interval(500).pipe(take(3));

for await (const n of toAsyncGenerator(numbers$)) {
  console.log('value', n);
}
// After the loop, the subscription is complete and cleaned up.`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">SubscriptionLike and grouped teardown</p>
            <p>
              Implementing <code>SubscriptionLike</code> for your own resources lets you add them to a parent subscription, which unsubscribes
              everything together.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const sub = interval(1000).subscribe(console.log);

const customResource: SubscriptionLike = {
  closed: false,
  unsubscribe() {
    socket.close();
    this.closed = true;
  },
};

sub.add(customResource); // One unsubscribe tears down both`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">AbortSignal integration (fetch + events)</p>
            <p>
              Combining <code>AbortController</code> with subscriptions lets you cancel network requests and streams at once, avoiding work
              for tabs the user has already closed.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const controller = new AbortController();

const sub = from(fetch('/api/data', { signal: controller.signal }))
  .subscribe({
    next: console.log,
    error: console.error,
  });

window.addEventListener('beforeunload', () => {
  controller.abort();
  sub.unsubscribe();
});`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Memory leak checklist
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Treat infinite streams as dangerous by default—plan their end.</li>
              <li>✅ Use <code>takeUntil</code> and lifecycle helpers for UI code.</li>
              <li>✅ Prefer <code>shareReplay</code> with config (<code>refCount</code>, <code>resetOnRefCountZero</code>).</li>
              <li>✅ Use <code>finalize</code> and teardown functions to release non‑RxJS resources.</li>
              <li>✅ Periodically scan for subscriptions created in components/services without an obvious cleanup path.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Subscribing inside constructors or global module scope with no teardown.</li>
              <li>❌ Holding on to long‑lived Subjects for short‑lived features.</li>
              <li>❌ Using <code>shareReplay(1)</code> without understanding its lifetime.</li>
              <li>❌ Nesting subscriptions instead of composing with operators (harder to track ownership).</li>
              <li>❌ Ignoring browser devtools memory/timeline hints that suggest detached listeners.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


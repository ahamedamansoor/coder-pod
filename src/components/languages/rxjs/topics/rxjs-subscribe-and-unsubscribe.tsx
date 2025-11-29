'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Link2, Zap, UserCheck, ShieldCheck, AlertTriangle } from 'lucide-react';

interface RxjsSubscribeAndUnsubscribeProps {}

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

export default function RxjsSubscribeAndUnsubscribe({}: RxjsSubscribeAndUnsubscribeProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Link2}
        category="RxJS Fundamentals"
        title="Subscribe & Unsubscribe"
        description="See how subscribe() starts an observable execution, how unsubscribe() stops it, and how to choose safe patterns for real apps."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <UserCheck className="w-7 h-7 text-indigo-600" />
            Why subscribe/unsubscribe matters
          </CardTitle>
          <CardDescription className="text-base">
            <code>subscribe()</code> connects an observer to an observable and starts work. <code>unsubscribe()</code> is how you stop that
            work and free resources.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Start the stream',
              text: 'Nothing happens until you call subscribe(). That call kicks off HTTP requests, timers, and event wiring.',
            },
            {
              title: 'Control lifetime',
              text: 'Each subscription has its own lifetime. You decide when it ends via completion, errors, or unsubscribe().',
            },
            {
              title: 'Prevent leaks',
              text: 'For infinite sources (intervals, Subjects, events) unsubscribing is the only way to stop emissions and avoid leaks.',
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

      {/* subscribe() signatures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            The 3 subscribe() forms
          </CardTitle>
          <CardDescription className="text-base">
            RxJS lets you subscribe with a single next callback, three callbacks, or a full observer object.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">1. next(value) only</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const numbers$ = of(1, 2, 3);

numbers$.subscribe((value) => {
  console.log('value', value);
});

// Output:
// value 1
// value 2
// value 3`}
            </pre>
            <SnippetOutput lines={['value 1', 'value 2', 'value 3']} />
            <p className="text-xs text-muted-foreground">
              Great for quick experiments and when you only care about successful emissions.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">2. next, error, complete</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`numbers$.subscribe(
  (value) => console.log('value', value),
  (err) => console.error('error', err),
  () => console.log('complete')
);`}
            </pre>
            <SnippetOutput lines={['value 1', 'value 2', 'value 3', 'complete']} />
            <p className="text-xs text-muted-foreground">
              This overload is handy for quick demos, but larger apps usually prefer a single observer object for readability.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">3. Observer object</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const observer = {
  next: (value) => console.log('value', value),
  error: (err) => console.error('error', err),
  complete: () => console.log('complete'),
};

numbers$.subscribe(observer);`}
            </pre>
            <SnippetOutput lines={['value 1', 'value 2', 'value 3', 'complete']} />
            <p className="text-xs text-muted-foreground">
              The observer form is easiest to unit test and reuse, and it matches how RxJS describes the contract conceptually.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Manual unsubscribe vs operator-based */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/10 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Unsubscribe: manual vs operators
          </CardTitle>
          <CardDescription className="text-base">
            You can call <code>unsubscribe()</code> directly, or you can let RxJS operators end the subscription for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">1. Manual unsubscribe on infinite streams</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';

const ticks$ = interval(1000);

console.log('Subscribing...');
const sub = ticks$.subscribe((value) => {
  console.log('tick', value);
});

setTimeout(() => {
  console.log('Unsubscribing');
  sub.unsubscribe();
}, 2600);

// Sample output:
// Subscribing...
// tick 0
// tick 1
// tick 2
// Unsubscribing`}
            </pre>
            <SnippetOutput
              lines={['Subscribing...', 'tick 0', 'tick 1', 'tick 2', 'Unsubscribing']}
            />
            <p className="text-xs text-muted-foreground">
              Manual unsubscribe is fine for low-level utilities, but in UI code it&apos;s easy to forget and leak subscriptions.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">2. Operator-based unsubscribe with takeUntil</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, Subject, takeUntil } from 'rxjs';

const destroy$ = new Subject<void>();

interval(1000)
  .pipe(takeUntil(destroy$))
  .subscribe((value) => console.log('tick', value));

// Later: signal teardown
setTimeout(() => {
  destroy$.next();
  destroy$.complete();
}, 2600);`}
            </pre>
            <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2']} />
            <p className="text-xs text-muted-foreground">
              <code>takeUntil</code> lets you drive cleanup from a single signal stream—perfect for routing, component lifecycles, and
              cancel buttons.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Real-world subscribe/unsubscribe patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world subscribe/unsubscribe patterns
          </CardTitle>
          <CardDescription className="text-base">
            Practical usage with DOM events, WebSockets, and shared subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">3. DOM events: fromEvent + unsubscribe</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const clicks$ = fromEvent<MouseEvent>(document, 'click').pipe(
  map((event) => ({ x: event.clientX, y: event.clientY }))
);

const sub = clicks$.subscribe((coords) => {
  console.log('coords', coords);
});

// Later (e.g., when page closes)
sub.unsubscribe();`}
            </pre>
            <SnippetOutput
              lines={[
                'coords { x: 181, y: 95 }',
                'coords { x: 320, y: 210 }',
                '// (no more logs after unsubscribe)',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Wrapping DOM events in observables gives you one place to subscribe/unsubscribe instead of managing listeners manually.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">4. WebSocket stream with teardown</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

const socket$ = new Observable<string>((subscriber) => {
  const socket = new WebSocket('wss://example.com/chat');

  socket.addEventListener('message', (event) => subscriber.next(event.data));
  socket.addEventListener('error', (err) => subscriber.error(err));
  socket.addEventListener('close', () => subscriber.complete());

  // Teardown for unsubscribe / complete / error
  return () => socket.close();
});

const sub = socket$.subscribe((msg) => console.log('msg', msg));

// When user leaves chat:
sub.unsubscribe();`}
            </pre>
            <SnippetOutput
              lines={[
                "msg 'hello'",
                "msg 'how are you?'",
                '// ...',
                '// socket closed on unsubscribe',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Here <code>unsubscribe()</code> not only stops notifications but also closes the underlying WebSocket—a critical part of cleanup.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common mistakes & best practices */}
      <Card className="bg-gradient-to-br from-indigo-50/70 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Subscribe/unsubscribe best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Treat every subscription as a resource with an owner.</li>
              <li>✅ Prefer operator-based cleanup (take, takeUntil) over ad-hoc timers.</li>
              <li>✅ Use the observer object form in complex flows.</li>
              <li>✅ Tie subscriptions to lifecycles (components, services, routes).</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items                            center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Subscribing in many places with no clear owner or cleanup.</li>
              <li>❌ Nesting subscriptions instead of composing with operators.</li>
              <li>❌ Forgetting to unsubscribe from infinite streams.</li>
              <li>❌ Assuming a single subscription is shared by default (each subscribe() is separate).</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


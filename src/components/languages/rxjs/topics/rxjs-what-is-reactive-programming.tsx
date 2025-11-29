'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Activity,
  Atom,
  Zap,
  Layers,
  RefreshCw,
  Rocket,
  Code,
  Smartphone,
  BellRing,
  Wifi,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  Database,
} from 'lucide-react';

interface RxjsWhatIsReactiveProgrammingProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function RxjsWhatIsReactiveProgramming({}: RxjsWhatIsReactiveProgrammingProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Atom}
        category="RxJS Fundamentals"
        title="What is Reactive Programming?"
        description="Learn how RxJS treats data as time-based streams so your applications react instantly to user events, APIs, and system signals."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-sky-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Zap className="w-7 h-7 text-indigo-600" />
            Why reactive thinking matters
          </CardTitle>
          <CardDescription className="text-base">
            Reactive systems treat data as ongoing events (streams) instead of one-off values, making your UI, APIs, and background jobs responsive by default.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[{ icon: Rocket, title: 'Faster feedback', text: 'React the instant events arrive (typing, GPS, market prices).' }, { icon: Wifi, title: 'Real-time ready', text: 'Streams naturally describe sockets, SSE, IoT sensors, or telemetry feeds.' }, { icon: ShieldCheck, title: 'Fewer leaks', text: 'Subscriptions make cleanup explicit so complex workflows stay safe.' }].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <item.icon className="w-5 h-5 text-indigo-600" />
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Definition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-indigo-600" />
            Reactive programming in one sentence
          </CardTitle>
          <CardDescription>
            <strong>Reactive programming = data streams + declarative reactions.</strong> You describe what should happen when data changes, and the runtime handles subscription, scheduling, and clean-up.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-4">
            <Badge className="w-fit">From push to pull</Badge>
            <p className="text-sm text-muted-foreground">
              Instead of you asking for new values (pull), observables <em>push</em> values whenever something happens. This lets you model UIs, network calls, and user intent the same way.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const keypress$ = fromEvent(document, 'keydown').pipe(
  map((event) => event.key.toUpperCase())
);

const subscription = keypress$.subscribe((key) => {
  console.log('User pressed:', key);
});

// Later
subscription.unsubscribe();`}
            </pre>
            <SnippetOutput lines={[`User pressed: A`, `User pressed: ENTER`, `...until unsubscribe`]} />
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 p-4 space-y-4">
            <Badge className="w-fit bg-indigo-600 text-white">Mental model</Badge>
            <p className="text-sm text-muted-foreground">Think of every observable as a timeline. Your operators (map, filter, buffer) sculpt that timeline before the subscriber ever sees the data.</p>
            <div className="rounded-lg border border-indigo-200/70 dark:border-indigo-800/50 bg-white/90 dark:bg-slate-950/60 p-4 text-xs font-mono space-y-2">
              <div className="timeline-diagram">
                <div className="timeline-lane">
                  <span className="timeline-label">source$</span>
                  <span className="timeline-dot" />
                  <span className="timeline-dot" />
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-lane timeline-lane-map">
                  <span className="timeline-label">map(x ⇒ x * 2)</span>
                  <span className="timeline-dot" />
                  <span className="timeline-dot" />
                  <span className="timeline-dot" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Building blocks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Observable anatomy
          </CardTitle>
          <CardDescription>Every observable has three signals: <strong>next</strong> (data), <strong>error</strong>, and <strong>complete</strong>. Understanding them prevents resource leaks.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Producer',
              text: 'Describes how to create values (events, timers, sockets). In RxJS 8, producers can be sync, async, or promise-based without changing API.',
            },
            {
              title: 'Operators',
              text: 'Pure functions that return observables. Compose them with .pipe() for readable dataflows.',
            },
            {
              title: 'Subscriber',
              text: 'Receives emissions and controls lifetime via Subscription.add / unsubscribe. Always clean up!',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Example grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-indigo-600" />
            Tiny, focused examples
          </CardTitle>
          <CardDescription>Break complex pipelines into smaller, verifiable stages.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><Smartphone className="w-4 h-4 text-indigo-600" /> Debounced search input</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

const query$ = fromEvent(inputEl, 'input').pipe(
  map((event) => event.target.value.trim()),
  debounceTime(300),
  distinctUntilChanged()
);

query$.subscribe((term) => {
  console.log('🔎 Fetch suggestions for:', term);
});`}
            </pre>
            <SnippetOutput lines={[`🔎 Fetch suggestions for: reactive`, `🔎 Fetch suggestions for: reactive programming`]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><BellRing className="w-4 h-4 text-indigo-600" /> Server-sent updates</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const price$ = interval(2000).pipe(
  switchMap(() => from(fetch('/api/price').then((r) => r.json())))
);

price$.subscribe(({ value }) => {
  console.log('📈 Latest price:', value);
});`}
            </pre>
            <SnippetOutput lines={[`📈 Latest price: 132.41`, `📈 Latest price: 132.56`, `...`]} />
          </div>
        </CardContent>
      </Card>

      {/* Latest RxJS features */}
      <Card className="bg-gradient-to-br from-indigo-50/70 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-900/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-indigo-600" />
            New in RxJS 8 (2024)
          </CardTitle>
          <CardDescription>Recent releases make streams easier to adopt across frameworks.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Interop with async/await',
              text: 'firstValueFrom/lastValueFrom now support AbortSignal to cancel awaits when the component unmounts.',
            },
            {
              title: 'Config-free scheduling',
              text: 'New default schedulers pick microtasks vs macrotasks automatically to avoid blocking the UI.',
            },
            {
              title: 'Improved tree-shaking',
              text: 'Pipeable operator imports are pure ESM, so bundlers shake unused code more aggressively.',
            },
            {
              title: 'Signal-friendly APIs',
              text: 'toObservable() bridges Angular Signals and RxJS without manual Subjects.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Real-world patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCw className="w-6 h-6 text-indigo-600" />
            Real-world use cases
          </CardTitle>
          <CardDescription>Reactive programming shines when multiple asynchronous inputs must stay in sync.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 gap-4">
          {[
            {
              icon: Database,
              title: 'API orchestration',
              text: 'Merge REST, GraphQL, and WebSocket feeds; throttle them per user or tab.',
            },
            {
              icon: Smartphone,
              title: 'Mobile gestures',
              text: 'Model drag, pinch, scroll, and inertial animations without manual state machines.',
            },
            {
              icon: Wifi,
              title: 'Operational dashboards',
              text: 'Combine monitoring metrics, alerting, and user controls into one reactive view.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <card.icon className="w-5 h-5 text-indigo-600" />
              <p className="font-semibold">{card.title}</p>
              <p className="text-sm text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Common mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Best practices & pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Compose operators with <code>.pipe()</code> instead of nesting callbacks.</li>
              <li>✅ Always capture subscriptions so you can unsubscribe (or use takeUntil).</li>
              <li>✅ Model side effects with <code>tap()</code> so business logic remains pure.</li>
              <li>✅ Use schedulers to avoid blocking UI when heavy work runs.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Nested subscriptions – flatten with mergeMap/switchMap.</li>
              <li>❌ Mixing Promises and Observables without handling cancellation.</li>
              <li>❌ Forgetting to handle the error channel (streams fail silently).</li>
              <li>❌ Holding onto Subjects as global mutable state.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

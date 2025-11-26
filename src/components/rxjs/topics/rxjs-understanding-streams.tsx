'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Link2, ShieldCheck, AlertTriangle, Waves, Wifi, Layers } from 'lucide-react';

interface RxjsUnderstandingStreamsProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function RxjsUnderstandingStreams({}: RxjsUnderstandingStreamsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Waves}
        category="RxJS Fundamentals"
        title="Understanding Streams"
        description="Treat everything as a stream of data flowing through time—events, HTTP responses, sensor updates, even user intent."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Layers className="w-7 h-7 text-indigo-600" />
            Stream anatomy
          </CardTitle>
          <CardDescription className="text-base">
            A stream is a timeline of emissions. Operators slice, merge, or transform this timeline before subscribers react. Every example should show source → operator → subscriber.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Producer', text: 'interval, fromEvent, fetch, custom Observable.' },
            { title: 'Operators', text: 'map, filter, combineLatest, etc. Compose with .pipe().' },
            { title: 'Subscriber', text: 'Receives next/error/complete notifications.' },
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
            <Link2 className="w-6 h-6 text-indigo-600" />
            Stream basics
          </CardTitle>
          <CardDescription>Show the timeline as text plus code.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Sequential stream</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

const stream$ = of('A', 'B', 'C').pipe(
  concatMap((value, index) => of(value).pipe(delay(index * 500)))
);

stream$.subscribe((value) => console.log('value:', value));`}
            </pre>
            <SnippetOutput lines={['value: A', 'value: B', 'value: C']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Interleaved stream</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { merge, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

const fast$ = interval(300).pipe(take(3), map((n) => 'fast-' + n));
const slow$ = interval(700).pipe(take(2), map((n) => 'slow-' + n));

merge(fast$, slow$).subscribe((value) => console.log(value));`}
            </pre>
            <SnippetOutput lines={['fast-0', 'fast-1', 'slow-0', 'fast-2', 'slow-1']} />
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wifi className="w-6 h-6 text-indigo-600" />
            Real-world streams
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">Network telemetry</h4>
            <p className="text-sm text-muted-foreground">Combine metrics from multiple services to derive health state.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const merged$ = merge(cpu$, memory$, latency$).pipe(
  bufferTime(2000),
  map((batch) => summarize(batch))
);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">User behavior</h4>
            <p className="text-sm text-muted-foreground">Streams model complex interactions like drag, zoom, typeahead, or multi-touch gestures.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const drag$ = mouseDown$.pipe(
  switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$)))
);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Best practices for stream thinking
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Name streams with <code>$</code> suffix so they’re easy to spot.</li>
              <li>✅ Break pipelines into intermediate streams for clarity.</li>
              <li>✅ Use marble diagrams or logging to reason about timing.</li>
              <li>✅ Convert event-based APIs into observables early; compose later.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Mixing imperative state updates inside stream creation.</li>
              <li>❌ Ignoring backpressure (too many events without throttling).</li>
              <li>❌ Forgetting to complete subjects when components unmount.</li>
              <li>❌ Converting to Promises too early (lose stream benefits).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

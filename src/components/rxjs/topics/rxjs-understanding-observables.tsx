'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Eye,
  GitBranch,
  Layers,
  Activity,
  Code,
  ShieldCheck,
  AlertTriangle,
  Link2,
  Share2,
  Zap,
  Database,
  Radio,
  Workflow,
  Smartphone,
  BellRing,
  Play,
  CheckCircle,
  Circle,
  ArrowRight,
} from 'lucide-react';

interface RxjsUnderstandingObservablesProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

// Animated Observable Component
const AnimatedObservable = () => {
  const [sourceValues, setSourceValues] = useState<Array<{ id: number; value: number }>>([]);
  const [transformedValues, setTransformedValues] = useState<Array<{ id: number; value: number }>>([]);
  const [filteredValues, setFilteredValues] = useState<Array<{ id: number; value: number }>>([]);
  const [subscriberOutput, setSubscriberOutput] = useState<string[]>([]);
  const [isEmitting, setIsEmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const runAnimation = async () => {
    if (isEmitting) return;
    setIsEmitting(true);
    setIsComplete(false);
    setSourceValues([]);
    setTransformedValues([]);
    setFilteredValues([]);
    setSubscriberOutput([]);

    // Emit values 1, 2, 3, 4, 5
    const values = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      
      // Add to source
      setSourceValues(prev => [...prev, { id: i, value }]);
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Transform (multiply by 2 - map operator)
      const transformed = value * 2;
      setTransformedValues(prev => [...prev, { id: i, value: transformed }]);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter (only values > 5)
      if (transformed > 5) {
        setFilteredValues(prev => [...prev, { id: i, value: transformed }]);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Emit to subscriber (only filtered values)
        setSubscriberOutput(prev => [...prev, `next: ${transformed}`]);
        await new Promise(resolve => setTimeout(resolve, 300));
      } else {
        // Show that value was filtered out
        await new Promise(resolve => setTimeout(resolve, 800));
      }
    }
    
    // Complete
    setIsComplete(true);
    setSubscriberOutput(prev => [...prev, 'complete!']);
    setIsEmitting(false);
  };

  const reset = () => {
    setSourceValues([]);
    setTransformedValues([]);
    setFilteredValues([]);
    setSubscriberOutput([]);
    setIsEmitting(false);
    setIsComplete(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Activity className="w-6 h-6 text-indigo-600" />
          Live Observable Stream
        </CardTitle>
        <CardDescription className="text-base">
          Watch values flow from Observable → Map → Filter → Subscriber
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6">
          {/* Observable Source */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Radio className="w-4 h-4 text-indigo-600" />
                Observable (Source)
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                interval(1000)
              </Badge>
            </div>
            <div className="min-h-[80px] p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border-2 border-dashed border-indigo-300 dark:border-indigo-700">
              <div className="flex items-center gap-2 flex-wrap">
                {sourceValues.length === 0 && !isEmitting ? (
                  <div className="text-xs text-muted-foreground">Waiting to emit...</div>
                ) : (
                  sourceValues.map((item) => (
                    <div
                      key={item.id}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg animate-in zoom-in duration-300"
                    >
                      {item.value}
                    </div>
                  ))
                )}
                {isEmitting && !isComplete && (
                  <Circle className="w-4 h-4 text-indigo-400 animate-pulse" />
                )}
                {isComplete && (
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                    |
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-indigo-400" />
          </div>

          {/* Operator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-600" />
                Operator (Transform)
              </h4>
              <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 text-xs">
                map(x =&gt; x * 2)
              </Badge>
            </div>
            <div className="min-h-[80px] p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border-2 border-dashed border-cyan-300 dark:border-cyan-700">
              <div className="flex items-center gap-2 flex-wrap">
                {transformedValues.length === 0 && !isEmitting ? (
                  <div className="text-xs text-muted-foreground">No transformations yet...</div>
                ) : (
                  transformedValues.map((item) => (
                    <div
                      key={item.id}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg animate-in zoom-in duration-300"
                    >
                      {item.value}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-cyan-400" />
          </div>

          {/* Filter Operator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-violet-600" />
                Operator (Filter)
              </h4>
              <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 text-xs">
                filter(x &gt; 5)
              </Badge>
            </div>
            <div className="min-h-[80px] p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-lg border-2 border-dashed border-violet-300 dark:border-violet-700">
              <div className="flex items-center gap-2 flex-wrap">
                {filteredValues.length === 0 && !isEmitting ? (
                  <div className="text-xs text-muted-foreground">No values passed filter yet...</div>
                ) : filteredValues.length === 0 && isEmitting ? (
                  <div className="text-xs text-muted-foreground">Filtering...</div>
                ) : (
                  filteredValues.map((item) => (
                    <div
                      key={item.id}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg animate-in zoom-in duration-300"
                    >
                      {item.value}
                    </div>
                  ))
                )}
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground">
                {transformedValues.length > 0 && (
                  <span>
                    {filteredValues.length} of {transformedValues.length} values passed
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-violet-400" />
          </div>

          {/* Subscriber */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-600" />
                Subscriber (Consumer)
              </h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 text-xs">
                subscribe()
              </Badge>
            </div>
            <div className="min-h-[120px] p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
              {subscriberOutput.length === 0 ? (
                <div className="text-slate-500">Waiting for values...</div>
              ) : (
                <div className="space-y-1">
                  {subscriberOutput.map((line, index) => (
                    <div
                      key={index}
                      className={`animate-in fade-in duration-300 ${
                        line.includes('complete') 
                          ? 'text-green-400 font-bold' 
                          : 'text-cyan-400'
                      }`}
                    >
                      {line.includes('complete') ? '✓ ' : '→ '}{line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border">
          <p className="text-xs font-semibold mb-2">Code:</p>
          <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`import { interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  take(5),
  map(x => x * 2),
  filter(x => x > 5)
);

source$.subscribe({
  next: (value) => console.log('next:', value),
  complete: () => console.log('complete!')
});

// Output: next: 6, next: 8, next: 10, complete!
// (2 and 4 are filtered out)`}</pre>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={runAnimation}
            disabled={isEmitting}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50"
          >
            {isEmitting ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-pulse" />
                Emitting...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Observable
              </>
            )}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            disabled={isEmitting}
          >
            Reset
          </Button>
        </div>

        <Alert>
          <Activity className="h-4 w-4" />
          <AlertTitle>Watch the Flow</AlertTitle>
          <AlertDescription>
            Values emit from the <strong className="text-indigo-600 dark:text-indigo-400">Observable</strong> (1-5), get <strong className="text-cyan-600 dark:text-cyan-400">transformed</strong> by map (×2 → 2, 4, 6, 8, 10), then <strong className="text-violet-600 dark:text-violet-400">filtered</strong> (only values &gt; 5 pass), and finally arrive at the <strong className="text-emerald-600 dark:text-emerald-400">Subscriber</strong>. Notice how 2 and 4 are filtered out and never reach the subscriber!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function RxjsUnderstandingObservables({}: RxjsUnderstandingObservablesProps) {
  return (
    <>
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Eye}
        category="RxJS Fundamentals"
        title="Understanding Observables"
        description="Master the stream abstraction at the heart of RxJS: how observables create values, push them through operators, and signal completion."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Layers className="w-7 h-7 text-indigo-600" />
            What is an observable?
          </CardTitle>
          <CardDescription className="text-base">
            An observable is a blueprint for creating a stream of values over time. You subscribe to start receiving next/error/complete notifications, and you are responsible for cleanup.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Activity, title: 'Producer', text: 'Defines how data is generated (events, timers, HTTP, sensors).' },
            { icon: GitBranch, title: 'Execution', text: 'Operators transform streams before they reach subscribers.' },
            { icon: ShieldCheck, title: 'Teardown', text: 'Subscriptions expose unsubscribe() so resources free up exactly once.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <item.icon className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-6 h-6 text-indigo-600" />
            Timeline diagram
          </CardTitle>
          <CardDescription>Visualize emissions (●), errors (⚠), and completion (|).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 text-xs font-mono border whitespace-pre-wrap">
{`source$:      ──●──●────●────────●────| 
filter(x>10):  ───────●────────────●──| 
map(x*2):      ───────◎────────────◎──| 
subscribe():   (next) (next)       (complete)

If an error occurs:
source$:      ──●──●────⚠
No further values are delivered after an error.`}
          </pre>
        </CardContent>
      </Card>

      {/* Animated Observable Visualization */}
      <AnimatedObservable />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-indigo-600" />
            Creation + subscription in practice
          </CardTitle>
          <CardDescription>Every example shows inputs, the observable pipeline, and final output.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Manual observable</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { Observable } from 'rxjs';

const countdown$ = new Observable((subscriber) => {
  subscriber.next('3...');
  const timer = setInterval(() => subscriber.next('tick'), 1000);
  setTimeout(() => {
    subscriber.next('liftoff!');
    subscriber.complete();
  }, 3200);

  return () => {
    clearInterval(timer);
    console.log('🧹 cleanup when unsubscribed or completed');
  };
});

const sub = countdown$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('🚀 done!')
});`}
            </pre>
            <SnippetOutput lines={['3...', 'tick', 'tick', 'liftoff!', '🚀 done!', '🧹 cleanup when unsubscribed or completed']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">from + async source</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from } from 'rxjs';

const response$ = from(fetch('/api/todos').then((res) => res.json()));

response$.subscribe({
  next: (data) => console.log('✅ data', data),
  error: (err) => console.error('❌ fail', err),
  complete: () => console.log('🎯 finished')
});`}
            </pre>
            <SnippetOutput lines={['✅ data [ {...}, {...} ]', '🎯 finished']} />
          </div>
      </CardContent>
    </Card>


      <Card className="bg-gradient-to-br from-indigo-50/70 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            Cold vs hot observables
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-600" /> Cold</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Producer starts on subscription</li>
              <li>• Each subscriber gets independent timeline</li>
              <li>• Ideal for HTTP calls, timers</li>
            </ul>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const cold$ = interval(1000).pipe(take(3));
cold$.subscribe((value) => console.log('A', value));
setTimeout(() => cold$.subscribe((value) => console.log('B', value)), 1500);`}
            </pre>
            <SnippetOutput lines={['A 0', 'A 1', 'A 2', 'B 0', 'B 1', 'B 2']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold flex items-center gap-2"><Radio className="w-4 h-4 text-indigo-600" /> Hot</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Producer lives outside subscriptions</li>
              <li>• Subscribers join mid-stream</li>
              <li>• Perfect for DOM events, WebSocket feeds</li>
            </ul>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const subject = new Subject();
interval(1000).pipe(take(3)).subscribe(subject);
subject.subscribe((value) => console.log('A', value));
setTimeout(() => subject.subscribe((value) => console.log('B', value)), 1500);`}
            </pre>
            <SnippetOutput lines={['A 0', 'A 1', 'A 2', 'B 2']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Share2 className="w-6 h-6 text-indigo-600" />
            Multicasting & sharing
          </CardTitle>
          <CardDescription>Use <code>share</code>/<code>shareReplay</code> to avoid duplicate work and keep hot observables tidy.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';

const shared$ = interval(1000).pipe(
  take(3),
  shareReplay({ bufferSize: 1, refCount: true })
);

const sub1 = shared$.subscribe((value) => console.log('A', value));

setTimeout(() => {
  shared$.subscribe((value) => console.log('B', value));
}, 2200);`}
          </pre>
          <SnippetOutput lines={['A 0', 'A 1', 'A 2', 'B 2']} />
          <Alert>
            <AlertTitle>RxJS 8 update</AlertTitle>
            <AlertDescription>
              <code>share</code> now defaults to resetOnError/ResetOnComplete behavior so streams recover automatically without extra boilerplate—great for Angular signals and React hooks.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-indigo-600" />
            Real-world patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold">Cross-tab synchronization</h4>
            <p className="text-sm text-muted-foreground">Share a single WebSocket connection between tabs, but deliver updates to whichever subscriber is active.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const socket$ = new Observable((subscriber) => {
  const socket = new WebSocket('wss://example.com');
  socket.addEventListener('message', (event) => subscriber.next(event.data));
  socket.addEventListener('error', (err) => subscriber.error(err));
  socket.addEventListener('close', () => subscriber.complete());

  return () => socket.close();
}).pipe(share());`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold">Telemetry aggregation</h4>
            <p className="text-sm text-muted-foreground">Combine multiple sensor observables and buffer them for bulk upload.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const merged$ = merge(tempSensor$, humiditySensor$, gps$).pipe(
  bufferTime(5000),
  filter((batch) => batch.length > 0),
  switchMap((batch) => sendToServer(batch))
);`}
            </pre>
          </div>
        </CardContent>
      </Card>

    </div>
    </>
  );
}

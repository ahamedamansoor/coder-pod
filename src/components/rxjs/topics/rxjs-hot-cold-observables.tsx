'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, Snowflake, Share2, Link2, AlertTriangle, ShieldCheck, Flame, Thermometer, Play, Users, User, Radio, Lightbulb, Clock } from 'lucide-react';

interface RxjsHotColdProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

// Animated Hot vs Cold Component
const AnimatedHotCold = () => {
  const [mode, setMode] = useState<'cold' | 'hot'>('cold');
  const [isRunning, setIsRunning] = useState(false);
  const [emittedValues, setEmittedValues] = useState<number[]>([]);
  const [subscriberAValues, setSubscriberAValues] = useState<number[]>([]);
  const [subscriberBValues, setSubscriberBValues] = useState<number[]>([]);
  const [subscriberBJoined, setSubscriberBJoined] = useState(false);

  const runCold = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setMode('cold');
    setEmittedValues([]);
    setSubscriberAValues([]);
    setSubscriberBValues([]);
    setSubscriberBJoined(false);

    // Subscriber A starts immediately
    const valuesForA = [0, 1, 2];
    for (let i = 0; i < valuesForA.length; i++) {
      setEmittedValues(prev => [...prev, valuesForA[i]]);
      setSubscriberAValues(prev => [...prev, valuesForA[i]]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Wait a bit, then Subscriber B starts with its OWN stream (cold behavior)
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubscriberBJoined(true);
    
    const valuesForB = [0, 1, 2]; // Starts from 0 again!
    for (let i = 0; i < valuesForB.length; i++) {
      setSubscriberBValues(prev => [...prev, valuesForB[i]]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsRunning(false);
  };

  const runHot = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setMode('hot');
    setEmittedValues([]);
    setSubscriberAValues([]);
    setSubscriberBValues([]);
    setSubscriberBJoined(false);

    // Both subscribers share the same stream
    const allValues = [0, 1, 2, 3, 4];
    
    for (let i = 0; i < allValues.length; i++) {
      setEmittedValues(prev => [...prev, allValues[i]]);
      
      // Subscriber A gets all values
      setSubscriberAValues(prev => [...prev, allValues[i]]);
      
      // Subscriber B joins after value 1 (hot behavior - only gets future values)
      if (i === 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setSubscriberBJoined(true);
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Subscriber B only gets values after it joined
      if (subscriberBJoined || i > 1) {
        setSubscriberBValues(prev => [...prev, allValues[i]]);
      }
    }

    setIsRunning(false);
  };

  const reset = () => {
    setEmittedValues([]);
    setSubscriberAValues([]);
    setSubscriberBValues([]);
    setSubscriberBJoined(false);
    setIsRunning(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Thermometer className="w-6 h-6 text-indigo-600" />
          Animated Hot vs Cold Observable
        </CardTitle>
        <CardDescription className="text-base">
          See how subscribers receive values differently in cold (independent) vs hot (shared) observables
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Observable Source */}
        <div className="p-6 bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/20 rounded-xl border-2 border-indigo-200/50 dark:border-indigo-800/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-indigo-600" />
              <h4 className="font-semibold">Observable Stream</h4>
            </div>
            <Badge className={`${
              mode === 'cold' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' 
                : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30'
            }`}>
              {mode === 'cold' ? <><Snowflake className="w-3 h-3 mr-1 inline" />Cold</> : <><Flame className="w-3 h-3 mr-1 inline" />Hot</>}
            </Badge>
          </div>

          {/* Emitted Values Timeline */}
          <div className="min-h-[60px] p-4 bg-white dark:bg-slate-900 rounded-lg border mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              {emittedValues.length === 0 ? (
                <span className="text-xs text-muted-foreground">No values emitted yet...</span>
              ) : (
                emittedValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm animate-in zoom-in duration-300"
                  >
                    {val}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Subscribers */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Subscriber A */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-blue-600" />
                <h5 className="font-semibold text-sm">Subscriber A</h5>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">Joined at 0s</Badge>
              </div>
              <div className="min-h-[80px] p-3 bg-slate-900 dark:bg-slate-950 rounded border font-mono text-xs">
                {subscriberAValues.length === 0 ? (
                  <div className="text-slate-500">Waiting...</div>
                ) : (
                  <div className="space-y-1">
                    {subscriberAValues.map((val, idx) => (
                      <div key={idx} className="text-cyan-400 animate-in fade-in">
                        A: {val}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Subscriber B */}
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-emerald-600" />
                <h5 className="font-semibold text-sm">Subscriber B</h5>
                <Badge className={`text-xs ${
                  subscriberBJoined 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30'
                }`}>
                  {subscriberBJoined ? 'Joined at 1.5s' : 'Not joined'}
                </Badge>
              </div>
              <div className="min-h-[80px] p-3 bg-slate-900 dark:bg-slate-950 rounded border font-mono text-xs">
                {!subscriberBJoined && subscriberBValues.length === 0 ? (
                  <div className="text-slate-500">Not subscribed yet...</div>
                ) : subscriberBValues.length === 0 ? (
                  <div className="text-slate-500">Waiting for values...</div>
                ) : (
                  <div className="space-y-1">
                    {subscriberBValues.map((val, idx) => (
                      <div key={idx} className="text-emerald-400 animate-in fade-in">
                        B: {val}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border">
            <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-blue-600" />
              Cold Observable Behavior
            </h5>
            <p className="text-xs text-muted-foreground mb-2">
              Each subscriber gets its own independent stream starting from value 0. Like playing a video - each viewer starts from the beginning.
            </p>
            <Badge className="text-xs">A: 0, 1, 2 | B: 0, 1, 2</Badge>
          </div>

          <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border">
            <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-600" />
              Hot Observable Behavior
            </h5>
            <p className="text-xs text-muted-foreground mb-2">
              All subscribers share the same stream. Late subscribers only get future values. Like a live broadcast - you join mid-stream.
            </p>
            <Badge className="text-xs">A: 0, 1, 2, 3, 4 | B: 2, 3, 4</Badge>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t flex-wrap">
          <Button
            onClick={runCold}
            disabled={isRunning}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50"
          >
            <Snowflake className="w-4 h-4 mr-2" />
            Run Cold
          </Button>
          <Button
            onClick={runHot}
            disabled={isRunning}
            className="bg-gradient-to-r from-rose-600 to-orange-600 text-white hover:from-rose-500 hover:to-orange-500 disabled:opacity-50"
          >
            <Flame className="w-4 h-4 mr-2" />
            Run Hot
          </Button>
          <Button onClick={reset} variant="outline" disabled={isRunning}>
            Reset
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Key Difference</AlertTitle>
          <AlertDescription>
            <strong className="text-blue-600 dark:text-blue-400">Cold</strong>: Each subscriber triggers a new execution from the start (like HTTP requests). <strong className="text-rose-600 dark:text-rose-400">Hot</strong>: Subscribers share the ongoing stream and only receive values emitted after they subscribe (like DOM events, WebSockets).
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function RxjsHotColdObservables({}: RxjsHotColdProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Thermometer}
        category="RxJS Fundamentals"
        title="Hot vs Cold Observables"
        description="Know when streams restart per subscriber (cold) vs share an ongoing source (hot) so you always pick the correct strategy."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Snowflake className="w-7 h-7 text-indigo-600" />
            Cold observables
          </CardTitle>
          <CardDescription className="text-base">Every subscriber gets a brand new execution. Perfect for HTTP requests, intervals, and functions that should run per consumer.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Examples', text: 'interval, timer, from(fetch()), of()' },
            { title: 'Lifecycle', text: 'Producer starts on subscribe and stops when complete/unsubscribe.' },
            { title: 'Pros', text: 'Predictable, testable, no need to worry about late subscribers.' },
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
            <Zap className="w-6 h-6 text-indigo-600" />
            Code: cold interval restarted per subscriber
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const cold$ = interval(1000).pipe(take(3));

cold$.subscribe((value) => console.log('A', value));
setTimeout(() => cold$.subscribe((value) => console.log('B', value)), 1500);`}
          </pre>
          <SnippetOutput lines={['A 0', 'A 1', 'A 2', 'B 0', 'B 1', 'B 2']} />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/70 via-orange-50/60 to-amber-50/60 dark:from-rose-950/20 dark:via-orange-950/20 dark:to-amber-950/10 border border-rose-200/60 dark:border-rose-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Flame className="w-7 h-7 text-rose-600" />
            Hot observables
          </CardTitle>
          <CardDescription className="text-base">The producer exists independently of subscribers. Late subscribers only receive future values. Great for DOM events, sockets, media streams.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Examples', text: 'fromEvent, Subjects, shared intervals, WebSocket feeds' },
            { title: 'Lifecycle', text: 'Producer starts immediately or on connect; subscribers join midstream.' },
            { title: 'Pros', text: 'Share expensive resources, broadcast updates, keep data consistent.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Animated Hot vs Cold Visualization */}
      <AnimatedHotCold />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Share2 className="w-6 h-6 text-indigo-600" />
            Manual hot observable via Subject
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const subject = new Subject();
const hot$ = interval(1000).pipe(take(3));

hot$.subscribe(subject); // connect producer

subject.subscribe((value) => console.log('A', value));
setTimeout(() => subject.subscribe((value) => console.log('B', value)), 1500);`}
          </pre>
          <SnippetOutput lines={['A 0', 'A 1', 'A 2', 'B 2']} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-indigo-600" />
            share vs shareReplay (RxJS 8)
          </CardTitle>
          <CardDescription>Use operators to turn cold sources hot and control caching.</CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">share()</h4>
            <p className="text-sm text-muted-foreground">Multicasts the source, resets automatically on error/complete (new default in RxJS 8).</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const shared$ = interval(1000).pipe(
  take(3),
  share()
);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <h4 className="font-semibold">shareReplay({`{ bufferSize: 1 }`})</h4>
            <p className="text-sm text-muted-foreground">Hot + replays the last n values to late subscribers. Useful for caching HTTP results.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const cached$ = http$.pipe(
  shareReplay({ bufferSize: 1, refCount: true })
);`}
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
              <li>✅ Prefer cold for one-off tasks (HTTP, timers).</li>
              <li>✅ Use <code>share/ shareReplay</code> to avoid duplicate work.</li>
              <li>✅ Document whether a helper returns hot or cold to avoid surprises.</li>
              <li>✅ Use <code>takeUntil</code> to auto-teardown hot streams.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Multicasting without managing late subscribers.</li>
              <li>❌ Creating a new WebSocket per subscriber (use Subjects instead).</li>
              <li>❌ Assuming order: hot emissions drop if no one is listening.</li>
              <li>❌ Forgetting to cleanup manual Subject connections.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

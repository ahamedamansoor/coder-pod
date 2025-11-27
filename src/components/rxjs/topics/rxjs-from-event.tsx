'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Zap,
  MousePointer,
  Target,
  ShieldCheck,
  AlertTriangle,
  Activity,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Radio,
  ArrowRight,
} from 'lucide-react';

interface RxjsFromEventProps {}

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

// Animated visualization for fromEvent()
const AnimatedFromEvent = () => {
  const [phase, setPhase] = useState<'idle' | 'listening' | 'completed'>('idle');
  const [events, setEvents] = useState<Array<{ id: number; x: number; y: number; status: 'triggered' | 'captured' | 'emitted' }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('listening');
    setEvents([]);
    setLogLines(['Observable created: fromEvent(button, "click")', 'Subscription started...', 'Event listener attached ✓']);
    setIsListening(true);
    setClickCount(0);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const simulatedClicks = [
      { id: 0, x: 120, y: 340 },
      { id: 1, x: 260, y: 210 },
      { id: 2, x: 310, y: 180 },
    ];

    for (let i = 0; i < simulatedClicks.length; i++) {
      const click = simulatedClicks[i];
      
      // User clicks button
      setClickCount(i + 1);
      setEvents((prev) => [...prev, { ...click, status: 'triggered' }]);
      setLogLines((prev) => [...prev, `User clicked button...`]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      // Event captured by fromEvent
      setEvents((prev) =>
        prev.map((e) => e.id === click.id ? { ...e, status: 'captured' } : e)
      );
      setLogLines((prev) => [...prev, `Event captured at (${click.x}, ${click.y})`]);
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      // Emitted to observer
      setEvents((prev) =>
        prev.map((e) => e.id === click.id ? { ...e, status: 'emitted' } : e)
      );
      setLogLines((prev) => [...prev, `next(MouseEvent { x: ${click.x}, y: ${click.y} })`]);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    setPhase('completed');
    setIsListening(false);
    setLogLines((prev) => [...prev, 'unsubscribe() called', 'Event listener removed ✓', 'Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setEvents([]);
    setLogLines([]);
    setPhase('idle');
    setClickCount(0);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated fromEvent() - Event Stream Lifecycle
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>fromEvent(button, &apos;click&apos;)</code> captures DOM events and transforms them into an observable stream. The animation shows event listening, capture, and emission with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>fromEvent()</code> attaches an event listener when subscribed and removes it when unsubscribed. Each DOM event becomes a stream emission!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Phase & Listener Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Listener Status
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'listening' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'listening' ? 'Listening' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[180px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Event Source</p>
              
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <button className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    isListening 
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/50 animate-pulse' 
                      : 'bg-indigo-600 text-white shadow-sm'
                  }`}>
                    Click Me!
                  </button>
                  <span className="text-[10px] text-muted-foreground">
                    {isListening ? `🎯 Active (${clickCount} clicks)` : 'Waiting...'}
                  </span>
                </div>

                {isListening && (
                  <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 animate-in fade-in">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>Event listener active</span>
                  </div>
                )}

                {phase === 'completed' && (
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Listener removed</span>
                  </div>
                )}

                <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded border">
                  fromEvent(button, &apos;click&apos;)
                </div>
              </div>
            </div>
          </div>

          {/* Event Flow */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-indigo-600" />
                Event Flow
              </h4>
            </div>
            <div className="min-h-[180px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Click Events</p>
              
              <div className="space-y-2">
                {events.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Click events appear here</span>
                )}
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      event.status === 'triggered'
                        ? 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-600 animate-pulse'
                        : event.status === 'captured'
                        ? 'bg-blue-100 dark:bg-blue-900/20 border-blue-400 dark:border-blue-600'
                        : 'bg-emerald-100 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      event.status === 'triggered'
                        ? 'bg-yellow-500 text-white'
                        : event.status === 'captured'
                        ? 'bg-blue-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {event.id + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono">
                        ({event.x}, {event.y})
                      </div>
                      <div className="text-[9px] text-muted-foreground">
                        {event.status === 'triggered' ? '⚡ triggered' :
                         event.status === 'captured' ? '📡 captured' :
                         '✓ emitted'}
                      </div>
                    </div>
                    {event.status === 'captured' && (
                      <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Observer Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Observer Log
              </h4>
            </div>
            <div className="min-h-[180px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[180px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// Event stream logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('next(') ? 'text-emerald-400' :
                      line.includes('created') ? 'text-purple-400' :
                      line.includes('attached') ? 'text-green-400' :
                      line.includes('User clicked') ? 'text-yellow-400' :
                      line.includes('captured') ? 'text-blue-400' :
                      line.includes('unsubscribe') ? 'text-orange-400' :
                      line.includes('removed') ? 'text-red-400' :
                      line.includes('completed') ? 'text-green-400' :
                      'text-slate-300'
                    }`}
                  >
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const button = document.querySelector('#myButton');
const clicks$ = fromEvent(button, 'click');

const subscription = clicks$.subscribe({
  next: (event) => console.log('Click at', event.clientX, event.clientY),
  complete: () => console.log('Listener removed')
});

// Later: subscription.unsubscribe(); removes the listener`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsFromEvent({}: RxjsFromEventProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={MousePointer}
        category="RxJS · Creation Operators"
        title="fromEvent() – DOM & Event Streams"
        description="Use fromEvent() to turn DOM events, Node-style emitters, and custom sources into observables with predictable lifecycles."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why fromEvent() matters
          </CardTitle>
          <CardDescription className="text-base">
            <code>fromEvent()</code> is the standard way to create observables from events: clicks, key presses, scrolls, Node emitters, and
            more.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'DOM events as streams',
              text: 'Click, input, mousemove, scroll, resize—all can become composable observables.',
            },
            {
              title: 'Clear lifecycles',
              text: 'Subscriptions add event listeners; unsubscribe removes them. No more ghost handlers.',
            },
            {
              title: 'Interoperability',
              text: 'Node EventEmitter objects and some custom APIs can also plug into fromEvent().',
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

      {/* What is fromEvent()? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <MousePointer className="w-6 h-6 text-indigo-600" />
            Basic fromEvent() usage
          </CardTitle>
          <CardDescription className="text-base">
            <code>fromEvent(target, eventName)</code> returns an observable that emits the event object every time the event fires.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Mouse clicks</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';

const button = document.querySelector<HTMLButtonElement>('#save-btn')!;

const clicks$ = fromEvent<MouseEvent>(button, 'click');

clicks$.subscribe((event) => {
  console.log('clicked at', event.clientX, event.clientY);
});`}
            </pre>
            <SnippetOutput
              lines={[
                'clicked at 120 340',
                'clicked at 260 210',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              The generic parameter (<code>&lt;MouseEvent&gt;</code>) gives you strong typing inside your handlers.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Keyboard events</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const keydown$ = fromEvent<KeyboardEvent>(document, 'keydown');

keydown$.subscribe((event) => {
  console.log('key', event.key);
});`}
            </pre>
            <SnippetOutput
              lines={[
                'key a',
                'key Enter',
                'key Escape',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Use <code>KeyboardEvent</code>, <code>MouseEvent</code>, or more specific event types to get autocomplete and safety.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated fromEvent visualization */}
      <AnimatedFromEvent />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world patterns with fromEvent()
          </CardTitle>
          <CardDescription className="text-base">
            Everyday use cases: debounced search input, infinite scroll, and resize-aware layouts.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Debounced search input</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';

const input = document.querySelector<HTMLInputElement>('#search')!;

const search$ = fromEvent<InputEvent>(input, 'input').pipe(
  map((event) => (event.target as HTMLInputElement).value.trim()),
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((term) => fetch(\`/api/search?q=\${encodeURIComponent(term)}\`).then((r) => r.json()))
);

search$.subscribe((results) => {
  console.log('results', results.length);
});`}
            </pre>
            <SnippetOutput
              lines={[
                'results 12',
                'results 3',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              <code>fromEvent()</code> is the backbone of reactive search: you react to every keystroke but only send network requests at
              controlled intervals.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Infinite scroll / lazy loading</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent } from 'rxjs';
import { throttleTime, map, filter } from 'rxjs/operators';

const scroll$ = fromEvent<Event>(window, 'scroll').pipe(
  throttleTime(200),
  map(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return scrollTop + clientHeight >= scrollHeight - 100;
  }),
  filter((nearBottom) => nearBottom)
);

scroll$.subscribe(() => {
  console.log('Load more data…');
});`}
            </pre>
            <SnippetOutput
              lines={['Load more data…', 'Load more data…']}
            />
            <p className="text-xs text-muted-foreground">
              Combine <code>fromEvent()</code> with rate-limiting operators (<code>throttleTime</code>, <code>debounceTime</code>) to build
              responsive but efficient event-driven UIs.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Options & configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-indigo-600" />
            Event options & cleanup
          </CardTitle>
          <CardDescription className="text-base">
            Modern <code>fromEvent()</code> lets you pass the same options object you would give to <code>addEventListener</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Passive and capture options</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// Passive scroll listener (improves performance)
const scroll$ = fromEvent(window, 'scroll', { passive: true });

// Capture-phase click listener
const captureClicks$ = fromEvent(document, 'click', { capture: true });`}
            </pre>
            <p>
              These options pass straight through to <code>addEventListener</code> under the hood; unsubscribe removes the listener with the
              same options.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Once-only listeners</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`// Only the first click is emitted, then the listener is removed
const onceClick$ = fromEvent(button, 'click', { once: true });

onceClick$.subscribe(() => console.log('First click only!'));`}
            </pre>
            <SnippetOutput lines={['First click only!']} />
            <p>
              Using <code>once: true</code> gives you auto-cleanup after the first emission—handy for onboarding tips or first-time prompts.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for fromEvent()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Keep event logic small; push heavy work into operators (<code>map</code>, <code>filter</code>, <code>switchMap</code>).</li>
              <li>✅ Always unsubscribe or use operators like <code>takeUntil</code> to avoid leaked listeners.</li>
              <li>✅ Use typed events: <code>fromEvent&lt;MouseEvent&gt;</code>, <code>fromEvent&lt;KeyboardEvent&gt;</code>, etc.</li>
              <li>✅ Use options (<code>passive</code>, <code>once</code>, <code>capture</code>) when appropriate for performance and semantics.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Subscribing to <code>fromEvent(window,'scroll')</code> without throttling—it can emit very frequently.</li>
              <li>❌ Creating multiple subscriptions to the same DOM target with no clear owner or cleanup strategy.</li>
              <li>❌ Mixing imperative <code>addEventListener</code>/<code>removeEventListener</code> calls with <code>fromEvent()</code> on the same target.</li>
              <li>❌ Ignoring mobile performance: use <code>passive: true</code> for scroll and touch listeners where appropriate.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


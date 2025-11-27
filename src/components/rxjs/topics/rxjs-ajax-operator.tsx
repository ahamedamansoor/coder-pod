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
  Globe,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Send,
  Download,
  XCircle,
  Loader2,
} from 'lucide-react';

interface RxjsAjaxOperatorProps {}

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

// Animated visualization of ajax() request lifecycle
const AnimatedAjaxRequest = () => {
  const [phase, setPhase] = useState<'idle' | 'preparing' | 'sending' | 'receiving' | 'completed'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [requestDetails, setRequestDetails] = useState<{
    method: string;
    url: string;
    status: string;
  } | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('preparing');
    setLogLines(['ajax.getJSON("/api/users/1")', 'Observable created', 'Subscription started...']);
    setRequestDetails(null);
    setResponseData(null);
    setProgress(0);

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Preparing request
    setPhase('preparing');
    setRequestDetails({
      method: 'GET',
      url: '/api/users/1',
      status: 'Preparing request...'
    });
    setLogLines((prev) => [...prev, 'Building HTTP request...']);
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Sending request
    setPhase('sending');
    setRequestDetails((prev) => prev ? { ...prev, status: 'Sending...' } : null);
    setLogLines((prev) => [...prev, '→ Sending GET request', 'XHR opened and sent']);
    
    // Simulate progress
    for (let i = 0; i <= 30; i += 10) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Receiving response
    setPhase('receiving');
    setRequestDetails((prev) => prev ? { ...prev, status: '200 OK' } : null);
    setLogLines((prev) => [...prev, '← Response received: 200 OK', 'Parsing response body...']);
    
    // Continue progress
    for (let i = 40; i <= 80; i += 10) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    // Parse and emit response
    const mockData = { id: 1, name: 'Alice', email: 'alice@example.com' };
    setResponseData(mockData);
    setProgress(100);
    setLogLines((prev) => [...prev, 'next({ id: 1, name: "Alice", ... })', '  ✓ Observer received response']);
    
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Complete
    setPhase('completed');
    setLogLines((prev) => [...prev, 'complete()', '  ✓ Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setRequestDetails(null);
    setResponseData(null);
    setProgress(0);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated ajax() - HTTP Request Lifecycle
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>ajax.getJSON()</code> handles the complete HTTP request lifecycle from preparation through sending, receiving, parsing, and completion. The animation shows auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>ajax()</code> wraps HTTP requests as observables with cancellation support, progress tracking, and error handling!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Request Phase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Request Phase
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'preparing' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30' :
                phase === 'sending' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                phase === 'receiving' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' :
                 phase === 'preparing' ? 'Preparing' :
                 phase === 'sending' ? 'Sending' :
                 phase === 'receiving' ? 'Receiving' :
                 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[240px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">HTTP Request</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'preparing'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                      : phase === 'sending'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                      : phase === 'receiving'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'completed'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'preparing' ? (
                      <Loader2 className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-spin" />
                    ) : phase === 'sending' ? (
                      <Send className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
                    ) : phase === 'receiving' ? (
                      <Download className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-bounce" />
                    ) : phase === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Globe className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to send' :
                     phase === 'preparing' ? 'Preparing...' :
                     phase === 'sending' ? 'Sending request' :
                     phase === 'receiving' ? 'Receiving data' :
                     'Request complete'}
                  </span>
                </div>

                {/* Progress Bar */}
                {(phase === 'sending' || phase === 'receiving') && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-muted-foreground">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          phase === 'sending' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                            : 'bg-gradient-to-r from-indigo-500 to-cyan-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Request Details */}
                {requestDetails && (
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                      <span className="text-muted-foreground">Method:</span>
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{requestDetails.method}</span>
                    </div>
                    <div className="p-2 bg-white dark:bg-slate-900 rounded border">
                      <span className="text-muted-foreground text-[10px]">URL:</span>
                      <div className="font-mono text-[10px] break-all">{requestDetails.url}</div>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`font-mono font-bold ${
                        requestDetails.status.includes('200') 
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}>{requestDetails.status}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Response Data */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-600" />
                Response Data
              </h4>
            </div>
            <div className="min-h-[240px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Parsed JSON</p>
              
              <div className="space-y-2">
                {!responseData && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Response body appears here</span>
                )}
                {phase === 'preparing' || phase === 'sending' ? (
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Waiting for response...</span>
                  </div>
                ) : phase === 'receiving' && !responseData ? (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 animate-pulse">
                    <Download className="w-4 h-4 animate-bounce" />
                    <span>Parsing response...</span>
                  </div>
                ) : responseData ? (
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800 p-3 animate-in slide-in-from-top duration-300">
                    <pre className="text-[10px] font-mono text-slate-900 dark:text-slate-100">
{JSON.stringify(responseData, null, 2)}
                    </pre>
                  </div>
                ) : null}

                {responseData && (
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Response parsed successfully</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Data emitted to observer</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Execution Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Execution Log
              </h4>
            </div>
            <div className="min-h-[240px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[240px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// HTTP request logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('ajax.getJSON') ? 'text-purple-400' :
                      line.includes('Observable created') ? 'text-blue-400' :
                      line.includes('Building HTTP') ? 'text-purple-400' :
                      line.includes('→ Sending') ? 'text-blue-400' :
                      line.includes('XHR opened') ? 'text-cyan-400' :
                      line.includes('← Response') ? 'text-indigo-400' :
                      line.includes('200 OK') ? 'text-green-400' :
                      line.includes('Parsing') ? 'text-amber-400' :
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('✓ Observer') ? 'text-emerald-400' :
                      line.includes('complete()') ? 'text-orange-400' :
                      line.includes('✓ Stream') ? 'text-emerald-400' :
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
{`const user$ = ajax.getJSON<User>('/api/users/1');

const subscription = user$.subscribe({
  next: (user) => console.log('User:', user),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Request complete!')
});

// Cancel request: subscription.unsubscribe();`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsAjaxOperator({}: RxjsAjaxOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Globe}
        category="RxJS · Creation Operators"
        title="ajax() – HTTP Requests as Streams"
        description="Use ajax() and ajax.getJSON() to turn HTTP requests into observables with cancellation, error handling, and composition."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why ajax() instead of fetch()
          </CardTitle>
          <CardDescription className="text-base">
            <code>ajax()</code> gives you an observable around HTTP: you get cancellation on unsubscribe, retry & timeout operators, and
            fully typed responses with <code>ajax.getJSON&lt;T&gt;()</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'First-class cancellation',
              text: 'Unsubscribing cancels the underlying XHR, which is hard to do well with plain fetch().',
            },
            {
              title: 'Response metadata',
              text: 'Use ajax() for status, headers, and response body; ajax.getJSON() for shape-safe JSON.',
            },
            {
              title: 'Operator ecosystem',
              text: 'Combine with retry, timeout, catchError, and switchMap to build robust HTTP flows.',
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

      {/* Basic ajax() and ajax.getJSON() */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-indigo-600" />
            Basic ajax() usage
          </CardTitle>
          <CardDescription className="text-base">
            Use <code>ajax()</code> when you need full response metadata; use <code>ajax.getJSON()</code> when you care about the JSON body.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Full response with ajax()</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';

const user$ = ajax<{ id: number; name: string }>({
  url: '/api/user/1',
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
});

user$.subscribe({
  next: (response) => {
    console.log('status', response.status);
    console.log('user', response.response);
  },
  error: (err) => console.error('error', err),
  complete: () => console.log('complete'),
});`}
            </pre>
            <SnippetOutput
              lines={[
                'status 200',
                'user { id: 1, name: "Ada" }',
                'complete',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              The generic parameter on <code>ajax&lt;T&gt;</code> describes the shape of <code>response.response</code>.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">JSON body with ajax.getJSON()</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';

const todos$ = ajax.getJSON<Array<{ id: number; title: string }>>('/api/todos');

todos$.subscribe({
  next: (todos) => console.log('todos', todos.length),
  error: (err) => console.error('error', err),
});`}
            </pre>
            <SnippetOutput lines={['todos 42']} />
            <p className="text-xs text-muted-foreground">
              <code>ajax.getJSON()</code> skips metadata and gives you strongly typed JSON—perfect for most API calls.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated lifecycle */}
      <AnimatedAjaxRequest />

      {/* Real-world patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world ajax() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Retrying, timeouts, parallel requests, and error handling built on top of ajax().
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Retry with exponential backoff</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';
import { retry } from 'rxjs/operators';

const MAX_RETRIES = 3;

const data$ = ajax.getJSON('/api/data').pipe(
  retry({
    count: MAX_RETRIES,
    delay: (error, retryCount) => {
      const backoff = 500 * Math.pow(2, retryCount);
      console.log('retry in', backoff, 'ms');
      return new Promise((resolve) => setTimeout(resolve, backoff));
    },
  })
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Modern RxJS retry options let you express backoff strategies cleanly around ajax() requests.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Timeouts and fallback values</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';
import { timeout, catchError, of } from 'rxjs';

const user$ = ajax.getJSON('/api/user').pipe(
  timeout(3000),
  catchError(() => of({ id: 0, name: 'Guest' }))
);`}
            </pre>
            <SnippetOutput
              lines={[
                'user { id: 0, name: "Guest" }',
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Combine <code>timeout()</code> with <code>catchError()</code> to handle slow APIs gracefully by falling back to safe defaults.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Parallel & sequential requests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Parallel vs sequential ajax() calls
          </CardTitle>
          <CardDescription className="text-base">
            Use combination operators to orchestrate multiple HTTP requests with explicit semantics.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Parallel: forkJoin()</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const combined$ = forkJoin({
  user: ajax.getJSON('/api/user'),
  todos: ajax.getJSON('/api/todos'),
});`}
            </pre>
            <p>
              <code>forkJoin()</code> waits for all requests to complete, then emits a single combined object—ideal for “load page” scenarios.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Sequential: switchMap()</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';
import { switchMap } from 'rxjs/operators';

const userAndPosts$ = ajax.getJSON<{ id: number }>('/api/user').pipe(
  switchMap((user) => ajax.getJSON(\`/api/posts?userId=\${user.id}\`))
);`}
            </pre>
            <p>
              <code>switchMap()</code> chains dependent requests and cancels in-flight calls if new source values arrive—useful in search and
              typeahead flows.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Modern features & interop */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/10 dark:to-violet-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            ajax() and modern RxJS features
          </CardTitle>
          <CardDescription className="text-base">
            How ajax() fits into newer RxJS patterns: cancellation, typing, and interop.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Cancellation on unsubscribe</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`const sub = ajax.getJSON('/api/slow').subscribe(console.log);

// Later, cancel the request:
sub.unsubscribe();`}
            </pre>
            <p>
              Unsubscribing tears down the underlying XHR; this is a core advantage of ajax() over vanilla fetch() in long-lived apps.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">Combine with firstValueFrom()</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-[11px] font-mono whitespace-pre-wrap border">
{`import { firstValueFrom } from 'rxjs';
import { ajax } from 'rxjs/ajax';

async function loadUserOnce() {
  const user$ = ajax.getJSON('/api/user');
  const user = await firstValueFrom(user$);
  return user;
}`}
            </pre>
            <p>
              <code>firstValueFrom()</code> subscribes to ajax(), resolves a Promise when the first value arrives, and then auto-unsubscribes—handy
              when bridging into async/await code.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for ajax()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Prefer <code>ajax.getJSON&lt;T&gt;()</code> for JSON endpoints and type your responses.</li>
              <li>✅ Combine ajax() with <code>retry</code>, <code>timeout</code>, and <code>catchError</code> for resilient flows.</li>
              <li>✅ Use <code>forkJoin</code>, <code>switchMap</code>, and other combination operators to orchestrate multiple calls.</li>
              <li>✅ Unsubscribe when views unmount to cancel unnecessary network work.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Swallowing errors silently; always log or surface them to the UI.</li>
              <li>❌ Triggering many ajax() calls in parallel without rate limiting or cancellation in interactive UIs.</li>
              <li>❌ Mixing imperative fetch() and ajax() for the same endpoint without a clear strategy.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


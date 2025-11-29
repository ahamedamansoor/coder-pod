'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Zap, Timer, AlertTriangle, ShieldCheck, GitBranch, Activity } from 'lucide-react';

interface RxjsLazyVsEagerProps {}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function RxjsLazyVsEager({}: RxjsLazyVsEagerProps) {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Timer}
        category="RxJS Fundamentals"
        title="Lazy vs Eager Evaluation"
        description="Understand when work runs immediately vs when it is deferred until subscription, and how RxJS keeps most streams lazy by default."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Zap className="w-7 h-7 text-indigo-600" />
            What does lazy mean in RxJS?
          </CardTitle>
          <CardDescription className="text-base">
            In eager APIs, work starts as soon as you create the value (e.g., <code>new Promise(...)</code>). In lazy APIs, work starts when you <strong>subscribe</strong> (observables), <strong>iterate</strong> (generators), or <strong>await</strong> (async generators).
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Eager', text: 'Immediately executes side effects or HTTP requests when constructed (e.g., Promise constructor).' },
            { title: 'Lazy', text: 'Defers side effects until someone subscribes/iterates.' },
            { title: 'RxJS principle', text: 'Observables are lazy by default; subscribe is the trigger.' },
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
            <GitBranch className="w-6 h-6 text-indigo-600" />
            Eager Promise vs lazy Observable
          </CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Eager Promise</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`// Eager: executor runs immediately
const promise = new Promise((resolve) => {
  console.log('🚀 Promise executor runs');
  resolve(42);
});

// Even without then(), executor already ran
console.log('Created promise');`}
            </pre>
            <SnippetOutput lines={['🚀 Promise executor runs', 'Created promise']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge>Lazy Observable</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const obs$ = new Observable((subscriber) => {
  console.log('✨ Observable started');
  subscriber.next(42);
  subscriber.complete();
});

console.log('Created observable');

obs$.subscribe((value) => console.log('next', value));`}
            </pre>
            <SnippetOutput lines={['Created observable', '✨ Observable started', 'next 42']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world lazy patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2 text-sm">
            <h4 className="font-semibold">Lazy HTTP with defer</h4>
            <p className="text-muted-foreground">Use <code>defer</code> so HTTP calls happen per subscription instead of once at definition time.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const user$ = defer(() =>
  from(fetch('/api/user').then((r) => r.json()))
);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2 text-sm">
            <h4 className="font-semibold">Lazy event streams</h4>
            <p className="text-muted-foreground">Converting DOM events to observables is lazy—listeners attach on subscribe and detach on unsubscribe.</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const clicks$ = fromEvent(button, 'click');
const sub = clicks$.subscribe(console.log);
// Later: sub.unsubscribe() removes listener.`}
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
              <li>✅ Prefer lazy observables for expensive work; use <code>defer</code> for factories.</li>
              <li>✅ Document whether helpers create streams immediately or on subscribe.</li>
              <li>✅ Combine lazy streams with <code>share</code>/<code>shareReplay</code> when you need caching.</li>
              <li>✅ Use lazy evaluation to keep tests deterministic—control when work starts.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Launching network requests in module scope (eager) when you meant to defer.</li>
              <li>❌ Assuming observables behave like Promises (they do nothing until subscribed).</li>
              <li>❌ Creating eager Subjects that leak if you never subscribe/unsubscribe correctly.</li>
              <li>❌ Mixing eager global state writes into lazy pipelines.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .lazy-eager-diagram {
          display: grid;
          gap: 12px;
        }
        .lane {
          position: relative;
          border-radius: 999px;
          height: 14px;
          overflow: hidden;
          background: rgba(99, 102, 241, 0.25);
        }
        .lane-lazy {
          background: rgba(129, 140, 248, 0.4);
        }
        .label {
          position: absolute;
          top: -22px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
          color: rgba(15, 23, 42, 0.65);
        }
        .marker {
          position: absolute;
          top: 18px;
          left: 35%;
          transform: translateX(-50%);
          padding: 2px 6px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.5);
          font-size: 10px;
        }
        .pulse {
          position: absolute;
          top: -2px;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          box-shadow: 0 0 8px currentColor;
        }
        .eager-one { left: 0%; background: #2563eb; animation: eagerFlow 2.2s linear 0.1s forwards; }
        .eager-two { left: 0%; background: #60a5fa; animation: eagerFlow 2.2s linear 0.5s forwards; }
        .lazy-one { left: 0%; background: #7c3aed; animation: lazyFlow 2.4s linear 1s forwards; }
        .lazy-two { left: 0%; background: #a855f7; animation: lazyFlow 2.4s linear 1.4s forwards; }

        @keyframes eagerFlow {
          0% { transform: translateX(0%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes lazyFlow {
          0% { transform: translateX(0%); opacity: 0; }
          25% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

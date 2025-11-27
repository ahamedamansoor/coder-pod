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
  GitBranch,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  ChevronRight,
  Split,
} from 'lucide-react';

interface RxjsIifOperatorProps {}

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

const AnimatedIifCondition = () => {
  const [phase, setPhase] = useState<'idle' | 'evaluating' | 'selecting' | 'emitting'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [condition, setCondition] = useState<boolean | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<'true' | 'false' | null>(null);
  const [emissions, setEmissions] = useState<Array<{ id: number; value: string; branch: 'true' | 'false' }>>([]);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('evaluating');
    setLogLines(['const isLoggedIn = Math.random() > 0.5;', '', 'iif(', '  () => isLoggedIn,', '  of("Welcome back!"),', '  of("Please login")', ')']);
    setCondition(null);
    setSelectedBranch(null);
    setEmissions([]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Evaluate condition
    setLogLines((prev) => [...prev, '', '// Evaluating condition...']);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const conditionResult = Math.random() > 0.5;
    setCondition(conditionResult);
    setLogLines((prev) => [...prev, `isLoggedIn = ${conditionResult}`]);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Select branch
    setPhase('selecting');
    const branch = conditionResult ? 'true' : 'false';
    setSelectedBranch(branch);
    setLogLines((prev) => [
      ...prev,
      '',
      `// Condition is ${conditionResult}`,
      `→ Selecting ${conditionResult ? 'trueResult$' : 'falseResult$'}`,
    ]);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Emit from selected branch
    setPhase('emitting');
    const emittedValue = conditionResult ? 'Welcome back!' : 'Please login';
    setEmissions([{ id: 1, value: emittedValue, branch }]);
    setLogLines((prev) => [
      ...prev,
      `next("${emittedValue}")`,
      '  ✓ Value emitted from selected branch',
    ]);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setLogLines((prev) => [...prev, 'complete()', '  ✓ Stream completed']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setCondition(null);
    setSelectedBranch(null);
    setEmissions([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated iif() - Conditional Stream Selection
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>iif(condition, trueResult$, falseResult$)</code> evaluates the condition at subscription time and selects one of two observables. The animation shows random condition results with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>iif()</code> makes runtime decisions—pick the right observable based on conditions evaluated when subscribing!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Condition Check */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Condition Check
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'evaluating' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30' :
                phase === 'selecting' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' :
                 phase === 'evaluating' ? 'Evaluating' :
                 phase === 'selecting' ? 'Selecting' :
                 'Emitting'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border border-amber-200/60 dark:border-amber-700 min-h-[260px]">
              <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 mb-3">Runtime Decision</p>
              
              <div className="space-y-4">
                {/* Condition Icon */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'evaluating'
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                      : phase === 'selecting'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'emitting'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'evaluating' ? (
                      <Activity className="w-8 h-8 text-amber-600 dark:text-amber-400 animate-pulse" />
                    ) : phase === 'selecting' || phase === 'emitting' ? (
                      <Split className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <GitBranch className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to branch' :
                     phase === 'evaluating' ? 'Checking condition' :
                     phase === 'selecting' ? 'Branch selected' :
                     'Value emitted'}
                  </span>
                </div>

                {/* Condition Result */}
                {condition !== null && (
                  <div className={`p-3 rounded-lg border-2 ${
                    condition
                      ? 'bg-green-100 dark:bg-green-900/20 border-green-500 dark:border-green-600'
                      : 'bg-blue-100 dark:bg-blue-900/20 border-blue-500 dark:border-blue-600'
                  }`}>
                    <div className="text-center space-y-2">
                      <div className="text-lg font-bold font-mono">
                        {condition ? 'true' : 'false'}
                      </div>
                      <div className="text-[10px] font-semibold">
                        {condition ? '✓ Condition met' : '✗ Condition not met'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Branch Info */}
                <div className="space-y-1 text-[9px]">
                  <div className={`p-2 rounded border ${
                    selectedBranch === 'true'
                      ? 'bg-green-100 dark:bg-green-900/20 border-green-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}>
                    <span className="text-muted-foreground">True Branch:</span>
                    <span className="ml-1 font-mono">of("Welcome back!")</span>
                  </div>
                  <div className={`p-2 rounded border ${
                    selectedBranch === 'false'
                      ? 'bg-blue-100 dark:bg-blue-900/20 border-blue-500'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}>
                    <span className="text-muted-foreground">False Branch:</span>
                    <span className="ml-1 font-mono">of("Please login")</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-indigo-600" />
                Stream Branches
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Observable Selection</p>
              
              <div className="space-y-6">
                {/* Decision Point */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    iif()
                  </div>
                  <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 rotate-90 my-1" />
                </div>

                {/* Branches */}
                <div className="space-y-3">
                  {/* True Branch */}
                  <div className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedBranch === 'true'
                      ? 'bg-green-100 dark:bg-green-900/20 border-green-500 scale-105 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedBranch === 'true'
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        T
                      </div>
                      <span className="text-xs font-semibold">True Observable</span>
                      {selectedBranch === 'true' && (
                        <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 ml-auto" />
                      )}
                    </div>
                    <div className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 p-2 rounded">
                      of("Welcome back!")
                    </div>
                  </div>

                  {/* False Branch */}
                  <div className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedBranch === 'false'
                      ? 'bg-blue-100 dark:bg-blue-900/20 border-blue-500 scale-105 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedBranch === 'false'
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        F
                      </div>
                      <span className="text-xs font-semibold">False Observable</span>
                      {selectedBranch === 'false' && (
                        <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 ml-auto" />
                      )}
                    </div>
                    <div className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 p-2 rounded">
                      of("Please login")
                    </div>
                  </div>
                </div>

                {emissions.length > 0 && (
                  <div className="flex items-center justify-center pt-2">
                    <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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
            <div className="min-h-[260px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[260px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// iif() execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('const isLoggedIn') ? 'text-purple-400' :
                      line.includes('iif(') ? 'text-indigo-400' :
                      line.includes('() =>') || line.includes('of(') ? 'text-cyan-400' :
                      line.includes('// Evaluating') ? 'text-gray-500 mt-1' :
                      line.includes('= true') || line.includes('= false') ? 'text-amber-400' :
                      line.includes('// Condition is') ? 'text-gray-500 mt-1' :
                      line.includes('→ Selecting') ? 'text-indigo-400' :
                      line.includes('next(') ? 'text-cyan-400' :
                      line.includes('✓ Value emitted') ? 'text-emerald-400' :
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
{`const isLoggedIn = Math.random() > 0.5;

const message$ = iif(
  () => isLoggedIn,                    // Condition function
  of('Welcome back!'),                 // True observable
  of('Please login')                   // False observable
);

message$.subscribe({
  next: (msg) => console.log('Message:', msg),
  complete: () => console.log('Done!')
});

// Output: Either "Welcome back!" or "Please login" based on condition`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsIifOperator({}: RxjsIifOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={GitBranch}
        category="RxJS · Creation Operators"
        title="iif() – Conditional Observable Selection"
        description="Use iif() to choose between two observables based on a condition evaluated at subscription time—perfect for dynamic stream routing and runtime decisions."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why iif() matters
          </CardTitle>
          <CardDescription className="text-base">
            <code>iif()</code> evaluates a condition when someone subscribes and picks one of two observables—like a ternary operator for streams.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Runtime decisions',
              text: 'Condition is checked at subscription time, not definition time—capture the latest state.',
            },
            {
              title: 'Clean branching',
              text: 'Replace complex switchMap logic with a simple true/false stream selector.',
            },
            {
              title: 'Lazy evaluation',
              text: 'Only the selected observable is subscribed to—the other never executes.',
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

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Basic iif() usage
          </CardTitle>
          <CardDescription className="text-base">
            Signature: <code>iif(condition, trueObservable, falseObservable?)</code>. The condition is a function returning a boolean.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Simple condition</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of } from 'rxjs';

const showDetails = true;

const data$ = iif(
  () => showDetails,
  of({ id: 1, name: 'Alice', email: 'alice@example.com' }),
  of({ id: 1, name: 'Alice' })
);

data$.subscribe(console.log);`}
            </pre>
            <SnippetOutput
              lines={[
                '{ id: 1, name: "Alice", email: "alice@example.com" }',
              ]}
            />
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Optional false branch</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of, EMPTY } from 'rxjs';

const hasPermission = false;

const action$ = iif(
  () => hasPermission,
  of('Action executed'),
  EMPTY  // Or omit for default EMPTY
);

action$.subscribe({
  next: console.log,
  complete: () => console.log('Done')
});`}
            </pre>
            <SnippetOutput lines={['Done']} />
            <p className="text-xs text-muted-foreground">
              If false branch is omitted, <code>EMPTY</code> is used (completes immediately without emitting).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <AnimatedIifCondition />

      {/* Real-World Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world iif() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Practical examples showing how iif() solves common conditional streaming scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Auth-based routing</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

function loadUserData() {
  return iif(
    () => authService.isLoggedIn(),
    ajax.getJSON('/api/user/profile'),
    of(null)
  );
}

// Use in your stream
source$.pipe(
  mergeMap(() => loadUserData())
).subscribe(user => {
  if (user) {
    console.log('User:', user.name);
  } else {
    console.log('Guest mode');
  }
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Check authentication state and load profile only when logged in.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Feature flags</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of, defer } from 'rxjs';

const enableNewFeature = () => 
  featureFlags.get('new-dashboard');

const dashboard$ = iif(
  enableNewFeature,
  defer(() => import('./new-dashboard').then(m => of(m.NewDashboard))),
  of(LegacyDashboard)
);

dashboard$.subscribe(Component => {
  render(<Component />);
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Lazy-load components based on feature flags checked at runtime.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Environment-based config</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of } from 'rxjs';

const isDevelopment = () => 
  process.env.NODE_ENV === 'development';

const apiUrl$ = iif(
  isDevelopment,
  of('http://localhost:3000/api'),
  of('https://api.production.com')
);

apiUrl$.subscribe(url => {
  console.log('API URL:', url);
});`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Select configuration values based on environment at subscription time.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Cache check</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of } from 'rxjs';

function getData(id: string) {
  return iif(
    () => cache.has(id),
    of(cache.get(id)),
    ajax.getJSON(\`/api/data/\${id}\`).pipe(
      tap(data => cache.set(id, data))
    )
  );
}

getData('user-123').subscribe(console.log);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Return cached data if available, otherwise fetch from API and cache result.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison with other approaches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-indigo-600" />
            iif() vs other conditional patterns
          </CardTitle>
          <CardDescription className="text-base">
            When to use iif() versus switchMap or defer with conditions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">
                    iif()
                  </th>
                  <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">
                    switchMap
                  </th>
                  <th className="text-left p-3 font-semibold text-sky-600 dark:text-sky-400">
                    defer()
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium">When condition is checked</td>
                  <td className="p-3">At subscription time</td>
                  <td className="p-3">When source emits</td>
                  <td className="p-3">At subscription time</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Number of observables</td>
                  <td className="p-3">Returns one of two</td>
                  <td className="p-3">Can return any based on emitted value</td>
                  <td className="p-3">Returns one based on logic</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Best for</td>
                  <td className="p-3">Static binary choice</td>
                  <td className="p-3">Dynamic per-value routing</td>
                  <td className="p-3">Complex lazy initialization</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Clarity</td>
                  <td className="p-3">Very clear intent</td>
                  <td className="p-3">More flexible but verbose</td>
                  <td className="p-3">Requires more setup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Code comparison */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
            iif() vs manual conditional
          </CardTitle>
          <CardDescription className="text-base">
            Compare iif() with manual condition checking—see how it simplifies conditional stream selection.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              ✅ With iif()
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { iif, of } from 'rxjs';

const stream$ = iif(
  () => userPreference === 'dark',
  of(darkThemeConfig),
  of(lightThemeConfig)
);

stream$.subscribe(applyTheme);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Clean, declarative, and evaluates condition at subscription time.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge variant="outline" className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
              ❌ Manual approach
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of } from 'rxjs';

let stream$;
if (userPreference === 'dark') {
  stream$ = of(darkThemeConfig);
} else {
  stream$ = of(lightThemeConfig);
}

stream$.subscribe(applyTheme);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              More verbose and checks condition at definition time, not subscription time.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices for iif()
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use iif() for binary choices at subscription time.</li>
              <li>✅ Keep condition functions pure and side-effect-free.</li>
              <li>✅ Omit false branch if EMPTY is desired default.</li>
              <li>✅ Combine with defer() when both branches need lazy initialization.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using iif() when switchMap is more appropriate (per-value decisions).</li>
              <li>❌ Side effects in the condition function—keep it deterministic.</li>
              <li>❌ Complex nested iif() calls—use switchMap or custom logic instead.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

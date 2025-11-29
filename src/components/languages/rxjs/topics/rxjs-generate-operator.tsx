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
  Layers,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  Cog,
  ArrowRight,
  RotateCw,
  Repeat,
} from 'lucide-react';

interface RxjsGenerateOperatorProps {}

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

const AnimatedGenerateSequence = () => {
  const [phase, setPhase] = useState<'idle' | 'initializing' | 'iterating' | 'completed'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentState, setCurrentState] = useState<number | null>(null);
  const [conditionResult, setConditionResult] = useState<boolean | null>(null);
  const [emittedValues, setEmittedValues] = useState<Array<{ id: number; state: number; value: number }>>([]);
  const [iteration, setIteration] = useState(0);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('initializing');
    setLogLines(['generate(0, x => x < 3, x => x + 1, x => x * 10)', 'Observable created...', 'Subscription started...']);
    setEmittedValues([]);
    setCurrentState(null);
    setConditionResult(null);
    setIteration(0);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Initialize state
    setPhase('initializing');
    setCurrentState(0);
    setLogLines((prev) => [...prev, '', '// Initialization', 'initialState = 0']);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Start iterations
    setPhase('iterating');
    
    for (let i = 0; i < 3; i++) {
      setIteration(i + 1);
      setCurrentState(i);
      
      // Check condition
      setLogLines((prev) => [...prev, '', `// Iteration ${i + 1}`, `condition(${i}) => ${i} < 3?`]);
      await new Promise((resolve) => setTimeout(resolve, 600));
      
      setConditionResult(true);
      setLogLines((prev) => [...prev, `  ✓ true - continue`]);
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Emit result
      const emittedValue = i * 10;
      setLogLines((prev) => [...prev, `result(${i}) => ${i} * 10 = ${emittedValue}`, `  → next(${emittedValue})`]);
      setEmittedValues((prev) => [...prev, { id: i, state: i, value: emittedValue }]);
      await new Promise((resolve) => setTimeout(resolve, 700));
      
      // Iterate to next state
      setLogLines((prev) => [...prev, `iterate(${i}) => ${i} + 1 = ${i + 1}`]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Final condition check that fails
    setIteration(4);
    setCurrentState(3);
    setLogLines((prev) => [...prev, '', '// Final check', `condition(3) => 3 < 3?`]);
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    setConditionResult(false);
    setLogLines((prev) => [...prev, `  ✗ false - stop`]);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Complete
    setPhase('completed');
    setLogLines((prev) => [...prev, 'complete()', '  ✓ Stream completed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setEmittedValues([]);
    setCurrentState(null);
    setConditionResult(null);
    setIteration(0);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated generate() - For-Loop Observable
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>generate(0, x =&gt; x &lt; 3, x =&gt; x + 1, x =&gt; x * 10)</code> behaves like a for-loop with explicit state, condition, iteration, and result transformation. The animation shows the complete state machine with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>generate()</code> is like a for-loop turned into an observable—complete control over state progression and emissions!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* State Machine */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                State Machine
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'initializing' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30' :
                phase === 'iterating' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' :
                 phase === 'initializing' ? 'Initializing' :
                 phase === 'iterating' ? 'Iterating' :
                 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[260px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Loop State</p>
              
              <div className="space-y-4">
                {/* Icon Visualization */}
                <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    phase === 'initializing'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                      : phase === 'iterating'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                      : phase === 'completed'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                  }`}>
                    {phase === 'initializing' ? (
                      <Cog className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-pulse" />
                    ) : phase === 'iterating' ? (
                      <RotateCw className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" style={{ animationDuration: '2s' }} />
                    ) : phase === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Repeat className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {phase === 'idle' ? 'Ready to start' :
                     phase === 'initializing' ? 'Setting up state' :
                     phase === 'iterating' ? `Iteration ${iteration}` :
                     'Loop finished'}
                  </span>
                </div>

                {/* Current State */}
                {currentState !== null && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-900 rounded border">
                      <span className="text-[10px] text-muted-foreground">Current State:</span>
                      <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">{currentState}</span>
                    </div>
                    
                    {conditionResult !== null && (
                      <div className={`flex items-center justify-between p-2 rounded border ${
                        conditionResult
                          ? 'bg-green-100 dark:bg-green-900/20 border-green-400 dark:border-green-600'
                          : 'bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-600'
                      }`}>
                        <span className="text-[10px] font-semibold">Condition:</span>
                        <span className={`text-xs font-bold ${
                          conditionResult ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {conditionResult ? '✓ Continue' : '✗ Stop'}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Loop Parameters */}
                <div className="space-y-1 text-[9px]">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Initial:</span>
                    <span className="ml-1 font-mono">0</span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Condition:</span>
                    <span className="ml-1 font-mono">x &lt; 3</span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Iterate:</span>
                    <span className="ml-1 font-mono">x + 1</span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border">
                    <span className="text-muted-foreground">Result:</span>
                    <span className="ml-1 font-mono">x * 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Generated Values */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Generated Values
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/60 dark:border-cyan-700">
              <p className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mb-3">Emitted Output</p>
              
              <div className="space-y-2">
                {emittedValues.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Values generated by loop</span>
                )}
                {emittedValues.map((emission) => (
                  <div
                    key={emission.id}
                    className="flex items-center gap-2 p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg border border-emerald-400 dark:border-emerald-600 animate-in slide-in-from-top duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                      {emission.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Value #{emission.id + 1}</div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        state={emission.state} → {emission.value}
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                ))}

                {phase === 'completed' && emittedValues.length > 0 && (
                  <div className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-400 dark:border-emerald-600">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Loop completed: {emittedValues.length} values emitted</span>
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
            <div className="min-h-[260px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[260px]">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// generate() execution logs appear here</span>
              ) : (
                logLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('generate(') ? 'text-purple-400' :
                      line.includes('Observable created') ? 'text-blue-400' :
                      line.includes('Subscription started') ? 'text-cyan-400' :
                      line.includes('// Initialization') || line.includes('// Iteration') || line.includes('// Final') ? 'text-gray-500 mt-1' :
                      line.includes('initialState') ? 'text-purple-400' :
                      line.includes('condition(') ? 'text-amber-400' :
                      line.includes('✓ true') ? 'text-green-400' :
                      line.includes('✗ false') ? 'text-red-400' :
                      line.includes('result(') ? 'text-cyan-400' :
                      line.includes('→ next(') ? 'text-cyan-400' :
                      line.includes('iterate(') ? 'text-indigo-400' :
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
{`const numbers$ = generate(
  0,                    // initialState
  (x) => x < 3,         // condition (continue while true)
  (x) => x + 1,         // iterate (advance state)
  (x) => x * 10         // result (transform output)
);

numbers$.subscribe({
  next: (value) => console.log('Value:', value),
  complete: () => console.log('Loop complete!')
});

// Output: 0, 10, 20, then complete`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsGenerateOperator({}: RxjsGenerateOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="RxJS · Creation Operators"
        title="generate() – Imperative sequences"
        description="generate() lets you write for-loop style observables with explicit state, condition, iteration, and result selectors."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why generate() is special
          </CardTitle>
          <CardDescription className="text-base">
            Unlike interval, range, or of, generate() gives you full control over state, condition, iteration, and emitted result.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: 'Manual state machine',
              text: 'Define state transformation logic explicitly inside the operator.',
            },
            {
              title: 'Custom iteration',
              text: 'Control how state advances and which values emit—even non-number sequences.',
            },
            {
              title: 'Condition-driven completion',
              text: 'Complete automatically when your condition returns false.',
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            Basic generate() usage
          </CardTitle>
          <CardDescription className="text-base">
            Signature: <code>generate(initialState, condition, iterate, result)</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Emit squares</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { generate } from 'rxjs';

const squares$ = generate(
  0,                    // initial state
  (x) => x < 4,         // condition
  (x) => x + 1,         // iterate
  (x) => x * x          // result selector
);

squares$.subscribe((value) => console.log(value));`}
            </pre>
            <SnippetOutput lines={['0', '1', '4', '9']} />
            <p className="text-xs text-muted-foreground">
              Result selector determines what the subscriber sees (here squared values).
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Custom iteration</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`generate(
  { page: 1 },
  (state) => state.page <= 3,
  (state) => ({ page: state.page + 1 }),
  (state) => fetchData(state.page)
).subscribe(console.log);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Each iteration advances state and emits the data for that page.
            </p>
          </div>
        </CardContent>
      </Card>

      <AnimatedGenerateSequence />

      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real-world generate() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Paging, retry windows, and complex sequences benefit from generate()'s explicit control.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Retry windows</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`generate(
  { attempts: 0 },
  (state) => state.attempts < 5,
  (state) => ({ attempts: state.attempts + 1 }),
  (state) => state.attempts
)
.pipe(delayWhen((attempt) => timer(attempt * 500)))`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Use generate() to drive retry counts and schedule delays between attempts.
            </p>
          </div>

          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <h4 className="font-semibold text-sm">Matrix traversal</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`generate(
  { row: 0, col: 0 },
  (state) => state.row < rows,
  (state) => {
    if (state.col + 1 === cols) {
      return { row: state.row + 1, col: 0 };
    }
    return { ...state, col: state.col + 1 };
  },
  (state) => matrix[state.row][state.col]
);`}
            </pre>
            <p className="text-xs text-muted-foreground">
              You can map multidimensional iteration to observables without nested loops.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            Best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use generate() for complex sequences requiring explicit state updates.</li>
              <li>✅ Keep iterate/result separated for clarity.</li>
              <li>✅ Ensure your condition eventually returns false or the stream never completes.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using generate() when a simple range() or interval() suffices.</li>
              <li>❌ Forgetting to guard the condition, leading to infinite loops.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  AlertTriangle,
  Layers,
  Map as MapIcon,
  ShieldCheck,
  Sparkles,
  Zap,
  Cpu,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  Code2,
} from 'lucide-react';

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

const AnimatedMapPipeline = () => {
  const [phase, setPhase] = useState<'idle' | 'transforming' | 'completed'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sourceValues, setSourceValues] = useState<Array<{ id: number; value: number; status: 'pending' | 'processing' | 'done' }>>([]);
  const [currentTransform, setCurrentTransform] = useState<{ input: number; output: number } | null>(null);
  const [mappedValues, setMappedValues] = useState<Array<{ id: number; input: number; output: number }>>([]);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('transforming');
    setLogLines(['of(1, 2, 3).pipe(', '  map(x => x * 10)', ')', 'Subscription started...']);
    setSourceValues([
      { id: 1, value: 1, status: 'pending' },
      { id: 2, value: 2, status: 'pending' },
      { id: 3, value: 3, status: 'pending' },
    ]);
    setCurrentTransform(null);
    setMappedValues([]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Transform each value
    const inputs = [1, 2, 3];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const output = input * 10;

      // Mark as processing
      setSourceValues((prev) =>
        prev.map((v) => (v.id === i + 1 ? { ...v, status: 'processing' } : v))
      );
      setLogLines((prev) => [...prev, '', `// Value ${i + 1}`, `Input: ${input}`]);
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Show transformation
      setCurrentTransform({ input, output });
      setLogLines((prev) => [...prev, `Projecting: ${input} * 10`]);
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Show result
      setLogLines((prev) => [...prev, `Result: ${output}`, `→ next(${output})`]);
      setMappedValues((prev) => [...prev, { id: i + 1, input, output }]);
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Mark as done
      setSourceValues((prev) =>
        prev.map((v) => (v.id === i + 1 ? { ...v, status: 'done' } : v))
      );
      setCurrentTransform(null);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    // Complete
    setPhase('completed');
    setLogLines((prev) => [...prev, '', 'complete()', '  ✓ All values transformed!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setSourceValues([]);
    setCurrentTransform(null);
    setMappedValues([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated map() - Value Transformation
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>map(x =&gt; x * 10)</code> synchronously transforms each source value through the projection function. The animation shows one-to-one mapping with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>map()</code> transforms every emission—perfect for reshaping data, calculations, and type conversions!
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Source Values */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-indigo-600" />
                Source Values
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'transforming' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'transforming' ? 'Transforming' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200/60 dark:border-blue-700 min-h-[260px]">
              <p className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 mb-3">Observable Emissions</p>
              
              <div className="space-y-2">
                {sourceValues.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Source values appear here</span>
                )}
                {sourceValues.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-300 ${
                      item.status === 'processing'
                        ? 'bg-indigo-100 dark:bg-indigo-900/20 border-indigo-500 scale-105'
                        : item.status === 'done'
                        ? 'bg-emerald-100 dark:bg-emerald-900/20 border-emerald-500'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${
                      item.status === 'processing'
                        ? 'bg-gradient-to-br from-indigo-500 to-blue-500 text-white animate-pulse'
                        : item.status === 'done'
                        ? 'bg-gradient-to-br from-emerald-500 to-green-500 text-white'
                        : 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-700 dark:from-slate-700 dark:to-slate-800 dark:text-slate-300'
                    }`}>
                      {item.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Value #{item.id}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {item.status === 'pending' ? 'Waiting' :
                         item.status === 'processing' ? 'Processing...' :
                         'Transformed'}
                      </div>
                    </div>
                    {item.status === 'done' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation Function */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-600" />
                Projection Function
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200/60 dark:border-purple-700">
              <p className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 mb-3">Transform Logic</p>
              
              <div className="space-y-4">
                {/* Function Display */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-[10px] font-mono space-y-1">
                    <div className="text-purple-600 dark:text-purple-400">map(</div>
                    <div className="pl-4 text-indigo-600 dark:text-indigo-400">(x) =&gt; x * 10</div>
                    <div className="text-purple-600 dark:text-purple-400">)</div>
                  </div>
                </div>

                {/* Current Transformation */}
                {currentTransform ? (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg border-2 border-indigo-400 dark:border-indigo-600">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="text-lg font-bold">{currentTransform.input}</div>
                        <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {currentTransform.output}
                        </div>
                      </div>
                      <div className="text-center text-[10px] text-muted-foreground font-mono">
                        {currentTransform.input} * 10 = {currentTransform.output}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-center">
                    <div className="text-[10px] text-muted-foreground">
                      {phase === 'idle' ? 'Ready to transform' :
                       phase === 'completed' ? 'All done!' :
                       'Waiting for next value...'}
                    </div>
                  </div>
                )}

                {/* Function explanation */}
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg border border-purple-300 dark:border-purple-700">
                  <div className="text-[9px] space-y-1">
                    <div className="font-semibold text-purple-700 dark:text-purple-300">Projection:</div>
                    <div className="text-muted-foreground">• Takes input value</div>
                    <div className="text-muted-foreground">• Multiplies by 10</div>
                    <div className="text-muted-foreground">• Returns result</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapped Output */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Mapped Output
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700">
              <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Transformed Values</p>
              
              <div className="space-y-2">
                {mappedValues.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Transformed values appear here</span>
                )}
                {mappedValues.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-700 animate-in slide-in-from-left duration-300"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold">
                        {item.input}
                      </div>
                      <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 text-white flex items-center justify-center text-sm font-bold">
                        {item.output}
                      </div>
                    </div>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                ))}

                {phase === 'completed' && mappedValues.length > 0 && (
                  <div className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-400 dark:border-emerald-600">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{mappedValues.length} values transformed</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Execution Log */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            Execution Log
          </h4>
          <div className="min-h-[100px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[150px]">
            {logLines.length === 0 ? (
              <span className="text-slate-500">// map() execution logs appear here</span>
            ) : (
              logLines.map((line, index) => (
                <div 
                  key={index}
                  className={`${
                    line.includes('of(') || line.includes('pipe(') ? 'text-purple-400' :
                    line.includes('map(') ? 'text-indigo-400' :
                    line.includes('Subscription started') ? 'text-cyan-400' :
                    line.includes('// Value') ? 'text-gray-500 mt-1' :
                    line.includes('Input:') ? 'text-blue-400' :
                    line.includes('Projecting:') ? 'text-amber-400' :
                    line.includes('Result:') ? 'text-cyan-400' :
                    line.includes('→ next(') ? 'text-emerald-400' :
                    line.includes('complete()') ? 'text-orange-400' :
                    line.includes('✓ All') ? 'text-emerald-400' :
                    'text-slate-300'
                  }`}
                >
                  {line}
                </div>
              ))
            )}
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`const numbers$ = of(1, 2, 3);

numbers$.pipe(
  map(x => x * 10)
).subscribe({
  next: (value) => console.log('Mapped:', value),
  complete: () => console.log('Done!')
});

// Output: Mapped: 10, Mapped: 20, Mapped: 30, Done!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsMapOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={MapIcon}
        category="RxJS · Transformation Operators"
        title="map() – Transform every emission"
        description="map() lets you reshape data from the source before it arrives at the subscriber, keeping order and cardinality intact."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why map() is the transformation workhorse
          </CardTitle>
          <CardDescription className="text-base">
            Every emission goes through map(), so you can attach metadata, copy shape, or enrich payloads without mutating the source.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Preserves timeline',
              text: 'For each input you get exactly one mapped value. Order and completion stay in sync with the source.',
            },
            {
              title: 'Type-safe reshaping',
              text: 'The new RxJS typings infer the shape of the output based on your projector and optional result selector.',
            },
            {
              title: 'Side-effect free',
              text: 'Keep mutations outside map()—use it for pure calculations and pass side effects to tap().',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What is map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <MapIcon className="w-6 h-6 text-indigo-600" />
            map() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            map(project, resultSelector?, thisArg?) – project executes for every emission; resultSelector lets you combine the mapped value with metadata.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, map } from 'rxjs';

const orderValues$ = from([1, 3, 9]);

orderValues$
  .pipe(
    map((order) => ({
      id: order,
      etaMinutes: order * 5,
    })),
  )
  .subscribe((shipment) => console.log('shipment', shipment));

// Output:
// shipment { id: 1, etaMinutes: 5 }
// shipment { id: 3, etaMinutes: 15 }
// shipment { id: 9, etaMinutes: 45 }`}
          </pre>
          <SnippetOutput
            lines={[
              'shipment { id: 1, etaMinutes: 5 }',
              'shipment { id: 3, etaMinutes: 15 }',
              'shipment { id: 9, etaMinutes: 45 }',
            ]}
          />
          <Alert>
            <AlertTitle>RxJS 8 updates</AlertTitle>
            <AlertDescription>
              <code>map()</code> now ships directly from <code>rxjs</code> with stricter generics. The operator understands your projector
              return type plus an optional <code>resultSelector</code> so you can build metadata-rich payloads without casting.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Projectors & result selectors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Building projectors & result selectors
          </CardTitle>
          <CardDescription className="text-base">
            The projector returns the base transformation; the optional result selector receives the mapped value and its index for cross-values.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Project & enrich</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`map((total) => ({
  total,
  label: \`Subtotal: $\${total.toFixed(2)}\`,
}))`}
            </pre>
            <p className="text-xs text-muted-foreground">
              Keep projector logic pure: compute derived values, format strings, and emit new objects instead of mutating the original payload.
            </p>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <Badge className="w-fit">Optional resultSelector</Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`map(
  (value) => value * 2,
  (projected, index) => ({
    projected,
    index,
  }),
)`}
            </pre>
            <p className="text-xs text-muted-foreground">
              resultSelector merges the mapped value and index before the subscriber sees it—a lightweight alternative to an extra map().
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animation */}
      <AnimatedMapPipeline />

      {/* Real-world examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world map() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Practical scenarios where map() keeps payload shapes predictable before they reach the view or downstream operators.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                Options object for UI controls
              </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, map } from 'rxjs';

const rawFilters$ = from([
  { key: 'name', value: 'Alice' },
  { key: 'age', value: 32 },
]);

rawFilters$
  .pipe(
    map(({ key, value }) => ({
      label: key.toUpperCase(),
      value,
      active: Boolean(value),
    })),
  )
  .subscribe((option) => console.log('option', option));

// Output:
// option { label: 'NAME', value: 'Alice', active: true }
// option { label: 'AGE', value: 32, active: true }`}
            </pre>
              <SnippetOutput
                lines={[
                  "option { label: 'NAME', value: 'Alice', active: true }",
                  'option { label: \'AGE\', value: 32, active: true }',
                ]}
              />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                Shaping API responses for the view
              </h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs';

ajax('/api/stars')
  .pipe(
    map((response) => response.response),
    map((raw) => ({
      id: raw.id,
      displayName: raw.name.toUpperCase(),
      metric: Math.round(raw.score * 100),
    })),
  )
  .subscribe((star) => console.log('star', star));

// Output:
// star { id: 101, displayName: 'SIRIUS', metric: 97 }`}
              </pre>
              <SnippetOutput lines={["star { id: 101, displayName: 'SIRIUS', metric: 97 }"]} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            map() vs mapTo() vs pluck()
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right operator based on whether you need to project, emit a constant, or pick a property path.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'map()',
              description: 'Transforms each emission based on a projector. Use it for calculations, formatting, and deep copies.',
              example: `map((value) => value * 2)`,
              badge: 'General purpose',
            },
            {
              title: 'mapTo()',
              description: 'Ignores the input and always emits the same constant. Great for toggles, loaders, and acknowledgement signals.',
              example: `mapTo(true)`,
              badge: 'Constant output',
            },
            {
              title: 'pluck()',
              description: 'Shorthand for pulling nested props. Avoid for complex logic—use map() when you need calculations.',
              example: `pluck('user', 'name')`,
              badge: 'Property path',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{item.title}</p>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">{item.badge}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">{item.example}</pre>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            map() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Keep map() pure—no side effects inside the projector; use <code>tap()</code> for logging or mutations.</li>
              <li>✅ Combine map() with <code>filter()</code> or <code>take()</code> to shape streams incrementally.</li>
              <li>✅ Use <code>resultSelector</code> to merge value + metadata instead of chaining another map.</li>
              <li>✅ Prefer typed imports from <code>rxjs</code> so the compiler catches mismatched shapes early.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Don’t mutate the incoming value—map should return a fresh object.</li>
                <li>❌ Avoid long-running loops inside map; keep it synchronous and lightweight.</li>
                <li>❌ Don’t use map() when you are ignoring the input; reach for <code>mapTo()</code> instead.</li>
                <li>❌ Never double-subscribe inside map to produce side effects; emit a new value instead.</li>
              </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

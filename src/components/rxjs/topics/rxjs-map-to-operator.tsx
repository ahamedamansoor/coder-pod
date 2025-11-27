'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  AlertTriangle,
  Cpu,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Zap,
  PlayCircle,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  Star,
  Ban,
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

const AnimatedMapToFlow = () => {
  const [phase, setPhase] = useState<'idle' | 'mapping' | 'completed'>('idle');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sourceValues, setSourceValues] = useState<Array<{ id: number; value: string; status: 'pending' | 'processing' | 'ignored' }>>([]);
  const [currentInput, setCurrentInput] = useState<string | null>(null);
  const [outputValues, setOutputValues] = useState<Array<{ id: number; input: string; output: string }>>([]);
  const constantValue = '"LOADING"';

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('mapping');
    setLogLines(['fromEvent(button, "click").pipe(', '  mapTo("LOADING")', ')', 'Subscription started...']);
    setSourceValues([
      { id: 1, value: 'click', status: 'pending' },
      { id: 2, value: 'dblclick', status: 'pending' },
      { id: 3, value: 'mousedown', status: 'pending' },
    ]);
    setCurrentInput(null);
    setOutputValues([]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Process each input
    const inputs = ['click', 'dblclick', 'mousedown'];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      // Mark as processing
      setSourceValues((prev) =>
        prev.map((v) => (v.id === i + 1 ? { ...v, status: 'processing' } : v))
      );
      setCurrentInput(input);
      setLogLines((prev) => [...prev, '', `// Event ${i + 1}`, `Input: "${input}"`]);
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Show mapping
      setLogLines((prev) => [...prev, 'mapTo() ignores input', `Always emits: ${constantValue}`]);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Show result
      setLogLines((prev) => [...prev, `→ next(${constantValue})`]);
      setOutputValues((prev) => [...prev, { id: i + 1, input, output: constantValue }]);
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Mark as ignored
      setSourceValues((prev) =>
        prev.map((v) => (v.id === i + 1 ? { ...v, status: 'ignored' } : v))
      );
      setCurrentInput(null);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    // Complete
    setPhase('completed');
    setLogLines((prev) => [...prev, '', 'complete()', '  ✓ All inputs mapped to constant!']);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset
    setLogLines([]);
    setSourceValues([]);
    setCurrentInput(null);
    setOutputValues([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <PlayCircle className="w-6 h-6 text-indigo-600" />
          Animated mapTo() - Constant Value Mapping
        </CardTitle>
        <CardDescription className="text-base">
          Watch how <code>mapTo("LOADING")</code> ignores all input values and always emits the same constant. The animation shows how different events all produce identical output with auto-reset for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <code>mapTo()</code> ignores inputs and always emits the same constant—perfect for flags, loading states, and signals!
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
                Various Inputs
              </h4>
              <Badge className={`text-xs ${
                phase === 'idle' ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/40' :
                phase === 'mapping' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
              }`}>
                {phase === 'idle' ? 'Idle' : phase === 'mapping' ? 'Mapping' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200/60 dark:border-blue-700 min-h-[260px]">
              <p className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 mb-3">Source Events</p>
              
              <div className="space-y-2">
                {sourceValues.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// Different inputs appear here</span>
                )}
                {sourceValues.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-300 ${
                      item.status === 'processing'
                        ? 'bg-indigo-100 dark:bg-indigo-900/20 border-indigo-500 scale-105'
                        : item.status === 'ignored'
                        ? 'bg-slate-100 dark:bg-slate-900/20 border-slate-400 opacity-50'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold ${
                      item.status === 'processing'
                        ? 'bg-gradient-to-br from-indigo-500 to-blue-500 text-white animate-pulse'
                        : item.status === 'ignored'
                        ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-700 dark:from-slate-700 dark:to-slate-800 dark:text-slate-300'
                        : 'bg-gradient-to-br from-blue-400 to-cyan-400 text-white'
                    }`}>
                      {item.value.slice(0, 3)}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">{item.value}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {item.status === 'pending' ? 'Waiting' :
                         item.status === 'processing' ? 'Processing...' :
                         'Ignored'}
                      </div>
                    </div>
                    {item.status === 'ignored' && (
                      <Ban className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Constant Value */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-600" />
                Constant Value
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border border-amber-200/60 dark:border-amber-700">
              <p className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 mb-3">Always Emits This</p>
              
              <div className="space-y-4">
                {/* Constant Display */}
                <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl border-2 border-amber-400 dark:border-amber-600">
                  <div className="flex flex-col items-center gap-3">
                    <Star className="w-12 h-12 text-amber-600 dark:text-amber-400" />
                    <div className="text-center">
                      <div className="text-lg font-bold font-mono text-amber-700 dark:text-amber-300">
                        {constantValue}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        Same for all inputs
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Processing */}
                {currentInput ? (
                  <div className="space-y-2 animate-in fade-in duration-300">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                      <div className="text-[10px] text-muted-foreground mb-2">Current Input:</div>
                      <div className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                        "{currentInput}"
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-amber-600 dark:text-amber-400 animate-pulse" />
                    </div>
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg border border-amber-400">
                      <div className="text-[10px] text-muted-foreground mb-2">Output:</div>
                      <div className="text-sm font-mono font-bold text-amber-700 dark:text-amber-300">
                        {constantValue}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-center">
                    <div className="text-[10px] text-muted-foreground">
                      {phase === 'idle' ? 'Ready to map' :
                       phase === 'completed' ? 'All mapped!' :
                       'Waiting...'}
                    </div>
                  </div>
                )}

                {/* Info Box */}
                <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg border border-amber-300 dark:border-amber-700">
                  <div className="text-[9px] space-y-1">
                    <div className="font-semibold text-amber-700 dark:text-amber-300">Key Point:</div>
                    <div className="text-muted-foreground">• Input values are ignored</div>
                    <div className="text-muted-foreground">• Same constant emitted</div>
                    <div className="text-muted-foreground">• Timing is preserved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Values */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Identical Outputs
              </h4>
            </div>
            <div className="min-h-[260px] p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700">
              <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3">All Same Value</p>
              
              <div className="space-y-2">
                {outputValues.length === 0 && !isPlaying && (
                  <span className="text-[11px] text-muted-foreground">// All outputs will be identical</span>
                )}
                {outputValues.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-700 animate-in slide-in-from-right duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="text-[10px] text-muted-foreground line-through">
                          Input: "{item.input}"
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <ArrowRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <div className="text-sm font-mono font-bold text-emerald-700 dark:text-emerald-300">
                            {item.output}
                          </div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                ))}

                {phase === 'completed' && outputValues.length > 0 && (
                  <div className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-400 dark:border-emerald-600">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{outputValues.length} events → Same constant</span>
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
              <span className="text-slate-500">// mapTo() execution logs appear here</span>
            ) : (
              logLines.map((line, index) => (
                <div 
                  key={index}
                  className={`${
                    line.includes('fromEvent') || line.includes('pipe(') ? 'text-purple-400' :
                    line.includes('mapTo(') ? 'text-amber-400' :
                    line.includes('Subscription started') ? 'text-cyan-400' :
                    line.includes('// Event') ? 'text-gray-500 mt-1' :
                    line.includes('Input:') ? 'text-blue-400' :
                    line.includes('mapTo() ignores') ? 'text-slate-400' :
                    line.includes('Always emits:') ? 'text-amber-400' :
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
{`const button = document.querySelector('button');
const clicks$ = fromEvent(button, 'click');

clicks$.pipe(
  mapTo('LOADING')
).subscribe({
  next: (value) => console.log('State:', value),
  complete: () => console.log('Done!')
});

// Every click outputs: State: LOADING
// Input is completely ignored!`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsMapToOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={MapPin}
        category="RxJS - Transformation Operators"
        title="mapTo() -  Emit constants, ignore inputs"
        description="Use mapTo() when you want every emission to become the same signal, handy for flags, loaders, or completion markers."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why mapTo() exists
          </CardTitle>
          <CardDescription className="text-base">
            It converts every emission into a single stable value so downstream code doesn't have to inspect inputs or repeat logic.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Signal normalization',
              text: 'Great for emitting a "ready" flag or spinner state no matter what triggered the original stream.',
            },
            {
              title: 'Zero payload work',
              text: 'Keeps your subscriber focused on state changes, not raw event data - ideal for status dashboards.',
            },
            {
              title: 'Simple to combine',
              text: 'Works well with race, merge, takeUntil, and other guards where only the timing matters.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{card.title}</p>
              <p className="text-muted-foreground text-sm">{card.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            mapTo() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            mapTo(constant) ignores the payload but keeps completion, error, and periodic timing intact.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, mapTo } from 'rxjs';

const enter$ = fromEvent(document, 'keydown');

enter$
  .pipe(mapTo({ navState: 'collapsed' }))
  .subscribe((signal) => console.log('mapTo emitted', signal));

// Output when pressing any key:
// mapTo emitted { navState: 'collapsed' }`}
          </pre>
          <SnippetOutput lines={['mapTo emitted { navState: \'collapsed\' }']} />
          <Alert>
            <AlertTitle>RxJS 8 update</AlertTitle>
            <AlertDescription>
              mapTo() is now exported directly from <code>rxjs</code> with consistent typing alongside other transformation helpers,
              so modern bundlers tree-shake it more effectively than hooked legacy paths.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedMapToFlow />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world mapTo() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Keep the logic at the edges and emit constants for UI, analytics, and cancellation signals.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                Loader flag from any event
              </h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { merge, timer, mapTo } from 'rxjs';

const load$ = timer(0, 1000).pipe(
  mapTo({ loading: true }),
);

const complete$ = timer(5000).pipe(mapTo({ loading: false }));

merge(load$, complete$).subscribe((state) => console.log(state));`}
              </pre>
              <SnippetOutput
                lines={[
                  'Loading true/false toggles every second',
                  'Final flag: { loading: false } (after 5s)',
                ]}
              />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                Analytics ping every time
              </h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, mapTo } from 'rxjs';

fromEvent(document, 'visibilitychange')
  .pipe(mapTo({ type: 'page-hidden' }))
  .subscribe((payload) => sendAnalytics(payload));`}
              </pre>
              <SnippetOutput lines={["analytics: { type: 'page-hidden' }"]} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            mapTo() vs map()
          </CardTitle>
          <CardDescription className="text-base">
            Use mapTo when the output is constant; map when you need computed values.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mapTo()</p>
            <p className="text-xs text-muted-foreground">
              Ignores inputs, emits constants. Great for UI flags, completion, or analytics contract signals.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`interval(1000)
  .pipe(mapTo('tick'))
  .subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">map()</p>
            <p className="text-xs text-muted-foreground">
              Transforms each emission individually. Use it for formatting, calculations, and deriving new objects.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`interval(1000)
  .pipe(map((value) => \`tick-\${value}\`))
  .subscribe(console.log);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            mapTo() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[done] Emit a meaningful, reusable constant (e.g., <code className="text-xs">{'{ loading: true }'}</code>) so downstream code knows what happened.</li>
              <li>[done] Pair with <code className="text-xs">takeUntil</code>, <code className="text-xs">race</code>, or <code className="text-xs">merge</code> when only the timing matters.</li>
              <li>[done] Combine with <code className="text-xs">tap()</code> before mapTo() for logging without affecting the constant.</li>
              <li>[done] Import mapTo from <code className="text-xs">rxjs</code> so the type system catches mismatches.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[X] Don&apos;t pack logic inside mapTo(); it should never inspect the input.</li>
              <li>[X] Avoid mapTo() when you need dynamic output - map() or switchMap() are better.</li>
              <li>[X] Avoid emitting unrelated constants that make debugging hard; keep names explicit.</li>
              <li>[X] Don&apos;t call mapTo() in the middle of a chain where the upstream value still matters.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  Trash2,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from 'lucide-react';

export default function JavaScriptGarbageCollectionNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Trash2}
        category="JavaScript Design Patterns"
        title="Garbage Collection"
        description="How JavaScript manages memory automatically"
        colorTheme="yellow"
      />

      {/* What is Garbage Collection? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Garbage Collection: Automatic Memory Cleanup 🧹
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-green-700 dark:text-green-400">Garbage collection (GC)</strong> is JavaScript's automatic memory management system. Unlike languages like C where you manually allocate and free memory, JavaScript automatically finds and removes objects that are no longer being used. This happens behind the scenes without you having to do anything - but understanding how it works helps you write more efficient code!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-green-200 dark:border-green-800/30">
            <Trash2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-lg">Automatic, Not Instant</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              GC runs periodically, not immediately. Objects aren't deleted the instant they become unreachable - they're cleaned up during the next garbage collection cycle.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How GC Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How Garbage Collection Works</CardTitle>
              <CardDescription>The mark-and-sweep algorithm</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Most JavaScript engines (like V8 in Chrome) use a <strong>mark-and-sweep</strong> algorithm. Here's how it works:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-200">Step 1: Mark Phase</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                The garbage collector starts from <strong>roots</strong> (global objects, currently executing functions) and "marks" all objects it can reach by following references.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">What are roots?</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Global objects:</strong> window, global variables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Current call stack:</strong> Local variables in executing functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Active closures:</strong> Variables captured by closures</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="text-xl font-bold mb-3 text-green-900 dark:text-green-200">Step 2: Sweep Phase</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                After marking, the garbage collector <strong>"sweeps"</strong> through memory and removes all objects that were NOT marked. These unmarked objects are unreachable and can be safely deleted.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Result:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Marked objects:</strong> Keep (still in use)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span><strong>Unmarked objects:</strong> Delete (no longer reachable)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-200">Step 3: Compact (Optional)</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Some engines also <strong>compact</strong> memory by moving live objects together, eliminating gaps left by deleted objects. This prevents memory fragmentation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reachability */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Reachability: The Golden Rule</CardTitle>
              <CardDescription>When objects are kept vs. deleted</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The key concept in garbage collection is <strong>reachability</strong>. An object is "reachable" if you can access it from a root by following references. Reachable objects are kept, unreachable objects are deleted.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h5 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Reachable (Kept)
              </h5>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Global Variables</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`let user = { name: 'Alice' };
// Reachable via 'user' variable`}</pre>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Referenced Objects</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`let a = { value: 1 };
let b = { ref: a }; // a is reachable via b`}</pre>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Active Functions</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`function process() {
  let data = [1, 2, 3];
  // 'data' is reachable while function runs
}`}</pre>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h5 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Unreachable (Deleted)
              </h5>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Nulled References</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`let user = { name: 'Alice' };
user = null; // Object becomes unreachable`}</pre>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Local Variables After Function Ends</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`function create() {
  let temp = { data: 'big' };
  return null;
}
create(); // 'temp' becomes unreachable`}</pre>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-900">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Circular References (No External Refs)</p>
                  <pre className="font-mono text-xs text-gray-700 dark:text-gray-300">
{`let a = {};
let b = {};
a.ref = b;
b.ref = a;
a = null; b = null; // Both unreachable`}</pre>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Circular References Are OK!</AlertTitle>
            <AlertDescription>
              Modern GC algorithms handle circular references perfectly. If objects reference each other but nothing outside references them, they'll be garbage collected. Old algorithms (reference counting) struggled with this, but mark-and-sweep handles it easily.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Generational GC */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Generational Garbage Collection</CardTitle>
              <CardDescription>Optimizing GC performance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Modern engines like V8 use <strong>generational garbage collection</strong>. The idea: most objects die young. By separating objects by age, we can collect frequently for young objects and rarely for old ones.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="text-xl font-bold mb-3 text-orange-900 dark:text-orange-200">Young Generation (Nursery)</h4>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  Newly created objects start here. This space is small and collected <strong>frequently</strong> (minor GC).
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span><strong>Fast collection:</strong> Quick to scan because it's small</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span><strong>High mortality:</strong> Most objects here die quickly (temporary variables, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span><strong>Survivors promoted:</strong> Objects that survive multiple collections move to old generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-200">Old Generation (Tenured)</h4>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  Long-lived objects that survived multiple minor GCs. This space is larger and collected <strong>infrequently</strong> (major GC).
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Slower collection:</strong> Takes longer because there's more to scan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Low mortality:</strong> Objects here tend to live a long time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span><strong>Less frequent:</strong> Only collected when necessary or during major GC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>Why This is Faster</AlertTitle>
            <AlertDescription>
              Instead of scanning ALL memory every time, we mostly scan the small young generation where most garbage is. This makes GC pauses much shorter and less noticeable to users.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* GC and Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>GC Impact on Performance</CardTitle>
              <CardDescription>When garbage collection slows your app</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Garbage collection <strong>pauses your JavaScript execution</strong> while it runs. These pauses are usually very short (milliseconds), but can cause performance issues if:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">Too Frequent GC</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Cause:</strong> Creating many short-lived objects rapidly<br/>
                <strong>Impact:</strong> Constant minor GC pauses add up<br/>
                <strong>Solution:</strong> Reduce object allocations, reuse objects (object pooling)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">Long GC Pauses</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Cause:</strong> Very large heap or old generation full of objects<br/>
                <strong>Impact:</strong> Major GC pauses can freeze UI for noticeable time<br/>
                <strong>Solution:</strong> Reduce total memory usage, break up large data structures
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">Memory Leaks</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Cause:</strong> Objects never become unreachable (forgotten references)<br/>
                <strong>Impact:</strong> Heap grows, GC works harder, pauses get longer<br/>
                <strong>Solution:</strong> Fix memory leaks (see Memory Leaks topic)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Working With GC</CardTitle>
              <CardDescription>Best practices for GC-friendly code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Minimize Object Creation
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Create fewer objects, especially in hot paths (loops, frequently called functions). Reuse objects when possible instead of creating new ones.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Help Objects Die Young
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Use local variables in functions instead of global variables. Local variables become unreachable quickly after the function returns.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Null Out References
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              When done with large objects, set references to null to help GC identify them as unreachable sooner. Especially useful for global variables or long-lived objects.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Use Object Pooling
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              For frequently created/destroyed objects (e.g., game entities, particles), maintain a pool of reusable objects instead of constantly creating new ones.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
              ❌ DON'T Try to Force GC
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              There's no reliable way to force garbage collection in JavaScript. The engine decides when to run GC based on heuristics. Trust the GC to do its job!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Automatic Cleanup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GC removes unreachable objects<br/>
                    Happens automatically, periodically<br/>
                    Uses mark-and-sweep algorithm
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reachability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keep: Objects reachable from roots<br/>
                    Delete: Unreachable objects<br/>
                    Circular refs are handled
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Generational GC</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Young generation: frequent, fast<br/>
                    Old generation: rare, slower<br/>
                    Most objects die young
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best Practices</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Minimize object creation<br/>
                    Use local variables<br/>
                    Null out large objects when done
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              You can't and shouldn't try to control GC directly, but you can write GC-friendly code! Focus on reducing object allocations, avoiding memory leaks, and letting local variables go out of scope quickly. The GC will handle the rest efficiently.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

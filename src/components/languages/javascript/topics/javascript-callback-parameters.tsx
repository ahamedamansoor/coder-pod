'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Link2,
  Sparkles,
  Clock3,
  ListChecks,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface JavaScriptCallbackParametersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptCallbackParameters({}: JavaScriptCallbackParametersProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Link2}
        category="JavaScript Fundamentals"
        title="Callback Parameters"
        description="Understand what arguments callback APIs pass you and how to design clear callback signatures."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Callback Params Matter
          </CardTitle>
          <CardDescription className="text-base">
            Callbacks receive specific arguments: know the order, name them clearly, and validate before using.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Know the shape</h3>
            </div>
            <p className="text-sm text-muted-foreground">map gives (value, index, array); setTimeout gives none; custom APIs vary.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Signature</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Clock3 className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Async ready</h3>
            </div>
            <p className="text-sm text-muted-foreground">Callbacks often signal completion or errors—design both paths.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Success/Error</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Name clearly</h3>
            </div>
            <p className="text-sm text-muted-foreground">Use descriptive param names (`value`, `index`, `array`, `err`, `result`) to avoid confusion.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Clarity</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Beginner walkthrough */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-amber-500/80 dark:text-amber-300/80" />
            Function Parameters 101
          </CardTitle>
          <CardDescription className="text-base">
            Start with tiny functions, name the inputs, and pass callbacks that expect those inputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border space-y-2">
              <h4 className="font-semibold">Step 1: Plain function</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 text-xs font-mono whitespace-pre-wrap">
{`function add(a, b) {
  return a + b;
}

add(2, 3); // a=2, b=3
// Output: 5`}
              </pre>
              <p className="text-sm text-muted-foreground">Regular parameters are listed inside parentheses. Order matters.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
              <h4 className="font-semibold">Step 2: Function as parameter</h4>
              <pre className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 text-xs font-mono whitespace-pre-wrap border">
{`function greet(name, formatter) {
  const message = formatter(name);
  console.log(message);
}

greet('Ada', (value) => 'Hi ' + value + '!');
// Output: Hi Ada!`}
              </pre>
              <p className="text-sm text-muted-foreground">Here the second parameter is a callback. It receives the <code>name</code> value.</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Extra beginner-friendly callback examples
            </h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border">
                <div>// Timer callback (no parameters)</div>
                <div>setTimeout(() =&gt; console.log('time!'), 500);</div>
                <div className="text-slate-500">// callback runs later, but no args</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border">
                <div>// Iterating list (value, index)</div>
                <div>['JS', 'TS'].forEach((value, index) =&gt; {'{'}</div>
                <div className="pl-2">console.log(index, value);</div>
                <div>{'}'});</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border md:col-span-2">
                <div>// Custom helper with success + failure callbacks</div>
                <div>{`function loadUser(onSuccess, onFailure) {`}</div>
                <div className="pl-2">{`const ok = true;`}</div>
                <div className="pl-2">{`if (ok) onSuccess({ name: 'Ada' });`}</div>
                <div className="pl-2">{`else onFailure('Could not load');`}</div>
                <div>{`}`}</div>
                <div>{`loadUser(`}</div>
                <div className="pl-2">{`(user) => console.log('user', user),`}</div>
                <div className="pl-2">{`(message) => console.error(message)`}</div>
                <div>{`);`}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Identify what each callback receives (value, index, event, error) and write descriptive parameter names so the next
              developer can follow your intent.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Canonical signatures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Canonical Callback Signatures
          </CardTitle>
          <CardDescription className="text-base">
            Minimal, runnable snippets showing real callback arguments and outputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Array helpers</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>arr.map((value, index, array) =&gt; value + index);</div>
              <div>arr.filter((value, index, array) =&gt; value {'>'} 10);</div>
              <div className="text-slate-500">// map log: value, index, same array</div>
              <div>arr.reduce((total, value, index, array) =&gt; total + value, 0);</div>
              <div className="text-slate-500">// reduce gets accumulator + value</div>
            </div>
            <p className="text-sm text-muted-foreground">Most array callbacks give (value, index, array) in that order.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Node-style (err, result)</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>fs.readFile('file.txt', (err, data) =&gt; {'{'} ... {'}'});</div>
              <div>callback(new Error('fail'), null);</div>
              <div>callback(null, data);</div>
              <div className="text-slate-500">// handle err first, data second</div>
            </div>
            <Alert>
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Design async callbacks to deliver error first, result second, or migrate to Promises.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Extra practical examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practical Callback Examples
          </CardTitle>
          <CardDescription className="text-base">
            Quick references for everyday APIs and patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">DOM events</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>button.addEventListener('click', event =&gt; {'{'} ... {'}'});</div>
              <div className="text-slate-500">// event carries target, coordinates, etc.</div>
              <div>{`input.addEventListener('input', ({ target }) => console.log(target.value));`}</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Promise-style adapters</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const toPromise = (fn) =&gt;</div>
              <div className="pl-2">new Promise((resolve, reject) =&gt; fn(resolve, reject));</div>
              <div>toPromise((res) =&gt; res('done')).then(console.log);</div>
            </div>
            <p className="text-sm text-muted-foreground">Wrap callbacks to integrate with Promise/async flows.</p>
          </div>
        </CardContent>
      </Card>

      {/* Subscribe & Unsubscribe patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Subscribe & Unsubscribe
          </CardTitle>
          <CardDescription className="text-base">
            How real-world APIs let you start receiving values with a callback, and then stop them safely when you are done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Subscribe/Unsubscribe Pattern"
              description="Register callbacks and get cleanup functions - the foundation of event-driven programming"
              code={`// Internal list of listeners
const listeners = [];

// Subscribe: register callback and return unsubscribe function
function subscribe(listener) {
  listeners.push(listener);

  return () => {
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1); // unsubscribe
    }
  };
}

// Emit values to all listeners
function emit(value) {
  listeners.forEach((listener) => listener(value));
}

// Usage
const unsubscribe = subscribe((value) => {
  console.log('listener A saw:', value);
});

emit(1);
emit(2);
unsubscribe();          // stop this listener
emit(3);                // A will NOT be called now

// Output:
// listener A saw: 1
// listener A saw: 2
// (no log after unsubscribe)`}
              language="javascript"
              colorTheme="blue"
              icon={Link2}
              features={[
                "Returns cleanup function",
                "Multiple subscribers supported",
                "Used in RxJS, Redux, WebSockets",
                "Prevents memory leaks"
              ]}
              tips={[
                "Always call unsubscribe when done",
                "Store unsubscribe function reference",
                "Common pattern in modern JavaScript"
              ]}
            />

            <CodeSnippet
              title="DOM Event Listeners"
              description="addEventListener/removeEventListener - must use the same callback reference to unsubscribe"
              code={`// Subscribe to DOM event
const button = document.querySelector('#myButton');
const output = document.querySelector('#output');

function handleClick(event) {
  const msg = 'Clicked at: ' + event.clientX + ', ' + event.clientY;
  output.textContent += msg + '\\n';
  console.log(msg);
}

button.addEventListener('click', handleClick);

// Unsubscribe after 5 seconds
setTimeout(() => {
  button.removeEventListener('click', handleClick);
  output.textContent += 'Stopped listening!\\n';
  console.log('Stopped listening for clicks');
}, 5000);`}
              language="javascript"
              colorTheme="emerald"
              icon={CheckCircle2}
              embedPlayground={true}
              playgroundConfig={{
                html: `<div style="text-align: center; padding: 20px;">
  <button id="myButton" style="padding: 12px 24px; font-size: 16px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; margin-bottom: 20px;">
    Click Me!
  </button>
  <div id="output" style="background: #1e293b; color: #22d3ee; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 14px; min-height: 120px; white-space: pre-wrap; text-align: left;">
Listener is active. Click the button!
(It will stop listening after 5 seconds)

</div>
</div>`,
                css: '',
                js: `const button = document.querySelector('#myButton');
const output = document.querySelector('#output');

function handleClick(event) {
  const msg = 'Clicked at: ' + event.clientX + ', ' + event.clientY;
  output.textContent += msg + '\\n';
  console.log(msg);
}

button.addEventListener('click', handleClick);

// Unsubscribe after 5 seconds
setTimeout(() => {
  button.removeEventListener('click', handleClick);
  output.textContent += '\\n🔴 Stopped listening! (Try clicking now - nothing happens)\\n';
  console.log('Stopped listening for clicks');
}, 5000);`,
                visiblePanels: ['preview', 'js', 'console'],
                layout: 'vertical'
              }}
              features={[
                "Classic DOM pattern",
                "Must use same callback reference",
                "Prevents ghost listeners",
                "Essential for cleanup in SPAs"
              ]}
              tips={[
                "Named functions required for removal",
                "Forgetting removal causes memory leaks",
                "Use AbortController for modern cleanup"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Name callback parameters descriptively (value, index, array).</li>
              <li>✅ Handle both success and error paths in async callbacks.</li>
              <li>✅ Keep callbacks pure when possible—avoid unexpected mutations.</li>
              <li>✅ Prefer Promises/async-await for complex async flows.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Ignoring the error argument in Node-style callbacks.</li>
              <li>❌ Over-nesting callbacks; refactor to Promises to avoid callback hell.</li>
              <li>❌ Relying on implicit globals inside callbacks.</li>
              <li>❌ Forgetting to return or handle results inside array callbacks.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

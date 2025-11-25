'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  SplitSquareHorizontal,
  Sparkles,
  Columns,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Shuffle,
} from 'lucide-react';

interface JavaScriptArrayDestructuringProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Array Destructuring Demo</title>
  <style>
    body { font-family: 'Inter', system-ui; background: #f8fafc; color: #0f172a; padding: 24px; }
    .panel { max-width: 720px; margin: 0 auto; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; padding: 28px; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 10px; overflow-x: auto; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Array Destructuring</h1>
    <p>Open DevTools console to watch each example log results.</p>
    <pre id="summary"></pre>
  </div>
  <script src="./destructure-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log('coords:', x, y, z);

const [first, , third] = ['alpha', 'beta', 'gamma'];
console.log('skip middle:', first, third);

const response = ['Ada', 'Pro', { city: 'Paris' }];
const [name, plan, { city }] = response;
console.log('nested:', name, plan, city);

const summary = [
  'coords -> ' + x + ', ' + y + ', ' + z,
  'skip -> ' + first + ', ' + third,
  'nested -> ' + name + ' (' + city + ')'
].join('\n');

document.getElementById('summary').textContent = summary;
`;

export default function JavaScriptArrayDestructuring({ onOpenWebPlayground }: JavaScriptArrayDestructuringProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={SplitSquareHorizontal}
        category="JavaScript · Arrays"
        title="Array Destructuring"
        description="Unpack array elements directly into variables for cleaner, beginner-friendly code."
        colorTheme="blue"
      />

      <Card className="bg-gradient-to-br from-blue-50/70 via-cyan-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-emerald-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Destructure Arrays?
          </CardTitle>
          <CardDescription className="text-base">Grab values by position, skip items, apply defaults, and rename on the fly.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Readable', desc: 'Avoid multiple index lookups—label values with meaningful names.', color: 'bg-blue-100/70 text-blue-700' },
            { label: 'Flexible', desc: 'Skip elements, collect leftovers, and apply defaults in one line.', color: 'bg-emerald-100/70 text-emerald-700' },
            { label: 'Real-world', desc: 'Great for API arrays, React hooks, coordinate pairs, and more.', color: 'bg-amber-100/70 text-amber-700' },
          ].map(({ label, desc, color }) => (
            <div key={label} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <Badge className={`${color} w-fit`}>{label}</Badge>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basics in Three Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: '1 · Match positions', snippet: `const colors = ['red', 'green', 'blue'];\nconst [primary, secondary] = colors;`, output: ["primary -> red", "secondary -> green"] },
              { title: '2 · Defaults', snippet: `const [x=0, y=0, z=0] = [5, 10];`, output: ["x -> 5", "y -> 10", "z -> 0"] },
              { title: '3 · Skip items', snippet: `const [first, , third] = ['JS','TS','Rust'];`, output: ["first -> JS", "third -> Rust"] },
            ].map(({ title, snippet, output }) => (
              <div key={title} className="rounded-xl border bg-white dark:bg-gray-900 p-4">
                <h4 className="font-semibold text-sm mb-2">{title}</h4>
                <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{snippet}</pre>
                <SnippetOutput lines={output} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Patterns to Know
          </CardTitle>
          <CardDescription className="text-base">Mix and match rest parameters, nested arrays, and renaming.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Rest items</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const [leader, ...followers] = ['Ada','Lin','Noor'];`}</pre>
            <SnippetOutput lines={["leader -> Ada", "followers -> ['Lin','Noor']"]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Nested arrays</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const [name, [city, country]] = ['Ada', ['Paris','FR']];`}</pre>
            <SnippetOutput lines={["name -> Ada", "city -> Paris", "country -> FR"]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Swap values</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`let a = 'left', b = 'right';
[a, b] = [b, a];`}</pre>
            <SnippetOutput lines={["a -> right", "b -> left"]} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shuffle className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Uses
          </CardTitle>
          <CardDescription className="text-base">Where you will see array destructuring daily.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> API tuples</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const response = ['Ada', 'Basic', 42];
const [name, plan, credits] = response;`}</pre>
            <SnippetOutput lines={["name -> Ada", "plan -> Basic", "credits -> 42"]} />
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> React-style hooks</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const [value, setValue] = useState('Hello');`}</pre>
            <SnippetOutput lines={["value -> 'Hello'", "setValue -> function"]} />
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Coordinate helpers</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`function normalize([x, y, z = 0]) {
  return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}`}</pre>
            <SnippetOutput lines={["normalize([3,4]) -> 5"]} />
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Multi-return utilities</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`function useFetch() {
  return ['idle', () => console.log('fetching...')];
}
const [status, refetch] = useFetch();`}</pre>
            <SnippetOutput lines={["status -> 'idle'", "refetch -> function"]} />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Match names to meaning (e.g., `[latitude, longitude]`).</li>
              <li>✅ Provide defaults for missing items.</li>
              <li>✅ Use rest (`...others`) to capture leftover data.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Destructuring extremely long arrays (use objects or comments).</li>
              <li>❌ Forgetting to handle `undefined` values.</li>
              <li>❌ Mixing positional meaning without documentation.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice Array Destructuring
          </CardTitle>
          <CardDescription className="text-base">Launch examples and inspect console output instantly.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">destructure-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Skip, rest, nested</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

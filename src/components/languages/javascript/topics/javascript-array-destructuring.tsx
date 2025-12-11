'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  SplitSquareHorizontal,
  Sparkles,
  Columns,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Shuffle,
  ArrowRightLeft,
  ListChecks,
  Package,
} from 'lucide-react';

export default function JavaScriptArrayDestructuring() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={SplitSquareHorizontal}
        category="JavaScript · Arrays"
        title="Array Destructuring"
        description="Unpack array elements directly into variables for cleaner, beginner-friendly code."
        colorTheme="blue"
      />

      {/* All Patterns Reference */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-purple-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-purple-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            All Destructuring Patterns
          </CardTitle>
          <CardDescription className="text-base">
            10+ essential patterns to unpack arrays efficiently
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-2">Basic</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Position matching</div>
              <div>• Default values</div>
              <div>• Skip elements</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300 mb-2">Advanced</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Rest operator</div>
              <div>• Nested arrays</div>
              <div>• Value swapping</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-purple-50/80 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold text-sm text-purple-700 dark:text-purple-300 mb-2">Function</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Parameter destructuring</div>
              <div>• Return value destructuring</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold text-sm text-amber-700 dark:text-amber-300 mb-2">Real-World</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• React hooks</div>
              <div>• API responses</div>
              <div>• Coordinates</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/70 via-sky-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-sky-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Why Array Destructuring Matters
          </CardTitle>
          <CardDescription className="text-base">
            Unpack array values directly into variables for cleaner, more readable code.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              <h3 className="font-semibold">Cleaner syntax</h3>
            </div>
            <p className="text-sm text-muted-foreground">Replace arr[0], arr[1] with meaningful variable names.</p>
            <Badge className="bg-indigo-100/80 text-indigo-700 border border-indigo-200/60">[x, y] = coords</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Value swapping</h3>
            </div>
            <p className="text-sm text-muted-foreground">Swap variables in one line without temp variables.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">[a, b] = [b, a]</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Hook patterns</h3>
            </div>
            <p className="text-sm text-muted-foreground">Essential for React hooks and modern JS libraries.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">useState</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <SplitSquareHorizontal className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What Is Array Destructuring?
          </CardTitle>
          <CardDescription className="text-base">
            A syntax to extract array elements directly into variables based on position.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre 
            className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
            }}
          >
{`// Traditional way
const colors = ['red', 'green', 'blue'];
const primary = colors[0];
const secondary = colors[1];

// Destructuring way
const [primary, secondary] = colors;
console.log(primary);   // "red"
console.log(secondary); // "green"`}
          </pre>
          <p className="text-sm text-muted-foreground">
            Destructuring matches variables to array positions left-to-right. Skip positions with commas, apply defaults, or collect remaining items with rest operator.
          </p>
        </CardContent>
      </Card>

      {/* Basic Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Basic Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Essential destructuring patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Position Matching</h4>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Basic</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Extract values based on array position</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

console.log(primary);   // "red"
console.log(secondary); // "green"
console.log(tertiary);  // "blue"`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Default Values</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Safe</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Provide fallback values for missing elements</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const [x = 0, y = 0, z = 0] = [5, 10];

console.log(x); // 5
console.log(y); // 10
console.log(z); // 0 (default)`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Skip Elements</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Selective</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Use commas to skip unwanted positions</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const [first, , third] = ['JS', 'TS', 'Rust'];

console.log(first); // "JS"
console.log(third); // "Rust"
// TypeScript is skipped`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Rest Operator</h4>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Collect</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Gather remaining elements into an array</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const [leader, ...followers] = ['Ada', 'Lin', 'Noor'];

console.log(leader);     // "Ada"
console.log(followers);  // ["Lin", "Noor"]`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Patterns */}
      <CodeSnippet
        title="Advanced Pattern: Nested Arrays"
        description="Destructure nested arrays for complex data structures"
        code={`const user = ['Ada', 'Lovelace', ['Paris', 'FR', 75001]];

// Destructure nested array
const [firstName, lastName, [city, country, postal]] = user;

console.log(firstName); // "Ada"
console.log(lastName);  // "Lovelace"
console.log(city);      // "Paris"
console.log(country);   // "FR"
console.log(postal);    // 75001

// Real-world example: Geographic coordinates
const location = ['Eiffel Tower', [48.8584, 2.2945]];
const [name, [latitude, longitude]] = location;

console.log(name);      // "Eiffel Tower"
console.log(latitude);  // 48.8584
console.log(longitude); // 2.2945`}
        language="javascript"
        colorTheme="purple"
        icon={Layers}
      />

      <CodeSnippet
        title="Practical Pattern: Value Swapping"
        description="Swap variable values without a temporary variable"
        code={`let a = 'left';
let b = 'right';

// Traditional swap (needs temp variable)
let temp = a;
a = b;
b = temp;

// Destructuring swap (one line!)
[a, b] = [b, a];

console.log(a); // "right"
console.log(b); // "left"

// Real-world: Sorting algorithm helper
let arr = [5, 2, 8, 1];
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}
console.log(arr); // [2, 5, 8, 1]`}
        language="javascript"
        colorTheme="blue"
        icon={ArrowRightLeft}
      />

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-sky-50/60 to-blue-50/60 dark:from-sky-950/10 dark:to-blue-950/10 border border-sky-200/40 dark:border-sky-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shuffle className="w-6 h-6 text-sky-600/80 dark:text-sky-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Common use cases where destructuring shines
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <h4 className="font-semibold">React Hooks</h4>
            </div>
            <p className="text-xs text-muted-foreground">Most common use case in modern React</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h4 className="font-semibold">API Responses</h4>
            </div>
            <p className="text-xs text-muted-foreground">Unpack tuple-style API responses</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const response = ['Ada', 'Premium', 150];
const [name, plan, credits] = response;

console.log(\`\${name} has \${credits} credits\`);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500" />
              <h4 className="font-semibold">Function Parameters</h4>
            </div>
            <p className="text-xs text-muted-foreground">Destructure arrays in function signatures</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`function distance([x1, y1], [x2, y2]) {
  return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
}

console.log(distance([0, 0], [3, 4])); // 5`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <h4 className="font-semibold">Multiple Return Values</h4>
            </div>
            <p className="text-xs text-muted-foreground">Return multiple values from functions</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([5, 2, 8, 1]);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Data Processing Pipeline"
        description="Combining destructuring with array methods for elegant data transformation"
        code={`const users = [
  ['Ada', 'Premium', 150],
  ['Lin', 'Basic', 50],
  ['Mia', 'Premium', 200],
];

// Process and destructure in one pass
const premiumUsers = users
  .filter(([, plan]) => plan === 'Premium')
  .map(([name, , credits]) => ({ name, credits }));

console.log(premiumUsers);
// [
//   { name: "Ada", credits: 150 },
//   { name: "Mia", credits: 200 }
// ]

// Iterate with entries
for (const [index, [name, plan]] of users.entries()) {
  console.log(\`\${index + 1}. \${name} (\${plan})\`);
}
// 1. Ada (Premium)
// 2. Lin (Basic)
// 3. Mia (Premium)`}
        language="javascript"
        colorTheme="indigo"
        icon={Sparkles}
      />

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
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
              <li>✅ Use descriptive variable names that match the data meaning.</li>
              <li>✅ Provide default values to handle missing elements safely.</li>
              <li>✅ Use rest operator to collect remaining items.</li>
              <li>✅ Skip elements you don't need with empty commas.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Destructuring very long arrays (use objects instead).</li>
              <li>❌ Forgetting to handle undefined values.</li>
              <li>❌ Using unclear variable names like a, b, c.</li>
              <li>❌ Mixing destructuring patterns without documentation.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

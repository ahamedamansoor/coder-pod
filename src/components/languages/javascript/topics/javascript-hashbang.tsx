'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Terminal } from 'lucide-react';

export default function JavaScriptHashbang() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Terminal}
        category="Modern JavaScript"
        title="Hashbang Grammar"
        description="#! for executable JavaScript files in Node.js (ES2023)"
        colorTheme="amber"
      />

      <Card className="border-2 border-stone-300 dark:border-stone-700 shadow-lg bg-gradient-to-br from-stone-50 to-gray-50 dark:from-stone-950/20 dark:to-gray-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-stone-500 to-gray-500 text-white shadow-lg">
              <Terminal className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Hashbang Grammar? #️⃣
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="bg-stone-100 dark:bg-stone-900/30 px-2 py-1 rounded">#!</code> (hashbang or shebang) at the start of a file 
                tells Unix systems <strong className="text-stone-700 dark:text-stone-400">which interpreter to use</strong>. JavaScript now officially 
                supports this syntax, making <strong className="text-gray-700 dark:text-gray-400">executable .js files</strong> a standard feature!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-stone-300 dark:border-stone-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Syntax 📝</CardTitle>
          <CardDescription>Make JavaScript files executable</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Simple Executable Script</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`#!/usr/bin/env node

console.log('Hello from executable JavaScript!');
console.log('Arguments:', process.argv.slice(2));`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
            <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">To make it executable:</h5>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-2 rounded"><code>{`chmod +x script.js
./script.js arg1 arg2`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-stone-300 dark:border-stone-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 1: CLI Tool</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`#!/usr/bin/env node

// greet.js - A simple greeting tool
const name = process.argv[2] || 'World';
console.log(\`Hello, \${name}!\`);

// Usage: ./greet.js Alice
// Output: Hello, Alice!`}</code></pre>
          </div>

          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 2: File Processor</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`#!/usr/bin/env node

// process-file.js
import { readFileSync } from 'fs';

const filename = process.argv[2];

if (!filename) {
  console.error('Usage: ./process-file.js <filename>');
  process.exit(1);
}

try {
  const content = readFileSync(filename, 'utf8');
  console.log(\`Lines: \${content.split('\\n').length}\`);
  console.log(\`Characters: \${content.length}\`);
} catch (error) {
  console.error(\`Error: \${error.message}\`);
  process.exit(1);
}

// Usage: ./process-file.js data.txt`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Task Runner</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`#!/usr/bin/env node

// task.js - Simple task runner
const tasks = {
  build: () => console.log('Building project...'),
  test: () => console.log('Running tests...'),
  deploy: () => console.log('Deploying...'),
};

const taskName = process.argv[2];

if (!taskName || !tasks[taskName]) {
  console.log('Available tasks:', Object.keys(tasks).join(', '));
  process.exit(1);
}

tasks[taskName]();

// Usage: ./task.js build`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-stone-300 dark:border-stone-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Rules ⚠️</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Must Be First Line</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The <code>#!</code> must be the very first thing in the file - no empty lines or comments before it!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Unix-like Systems Only</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hashbang is for Unix/Linux/Mac. Windows doesn't use it (but Node.js still parses it correctly)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Need Execute Permission</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Run <code>chmod +x file.js</code> to make the file executable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-stone-300 dark:border-stone-700 bg-gradient-to-br from-stone-50 via-gray-50 to-slate-50 dark:from-stone-950/20 dark:via-gray-950/10 dark:to-slate-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-stone-500 via-gray-500 to-slate-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-stone-200 dark:border-stone-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">#️⃣</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Hashbang</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    #!/usr/bin/env node at file start
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🖥️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Executable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Makes JS files runnable directly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔧</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">CLI Tools</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for command-line utilities
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-zinc-200 dark:border-zinc-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2023</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Official JavaScript standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

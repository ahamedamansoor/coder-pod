'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Zap,
  Repeat,
  Play,
  Pause,
  FastForward,
  CheckCircle,
  Code2,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptAsyncIteratorsGenerators() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Advanced Concepts"
        title="Async Iterators & Generators"
        description="Master lazy evaluation and asynchronous data streams"
        colorTheme="purple"
      />

      {/* What Are They */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <Repeat className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                What Are Async Iterators & Generators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Generators let you <strong className="text-purple-700 dark:text-purple-400">pause and resume functions</strong> with <code className="text-sm bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">yield</code>. 
                Async iterators let you <strong className="text-fuchsia-700 dark:text-fuchsia-400">iterate over promises</strong> one at a time. Perfect for handling streams, paginated APIs, and lazy data loading!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-950/20 border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <Play className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Generators</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Functions that can <strong>pause execution</strong> with <code className="text-xs bg-white dark:bg-purple-900 px-1.5 py-0.5 rounded">yield</code> and resume later. Returns an iterator.
              </p>
              <Badge className="mt-3 bg-purple-600 hover:bg-purple-700">function*</Badge>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-100 to-pink-50 dark:from-fuchsia-900/30 dark:to-pink-950/20 border-2 border-fuchsia-300 dark:border-fuchsia-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-fuchsia-500 text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-fuchsia-900 dark:text-fuchsia-100">Async Iterators</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Iterate over <strong>async data</strong> (promises) using <code className="text-xs bg-white dark:bg-fuchsia-900 px-1.5 py-0.5 rounded">for await...of</code>. Perfect for streams!
              </p>
              <Badge className="mt-3 bg-fuchsia-600 hover:bg-fuchsia-700">async function*</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Generator in Action"
        description="See how generators pause and resume execution"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #a855f7 0%, #d946ef 100%); padding: 40px; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700;">⚡ Generator Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px;">Click to get next value from generator</p>
    
    <button id="nextBtn" style="padding: 16px 40px; background: white; color: #a855f7; border: none; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 18px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s;">
      ▶️ Get Next Value
    </button>
    
    <div id="output" style="margin-top: 30px; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; min-height: 100px; backdrop-filter: blur(10px);"></div>
  </div>
</div>`}
        css={`#nextBtn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
}

#nextBtn:active {
  transform: translateY(-1px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`}
        js={`// Create a generator function
function* numberGenerator() {
  console.log('🎬 Generator started!');
  yield '1️⃣ First value';
  console.log('⏸️ Generator paused, resumed!');
  yield '2️⃣ Second value';
  console.log('⏸️ Generator paused, resumed again!');
  yield '3️⃣ Third value';
  console.log('✅ Generator finished!');
  return 'All done!';
}

// Create iterator
const iterator = numberGenerator();
let count = 0;

const nextBtn = document.getElementById('nextBtn');
const output = document.getElementById('output');

nextBtn.addEventListener('click', () => {
  const result = iterator.next();
  count++;
  
  if (!result.done) {
    output.innerHTML = \`
      <div style="animation: slideIn 0.4s ease-out;">
        <div style="font-size: 48px; margin-bottom: 12px;">\${result.value.split(' ')[0]}</div>
        <div style="font-size: 20px; font-weight: 600; color: #a855f7; margin-bottom: 8px;">
          \${result.value}
        </div>
        <div style="font-size: 14px; color: #6b7280;">
          Generator is <span style="color: #f59e0b; font-weight: 600;">⏸️ PAUSED</span> • Click for next value
        </div>
      </div>
    \`;
  } else {
    output.innerHTML = \`
      <div style="animation: slideIn 0.4s ease-out;">
        <div style="font-size: 48px; margin-bottom: 12px;">✨</div>
        <div style="font-size: 20px; font-weight: 600; color: #10b981; margin-bottom: 8px;">
          ✅ Generator Complete!
        </div>
        <div style="font-size: 14px; color: #6b7280;">
          Return value: "\${result.value}"
        </div>
        <div style="margin-top: 16px;">
          <button onclick="location.reload()" style="padding: 8px 20px; background: #a855f7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
            🔄 Reset
          </button>
        </div>
      </div>
    \`;
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
    nextBtn.style.cursor = 'not-allowed';
  }
});`}
        colorTheme="purple"
      />

      {/* Generators - Regular */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Regular Generators (function*)</CardTitle>
              <CardDescription>Pause and resume synchronous code execution</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Basic Generator
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Define generator with function*
function* countToThree() {
  yield 1;  // Pause and return 1
  yield 2;  // Pause and return 2
  yield 3;  // Pause and return 3
}

// Create iterator
const counter = countToThree();

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

// 🎯 Or use for...of
for (const num of countToThree()) {
  console.log(num); // 1, 2, 3
}`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-900/10 border-2 border-indigo-200 dark:border-indigo-800/30">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Infinite Sequences</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Generate infinite Fibonacci numbers
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

// Get first 5 fibonacci numbers
const firstFive = [];
const gen = fibonacci();
for (let i = 0; i < 5; i++) {
  firstFive.push(gen.next().value);
}
console.log(firstFive); // [1, 1, 2, 3, 5]`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Async Iterators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Async Iterators (for await...of)</CardTitle>
              <CardDescription>Iterate over async data sources</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-100/50 dark:from-pink-950/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800/30">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
              <FastForward className="w-5 h-5" />
              Basic Async Iterator
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Create an async iterable object
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
  }
};

// Consume with for await...of
async function consume() {
  for await (const value of asyncIterable) {
    console.log(value); // 1, 2, 3
  }
}

consume();

// 🎯 Works with any object that has [Symbol.asyncIterator]`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-100/50 dark:from-rose-950/20 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800/30">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3">Async Iterator with Delays</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Custom async iterator
const delayedNumbers = {
  async *[Symbol.asyncIterator]() {
    for (let i = 1; i <= 5; i++) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
};

// Use it
async function processNumbers() {
  console.log('⏳ Starting...');
  
  for await (const num of delayedNumbers) {
    console.log(\`📦 Got: \${num}\`);
  }
  
  console.log('✅ Complete!');
}

processNumbers();
// Output (with 1s delays between each):
// ⏳ Starting...
// 📦 Got: 1
// 📦 Got: 2
// 📦 Got: 3
// 📦 Got: 4
// 📦 Got: 5
// ✅ Complete!`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Async Generators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/30">
              <Zap className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <CardTitle>Async Generators (async function*)</CardTitle>
              <CardDescription>Generate async data streams - simpler syntax</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-100/50 dark:from-fuchsia-950/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
            <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3 flex items-center gap-2">
              <FastForward className="w-5 h-5" />
              Paginated API Data
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Async generator for paginated data
async function* fetchPages(url) {
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    // Fetch current page
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    
    // Yield data for this page
    yield data.items;
    
    // Check if more pages
    hasMore = data.hasNextPage;
    page++;
  }
}

// Use with for await...of
async function loadAllUsers() {
  for await (const users of fetchPages('/api/users')) {
    console.log('Got page:', users);
    // Process users...
  }
  console.log('All pages loaded!');
}

loadAllUsers();`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100/50 dark:from-purple-950/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Data Streaming</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Stream data with delays
async function* dataStream() {
  for (let i = 1; i <= 5; i++) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield { id: i, timestamp: Date.now() };
  }
}

// Consume stream
async function processStream() {
  console.log('⏳ Starting stream...');
  
  for await (const data of dataStream()) {
    console.log('📦 Received:', data);
  }
  
  console.log('✅ Stream complete!');
}

processStream();
// Output (with 1s delays):
// ⏳ Starting stream...
// 📦 Received: { id: 1, timestamp: ... }
// 📦 Received: { id: 2, timestamp: ... }
// ...
// ✅ Stream complete!`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Perfect Use Cases</CardTitle>
              <CardDescription>When to use generators and async iterators</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Lazy Evaluation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate values only when needed. Memory efficient for large datasets!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/20 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="text-3xl mb-3">📡</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">API Pagination</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fetch pages one at a time without loading everything at once
              </p>
            </div>

            <div className="p-5 rounded-xl bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="text-3xl mb-3">🌊</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Data Streams</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Process streams of data (WebSockets, file reading, real-time updates)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="text-3xl mb-3">♾️</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Infinite Sequences</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate infinite sequences (IDs, timestamps, math sequences)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-2 border-purple-300 dark:border-purple-700">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500 text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <CardTitle>Quick Reference Cheat Sheet</CardTitle>
              <CardDescription>Essential syntax at a glance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">🔹 Regular Generator</h4>
              <pre className="text-xs p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`function* gen() {
  yield 1;
  yield 2;
}
for (const val of gen()) {
  console.log(val);
}`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/20">
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">⚡ Async Generator</h4>
              <pre className="text-xs p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`async function* gen() {
  yield await fetch('/1');
  yield await fetch('/2');
}
for await (const val of gen()) {
  console.log(val);
}`}</code>
              </pre>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-950/30 dark:to-fuchsia-950/30 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Use generators for <strong>lazy evaluation</strong> (values on demand) and async generators for <strong>streaming data</strong> (APIs, files, real-time). Both save memory and improve performance!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏸️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Generators Pause</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1.5 py-0.5 rounded">yield</code> pauses execution, <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1.5 py-0.5 rounded">.next()</code> resumes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Lazy Evaluation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate values only when needed - memory efficient!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Async Iterators</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-1.5 py-0.5 rounded">for await...of</code> for promises
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for Streams</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    APIs, pagination, real-time data, file reading
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

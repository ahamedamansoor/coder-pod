'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Repeat,
  CheckCircle,
  Clock,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptAsyncIterators() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Advanced Async"
        title="Async Iterators"
        description="Loop through async data with for await...of"
        colorTheme="purple"
      />

      {/* What are Async Iterators */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-indigo-50/20 dark:from-purple-950/10 dark:via-violet-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Repeat className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Async Iterators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Async Iterators let you <strong className="text-purple-700 dark:text-purple-400">loop through data that arrives over time</strong> - like reading files chunk by chunk, fetching pages of data, or processing streaming data. Each iteration waits for the next piece of data to arrive.
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Regular Iterator</strong> = Reading a book (all pages ready)<br/>
              <strong>Async Iterator</strong> = Watching a TV series (wait for next episode each week)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Regular vs Async Iterator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Regular Iterator vs Async Iterator</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Regular Iterator</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                All data is available immediately
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Uses <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">for...of</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Returns values synchronously</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Works with arrays, strings, maps</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Async Iterator</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Data arrives over time (async)
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Uses <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">for await...of</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Returns promises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Works with streams, paginated APIs</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Async Iterator */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Creating an Async Iterator</CardTitle>
          <CardDescription>Custom async iterable object</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Create an async iterable that yields numbers with delay
const asyncNumbers = {
  // This makes the object async iterable
  [Symbol.asyncIterator]() {
    let count = 0;
    const max = 5;
    
    return {
      // next() must return a Promise
      async next() {
        // Wait 1 second before returning next number
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (count < max) {
          count++;
          return { value: count, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Use for await...of to consume the async iterator
async function displayNumbers() {
  console.log('Starting...');
  
  // ✨ for await...of waits for each promise
  for await (const num of asyncNumbers) {
    console.log(\`Got number: \${num}\`);
    // Numbers appear one by one with 1 second delay
  }
  
  console.log('Done!');
}

displayNumbers();

// Output (with 1 second between each):
// Starting...
// Got number: 1
// Got number: 2
// Got number: 3
// Got number: 4
// Got number: 5
// Done!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Real-World - Paginated API */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Fetching Paginated Data</CardTitle>
          <CardDescription>Load all pages automatically</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Async iterator for paginated API
class PaginatedAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  // Make this class async iterable
  async *[Symbol.asyncIterator]() {
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
      // Fetch current page
      const response = await fetch(\`\${this.baseUrl}?page=\${page}\`);
      const data = await response.json();
      
      // Yield each item from this page
      for (const item of data.items) {
        yield item;
      }
      
      // Check if there are more pages
      hasMore = data.hasNextPage;
      page++;
    }
  }
}

// Usage: Loop through ALL items automatically
async function getAllUsers() {
  const api = new PaginatedAPI('https://api.example.com/users');
  
  // ✨ Automatically fetches all pages!
  for await (const user of api) {
    console.log(\`User: \${user.name}\`);
    // Process each user as pages load
  }
}

getAllUsers();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 3: Reading File Streams */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Reading File Streams (Node.js)</CardTitle>
          <CardDescription>Process large files chunk by chunk</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Node.js: Read large file line by line
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function* readLines(filePath) {
  const fileStream = createReadStream(filePath);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  // readline interface is async iterable!
  for await (const line of rl) {
    yield line;
  }
}

// Process file line by line without loading all into memory
async function processLargeFile() {
  let lineCount = 0;
  
  for await (const line of readLines('huge-file.txt')) {
    lineCount++;
    
    // Process each line
    if (line.includes('ERROR')) {
      console.log(\`Error on line \${lineCount}: \${line}\`);
    }
  }
  
  console.log(\`Processed \${lineCount} lines\`);
}

processLargeFile();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 4: Array of Promises */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Iterating Over Promises</CardTitle>
          <CardDescription>Process async operations one by one</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Array of URLs to fetch
const urls = [
  'https://api.example.com/user/1',
  'https://api.example.com/user/2',
  'https://api.example.com/user/3',
  'https://api.example.com/user/4',
  'https://api.example.com/user/5'
];

// Convert to array of promises
const fetchPromises = urls.map(url => fetch(url).then(r => r.json()));

// ❌ Promise.all waits for ALL before processing ANY
async function withPromiseAll() {
  const results = await Promise.all(fetchPromises);
  
  // Only runs after ALL fetches complete
  for (const user of results) {
    console.log(user.name);
  }
}

// ✅ for await...of processes as EACH completes
async function withAsyncIterator() {
  // Process each promise as it resolves
  for await (const user of fetchPromises) {
    // Logs immediately when each fetch completes!
    console.log(user.name);
  }
}

withAsyncIterator();

// 🎯 Benefit: Start processing results immediately
// instead of waiting for all to complete`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 5: Custom Async Iterator with Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Example 5: Async Iterator with Error Handling</CardTitle>
          <CardDescription>Proper error handling and cleanup</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Async iterator with error handling and cleanup
class DataStream {
  constructor() {
    this.data = ['item1', 'item2', 'error', 'item4', 'item5'];
  }
  
  async *[Symbol.asyncIterator]() {
    try {
      for (const item of this.data) {
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Simulate error
        if (item === 'error') {
          throw new Error('Data processing failed!');
        }
        
        yield item;
      }
    } finally {
      // Cleanup code runs even if error occurs or break used
      console.log('🧹 Cleanup: Closing stream connection');
    }
  }
}

// Usage with error handling
async function processStream() {
  const stream = new DataStream();
  
  try {
    for await (const item of stream) {
      console.log(\`Processing: \${item}\`);
      
      // Can break early
      // if (someCondition) break;
    }
  } catch (error) {
    console.error('Error caught:', error.message);
  }
}

processStream();

// Output:
// Processing: item1
// Processing: item2
// Error caught: Data processing failed!
// 🧹 Cleanup: Closing stream connection`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* When to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use Async Iterators</CardTitle>
              <CardDescription>Perfect use cases</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Paginated APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load pages one by one as you process data
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ File Streams</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Read large files chunk by chunk without loading all into memory
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ WebSocket Data</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Process messages as they arrive in real-time
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ Database Cursors</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Iterate through query results without loading all rows
              </p>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">✅ Event Streams</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Process server-sent events or data streams
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Async Loop</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">for await...of</code><br/>
                    Waits for each promise
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏳</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Over Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data arrives gradually<br/>
                    Not all at once
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Symbol.asyncIterator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Makes objects iterable<br/>
                    With async behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory Efficient</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Process data as it comes<br/>
                    Don't load everything
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-300 dark:border-purple-700">
            <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Perfect for Streaming Data</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Async iterators are <strong>ideal for data that arrives over time</strong> - like API pagination, file streams, or real-time events. They let you start processing immediately instead of waiting for everything to load!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

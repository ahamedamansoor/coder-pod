'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Zap,
  CheckCircle,
  RefreshCw,
  Lightbulb,
  Workflow,
} from 'lucide-react';

export default function JavaScriptAsyncGenerators() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Advanced Async"
        title="Async Generators"
        description="Generate async values on demand with async function*"
        colorTheme="cyan"
      />

      {/* What are Async Generators */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Async Generators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Async Generators combine <strong className="text-cyan-700 dark:text-cyan-400">generators</strong> (yield values on demand) with <strong className="text-blue-700 dark:text-blue-400">async/await</strong> (handle promises). They let you create async iterators easily using <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">async function*</code>.
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Regular Generator</strong> = Vending machine (dispenses items on demand)<br/>
              <strong>Async Generator</strong> = Pizza delivery (makes items on demand, but you wait for delivery)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Workflow className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Generator Types Comparison</CardTitle>
              <CardDescription>Understanding the differences</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold">Type</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold">Syntax</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold">Returns</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold">Use With</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm">
                    <span className="font-semibold text-blue-700 dark:text-blue-400">Regular Generator</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">function*</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm">
                    Values immediately
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">for...of</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm">
                    <span className="font-semibold text-cyan-700 dark:text-cyan-400">Async Generator</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">async function*</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm">
                    Promises (async values)
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">for await...of</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Async Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Basic Async Generator</CardTitle>
          <CardDescription>Simple async generator with delays</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✨ async function* creates an async generator
async function* countWithDelay() {
  for (let i = 1; i <= 5; i++) {
    // Wait 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Yield value (like return but generator continues)
    yield i;
  }
}

// Consume the async generator
async function runCounter() {
  console.log('Starting counter...');
  
  // Use for await...of to iterate
  for await (const num of countWithDelay()) {
    console.log(\`Count: \${num}\`);
  }
  
  console.log('Done!');
}

runCounter();

// Output (1 second between each):
// Starting counter...
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
// Done!

// 🎯 Key: async function* + yield = async generator
//     Can use await inside and yield promises`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Paginated API */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Paginated API Fetcher</CardTitle>
          <CardDescription>Fetch all pages automatically</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Async generator for fetching paginated data
async function* fetchAllUsers(apiUrl) {
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    console.log(\`Fetching page \${page}...\`);
    
    // Fetch current page
    const response = await fetch(\`\${apiUrl}?page=\${page}\`);
    const data = await response.json();
    
    // Yield each user from this page
    for (const user of data.users) {
      yield user; // Generator pauses here until next iteration
    }
    
    // Check if there's a next page
    hasMore = data.hasNextPage;
    page++;
  }
  
  console.log('All pages fetched!');
}

// Usage: Process users as they come in
async function processUsers() {
  const apiUrl = 'https://api.example.com/users';
  
  for await (const user of fetchAllUsers(apiUrl)) {
    console.log(\`Processing: \${user.name}\`);
    
    // Can process each user immediately
    // Don't need to wait for all pages to load!
  }
}

processUsers();

// 🎯 Benefit: Start processing immediately
// Don't wait for all pages to load into memory`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 3: Infinite Stream */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Infinite Data Stream</CardTitle>
          <CardDescription>Generate endless data on demand</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Generate random data forever
async function* randomDataStream() {
  let count = 0;
  
  while (true) { // Infinite loop!
    // Simulate API call or sensor reading
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const data = {
      id: ++count,
      value: Math.random(),
      timestamp: Date.now()
    };
    
    yield data;
  }
  // Never ends - keeps generating on demand
}

// Consume with limit
async function monitorData() {
  let received = 0;
  const maxItems = 10;
  
  for await (const data of randomDataStream()) {
    console.log(\`Data \${data.id}: \${data.value.toFixed(2)}\`);
    
    // Stop after 10 items
    if (++received >= maxItems) {
      break; // Exit loop (generator stops)
    }
  }
  
  console.log('Monitoring stopped');
}

monitorData();

// 🎯 Key Point: Generator only produces values when asked
// Doesn't generate all infinity at once!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 4: Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Async Generator with Error Handling</CardTitle>
          <CardDescription>Handle errors gracefully</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Async generator with error handling
async function* fetchWithRetry(urls) {
  for (const url of urls) {
    let retries = 3;
    let success = false;
    
    while (retries > 0 && !success) {
      try {
        console.log(\`Fetching: \${url}\`);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}\`);
        }
        
        const data = await response.json();
        yield data; // Success!
        success = true;
        
      } catch (error) {
        retries--;
        console.log(\`Failed: \${error.message}, retries left: \${retries}\`);
        
        if (retries === 0) {
          // Yield error object instead of throwing
          yield { error: error.message, url };
        } else {
          // Wait before retry
          await new Promise(r => setTimeout(r, 1000));
        }
      }
    }
  }
}

// Usage
async function loadData() {
  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/invalid', // Will fail
    'https://api.example.com/data3'
  ];
  
  for await (const result of fetchWithRetry(urls)) {
    if (result.error) {
      console.error(\`Skipping failed: \${result.url}\`);
    } else {
      console.log('Success:', result);
    }
  }
}

loadData();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 5: Real-time Updates */}
      <Card>
        <CardHeader>
          <CardTitle>Example 5: WebSocket Real-time Stream</CardTitle>
          <CardDescription>Convert WebSocket to async generator</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Convert WebSocket to async generator
async function* websocketStream(url) {
  const ws = new WebSocket(url);
  const messageQueue = [];
  let resolveNext = null;
  
  // Listen for messages
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    if (resolveNext) {
      // Someone is waiting for next message
      resolveNext(data);
      resolveNext = null;
    } else {
      // Queue for later
      messageQueue.push(data);
    }
  };
  
  // Wait for connection
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  
  try {
    while (ws.readyState === WebSocket.OPEN) {
      // Get next message
      const message = messageQueue.length > 0
        ? messageQueue.shift()
        : await new Promise(resolve => {
            resolveNext = resolve;
          });
      
      yield message;
    }
  } finally {
    ws.close();
  }
}

// Usage: Process real-time data
async function monitorPrices() {
  const stream = websocketStream('wss://api.example.com/prices');
  
  for await (const update of stream) {
    console.log(\`BTC: $\${update.price}\`);
    
    // Stop if price too high
    if (update.price > 100000) {
      break;
    }
  }
}

monitorPrices();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 6: Combining Generators */}
      <Card>
        <CardHeader>
          <CardTitle>Example 6: Combining Multiple Generators</CardTitle>
          <CardDescription>Merge async generators</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Helper: Merge multiple async generators
async function* merge(...generators) {
  const promises = generators.map(async (gen) => {
    const results = [];
    for await (const value of gen) {
      results.push(value);
    }
    return results;
  });
  
  const allResults = await Promise.all(promises);
  
  // Yield all results
  for (const results of allResults) {
    for (const value of results) {
      yield value;
    }
  }
}

// Example generators
async function* fetchUsers() {
  await new Promise(r => setTimeout(r, 100));
  yield { type: 'user', name: 'Alice' };
  yield { type: 'user', name: 'Bob' };
}

async function* fetchPosts() {
  await new Promise(r => setTimeout(r, 150));
  yield { type: 'post', title: 'Hello World' };
  yield { type: 'post', title: 'Async Generators' };
}

// Combine them
async function loadAllData() {
  for await (const item of merge(fetchUsers(), fetchPosts())) {
    console.log(\`Got \${item.type}:\`, item);
  }
}

loadAllData();

// Output:
// Got user: { type: 'user', name: 'Alice' }
// Got user: { type: 'user', name: 'Bob' }
// Got post: { type: 'post', title: 'Hello World' }
// Got post: { type: 'post', title: 'Async Generators' }`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Why Use Async Generators?</CardTitle>
              <CardDescription>Key benefits</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Cleaner Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Easier than manually implementing Symbol.asyncIterator
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">✅ Memory Efficient</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Generate values on demand, don't load everything at once
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">✅ Lazy Evaluation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Only compute next value when requested
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">✅ Backpressure</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consumer controls the pace of data generation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">async function*</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Combines generators + async<br/>
                    Easy async iterator creation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">yield + await</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can use both inside<br/>
                    Yield async values
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">for await...of</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Consume async generators<br/>
                    Waits for each value
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">On Demand</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Values generated lazily<br/>
                    Memory efficient
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-300 dark:border-cyan-700">
            <RefreshCw className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Simpler Than Manual Implementation</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Async generators are <strong>much simpler</strong> than manually implementing Symbol.asyncIterator. Use <code className="text-xs bg-white dark:bg-slate-800 px-1 rounded">async function*</code> for cleaner, more readable async iteration!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

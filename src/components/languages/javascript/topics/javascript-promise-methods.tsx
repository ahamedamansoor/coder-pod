'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Workflow,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Trophy,
  Timer,
  Zap,
  Target,
} from 'lucide-react';

export default function JavaScriptPromiseMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Workflow}
        category="JavaScript Fundamentals"
        title="Promise Methods"
        description="Combine multiple promises with Promise.all(), race(), allSettled(), and any()"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Promise Combinator Methods
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Promise methods let you work with <strong className="text-yellow-700 dark:text-yellow-400">multiple promises at once</strong>. Run them in parallel, race them, or handle all results together!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Workflow className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Combine Promises</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Instead of handling promises one by one, use these methods to coordinate multiple async operations efficiently!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Promise.all() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Promise.all() - Wait for All</CardTitle>
              <CardDescription>All must succeed, or it fails</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">All or Nothing</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">Promise.all()</code> waits for ALL promises to succeed. If ANY fails, the whole thing fails.
              </p>
              <div className="grid gap-4">
                <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">✓ All Succeed</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns array of all results in same order
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-red-200 dark:border-red-800/30">
                  <h5 className="font-semibold mb-2 text-red-700 dark:text-red-300">✗ Any Fails</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rejects immediately with the first error
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.all() Examples"
        description="Run multiple promises in parallel"
        code={`// Basic example - all succeed
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);  // [10, 20, 30]
    console.log('Sum:', results.reduce((a, b) => a + b));  // 60
  });

// Real-world: Load multiple resources
const fetchUser = fetch('/api/user').then(r => r.json());
const fetchPosts = fetch('/api/posts').then(r => r.json());
const fetchComments = fetch('/api/comments').then(r => r.json());

Promise.all([fetchUser, fetchPosts, fetchComments])
  .then(([user, posts, comments]) => {
    console.log('All data loaded!');
    console.log('User:', user.name);
    console.log('Posts:', posts.length);
    console.log('Comments:', comments.length);
  })
  .catch(error => {
    console.log('One of the requests failed:', error);
  });

// Example with timing
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

const task1 = delay(1000, 'Task 1 done');
const task2 = delay(2000, 'Task 2 done');
const task3 = delay(1500, 'Task 3 done');

console.log('Starting all tasks...');
const start = Date.now();

Promise.all([task1, task2, task3])
  .then(results => {
    const elapsed = Date.now() - start;
    console.log('All done in', elapsed + 'ms');  // ~2000ms (longest task)
    console.log('Results:', results);
  });

// If one fails, all fail
const p1 = Promise.resolve('Success 1');
const p2 = Promise.reject('Failed!');
const p3 = Promise.resolve('Success 3');

Promise.all([p1, p2, p3])
  .then(results => {
    console.log('All succeeded:', results);  // Never runs
  })
  .catch(error => {
    console.log('Failed at:', error);  // 'Failed!'
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Promise.race() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Promise.race() - First to Finish Wins</CardTitle>
              <CardDescription>Returns as soon as first promise settles</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Speed Race</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">Promise.race()</code> resolves or rejects as soon as the FIRST promise settles (success or failure).
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const slow = delay(3000, 'Slow');
const fast = delay(1000, 'Fast');

Promise.race([slow, fast])
  .then(result => {
    console.log('Winner:', result);  // 'Fast'
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.race() Examples"
        description="First to complete wins"
        code={`function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// Basic race
const slow = delay(3000, 'Slow task');
const fast = delay(1000, 'Fast task');

Promise.race([slow, fast])
  .then(winner => {
    console.log('Winner:', winner);  // 'Fast task' after 1 second
  });

// Real-world: Timeout for API calls
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Request timeout')), timeout)
  );
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('/api/data', 5000)
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => {
    if (error.message === 'Request timeout') {
      console.log('Request took too long!');
    } else {
      console.log('Request failed:', error);
    }
  });

// Race between multiple servers
const server1 = fetch('https://api1.example.com/data');
const server2 = fetch('https://api2.example.com/data');
const server3 = fetch('https://api3.example.com/data');

Promise.race([server1, server2, server3])
  .then(response => response.json())
  .then(data => {
    console.log('Got data from fastest server:', data);
  })
  .catch(error => {
    console.log('Fastest server failed:', error);
  });

// If fastest one fails, race fails
const failFast = Promise.reject('Error!');
const succeedSlow = delay(2000, 'Success');

Promise.race([failFast, succeedSlow])
  .catch(error => {
    console.log('Race rejected:', error);  // 'Error!' immediately
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Promise.allSettled() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Promise.allSettled() - Wait for All, No Failures</CardTitle>
              <CardDescription>Returns all results, success or failure</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Never Fails</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">Promise.allSettled()</code> waits for ALL promises to complete, whether they succeed or fail. Always resolves!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`Promise.allSettled([p1, p2, p3])
  .then(results => {
    // results = [
    //   { status: 'fulfilled', value: ... },
    //   { status: 'rejected', reason: ... },
    //   { status: 'fulfilled', value: ... }
    // ]
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.allSettled() Examples"
        description="Get all results regardless of success/failure"
        code={`// Basic example
const p1 = Promise.resolve('Success 1');
const p2 = Promise.reject('Error!');
const p3 = Promise.resolve('Success 3');

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 'Success 1' },
    //   { status: 'rejected', reason: 'Error!' },
    //   { status: 'fulfilled', value: 'Success 3' }
    // ]
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1} succeeded:\`, result.value);
      } else {
        console.log(\`Promise \${index + 1} failed:\`, result.reason);
      }
    });
  });

// Real-world: Uploading multiple files
async function uploadFiles(files) {
  const uploadPromises = files.map(file => 
    fetch('/api/upload', {
      method: 'POST',
      body: file
    }).then(r => r.json())
  );
  
  const results = await Promise.allSettled(uploadPromises);
  
  const succeeded = results.filter(r => r.status === 'fulfilled');
  const failed = results.filter(r => r.status === 'rejected');
  
  console.log(\`Uploaded \${succeeded.length} files\`);
  console.log(\`Failed \${failed.length} files\`);
  
  return { succeeded, failed };
}

// Process partial results
const apis = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/invalid')  // This might fail
];

Promise.allSettled(apis)
  .then(async results => {
    for (let i = 0; i < results.length; i++) {
      if (results[i].status === 'fulfilled') {
        const data = await results[i].value.json();
        console.log(\`API \${i + 1} data:\`, data);
      } else {
        console.log(\`API \${i + 1} failed:\`, results[i].reason);
      }
    }
  });

// Filter successes
const tasks = [
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3),
  Promise.reject('error'),
  Promise.resolve(5)
];

Promise.allSettled(tasks)
  .then(results => {
    const values = results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value);
    
    console.log('Successful values:', values);  // [1, 3, 5]
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Promise.any() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Promise.any() - First Success Wins</CardTitle>
              <CardDescription>Returns when first promise succeeds</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">First Success</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">Promise.any()</code> resolves as soon as ANY promise succeeds. Ignores failures unless ALL fail.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const fail1 = Promise.reject('Error 1');
const fail2 = Promise.reject('Error 2');
const success = Promise.resolve('Success!');

Promise.any([fail1, fail2, success])
  .then(result => {
    console.log(result);  // 'Success!'
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.any() Examples"
        description="First to succeed wins"
        code={`function delay(ms, value, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(\`Error: \${value}\`);
      } else {
        resolve(value);
      }
    }, ms);
  });
}

// Basic example
const fail1 = delay(1000, 'Task 1', true);
const fail2 = delay(500, 'Task 2', true);
const success = delay(1500, 'Task 3', false);

Promise.any([fail1, fail2, success])
  .then(result => {
    console.log('First success:', result);  // 'Task 3' after 1.5 seconds
  })
  .catch(error => {
    console.log('All failed:', error);
  });

// Real-world: Try multiple CDNs
const cdn1 = fetch('https://cdn1.example.com/library.js');
const cdn2 = fetch('https://cdn2.example.com/library.js');
const cdn3 = fetch('https://cdn3.example.com/library.js');

Promise.any([cdn1, cdn2, cdn3])
  .then(response => {
    console.log('Got library from a CDN!');
    return response.text();
  })
  .then(code => {
    eval(code);  // Load the library
  })
  .catch(error => {
    console.log('All CDNs failed:', error);
  });

// First success wins, ignores later ones
const tasks = [
  delay(3000, 'Slow success'),
  delay(1000, 'Fast fail', true),
  delay(2000, 'Medium success')
];

Promise.any(tasks)
  .then(result => {
    console.log('Winner:', result);  // 'Medium success' after 2 seconds
  });

// Only fails if ALL fail
const allFail = [
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.reject('Error 3')
];

Promise.any(allFail)
  .catch(error => {
    console.log('All promises failed');
    console.log(error);  // AggregateError: All promises were rejected
  });

// Real-world: Fallback data sources
async function getUserData(userId) {
  const sources = [
    fetch(\`/api/cache/user/\${userId}\`),      // Try cache first
    fetch(\`/api/database/user/\${userId}\`),   // Then database
    fetch(\`/api/backup/user/\${userId}\`)      // Finally backup
  ];
  
  try {
    const response = await Promise.any(sources);
    return await response.json();
  } catch (error) {
    throw new Error('Could not load user from any source');
  }
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Timer className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Quick Comparison</CardTitle>
              <CardDescription>Which method to use when?</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Choose the Right Method</h4>
            </div>
            <div className="p-6 space-y-3">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.all()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Need ALL results, fail if ANY fails
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.race()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Need FIRST to finish (success or failure)
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.allSettled()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Need ALL results (never fails)
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.any()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Need FIRST success (ignore failures)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>all()</strong> when you need all results</li>
                <li>• Use <strong>race()</strong> for timeouts</li>
                <li>• Use <strong>allSettled()</strong> for partial failures</li>
                <li>• Use <strong>any()</strong> for fallbacks</li>
                <li>• Always handle errors</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use <strong>all()</strong> if one can fail</li>
                <li>• Don't confuse <strong>race()</strong> with <strong>any()</strong></li>
                <li>• Don't forget error handling</li>
                <li>• Don't await in loops (use methods instead)</li>
                <li>• Don't nest unnecessarily</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Reference</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>all()</strong> - All succeed or fail fast</div>
              <div><strong>race()</strong> - First to finish (any status)</div>
              <div><strong>allSettled()</strong> - All finish (never fails)</div>
              <div><strong>any()</strong> - First to succeed (ignore failures)</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Combine with <strong>async/await</strong> for even cleaner code: <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">const results = await Promise.all([...])</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

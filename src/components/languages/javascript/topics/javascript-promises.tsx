'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Clock,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Timer,
  Loader2,
  AlertTriangle,
} from 'lucide-react';

export default function JavaScriptPromises() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript Fundamentals"
        title="Promises"
        description="Handle asynchronous operations with promises - a better way than callbacks"
        colorTheme="yellow"
      />

      {/* What are Promises */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Promises?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A Promise is an object representing the <strong className="text-yellow-700 dark:text-yellow-400">eventual completion or failure</strong> of an async operation. It's like a receipt - you get it immediately, but the result comes later!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Timer className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Restaurant Order Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              When you order food, you get a receipt (Promise). The food isn't ready yet, but you have a <strong>promise</strong> it will come. When ready, you either get your food (resolved) or get told it's out of stock (rejected)!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Promise States */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Three Promise States</CardTitle>
              <CardDescription>Promises can be pending, fulfilled, or rejected</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Promise Lifecycle</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-orange-200 dark:border-orange-800/30">
                <div className="flex items-center gap-3 mb-2">
                  <Loader2 className="w-5 h-5 text-orange-600 dark:text-orange-400 animate-spin" />
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300">Pending</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Initial state - operation hasn't completed yet
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-green-200 dark:border-green-800/30">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h5 className="font-semibold text-green-700 dark:text-green-300">Fulfilled (Resolved)</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Operation completed successfully with a result
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-red-200 dark:border-red-800/30">
                <div className="flex items-center gap-3 mb-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h5 className="font-semibold text-red-700 dark:text-red-300">Rejected</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Operation failed with an error
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creating a Promise */}
      <CodeSnippet
        title="Creating a Promise"
        description="Use new Promise() with resolve and reject"
        code={`// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  // Do async operation
  const success = true;
  
  if (success) {
    resolve('Operation successful!');  // Fulfilled
  } else {
    reject('Operation failed!');  // Rejected
  }
});

// Use the Promise
myPromise
  .then(result => {
    console.log(result);  // 'Operation successful!'
  })
  .catch(error => {
    console.log(error);  // Only if rejected
  });

// Real example: Simulating API call
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { id: 1, name: 'Alice' };
    resolve(user);  // Success after 2 seconds
  }, 2000);
});

fetchUser.then(user => {
  console.log('User:', user);  // After 2 seconds
});`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* then() and catch() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Handling Promises: then() & catch()</CardTitle>
              <CardDescription>React to success or failure</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Promise Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">.then() - Handle Success</h5>
                <code className="text-sm font-mono">promise.then(result ={'>'} /* use result */)</code>
                <p className="text-xs text-gray-500 mt-2">Runs when promise is fulfilled</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-300">.catch() - Handle Error</h5>
                <code className="text-sm font-mono">promise.catch(error ={'>'} /* handle error */)</code>
                <p className="text-xs text-gray-500 mt-2">Runs when promise is rejected</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">.finally() - Always Runs</h5>
                <code className="text-sm font-mono">promise.finally(() ={'>'} /* cleanup */)</code>
                <p className="text-xs text-gray-500 mt-2">Runs regardless of success/failure</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="then(), catch(), finally()"
        description="Complete promise handling"
        code={`const fetchData = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  setTimeout(() => {
    if (success) {
      resolve({ data: 'User data loaded' });
    } else {
      reject('Failed to load data');
    }
  }, 1000);
});

fetchData
  .then(result => {
    console.log('Success:', result.data);
    return result;  // Can chain more .then()
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Operation complete (success or fail)');
  });

// Real-world: Fetching from API
fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(data => {
    console.log('User:', data);
  })
  .catch(error => {
    console.log('API Error:', error);
  })
  .finally(() => {
    console.log('Request finished');
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Promise Chaining */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Promise Chaining</CardTitle>
              <CardDescription>Chain multiple async operations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Sequential Operations</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Return a value or promise from <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">then()</code> to chain operations
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`fetchUser()
  .then(user => {
    console.log('Got user:', user);
    return fetchPosts(user.id);  // Return new promise
  })
  .then(posts => {
    console.log('Got posts:', posts);
    return fetchComments(posts[0].id);
  })
  .then(comments => {
    console.log('Got comments:', comments);
  })
  .catch(error => {
    console.log('Any error:', error);
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise Chaining Examples"
        description="Sequential async operations"
        code={`// Example 1: Data processing pipeline
function getUserId() {
  return Promise.resolve(123);
}

function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: id, name: 'Alice', role: 'admin' });
    }, 1000);
  });
}

function getUserPermissions(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['read', 'write', 'delete']);
    }, 1000);
  });
}

// Chain them together
getUserId()
  .then(id => {
    console.log('Step 1: Got ID:', id);
    return getUser(id);
  })
  .then(user => {
    console.log('Step 2: Got user:', user.name);
    return getUserPermissions(user);
  })
  .then(permissions => {
    console.log('Step 3: Got permissions:', permissions);
  })
  .catch(error => {
    console.log('Error at any step:', error);
  });

// Example 2: API chain
fetch('/api/user/1')
  .then(response => response.json())
  .then(user => {
    console.log('User:', user.name);
    // Fetch user's posts
    return fetch(\`/api/user/\${user.id}/posts\`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log('Posts count:', posts.length);
    // Process first post
    return posts[0];
  })
  .then(firstPost => {
    console.log('First post:', firstPost.title);
  })
  .catch(error => {
    console.log('Failed:', error);
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Promise.all() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Timer className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Promise.all() - Run in Parallel</CardTitle>
              <CardDescription>Wait for multiple promises to complete</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">All or Nothing</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">Promise.all()</code> waits for ALL promises to succeed. If ANY fails, the whole thing fails.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);  // [10, 20, 30]
  });

// If any fails, all fails
const p1 = Promise.resolve('Success 1');
const p2 = Promise.reject('Failed!');
const p3 = Promise.resolve('Success 3');

Promise.all([p1, p2, p3])
  .catch(error => {
    console.log(error);  // 'Failed!'
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.all() Examples"
        description="Parallel operations"
        code={`// Fetch multiple users at once
const user1 = fetch('/api/user/1').then(r => r.json());
const user2 = fetch('/api/user/2').then(r => r.json());
const user3 = fetch('/api/user/3').then(r => r.json());

Promise.all([user1, user2, user3])
  .then(users => {
    console.log('All users loaded:', users);
    // users is an array: [user1Data, user2Data, user3Data]
  })
  .catch(error => {
    console.log('One of the requests failed:', error);
  });

// Real-world: Load multiple resources
function loadDashboard() {
  const userPromise = fetch('/api/user');
  const statsPromise = fetch('/api/stats');
  const notificationsPromise = fetch('/api/notifications');
  
  Promise.all([userPromise, statsPromise, notificationsPromise])
    .then(async ([userRes, statsRes, notifsRes]) => {
      const user = await userRes.json();
      const stats = await statsRes.json();
      const notifs = await notifsRes.json();
      
      console.log('Dashboard loaded:', { user, stats, notifs });
    })
    .catch(error => {
      console.log('Failed to load dashboard:', error);
    });
}

// Simulated parallel operations
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

const task1 = delay(1000, 'Task 1 done');
const task2 = delay(2000, 'Task 2 done');
const task3 = delay(1500, 'Task 3 done');

console.log('Starting all tasks...');
Promise.all([task1, task2, task3])
  .then(results => {
    console.log('All done!', results);
    // Completes after 2000ms (longest task)
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Other Promise Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <AlertTriangle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Other Promise Methods</CardTitle>
              <CardDescription>race(), allSettled(), any()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Additional Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.race()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Returns as soon as <strong>first promise</strong> settles (success or fail)
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.allSettled()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Waits for ALL, returns results even if some failed
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Promise.any()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Returns when <strong>first promise succeeds</strong>, ignores failures
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Other Promise Methods"
        description="race(), allSettled(), any()"
        code={`// Promise.race() - First to finish wins
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 3000));
const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 1000));

Promise.race([slow, fast])
  .then(result => {
    console.log(result);  // 'Fast' (after 1 second)
  });

// Use case: Timeout
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject('Timeout!'), timeout)
  );
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

// Promise.allSettled() - Get all results
const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failed');
const p3 = Promise.resolve('Another success');

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 'Success' },
    //   { status: 'rejected', reason: 'Failed' },
    //   { status: 'fulfilled', value: 'Another success' }
    // ]
  });

// Promise.any() - First success wins
const fail1 = Promise.reject('Error 1');
const fail2 = Promise.reject('Error 2');
const success = new Promise(resolve => 
  setTimeout(() => resolve('Finally succeeded!'), 1000)
);

Promise.any([fail1, fail2, success])
  .then(result => {
    console.log(result);  // 'Finally succeeded!'
  })
  .catch(error => {
    console.log('All failed:', error);
  });`}
        language="javascript"
        colorTheme="yellow"
      />

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
                <li>• Always use <strong>.catch()</strong> for errors</li>
                <li>• Chain promises for sequential operations</li>
                <li>• Use <strong>Promise.all()</strong> for parallel</li>
                <li>• Return promises from <strong>.then()</strong> for chaining</li>
                <li>• Use <strong>.finally()</strong> for cleanup</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't forget <strong>.catch()</strong> (unhandled rejections!)</li>
                <li>• Don't nest promises (use chaining)</li>
                <li>• Don't mix callbacks and promises</li>
                <li>• Don't forget to <strong>return</strong> in chains</li>
                <li>• Don't create unnecessary promises</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Promise Cheat Sheet</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>.then()</strong> - Handle success</div>
              <div><strong>.catch()</strong> - Handle error</div>
              <div><strong>.finally()</strong> - Always runs</div>
              <div><strong>Promise.all()</strong> - Wait for all (fail if any fails)</div>
              <div><strong>Promise.race()</strong> - First to finish</div>
              <div><strong>Promise.allSettled()</strong> - Wait for all (never fails)</div>
              <div><strong>Promise.any()</strong> - First to succeed</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern Alternative</AlertTitle>
            <AlertDescription className="text-base">
              While promises are powerful, <strong>async/await</strong> provides even cleaner syntax for the same functionality. Learn that next!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

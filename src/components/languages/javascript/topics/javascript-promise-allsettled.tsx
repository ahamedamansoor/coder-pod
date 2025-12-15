'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, CheckCheck } from 'lucide-react';

export default function JavaScriptPromiseAllSettled() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={CheckCheck}
        category="Modern JavaScript (ES2020)"
        title="Promise.allSettled()"
        description="Wait for all promises - don't stop on failures!"
        colorTheme="amber"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/30 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 text-white shadow-xl">
              <CheckCheck className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                What is Promise.allSettled()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded">Promise.allSettled()</code> is like a 
                <strong className="text-amber-700 dark:text-amber-400"> patient waiter</strong>! 
                Unlike <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded">Promise.all()</code> which stops at the first rejection, 
                allSettled() <strong className="text-orange-700 dark:text-orange-400">waits for ALL promises</strong> to complete - whether they 
                succeed or fail - and gives you all the results!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Problem with Promise.all()</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">Promise.all()</code> rejects immediately 
              when ANY promise fails, so you lose results from successful promises. allSettled() gives you <strong>all results</strong>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Compare with Promise.all()"
        description="See the difference in behavior"
        language="javascript"
        colorTheme="amber"
        code={`// Promises with mixed results
const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.reject('Failed!');
const promise3 = Promise.resolve('Success 3');

// Promise.all() - stops at first rejection
Promise.all([promise1, promise2, promise3])
  .then(results => console.log('All:', results))
  .catch(error => console.log('All Error:', error));
// All Error: Failed! ❌
// Lost Success 1 and Success 3!


// Promise.allSettled() - waits for all
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log('AllSettled:', results);
  });
// AllSettled: [
//   { status: 'fulfilled', value: 'Success 1' },
//   { status: 'rejected', reason: 'Failed!' },
//   { status: 'fulfilled', value: 'Success 3' }
// ] ✅ Got all results!


// Filter successful results
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    const successful = results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value);
    
    console.log('Successful:', successful);
    // ['Success 1', 'Success 3']
    
    const failed = results
      .filter(r => r.status === 'rejected')
      .map(r => r.reason);
    
    console.log('Failed:', failed);
    // ['Failed!']
  });`}
      />

      <CodeSnippet
        title="Example 2: Real-World - Multiple API Calls"
        description="Fetch from multiple APIs, handle partial failures"
        language="javascript"
        colorTheme="orange"
        code={`// Fetch data from multiple sources
async function fetchMultipleSources() {
  const urls = [
    'https://api.github.com/users/octocat',
    'https://invalid-url.com/data',  // Will fail
    'https://api.github.com/users/torvalds'
  ];
  
  const promises = urls.map(url => 
    fetch(url).then(res => res.json())
  );
  
  const results = await Promise.allSettled(promises);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`URL \${index}: Success\`, result.value.login);
    } else {
      console.log(\`URL \${index}: Failed\`, result.reason.message);
    }
  });
}

fetchMultipleSources();
// URL 0: Success octocat
// URL 1: Failed fetch failed
// URL 2: Success torvalds


// Process partial results
async function getUserData(userIds) {
  const promises = userIds.map(id => 
    fetch(\`/api/users/\${id}\`).then(r => r.json())
  );
  
  const results = await Promise.allSettled(promises);
  
  const data = {
    successful: results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value),
    failed: results
      .filter(r => r.status === 'rejected')
      .map((r, i) => ({ id: userIds[i], error: r.reason }))
  };
  
  console.log(\`Loaded \${data.successful.length} users\`);
  console.log(\`Failed to load \${data.failed.length} users\`);
  
  return data;
}`}
      />

      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Waits for All</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Never rejects - waits for every promise to settle
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">All Results</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns array with status and value/reason for each
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Fulfilled</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">{`{status: 'fulfilled', value}`}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rejected</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">{`{status: 'rejected', reason}`}</code>
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

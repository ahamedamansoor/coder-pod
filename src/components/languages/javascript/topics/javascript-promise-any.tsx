'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Zap } from 'lucide-react';

export default function JavaScriptPromiseAny() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="Modern JavaScript (ES2021)"
        title="Promise.any()"
        description="Get the first success - ignore failures!"
        colorTheme="yellow"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50/80 via-amber-50/50 to-orange-50/30 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-white shadow-xl">
              <Zap className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                What is Promise.any()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">Promise.any()</code> is the 
                <strong className="text-yellow-700 dark:text-yellow-400"> optimistic one</strong>! 
                It returns the <strong className="text-amber-700 dark:text-amber-400">first successful promise</strong> and 
                ignores all rejections. Only fails if <strong className="text-orange-700 dark:text-orange-400">ALL promises reject</strong>. 
                Perfect for "try multiple sources, use whoever responds first" scenarios!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Opposite of Promise.all()</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">Promise.all()</code> needs ALL to succeed. 
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">Promise.any()</code> needs just ONE to succeed!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: First Success Wins"
        description="Get result from first successful promise"
        language="javascript"
        colorTheme="yellow"
        code={`// Multiple promises with mixed results
const p1 = Promise.reject('Error 1');
const p2 = Promise.resolve('Success!');
const p3 = Promise.reject('Error 3');

Promise.any([p1, p2, p3])
  .then(result => console.log('Result:', result))
  .catch(error => console.log('All failed:', error));
// Result: Success!
// First successful promise wins! ✅


// Simulated API calls with different speeds
function fetchFromServer(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(\`\${name} failed\`);
      } else {
        resolve(\`Data from \${name}\`);
      }
    }, delay);
  });
}

const servers = [
  fetchFromServer('Server 1', 3000, true),   // Slow, fails
  fetchFromServer('Server 2', 1000, false),  // Fast, succeeds ✅
  fetchFromServer('Server 3', 2000, false)   // Medium, succeeds
];

Promise.any(servers)
  .then(data => console.log('Fastest:', data))
  .catch(err => console.log('All failed'));
// Fastest: Data from Server 2
// Server 2 was fastest AND succeeded!


// All rejections case
const allFail = [
  Promise.reject('Error A'),
  Promise.reject('Error B'),
  Promise.reject('Error C')
];

Promise.any(allFail)
  .catch(error => {
    console.log('Type:', error.name);     // AggregateError
    console.log('Errors:', error.errors); // ['Error A', 'Error B', 'Error C']
  });`}
      />

      <CodeSnippet
        title="Example 2: Real-World - Multiple Data Sources"
        description="Fetch from fastest available source"
        language="javascript"
        colorTheme="amber"
        code={`// Fetch from multiple mirrors/CDNs
async function fetchFromFastestSource(url) {
  const sources = [
    fetch(\`https://cdn1.example.com\${url}\`),
    fetch(\`https://cdn2.example.com\${url}\`),
    fetch(\`https://cdn3.example.com\${url}\`)
  ];
  
  try {
    const response = await Promise.any(sources);
    return await response.json();
  } catch (error) {
    throw new Error('All sources failed');
  }
}


// Multiple API fallbacks
async function getUserData(userId) {
  const apis = [
    fetch(\`https://api-primary.com/users/\${userId}\`),
    fetch(\`https://api-backup1.com/users/\${userId}\`),
    fetch(\`https://api-backup2.com/users/\${userId}\`)
  ];
  
  const response = await Promise.any(
    apis.map(p => p.then(r => {
      if (!r.ok) throw new Error('API error');
      return r.json();
    }))
  );
  
  return response;
}


// Try multiple authentication methods
async function authenticate(credentials) {
  const methods = [
    authenticateWithOAuth(credentials),
    authenticateWithSAML(credentials),
    authenticateWithBasic(credentials)
  ];
  
  try {
    const result = await Promise.any(methods);
    console.log('Authenticated successfully');
    return result;
  } catch (error) {
    console.log('All authentication methods failed');
    throw error;
  }
}


// Database read replicas
async function queryDatabase(sql) {
  const replicas = [
    queryReplica('replica-1', sql),
    queryReplica('replica-2', sql),
    queryReplica('replica-3', sql)
  ];
  
  return Promise.any(replicas);
}

function queryReplica(name, sql) {
  console.log(\`Querying \${name}...\`);
  return new Promise((resolve, reject) => {
    // Simulate query
    setTimeout(() => {
      Math.random() > 0.5 
        ? resolve({ data: 'results', from: name })
        : reject(\`\${name} timeout\`);
    }, Math.random() * 2000);
  });
}`}
      />

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">First Success</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns value from first fulfilled promise
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Ignores Rejections</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Failures don't matter until all fail
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">AggregateError</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If all fail, throws error with all rejection reasons
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Multiple sources, fallbacks, fastest wins
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

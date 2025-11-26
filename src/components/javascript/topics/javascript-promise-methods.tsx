'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Workflow,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  CheckCheck,
  Zap,
  AlertTriangle,
  Loader2,
  Trophy,
  Timer,
  Network,
  GitBranch,
  TrendingUp,
  Target,
  ShieldCheck,
} from 'lucide-react';

interface JavaScriptPromiseMethodsProps {
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
  <title>Promise Methods Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
      max-width: 600px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px; 
    }
    p { 
      color: #64748b; 
      font-size: 18px; 
      margin-bottom: 24px;
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      font-family: monospace; 
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Promise Methods</h1>
    <p>Open the browser console to see promise combinators in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🚀 Promise Methods Demo\\n");

// Helper: Create delayed promise
function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error(\`Failed: \${value}\`));
      else resolve(value);
    }, ms);
  });
}

// 1. Promise.all() - All must succeed
console.log("1. PROMISE.ALL:");
Promise.all([
  delay(1000, 'User data'),
  delay(800, 'Posts'),
  delay(1200, 'Comments')
]).then(results => {
  console.log("✅ All succeeded:", results);
}).catch(error => {
  console.log("❌ One failed:", error.message);
});

// 2. Promise.race() - First to finish
console.log("\\n2. PROMISE.RACE:");
Promise.race([
  delay(1000, 'Slow API'),
  delay(500, 'Fast API'),
  delay(1500, 'Slower API')
]).then(result => {
  console.log("🏁 Winner:", result);
});

// 3. Promise.allSettled() - Wait for all
console.log("\\n3. PROMISE.ALLSETTLED:");
Promise.allSettled([
  delay(800, 'Success 1'),
  delay(600, 'Fail 1', true),
  delay(1000, 'Success 2')
]).then(results => {
  console.log("📊 All settled:");
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(\`  [\${i}] ✅\`, result.value);
    } else {
      console.log(\`  [\${i}] ❌\`, result.reason.message);
    }
  });
});

// 4. Promise.any() - First success
console.log("\\n4. PROMISE.ANY:");
Promise.any([
  delay(1000, 'API 1', true),
  delay(800, 'API 2'),
  delay(1200, 'API 3')
]).then(result => {
  console.log("🎯 First success:", result);
}).catch(error => {
  console.log("❌ All failed:", error);
});

console.log("\\n💡 Watch promises resolve at different times!")`;

export default function JavaScriptPromiseMethods({ onOpenWebPlayground }: JavaScriptPromiseMethodsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Workflow}
        category="JavaScript · Asynchronous Programming"
        title="Promise Methods"
        description="Master Promise combinators for handling multiple asynchronous operations - Promise.all, Promise.race, Promise.allSettled, and Promise.any."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Promise Methods?
          </CardTitle>
          <CardDescription className="text-base">
            Promise methods (also called combinators) are static methods that handle multiple promises simultaneously
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 3-Column Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Parallel Execution</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Run multiple async operations at the same time instead of sequentially
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">10x Faster</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Different Strategies</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Choose the right combinator based on your requirements
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">4 Methods</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Production Ready</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Battle-tested patterns used in real-world applications
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Essential</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Use Promise Methods?</AlertTitle>
            <AlertDescription>
              When you need to fetch data from multiple APIs, load different resources, or run independent operations, promise methods let you do it all at once. This dramatically improves performance and simplifies code compared to sequential promise chains.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quick Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Quick Comparison
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right method based on your use case
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-800">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Resolves When</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Rejects When</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-900">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400 font-semibold">.all()</td>
                  <td className="py-3 px-4 text-muted-foreground">All promises fulfill</td>
                  <td className="py-3 px-4 text-muted-foreground">Any promise rejects</td>
                  <td className="py-3 px-4 text-muted-foreground">All data required</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-900">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400 font-semibold">.race()</td>
                  <td className="py-3 px-4 text-muted-foreground">First promise settles</td>
                  <td className="py-3 px-4 text-muted-foreground">First promise rejects</td>
                  <td className="py-3 px-4 text-muted-foreground">Fastest wins</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-900">
                  <td className="py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">.allSettled()</td>
                  <td className="py-3 px-4 text-muted-foreground">All promises settle</td>
                  <td className="py-3 px-4 text-muted-foreground">Never rejects</td>
                  <td className="py-3 px-4 text-muted-foreground">Need all results</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-amber-600 dark:text-amber-400 font-semibold">.any()</td>
                  <td className="py-3 px-4 text-muted-foreground">First promise fulfills</td>
                  <td className="py-3 px-4 text-muted-foreground">All promises reject</td>
                  <td className="py-3 px-4 text-muted-foreground">First success wins</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Promise.all() Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCheck className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promise.all() - All Must Succeed
          </CardTitle>
          <CardDescription className="text-base">
            Waits for all promises to fulfill. Rejects immediately if any promise rejects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Behavior</AlertTitle>
            <AlertDescription>
              <strong>Success:</strong> Returns array of all fulfilled values in order.<br/>
              <strong>Failure:</strong> Rejects with the first rejection reason, ignoring other promises.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {/* Basic Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Syntax</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Create multiple promises
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

// Wait for all to complete
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
    
    // Results are in the same order as input
    const [first, second, third] = results;
    console.log("Sum:", first + second + third);
  });`}</pre>
              <SnippetOutput lines={[
                '[10, 20, 30]',
                'Sum: 60'
              ]} />
            </div>

            {/* Real-World Example 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Real-World: Dashboard Data Loading
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Load all dashboard data at once - fail if any critical data is unavailable
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Fetch multiple resources in parallel
function loadDashboard() {
  const startTime = Date.now();
  
  return Promise.all([
    fetch('/api/user/profile'),
    fetch('/api/analytics/stats'),
    fetch('/api/notifications/unread'),
    fetch('/api/tasks/pending')
  ])
  .then(responses => {
    // Check all responses
    responses.forEach((res, i) => {
      if (!res.ok) {
        throw new Error(\`Request \${i} failed\`);
      }
    });
    
    // Parse all JSON in parallel
    return Promise.all(responses.map(r => r.json()));
  })
  .then(([profile, stats, notifications, tasks]) => {
    const loadTime = Date.now() - startTime;
    console.log(\`✅ Loaded in \${loadTime}ms\`);
    
    return { profile, stats, notifications, tasks };
  })
  .catch(error => {
    console.error("❌ Dashboard load failed:", error);
    throw error;
  });
}

// Usage
loadDashboard().then(data => {
  renderDashboard(data);
});

// Performance comparison:
// Sequential: 2000ms (500ms × 4 requests)
// Parallel: 500ms (all at once)
// 🚀 4x faster!`}</pre>
              <SnippetOutput lines={[
                '✅ Loaded in 512ms',
                '',
                '// If any request fails:',
                '❌ Dashboard load failed: Error: Request 2 failed'
              ]} />
            </div>

            {/* Real-World Example 2 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Real-World: Batch File Upload
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Upload multiple files simultaneously
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function uploadFiles(files) {
  console.log(\`Uploading \${files.length} files...\`);
  
  // Create upload promise for each file
  const uploads = files.map(file => {
    const formData = new FormData();
    formData.append('file', file);
    
    return fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) throw new Error(\`Upload failed: \${file.name}\`);
      return res.json();
    })
    .then(data => ({
      name: file.name,
      size: file.size,
      url: data.url,
      success: true
    }));
  });
  
  // Wait for all uploads
  return Promise.all(uploads)
    .then(results => {
      console.log(\`✅ All \${results.length} files uploaded\`);
      
      results.forEach(file => {
        console.log(\`  - \${file.name}: \${file.url}\`);
      });
      
      return results;
    })
    .catch(error => {
      console.error("❌ Upload failed:", error);
      // If any file fails, all fail
      throw error;
    });
}

// Usage
const fileInput = document.querySelector('#files');
fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  
  uploadFiles(files)
    .then(results => {
      showSuccessMessage(\`\${results.length} files uploaded\`);
    })
    .catch(error => {
      showErrorMessage("Upload failed");
    });
});`}</pre>
              <SnippetOutput lines={[
                'Uploading 3 files...',
                '✅ All 3 files uploaded',
                '  - image1.jpg: https://cdn.com/abc123',
                '  - document.pdf: https://cdn.com/def456',
                '  - video.mp4: https://cdn.com/ghi789'
              ]} />
            </div>

            {/* Fail-Fast Warning */}
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important: Fail-Fast Behavior</AlertTitle>
              <AlertDescription>
                <code>Promise.all()</code> rejects <strong>immediately</strong> when any promise rejects. Other promises continue running but their results are ignored. If you need all results regardless of failures, use <code>Promise.allSettled()</code>.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Promise.race() Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Promise.race() - First to Finish Wins
          </CardTitle>
          <CardDescription className="text-base">
            Returns the result of the first promise to settle (fulfill or reject)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Behavior</AlertTitle>
            <AlertDescription>
              Settles with the <strong>first</strong> promise to complete, whether it fulfills or rejects. Other promises keep running but their results are ignored.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {/* Basic Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Syntax</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Create promises with different delays
const slow = new Promise(resolve => {
  setTimeout(() => resolve("Slow: 3s"), 3000);
});

const fast = new Promise(resolve => {
  setTimeout(() => resolve("Fast: 1s"), 1000);
});

const medium = new Promise(resolve => {
  setTimeout(() => resolve("Medium: 2s"), 2000);
});

// Race between them
Promise.race([slow, fast, medium])
  .then(result => {
    console.log("Winner:", result);
  });`}</pre>
              <SnippetOutput lines={[
                '// After 1 second:',
                'Winner: Fast: 1s',
                '',
                '// The other promises (Slow and Medium) are ignored'
              ]} />
            </div>

            {/* Real-World Example 1 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Real-World: Request Timeout
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Cancel slow requests after a time limit
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function fetchWithTimeout(url, timeoutMs = 5000) {
  // Create timeout promise
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(\`Timeout after \${timeoutMs}ms\`));
    }, timeoutMs);
  });
  
  // Race between fetch and timeout
  return Promise.race([fetch(url), timeout]);
}

// Usage
fetchWithTimeout('/api/slow-endpoint', 3000)
  .then(response => response.json())
  .then(data => {
    console.log("✅ Data received:", data);
  })
  .catch(error => {
    if (error.message.includes('Timeout')) {
      console.error("❌ Request timed out");
      showTimeoutMessage();
    } else {
      console.error("❌ Request failed:", error);
    }
  });

// Advanced: Timeout with retry
function fetchWithTimeoutAndRetry(url, attempts = 3) {
  function attempt(n) {
    console.log(\`Attempt \${n}/\${attempts}\`);
    
    return fetchWithTimeout(url, 3000)
      .catch(error => {
        if (n < attempts && error.message.includes('Timeout')) {
          console.log("Retrying...");
          return attempt(n + 1);
        }
        throw error;
      });
  }
  
  return attempt(1);
}`}</pre>
              <SnippetOutput lines={[
                '// If request completes in time:',
                '✅ Data received: { success: true }',
                '',
                '// If request times out:',
                '❌ Request timed out',
                '',
                '// With retry:',
                'Attempt 1/3',
                '❌ Request timed out',
                'Retrying...',
                'Attempt 2/3',
                '✅ Data received: { success: true }'
              ]} />
            </div>

            {/* Real-World Example 2 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Real-World: Fastest CDN Selection
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Load resource from the fastest available CDN
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function loadFromFastestCDN(filename) {
  const cdnUrls = [
    \`https://cdn1.example.com/\${filename}\`,
    \`https://cdn2.example.com/\${filename}\`,
    \`https://cdn3.example.com/\${filename}\`
  ];
  
  console.log("Racing CDNs...");
  const startTime = Date.now();
  
  // Race all CDNs
  return Promise.race(
    cdnUrls.map(url => 
      fetch(url).then(res => {
        if (!res.ok) throw new Error(\`CDN failed\`);
        return res;
      })
    )
  )
  .then(response => {
    const loadTime = Date.now() - startTime;
    console.log(\`✅ Loaded in \${loadTime}ms\`);
    return response;
  });
}

// Usage
loadFromFastestCDN('app.bundle.js')
  .then(res => res.text())
  .then(scriptContent => {
    eval(scriptContent);
    console.log("Script loaded!");
  })
  .catch(error => {
    console.error("All CDNs failed:", error);
  });`}</pre>
              <SnippetOutput lines={[
                'Racing CDNs...',
                '✅ Loaded in 287ms',
                'Script loaded!',
                '',
                '// CDN2 responded fastest',
                '// Other CDNs may still be loading but results ignored'
              ]} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promise.allSettled() Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Promise.allSettled() - Wait for All Results
          </CardTitle>
          <CardDescription className="text-base">
            Waits for all promises to settle (fulfill or reject). Never rejects. (ES2020)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Behavior</AlertTitle>
            <AlertDescription>
              Always fulfills with an array of result objects. Each object has <code>status</code> ('fulfilled' or 'rejected') and either <code>value</code> or <code>reason</code>.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {/* Basic Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Syntax</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Mix of successful and failed promises
const promises = [
  Promise.resolve('Success 1'),
  Promise.reject('Error 1'),
  Promise.resolve('Success 2'),
  Promise.reject('Error 2')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, i) => {
      if (result.status === 'fulfilled') {
        console.log(\`[\${i}] ✅\`, result.value);
      } else {
        console.log(\`[\${i}] ❌\`, result.reason);
      }
    });
  });`}</pre>
              <SnippetOutput lines={[
                '[0] ✅ Success 1',
                '[1] ❌ Error 1',
                '[2] ✅ Success 2',
                '[3] ❌ Error 2',
                '',
                '// Note: Never rejects - all results are returned'
              ]} />
              <Alert className="mt-3">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Result Object Structure</AlertTitle>
                <AlertDescription>
                  <code>{`{ status: 'fulfilled', value: ... }`}</code><br/>
                  <code>{`{ status: 'rejected', reason: ... }`}</code>
                </AlertDescription>
              </Alert>
            </div>

            {/* Real-World Example */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Real-World: Service Health Check
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Monitor multiple services and report their status
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function checkAllServices() {
  const services = [
    { name: 'API', url: '/health/api' },
    { name: 'Database', url: '/health/db' },
    { name: 'Cache', url: '/health/cache' }
  ];
  
  const checks = services.map(service => 
    fetch(service.url)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => ({ service: service.name, ...data }))
  );
  
  return Promise.allSettled(checks)
    .then(results => {
      const status = { healthy: [], unhealthy: [] };
      
      results.forEach((result, i) => {
        const serviceName = services[i].name;
        
        if (result.status === 'fulfilled') {
          status.healthy.push({
            name: serviceName,
            ...result.value
          });
        } else {
          status.unhealthy.push({
            name: serviceName,
            error: 'Unreachable'
          });
        }
      });
      
      const totalServices = services.length;
      const healthyCount = status.healthy.length;
      const healthPercentage = (healthyCount / totalServices) * 100;
      
      status.overall = healthPercentage === 100 ? 'healthy' : 
                       healthPercentage >= 50 ? 'degraded' : 'unhealthy';
      
      return status;
    });
}

// Usage
checkAllServices().then(status => {
  console.log(\`System Health: \${status.overall}\`);
  console.log(\`✅ Healthy: \${status.healthy.length}\`);
  console.log(\`❌ Unhealthy: \${status.unhealthy.length}\`);
});`}</pre>
              <SnippetOutput lines={[
                'System Health: degraded',
                '✅ Healthy: 2',
                '❌ Unhealthy: 1',
                '',
                '// Detailed results:',
                '// Healthy: API, Cache',
                '// Unhealthy: Database (Unreachable)'
              ]} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promise.any() Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Promise.any() - First Success Wins
          </CardTitle>
          <CardDescription className="text-base">
            Returns the first fulfilled promise. Rejects only if all promises reject. (ES2021)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Behavior</AlertTitle>
            <AlertDescription>
              <strong>Success:</strong> Resolves with the first fulfilled value, ignoring rejections.<br/>
              <strong>Failure:</strong> Rejects with <code>AggregateError</code> only if <strong>all</strong> promises reject.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {/* Basic Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Syntax</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// First success wins, failures ignored
const promises = [
  Promise.reject('Error 1'),
  Promise.resolve('Success 1'),
  Promise.reject('Error 2'),
  Promise.resolve('Success 2')
];

Promise.any(promises)
  .then(result => {
    console.log("First success:", result);
  });

// If all reject:
Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2')
])
.catch(error => {
  console.log(error.name);
  console.log(error.errors);
});`}</pre>
              <SnippetOutput lines={[
                'First success: Success 1',
                '',
                '// Rejections are ignored until a promise fulfills',
                '',
                '// If all reject:',
                'AggregateError',
                "['Error 1', 'Error 2']"
              ]} />
            </div>

            {/* Real-World Example */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Loader2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Real-World: API Fallback Strategy
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Try multiple endpoints, use the first one that succeeds
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function fetchWithFallbacks(endpoints) {
  console.log(\`Trying \${endpoints.length} endpoints...\`);
  
  const attempts = endpoints.map((endpoint, i) => 
    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error(\`Endpoint \${i + 1} failed\`);
        console.log(\`✅ Endpoint \${i + 1} succeeded\`);
        return res.json();
      })
      .catch(error => {
        console.log(\`❌ Endpoint \${i + 1}: \${error.message}\`);
        throw error;
      })
  );
  
  return Promise.any(attempts)
    .catch(aggregateError => {
      console.error("All endpoints failed");
      throw new Error("Service unavailable");
    });
}

// Usage
const userDataEndpoints = [
  'https://api-primary.example.com/user/123',
  'https://api-backup.example.com/user/123',
  'https://api-cache.example.com/user/123'
];

fetchWithFallbacks(userDataEndpoints)
  .then(userData => {
    console.log("User data:", userData);
  })
  .catch(error => {
    showErrorMessage("Unable to load user data");
  });`}</pre>
              <SnippetOutput lines={[
                'Trying 3 endpoints...',
                '❌ Endpoint 1: Error: Endpoint 1 failed',
                '✅ Endpoint 2 succeeded',
                'User data: { id: 123, name: "Alice", email: "alice@example.com" }',
                '',
                '// Note: Endpoint 3 never finishes - result already received'
              ]} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Best Practices & Decision Guide
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right promise method for your use case
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This ✅
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use <code>.all()</code> when ALL results are required</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use <code>.race()</code> for timeouts and fastest response</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use <code>.allSettled()</code> for health checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use <code>.any()</code> for fallback strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Always handle rejections with <code>.catch()</code></span>
                </li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use <code>.all()</code> if partial success is okay</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't confuse <code>.race()</code> with <code>.any()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't forget browser support for <code>.any()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't mix sequential and parallel patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore performance benefits of parallel execution</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Promise methods are essential for modern web development. Use <code>Promise.all()</code> for loading related data, <code>Promise.race()</code> for timeouts, <code>Promise.allSettled()</code> for monitoring, and <code>Promise.any()</code> for fallback strategies. They dramatically improve performance by running operations in parallel.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Playground */}
      {onOpenWebPlayground && (
        <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              Run live examples to see all promise methods in action
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
              className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
            >
              Run in Playground
            </Button>
            <p className="text-sm text-muted-foreground">
              The console output shows all 4 promise methods with timing demonstrations.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

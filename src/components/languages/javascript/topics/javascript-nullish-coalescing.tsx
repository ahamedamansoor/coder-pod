'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, GitMerge } from 'lucide-react';

export default function JavaScriptNullishCoalescing() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitMerge}
        category="Modern JavaScript (ES2020)"
        title="Nullish Coalescing (??)"
        description="Smart default values - only for null/undefined, not falsy!"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <GitMerge className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                What is Nullish Coalescing?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">??</code> operator is like a 
                <strong className="text-purple-700 dark:text-purple-400"> smart fallback system</strong>! 
                Unlike <code className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded">||</code> which treats 
                <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 rounded">0</code>, 
                <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 rounded">''</code>, and 
                <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 rounded">false</code> as "no value", 
                <strong className="text-fuchsia-700 dark:text-fuchsia-400">??</strong> only uses the fallback for 
                <strong className="text-pink-700 dark:text-pink-400">null</strong> and <strong className="text-pink-700 dark:text-pink-400">undefined</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">The Problem with ||</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">count || 10</code> returns 
              <strong> 10</strong> even when count is 0! With <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">count ?? 10</code>, 
              0 is kept because it's a valid value.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚖️</span>
            ?? vs || Comparison
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30">
                  <th className="p-3 text-left border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Value</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">
                    <code>value || 'default'</code>
                  </th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">
                    <code>value ?? 'default'</code>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>null</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">'default'</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">'default'</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>undefined</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">'default'</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">'default'</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>0</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">'default' ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">0 ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>''</code> (empty string)</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">'default' ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">'' ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>false</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">'default' ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">false ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>NaN</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">'default' ❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">NaN ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>'hello'</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">'hello'</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">'hello'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Smart Defaults for Valid Values"
        description="Keep 0, false, and empty strings as valid values"
        language="javascript"
        colorTheme="purple"
        code={`// Problem with || operator
const count = 0;
const result1 = count || 10;
console.log(result1);
// 10 ❌ (0 is treated as falsy, uses default)

// Solution with ?? operator
const result2 = count ?? 10;
console.log(result2);
// 0 ✅ (0 is valid, not null/undefined)


// Empty string example
const username = '';
const display1 = username || 'Anonymous';
console.log(display1);
// "Anonymous" ❌ (empty string replaced)

const display2 = username ?? 'Anonymous';
console.log(display2);
// "" ✅ (empty string is valid)


// Boolean example
const isEnabled = false;
const status1 = isEnabled || true;
console.log(status1);
// true ❌ (false replaced)

const status2 = isEnabled ?? true;
console.log(status2);
// false ✅ (false is valid value)


// Only null/undefined use default
const value1 = null;
const value2 = undefined;

console.log(value1 ?? 'fallback');  // "fallback"
console.log(value2 ?? 'fallback');  // "fallback"`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios where ?? shines"
        language="javascript"
        colorTheme="cyan"
        code={`// 1. Configuration with 0 as valid value
const config = {
  port: 0,        // 0 is valid (auto-assign port)
  timeout: null,  // Not set
  retries: 3
};

const port = config.port ?? 8080;
console.log(port);  // 0 ✅ (not 8080!)

const timeout = config.timeout ?? 5000;
console.log(timeout);  // 5000 (null uses default)


// 2. API response with optional fields
function getUserDisplay(user) {
  const name = user.name ?? 'Anonymous';
  const age = user.age ?? 'Unknown';  // 0 would be kept!
  const posts = user.posts ?? 0;      // null becomes 0
  
  return \`\${name}, \${age} years, \${posts} posts\`;
}

console.log(getUserDisplay({ name: 'Alice', age: 0, posts: null }));
// "Alice, 0 years, 0 posts" ✅


// 3. Form inputs with empty strings
function saveSettings(settings) {
  const theme = settings.theme ?? 'light';
  const lang = settings.language ?? 'en';
  const bio = settings.bio ?? '';  // Keep empty string if provided
  
  return { theme, lang, bio };
}

console.log(saveSettings({ theme: 'dark', language: '', bio: null }));
// { theme: 'dark', lang: '', bio: '' }
// Empty string for language is preserved!


// 4. Combining with optional chaining
const user = {
  profile: null
};

const city = user.profile?.address?.city ?? 'Not specified';
console.log(city);
// "Not specified"


// 5. Multiple fallbacks
const value = null ?? undefined ?? 0 ?? 'final';
console.log(value);
// 0 (first non-nullish value)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>When to Use Each</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Use ?? When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ 0 is a valid value (counts, indices)</li>
                <li>✅ Empty strings are valid</li>
                <li>✅ false is meaningful</li>
                <li>✅ Only null/undefined need defaults</li>
                <li>✅ Strict fallback logic needed</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/20 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3">Use || When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Any falsy value needs default</li>
                <li>✅ 0, '', false should use fallback</li>
                <li>✅ Simple truthy/falsy logic</li>
                <li>✅ Backward compatibility needed</li>
                <li>✅ Less strict fallback logic</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

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
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Nullish Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only null/undefined trigger fallback
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Valid Values</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keeps 0, false, '', NaN as valid
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pairs with ?.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works great with optional chaining
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2020</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern JavaScript - safer defaults
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

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Repeat } from 'lucide-react';

export default function JavaScriptStringReplaceAll() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="Modern JavaScript (ES2021)"
        title="String.replaceAll()"
        description="Replace all occurrences at once - no regex needed!"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <Repeat className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What is String.replaceAll()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded">replaceAll()</code> replaces 
                <strong className="text-green-700 dark:text-green-400"> every occurrence</strong> of a substring! 
                Unlike <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">replace()</code> which only replaces the first match, 
                replaceAll() changes <strong className="text-emerald-700 dark:text-emerald-400">all matches</strong> - 
                and you don't need regex!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">No More Regex Gymnastics!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Before: <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">str.replace(/find/g, 'replace')</code>. 
              Now: <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">str.replaceAll('find', 'replace')</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Replace All Occurrences"
        description="Simple string replacement without regex"
        language="javascript"
        colorTheme="green"
        code={`// Old way with replace() - only first match
const text1 = 'Hello Hello Hello';
const result1 = text1.replace('Hello', 'Hi');
console.log(result1);
// "Hi Hello Hello" ❌ (only first one replaced)


// Old way with regex - all matches
const result2 = text1.replace(/Hello/g, 'Hi');
console.log(result2);
// "Hi Hi Hi" ✅ (but requires regex)


// New way with replaceAll() - clean and simple!
const result3 = text1.replaceAll('Hello', 'Hi');
console.log(result3);
// "Hi Hi Hi" ✅ (no regex needed!)


// Replace with different string
const sentence = 'I love cats. Cats are great. My cat is cute.';
const updated = sentence.replaceAll('cat', 'dog').replaceAll('Cat', 'Dog');
console.log(updated);
// "I love dogs. Dogs are great. My dog is cute."


// Remove all occurrences (replace with empty)
const dirty = 'a-b-c-d-e';
const clean = dirty.replaceAll('-', '');
console.log(clean);
// "abcde"


// Replace numbers
const code = '123-456-789';
const masked = code.replaceAll(/\\d/g, '*');  // Can use regex too
console.log(masked);
// "***-***-***"`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for replaceAll"
        language="javascript"
        colorTheme="emerald"
        code={`// 1. Clean user input
function sanitizeInput(input) {
  return input
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('&', '&amp;');
}

console.log(sanitizeInput('<script>alert("xss")</script>'));
// "&lt;script&gt;alert("xss")&lt;/script&gt;"


// 2. Format phone numbers
function formatPhone(phone) {
  return phone
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll(' ', '');
}

console.log(formatPhone('(555) 123-4567'));
// "5551234567"


// 3. Template replacement
function fillTemplate(template, data) {
  let result = template;
  
  for (let key in data) {
    result = result.replaceAll(\`{{$\{key}}}\`, data[key]);
  }
  
  return result;
}

const email = 'Hello {{name}}, your order {{orderId}} is ready!';
const filled = fillTemplate(email, {
  name: 'Alice',
  orderId: '#12345'
});

console.log(filled);
// "Hello Alice, your order #12345 is ready!"


// 4. Remove special characters
function slugify(text) {
  return text
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('&', 'and')
    .replaceAll(/[^a-z0-9-]/g, '');
}

console.log(slugify('Hello World & Welcome!'));
// "hello-world-and-welcome"


// 5. Update configuration paths
function updatePaths(config, oldPath, newPath) {
  return config.replaceAll(oldPath, newPath);
}

const config = 'path=/old/path, backup=/old/path/backup';
console.log(updatePaths(config, '/old/path', '/new/path'));
// "path=/new/path, backup=/new/path/backup"


// 6. Replace with function
const text = 'Price: $10, Total: $20';
const converted = text.replaceAll(/\\$(\\d+)/g, (match, price) => {
  return \`€$\{price * 0.85}\`;
});

console.log(converted);
// "Price: €8.5, Total: €17"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>replaceAll() vs replace()</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-center border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">replace()</th>
                  <th className="p-3 text-center border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">replaceAll()</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">String replacement</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">First only</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">All matches ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Regex with /g flag</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">All matches</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">All matches</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Requires regex</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">For all matches</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">No ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">ES Version</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">ES3</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">ES2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">All Matches</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Replaces every occurrence, not just first
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No Regex Required</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plain strings work (but regex still supported)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Chainable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can chain multiple <code className="text-xs">replaceAll()</code> calls
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2021</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern convenience method
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

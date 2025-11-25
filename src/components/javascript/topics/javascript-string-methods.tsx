'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Scissors,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Search,
  Zap,
  Copy,
  Type,
  Code,
} from 'lucide-react';

interface JavaScriptStringMethodsProps {
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
  <title>String Methods Demo</title>
  <style>
    body { 
      font-family: 'Inter', system-ui; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .panel { 
      max-width: 800px; 
      width: 100%;
      border-radius: 20px; 
      background: rgba(255,255,255,0.95); 
      padding: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px;
    }
    p { 
      color: #64748b; 
      font-size: 16px;
      margin-bottom: 24px;
    }
    pre { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>✂️ String Methods</h1>
    <p>Open the browser console to see all string method examples!</p>
    <pre id="summary"></pre>
  </div>
  <script src="./string-methods-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== String Methods Demo ===\\n');

const text = 'JavaScript is awesome';

// 1. Searching
console.log('1. SEARCHING:');
console.log('  includes("Java"):', text.includes('Java'));
console.log('  indexOf("is"):', text.indexOf('is'));
console.log('  startsWith("Java"):', text.startsWith('Java'));
console.log('  endsWith("some"):', text.endsWith('some'));

// 2. Extracting
console.log('\\n2. EXTRACTING:');
console.log('  slice(0, 10):', text.slice(0, 10));
console.log('  substring(0, 10):', text.substring(0, 10));
console.log('  charAt(0):', text.charAt(0));

// 3. Transform
console.log('\\n3. TRANSFORMING:');
console.log('  toUpperCase():', text.toUpperCase());
console.log('  toLowerCase():', text.toLowerCase());
console.log('  replace("awesome", "great"):', text.replace('awesome', 'great'));

// 4. Split & Join
console.log('\\n4. SPLIT & JOIN:');
const words = text.split(' ');
console.log('  split(" "):', words);
console.log('  join("-"):', words.join('-'));

// Summary
const summary = [
  '✓ Search: includes, indexOf, startsWith, endsWith',
  '✓ Extract: slice, substring, charAt',
  '✓ Transform: toUpperCase, toLowerCase, replace',
  '✓ Split & Join: split(), join()'
].join('\\n');

document.getElementById('summary').textContent = summary;
console.log('\\n✅ All string methods demonstrated!');
`;

export default function JavaScriptStringMethods({ onOpenWebPlayground }: JavaScriptStringMethodsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Scissors}
        category="JavaScript · Strings & Regex"
        title="String Methods"
        description="Master JavaScript string methods including ES2022 at() and ES2024 Unicode methods—learn to search, extract, transform, and manipulate text."
        colorTheme="blue"
      />

      {/* What are String Methods? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are String Methods?
          </CardTitle>
          <CardDescription className="text-base">
            String methods are built-in functions that let you manipulate and analyze strings without changing the original.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            JavaScript strings come with <strong>35+ built-in methods</strong> including the latest ES2022 <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">at()</code> and ES2024 Unicode methods. Since strings are <strong>immutable</strong>, these methods always return <strong>new values</strong> without modifying the original string. This makes them safe to use repeatedly.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Searching</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Find substrings and check positions
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">5+ methods</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Copy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Extracting</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Get portions of strings
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">6 methods</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Transforming</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Change case, trim, replace
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">10+ methods</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Scissors className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-sm">Splitting</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Convert to arrays
              </p>
              <Badge className="mt-2 bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 text-xs">split()</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept: Immutability</AlertTitle>
            <AlertDescription>
              String methods <strong>never change the original string</strong>. They always return a new value. You must store the result or use it immediately.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Searching Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Search className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Searching Methods
          </CardTitle>
          <CardDescription className="text-base">
            Find substrings, check if text exists, and get positions within strings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* includes() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">includes()</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Returns boolean</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Check if a string contains a substring (case-sensitive)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript is awesome';

console.log(text.includes('Java'));
console.log(text.includes('Python'));
console.log(text.includes('JAVA'));

// Case sensitive!
console.log(text.includes('javascript'));`}
              </pre>
              <SnippetOutput lines={['includes("Java") -> true', 'includes("Python") -> false', 'includes("JAVA") -> false', 'includes("javascript") -> false (case matters!)']} />
            </div>

            {/* indexOf() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">indexOf()</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Returns number</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the position of first occurrence (-1 if not found)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript is awesome';

console.log(text.indexOf('is'));
console.log(text.indexOf('Script'));
console.log(text.indexOf('Python'));

// Start searching from position 5
console.log(text.indexOf('a', 5));`}
              </pre>
              <SnippetOutput lines={['indexOf("is") -> 11', 'indexOf("Script") -> 4', 'indexOf("Python") -> -1 (not found)', 'indexOf("a", 5) -> 7 (starts from pos 5)']} />
            </div>

            {/* lastIndexOf() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">lastIndexOf()</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Returns number</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the position of last occurrence (searches backwards)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript is awesome and JavaScript is fun';

console.log(text.indexOf('JavaScript'));
console.log(text.lastIndexOf('JavaScript'));

console.log(text.indexOf('is'));
console.log(text.lastIndexOf('is'));`}
              </pre>
              <SnippetOutput lines={['indexOf() -> 0 (first occurrence)', 'lastIndexOf() -> 25 (last occurrence)', 'indexOf("is") -> 11', 'lastIndexOf("is") -> 40']} />
            </div>

            {/* startsWith() & endsWith() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">startsWith() & endsWith()</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Returns boolean</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Check if string starts or ends with specific characters
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const filename = 'document.pdf';
const url = 'https://example.com';

console.log(filename.endsWith('.pdf'));
console.log(filename.endsWith('.doc'));

console.log(url.startsWith('https'));
console.log(url.startsWith('http'));`}
              </pre>
              <SnippetOutput lines={['endsWith(".pdf") -> true', 'endsWith(".doc") -> false', 'startsWith("https") -> true', 'startsWith("http") -> true']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extracting Methods */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Copy className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Extracting Methods
          </CardTitle>
          <CardDescription className="text-base">
            Get specific portions or characters from strings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* slice() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">slice(start, end)</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Most flexible</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Extract a section of string (supports negative indices)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript';

console.log(text.slice(0, 4));
console.log(text.slice(4));
console.log(text.slice(-6));
console.log(text.slice(-6, -2));
console.log(text.slice(2, -2));`}
              </pre>
              <SnippetOutput lines={['slice(0, 4) -> "Java"', 'slice(4) -> "Script"', 'slice(-6) -> "Script"', 'slice(-6, -2) -> "Scri"', 'slice(2, -2) -> "vaScri"']} />
            </div>

            {/* substring() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">substring(start, end)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">No negatives</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Similar to slice but treats negative values as 0
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript';

console.log(text.substring(0, 4));
console.log(text.substring(4));

// Swaps if start > end
console.log(text.substring(4, 0));

// Negative treated as 0
console.log(text.substring(-5));`}
              </pre>
              <SnippetOutput lines={['substring(0, 4) -> "Java"', 'substring(4) -> "Script"', 'substring(4, 0) -> "Java" (swapped!)', 'substring(-5) -> "JavaScript" (-5 = 0)']} />
            </div>

            {/* charAt() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">charAt(index)</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Classic</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Get character at specific position (no negative indices)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript';

console.log(text.charAt(0));
console.log(text.charAt(4));
console.log(text.charAt(text.length - 1));

// Out of range returns empty string
console.log(text.charAt(100));`}
              </pre>
              <SnippetOutput lines={['charAt(0) -> "J"', 'charAt(4) -> "S"', 'charAt(9) -> "t" (last char)', 'charAt(100) -> "" (empty string)']} />
            </div>

            {/* at() - ES2022 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">at(index)</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">ES2022 - Modern</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Get character at position (supports negative indices!)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'JavaScript';

console.log(text.at(0));
console.log(text.at(4));

// Negative indices work! (count from end)
console.log(text.at(-1));  // Last character
console.log(text.at(-2));  // Second to last
console.log(text.at(-6));

// Out of range returns undefined
console.log(text.at(100));`}
              </pre>
              <SnippetOutput lines={['at(0) -> "J"', 'at(4) -> "S"', 'at(-1) -> "t" (last!)', 'at(-2) -> "p"', 'at(-6) -> "S"', 'at(100) -> undefined']} />
            </div>

            {/* split() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">split(separator)</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Returns array</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Split string into array based on separator
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const csv = 'apple,banana,orange';
const sentence = 'Hello World';

console.log(csv.split(','));
console.log(sentence.split(' '));

// Split every character
console.log('ABC'.split(''));`}
              </pre>
              <SnippetOutput lines={['split(",") -> ["apple", "banana", "orange"]', 'split(" ") -> ["Hello", "World"]', 'split("") -> ["A", "B", "C"]']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transform Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Transform Methods
          </CardTitle>
          <CardDescription className="text-base">
            Change case, trim whitespace, and replace text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case Methods */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">toUpperCase() & toLowerCase()</h4>
              <p className="text-xs text-muted-foreground">
                Convert entire string to upper or lower case
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'Hello World';

console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Original unchanged (immutable!)
console.log(text);

// Case-insensitive comparison
const input = 'JAVASCRIPT';
console.log(input.toLowerCase() === 'javascript');`}
              </pre>
              <SnippetOutput lines={['toUpperCase() -> "HELLO WORLD"', 'toLowerCase() -> "hello world"', 'Original -> "Hello World"', 'Comparison -> true']} />
            </div>

            {/* Trim Methods */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">trim(), trimStart(), trimEnd()</h4>
              <p className="text-xs text-muted-foreground">
                Remove whitespace from beginning, end, or both
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = '   Hello World   ';

console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());

// Original length vs trimmed
console.log('Length:', text.length);
console.log('Trimmed:', text.trim().length);`}
              </pre>
              <SnippetOutput lines={['trim() -> "Hello World"', 'trimStart() -> "Hello World   "', 'trimEnd() -> "   Hello World"', 'Length: 17', 'Trimmed: 11']} />
            </div>

            {/* replace() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">replace()</h4>
              <p className="text-xs text-muted-foreground">
                Replace first occurrence of substring
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'cat and cat and cat';

// Replace first occurrence only
console.log(text.replace('cat', 'dog'));

// Original unchanged
console.log(text);

// Case sensitive
const greeting = 'Hello World';
console.log(greeting.replace('hello', 'Hi'));`}
              </pre>
              <SnippetOutput lines={['replace() -> "dog and cat and cat"', 'Original -> "cat and cat and cat"', 'No match -> "Hello World" (case sensitive!)']} />
            </div>

            {/* replaceAll() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">replaceAll()</h4>
              <p className="text-xs text-muted-foreground">
                Replace all occurrences of substring
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'cat and cat and cat';

// Replace all occurrences
console.log(text.replaceAll('cat', 'dog'));

// Chain multiple replacements
const html = '<div><p>Hello</p></div>';
const clean = html.replaceAll('<', '[')
                  .replaceAll('>', ']');
console.log(clean);`}
              </pre>
              <SnippetOutput lines={['replaceAll() -> "dog and dog and dog"', 'Chained replaceAll() ->', '[div][p]Hello[/p][/div]']} />
            </div>

            {/* repeat() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">repeat(count)</h4>
              <p className="text-xs text-muted-foreground">
                Repeat string a specified number of times
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const star = '*';
console.log(star.repeat(5));

const dash = '-';
console.log(dash.repeat(10));

// Create separator
const separator = '='.repeat(20);
console.log(separator);`}
              </pre>
              <SnippetOutput lines={['repeat(5) -> "*****"', 'repeat(10) -> "----------"', 'separator -> "===================="']} />
            </div>

            {/* padStart() & padEnd() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">padStart() & padEnd()</h4>
              <p className="text-xs text-muted-foreground">
                Pad string to target length with characters
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const num = '5';

// Pad with zeros
console.log(num.padStart(3, '0'));
console.log(num.padEnd(3, '0'));

// Credit card masking
const card = '1234';
console.log(card.padStart(16, '*'));`}
              </pre>
              <SnippetOutput lines={['padStart(3, "0") -> "005"', 'padEnd(3, "0") -> "500"', 'padStart(16, "*") -> "************1234"']} />
            </div>

            {/* concat() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">concat()</h4>
              <p className="text-xs text-muted-foreground">
                Combine multiple strings (+ operator is more common)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const first = 'Hello';
const last = 'World';

console.log(first.concat(' ', last));
console.log(first.concat(' ', last, '!'));

// Multiple strings
const result = 'a'.concat('b', 'c', 'd');
console.log(result);`}
              </pre>
              <SnippetOutput lines={['concat() -> "Hello World"', 'with "!" -> "Hello World!"', 'Multiple -> "abcd"', 'Prefer + or template literals']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ES2024 Unicode Methods */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            ES2024 Unicode Methods
          </CardTitle>
          <CardDescription className="text-base">
            New methods for handling Unicode text correctly (emojis, special characters).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Unicode Matters</AlertTitle>
            <AlertDescription>
              Modern apps handle international text and emojis. These methods help ensure strings are properly formed for display and processing.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {/* isWellFormed() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">isWellFormed()</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">ES2024</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Check if string contains valid Unicode (no lone surrogates)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const validText = 'Hello 👋 World';
const brokenText = 'Bad\\uD800Text'; // Lone surrogate

console.log(validText.isWellFormed());
console.log(brokenText.isWellFormed());

// Use before encoding or sending to server
if (userInput.isWellFormed()) {
  sendToServer(userInput);
}`}
              </pre>
              <SnippetOutput lines={['validText.isWellFormed() -> true', 'brokenText.isWellFormed() -> false', 'Prevents encoding errors']} />
            </div>

            {/* toWellFormed() */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">toWellFormed()</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">ES2024</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Fix invalid Unicode by replacing lone surrogates with �
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const brokenText = 'Hello\\uD800World';

// Fix the broken text
const fixed = brokenText.toWellFormed();

console.log(fixed);
console.log(fixed.isWellFormed());

// Safe to use in APIs/databases
const safeText = userInput.toWellFormed();`}
              </pre>
              <SnippetOutput lines={['fixed -> "Hello�World"', 'fixed.isWellFormed() -> true', 'Lone surrogates replaced with �']} />
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              When to Use Unicode Methods
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Before encoding strings to send to APIs</li>
              <li>✅ When handling user-generated content with emojis</li>
              <li>✅ Processing international text (Chinese, Arabic, etc.)</li>
              <li>✅ Validating form inputs before database storage</li>
              <li>✅ Preventing encoding errors in web applications</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical use cases where string methods solve common problems.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Username Validation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Username Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function validateUsername(username) {
  // Remove whitespace
  const clean = username.trim();
  
  // Check length
  if (clean.length < 3 || clean.length > 20) {
    return 'Invalid length';
  }
  
  // No spaces allowed
  if (clean.includes(' ')) {
    return 'No spaces allowed';
  }
  
  // Must start with letter
  const firstChar = clean.charAt(0);
  if (!'abcdefghijklmnopqrstuvwxyz'.includes(firstChar.toLowerCase())) {
    return 'Must start with letter';
  }
  
  return 'Valid!';
}

console.log(validateUsername('  john  '));
console.log(validateUsername('ab'));
console.log(validateUsername('john doe'));
console.log(validateUsername('123user'));`}
              </pre>
              <SnippetOutput lines={['validateUsername("  john  ") -> "Valid!"', 'validateUsername("ab") -> "Invalid length"', 'validateUsername("john doe") -> "No spaces allowed"', 'validateUsername("123user") -> "Must start with letter"']} />
            </div>

            {/* File Extension Checker */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                File Type Checker
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function getFileType(filename) {
  if (filename.endsWith('.jpg') || filename.endsWith('.png')) {
    return 'Image';
  }
  if (filename.endsWith('.pdf')) {
    return 'Document';
  }
  if (filename.endsWith('.mp4') || filename.endsWith('.avi')) {
    return 'Video';
  }
  return 'Unknown';
}

console.log(getFileType('photo.jpg'));
console.log(getFileType('report.pdf'));
console.log(getFileType('movie.mp4'));
console.log(getFileType('data.txt'));`}
              </pre>
              <SnippetOutput lines={['getFileType("photo.jpg") -> "Image"', 'getFileType("report.pdf") -> "Document"', 'getFileType("movie.mp4") -> "Video"', 'getFileType("data.txt") -> "Unknown"']} />
            </div>

            {/* Text Truncation */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Text Truncation with Ellipsis
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function truncate(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

const longText = 'This is a very long article title that needs to be shortened';

console.log(truncate(longText, 20));
console.log(truncate(longText, 30));
console.log(truncate('Short', 20));`}
              </pre>
              <SnippetOutput lines={['truncate(longText, 20) ->', '"This is a very long..."', 'truncate(longText, 30) ->', '"This is a very long article..."', 'truncate("Short", 20) -> "Short"']} />
            </div>

            {/* CSV to Array */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                CSV Parsing
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function parseCSVLine(line) {
  return line.split(',').map(item => item.trim());
}

const csvLine = 'apple, banana,  orange,  grape';
const items = parseCSVLine(csvLine);

console.log(items);
console.log('Items:', items.length);
console.log('First item:', items[0]);`}
              </pre>
              <SnippetOutput lines={['items -> ["apple", "banana", "orange", "grape"]', 'Items: 4', 'First item: "apple"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" /> Do This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Always store the result—methods don't modify the original.</li>
              <li>✅ Use <code className="font-mono text-xs">trim()</code> on user input before validation.</li>
              <li>✅ Use <code className="font-mono text-xs">includes()</code> instead of <code className="font-mono text-xs">indexOf() !== -1</code>.</li>
              <li>✅ Use <code className="font-mono text-xs">at()</code> for negative indices (ES2022).</li>
              <li>✅ Use <code className="font-mono text-xs">slice()</code> for most extraction (supports negatives).</li>
              <li>✅ Use <code className="font-mono text-xs">toLowerCase()</code> for case-insensitive comparisons.</li>
              <li>✅ Validate Unicode with <code className="font-mono text-xs">isWellFormed()</code> before sending to APIs.</li>
              <li>✅ Chain methods when appropriate: <code className="font-mono text-xs">trim().toLowerCase()</code>.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" /> Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't expect methods to modify the original string.</li>
              <li>❌ Don't forget string methods are case-sensitive by default.</li>
              <li>❌ Don't use <code className="font-mono text-xs">substring()</code> when you need negative indices.</li>
              <li>❌ Don't chain too many methods—it hurts readability.</li>
              <li>❌ Don't use <code className="font-mono text-xs">replace()</code> when you mean <code className="font-mono text-xs">replaceAll()</code>.</li>
              <li>❌ Don't forget to check if string is empty before using methods.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice String Methods
          </CardTitle>
          <CardDescription className="text-base">
            Interactive demo covering searching, extracting, transforming, and splitting strings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">string-methods-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">20+ methods</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

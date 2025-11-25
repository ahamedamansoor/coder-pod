'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Search,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Zap,
  Code,
  Filter,
  AlertCircle,
} from 'lucide-react';

interface JavaScriptRegularExpressionsProps {
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
  <title>Regular Expressions Demo</title>
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
    <h1>🔍 Regular Expressions</h1>
    <p>Open the browser console to see regex examples!</p>
    <pre id="summary"></pre>
  </div>
  <script src="./regex-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Regular Expressions Demo ===\\n');

// 1. Basic Pattern Matching
console.log('1. BASIC MATCHING:');
const emailPattern = /\\w+@\\w+\\.\\w+/;
console.log(emailPattern.test('user@example.com'));
console.log(emailPattern.test('invalid-email'));

// 2. Character Classes
console.log('\\n2. CHARACTER CLASSES:');
const digitPattern = /\\d+/;
console.log('123'.match(digitPattern));
console.log('abc'.match(digitPattern));

// 3. Quantifiers
console.log('\\n3. QUANTIFIERS:');
const phonePattern = /\\d{3}-\\d{3}-\\d{4}/;
console.log(phonePattern.test('555-123-4567'));
console.log(phonePattern.test('555-123'));

// 4. Flags (global, case-insensitive)
console.log('\\n4. FLAGS:');
const text = 'The Cat and the cat';
console.log(text.match(/cat/gi));

// 5. Groups and Capturing
console.log('\\n5. CAPTURING GROUPS:');
const datePattern = /(\\d{4})-(\\d{2})-(\\d{2})/;
const match = '2024-03-15'.match(datePattern);
console.log('Year:', match[1]);
console.log('Month:', match[2]);
console.log('Day:', match[3]);

// 6. Named Capture Groups (ES2018)
console.log('\\n6. NAMED GROUPS:');
const namedDatePattern = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = '2024-03-15'.match(namedDatePattern);
console.log('Year:', namedMatch.groups.year);
console.log('Month:', namedMatch.groups.month);

// Summary
const summary = [
  'Pattern matching with test()',
  'Character classes',
  'Quantifiers',
  'Flags (g, i, m, s, u, d)',
  'Capturing groups',
  'Named capture groups (ES2018)'
].join('\\n');

document.getElementById('summary').textContent = summary;
console.log('\\n All regex patterns demonstrated!');
`;

export default function JavaScriptRegularExpressions({ onOpenWebPlayground }: JavaScriptRegularExpressionsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Search}
        category="JavaScript · Strings & Regex"
        title="Regular Expressions"
        description="Master regex patterns with ES2018+ features: named groups, lookbehind assertions, Unicode properties, and powerful text matching."
        colorTheme="blue"
      />

      {/* What are Regular Expressions? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Regular Expressions?
          </CardTitle>
          <CardDescription className="text-base">
            Regular expressions (regex) are patterns used to match, search, and manipulate text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            A <strong>regular expression</strong> is a sequence of characters that forms a search pattern. They're incredibly powerful for <strong>validating input</strong>, <strong>extracting data</strong>, and <strong>transforming text</strong>. While regex can look cryptic at first, breaking them down into small pieces makes them much easier to understand.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Search & Match</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Find patterns in text (emails, phone numbers, URLs)
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">test(), match()</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Validate</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Check if text matches expected format
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Input validation</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Transform</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Replace, extract, or manipulate text
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">replace(), split()</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Learn Regex?</AlertTitle>
            <AlertDescription>
              Regular expressions are used in every major programming language. Mastering them unlocks powerful text processing capabilities for form validation, data extraction, log parsing, and more.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Syntax
          </CardTitle>
          <CardDescription className="text-base">
            Two ways to create regex patterns: literal notation and constructor function.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Literal Notation */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Literal Notation (Preferred)</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Most common</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use forward slashes /pattern/ with optional flags
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Basic pattern
const pattern = /hello/;

// With flags (g = global, i = case-insensitive)
const pattern2 = /hello/gi;

// Test the pattern
console.log(pattern.test('hello world'));
console.log(pattern.test('Hello world'));`}
              </pre>
              <SnippetOutput lines={['test("hello world") -> true', 'test("Hello world") -> false (case-sensitive)']} />
            </div>

            {/* Constructor */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">RegExp Constructor</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Dynamic patterns</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use when pattern needs to be built dynamically
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Dynamic pattern from variable
const searchTerm = 'hello';
const pattern = new RegExp(searchTerm, 'gi');

// Escape special characters
const userInput = 'user@example.com';
const escaped = userInput.replace(/[.*+?^$(){}|\\[\\]\\\\]/g, '\\\\$&');
const safePattern = new RegExp(escaped);

console.log(pattern.test('Hello World'));`}
              </pre>
              <SnippetOutput lines={['pattern.test("Hello World") -> true', 'Constructor useful for dynamic patterns']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Character Classes */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Filter className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Character Classes
          </CardTitle>
          <CardDescription className="text-base">
            Match specific types of characters using shorthand classes or custom sets.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Shorthand Classes */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Shorthand Classes</h4>
              <p className="text-xs text-muted-foreground">
                Predefined character sets for common patterns
              </p>
              <div className="space-y-2 text-xs font-mono bg-slate-50 dark:bg-slate-950 rounded p-3 border">
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\d</code>
                  <span className="text-muted-foreground">Any digit (0-9)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\w</code>
                  <span className="text-muted-foreground">Word character (a-z, A-Z, 0-9, _)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\s</code>
                  <span className="text-muted-foreground">Whitespace (space, tab, newline)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\D</code>
                  <span className="text-muted-foreground">NOT a digit</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\W</code>
                  <span className="text-muted-foreground">NOT a word character</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">\\S</code>
                  <span className="text-muted-foreground">NOT whitespace</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-purple-600 dark:text-purple-400">.</code>
                  <span className="text-muted-foreground">Any character (except newline)</span>
                </div>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const digitPattern = /\\d+/;
console.log('123'.match(digitPattern));

const wordPattern = /\\w+/;
console.log('hello_123'.match(wordPattern));`}
              </pre>
              <SnippetOutput lines={['\\d+ matches "123"', '\\w+ matches "hello_123"']} />
            </div>

            {/* Custom Character Sets */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Custom Character Sets</h4>
              <p className="text-xs text-muted-foreground">
                Define your own character ranges with square brackets
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Match vowels
const vowels = /[aeiou]/gi;
console.log('hello'.match(vowels));

// Match range (a-z)
const lowercase = /[a-z]+/;
console.log('Hello123'.match(lowercase));

// Match NOT (^) in brackets
const notDigits = /[^0-9]+/;
console.log('abc123def'.match(notDigits));

// Multiple ranges
const alphanumeric = /[a-zA-Z0-9]+/;
console.log('Test123!@#'.match(alphanumeric));`}
              </pre>
              <SnippetOutput lines={['[aeiou] -> ["e", "o"]', '[a-z]+ -> "ello"', '[^0-9]+ -> "abc"', '[a-zA-Z0-9]+ -> "Test123"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quantifiers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Quantifiers
          </CardTitle>
          <CardDescription className="text-base">
            Specify how many times a pattern should match.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Quantifiers</h4>
              <div className="space-y-2 text-xs font-mono bg-slate-50 dark:bg-slate-950 rounded p-3 border">
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">*</code>
                  <span className="text-muted-foreground">0 or more times</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">+</code>
                  <span className="text-muted-foreground">1 or more times</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">?</code>
                  <span className="text-muted-foreground">0 or 1 time (optional)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">{`{n}`}</code>
                  <span className="text-muted-foreground">Exactly n times</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">{`{n,}`}</code>
                  <span className="text-muted-foreground">n or more times</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">{`{n,m}`}</code>
                  <span className="text-muted-foreground">Between n and m times</span>
                </div>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// 0 or more
const pattern1 = /a*/;
console.log('aaa'.match(pattern1));

// 1 or more
const pattern2 = /a+/;
console.log('aaa'.match(pattern2));

// Optional
const pattern3 = /colou?r/;
console.log('color'.match(pattern3));
console.log('colour'.match(pattern3));`}
              </pre>
              <SnippetOutput lines={['* matches "", "a", "aaa"', '+ matches "a", "aaa" (not "")', '? makes "u" optional']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Exact Counts</h4>
              <p className="text-xs text-muted-foreground">
                Use curly braces for precise repetition
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Exactly 3 digits
const zip = /\\d{5}/;
console.log(zip.test('12345'));
console.log(zip.test('123'));

// Phone: 3 digits, dash, 3 digits, dash, 4 digits
const phone = /\\d{3}-\\d{3}-\\d{4}/;
console.log(phone.test('555-123-4567'));

// 2 to 4 letters
const name = /[a-z]{2,4}/i;
console.log('Jo'.match(name));
console.log('John'.match(name));`}
              </pre>
              <SnippetOutput lines={['{5} matches exactly 5', '{3}-{3}-{4} = phone format', '{2,4} between 2 and 4']} />
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Greedy vs Lazy</AlertTitle>
            <AlertDescription>
              By default, quantifiers are <strong>greedy</strong> (match as much as possible). Add <code className="font-mono text-xs">?</code> after a quantifier to make it <strong>lazy</strong> (match as little as possible): <code className="font-mono text-xs">*?</code>, <code className="font-mono text-xs">+?</code>, <code className="font-mono text-xs">??</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Anchors and Boundaries */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Anchors & Boundaries
          </CardTitle>
          <CardDescription className="text-base">
            Match positions rather than characters.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Start and End Anchors</h4>
              <p className="text-xs text-muted-foreground">
                Ensure pattern matches at specific positions
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// ^ = Start of string
const startsWithHello = /^Hello/;
console.log(startsWithHello.test('Hello world'));
console.log(startsWithHello.test('Say Hello'));

// $ = End of string
const endsWithWorld = /world$/;
console.log(endsWithWorld.test('Hello world'));
console.log(endsWithWorld.test('world Hello'));

// Both (exact match)
const exactMatch = /^Hello$/;
console.log(exactMatch.test('Hello'));
console.log(exactMatch.test('Hello world'));`}
              </pre>
              <SnippetOutput lines={['^Hello -> must start with "Hello"', 'world$ -> must end with "world"', '^Hello$ -> must be exactly "Hello"']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Word Boundaries</h4>
              <p className="text-xs text-muted-foreground">
                Match whole words, not partial matches
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// \\b = Word boundary
const wordCat = /\\bcat\\b/;
console.log(wordCat.test('cat'));
console.log(wordCat.test('category'));
console.log(wordCat.test('the cat sat'));

// \\B = NOT a word boundary
const notBoundary = /\\Bcat\\B/;
console.log(notBoundary.test('cat'));
console.log(notBoundary.test('concatenate'));`}
              </pre>
              <SnippetOutput lines={['\\bcat\\b matches "cat" only', 'Not "category" or "concatenate"', '\\B matches inside words only']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Filter className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Flags (Modifiers)
          </CardTitle>
          <CardDescription className="text-base">
            Change how the regex engine processes the pattern.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Common Flags</h4>
              <div className="space-y-2 text-xs font-mono bg-slate-50 dark:bg-slate-950 rounded p-3 border">
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">g</code>
                  <span className="text-muted-foreground">Global (find all matches)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">i</code>
                  <span className="text-muted-foreground">Case-insensitive</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">m</code>
                  <span className="text-muted-foreground">Multiline (^ and $ match lines)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">s</code>
                  <span className="text-muted-foreground">Dotall (. matches newlines)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-blue-600 dark:text-blue-400">u</code>
                  <span className="text-muted-foreground">Unicode (proper Unicode support)</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-indigo-600 dark:text-indigo-400">d</code>
                  <span className="text-muted-foreground">Indices (ES2022 - match positions)</span>
                </div>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'The Cat and the cat';

// Without flags
console.log(text.match(/cat/));

// With g (global)
console.log(text.match(/cat/g));

// With i (case-insensitive)
console.log(text.match(/cat/i));

// With gi (both)
console.log(text.match(/cat/gi));`}
              </pre>
              <SnippetOutput lines={['/cat/ -> ["cat"] (first only)', '/cat/g -> ["cat"] (all lowercase)', '/cat/gi -> ["Cat", "cat"] (all, any case)']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">ES2022: d Flag</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">ES2022</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Get start and end indices of matches
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const text = 'Hello World';
const pattern = /(\\w+)/dg;

const matches = [...text.matchAll(pattern)];

matches.forEach(match => {
  console.log('Match:', match[0]);
  console.log('Start:', match.indices[0][0]);
  console.log('End:', match.indices[0][1]);
});

// Output:
// Match: "Hello"
// Start: 0
// End: 5`}
              </pre>
              <SnippetOutput lines={['d flag provides match.indices', 'Get [start, end] positions', 'Useful for precise text replacement']} />
            </div>
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
            Practical regex patterns for validation, extraction, and text manipulation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Email Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

const emails = [
  'user@example.com',
  'test.email@domain.co.uk',
  'invalid@',
  '@invalid.com'
];

emails.forEach(email => {
  console.log(email + ': ' + emailPattern.test(email));
});`}
              </pre>
              <SnippetOutput lines={['user@example.com: true', 'test.email@domain.co.uk: true', 'invalid@: false', '@invalid.com: false']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Phone Number Formatting
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const phonePattern = /(\\d{3})(\\d{3})(\\d{4})/;

const phone = '5551234567';
const formatted = phone.replace(phonePattern, '($1) $2-$3');

console.log(formatted);

// Alternative with named groups
const namedPattern = /(?<area>\\d{3})(?<prefix>\\d{3})(?<line>\\d{4})/;
const match = phone.match(namedPattern);
console.log(match.groups);`}
              </pre>
              <SnippetOutput lines={['formatted: "(555) 123-4567"', 'groups: {area: "555", prefix: "123", line: "4567"}']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Extract URLs from Text
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const text = 'Visit https://example.com or http://test.org for info';

const urlPattern = /https?:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g;

const urls = text.match(urlPattern);

console.log(urls);

urls.forEach(url => {
  console.log('Found:', url);
});`}
              </pre>
              <SnippetOutput lines={['urls: ["https://example.com", "http://test.org"]', 'Found: https://example.com', 'Found: http://test.org']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Password Strength Check
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function checkPassword(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\\d/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  const isLongEnough = password.length >= 8;
  
  return hasLower && hasUpper && hasDigit && 
         hasSpecial && isLongEnough;
}

console.log(checkPassword('Pass123!'));
console.log(checkPassword('weak'));`}
              </pre>
              <SnippetOutput lines={['Pass123!: true (strong)', 'weak: false (missing requirements)']} />
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
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use literal notation <code className="font-mono text-xs">/pattern/</code> for static patterns</li>
              <li>✅ Test your regex with multiple edge cases</li>
              <li>✅ Use non-capturing groups <code className="font-mono text-xs">(?:)</code> when you don't need the match</li>
              <li>✅ Use <code className="font-mono text-xs">^</code> and <code className="font-mono text-xs">$</code> for exact matches</li>
              <li>✅ Use named capture groups for clarity <code className="font-mono text-xs">(?&lt;name&gt;)</code></li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't use regex for parsing HTML/XML (use proper parsers)</li>
              <li>❌ Avoid overly complex patterns (break them down)</li>
              <li>❌ Don't forget to escape special characters when needed</li>
              <li>❌ Avoid catastrophic backtracking with nested quantifiers</li>
              <li>❌ Don't rely solely on regex for security validation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ regular expressions, patterns, and matching.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights regex patterns (basic syntax, character classes, quantifiers, flags, and capture groups) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

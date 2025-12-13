'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Search,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  Filter,
  Code,
  Repeat,
  Flag,
} from 'lucide-react';

export default function JavaScriptRegularExpressions() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Search}
        category="JavaScript Fundamentals"
        title="Regular Expressions"
        description="Powerful patterns for searching and manipulating text"
        colorTheme="yellow"
      />

      {/* What are Regular Expressions */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Regular Expressions?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Regular expressions (regex) are <strong className="text-yellow-700 dark:text-yellow-400">patterns</strong> used to find and match text. Think of them as super-powered search with special codes to find emails, phone numbers, or any text pattern!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Why Use Regex?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Instead of checking each character manually, regex lets you describe the pattern you're looking for. Perfect for validation (emails, phone numbers) and text processing!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Regex */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating Regular Expressions</CardTitle>
              <CardDescription>Two ways to create regex patterns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Two Syntaxes</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">1. Literal notation (common)</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Pattern between forward slashes
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const regex = /hello/;
const regex2 = /hello/gi;  // with flags`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">2. Constructor (dynamic)</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Use when pattern comes from variable
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const regex = new RegExp('hello');
const regex2 = new RegExp('hello', 'gi');  // with flags`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Regex Examples"
        description="Both ways to create patterns"
        code={`// Literal notation (preferred)
const pattern1 = /cat/;
const pattern2 = /dog/i;  // case-insensitive

// Constructor (for dynamic patterns)
const searchTerm = 'hello';
const pattern3 = new RegExp(searchTerm);

const userInput = 'world';
const pattern4 = new RegExp(userInput, 'gi');  // global, case-insensitive

// When to use constructor: building pattern from variables
const words = ['apple', 'banana', 'cherry'];
const pattern = new RegExp(words.join('|'));  // matches any word
console.log(pattern);  // /apple|banana|cherry/`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Basic Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Search className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Testing & Matching</CardTitle>
              <CardDescription>Methods to use regex patterns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Main Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">test() - Returns true/false</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Check if pattern exists in string
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const regex = /hello/;
console.log(regex.test('hello world'));  // true
console.log(regex.test('goodbye'));      // false`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">match() - Returns matches array</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Find and extract matches
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'cat bat rat';
const matches = text.match(/at/g);
console.log(matches);  // ['at', 'at', 'at']`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">replace() - Replace matches</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Replace pattern with new text
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'I love cats';
const newText = text.replace(/cats/, 'dogs');
console.log(newText);  // 'I love dogs'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Methods Examples"
        description="Using test(), match(), and replace()"
        code={`const text = 'The quick brown fox jumps over the lazy dog';

// test() - Check if pattern exists
const hasQuick = /quick/.test(text);
console.log(hasQuick);  // true

const hasSlow = /slow/.test(text);
console.log(hasSlow);  // false

// match() - Find matches
const words = text.match(/\\w+/g);  // \\w+ = one or more word characters
console.log(words);
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Find all 'o' characters
const oLetters = text.match(/o/g);
console.log(oLetters);  // ['o', 'o', 'o', 'o']

// replace() - Replace text
const newText = text.replace(/fox/, 'cat');
console.log(newText);
// 'The quick brown cat jumps over the lazy dog'

// Replace all (use /g flag)
const noThe = text.replace(/the/gi, 'a');  // i = case-insensitive
console.log(noThe);
// 'a quick brown fox jumps over a lazy dog'

// Real-world: Remove spaces
const phone = '123 456 7890';
const cleaned = phone.replace(/\\s/g, '');  // \\s = whitespace
console.log(cleaned);  // '1234567890'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Common Patterns</CardTitle>
              <CardDescription>Special characters and shortcuts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Character Classes</h4>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-purple-600 dark:text-purple-400">\\d</strong> - Any digit (0-9)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-purple-600 dark:text-purple-400">\\w</strong> - Any word character (a-z, A-Z, 0-9, _)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-purple-600 dark:text-purple-400">\\s</strong> - Any whitespace (space, tab, newline)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-purple-600 dark:text-purple-400">.</strong> - Any character (except newline)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-purple-600 dark:text-purple-400">\\D, \\W, \\S</strong> - Opposite (NOT digit, word, whitespace)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Pattern Examples"
        description="Using special characters"
        code={`// \\d - Match digits
const phone = 'Call me at 555-1234';
const numbers = phone.match(/\\d+/g);  // + means one or more
console.log(numbers);  // ['555', '1234']

// \\w - Match word characters
const text = 'hello_world123';
const words = text.match(/\\w+/);
console.log(words);  // ['hello_world123']

// \\s - Match whitespace
const sentence = 'Hello World';
const spaces = sentence.match(/\\s/g);
console.log(spaces);  // [' ']

// . - Match any character
const code = 'h3llo w0rld';
const all = code.match(/./g);
console.log(all);
// ['h', '3', 'l', 'l', 'o', ' ', 'w', '0', 'r', 'l', 'd']

// Real-world: Extract all numbers
const text2 = 'I have 5 apples and 10 oranges';
const nums = text2.match(/\\d+/g);
console.log(nums);  // ['5', '10']

// Real-world: Count words
const sentence2 = 'The quick brown fox';
const wordCount = sentence2.match(/\\w+/g).length;
console.log(wordCount);  // 4`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Quantifiers */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Repeat className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Quantifiers</CardTitle>
              <CardDescription>Specify how many times a pattern should match</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Repetition</h4>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">+</strong> - One or more (1+)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">*</strong> - Zero or more (0+)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">?</strong> - Zero or one (optional)
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">{'{ n }'}</strong> - Exactly n times
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">{'{ n, }'}</strong> - n or more times
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border font-mono text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">{'{ n,m }'}</strong> - Between n and m times
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Quantifier Examples"
        description="Specifying repetition"
        code={`// + (one or more)
const text1 = 'goooooal!';
const match1 = text1.match(/o+/);
console.log(match1[0]);  // 'oooooo'

// * (zero or more)
const text2 = 'color colour';
const match2 = text2.match(/colou?r/g);  // u is optional
console.log(match2);  // ['color', 'colour']

// ? (optional)
const text3 = 'http://example.com https://secure.com';
const urls = text3.match(/https?:\\/\\/\\w+\\.\\w+/g);
console.log(urls);
// ['http://example.com', 'https://secure.com']

// {n} (exactly n)
const zipCode = '12345';
const isValid = /^\\d{5}$/.test(zipCode);
console.log(isValid);  // true

// {n,} (n or more)
const password = 'myPass123';
const longEnough = /^.{8,}$/.test(password);  // at least 8 chars
console.log(longEnough);  // true

// {n,m} (between n and m)
const phone = '555-1234';
const hasValidDigits = /\\d{3,4}/.test(phone);
console.log(hasValidDigits);  // true

// Real-world: Phone number
const phonePattern = /\\d{3}-\\d{3}-\\d{4}/;
console.log(phonePattern.test('555-123-4567'));  // true
console.log(phonePattern.test('555-1234'));      // false`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Flags */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Flag className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Regex Flags</CardTitle>
              <CardDescription>Modify how patterns work</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Common Flags</h4>
            </div>
            <div className="p-6">
              <div className="grid gap-3">
                <div className="bg-white dark:bg-slate-900 rounded p-3 border">
                  <div className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">g (global)</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Find all matches, not just first</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border">
                  <div className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">i (ignore case)</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Case-insensitive matching</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded p-3 border">
                  <div className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">m (multiline)</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">^ and $ match start/end of each line</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Flags Examples"
        description="Using g, i, and m flags"
        code={`const text = 'The cat and the Cat sat on the mat';

// Without flags - finds first match only
const match1 = text.match(/cat/);
console.log(match1);  // ['cat'] (first one only)

// g flag - find all matches
const match2 = text.match(/cat/g);
console.log(match2);  // ['cat'] (still just lowercase)

// i flag - case-insensitive
const match3 = text.match(/cat/i);
console.log(match3);  // ['cat'] (first match, any case)

// gi flags - all matches, any case
const match4 = text.match(/cat/gi);
console.log(match4);  // ['cat', 'Cat'] (all matches)

// Replace all occurrences
const newText = text.replace(/cat/gi, 'dog');
console.log(newText);
// 'The dog and the dog sat on the mat'

// m flag - multiline
const multiline = \`First line
Second line
Third line\`;

// Without m - ^ only matches start of string
const match5 = multiline.match(/^\\w+/);
console.log(match5);  // ['First']

// With m - ^ matches start of each line
const match6 = multiline.match(/^\\w+/gm);
console.log(match6);  // ['First', 'Second', 'Third']`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Filter className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Real-World Validation</CardTitle>
              <CardDescription>Common patterns for validation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Validation Patterns</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">Email (basic)</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`/^[\\w.-]+@[\\w.-]+\\.\\w+$/`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">Phone (US format)</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`/^\\d{3}-\\d{3}-\\d{4}$/`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">URL (basic)</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`/^https?:\\/\\/[\\w.-]+\\.\\w+/`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">Password (8+ chars, letter + number)</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`/^(?=.*[a-z])(?=.*\\d).{8,}$/`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Validation Examples"
        description="Real-world form validation"
        code={`// Email validation
function validateEmail(email) {
  const emailPattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
  return emailPattern.test(email);
}

console.log(validateEmail('user@example.com'));  // true
console.log(validateEmail('invalid-email'));     // false

// Phone validation (US format: 555-123-4567)
function validatePhone(phone) {
  const phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;
  return phonePattern.test(phone);
}

console.log(validatePhone('555-123-4567'));  // true
console.log(validatePhone('5551234567'));    // false

// URL validation
function validateURL(url) {
  const urlPattern = /^https?:\\/\\/[\\w.-]+\\.\\w+/;
  return urlPattern.test(url);
}

console.log(validateURL('https://example.com'));  // true
console.log(validateURL('example.com'));          // false

// Password validation (8+ chars, has letter and number)
function validatePassword(password) {
  const hasLength = password.length >= 8;
  const hasLetter = /[a-z]/i.test(password);
  const hasNumber = /\\d/.test(password);
  
  return hasLength && hasLetter && hasNumber;
}

console.log(validatePassword('pass123'));      // false (too short)
console.log(validatePassword('password'));     // false (no number)
console.log(validatePassword('password123'));  // true

// Extract all emails from text
const text = 'Contact us at support@example.com or sales@company.com';
const emails = text.match(/[\\w.-]+@[\\w.-]+\\.\\w+/g);
console.log(emails);
// ['support@example.com', 'sales@company.com']

// Format phone numbers
function formatPhone(phone) {
  // Remove non-digits
  const cleaned = phone.replace(/\\D/g, '');
  
  // Format as XXX-XXX-XXXX
  if (cleaned.length === 10) {
    return cleaned.replace(/(\\d{3})(\\d{3})(\\d{4})/, '$1-$2-$3');
  }
  return phone;
}

console.log(formatPhone('5551234567'));      // '555-123-4567'
console.log(formatPhone('(555) 123-4567'));  // '555-123-4567'`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Reference & Tips</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>test()</strong> for yes/no checks</li>
                <li>• Use <strong>match()</strong> to extract data</li>
                <li>• Add <strong>/g</strong> flag to find all matches</li>
                <li>• Add <strong>/i</strong> for case-insensitive</li>
                <li>• Test patterns on regex101.com</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't make regex too complex (hard to maintain)</li>
                <li>• Don't forget to escape special chars: . + * ? [ ] () {}</li>
                <li>• Don't use regex for parsing HTML/XML</li>
                <li>• Don't forget the /g flag when replacing all</li>
                <li>• Don't over-validate (keep it simple)</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Common Patterns Cheat Sheet</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-mono">
              <div><strong>\\d</strong> - digit</div>
              <div><strong>\\w</strong> - word char</div>
              <div><strong>\\s</strong> - whitespace</div>
              <div><strong>.</strong> - any char</div>
              <div><strong>+</strong> - one or more</div>
              <div><strong>*</strong> - zero or more</div>
              <div><strong>?</strong> - optional</div>
              <div><strong>^</strong> - start</div>
              <div><strong>$</strong> - end</div>
              <div><strong>[abc]</strong> - a, b, or c</div>
              <div><strong>[0-9]</strong> - any digit</div>
              <div><strong>(abc)</strong> - group</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Learning Tip</AlertTitle>
            <AlertDescription className="text-base">
              Start simple! Master basic patterns first, then add complexity. Use online regex testers like regex101.com to experiment and learn!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

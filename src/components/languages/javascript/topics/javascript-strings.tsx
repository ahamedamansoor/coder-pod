'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Type,
  Sparkles,
  Code2,
  Lightbulb,
  Scissors,
  Search,
  Repeat,
  FileText,
} from 'lucide-react';

export default function JavaScriptStrings() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FileText}
        category="JavaScript Fundamentals"
        title="Strings"
        description="Learn how to work with text in JavaScript - creating, combining, and manipulating strings"
        colorTheme="yellow"
      />

      {/* What are Strings? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-teal-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Strings: Working with Text
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A string is simply <strong className="text-blue-700 dark:text-blue-400">text</strong> - like a person's name, a message, or a sentence. Strings are wrapped in quotes and are one of the most commonly used data types!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Examples of Strings</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              "Hello, World!" • 'JavaScript' • "alice@email.com" • '123 Main St' • "🎉"
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Strings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Three Ways to Create Strings</CardTitle>
              <CardDescription>Use quotes to tell JavaScript "this is text"</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Single Quotes</h4>
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200 block mb-3">'Hello, World!'</code>
              <p className="text-xs text-gray-600 dark:text-gray-400">Most common way</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Double Quotes</h4>
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200 block mb-3">"Hello, World!"</code>
              <p className="text-xs text-gray-600 dark:text-gray-400">Works exactly the same</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Backticks</h4>
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200 block mb-3">{"`Hello, ${name}!`"}</code>
              <p className="text-xs text-gray-600 dark:text-gray-400">For templates (advanced)</p>
            </div>
          </div>

          <Alert className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Pick One & Stay Consistent</AlertTitle>
            <AlertDescription className="text-base">
              Single quotes and double quotes work exactly the same. Choose one style and use it throughout your code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Strings"
        description="Different ways to create text in JavaScript"
        code={`// Single quotes (most common)
const name = 'Alice';
const city = 'New York';

console.log(name);  // Alice
console.log(city);  // New York

// Double quotes (works the same)
const greeting = "Hello, World!";
const email = "alice@email.com";

console.log(greeting);  // Hello, World!
console.log(email);     // alice@email.com

// Both create strings - no difference!
const firstName = 'Bob';
const lastName = "Smith";
console.log(firstName + ' ' + lastName);  // Bob Smith`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Combining Strings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Repeat className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Combining Strings (Concatenation)</CardTitle>
              <CardDescription>Join multiple strings together with the + operator</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">How Concatenation Works</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-800/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded font-mono text-sm">'Hello'</span>
                    <span className="text-2xl text-purple-600 dark:text-purple-400">+</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded font-mono text-sm">' World'</span>
                    <span className="text-2xl">→</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded font-mono text-sm">'Hello World'</span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-800/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded font-mono text-sm">'I am '</span>
                    <span className="text-2xl text-purple-600 dark:text-purple-400">+</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded font-mono text-sm">25</span>
                    <span className="text-2xl text-purple-600 dark:text-purple-400">+</span>
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded font-mono text-sm">' years old'</span>
                    <span className="text-2xl">→</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded font-mono text-sm">'I am 25 years old'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Combining Strings Example"
        description="Use the + operator to join strings together"
        code={`// Basic concatenation
const firstName = 'Alice';
const lastName = 'Johnson';
const fullName = firstName + ' ' + lastName;

console.log(fullName);  // Alice Johnson

// Combining with numbers
const age = 25;
const message = 'I am ' + age + ' years old';

console.log(message);  // I am 25 years old

// Building a sentence
const city = 'New York';
const country = 'USA';
const location = 'I live in ' + city + ', ' + country;

console.log(location);  // I live in New York, USA

// Adding to existing strings
let greeting = 'Hello';
greeting = greeting + ', World!';
console.log(greeting);  // Hello, World!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* String Length */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>String Length</CardTitle>
              <CardDescription>Find out how many characters are in a string</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">How to Get Length</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200">stringName.length</code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                Add <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">.length</code> after any string
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">Examples</h4>
              <div className="space-y-2 text-sm font-mono">
                <div>'Hello'.length → <span className="text-green-600 dark:text-green-400">5</span></div>
                <div>'JavaScript'.length → <span className="text-green-600 dark:text-green-400">10</span></div>
                <div>'Hi!'.length → <span className="text-green-600 dark:text-green-400">3</span></div>
                <div>''.length → <span className="text-green-600 dark:text-green-400">0</span></div>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Spaces Count Too!</AlertTitle>
            <AlertDescription className="text-base">
              'Hello World'.length is <strong>11</strong> because the space between words counts as a character!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="String Length Example"
        description="Count how many characters are in strings"
        code={`// Getting string length
const name = 'Alice';
console.log(name.length);  // 5

const message = 'Hello, World!';
console.log(message.length);  // 13 (space and punctuation count!)

// Empty string
const empty = '';
console.log(empty.length);  // 0

// Using length in conditions
const password = 'secret123';
if (password.length >= 8) {
  console.log('Password is strong enough');
} else {
  console.log('Password too short');
}
// Output: Password is strong enough

// Count characters in user input
const username = 'alice_2024';
console.log('Username length:', username.length);  // 10`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Accessing Characters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Accessing Individual Characters</CardTitle>
              <CardDescription>Get a specific character from a string using brackets [ ]</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Index Numbers Start at 0</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Index:</div>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Letter:</div>
                    <div className="flex gap-1">
                      {['H', 'e', 'l', 'l', 'o'].map((letter, i) => (
                        <div key={i} className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 text-lg">
                          {letter}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Remember: Counting Starts at 0!</AlertTitle>
            <AlertDescription className="text-base">
              The first character is at index 0, second at index 1, and so on. This is true for most programming languages!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Accessing Characters Example"
        description="Get individual letters from a string using bracket notation"
        code={`// Accessing characters by index
const word = 'Hello';

console.log(word[0]);  // H (first character)
console.log(word[1]);  // e (second character)
console.log(word[2]);  // l (third character)
console.log(word[3]);  // l (fourth character)
console.log(word[4]);  // o (fifth character)

// Get first and last character
const name = 'JavaScript';
const firstLetter = name[0];
const lastLetter = name[name.length - 1];

console.log('First:', firstLetter);  // J
console.log('Last:', lastLetter);    // t

// Check if character exists
const message = 'Hi';
console.log(message[0]);  // H
console.log(message[5]);  // undefined (doesn't exist)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common String Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Scissors className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Useful String Methods</CardTitle>
              <CardDescription>Built-in functions to transform and work with strings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { method: 'toUpperCase()', desc: 'Make all UPPERCASE', example: "'hello'.toUpperCase() → 'HELLO'" },
              { method: 'toLowerCase()', desc: 'Make all lowercase', example: "'HELLO'.toLowerCase() → 'hello'" },
              { method: 'trim()', desc: 'Remove spaces from ends', example: "' hi '.trim() → 'hi'" },
              { method: 'includes()', desc: 'Check if text exists', example: "'hello'.includes('ell') → true" },
              { method: 'slice()', desc: 'Cut out a part', example: "'hello'.slice(1, 4) → 'ell'" },
              { method: 'replace()', desc: 'Replace text', example: "'hi'.replace('i', 'o') → 'ho'" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border-2 bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-800/30">
                <code className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-2">
                  {item.method}
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                <code className="text-xs font-mono text-gray-500 dark:text-gray-500 block">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="String Methods in Action"
        description="Transform and manipulate strings with built-in methods"
        code={`// Changing case
const name = 'Alice Johnson';
console.log(name.toUpperCase());  // ALICE JOHNSON
console.log(name.toLowerCase());  // alice johnson

// Removing spaces
const messy = '   hello   ';
console.log(messy.trim());  // 'hello'

// Checking if text exists
const email = 'alice@example.com';
console.log(email.includes('@'));  // true
console.log(email.includes('gmail'));  // false

// Cutting out parts
const sentence = 'JavaScript is awesome';
console.log(sentence.slice(0, 10));  // JavaScript

// Replacing text
const old = 'I like cats';
const updated = old.replace('cats', 'dogs');
console.log(updated);  // I like dogs

// Chaining methods together
const text = '  JavaScript  ';
const result = text.trim().toUpperCase();
console.log(result);  // JAVASCRIPT`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Strings = Text in Quotes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    'hello' or "hello" - both work the same
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➕</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Combine with + Operator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    'Hello' + ' ' + 'World' = 'Hello World'
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use .length for Size</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    'hello'.length gives you 5 characters
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Index Starts at 0</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    'Hi'[0] is 'H', 'Hi'[1] is 'i'
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

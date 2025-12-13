'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Type,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Search,
  Scissors,
  Repeat,
  ArrowUpDown,
} from 'lucide-react';

export default function JavaScriptStringMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript Fundamentals"
        title="String Methods"
        description="Essential methods to search, extract, transform, and manipulate text"
        colorTheme="yellow"
      />

      {/* What are String Methods */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are String Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                String methods are <strong className="text-yellow-700 dark:text-yellow-400">built-in functions</strong> that help you work with text. Search, slice, replace, change case - all without changing the original string!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Strings are Immutable</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              String methods <strong>never change the original</strong> string. They always return a new value. Think of it like photocopying - the original stays intact!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Method Categories</CardTitle>
          <CardDescription>Different methods for different tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-lg mb-2">Search</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">indexOf, includes, startsWith, endsWith</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">✂️</div>
              <h4 className="font-bold text-lg mb-2">Extract</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">slice, substring, charAt</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-lg mb-2">Transform</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">replace, trim, toUpperCase, toLowerCase</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold text-lg mb-2">Split</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">split, join (array method)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Searching Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Searching Strings</CardTitle>
              <CardDescription>Find text within strings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Search Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">indexOf() - Find position</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns the index of first occurrence, or -1 if not found
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hello World';
console.log(text.indexOf('World'));  // 6
console.log(text.indexOf('xyz'));    // -1`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">includes() - Check if exists</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns true if substring exists, false otherwise
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'JavaScript is awesome';
console.log(text.includes('Java'));  // true
console.log(text.includes('Python')); // false`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">startsWith() & endsWith()</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Check if string starts or ends with specific text
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const file = 'image.png';
console.log(file.startsWith('image'));  // true
console.log(file.endsWith('.png'));     // true
console.log(file.endsWith('.jpg'));     // false`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Searching Examples"
        description="Finding text in strings"
        code={`const email = 'user@example.com';

// Check if it's a valid email format
if (email.includes('@') && email.includes('.')) {
  console.log('Valid email format');
}

// Find position of @
const atIndex = email.indexOf('@');
console.log('@ is at position:', atIndex);  // 4

// Check domain
if (email.endsWith('.com')) {
  console.log('This is a .com email');
}

// Real-world: File validation
const filename = 'document.pdf';

if (filename.endsWith('.pdf')) {
  console.log('PDF file detected');
} else if (filename.endsWith('.doc') || filename.endsWith('.docx')) {
  console.log('Word document detected');
}

// Check if URL is HTTPS
const url = 'https://example.com';
if (url.startsWith('https://')) {
  console.log('Secure connection');
}

// Search from specific position
const text = 'Hello Hello Hello';
console.log(text.indexOf('Hello'));      // 0 (first occurrence)
console.log(text.indexOf('Hello', 1));   // 6 (search from index 1)
console.log(text.lastIndexOf('Hello'));  // 12 (last occurrence)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Extracting Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Scissors className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Extracting Parts of Strings</CardTitle>
              <CardDescription>Get portions of text</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Extract Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">slice() - Extract portion</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Extract from start to end (supports negative indexes)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'JavaScript';
console.log(text.slice(0, 4));   // 'Java'
console.log(text.slice(4));      // 'Script'
console.log(text.slice(-6));     // 'Script' (from end)`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">substring() - Similar to slice</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Extract between two indexes (no negative indexes)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'JavaScript';
console.log(text.substring(0, 4));  // 'Java'
console.log(text.substring(4));     // 'Script'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">charAt() - Get character at index</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns character at specific position
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hello';
console.log(text.charAt(0));  // 'H'
console.log(text.charAt(4));  // 'o'
console.log(text[0]);         // 'H' (bracket notation works too)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Extracting Examples"
        description="Getting parts of strings"
        code={`const text = 'JavaScript Programming';

// Get first word
const firstWord = text.slice(0, 10);
console.log(firstWord);  // 'JavaScript'

// Get last word
const lastWord = text.slice(11);
console.log(lastWord);  // 'Programming'

// Get last 4 characters (negative index)
const last4 = text.slice(-4);
console.log(last4);  // 'ming'

// Real-world: Extract username from email
const email = 'john.doe@example.com';
const atIndex = email.indexOf('@');
const username = email.slice(0, atIndex);
console.log(username);  // 'john.doe'

// Real-world: Get file extension
const filename = 'document.pdf';
const dotIndex = filename.lastIndexOf('.');
const extension = filename.slice(dotIndex + 1);
console.log(extension);  // 'pdf'

// Get initials
const fullName = 'John Doe';
const spaceIndex = fullName.indexOf(' ');
const firstName = fullName.slice(0, spaceIndex);
const lastName = fullName.slice(spaceIndex + 1);
const initials = firstName[0] + lastName[0];
console.log(initials);  // 'JD'

// Extract domain from URL
const url = 'https://www.example.com/page';
const start = url.indexOf('//') + 2;
const end = url.indexOf('/', start);
const domain = url.slice(start, end);
console.log(domain);  // 'www.example.com'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Case Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowUpDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Changing Case</CardTitle>
              <CardDescription>Convert to uppercase or lowercase</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Case Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">toUpperCase() - All caps</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'hello';
console.log(text.toUpperCase());  // 'HELLO'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">toLowerCase() - All lowercase</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'HELLO';
console.log(text.toLowerCase());  // 'hello'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Case Conversion Examples"
        description="Changing text case"
        code={`const text = 'JavaScript';

// Convert to uppercase
console.log(text.toUpperCase());  // 'JAVASCRIPT'

// Convert to lowercase
console.log(text.toLowerCase());  // 'javascript'

// Real-world: Case-insensitive comparison
const input = 'HELLO';
const expected = 'hello';

if (input.toLowerCase() === expected.toLowerCase()) {
  console.log('Match!');  // This runs
}

// Real-world: Capitalize first letter
const name = 'alice';
const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
console.log(capitalized);  // 'Alice'

// Capitalize all words
const title = 'javascript is awesome';
const words = title.split(' ');
const capitalizedWords = words.map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
);
const result = capitalizedWords.join(' ');
console.log(result);  // 'Javascript Is Awesome'

// Real-world: Email validation (case-insensitive)
const email1 = 'USER@EXAMPLE.COM';
const email2 = 'user@example.com';

if (email1.toLowerCase() === email2.toLowerCase()) {
  console.log('Same email!');
}

// Constant names (convention)
const status = 'success';
const constantName = status.toUpperCase();
console.log(constantName);  // 'SUCCESS'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* trim() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Scissors className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>trim() - Remove Whitespace</CardTitle>
              <CardDescription>Clean up spaces at start and end</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Trim Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">trim() - Both ends</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = '   Hello   ';
console.log(text.trim());  // 'Hello'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">trimStart() - Left side only</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = '   Hello';
console.log(text.trimStart());  // 'Hello'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">trimEnd() - Right side only</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hello   ';
console.log(text.trimEnd());  // 'Hello'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="trim() Examples"
        description="Cleaning up whitespace"
        code={`// Remove spaces from both ends
const text = '   Hello World   ';
console.log(text.trim());  // 'Hello World'

// Real-world: Clean user input
const userInput = '  alice@example.com  ';
const cleanEmail = userInput.trim();
console.log(cleanEmail);  // 'alice@example.com'

// Form validation
const username = '  john  ';
if (username.trim() === '') {
  console.log('Username is required!');
} else {
  console.log('Username:', username.trim());
}

// Clean multiple inputs
const inputs = ['  Alice  ', '  Bob  ', '  Charlie  '];
const cleaned = inputs.map(input => input.trim());
console.log(cleaned);  // ['Alice', 'Bob', 'Charlie']

// trimStart() - Keep trailing spaces
const code = '    const x = 5;';
console.log(code.trimStart());  // 'const x = 5;'

// trimEnd() - Keep leading spaces
const text2 = 'Hello    ';
console.log(text2.trimEnd());  // 'Hello'

// Real-world: Clean CSV data
const csvRow = '  John  ,  25  ,  Developer  ';
const values = csvRow.split(',').map(v => v.trim());
console.log(values);  // ['John', '25', 'Developer']`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* replace() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Repeat className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>replace() - Replace Text</CardTitle>
              <CardDescription>Substitute one text with another</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Replace Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">replace() - First occurrence</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Replaces only the first match
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hello Hello';
console.log(text.replace('Hello', 'Hi'));
// 'Hi Hello' (only first replaced)`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">replaceAll() - All occurrences</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Replaces all matches (ES2021)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hello Hello Hello';
console.log(text.replaceAll('Hello', 'Hi'));
// 'Hi Hi Hi' (all replaced)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="replace() Examples"
        description="Substituting text"
        code={`const text = 'I love JavaScript';

// Replace one word
const newText = text.replace('love', 'enjoy');
console.log(newText);  // 'I enjoy JavaScript'

// Original unchanged
console.log(text);  // 'I love JavaScript'

// Replace all occurrences
const repeated = 'apple apple apple';
const allReplaced = repeated.replaceAll('apple', 'orange');
console.log(allReplaced);  // 'orange orange orange'

// Real-world: Mask credit card
const cardNumber = '1234-5678-9012-3456';
const masked = cardNumber.replace(/\\d(?=\\d{4})/g, '*');
console.log(masked);  // '****-****-****-3456'

// Or simpler masking
const last4 = cardNumber.slice(-4);
const maskedSimple = '****-****-****-' + last4;
console.log(maskedSimple);  // '****-****-****-3456'

// Replace spaces with dashes
const title = 'My Blog Post Title';
const slug = title.toLowerCase().replaceAll(' ', '-');
console.log(slug);  // 'my-blog-post-title'

// Real-world: Clean phone number
const phone = '(123) 456-7890';
const cleaned = phone.replaceAll('(', '')
                     .replaceAll(')', '')
                     .replaceAll(' ', '')
                     .replaceAll('-', '');
console.log(cleaned);  // '1234567890'

// Replace with function
const prices = 'Item costs $10';
const updated = prices.replace('$10', '$20');
console.log(updated);  // 'Item costs $20'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* split() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Scissors className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>split() - String to Array</CardTitle>
              <CardDescription>Break string into array of parts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Split & Join</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Converts string to array (use array <code className="px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-900/30 rounded text-xs">join()</code> to reverse)
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const text = 'apple,banana,orange';

// Split by comma
const fruits = text.split(',');
console.log(fruits);
// ['apple', 'banana', 'orange']

// Join back
const joined = fruits.join(', ');
console.log(joined);
// 'apple, banana, orange'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="split() Examples"
        description="Converting strings to arrays"
        code={`// Split by space
const sentence = 'Hello World JavaScript';
const words = sentence.split(' ');
console.log(words);  // ['Hello', 'World', 'JavaScript']

// Count words
console.log('Word count:', words.length);  // Word count: 3

// Split by comma
const csv = 'John,25,Developer';
const data = csv.split(',');
console.log(data);  // ['John', '25', 'Developer']

// Split into characters
const word = 'Hello';
const chars = word.split('');
console.log(chars);  // ['H', 'e', 'l', 'l', 'o']

// Reverse a string
const reversed = word.split('').reverse().join('');
console.log(reversed);  // 'olleH'

// Split with limit
const text = 'a-b-c-d-e';
const limited = text.split('-', 3);
console.log(limited);  // ['a', 'b', 'c']

// Real-world: Parse URL path
const url = 'https://example.com/blog/post/123';
const parts = url.split('/');
console.log(parts);
// ['https:', '', 'example.com', 'blog', 'post', '123']

const postId = parts[parts.length - 1];
console.log('Post ID:', postId);  // Post ID: 123

// Real-world: Process CSV line
const csvLine = 'Alice,30,Engineer,New York';
const [name, age, job, city] = csvLine.split(',');
console.log(\`\${name} is a \${age} year old \${job} from \${city}\`);
// Alice is a 30 year old Engineer from New York

// Split by multiple spaces
const messyText = 'Hello    World';
const cleaned = messyText.split(/\\s+/);  // regex for one or more spaces
console.log(cleaned);  // ['Hello', 'World']

// Get domain from email
const email = 'user@example.com';
const domain = email.split('@')[1];
console.log(domain);  // 'example.com'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* repeat() & padStart()/padEnd() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Other Useful Methods</CardTitle>
              <CardDescription>repeat(), padStart(), padEnd()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-pink-600 dark:bg-pink-700 px-4 py-3">
              <h4 className="text-white font-semibold">Bonus Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">repeat() - Repeat string</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Ha';
console.log(text.repeat(3));  // 'HaHaHa'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">padStart() - Add padding to start</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const num = '5';
console.log(num.padStart(3, '0'));  // '005'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">padEnd() - Add padding to end</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const text = 'Hi';
console.log(text.padEnd(5, '!'));  // 'Hi!!!'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Other Methods Examples"
        description="repeat(), padStart(), padEnd()"
        code={`// repeat() - Repeat string n times
const star = '*';
const line = star.repeat(10);
console.log(line);  // '**********'

// Create separator
const separator = '-'.repeat(20);
console.log(separator);  // '--------------------'

// padStart() - Add to beginning
const id = '42';
const paddedId = id.padStart(5, '0');
console.log(paddedId);  // '00042'

// Real-world: Format time
const hours = '5';
const minutes = '7';
const time = \`\${hours.padStart(2, '0')}:\${minutes.padStart(2, '0')}\`;
console.log(time);  // '05:07'

// padEnd() - Add to end
const name = 'Alice';
const padded = name.padEnd(10, '.');
console.log(padded);  // 'Alice.....'

// Create aligned text
const items = ['Apple', 'Banana', 'Cherry'];
items.forEach(item => {
  console.log(item.padEnd(10, '.') + '$5');
});
// Apple.....$5
// Banana....$5
// Cherry....$5

// Real-world: Format invoice
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

products.forEach(p => {
  const line = p.name.padEnd(15, '.') + '$' + p.price;
  console.log(line);
});
// Laptop.........$999
// Mouse...........$25
// Keyboard........$75

// Combine methods
const code = '123'.padStart(6, '0').toUpperCase();
console.log(code);  // '000123'`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Reference & Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Store result: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">const upper = text.toUpperCase()</code></li>
                <li>• Use <strong>trim()</strong> on user input</li>
                <li>• Use <strong>toLowerCase()</strong> for comparisons</li>
                <li>• Use <strong>split()</strong> to process CSV data</li>
                <li>• Chain methods for complex operations</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't forget methods return new strings</li>
                <li>• Don't compare without <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">toLowerCase()</code></li>
                <li>• Don't use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">replace()</code> for all occurrences (use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">replaceAll()</code>)</li>
                <li>• Don't forget to trim user input</li>
                <li>• Don't assume method support (check compatibility)</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Method Categories</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Search:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• indexOf() → position</div>
                  <div>• includes() → true/false</div>
                  <div>• startsWith() / endsWith()</div>
                </div>
              </div>
              <div>
                <strong>Extract:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• slice() → portion</div>
                  <div>• substring() → portion</div>
                  <div>• charAt() → character</div>
                </div>
              </div>
              <div>
                <strong>Transform:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• toUpperCase() / toLowerCase()</div>
                  <div>• trim() / trimStart() / trimEnd()</div>
                  <div>• replace() / replaceAll()</div>
                </div>
              </div>
              <div>
                <strong>Split/Join:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• split() → array</div>
                  <div>• Array.join() → string</div>
                  <div>• repeat() → repeated string</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Remember: Immutability</AlertTitle>
            <AlertDescription className="text-base">
              Strings are <strong>immutable</strong> - methods never change the original. Always use the returned value: <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">const result = text.toUpperCase()</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

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
  Lightbulb,
  CheckCircle2,
  XCircle,
  Layers,
  Code,
  Copy,
} from 'lucide-react';

export default function JavaScriptStrings() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript · Data Types"
        title="Strings"
        description="Learn JavaScript string basics—create, combine, and work with text data using quotes and concatenation."
        colorTheme="blue"
      />

      {/* What are Strings? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Strings?
          </CardTitle>
          <CardDescription className="text-base">
            Strings are sequences of characters used to represent text in JavaScript. They are one of the primitive data types.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            A string is simply text data—anything from a single character to a complete novel. Strings are <strong>immutable</strong> (cannot be changed once created) and are surrounded by quotes. Every string has a <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">length</code> property and access to powerful built-in methods for manipulation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">Text Data</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Represent names, messages, labels, or any textual information.
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30">Primitive</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold">Immutable</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Once created, strings cannot be modified. Methods return new strings.
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30">Unchangeable</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold">Easy to Use</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Simple to create with quotes, easy to combine with +, and access with brackets.
              </p>
              <Badge className="mt-2 bg-amber-100/80 text-amber-700 dark:bg-amber-900/30">Beginner-Friendly</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* String Creation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Creating Strings
          </CardTitle>
          <CardDescription className="text-base">
            Two ways to create strings in JavaScript—single quotes and double quotes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Single Quotes */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Single Quotes</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Most Common</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                The most common way to create strings. Use escape character \\ for quotes inside.
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const greeting = 'Hello World';
const name = 'Alice';
const message = 'It\\'s a beautiful day';

console.log(greeting);
// Output: "Hello World"

console.log(message);
// Output: "It's a beautiful day"`}
              </pre>
            </div>

            {/* Double Quotes */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Double Quotes</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Alternative</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Works identically to single quotes. Useful when string contains single quotes.
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const quote = "She said, 'Hello!'";
const city = "New York";
const address = "123 Main St.";

console.log(quote);
// Output: "She said, 'Hello!'"

console.log(city);
// Output: "New York"`}
              </pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              Single and double quotes work exactly the same. Pick one style and stay consistent. For template literals and advanced string features, see the Template Literals topic.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Creating Strings"
        description="All ways to create and use strings"
        code={`// Single Quotes
const greeting = 'Hello World';
const name = 'Alice';
const message = 'It\\'s a beautiful day';

console.log(greeting);
// Output: "Hello World"

console.log(message);
// Output: "It's a beautiful day"

// Double Quotes
const quote = "She said, 'Hello!'";
const city = "New York";
const address = "123 Main St.";

console.log(quote);
// Output: "She said, 'Hello!'"

console.log(city);
// Output: "New York"

// Both work the same - pick one style and be consistent`}
        language="javascript"
        colorTheme="blue"
        icon={Code}
      />

      {/* String Length & Character Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            String Length & Character Access
          </CardTitle>
          <CardDescription className="text-base">
            Every string has a length property and you can access individual characters.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Length Property */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Length Property</h4>
              <p className="text-xs text-muted-foreground">
                Get the number of characters in a string (including spaces)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const message = 'Hello World';
const empty = '';
const spaces = '   ';

console.log(message.length);
console.log(empty.length);
console.log(spaces.length);

// Useful for validation
if (message.length > 0) {
  console.log('String is not empty');
}
// message.length -> 11
// empty.length -> 0
// spaces.length -> 3
// Output: "String is not empty"`}
              </pre>
            </div>

            {/* Character Access */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Character Access</h4>
              <p className="text-xs text-muted-foreground">
                Access characters by index (0-based) using bracket notation or charAt()
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const word = 'JavaScript';

// Bracket notation
console.log(word[0]);
console.log(word[4]);

// charAt method
console.log(word.charAt(0));
console.log(word.charAt(word.length - 1));

// Last character
console.log(word[word.length - 1]);
// word[0] -> "J"
// word[4] -> "S"
// charAt(0) -> "J"
// Last char -> "t"`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: String Length & Character Access"
        description="Working with string length and accessing characters"
        code={`// String Length
const message = 'Hello World';
const empty = '';
const spaces = '   ';

console.log(message.length);
// Output: 11

console.log(empty.length);
// Output: 0

console.log(spaces.length);
// Output: 3

// Useful for validation
if (message.length > 0) {
  console.log('String is not empty');
}
// Output: "String is not empty"

// Character Access
const word = 'JavaScript';

// Bracket notation
console.log(word[0]);
// Output: "J"

console.log(word[4]);
// Output: "S"

// charAt method
console.log(word.charAt(0));
// Output: "J"

console.log(word.charAt(word.length - 1));
// Output: "t"

// Last character
console.log(word[word.length - 1]);
// Output: "t"`}
        language="javascript"
        colorTheme="blue"
        icon={Layers}
      />

      {/* String Concatenation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Copy className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            String Concatenation
          </CardTitle>
          <CardDescription className="text-base">
            Combining strings together using the + operator.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">Using the + Operator</h4>
            <p className="text-xs text-muted-foreground">
              The most common way to combine strings is with the plus (+) operator
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const firstName = 'John';
const lastName = 'Doe';

// Combining strings
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Combining with numbers (converts to string)
const age = 25;
const message = 'I am ' + age + ' years old';
console.log(message);
// fullName -> "John Doe"
// message -> "I am 25 years old"`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: String Concatenation"
        description="Combining strings with the + operator"
        code={`const firstName = 'John';
const lastName = 'Doe';

// Combining strings
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// Output: "John Doe"

// Combining with numbers (converts to string)
const age = 25;
const message = 'I am ' + age + ' years old';
console.log(message);
// Output: "I am 25 years old"

// Multiple concatenations
const greeting = 'Hello, ' + firstName + ' ' + lastName + '!';
console.log(greeting);
// Output: "Hello, John Doe!"

// Building dynamic strings
const item = 'book';
const quantity = 3;
const price = 15;
const total = quantity * price;

const orderSummary = 'Order: ' + quantity + ' ' + item + 's for $' + total;
console.log(orderSummary);
// Output: "Order: 3 books for $45"`}
        language="javascript"
        colorTheme="blue"
        icon={Copy}
      />

      {/* Common Use Cases */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Common Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Practical examples of working with strings in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Building Messages */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Building Messages
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const username = 'Alice';
const score = 95;

// Build a welcome message
const welcome = 'Hello, ' + username + '!';
console.log(welcome);

// Build a score message
const scoreMsg = 'Your score is: ' + score;
console.log(scoreMsg);
// welcome -> "Hello, Alice!"
// scoreMsg -> "Your score is: 95"`}
              </pre>
            </div>

            {/* Example 2: Storing Text Data */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Storing User Information
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Store user data
const firstName = 'John';
const lastName = 'Doe';
const email = 'john@example.com';
const country = 'USA';

// Use them together
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// Output: "John Doe"

console.log(email);
// Output: "john@example.com"`}
              </pre>
            </div>

            {/* Example 3: File Paths */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Working with Paths
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const folder = 'documents';
const filename = 'report.pdf';

// Build file path
const filePath = folder + '/' + filename;
console.log(filePath);

// URL building
const domain = 'example.com';
const page = 'about';
const url = 'https://' + domain + '/' + page;
console.log(url);
// filePath -> "documents/report.pdf"
// url -> "https://example.com/about"`}
              </pre>
            </div>

            {/* Example 4: Display Text */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Display Labels
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const productName = 'Laptop';
const price = '999';
const currency = '$';

// Create price label
const priceLabel = currency + price;
console.log(priceLabel);

// Create full label
const label = productName + ': ' + priceLabel;
console.log(label);
// priceLabel -> "$999"
// label -> "Laptop: $999"`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Common Use Cases"
        description="Practical patterns for working with strings"
        code={`// Building Messages
const username = 'Alice';
const score = 95;

const welcome = 'Hello, ' + username + '!';
console.log(welcome);
// Output: "Hello, Alice!"

const scoreMsg = 'Your score is: ' + score;
console.log(scoreMsg);
// Output: "Your score is: 95"

// Storing User Information
const firstName = 'John';
const lastName = 'Doe';
const email = 'john@example.com';

const fullName = firstName + ' ' + lastName;
console.log(fullName);
// Output: "John Doe"

console.log(email);
// Output: "john@example.com"

// Working with Paths
const folder = 'documents';
const filename = 'report.pdf';

const filePath = folder + '/' + filename;
console.log(filePath);
// Output: "documents/report.pdf"

const domain = 'example.com';
const page = 'about';
const url = 'https://' + domain + '/' + page;
console.log(url);
// Output: "https://example.com/about"

// Display Labels
const productName = 'Laptop';
const price = '999';
const currency = '$';

const priceLabel = currency + price;
console.log(priceLabel);
// Output: "$999"

const label = productName + ': ' + priceLabel;
console.log(label);
// Output: "Laptop: $999"`}
        language="javascript"
        colorTheme="purple"
        icon={Sparkles}
      />

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
              <li>✅ Use single or double quotes consistently throughout your code.</li>
              <li>✅ Remember that strings are immutable (cannot be changed).</li>
              <li>✅ Use the + operator to combine strings.</li>
              <li>✅ Check the <code className="font-mono text-xs">length</code> property to get string size.</li>
              <li>✅ Use bracket notation <code className="font-mono text-xs">[0]</code> to access characters.</li>
              <li>✅ Store strings in variables with meaningful names.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" /> Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't try to modify strings directly—they're immutable.</li>
              <li>❌ Don't mix quote styles randomly in your code.</li>
              <li>❌ Don't forget to escape quotes inside strings.</li>
              <li>❌ Don't access indices beyond string length.</li>
              <li>❌ Don't forget that strings are case-sensitive.</li>
              <li>❌ Don't compare strings with numbers without converting first.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

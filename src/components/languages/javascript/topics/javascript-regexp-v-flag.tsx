'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Search } from 'lucide-react';

export default function JavaScriptRegExpVFlag() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Search}
        category="Modern JavaScript"
        title="RegExp v Flag"
        description="Enhanced regex with set notation and properties (ES2024)"
        colorTheme="rose"
      />

      <Card className="border-2 border-rose-300 dark:border-rose-700 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg">
              <Search className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is the v Flag? 🔍
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded">v</code> flag gives regex 
                <strong className="text-rose-700 dark:text-rose-400"> superpowers</strong>! It enables <strong className="text-pink-700 dark:text-pink-400">set notation</strong>, 
                string properties, and better Unicode support - making complex patterns much easier to write!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-300 dark:border-rose-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Set Operations 🎯</CardTitle>
          <CardDescription>Combine character classes like math sets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-3">Set Notation Examples</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Intersection: Characters in BOTH sets
const intersection = /[\\p{Script=Greek}&&[A-Z]]/v;
// Matches uppercase Greek letters

// Subtraction: Characters in first set but NOT second
const subtraction = /[\\p{Letter}--[A-Z]]/v;
// Matches all letters EXCEPT uppercase A-Z

// Union (works like normal)
const union = /[a-z\\p{Number}]/v;
// Matches lowercase letters OR numbers`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-300 dark:border-rose-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">String Properties 📝</CardTitle>
          <CardDescription>Match multi-character sequences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example: Emoji Matching</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Match specific emoji
const emojiPattern = /\\p{RGI_Emoji}/v;

console.log(emojiPattern.test('😀')); // true
console.log(emojiPattern.test('👍')); // true
console.log(emojiPattern.test('🎉')); // true
console.log(emojiPattern.test('a'));  // false

// Match emoji sequences (like flag emojis)
const flagPattern = /\\p{RGI_Emoji_Flag_Sequence}/v;
console.log(flagPattern.test('🇺🇸')); // true`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-300 dark:border-rose-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 1: Validate Usernames</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Allow letters and numbers, but NOT special symbols
const usernamePattern = /^[\\p{Letter}\\p{Number}--[\\p{Symbol}]]+$/v;

console.log(usernamePattern.test('alice123'));   // true
console.log(usernamePattern.test('user_name'));  // false (has _)
console.log(usernamePattern.test('test@user'));  // false (has @)

// More readable than: /^[a-zA-Z0-9]+$/`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 2: Script-Specific Text</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Match only Cyrillic letters (Russian, etc.)
const cyrillicOnly = /^[\\p{Script=Cyrillic}]+$/v;

console.log(cyrillicOnly.test('Привет'));  // true
console.log(cyrillicOnly.test('Hello'));   // false
console.log(cyrillicOnly.test('مرحبا'));   // false

// Match Arabic or Hebrew
const rtlPattern = /[\\p{Script=Arabic}\\p{Script=Hebrew}]/v;

console.log(rtlPattern.test('مرحبا'));    // true (Arabic)
console.log(rtlPattern.test('שלום'));     // true (Hebrew)`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 3: Remove Emojis</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Remove all emoji from text
function removeEmojis(text) {
  return text.replace(/\\p{Emoji}/gv, '');
}

console.log(removeEmojis('Hello 👋 World 🌍'));
// Output: 'Hello  World '

// Keep only text and numbers
function cleanText(text) {
  return text.replace(/[^\\p{Letter}\\p{Number}\\s]/gv, '');
}

console.log(cleanText('Hello! 👋 World@ 123'));
// Output: 'Hello  World 123'`}</code></pre>
          </div>

          <div className="rounded-lg bg-indigo-50 dark:bg-indigo-900/20 p-4 border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Example 4: Set Operations</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Lowercase letters in Latin or Greek
const pattern1 = /[\\p{Script=Latin}&&[\\p{Lowercase_Letter}]]/v;
console.log(pattern1.test('a')); // true
console.log(pattern1.test('A')); // false

// All letters EXCEPT ASCII
const nonAscii = /[\\p{Letter}--[a-zA-Z]]/v;
console.log(nonAscii.test('ñ'));     // true
console.log(nonAscii.test('a'));     // false
console.log(nonAscii.test('Привет'[0])); // true

// Decimal digits from any script
const allDigits = /[\\p{Decimal_Number}]/v;
console.log(allDigits.test('5'));    // true (ASCII)
console.log(allDigits.test('५'));    // true (Devanagari)
console.log(allDigits.test('٥'));    // true (Arabic-Indic)`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-300 dark:border-rose-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Benefits 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Set Operations</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Intersection (&&), subtraction (--), union - like math!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Better Unicode</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Proper emoji support, script-specific matching
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">More Readable</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <code>\\p{'{'}{'}'}Letter{'}'}</code> is clearer than complex character ranges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-300 dark:border-rose-700 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 dark:from-rose-950/20 dark:via-pink-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔍</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">v Flag</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enhanced regex with set notation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Set Operations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Intersection (&&), subtraction (--)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🌍</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Unicode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Better emoji and script support
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2024</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Latest regex enhancement
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

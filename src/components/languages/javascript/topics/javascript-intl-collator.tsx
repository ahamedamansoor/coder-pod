'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Type, ArrowUpDown, Languages, Sparkles } from 'lucide-react';

export default function JavaScriptIntlCollator() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript Internationalization"
        title="Intl.Collator"
        description="Language-sensitive string comparison and sorting"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <Type className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Sort Strings Correctly
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Different languages have different sorting rules. Collator sorts strings according to the rules of each language - perfect for alphabetizing names, sorting lists, and comparing text.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            Syntax & Options
          </CardTitle>
          <CardDescription>Understanding how to use Intl.Collator</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Constructor Syntax</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                new Intl.Collator(locale, options)
              </code>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                collator.compare(string1, string2)
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-purple-600 dark:text-purple-400 font-bold mb-3">Parameter: locale</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Language code for sorting rules
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">"en-US"</code> - English sorting</div>
                <div>• <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">"de-DE"</code> - German sorting</div>
                <div>• <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">"sv-SE"</code> - Swedish (ä, ö last)</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-fuchsia-600 dark:text-fuchsia-400 font-bold mb-3">Parameter: options</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Control comparison behavior
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-fuchsia-100 dark:bg-fuchsia-900/30 px-1 rounded">sensitivity</code> - Comparison level</div>
                <div>• <code className="bg-fuchsia-100 dark:bg-fuchsia-900/30 px-1 rounded">numeric</code> - Sort "10" after "2"</div>
                <div>• <code className="bg-fuchsia-100 dark:bg-fuchsia-900/30 px-1 rounded">caseFirst</code> - Upper/lower first</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10 border-l-4 border-pink-500">
            <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Sensitivity Levels</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-pink-100 dark:bg-pink-900/30 px-1.5 py-0.5 rounded text-xs">base</code> - Only base letters differ (a ≠ b)</div>
                  <div>• <code className="bg-pink-100 dark:bg-pink-900/30 px-1.5 py-0.5 rounded text-xs">accent</code> - Accents matter (a ≠ á)</div>
                </div>
              </div>
              <div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-pink-100 dark:bg-pink-900/30 px-1.5 py-0.5 rounded text-xs">case</code> - Case matters (a ≠ A)</div>
                  <div>• <code className="bg-pink-100 dark:bg-pink-900/30 px-1.5 py-0.5 rounded text-xs">variant</code> - All differences matter</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Return Values</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div>• Returns <code className="bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded text-xs">-1</code> if string1 comes before string2</div>
              <div>• Returns <code className="bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded text-xs">0</code> if strings are equal</div>
              <div>• Returns <code className="bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded text-xs">1</code> if string1 comes after string2</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Sorting"
        description="Sort arrays using locale-specific rules"
        language="javascript"
        colorTheme="purple"
        code={`const names = ['Zebra', 'Äpfel', 'Apfel', 'Österreich'];

// Standard sort (wrong for German)
console.log(names.sort());
// ["Apfel", "Zebra", "Äpfel", "Österreich"] ❌

// German collator sort (correct)
const germanSort = new Intl.Collator('de').compare;
console.log(names.sort(germanSort));
// ["Apfel", "Äpfel", "Österreich", "Zebra"] ✅

// English sort
const englishSort = new Intl.Collator('en').compare;
const words = ['café', 'resume', 'cafe', 'résumé'];
console.log(words.sort(englishSort));
// ["cafe", "café", "resume", "résumé"]`}
      />

      <CodeSnippet
        title="Case Sensitivity"
        description="Control how uppercase and lowercase are handled"
        language="javascript"
        colorTheme="fuchsia"
        code={`const items = ['Apple', 'apple', 'Banana', 'banana'];

// Case-sensitive (default)
const caseSensitive = new Intl.Collator('en', { 
  sensitivity: 'case' 
}).compare;
console.log(items.sort(caseSensitive));
// ["Apple", "Banana", "apple", "banana"]

// Case-insensitive
const caseInsensitive = new Intl.Collator('en', { 
  sensitivity: 'base' 
}).compare;
console.log(items.sort(caseInsensitive));
// ["Apple", "apple", "Banana", "banana"]

// Variant (most precise)
const variant = new Intl.Collator('en', { 
  sensitivity: 'variant' 
}).compare;
console.log(items.sort(variant));
// ["Apple", "Banana", "apple", "banana"]`}
      />

      <CodeSnippet
        title="Accent Sensitivity"
        description="Handle accented characters correctly"
        language="javascript"
        colorTheme="pink"
        code={`const words = ['cote', 'coté', 'côte', 'côté'];

// Accent-sensitive (default)
const accentSensitive = new Intl.Collator('fr', { 
  sensitivity: 'accent' 
}).compare;
console.log(words.sort(accentSensitive));
// ["cote", "coté", "côte", "côté"]

// Ignore accents
const ignoreAccents = new Intl.Collator('fr', { 
  sensitivity: 'base' 
}).compare;
console.log(words.sort(ignoreAccents));
// ["cote", "coté", "côte", "côté"] (treated as equal)

// Different locale
const spanishSort = new Intl.Collator('es').compare;
const spanish = ['ñ', 'n', 'o'];
console.log(spanish.sort(spanishSort));
// ["n", "ñ", "o"] (ñ comes after n in Spanish)`}
      />

      <CodeSnippet
        title="Numeric Sorting"
        description="Sort strings containing numbers correctly"
        language="javascript"
        colorTheme="indigo"
        code={`const files = ['file1.txt', 'file10.txt', 'file2.txt', 'file20.txt'];

// Standard sort (wrong)
console.log(files.sort());
// ["file1.txt", "file10.txt", "file2.txt", "file20.txt"] ❌

// Numeric collator (correct)
const numericSort = new Intl.Collator('en', { 
  numeric: true 
}).compare;
console.log(files.sort(numericSort));
// ["file1.txt", "file2.txt", "file10.txt", "file20.txt"] ✅

// Works with mixed content
const mixed = ['item 1', 'item 100', 'item 20', 'item 3'];
console.log(mixed.sort(new Intl.Collator('en', { 
  numeric: true 
}).compare));
// ["item 1", "item 3", "item 20", "item 100"]`}
      />

      <CodeSnippet
        title="String Comparison"
        description="Compare two strings for equality or order"
        language="javascript"
        colorTheme="cyan"
        code={`const collator = new Intl.Collator('en');

// Returns -1, 0, or 1
console.log(collator.compare('a', 'b'));  // -1 (a < b)
console.log(collator.compare('b', 'a'));  // 1  (b > a)
console.log(collator.compare('a', 'a'));  // 0  (equal)

// Case-insensitive comparison
const caseInsensitive = new Intl.Collator('en', { 
  sensitivity: 'base' 
});
console.log(caseInsensitive.compare('Apple', 'apple'));  // 0 (equal)

// Check if strings are equal (locale-aware)
function areEqual(str1, str2, locale = 'en') {
  const collator = new Intl.Collator(locale, { 
    sensitivity: 'base' 
  });
  return collator.compare(str1, str2) === 0;
}

console.log(areEqual('café', 'cafe'));      // false
console.log(areEqual('Apple', 'apple'));    // true (case-insensitive)`}
      />

      <CodeSnippet
        title="Search in Arrays"
        description="Find items using locale-aware comparison"
        language="javascript"
        colorTheme="blue"
        code={`const collator = new Intl.Collator('en', { 
  sensitivity: 'base' 
});

const names = ['Alice', 'Bob', 'Charlie', 'David'];

// Find by case-insensitive match
function findName(searchTerm) {
  return names.find(name => 
    collator.compare(name, searchTerm) === 0
  );
}

console.log(findName('alice'));    // "Alice"
console.log(findName('CHARLIE'));  // "Charlie"

// Filter with accent insensitivity
const cities = ['São Paulo', 'Sao Paulo', 'Paris'];
const query = 'sao paulo';

const matches = cities.filter(city => 
  collator.compare(city.toLowerCase(), query) === 0
);
console.log(matches);  // ["São Paulo", "Sao Paulo"]`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Sensitivity Options</CardTitle>
          <CardDescription>How Collator handles different types of differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Sensitivity Levels</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">base</Badge> Ignore case & accents</div>
                <div><Badge variant="outline">accent</Badge> Consider accents, ignore case</div>
                <div><Badge variant="outline">case</Badge> Consider case, ignore accents</div>
                <div><Badge variant="outline">variant</Badge> Consider everything (default)</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/20 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-3">Comparison Examples</h4>
              <div className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <div>a vs A: <Badge>base</Badge> equal</div>
                <div>a vs á: <Badge>base</Badge> equal</div>
                <div>a vs á: <Badge>accent</Badge> different</div>
                <div>a vs A: <Badge>case</Badge> different</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Usage Options</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">sort</Badge> For sorting (default)</div>
                <div><Badge variant="outline">search</Badge> For searching strings</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Other Options</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">numeric</Badge> Sort numbers correctly</div>
                <div><Badge variant="outline">ignorePunctuation</Badge> Ignore punctuation</div>
              </div>
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
                <ArrowUpDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Correct Sorting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">collator.compare</code> with <code className="text-xs">Array.sort()</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <Languages className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Language Rules</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each language has different sorting rules (ñ, ä, etc.)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <Type className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Sensitivity Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Choose how to handle case, accents, and punctuation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Numeric Option</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sort "file1, file2, file10" correctly with <code className="text-xs">numeric: true</code>
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

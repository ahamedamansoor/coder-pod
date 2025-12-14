'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Globe,
  Calendar,
  DollarSign,
  Type,
  Hash,
  Sparkles,
  Lightbulb,
} from 'lucide-react';

export default function JavaScriptIntl() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Globe}
        category="JavaScript Internationalization"
        title="Intl API"
        description="Internationalization and localization for dates, numbers, and text"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-sky-50/30 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-xl">
              <Globe className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                What is the Intl API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="text-sm bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Intl</code> object provides <strong className="text-blue-700 dark:text-blue-400">language-sensitive</strong> string comparison, number formatting, and date/time formatting. Build apps that work perfectly in any language or region!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20 border-2 border-blue-300 dark:border-blue-700">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">DateTimeFormat</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Format dates and times</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-950/20 border-2 border-cyan-300 dark:border-cyan-700">
              <DollarSign className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">NumberFormat</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Format numbers & currency</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-900/30 dark:to-sky-950/20 border-2 border-sky-300 dark:border-sky-700">
              <Type className="w-8 h-8 text-sky-600 dark:text-sky-400 mb-2" />
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-1">Collator</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Compare & sort strings</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-950/20 border-2 border-indigo-300 dark:border-indigo-700">
              <Hash className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">PluralRules</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Handle pluralization</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use Intl?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Built-in browser support for <strong>150+ locales</strong>. No external libraries needed! Perfect for building global apps.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            Syntax & Structure
          </CardTitle>
          <CardDescription>Understanding the Intl API pattern</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">General Pattern</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                new Intl.API(locale, options).format(value)
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">1. locale</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Language/region code like <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">"en-US"</code> or <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">"fr-FR"</code>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold mb-2">2. options</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Object with formatting preferences (style, currency, notation, etc.)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800">
              <div className="text-sky-600 dark:text-sky-400 font-bold mb-2">3. format()</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Method to format the value according to locale & options
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">Pro Tip</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Create the formatter once and reuse it for better performance when formatting multiple values!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            The Four APIs
          </CardTitle>
          <CardDescription>Each API serves a specific formatting need</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-l-4 border-blue-500">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">Intl.DateTimeFormat</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Format dates and times for different locales</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                <code className="text-xs text-slate-800 dark:text-emerald-400 font-mono">new Intl.DateTimeFormat('en-US', options).format(date)</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/20 border-l-4 border-cyan-500">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <div>
                  <h4 className="font-bold text-cyan-900 dark:text-cyan-100">Intl.NumberFormat</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Format numbers, currency, percentages, and units</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                <code className="text-xs text-slate-800 dark:text-emerald-400 font-mono">new Intl.NumberFormat('en-US', options).format(number)</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/20 border-l-4 border-sky-500">
              <div className="flex items-start gap-3 mb-3">
                <Type className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                <div>
                  <h4 className="font-bold text-sky-900 dark:text-sky-100">Intl.Collator</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Compare and sort strings with locale-specific rules</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                <code className="text-xs text-slate-800 dark:text-emerald-400 font-mono">new Intl.Collator('de').compare(string1, string2)</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/20 border-l-4 border-indigo-500">
              <div className="flex items-start gap-3 mb-3">
                <Hash className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100">Intl.PluralRules</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Determine plural category for numbers (one, few, many, other)</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                <code className="text-xs text-slate-800 dark:text-emerald-400 font-mono">new Intl.PluralRules('en-US').select(count)</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Quick Examples"
        description="See all Intl APIs in action"
        language="javascript"
        colorTheme="blue"
        code={`// 1. DateTimeFormat - Format dates
const date = new Date('2024-12-14');
console.log(new Intl.DateTimeFormat('en-US').format(date));
// "12/14/2024"

console.log(new Intl.DateTimeFormat('de-DE').format(date));
// "14.12.2024"

// 2. NumberFormat - Format numbers and currency
const number = 1234567.89;
console.log(new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}).format(number));
// "$1,234,567.89"

console.log(new Intl.NumberFormat('ja-JP', { 
  style: 'currency', 
  currency: 'JPY' 
}).format(number));
// "¥1,234,568"

// 3. Collator - Sort strings correctly
const names = ['Äpfel', 'Zebra', 'Apfel'];
console.log(names.sort(new Intl.Collator('de').compare));
// ["Apfel", "Äpfel", "Zebra"]

// 4. PluralRules - Handle pluralization
const pr = new Intl.PluralRules('en-US');
console.log(pr.select(0));  // "other"
console.log(pr.select(1));  // "one"
console.log(pr.select(2));  // "other"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Supported Locales</CardTitle>
          <CardDescription>How to check and use locale codes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeSnippet
            title="Get Supported Locales"
            language="javascript"
            colorTheme="cyan"
            code={`// Check supported locales
console.log(Intl.DateTimeFormat.supportedLocalesOf(['en-US', 'fr-FR', 'ja-JP']));
// ["en-US", "fr-FR", "ja-JP"]

// Common locale codes
const locales = {
  'en-US': 'English (United States)',
  'en-GB': 'English (United Kingdom)',
  'fr-FR': 'French (France)',
  'de-DE': 'German (Germany)',
  'es-ES': 'Spanish (Spain)',
  'ja-JP': 'Japanese (Japan)',
  'zh-CN': 'Chinese (Simplified)',
  'ar-SA': 'Arabic (Saudi Arabia)',
  'hi-IN': 'Hindi (India)',
  'pt-BR': 'Portuguese (Brazil)'
};

// Use user's locale
const userLocale = navigator.language; // e.g., "en-US"
console.log(new Intl.DateTimeFormat(userLocale).format(new Date()));`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browser Support</CardTitle>
          <CardDescription>Excellent support across all modern browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Fully Supported</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Chrome 24+</li>
                <li>• Firefox 29+</li>
                <li>• Safari 10+</li>
                <li>• Edge 12+</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📦 No Dependencies</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built into JavaScript! No need for libraries like moment.js or numeral.js for internationalization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Global Ready</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Support 150+ locales out of the box
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">4 Main APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DateTimeFormat, NumberFormat, Collator, PluralRules
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No Dependencies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built-in browser API, no libraries needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto Locale</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">navigator.language</code> for user's locale
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

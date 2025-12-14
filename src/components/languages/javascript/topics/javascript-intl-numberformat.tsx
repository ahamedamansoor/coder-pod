'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { DollarSign, Percent, Hash, Sparkles } from 'lucide-react';

export default function JavaScriptIntlNumberFormat() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={DollarSign}
        category="JavaScript Internationalization"
        title="Intl.NumberFormat"
        description="Format numbers, currency, and percentages"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <DollarSign className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Format Numbers Correctly
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Display numbers with proper thousand separators, decimal points, currency symbols, and percentage signs based on the user's locale.
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
          <CardDescription>Understanding how to use Intl.NumberFormat</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold text-lg text-green-900 dark:text-green-100 mb-4">Constructor Syntax</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                new Intl.NumberFormat(locale, options)
              </code>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                formatter.format(number)
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800">
              <div className="text-green-600 dark:text-green-400 font-bold mb-3">Parameter: locale</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Language/region code for number formatting
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">"en-US"</code> - US (1,234.56)</div>
                <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">"de-DE"</code> - German (1.234,56)</div>
                <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">"fr-FR"</code> - French (1 234,56)</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold mb-3">Parameter: options</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Configuration object for formatting
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1 rounded">style</code> - decimal, currency, percent, unit</div>
                <div>• <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1 rounded">currency</code> - Currency code (USD, EUR, etc.)</div>
                <div>• <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1 rounded">notation</code> - standard, scientific, compact</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/10 border-l-4 border-teal-500">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Style Options</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Available styles:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">decimal</code> - Plain numbers (default)</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">currency</code> - Money with symbols</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">percent</code> - Percentage values</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">unit</code> - Measurements (km, kg, etc.)</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Notation options:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">standard</code> - Regular format</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">scientific</code> - 1.23E6</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">engineering</code> - 1.23E+6</div>
                  <div>• <code className="bg-teal-100 dark:bg-teal-900/30 px-1.5 py-0.5 rounded text-xs">compact</code> - 1.2M</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Other Common Options</h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
              <div className="space-y-1">
                <div>• <code>minimumFractionDigits</code> - Min decimals</div>
                <div>• <code>maximumFractionDigits</code> - Max decimals</div>
                <div>• <code>minimumIntegerDigits</code> - Min integer digits</div>
              </div>
              <div className="space-y-1">
                <div>• <code>useGrouping</code> - Show separators</div>
                <div>• <code>signDisplay</code> - Show +/- signs</div>
                <div>• <code>currencyDisplay</code> - Symbol vs code</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Number Formatting"
        description="Format numbers with locale-specific separators"
        language="javascript"
        colorTheme="green"
        code={`const number = 1234567.89;

// US English: 1,234,567.89
console.log(new Intl.NumberFormat('en-US').format(number));

// German: 1.234.567,89 (dot for thousands, comma for decimal)
console.log(new Intl.NumberFormat('de-DE').format(number));

// French: 1 234 567,89 (space for thousands)
console.log(new Intl.NumberFormat('fr-FR').format(number));

// Indian: 12,34,567.89 (different grouping)
console.log(new Intl.NumberFormat('en-IN').format(number));`}
      />

      <CodeSnippet
        title="Currency Formatting"
        description="Display prices with currency symbols"
        language="javascript"
        colorTheme="emerald"
        code={`const price = 1234.56;

// US Dollars: $1,234.56
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(price));

// Euros: 1.234,56 €
console.log(new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
}).format(price));

// Japanese Yen: ¥1,235 (no decimals)
console.log(new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY'
}).format(price));

// British Pounds: £1,234.56
console.log(new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
}).format(price));`}
      />

      <CodeSnippet
        title="Currency Display Options"
        description="Control how currency symbols are shown"
        language="javascript"
        colorTheme="teal"
        code={`const amount = 100;

// Symbol (default): $100.00
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol'
}).format(amount));

// Code: USD 100.00
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'code'
}).format(amount));

// Name: 100.00 US dollars
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'name'
}).format(amount));

// Narrow: $100.00 (compact symbol)
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol'
}).format(amount));`}
      />

      <CodeSnippet
        title="Percentage Formatting"
        description="Display percentages correctly"
        language="javascript"
        colorTheme="cyan"
        code={`// 0.1234 = 12.34%
console.log(new Intl.NumberFormat('en-US', {
  style: 'percent'
}).format(0.1234));

// With decimals: 12.345%
console.log(new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 3
}).format(0.12345));

// Different locale: 12,34 % (French)
console.log(new Intl.NumberFormat('fr-FR', {
  style: 'percent'
}).format(0.1234));`}
      />

      <CodeSnippet
        title="Decimal Places"
        description="Control decimal precision"
        language="javascript"
        colorTheme="blue"
        code={`const number = 123.456789;

// Minimum 2, maximum 2: 123.46
console.log(new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(number));

// Minimum 0, maximum 2: 123.46
console.log(new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
}).format(number));

// No decimals: 123
console.log(new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0
}).format(number));

// Force decimals even for whole numbers: 100.00
console.log(new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(100));`}
      />

      <CodeSnippet
        title="Compact Notation"
        description="Display large numbers in short form"
        language="javascript"
        colorTheme="purple"
        code={`const large = 1500000;

// Short compact: 1.5M
console.log(new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
}).format(large));

// Long compact: 1.5 million
console.log(new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'long'
}).format(large));

// Different locales
console.log(new Intl.NumberFormat('de-DE', {
  notation: 'compact'
}).format(large)); // "1,5 Mio."

console.log(new Intl.NumberFormat('ja-JP', {
  notation: 'compact'
}).format(large)); // "150万"

// With currency: $1.5M
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact'
}).format(large));`}
      />

      <CodeSnippet
        title="Units"
        description="Format measurements with units"
        language="javascript"
        colorTheme="orange"
        code={`// Kilograms: 5 kg
console.log(new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilogram'
}).format(5));

// Kilometers per hour: 100 km/h
console.log(new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(100));

// Celsius: 23°C
console.log(new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius'
}).format(23));

// Gigabytes: 256 GB
console.log(new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'gigabyte'
}).format(256));

// Long format: 5 kilograms
console.log(new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilogram',
  unitDisplay: 'long'
}).format(5));`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Options</CardTitle>
          <CardDescription>Frequently used configuration options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Styles</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">decimal</Badge> 1,234.56</div>
                <div><Badge variant="outline">currency</Badge> $1,234.56</div>
                <div><Badge variant="outline">percent</Badge> 12%</div>
                <div><Badge variant="outline">unit</Badge> 5 kg</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">Notation</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">standard</Badge> 1,500,000</div>
                <div><Badge variant="outline">scientific</Badge> 1.5E6</div>
                <div><Badge variant="outline">engineering</Badge> 1.5E6</div>
                <div><Badge variant="outline">compact</Badge> 1.5M</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Currency Display</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">symbol</Badge> $100</div>
                <div><Badge variant="outline">code</Badge> USD 100</div>
                <div><Badge variant="outline">name</Badge> 100 US dollars</div>
                <div><Badge variant="outline">narrowSymbol</Badge> $100</div>
              </div>
            </div>
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
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multiple Styles</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    decimal, currency, percent, and unit
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <Percent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Compact Notation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Display 1.5M instead of 1,500,000
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <Hash className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Decimal Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set min/max fraction digits
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Any Currency</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Support all world currencies (USD, EUR, JPY, etc.)
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

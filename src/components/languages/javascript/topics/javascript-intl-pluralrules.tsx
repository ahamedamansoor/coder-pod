'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Hash, MessageSquare, Languages, Sparkles } from 'lucide-react';

export default function JavaScriptIntlPluralRules() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Hash}
        category="JavaScript Internationalization"
        title="Intl.PluralRules"
        description="Handle pluralization for different languages"
        colorTheme="orange"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-yellow-50/30 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-xl">
              <Hash className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Pluralization Made Easy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Different languages have different plural forms. English has singular/plural, but Polish has 3 forms, and Arabic has 6! PluralRules tells you which form to use for any number.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            Syntax & Concepts
          </CardTitle>
          <CardDescription>Understanding how to use Intl.PluralRules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-4">Constructor Syntax</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                new Intl.PluralRules(locale, options)
              </code>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                pluralRules.select(number)
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800">
              <div className="text-orange-600 dark:text-orange-400 font-bold mb-3">Parameter: locale</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Language code for plural rules
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">"en-US"</code> - English (2 forms)</div>
                <div>• <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">"pl-PL"</code> - Polish (3 forms)</div>
                <div>• <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">"ar-SA"</code> - Arabic (6 forms)</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800">
              <div className="text-amber-600 dark:text-amber-400 font-bold mb-3">Parameter: options</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Configure plural type
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">type</code> - "cardinal" or "ordinal"</div>
                <div>• <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">minimumFractionDigits</code></div>
                <div>• <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">maximumFractionDigits</code></div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-950/20 dark:to-lime-950/10 border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Plural Categories</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <div className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Cardinal (counting):</div>
                <div className="space-y-1">
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">zero</code> - 0 items</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">one</code> - 1 item</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">two</code> - 2 items (rare)</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">few</code> - few items</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">many</code> - many items</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">other</code> - other amounts</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Ordinal (ordering):</div>
                <div className="space-y-1">
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">one</code> - 1st, 21st, 31st</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">two</code> - 2nd, 22nd, 32nd</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">few</code> - 3rd, 23rd, 33rd</div>
                  <div>• <code className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs">other</code> - 4th, 5th, 6th...</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">How It Works</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div>1. <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">.select(n)</code> returns category string</div>
              <div>2. Use returned category to select the right message</div>
              <div>3. Different languages return different categories for same number</div>
              <div>4. English only uses "one" and "other" (simple)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Usage"
        description="Get the plural category for a number"
        language="javascript"
        colorTheme="orange"
        code={`const pr = new Intl.PluralRules('en-US');

console.log(pr.select(0));   // "other"
console.log(pr.select(1));   // "one"
console.log(pr.select(2));   // "other"
console.log(pr.select(5));   // "other"
console.log(pr.select(10));  // "other"

// Create a message function
function getMessage(count) {
  const rule = pr.select(count);
  const messages = {
    one: \`\${count} item\`,
    other: \`\${count} items\`
  };
  return messages[rule];
}

console.log(getMessage(1));   // "1 item"
console.log(getMessage(5));   // "5 items"`}
      />

      <CodeSnippet
        title="Different Languages"
        description="Languages have different plural rules"
        language="javascript"
        colorTheme="amber"
        code={`// English: singular (one) and plural (other)
const enPR = new Intl.PluralRules('en-US');
console.log(enPR.select(1));   // "one"
console.log(enPR.select(2));   // "other"

// Polish: 3 forms (one, few, many)
const plPR = new Intl.PluralRules('pl-PL');
console.log(plPR.select(1));   // "one"    (1 kot)
console.log(plPR.select(2));   // "few"    (2 koty)
console.log(plPR.select(5));   // "many"   (5 kotów)

// Arabic: 6 forms!
const arPR = new Intl.PluralRules('ar-EG');
console.log(arPR.select(0));   // "zero"
console.log(arPR.select(1));   // "one"
console.log(arPR.select(2));   // "two"
console.log(arPR.select(3));   // "few"
console.log(arPR.select(11));  // "many"
console.log(arPR.select(100)); // "other"`}
      />

      <CodeSnippet
        title="Ordinal Numbers"
        description="Format ordinal numbers (1st, 2nd, 3rd)"
        language="javascript"
        colorTheme="yellow"
        code={`const ordinal = new Intl.PluralRules('en-US', { 
  type: 'ordinal' 
});

function getOrdinal(n) {
  const rule = ordinal.select(n);
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th'
  };
  return \`\${n}\${suffixes[rule]}\`;
}

console.log(getOrdinal(1));    // "1st"
console.log(getOrdinal(2));    // "2nd"
console.log(getOrdinal(3));    // "3rd"
console.log(getOrdinal(4));    // "4th"
console.log(getOrdinal(21));   // "21st"
console.log(getOrdinal(22));   // "22nd"
console.log(getOrdinal(100));  // "100th"`}
      />

      <CodeSnippet
        title="Practical Example: Shopping Cart"
        description="Build a multi-language shopping cart message"
        language="javascript"
        colorTheme="green"
        code={`function getCartMessage(count, locale = 'en-US') {
  const pr = new Intl.PluralRules(locale);
  const rule = pr.select(count);
  
  const messages = {
    'en-US': {
      one: \`You have \${count} item in your cart\`,
      other: \`You have \${count} items in your cart\`
    },
    'fr-FR': {
      one: \`Vous avez \${count} article dans votre panier\`,
      other: \`Vous avez \${count} articles dans votre panier\`
    },
    'pl-PL': {
      one: \`Masz \${count} produkt w koszyku\`,
      few: \`Masz \${count} produkty w koszyku\`,
      many: \`Masz \${count} produktów w koszyku\`
    }
  };
  
  return messages[locale][rule];
}

console.log(getCartMessage(1, 'en-US'));
// "You have 1 item in your cart"

console.log(getCartMessage(5, 'en-US'));
// "You have 5 items in your cart"

console.log(getCartMessage(2, 'pl-PL'));
// "Masz 2 produkty w koszyku"

console.log(getCartMessage(5, 'pl-PL'));
// "Masz 5 produktów w koszyku"`}
      />

      <CodeSnippet
        title="Get All Supported Rules"
        description="See which plural categories a locale supports"
        language="javascript"
        colorTheme="cyan"
        code={`// Check supported plural categories
const enPR = new Intl.PluralRules('en-US');
console.log(enPR.resolvedOptions().pluralCategories);
// ["one", "other"]

const plPR = new Intl.PluralRules('pl-PL');
console.log(plPR.resolvedOptions().pluralCategories);
// ["one", "few", "many", "other"]

const arPR = new Intl.PluralRules('ar-EG');
console.log(arPR.resolvedOptions().pluralCategories);
// ["zero", "one", "two", "few", "many", "other"]

// Get locale info
console.log(enPR.resolvedOptions());
// {
//   locale: "en-US",
//   type: "cardinal",
//   minimumIntegerDigits: 1,
//   pluralCategories: ["one", "other"]
// }`}
      />

      <CodeSnippet
        title="Dynamic Translation System"
        description="Build a simple i18n system with plural support"
        language="javascript"
        colorTheme="blue"
        code={`class I18n {
  constructor(locale) {
    this.locale = locale;
    this.pr = new Intl.PluralRules(locale);
  }
  
  t(key, count) {
    const translations = {
      'en-US': {
        notifications: {
          one: 'You have {count} notification',
          other: 'You have {count} notifications'
        },
        likes: {
          one: '{count} person likes this',
          other: '{count} people like this'
        }
      },
      'es-ES': {
        notifications: {
          one: 'Tienes {count} notificación',
          other: 'Tienes {count} notificaciones'
        },
        likes: {
          one: 'A {count} persona le gusta esto',
          other: 'A {count} personas les gusta esto'
        }
      }
    };
    
    const rule = this.pr.select(count);
    const template = translations[this.locale][key][rule];
    return template.replace('{count}', count);
  }
}

// Usage
const i18n = new I18n('en-US');
console.log(i18n.t('notifications', 1));  
// "You have 1 notification"

console.log(i18n.t('notifications', 5));  
// "You have 5 notifications"

console.log(i18n.t('likes', 1));          
// "1 person likes this"

const i18nEs = new I18n('es-ES');
console.log(i18nEs.t('notifications', 3));
// "Tienes 3 notificaciones"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Plural Categories</CardTitle>
          <CardDescription>Understanding plural forms across languages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">English (2 forms)</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">one</Badge> 1 item</div>
                <div><Badge variant="outline">other</Badge> 0, 2, 3... items</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Polish (3 forms)</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">one</Badge> 1</div>
                <div><Badge variant="outline">few</Badge> 2, 3, 4</div>
                <div><Badge variant="outline">many</Badge> 5, 6, 7...</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800/30">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Arabic (6 forms)</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">zero</Badge> 0</div>
                <div><Badge variant="outline">one</Badge> 1</div>
                <div><Badge variant="outline">two</Badge> 2</div>
                <div><Badge variant="outline">few</Badge> 3-10</div>
                <div><Badge variant="outline">many</Badge> 11-99</div>
                <div><Badge variant="outline">other</Badge> 100+</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <Hash className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Plural Categories</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get correct form: zero, one, two, few, many, other
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <Languages className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Language-Specific</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each language has different plural rules (2-6 forms)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Types</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">cardinal</code> (1, 2, 3) or <code className="text-xs">ordinal</code> (1st, 2nd, 3rd)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Global Apps</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essential for building multi-language applications
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

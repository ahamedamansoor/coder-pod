'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Calendar, Lightbulb, Sparkles } from 'lucide-react';

export default function JavaScriptDateObject() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Calendar}
        category="JavaScript Date & Time"
        title="Date Object"
        description="Work with dates and times in JavaScript"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <Calendar className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Working with Dates
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Date object represents a single moment in time. Create dates, get/set components, calculate differences, and format for display.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Important</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              JavaScript Date uses <strong>milliseconds since January 1, 1970 UTC</strong> (Unix epoch). Months are 0-indexed (0=January, 11=December).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding Dates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800">
              <div className="text-4xl mb-3">📅</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">What is a Date?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A specific point in time - like "December 14, 2024 at 3:30 PM"
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">How JS Stores It</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                As milliseconds since January 1, 1970 (Unix epoch)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">What You Can Do</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create, read, modify, compare, and calculate with dates
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Creating a Date</h4>
            <div className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">new Date()</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Creates date with current time</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">new Date('2024-12-14')</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Creates date from string</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">new Date(2024, 11, 14)</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Creates date from year, month, day (month is 0-indexed!)</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Beginner Tip: Month Numbers</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  JavaScript counts months starting from 0:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">0</code>
                    <span className="text-gray-700 dark:text-gray-300">= January</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">11</code>
                    <span className="text-gray-700 dark:text-gray-300">= December</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  So December 14 is written as <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">new Date(2024, 11, 14)</code> not <code className="line-through">new Date(2024, 12, 14)</code>
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Date Components</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Date Parts:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <strong>Year</strong> - 2024</div>
                  <div>• <strong>Month</strong> - 0-11 (January-December)</div>
                  <div>• <strong>Day</strong> - 1-31</div>
                  <div>• <strong>Day of Week</strong> - 0-6 (Sun-Sat)</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Time Parts:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <strong>Hours</strong> - 0-23</div>
                  <div>• <strong>Minutes</strong> - 0-59</div>
                  <div>• <strong>Seconds</strong> - 0-59</div>
                  <div>• <strong>Milliseconds</strong> - 0-999</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Dates"
        description="Different ways to create Date objects"
        language="javascript"
        colorTheme="green"
        code={`// Current date and time
const now = new Date();
console.log(now);  // Current date/time

// From string (ISO format recommended)
const date1 = new Date('2024-12-14');
console.log(date1);  // December 14, 2024

const date2 = new Date('2024-12-14T15:30:00');
console.log(date2);  // Dec 14, 2024, 3:30 PM

// From components (year, month, day, hour, min, sec, ms)
// Note: Month is 0-indexed! (0=Jan, 11=Dec)
const date3 = new Date(2024, 11, 14);  // December 14, 2024
const date4 = new Date(2024, 11, 14, 15, 30, 0);  // Dec 14, 3:30 PM

// From timestamp (milliseconds since Jan 1, 1970)
const date5 = new Date(1702569600000);
console.log(date5);

// From Date.now() (current timestamp)
const timestamp = Date.now();
const date6 = new Date(timestamp);`}
      />

      <CodeSnippet
        title="Get Date Components"
        description="Extract parts of a date"
        language="javascript"
        colorTheme="emerald"
        code={`const date = new Date('2024-12-14T15:30:45');

// Year
console.log(date.getFullYear());     // 2024

// Month (0-11, so add 1 for display)
console.log(date.getMonth());        // 11 (December)
console.log(date.getMonth() + 1);    // 12

// Day of month (1-31)
console.log(date.getDate());         // 14

// Day of week (0=Sunday, 6=Saturday)
console.log(date.getDay());          // 6 (Saturday)

// Hours (0-23)
console.log(date.getHours());        // 15

// Minutes (0-59)
console.log(date.getMinutes());      // 30

// Seconds (0-59)
console.log(date.getSeconds());      // 45

// Milliseconds (0-999)
console.log(date.getMilliseconds()); // 0

// Timestamp (ms since epoch)
console.log(date.getTime());         // 1702569045000`}
      />

      <CodeSnippet
        title="Set Date Components"
        description="Modify parts of a date"
        language="javascript"
        colorTheme="teal"
        code={`const date = new Date('2024-12-14T15:30:00');

// Set year
date.setFullYear(2025);
console.log(date);  // 2025-12-14

// Set month (0-11)
date.setMonth(0);   // January
console.log(date);  // 2025-01-14

// Set day of month
date.setDate(1);
console.log(date);  // 2025-01-01

// Set hours
date.setHours(9);
console.log(date);  // 2025-01-01 09:30

// Set minutes
date.setMinutes(0);

// Set seconds
date.setSeconds(0);

// Set multiple at once
date.setFullYear(2024, 11, 25);  // Dec 25, 2024
date.setHours(0, 0, 0, 0);       // Midnight

console.log(date);  // 2024-12-25 00:00:00`}
      />

      <CodeSnippet
        title="Date Arithmetic"
        description="Add/subtract days, compare dates"
        language="javascript"
        colorTheme="cyan"
        code={`// Add days
const today = new Date('2024-12-14');
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow);  // 2024-12-15

// Add 7 days (one week)
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);  // 2024-12-21

// Subtract days
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday);  // 2024-12-13

// Add months
const nextMonth = new Date(today);
nextMonth.setMonth(nextMonth.getMonth() + 1);

// Calculate difference in days
const date1 = new Date('2024-12-14');
const date2 = new Date('2024-12-25');
const diffMs = date2 - date1;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(diffDays);  // 11 days

// Compare dates
console.log(date1 < date2);   // true
console.log(date1 > date2);   // false
console.log(date1.getTime() === date2.getTime());  // false`}
      />

      <CodeSnippet
        title="Timestamps"
        description="Work with Unix timestamps"
        language="javascript"
        colorTheme="blue"
        code={`// Get current timestamp
const now = Date.now();
console.log(now);  // 1702569045000 (milliseconds)

// Convert to seconds (Unix timestamp)
const seconds = Math.floor(now / 1000);
console.log(seconds);  // 1702569045

// Date to timestamp
const date = new Date('2024-12-14');
const timestamp = date.getTime();
console.log(timestamp);

// Timestamp to date
const fromTimestamp = new Date(timestamp);
console.log(fromTimestamp);

// Measure execution time
const start = Date.now();
// ... some code ...
const end = Date.now();
console.log(\`Execution time: \${end - start}ms\`);`}
      />

      <CodeSnippet
        title="Common Use Cases"
        description="Practical date operations"
        language="javascript"
        colorTheme="purple"
        code={`// Check if date is today
function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}

// Check if date is in the past
function isPast(date) {
  return date < new Date();
}

// Get age from birthdate
function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

const birthDate = new Date('1990-05-15');
console.log(getAge(birthDate));  // 34

// Days until date
function daysUntil(targetDate) {
  const today = new Date();
  const diffMs = targetDate - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

const christmas = new Date('2024-12-25');
console.log(\`Days until Christmas: \${daysUntil(christmas)}\`);

// Get start/end of day
function getStartOfDay(date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

function getEndOfDay(date) {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Important Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Months are 0-indexed</h4>
              <p className="text-gray-700 dark:text-gray-300">
                January = 0, February = 1, ..., December = 11. Always add 1 when displaying month numbers.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🌍 Time Zones</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Date object uses local time zone. Use UTC methods (<code className="text-xs">getUTCHours()</code>) for consistent results.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📅 Date Parsing</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Use ISO 8601 format (YYYY-MM-DD) for reliable cross-browser parsing.
              </p>
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
                <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Create</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">new Date()</code> for current, pass string/timestamp
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Months</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0-indexed! January=0, December=11
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Timestamp</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">Date.now()</code> or <code className="text-xs">.getTime()</code> for milliseconds
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➕</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arithmetic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Subtract dates for difference, use setters to add/subtract
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

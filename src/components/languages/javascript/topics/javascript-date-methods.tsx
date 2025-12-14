'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Clock, Sparkles } from 'lucide-react';

export default function JavaScriptDateMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript Date & Time"
        title="Date Methods"
        description="Complete guide to Date getters, setters, and utilities"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-xl">
              <Clock className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Date Methods Reference
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Comprehensive list of Date methods for getting and setting date/time components, working with UTC, and converting to different formats.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding Date Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">📥</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Getters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Methods to <strong>read</strong> date parts - like getting the year, month, or hour
              </p>
              <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">
                <code>date.getFullYear()</code> → 2024
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📤</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Setters</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Methods to <strong>change</strong> date parts - like setting a new year or hour
              </p>
              <div className="mt-3 p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded text-xs">
                <code>date.setFullYear(2025)</code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Two Types of Methods</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏠</span>
                  <h5 className="font-bold text-purple-900 dark:text-purple-100">Local Time</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Uses your computer's timezone</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">getHours()</code>
                <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded ml-1">setHours()</code>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-pink-200 dark:border-pink-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌍</span>
                  <h5 className="font-bold text-pink-900 dark:text-pink-100">UTC Time</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Uses universal time (no timezone)</p>
                <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">getUTCHours()</code>
                <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded ml-1">setUTCHours()</code>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Common Methods Quick Guide</h4>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Get Parts:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• <code>getFullYear()</code></div>
                  <div>• <code>getMonth()</code></div>
                  <div>• <code>getDate()</code></div>
                  <div>• <code>getHours()</code></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Set Parts:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• <code>setFullYear()</code></div>
                  <div>• <code>setMonth()</code></div>
                  <div>• <code>setDate()</code></div>
                  <div>• <code>setHours()</code></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Convert:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• <code>toString()</code></div>
                  <div>• <code>toISOString()</code></div>
                  <div>• <code>getTime()</code></div>
                  <div>• <code>Date.now()</code></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Getter Methods (Local Time)"
        description="Get date components in local time zone"
        language="javascript"
        colorTheme="blue"
        code={`const date = new Date('2024-12-14T15:30:45.123');

// Year (full 4-digit year)
console.log(date.getFullYear());     // 2024

// Month (0-11, add 1 for display)
console.log(date.getMonth());        // 11 (December)

// Date (day of month, 1-31)
console.log(date.getDate());         // 14

// Day (day of week, 0=Sunday, 6=Saturday)
console.log(date.getDay());          // 6 (Saturday)

// Hours (0-23)
console.log(date.getHours());        // 15

// Minutes (0-59)
console.log(date.getMinutes());      // 30

// Seconds (0-59)
console.log(date.getSeconds());      // 45

// Milliseconds (0-999)
console.log(date.getMilliseconds()); // 123

// Timestamp (milliseconds since epoch)
console.log(date.getTime());         // 1702569045123

// Timezone offset (minutes, local - UTC)
console.log(date.getTimezoneOffset()); // -330 (IST is UTC+5:30)`}
      />

      <CodeSnippet
        title="Setter Methods (Local Time)"
        description="Modify date components"
        language="javascript"
        colorTheme="sky"
        code={`const date = new Date('2024-12-14T15:30:00');

// Set year
date.setFullYear(2025);
date.setFullYear(2025, 0, 1);  // Also set month and date

// Set month (0-11)
date.setMonth(5);  // June

// Set date (day of month)
date.setDate(15);

// Set hours
date.setHours(10);
date.setHours(10, 30, 45, 500);  // Also set min, sec, ms

// Set minutes
date.setMinutes(45);
date.setMinutes(45, 30, 250);  // Also set sec, ms

// Set seconds
date.setSeconds(30);
date.setSeconds(30, 500);  // Also set ms

// Set milliseconds
date.setMilliseconds(750);

// Set timestamp
date.setTime(1702569045000);

console.log(date);  // Updated date`}
      />

      <CodeSnippet
        title="UTC Methods"
        description="Work with UTC time zone"
        language="javascript"
        colorTheme="cyan"
        code={`const date = new Date('2024-12-14T15:30:00Z');  // Z = UTC

// UTC Getters
console.log(date.getUTCFullYear());     // 2024
console.log(date.getUTCMonth());        // 11 (December)
console.log(date.getUTCDate());         // 14
console.log(date.getUTCDay());          // 6 (Saturday)
console.log(date.getUTCHours());        // 15
console.log(date.getUTCMinutes());      // 30
console.log(date.getUTCSeconds());      // 0
console.log(date.getUTCMilliseconds()); // 0

// UTC Setters
date.setUTCFullYear(2025);
date.setUTCMonth(0);  // January
date.setUTCDate(1);
date.setUTCHours(12, 0, 0, 0);

console.log(date.toISOString());  // UTC time

// Compare local vs UTC
const now = new Date();
console.log('Local hour:', now.getHours());
console.log('UTC hour:', now.getUTCHours());`}
      />

      <CodeSnippet
        title="String Conversion Methods"
        description="Convert date to various string formats"
        language="javascript"
        colorTheme="indigo"
        code={`const date = new Date('2024-12-14T15:30:00');

// ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toISOString());
// "2024-12-14T10:00:00.000Z"

// Date only (ISO format)
console.log(date.toISOString().split('T')[0]);
// "2024-12-14"

// Human-readable string
console.log(date.toString());
// "Sat Dec 14 2024 15:30:00 GMT+0530 (India Standard Time)"

// Date portion only
console.log(date.toDateString());
// "Sat Dec 14 2024"

// Time portion only
console.log(date.toTimeString());
// "15:30:00 GMT+0530 (India Standard Time)"

// Locale-specific (use Intl.DateTimeFormat for better control)
console.log(date.toLocaleString());
// "12/14/2024, 3:30:00 PM"

console.log(date.toLocaleDateString());
// "12/14/2024"

console.log(date.toLocaleTimeString());
// "3:30:00 PM"

// UTC string
console.log(date.toUTCString());
// "Sat, 14 Dec 2024 10:00:00 GMT"

// JSON format (same as toISOString)
console.log(date.toJSON());
// "2024-12-14T10:00:00.000Z"`}
      />

      <CodeSnippet
        title="Date.parse() & Date.UTC()"
        description="Static methods for parsing and creating dates"
        language="javascript"
        colorTheme="purple"
        code={`// Date.parse - parse string to timestamp
const timestamp = Date.parse('2024-12-14T15:30:00');
console.log(timestamp);  // 1702569600000

const date = new Date(timestamp);
console.log(date);

// Parse ISO format
console.log(Date.parse('2024-12-14'));
console.log(Date.parse('2024-12-14T15:30:00Z'));

// Invalid date returns NaN
console.log(Date.parse('invalid'));  // NaN

// Date.UTC - create UTC timestamp from components
const utcTime = Date.UTC(2024, 11, 14, 15, 30, 0);
console.log(utcTime);  // 1702569000000

const utcDate = new Date(utcTime);
console.log(utcDate.toISOString());
// "2024-12-14T15:30:00.000Z"

// Compare local vs UTC
const local = new Date(2024, 11, 14, 15, 30);  // Local
const utc = new Date(Date.UTC(2024, 11, 14, 15, 30));  // UTC
console.log(local.toISOString());
console.log(utc.toISOString());`}
      />

      <CodeSnippet
        title="Date.now()"
        description="Get current timestamp quickly"
        language="javascript"
        colorTheme="green"
        code={`// Current timestamp (faster than new Date().getTime())
const now = Date.now();
console.log(now);  // 1702569045123

// Same as:
const timestamp = new Date().getTime();
console.log(timestamp);

// Measure execution time
const start = Date.now();

// ... some code ...
for (let i = 0; i < 1000000; i++) {
  // simulate work
}

const end = Date.now();
console.log(\`Execution time: \${end - start}ms\`);

// Create date from now
const today = new Date(Date.now());
console.log(today);`}
      />

      <CodeSnippet
        title="Validation & Edge Cases"
        description="Check for invalid dates and handle edge cases"
        language="javascript"
        colorTheme="orange"
        code={`// Invalid Date
const invalid = new Date('invalid string');
console.log(invalid);  // Invalid Date

// Check if date is valid
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

console.log(isValidDate(new Date()));        // true
console.log(isValidDate(new Date('invalid'))); // false
console.log(isValidDate('2024-12-14'));      // false (not Date object)

// Date overflow handling
const date1 = new Date(2024, 11, 32);  // Dec 32 doesn't exist
console.log(date1);  // Jan 1, 2025 (rolls over)

const date2 = new Date(2024, 13, 1);   // Month 13 doesn't exist
console.log(date2);  // Feb 1, 2025 (rolls over)

// Negative values go backwards
const date3 = new Date(2024, 11, -1);
console.log(date3);  // Nov 29, 2024 (2 days before Dec 1)

// Get last day of month
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2024, 1));  // 29 (Feb 2024, leap year)
console.log(getLastDayOfMonth(2024, 11)); // 31 (December)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Method Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Getters (Local)</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>getFullYear()</code></div>
                <div><code>getMonth()</code></div>
                <div><code>getDate()</code></div>
                <div><code>getDay()</code></div>
                <div><code>getHours()</code></div>
                <div><code>getMinutes()</code></div>
                <div><code>getSeconds()</code></div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Setters (Local)</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>setFullYear()</code></div>
                <div><code>setMonth()</code></div>
                <div><code>setDate()</code></div>
                <div><code>setHours()</code></div>
                <div><code>setMinutes()</code></div>
                <div><code>setSeconds()</code></div>
                <div><code>setTime()</code></div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">UTC Methods</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>getUTCFullYear()</code></div>
                <div><code>setUTCFullYear()</code></div>
                <div><code>getUTCMonth()</code></div>
                <div><code>setUTCMonth()</code></div>
                <div><code>getUTCDate()</code></div>
                <div>... and more</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Local vs UTC</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Regular methods use local time, UTC methods use UTC time zone
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Setters</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Most setters accept multiple params for convenience
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">String Output</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">toISOString()</code> for standard format
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">Date.now()</code> faster than <code className="text-xs">new Date().getTime()</code>
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

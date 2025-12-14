'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, AlertTriangle } from 'lucide-react';

export default function JavaScriptTemporalAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Sparkles}
        category="JavaScript Date & Time"
        title="Temporal API"
        description="Modern date/time API - The future of JavaScript dates"
        colorTheme="indigo"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-violet-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-xl">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                Next-Generation Dates
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Temporal is a new proposal for JavaScript that fixes Date object issues. It provides separate types for dates, times, time zones, and durations with an intuitive, immutable API.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Stage 3 Proposal</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Temporal is currently at <strong>Stage 3</strong> in TC39. Not yet available in browsers without polyfill. Expected to be available in <strong>2025+</strong>. Use polyfills for now.
            </AlertDescription>
          </Alert>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Temporal?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Fixes Date issues: <strong>immutable</strong>, <strong>time zone aware</strong>, separate types for dates/times, <strong>no month index confusion</strong>, better parsing, and nanosecond precision!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding Temporal (The Future!)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-3">💔</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Date is Broken</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Old Date object has confusing month numbers (0-11), timezone issues, and can be changed accidentally
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Temporal Fixes It</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Months are 1-12 (like normal!), separate types for dates/times, can't be changed by accident
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">🔮</div>
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Coming Soon</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Expected in 2025+. You can use it today with a polyfill library!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Different Types for Different Needs</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">📅</span>
                  <code className="text-xs font-bold text-blue-700 dark:text-blue-300">PlainDate</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Just a date: "2024-12-14"</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-sky-200 dark:border-sky-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">⏰</span>
                  <code className="text-xs font-bold text-sky-700 dark:text-sky-300">PlainTime</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Just time: "15:30:00"</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">📆</span>
                  <code className="text-xs font-bold text-cyan-700 dark:text-cyan-300">PlainDateTime</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Date + time (no timezone)</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-200 dark:border-teal-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🌍</span>
                  <code className="text-xs font-bold text-teal-700 dark:text-teal-300">ZonedDateTime</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Date + time + timezone!</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Beginner Tip: Immutable</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Temporal dates can't be changed! When you "modify" them, you get a <strong>new date</strong> instead:
                </p>
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded text-xs">
                  <code className="text-slate-800 dark:text-emerald-400">{`const tomorrow = today.add({ days: 1 })`}</code>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  ✅ <code className="text-xs">today</code> stays the same, <code className="text-xs">tomorrow</code> is new!
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Date vs Temporal Comparison</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Old Date:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• Month 0-11 (confusing!)</div>
                  <div>• Can be modified (bugs!)</div>
                  <div>• One type for everything</div>
                  <div>• Weak timezone support</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ New Temporal:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• Month 1-12 (normal!)</div>
                  <div>• Immutable (safe!)</div>
                  <div>• Separate types (clear!)</div>
                  <div>• Full timezone support</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border-red-300 dark:border-red-700">
        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-red-900 dark:text-red-100">⚠️ Examples Below Need Polyfill</AlertTitle>
        <AlertDescription className="text-gray-700 dark:text-gray-300">
          Temporal is <strong>not yet available in browsers</strong>. These examples will throw <code className="bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded text-xs">Temporal is not defined</code> errors. To use Temporal today, install the polyfill: <code className="bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded text-xs">npm install @js-temporal/polyfill</code>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📦</span>
            How to Use Temporal Today
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Step 1: Install Polyfill</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded border border-slate-700">
              <code className="text-emerald-400 font-mono text-sm">npm install @js-temporal/polyfill</code>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10 border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Step 2: Import in Your Code</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded border border-slate-700">
              <code className="text-emerald-400 font-mono text-sm">
                {`// At the top of your file
import { Temporal } from '@js-temporal/polyfill';

// Now you can use Temporal!
const today = Temporal.Now.plainDateISO();
console.log(today.toString());`}
              </code>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">For Beginners</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              If you're new to npm, you'll need Node.js installed first. Once you have that, run the npm command in your project folder, then add the import line to use Temporal!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            Temporal.PlainDate
          </CardTitle>
          <CardDescription>Date without time or time zone (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// Create dates (no time, no timezone)
const today = Temporal.Now.plainDateISO();
console.log(today.toString());  // "2024-12-14"

// From components (months are 1-12, not 0-11!)
const date = Temporal.PlainDate.from({ 
  year: 2024, 
  month: 12,   // December = 12 (not 11!)
  day: 14 
});

// From ISO string
const date2 = Temporal.PlainDate.from('2024-12-14');

// Get components
console.log(date.year);        // 2024
console.log(date.month);       // 12 (December!)
console.log(date.day);         // 14
console.log(date.dayOfWeek);   // 6 (Saturday, 1=Monday)
console.log(date.dayOfYear);   // 349

// Add/subtract (immutable!)
const tomorrow = date.add({ days: 1 });
console.log(tomorrow.toString());  // "2024-12-15"

const nextWeek = date.add({ weeks: 1 });
const nextMonth = date.add({ months: 1 });
const nextYear = date.add({ years: 1 });

// Compare dates
console.log(Temporal.PlainDate.compare(date, tomorrow));  // -1
console.log(date.equals(date2));  // true`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">⏰</span>
            Temporal.PlainTime
          </CardTitle>
          <CardDescription>Time without date or time zone (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// Current time
const now = Temporal.Now.plainTimeISO();
console.log(now.toString());  // "15:30:45.123456789"

// From components
const time = Temporal.PlainTime.from({ 
  hour: 15, 
  minute: 30, 
  second: 45 
});

// From ISO string
const time2 = Temporal.PlainTime.from('15:30:45');

// Get components
console.log(time.hour);          // 15
console.log(time.minute);        // 30
console.log(time.second);        // 45
console.log(time.millisecond);   // 0
console.log(time.microsecond);   // 0
console.log(time.nanosecond);    // 0

// Add/subtract
const later = time.add({ hours: 2, minutes: 30 });
console.log(later.toString());  // "18:00:45"

// Round to nearest hour
const rounded = time.round({ smallestUnit: 'hour' });
console.log(rounded.toString());  // "16:00:00"`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">📆</span>
            Temporal.PlainDateTime
          </CardTitle>
          <CardDescription>Date and time without time zone (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// Current date and time
const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString());  // "2024-12-14T15:30:45.123456789"

// From components
const dt = Temporal.PlainDateTime.from({
  year: 2024,
  month: 12,
  day: 14,
  hour: 15,
  minute: 30
});

// From ISO string
const dt2 = Temporal.PlainDateTime.from('2024-12-14T15:30:00');

// Get date and time parts
console.log(dt.toPlainDate().toString());  // "2024-12-14"
console.log(dt.toPlainTime().toString());  // "15:30:00"

// All date properties
console.log(dt.year, dt.month, dt.day);  // 2024 12 14

// All time properties
console.log(dt.hour, dt.minute, dt.second);  // 15 30 0

// Add/subtract
const later = dt.add({ days: 1, hours: 2 });
console.log(later.toString());  // "2024-12-15T17:30:00"

// With time zone
const zoned = dt.toZonedDateTime('America/New_York');
console.log(zoned.toString());`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">🌍</span>
            Temporal.ZonedDateTime
          </CardTitle>
          <CardDescription>Date, time, AND time zone (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// Current date/time in specific timezone
const nyTime = Temporal.Now.zonedDateTimeISO('America/New_York');
console.log(nyTime.toString());
// "2024-12-14T05:30:00-05:00[America/New_York]"

const tokyoTime = Temporal.Now.zonedDateTimeISO('Asia/Tokyo');
console.log(tokyoTime.toString());
// "2024-12-14T19:30:00+09:00[Asia/Tokyo]"

// From components with timezone
const meeting = Temporal.ZonedDateTime.from({
  year: 2024,
  month: 12,
  day: 25,
  hour: 10,
  minute: 0,
  timeZone: 'America/Los_Angeles'
});

// Convert between timezones
const meetingInNY = meeting.withTimeZone('America/New_York');
console.log(meeting.toString());       // "10:00 PST"
console.log(meetingInNY.toString());   // "13:00 EST"

// Get timezone info
console.log(meeting.timeZoneId);  // "America/Los_Angeles"
console.log(meeting.offset);      // "-08:00"

// Instant (exact moment in time, no timezone)
const instant = meeting.toInstant();
console.log(instant.toString());  // UTC timestamp`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">⏱️</span>
            Temporal.Duration
          </CardTitle>
          <CardDescription>Represent time spans and differences (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// Create duration
const duration = Temporal.Duration.from({
  days: 2,
  hours: 5,
  minutes: 30
});

console.log(duration.toString());  // "P2DT5H30M"

// Add duration to date
const date = Temporal.PlainDate.from('2024-12-14');
const future = date.add(duration);
console.log(future.toString());  // "2024-12-16"

// Calculate difference between dates
const start = Temporal.PlainDate.from('2024-12-14');
const end = Temporal.PlainDate.from('2024-12-25');
const diff = start.until(end);

console.log(diff.days);          // 11
console.log(diff.toString());    // "P11D"

// Different units
const diffInWeeks = start.until(end, { largestUnit: 'week' });
console.log(diffInWeeks.weeks, diffInWeeks.days);  // 1 week, 4 days

// With time
const dt1 = Temporal.PlainDateTime.from('2024-12-14T10:00');
const dt2 = Temporal.PlainDateTime.from('2024-12-14T15:30');
const timeDiff = dt1.until(dt2);

console.log(timeDiff.hours);     // 5
console.log(timeDiff.minutes);   // 30

// Total in specific unit
console.log(timeDiff.total({ unit: 'minute' }));  // 330 minutes`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">🔄</span>
            Formatting and Parsing
          </CardTitle>
          <CardDescription>Convert to/from strings (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// ISO 8601 strings
const date = Temporal.PlainDate.from('2024-12-14');
console.log(date.toString());  // "2024-12-14"

const time = Temporal.PlainTime.from('15:30:45');
console.log(time.toString());  // "15:30:45"

const dt = Temporal.PlainDateTime.from('2024-12-14T15:30:45');
console.log(dt.toString());    // "2024-12-14T15:30:45"

// With Intl.DateTimeFormat
const formatted = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short'
}).format(dt.toZonedDateTime('UTC'));

console.log(formatted);
// "Saturday, December 14, 2024 at 3:30 PM"

// toJSON for serialization
console.log(date.toJSON());  // "2024-12-14"

// Parse various formats
const date1 = Temporal.PlainDate.from('2024-12-14');
const date2 = Temporal.PlainDate.from({ year: 2024, month: 12, day: 14 });
const date3 = Temporal.PlainDate.from(date1);  // Copy`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            Practical Examples
          </CardTitle>
          <CardDescription>Common use cases with Temporal (requires polyfill)</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-5 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-700">
            <code className="text-sm font-mono">{`// 1. Schedule meeting across timezones
const meeting = Temporal.ZonedDateTime.from({
  year: 2024,
  month: 12,
  day: 20,
  hour: 10,
  minute: 0,
  timeZone: 'America/Los_Angeles'
});

console.log('LA:', meeting.toString());
console.log('NY:', meeting.withTimeZone('America/New_York').toString());
console.log('Tokyo:', meeting.withTimeZone('Asia/Tokyo').toString());

// 2. Days until event
const today = Temporal.Now.plainDateISO();
const christmas = Temporal.PlainDate.from('2024-12-25');
const daysUntil = today.until(christmas, { largestUnit: 'day' });
console.log(\`Days until Christmas: \${daysUntil.days}\`);

// 3. Age calculation
function getAge(birthDate) {
  const today = Temporal.Now.plainDateISO();
  const age = birthDate.until(today, { largestUnit: 'year' });
  return age.years;
}

const birthDate = Temporal.PlainDate.from('1990-05-15');
console.log(\`Age: \${getAge(birthDate)}\`);

// 4. Business days (Mon-Fri)
function addBusinessDays(date, days) {
  let result = date;
  let remaining = days;
  
  while (remaining > 0) {
    result = result.add({ days: 1 });
    // dayOfWeek: 1=Mon, 7=Sun
    if (result.dayOfWeek <= 5) {
      remaining--;
    }
  }
  
  return result;
}

const startDate = Temporal.PlainDate.from('2024-12-13'); // Friday
const deadline = addBusinessDays(startDate, 3);
console.log(deadline.toString());  // Tuesday (skip weekend)

// 5. Start/end of day
const date = Temporal.PlainDate.from('2024-12-14');
const startOfDay = date.toPlainDateTime({ hour: 0 });
const endOfDay = date.toPlainDateTime({ hour: 23, minute: 59, second: 59 });`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temporal vs Date</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Date Problems</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Months 0-indexed (confusing)</li>
                <li>• Mutable (causes bugs)</li>
                <li>• No timezone support</li>
                <li>• Poor API design</li>
                <li>• Only millisecond precision</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Temporal Benefits</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Months 1-12 (intuitive)</li>
                <li>• Immutable (safe)</li>
                <li>• Full timezone support</li>
                <li>• Separate date/time types</li>
                <li>• Nanosecond precision</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temporal Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">PlainDate</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Date only (2024-12-14)</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">PlainTime</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Time only (15:30:45)</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">PlainDateTime</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Date + time, no timezone</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">ZonedDateTime</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Date + time + timezone</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">Duration</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Time span (P2DT5H30M)</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge className="mb-1">Instant</Badge>
              <p className="text-xs text-gray-700 dark:text-gray-300">Exact moment in time (UTC)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Future Standard</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stage 3 proposal, expected in 2025+
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Immutable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All operations return new instances (safer)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Timezone Aware</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built-in timezone support with ZonedDateTime
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Polyfill</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">@js-temporal/polyfill</code> available now
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

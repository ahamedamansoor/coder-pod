'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Calendar, Clock, Globe, Sparkles } from 'lucide-react';

export default function JavaScriptIntlDateTimeFormat() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Calendar}
        category="JavaScript Internationalization"
        title="Intl.DateTimeFormat"
        description="Format dates and times for any locale"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-xl">
              <Calendar className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Format Dates by Locale
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Display dates in the format users expect - whether it's MM/DD/YYYY in the US or DD/MM/YYYY in Europe. Handles time zones, calendars, and localized month/day names automatically.
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
          <CardDescription>Understanding how to use Intl.DateTimeFormat</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Constructor Syntax</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                new Intl.DateTimeFormat(locale, options)
              </code>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <code className="text-slate-800 dark:text-emerald-400 font-mono text-sm">
                formatter.format(date)
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-blue-600 dark:text-blue-400 font-bold mb-3">Parameter: locale</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                BCP 47 language tag (string or array)
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">"en-US"</code> - English (US)</div>
                <div>• <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">"de-DE"</code> - German</div>
                <div>• <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">"ja-JP"</code> - Japanese</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800">
              <div className="text-sky-600 dark:text-sky-400 font-bold mb-3">Parameter: options</div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Optional configuration object
              </p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div>• <code className="bg-sky-100 dark:bg-sky-900/30 px-1 rounded">dateStyle</code> - Quick date format</div>
                <div>• <code className="bg-sky-100 dark:bg-sky-900/30 px-1 rounded">timeStyle</code> - Quick time format</div>
                <div>• <code className="bg-sky-100 dark:bg-sky-900/30 px-1 rounded">timeZone</code> - IANA timezone</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/10 border-l-4 border-cyan-500">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Quick Style Options</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">dateStyle values:</div>
                <div className="text-gray-700 dark:text-gray-300"><code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">short</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">medium</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">long</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">full</code></div>
              </div>
              <div>
                <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">timeStyle values:</div>
                <div className="text-gray-700 dark:text-gray-300"><code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">short</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">medium</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">long</code> <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">full</code></div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10 border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Custom Format Options</h4>
            <div className="grid md:grid-cols-3 gap-3 text-xs text-gray-700 dark:text-gray-300">
              <div>
                <div className="font-semibold mb-1">Date Parts:</div>
                <div className="space-y-0.5">
                  <div>• <code>year</code></div>
                  <div>• <code>month</code></div>
                  <div>• <code>day</code></div>
                  <div>• <code>weekday</code></div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-1">Time Parts:</div>
                <div className="space-y-0.5">
                  <div>• <code>hour</code></div>
                  <div>• <code>minute</code></div>
                  <div>• <code>second</code></div>
                  <div>• <code>hour12</code></div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-1">Other:</div>
                <div className="space-y-0.5">
                  <div>• <code>timeZone</code></div>
                  <div>• <code>timeZoneName</code></div>
                  <div>• <code>era</code></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Usage"
        description="Format dates for different locales"
        language="javascript"
        colorTheme="blue"
        code={`const date = new Date('2024-12-14T15:30:00');

// US English (MM/DD/YYYY)
console.log(new Intl.DateTimeFormat('en-US').format(date));
// "12/14/2024"

// UK English (DD/MM/YYYY)
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// "14/12/2024"

// German
console.log(new Intl.DateTimeFormat('de-DE').format(date));
// "14.12.2024"

// Japanese
console.log(new Intl.DateTimeFormat('ja-JP').format(date));
// "2024/12/14"`}
      />

      <CodeSnippet
        title="Date Style Options"
        description="Control the date format with style options"
        language="javascript"
        colorTheme="indigo"
        code={`const date = new Date('2024-12-14');

// Short: 12/14/24
console.log(new Intl.DateTimeFormat('en-US', { 
  dateStyle: 'short' 
}).format(date));

// Medium: Dec 14, 2024
console.log(new Intl.DateTimeFormat('en-US', { 
  dateStyle: 'medium' 
}).format(date));

// Long: December 14, 2024
console.log(new Intl.DateTimeFormat('en-US', { 
  dateStyle: 'long' 
}).format(date));

// Full: Saturday, December 14, 2024
console.log(new Intl.DateTimeFormat('en-US', { 
  dateStyle: 'full' 
}).format(date));`}
      />

      <CodeSnippet
        title="Time Formatting"
        description="Format times with different styles"
        language="javascript"
        colorTheme="cyan"
        code={`const date = new Date('2024-12-14T15:30:45');

// Short: 3:30 PM
console.log(new Intl.DateTimeFormat('en-US', { 
  timeStyle: 'short' 
}).format(date));

// Medium: 3:30:45 PM
console.log(new Intl.DateTimeFormat('en-US', { 
  timeStyle: 'medium' 
}).format(date));

// Long: 3:30:45 PM EST
console.log(new Intl.DateTimeFormat('en-US', { 
  timeStyle: 'long' 
}).format(date));

// 24-hour format (German)
console.log(new Intl.DateTimeFormat('de-DE', { 
  timeStyle: 'short' 
}).format(date));
// "15:30"`}
      />

      <CodeSnippet
        title="Custom Format"
        description="Specify exactly which parts to show"
        language="javascript"
        colorTheme="indigo"
        code={`const date = new Date('2024-12-14T15:30:00');

// Year, Month, Day
console.log(new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(date));
// "December 14, 2024"

// Weekday and short date
console.log(new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}).format(date));
// "Saturday, Dec 14, 2024"

// Time only
console.log(new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
}).format(date));
// "03:30:00 PM"`}
      />

      <CodeSnippet
        title="Time Zones"
        description="Display dates in different time zones"
        language="javascript"
        colorTheme="purple"
        code={`const date = new Date('2024-12-14T15:30:00Z'); // UTC

// New York (EST)
console.log(new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'short',
  timeStyle: 'short'
}).format(date));
// "12/14/24, 10:30 AM"

// Tokyo (JST)
console.log(new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  dateStyle: 'short',
  timeStyle: 'short'
}).format(date));
// "2024/12/15 0:30"

// London (GMT)
console.log(new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
  dateStyle: 'short',
  timeStyle: 'short'
}).format(date));
// "14/12/2024, 15:30"`}
      />

      <CodeSnippet
        title="Reusable Formatter"
        description="Create once, format many dates"
        language="javascript"
        colorTheme="green"
        code={`// Create formatter instance
const formatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

// Use it multiple times (more efficient)
const dates = [
  new Date('2024-12-14'),
  new Date('2024-12-25'),
  new Date('2025-01-01')
];

dates.forEach(date => {
  console.log(formatter.format(date));
});
// "Dec 14, 2024, 12:00 AM"
// "Dec 25, 2024, 12:00 AM"
// "Jan 1, 2025, 12:00 AM"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Options</CardTitle>
          <CardDescription>Frequently used configuration options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Date Styles</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">short</Badge> 12/14/24</div>
                <div><Badge variant="outline">medium</Badge> Dec 14, 2024</div>
                <div><Badge variant="outline">long</Badge> December 14, 2024</div>
                <div><Badge variant="outline">full</Badge> Saturday, December 14, 2024</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Time Styles</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">short</Badge> 3:30 PM</div>
                <div><Badge variant="outline">medium</Badge> 3:30:45 PM</div>
                <div><Badge variant="outline">long</Badge> 3:30:45 PM EST</div>
                <div><Badge variant="outline">full</Badge> 3:30:45 PM Eastern Standard Time</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-sky-50 dark:bg-sky-950/20 border-2 border-sky-200 dark:border-sky-800/30">
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-3">Month Formats</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">numeric</Badge> 12</div>
                <div><Badge variant="outline">2-digit</Badge> 12</div>
                <div><Badge variant="outline">short</Badge> Dec</div>
                <div><Badge variant="outline">long</Badge> December</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Weekday Formats</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><Badge variant="outline">short</Badge> Sat</div>
                <div><Badge variant="outline">long</Badge> Saturday</div>
                <div><Badge variant="outline">narrow</Badge> S</div>
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
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Locale-Aware</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automatically formats dates correctly for each locale
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Time Zones</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Display dates in any time zone with <code className="text-xs">timeZone</code> option
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Flexible Styles</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">dateStyle</code> and <code className="text-xs">timeStyle</code> for quick formats
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reusable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create formatter once, use many times for better performance
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

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Type, Sparkles } from 'lucide-react';

export default function JavaScriptDateFormatting() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript Date & Time"
        title="Date Formatting"
        description="Format dates for display using Intl.DateTimeFormat and custom functions"
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
                Display Dates Beautifully
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Format dates for user display using Intl.DateTimeFormat for locale-aware formatting or create custom formatters for specific needs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding Date Formatting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">📝</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Why Format?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dates need to look good for users - like "Dec 14, 2024" instead of "Sat Dec 14 2024 15:30:00..."
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Different Places</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                US: 12/14/2024<br/>Europe: 14/12/2024<br/>Format changes by location!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
              <div className="text-4xl mb-3">⏰</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Time Ago</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Show "5 minutes ago" or "2 days ago" for better user experience
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Two Ways to Format</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <h5 className="font-bold text-blue-900 dark:text-blue-100">Automatic (Easy)</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Use built-in Intl.DateTimeFormat</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs">
                  <code className="text-slate-800 dark:text-emerald-400">new Intl.DateTimeFormat('en-US')</code>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">✅ Best for most cases</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔧</span>
                  <h5 className="font-bold text-indigo-900 dark:text-indigo-100">Custom (Flexible)</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Build your own formatter</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs">
                  <code className="text-slate-800 dark:text-emerald-400">year + '-' + month + '-' + day</code>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">✅ For specific formats</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Common Format Patterns</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-2">For Display:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• "December 14, 2024"</div>
                  <div>• "Dec 14, 2024"</div>
                  <div>• "3:30 PM"</div>
                  <div>• "5 minutes ago"</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-2">For Systems:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• "2024-12-14" (ISO)</div>
                  <div>• "2024-12-14 15:30:00" (SQL)</div>
                  <div>• Timestamp: 1702569045</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Intl.DateTimeFormat (Recommended)"
        description="Locale-aware date formatting"
        language="javascript"
        colorTheme="purple"
        code={`const date = new Date('2024-12-14T15:30:00');

// Basic formatting
const formatter = new Intl.DateTimeFormat('en-US');
console.log(formatter.format(date));  // "12/14/2024"

// With date and time
const dtFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short'
});
console.log(dtFormatter.format(date));  // "Dec 14, 2024, 3:30 PM"

// Full format
const fullFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
console.log(fullFormatter.format(date));
// "Saturday, December 14, 2024, 03:30 PM"

// Different locales
console.log(new Intl.DateTimeFormat('de-DE').format(date));
// "14.12.2024"

console.log(new Intl.DateTimeFormat('ja-JP').format(date));
// "2024/12/14"`}
      />

      <CodeSnippet
        title="Custom Date Formats"
        description="Build your own formatters"
        language="javascript"
        colorTheme="fuchsia"
        code={`const date = new Date('2024-12-14T15:30:45');

// YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return \`\${year}-\${month}-\${day}\`;
}
console.log(formatDate(date));  // "2024-12-14"

// MM/DD/YYYY
function formatUSDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return \`\${month}/\${day}/\${year}\`;
}
console.log(formatUSDate(date));  // "12/14/2024"

// DD-MM-YYYY HH:mm:ss
function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return \`\${day}-\${month}-\${year} \${hours}:\${minutes}:\${seconds}\`;
}
console.log(formatDateTime(date));  // "14-12-2024 15:30:45"`}
      />

      <CodeSnippet
        title="12-Hour Format with AM/PM"
        description="Format time in 12-hour format"
        language="javascript"
        colorTheme="pink"
        code={`function format12Hour(date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours || 12;  // 0 becomes 12
  
  return \`\${hours}:\${minutes} \${ampm}\`;
}

const date = new Date('2024-12-14T15:30:00');
console.log(format12Hour(date));  // "3:30 PM"

const midnight = new Date('2024-12-14T00:00:00');
console.log(format12Hour(midnight));  // "12:00 AM"

const noon = new Date('2024-12-14T12:00:00');
console.log(format12Hour(noon));  // "12:00 PM"

// With seconds
function format12HourWithSeconds(date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12 || 12;
  
  return \`\${hours}:\${minutes}:\${seconds} \${ampm}\`;
}`}
      />

      <CodeSnippet
        title="Relative Time (Time Ago)"
        description="Display time relative to now"
        language="javascript"
        colorTheme="indigo"
        code={`function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  if (seconds < 60) return 'just now';
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return \`\${minutes}m ago\`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return \`\${hours}h ago\`;
  
  const days = Math.floor(hours / 24);
  if (days < 30) return \`\${days}d ago\`;
  
  const months = Math.floor(days / 30);
  if (months < 12) return \`\${months}mo ago\`;
  
  const years = Math.floor(months / 12);
  return \`\${years}y ago\`;
}

// Examples
const now = new Date();
const fiveMinutesAgo = new Date(now - 5 * 60 * 1000);
const twoDaysAgo = new Date(now - 2 * 24 * 60 * 60 * 1000);

console.log(timeAgo(fiveMinutesAgo));  // "5m ago"
console.log(timeAgo(twoDaysAgo));      // "2d ago"

// More readable version
function timeAgoReadable(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  for (const [name, secondsInInterval] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInInterval);
    if (interval >= 1) {
      return \`\${interval} \${name}\${interval > 1 ? 's' : ''} ago\`;
    }
  }
  
  return 'just now';
}

console.log(timeAgoReadable(twoDaysAgo));  // "2 days ago"`}
      />

      <CodeSnippet
        title="Month and Day Names"
        description="Get human-readable month/day names"
        language="javascript"
        colorTheme="cyan"
        code={`const date = new Date('2024-12-14T15:30:00');

// Month names
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const monthShort = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

console.log(monthNames[date.getMonth()]);  // "December"
console.log(monthShort[date.getMonth()]);  // "Dec"

// Day names
const dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'
];

const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(dayNames[date.getDay()]);  // "Saturday"
console.log(dayShort[date.getDay()]);  // "Sat"

// Format with names
function formatWithNames(date) {
  const day = dayShort[date.getDay()];
  const month = monthShort[date.getMonth()];
  const dateNum = date.getDate();
  const year = date.getFullYear();
  return \`\${day}, \${month} \${dateNum}, \${year}\`;
}

console.log(formatWithNames(date));  // "Sat, Dec 14, 2024"`}
      />

      <CodeSnippet
        title="ISO and Custom Formats"
        description="Common date format patterns"
        language="javascript"
        colorTheme="blue"
        code={`const date = new Date('2024-12-14T15:30:45.123');

// ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toISOString());
// "2024-12-14T10:00:45.123Z"

// Date only (YYYY-MM-DD)
console.log(date.toISOString().split('T')[0]);
// "2024-12-14"

// SQL format (YYYY-MM-DD HH:mm:ss)
function toSQLFormat(date) {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}
console.log(toSQLFormat(date));  // "2024-12-14 10:00:45"

// US format (MM/DD/YYYY)
function toUSFormat(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return \`\${month}/\${day}/\${year}\`;
}
console.log(toUSFormat(date));  // "12/14/2024"

// European format (DD/MM/YYYY)
function toEUFormat(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return \`\${day}/\${month}/\${year}\`;
}
console.log(toEUFormat(date));  // "14/12/2024"

// Human-readable
function toReadableFormat(date) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}
console.log(toReadableFormat(date));
// "December 14, 2024 at 03:30 PM"`}
      />

      <CodeSnippet
        title="Reusable Date Formatter"
        description="Flexible formatter with format string"
        language="javascript"
        colorTheme="green"
        code={`function formatDate(date, format) {
  const map = {
    YYYY: date.getFullYear(),
    YY: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: date.getMonth() + 1,
    DD: String(date.getDate()).padStart(2, '0'),
    D: date.getDate(),
    HH: String(date.getHours()).padStart(2, '0'),
    H: date.getHours(),
    hh: String(date.getHours() % 12 || 12).padStart(2, '0'),
    h: date.getHours() % 12 || 12,
    mm: String(date.getMinutes()).padStart(2, '0'),
    m: date.getMinutes(),
    ss: String(date.getSeconds()).padStart(2, '0'),
    s: date.getSeconds(),
    A: date.getHours() >= 12 ? 'PM' : 'AM',
    a: date.getHours() >= 12 ? 'pm' : 'am'
  };
  
  return format.replace(/YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|A|a/g, match => map[match]);
}

const date = new Date('2024-12-14T15:30:45');

console.log(formatDate(date, 'YYYY-MM-DD'));           // "2024-12-14"
console.log(formatDate(date, 'MM/DD/YYYY'));           // "12/14/2024"
console.log(formatDate(date, 'DD-MM-YYYY HH:mm:ss'));  // "14-12-2024 15:30:45"
console.log(formatDate(date, 'hh:mm A'));              // "03:30 PM"
console.log(formatDate(date, 'M/D/YY'));               // "12/14/24"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Format Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="font-bold mb-2 text-purple-900 dark:text-purple-100">ISO Format</div>
              <code className="text-xs">YYYY-MM-DD</code>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">2024-12-14</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="font-bold mb-2 text-fuchsia-900 dark:text-fuchsia-100">US Format</div>
              <code className="text-xs">MM/DD/YYYY</code>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">12/14/2024</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="font-bold mb-2 text-pink-900 dark:text-pink-100">European</div>
              <code className="text-xs">DD/MM/YYYY</code>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">14/12/2024</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <div className="font-bold mb-2 text-indigo-900 dark:text-indigo-100">Time 12h</div>
              <code className="text-xs">hh:mm A</code>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">03:30 PM</div>
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
                <Type className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best Choice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Intl.DateTimeFormat</code> for locale-aware formatting
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Custom Formats</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Build your own for specific needs (SQL, APIs, etc.)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Relative Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    "5m ago" format is great for UX in social apps
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ISO Format</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">toISOString()</code> for APIs and databases
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

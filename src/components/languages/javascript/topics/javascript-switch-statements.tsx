'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  PanelsTopLeft,
  Sparkles,
  Code2,
  Lightbulb,
  Calendar,
  Zap,
} from 'lucide-react';

export default function JavaScriptSwitchStatements() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={PanelsTopLeft}
        category="JavaScript Fundamentals"
        title="Switch Statements"
        description="Handle many options cleanly - like a menu with multiple choices"
        colorTheme="yellow"
      />

      {/* What is Switch? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Switch: Multiple Choice Made Easy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A switch statement is like a <strong className="text-cyan-700 dark:text-cyan-400">multiple choice menu</strong>. Instead of many if-else statements, you check one value against many options and do different things for each match!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <PanelsTopLeft className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">When to Use Switch</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Use switch when checking ONE variable against many different values (3+ options). Cleaner than many if-else!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Switch vs If-Else</CardTitle>
              <CardDescription>See the difference in clarity</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* If-Else Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">With If-Else (Verbose)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`const day = 'Monday';

if (day === 'Monday') {
  console.log('Start of week');
} else if (day === 'Tuesday') {
  console.log('Second day');
} else if (day === 'Wednesday') {
  console.log('Midweek');
} else if (day === 'Thursday') {
  console.log('Almost Friday');
} else if (day === 'Friday') {
  console.log('Last workday!');
} else {
  console.log('Weekend!');
}`}</pre>
              </div>
            </div>

            {/* Switch Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">With Switch (Clean!) ✨</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Tuesday':
    console.log('Second day');
    break;
  case 'Wednesday':
    console.log('Midweek');
    break;
  case 'Thursday':
    console.log('Almost Friday');
    break;
  case 'Friday':
    console.log('Last workday!');
    break;
  default:
    console.log('Weekend!');
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Switch Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How Switch Works</CardTitle>
              <CardDescription>The anatomy of a switch statement</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Switch Parts</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`switch (expression) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  default:
    // Code if no match
}`}</pre>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <code className="text-sm font-mono bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">switch (expression)</code>
                    <p className="text-xs text-gray-500 mt-1">What to check</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <code className="text-sm font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">case value:</code>
                    <p className="text-xs text-gray-500 mt-1">Each possible value</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <code className="text-sm font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">break;</code>
                    <p className="text-xs text-gray-500 mt-1">Stop here (important!)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <code className="text-sm font-mono bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">default:</code>
                    <p className="text-xs text-gray-500 mt-1">If nothing matches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Don't Forget break!</AlertTitle>
            <AlertDescription className="text-base">
              Without <code className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">break</code>, code keeps running into the next case. Always add break unless you want that!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Switch Example"
        description="Check a value against multiple options"
        code={`const fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('Apples are $1.20 per pound');
    break;
  case 'banana':
    console.log('Bananas are $0.50 per pound');
    break;
  case 'orange':
    console.log('Oranges are $0.80 per pound');
    break;
  case 'mango':
    console.log('Mangos are $2.00 per pound');
    break;
  default:
    console.log('Sorry, we don\\'t have that fruit');
}

// Output: Bananas are $0.50 per pound`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Grouping Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Grouping Multiple Cases</CardTitle>
              <CardDescription>Multiple values can run the same code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Stack Cases Together</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Put multiple <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">case</code> statements together (no break between them) to run the same code for different values
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const day = 'Saturday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Workday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
}
// Output: Weekend!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Grouping Cases Example"
        description="Multiple cases sharing the same code"
        code={`// Grade ranges
const grade = 85;
let letterGrade;

switch (true) {
  case (grade >= 90):
    letterGrade = 'A';
    break;
  case (grade >= 80):
    letterGrade = 'B';
    break;
  case (grade >= 70):
    letterGrade = 'C';
    break;
  case (grade >= 60):
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
}

console.log('Grade:', letterGrade);  // Grade: B

// Month seasons
const month = 'December';

switch (month) {
  case 'December':
  case 'January':
  case 'February':
    console.log('Winter ❄️');
    break;
  case 'March':
  case 'April':
  case 'May':
    console.log('Spring 🌸');
    break;
  case 'June':
  case 'July':
  case 'August':
    console.log('Summer ☀️');
    break;
  case 'September':
  case 'October':
  case 'November':
    console.log('Fall 🍂');
    break;
  default:
    console.log('Invalid month');
}
// Output: Winter ❄️`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Traffic Light"
        description="Handle different states with switch"
        code={`const trafficLight = 'yellow';

switch (trafficLight) {
  case 'red':
    console.log('STOP! Do not cross.');
    console.log('Wait for green light.');
    break;
  
  case 'yellow':
    console.log('SLOW DOWN!');
    console.log('Prepare to stop.');
    break;
  
  case 'green':
    console.log('GO! It\\'s safe to cross.');
    break;
  
  default:
    console.log('Light malfunction - be careful!');
}

// Output: SLOW DOWN!
// Output: Prepare to stop.

// User role permissions
function checkAccess(role) {
  switch (role) {
    case 'admin':
      console.log('✓ Full access granted');
      console.log('✓ Can manage users');
      console.log('✓ Can edit settings');
      break;
    
    case 'editor':
      console.log('✓ Can create content');
      console.log('✓ Can edit content');
      break;
    
    case 'viewer':
      console.log('✓ Can view content only');
      break;
    
    default:
      console.log('✗ No access - please log in');
  }
}

checkAccess('editor');
// Output: ✓ Can create content
// Output: ✓ Can edit content`}
        language="javascript"
        colorTheme="yellow"
        icon={Calendar}
      />

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Lightbulb className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Mistakes</CardTitle>
              <CardDescription>Watch out for these errors</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ Forgetting break</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
                <pre className="font-mono text-sm text-red-600 dark:text-red-400">
{`switch (num) {
  case 1:
    console.log('One');
    // Missing break!
  case 2:
    console.log('Two');
    break;
}`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If num is 1, both "One" AND "Two" will print because there's no break!
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold mb-3 text-amber-700 dark:text-amber-300">⚠️ Forgetting default</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Always include <code className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">default</code> to handle unexpected values. It's like the "else" of switch statements!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Switch = Multiple Choice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check one value against many options
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Always Use break</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stops execution, prevents fall-through
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Group Similar Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stack cases to share the same code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Include default</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Catch all unexpected values
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

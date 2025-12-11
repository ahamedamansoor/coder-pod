'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  PanelsTopLeft,
  GitCompare,
  ToggleLeft,
  AlarmClock,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';

interface JavaScriptSwitchStatementsProps {}

export default function JavaScriptSwitchStatements({}: JavaScriptSwitchStatementsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={PanelsTopLeft}
        category="JavaScript Fundamentals"
        title="Switch Statements"
        description="Handle many discrete cases with clean, readable branches and a required default."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            When to Use Switch
          </CardTitle>
          <CardDescription className="text-base">
            Choose switch for many discrete cases sharing the same variable. Keep cases grouped and add default fallbacks.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <PanelsTopLeft className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Multiple branches
            </h3>
            <p className="text-sm text-muted-foreground">Cleanly handle many cases with one expression.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">case</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Shared logic
            </h3>
            <p className="text-sm text-muted-foreground">Stack cases to share outcomes (e.g., weekdays vs weekend).</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">group</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Clear fallbacks
            </h3>
            <p className="text-sm text-muted-foreground">Always add default to catch unexpected values.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">default</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is Switch Statement? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PanelsTopLeft className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is a Switch Statement?
          </CardTitle>
          <CardDescription className="text-base">
            A control structure that selects one of many code blocks to execute based on matching values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              A switch statement <strong>evaluates an expression once</strong> and compares it against multiple case values. When a match is found,
              it executes the associated code block. Think of it as a <strong>cleaner alternative to multiple if-else statements</strong> when checking
              the same variable against different values.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Switch Example</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Clean and readable
const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  default:
    dayName = 'Unknown';
}

console.log(dayName);
// Output: Wednesday`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300">If-Else Equivalent</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// More verbose
const day = 3;
let dayName;

if (day === 1) {
  dayName = 'Monday';
} else if (day === 2) {
  dayName = 'Tuesday';
} else if (day === 3) {
  dayName = 'Wednesday';
} else {
  dayName = 'Unknown';
}

console.log(dayName);
// Output: Wednesday`}
                </pre>
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>When to Use Switch</AlertTitle>
              <AlertDescription>
                Use switch when you have <strong>3 or more cases</strong> comparing the same variable. For 1-2 cases, if-else or ternary is clearer.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PanelsTopLeft className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Structure
          </CardTitle>
          <CardDescription className="text-base">
            Compare one expression against multiple cases; break after each match.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Template</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>switch (value) {'{'}</div>
              <div className="pl-2">case 'A': ...; break;</div>
              <div className="pl-2">case 'B': ...; break;</div>
              <div className="pl-2">default: ...;</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Without break, execution will fall through.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Example</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>let access;</div>
              <div>switch (role) {'{'}</div>
              <div className="pl-2">case 'admin': access = 'all'; break;</div>
              <div className="pl-2">case 'editor': access = 'partial'; break;</div>
              <div className="pl-2">default: access = 'view';</div>
              <div>{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fall-Through Pattern */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Fall-Through Pattern
          </CardTitle>
          <CardDescription className="text-base">
            Multiple cases can share the same code by intentionally omitting break statements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
              title="Grouping Weekdays"
              description="Stack cases for shared logic - weekdays vs weekend"
              code={`// Stack cases for shared logic
const day = 'Monday';

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
  default:
    console.log('Invalid day');
}

// Output: Workday`}
              language="javascript"
              colorTheme="purple"
              icon={ToggleLeft}
              features={[
                "Multiple cases share same code",
                "No break between stacked cases",
                "Fall-through is intentional",
                "Common for grouping similar values"
              ]}
              tips={[
                "Add comments for intentional fall-through",
                "Group related values together",
                "Always break after shared code"
              ]}
            />

          <Alert className="bg-amber-50/60 dark:bg-amber-950/10 border-amber-200/50 dark:border-amber-800/30">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Fall-Through is Intentional</AlertTitle>
            <AlertDescription>
              When stacking cases, you're deliberately letting execution "fall through" to the next case's code. Always add a comment if this is intentional!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll encounter in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            {/* Pattern 1: User Role Permissions */}
            <CodeSnippet
              title="User Role Permissions"
              description="Role-based access control - common in authentication systems"
              code={`// Pattern: Role-based access control
function getPermissions(role) {
  let permissions;
  
  switch (role) {
    case 'admin':
      permissions = ['read', 'write', 'delete'];
      break;
    case 'editor':
      permissions = ['read', 'write'];
      break;
    case 'viewer':
      permissions = ['read'];
      break;
    default:
      permissions = [];
  }
  
  return permissions;
}

console.log(getPermissions('editor'));
// Output: ['read', 'write']

console.log(getPermissions('guest'));
// Output: []`}
              language="javascript"
              colorTheme="blue"
              icon={CheckCircle2}
              features={[
                "Role-based access patterns",
                "Returns different permission arrays",
                "Default case for unknown roles",
                "Common in authentication systems"
              ]}
              tips={[
                "Use switch for discrete role types",
                "Always provide default permissions",
                "Essential for security systems"
              ]}
            />

            {/* Pattern 2: HTTP Status Codes */}
            <CodeSnippet
              title="HTTP Status Handler"
              description="API response handling - different status codes require different messages"
              code={`// Pattern: Handle API responses
function handleResponse(statusCode) {
  switch (statusCode) {
    case 200:
    case 201:
      return 'Success!';
    case 400:
      return 'Bad Request';
    case 401:
    case 403:
      return 'Authentication required';
    case 404:
      return 'Not Found';
    case 500:
      return 'Server Error';
    default:
      return 'Unknown Status';
  }
}

console.log(handleResponse(200));
// Output: Success!

console.log(handleResponse(404));
// Output: Not Found`}
              language="javascript"
              colorTheme="emerald"
              icon={CheckCircle2}
              features={[
                "Groups success codes (200, 201)",
                "Groups auth errors (401, 403)",
                "Essential for API integration",
                "Clean status code handling"
              ]}
              tips={[
                "Group related status codes",
                "Return early from switch",
                "Common in fetch/axios wrappers"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Switch vs If-Else Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCompare className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Switch vs If-Else: When to Use Each
          </CardTitle>
          <CardDescription className="text-base">
            Understanding which control structure fits your use case
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left font-semibold">Scenario</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left font-semibold">Use Switch</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left font-semibold">Use If-Else</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Number of conditions</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">3+ cases ✅</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">1-2 conditions ✅</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Checking same variable</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Perfect ✅</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Verbose ⚠️</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Exact value matching</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Excellent ✅</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Works fine ✅</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Range comparisons</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Not ideal ❌</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Better ✅</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Complex conditions</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Limited ❌</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Flexible ✅</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Readability</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Cleaner for many cases ✅</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Better for ranges ✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Alert className="bg-emerald-50/60 dark:bg-emerald-950/10 border-emerald-200/50 dark:border-emerald-800/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle>Use Switch When</AlertTitle>
              <AlertDescription>
                You're comparing <strong>one variable</strong> against <strong>multiple exact values</strong> (status codes, roles, days, etc.)
              </AlertDescription>
            </Alert>

            <Alert className="bg-blue-50/60 dark:bg-blue-950/10 border-blue-200/50 dark:border-blue-800/30">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Use If-Else When</AlertTitle>
              <AlertDescription>
                You need <strong>range checks</strong> (age {'>='} 18), <strong>complex conditions</strong> (user.isActive && user.verified), or <strong>1-2 simple checks</strong>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Group cases that share outcomes.</li>
              <li>✅ Add default to cover unexpected values.</li>
              <li>✅ Use break after each case to avoid accidental fallthrough.</li>
              <li>✅ Switch when many if/else blocks compare the same variable.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Forgetting break (unless you intentionally want fallthrough).</li>
              <li>❌ Duplicating code—extract shared logic into functions.</li>
              <li>❌ Using switch for complex range comparisons—if/else is clearer there.</li>
              <li>❌ Missing default; it catches new or unknown values.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Common mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Avoid Pitfalls
          </CardTitle>
          <CardDescription className="text-base">
            Break, default, and strict comparison rules keep switch statements predictable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Missing break
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>case 'A': doThing();</div>
              <div className="text-slate-500">// falls through unintentionally</div>
              <div>case 'B': doOther();</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Proper default
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>default: throw new Error('Unhandled case');</div>
            </div>
            <p className="text-sm text-muted-foreground">Default protects you when new cases appear.</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Layers,
  Link2,
} from 'lucide-react';

export default function JavaScriptCurryingNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Design Patterns"
        title="Currying"
        description="Transform multi-argument functions into sequences"
        colorTheme="yellow"
      />

      {/* What is Currying? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-yellow-50/20 dark:from-orange-950/10 dark:via-amber-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Currying: One Argument at a Time
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-orange-700 dark:text-orange-400">Currying</strong> transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Named after mathematician Haskell Curry!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-orange-200 dark:border-orange-800/30">
            <Link2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-lg">The Transformation</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <code>f(a, b, c)</code> becomes <code>f(a)(b)(c)</code><br/>
              Each call returns a new function until all arguments are provided
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Currying */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Currying</CardTitle>
              <CardDescription>From multiple arguments to single arguments</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Regular Function */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">Regular Function</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Takes all arguments at once
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6

// Must provide all arguments
// add(1, 2) // NaN
// add(1)    // NaN`}</pre>
              </div>
            </div>

            {/* Curried Function */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Curried Function</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Takes one argument at a time
function addCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(addCurried(1)(2)(3)); // 6

// Can partially apply!
const add1 = addCurried(1);
const add1and2 = add1(2);
console.log(add1and2(3)); // 6`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Currying with Arrow Functions"
        description="Cleaner syntax"
        code={`// Arrow function currying (cleaner!)
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3)); // 6

// Two arguments
const multiply = x => y => x * y;

console.log(multiply(5)(3)); // 15

// Partial application
const double = multiply(2);
const triple = multiply(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30

// Real example: greeting
const greet = greeting => name => \`\${greeting}, \${name}!\`;

const sayHello = greet('Hello');
const sayHi = greet('Hi');

console.log(sayHello('Alice')); // Hello, Alice!
console.log(sayHi('Bob'));      // Hi, Bob!

// More complex
const formatPrice = symbol => decimals => price => 
  \`\${symbol}\${price.toFixed(decimals)}\`;

const formatUSD = formatPrice('$')(2);
const formatEUR = formatPrice('€')(2);

console.log(formatUSD(99.5));  // $99.50
console.log(formatEUR(99.5));  // €99.50`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Auto-Currying */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Auto-Curry Function</CardTitle>
              <CardDescription>Generic curry helper</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Universal Curry Function</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// Use with any function
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));    // 6
console.log(curriedSum(1, 2)(3));    // 6
console.log(curriedSum(1)(2, 3));    // 6
console.log(curriedSum(1, 2, 3));    // 6

// Example with more arguments
function joinStrings(a, b, c, d) {
  return \`\${a}-\${b}-\${c}-\${d}\`;
}

const curriedJoin = curry(joinStrings);
const withDate = curriedJoin('2024')('12');
console.log(withDate('25')('log')); // 2024-12-25-log`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Partial Application vs Currying"
        description="Related but different concepts"
        code={`// Partial Application - fix some arguments
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Partial application
const sayHello = partial(greet, 'Hello');
console.log(sayHello('Alice', '!'));  // Hello, Alice!
console.log(sayHello('Bob', '.'));    // Hello, Bob.

// Currying - transform to single-argument functions
const curriedGreet = greeting => name => punctuation =>
  \`\${greeting}, \${name}\${punctuation}\`;

const sayHi = curriedGreet('Hi');
const sayHiToAlice = sayHi('Alice');
console.log(sayHiToAlice('!'));  // Hi, Alice!

// Key difference:
// Partial: Fix N arguments, get function expecting rest
// Currying: Always returns function expecting 1 argument

// Practical example: filtering
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Curried filter
const filter = predicate => array => array.filter(predicate);

const isEven = x => x % 2 === 0;
const isGreaterThan5 = x => x > 5;

const filterEvens = filter(isEven);
const filterGT5 = filter(isGreaterThan5);

console.log(filterEvens(numbers));  // [2, 4, 6, 8, 10]
console.log(filterGT5(numbers));    // [6, 7, 8, 9, 10]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real-World Examples */}
      <CodeSnippet
        title="Real-World Example: Event Handlers"
        description="Currying for reusable handlers"
        code={`// Curried event handler factory
const createClickHandler = action => id => event => {
  event.preventDefault();
  console.log(\`\${action} item \${id}\`);
};

const deleteHandler = createClickHandler('Delete');
const editHandler = createClickHandler('Edit');
const viewHandler = createClickHandler('View');

// Attach to buttons
document.querySelector('#delete-1')?.addEventListener('click', deleteHandler(1));
document.querySelector('#edit-1')?.addEventListener('click', editHandler(1));
document.querySelector('#view-1')?.addEventListener('click', viewHandler(1));

// Curried validation
const validate = rule => value => rule(value);

const isRequired = value => value.trim().length > 0;
const isEmail = value => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
const minLength = min => value => value.length >= min;

const validateRequired = validate(isRequired);
const validateEmail = validate(isEmail);
const validateMin6 = validate(minLength(6));

console.log(validateRequired('test'));     // true
console.log(validateEmail('a@b.com'));     // true
console.log(validateMin6('password'));     // true

// Curried API calls
const apiCall = method => url => data => {
  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined
  });
};

const get = apiCall('GET');
const post = apiCall('POST');
const put = apiCall('PUT');

const getUsers = get('/api/users');
const createUser = post('/api/users');

// getUsers(null).then(res => res.json());
// createUser({ name: 'Alice' }).then(res => res.json());

// Curried logger
const log = level => namespace => message =>
  console.log(\`[\${level}] [\${namespace}] \${message}\`);

const error = log('ERROR');
const info = log('INFO');

const dbError = error('Database');
const authError = error('Auth');
const dbInfo = info('Database');

dbError('Connection failed');   // [ERROR] [Database] Connection failed
authError('Invalid token');     // [ERROR] [Auth] Invalid token
dbInfo('Query executed');       // [INFO] [Database] Query executed`}
        language="javascript"
        colorTheme="yellow"
        icon={Layers}
      />

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
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">One at a Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transform f(a,b,c) → f(a)(b)(c)<br/>
                    Each call returns a function
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Partial Application</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fix some arguments early<br/>
                    Create specialized functions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reusability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create function factories<br/>
                    DRY (Don't Repeat Yourself)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrow Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code>a => b => c => ...</code><br/>
                    Clean, concise syntax
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Currying shines when you need to create specialized versions of generic functions. Great for event handlers, validators, and configuration!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

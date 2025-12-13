'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Link2,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ListChecks,
  ArrowRight,
  Package,
} from 'lucide-react';

export default function JavaScriptCallbackParameters() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Link2}
        category="JavaScript Fundamentals"
        title="Callback Parameters"
        description="Understanding the data that callbacks receive"
        colorTheme="yellow"
      />

      {/* What are Callback Parameters */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What Data Do Callbacks Receive?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                When a callback function runs, it often receives <strong className="text-yellow-700 dark:text-yellow-400">data</strong> from the function that called it. Understanding what parameters your callback gets is crucial!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Example</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              In <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">array.map(callback)</code>, the callback receives 3 parameters: the current value, the index, and the full array!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Array Method Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Array Method Callback Parameters</CardTitle>
              <CardDescription>What data array methods pass to your callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Common Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Most array methods pass <strong>3 parameters</strong> to callbacks:
              </p>
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h5 className="font-semibold mb-2">Current Value</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The item being processed</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h5 className="font-semibold mb-2">Index</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Position in the array</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h5 className="font-semibold mb-2">Full Array</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The entire array</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="forEach Callback Parameters"
        description="Understanding what forEach passes to your callback"
        code={`const fruits = ['apple', 'banana', 'cherry'];

// Callback receives: value, index, array
fruits.forEach(function(value, index, array) {
  console.log('Value:', value);
  console.log('Index:', index);
  console.log('Array:', array);
  console.log('---');
});

// Output:
// Value: apple
// Index: 0
// Array: ['apple', 'banana', 'cherry']
// ---
// Value: banana
// Index: 1
// Array: ['apple', 'banana', 'cherry']
// ---
// Value: cherry
// Index: 2
// Array: ['apple', 'banana', 'cherry']
// ---`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="You Don't Need All Parameters"
        description="Use only what you need - name them clearly!"
        code={`const numbers = [1, 2, 3, 4, 5];

// Just using the value
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

// Using value and index
numbers.forEach(function(num, index) {
  console.log(\`Position \${index}: \${num}\`);
});
// Output:
// Position 0: 1
// Position 1: 2
// Position 2: 3
// Position 3: 4
// Position 4: 5

// You can skip parameters you don't need!
// Most of the time, you only need the value`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* map Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>map Callback Parameters</CardTitle>
              <CardDescription>Transform array items with callback data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Same 3 Parameters</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">map</code> also gives you value, index, and array!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const prices = [10, 20, 30];

// Using just the value
const doubled = prices.map(function(price) {
  return price * 2;
});
console.log(doubled);  // [20, 40, 60]

// Using value and index
const labeled = prices.map(function(price, index) {
  return \`Item \${index + 1}: $\${price}\`;
});
console.log(labeled);
// ['Item 1: $10', 'Item 2: $20', 'Item 3: $30']`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="filter Callback Parameters"
        description="Use callback data to decide what to keep"
        code={`const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 }
];

// Using the value parameter
const topStudents = students.filter(function(student) {
  return student.grade >= 80;
});

console.log(topStudents);
// [
//   { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 92 }
// ]

// Using value and index together
const numbers = [10, 20, 30, 40, 50];

const evenPositions = numbers.filter(function(num, index) {
  return index % 2 === 0;  // Keep items at even indexes
});

console.log(evenPositions);  // [10, 30, 50]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Event Listener Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Event Listener Parameters</CardTitle>
              <CardDescription>What data event callbacks receive</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Event Object</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Event listeners receive an <strong>event object</strong> with lots of useful information!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// HTML: <button id="myBtn">Click Me</button>

const button = document.getElementById('myBtn');

button.addEventListener('click', function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Mouse X:', event.clientX);
  console.log('Mouse Y:', event.clientY);
});

// When clicked, you get all this data!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Form Input Event"
        description="Type in the input to see event data in real-time!"
        code={`const input = document.getElementById('username');
const info = document.getElementById('info');

input.addEventListener('input', function(event) {
  // The event has target.value!
  const value = event.target.value;
  const length = value.length;
  
  // Update the display
  let message = 'Value: "' + value + '"<br>';
  message += 'Length: ' + length + ' characters<br>';
  
  if (length === 0) {
    message += '<span style="color: #94a3b8;">Start typing...</span>';
  } else if (length < 3) {
    message += '<span style="color: #f59e0b;">⚠️ Too short (minimum 3)</span>';
  } else {
    message += '<span style="color: #10b981;">✅ Long enough!</span>';
  }
  
  info.innerHTML = message;
});`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<div class="container">
  <h2>Username Input</h2>
  <p>Type a username to see the event data:</p>
  
  <input 
    type="text" 
    id="username" 
    placeholder="Enter username..."
    class="input-field"
  />
  
  <div id="info" class="info-box">
    <span style="color: #94a3b8;">Start typing...</span>
  </div>
</div>`,
          css: `body {
  margin: 0;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 450px;
  width: 100%;
}

h2 {
  color: #667eea;
  margin: 0 0 10px 0;
  font-size: 28px;
}

p {
  color: #64748b;
  margin: 0 0 20px 0;
  font-size: 14px;
}

.input-field {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box;
  font-family: monospace;
}

.input-field:focus {
  border-color: #667eea;
}

.info-box {
  margin-top: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  font-size: 14px;
  line-height: 1.8;
  font-family: monospace;
}`,
          js: `const input = document.getElementById('username');
const info = document.getElementById('info');

input.addEventListener('input', function(event) {
  // The event has target.value!
  const value = event.target.value;
  const length = value.length;
  
  // Update the display
  let message = 'Value: "' + value + '"<br>';
  message += 'Length: ' + length + ' characters<br>';
  
  if (length === 0) {
    message += '<span style="color: #94a3b8;">Start typing...</span>';
  } else if (length < 3) {
    message += '<span style="color: #f59e0b;">⚠️ Too short (minimum 3)</span>';
  } else {
    message += '<span style="color: #10b981;">✅ Long enough!</span>';
  }
  
  info.innerHTML = message;
});`,
          visiblePanels: ['js', 'preview']
        }}
      />

      {/* Custom Callback Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Designing Your Own Callback Parameters</CardTitle>
              <CardDescription>When you create functions that take callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">You Decide What to Pass</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you write functions that accept callbacks, YOU choose what data to pass!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function processOrder(orderId, callback) {
  // Simulate processing...
  const result = {
    orderId: orderId,
    status: 'completed',
    total: 99.99
  };
  
  // Call the callback with result data
  callback(result);
}

// Use it
processOrder(12345, function(orderResult) {
  console.log('Order:', orderResult.orderId);
  console.log('Status:', orderResult.status);
  console.log('Total:', orderResult.total);
});

// Output:
// Order: 12345
// Status: completed
// Total: 99.99`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Error-First Callback Pattern"
        description="Common Node.js pattern: error first, data second"
        code={`function fetchUserData(userId, callback) {
  // Simulate API call
  if (userId === 0) {
    // Error case - pass error as first parameter
    callback(new Error('Invalid user ID'), null);
  } else {
    // Success case - null error, data as second parameter
    const userData = { id: userId, name: 'Alice' };
    callback(null, userData);
  }
}

// Using it
fetchUserData(123, function(error, data) {
  // Always check error first!
  if (error) {
    console.log('Error:', error.message);
    return;
  }
  
  console.log('User data:', data);
});

// Try with invalid ID
fetchUserData(0, function(error, data) {
  if (error) {
    console.log('Error:', error.message);  // Invalid user ID
    return;
  }
});`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Multiple Parameters Example"
        description="Passing several pieces of data to callbacks"
        code={`function calculatePrice(quantity, price, callback) {
  const subtotal = quantity * price;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  
  // Pass multiple values to callback
  callback(subtotal, tax, total);
}

// Use the callback
calculatePrice(5, 10, function(subtotal, tax, total) {
  console.log('Subtotal:', subtotal);  // 50
  console.log('Tax:', tax);            // 5
  console.log('Total:', total);        // 55
});

// You can name the parameters anything!
calculatePrice(3, 20, function(sub, t, tot) {
  console.log(\`Pay $\${tot}\`);  // Pay $66
});`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use descriptive parameter names</li>
                <li>• Only use parameters you need</li>
                <li>• Check for errors first (error-first pattern)</li>
                <li>• Document what your callbacks receive</li>
                <li>• Keep callback signatures simple</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use single letters like x, y, z</li>
                <li>• Don't pass too many parameters</li>
                <li>• Don't assume parameter order</li>
                <li>• Don't ignore error parameters</li>
                <li>• Don't use callbacks without knowing the API</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Quick Reference</AlertTitle>
            <AlertDescription className="text-base">
              <strong>Array methods</strong>: (value, index, array)<br/>
              <strong>Event listeners</strong>: (event)<br/>
              <strong>Error-first</strong>: (error, data)<br/>
              <strong>Custom</strong>: Whatever makes sense!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

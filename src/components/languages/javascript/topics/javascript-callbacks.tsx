'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  GitBranch,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function JavaScriptCallbacks() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript Fundamentals"
        title="Callbacks"
        description="Pass functions as arguments - the foundation of asynchronous JavaScript"
        colorTheme="yellow"
      />

      {/* What are Callbacks */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Callbacks?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A callback is a <strong className="text-yellow-700 dark:text-yellow-400">function passed as an argument</strong> to another function, which then gets called (executed) at a later time. Think of it like leaving instructions for someone to follow after they finish their task!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              It's like ordering food delivery and leaving your phone number. The restaurant <strong>calls you back</strong> when your food is ready. You don't wait on hold - you do other things and get notified later!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Callback Example</CardTitle>
              <CardDescription>Understanding the concept</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Function as Argument</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You pass a function to another function, and it gets called when needed. The function you pass is the <strong>callback</strong>!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Define a callback function
function sayHello() {
  console.log('Hello!');
}

// Pass it to another function
function greet(callback) {
  console.log('About to greet...');
  callback(); // Call the callback!
  console.log('Done greeting!');
}

greet(sayHello);
// Output:
// About to greet...
// Hello!
// Done greeting!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Inline Callback Functions"
        description="You can define callbacks directly in the function call"
        code={`function processUser(name, callback) {
  console.log('Processing user: ' + name);
  callback(name);
}

// Inline callback - most common!
processUser('Alice', function(name) {
  console.log('Welcome, ' + name + '!');
});

// Output:
// Processing user: Alice
// Welcome, Alice!

// Arrow function callback
processUser('Bob', (name) => {
  console.log('Hi there, ' + name + '!');
});

// Output:
// Processing user: Bob
// Hi there, Bob!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Array Methods with Callbacks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Array Methods Use Callbacks</CardTitle>
              <CardDescription>The most common place you'll see callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">forEach, map, filter, etc.</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Array methods like <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">forEach</code>, <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">map</code>, and <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">filter</code> take callbacks!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const numbers = [1, 2, 3, 4, 5];

// forEach - callback runs for each item
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

// map - callback transforms each item
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// filter - callback decides what to keep
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens);
// Output: [2, 4]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Array Methods with Arrow Functions"
        description="Modern syntax makes callbacks cleaner"
        code={`const numbers = [1, 2, 3, 4, 5];

// forEach with arrow function
numbers.forEach(num => {
  console.log(num * 2);
});

// map with arrow function (shorter!)
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// filter with arrow function
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
// Output: [2, 4]

// Chain them together!
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 3);

console.log(result);
// Output: [9, 12, 15]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Asynchronous Callbacks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Asynchronous Callbacks</CardTitle>
              <CardDescription>Callbacks that run after a delay or operation completes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Real Power of Callbacks</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Callbacks really shine when dealing with operations that take time - like timers, file reading, or network requests!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`console.log('Start!');

setTimeout(function() {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End!');

// Output:
// Start!
// End!
// (2 seconds later...)
// This runs after 2 seconds

// JavaScript doesn't wait!
// It continues and calls the callback later`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="setTimeout and setInterval"
        description="Timers use callbacks to run code after a delay"
        code={`// setTimeout - run once after delay
setTimeout(() => {
  console.log('Hello after 1 second');
}, 1000);

// setInterval - run repeatedly
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log('Count: ' + count);
  
  if (count >= 3) {
    clearInterval(intervalId); // Stop it!
    console.log('Done!');
  }
}, 1000);

// Output:
// (after 1 sec) Hello after 1 second
// (after 1 sec) Count: 1
// (after 1 sec) Count: 2
// (after 1 sec) Count: 3
// Done!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Event Listeners */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Event Listeners - Interactive Callbacks</CardTitle>
              <CardDescription>Respond to user actions with callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">React to User Actions</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Event listeners use callbacks to respond when users click, type, scroll, etc.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Get a button element
const button = document.getElementById('myButton');

// Add event listener with callback
button.addEventListener('click', function() {
  console.log('Button clicked!');
  alert('You clicked me!');
});

// Multiple callbacks for same event
button.addEventListener('click', function() {
  console.log('Another callback!');
});

// When user clicks:
// Output: Button clicked!
// Output: Another callback!
// Shows alert popup`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Form Validation"
        description="Use callbacks to validate user input - try typing in the input!"
        code={`const emailInput = document.getElementById('email');
const feedback = document.getElementById('feedback');

emailInput.addEventListener('input', function(event) {
  const email = event.target.value;
  
  if (email.includes('@') && email.includes('.')) {
    feedback.textContent = '✅ Valid email format';
    feedback.className = 'feedback valid';
  } else if (email.includes('@')) {
    feedback.textContent = '⚠️ Add domain (.com, .org, etc)';
    feedback.className = 'feedback warning';
  } else if (email.length > 0) {
    feedback.textContent = '❌ Missing @ symbol';
    feedback.className = 'feedback invalid';
  } else {
    feedback.textContent = '';
    feedback.className = 'feedback';
  }
});`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<div class="container">
  <h2>Email Validation</h2>
  <p>Type an email address below:</p>
  <input 
    type="text" 
    id="email" 
    placeholder="Enter your email..."
  />
  <div id="feedback" class="feedback"></div>
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
  max-width: 400px;
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
}

input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input:focus {
  border-color: #667eea;
}

.feedback {
  margin-top: 15px;
  padding: 12px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
}

.feedback.valid {
  background: #d1fae5;
  color: #065f46;
  border-left: 4px solid #10b981;
}

.feedback.invalid {
  background: #fee2e2;
  color: #991b1b;
  border-left: 4px solid #ef4444;
}

.feedback.warning {
  background: #fef3c7;
  color: #92400e;
  border-left: 4px solid #f59e0b;
}`,
          js: `const emailInput = document.getElementById('email');
const feedback = document.getElementById('feedback');

emailInput.addEventListener('input', function(event) {
  const email = event.target.value;
  
  if (email.includes('@') && email.includes('.')) {
    feedback.textContent = '✅ Valid email format';
    feedback.className = 'feedback valid';
  } else if (email.includes('@')) {
    feedback.textContent = '⚠️ Add domain (.com, .org, etc)';
    feedback.className = 'feedback warning';
  } else if (email.length > 0) {
    feedback.textContent = '❌ Missing @ symbol';
    feedback.className = 'feedback invalid';
  } else {
    feedback.textContent = '';
    feedback.className = 'feedback';
  }
});`,
          visiblePanels: ['js', 'preview']
        }}
      />

      {/* Callback Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <GitBranch className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Callbacks Can Receive Data</CardTitle>
              <CardDescription>Pass information to your callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Receive Data from the Caller</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The function calling your callback can pass data to it as arguments!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function processNumber(num, callback) {
  console.log('Processing: ' + num);
  const result = num * 2;
  callback(result); // Pass result to callback!
}

processNumber(5, function(doubled) {
  console.log('The doubled value is: ' + doubled);
});

// Output:
// Processing: 5
// The doubled value is: 10

// Array map passes 3 parameters!
[10, 20, 30].map(function(item, index, array) {
  console.log('Item:', item);
  console.log('Index:', index);
  console.log('Array:', array);
  return item * 2;
});`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: File Upload Progress"
        description="Callbacks to track upload progress"
        code={`function uploadFile(file, onProgress, onComplete) {
  let progress = 0;
  
  // Simulate upload with interval
  const interval = setInterval(() => {
    progress += 20;
    
    // Call progress callback
    onProgress(progress);
    
    if (progress >= 100) {
      clearInterval(interval);
      // Call completion callback
      onComplete('Upload successful!');
    }
  }, 500);
}

// Use the function with callbacks
uploadFile(
  'photo.jpg',
  
  // Progress callback
  function(percent) {
    console.log('Upload: ' + percent + '%');
  },
  
  // Complete callback
  function(message) {
    console.log(message);
  }
);

// Output:
// Upload: 20%
// Upload: 40%
// Upload: 60%
// Upload: 80%
// Upload: 100%
// Upload successful!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Callback Hell */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Callback Hell (Pyramid of Doom)</CardTitle>
              <CardDescription>The main problem with callbacks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 px-4 py-3">
              <h4 className="text-white font-semibold">⚠️ When Callbacks Get Messy</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you nest callbacks inside callbacks inside callbacks... it becomes hard to read and maintain!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// DON'T DO THIS! ❌
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          console.log('Finally done!');
        });
      });
    });
  });
});

// This is "Callback Hell" - hard to read!
// Solution: Use Promises or async/await`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern Solution</AlertTitle>
            <AlertDescription className="text-base">
              Promises and async/await were created to solve callback hell. They make asynchronous code easier to read and write!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Sequential Operations"
        description="Callbacks can create nested code quickly"
        code={`// Example: Load user, then posts, then comments
function loadUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: 'Alice' });
  }, 1000);
}

function loadPosts(userId, callback) {
  setTimeout(() => {
    callback([{ id: 1, title: 'Post 1' }]);
  }, 1000);
}

function loadComments(postId, callback) {
  setTimeout(() => {
    callback([{ id: 1, text: 'Great post!' }]);
  }, 1000);
}

// Nested callbacks - gets messy!
loadUser(1, function(user) {
  console.log('User:', user.name);
  
  loadPosts(user.id, function(posts) {
    console.log('Posts:', posts.length);
    
    loadComments(posts[0].id, function(comments) {
      console.log('Comments:', comments.length);
    });
  });
});

// Better solution: Use Promises or async/await!`}
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
                <li>• Use arrow functions for short callbacks</li>
                <li>• Name your callback functions</li>
                <li>• Keep callbacks simple and focused</li>
                <li>• Handle errors in callbacks</li>
                <li>• Use Promises for async operations</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Deep nesting (callback hell)</li>
                <li>• Complex logic in callbacks</li>
                <li>• Forgetting to call the callback</li>
                <li>• Calling callbacks multiple times</li>
                <li>• Ignoring callback errors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

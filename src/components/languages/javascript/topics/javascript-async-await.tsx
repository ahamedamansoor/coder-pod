'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Zap,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptAsyncAwait() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="Async/Await"
        description="Cleaner way to work with promises - write async code like synchronous"
        colorTheme="yellow"
      />

      {/* What is Async/Await */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Async/Await?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Async/await is <strong className="text-yellow-700 dark:text-yellow-400">syntactic sugar</strong> over promises that makes async code look and behave like synchronous code. No more .then() chains - write cleaner, more readable code!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Same Power, Better Syntax</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Async/await doesn't replace promises - it's just a <strong>cleaner way</strong> to work with them. Under the hood, it's still promises!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* async keyword */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>The async Keyword</CardTitle>
              <CardDescription>Makes a function return a promise</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">async Function</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Put <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">async</code> before a function to make it always return a promise
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Regular function
function regularFunction() {
  return 'Hello';
}

// Async function - automatically returns a promise
async function asyncFunction() {
  return 'Hello';
}

// Both are promises!
asyncFunction().then(result => {
  console.log(result);  // 'Hello'
});`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="async Functions"
        description="Always return promises"
        code={`// async makes function return a promise
async function greet() {
  return 'Hello!';
}

// Same as:
function greet() {
  return Promise.resolve('Hello!');
}

// Use it like a promise
greet().then(message => {
  console.log(message);  // 'Hello!'
});

// async with arrow functions
const fetchUser = async () => {
  return { id: 1, name: 'Alice' };
};

fetchUser().then(user => {
  console.log(user.name);  // 'Alice'
});

// async methods in classes
class DataService {
  async getData() {
    return { data: 'Some data' };
  }
}

const service = new DataService();
service.getData().then(result => {
  console.log(result);
});`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* await keyword */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>The await Keyword</CardTitle>
              <CardDescription>Wait for a promise to resolve</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">await Pauses Execution</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">await</code> before a promise to pause and wait for the result
              </p>
              <Alert className="mb-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-sm">
                  <strong>Important:</strong> You can only use <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">await</code> inside <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">async</code> functions!
                </AlertDescription>
              </Alert>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}

// Without await (promises):
function fetchData() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="await Examples"
        description="Pausing for promises"
        code={`// Simple await
async function getUser() {
  const response = await fetch('/api/user/1');
  const user = await response.json();
  console.log(user);
}

// Multiple awaits in sequence
async function loadUserData() {
  console.log('Loading user...');
  const user = await fetch('/api/user').then(r => r.json());
  
  console.log('Loading posts...');
  const posts = await fetch(\`/api/user/\${user.id}/posts\`).then(r => r.json());
  
  console.log('Done!', { user, posts });
}

// Simulated async operation
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
  console.log('3...');
  await delay(1000);
  
  console.log('2...');
  await delay(1000);
  
  console.log('1...');
  await delay(1000);
  
  console.log('Go!');
}

countdown();  // Counts down over 3 seconds

// Real-world example
async function getUserProfile() {
  const userId = await getUserId();
  const user = await fetchUser(userId);
  const avatar = await fetchAvatar(user.avatarId);
  
  return { ...user, avatar };
}

function getUserId() {
  return Promise.resolve(123);
}

function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'Alice', avatarId: 'av-1' });
    }, 1000);
  });
}

function fetchAvatar(avatarId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('https://example.com/avatar.png');
    }, 500);
  });
}

getUserProfile().then(profile => {
  console.log('Profile loaded:', profile);
});`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Error Handling with try/catch</CardTitle>
              <CardDescription>Handle errors in async functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 px-4 py-3">
              <h4 className="text-white font-semibold">Use try/catch</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wrap await in try/catch to handle errors
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    const user = await response.json();
    console.log('Success:', user);
    return user;
    
  } catch (error) {
    console.log('Error:', error.message);
    return null;
  }
}

fetchUser();`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Error Handling Examples"
        description="try/catch with async/await"
        code={`// Basic error handling
async function loadData() {
  try {
    const data = await fetch('/api/data');
    console.log('Success!', data);
  } catch (error) {
    console.log('Failed:', error);
  }
}

// Multiple operations with error handling
async function processUser(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    
    return { user, posts, comments };
    
  } catch (error) {
    console.log('Something went wrong:', error.message);
    return null;
  }
}

// try/catch with finally
async function saveData(data) {
  let isLoading = true;
  
  try {
    await api.save(data);
    console.log('Saved successfully');
    
  } catch (error) {
    console.log('Save failed:', error);
    
  } finally {
    isLoading = false;
    console.log('Operation complete');
  }
}

// Specific error handling
async function login(username, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    
    if (response.status === 401) {
      throw new Error('Invalid credentials');
    }
    
    if (response.status === 429) {
      throw new Error('Too many attempts');
    }
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const user = await response.json();
    return user;
    
  } catch (error) {
    if (error.message === 'Invalid credentials') {
      console.log('Wrong username or password');
    } else if (error.message === 'Too many attempts') {
      console.log('Please wait before trying again');
    } else {
      console.log('Login error:', error);
    }
    return null;
  }
}

// Real-world: Form submission
async function submitForm(formData) {
  const submitButton = document.querySelector('button');
  submitButton.disabled = true;
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Form submitted!');
    } else {
      console.log('Validation errors:', result.errors);
    }
    
  } catch (error) {
    console.log('Network error:', error);
    
  } finally {
    submitButton.disabled = false;
  }
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Parallel Execution */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Parallel vs Sequential</CardTitle>
              <CardDescription>Run multiple operations at once</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Optimize Performance</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                  <h5 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Sequential (Slow)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function loadData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const stats = await fetchStats();
  // Takes 6 seconds total
  // (2s + 2s + 2s)
}`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ Parallel (Fast)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function loadData() {
  const [user, posts, stats] = 
    await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchStats()
    ]);
  // Takes 2 seconds total!
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Parallel Execution"
        description="Run independent operations together"
        code={`// Sequential - one after another (SLOW)
async function loadSequential() {
  const user = await fetch('/api/user').then(r => r.json());
  const posts = await fetch('/api/posts').then(r => r.json());
  const comments = await fetch('/api/comments').then(r => r.json());
  
  console.log({ user, posts, comments });
  // If each takes 1 second, total = 3 seconds
}

// Parallel - all at once (FAST)
async function loadParallel() {
  const [user, posts, comments] = await Promise.all([
    fetch('/api/user').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  console.log({ user, posts, comments });
  // If each takes 1 second, total = 1 second!
}

// Real-world: Dashboard data
async function loadDashboard() {
  try {
    const [userData, statsData, notificationsData] = await Promise.all([
      fetch('/api/user'),
      fetch('/api/stats'),
      fetch('/api/notifications')
    ]);
    
    const user = await userData.json();
    const stats = await statsData.json();
    const notifications = await notificationsData.json();
    
    return { user, stats, notifications };
    
  } catch (error) {
    console.log('Failed to load dashboard:', error);
  }
}

// When to use sequential vs parallel:

// Use SEQUENTIAL when operations depend on each other
async function getUserPosts() {
  const user = await fetchUser();
  const posts = await fetchPostsByUserId(user.id);  // Needs user.id
  return posts;
}

// Use PARALLEL when operations are independent
async function loadPageData() {
  const [header, sidebar, footer] = await Promise.all([
    fetchHeader(),
    fetchSidebar(),
    fetchFooter()
  ]);
  return { header, sidebar, footer };
}`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>async</strong> before function</li>
                <li>• Use <strong>await</strong> before promises</li>
                <li>• Wrap in <strong>try/catch</strong> for errors</li>
                <li>• Use <strong>Promise.all()</strong> for parallel</li>
                <li>• Always handle errors</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use <strong>await</strong> in non-async functions</li>
                <li>• Don't forget error handling</li>
                <li>• Don't await unnecessarily in loops</li>
                <li>• Don't use sequential when parallel is better</li>
                <li>• Don't mix async/await with .then()</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Reference</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>async function</strong> - Makes function return promise</div>
              <div><strong>await promise</strong> - Wait for promise result</div>
              <div><strong>try/catch</strong> - Handle errors</div>
              <div><strong>Promise.all()</strong> - Run multiple in parallel</div>
              <div><strong>finally</strong> - Cleanup code</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern Standard</AlertTitle>
            <AlertDescription className="text-base">
              Async/await is the modern, preferred way to handle asynchronous code in JavaScript. It's cleaner, easier to read, and easier to debug than promise chains!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

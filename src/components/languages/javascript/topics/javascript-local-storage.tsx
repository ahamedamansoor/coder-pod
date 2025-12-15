'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, HardDrive, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function JavaScriptLocalStorage() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={HardDrive}
        category="APIs & Browser"
        title="localStorage & sessionStorage"
        description="Client-side data storage with Web Storage API"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is Web Storage API?</CardTitle>
          <CardDescription>Simple key-value storage in the browser</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Web Storage API provides two mechanisms for storing data in the browser: <strong>localStorage</strong> and <strong>sessionStorage</strong>. 
            Both store data as key-value pairs and provide a simple API for data persistence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <HardDrive className="w-5 h-5" />
                localStorage
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Persistent</strong>: Data never expires</li>
                <li>• <strong>Survives</strong>: Browser restarts, tab closes</li>
                <li>• <strong>Shared</strong>: Same origin (domain)</li>
                <li>• <strong>Capacity</strong>: ~5-10 MB per origin</li>
                <li>• <strong>Use case</strong>: User preferences, theme settings</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/10 border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                <HardDrive className="w-5 h-5" />
                sessionStorage
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Temporary</strong>: Data cleared when tab closes</li>
                <li>• <strong>Session-specific</strong>: Per tab/window</li>
                <li>• <strong>Isolated</strong>: Not shared between tabs</li>
                <li>• <strong>Capacity</strong>: ~5-10 MB per origin</li>
                <li>• <strong>Use case</strong>: Form data, temporary state</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic API Methods</CardTitle>
          <CardDescription>Simple CRUD operations for storage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Method</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Description</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">setItem(key, value)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Store data
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">localStorage.setItem('user', 'John')</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">getItem(key)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Retrieve data
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">localStorage.getItem('user')</code>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">removeItem(key)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Delete specific item
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">localStorage.removeItem('user')</code>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">clear()</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Delete all items
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">localStorage.clear()</code>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">key(index)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Get key by index
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-sm text-gray-600 dark:text-gray-400">localStorage.key(0)</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Important Note</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Web Storage only stores strings. Use <code className="text-amber-700 dark:text-amber-300">JSON.stringify()</code> and{' '}
              <code className="text-amber-700 dark:text-amber-300">JSON.parse()</code> for objects and arrays.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Storing Complex Data</CardTitle>
          <CardDescription>Working with objects and arrays</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeSnippet
            title="Storing and Retrieving Objects"
            description="Use JSON methods to handle complex data types"
            language="javascript"
            colorTheme="purple"
            code={`// Storing an object
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};

// Convert to JSON string before storing
localStorage.setItem('user', JSON.stringify(user));

// Retrieving the object
const storedUser = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUser);

console.log(parsedUser.name); // "John Doe"
console.log(parsedUser.preferences.theme); // "dark"

// Storing an array
const todos = [
  { id: 1, text: 'Learn JavaScript', done: true },
  { id: 2, text: 'Build project', done: false }
];

localStorage.setItem('todos', JSON.stringify(todos));

// Retrieving the array
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos.length); // 2`}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: User Preferences Manager</CardTitle>
          <CardDescription>Complete example with theme persistence</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            title="Theme Preference Manager"
            description="Save and restore user theme selection"
            language="javascript"
            colorTheme="purple"
            code={`// UserPreferences Class
class UserPreferences {
  constructor() {
    this.storageKey = 'userPreferences';
  }
  
  // Load preferences from localStorage
  load() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : this.getDefaults();
  }
  
  // Save preferences to localStorage
  save(preferences) {
    localStorage.setItem(
      this.storageKey, 
      JSON.stringify(preferences)
    );
  }
  
  // Get default preferences
  getDefaults() {
    return {
      theme: 'light',
      fontSize: 16,
      notifications: true,
      language: 'en'
    };
  }
  
  // Update specific preference
  update(key, value) {
    const prefs = this.load();
    prefs[key] = value;
    this.save(prefs);
  }
}

// Usage
const prefs = new UserPreferences();

// Load saved preferences or use defaults
const userSettings = prefs.load();
console.log(userSettings.theme); // "light"

// Update theme preference
prefs.update('theme', 'dark');

// Apply theme to page
document.body.className = userSettings.theme + '-theme';`}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Storage Events</CardTitle>
          <CardDescription>Listen for storage changes across tabs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The <code className="text-purple-600 dark:text-purple-400">storage</code> event fires when storage is modified in another tab/window. 
            This allows you to sync data across multiple tabs.
          </p>

          <CodeSnippet
            title="Listening to Storage Changes"
            description="Sync data between browser tabs"
            language="javascript"
            colorTheme="purple"
            code={`// Listen for storage changes
window.addEventListener('storage', (e) => {
  console.log('Storage changed!');
  console.log('Key:', e.key);
  console.log('Old value:', e.oldValue);
  console.log('New value:', e.newValue);
  console.log('URL:', e.url);
  
  // Update UI based on change
  if (e.key === 'theme') {
    applyTheme(e.newValue);
  }
});

// This event only fires in OTHER tabs/windows
// Not in the same tab that made the change`}
          />

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Note</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The storage event does <strong>NOT</strong> fire in the same tab that made the change. It only notifies other tabs/windows.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices & Limitations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Do's
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Always use try-catch for JSON.parse()</li>
                <li>• Check if storage is available before using</li>
                <li>• Use meaningful key names</li>
                <li>• Compress large data before storing</li>
                <li>• Clear sensitive data when done</li>
                <li>• Use sessionStorage for temporary data</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Don't store sensitive data (passwords, tokens)</li>
                <li>• Don't exceed storage limits (~5-10MB)</li>
                <li>• Don't assume storage is always available</li>
                <li>• Don't store functions or Date objects directly</li>
                <li>• Don't use for critical data (can be cleared)</li>
                <li>• Don't forget to handle parse errors</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Security Warning</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Data in localStorage and sessionStorage is <strong>NOT encrypted</strong> and can be accessed by any JavaScript code running on your site. 
              Never store sensitive information like passwords, credit cards, or personal data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Simple API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Easy-to-use key-value storage interface
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">localStorage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Persistent storage across sessions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">sessionStorage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Temporary storage per tab/window
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">JSON Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store complex objects with JSON methods
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

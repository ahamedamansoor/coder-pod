'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, Database, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

export default function JavaScriptIndexedDB() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Database}
        category="APIs & Browser"
        title="IndexedDB"
        description="Client-side database for large-scale data storage"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is IndexedDB?</CardTitle>
          <CardDescription>A powerful client-side NoSQL database</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files and blobs. 
            It's a transactional database system that allows you to store and retrieve objects indexed with keys.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Large Storage
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store hundreds of MBs of data (browser-dependent, typically 50MB+)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Asynchronous
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Non-blocking operations that don't freeze the UI
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border border-teal-200 dark:border-teal-700">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Transactional
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ACID compliance ensures data integrity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Concepts</CardTitle>
          <CardDescription>Understanding IndexedDB structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">1. Database</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Container for object stores. Each origin (domain) can have multiple databases with different names.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">2. Object Store</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Similar to tables in SQL databases. Stores records (JavaScript objects) with unique keys.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-700">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">3. Index</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Additional lookup paths to query data by properties other than the primary key.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-700">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">4. Transaction</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All read/write operations must happen inside a transaction. Ensures data consistency.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">5. Cursor</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mechanism to iterate over multiple records in an object store or index.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Operations</CardTitle>
          <CardDescription>Opening database and creating object stores</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Open (or create) a database
const request = indexedDB.open('MyDatabase', 1);

// Handle database upgrade (runs when version changes)
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  
  // Create object store (like a table)
  if (!db.objectStoreNames.contains('users')) {
    const objectStore = db.createObjectStore('users', { 
      keyPath: 'id',      // Primary key
      autoIncrement: true // Auto-generate IDs
    });
    
    // Create indexes for faster queries
    objectStore.createIndex('email', 'email', { unique: true });
    objectStore.createIndex('name', 'name', { unique: false });
  }
};

// Handle successful opening
request.onsuccess = (event) => {
  const db = event.target.result;
  console.log('Database opened successfully');
};

// Handle errors
request.onerror = (event) => {
  console.error('Database error:', event.target.error);
};`}</code></pre>
          </div>

          <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Version Management</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The <code className="text-blue-700 dark:text-blue-300">onupgradeneeded</code> event only fires when the version number increases 
              or the database is created for the first time. This is where you define your schema.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">CRUD Operations</CardTitle>
          <CardDescription>Create, Read, Update, Delete operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>
{`// Assuming 'db' is the opened database

// CREATE - Add a record
function addUser(user) {
  const transaction = db.transaction(['users'], 'readwrite');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.add(user);
  
  request.onsuccess = () => {
    console.log('User added:', request.result); // Returns the key
  };
  
  request.onerror = () => {
    console.error('Error adding user:', request.error);
  };
}

// Usage
addUser({ name: 'John Doe', email: 'john@example.com', age: 30 });

// READ - Get a record by key
function getUser(id) {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.get(id);
  
  request.onsuccess = () => {
    if (request.result) {
      console.log('User found:', request.result);
    } else {
      console.log('User not found');
    }
  };
}

// READ - Get by index
function getUserByEmail(email) {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const index = objectStore.index('email');
  const request = index.get(email);
  
  request.onsuccess = () => {
    console.log('User:', request.result);
  };
}

// READ - Get all records
function getAllUsers() {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.getAll();
  
  request.onsuccess = () => {
    console.log('All users:', request.result);
  };
}

// UPDATE - Modify a record
function updateUser(user) {
  const transaction = db.transaction(['users'], 'readwrite');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.put(user); // put() updates or adds
  
  request.onsuccess = () => {
    console.log('User updated');
  };
}

// DELETE - Remove a record
function deleteUser(id) {
  const transaction = db.transaction(['users'], 'readwrite');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.delete(id);
  
  request.onsuccess = () => {
    console.log('User deleted');
  };
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Task Manager</CardTitle>
          <CardDescription>Complete IndexedDB wrapper class</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>
{`class TaskDB {
  constructor() {
    this.dbName = 'TaskManager';
    this.version = 1;
    this.db = null;
  }
  
  // Initialize database
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        if (!db.objectStoreNames.contains('tasks')) {
          const store = db.createObjectStore('tasks', {
            keyPath: 'id',
            autoIncrement: true
          });
          
          store.createIndex('status', 'status', { unique: false });
          store.createIndex('priority', 'priority', { unique: false });
        }
      };
      
      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };
      
      request.onerror = () => reject(request.error);
    });
  }
  
  // Add task
  async addTask(task) {
    const transaction = this.db.transaction(['tasks'], 'readwrite');
    const store = transaction.objectStore('tasks');
    
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...task,
        createdAt: new Date().toISOString()
      });
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Get all tasks
  async getAllTasks() {
    const transaction = this.db.transaction(['tasks'], 'readonly');
    const store = transaction.objectStore('tasks');
    
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Get tasks by status
  async getTasksByStatus(status) {
    const transaction = this.db.transaction(['tasks'], 'readonly');
    const store = transaction.objectStore('tasks');
    const index = store.index('status');
    
    return new Promise((resolve, reject) => {
      const request = index.getAll(status);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Update task
  async updateTask(task) {
    const transaction = this.db.transaction(['tasks'], 'readwrite');
    const store = transaction.objectStore('tasks');
    
    return new Promise((resolve, reject) => {
      const request = store.put(task);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Delete task
  async deleteTask(id) {
    const transaction = this.db.transaction(['tasks'], 'readwrite');
    const store = transaction.objectStore('tasks');
    
    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}

// Usage
const taskDB = new TaskDB();

// Initialize
await taskDB.init();

// Add tasks
const taskId = await taskDB.addTask({
  title: 'Learn IndexedDB',
  description: 'Study database operations',
  status: 'pending',
  priority: 'high'
});

// Get all tasks
const tasks = await taskDB.getAllTasks();
console.log('All tasks:', tasks);

// Get pending tasks
const pendingTasks = await taskDB.getTasksByStatus('pending');

// Update task
await taskDB.updateTask({
  id: taskId,
  title: 'Learn IndexedDB',
  status: 'completed',
  priority: 'high'
});

// Delete task
await taskDB.deleteTask(taskId);`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Cursors: Iterating Over Records</CardTitle>
          <CardDescription>Advanced data traversal with cursors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>
{`// Iterate over all records with cursor
function iterateAllUsers() {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.openCursor();
  
  request.onsuccess = (event) => {
    const cursor = event.target.result;
    
    if (cursor) {
      // Process current record
      console.log('User:', cursor.value);
      
      // Move to next record
      cursor.continue();
    } else {
      console.log('All users processed');
    }
  };
}

// Filter with cursor
function findUsersByAge(minAge) {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const request = objectStore.openCursor();
  const results = [];
  
  request.onsuccess = (event) => {
    const cursor = event.target.result;
    
    if (cursor) {
      if (cursor.value.age >= minAge) {
        results.push(cursor.value);
      }
      cursor.continue();
    } else {
      console.log('Filtered users:', results);
    }
  };
}

// Iterate with index and range
function getUsersInAgeRange(minAge, maxAge) {
  const transaction = db.transaction(['users'], 'readonly');
  const objectStore = transaction.objectStore('users');
  const index = objectStore.index('age');
  
  // IDBKeyRange for filtering
  const range = IDBKeyRange.bound(minAge, maxAge);
  const request = index.openCursor(range);
  
  request.onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      console.log('User in range:', cursor.value);
      cursor.continue();
    }
  };
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">When to Use IndexedDB</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Good Use Cases
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Offline-first applications</li>
                <li>• Storing large amounts of structured data</li>
                <li>• Client-side caching of API responses</li>
                <li>• Progressive Web Apps (PWAs)</li>
                <li>• Storing files and blobs</li>
                <li>• Complex queries with indexes</li>
                <li>• Data that needs to persist</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Not Ideal For
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Simple key-value storage (use localStorage)</li>
                <li>• Small amounts of data (&lt;5MB)</li>
                <li>• Data that doesn't need structure</li>
                <li>• When you need synchronous access</li>
                <li>• Sensitive data (not encrypted)</li>
                <li>• When localStorage is sufficient</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Comparison</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <p>• <strong>localStorage</strong>: ~5-10MB, synchronous, simple key-value</p>
              <p>• <strong>IndexedDB</strong>: ~50MB+, asynchronous, structured data with indexes</p>
              <p>• <strong>Cookies</strong>: ~4KB, sent to server, simple key-value</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Always wrap in promises or async/await</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Make your code cleaner and easier to work with by wrapping callbacks in promises.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Use indexes for frequently queried properties</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Indexes dramatically improve query performance for large datasets.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Handle version upgrades carefully</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Plan your schema changes and test version migrations thoroughly.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✓ Use transactions appropriately</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use readonly for reads and readwrite for writes. Transactions auto-commit when all requests complete.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ Don't store sensitive data</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                IndexedDB is not encrypted. Never store passwords, credit cards, or sensitive personal information.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Large Storage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store hundreds of MBs of structured data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Asynchronous</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Non-blocking operations with promises
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Indexed Queries</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fast lookups with multiple indexes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Transactional</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ACID compliance for data integrity
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

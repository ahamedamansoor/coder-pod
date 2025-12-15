'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Trash2, Zap } from 'lucide-react';

export default function JavaScriptWeakRefs() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Trash2}
        category="Modern JavaScript"
        title="WeakRef & FinalizationRegistry"
        description="Weak references and cleanup callbacks for advanced memory management (ES2021)"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
              <Trash2 className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What are WeakRef & FinalizationRegistry? 🗑️
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <strong className="text-purple-700 dark:text-purple-400">WeakRef</strong> as a "gentle grip" on an object - 
                you can hold it, but if no one else needs it, it can be garbage collected. 
                <strong className="text-pink-700 dark:text-pink-400"> FinalizationRegistry</strong> is like a cleanup crew that 
                runs code when objects are thrown away. Together, they give you <strong>fine-grained control over memory</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Warning: Advanced Feature!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              These are low-level features. Use them only when you really need fine memory control. 
              Most apps don't need this!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">WeakRef: Gentle References 🤝</CardTitle>
          <CardDescription>Hold objects without preventing garbage collection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            A <code>WeakRef</code> lets you reference an object without keeping it alive. If the object has no other 
            references, it can be garbage collected even if a WeakRef points to it.
          </p>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Basic WeakRef Usage</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Create an object
let obj = { name: 'Important Data', value: 42 };

// Create a weak reference to it
const weakRef = new WeakRef(obj);

// Access the object (might be undefined if GC ran!)
const target = weakRef.deref();
if (target) {
  console.log(target.name); // 'Important Data'
} else {
  console.log('Object was garbage collected');
}

// Remove strong reference
obj = null;

// Later... the object might be gone
setTimeout(() => {
  const target = weakRef.deref();
  console.log(target); // might be undefined now!
}, 5000);`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
            <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Key Point:</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Always check if <code>deref()</code> returns <code>undefined</code> - the object might have been collected!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">FinalizationRegistry: Cleanup Callbacks 🧹</CardTitle>
          <CardDescription>Run code when objects are garbage collected</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Register objects and get notified when they're garbage collected. Perfect for cleanup tasks!
          </p>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Basic FinalizationRegistry</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Create registry with cleanup callback
const registry = new FinalizationRegistry((heldValue) => {
  console.log(\`Object with value "\${heldValue}" was collected\`);
  // Cleanup resources here
});

// Register objects
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

registry.register(obj1, 'Object 1 data');
registry.register(obj2, 'Object 2 data');

// Remove references
obj1 = null;
obj2 = null;

// When GC runs, callbacks will be called
// Output: "Object with value "Object 1 data" was collected"
// Output: "Object with value "Object 2 data" was collected"`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example: Cache System 💾</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example: Memory-Efficient Cache</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class Cache {
  constructor() {
    this.cache = new Map();
    this.registry = new FinalizationRegistry((key) => {
      console.log(\`Cleaning up cache for: \${key}\`);
      this.cache.delete(key);
    });
  }
  
  set(key, value) {
    // Store weak reference
    this.cache.set(key, new WeakRef(value));
    
    // Register for cleanup
    this.registry.register(value, key);
  }
  
  get(key) {
    const weakRef = this.cache.get(key);
    if (!weakRef) return undefined;
    
    // Dereference (might be undefined if GC ran)
    const value = weakRef.deref();
    
    if (!value) {
      // Object was collected, remove from cache
      this.cache.delete(key);
    }
    
    return value;
  }
}

// Usage
const cache = new Cache();

let data = { large: 'data structure' };
cache.set('myData', data);

console.log(cache.get('myData')); // { large: 'data structure' }

// Remove strong reference
data = null;

// After GC, cache automatically cleans up
setTimeout(() => {
  console.log(cache.get('myData')); // undefined
}, 5000);`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Use Cases 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">1. Large Object Caches</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cache large objects (images, parsed data) without worrying about memory leaks
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">2. Resource Cleanup</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Close file handles, network connections when objects are collected
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">3. Observer Patterns</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Automatically unregister observers when objects are destroyed
              </p>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200">
              <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-2">4. Debugging Tools</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track object lifetimes and detect memory issues
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Considerations ⚠️</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Non-Deterministic</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can't predict WHEN garbage collection will run. Don't rely on exact timing!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Always Check deref()</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The object might be gone! Always handle <code>undefined</code> case.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Use Sparingly</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    These are advanced features. Regular garbage collection handles most cases fine!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🤝</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">WeakRef</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hold objects weakly - they can still be GC'd
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🧹</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">FinalizationRegistry</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run cleanup when objects are collected
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💾</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Caches, resource cleanup, memory management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚠️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Warning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced feature - use only when needed!
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

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, ShieldCheck } from 'lucide-react';

export default function JavaScriptSymbolsAsWeakMapKeys() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldCheck}
        category="Modern JavaScript (ES2023)"
        title="Symbols as WeakMap Keys"
        description="Better encapsulation with symbols in WeakMaps!"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                What are Symbols as WeakMap Keys?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Previously, <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">WeakMap</code> only accepted 
                <strong className="text-purple-700 dark:text-purple-400"> objects as keys</strong>. 
                Now you can use <code className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded">Symbols</code> too! 
                This enables <strong className="text-fuchsia-700 dark:text-fuchsia-400">better encapsulation</strong> and 
                <strong className="text-pink-700 dark:text-pink-400"> private data patterns</strong> with guaranteed uniqueness!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Enhanced Privacy!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Symbols are unique and not enumerable, making them perfect for truly private metadata storage in WeakMaps!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            Why This Matters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">True Privacy</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Symbols can't be accidentally discovered through enumeration
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Unique Keys</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Every symbol is unique, preventing key collisions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Private Metadata Storage"
        description="Use symbols as WeakMap keys for private data"
        language="javascript"
        colorTheme="purple"
        code={`// Before ES2023 - could only use objects
const privateData = new WeakMap();

const user1 = {};
privateData.set(user1, { secret: 'password123' });


// After ES2023 - can use symbols!
const metadataMap = new WeakMap();

// Create unique symbols
const userId = Symbol('userId');
const userEmail = Symbol('userEmail');

// Use symbols as WeakMap keys
metadataMap.set(userId, { 
  createdAt: Date.now(),
  role: 'admin' 
});

metadataMap.set(userEmail, {
  verified: true,
  lastLogin: new Date()
});

console.log(metadataMap.get(userId));
// { createdAt: 1702589123456, role: 'admin' }

console.log(metadataMap.get(userEmail));
// { verified: true, lastLogin: ... }


// Symbols are unique - can't be recreated
const anotherUserId = Symbol('userId');
console.log(metadataMap.get(anotherUserId));  // undefined
// Different symbol, even with same description!


// Check if symbol has metadata
console.log(metadataMap.has(userId));  // true`}
      />

      <CodeSnippet
        title="Example 2: Framework Internal State Management"
        description="Real-world use case for component metadata"
        language="javascript"
        colorTheme="emerald"
        code={`// Component framework using symbols for private state
class ComponentFramework {
  // WeakMap to store component metadata
  #metadata = new WeakMap();
  
  registerComponent(name, config) {
    // Create unique symbol for this component
    const componentSymbol = Symbol(name);
    
    // Store metadata using symbol as key
    this.#metadata.set(componentSymbol, {
      name,
      config,
      instances: [],
      createdAt: Date.now()
    });
    
    return componentSymbol;  // Return symbol for later access
  }
  
  getMetadata(componentSymbol) {
    return this.#metadata.get(componentSymbol);
  }
  
  updateMetadata(componentSymbol, updates) {
    const current = this.#metadata.get(componentSymbol);
    if (current) {
      this.#metadata.set(componentSymbol, { ...current, ...updates });
    }
  }
}

const framework = new ComponentFramework();

// Register components
const ButtonComponent = framework.registerComponent('Button', {
  props: ['label', 'onClick']
});

const InputComponent = framework.registerComponent('Input', {
  props: ['value', 'onChange']
});

// Access metadata using symbols
console.log(framework.getMetadata(ButtonComponent));
// { name: 'Button', config: {...}, instances: [], createdAt: ... }

// Update metadata
framework.updateMetadata(ButtonComponent, {
  instances: [{ id: 1 }, { id: 2 }]
});


// Real-world: Event system with private handlers
class EventEmitter {
  #handlers = new WeakMap();
  
  createEvent(eventName) {
    const eventSymbol = Symbol(eventName);
    this.#handlers.set(eventSymbol, []);
    return eventSymbol;
  }
  
  on(eventSymbol, handler) {
    const handlers = this.#handlers.get(eventSymbol) || [];
    handlers.push(handler);
    this.#handlers.set(eventSymbol, handlers);
  }
  
  emit(eventSymbol, ...args) {
    const handlers = this.#handlers.get(eventSymbol) || [];
    handlers.forEach(handler => handler(...args));
  }
}

const emitter = new EventEmitter();
const clickEvent = emitter.createEvent('click');

emitter.on(clickEvent, (data) => {
  console.log('Clicked:', data);
});

emitter.emit(clickEvent, { x: 100, y: 200 });
// Clicked: { x: 100, y: 200 }`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Before vs After ES2023</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30">
                  <th className="p-3 text-left border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Before</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">ES2023</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">WeakMap keys</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Objects only</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Objects + Symbols ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Privacy level</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Moderate</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Excellent ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Key uniqueness</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Reference-based</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Guaranteed unique ✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Enumerable</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400">Potentially</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">Never ✅</td>
                </tr>
              </tbody>
            </table>
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
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Symbol Keys</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    WeakMaps now accept symbols as keys
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Better Privacy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Symbols aren't enumerable - truly private
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Unique</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Every symbol is guaranteed unique
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2023</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enhanced encapsulation patterns
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

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Settings } from 'lucide-react';

export default function JavaScriptStaticBlocks() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="Modern JavaScript"
        title="Static Initialization Blocks"
        description="Static blocks for complex class initialization (ES2022)"
        colorTheme="slate"
      />

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-500 text-white shadow-lg">
              <Settings className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What are Static Initialization Blocks? ⚙️
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Run complex setup code when a class is <strong>first loaded</strong>! Static blocks let you execute 
                statements during class initialization - perfect for <strong className="text-slate-700 dark:text-slate-400">complex setup logic</strong> 
                that doesn't fit in simple static field assignments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Syntax 📝</CardTitle>
          <CardDescription>Run code when class loads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Simple Example</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class DatabaseConnection {
  static connection;
  static isReady = false;
  
  // Static initialization block
  static {
    console.log('Initializing database connection...');
    
    // Complex setup logic here
    this.connection = {
      host: 'localhost',
      port: 5432,
      connected: true
    };
    
    this.isReady = true;
    console.log('Database ready!');
  }
}

// Output when class is first loaded:
// "Initializing database connection..."
// "Database ready!"

console.log(DatabaseConnection.isReady); // true
console.log(DatabaseConnection.connection); // { host: 'localhost', ... }`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Multiple Static Blocks 🔢</CardTitle>
          <CardDescription>Run several blocks in order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Execution Order</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class Config {
  static data = {};
  
  static {
    console.log('Block 1: Loading config...');
    this.data.env = 'production';
  }
  
  static version = '1.0.0';
  
  static {
    console.log('Block 2: Setting up features...');
    this.data.features = ['auth', 'api'];
  }
  
  static {
    console.log('Block 3: Validation...');
    if (!this.data.env) {
      throw new Error('No environment set!');
    }
    console.log('Config validated!');
  }
}

// Output:
// "Block 1: Loading config..."
// "Block 2: Setting up features..."
// "Block 3: Validation..."
// "Config validated!"`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Accessing Private Fields 🔒</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Setup Private Static Fields</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class APIClient {
  static #apiKey;
  static #endpoint;
  
  static {
    // Complex initialization for private fields
    console.log('Setting up API client...');
    
    // Read from environment or config
    this.#apiKey = 'secret-key-123';
    this.#endpoint = 'https://api.example.com';
    
    // Validate
    if (!this.#apiKey) {
      throw new Error('API key required!');
    }
    
    console.log('API client configured');
  }
  
  static getEndpoint() {
    return this.#endpoint;
  }
  
  static makeRequest(path) {
    return \`\${this.#endpoint}\${path}?key=\${this.#apiKey}\`;
  }
}

console.log(APIClient.getEndpoint()); // 'https://api.example.com'
console.log(APIClient.makeRequest('/users')); 
// 'https://api.example.com/users?key=secret-key-123'`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Example 🎯</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example: Feature Flags</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class FeatureFlags {
  static #flags = new Map();
  static #initialized = false;
  
  static {
    console.log('Loading feature flags...');
    
    // Simulate loading from config
    const config = {
      newUI: true,
      betaFeatures: false,
      analytics: true
    };
    
    // Process and store
    for (const [key, value] of Object.entries(config)) {
      this.#flags.set(key, value);
      console.log(\`  \${key}: \${value}\`);
    }
    
    this.#initialized = true;
    console.log('Feature flags loaded!');
  }
  
  static isEnabled(feature) {
    if (!this.#initialized) {
      throw new Error('Flags not initialized!');
    }
    return this.#flags.get(feature) || false;
  }
  
  static listAll() {
    return Array.from(this.#flags.entries());
  }
}

// Automatic initialization when class loads!
console.log(FeatureFlags.isEnabled('newUI')); // true
console.log(FeatureFlags.isEnabled('betaFeatures')); // false`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">When to Use 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Complex Setup Logic</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When simple field assignment isn't enough - need loops, conditionals, try-catch
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Private Field Setup</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Initialize private static fields with complex logic
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">One-Time Setup</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Configuration, connections, registrations that happen once when class loads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-300 dark:border-slate-700 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/10 dark:to-zinc-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Static Blocks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run code when class is first loaded
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔒</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Private Access</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can initialize private static fields
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-zinc-200 dark:border-zinc-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Complex Logic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Loops, conditionals, error handling
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-stone-200 dark:border-stone-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern class initialization
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

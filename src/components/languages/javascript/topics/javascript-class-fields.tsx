'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Lock, Unlock } from 'lucide-react';

export default function JavaScriptClassFields() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Lock}
        category="Modern JavaScript"
        title="Class Fields"
        description="Public and private instance fields in classes (ES2022)"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What are Class Fields? 🏗️
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Class fields let you declare properties <strong className="text-indigo-700 dark:text-indigo-400">directly in the class body</strong>, 
                without using the constructor! You can have <strong className="text-purple-700 dark:text-purple-400">public fields</strong> (accessible everywhere) 
                and <strong className="text-pink-700 dark:text-pink-400">private fields</strong> (only inside the class using <code>#</code>).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Public Class Fields 🌐</CardTitle>
          <CardDescription>Declare properties outside the constructor</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100">Old Way (Constructor)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class User {
  constructor() {
    this.name = 'Guest';
    this.age = 0;
    this.role = 'user';
  }
}

const user = new User();
console.log(user.name); // 'Guest'`}</code></pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100">New Way (Class Fields)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class User {
  name = 'Guest';
  age = 0;
  role = 'user';
}

const user = new User();
console.log(user.name); // 'Guest'`}</code></pre>
              </div>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Much Cleaner!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              No need to write <code>this.</code> assignments in the constructor anymore!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Private Class Fields 🔒</CardTitle>
          <CardDescription>True privacy with # prefix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Use <code>#</code> prefix to make fields truly private - they can't be accessed from outside the class!
          </p>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Private Fields Example</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class BankAccount {
  // Public field
  accountNumber = '12345';
  
  // Private fields (# prefix)
  #balance = 0;
  #pin = '0000';
  
  deposit(amount) {
    this.#balance += amount;
    console.log(\`Deposited: $\${amount}\`);
  }
  
  getBalance(enteredPin) {
    if (enteredPin === this.#pin) {
      return this.#balance;
    }
    return 'Invalid PIN!';
  }
}

const account = new Account();
account.deposit(100);

console.log(account.accountNumber); // '12345' ✅
console.log(account.getBalance('0000')); // 100 ✅

// These throw errors!
console.log(account.#balance); // ❌ SyntaxError
console.log(account.#pin);     // ❌ SyntaxError`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
            <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Key Point:</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Private fields are <strong>truly private</strong> - not just a convention! You literally can't access them outside the class.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Combining Public & Private 🎯</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Real-World Example: User Class</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class User {
  // Public fields
  username = '';
  email = '';
  role = 'user';
  
  // Private fields
  #password = '';
  #loginAttempts = 0;
  #isLocked = false;
  
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }
  
  login(enteredPassword) {
    if (this.#isLocked) {
      return 'Account locked!';
    }
    
    if (enteredPassword === this.#password) {
      this.#loginAttempts = 0;
      return 'Login successful!';
    }
    
    this.#loginAttempts++;
    
    if (this.#loginAttempts >= 3) {
      this.#isLocked = true;
      return 'Too many attempts! Account locked.';
    }
    
    return 'Invalid password';
  }
  
  // Public method to access private data safely
  getLoginAttempts() {
    return this.#loginAttempts;
  }
}

const user = new User('alice', 'alice@example.com', 'secret123');

// Public fields accessible
console.log(user.username); // 'alice' ✅
console.log(user.email);    // 'alice@example.com' ✅

// Private fields NOT accessible
console.log(user.#password);      // ❌ Error
console.log(user.#loginAttempts); // ❌ Error

// But can access through methods
console.log(user.login('wrong'));      // 'Invalid password'
console.log(user.getLoginAttempts());  // 1 ✅`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Benefits 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <Unlock className="w-5 h-5" />
                Public Fields
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Cleaner syntax - no constructor needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Default values right in class body</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>More readable and maintainable</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Private Fields
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>True encapsulation - can't be accessed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>No naming conflicts with subclasses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>Better security for sensitive data</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Notes ⚠️</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Must Start with #</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Private fields MUST begin with <code>#</code>. You must use <code>#</code> everywhere you reference them!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Per-Instance</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Each instance gets its own copy of the fields - they're not shared!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">No Dynamic Access</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Can't use bracket notation: <code>this['#field']</code> won't work. Must use <code>this.#field</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🌐</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Public Fields</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Declare properties directly - no constructor needed!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔒</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Private Fields</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use # for truly private, encapsulated data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cleaner Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    More readable and maintainable classes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern JavaScript class syntax standard
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

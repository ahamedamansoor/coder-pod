'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Lock } from 'lucide-react';

export default function JavaScriptPrivateMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Lock}
        category="Modern JavaScript"
        title="Private Methods"
        description="Private instance and static methods with # syntax (ES2022)"
        colorTheme="violet"
      />

      <Card className="border-2 border-violet-300 dark:border-violet-700 shadow-lg bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What are Private Methods? 🔐
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Just like private fields, you can now create <strong className="text-violet-700 dark:text-violet-400">truly private methods</strong> using 
                the <code className="bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded">#</code> prefix! These methods are completely 
                hidden from outside the class - providing <strong>true encapsulation</strong>!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Private Instance Methods 🔒</CardTitle>
          <CardDescription>Methods that only work inside the class</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-3">Example: Validation Logic</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class User {
  #email = '';
  
  // Private method
  #validateEmail(email) {
    return email.includes('@') && email.includes('.');
  }
  
  // Public method uses private method
  setEmail(email) {
    if (this.#validateEmail(email)) {
      this.#email = email;
      return 'Email set successfully!';
    }
    return 'Invalid email!';
  }
  
  getEmail() {
    return this.#email;
  }
}

const user = new User();
console.log(user.setEmail('alice@example.com')); // 'Email set successfully!'
console.log(user.getEmail()); // 'alice@example.com'

// Private method NOT accessible
user.#validateEmail('test@test.com'); // ❌ SyntaxError!`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Private Static Methods 🏢</CardTitle>
          <CardDescription>Private class-level methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-3">Example: Helper Methods</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`class MathUtils {
  // Private static method
  static #validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }
  
  static #formatResult(result) {
    return \`Result: \${result.toFixed(2)}\`;
  }
  
  // Public static method
  static calculate(a, b, operation) {
    if (!this.#validateNumber(a) || !this.#validateNumber(b)) {
      return 'Invalid numbers!';
    }
    
    let result;
    switch(operation) {
      case 'add': result = a + b; break;
      case 'multiply': result = a * b; break;
      default: return 'Unknown operation';
    }
    
    return this.#formatResult(result);
  }
}

console.log(MathUtils.calculate(5, 3, 'add')); // 'Result: 8.00'

// Private static methods NOT accessible
MathUtils.#validateNumber(5); // ❌ SyntaxError!`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Complete Example 🎯</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Real-World: Payment Processor</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class PaymentProcessor {
  #balance = 1000;
  
  // Private methods for internal logic
  #checkBalance(amount) {
    return this.#balance >= amount;
  }
  
  #deductFunds(amount) {
    this.#balance -= amount;
  }
  
  #addFunds(amount) {
    this.#balance += amount;
  }
  
  #logTransaction(type, amount) {
    console.log(\`[\${type}] $\${amount} - Balance: $\${this.#balance}\`);
  }
  
  // Public API
  processPayment(amount) {
    if (!this.#checkBalance(amount)) {
      return 'Insufficient funds!';
    }
    
    this.#deductFunds(amount);
    this.#logTransaction('PAYMENT', amount);
    return 'Payment successful!';
  }
  
  deposit(amount) {
    this.#addFunds(amount);
    this.#logTransaction('DEPOSIT', amount);
    return 'Deposit successful!';
  }
  
  getBalance() {
    return \`Current balance: $\${this.#balance}\`;
  }
}

const processor = new PaymentProcessor();
console.log(processor.processPayment(50));  // 'Payment successful!'
console.log(processor.deposit(100));        // 'Deposit successful!'
console.log(processor.getBalance());        // 'Current balance: $1050'

// All private methods are hidden
processor.#checkBalance(100);  // ❌ Error
processor.#deductFunds(50);    // ❌ Error`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Benefits 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">True Encapsulation</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Implementation details stay hidden - can't be called from outside
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Refactor Safely</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Change private methods without breaking external code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Clean Public API</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Only expose what users need - hide complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔒</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Private Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use # prefix for truly private methods
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">True Privacy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can't be accessed from outside the class
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🏢</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Static Too</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works with static methods as well!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern JavaScript encapsulation
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

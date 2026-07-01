'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Copy, Info, AlertCircle, RefreshCw, Lock, Database, ChevronRight } from 'lucide-react';

export default function Transactions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Database}
        title="Transactions"
        description="Master MySQL transactions for data integrity and consistency"
      />

      {/* ACID Properties */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">ACID Properties</CardTitle>
              <CardDescription className="text-base">The four properties that guarantee reliable transactions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why ACID Matters</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              ACID ensures that database transactions are processed reliably and maintain data integrity, even in case of system failures.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Badge variant="secondary">A - Atomicity</Badge>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">All operations in a transaction succeed or fail together</p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  If any part of a transaction fails, the entire transaction is rolled back. No partial updates.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Badge variant="secondary">C - Consistency</Badge>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Database remains in a valid state before and after transaction</p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  All constraints and rules are maintained. The database transitions from one valid state to another.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Badge variant="secondary">I - Isolation</Badge>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Concurrent transactions don't interfere with each other</p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Each transaction sees a consistent snapshot of the data, unaffected by other concurrent transactions.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Badge variant="secondary">D - Durability</Badge>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Committed transactions persist even after system failure</p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Once committed, changes are permanently stored and survive system crashes or power failures.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Commands */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 dark:from-green-950/20 dark:via-gray-900 dark:to-emerald-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Transaction Commands</CardTitle>
              <CardDescription className="text-base">START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">START TRANSACTION</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Begin a new transaction</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('START TRANSACTION;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'START TRANSACTION;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>START TRANSACTION;</div>
                  <div className="text-slate-400 mt-2">-- or BEGIN;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">COMMIT</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Save all changes permanently</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('COMMIT;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'COMMIT;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>COMMIT;</div>
                  <div className="text-slate-400 mt-2">-- Permanently save changes</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">ROLLBACK</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Undo all changes in transaction</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('ROLLBACK;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'ROLLBACK;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>ROLLBACK;</div>
                  <div className="text-slate-400 mt-2">-- Undo all uncommitted changes</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">SAVEPOINT</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Create rollback points within transaction</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SAVEPOINT my_savepoint;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SAVEPOINT my_savepoint;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SAVEPOINT my_savepoint;</div>
                  <div className="text-slate-400 mt-2">-- Create named savepoint</div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Example */}
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Complete Transaction Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard('START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Transfer $100 from account 1 to account 2</div>
                <div>START TRANSACTION;</div>
                <div className="text-green-400">-- Deduct from account 1</div>
                <div>UPDATE accounts SET balance = balance - 100 WHERE id = 1;</div>
                <div className="text-green-400">-- Add to account 2</div>
                <div>UPDATE accounts SET balance = balance + 100 WHERE id = 2;</div>
                <div className="text-green-400">-- Commit if both succeed</div>
                <div>COMMIT;</div>
                <div className="text-slate-400 mt-2">-- Or use ROLLBACK if any fails</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Isolation Levels */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Isolation Levels</CardTitle>
              <CardDescription className="text-base">Control how transactions interact with each other</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Trade-off Between Consistency and Performance</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Higher isolation levels provide more consistency but reduce concurrency. Lower levels improve performance but may allow anomalies.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 dark:text-white">READ UNCOMMITTED</h3>
                <Badge variant="outline">Lowest Isolation</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Can read uncommitted changes from other transactions</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;</div>
                </div>
              </div>
              <Alert className="mt-3 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200 text-xs">
                  <strong>Dirty reads possible</strong> - Can read data that might be rolled back.
                </AlertDescription>
              </Alert>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 dark:text-white">READ COMMITTED</h3>
                <Badge variant="outline">Default in Many DBs</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Can only read committed changes from other transactions</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SET TRANSACTION ISOLATION LEVEL READ COMMITTED;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SET TRANSACTION ISOLATION LEVEL READ COMMITTED;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SET TRANSACTION ISOLATION LEVEL READ COMMITTED;</div>
                </div>
              </div>
              <Alert className="mt-3 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-800 dark:text-amber-200 text-xs">
                  <strong>Non-repeatable reads possible</strong> - Same query may return different results.
                </AlertDescription>
              </Alert>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 dark:text-white">REPEATABLE READ</h3>
                <Badge variant="outline">MySQL Default</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Same query returns same results within transaction</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;</div>
                </div>
              </div>
              <Alert className="mt-3 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-800 dark:text-amber-200 text-xs">
                  <strong>Phantom reads possible</strong> - New rows may appear from other transactions.
                </AlertDescription>
              </Alert>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 dark:text-white">SERIALIZABLE</h3>
                <Badge variant="outline">Highest Isolation</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Complete isolation - transactions execute sequentially</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;</div>
                </div>
              </div>
              <Alert className="mt-3 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <AlertDescription className="text-blue-800 dark:text-blue-200 text-xs">
                  <strong>No anomalies</strong> - Prevents dirty reads, non-repeatable reads, and phantom reads. Lowest performance.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deadlocks */}
      <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 via-white to-pink-50/50 dark:from-red-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg">
              <RefreshCw className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Deadlocks</CardTitle>
              <CardDescription className="text-base">When transactions wait for each other indefinitely</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">What is a Deadlock?</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              A deadlock occurs when two or more transactions hold locks that the other needs, creating a circular dependency where neither can proceed.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Deadlock Scenario</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Transaction A</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Locks Row 1
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Tries to lock Row 2 (blocked)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Waiting for Transaction B
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Transaction B</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Locks Row 2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Tries to lock Row 1 (blocked)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Waiting for Transaction A
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Preventing Deadlocks</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Access tables in consistent order</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Always access tables in the same sequence across transactions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Keep transactions short</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Minimize the time locks are held to reduce deadlock probability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Use lower isolation levels</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Lower isolation levels reduce lock contention.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Add retry logic</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Catch deadlock errors and retry transactions automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50 dark:from-slate-950/20 dark:via-gray-900 dark:to-gray-950/20">
        <CardHeader>
          <CardTitle className="text-2xl">Best Practices</CardTitle>
          <CardDescription>Guidelines for using transactions effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Keep transactions short</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Long-running transactions increase lock contention and deadlock risk.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Always handle errors</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Use TRY-CATCH blocks or error handling to ensure transactions are rolled back on errors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Use appropriate isolation level</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Choose the lowest isolation level that meets your consistency requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Avoid user interaction in transactions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Don't wait for user input while holding database locks.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

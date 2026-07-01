'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Filter, Play, CheckCircle, AlertCircle, Info, Copy, ChevronRight, Search, Zap, Database
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes highlightRow {
    0% { background-color: transparent; transform: scale(1); }
    50% { background-color: rgba(59, 130, 246, 0.2); transform: scale(1.02); }
    100% { background-color: rgba(59, 130, 246, 0.1); transform: scale(1); }
  }
  @keyframes slideInFromLeft {
    0% { transform: translateX(-20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideInFromRight {
    0% { transform: translateX(20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4); }
  }
  .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
  .animate-highlightRow { animation: highlightRow 0.8s ease-out forwards; }
  .animate-slideInLeft { animation: slideInFromLeft 0.6s ease-out forwards; }
  .animate-slideInRight { animation: slideInFromRight 0.6s ease-out forwards; }
  .animate-glowPulse { animation: glowPulse 2s ease-in-out infinite; }
`;

export default function FilteringExpressions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [animationComplete, setAnimationComplete] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const runAnimation = (type: string, totalSteps: number = 4) => {
    setActiveAnimation(type);
    setAnimationStep(0);
    setAnimationComplete(null);
    const interval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= totalSteps - 1) {
          clearInterval(interval);
          setAnimationComplete(type);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      
      <PageHeader
        icon={Filter}
        category="MySQL · Fundamentals"
        title="Filtering & Expressions"
        description="Master SQL filtering operators and conditional expressions for precise data retrieval"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Understanding Filtering</CardTitle>
              <CardDescription className="text-base">The key to retrieving exactly what you need</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Filtering Matters</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Filtering allows you to extract specific subsets of data from large tables. Without filtering, queries return all rows, which can be slow and overwhelming. Mastering filtering is essential for efficient database operations.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">WHERE</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Filter rows based on conditions</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">Logical</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Combine conditions with AND/OR</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">Patterns</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Match text with LIKE and wildcards</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WHERE Clause */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Filter className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">WHERE Clause</CardTitle>
              <CardDescription className="text-base">Filter rows based on specified conditions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Basic Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              The WHERE clause is used to extract only those records that fulfill a specified condition. It's the most common way to filter data in SQL queries.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Simple Condition</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT * FROM users WHERE username LIKE 'john%'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "SELECT * FROM users WHERE username LIKE 'john%'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get users with username starting with john</div>
                  <div>SELECT * FROM users WHERE username LIKE 'john%';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">String Comparison</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT * FROM users WHERE email = 'john@example.com'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "SELECT * FROM users WHERE email = 'john@example.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get user with specific email</div>
                  <div>SELECT * FROM users WHERE email = 'john@example.com';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Multiple Conditions</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT * FROM users WHERE username LIKE 'john%' AND email LIKE '%@example.com'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "SELECT * FROM users WHERE username LIKE 'john%' AND email LIKE '%@example.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get users with username starting with john and example.com email</div>
                  <div>SELECT * FROM users WHERE username LIKE 'john%' AND email LIKE '%@example.com';</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('where', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'where' ? 'Running...' : animationComplete === 'where' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">bob@test.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (username LIKE 'john%')</h4>
                {(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">john</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">john@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'where' ? 'Filtering...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'where' || animationComplete === 'where') && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Filtered successfully! 1 row returned (username LIKE 'john%').</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Logical Operators */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 dark:from-green-950/20 dark:via-gray-900 dark:to-emerald-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Logical Operators</CardTitle>
              <CardDescription className="text-base">Combine multiple conditions with AND, OR, NOT</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Operator Precedence</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              NOT has the highest precedence, followed by AND, then OR. Use parentheses to control evaluation order.
            </AlertDescription>
          </Alert>

          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">AND</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">All conditions must be TRUE</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE username LIKE 'john%' AND email LIKE '%@example.com'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE username LIKE 'john%' AND email LIKE '%@example.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users</div>
                  <div>WHERE username LIKE 'john%' AND email LIKE '%@example.com';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">OR</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Any condition must be TRUE</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE email LIKE '%@example.com' OR email LIKE '%@test.com'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE email LIKE '%@example.com' OR email LIKE '%@test.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users</div>
                  <div>WHERE email LIKE '%@example.com' OR email LIKE '%@test.com';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">NOT</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Negates the condition</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE NOT email LIKE '%@example.com'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE NOT email LIKE '%@example.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users WHERE NOT email LIKE '%@example.com';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Grouped</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Use parentheses for grouping</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE (username LIKE 'john%' AND email LIKE '%@example.com') OR (username LIKE 'alice%' AND email LIKE '%@test.com')")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE (username LIKE 'john%' AND email LIKE '%@example.com') OR (username LIKE 'alice%' AND email LIKE '%@test.com')" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users</div>
                  <div>WHERE (username LIKE 'john%' AND email LIKE '%@example.com')</div>
                  <div>  OR (username LIKE 'alice%' AND email LIKE '%@test.com');</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('logical', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'logical' ? 'Running...' : animationComplete === 'logical' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                WHERE (username LIKE 'john%' AND email LIKE '%@example.com') OR (username LIKE 'alice%' AND email LIKE '%@test.com')
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@test.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">17</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">LA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result</h4>
                {(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">john</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">john@example.com ✓</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">alice</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">alice@test.com ✓</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'logical' ? 'Evaluating conditions...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'logical' || animationComplete === 'logical') && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>2 rows match: john (username LIKE 'john%' AND email LIKE '%@example.com') OR alice (username LIKE 'alice%' AND email LIKE '%@test.com').</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* LIKE Pattern Matching */}
      <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 dark:from-amber-950/20 dark:via-gray-900 dark:to-orange-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">LIKE Pattern Matching</CardTitle>
              <CardDescription className="text-base">Search for patterns in text data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Wildcards</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">%</code> matches any sequence (0+ chars). <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">_</code> matches exactly one character.
            </AlertDescription>
          </Alert>

          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Starts with</h3>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE username LIKE 'j%'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE username LIKE 'j%'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Usernames starting with j</div>
                  <div>SELECT * FROM users WHERE username LIKE 'j%';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Ends with</h3>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE email LIKE '%@gmail.com'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE email LIKE '%@gmail.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Emails ending with @gmail.com</div>
                  <div>SELECT * FROM users WHERE email LIKE '%@gmail.com';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Contains</h3>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE name LIKE '%an%'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE name LIKE '%an%'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Names containing 'an'</div>
                  <div>SELECT * FROM users WHERE name LIKE '%an%';</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Email domain pattern</h3>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE email LIKE '%@example.com'")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE email LIKE '%@example.com'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Email domain pattern</div>
                  <div>SELECT * FROM users WHERE email LIKE '%@example.com';</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('like', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'like' ? 'Running...' : animationComplete === 'like' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                WHERE username LIKE 'J%'
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">jane</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">jane@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (username LIKE 'J%')</h4>
                {(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">john</td>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">john@example.com ✓</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">jane</td>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">jane@example.com ✓</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'like' ? 'Matching pattern...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'like' || animationComplete === 'like') && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Pattern 'J%' matched 2 names starting with 'J'.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* BETWEEN and IN */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Filter className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Range and List Filtering</CardTitle>
              <CardDescription className="text-base">BETWEEN for ranges, IN for lists</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">BETWEEN</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Values within a range (inclusive)</p>
              <div className="relative">
                <button onClick={() => copyToClipboard('SELECT * FROM products WHERE price BETWEEN 10 AND 100')} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === 'SELECT * FROM products WHERE price BETWEEN 10 AND 100' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM products</div>
                  <div>WHERE price BETWEEN 10 AND 100;</div>
                </div>
              </div>
              <Alert className="mt-3 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
                <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <AlertDescription className="text-purple-800 dark:text-purple-200 text-xs">BETWEEN is inclusive, includes both boundary values.</AlertDescription>
              </Alert>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">IN</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Match any value in a list</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT * FROM users WHERE email IN ('john@example.com', 'alice@example.com', 'bob@example.com')")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT * FROM users WHERE email IN ('john@example.com', 'alice@example.com', 'bob@example.com')" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users</div>
                  <div>WHERE email IN ('john@example.com', 'alice@example.com', 'bob@example.com');</div>
                </div>
              </div>
              <Alert className="mt-3 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
                <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <AlertDescription className="text-purple-800 dark:text-purple-200 text-xs">IN is cleaner than multiple OR conditions.</AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('range', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'range' ? 'Running...' : animationComplete === 'range' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                WHERE price BETWEEN 10 AND 100
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Products Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">product_id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Laptop</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">$50</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Mouse</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">$25</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Monitor</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (price BETWEEN 10 AND 100)</h4>
                {(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">product_id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">Laptop</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">$50 ✓</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">2</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">Mouse</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">$25 ✓</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'range' ? 'Filtering by range...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'range' || animationComplete === 'range') && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>2 products found within the price range $10-$100.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* CASE and COALESCE */}
      <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50 dark:from-slate-950/20 dark:via-gray-900 dark:to-gray-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl shadow-lg">
              <Info className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Conditional Expressions</CardTitle>
              <CardDescription className="text-base">CASE statements and NULL handling</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">CASE Statement</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Categorize orders by value</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT order_id, total, CASE WHEN total >= 1000 THEN 'Premium' WHEN total >= 500 THEN 'Standard' ELSE 'Basic' END as order_tier FROM orders")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT order_id, total, CASE WHEN total >= 1000 THEN 'Premium' WHEN total >= 500 THEN 'Standard' ELSE 'Basic' END as order_tier FROM orders" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Categorize orders by total value</div>
                  <div>SELECT order_id, total, CASE</div>
                  <div>  WHEN total &gt;= 1000 THEN 'Premium'</div>
                  <div>  WHEN total &gt;= 500 THEN 'Standard'</div>
                  <div>  ELSE 'Basic' END as order_tier</div>
                  <div>FROM orders;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">COALESCE</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Handle NULL with fallback values</p>
              <div className="relative">
                <button onClick={() => copyToClipboard("SELECT name, COALESCE(preferred_email, personal_email, business_email) as primary_email FROM contacts")} className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                  {copiedCode === "SELECT name, COALESCE(preferred_email, personal_email, business_email) as primary_email FROM contacts" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div className="text-slate-400 mb-2">-- Returns first non-NULL email</div>
                  <div>SELECT name,</div>
                  <div>  COALESCE(preferred_email,</div>
                  <div>           personal_email,</div>
                  <div>           business_email) as primary_email</div>
                  <div>FROM contacts;</div>
                </div>
              </div>
              <Alert className="mt-3 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30">
                <AlertCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <AlertDescription className="text-slate-800 dark:text-slate-200 text-xs">Evaluates arguments left-to-right, returns first non-NULL value. If all are NULL, returns NULL unless a default is provided.</AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-950/30 dark:to-gray-950/30 border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('conditional', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'conditional' ? 'Running...' : animationComplete === 'conditional' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                CASE WHEN quantity &gt;= 5 THEN 'Large Order' WHEN quantity &gt;= 2 THEN 'Medium Order' ELSE 'Small Order' END
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">10</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">3</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (with order_size)</h4>
                {(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">quantity</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">10</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">Large Order</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">2</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">3</td>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">Medium Order</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 4 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">3</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">1</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">Small Order</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'conditional' ? 'Evaluating conditions...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'conditional' || animationComplete === 'conditional') && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-900/30 rounded-lg border border-slate-300 dark:border-slate-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>CASE statement successfully categorized orders into tiers based on total value.</span>
                </div>
              </div>
            )}
          </div>

          {/* COALESCE Interactive Demo */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-950/30 dark:to-gray-950/30 border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">COALESCE Demo</h3>
              <button
                onClick={() => runAnimation('coalesce', 4)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'coalesce' ? 'Running...' : animationComplete === 'coalesce' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-4">
              <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                COALESCE(preferred_email, personal_email, business_email)
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Contacts Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">preferred_email</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">personal_email</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">business_email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-green-600 dark:text-green-400">john@pref.com</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@personal.com</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@business.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-red-400 dark:text-red-400">NULL</td>
                      <td className="py-2 text-green-600 dark:text-green-400">alice@personal.com</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@business.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-red-400 dark:text-red-400">NULL</td>
                      <td className="py-2 text-red-400 dark:text-red-400">NULL</td>
                      <td className="py-2 text-green-600 dark:text-green-400">bob@business.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 2 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (primary_email)</h4>
                {(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">primary_email</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">John</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400 font-semibold">john@pref.com</td>
                        <td className="py-2 text-blue-600 dark:text-blue-400 text-xs">preferred</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400 font-semibold">alice@personal.com</td>
                        <td className="py-2 text-green-600 dark:text-green-400 text-xs">personal</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400 font-semibold">bob@business.com</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 text-xs">business</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'coalesce' ? 'Evaluating fallback...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {(activeAnimation === 'coalesce' || animationComplete === 'coalesce') && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-900/30 rounded-lg border border-slate-300 dark:border-slate-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>COALESCE returns the first non-NULL value in order: preferred → personal → business.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-violet-950/20">
        <CardHeader>
          <div>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
            <CardDescription>Tips for effective filtering</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
                    <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Use indexes on filter columns</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Columns used in WHERE, JOIN, and ORDER BY should be indexed for performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Avoid leading wildcards in LIKE</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">LIKE '%pattern' cannot use indexes. Use 'pattern%' when possible.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Sargable queries</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Avoid functions on indexed columns (e.g., YEAR(date) = 2023) to allow index usage.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

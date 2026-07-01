'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  BarChart3, Copy, CheckCircle, Info, Play, 
  TrendingUp, TrendingDown, Hash, PieChart, Filter
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes highlightRow {
    0% {
      background-color: transparent;
      transform: scale(1);
    }
    50% {
      background-color: rgba(59, 130, 246, 0.2);
      transform: scale(1.02);
    }
    100% {
      background-color: rgba(59, 130, 246, 0.1);
      transform: scale(1);
    }
  }
  
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInRight {
    0% {
      transform: translateX(20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
    }
  }
  
  @keyframes successPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-highlightRow {
    animation: highlightRow 0.8s ease-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.5s ease-out forwards;
  }
  
  .animate-glowPulse {
    animation: glowPulse 1s ease-in-out infinite;
  }
  
  .animate-successPulse {
    animation: successPulse 0.5s ease-in-out;
  }
`;

export default function AggregateFunctions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [animationComplete, setAnimationComplete] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const runAnimation = (animationName: string) => {
    setActiveAnimation(animationName);
    setAnimationStep(0);
    setCompletedSteps([]);
    setAnimationComplete(null);
    
    let steps = 0;
    let interval: NodeJS.Timeout;
    
    if (animationName === 'count') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'sum') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'avg') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'minMax') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'groupBy') {
      steps = 4;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'having') {
      steps = 4;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'groupConcat') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    } else if (animationName === 'stddevVariance') {
      steps = 3;
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev < steps) {
            setCompletedSteps((current) => [...current, prev + 1]);
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationComplete(animationName);
            return prev;
          }
        });
      }, 1500);
    }
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      
      <PageHeader
        icon={BarChart3}
        category="MySQL · Functions"
        title="Aggregate Functions"
        description="Master MySQL aggregate functions for data analysis and reporting"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Aggregate Functions Overview</CardTitle>
              <CardDescription className="text-base">Essential tools for data analysis and reporting</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            MySQL aggregate functions perform calculations on multiple rows and return a single result. 
            These functions are essential for data analysis, reporting, and business intelligence queries.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">COUNT()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">SUM()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">AVG()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">MIN()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">MAX()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">GROUP BY</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">HAVING</Badge>
          </div>
        </CardContent>
      </Card>

      {/* COUNT() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">COUNT()</CardTitle>
              <CardDescription className="text-base">Count rows in a table</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded font-mono text-sm">
                COUNT(*) / COUNT(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">COUNT(*) Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT COUNT(*) FROM users;", 'count1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'count1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Count all rows</div>
                  <div>SELECT COUNT(*) FROM users;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">COUNT(column) Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT COUNT(email) FROM users;", 'count2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'count2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Count non-null values</div>
                  <div>SELECT COUNT(email) FROM users;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: COUNT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: COUNT()</h3>
              <button
                onClick={() => runAnimation('count')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'count' ? 'Running...' : animationComplete === 'count' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">ID</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Bob</td>
                      <td className="py-2 text-slate-400 dark:text-slate-500 italic">NULL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">COUNT(*) Result</h4>
                {activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 2 ? (
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-4xl animate-fadeIn">3</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
                {activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 3 && (
                  <div className="mt-4 text-sm">
                    <div className="text-slate-600 dark:text-slate-400">COUNT(email):</div>
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold text-2xl animate-fadeIn">2</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">(excludes NULL values)</div>
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'count' || animationComplete === 'count' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>COUNT(*) returned 3 rows, COUNT(email) returned 2 (excluded NULL)</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SUM() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">SUM()</CardTitle>
              <CardDescription className="text-base">Calculate total of numeric values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Syntax</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded font-mono text-sm">
                SUM(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">SUM() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT SUM(amount) FROM orders;", 'sum1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'sum1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Calculate total amount</div>
                <div>SELECT SUM(amount) FROM orders;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: SUM */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: SUM()</h3>
              <button
                onClick={() => runAnimation('sum')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'sum' ? 'Running...' : animationComplete === 'sum' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Order ID</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$100</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-green-600 dark:text-green-400 font-semibold">$200</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-green-600 dark:text-green-400 font-semibold">$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">SUM(amount) Result</h4>
                {activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 3 ? (
                  <div className="text-green-600 dark:text-green-400 font-bold text-4xl animate-fadeIn">$450</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
                {activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 3 && (
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
                    Calculation: $100 + $200 + $150 = $450
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'sum' || animationComplete === 'sum' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Total amount calculated successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* AVG() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <PieChart className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">AVG()</CardTitle>
              <CardDescription className="text-base">Calculate average value</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Syntax</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded font-mono text-sm">
                AVG(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">AVG() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT AVG(score) FROM students;", 'avg1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'avg1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Calculate average score</div>
                <div>SELECT AVG(score) FROM students;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: AVG */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: AVG()</h3>
              <button
                onClick={() => runAnimation('avg')}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'avg' ? 'Running...' : animationComplete === 'avg' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Students Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">85</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">92</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">78</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">AVG(score) Result</h4>
                {activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 3 ? (
                  <div className="text-amber-600 dark:text-amber-400 font-bold text-4xl animate-fadeIn">85</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
                {activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 3 && (
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
                    Calculation: (85 + 92 + 78) ÷ 3 = 85
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'avg' || animationComplete === 'avg' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Average score calculated successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* MIN() and MAX() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <TrendingDown className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">MIN() & MAX()</CardTitle>
              <CardDescription className="text-base">Find minimum and maximum values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded font-mono text-sm">
                MIN(column) / MAX(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">MIN() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT MIN(price) FROM products;", 'min1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'min1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Find minimum price</div>
                  <div>SELECT MIN(price) FROM products;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">MAX() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT MAX(price) FROM products;", 'max1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'max1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Find maximum price</div>
                  <div>SELECT MAX(price) FROM products;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: MIN/MAX */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: MIN() & MAX()</h3>
              <button
                onClick={() => runAnimation('minMax')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'minMax' ? 'Running...' : animationComplete === 'minMax' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Products Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Product</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Laptop</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$999</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Mouse</td>
                      <td className="py-2 text-green-600 dark:text-green-400 font-semibold">$25</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Monitor</td>
                      <td className="py-2 text-red-600 dark:text-red-400 font-semibold">$499</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* MIN Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MIN(price)</h4>
                {activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 3 ? (
                  <div className="text-green-600 dark:text-green-400 font-bold text-4xl animate-fadeIn">$25</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>

              {/* MAX Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MAX(price)</h4>
                {activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 3 ? (
                  <div className="text-red-600 dark:text-red-400 font-bold text-4xl animate-fadeIn">$999</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'minMax' || animationComplete === 'minMax' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>MIN: $25 (Mouse), MAX: $999 (Laptop)</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* GROUP BY Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg">
              <Filter className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">GROUP BY</CardTitle>
              <CardDescription className="text-base">Group rows and aggregate data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Syntax</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded font-mono text-sm">
                GROUP BY column
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">GROUP BY Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT department, COUNT(*) FROM employees GROUP BY department;", 'group1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'group1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Count employees by department</div>
                <div>SELECT department, COUNT(*)</div>
                <div>FROM employees</div>
                <div>GROUP BY department;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: GROUP BY */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950/30 dark:to-blue-950/30 border-2 border-indigo-300 dark:border-indigo-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: GROUP BY</h3>
              <button
                onClick={() => runAnimation('groupBy')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'groupBy' ? 'Running...' : animationComplete === 'groupBy' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Engineering</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">Engineering</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">Marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">GROUP BY Result</h4>
                {activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 3 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">2</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">1</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'groupBy' || animationComplete === 'groupBy' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Grouped 2 departments: Engineering (2), Marketing (1)</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* HAVING Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <Filter className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">HAVING</CardTitle>
              <CardDescription className="text-base">Filter grouped results</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30">
            <Info className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Syntax</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded font-mono text-sm">
                GROUP BY column HAVING condition
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">HAVING Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 1;", 'having1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'having1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Filter departments with more than 1 employee</div>
                <div>SELECT department, COUNT(*)</div>
                <div>FROM employees</div>
                <div>GROUP BY department</div>
                <div>HAVING COUNT(*) &gt; 1;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: HAVING */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 border-2 border-rose-300 dark:border-rose-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: HAVING</h3>
              <button
                onClick={() => runAnimation('having')}
                className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'having' ? 'Running...' : animationComplete === 'having' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">2</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">1</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Sales</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* GROUP BY Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">GROUP BY Result</h4>
                {activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 3 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">2</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">1</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Sales</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">1</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>

              {/* HAVING Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">HAVING COUNT &gt; 1</h4>
                {activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 4 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                        <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">2</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'having' || animationComplete === 'having' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border border-rose-300 dark:border-rose-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Filtered to only Engineering (2 employees) - Marketing and Sales filtered out</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* GROUP_CONCAT Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">GROUP_CONCAT()</CardTitle>
              <CardDescription className="text-base">Concatenate group values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Syntax</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded font-mono text-sm">
                GROUP_CONCAT(column SEPARATOR ',')
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">GROUP_CONCAT() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT department, GROUP_CONCAT(name SEPARATOR ', ') FROM employees GROUP BY department;", 'group1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'group1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Concatenate names by department</div>
                <div>SELECT department, GROUP_CONCAT(name SEPARATOR ', ')</div>
                <div>FROM employees</div>
                <div>GROUP BY department;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: GROUP_CONCAT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 border-2 border-indigo-300 dark:border-indigo-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: GROUP_CONCAT()</h3>
              <button
                onClick={() => runAnimation('groupConcat')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'groupConcat' ? 'Running...' : animationComplete === 'groupConcat' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Bob</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">GROUP_CONCAT Result</h4>
                {activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 2 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Department</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">Concatenated Names</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">John, Alice</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">Bob</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'groupConcat' || animationComplete === 'groupConcat' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Names concatenated successfully by department!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* STDDEV() and VARIANCE() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg">
              <PieChart className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">STDDEV() & VARIANCE()</CardTitle>
              <CardDescription className="text-base">Statistical analysis functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30">
            <Info className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Syntax</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              <code className="bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded font-mono text-sm">
                STDDEV(column) / VARIANCE(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">STDDEV() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT STDDEV(score) FROM students;", 'std1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'std1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Calculate standard deviation</div>
                  <div>SELECT STDDEV(score) FROM students;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">VARIANCE() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT VARIANCE(score) FROM students;", 'var1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'var1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Calculate variance</div>
                  <div>SELECT VARIANCE(score) FROM students;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: STDDEV/VARIANCE */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 border-2 border-teal-300 dark:border-teal-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: STDDEV() & VARIANCE()</h3>
              <button
                onClick={() => runAnimation('stddevVariance')}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'stddevVariance' ? 'Running...' : animationComplete === 'stddevVariance' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Scores</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">85</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">92</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">78</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">88</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">95</span>
                  </div>
                </div>
              </div>

              {/* STDDEV Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">STDDEV()</h4>
                {activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 2 ? (
                  <div className="text-teal-600 dark:text-teal-400 font-bold text-3xl animate-fadeIn">6.28</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>

              {/* VARIANCE Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">VARIANCE()</h4>
                {activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 3 ? (
                  <div className="text-cyan-600 dark:text-cyan-400 font-bold text-3xl animate-fadeIn">39.5</div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    Click Run Query to see result
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'stddevVariance' || animationComplete === 'stddevVariance' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg border border-teal-300 dark:border-teal-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Statistical analysis completed! Average: 87.6, STDDEV: 6.28, VARIANCE: 39.5</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bitwise Aggregate Functions */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">BIT_AND(), BIT_OR(), BIT_XOR()</CardTitle>
              <CardDescription className="text-base">Bitwise aggregate operations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30">
            <Info className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Syntax</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded font-mono text-sm">
                BIT_AND(column) / BIT_OR(column) / BIT_XOR(column)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">BIT_AND() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT BIT_AND(flags) FROM settings;", 'bit1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'bit1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Bitwise AND</div>
                  <div>SELECT BIT_AND(flags)</div>
                  <div>FROM settings;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">BIT_OR() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT BIT_OR(flags) FROM settings;", 'bit2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'bit2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Bitwise OR</div>
                  <div>SELECT BIT_OR(flags)</div>
                  <div>FROM settings;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">BIT_XOR() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT BIT_XOR(flags) FROM settings;", 'bit3')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'bit3' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Bitwise XOR</div>
                  <div>SELECT BIT_XOR(flags)</div>
                  <div>FROM settings;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: Bitwise Functions */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 border-2 border-rose-300 dark:border-rose-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Bitwise Functions</h3>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Input values: 5 (101), 3 (011), 6 (110)
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Input Values */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Input Values</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">5 (101)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">3 (011)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">6 (110)</span>
                  </div>
                </div>
              </div>

              {/* BIT_AND Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">BIT_AND()</h4>
                <div className="text-rose-600 dark:text-rose-400 font-bold text-3xl">2</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">010 (5 & 3 & 6)</div>
              </div>

              {/* BIT_OR Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">BIT_OR()</h4>
                <div className="text-pink-600 dark:text-pink-400 font-bold text-3xl">7</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">111 (5 | 3 | 6)</div>
              </div>

              {/* BIT_XOR Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">BIT_XOR()</h4>
                <div className="text-fuchsia-600 dark:text-fuchsia-400 font-bold text-3xl">0</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">000 (5 ^ 3 ^ 6)</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border border-rose-300 dark:border-rose-700">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
                <Info className="w-4 h-4" />
                <span>Bitwise functions perform binary operations on all values in a column</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

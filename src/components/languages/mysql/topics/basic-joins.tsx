'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  GitBranch, Copy, CheckCircle, Info, Play, 
  ArrowRight, ArrowLeft, ArrowUpDown, Link2, RefreshCw
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
  
  @keyframes matchHighlight {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: rgba(34, 197, 94, 0.3);
    }
    100% {
      background-color: rgba(34, 197, 94, 0.1);
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
  
  .animate-matchHighlight {
    animation: matchHighlight 0.8s ease-out forwards;
  }
`;

export default function BasicJoins() {
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
    
    if (animationName === 'innerJoin') {
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
    } else if (animationName === 'leftJoin') {
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
    } else if (animationName === 'rightJoin') {
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
    } else if (animationName === 'crossJoin') {
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
        icon={GitBranch}
        category="MySQL · Querying"
        title="Understanding JOINs"
        description="Master MySQL JOIN operations for combining data from multiple tables"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <GitBranch className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">JOIN Operations Overview</CardTitle>
              <CardDescription className="text-base">Combine data from multiple tables based on related columns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            JOINs are used to combine rows from two or more tables based on a related column between them. 
            Understanding JOINs is essential for working with normalized databases and retrieving related data efficiently.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">INNER JOIN</Badge>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">LEFT JOIN</Badge>
            <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">RIGHT JOIN</Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">CROSS JOIN</Badge>
            <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">SELF JOIN</Badge>
          </div>
        </CardContent>
      </Card>

      {/* INNER JOIN */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">INNER JOIN</CardTitle>
              <CardDescription className="text-base">Return rows when there is a match in both tables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded font-mono text-sm">
                SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">INNER JOIN Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT users.name, orders.order_id FROM users INNER JOIN orders ON users.id = orders.user_id;", 'inner1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'inner1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Join users with their orders</div>
                <div>SELECT users.name, orders.order_id</div>
                <div>FROM users</div>
                <div>INNER JOIN orders ON users.id = orders.user_id;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: INNER JOIN */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: INNER JOIN</h3>
              <button
                onClick={() => runAnimation('innerJoin')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'innerJoin' ? 'Running...' : animationComplete === 'innerJoin' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Users Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 2 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 3 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-400 dark:text-slate-500 italic">Bob</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Orders Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">user_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 2 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">101</td>
                      <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">1</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 3 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">102</td>
                      <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">2</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">103</td>
                      <td className="py-2 text-slate-400 dark:text-slate-500 italic">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">INNER JOIN Result</h4>
                {activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 4 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">John</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">101</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">102</td>
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

            {activeAnimation === 'innerJoin' || animationComplete === 'innerJoin' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>INNER JOIN returned only matching rows (2 records). Bob and Order 103 excluded due to no match.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* LEFT JOIN */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <ArrowLeft className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">LEFT JOIN</CardTitle>
              <CardDescription className="text-base">Return all rows from left table, matching rows from right table</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Syntax</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded font-mono text-sm">
                SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">LEFT JOIN Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT users.name, orders.order_id FROM users LEFT JOIN orders ON users.id = orders.user_id;", 'left1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'left1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- All users with their orders (if any)</div>
                <div>SELECT users.name, orders.order_id</div>
                <div>FROM users</div>
                <div>LEFT JOIN orders ON users.id = orders.user_id;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: LEFT JOIN */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: LEFT JOIN</h3>
              <button
                onClick={() => runAnimation('leftJoin')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'leftJoin' ? 'Running...' : animationComplete === 'leftJoin' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Users Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Left)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 2 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 3 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-green-600 dark:text-green-400 font-semibold">Bob</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Orders Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table (Right)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">user_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">101</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">1</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">102</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">2</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">103</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">LEFT JOIN Result</h4>
                {activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 4 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">John</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">101</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">102</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                        <td className="py-2 text-slate-400 dark:text-slate-500 italic">NULL</td>
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

            {activeAnimation === 'leftJoin' || animationComplete === 'leftJoin' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>LEFT JOIN returned all 3 users. Bob included with NULL order (no match).</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* RIGHT JOIN */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">RIGHT JOIN</CardTitle>
              <CardDescription className="text-base">Return all rows from right table, matching rows from left table</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Syntax</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded font-mono text-sm">
                SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">RIGHT JOIN Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT users.name, orders.order_id FROM users RIGHT JOIN orders ON users.id = orders.user_id;", 'right1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'right1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- All orders with their users (if any)</div>
                <div>SELECT users.name, orders.order_id</div>
                <div>FROM users</div>
                <div>RIGHT JOIN orders ON users.id = orders.user_id;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: RIGHT JOIN */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: RIGHT JOIN</h3>
              <button
                onClick={() => runAnimation('rightJoin')}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'rightJoin' ? 'Running...' : animationComplete === 'rightJoin' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Users Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Left)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Bob</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Orders Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table (Right)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">user_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 2 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">101</td>
                      <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">1</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 3 ? 'animate-matchHighlight' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">102</td>
                      <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">2</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">103</td>
                      <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">RIGHT JOIN Result</h4>
                {activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 4 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">John</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">101</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">102</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-400 dark:text-slate-500 italic">NULL</td>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold">103</td>
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

            {activeAnimation === 'rightJoin' || animationComplete === 'rightJoin' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>RIGHT JOIN returned all 3 orders. Order 103 included with NULL user (no match).</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* CROSS JOIN */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <ArrowUpDown className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CROSS JOIN</CardTitle>
              <CardDescription className="text-base">Return Cartesian product of tables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded font-mono text-sm">
                SELECT columns FROM table1 CROSS JOIN table2
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">CROSS JOIN Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT products.name, colors.color FROM products CROSS JOIN colors;", 'cross1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'cross1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- All product-color combinations</div>
                <div>SELECT products.name, colors.color</div>
                <div>FROM products</div>
                <div>CROSS JOIN colors;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: CROSS JOIN */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: CROSS JOIN</h3>
              <button
                onClick={() => runAnimation('crossJoin')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'crossJoin' ? 'Running...' : animationComplete === 'crossJoin' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Products Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Products</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-700 dark:text-slate-300">T-Shirt</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Hoodie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Colors Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Colors</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-700 dark:text-slate-300">Red</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-700 dark:text-slate-300">Blue</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">CROSS JOIN Result</h4>
                {activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 3 ? (
                  <table className="w-full text-sm animate-fadeIn">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">color</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">T-Shirt</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">Red</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">T-Shirt</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">Blue</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Hoodie</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">Red</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Hoodie</td>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold">Blue</td>
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

            {activeAnimation === 'crossJoin' || animationComplete === 'crossJoin' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>CROSS JOIN returned 4 rows (2 products × 2 colors = 4 combinations)</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SELF JOIN */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <RefreshCw className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">SELF JOIN</CardTitle>
              <CardDescription className="text-base">Join a table with itself</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30">
            <Info className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Syntax</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded font-mono text-sm">
                SELECT a.name, b.name as manager FROM employees a JOIN employees b ON a.manager_id = b.id
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">SELF JOIN Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT e.name, m.name as manager FROM employees e JOIN employees m ON e.manager_id = m.id;", 'self1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'self1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Employees with their managers</div>
                <div>SELECT e.name, m.name as manager</div>
                <div>FROM employees e</div>
                <div>JOIN employees m ON e.manager_id = m.id;</div>
              </div>
            </div>
          </div>

          {/* Static Demo: SELF JOIN */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 border-2 border-rose-300 dark:border-rose-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Static Demo: SELF JOIN</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Employees Table */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">manager_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">John</td>
                      <td className="py-2 text-slate-400 dark:text-slate-500 italic">NULL</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Alice</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">1</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Bob</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SELF JOIN Result */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 md:col-span-2">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">SELF JOIN Result</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">manager</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">John</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold">John</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border border-rose-300 dark:border-rose-700">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
                <Info className="w-4 h-4" />
                <span>SELF JOIN matches employees with their managers. John has no manager (NULL).</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JOIN Comparison */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl shadow-lg">
              <Link2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">JOIN Types Comparison</CardTitle>
              <CardDescription className="text-base">Quick reference for choosing the right JOIN</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">INNER JOIN</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Only matching rows from both tables</p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Use when you need exact matches</code>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">LEFT JOIN</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">All rows from left table, matches from right</p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Use to preserve left table data</code>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">RIGHT JOIN</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">All rows from right table, matches from left</p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Use to preserve right table data</code>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">CROSS JOIN</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Cartesian product (all combinations)</p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Use for generating all combinations</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Layers, Copy, CheckCircle, Info, Play, 
  ArrowRight, AlertTriangle, Zap, Code
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
  
  @keyframes subqueryHighlight {
    0% {
      background-color: transparent;
      border-color: #3b82f6;
    }
    50% {
      background-color: rgba(59, 130, 246, 0.2);
      border-color: #2563eb;
    }
    100% {
      background-color: rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
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
  
  .animate-subqueryHighlight {
    animation: subqueryHighlight 1s ease-out forwards;
  }
`;

export default function Subqueries() {
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

  const runAnimation = (animationName: string, steps: number = 4) => {
    setActiveAnimation(animationName);
    setAnimationStep(0);
    setCompletedSteps([]);
    setAnimationComplete(null);
    
    let interval: NodeJS.Timeout;
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
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      
      <PageHeader
        icon={Layers}
        category="MySQL · Advanced Querying"
        title="Subqueries & Nested Queries"
        description="Master subqueries to write more powerful and flexible SQL queries"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What are Subqueries?</CardTitle>
              <CardDescription className="text-base">Queries within queries for complex data retrieval</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            A subquery is a query nested inside another query, enclosed in parentheses. It can be used in SELECT, INSERT, UPDATE, DELETE statements, or within another subquery. Subqueries allow you to perform complex operations that would otherwise require multiple queries or temporary tables.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Scalar Subquery</Badge>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Row Subquery</Badge>
            <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Column Subquery</Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Table Subquery</Badge>
            <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">Correlated Subquery</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Scalar Subquery */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Code className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Scalar Subquery</CardTitle>
              <CardDescription className="text-base">Returns a single value</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use scalar subqueries when you need a single value for comparison, calculation, or assignment. They must return only one row and one column.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Find users with above-average salary</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);", 'scalar1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'scalar1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Find employees earning more than average</div>
                <div>SELECT name, salary</div>
                <div>FROM employees</div>
                <div>WHERE salary &gt; (SELECT AVG(salary) FROM employees);</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: Scalar Subquery */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Scalar Subquery</h3>
              <button
                onClick={() => runAnimation('scalar', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'scalar' ? 'Running...' : animationComplete === 'scalar' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Employees Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$50,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$75,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$60,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Charlie</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$80,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (salary &gt; avg)</h4>
                {activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border-2 border-blue-200 dark:border-blue-800 transition-all duration-500 ${activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 2 ? 'animate-subqueryHighlight' : ''}`}>
                      <div className="text-slate-600 dark:text-slate-400 text-xs mb-1">Subquery Result:</div>
                      <div className="font-mono text-blue-600 dark:text-blue-400 font-semibold">AVG(salary) = $66,250</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 3 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$75,000</td>
                        </tr>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Charlie</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$80,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'scalar' || animationComplete === 'scalar' ? 'Calculating average...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'scalar' || animationComplete === 'scalar' && animationStep >= 5 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Found 2 employees earning above average salary</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Subquery with IN */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 dark:from-green-950/20 dark:via-gray-900 dark:to-emerald-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Subquery with IN</CardTitle>
              <CardDescription className="text-base">Check against a list of values from another query</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">When to Use</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use subqueries with IN when you want to check if a value matches any value in a result set. This is perfect for finding items that belong to a specific category or group.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Find products in expensive orders</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT product_name FROM products WHERE order_id IN (SELECT order_id FROM orders WHERE total > 1000);", 'in1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'in1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Find products in orders over $1000</div>
                <div>SELECT product_name</div>
                <div>FROM products</div>
                <div>WHERE order_id IN (SELECT order_id FROM orders WHERE total &gt; 1000);</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: IN Subquery */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: IN Subquery</h3>
              <button
                onClick={() => runAnimation('inSubquery', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'inSubquery' ? 'Running...' : animationComplete === 'inSubquery' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Orders Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Orders Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$500</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$1,500</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$2,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Products Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Products Table</h4>
                {activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 3 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">product_name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">order_id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">Laptop</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">1</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Phone</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">2</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Tablet</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">3</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' ? 'Filtering products...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'inSubquery' || animationComplete === 'inSubquery' && animationStep >= 5 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Found 2 products in expensive orders</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Correlated Subquery */}
      <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 dark:from-amber-950/20 dark:via-gray-900 dark:to-orange-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Correlated Subquery</CardTitle>
              <CardDescription className="text-base">Subquery that references values from the outer query</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Performance Consideration</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Correlated subqueries can be slower than non-correlated ones because they execute once for each row processed by the outer query. Use them judiciously and consider JOINs as alternatives when possible.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Find employees earning more than their department average</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT name, salary, department FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);", 'correlated1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'correlated1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Find employees earning more than department avg</div>
                <div>SELECT name, salary, department</div>
                <div>FROM employees e1</div>
                <div>WHERE salary &gt; (SELECT AVG(salary)</div>
                <div>                 FROM employees e2</div>
                <div>                 WHERE e2.department = e1.department);</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: Correlated Subquery */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Correlated Subquery</h3>
              <button
                onClick={() => runAnimation('correlated', 6)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'correlated' ? 'Running...' : animationComplete === 'correlated' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="space-y-4">
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees by Department</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Engineering</div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 2 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">John</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$80,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$70,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Avg: $75,000</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Sales</div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 3 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$60,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-2 text-slate-900 dark:text-white">Charlie</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$50,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Avg: $55,000</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Marketing</div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Diana</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$90,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Avg: $90,000</div>
                  </div>
                </div>
              </div>

              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (Above Dept Average)</h4>
                {activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 5 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 5 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">John</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">$80,000</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">Engineering</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'correlated' || animationComplete === 'correlated' ? 'Comparing salaries...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'correlated' || animationComplete === 'correlated' && animationStep >= 6 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Found 1 employee earning above department average</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Subquery in FROM Clause */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Subquery in FROM Clause</CardTitle>
              <CardDescription className="text-base">Use subquery results as a temporary table</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Derived Tables</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Subqueries in the FROM clause create temporary result sets (derived tables) that you can query just like regular tables. This is useful for complex aggregations and transformations.
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Find top 3 departments by average salary</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT department, avg_salary FROM (SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department) as dept_avg ORDER BY avg_salary DESC LIMIT 3;", 'from1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'from1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Top 3 departments by average salary</div>
                <div>SELECT department, avg_salary</div>
                <div>FROM (</div>
                <div>  SELECT department, AVG(salary) as avg_salary</div>
                <div>  FROM employees</div>
                <div>  GROUP BY department</div>
                <div>) as dept_avg</div>
                <div>ORDER BY avg_salary DESC LIMIT 3;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: FROM Subquery */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: FROM Subquery</h3>
              <button
                onClick={() => runAnimation('fromSubquery', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'fromSubquery' ? 'Running...' : animationComplete === 'fromSubquery' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Employees Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">department</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Engineering</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$80,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Engineering</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$70,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Sales</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$60,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Charlie</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Marketing</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">$90,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Derived Table Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Derived Table (Grouped by Dept)</h4>
                {activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">department</th>
                          <th className="text-left py-2 text-slate-600 dark:text-slate-400">avg_salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 3 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Engineering</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$75,000</td>
                        </tr>
                        <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                          <td className="py-2 text-slate-900 dark:text-white">Marketing</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$90,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-2 text-slate-900 dark:text-white">Sales</td>
                          <td className="py-2 text-slate-700 dark:text-slate-300">$60,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={`p-3 rounded-lg border-2 border-purple-200 dark:border-purple-800 ${activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' && animationStep >= 5 ? 'animate-fadeIn' : ''}`}>
                      <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Final Result (LIMIT 3, ORDER BY DESC):</div>
                      <div className="text-purple-600 dark:text-purple-400 font-semibold">1. Marketing: $90,000</div>
                      <div className="text-purple-600 dark:text-purple-400 font-semibold">2. Engineering: $75,000</div>
                      <div className="text-purple-600 dark:text-purple-400 font-semibold">3. Sales: $60,000</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'fromSubquery' || animationComplete === 'fromSubquery' ? 'Creating derived table...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Best Practices</CardTitle>
              <CardDescription className="text-base">Write efficient and maintainable subqueries</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Performance Tips
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use JOINs instead of correlated subqueries when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Add indexes on columns used in subqueries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Limit subquery result sets with LIMIT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Avoid SELECT * in subqueries - select only needed columns</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  Common Pitfalls
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Forgetting that scalar subqueries must return exactly one row</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Using correlated subqueries on large datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Nesting subqueries too deeply (hard to read and maintain)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Not using table aliases in correlated subqueries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

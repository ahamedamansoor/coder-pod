'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  ArrowRight, ArrowDown, Copy, CheckCircle, Info, Play, 
  ListOrdered, Filter, Group, Code, Zap, AlertTriangle
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
  
  @keyframes highlightStep {
    0% {
      background-color: transparent;
      transform: scale(1);
    }
    50% {
      background-color: rgba(59, 130, 246, 0.2);
      transform: scale(1.02);
      border-color: #3b82f6;
    }
    100% {
      background-color: rgba(59, 130, 246, 0.1);
      transform: scale(1);
      border-color: #3b82f6;
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
  
  @keyframes dataFlow {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-highlightStep {
    animation: highlightStep 0.8s ease-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.5s ease-out forwards;
  }
  
  .animate-glowPulse {
    animation: glowPulse 1s ease-in-out infinite;
  }
  
  .animate-dataFlow {
    animation: dataFlow 0.6s ease-out forwards;
  }
`;

export default function SqlExecutionOrder() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [animationComplete, setAnimationComplete] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const querySteps = [
    { text: 'SELECT department, COUNT(*) as employee_count, AVG(salary) as avg_salary', type: 'select', description: 'Select columns to retrieve from the query' },
    { text: 'FROM employees', type: 'from', description: 'Specify the source table (FROM clause)' },
    { text: 'WHERE salary > 50000', type: 'where', description: 'Filter rows where salary is greater than 50000' },
    { text: 'GROUP BY department', type: 'groupby', description: 'Group results by department column' },
    { text: 'HAVING employee_count > 3', type: 'having', description: 'Filter groups with more than 3 employees' },
    { text: 'ORDER BY avg_salary DESC', type: 'orderby', description: 'Sort results by average salary in descending order' },
    { text: 'LIMIT 5;', type: 'limit', description: 'Limit output to only 5 rows' },
  ];

  const runAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveAnimation('execution');
    setAnimationStep(0);
    setCompletedSteps([]);
    setAnimationComplete(null);
    
    querySteps.forEach((step, index) => {
      setTimeout(() => {
        setAnimationStep(index);
        setCompletedSteps(prev => [...prev, index]);
        
        if (index === querySteps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
            setAnimationComplete('execution');
          }, 1500);
        }
      }, index * 1500);
    });
  };

  const executionSteps = [
    { order: 1, name: 'FROM / JOIN', icon: ListOrdered, color: 'blue', description: 'Identify and join tables' },
    { order: 2, name: 'WHERE', icon: Filter, color: 'green', description: 'Filter rows based on conditions' },
    { order: 3, name: 'GROUP BY', icon: Group, color: 'amber', description: 'Group rows by specified columns' },
    { order: 4, name: 'HAVING', icon: Filter, color: 'purple', description: 'Filter groups based on conditions' },
    { order: 5, name: 'SELECT', icon: Code, color: 'rose', description: 'Select columns to return' },
    { order: 6, name: 'ORDER BY', icon: ArrowRight, color: 'cyan', description: 'Sort the result set' },
    { order: 7, name: 'LIMIT', icon: ListOrdered, color: 'indigo', description: 'Limit the number of rows' },
  ];

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      
      <PageHeader
        icon={ListOrdered}
        category="MySQL · Query Processing"
        title="SQL Query Execution Order"
        description="Understand how MySQL processes queries step by step"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <ListOrdered className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Written vs Logical Order</CardTitle>
              <CardDescription className="text-base">The order you write SQL is different from how it executes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Key Concept</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Understanding the logical execution order is crucial for writing efficient queries and debugging performance issues. You write queries in one order, but MySQL processes them in another.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                Written Order (How You Write)
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">1</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">SELECT</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">2</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">FROM</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">3</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">JOIN</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">4</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">WHERE</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">5</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">GROUP BY</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">6</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">HAVING</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">7</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">ORDER BY</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-semibold">8</span>
                  <code className="font-mono text-blue-600 dark:text-blue-400">LIMIT</code>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Logical Order (How MySQL Executes)
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">1</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">FROM / JOIN</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">2</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">WHERE</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">3</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">GROUP BY</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">4</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">HAVING</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">5</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">SELECT</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">6</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">ORDER BY</code>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">7</span>
                  <code className="font-mono text-amber-600 dark:text-amber-400">LIMIT</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Steps */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 dark:from-green-950/20 dark:via-gray-900 dark:to-emerald-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <ListOrdered className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Step-by-Step Execution</CardTitle>
              <CardDescription className="text-base">Detailed breakdown of each execution phase</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {executionSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700',
                green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700',
                amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700',
                purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700',
                rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 border-rose-300 dark:border-rose-700',
                cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300 dark:border-cyan-700',
                indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700',
              };
              
              return (
                <div key={step.order} className="p-5 rounded-xl border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                          Step {step.order}
                        </span>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{step.name}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">{step.description}</p>
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <code className="font-mono text-sm text-slate-700 dark:text-slate-300">
                          {step.order === 1 && "FROM employees e JOIN departments d ON e.dept_id = d.id"}
                          {step.order === 2 && "WHERE e.salary > 50000 AND e.hire_date > '2020-01-01'"}
                          {step.order === 3 && "GROUP BY d.department_name"}
                          {step.order === 4 && "HAVING COUNT(*) > 5"}
                          {step.order === 5 && "SELECT d.department_name, COUNT(*) as employee_count, AVG(e.salary) as avg_salary"}
                          {step.order === 6 && "ORDER BY avg_salary DESC"}
                          {step.order === 7 && "LIMIT 10"}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Play className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Interactive Demo</CardTitle>
              <CardDescription className="text-base">Watch a query execute step by step</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example Query</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT department, COUNT(*) as employee_count, AVG(salary) as avg_salary FROM employees WHERE salary > 50000 GROUP BY department HAVING employee_count > 3 ORDER BY avg_salary DESC LIMIT 5;", 'query1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'query1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>SELECT department, COUNT(*) as employee_count, AVG(salary) as avg_salary</div>
                <div>FROM employees</div>
                <div>WHERE salary &gt; 50000</div>
                <div>GROUP BY department</div>
                <div>HAVING employee_count &gt; 3</div>
                <div>ORDER BY avg_salary DESC</div>
                <div>LIMIT 5;</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Query Execution Flow</h3>
              <button
                onClick={runAnimation}
                disabled={isAnimating}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className={`w-4 h-4 ${isAnimating ? 'animate-spin' : ''}`} />
                {isAnimating ? 'Executing...' : animationComplete === 'execution' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* SQL Code Display */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Code className={`w-4 h-4 ${isAnimating ? 'text-yellow-400 animate-pulse' : 'text-green-400'}`} />
                  <span className="text-sm font-semibold text-green-400">SQL Code:</span>
                  {isAnimating && (
                    <span className="text-xs text-yellow-400 animate-pulse ml-2">
                      Step {animationStep + 1} of {querySteps.length}
                    </span>
                  )}
                </div>
                <div className="font-mono text-sm space-y-1">
                  {querySteps.map((step, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 rounded px-2 py-1 ${
                        completedSteps.includes(index) 
                          ? 'opacity-100 transform translate-x-0' 
                          : 'opacity-30 transform translate-x-2'
                      } ${
                        index === animationStep && isAnimating
                          ? 'bg-yellow-900/30 border-l-4 border-yellow-400 -ml-2 animate-pulse'
                          : ''
                      }`}
                    >
                      <span className={
                        completedSteps.includes(index) 
                          ? step.type === 'select' ? 'text-rose-400' :
                            step.type === 'from' ? 'text-purple-400' :
                            step.type === 'where' ? 'text-green-400' :
                            step.type === 'groupby' ? 'text-amber-400' :
                            step.type === 'having' ? 'text-purple-400' :
                            step.type === 'orderby' ? 'text-cyan-400' :
                            step.type === 'limit' ? 'text-indigo-400' :
                            'text-slate-300'
                          : 'text-gray-500'
                      }>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
                {isAnimating && (
                  <div className="mt-3 p-2 bg-blue-900/30 rounded border border-blue-700">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                      <span className="text-xs text-blue-300">
                        {querySteps[animationStep]?.description}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Employees Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 transition-all duration-500 ${
                completedSteps.length >= 1 ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30' : 'border-gray-200 dark:border-gray-700'
              }`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Employees Table</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className={`text-left py-2 px-3 transition-all duration-500 ${completedSteps.length >= 5 ? 'text-rose-600 dark:text-rose-400 font-semibold' : completedSteps.length >= 1 ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>id</th>
                      <th className={`text-left py-2 px-3 transition-all duration-500 ${completedSteps.length >= 5 ? 'text-rose-600 dark:text-rose-400 font-semibold' : completedSteps.length >= 1 ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>name</th>
                      <th className={`text-left py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'text-green-600 dark:text-green-400 font-semibold' : completedSteps.length >= 5 ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>salary</th>
                      <th className={`text-left py-2 px-3 transition-all duration-500 ${completedSteps.length >= 3 ? 'text-amber-600 dark:text-amber-400 font-semibold' : completedSteps.length >= 5 ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${completedSteps.length >= 2 ? 'opacity-30' : ''} ${completedSteps.length >= 7 ? 'hidden' : ''}`}>
                      <td className="py-2 px-3 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">John</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>45000</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Engineering</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-100 dark:bg-green-900/30' : ''} ${completedSteps.length >= 6 ? 'order-1' : ''}`}>
                      <td className="py-2 px-3 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Alice</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-200 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>60000</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 3 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400'}`}>Engineering</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-100 dark:bg-green-900/30' : ''} ${completedSteps.length >= 6 ? 'order-0' : ''}`}>
                      <td className="py-2 px-3 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Bob</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-200 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>75000</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 3 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400'}`}>Sales</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${completedSteps.length >= 2 ? 'opacity-30' : ''} ${completedSteps.length >= 7 ? 'hidden' : ''}`}>
                      <td className="py-2 px-3 text-slate-900 dark:text-white">4</td>
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Charlie</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>48000</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">Marketing</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-100 dark:bg-green-900/30' : ''} ${completedSteps.length >= 6 ? 'order-2' : ''}`}>
                      <td className="py-2 px-3 text-slate-900 dark:text-white">5</td>
                      <td className="py-2 px-3 text-slate-700 dark:text-slate-300">Diana</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 2 ? 'bg-green-200 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>80000</td>
                      <td className={`py-2 px-3 transition-all duration-500 ${completedSteps.length >= 3 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400'}`}>Engineering</td>
                    </tr>
                  </tbody>
                </table>
                {completedSteps.length >= 6 && (
                  <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-semibold">↑ Sorted by salary DESC</div>
                )}
                {completedSteps.length >= 7 && (
                  <div className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Showing top 3 results (LIMIT applied)</div>
                )}
              </div>

              {/* Execution Steps */}
              <div className="space-y-3">
                {executionSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = isAnimating && animationStep === index;
                  const isComplete = completedSteps.includes(index);
                  const isPending = isAnimating && animationStep < index;
                  
                  return (
                    <div 
                      key={step.order}
                      className={`p-3 rounded-lg border-2 transition-all duration-500 ${
                        isActive ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30 animate-highlightStep' :
                        isComplete ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                        isPending ? 'border-gray-200 dark:border-gray-700 opacity-50' :
                        'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isActive ? 'bg-purple-500 text-white animate-glowPulse' :
                          isComplete ? 'bg-green-500 text-white' :
                          'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {isComplete ? <CheckCircle className="w-4 h-4" /> : <span className="font-bold text-sm">{step.order}</span>}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600 dark:text-purple-400' : isComplete ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`} />
                            <h4 className={`font-semibold text-sm ${isActive ? 'text-purple-900 dark:text-purple-100' : isComplete ? 'text-green-900 dark:text-green-100' : 'text-slate-900 dark:text-white'}`}>
                              {step.name}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {animationComplete === 'execution' && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query execution completed! Found 3 employees with salary &gt; 50000</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 dark:from-amber-950/20 dark:via-gray-900 dark:to-orange-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Common Pitfalls</CardTitle>
              <CardDescription className="text-base">Mistakes to avoid when writing SQL queries</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  Alias Usage in WHERE
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  You cannot use column aliases defined in SELECT in the WHERE clause because WHERE executes before SELECT.
                </p>
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                  <code className="font-mono text-xs text-red-600 dark:text-red-400">
                    -- ❌ WRONG<br/>
                    SELECT name as n FROM users WHERE n = 'John'
                  </code>
                </div>
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 mt-2">
                  <code className="font-mono text-xs text-green-600 dark:text-green-400">
                    -- ✅ CORRECT<br/>
                    SELECT name as n FROM users WHERE name = 'John'
                  </code>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  WHERE vs HAVING
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  WHERE filters rows before grouping, HAVING filters groups after grouping. Use WHERE when possible for better performance.
                </p>
                <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                  <code className="font-mono text-xs text-amber-600 dark:text-amber-400">
                    -- ⚠️ LESS EFFICIENT<br/>
                    SELECT dept, COUNT(*) FROM employees GROUP BY dept HAVING salary &gt; 50000
                  </code>
                </div>
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 mt-2">
                  <code className="font-mono text-xs text-green-600 dark:text-green-400">
                    -- ✅ MORE EFFICIENT<br/>
                    SELECT dept, COUNT(*) FROM employees WHERE salary &gt; 50000 GROUP BY dept
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Tips */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Performance Tips</CardTitle>
              <CardDescription className="text-base">Optimize your queries by understanding execution order</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Filter Early
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use WHERE to filter rows as early as possible. This reduces the amount of data processed in subsequent steps, improving performance.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Select Only Needed Columns
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Avoid SELECT *. Specify only the columns you need to reduce data transfer and memory usage.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Use LIMIT for Testing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add LIMIT when testing queries to avoid returning millions of rows and slowing down your development environment.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Index Considerations
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Columns used in WHERE, JOIN, and ORDER BY clauses should be indexed for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

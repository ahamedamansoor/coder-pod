'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Code, Play, Edit3, Trash2, Search, CheckCircle, AlertCircle, 
  Info, Zap, Shield, Copy, ArrowRight, ChevronRight, Database, FileText, Lock, UserPlus, RefreshCw 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
// Add custom styles for animations matching database-basics pattern
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
  @keyframes slideInFromRight {
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
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  .animate-highlightRow {
    animation: highlightRow 0.8s ease-out forwards;
  }
  .animate-slideInLeft {
    animation: slideInFromLeft 0.6s ease-out forwards;
  }
  .animate-slideInRight {
    animation: slideInFromRight 0.6s ease-out forwards;
  }
  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
`;
export default function BasicSqlSyntax() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [animationComplete, setAnimationComplete] = useState<string | null>(null);
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  const runAnimation = (type: string, totalSteps: number = 4) => {
    setActiveAnimation(type);
    setAnimationStep(0);
    setCompletedSteps([]);
    setAnimationComplete(null);
    const interval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= totalSteps - 1) {
          clearInterval(interval);
          setAnimationComplete(type);
          return prev;
        }
        const newStep = prev + 1;
        setCompletedSteps(prevSteps => [...prevSteps, newStep]);
        return newStep;
      });
    }, 1200);
  };
  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      {/* Header */}
      <PageHeader
        icon={Code}
        category="MySQL · Fundamentals"
        title="Basic SQL Syntax"
        description="Master the fundamental SQL commands to interact with MySQL databases"
        colorTheme="blue"
      />
      {/* What is SQL */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Database className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is SQL?</CardTitle>
              <CardDescription className="text-base">The language of databases</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Structured Query Language</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              SQL (Structured Query Language) is the standard language for managing relational databases. It's used to create, retrieve, update, and delete data in MySQL databases.
            </AlertDescription>
          </Alert>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">SELECT</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Retrieve data from database</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Edit3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">INSERT</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Add new data to tables</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">UPDATE</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Modify existing data</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">DELETE</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Remove data from tables</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* SELECT Statement */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">SELECT Statement</CardTitle>
              <CardDescription className="text-base">Retrieve data from your database</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Most Used SQL Command</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              SELECT is the most commonly used SQL command. It retrieves data from one or more tables and returns it as a result set.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Basic Syntax</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT column1, column2 FROM table_name')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT column1, column2 FROM table_name' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Select specific columns</div>
                  <div>SELECT column1, column2 FROM table_name;</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Select All Columns</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT * FROM table_name')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT * FROM table_name' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Select all columns</div>
                  <div>SELECT * FROM table_name;</div>
                </div>
              </div>
              <Alert className="mt-3 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-800 dark:text-amber-200 text-xs">
                  <strong>⚠️ Performance Tip:</strong> Avoid using <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">SELECT *</code> in production. Specify only the columns you need.
                </AlertDescription>
              </Alert>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Practical Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT id, username, email FROM users WHERE username LIKE \'john%\';')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT id, username, email FROM users WHERE username LIKE \'john%\';' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get users with username starting with john</div>
                  <div>SELECT id, username, email FROM users WHERE username LIKE 'john%';</div>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('select', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'select' ? 'Running...' : animationComplete === 'select' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Database Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
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
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">3</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      </tr>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Query Result (id &gt; 1)</h4>
                {activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">john@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'select' || animationComplete === 'select' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'select' || animationComplete === 'select' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 2 rows returned.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* INSERT Statement */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">INSERT Statement</CardTitle>
              <CardDescription className="text-base">Add new records to your tables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <UserPlus className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Adding Data</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              INSERT adds new rows to a table. You can insert values for specific columns or all columns.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Insert Specific Columns</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('INSERT INTO users (username, email) VALUES (\'john\', \'john@example.com\')')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'INSERT INTO users (username, email) VALUES (\'john\', \'john@example.com\')' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Insert into specific columns</div>
                  <div>INSERT INTO users (username, email)</div>
                  <div>VALUES ('john', 'john@example.com');</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Insert Multiple Rows</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('INSERT INTO users (username, email) VALUES (\'alice\', \'alice@example.com\'), (\'bob\', \'bob@example.com\'), (\'charlie\', \'charlie@example.com\')')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'INSERT INTO users (username, email) VALUES (\'alice\', \'alice@example.com\'), (\'bob\', \'bob@example.com\'), (\'charlie\', \'charlie@example.com\')' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Insert multiple rows at once</div>
                  <div>INSERT INTO users (username, email)</div>
                  <div>VALUES ('alice', 'alice@example.com'),</div>
                  <div>       ('bob', 'bob@example.com'),</div>
                  <div>       ('charlie', 'charlie@example.com');</div>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('insert', 7)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'insert' ? 'Running...' : animationComplete === 'insert' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Before INSERT</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* After */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">After INSERT</h4>
                {activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 3 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 4 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 5 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">4</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">charlie</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'insert' || animationComplete === 'insert' ? 'Inserting rows...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'insert' || animationComplete === 'insert' && animationStep >= 6 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>3 rows inserted successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* UPDATE Statement */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <RefreshCw className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">UPDATE Statement</CardTitle>
              <CardDescription className="text-base">Modify existing data in your tables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Use with Caution</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Always use a WHERE clause with UPDATE to avoid modifying all rows in the table accidentally.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Basic Update</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("UPDATE users SET email = 'john.new@example.com' WHERE username = 'john'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "UPDATE users SET email = 'john.new@example.com' WHERE username = 'john'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Update specific row</div>
                  <div>UPDATE users SET email = 'john.new@example.com' WHERE username = 'john';</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Update Multiple Columns</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("UPDATE users SET email = 'john.updated@example.com', username = 'john_doe' WHERE id = 1")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "UPDATE users SET email = 'john.updated@example.com', username = 'john_doe' WHERE id = 1" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Update multiple columns</div>
                  <div>UPDATE users</div>
                  <div>SET email = 'john.updated@example.com', username = 'john_doe'</div>
                  <div>WHERE id = 1;</div>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('update', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'update' ? 'Running...' : animationComplete === 'update' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Before UPDATE</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* After */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">After UPDATE</h4>
                {activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 3 ? 'animate-highlightRow' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">john.new@example.com</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">2</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">3</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'update' || animationComplete === 'update' ? 'Updating row...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'update' || animationComplete === 'update' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>1 row updated successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* DELETE Statement */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg">
              <Trash2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DELETE Statement</CardTitle>
              <CardDescription className="text-base">Remove data from your tables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Permanent Action</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              DELETE permanently removes data. Always use a WHERE clause and consider backing up data before deletion.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Delete Specific Row</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('DELETE FROM users WHERE id = 1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'DELETE FROM users WHERE id = 1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Delete specific row</div>
                  <div>DELETE FROM users WHERE id = 1;</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Delete Based on Condition</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("DELETE FROM users WHERE id < 2")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "DELETE FROM users WHERE id < 2" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Delete users with id less than 2</div>
                  <div>DELETE FROM users WHERE id &lt; 2;</div>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-950/30 dark:to-pink-950/30 border-2 border-red-300 dark:border-red-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('delete', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'delete' ? 'Running...' : animationComplete === 'delete' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Before DELETE</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* After */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">After DELETE (id = 2)</h4>
                {activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 3 ? 'opacity-0' : ''}`}>
                        <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'delete' || animationComplete === 'delete' ? 'Deleting row...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'delete' || animationComplete === 'delete' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border border-red-300 dark:border-red-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>1 row deleted successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* ALTER TABLE Statement */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Edit3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">ALTER TABLE Statement</CardTitle>
              <CardDescription className="text-base">Modify table structure</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Edit3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Modifying Table Structure</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              ALTER TABLE is used to add, modify, or drop columns in an existing table. It's essential for evolving your database schema.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Add Column</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('ALTER TABLE users ADD COLUMN phone VARCHAR(20)')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'ALTER TABLE users ADD COLUMN phone VARCHAR(20)' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Add a new column</div>
                  <div>ALTER TABLE users ADD COLUMN phone VARCHAR(20);</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Modify Column</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("ALTER TABLE users MODIFY COLUMN username VARCHAR(100) NOT NULL")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "ALTER TABLE users MODIFY COLUMN username VARCHAR(100) NOT NULL" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Change column definition</div>
                  <div>ALTER TABLE users MODIFY COLUMN username VARCHAR(100) NOT NULL;</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Drop Column</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('ALTER TABLE users DROP COLUMN phone')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'ALTER TABLE users DROP COLUMN phone' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Remove a column</div>
                  <div>ALTER TABLE users DROP COLUMN phone;</div>
                </div>
              </div>
              <Alert className="mt-3 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200 text-xs">
                  <strong>⚠️ Warning:</strong> Dropping a column permanently deletes all data in that column.
                </AlertDescription>
              </Alert>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Rename Column</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("ALTER TABLE users RENAME COLUMN email TO user_email")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "ALTER TABLE users RENAME COLUMN email TO user_email" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Rename a column</div>
                  <div>ALTER TABLE users RENAME COLUMN email TO user_email;</div>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('alter', 7)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'alter' ? 'Running...' : animationComplete === 'alter' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Before ALTER TABLE</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                  </tbody>
                </table>
                {activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 2 && (
                  <div className="mt-3 p-2 bg-slate-900 dark:bg-slate-950 rounded-lg">
                    <div className="text-slate-400 text-xs mb-1">-- Adding phone column</div>
                    <div className="text-green-400 text-xs font-mono">ALTER TABLE users ADD COLUMN phone VARCHAR(20);</div>
                  </div>
                )}
              </div>
              {/* After */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">After ALTER TABLE</h4>
                {activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                        <th className={`text-left py-2 transition-all duration-500 ${activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 3 ? 'text-purple-600 dark:text-purple-400 font-semibold animate-highlightRow' : 'text-slate-600 dark:text-slate-400'}`}>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">1</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                        <td className={`py-2 transition-all duration-500 ${activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 3 ? 'text-purple-600 dark:text-purple-400 animate-highlightRow' : 'text-slate-600 dark:text-slate-400'}`}>NULL</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 text-slate-900 dark:text-white">2</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                        <td className={`py-2 transition-all duration-500 ${activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 3 ? 'text-purple-600 dark:text-purple-400 animate-highlightRow' : 'text-slate-600 dark:text-slate-400'}`}>NULL</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'alter' || animationComplete === 'alter' ? 'Altering table...' : 'Click Run Query to see result'}
                  </div>
                )}
                {activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 4 && (
                  <div className="mt-3 p-2 bg-slate-900 dark:bg-slate-950 rounded-lg">
                    <div className="text-slate-400 text-xs mb-1">-- Modifying phone column</div>
                    <div className="text-amber-400 text-xs font-mono">ALTER TABLE users MODIFY COLUMN phone VARCHAR(20) NOT NULL DEFAULT 'N/A';</div>
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'alter' || animationComplete === 'alter' && animationStep >= 5 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Table structure modified successfully! Column added and modified.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* WHERE Clause */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">WHERE Clause</CardTitle>
              <CardDescription className="text-base">Filter data based on conditions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Filtering Data</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              The WHERE clause filters records based on specific conditions. It's used with SELECT, UPDATE, and DELETE statements.
            </AlertDescription>
          </Alert>
          {/* Interactive Animation */}
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
              {/* All Data */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">All Users</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">1</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">john</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">2</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">alice@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">3</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">bob@example.com</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">4</td>
                        <td className="py-2 text-slate-900 dark:text-white">4</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">charlie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Filtered Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">WHERE id &gt; 1</h4>
                {activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">id</th>
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">2</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">alice</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">3</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">bob</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">4</td>
                        <td className="py-2 text-slate-700 dark:text-slate-300">charlie</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'where' || animationComplete === 'where' ? 'Filtering data...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'where' || animationComplete === 'where' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Filtered 3 rows matching condition id &gt; 1</span>
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Comparison Operators</h3>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">=</code> Equal to
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">&lt;&gt;</code> or <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">!=</code> Not equal to
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">&gt;</code> Greater than
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">&lt;</code> Less than
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">&gt;=</code> Greater or equal
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">&lt;=</code> Less or equal
                </li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Logical Operators</h3>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">AND</code> All conditions must be true
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">OR</code> Any condition must be true
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">NOT</code> Negates the condition
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">IN</code> Match any value in a list
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">BETWEEN</code> Value within range
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">LIKE</code> Pattern matching
                </li>
              </ul>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">WHERE Examples</h3>
            <div className="space-y-3">
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT * FROM users WHERE id &gt; 1 AND username LIKE 'a%'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "SELECT * FROM users WHERE id &gt; 1 AND username LIKE 'a%'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users WHERE id &gt; 1 AND username LIKE 'a%';</div>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT * FROM products WHERE price BETWEEN 10 AND 100')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT * FROM products WHERE price BETWEEN 10 AND 100' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM products WHERE price BETWEEN 10 AND 100;</div>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT * FROM users WHERE username LIKE 'j%'")}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === "SELECT * FROM users WHERE username LIKE 'j%'" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users WHERE username LIKE 'j%';</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* ORDER BY and LIMIT */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">ORDER BY & LIMIT</CardTitle>
              <CardDescription className="text-base">Sort and limit query results</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo</h3>
              <button
                onClick={() => runAnimation('orderby', 5)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'orderby' ? 'Running...' : animationComplete === 'orderby' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Unsorted Data */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Unsorted Users</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Charlie</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">David</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Sorted & Limited Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">ORDER BY username ASC LIMIT 3</h4>
                {activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 1 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Alice</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-slate-900 dark:text-white">David</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'orderby' || animationComplete === 'orderby' ? 'Sorting and limiting...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>
            {activeAnimation === 'orderby' || animationComplete === 'orderby' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sorted by username and limited to 3 rows</span>
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ORDER BY
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Sort results in ascending or descending order</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT * FROM users ORDER BY name ASC')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT * FROM users ORDER BY name ASC' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users ORDER BY name ASC;</div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                LIMIT
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Restrict the number of rows returned</p>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('SELECT * FROM users LIMIT 10')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'SELECT * FROM users LIMIT 10' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-3 rounded-lg font-mono text-xs">
                  <div>SELECT * FROM users LIMIT 10;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Combined Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard('SELECT * FROM users WHERE age > 18 ORDER BY name ASC LIMIT 5')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'SELECT * FROM users WHERE age > 18 ORDER BY name ASC LIMIT 5' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Get 5 adult users, sorted by name</div>
                <div>SELECT * FROM users</div>
                <div>WHERE age &gt; 18</div>
                <div>ORDER BY name ASC</div>
                <div>LIMIT 5;</div>
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
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Best Practices</CardTitle>
              <CardDescription className="text-base">Write clean, efficient, and secure SQL queries</CardDescription>
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
                    <span>Avoid SELECT * in production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use indexes on WHERE clause columns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Limit result sets with LIMIT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use appropriate data types</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Security Tips
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Always use parameterized queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Validate user input before queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use least privilege principle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Never concatenate user input in SQL</span>
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

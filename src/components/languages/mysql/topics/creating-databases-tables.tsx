'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, Plus, Edit3, Trash2, FolderOpen, Copy, 
  CheckCircle, AlertCircle, Info, Zap, Shield, Play, 
  Code, ArrowRight, ChevronRight, Lock, Settings, HardDrive,
  FileText, Key, Clock, SortAsc
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
  
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4);
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    0%, 50% {
      border-color: transparent;
    }
    51%, 100% {
      border-color: #3b82f6;
    }
  }

  @keyframes successPulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
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
    animation: slideInRight 0.6s ease-out forwards;
  }

  .animate-scaleIn {
    animation: scaleIn 0.4s ease-out forwards;
  }

  .animate-successPulse {
    animation: successPulse 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }

  .shimmer-effect {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
`;

export default function CreatingDatabasesTables() {
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
    
    if (animationName === 'createDatabase') {
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
    } else if (animationName === 'createTable') {
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
    } else if (animationName === 'storageEngine') {
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
    }
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      
      <PageHeader
        icon={Database}
        category="MySQL · Fundamentals"
        title="Creating Databases & Tables"
        description="Learn how to create and manage MySQL databases and tables with best practices"
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
              <CardTitle className="text-2xl">Database & Table Fundamentals</CardTitle>
              <CardDescription className="text-base">Foundation of MySQL</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Getting Started</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Creating databases and tables is the foundation of working with MySQL. This guide covers everything from basic syntax to advanced table options and best practices.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

        {/* CREATE DATABASE Section */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <FolderOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CREATE DATABASE</CardTitle>
              <CardDescription className="text-base">Create a new database to organize your tables and data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Basic Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded font-mono text-sm">
                CREATE DATABASE database_name;
              </code>
            </AlertDescription>
          </Alert>

            {/* Database Creation Examples */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Simple Database Creation</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('CREATE DATABASE my_company;', 'db1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'db1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Create a simple database</div>
                  <div>CREATE DATABASE my_company;</div>
                </div>
              </div>
            </div>

              {/* Database with IF NOT EXISTS */}
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Safe Database Creation</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('CREATE DATABASE IF NOT EXISTS my_company;', 'db2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'db2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Create database safely (no error if exists)</div>
                  <div>CREATE DATABASE IF NOT EXISTS my_company;</div>
                </div>
              </div>
              <Alert className="mt-3 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-800 dark:text-amber-200 text-xs">
                  <strong>⚠️ Best Practice:</strong> Always use <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">IF NOT EXISTS</code> to prevent errors in production.
                </AlertDescription>
              </Alert>
            </div>

            {/* Database with Character Set and Collation */}
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Database with Character Set</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("CREATE DATABASE my_company\nCHARACTER SET utf8mb4\nCOLLATE utf8mb4_unicode_ci;", 'db3')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'db3' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Create database with UTF-8 support</div>
                  <div>CREATE DATABASE my_company</div>
                  <div>CHARACTER SET utf8mb4</div>
                  <div>COLLATE utf8mb4_unicode_ci;</div>
                </div>
              </div>
            </div>
          </div>

            {/* Interactive Animation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Creating a Database</h3>
              <button
                onClick={() => runAnimation('createDatabase')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'createDatabase' ? 'Running...' : animationComplete === 'createDatabase' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Available Databases */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'createDatabase' || animationComplete === 'createDatabase' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Available Databases</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">information_schema</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">mysql</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">performance_schema</span>
                  </div>
                  {animationStep >= 3 && (
                    <div className={`p-2 rounded border transition-all duration-500 animate-fadeIn ${animationStep >= 3 ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700' : ''}`}>
                      <span className="text-sm text-green-700 dark:text-green-300 font-medium">my_company</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Command Execution */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'createDatabase' || animationComplete === 'createDatabase' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Command Execution</h4>
                {activeAnimation === 'createDatabase' || animationComplete === 'createDatabase' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 2 ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-900 dark:text-white">CREATE DATABASE my_company;</code>
                    </div>
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 3 ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-900 dark:text-white">Database created successfully</code>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'createDatabase' || animationComplete === 'createDatabase' ? 'Creating database...' : 'Click Run Query to create database'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'createDatabase' || animationComplete === 'createDatabase' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Database "my_company" created successfully!</span>
                </div>
              </div>
            )}
          </div>

            {/* Using Database */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Select a Database to Use
              </h3>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">Required</Badge>
                <button
                  onClick={() => copyToClipboard('USE my_company;', 'db4')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copiedCode === 'db4' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-x-auto">
                <code>USE my_company;</code>
              </pre>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Must select a database before creating tables
              </p>
            </div>

            <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Best Practice</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Always use <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">IF NOT EXISTS</code> when creating databases to prevent errors in production environments.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* CREATE TABLE Section */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CREATE TABLE</CardTitle>
              <CardDescription className="text-base">Create tables to store and organize your data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Basic Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <pre className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs mt-2 overflow-x-auto">
                <code>CREATE TABLE table_name (
  column1 datatype constraint,
  column2 datatype constraint
);</code>
              </pre>
            </AlertDescription>
          </Alert>

            {/* Simple Table Example */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Users Table</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);`, 'table1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'table1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-slate-400 mb-2">-- Complete users table with constraints</div>
                  <div>CREATE TABLE users (</div>
                  <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                  <div className="pl-4">username VARCHAR(50) NOT NULL UNIQUE,</div>
                  <div className="pl-4">email VARCHAR(100) NOT NULL UNIQUE,</div>
                  <div className="pl-4">password_hash VARCHAR(255) NOT NULL,</div>
                  <div className="pl-4">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,</div>
                  <div className="pl-4">updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,</div>
                  <div className="pl-4">is_active BOOLEAN DEFAULT TRUE</div>
                  <div>);</div>
                </div>
              </div>
            </div>

            {/* Table with Foreign Key */}
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Orders Table with Foreign Key</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(`CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`, 'table2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'table2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-slate-400 mb-2">-- Orders table with foreign key relationship</div>
                  <div>CREATE TABLE orders (</div>
                  <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                  <div className="pl-4">user_id INT NOT NULL,</div>
                  <div className="pl-4">order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,</div>
                  <div className="pl-4">total_amount DECIMAL(10, 2) NOT NULL,</div>
                  <div className="pl-4">status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',</div>
                  <div className="pl-4">FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE</div>
                  <div>);</div>
                </div>
              </div>
            </div>
          </div>

            {/* Interactive Animation for Table Creation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Creating a Table</h3>
              <button
                onClick={() => runAnimation('createTable')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'createTable' ? 'Running...' : animationComplete === 'createTable' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Database Tables */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'createTable' || animationComplete === 'createTable' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Database: my_company</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">users</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                    <span className="text-sm text-slate-700 dark:text-slate-300">orders</span>
                  </div>
                  {animationStep >= 4 && (
                    <div className={`p-2 rounded border transition-all duration-500 animate-fadeIn ${animationStep >= 4 ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700' : ''}`}>
                      <span className="text-sm text-green-700 dark:text-green-300 font-medium">products</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Command Execution */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'createTable' || animationComplete === 'createTable' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Command Execution</h4>
                {activeAnimation === 'createTable' || animationComplete === 'createTable' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 2 ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-900 dark:text-white">USE my_company;</code>
                    </div>
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 3 ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-900 dark:text-white">CREATE TABLE products (...);</code>
                    </div>
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 4 ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-900 dark:text-white">Table created successfully</code>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'createTable' || animationComplete === 'createTable' ? 'Creating table...' : 'Click Run Query to create table'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'createTable' || animationComplete === 'createTable' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Table created successfully with all columns and constraints!</span>
                </div>
              </div>
            )}
          </div>
          </CardContent>
        </Card>

        {/* Table Options & Storage Engines */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Table Options & Storage Engines</CardTitle>
              <CardDescription className="text-base">Configure table behavior and choose the right storage engine</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Storage Engines Overview */}
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">What are Storage Engines?</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Storage engines are the underlying software components that MySQL uses to create, read, update, and delete data from your tables. Each engine has different features and use cases.
            </AlertDescription>
          </Alert>

          {/* Storage Engine Comparison */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Storage Engine Comparison</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* InnoDB */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">InnoDB</h4>
                    <Badge className="bg-blue-600 text-xs">Default & Recommended</Badge>
                  </div>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-3">
                  <li>• <strong>ACID compliant</strong> - Supports transactions</li>
                  <li>• <strong>Row-level locking</strong> - Better concurrency</li>
                  <li>• <strong>Foreign keys</strong> - Referential integrity</li>
                  <li>• <strong>Crash recovery</strong> - Data safety</li>
                  <li>• <strong>Best for:</strong> Most applications, e-commerce, banking</li>
                </ul>
              </div>

              {/* MyISAM */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-700 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900/30 rounded-lg">
                    <Database className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">MyISAM</h4>
                    <Badge variant="outline" className="text-xs">Legacy</Badge>
                  </div>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-3">
                  <li>• <strong>Table-level locking</strong> - Slower for concurrent writes</li>
                  <li>• <strong>Faster reads</strong> - For read-heavy workloads</li>
                  <li>• <strong>No transactions</strong> - Can't rollback</li>
                  <li>• <strong>No foreign keys</strong> - Manual integrity</li>
                  <li>• <strong>Best for:</strong> Read-only data, analytics, legacy apps</li>
                </ul>
              </div>

              {/* MEMORY */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">MEMORY</h4>
                    <Badge variant="outline" className="text-xs">Special Purpose</Badge>
                  </div>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-3">
                  <li>• <strong>In-memory storage</strong> - Extremely fast</li>
                  <li>• <strong>Volatile</strong> - Data lost on restart</li>
                  <li>• <strong>Fixed-length rows</strong> - No BLOB/TEXT</li>
                  <li>• <strong>Best for:</strong> Temporary data, caching, session data</li>
                </ul>
              </div>

              {/* CSV */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">CSV</h4>
                    <Badge variant="outline" className="text-xs">Data Exchange</Badge>
                  </div>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-3">
                  <li>• <strong>CSV file storage</strong> - Plain text format</li>
                  <li>• <strong>Editable externally</strong> - Can edit in spreadsheet</li>
                  <li>• <strong>No indexing</strong> - Slow for queries</li>
                  <li>• <strong>Best for:</strong> Data import/export, data exchange</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Demo: Storage Engine Differences */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: Transaction Behavior</h3>
              <button
                onClick={() => runAnimation('storageEngine')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'storageEngine' ? 'Running...' : animationComplete === 'storageEngine' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* InnoDB with Transaction */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  InnoDB (Supports Transactions)
                </h4>
                {activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 2 ? 'bg-slate-900 dark:bg-slate-950 border-slate-700 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-100 dark:text-slate-100">START TRANSACTION;</code>
                    </div>
                    {animationStep >= 3 && (
                      <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 3 ? 'bg-slate-900 dark:bg-slate-950 border-slate-700 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                        <code className="text-sm text-slate-100 dark:text-slate-100">UPDATE accounts SET balance = balance - 100 WHERE id = 1;</code>
                        <div className="mt-2 text-xs text-green-400 dark:text-green-400">Row locked - Other queries wait</div>
                      </div>
                    )}
                    {animationStep >= 4 && (
                      <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 4 ? 'bg-slate-900 dark:bg-slate-950 border-slate-700 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                        <code className="text-sm text-slate-100 dark:text-slate-100">COMMIT;</code>
                        <div className="mt-2 text-xs text-green-400 dark:text-green-400">Transaction saved - Changes permanent</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' ? 'Processing...' : 'Click Run Query to see transaction behavior'}
                  </div>
                )}
              </div>

              {/* MyISAM without Transaction */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  MyISAM (No Transactions)
                </h4>
                {activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' && animationStep >= 2 ? (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border transition-all duration-500 ${animationStep >= 2 ? 'bg-slate-900 dark:bg-slate-950 border-slate-700 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'}`}>
                      <code className="text-sm text-slate-100 dark:text-slate-100">UPDATE accounts SET balance = balance - 100 WHERE id = 1;</code>
                      <div className="mt-2 text-xs text-amber-400 dark:text-amber-400">Immediate write - No rollback possible</div>
                    </div>
                    {animationStep >= 3 && (
                      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
                        <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <AlertDescription className="text-amber-800 dark:text-amber-200 text-xs">
                          <strong>⚠️ Risk:</strong> If an error occurs, changes cannot be undone
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' ? 'Processing...' : 'Click Run Query to see behavior'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'storageEngine' || animationComplete === 'storageEngine' && animationStep >= 4 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>InnoDB transactions provide data safety - MyISAM is faster but less safe for critical data</span>
                </div>
              </div>
            )}
          </div>

          {/* Storage Engine Syntax */}
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Specify Storage Engine</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("CREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100)\n) ENGINE=InnoDB;", 'engine1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'engine1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Create table with InnoDB engine (recommended)</div>
                <div>CREATE TABLE products (</div>
                <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4">name VARCHAR(100)</div>
                <div>) ENGINE=InnoDB;</div>
              </div>
            </div>
          </div>

          {/* Table Options */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Common Table Options</h3>
            
            <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
              <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Why Table Options Matter</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                Table options control how your data is stored, compared, and described. Choosing the right options ensures proper character encoding, sorting behavior, and documentation.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              {/* CHARSET */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">CHARACTER SET</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Defines which characters can be stored. <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">utf8mb4</code> supports all Unicode including emojis.
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <code className="text-xs text-slate-700 dark:text-slate-300">DEFAULT CHARSET=utf8mb4</code>
                </div>
              </div>

              {/* COLLATE */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <SortAsc className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">COLLATION</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Defines how strings are compared and sorted. <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">utf8mb4_unicode_ci</code> is case-insensitive.
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <code className="text-xs text-slate-700 dark:text-slate-300">COLLATE utf8mb4_unicode_ci</code>
                </div>
              </div>

              {/* COMMENT */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">COMMENT</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Adds a description to your table for documentation. Visible in database tools and schema exports.
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <code className="text-xs text-slate-700 dark:text-slate-300">COMMENT='Product catalog table'</code>
                </div>
              </div>

              {/* AUTO_INCREMENT */}
              <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">AUTO_INCREMENT</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Sets the starting value for auto-increment columns. Useful when importing data with existing IDs.
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <code className="text-xs text-slate-700 dark:text-slate-300">AUTO_INCREMENT=1000</code>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Table Options Example */}
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Complete Table with All Options</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard(`CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=1000
COMMENT='Product catalog with pricing';`, 'options1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'options1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-slate-400 mb-2">-- Complete table with all recommended options</div>
                <div>CREATE TABLE products (</div>
                <div className="pl-4">id INT AUTO_INCREMENT PRIMARY KEY,</div>
                <div className="pl-4">name VARCHAR(100) NOT NULL,</div>
                <div className="pl-4">price DECIMAL(10, 2) NOT NULL,</div>
                <div className="pl-4">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
                <div>) ENGINE=InnoDB</div>
                <div>DEFAULT CHARSET=utf8mb4</div>
                <div>COLLATE=utf8mb4_unicode_ci</div>
                <div>AUTO_INCREMENT=1000</div>
                <div>COMMENT='Product catalog with pricing';</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

        {/* DROP DATABASE & TABLE */}
      <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 via-white to-orange-50/50 dark:from-red-950/20 dark:via-gray-900 dark:to-orange-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl shadow-lg">
              <Trash2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DROP DATABASE & TABLE</CardTitle>
              <CardDescription className="text-base">Remove databases and tables permanently - use with caution</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Alert className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Warning</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              DROP operations are irreversible and will permanently delete all data. Always backup before dropping.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DROP DATABASE</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('DROP DATABASE IF EXISTS my_company;', 'drop1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'drop1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Drop a database safely</div>
                  <div>DROP DATABASE IF EXISTS my_company;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DROP TABLE</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard('DROP TABLE IF EXISTS users;', 'drop2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'drop2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Drop a table safely</div>
                  <div>DROP TABLE IF EXISTS users;</div>
                </div>
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
              <CardDescription className="text-base">Follow these guidelines for creating robust database structures</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Naming Conventions</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use lowercase with underscores (snake_case) for table and column names. Be descriptive but concise.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Key className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Primary Keys</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Always define a primary key for every table. Use AUTO_INCREMENT for integer IDs.
            </AlertDescription>
          </Alert>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Data Integrity</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use NOT NULL for required fields, DEFAULT for sensible defaults, and appropriate data types.
            </AlertDescription>
          </Alert>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Timestamps</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Include created_at and updated_at columns for tracking record changes.
            </AlertDescription>
          </Alert>

          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Character Set</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Use utf8mb4 for full Unicode support including emojis and special characters.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

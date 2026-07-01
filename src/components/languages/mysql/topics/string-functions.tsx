'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Type, Copy, CheckCircle, AlertCircle, Info, Play, 
  ArrowRight, Search, Replace, Zap, FileText
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
      transform: translateX(30px);
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
    animation: slideInRight 0.6s ease-out forwards;
  }
  
  .animate-glowPulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
`;

export default function StringFunctions() {
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
    
    if (animationName === 'concat') {
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
    } else if (animationName === 'substring') {
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
    } else if (animationName === 'replace') {
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
    } else if (animationName === 'upperLower') {
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
    } else if (animationName === 'length') {
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
    } else if (animationName === 'trim') {
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
    } else if (animationName === 'leftRight') {
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
        icon={Type}
        category="MySQL · Functions"
        title="String Functions"
        description="Master MySQL string manipulation functions for text processing and data transformation"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Type className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">String Functions Overview</CardTitle>
              <CardDescription className="text-base">Powerful tools for text manipulation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why String Functions Matter</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              String functions allow you to manipulate, format, and analyze text data in MySQL. They're essential for data cleaning, formatting output, searching, and text transformation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* CONCAT Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Type className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CONCAT()</CardTitle>
              <CardDescription className="text-base">Concatenate multiple strings together</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded font-mono text-sm">
                CONCAT(str1, str2, str3, ...)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: User Info</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT CONCAT(username, ' (', email, ')') AS user_info FROM users;", 'concat1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'concat1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Combine username and email</div>
                <div>SELECT CONCAT(username, ' (', email, ')') AS user_info</div>
                <div>FROM users;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: CONCAT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: CONCAT()</h3>
              <button
                onClick={() => runAnimation('concat')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'concat' ? 'Running...' : animationComplete === 'concat' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">first_name</th>
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">last_name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">John</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Doe</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Jane</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Smith</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-slate-900 dark:text-white">Bob</td>
                      <td className="py-2 text-slate-700 dark:text-slate-300">Johnson</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (full_name)</h4>
                {activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">full_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">John Doe</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">Jane Smith</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-blue-600 dark:text-blue-400 font-semibold">Bob Johnson</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'concat' || animationComplete === 'concat' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'concat' || animationComplete === 'concat' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with concatenated user info.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SUBSTRING Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">SUBSTRING()</CardTitle>
              <CardDescription className="text-base">Extract a portion of a string</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded font-mono text-sm">
                SUBSTRING(str, start, length)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Extract Domain from Email</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT SUBSTRING(email, LOCATE('@', email) + 1) AS domain FROM users;", 'substring1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'substring1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Extract domain from email address</div>
                <div>SELECT SUBSTRING(email, LOCATE('@', email) + 1) AS domain</div>
                <div>FROM users;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: SUBSTRING */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: SUBSTRING()</h3>
              <button
                onClick={() => runAnimation('substring')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'substring' ? 'Running...' : animationComplete === 'substring' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">john.doe@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">jane.smith@test.org</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">bob.j@company.net</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (domain)</h4>
                {activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">domain</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold font-mono text-xs">example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold font-mono text-xs">test.org</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-purple-600 dark:text-purple-400 font-semibold font-mono text-xs">company.net</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'substring' || animationComplete === 'substring' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'substring' || animationComplete === 'substring' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with extracted domains.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* REPLACE Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Replace className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">REPLACE()</CardTitle>
              <CardDescription className="text-base">Replace occurrences of a substring</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Syntax</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded font-mono text-sm">
                REPLACE(str, from_str, to_str)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Format Email</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT REPLACE(email, '@example.com', '@newdomain.com') AS updated_email FROM users;", 'replace1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'replace1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Replace domain in email</div>
                <div>SELECT REPLACE(email, '@example.com', '@newdomain.com') AS updated_email</div>
                <div>FROM users;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: REPLACE */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: REPLACE()</h3>
              <button
                onClick={() => runAnimation('replace')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'replace' ? 'Running...' : animationComplete === 'replace' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">jane@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">bob@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (updated_email)</h4>
                {activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">updated_email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold font-mono text-xs">john@newdomain.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold font-mono text-xs">jane@newdomain.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-green-600 dark:text-green-400 font-semibold font-mono text-xs">bob@newdomain.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'replace' || animationComplete === 'replace' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'replace' || animationComplete === 'replace' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with domain replaced.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* UPPER/LOWER Functions */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">UPPER() & LOWER()</CardTitle>
              <CardDescription className="text-base">Convert string case</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Syntax</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded font-mono text-sm">
                UPPER(str) / LOWER(str)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">UPPER() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT UPPER(username) AS uppercase_username FROM users;", 'upper1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'upper1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Convert to uppercase</div>
                  <div>SELECT UPPER(username) AS uppercase_username</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">LOWER() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT LOWER(email) AS lowercase_email FROM users;", 'lower1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'lower1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Convert to lowercase</div>
                  <div>SELECT LOWER(email) AS lowercase_email</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: UPPER/LOWER */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: UPPER() & LOWER()</h3>
              <button
                onClick={() => runAnimation('upperLower')}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'upperLower' ? 'Running...' : animationComplete === 'upperLower' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Products Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Hello World</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">MySQL Tutorial</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white">Database Guide</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* UPPER Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (UPPER)</h4>
                {activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name_upper</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">HELLO WORLD</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">MYSQL TUTORIAL</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-amber-600 dark:text-amber-400 font-semibold">DATABASE GUIDE</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'upperLower' || animationComplete === 'upperLower' ? 'Executing query...' : 'Waiting...'}
                  </div>
                )}
              </div>

              {/* LOWER Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (LOWER)</h4>
                {activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">name_lower</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-orange-600 dark:text-orange-400 font-semibold">hello world</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-orange-600 dark:text-orange-400 font-semibold">mysql tutorial</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-orange-600 dark:text-orange-400 font-semibold">database guide</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'upperLower' || animationComplete === 'upperLower' ? 'Executing query...' : 'Waiting...'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'upperLower' || animationComplete === 'upperLower' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with case-transformed strings.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* LENGTH Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">LENGTH()</CardTitle>
              <CardDescription className="text-base">Get string length</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Syntax</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded font-mono text-sm">
                LENGTH(str)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example: Username Length</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT username, LENGTH(username) AS username_length FROM users;", 'length1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'length1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Get username length</div>
                <div>SELECT username, LENGTH(username) AS username_length</div>
                <div>FROM users;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: LENGTH */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/30 dark:to-violet-950/30 border-2 border-indigo-300 dark:border-indigo-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: LENGTH()</h3>
              <button
                onClick={() => runAnimation('length')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'length' ? 'Running...' : animationComplete === 'length' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">john_doe</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">alice_smith</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">bob</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (username_length)</h4>
                {activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username_length</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">8</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">10</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-indigo-600 dark:text-indigo-400 font-semibold">3</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'length' || animationComplete === 'length' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'length' || animationComplete === 'length' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with string lengths.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* TRIM Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">TRIM()</CardTitle>
              <CardDescription className="text-base">Remove whitespace from strings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30">
            <Info className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Syntax</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              <code className="bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded font-mono text-sm">
                TRIM(str) / LTRIM(str) / RTRIM(str)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">TRIM() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT TRIM(name) AS clean_name FROM users;", 'trim1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'trim1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Remove all whitespace from names</div>
                  <div>SELECT TRIM(name) AS clean_name</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">LTRIM/RTRIM Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT LTRIM(name) AS left_trimmed FROM users;", 'trim2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'trim2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Remove leading spaces</div>
                  <div>SELECT LTRIM(name) AS left_trimmed</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: TRIM */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 border-2 border-teal-300 dark:border-teal-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: TRIM()</h3>
              <button
                onClick={() => runAnimation('trim')}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'trim' ? 'Running...' : animationComplete === 'trim' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">  John Doe  </td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">  Jane Smith</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">Bob Johnson  </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Result Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (clean_name)</h4>
                {activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">clean_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-teal-600 dark:text-teal-400 font-semibold font-mono text-xs">John Doe</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-teal-600 dark:text-teal-400 font-semibold font-mono text-xs">Jane Smith</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-teal-600 dark:text-teal-400 font-semibold font-mono text-xs">Bob Johnson</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'trim' || animationComplete === 'trim' ? 'Executing query...' : 'Click Run Query to see result'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'trim' || animationComplete === 'trim' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg border border-teal-300 dark:border-teal-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with trimmed strings.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* LEFT/RIGHT Functions */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">LEFT() & RIGHT()</CardTitle>
              <CardDescription className="text-base">Extract characters from string ends</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30">
            <Info className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Syntax</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded font-mono text-sm">
                LEFT(str, length) / RIGHT(str, length)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">LEFT() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT LEFT(email, LOCATE('@', email) - 1) AS username FROM users;", 'left1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'left1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract username from email</div>
                  <div>SELECT LEFT(email, LOCATE('@', email) - 1) AS username</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">RIGHT() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT RIGHT(email, LENGTH(email) - LOCATE('@', email)) AS domain FROM users;", 'right1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'right1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract domain from email</div>
                  <div>SELECT RIGHT(email, LENGTH(email) - LOCATE('@', email)) AS domain</div>
                  <div>FROM users;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: LEFT/RIGHT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 border-2 border-rose-300 dark:border-rose-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: LEFT() & RIGHT()</h3>
              <button
                onClick={() => runAnimation('leftRight')}
                className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'leftRight' ? 'Running...' : animationComplete === 'leftRight' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Source Table */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Users Table (Source)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-slate-600 dark:text-slate-400">email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">john@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">jane@example.com</td>
                    </tr>
                    <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-highlightRow' : ''}`}>
                      <td className="py-2 text-slate-900 dark:text-white font-mono text-xs">bob@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* LEFT Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (username)</h4>
                {activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold font-mono text-xs">john</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold font-mono text-xs">jane</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-rose-600 dark:text-rose-400 font-semibold font-mono text-xs">bob</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'leftRight' || animationComplete === 'leftRight' ? 'Executing query...' : 'Waiting...'}
                  </div>
                )}
              </div>

              {/* RIGHT Result */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Result (domain)</h4>
                {activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 2 ? (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-slate-600 dark:text-slate-400">domain</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-pink-600 dark:text-pink-400 font-semibold font-mono text-xs">example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-pink-600 dark:text-pink-400 font-semibold font-mono text-xs">example.com</td>
                      </tr>
                      <tr className={`border-b border-gray-100 dark:border-gray-800 transition-all duration-500 ${activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 ? 'animate-fadeIn' : ''}`}>
                        <td className="py-2 text-pink-600 dark:text-pink-400 font-semibold font-mono text-xs">example.com</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-600">
                    {activeAnimation === 'leftRight' || animationComplete === 'leftRight' ? 'Executing query...' : 'Waiting...'}
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'leftRight' || animationComplete === 'leftRight' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border border-rose-300 dark:border-rose-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Query executed successfully! 3 rows returned with extracted characters.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
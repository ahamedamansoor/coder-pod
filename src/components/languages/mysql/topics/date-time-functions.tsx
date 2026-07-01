'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Calendar, Clock, Copy, CheckCircle, Info, Play, 
  ArrowRight, Plus, Minus, FileText, Search
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

export default function DateTimeFunctions() {
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
    
    if (animationName === 'now') {
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
    } else if (animationName === 'dateAdd') {
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
    } else if (animationName === 'dateFormat') {
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
    } else if (animationName === 'datediff') {
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
    } else if (animationName === 'extract') {
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
    } else if (animationName === 'dayMonthYear') {
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
    } else if (animationName === 'hourMinuteSecond') {
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
    } else if (animationName === 'dayMonthName') {
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
    } else if (animationName === 'strToDate') {
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
        icon={Calendar}
        category="MySQL · Functions"
        title="Date & Time Functions"
        description="Master MySQL date and time manipulation functions for temporal data processing"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Date & Time Functions Overview</CardTitle>
              <CardDescription className="text-base">Essential temporal data operations in MySQL</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            MySQL provides powerful date and time functions to manipulate, format, and calculate with temporal data. 
            These functions are essential for tasks like scheduling, reporting, and time-based analysis.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">NOW()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">DATE_FORMAT()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">DATE_ADD()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">DATEDIFF()</Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">EXTRACT()</Badge>
          </div>
        </CardContent>
      </Card>

      {/* NOW() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">NOW(), CURDATE(), CURTIME()</CardTitle>
              <CardDescription className="text-base">Get current date and time</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded font-mono text-sm">
                NOW() / CURDATE() / CURTIME()
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">NOW() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT NOW();", 'now1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'now1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get current date and time</div>
                  <div>SELECT NOW();</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">CURDATE() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT CURDATE();", 'now2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'now2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get current date</div>
                  <div>SELECT CURDATE();</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: NOW() */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: NOW()</h3>
              <button
                onClick={() => runAnimation('now')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'now' ? 'Running...' : animationComplete === 'now' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* NOW() */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">NOW()</h4>
                {activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 1 ? (
                  <div className="text-blue-600 dark:text-blue-400 font-mono text-lg animate-fadeIn">
                    2024-06-08 14:30:45
                  </div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">
                    Click Run Query
                  </div>
                )}
              </div>

              {/* CURDATE() */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">CURDATE()</h4>
                {activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 2 ? (
                  <div className="text-cyan-600 dark:text-cyan-400 font-mono text-lg animate-fadeIn">
                    2024-06-08
                  </div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">
                    Waiting...
                  </div>
                )}
              </div>

              {/* CURTIME() */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">CURTIME()</h4>
                {activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 3 ? (
                  <div className="text-indigo-600 dark:text-indigo-400 font-mono text-lg animate-fadeIn">
                    14:30:45
                  </div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">
                    Waiting...
                  </div>
                )}
              </div>
            </div>

            {activeAnimation === 'now' || animationComplete === 'now' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Functions executed successfully! Current date and time retrieved.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* DATE_ADD/DATE_SUB Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Plus className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DATE_ADD() & DATE_SUB()</CardTitle>
              <CardDescription className="text-base">Add or subtract time intervals</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
            <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Syntax</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded font-mono text-sm">
                DATE_ADD(date, INTERVAL value unit) / DATE_SUB(date, INTERVAL value unit)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DATE_ADD() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT DATE_ADD('2024-06-08', INTERVAL 7 DAY);", 'add1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'add1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Add 7 days to date</div>
                  <div>SELECT DATE_ADD('2024-06-08', INTERVAL 7 DAY);</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DATE_SUB() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT DATE_SUB('2024-06-08', INTERVAL 1 MONTH);", 'sub1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'sub1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Subtract 1 month from date</div>
                  <div>SELECT DATE_SUB('2024-06-08', INTERVAL 1 MONTH);</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: DATE_ADD/DATE_SUB */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: DATE_ADD() & DATE_SUB()</h3>
              <button
                onClick={() => runAnimation('dateAdd')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'dateAdd' ? 'Running...' : animationComplete === 'dateAdd' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Original Date */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Original Date</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08</div>
              </div>

              {/* DATE_ADD */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-green-600" />
                  DATE_ADD (+7 days)
                </h4>
                {activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 2 ? (
                  <div className="text-green-600 dark:text-green-400 font-mono text-lg animate-fadeIn">2024-06-15</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* DATE_SUB */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Minus className="w-4 h-4 text-red-600" />
                  DATE_SUB (-1 month)
                </h4>
                {activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 3 ? (
                  <div className="text-red-600 dark:text-red-400 font-mono text-lg animate-fadeIn">2024-05-08</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'dateAdd' || animationComplete === 'dateAdd' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Date calculations completed successfully! Intervals added and subtracted.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* DATE_FORMAT Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DATE_FORMAT()</CardTitle>
              <CardDescription className="text-base">Format date and time values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30">
            <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded font-mono text-sm">
                DATE_FORMAT(date, format_string)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Common Format Specifiers</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%Y</code>
                <span className="text-slate-700 dark:text-slate-300">Year (4 digits)</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%m</code>
                <span className="text-slate-700 dark:text-slate-300">Month (01-12)</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%d</code>
                <span className="text-slate-700 dark:text-slate-300">Day (01-31)</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%H</code>
                <span className="text-slate-700 dark:text-slate-300">Hour (00-23)</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%i</code>
                <span className="text-slate-700 dark:text-slate-300">Minutes (00-59)</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono">%s</code>
                <span className="text-slate-700 dark:text-slate-300">Seconds (00-59)</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">DATE_FORMAT() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT DATE_FORMAT('2024-06-08 14:30:45', '%M %d, %Y - %h:%i %p');", 'format1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'format1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Format date as readable string</div>
                <div>SELECT DATE_FORMAT('2024-06-08 14:30:45',</div>
                <div className="pl-4">'%M %d, %Y - %h:%i %p');</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: DATE_FORMAT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: DATE_FORMAT()</h3>
              <button
                onClick={() => runAnimation('dateFormat')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'dateFormat' ? 'Running...' : animationComplete === 'dateFormat' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Original DateTime */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dateFormat' || animationComplete === 'dateFormat' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Original DateTime</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08 14:30:45</div>
              </div>

              {/* Formatted Output */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dateFormat' || animationComplete === 'dateFormat' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Formatted Output</h4>
                {activeAnimation === 'dateFormat' || animationComplete === 'dateFormat' && animationStep >= 2 ? (
                  <div className="text-purple-600 dark:text-purple-400 font-semibold text-lg animate-fadeIn">June 08, 2024 - 02:30 PM</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'dateFormat' || animationComplete === 'dateFormat' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Date formatted successfully! Format string: '%M %d, %Y - %h:%i %p'</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* DATEDIFF Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DATEDIFF()</CardTitle>
              <CardDescription className="text-base">Calculate difference between dates</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Syntax</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded font-mono text-sm">
                DATEDIFF(date1, date2)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">DATEDIFF() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT DATEDIFF('2024-06-15', '2024-06-08') AS days_diff;", 'diff1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'diff1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Calculate days between dates</div>
                <div>SELECT DATEDIFF('2024-06-15', '2024-06-08') AS days_diff;</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: DATEDIFF */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-300 dark:border-amber-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: DATEDIFF()</h3>
              <button
                onClick={() => runAnimation('datediff')}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'datediff' ? 'Running...' : animationComplete === 'datediff' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Date 1 */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'datediff' || animationComplete === 'datediff' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Date 1</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-15</div>
              </div>

              {/* Date 2 */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'datediff' || animationComplete === 'datediff' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Date 2</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08</div>
              </div>

              {/* Difference */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'datediff' || animationComplete === 'datediff' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Difference (days)</h4>
                {activeAnimation === 'datediff' || animationComplete === 'datediff' && animationStep >= 2 ? (
                  <div className="text-amber-600 dark:text-amber-400 font-bold text-2xl animate-fadeIn">7</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'datediff' || animationComplete === 'datediff' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Calculations completed! 7 days difference between the dates.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* EXTRACT Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">EXTRACT()</CardTitle>
              <CardDescription className="text-base">Extract date parts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/30">
            <Info className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Syntax</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded font-mono text-sm">
                EXTRACT(unit FROM date)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">EXTRACT YEAR Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT EXTRACT(YEAR FROM '2024-06-08');", 'extract1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'extract1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract year from date</div>
                  <div>SELECT EXTRACT(YEAR FROM '2024-06-08');</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">EXTRACT MONTH Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT EXTRACT(MONTH FROM '2024-06-08');", 'extract2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'extract2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract month from date</div>
                  <div>SELECT EXTRACT(MONTH FROM '2024-06-08');</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: EXTRACT */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 border-2 border-rose-300 dark:border-rose-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: EXTRACT()</h3>
              <button
                onClick={() => runAnimation('extract')}
                className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'extract' ? 'Running...' : animationComplete === 'extract' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Original Date */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Date</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08</div>
              </div>

              {/* YEAR */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">YEAR</h4>
                {activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 2 ? (
                  <div className="text-rose-600 dark:text-rose-400 font-bold text-2xl animate-fadeIn">2024</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* MONTH */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MONTH</h4>
                {activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 3 ? (
                  <div className="text-pink-600 dark:text-pink-400 font-bold text-2xl animate-fadeIn">6</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* DAY */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">DAY</h4>
                {activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 3 ? (
                  <div className="text-purple-600 dark:text-purple-400 font-bold text-2xl animate-fadeIn">8</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'extract' || animationComplete === 'extract' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border border-rose-300 dark:border-rose-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Extraction completed! Date parts extracted successfully.</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* DAY(), MONTH(), YEAR() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DAY(), MONTH(), YEAR()</CardTitle>
              <CardDescription className="text-base">Extract date parts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30">
            <Info className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Syntax</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              <code className="bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded font-mono text-sm">
                DAY(date) / MONTH(date) / YEAR(date)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DAY() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT DAY('2024-06-08');", 'dmy1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'dmy1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract day from date</div>
                  <div>SELECT DAY('2024-06-08');</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">MONTH() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT MONTH('2024-06-08');", 'dmy2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'dmy2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract month from date</div>
                  <div>SELECT MONTH('2024-06-08');</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: DAY, MONTH, YEAR */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 border-2 border-teal-300 dark:border-teal-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: DAY(), MONTH(), YEAR()</h3>
              <button
                onClick={() => runAnimation('dayMonthYear')}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'dayMonthYear' ? 'Running...' : animationComplete === 'dayMonthYear' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Original Date */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Date</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08</div>
              </div>

              {/* DAY */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">DAY()</h4>
                {activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 2 ? (
                  <div className="text-teal-600 dark:text-teal-400 font-bold text-2xl animate-fadeIn">8</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* MONTH */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MONTH()</h4>
                {activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 3 ? (
                  <div className="text-cyan-600 dark:text-cyan-400 font-bold text-2xl animate-fadeIn">6</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* YEAR */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">YEAR()</h4>
                {activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 3 ? (
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl animate-fadeIn">2024</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'dayMonthYear' || animationComplete === 'dayMonthYear' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg border border-teal-300 dark:border-teal-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Date parts extracted successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* HOUR(), MINUTE(), SECOND() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">HOUR(), MINUTE(), SECOND()</CardTitle>
              <CardDescription className="text-base">Extract time parts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/30">
            <Info className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Syntax</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              <code className="bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded font-mono text-sm">
                HOUR(time) / MINUTE(time) / SECOND(time)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">HOUR() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT HOUR('14:30:45');", 'hms1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'hms1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract hour from time</div>
                  <div>SELECT HOUR('14:30:45');</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">MINUTE() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT MINUTE('14:30:45');", 'hms2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'hms2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Extract minute from time</div>
                  <div>SELECT MINUTE('14:30:45');</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: HOUR, MINUTE, SECOND */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950/30 dark:to-purple-950/30 border-2 border-violet-300 dark:border-violet-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: HOUR(), MINUTE(), SECOND()</h3>
              <button
                onClick={() => runAnimation('hourMinuteSecond')}
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'hourMinuteSecond' ? 'Running...' : animationComplete === 'hourMinuteSecond' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Original Time */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Time</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">14:30:45</div>
              </div>

              {/* HOUR */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">HOUR()</h4>
                {activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 2 ? (
                  <div className="text-violet-600 dark:text-violet-400 font-bold text-2xl animate-fadeIn">14</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* MINUTE */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MINUTE()</h4>
                {activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 3 ? (
                  <div className="text-purple-600 dark:text-purple-400 font-bold text-2xl animate-fadeIn">30</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* SECOND */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">SECOND()</h4>
                {activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 3 ? (
                  <div className="text-fuchsia-600 dark:text-fuchsia-400 font-bold text-2xl animate-fadeIn">45</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'hourMinuteSecond' || animationComplete === 'hourMinuteSecond' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg border border-violet-300 dark:border-violet-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-violet-700 dark:text-violet-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Time parts extracted successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* DAYNAME(), MONTHNAME() Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">DAYNAME(), MONTHNAME()</CardTitle>
              <CardDescription className="text-base">Get day and month names</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30">
            <Info className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Syntax</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded font-mono text-sm">
                DAYNAME(date) / MONTHNAME(date)
              </code>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">DAYNAME() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT DAYNAME('2024-06-08');", 'dmn1')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'dmn1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get day name from date</div>
                  <div>SELECT DAYNAME('2024-06-08');</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">MONTHNAME() Example</h3>
              <div className="relative">
                <button
                  onClick={() => copyToClipboard("SELECT MONTHNAME('2024-06-08');", 'dmn2')}
                  className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  {copiedCode === 'dmn2' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400 mb-2">-- Get month name from date</div>
                  <div>SELECT MONTHNAME('2024-06-08');</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: DAYNAME, MONTHNAME */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30 border-2 border-orange-300 dark:border-orange-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: DAYNAME(), MONTHNAME()</h3>
              <button
                onClick={() => runAnimation('dayMonthName')}
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'dayMonthName' ? 'Running...' : animationComplete === 'dayMonthName' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Original Date */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Date</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">2024-06-08</div>
              </div>

              {/* DAYNAME */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">DAYNAME()</h4>
                {activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 2 ? (
                  <div className="text-orange-600 dark:text-orange-400 font-semibold text-lg animate-fadeIn">Saturday</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>

              {/* MONTHNAME */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">MONTHNAME()</h4>
                {activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 3 ? (
                  <div className="text-amber-600 dark:text-amber-400 font-semibold text-lg animate-fadeIn">June</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'dayMonthName' || animationComplete === 'dayMonthName' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border border-orange-300 dark:border-orange-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Day and month names retrieved successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* STR_TO_DATE Function */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg">
              <Search className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">STR_TO_DATE()</CardTitle>
              <CardDescription className="text-base">Convert string to date</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Syntax</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              <code className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded font-mono text-sm">
                STR_TO_DATE(str, format)
              </code>
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">STR_TO_DATE() Example</h3>
            <div className="relative">
              <button
                onClick={() => copyToClipboard("SELECT STR_TO_DATE('June 8, 2024', '%M %d, %Y');", 'str1')}
                className="absolute right-2 top-2 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copiedCode === 'str1' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
              </button>
              <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-400 mb-2">-- Convert string to date</div>
                <div>SELECT STR_TO_DATE('June 8, 2024', '%M %d, %Y');</div>
              </div>
            </div>
          </div>

          {/* Interactive Demo: STR_TO_DATE */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950/30 dark:to-blue-950/30 border-2 border-indigo-300 dark:border-indigo-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Interactive Demo: STR_TO_DATE()</h3>
              <button
                onClick={() => runAnimation('strToDate')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                {activeAnimation === 'strToDate' ? 'Running...' : animationComplete === 'strToDate' ? 'Run Again' : 'Run Query'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input String */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'strToDate' || animationComplete === 'strToDate' && animationStep >= 1 ? 'animate-glowPulse' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Input String</h4>
                <div className="text-slate-900 dark:text-white font-mono text-lg">"June 8, 2024"</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">Format: '%M %d, %Y'</div>
              </div>

              {/* Converted Date */}
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 ${activeAnimation === 'strToDate' || animationComplete === 'strToDate' && animationStep >= 1 ? 'animate-slideInRight' : ''}`}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Converted Date</h4>
                {activeAnimation === 'strToDate' || animationComplete === 'strToDate' && animationStep >= 2 ? (
                  <div className="text-indigo-600 dark:text-indigo-400 font-mono text-lg animate-fadeIn">2024-06-08</div>
                ) : (
                  <div className="text-center py-4 text-slate-400 dark:text-slate-600">Waiting...</div>
                )}
              </div>
            </div>

            {activeAnimation === 'strToDate' || animationComplete === 'strToDate' && animationStep >= 3 && (
              <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 animate-fadeIn">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>String converted to date successfully!</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Settings, Target, Lightbulb, CheckCircle, AlertCircle, 
  Play, RotateCcw, ChevronLeft, ChevronRight, Hash, 
  Database, Zap, Clock, ArrowRight, ArrowUp, ArrowDown
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LRUCacheDesign() {
  // Inject CSS animations
  const styleTag = (
    <style jsx>{`
      @keyframes cacheHit {
        0%, 100% {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 50px rgba(34, 197, 94, 1), 0 0 100px rgba(34, 197, 94, 0.6);
          transform: scale(1.1);
        }
      }
      
      @keyframes cacheMiss {
        0%, 100% {
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.4);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 50px rgba(239, 68, 68, 1), 0 0 100px rgba(239, 68, 68, 0.6);
          transform: scale(1.05);
        }
      }
      
      @keyframes eviction {
        0% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        50% {
          opacity: 0.5;
          transform: translateX(20px) scale(0.9);
        }
        100% {
          opacity: 0;
          transform: translateX(40px) scale(0.8);
        }
      }
      
      @keyframes slideIn {
        0% {
          opacity: 0;
          transform: translateX(-20px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }
      
      @keyframes moveToFront {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-30px) scale(1.1);
        }
        100% {
          transform: translateX(0);
        }
      }
      
      .cache-hit {
        animation: cacheHit 0.8s ease-in-out;
      }
      
      .cache-miss {
        animation: cacheMiss 0.8s ease-in-out;
      }
      
      .eviction {
        animation: eviction 0.6s ease-out forwards;
      }
      
      .slide-in {
        animation: slideIn 0.5s ease-out;
      }
      
      .move-to-front {
        animation: moveToFront 0.6s ease-out;
      }
    `}</style>
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  type CacheEntry = {
    key: number;
    value: string;
    order: number;
    accessed: boolean;
  };

  type Step = {
    step: number;
    operation: 'put' | 'get';
    key: number;
    value: string | null;
    cache: CacheEntry[];
    capacity: number;
    currentLine: number;
    description: string;
    action: string;
    status: 'hit' | 'miss' | 'eviction' | 'normal' | 'empty';
  };

  const steps: Step[] = [
    // INITIALIZATION
    { step: 1, operation: 'put', key: 0, value: null, cache: [], capacity: 3, currentLine: 1, description: '🏗️ Initialize LRU Cache with capacity 3. Cache starts empty, ready to store key-value pairs.', action: 'init', status: 'empty' },
    
    // PUT OPERATION 1
    { step: 2, operation: 'put', key: 1, value: 'A', cache: [{ key: 1, value: 'A', order: 1, accessed: false }], capacity: 3, currentLine: 2, description: '➕ PUT(1, "A"): Cache has space. Add new entry. Key 1 becomes Most Recently Used (MRU) at front.', action: 'put-success', status: 'normal' },
    
    // PUT OPERATION 2
    { step: 3, operation: 'put', key: 2, value: 'B', cache: [{ key: 2, value: 'B', order: 2, accessed: false }, { key: 1, value: 'A', order: 1, accessed: false }], capacity: 3, currentLine: 2, description: '➕ PUT(2, "B"): Cache has space. Add new entry. Key 2 becomes MRU, key 1 moves to second position.', action: 'put-success', status: 'normal' },
    
    // GET OPERATION - CACHE HIT
    { step: 4, operation: 'get', key: 1, value: 'A', cache: [{ key: 1, value: 'A', order: 3, accessed: true }, { key: 2, value: 'B', order: 2, accessed: false }], capacity: 3, currentLine: 3, description: '🎯 GET(1): CACHE HIT! Key 1 found. Move to front as MRU. Return value "A".', action: 'get-hit', status: 'hit' },
    
    // PUT OPERATION 3
    { step: 5, operation: 'put', key: 3, value: 'C', cache: [{ key: 3, value: 'C', order: 4, accessed: false }, { key: 1, value: 'A', order: 3, accessed: false }, { key: 2, value: 'B', order: 2, accessed: false }], capacity: 3, currentLine: 2, description: '➕ PUT(3, "C"): Cache has space. Add new entry. Key 3 becomes MRU.', action: 'put-success', status: 'normal' },
    
    // GET OPERATION - CACHE MISS
    { step: 6, operation: 'get', key: 4, value: null, cache: [{ key: 3, value: 'C', order: 4, accessed: false }, { key: 1, value: 'A', order: 3, accessed: false }, { key: 2, value: 'B', order: 2, accessed: false }], capacity: 3, currentLine: 3, description: '❌ GET(4): CACHE MISS! Key 4 not found. Return -1. Cache order unchanged.', action: 'get-miss', status: 'miss' },
    
    // PUT OPERATION WITH EVICTION
    { step: 7, operation: 'put', key: 4, value: 'D', cache: [{ key: 4, value: 'D', order: 5, accessed: false }, { key: 3, value: 'C', order: 4, accessed: false }, { key: 1, value: 'A', order: 3, accessed: false }], capacity: 3, currentLine: 4, description: '🔄 PUT(4, "D"): Cache FULL! Evict LRU (key 2). Add key 4 as MRU. Key 2 removed from cache.', action: 'put-evict', status: 'eviction' },
    
    // GET OPERATION - CACHE HIT WITH REORDERING
    { step: 8, operation: 'get', key: 3, value: 'C', cache: [{ key: 3, value: 'C', order: 6, accessed: true }, { key: 4, value: 'D', order: 5, accessed: false }, { key: 1, value: 'A', order: 3, accessed: false }], capacity: 3, currentLine: 3, description: '🎯 GET(3): CACHE HIT! Key 3 found and moved to front as MRU. Return value "C".', action: 'get-hit', status: 'hit' },
    
    // PUT OPERATION WITH ANOTHER EVICTION
    { step: 9, operation: 'put', key: 5, value: 'E', cache: [{ key: 5, value: 'E', order: 7, accessed: false }, { key: 3, value: 'C', order: 6, accessed: false }, { key: 4, value: 'D', order: 5, accessed: false }], capacity: 3, currentLine: 4, description: '🔄 PUT(5, "E"): Cache FULL! Evict LRU (key 1). Add key 5 as MRU. Key 1 removed from cache.', action: 'put-evict', status: 'eviction' },
    
    // GET OPERATION - CACHE MISS AFTER EVICTION
    { step: 10, operation: 'get', key: 1, value: null, cache: [{ key: 5, value: 'E', order: 7, accessed: false }, { key: 3, value: 'C', order: 6, accessed: false }, { key: 4, value: 'D', order: 5, accessed: false }], capacity: 3, currentLine: 3, description: '❌ GET(1): CACHE MISS! Key 1 was evicted earlier. Return -1.', action: 'get-miss', status: 'miss' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const cacheSize = stepData.cache.length;
    const isFull = cacheSize >= stepData.capacity;
    const lruKey = cacheSize > 0 ? stepData.cache[cacheSize - 1]?.key : null;
    const operation = stepData.operation.toUpperCase();
    
    return [
      { line: 1, code: 'class LRUCache {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? `capacity: ${stepData.capacity}` : '' },
      { line: 2, code: '  put(key, value) {', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `cache: ${cacheSize}/${stepData.capacity}` : '' },
      { line: 3, code: '    get(key) { return value; }', active: stepData.currentLine === 3, indent: 2, values: stepData.currentLine === 3 ? `${operation}: ${stepData.value !== null ? 'HIT' : 'MISS'}` : '' },
      { line: 4, code: '    evictLRU() { remove oldest; }', active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 ? `evicted: ${lruKey}` : '' },
      { line: 5, code: '  }', active: false, indent: 1, values: '' },
      { line: 6, code: '}', active: false, indent: 0, values: stepData.step >= 10 ? 'O(1) operations' : '' }
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedDelay = animationSpeed === 'slow' ? 3000 : animationSpeed === 'fast' ? 500 : 1500;
    steps.forEach((_, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, index * speedDelay);
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) goToStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  };

  const handleReset = () => {
    setIsAnimating(false);
    goToStep(0);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-900">
      {styleTag}
      <PageHeader
        icon={Settings}
        category="DSA · Linked Lists"
        title="LRU Cache Design"
        description="Master LRU (Least Recently Used) Cache with O(1) operations using HashMap + Doubly Linked List"
        colorTheme="blue"
      />
      
      <div className="w-full flex flex-wrap items-center justify-center gap-2 px-4">
        {['Cache Design', 'Time: O(1)', 'Space: O(capacity)', 'Medium'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* What You'll Learn */}
      <Card className="w-full mx-4 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Hash Map + Linked List</p>
                <p className="text-sm text-muted-foreground">Combine two data structures</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">O(1) Operations</p>
                <p className="text-sm text-muted-foreground">Constant time get and put</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">LRU Eviction</p>
                <p className="text-sm text-muted-foreground">Remove least recently used</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Usage Tracking</p>
                <p className="text-sm text-muted-foreground">Maintain access order</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation - SHOWN FIRST */}
      <Card className="w-full mx-4 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            LRU Cache Implementation
          </CardTitle>
          <CardDescription>The complete LRU Cache algorithm with O(1) operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-slate-100 font-mono">
                <code>
{`class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }
  
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}`}
                </code>
              </pre>
            </div>
            
            <div className="mt-6 p-4 bg-white dark:bg-slate-950 rounded-lg border-2 border-blue-300 dark:border-blue-600">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                How It Works:
              </h4>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span><strong>Hash Map:</strong> Key → Node reference for O(1) lookup</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span><strong>Doubly Linked List:</strong> Front = MRU, Back = LRU for O(1) updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span><strong>GET Operation:</strong> Find in hash map, move to front, return value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span><strong>PUT Operation:</strong> Add to front, evict LRU if over capacity</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Animation */}
      <Card className="w-full mx-4 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Interactive LRU Cache Animation
          </CardTitle>
          <CardDescription>Watch how the LRU Cache handles different operations step by step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Animation Controls */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={isAnimating ? () => setIsAnimating(false) : handlePlay}
              disabled={currentStep === steps.length - 1 && !isAnimating}
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              {isAnimating ? <RotateCcw className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAnimating ? 'Pause' : 'Play Animation'}
            </Button>
            
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button onClick={handleNext} disabled={currentStep === steps.length - 1 || isAnimating} variant="outline" size="lg">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Code Viewer with Current Step */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">lru-cache.js</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
              </div>
            </div>

            <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
              {getCodeWithValues(currentStepData).map((lineData) => (
                <div
                  key={lineData.line}
                  className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                    lineData.active
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500'
                      : ''
                  }`}
                >
                  <span className={`select-none w-6 text-right flex-shrink-0 ${
                    lineData.active
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-400 dark:text-slate-600'
                  }`}>
                    {lineData.line}
                  </span>

                  <code className="flex-1 text-slate-700 dark:text-slate-300">
                    <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                      {lineData.code}
                    </span>
                    {lineData.values && (
                      <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">
                        {lineData.values}
                      </span>
                    )}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* Step Description */}
          <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-green-600">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                    Step {currentStepData.step} of {steps.length}
                  </div>
                  <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                    {currentStepData.action === 'init' && '🏗️ Initialization'}
                    {currentStepData.action === 'put-success' && '➕ Add New Entry'}
                    {currentStepData.action === 'get-hit' && '🎯 Cache Hit'}
                    {currentStepData.action === 'get-miss' && '❌ Cache Miss'}
                    {currentStepData.action === 'put-evict' && '🔄 Evict LRU & Add New'}
                  </div>
                </div>
              </div>
              <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                {currentStepData.description}
              </p>
            </div>
          </div>

          {/* Cache Visualization */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">LRU Cache State:</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-slate-400">
                  Capacity: {currentStepData.capacity}
                </Badge>
                <Badge variant="outline" className={`text-xs ${
                  currentStepData.status === 'hit' ? 'border-green-400 text-green-600' :
                  currentStepData.status === 'miss' ? 'border-red-400 text-red-600' :
                  currentStepData.status === 'eviction' ? 'border-orange-400 text-orange-600' :
                  'border-slate-400 text-slate-600'
                }`}>
                  {currentStepData.status === 'hit' ? 'HIT' :
                   currentStepData.status === 'miss' ? 'MISS' :
                   currentStepData.status === 'eviction' ? 'EVICTION' :
                   currentStepData.status === 'empty' ? 'EMPTY' : 'NORMAL'}
                </Badge>
              </div>
            </div>
            
            <div className="w-full p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              
              {/* Current Operation */}
              <div className="space-y-4 mb-8">
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">Current Operation</div>
                <div className="flex items-center justify-center gap-4">
                  <div className={`px-4 py-2 rounded-lg font-bold text-lg ${
                    currentStepData.operation === 'put' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  }`}>
                    {currentStepData.operation.toUpperCase()}({currentStepData.key}, {currentStepData.value ? `"${currentStepData.value}"` : 'null'})
                  </div>
                  {currentStepData.value !== null && currentStepData.operation === 'get' && (
                    <div className="px-4 py-2 rounded-lg font-bold text-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      → {currentStepData.value}
                    </div>
                  )}
                  {currentStepData.value === null && currentStepData.operation === 'get' && (
                    <div className="px-4 py-2 rounded-lg font-bold text-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                      → -1
                    </div>
                  )}
                </div>
              </div>

              {/* Cache Contents */}
              <div className="space-y-4">
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">
                  Cache Contents (MRU → LRU)
                </div>
                <div className="flex items-center justify-center gap-3 min-w-full">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">MRU</div>
                  <div className="text-slate-400">→</div>
                  
                  {currentStepData.cache.length === 0 ? (
                    <div className="px-6 py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-500 dark:text-slate-400">
                      Empty Cache
                    </div>
                  ) : (
                    currentStepData.cache.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                          item.accessed ? 'border-green-500 dark:border-green-400 cache-hit' :
                          index === currentStepData.cache.length - 1 && currentStepData.status === 'eviction' ? 'border-orange-500 dark:border-orange-400 eviction' :
                          'border-slate-300 dark:border-slate-600'
                        } ${index === 0 && item.accessed ? 'move-to-front' : ''} ${currentStepData.step === item.order ? 'slide-in' : ''}`}>
                          <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500">
                            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">KEY</div>
                            <div className="text-lg font-bold text-blue-900 dark:text-blue-100">{item.key}</div>
                          </div>
                          <div className="px-3 py-2 bg-green-100 dark:bg-green-900">
                            <div className="text-xs font-bold text-green-700 dark:text-green-300">VALUE</div>
                            <div className="text-lg font-bold text-green-900 dark:text-green-100">{item.value}</div>
                          </div>
                        </div>
                        {index < currentStepData.cache.length - 1 && <div className="text-slate-400">→</div>}
                      </div>
                    ))
                  )}
                  
                  <div className="text-slate-400">→</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">LRU</div>
                </div>
              </div>

              {/* Hash Map Visualization */}
              <div className="space-y-4 mt-8">
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">
                  Hash Map (Key → Node Reference)
                </div>
                <div className="flex items-center justify-center gap-3 min-w-full">
                  {currentStepData.cache.length === 0 ? (
                    <div className="px-6 py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-500 dark:text-slate-400">
                      Empty Map
                    </div>
                  ) : (
                    currentStepData.cache.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="px-3 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-purple-50 dark:bg-purple-950/30">
                          <div className="text-xs font-bold text-purple-700 dark:text-purple-300">{item.key}</div>
                          <div className="text-xs text-purple-600 dark:text-purple-400">→ Node</div>
                        </div>
                        {index < currentStepData.cache.length - 1 && <div className="text-slate-400">,</div>}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LRU Cache Diagrammatic Explanation */}
      <Card className="w-full mx-4 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-slate-600" />
            LRU Cache - Diagrammatic Explanation
          </CardTitle>
          <CardDescription>Understanding the data structure through visual diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Overall Architecture */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              LRU Cache Architecture
            </h4>
            
            <div className="space-y-6">
              {/* Main Architecture Diagram */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-blue-900 dark:text-blue-100">LRU Cache = Hash Map + Doubly Linked List</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Hash Map Side */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="font-bold text-purple-700 dark:text-purple-300 mb-2">Hash Map</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Key → Node Reference</div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                      <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-700 dark:text-purple-300">1:</span>
                          <span className="text-purple-600 dark:text-purple-400">→ Node(1, "A")</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-700 dark:text-purple-300">2:</span>
                          <span className="text-purple-600 dark:text-purple-400">→ Node(2, "B")</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-700 dark:text-purple-300">3:</span>
                          <span className="text-purple-600 dark:text-purple-400">→ Node(3, "C")</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      ✓ O(1) lookup for any key
                    </div>
                  </div>
                  
                  {/* Doubly Linked List Side */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="font-bold text-green-700 dark:text-green-300 mb-2">Doubly Linked List</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Usage Order: MRU → LRU</div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-xs font-bold text-green-700 dark:text-green-300">HEAD</div>
                        <div className="text-slate-400">↔</div>
                        
                        <div className="border-2 border-green-500 rounded px-3 py-2 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold text-green-700 dark:text-green-300">3:"C"</div>
                          <div className="text-xs text-green-600 dark:text-green-400">MRU</div>
                        </div>
                        <div className="text-slate-400">↔</div>
                        
                        <div className="border-2 border-green-400 rounded px-3 py-2 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold text-green-700 dark:text-green-300">2:"B"</div>
                        </div>
                        <div className="text-slate-400">↔</div>
                        
                        <div className="border-2 border-orange-500 rounded px-3 py-2 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold text-orange-700 dark:text-orange-300">1:"A"</div>
                          <div className="text-xs text-orange-600 dark:text-orange-400">LRU</div>
                        </div>
                        <div className="text-slate-400">↔</div>
                        
                        <div className="text-xs font-bold text-green-700 dark:text-green-300">TAIL</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      ✓ O(1) add/remove/move operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GET Operation Diagram */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              GET Operation - Step by Step
            </h4>
            
            <div className="space-y-6">
              {/* GET Operation Flow */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-2 border-green-300 dark:border-green-600">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-green-900 dark:text-green-100">GET(key) Operation Flow</div>
                </div>
                
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-800 dark:text-green-200 mb-2">Lookup in Hash Map</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm">
                        <div className="text-slate-700 dark:text-slate-300">hashMap.get(key) → Node reference</div>
                        <div className="text-green-600 dark:text-green-400">✓ O(1) time complexity</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-800 dark:text-green-200 mb-2">Check if Key Exists</div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-300 dark:border-green-700">
                          <div className="font-bold text-green-700 dark:text-green-300 mb-1">✓ Key Found (Cache Hit)</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            → Move node to front (MRU)<br/>
                            → Return node.value
                          </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-300 dark:border-red-700">
                          <div className="font-bold text-red-700 dark:text-red-300 mb-1">✗ Key Not Found (Cache Miss)</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            → Return -1<br/>
                            → No change to cache
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-800 dark:text-green-200 mb-2">Move to Front (if Cache Hit)</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                        <div className="text-sm font-mono text-slate-700 dark:text-slate-300 mb-2">
                          <div>// Remove node from current position</div>
                          <div>node.prev.next = node.next</div>
                          <div>node.next.prev = node.prev</div>
                          <div className="mt-2">// Add to front (MRU)</div>
                          <div>node.next = head</div>
                          <div>head.prev = node</div>
                          <div>head = node</div>
                        </div>
                        <div className="text-green-600 dark:text-green-400 text-xs">✓ O(1) time complexity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PUT Operation Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6" />
              PUT Operation - Step by Step
            </h4>
            
            <div className="space-y-6">
              {/* PUT Operation Flow */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-blue-900 dark:text-blue-100">PUT(key, value) Operation Flow</div>
                </div>
                
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Check if Key Already Exists</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm">
                        <div className="text-slate-700 dark:text-slate-300">Node node = hashMap.get(key)</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Handle Existing vs New Key</div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-300 dark:border-blue-700">
                          <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">✓ Key Exists</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            → Update node.value<br/>
                            → Move to front (MRU)
                          </div>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-300 dark:border-orange-700">
                          <div className="font-bold text-orange-700 dark:text-orange-300 mb-1">✗ New Key</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            → Create new node<br/>
                            → Check capacity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Check Capacity & Evict if Needed</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                        <div className="text-sm font-mono text-slate-700 dark:text-slate-300 mb-2">
                          <div>if (size {'>='} capacity) {'{'}</div>
                          <div>  // Remove LRU (tail)</div>
                          <div>  Node lru = tail;</div>
                          <div>  removeNode(lru);</div>
                          <div>  hashMap.remove(lru.key);</div>
                          <div>  size--;</div>
                          <div>{'}'}</div>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 text-xs">✓ Only happens when cache is full</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Add New Node to Front</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                        <div className="text-sm font-mono text-slate-700 dark:text-slate-300 mb-2">
                          <div>Node newNode = new Node(key, value);</div>
                          <div>addNodeToFront(newNode);</div>
                          <div>hashMap.put(key, newNode);</div>
                          <div>size++;</div>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 text-xs">✓ New node becomes MRU</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LRU Eviction Process */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              LRU Eviction Process
            </h4>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-orange-900 dark:text-orange-100">When Cache is Full & New Item Arrives</div>
                </div>
                
                <div className="space-y-4">
                  {/* Before Eviction */}
                  <div>
                    <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Before Eviction:</div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="text-xs font-bold text-orange-700 dark:text-orange-300">MRU</div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="border-2 border-green-500 rounded px-2 py-1 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold">3:"C"</div>
                        </div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="border-2 border-blue-500 rounded px-2 py-1 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold">2:"B"</div>
                        </div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="border-2 border-red-500 rounded px-2 py-1 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold">1:"A"</div>
                          <div className="text-xs text-red-600">LRU</div>
                        </div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="text-xs font-bold text-orange-700 dark:text-orange-300">TAIL</div>
                      </div>
                      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                        Cache is FULL (capacity: 3, size: 3)
                      </div>
                    </div>
                  </div>
                  
                  {/* Eviction Process */}
                  <div>
                    <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Eviction Process:</div>
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border border-orange-300 dark:border-orange-700">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600 font-bold">1.</span>
                          <span>Identify LRU node (tail) → Key 1:"A"</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600 font-bold">2.</span>
                          <span>Remove from hash map → hashMap.remove(1)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600 font-bold">3.</span>
                          <span>Remove from linked list → tail = tail.prev</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600 font-bold">4.</span>
                          <span>Decrease size → size--</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* After Eviction */}
                  <div>
                    <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">After Eviction (Before Adding New):</div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="text-xs font-bold text-orange-700 dark:text-orange-300">MRU</div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="border-2 border-green-500 rounded px-2 py-1 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold">3:"C"</div>
                        </div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="border-2 border-blue-500 rounded px-2 py-1 bg-white dark:bg-slate-800">
                          <div className="text-xs font-bold">2:"B"</div>
                          <div className="text-xs text-blue-600">LRU</div>
                        </div>
                        <div className="text-slate-400">→</div>
                        
                        <div className="text-xs font-bold text-orange-700 dark:text-orange-300">TAIL</div>
                      </div>
                      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                        Space available! (capacity: 3, size: 2)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time & Space Complexity Analysis */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Why O(1) Time Complexity?
            </h4>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Hash Map Operations */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="font-bold text-purple-700 dark:text-purple-300 mb-2">Hash Map Operations</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">All O(1) on average</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                        <span className="font-medium">get(key)</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">O(1)</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                        <span className="font-medium">put(key, value)</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">O(1)</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                        <span className="font-medium">remove(key)</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">O(1)</Badge>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      Hash functions provide direct access to memory locations
                    </div>
                  </div>
                  
                  {/* Linked List Operations */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="font-bold text-green-700 dark:text-green-300 mb-2">Doubly Linked List Operations</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">All O(1) with node reference</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <span className="font-medium">addToFront(node)</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">O(1)</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <span className="font-medium">removeNode(node)</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">O(1)</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <span className="font-medium">moveToFront(node)</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">O(1)</Badge>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      Node references from hash map enable direct manipulation
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-300 dark:border-emerald-600">
                  <div className="text-center">
                    <div className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">Combined Power</div>
                    <div className="text-sm text-emerald-700 dark:text-emerald-300">
                      Hash Map gives us O(1) access to any node<br/>
                      Doubly Linked List gives us O(1) ordering operations<br/>
                      <strong>Result: LRU Cache with O(1) GET and PUT operations!</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="w-full mx-4 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-slate-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <ArrowUp className="w-5 h-5" />
                Time Complexity
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="font-medium">GET Operation</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">O(1)</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="font-medium">PUT Operation</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">O(1)</Badge>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Hash map provides O(1) lookup, doubly linked list provides O(1) updates.
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <ArrowDown className="w-5 h-5" />
                Space Complexity
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="font-medium">Hash Map</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">O(capacity)</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="font-medium">Linked List</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">O(capacity)</Badge>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Total space is proportional to cache capacity, not input size.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

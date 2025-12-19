'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { List, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, Hash, X } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsCountNodes() {
  // Inject CSS animations
  const styleTag = (
    <style jsx>{`
      @keyframes countPulse {
        0%, 100% {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 50px rgba(16, 185, 129, 1), 0 0 100px rgba(16, 185, 129, 0.6);
          transform: scale(1.2);
        }
      }
      
      @keyframes nodeVisit {
        0% {
          transform: scale(1) rotate(0deg);
          box-shadow: 0 0 0 rgba(16, 185, 129, 0);
        }
        25% {
          transform: scale(1.25) rotate(-5deg);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
        }
        75% {
          transform: scale(1.25) rotate(5deg);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
        }
        100% {
          transform: scale(1.15) rotate(0deg);
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.8);
        }
      }
      
      @keyframes pointerBounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }
      
      @keyframes rippleEffect {
        0% {
          transform: scale(0.8);
          opacity: 1;
        }
        100% {
          transform: scale(2.5);
          opacity: 0;
        }
      }
      
      @keyframes slideInFromLeft {
        0% {
          opacity: 0;
          transform: translateX(-40px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }
      
      @keyframes glowPulse {
        0%, 100% {
          filter: drop-shadow(0 0 5px rgba(16, 185, 129, 0.5));
        }
        50% {
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.9));
        }
      }
      
      .count-pulse {
        animation: countPulse 0.8s ease-in-out;
      }
      
      .node-visit {
        animation: nodeVisit 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .pointer-bounce {
        animation: pointerBounce 1s ease-in-out infinite;
      }
      
      .slide-in {
        animation: slideInFromLeft 0.5s ease-out;
      }
      
      .glow-pulse {
        animation: glowPulse 1.5s ease-in-out infinite;
      }
    `}</style>
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [listData] = useState([10, 20, 30, 40]);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  type Step = {
    step: number;
    current: number | null;
    count: number;
    currentLine: number;
    description: string;
    action: string;
  };

  const steps: Step[] = [
    // INITIALIZATION
    { step: 1, current: null, count: 0, currentLine: 1, description: '📋 Problem: Count nodes in: 10 → 20 → 30 → 40 → null', action: 'init' },
    { step: 2, current: null, count: 0, currentLine: 2, description: '🔢 Initialize count = 0', action: 'init' },
    { step: 3, current: 0, count: 0, currentLine: 3, description: '👉 Initialize current = head (node 10)', action: 'init' },
    
    // ITERATION 1
    { step: 4, current: 0, count: 0, currentLine: 5, description: '✅ Loop Check: current !== null? YES!', action: 'loop-check' },
    { step: 5, current: 0, count: 0, currentLine: 6, description: '👁️ Visit node 10', action: 'visiting' },
    { step: 6, current: 0, count: 1, currentLine: 6, description: '➕ count++ → 1', action: 'increment' },
    { step: 7, current: 1, count: 1, currentLine: 7, description: '➡️ Move to node 20', action: 'moving' },
    
    // ITERATION 2
    { step: 8, current: 1, count: 1, currentLine: 5, description: '✅ Loop Check: current !== null? YES!', action: 'loop-check' },
    { step: 9, current: 1, count: 1, currentLine: 6, description: '👁️ Visit node 20', action: 'visiting' },
    { step: 10, current: 1, count: 2, currentLine: 6, description: '➕ count++ → 2', action: 'increment' },
    { step: 11, current: 2, count: 2, currentLine: 7, description: '➡️ Move to node 30', action: 'moving' },
    
    // ITERATION 3
    { step: 12, current: 2, count: 2, currentLine: 5, description: '✅ Loop Check: current !== null? YES!', action: 'loop-check' },
    { step: 13, current: 2, count: 2, currentLine: 6, description: '👁️ Visit node 30', action: 'visiting' },
    { step: 14, current: 2, count: 3, currentLine: 6, description: '➕ count++ → 3', action: 'increment' },
    { step: 15, current: 3, count: 3, currentLine: 7, description: '➡️ Move to node 40', action: 'moving' },
    
    // ITERATION 4
    { step: 16, current: 3, count: 3, currentLine: 5, description: '✅ Loop Check: current !== null? YES!', action: 'loop-check' },
    { step: 17, current: 3, count: 3, currentLine: 6, description: '👁️ Visit node 40 (last node)', action: 'visiting' },
    { step: 18, current: 3, count: 4, currentLine: 6, description: '➕ count++ → 4', action: 'increment' },
    { step: 19, current: null, count: 4, currentLine: 7, description: '➡️ Move to null (end)', action: 'moving' },
    
    // TERMINATION
    { step: 20, current: null, count: 4, currentLine: 5, description: '🎯 Loop Check: current === null? YES! Exit loop', action: 'loop-complete' },
    { step: 21, current: null, count: 4, currentLine: 9, description: '✅ Return count = 4', action: 'done' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const currentVal = stepData.current !== null ? `node(${listData[stepData.current]})` : 'null';
    const countVal = stepData.count;
    const nodesLeft = stepData.current !== null ? listData.length - stepData.current : 0;
    
    return [
      { line: 1, code: 'function countNodes(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let count = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `count: ${countVal}` : '' },
      { line: 3, code: '  let current = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `current: ${currentVal}` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  while (current !== null) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? (stepData.current !== null ? `✓ continue: current=${currentVal}, count=${countVal}` : `✗ exit: count=${countVal}`) : '' },
      { line: 6, code: '    count++;', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `count: ${countVal - 1} → ${countVal}` : '' },
      { line: 7, code: '    current = current.next;', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `current: ${currentVal}, remaining: ${nodesLeft}` : '' },
      { line: 8, code: '  }', active: stepData.currentLine === 8, indent: 1, values: stepData.currentLine === 8 ? `total visited: ${countVal}` : '' },
      { line: 9, code: '  return count;', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 ? `✓ total nodes: ${countVal}` : '' },
      { line: 10, code: '}', active: false, indent: 0 },
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
    <div className="space-y-8">
      {styleTag}
      <PageHeader
        icon={List}
        category="DSA · Linked Lists"
        title="Count Nodes in Linked List"
        description="Master linked list traversal by counting all nodes efficiently"
        colorTheme="emerald"
      />
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Traversal', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Linked List Traversal</p>
                <p className="text-sm text-muted-foreground">Visit every node sequentially</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Pointer Management</p>
                <p className="text-sm text-muted-foreground">Track current position</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Counter Pattern</p>
                <p className="text-sm text-muted-foreground">Increment technique</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Null Termination</p>
                <p className="text-sm text-muted-foreground">Detect end of list</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation - SHOWN FIRST */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            Algorithm Implementation
          </CardTitle>
          <CardDescription>The complete counting algorithm in JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <CodeSnippet
              code={getCodeWithValues(steps[0])}
              language="javascript"
              showLineNumbers={true}
            />
            
            <div className="mt-6 p-4 bg-white dark:bg-slate-950 rounded-lg border-2 border-emerald-300 dark:border-emerald-600">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                How It Works:
              </h4>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p>• <strong className="text-emerald-600">Line 2:</strong> Initialize counter to 0</p>
                <p>• <strong className="text-emerald-600">Line 3:</strong> Start at the head node</p>
                <p>• <strong className="text-emerald-600">Line 5:</strong> Loop while current is not null</p>
                <p>• <strong className="text-emerald-600">Line 6:</strong> Increment count for each node</p>
                <p>• <strong className="text-emerald-600">Line 7:</strong> Move to next node</p>
                <p>• <strong className="text-emerald-600">Line 9:</strong> Return total count</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding node counting in linked lists</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Unlike arrays where <code className="text-emerald-600">arr.length</code> gives us the size instantly, 
            linked lists don't store their length. We must traverse the entire list, visiting each node and 
            incrementing a counter to find the total count.
          </p>

          {/* Visual Linked List Example */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <List className="w-5 h-5" /> What is Node Counting?
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-emerald-300 dark:border-emerald-600">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Example: 10 → 20 → 30 → 40 → null</p>
                
                {/* Visual Nodes */}
                <div className="mb-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Linked List Structure:</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {[10, 20, 30, 40].map((val, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 border-2 border-emerald-500 rounded-lg flex flex-col items-center justify-center">
                          <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">{val}</div>
                          <div className="text-[10px] text-emerald-600 dark:text-emerald-400">Node {idx}</div>
                        </div>
                        {idx < 3 && (
                          <div className="flex items-center">
                            <div className="w-8 h-0.5 bg-emerald-400"></div>
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[4px] border-t-emerald-400 border-b-[4px] border-b-emerald-400"></div>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-slate-400"></div>
                      <div className="px-3 py-2 bg-slate-200 dark:bg-slate-800 border border-slate-400 rounded text-xs font-mono text-slate-600 dark:text-slate-400">
                        null
                      </div>
                    </div>
                  </div>
                </div>

                {/* Counter Display */}
                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded border-2 border-emerald-400">
                  <p className="text-sm text-center font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2">
                    <Hash className="w-5 h-5" />
                    Total Count: 4 nodes ✓
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traversal Process */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              👣 The Counting Process
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Start at the head and visit each node one by one:
                </p>
                
                {/* Step-by-step visualization */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300">
                      <span className="text-sm">Visit node 10 → count = 1</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300">
                      <span className="text-sm">Visit node 20 → count = 2</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300">
                      <span className="text-sm">Visit node 30 → count = 3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300">
                      <span className="text-sm">Visit node 40 → count = 4</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                    <div className="flex-1 p-2 bg-green-50 dark:bg-green-900/20 rounded border-2 border-green-500">
                      <span className="text-sm font-bold">Reach null → Done! Return 4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Algorithm Logic */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <p>• <strong>Start:</strong> count = 0, current = head</p>
                  <p>• <strong>Loop:</strong> While current is not null</p>
                  <p>• <strong>Count:</strong> Increment count by 1</p>
                  <p>• <strong>Move:</strong> current = current.next</p>
                  <p>• <strong>End:</strong> Return total count ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Different Cases */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              📊 Different Test Cases
            </h4>
            
            <div className="space-y-3">
              {/* Multiple Nodes */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-l-4 border-emerald-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Multiple Nodes</span>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    Count: 4
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mb-2">
                  10 → 20 → 30 → 40 → null
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Traverse all 4 nodes, count increments each time
                </p>
              </div>

              {/* Single Node */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700 dark:text-blue-300">Single Node</span>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    Count: 1
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mb-2">
                  10 → null
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Loop runs once, count becomes 1
                </p>
              </div>

              {/* Empty List */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-orange-700 dark:text-orange-300">Empty List</span>
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                    Count: 0
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mb-2">
                  null
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  Head is null, loop never executes, returns 0
                </p>
              </div>
            </div>
          </div>

          {/* Key Steps */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 p-4 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Visit each node</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two variables</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation Section - Continues... */}

      {/* Visual Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Node Counting: Visual Animation
          </CardTitle>
          <CardDescription>Watch the traversal process step by step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            
            {/* List Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Linked List:</p>
                  <p className="text-lg font-mono text-slate-900 dark:text-slate-100">10 → 20 → 30 → 40 → null</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Current Count:</p>
                  <p className={`text-2xl font-mono font-bold ${currentStepData.action === 'increment' ? 'text-emerald-600 count-pulse' : 'text-emerald-700 dark:text-emerald-300'}`}>
                    {currentStepData.count}
                  </p>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as typeof speed)}
                        className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-emerald-800 dark:text-emerald-200 capitalize">{speed}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 justify-center items-center">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 0 || isAnimating}
                  variant="outline"
                  size="sm"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border-2 border-emerald-400">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                    Step {currentStep + 1} / {steps.length}
                  </span>
                </div>
                
                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1 || isAnimating}
                  variant="outline"
                  size="sm"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Visual Representation - INNOVATIVE ANIMATIONS */}
            <div className="mb-6 p-6 bg-white dark:bg-slate-950 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {listData.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="relative">
                      {/* Ripple effect when visiting */}
                      {currentStepData.current === idx && currentStepData.action === 'visiting' && (
                        <div className="absolute inset-0 rounded-xl border-4 border-emerald-400" style={{ animation: 'rippleEffect 1s ease-out infinite' }}></div>
                      )}
                      
                      {/* Node Box */}
                      <div
                        className={`
                          relative w-20 h-20 rounded-xl flex flex-col items-center justify-center font-bold text-lg border-2 transition-all duration-500
                          ${currentStepData.current === idx
                            ? 'bg-emerald-200 border-emerald-500 text-emerald-900 dark:bg-emerald-800 dark:border-emerald-400 dark:text-emerald-100 scale-110 shadow-2xl node-visit'
                            : 'bg-slate-100 border-slate-300 text-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300'}
                        `}
                      >
                        <div className={currentStepData.current === idx ? 'glow-pulse' : ''}>{val}</div>
                        <div className="text-[10px] opacity-70">Node {idx}</div>
                        
                        {/* Checkmark when counted */}
                        {currentStepData.action === 'increment' && currentStepData.current === idx && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center slide-in">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Animated pointer arrow above current node */}
                      {currentStepData.current === idx && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-bounce">
                          <div className="flex flex-col items-center">
                            <div className="text-2xl">👇</div>
                            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                              Visiting
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {idx < listData.length - 1 && (
                      <div className="flex items-center">
                        <div className={`w-8 h-0.5 transition-all duration-500 ${
                          currentStepData.action === 'moving' && currentStepData.current === idx + 1
                            ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                            : 'bg-emerald-400'
                        }`}></div>
                        <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-t-[4px] border-b-[4px] transition-all duration-500 ${
                          currentStepData.action === 'moving' && currentStepData.current === idx + 1
                            ? 'border-t-emerald-500 border-b-emerald-500'
                            : 'border-t-emerald-400 border-b-emerald-400'
                        }`}></div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-slate-400"></div>
                  <div className={`px-3 py-2 bg-slate-200 dark:bg-slate-800 border border-slate-400 rounded text-xs font-mono ${
                    currentStepData.current === null && currentStepData.action === 'moving' ? 'ring-4 ring-orange-400' : ''
                  }`}>
                    null
                  </div>
                </div>
              </div>

              {/* Current Pointer Badge */}
              {currentStepData.current !== null && (
                <div className="mt-8 text-center slide-in">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-full border-2 border-emerald-500 shadow-lg">
                    <div className="relative">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                      Current → Node {currentStepData.current} (value: {listData[currentStepData.current]})
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Step Description */}
            <div className="p-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                {currentStepData.description}
              </p>
            </div>

            {/* Code Viewer */}
            <div className="mt-6">
              <CodeSnippet
                code={getCodeWithValues(currentStepData)}
                language="javascript"
                showLineNumbers={true}
                highlightLines={[currentStepData.currentLine]}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

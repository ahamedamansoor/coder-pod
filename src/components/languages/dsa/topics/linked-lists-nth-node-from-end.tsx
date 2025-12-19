'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Zap, TrendingUp, Code, ArrowRight, Sparkles
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsNthNodeFromEnd() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // CSS animations for smooth transitions
  const animationStyles = `
    @keyframes pointerPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    @keyframes pointerGlow {
      0%, 100% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.3); }
      50% { box-shadow: 0 0 25px rgba(16, 185, 129, 0.8); }
    }
    @keyframes pointerGlowBlue {
      0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
      50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.8); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes nodeHighlight {
      0% { transform: scale(1); }
      50% { transform: scale(1.12); }
      100% { transform: scale(1.1); }
    }
    .pointer-animate {
      animation: pointerPulse 1.5s ease-in-out infinite;
    }
    .pointer-glow-green {
      animation: pointerGlow 2s ease-in-out infinite;
    }
    .pointer-glow-blue {
      animation: pointerGlowBlue 2s ease-in-out infinite;
    }
    .slide-in {
      animation: slideIn 0.5s ease-out;
    }
    .node-highlight {
      animation: nodeHighlight 0.6s ease-out;
    }
  `;

  // Find 2nd node from end (n=2) - Steps array with atomic operations (30+ steps)
  const n = 2;
  const steps = [
    {
      step: 1,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: null,
      second: null,
      highlightFirst: -1,
      highlightSecond: -1,
      currentLine: 1,
      n: 2,
      description: '📋 Initialize: Linked list: 1 → 2 → 3 → 4 → 5 → null. Goal: Find 2nd node from end (node 4).',
      action: 'init'
    },
    {
      step: 2,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: null,
      second: null,
      highlightFirst: -1,
      highlightSecond: -1,
      currentLine: 2,
      n: 2,
      description: '✅ Edge Case Check: Is head null? No, list exists. Is n valid? YES (n=2).',
      action: 'check'
    },
    {
      step: 3,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 0,
      second: null,
      highlightFirst: 0,
      highlightSecond: -1,
      currentLine: 4,
      n: 2,
      description: '🎯 Initialize First: Set first = head (node 1). First pointer will move n steps ahead.',
      action: 'init-first'
    },
    {
      step: 4,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 0,
      second: 0,
      highlightFirst: 0,
      highlightSecond: 0,
      currentLine: 5,
      n: 2,
      description: '🎯 Initialize Second: Set second = head (node 1). Second will stay here until first moves n steps.',
      action: 'init-second'
    },
    {
      step: 5,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 0,
      second: 0,
      highlightFirst: 0,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '🔄 Phase 1: Move first pointer n(2) steps ahead. Starting loop...',
      action: 'phase1-start'
    },
    {
      step: 6,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 0,
      second: 0,
      highlightFirst: 0,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '🔄 Loop Check: Steps taken = 0. Is 0 < n(2)? YES! Continue moving first pointer.',
      action: 'loop-check'
    },
    {
      step: 7,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 1,
      second: 0,
      highlightFirst: 1,
      highlightSecond: 0,
      currentLine: 8,
      n: 2,
      description: '➡️ Move First: first = first.next. First moves from node 1 → node 2 (step 1/2).',
      action: 'move-first'
    },
    {
      step: 8,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 1,
      second: 0,
      highlightFirst: 1,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '📊 Status: First at node 2, Second at node 1. Gap = 1 node.',
      action: 'status'
    },
    {
      step: 9,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 1,
      second: 0,
      highlightFirst: 1,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '🔄 Loop Check: Steps taken = 1. Is 1 < n(2)? YES! Continue moving first pointer.',
      action: 'loop-check'
    },
    {
      step: 10,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 2,
      second: 0,
      highlightFirst: 2,
      highlightSecond: 0,
      currentLine: 8,
      n: 2,
      description: '➡️ Move First: first = first.next. First moves from node 2 → node 3 (step 2/2).',
      action: 'move-first'
    },
    {
      step: 11,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 2,
      second: 0,
      highlightFirst: 2,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '📊 Status: First at node 3, Second at node 1. Gap = 2 nodes (n steps complete!).',
      action: 'status'
    },
    {
      step: 12,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 2,
      second: 0,
      highlightFirst: 2,
      highlightSecond: 0,
      currentLine: 7,
      n: 2,
      description: '❌ Loop Check: Steps taken = 2. Is 2 < n(2)? NO! Exit loop. Gap established!',
      action: 'loop-exit'
    },
    {
      step: 13,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 2,
      second: 0,
      highlightFirst: 2,
      highlightSecond: 0,
      currentLine: 11,
      n: 2,
      description: '🔄 Phase 2: Now move BOTH pointers together until first reaches end.',
      action: 'phase2-start'
    },
    {
      step: 14,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 2,
      second: 0,
      highlightFirst: 2,
      highlightSecond: 0,
      currentLine: 11,
      n: 2,
      description: '🔄 Loop Check: Is first.next (node 4) not null? YES! Continue moving both pointers.',
      action: 'loop-check'
    },
    {
      step: 15,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 3,
      second: 0,
      highlightFirst: 3,
      highlightSecond: 0,
      currentLine: 12,
      n: 2,
      description: '➡️ Move First: first = first.next. First moves from node 3 → node 4.',
      action: 'move-first'
    },
    {
      step: 16,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 3,
      second: 1,
      highlightFirst: 3,
      highlightSecond: 1,
      currentLine: 13,
      n: 2,
      description: '➡️ Move Second: second = second.next. Second moves from node 1 → node 2.',
      action: 'move-second'
    },
    {
      step: 17,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 3,
      second: 1,
      highlightFirst: 3,
      highlightSecond: 1,
      currentLine: 11,
      n: 2,
      description: '📊 Status: First at node 4, Second at node 2. Gap maintained = 2 nodes.',
      action: 'status'
    },
    {
      step: 18,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 3,
      second: 1,
      highlightFirst: 3,
      highlightSecond: 1,
      currentLine: 11,
      n: 2,
      description: '🔄 Loop Check: Is first.next (node 5) not null? YES! Continue moving both pointers.',
      action: 'loop-check'
    },
    {
      step: 19,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 4,
      second: 1,
      highlightFirst: 4,
      highlightSecond: 1,
      currentLine: 12,
      n: 2,
      description: '➡️ Move First: first = first.next. First moves from node 4 → node 5 (last node).',
      action: 'move-first'
    },
    {
      step: 20,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 4,
      second: 2,
      highlightFirst: 4,
      highlightSecond: 2,
      currentLine: 13,
      n: 2,
      description: '➡️ Move Second: second = second.next. Second moves from node 2 → node 3.',
      action: 'move-second'
    },
    {
      step: 21,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 4,
      second: 2,
      highlightFirst: 4,
      highlightSecond: 2,
      currentLine: 11,
      n: 2,
      description: '📊 Status: First at node 5 (end), Second at node 3. Gap maintained = 2 nodes.',
      action: 'status'
    },
    {
      step: 22,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 4,
      second: 2,
      highlightFirst: 4,
      highlightSecond: 2,
      currentLine: 11,
      n: 2,
      description: '❌ Loop Check: Is first.next (null) not null? NO! First at last node, exit loop.',
      action: 'loop-exit'
    },
    {
      step: 23,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: 4,
      second: 2,
      highlightFirst: -1,
      highlightSecond: 2,
      currentLine: 16,
      n: 2,
      description: '🎯 Found! Second pointer is now at 2nd node from end (node 3, value 3).',
      action: 'found'
    },
    {
      step: 24,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: null,
      second: 2,
      highlightFirst: -1,
      highlightSecond: 2,
      currentLine: 16,
      n: 2,
      description: '✅ Return: Return second (node with value 3). Algorithm complete!',
      action: 'return'
    },
    {
      step: 25,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      first: null,
      second: 2,
      highlightFirst: -1,
      highlightSecond: 2,
      currentLine: 17,
      n: 2,
      description: '🎉 Complete! 2nd node from end found: value = 3. Time: O(n), Space: O(1).',
      action: 'done'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const firstVal = stepData.first !== null ? `node${stepData.first + 1}` : 'null';
    const secondVal = stepData.second !== null ? `node${stepData.second + 1}` : 'null';
    const gap = stepData.first !== null && stepData.second !== null ? Math.abs(stepData.first - stepData.second) : 0;
    
    return [
      { line: 1, code: 'function findNthFromEnd(head, n) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (!head) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? 'head exists ✓' : '' },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  let first = head;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `first: ${firstVal}` : '' },
      { line: 5, code: '  let second = head;', active: stepData.currentLine === 5, indent: 1, values: stepData.step >= 5 ? `second: ${secondVal}` : '' },
      { line: 6, code: '  ', active: false, indent: 1 },
      { line: 7, code: '  // Move first n steps ahead', active: stepData.currentLine === 7, indent: 1, values: stepData.step >= 7 ? `target: ${stepData.n}th from end` : '' },
      { line: 8, code: '  for (let i = 0; i < n; i++) {', active: stepData.currentLine === 8, indent: 1, values: stepData.currentLine === 8 ? `first: ${firstVal}, gap: ${gap}` : '' },
      { line: 9, code: '    first = first.next;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `move to ${firstVal}` : '' },
      { line: 10, code: '  }', active: stepData.currentLine === 10, indent: 1, values: stepData.currentLine === 10 ? `gap created: ${gap} nodes` : '' },
      { line: 11, code: '  ', active: false, indent: 1 },
      { line: 12, code: '  // Move both until first reaches end', active: stepData.currentLine === 11, indent: 1, values: stepData.currentLine === 11 ? '← phase 2' : '' },
      { line: 13, code: '  while (first.next !== null) {', active: stepData.currentLine === 11, indent: 1, values: stepData.currentLine === 11 ? (stepData.first !== null && stepData.list[stepData.first].next !== null ? `✓ continue: first=${firstVal}` : '✗ exit loop') : '' },
      { line: 14, code: '    first = first.next;', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? `first: ${firstVal}` : '' },
      { line: 15, code: '    second = second.next;', active: stepData.currentLine === 13, indent: 2, values: stepData.currentLine === 13 ? `second: ${secondVal}` : '' },
      { line: 16, code: '  }', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 ? `gap maintained: ${gap}` : '' },
      { line: 17, code: '  ', active: false, indent: 1 },
      { line: 18, code: '  return second;', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 && stepData.second !== null ? `✓ ${stepData.n}th from end: ${secondVal} (value ${stepData.list[stepData.second].value})` : '' },
      { line: 19, code: '}', active: stepData.currentLine === 17, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2500 : animationSpeed === 'fast' ? 1000 : 1800;

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      }, index * speedDelay);
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsAnimating(false);
    setCurrentStep(0);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader
        icon={Target}
        category="DSA · Linked Lists"
        title="Nth Node from End"
        description="Learn to find the Nth node from the end using the two-pointer technique with gap maintenance"
        colorTheme="purple"
      />
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Two Pointers', 'Time: O(n)', 'Space: O(1)', 'Optimal'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* Problem Statement */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down how to find Nth node from end</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is the Nth Node from End?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Given a linked list and a number <strong>n</strong>, find the node that is <strong>n positions from the end</strong> of the list. 
              For example, the 2nd node from the end means the node that has exactly 1 node after it.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-500">
                <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  EXAMPLE 1 (n=2)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5</div>
                  <div className="text-purple-600 dark:text-purple-400 font-semibold">2nd from end: Node(4)</div>
                  <div className="text-xs text-slate-500 mt-2">Counting from end: 5(1st), 4(2nd) ✓</div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-500">
                <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  EXAMPLE 2 (n=1)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5</div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">1st from end: Node(5)</div>
                  <div className="text-xs text-slate-500 mt-2">Last node in the list</div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Two-Pointer Technique with Gap Maintenance
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Phase 1: Create Gap of n Nodes</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    first = head, second = head<br/>
                    Move first pointer n steps ahead<br/>
                    Gap between pointers = n nodes
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Phase 2: Move Both Together</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    while (first.next !== null)<br/>
                    &nbsp;&nbsp;first = first.next<br/>
                    &nbsp;&nbsp;second = second.next
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">When First Reaches End</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs">
                    When <code className="bg-emerald-100 dark:bg-emerald-900 px-1 rounded">first</code> reaches the last node, 
                    the <code className="bg-emerald-100 dark:bg-emerald-900 px-1 rounded">second</code> pointer will be exactly n nodes from the end! 🎯
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>💡 Why This Works</AlertTitle>
            <AlertDescription className="space-y-2 text-sm">
              <p>By maintaining a <strong>gap of n nodes</strong> between the two pointers, when the first pointer reaches the end, 
              the second pointer is automatically positioned n nodes from the end!</p>
              <p className="text-orange-700 dark:text-orange-300 font-semibold mt-2">
                ⏱️ Time: O(n) - Single pass &nbsp;|&nbsp; 💾 Space: O(1) - Only two pointers!
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch the two-pointer technique with gap maintenance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Code Viewer */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findNthFromEnd.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code Lines */}
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">
                          // {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              {/* Footer with Variables */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">first:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {currentStepData.first !== null ? `node ${currentStepData.first + 1}` : 'null'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">second:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {currentStepData.second !== null ? `node ${currentStepData.second + 1}` : 'null'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">n:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.n}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
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
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'check' && '✅ Checking'}
                      {currentStepData.action === 'init-first' && '🎯 Initialize First Pointer'}
                      {currentStepData.action === 'init-second' && '🎯 Initialize Second Pointer'}
                      {currentStepData.action === 'phase1-start' && '🔄 Phase 1: Create Gap'}
                      {currentStepData.action === 'phase2-start' && '🔄 Phase 2: Move Together'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'move-first' && '➡️ Moving First'}
                      {currentStepData.action === 'move-second' && '➡️ Moving Second'}
                      {currentStepData.action === 'status' && '📊 Status Update'}
                      {currentStepData.action === 'loop-exit' && '🚪 Exit Loop'}
                      {currentStepData.action === 'found' && '🎯 Found Target'}
                      {currentStepData.action === 'return' && '✅ Return Result'}
                      {currentStepData.action === 'done' && '🎉 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Linked List */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Linked List Visualization:</p>
              </div>
              
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  {/* First Pointer Label (Purple) */}
                  {currentStepData.highlightFirst >= 0 && (
                    <div className="absolute slide-in" style={{ 
                      left: `calc(275px + ${currentStepData.highlightFirst * 148}px)`,
                      top: '-70px',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl mb-1 pointer-animate">🎯</div>
                        <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded border-2 border-purple-500 whitespace-nowrap pointer-glow-blue shadow-lg">
                          FIRST
                        </div>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent mt-2"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Second Pointer Label (Green) */}
                  {currentStepData.highlightSecond >= 0 && (
                    <div className="absolute slide-in" style={{ 
                      left: `calc(275px + ${currentStepData.highlightSecond * 148}px)`,
                      bottom: '-70px',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-gradient-to-t from-emerald-500 to-transparent mb-2"></div>
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/80 px-3 py-1.5 rounded border-2 border-emerald-500 whitespace-nowrap pointer-glow-green shadow-lg">
                          SECOND
                        </div>
                        <div className="text-2xl mt-1 pointer-animate">🎯</div>
                      </div>
                    </div>
                  )}
                  
                  {/* HEAD Label */}
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">
                    HEAD
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  
                  {/* Linked List Nodes */}
                  {currentStepData.list.map((node, index) => {
                    const isFirst = currentStepData.highlightFirst === index;
                    const isSecond = currentStepData.highlightSecond === index;
                    const isHighlighted = isFirst || isSecond;
                    
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`
                          flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500
                          ${isHighlighted 
                            ? isFirst 
                              ? 'border-purple-500 dark:border-purple-400 scale-110 ring-4 ring-purple-200 dark:ring-purple-900 node-highlight shadow-purple-300 dark:shadow-purple-700' 
                              : 'border-emerald-500 dark:border-emerald-400 scale-110 ring-4 ring-emerald-200 dark:ring-emerald-900 node-highlight shadow-emerald-300 dark:shadow-emerald-700'
                            : 'border-slate-300 dark:border-slate-600'
                          }
                        `}>
                          <div className={`
                            px-5 py-3 border-r-2 transition-colors
                            ${isHighlighted
                              ? isFirst
                                ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 dark:border-purple-400'
                                : 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 dark:border-emerald-400'
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                            }
                          `}>
                            <div className={`
                              text-2xl font-bold transition-colors
                              ${isHighlighted
                                ? isFirst
                                  ? 'text-purple-900 dark:text-purple-100'
                                  : 'text-emerald-900 dark:text-emerald-100'
                                : 'text-slate-700 dark:text-slate-300'
                              }
                            `}>
                              {node.value}
                            </div>
                          </div>
                          <div className={`
                            px-4 py-3 flex items-center transition-colors
                            ${isHighlighted
                              ? isFirst
                                ? 'bg-purple-200 dark:bg-purple-800'
                                : 'bg-emerald-200 dark:bg-emerald-800'
                              : 'bg-slate-100 dark:bg-slate-700'
                            }
                          `}>
                            {node.next === null ? (
                              <span className="text-sm font-mono text-red-600 dark:text-red-400 font-bold">✗</span>
                            ) : (
                              <ArrowRight className={`
                                w-5 h-5 transition-colors
                                ${isHighlighted
                                  ? isFirst
                                    ? 'text-purple-900 dark:text-purple-100'
                                    : 'text-emerald-900 dark:text-emerald-100'
                                  : 'text-slate-500 dark:text-slate-400'
                                }
                              `} />
                            )}
                          </div>
                        </div>
                        {node.next === null && (
                          <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">
                            null
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Progress: {currentStep + 1} / {steps.length}
            </span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Code Implementation */}
      <CodeSnippet
        title="Optimal Solution: Two-Pointer with Gap Maintenance"
        language="javascript"
        code={`// Find Nth Node from End - Two Pointer Technique
function findNthFromEnd(head, n) {
  // Edge case: empty list
  if (!head) return null;
  
  // Initialize both pointers at head
  let first = head;
  let second = head;
  
  // Phase 1: Move first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!first) return null; // n is larger than list length
    first = first.next;
  }
  
  // Phase 2: Move both pointers together until first reaches end
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  
  // Second is now at nth node from end
  return second;
}

// Example usage:
const head = { 
  value: 1, 
  next: { 
    value: 2, 
    next: { 
      value: 3, 
      next: { 
        value: 4, 
        next: { 
          value: 5, 
          next: null 
        } 
      } 
    } 
  } 
};

const nthNode = findNthFromEnd(head, 2);
console.log(nthNode.value); // Output: 4 (2nd node from end)

// Time Complexity: O(n) - Single pass through list
// Space Complexity: O(1) - Only using two pointers
// Works for any value of n!`}
      />

      {/* Key Takeaways */}
      <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <CheckCircle className="h-5 w-5 text-purple-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Two-Phase Approach:</strong> First create gap, then move both together</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Gap Maintenance:</strong> Keep n nodes between the two pointers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Optimal Solution:</strong> O(n) time with O(1) space - single pass only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>When first reaches end</strong>, second is automatically at nth from end!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>Common Pattern:</strong> Used in many linked list problems requiring backward counting</span>
            </li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

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

export default function LinkedListsFindMiddle() {
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

  // Steps array with atomic operations (35 steps for optimal approach)
  const steps = [
    {
      step: 1,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: null,
      fast: null,
      highlightSlow: -1,
      highlightFast: -1,
      currentLine: 1,
      description: '📋 Initialize: Starting with linked list: 1 → 2 → 3 → 4 → 5 → null. Goal: Find middle node.',
      action: 'init'
    },
    {
      step: 2,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: null,
      fast: null,
      highlightSlow: -1,
      highlightFast: -1,
      currentLine: 2,
      description: '✅ Edge Case Check: Is head null? No, list exists. Proceed with algorithm.',
      action: 'check'
    },
    {
      step: 3,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 0,
      fast: null,
      highlightSlow: 0,
      highlightFast: -1,
      currentLine: 4,
      description: '🐢 Initialize Slow: Set slow = head (node 1). Slow pointer will move 1 step at a time.',
      action: 'init-slow'
    },
    {
      step: 4,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 0,
      fast: 0,
      highlightSlow: 0,
      highlightFast: 0,
      currentLine: 5,
      description: '🐇 Initialize Fast: Set fast = head (node 1). Fast pointer will move 2 steps at a time.',
      action: 'init-fast'
    },
    {
      step: 5,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 0,
      fast: 0,
      highlightSlow: 0,
      highlightFast: 0,
      currentLine: 7,
      description: '🔄 Loop Check: Is fast (node 1) not null? YES! Continue iteration.',
      action: 'loop-check'
    },
    {
      step: 6,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 0,
      fast: 0,
      highlightSlow: 0,
      highlightFast: 0,
      currentLine: 7,
      description: '🔄 Loop Check: Is fast.next (node 2) not null? YES! Both conditions satisfied.',
      action: 'loop-check'
    },
    {
      step: 7,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 1,
      fast: 0,
      highlightSlow: 1,
      highlightFast: 0,
      currentLine: 8,
      description: '🐢 Move Slow: slow = slow.next. Slow moves from node 1 → node 2 (1 step forward).',
      action: 'move-slow'
    },
    {
      step: 8,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 1,
      fast: 2,
      highlightSlow: 1,
      highlightFast: 2,
      currentLine: 9,
      description: '🐇 Move Fast: fast = fast.next.next. Fast moves from node 1 → node 3 (2 steps forward).',
      action: 'move-fast'
    },
    {
      step: 9,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 1,
      fast: 2,
      highlightSlow: 1,
      highlightFast: 2,
      currentLine: 7,
      description: '📊 Status: Slow at node 2, Fast at node 3. Fast is moving 2x speed of slow.',
      action: 'status'
    },
    {
      step: 10,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 1,
      fast: 2,
      highlightSlow: 1,
      highlightFast: 2,
      currentLine: 7,
      description: '🔄 Loop Check: Is fast (node 3) not null? YES! Continue iteration.',
      action: 'loop-check'
    },
    {
      step: 11,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 1,
      fast: 2,
      highlightSlow: 1,
      highlightFast: 2,
      currentLine: 7,
      description: '🔄 Loop Check: Is fast.next (node 4) not null? YES! Both conditions satisfied.',
      action: 'loop-check'
    },
    {
      step: 12,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 2,
      highlightSlow: 2,
      highlightFast: 2,
      currentLine: 8,
      description: '🐢 Move Slow: slow = slow.next. Slow moves from node 2 → node 3 (1 step forward).',
      action: 'move-slow'
    },
    {
      step: 13,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 4,
      highlightSlow: 2,
      highlightFast: 4,
      currentLine: 9,
      description: '🐇 Move Fast: fast = fast.next.next. Fast moves from node 3 → node 5 (2 steps forward).',
      action: 'move-fast'
    },
    {
      step: 14,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 4,
      highlightSlow: 2,
      highlightFast: 4,
      currentLine: 7,
      description: '📊 Status: Slow at node 3 (middle!), Fast at node 5 (end). Getting close!',
      action: 'status'
    },
    {
      step: 15,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 4,
      highlightSlow: 2,
      highlightFast: 4,
      currentLine: 7,
      description: '🔄 Loop Check: Is fast (node 5) not null? YES! Fast is at last node.',
      action: 'loop-check'
    },
    {
      step: 16,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 4,
      highlightSlow: 2,
      highlightFast: 4,
      currentLine: 7,
      description: '❌ Loop Check: Is fast.next (null) not null? NO! fast.next is null, exit loop.',
      action: 'loop-exit'
    },
    {
      step: 17,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: 4,
      highlightSlow: 2,
      highlightFast: -1,
      currentLine: 12,
      description: '🎯 Found Middle: Slow pointer is at node 3. This is the middle node!',
      action: 'found'
    },
    {
      step: 18,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: null,
      highlightSlow: 2,
      highlightFast: -1,
      currentLine: 12,
      description: '✅ Return: Return slow (node with value 3). Algorithm complete!',
      action: 'return'
    },
    {
      step: 19,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      slow: 2,
      fast: null,
      highlightSlow: 2,
      highlightFast: -1,
      currentLine: 13,
      description: '🎉 Complete! Middle node found: value = 3. Time: O(n/2) ≈ O(n), Space: O(1).',
      action: 'done'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const slowVal = stepData.slow !== null ? `node${stepData.slow + 1}` : 'null';
    const fastVal = stepData.fast !== null ? `node${stepData.fast + 1}` : 'null';
    const slowSpeed = stepData.slow !== null ? '1 step' : '';
    const fastSpeed = stepData.fast !== null ? '2 steps' : '';
    
    return [
      { line: 1, code: 'function findMiddle(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (!head) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? 'head exists ✓' : '' },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  let slow = head;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `slow: ${slowVal} (${slowSpeed})` : '' },
      { line: 5, code: '  let fast = head;', active: stepData.currentLine === 5, indent: 1, values: stepData.step >= 5 ? `fast: ${fastVal} (${fastSpeed})` : '' },
      { line: 6, code: '  ', active: false, indent: 1 },
      { line: 7, code: '  while (fast && fast.next) {', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? (stepData.fast !== null && stepData.list[stepData.fast].next !== null ? `✓ continue: slow=${slowVal}, fast=${fastVal}` : '✗ exit, middle found') : '' },
      { line: 8, code: '    slow = slow.next;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `slow moves 1: ${slowVal}` : '' },
      { line: 9, code: '    fast = fast.next.next;', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `fast moves 2: ${fastVal}` : '' },
      { line: 10, code: '  }', active: stepData.currentLine === 10, indent: 1, values: stepData.currentLine === 10 ? `loop complete at slow=${slowVal}` : '' },
      { line: 11, code: '  ', active: false, indent: 1 },
      { line: 12, code: '  return slow;', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 && stepData.slow !== null ? `✓ middle: ${slowVal} (value ${stepData.list[stepData.slow].value})` : '' },
      { line: 13, code: '}', active: stepData.currentLine === 13, indent: 0 },
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
        title="Find Middle of Linked List"
        description="Learn to find the middle node using the slow-fast pointer technique (tortoise and hare algorithm)"
        colorTheme="blue"
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
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is the Middle Node?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Given a linked list, the <strong>middle node</strong> is the node at position ⌊n/2⌋ where n is the total number of nodes. 
              If there are two middle nodes (even length), we return the <strong>second middle node</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-500">
                <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  ODD LENGTH (5 nodes)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5</div>
                  <div className="text-green-600 dark:text-green-400 font-semibold">Middle: Node(3) at index 2</div>
                  <div className="text-xs text-slate-500 mt-2">⌊5/2⌋ = 2</div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-500">
                <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  EVEN LENGTH (6 nodes)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5 → 6</div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">Middle: Node(4) at index 3</div>
                  <div className="text-xs text-slate-500 mt-2">⌊6/2⌋ = 3 (second middle)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Slow-Fast Pointer Technique (Tortoise & Hare)
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Both Pointers at Head</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    slow = head  🐢<br/>
                    fast = head  🐇
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Move at Different Speeds</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    slow moves 1 step: slow = slow.next  🐢<br/>
                    fast moves 2 steps: fast = fast.next.next  🐇🐇
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">When Fast Reaches End, Slow is at Middle</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs">
                    When <code className="bg-emerald-100 dark:bg-emerald-900 px-1 rounded">fast.next = null</code>, 
                    the slow pointer will be exactly at the middle node! 🎯
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>💡 Why This Works</AlertTitle>
            <AlertDescription className="space-y-2 text-sm">
              <p>Since fast moves at <strong>2x speed</strong> of slow, when fast reaches the end (after traveling <strong>n steps</strong>), 
              slow will have traveled <strong>n/2 steps</strong> - exactly the middle position!</p>
              <p className="text-orange-700 dark:text-orange-300 font-semibold mt-2">
                ⏱️ Time: O(n/2) ≈ O(n) &nbsp;|&nbsp; 💾 Space: O(1) - Only two pointers!
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch the slow-fast pointer technique in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findMiddle.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code Lines */}
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto max-h-96 overflow-y-auto">
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
                      <span className="text-slate-500 dark:text-slate-400">slow:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {currentStepData.slow !== null ? `node ${currentStepData.slow + 1}` : 'null'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">fast:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {currentStepData.fast !== null ? `node ${currentStepData.fast + 1}` : 'null'}
                      </span>
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
                      {currentStepData.action === 'init-slow' && '🐢 Initialize Slow'}
                      {currentStepData.action === 'init-fast' && '🐇 Initialize Fast'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'move-slow' && '🐢 Moving Slow'}
                      {currentStepData.action === 'move-fast' && '🐇 Moving Fast'}
                      {currentStepData.action === 'status' && '📊 Status Update'}
                      {currentStepData.action === 'loop-exit' && '🚪 Exit Loop'}
                      {currentStepData.action === 'found' && '🎯 Found Middle'}
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
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Linked List Visualization:</p>
              </div>
              
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  {/* Slow Pointer Label */}
                  {currentStepData.highlightSlow >= 0 && (
                    <div className="absolute slide-in" style={{ 
                      left: `calc(275px + ${currentStepData.highlightSlow * 148}px)`,
                      top: '-70px',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl mb-1 pointer-animate">🐢</div>
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/80 px-3 py-1.5 rounded border-2 border-emerald-500 whitespace-nowrap pointer-glow-green shadow-lg">
                          SLOW
                        </div>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-transparent mt-2"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Fast Pointer Label */}
                  {currentStepData.highlightFast >= 0 && (
                    <div className="absolute slide-in" style={{ 
                      left: `calc(275px + ${currentStepData.highlightFast * 148}px)`,
                      bottom: '-70px',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-gradient-to-t from-blue-500 to-transparent mb-2"></div>
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap pointer-glow-blue shadow-lg">
                          FAST
                        </div>
                        <div className="text-2xl mt-1 pointer-animate">🐇</div>
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
                    const isSlow = currentStepData.highlightSlow === index;
                    const isFast = currentStepData.highlightFast === index;
                    const isHighlighted = isSlow || isFast;
                    
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`
                          flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500
                          ${isHighlighted 
                            ? isSlow 
                              ? 'border-emerald-500 dark:border-emerald-400 scale-110 ring-4 ring-emerald-200 dark:ring-emerald-900 node-highlight shadow-emerald-300 dark:shadow-emerald-700' 
                              : 'border-blue-500 dark:border-blue-400 scale-110 ring-4 ring-blue-200 dark:ring-blue-900 node-highlight shadow-blue-300 dark:shadow-blue-700'
                            : 'border-slate-300 dark:border-slate-600'
                          }
                        `}>
                          <div className={`
                            px-5 py-3 border-r-2 transition-colors
                            ${isHighlighted
                              ? isSlow
                                ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 dark:border-emerald-400'
                                : 'bg-blue-100 dark:bg-blue-900 border-blue-500 dark:border-blue-400'
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                            }
                          `}>
                            <div className={`
                              text-2xl font-bold transition-colors
                              ${isHighlighted
                                ? isSlow
                                  ? 'text-emerald-900 dark:text-emerald-100'
                                  : 'text-blue-900 dark:text-blue-100'
                                : 'text-slate-700 dark:text-slate-300'
                              }
                            `}>
                              {node.value}
                            </div>
                          </div>
                          <div className={`
                            px-4 py-3 flex items-center transition-colors
                            ${isHighlighted
                              ? isSlow
                                ? 'bg-emerald-200 dark:bg-emerald-800'
                                : 'bg-blue-200 dark:bg-blue-800'
                              : 'bg-slate-100 dark:bg-slate-700'
                            }
                          `}>
                            {node.next === null ? (
                              <span className="text-sm font-mono text-red-600 dark:text-red-400 font-bold">✗</span>
                            ) : (
                              <ArrowRight className={`
                                w-5 h-5 transition-colors
                                ${isHighlighted
                                  ? isSlow
                                    ? 'text-emerald-900 dark:text-emerald-100'
                                    : 'text-blue-900 dark:text-blue-100'
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
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Code Implementation */}
      <CodeSnippet
        title="Optimal Solution: Slow-Fast Pointer Technique"
        language="javascript"
        code={`// Find Middle of Linked List - Slow-Fast Pointer (Tortoise & Hare)
function findMiddle(head) {
  // Edge case: empty list
  if (!head) return null;
  
  // Initialize both pointers at head
  let slow = head;  // 🐢 Moves 1 step at a time
  let fast = head;  // 🐇 Moves 2 steps at a time
  
  // Loop until fast reaches end
  while (fast && fast.next) {
    slow = slow.next;          // Move slow 1 step
    fast = fast.next.next;     // Move fast 2 steps
  }
  
  // When fast reaches end, slow is at middle
  return slow;
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

const middle = findMiddle(head);
console.log(middle.value); // Output: 3

// Time Complexity: O(n/2) ≈ O(n) - Single pass through list
// Space Complexity: O(1) - Only using two pointers
// Works for both odd and even length lists!`}
      />

      {/* Key Takeaways */}
      <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CheckCircle className="h-5 w-5 text-blue-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Two-Pointer Technique:</strong> Slow moves 1 step, fast moves 2 steps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>When fast reaches end</strong>, slow is exactly at the middle!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Optimal Solution:</strong> O(n) time with O(1) space - only 2 pointers needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Works for both</strong> odd and even length lists automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Common Pattern:</strong> Also used in cycle detection and other linked list problems</span>
            </li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Zap, TrendingUp, Code, ArrowRight, Sparkles, Search
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsSearchElement() {
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
      0%, 100% { box-shadow: 0 0 10px rgba(34, 197, 94, 0.3); }
      50% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.8); }
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
    @keyframes foundPulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    .pointer-animate {
      animation: pointerPulse 1.5s ease-in-out infinite;
    }
    .pointer-glow-green {
      animation: pointerGlow 2s ease-in-out infinite;
    }
    .slide-in {
      animation: slideIn 0.5s ease-out;
    }
    .node-highlight {
      animation: nodeHighlight 0.6s ease-out;
    }
    .found-pulse {
      animation: foundPulse 1.5s ease-out infinite;
    }
    .shake-animation {
      animation: shake 0.5s ease-out;
    }
  `;

  // Search for target value 3 in list 1→2→3→4→5 - Steps array with atomic operations (22 steps)
  const target = 3;
  const steps = [
    {
      step: 1,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: null,
      highlightCurrent: -1,
      currentLine: 1,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: null,
      description: '📋 Initialize: Linked list: 1 → 2 → 3 → 4 → 5 → null. Goal: Search for value 3.',
      action: 'init'
    },
    {
      step: 2,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: null,
      highlightCurrent: -1,
      currentLine: 2,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: null,
      description: '✅ Edge Case Check: Is head null? No, list exists. Proceed with search.',
      action: 'check'
    },
    {
      step: 3,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 0,
      highlightCurrent: 0,
      currentLine: 4,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 0,
      description: '🎯 Initialize Current: Set current = head (node 1). Start searching from first node.',
      action: 'init-current'
    },
    {
      step: 4,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 0,
      highlightCurrent: 0,
      currentLine: 5,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 0,
      description: '📊 Initialize Position: Set position = 0. Track index of current node.',
      action: 'init-position'
    },
    {
      step: 5,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 0,
      highlightCurrent: 0,
      currentLine: 7,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 0,
      description: '🔄 Loop Check: Is current (node 1) not null? YES! Continue searching.',
      action: 'loop-check'
    },
    {
      step: 6,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 0,
      highlightCurrent: 0,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: null,
      position: 0,
      description: '🔍 Compare: Check if current.value (1) === target (3)?',
      action: 'comparing'
    },
    {
      step: 7,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 0,
      highlightCurrent: 0,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: 'not-match',
      position: 0,
      description: '❌ Not Match: 1 ≠ 3. This is not the target. Continue searching...',
      action: 'not-match'
    },
    {
      step: 8,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 1,
      highlightCurrent: 1,
      currentLine: 11,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 0,
      description: '➡️ Move Forward: current = current.next. Move from node 1 → node 2.',
      action: 'move'
    },
    {
      step: 9,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 1,
      highlightCurrent: 1,
      currentLine: 12,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 1,
      description: '📊 Update Position: position++ (0 → 1). Now at index 1.',
      action: 'update-position'
    },
    {
      step: 10,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 1,
      highlightCurrent: 1,
      currentLine: 7,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 1,
      description: '🔄 Loop Check: Is current (node 2) not null? YES! Continue searching.',
      action: 'loop-check'
    },
    {
      step: 11,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 1,
      highlightCurrent: 1,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: null,
      position: 1,
      description: '🔍 Compare: Check if current.value (2) === target (3)?',
      action: 'comparing'
    },
    {
      step: 12,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 1,
      highlightCurrent: 1,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: 'not-match',
      position: 1,
      description: '❌ Not Match: 2 ≠ 3. This is not the target. Continue searching...',
      action: 'not-match'
    },
    {
      step: 13,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 11,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 1,
      description: '➡️ Move Forward: current = current.next. Move from node 2 → node 3.',
      action: 'move'
    },
    {
      step: 14,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 12,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 2,
      description: '📊 Update Position: position++ (1 → 2). Now at index 2.',
      action: 'update-position'
    },
    {
      step: 15,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 7,
      target: 3,
      found: false,
      comparing: false,
      comparisonResult: null,
      position: 2,
      description: '🔄 Loop Check: Is current (node 3) not null? YES! Continue searching.',
      action: 'loop-check'
    },
    {
      step: 16,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: null,
      position: 2,
      description: '🔍 Compare: Check if current.value (3) === target (3)?',
      action: 'comparing'
    },
    {
      step: 17,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 8,
      target: 3,
      found: false,
      comparing: true,
      comparisonResult: 'match',
      position: 2,
      description: '✅ MATCH! 3 === 3. Found the target! This is the element we are searching for!',
      action: 'match'
    },
    {
      step: 18,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 9,
      target: 3,
      found: true,
      comparing: false,
      comparisonResult: 'match',
      position: 2,
      description: '🎯 Found! Return position (2). Element found at index 2!',
      action: 'found'
    },
    {
      step: 19,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 15,
      target: 3,
      found: true,
      comparing: false,
      comparisonResult: 'match',
      position: 2,
      description: '✅ Return: Return position = 2. Search successful!',
      action: 'return'
    },
    {
      step: 20,
      list: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: 4 }, { value: 5, next: null }],
      current: 2,
      highlightCurrent: 2,
      currentLine: 16,
      target: 3,
      found: true,
      comparing: false,
      comparisonResult: 'match',
      position: 2,
      description: '🎉 Complete! Element 3 found at position 2. Time: O(n), Space: O(1).',
      action: 'done'
    },
  ];

	  const getCodeWithValues = (stepData: typeof steps[0]) => {
	    const currentVal = stepData.current !== null ? `node${stepData.current + 1}` : 'null';
	    const nodeValue = stepData.current !== null ? stepData.list[stepData.current].value : '';
	    const positionVal = stepData.position !== null ? stepData.position : 0;
	    const checked = steps
	      .slice(0, stepData.step)
	      .filter((s) => s.action === 'not-match' || s.action === 'match').length;
	    
	    return [
	      { line: 1, code: 'function searchElement(head, target) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (!head) return -1;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? 'head exists ✓' : '' },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  let current = head;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `current: ${currentVal}` : '' },
      { line: 5, code: '  let position = 0;', active: stepData.currentLine === 5, indent: 1, values: stepData.step >= 5 ? `position: ${positionVal}, target: ${stepData.target}` : '' },
      { line: 6, code: '  ', active: false, indent: 1 },
      { line: 7, code: '  while (current !== null) {', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? (stepData.current !== null ? `✓ continue: current=${currentVal}, checked=${checked}` : '✗ exit, not found') : '' },
      { line: 8, code: '    if (current.value === target) {', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? (stepData.comparisonResult === 'match' ? `✓ ${nodeValue} === ${stepData.target}` : `✗ ${nodeValue} ≠ ${stepData.target}`) : '' },
      { line: 9, code: '      return position;', active: stepData.currentLine === 9, indent: 3, values: stepData.currentLine === 9 ? `✓ found at position ${positionVal}` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '    current = current.next;', active: stepData.currentLine === 11, indent: 2, values: stepData.currentLine === 11 ? `current: ${currentVal}` : '' },
      { line: 12, code: '    position++;', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? `position: ${positionVal}` : '' },
      { line: 13, code: '  }', active: stepData.currentLine === 13, indent: 1, values: stepData.currentLine === 13 ? `searched ${checked} nodes` : '' },
      { line: 14, code: '  ', active: false, indent: 1 },
      { line: 15, code: '  return -1; // Not found', active: stepData.currentLine === 15, indent: 1, values: stepData.currentLine === 15 ? `✗ ${stepData.target} not in list` : '' },
      { line: 16, code: '}', active: stepData.currentLine === 16, indent: 0 },
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
        icon={Search}
        category="DSA · Linked Lists"
        title="Search for Element"
        description="Learn to search for an element in a linked list using linear traversal"
        colorTheme="emerald"
      />
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Linear Search', 'Time: O(n)', 'Space: O(1)', 'Sequential'].map((badge, index) => (
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
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down how to search for an element</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              What is Element Search?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Given a linked list and a <strong>target value</strong>, search through the list to find if the element exists. 
              Return the <strong>position (index)</strong> if found, otherwise return <strong>-1</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-500">
                <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  FOUND (Target = 3)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5</div>
                  <div className="text-green-600 dark:text-green-400 font-semibold">Result: Found at index 2 ✓</div>
                  <div className="text-xs text-slate-500 mt-2">Element exists in the list</div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-500">
                <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  NOT FOUND (Target = 7)
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">List: 1 → 2 → 3 → 4 → 5</div>
                  <div className="text-red-600 dark:text-red-400 font-semibold">Result: -1 (not found) ✗</div>
                  <div className="text-xs text-slate-500 mt-2">Element doesn't exist</div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Linear Search Algorithm
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Start from Head</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    current = head<br/>
                    position = 0
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Compare Each Node</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    if (current.value === target)<br/>
                    &nbsp;&nbsp;return position // Found!
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Move to Next Node</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border font-mono text-xs">
                    current = current.next<br/>
                    position++
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Repeat Until End</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs">
                    If we reach <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">null</code> without finding, 
                    return <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">-1</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>💡 Key Insight</AlertTitle>
            <AlertDescription className="space-y-2 text-sm">
              <p>Linear search checks <strong>each node sequentially</strong> until we find the target or reach the end. 
              In the worst case, we may need to check <strong>all n nodes</strong>.</p>
              <p className="text-orange-700 dark:text-orange-300 font-semibold mt-2">
                ⏱️ Best: O(1) - Found at first node &nbsp;|&nbsp; Worst: O(n) - Found at last node or not found
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Play className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch the linear search in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
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
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">searchElement.js</span>
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
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">
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
                      <span className="text-slate-500 dark:text-slate-400">current:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {currentStepData.current !== null ? `node ${currentStepData.current + 1} (${currentStepData.list[currentStepData.current].value})` : 'null'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">target:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.target}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">position:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {currentStepData.position !== null ? currentStepData.position : 'null'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-sm ${
              currentStepData.found 
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : currentStepData.comparisonResult === 'not-match'
                ? 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-300 dark:border-red-700'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    currentStepData.found 
                      ? 'bg-green-600'
                      : currentStepData.comparisonResult === 'not-match'
                      ? 'bg-red-600'
                      : 'bg-blue-600'
                  }`}>
                    {currentStepData.found ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : currentStepData.comparing ? (
                      <Search className="w-6 h-6 text-white" />
                    ) : (
                      <Target className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${
                      currentStepData.found 
                        ? 'text-green-700 dark:text-green-400'
                        : currentStepData.comparisonResult === 'not-match'
                        ? 'text-red-700 dark:text-red-400'
                        : 'text-blue-700 dark:text-blue-400'
                    }`}>
                      Step {currentStepData.step} of {steps.length}
                    </div>
                    <div className={`text-sm font-medium mt-0.5 ${
                      currentStepData.found 
                        ? 'text-green-900 dark:text-green-100'
                        : currentStepData.comparisonResult === 'not-match'
                        ? 'text-red-900 dark:text-red-100'
                        : 'text-blue-900 dark:text-blue-100'
                    }`}>
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'check' && '✅ Edge Case Check'}
                      {currentStepData.action === 'init-current' && '🎯 Initialize Current'}
                      {currentStepData.action === 'init-position' && '📊 Initialize Position'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'comparing' && '🔍 Comparing Values'}
                      {currentStepData.action === 'match' && '✅ MATCH FOUND!'}
                      {currentStepData.action === 'not-match' && '❌ Not a Match'}
                      {currentStepData.action === 'move' && '➡️ Moving Forward'}
                      {currentStepData.action === 'update-position' && '📊 Update Position'}
                      {currentStepData.action === 'found' && '🎯 Element Found'}
                      {currentStepData.action === 'return' && '✅ Return Result'}
                      {currentStepData.action === 'done' && '🎉 Search Complete'}
                    </div>
                  </div>
                </div>
                <p className={`text-base leading-relaxed pl-14 ${
                  currentStepData.found 
                    ? 'text-green-900 dark:text-green-50'
                    : currentStepData.comparisonResult === 'not-match'
                    ? 'text-red-900 dark:text-red-50'
                    : 'text-blue-900 dark:text-blue-50'
                }`}>
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Linked List */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Linked List Visualization:</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Target:</span>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded font-mono text-sm font-bold border-2 border-blue-500">
                    {currentStepData.target}
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  {/* Current Pointer Label */}
                  {currentStepData.highlightCurrent >= 0 && (
                    <div className="absolute slide-in" style={{ 
                      left: `calc(275px + ${currentStepData.highlightCurrent * 148}px)`,
                      top: '-70px',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="flex flex-col items-center">
                        <div className="text-2xl mb-1 pointer-animate">
                          {currentStepData.found ? '🎯' : '🔍'}
                        </div>
                        <div className={`text-xs font-bold px-3 py-1.5 rounded border-2 whitespace-nowrap pointer-glow-green shadow-lg ${
                          currentStepData.found
                            ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 border-green-500'
                            : 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/80 border-emerald-500'
                        }`}>
                          CURRENT
                        </div>
                        <div className={`w-0.5 h-8 bg-gradient-to-b to-transparent mt-2 ${
                          currentStepData.found ? 'from-green-500' : 'from-emerald-500'
                        }`}></div>
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
                    const isCurrent = currentStepData.highlightCurrent === index;
                    const isFound = isCurrent && currentStepData.found;
                    const isNotMatch = isCurrent && currentStepData.comparisonResult === 'not-match';
                    
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`
                          flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500
                          ${isFound
                            ? 'border-green-500 dark:border-green-400 scale-110 ring-4 ring-green-200 dark:ring-green-900 found-pulse shadow-green-300 dark:shadow-green-700'
                            : isNotMatch
                            ? 'border-red-500 dark:border-red-400 scale-110 ring-4 ring-red-200 dark:ring-red-900 shake-animation shadow-red-300 dark:shadow-red-700'
                            : isCurrent
                            ? 'border-emerald-500 dark:border-emerald-400 scale-110 ring-4 ring-emerald-200 dark:ring-emerald-900 node-highlight shadow-emerald-300 dark:shadow-emerald-700'
                            : 'border-slate-300 dark:border-slate-600'
                          }
                        `}>
                          <div className={`
                            px-5 py-3 border-r-2 transition-colors
                            ${isFound
                              ? 'bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-400'
                              : isNotMatch
                              ? 'bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-400'
                              : isCurrent
                              ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 dark:border-emerald-400'
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                            }
                          `}>
                            <div className={`
                              text-2xl font-bold transition-colors
                              ${isFound
                                ? 'text-green-900 dark:text-green-100'
                                : isNotMatch
                                ? 'text-red-900 dark:text-red-100'
                                : isCurrent
                                ? 'text-emerald-900 dark:text-emerald-100'
                                : 'text-slate-700 dark:text-slate-300'
                              }
                            `}>
                              {node.value}
                            </div>
                          </div>
                          <div className={`
                            px-4 py-3 flex items-center transition-colors
                            ${isFound
                              ? 'bg-green-200 dark:bg-green-800'
                              : isNotMatch
                              ? 'bg-red-200 dark:bg-red-800'
                              : isCurrent
                              ? 'bg-emerald-200 dark:bg-emerald-800'
                              : 'bg-slate-100 dark:bg-slate-700'
                            }
                          `}>
                            {node.next === null ? (
                              <span className="text-sm font-mono text-red-600 dark:text-red-400 font-bold">✗</span>
                            ) : (
                              <ArrowRight className={`
                                w-5 h-5 transition-colors
                                ${isFound
                                  ? 'text-green-900 dark:text-green-100'
                                  : isNotMatch
                                  ? 'text-red-900 dark:text-red-100'
                                  : isCurrent
                                  ? 'text-emerald-900 dark:text-emerald-100'
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
                className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Code Implementation */}
      <CodeSnippet
        title="Complete Solution: Linear Search in Linked List"
        language="javascript"
        code={`// Search for Element in Linked List - Linear Search
function searchElement(head, target) {
  // Edge case: empty list
  if (!head) return -1;
  
  // Initialize pointer and position counter
  let current = head;
  let position = 0;
  
  // Traverse the list
  while (current !== null) {
    // Check if current node has target value
    if (current.value === target) {
      return position; // Found! Return index
    }
    
    // Move to next node
    current = current.next;
    position++;
  }
  
  // Not found after checking all nodes
  return -1;
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

console.log(searchElement(head, 3)); // Output: 2 (found at index 2)
console.log(searchElement(head, 7)); // Output: -1 (not found)

// Time Complexity: O(n) - May need to check all nodes
// Space Complexity: O(1) - Only using two variables
// Works for any linked list structure!`}
      />

      {/* Key Takeaways */}
      <Alert className="border-emerald-200 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
        <CheckCircle className="h-5 w-5 text-emerald-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Sequential Search:</strong> Check each node one by one until found or end reached</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Return Index:</strong> Return position if found, -1 if not found</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Time Complexity:</strong> O(n) worst case - may need to check all nodes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Space Complexity:</strong> O(1) - only two variables (current, position)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Best Case:</strong> O(1) when element is at first node</span>
            </li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Related LeetCode Problems */}
      <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Related LeetCode Problems
          </CardTitle>
          <CardDescription>Practice searching in linked lists with these problems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a
              href="https://leetcode.com/problems/middle-of-the-linked-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Easy
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    876. Middle of the Linked List
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Find the middle node using search technique
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://leetcode.com/problems/linked-list-cycle/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Easy
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    141. Linked List Cycle
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Detect if a cycle exists in the linked list
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://leetcode.com/problems/linked-list-cycle-ii/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                  Medium
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    142. Linked List Cycle II
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Find where the cycle begins
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://leetcode.com/problems/intersection-of-two-linked-lists/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Easy
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    160. Intersection of Two Linked Lists
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Find the node where two lists intersect
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://leetcode.com/problems/remove-linked-list-elements/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Easy
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    203. Remove Linked List Elements
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Remove all nodes with a specific value
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                  Medium
                </Badge>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    19. Remove Nth Node From End of List
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Find and remove nth node from end
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

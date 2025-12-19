'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, GitMerge, ArrowRight
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsMergeSortedLists() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes pointerBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes nodeAdd {
      0% { opacity: 0; transform: scale(0.5) translateY(-20px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes highlightPulse {
      0%, 100% { box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
      50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .pointer-bounce { animation: pointerBounce 1s ease-in-out infinite; }
    .node-add { animation: nodeAdd 0.5s ease-out; }
    .highlight-pulse { animation: highlightPulse 1.5s ease-in-out infinite; }
    .slide-in { animation: slideIn 0.5s ease-out; }
  `;

  // Merge: list1 = 1→2→4, list2 = 1→3→4 → result = 1→1→2→3→4→4
  const steps = [
    {
      step: 1,
      list1: [{ value: 1, used: false }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [],
      l1: 0,
      l2: 0,
      highlightL1: -1,
      highlightL2: -1,
      currentLine: 1,
      description: '📋 Initialize: Two sorted lists - list1: 1→2→4, list2: 1→3→4. Goal: Merge into one sorted list.',
      action: 'init'
    },
    {
      step: 2,
      list1: [{ value: 1, used: false }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [],
      l1: 0,
      l2: 0,
      highlightL1: -1,
      highlightL2: -1,
      currentLine: 2,
      description: '🎯 Create Dummy: Create dummy node to simplify edge cases. Result list starts here.',
      action: 'create-dummy'
    },
    {
      step: 3,
      list1: [{ value: 1, used: false }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [],
      l1: 0,
      l2: 0,
      highlightL1: 0,
      highlightL2: 0,
      currentLine: 4,
      description: '🔄 Loop Start: Compare l1 (1) with l2 (1). Both exist, enter merge loop.',
      action: 'loop-start'
    },
    {
      step: 4,
      list1: [{ value: 1, used: false }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [],
      l1: 0,
      l2: 0,
      highlightL1: 0,
      highlightL2: 0,
      currentLine: 5,
      description: '🔍 Compare: l1.value (1) <= l2.value (1)? YES! Choose from list1.',
      action: 'compare-l1-smaller'
    },
    {
      step: 5,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }],
      l1: 0,
      l2: 0,
      highlightL1: 0,
      highlightL2: 0,
      currentLine: 6,
      description: '➕ Add Node: Add 1 from list1 to result. Result: 1→null',
      action: 'add-from-l1'
    },
    {
      step: 6,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }],
      l1: 1,
      l2: 0,
      highlightL1: 1,
      highlightL2: 0,
      currentLine: 7,
      description: '➡️ Move l1: l1 = l1.next. Move to next node in list1 (value 2).',
      action: 'move-l1'
    },
    {
      step: 7,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }],
      l1: 1,
      l2: 0,
      highlightL1: 1,
      highlightL2: 0,
      currentLine: 4,
      description: '🔄 Loop Continue: Both l1 (2) and l2 (1) exist. Continue merging.',
      action: 'loop-continue'
    },
    {
      step: 8,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: false }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }],
      l1: 1,
      l2: 0,
      highlightL1: 1,
      highlightL2: 0,
      currentLine: 5,
      description: '🔍 Compare: l1.value (2) <= l2.value (1)? NO! Choose from list2.',
      action: 'compare-l2-smaller'
    },
    {
      step: 9,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }],
      l1: 1,
      l2: 0,
      highlightL1: 1,
      highlightL2: 0,
      currentLine: 9,
      description: '➕ Add Node: Add 1 from list2 to result. Result: 1→1→null',
      action: 'add-from-l2'
    },
    {
      step: 10,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }],
      l1: 1,
      l2: 1,
      highlightL1: 1,
      highlightL2: 1,
      currentLine: 10,
      description: '➡️ Move l2: l2 = l2.next. Move to next node in list2 (value 3).',
      action: 'move-l2'
    },
    {
      step: 11,
      list1: [{ value: 1, used: true }, { value: 2, used: false }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }],
      l1: 1,
      l2: 1,
      highlightL1: 1,
      highlightL2: 1,
      currentLine: 5,
      description: '🔍 Compare: l1.value (2) <= l2.value (3)? YES! Choose from list1.',
      action: 'compare-l1-smaller'
    },
    {
      step: 12,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }],
      l1: 1,
      l2: 1,
      highlightL1: 1,
      highlightL2: 1,
      currentLine: 6,
      description: '➕ Add Node: Add 2 from list1 to result. Result: 1→1→2→null',
      action: 'add-from-l1'
    },
    {
      step: 13,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }],
      l1: 2,
      l2: 1,
      highlightL1: 2,
      highlightL2: 1,
      currentLine: 7,
      description: '➡️ Move l1: Move to next node in list1 (value 4).',
      action: 'move-l1'
    },
    {
      step: 14,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: false }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }],
      l1: 2,
      l2: 1,
      highlightL1: 2,
      highlightL2: 1,
      currentLine: 5,
      description: '🔍 Compare: l1.value (4) <= l2.value (3)? NO! Choose from list2.',
      action: 'compare-l2-smaller'
    },
    {
      step: 15,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }],
      l1: 2,
      l2: 1,
      highlightL1: 2,
      highlightL2: 1,
      currentLine: 9,
      description: '➕ Add Node: Add 3 from list2 to result. Result: 1→1→2→3→null',
      action: 'add-from-l2'
    },
    {
      step: 16,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }],
      l1: 2,
      l2: 2,
      highlightL1: 2,
      highlightL2: 2,
      currentLine: 10,
      description: '➡️ Move l2: Move to next node in list2 (value 4).',
      action: 'move-l2'
    },
    {
      step: 17,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: false }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }],
      l1: 2,
      l2: 2,
      highlightL1: 2,
      highlightL2: 2,
      currentLine: 5,
      description: '🔍 Compare: l1.value (4) <= l2.value (4)? YES! Choose from list1.',
      action: 'compare-l1-smaller'
    },
    {
      step: 18,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: true }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }, { value: 4, fromList: 1 }],
      l1: 2,
      l2: 2,
      highlightL1: 2,
      highlightL2: 2,
      currentLine: 6,
      description: '➕ Add Node: Add 4 from list1 to result. Result: 1→1→2→3→4→null',
      action: 'add-from-l1'
    },
    {
      step: 19,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: true }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }, { value: 4, fromList: 1 }],
      l1: null,
      l2: 2,
      highlightL1: -1,
      highlightL2: 2,
      currentLine: 7,
      description: '➡️ Move l1: l1 reaches null (end of list1).',
      action: 'l1-exhausted'
    },
    {
      step: 20,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: true }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: false }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }, { value: 4, fromList: 1 }],
      l1: null,
      l2: 2,
      highlightL1: -1,
      highlightL2: 2,
      currentLine: 4,
      description: '🔄 Loop Check: l1 is null. Exit loop. Remaining nodes in list2 need to be appended.',
      action: 'loop-exit'
    },
    {
      step: 21,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: true }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: true }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }, { value: 4, fromList: 1 }, { value: 4, fromList: 2 }],
      l1: null,
      l2: 2,
      highlightL1: -1,
      highlightL2: 2,
      currentLine: 13,
      description: '➕ Append Rest: Append remaining nodes from list2 (value 4). Result: 1→1→2→3→4→4→null',
      action: 'append-remaining'
    },
    {
      step: 22,
      list1: [{ value: 1, used: true }, { value: 2, used: true }, { value: 4, used: true }],
      list2: [{ value: 1, used: true }, { value: 3, used: true }, { value: 4, used: true }],
      result: [{ value: 1, fromList: 1 }, { value: 1, fromList: 2 }, { value: 2, fromList: 1 }, { value: 3, fromList: 2 }, { value: 4, fromList: 1 }, { value: 4, fromList: 2 }],
      l1: null,
      l2: null,
      highlightL1: -1,
      highlightL2: -1,
      currentLine: 15,
      description: '✅ Complete: Both lists fully merged. Return dummy.next as final result!',
      action: 'done'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const l1Val = stepData.l1 !== null ? `index ${stepData.l1}` : 'null';
    const l2Val = stepData.l2 !== null ? `index ${stepData.l2}` : 'null';
    const mergedCount = stepData.result.length;
    
    return [
      { line: 1, code: 'function mergeTwoLists(l1, l2) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let dummy = new ListNode(0);', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? 'dummy head created' : '' },
      { line: 3, code: '  let current = dummy;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? 'current at dummy' : '' },
      { line: 4, code: '  while (l1 !== null && l2 !== null) {', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? (stepData.l1 !== null && stepData.l2 !== null ? `✓ continue: l1=${l1Val}, l2=${l2Val}` : '✗ exit loop') : '' },
      { line: 5, code: '    if (l1.val <= l2.val) {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 ? (stepData.action === 'compare-l1-smaller' ? `✓ l1(${l1Val}) ≤ l2(${l2Val})` : `✗ l2(${l2Val}) < l1(${l1Val})`) : '' },
      { line: 6, code: '      current.next = l1;', active: stepData.currentLine === 6, indent: 3, values: stepData.currentLine === 6 ? `add from l1, merged: ${mergedCount}` : '' },
      { line: 7, code: '      l1 = l1.next;', active: stepData.currentLine === 7, indent: 3, values: stepData.currentLine === 7 ? `l1: ${l1Val}` : '' },
      { line: 8, code: '    } else {', active: stepData.currentLine === 8, indent: 2 },
      { line: 9, code: '      current.next = l2;', active: stepData.currentLine === 9, indent: 3, values: stepData.currentLine === 9 ? `add from l2, merged: ${mergedCount}` : '' },
      { line: 10, code: '      l2 = l2.next;', active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 ? `l2: ${l2Val}` : '' },
      { line: 11, code: '    }', active: false, indent: 2 },
      { line: 12, code: '    current = current.next;', active: false, indent: 2 },
      { line: 13, code: '  }', active: stepData.currentLine === 13, indent: 1 },
      { line: 14, code: '  current.next = l1 || l2;', active: stepData.currentLine === 13 || stepData.currentLine === 14, indent: 1, values: stepData.currentLine === 13 ? `append remaining from ${stepData.l1 !== null ? 'l1' : 'l2'}` : '' },
      { line: 15, code: '  return dummy.next;', active: stepData.currentLine === 15, indent: 1, values: stepData.currentLine === 15 ? `✓ merged ${mergedCount} nodes` : '' },
      { line: 16, code: '}', active: false, indent: 0 }
    ];
  };

  const goToStep = (stepIndex: number) => { setCurrentStep(stepIndex); };
  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedDelay = animationSpeed === 'slow' ? 3000 : animationSpeed === 'fast' ? 500 : 1500;
    steps.forEach((_, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) setTimeout(() => setIsAnimating(false), 2000);
      }, index * speedDelay);
    });
  };
  const handleNext = () => { if (currentStep < steps.length - 1) goToStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 0) goToStep(currentStep - 1); };
  const handleReset = () => { setIsAnimating(false); goToStep(0); };
  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader icon={GitMerge} category="DSA · Linked Lists" title="Merge Two Sorted Lists" description="Combine two sorted linked lists into one sorted list" colorTheme="purple" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Two Pointers', 'Merge Pattern', 'Time: O(n+m)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Two-Pointer Merging', desc: 'Track positions in both lists simultaneously' },
              { title: 'Comparison Logic', desc: 'Choose smaller value at each step' },
              { title: 'Dummy Node Technique', desc: 'Simplify edge cases with dummy head' },
              { title: 'Linear Merge', desc: 'Single pass through both lists' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-purple-600" />The Problem</CardTitle><CardDescription>Understanding the merge process</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Merge two sorted linked lists into one sorted list. The new list should be made by splicing together the nodes of the two input lists, maintaining sorted order.</p>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2"><GitMerge className="w-5 h-5" /> Example</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-purple-300">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">List 1:</p>
                <div className="font-mono text-sm text-center mb-3">1 → 2 → 4</div>
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">List 2:</p>
                <div className="font-mono text-sm text-center">1 → 3 → 4</div>
              </div>
              <div className="flex items-center justify-center"><div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-full"><GitMerge className="w-6 h-6 text-purple-600 dark:text-purple-400" /></div></div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-500">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">Merged Result:</p>
                <div className="font-mono text-sm text-center mb-2">1 → 1 → 2 → 3 → 4 → 4</div>
                <p className="text-xs text-center text-purple-600 dark:text-purple-400">All values in sorted order</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Algorithm Approach</h4>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>1. Dummy Node:</strong> Create a dummy head to simplify edge cases</p>
              <p><strong>2. Two Pointers:</strong> Track current position in both lists (l1, l2)</p>
              <p><strong>3. Compare & Choose:</strong> At each step, pick smaller value and advance that pointer</p>
              <p><strong>4. Append Rest:</strong> When one list exhausts, append remaining nodes from other list</p>
              <p><strong>5. Return:</strong> Return dummy.next as the merged list</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Merge Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how we merge two sorted lists efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-purple-300 dark:border-purple-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">Step {currentStep + 1} / {steps.length}</span>
            </div>
            <Button onClick={handleNext} disabled={currentStep === steps.length - 1 || isAnimating} variant="outline" size="lg">Next<ChevronRight className="w-4 h-4 ml-2" /></Button>
          </div>

          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">mergeTwoLists.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">l1:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.l1 !== null ? `index ${currentStepData.l1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">l2:</span><span className="font-semibold text-pink-600 dark:text-pink-400">{currentStepData.l2 !== null ? `index ${currentStepData.l2}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">merged:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{currentStepData.result.length} nodes</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-purple-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'create-dummy' && '🎯 Create Dummy Node'}
                      {currentStepData.action === 'loop-start' && '🔄 Loop Start'}
                      {currentStepData.action === 'loop-continue' && '🔄 Loop Continue'}
                      {currentStepData.action === 'compare-l1-smaller' && '🔍 List1 Value Smaller'}
                      {currentStepData.action === 'compare-l2-smaller' && '🔍 List2 Value Smaller'}
                      {currentStepData.action === 'add-from-l1' && '➕ Add from List1'}
                      {currentStepData.action === 'add-from-l2' && '➕ Add from List2'}
                      {currentStepData.action === 'move-l1' && '➡️ Move List1 Pointer'}
                      {currentStepData.action === 'move-l2' && '➡️ Move List2 Pointer'}
                      {currentStepData.action === 'l1-exhausted' && '🏁 List1 Exhausted'}
                      {currentStepData.action === 'loop-exit' && '🚪 Exit Loop'}
                      {currentStepData.action === 'append-remaining' && '➕ Append Remaining'}
                      {currentStepData.action === 'done' && '🎉 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-purple-900 dark:text-purple-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6 space-y-6">
              {/* List 1 */}
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-3">List 1:</p>
                <div className="px-6 py-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700 overflow-x-auto">
                  <div className="flex items-center justify-center gap-3 min-w-max">
                    {currentStepData.list1.map((node, index) => {
                      const isHighlighted = currentStepData.highlightL1 === index;
                      return (
                        <div key={index} className="flex items-center gap-3 relative">
                          {isHighlighted && (
                            <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-70px' }}>
                              <div className="flex flex-col items-center slide-in">
                                <div className="text-2xl mb-1 pointer-bounce">👇</div>
                                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">L1</div>
                                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent mt-2"></div>
                              </div>
                            </div>
                          )}
                          <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isHighlighted ? 'border-blue-500 dark:border-blue-400 scale-110 ring-4 ring-blue-200 dark:ring-blue-900 highlight-pulse' : node.used ? 'border-slate-400 dark:border-slate-600 opacity-50' : 'border-slate-300 dark:border-slate-600'}`}>
                            <div className={`px-5 py-3 border-r-2 transition-colors ${isHighlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : node.used ? 'bg-slate-200 dark:bg-slate-700 border-slate-400' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                              <div className={`text-2xl font-bold ${isHighlighted ? 'text-blue-900 dark:text-blue-100' : node.used ? 'text-slate-500 dark:text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                            </div>
                            <div className={`px-4 py-3 flex items-center ${isHighlighted ? 'bg-blue-200 dark:bg-blue-800' : node.used ? 'bg-slate-300 dark:bg-slate-600' : 'bg-slate-100 dark:bg-slate-700'}`}>
                              <ArrowRight className={`w-5 h-5 ${isHighlighted ? 'text-blue-900 dark:text-blue-100' : node.used ? 'text-slate-500 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>
              </div>

              {/* List 2 */}
              <div>
                <p className="text-sm font-medium text-pink-900 dark:text-pink-100 mb-3">List 2:</p>
                <div className="px-6 py-8 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border-2 border-pink-200 dark:border-pink-700 overflow-x-auto">
                  <div className="flex items-center justify-center gap-3 min-w-max">
                    {currentStepData.list2.map((node, index) => {
                      const isHighlighted = currentStepData.highlightL2 === index;
                      return (
                        <div key={index} className="flex items-center gap-3 relative">
                          {isHighlighted && (
                            <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-70px' }}>
                              <div className="flex flex-col items-center slide-in">
                                <div className="text-2xl mb-1 pointer-bounce">👇</div>
                                <div className="text-xs font-bold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/80 px-3 py-1.5 rounded border-2 border-pink-500 whitespace-nowrap shadow-lg">L2</div>
                                <div className="w-0.5 h-8 bg-gradient-to-b from-pink-500 to-transparent mt-2"></div>
                              </div>
                            </div>
                          )}
                          <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isHighlighted ? 'border-pink-500 dark:border-pink-400 scale-110 ring-4 ring-pink-200 dark:ring-pink-900 highlight-pulse' : node.used ? 'border-slate-400 dark:border-slate-600 opacity-50' : 'border-slate-300 dark:border-slate-600'}`}>
                            <div className={`px-5 py-3 border-r-2 transition-colors ${isHighlighted ? 'bg-pink-100 dark:bg-pink-900 border-pink-500' : node.used ? 'bg-slate-200 dark:bg-slate-700 border-slate-400' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                              <div className={`text-2xl font-bold ${isHighlighted ? 'text-pink-900 dark:text-pink-100' : node.used ? 'text-slate-500 dark:text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                            </div>
                            <div className={`px-4 py-3 flex items-center ${isHighlighted ? 'bg-pink-200 dark:bg-pink-800' : node.used ? 'bg-slate-300 dark:bg-slate-600' : 'bg-slate-100 dark:bg-slate-700'}`}>
                              <ArrowRight className={`w-5 h-5 ${isHighlighted ? 'text-pink-900 dark:text-pink-100' : node.used ? 'text-slate-500 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>
              </div>

              {/* Merged Result */}
              <div>
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">Merged Result:</p>
                <div className="px-6 py-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700 overflow-x-auto">
                  <div className="flex items-center justify-center gap-3 min-w-max">
                    {currentStepData.result.length === 0 ? (
                      <div className="text-sm text-slate-500 dark:text-slate-400 italic">Empty (building...)</div>
                    ) : (
                      currentStepData.result.map((node, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`flex border-2 rounded-lg overflow-hidden shadow-md node-add ${node.fromList === 1 ? 'border-blue-400 dark:border-blue-500' : 'border-pink-400 dark:border-pink-500'}`}>
                            <div className={`px-5 py-3 border-r-2 ${node.fromList === 1 ? 'bg-blue-100 dark:bg-blue-900 border-blue-400' : 'bg-pink-100 dark:bg-pink-900 border-pink-400'}`}>
                              <div className={`text-2xl font-bold ${node.fromList === 1 ? 'text-blue-900 dark:text-blue-100' : 'text-pink-900 dark:text-pink-100'}`}>{node.value}</div>
                            </div>
                            <div className={`px-4 py-3 flex items-center ${node.fromList === 1 ? 'bg-blue-200 dark:bg-blue-800' : 'bg-pink-200 dark:bg-pink-800'}`}>
                              <ArrowRight className={`w-5 h-5 ${node.fromList === 1 ? 'text-blue-900 dark:text-blue-100' : 'text-pink-900 dark:text-pink-100'}`} />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress: {currentStep + 1} / {steps.length}</span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <CheckCircle className="h-5 w-5 text-purple-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span><span><strong>Dummy Node Pattern:</strong> Simplifies code by avoiding null checks for head</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span><span><strong>Two Pointers:</strong> Track both lists simultaneously, compare and choose smaller</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span><span><strong>Linear Time:</strong> O(n+m) where n, m are list lengths - visit each node once</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span><span><strong>Append Remaining:</strong> When one list exhausts, directly attach the rest of other list</span></li>
            <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span><span><strong>Space Efficient:</strong> O(1) extra space - reuse existing nodes, no new allocations</span></li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

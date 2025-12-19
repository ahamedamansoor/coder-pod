'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Trash2, Filter
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsRemoveDuplicates() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes fadeOut {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
      100% { opacity: 0; transform: scale(0.5); }
    }
    @keyframes pointerMove {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes highlightNode {
      0% { transform: scale(1); }
      50% { transform: scale(1.12); }
      100% { transform: scale(1.1); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes deleteAnimation {
      0% { opacity: 1; transform: translateX(0) scale(1); }
      50% { opacity: 0.3; transform: translateX(20px) scale(0.8) rotate(10deg); }
      100% { opacity: 0; transform: translateX(40px) scale(0.3) rotate(20deg); }
    }
    .fade-out { animation: fadeOut 0.6s ease-out forwards; }
    .pointer-move { animation: pointerMove 1.2s ease-in-out infinite; }
    .highlight-node { animation: highlightNode 0.6s ease-out; }
    .slide-in { animation: slideIn 0.5s ease-out; }
    .delete-anim { animation: deleteAnimation 0.8s ease-out forwards; }
  `;

  // Remove duplicates: 1 → 1 → 2 → 3 → 3 → null becomes 1 → 2 → 3 → null
  const steps = [
    {
      step: 1,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: null,
      highlightCurrent: -1,
      currentLine: 1,
      description: '📋 Initialize: List has duplicates: 1 → 1 → 2 → 3 → 3 → null. Goal: Remove all duplicates.',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 2,
      description: '🎯 Start: Set current = head (first node with value 1).',
      action: 'init-current'
    },
    {
      step: 3,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 4,
      description: '🔄 Loop Check: Is current (node 1) !== null? YES! Enter removal loop.',
      action: 'loop-check'
    },
    {
      step: 4,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 1, isDeleted: false, isDuplicate: true },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 5,
      description: '🔍 Check Next: current.next.value (1) === current.value (1)? YES! Found duplicate!',
      action: 'compare-duplicate'
    },
    {
      step: 5,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 1, isDeleted: true, isDuplicate: true },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 6,
      description: '🗑️ Delete Duplicate: current.next = current.next.next. Skip duplicate node 1.',
      action: 'delete-node'
    },
    {
      step: 6,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 7,
      description: '📊 Status: Duplicate 1 removed. List now: 1 → 2 → 3 → 3 → null. Continue checking.',
      action: 'status'
    },
    {
      step: 7,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 0,
      highlightCurrent: 0,
      currentLine: 5,
      description: '🔍 Check Next: current.next.value (2) === current.value (1)? NO! Different values.',
      action: 'compare-different'
    },
    {
      step: 8,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 1,
      highlightCurrent: 1,
      currentLine: 9,
      description: '➡️ Move Forward: current = current.next. Move to node 2.',
      action: 'move-next'
    },
    {
      step: 9,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 1,
      highlightCurrent: 1,
      currentLine: 4,
      description: '🔄 Loop Check: Is current (node 2) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 10,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 1,
      highlightCurrent: 1,
      currentLine: 5,
      description: '🔍 Check Next: current.next.value (3) === current.value (2)? NO! Different values.',
      action: 'compare-different'
    },
    {
      step: 11,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 9,
      description: '➡️ Move Forward: current = current.next. Move to node 3.',
      action: 'move-next'
    },
    {
      step: 12,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 4,
      description: '🔄 Loop Check: Is current (node 3) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 13,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: true }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 5,
      description: '🔍 Check Next: current.next.value (3) === current.value (3)? YES! Found duplicate!',
      action: 'compare-duplicate'
    },
    {
      step: 14,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: true, isDuplicate: true }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 6,
      description: '🗑️ Delete Duplicate: current.next = current.next.next. Skip duplicate node 3.',
      action: 'delete-node'
    },
    {
      step: 15,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 7,
      description: '📊 Status: Duplicate 3 removed. List now: 1 → 2 → 3 → null. Continue checking.',
      action: 'status'
    },
    {
      step: 16,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: 2,
      highlightCurrent: 2,
      currentLine: 5,
      description: '🔍 Check Next: current.next is null. No more duplicates to check.',
      action: 'check-null'
    },
    {
      step: 17,
      list: [
        { value: 1, isDeleted: false, isDuplicate: false },
        { value: 2, isDeleted: false, isDuplicate: false },
        { value: 3, isDeleted: false, isDuplicate: false }
      ],
      current: null,
      highlightCurrent: -1,
      currentLine: 11,
      description: '✅ Complete: All duplicates removed! Final list: 1 → 2 → 3 → null.',
      action: 'done'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const currentVal = stepData.current !== null ? `index ${stepData.current}` : 'null';
    const duplicatesRemoved = stepData.list.filter(n => n.isDeleted).length;
    
    return [
      { line: 1, code: 'function deleteDuplicates(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let current = head;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `current: ${currentVal}` : '' },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  while (current !== null && current.next !== null) {', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? (stepData.current !== null ? `✓ continue, current: ${currentVal}` : '✗ exit') : '' },
      { line: 5, code: '    if (current.value === current.next.value) {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 ? (stepData.action === 'compare-duplicate' ? '✓ duplicate found' : stepData.action === 'compare-different' ? '✗ different values' : stepData.action === 'check-null' ? 'next is null' : '') : '' },
      { line: 6, code: '      current.next = current.next.next;', active: stepData.currentLine === 6, indent: 3, values: stepData.currentLine === 6 ? 'skip duplicate node' : '' },
      { line: 7, code: '    } else {', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `removed: ${duplicatesRemoved}` : '' },
      { line: 8, code: '      // Different value, move forward', active: false, indent: 3 },
      { line: 9, code: '      current = current.next;', active: stepData.currentLine === 9, indent: 3, values: stepData.currentLine === 9 ? `current: ${currentVal}` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '  }', active: stepData.currentLine === 11, indent: 1, values: stepData.currentLine === 11 ? `total removed: ${duplicatesRemoved}` : '' },
      { line: 12, code: '  return head;', active: false, indent: 1 },
      { line: 13, code: '}', active: false, indent: 0 }
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
      <PageHeader icon={Filter} category="DSA · Linked Lists" title="Remove Duplicates from Sorted List" description="Eliminate duplicate nodes while preserving the sorted order" colorTheme="green" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['In-Place', 'Single Pass', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Duplicate Detection', desc: 'Compare adjacent nodes in sorted list' },
              { title: 'Pointer Manipulation', desc: 'Skip nodes by adjusting next pointers' },
              { title: 'In-Place Deletion', desc: 'No extra space needed' },
              { title: 'Sorted List Property', desc: 'Leverage sorting for efficiency' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-green-600" />The Problem</CardTitle><CardDescription>Understanding duplicate removal in sorted lists</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the head of a <strong>sorted</strong> linked list, delete all duplicate values such that each element appears only once. Return the modified list, maintaining the sorted order.</p>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2"><Filter className="w-5 h-5" /> Example</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-green-300">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Input (with duplicates):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 1 → 2 → 3 → 3 → null</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Two 1's and two 3's</p>
              </div>
              <div className="flex items-center justify-center"><div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full"><Trash2 className="w-6 h-6 text-green-600 dark:text-green-400" /></div></div>
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-500">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Output (deduplicated):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3 → null</div>
                <p className="text-xs text-center text-emerald-600 dark:text-emerald-400">Each value appears once</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Key Insight</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200"><strong>Sorted Property:</strong> Since the list is sorted, duplicates are always adjacent. We can compare <code>current.value</code> with <code>current.next.value</code>. If equal, skip the next node by setting <code>current.next = current.next.next</code>.</p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30 p-4 rounded-xl border-2 border-orange-300 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">🔍 Algorithm Steps</h4>
            <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <p><strong>1.</strong> Start at head: <code>current = head</code></p>
              <p><strong>2.</strong> While current and current.next exist:</p>
              <p className="pl-4"><strong>a.</strong> If <code>current.value === current.next.value</code>: Delete duplicate</p>
              <p className="pl-4"><strong>b.</strong> Else: Move to next node</p>
              <p><strong>3.</strong> Return modified head</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Duplicate Removal: Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how we detect and remove duplicates in a single pass</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-green-300 dark:border-green-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-green-900 dark:text-green-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-green-600 focus:ring-green-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-300 dark:border-green-700">
              <span className="text-sm font-bold text-green-900 dark:text-green-100">Step {currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">deleteDuplicates.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-green-50 dark:bg-green-900/20 border-l-2 border-green-400 dark:border-green-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-green-600 dark:text-green-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">current:</span><span className="font-semibold text-green-600 dark:text-green-400">{currentStepData.current !== null ? `node ${currentStepData.current + 1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">duplicates removed:</span><span className="font-semibold text-red-600 dark:text-red-400">{currentStepData.list.filter(n => n.isDeleted).length}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'init-current' && '🎯 Initialize Current Pointer'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'compare-duplicate' && '🔍 Duplicate Detected'}
                      {currentStepData.action === 'compare-different' && '🔍 Different Values'}
                      {currentStepData.action === 'delete-node' && '🗑️ Delete Duplicate Node'}
                      {currentStepData.action === 'move-next' && '➡️ Move to Next Node'}
                      {currentStepData.action === 'status' && '📊 Status Update'}
                      {currentStepData.action === 'check-null' && '🔍 Check Next Node'}
                      {currentStepData.action === 'done' && '🎉 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-green-900 dark:text-green-100">Linked List Visualization:</p>
              </div>
              <div className="px-8 py-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  {currentStepData.list.map((node, index) => {
                    const isCurrent = currentStepData.highlightCurrent === index;
                    const isDeleting = node.isDeleted && currentStepData.action === 'delete-node';
                    if (node.isDeleted && currentStepData.action !== 'delete-node') return null;
                    return (
                      <div key={index} className="flex items-center gap-3 relative">
                        {isCurrent && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="text-2xl mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">CURRENT</div>
                              <div className="w-0.5 h-10 bg-gradient-to-b from-green-500 to-transparent mt-2"></div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isDeleting ? 'delete-anim' : ''} ${isCurrent ? 'border-green-500 dark:border-green-400 scale-110 ring-4 ring-green-200 dark:ring-green-900 highlight-node' : node.isDuplicate ? 'border-red-500 dark:border-red-400 scale-105' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-5 py-3 border-r-2 transition-colors ${isCurrent ? 'bg-green-100 dark:bg-green-900 border-green-500' : node.isDuplicate ? 'bg-red-100 dark:bg-red-900 border-red-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-2xl font-bold ${isCurrent ? 'text-green-900 dark:text-green-100' : node.isDuplicate ? 'text-red-900 dark:text-red-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-4 py-3 flex items-center ${isCurrent ? 'bg-green-200 dark:bg-green-800' : node.isDuplicate ? 'bg-red-200 dark:bg-red-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            <svg className={`w-5 h-5 ${isCurrent ? 'text-green-900 dark:text-green-100' : node.isDuplicate ? 'text-red-900 dark:text-red-100' : 'text-slate-500 dark:text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                          </div>
                        </div>
                        {node.isDuplicate && currentStepData.action === 'compare-duplicate' && (
                          <div className="absolute" style={{ right: '-40px', top: '50%', transform: 'translateY(-50%)' }}>
                            <Trash2 className="w-6 h-6 text-red-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress: {currentStep + 1} / {steps.length}</span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-green-200 dark:border-green-700 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span><span><strong>Sorted List Advantage:</strong> Duplicates are always adjacent, simplifying detection</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span><span><strong>In-Place Deletion:</strong> Skip nodes by updating next pointers - no extra space needed</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span><span><strong>Single Pass:</strong> O(n) time - visit each node once</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span><span><strong>Stay on Duplicates:</strong> Don't move current when deleting - check again for consecutive duplicates</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span><span><strong>Edge Cases:</strong> Handle empty list, single node, and all duplicates scenarios</span></li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

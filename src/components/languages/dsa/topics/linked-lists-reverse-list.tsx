'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Zap, TrendingUp, Code, ArrowRight, RefreshCw, ArrowLeftRight
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsReverseList() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes pointerPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
    @keyframes pointerGlowPrev { 0%, 100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.3); } 50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.8); } }
    @keyframes pointerGlowCurrent { 0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); } 50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.8); } }
    @keyframes pointerGlowNext { 0%, 100% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.3); } 50% { box-shadow: 0 0 25px rgba(16, 185, 129, 0.8); } }
    @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes nodeHighlight { 0% { transform: scale(1); } 50% { transform: scale(1.12); } 100% { transform: scale(1.1); } }
    @keyframes arrowFlip { 0% { transform: rotate(0deg); } 100% { transform: rotate(180deg); } }
    .pointer-animate { animation: pointerPulse 1.5s ease-in-out infinite; }
    .pointer-glow-prev { animation: pointerGlowPrev 2s ease-in-out infinite; }
    .pointer-glow-current { animation: pointerGlowCurrent 2s ease-in-out infinite; }
    .pointer-glow-next { animation: pointerGlowNext 2s ease-in-out infinite; }
    .slide-in { animation: slideIn 0.5s ease-out; }
    .node-highlight { animation: nodeHighlight 0.6s ease-out; }
    .arrow-flip { animation: arrowFlip 0.8s ease-in-out; }
  `;

  // Complete steps array with 29 detailed steps
  const steps = [
    { step: 1, list: [{ value: 1, next: 1, reversed: false }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: null, next: null, highlightPrev: -1, highlightCurrent: -1, highlightNext: -1, currentLine: 1, description: '📋 Initialize: Original list: 1 → 2 → 3 → 4 → null. Goal: Reverse to null ← 1 ← 2 ← 3 ← 4.', action: 'init' },
    { step: 2, list: [{ value: 1, next: 1, reversed: false }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: null, next: null, highlightPrev: -1, highlightCurrent: -1, highlightNext: -1, currentLine: 2, description: '🎯 Initialize prev: Set prev = null. This will become the new tail of reversed list.', action: 'init-prev' },
    { step: 3, list: [{ value: 1, next: 1, reversed: false }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: 0, next: null, highlightPrev: -1, highlightCurrent: 0, highlightNext: -1, currentLine: 3, description: '🎯 Initialize current: Set current = head (node 1). Start reversal from first node.', action: 'init-current' },
    { step: 4, list: [{ value: 1, next: 1, reversed: false }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: 0, next: null, highlightPrev: -1, highlightCurrent: 0, highlightNext: -1, currentLine: 5, description: '🔄 Loop Check: Is current (node 1) !== null? YES! Enter reversal loop.', action: 'loop-check' },
    { step: 5, list: [{ value: 1, next: 1, reversed: false }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: 0, next: 1, highlightPrev: -1, highlightCurrent: 0, highlightNext: 1, currentLine: 6, description: '💾 Save Next: next = current.next. Store node 2 before breaking link!', action: 'save-next' },
    { step: 6, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: null, current: 0, next: 1, highlightPrev: -1, highlightCurrent: 0, highlightNext: 1, currentLine: 7, description: '🔄 Reverse Link: current.next = prev. Node 1 now points to null (reversed!)', action: 'reverse-link' },
    { step: 7, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 0, next: 1, highlightPrev: 0, highlightCurrent: 0, highlightNext: 1, currentLine: 8, description: '➡️ Move prev: prev = current. Move prev from null → node 1.', action: 'move-prev' },
    { step: 8, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 1, next: 1, highlightPrev: 0, highlightCurrent: 1, highlightNext: 1, currentLine: 9, description: '➡️ Move current: current = next. Move current from node 1 → node 2.', action: 'move-current' },
    { step: 9, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 1, next: 1, highlightPrev: 0, highlightCurrent: 1, highlightNext: -1, currentLine: 10, description: '📊 Status: Node 1 reversed (1→null). Now at node 2. Continuing...', action: 'status' },
    { step: 10, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 1, next: null, highlightPrev: 0, highlightCurrent: 1, highlightNext: -1, currentLine: 5, description: '🔄 Loop Check: Is current (node 2) !== null? YES! Continue reversal.', action: 'loop-check' },
    { step: 11, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 2, reversed: false }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 1, next: 2, highlightPrev: 0, highlightCurrent: 1, highlightNext: 2, currentLine: 6, description: '💾 Save Next: next = current.next. Store node 3 before reversing!', action: 'save-next' },
    { step: 12, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 0, current: 1, next: 2, highlightPrev: 0, highlightCurrent: 1, highlightNext: 2, currentLine: 7, description: '🔄 Reverse Link: current.next = prev. Node 2 now points to node 1 (reversed!)', action: 'reverse-link' },
    { step: 13, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 1, current: 1, next: 2, highlightPrev: 1, highlightCurrent: 1, highlightNext: 2, currentLine: 8, description: '➡️ Move prev: prev = current. Move prev from node 1 → node 2.', action: 'move-prev' },
    { step: 14, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 1, current: 2, next: 2, highlightPrev: 1, highlightCurrent: 2, highlightNext: 2, currentLine: 9, description: '➡️ Move current: current = next. Move current from node 2 → node 3.', action: 'move-current' },
    { step: 15, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 1, current: 2, next: 2, highlightPrev: 1, highlightCurrent: 2, highlightNext: -1, currentLine: 10, description: '📊 Status: Nodes 1,2 reversed (2→1→null). Now at node 3. Continuing...', action: 'status' },
    { step: 16, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 1, current: 2, next: null, highlightPrev: 1, highlightCurrent: 2, highlightNext: -1, currentLine: 5, description: '🔄 Loop Check: Is current (node 3) !== null? YES! Continue reversal.', action: 'loop-check' },
    { step: 17, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 3, reversed: false }, { value: 4, next: null, reversed: false }], prev: 1, current: 2, next: 3, highlightPrev: 1, highlightCurrent: 2, highlightNext: 3, currentLine: 6, description: '💾 Save Next: next = current.next. Store node 4 before reversing!', action: 'save-next' },
    { step: 18, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 1, current: 2, next: 3, highlightPrev: 1, highlightCurrent: 2, highlightNext: 3, currentLine: 7, description: '🔄 Reverse Link: current.next = prev. Node 3 now points to node 2 (reversed!)', action: 'reverse-link' },
    { step: 19, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 2, current: 2, next: 3, highlightPrev: 2, highlightCurrent: 2, highlightNext: 3, currentLine: 8, description: '➡️ Move prev: prev = current. Move prev from node 2 → node 3.', action: 'move-prev' },
    { step: 20, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 2, current: 3, next: 3, highlightPrev: 2, highlightCurrent: 3, highlightNext: 3, currentLine: 9, description: '➡️ Move current: current = next. Move current from node 3 → node 4.', action: 'move-current' },
    { step: 21, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 2, current: 3, next: 3, highlightPrev: 2, highlightCurrent: 3, highlightNext: -1, currentLine: 10, description: '📊 Status: Nodes 1,2,3 reversed (3→2→1→null). Now at node 4 (last node).', action: 'status' },
    { step: 22, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 2, current: 3, next: null, highlightPrev: 2, highlightCurrent: 3, highlightNext: -1, currentLine: 5, description: '🔄 Loop Check: Is current (node 4) !== null? YES! Last reversal!', action: 'loop-check' },
    { step: 23, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: null, reversed: false }], prev: 2, current: 3, next: null, highlightPrev: 2, highlightCurrent: 3, highlightNext: -1, currentLine: 6, description: '💾 Save Next: next = current.next. Save null (end of original list).', action: 'save-next' },
    { step: 24, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 2, current: 3, next: null, highlightPrev: 2, highlightCurrent: 3, highlightNext: -1, currentLine: 7, description: '🔄 Reverse Link: current.next = prev. Node 4 now points to node 3 (reversed!)', action: 'reverse-link' },
    { step: 25, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 3, current: 3, next: null, highlightPrev: 3, highlightCurrent: 3, highlightNext: -1, currentLine: 8, description: '➡️ Move prev: prev = current. Move prev from node 3 → node 4 (new head!).', action: 'move-prev' },
    { step: 26, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 3, current: null, next: null, highlightPrev: 3, highlightCurrent: -1, highlightNext: -1, currentLine: 9, description: '➡️ Move current: current = next. Move current from node 4 → null (end!).', action: 'move-current' },
    { step: 27, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 3, current: null, next: null, highlightPrev: 3, highlightCurrent: -1, highlightNext: -1, currentLine: 5, description: '🎯 Loop Check: Is current null? YES! All nodes reversed. Exit loop.', action: 'loop-complete' },
    { step: 28, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 3, current: null, next: null, highlightPrev: 3, highlightCurrent: -1, highlightNext: -1, currentLine: 12, description: '✅ Return New Head: return prev (node 4). Node 4 is now the head!', action: 'return' },
    { step: 29, list: [{ value: 1, next: null, reversed: true }, { value: 2, next: 0, reversed: true }, { value: 3, next: 1, reversed: true }, { value: 4, next: 2, reversed: true }], prev: 3, current: null, next: null, highlightPrev: 3, highlightCurrent: -1, highlightNext: -1, currentLine: 13, description: '🎉 Complete! List reversed: 4 → 3 → 2 → 1 → null. Time: O(n), Space: O(1).', action: 'done' }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const prevVal = stepData.prev !== null ? `node ${stepData.prev + 1}` : 'null';
    const currentVal = stepData.current !== null ? `node ${stepData.current + 1}` : 'null';
    const nextVal = stepData.next !== null ? `node ${stepData.next + 1}` : 'null';
    const reversedCount = stepData.list.filter(n => n.reversed).length;
    
    return [
      { line: 1, code: 'function reverseList(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let prev = null;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `prev: ${prevVal}` : '' },
      { line: 3, code: '  let current = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `current: ${currentVal}` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  while (current !== null) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? (stepData.current !== null ? `✓ continue, current: ${currentVal}` : '✗ exit loop') : '' },
      { line: 6, code: '    let next = current.next;', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `next: ${nextVal}` : '' },
      { line: 7, code: '    current.next = prev;', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `reverse: ${currentVal} → ${prevVal}` : '' },
      { line: 8, code: '    prev = current;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `prev: ${prevVal}` : '' },
      { line: 9, code: '    current = next;', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `current: ${currentVal}` : '' },
      { line: 10, code: '  }', active: stepData.currentLine === 10, indent: 1, values: stepData.currentLine === 10 ? `reversed: ${reversedCount} nodes` : '' },
      { line: 11, code: '  ', active: false, indent: 1 },
      { line: 12, code: '  return prev;', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? `✓ new head: ${prevVal}` : '' },
      { line: 13, code: '}', active: stepData.currentLine === 13, indent: 0 }
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
      <PageHeader icon={RefreshCw} category="DSA · Linked Lists" title="Reverse a Linked List" description="Master the in-place reversal technique with three pointers" colorTheme="blue" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['In-Place', 'Three Pointers', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Three-Pointer Technique', desc: 'prev, current, next management' },
              { title: 'In-Place Reversal', desc: 'No extra space needed' },
              { title: 'Link Direction Flipping', desc: 'Reverse arrow directions' },
              { title: 'Classic Interview Pattern', desc: 'Must-know algorithm' }
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
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-blue-600" />The Problem</CardTitle><CardDescription>Understanding linked list reversal</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the head of a singly linked list, reverse the list and return the new head. The reversal must be done <strong>in-place</strong> without using extra space for another list.</p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5" /> Reversal Process</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-blue-300">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-3">Before (Original):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3 → 4 → null</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Head points to node 1</p>
              </div>
              <div className="flex items-center justify-center"><div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full"><RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" /></div></div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">After (Reversed):</p>
                <div className="font-mono text-sm text-center mb-2">null ← 1 ← 2 ← 3 ← 4</div>
                <p className="text-xs text-center text-green-600 dark:text-green-400">Head points to node 4 (new head!)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">🎯 Three-Pointer Approach</h4>
            <div className="space-y-3">
              {[
                { color: 'red', letter: 'P', title: 'prev (Previous Node)', desc: 'Starts at null, becomes new head at end' },
                { color: 'blue', letter: 'C', title: 'current (Current Node)', desc: 'Node we\'re currently reversing' },
                { color: 'green', letter: 'N', title: 'next (Next Node)', desc: 'Temporary storage before breaking link' }
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 bg-${p.color}-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>{p.letter}</div>
                  <div className="flex-1"><p className={`font-semibold text-${p.color}-700 dark:text-${p.color}-300`}>{p.title}</p><p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30 p-4 rounded-xl border-2 border-orange-300 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">💡 Algorithm Steps</h4>
            <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              {['Save next node: next = current.next', 'Reverse link: current.next = prev', 'Move prev forward: prev = current', 'Move current forward: current = next', 'Repeat until current is null', 'Return prev as new head!'].map((step, i) => (
                <p key={i}><strong>{i + 1}.</strong> {step}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Reversal Algorithm: Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how three pointers reverse the list in place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-blue-300 dark:border-blue-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">Step {currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">reverseList.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">prev:</span><span className="font-semibold text-red-600 dark:text-red-400">{currentStepData.prev !== null ? `node ${currentStepData.prev + 1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">current:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.current !== null ? `node ${currentStepData.current + 1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">next:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">{currentStepData.next !== null ? `node ${currentStepData.next + 1}` : 'null'}</span></div>
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
                      {currentStepData.action === 'init-prev' && '🎯 Initialize prev Pointer'}
                      {currentStepData.action === 'init-current' && '🎯 Initialize current Pointer'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'save-next' && '💾 Save Next Node'}
                      {currentStepData.action === 'reverse-link' && '🔄 Reverse Link Direction'}
                      {currentStepData.action === 'move-prev' && '➡️ Move prev Pointer'}
                      {currentStepData.action === 'move-current' && '➡️ Move current Pointer'}
                      {currentStepData.action === 'status' && '📊 Status Update'}
                      {currentStepData.action === 'loop-complete' && '🚪 Loop Complete'}
                      {currentStepData.action === 'return' && '✅ Return New Head'}
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
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Linked List Visualization:</p>
              </div>
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  
                  {/* HEAD Label */}
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">{currentStepData.action === 'done' ? 'NEW HEAD' : 'HEAD'}</div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  {currentStepData.list.map((node, index) => {
                    const isPrev = currentStepData.highlightPrev === index;
                    const isCurrent = currentStepData.highlightCurrent === index;
                    const isNext = currentStepData.highlightNext === index;
                    const isHighlighted = isPrev || isCurrent || isNext;
                    return (
                      <div key={index} className="flex items-center gap-3 relative">
                        {/* Prev pointer above this node */}
                        {isPrev && (
                          <div className="absolute slide-in" style={{ left: '50%', transform: 'translateX(-50%)', top: '-70px' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-2xl mb-1 pointer-animate">🔴</div>
                              <div className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/80 px-3 py-1.5 rounded border-2 border-red-500 whitespace-nowrap pointer-glow-prev shadow-lg">PREV</div>
                              <div className="w-0.5 h-8 bg-gradient-to-b from-red-500 to-transparent mt-2"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Current pointer beside this node */}
                        {isCurrent && (
                          <div className="absolute slide-in" style={{ left: '-120px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                            <div className="flex items-center gap-2">
                              <div className="text-2xl pointer-animate">🔵</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap pointer-glow-current shadow-lg">CURRENT</div>
                            </div>
                          </div>
                        )}
                        
                        {/* Next pointer below this node */}
                        {isNext && (
                          <div className="absolute slide-in" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-70px' }}>
                            <div className="flex flex-col items-center">
                              <div className="w-0.5 h-8 bg-gradient-to-t from-emerald-500 to-transparent mb-2"></div>
                              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/80 px-3 py-1.5 rounded border-2 border-emerald-500 whitespace-nowrap pointer-glow-next shadow-lg">NEXT</div>
                              <div className="text-2xl mt-1 pointer-animate">🟢</div>
                            </div>
                          </div>
                        )}
                        
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isHighlighted ? isPrev ? 'border-red-500 dark:border-red-400 scale-110 ring-4 ring-red-200 dark:ring-red-900 node-highlight shadow-red-300 dark:shadow-red-700' : isCurrent ? 'border-blue-500 dark:border-blue-400 scale-110 ring-4 ring-blue-200 dark:ring-blue-900 node-highlight shadow-blue-300 dark:shadow-blue-700' : 'border-emerald-500 dark:border-emerald-400 scale-110 ring-4 ring-emerald-200 dark:ring-emerald-900 node-highlight shadow-emerald-300 dark:shadow-emerald-700' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-5 py-3 border-r-2 transition-colors ${isHighlighted ? isPrev ? 'bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-400' : isCurrent ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 dark:border-blue-400' : 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 dark:border-emerald-400' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-2xl font-bold transition-colors ${isHighlighted ? isPrev ? 'text-red-900 dark:text-red-100' : isCurrent ? 'text-blue-900 dark:text-blue-100' : 'text-emerald-900 dark:text-emerald-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-4 py-3 flex items-center transition-colors ${isHighlighted ? isPrev ? 'bg-red-200 dark:bg-red-800' : isCurrent ? 'bg-blue-200 dark:bg-blue-800' : 'bg-emerald-200 dark:bg-emerald-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            {node.next === null && !node.reversed ? (<span className="text-sm font-mono text-slate-600 dark:text-slate-400 font-bold">✗</span>) : node.reversed ? (<ArrowRight className={`w-5 h-5 transition-colors ${isHighlighted ? isPrev ? 'text-red-900 dark:text-red-100' : isCurrent ? 'text-blue-900 dark:text-blue-100' : 'text-emerald-900 dark:text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`} style={{ transform: 'rotate(180deg)' }} />) : (<ArrowRight className={`w-5 h-5 transition-colors ${isHighlighted ? isPrev ? 'text-red-900 dark:text-red-100' : isCurrent ? 'text-blue-900 dark:text-blue-100' : 'text-emerald-900 dark:text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`} />)}
                          </div>
                        </div>
                        {node.next === null && !node.reversed && (<div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress: {currentStep + 1} / {steps.length}</span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CheckCircle className="h-5 w-5 text-blue-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span><span><strong>Three-Pointer Pattern:</strong> prev, current, next work together to reverse links</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span><span><strong>Save Before Break:</strong> Always save next before changing current.next</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span><span><strong>In-Place Reversal:</strong> O(n) time with O(1) space - no extra list needed</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span><span><strong>Return prev:</strong> After loop, prev points to the new head!</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span><span><strong>Classic Pattern:</strong> This technique is foundational for many linked list problems</span></li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

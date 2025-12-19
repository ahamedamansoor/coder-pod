'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Shuffle, ArrowRight
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsOddEven() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes pointerPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
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
    @keyframes groupGlow {
      0%, 100% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.3); }
      50% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); }
    }
    .pointer-pulse { animation: pointerPulse 1.2s ease-in-out infinite; }
    .highlight-node { animation: highlightNode 0.6s ease-out; }
    .slide-in { animation: slideIn 0.5s ease-out; }
    .group-glow { animation: groupGlow 2s ease-in-out infinite; }
  `;

  // Odd-Even: 1→2→3→4→5 becomes 1→3→5→2→4
  const steps = [
    {
      step: 1,
      list: [
        { value: 1, isOdd: false, isEven: false, group: 'none' },
        { value: 2, isOdd: false, isEven: false, group: 'none' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: null,
      even: null,
      evenHead: null,
      highlightOdd: -1,
      highlightEven: -1,
      currentLine: 1,
      description: '📋 Initialize: List 1→2→3→4→5. Goal: Group odd indices (1,3,5) before even indices (2,4).',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 1, isOdd: false, isEven: false, group: 'none' },
        { value: 2, isOdd: false, isEven: false, group: 'none' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 0,
      even: null,
      evenHead: null,
      highlightOdd: 0,
      highlightEven: -1,
      currentLine: 2,
      description: '🎯 Initialize odd: odd = head (node 1, index 0 - first odd position).',
      action: 'init-odd'
    },
    {
      step: 3,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: false, group: 'none' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 0,
      even: 1,
      evenHead: null,
      highlightOdd: 0,
      highlightEven: 1,
      currentLine: 3,
      description: '🎯 Initialize even: even = head.next (node 2, index 1 - first even position).',
      action: 'init-even'
    },
    {
      step: 4,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 0,
      even: 1,
      evenHead: 1,
      highlightOdd: 0,
      highlightEven: 1,
      currentLine: 4,
      description: '💾 Save evenHead: evenHead = even (save node 2 to reconnect later).',
      action: 'save-even-head'
    },
    {
      step: 5,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 0,
      even: 1,
      evenHead: 1,
      highlightOdd: 0,
      highlightEven: 1,
      currentLine: 6,
      description: '🔄 Loop Check: Is even (node 2) && even.next (node 3) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 6,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 0,
      even: 1,
      evenHead: 1,
      highlightOdd: 0,
      highlightEven: 1,
      currentLine: 7,
      description: '🔗 Link odd.next: odd.next = even.next. Node 1 points to node 3 (skip even).',
      action: 'link-odd'
    },
    {
      step: 7,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: false, isEven: false, group: 'none' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 2,
      even: 1,
      evenHead: 1,
      highlightOdd: 2,
      highlightEven: 1,
      currentLine: 8,
      description: '➡️ Move odd: odd = odd.next. Move from node 1 to node 3.',
      action: 'move-odd'
    },
    {
      step: 8,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 2,
      even: 1,
      evenHead: 1,
      highlightOdd: 2,
      highlightEven: 1,
      currentLine: 9,
      description: '🔗 Link even.next: even.next = odd.next. Node 2 points to node 4 (skip odd).',
      action: 'link-even'
    },
    {
      step: 9,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: false, group: 'none' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 2,
      even: 3,
      evenHead: 1,
      highlightOdd: 2,
      highlightEven: 3,
      currentLine: 10,
      description: '➡️ Move even: even = even.next. Move from node 2 to node 4.',
      action: 'move-even'
    },
    {
      step: 10,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 2,
      even: 3,
      evenHead: 1,
      highlightOdd: 2,
      highlightEven: 3,
      currentLine: 6,
      description: '🔄 Loop Check: Is even (node 4) && even.next (node 5) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 11,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 2,
      even: 3,
      evenHead: 1,
      highlightOdd: 2,
      highlightEven: 3,
      currentLine: 7,
      description: '🔗 Link odd.next: odd.next = even.next. Node 3 points to node 5 (skip even).',
      action: 'link-odd'
    },
    {
      step: 12,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: false, isEven: false, group: 'none' }
      ],
      odd: 4,
      even: 3,
      evenHead: 1,
      highlightOdd: 4,
      highlightEven: 3,
      currentLine: 8,
      description: '➡️ Move odd: odd = odd.next. Move from node 3 to node 5.',
      action: 'move-odd'
    },
    {
      step: 13,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: true, isEven: false, group: 'odd' }
      ],
      odd: 4,
      even: 3,
      evenHead: 1,
      highlightOdd: 4,
      highlightEven: 3,
      currentLine: 9,
      description: '🔗 Link even.next: even.next = odd.next. Node 4 points to null (end of even group).',
      action: 'link-even'
    },
    {
      step: 14,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: true, isEven: false, group: 'odd' }
      ],
      odd: 4,
      even: null,
      evenHead: 1,
      highlightOdd: 4,
      highlightEven: -1,
      currentLine: 10,
      description: '➡️ Move even: even = even.next. Move from node 4 to null (end).',
      action: 'move-even'
    },
    {
      step: 15,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: true, isEven: false, group: 'odd' }
      ],
      odd: 4,
      even: null,
      evenHead: 1,
      highlightOdd: 4,
      highlightEven: -1,
      currentLine: 6,
      description: '🔄 Loop Check: Is even (null) !== null? NO! Exit loop.',
      action: 'loop-exit'
    },
    {
      step: 16,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: true, isEven: false, group: 'odd' }
      ],
      odd: 4,
      even: null,
      evenHead: 1,
      highlightOdd: 4,
      highlightEven: -1,
      currentLine: 12,
      description: '🔗 Connect Groups: odd.next = evenHead. Node 5 points to node 2 (connect odd and even groups).',
      action: 'connect-groups'
    },
    {
      step: 17,
      list: [
        { value: 1, isOdd: true, isEven: false, group: 'odd' },
        { value: 2, isOdd: false, isEven: true, group: 'even' },
        { value: 3, isOdd: true, isEven: false, group: 'odd' },
        { value: 4, isOdd: false, isEven: true, group: 'even' },
        { value: 5, isOdd: true, isEven: false, group: 'odd' }
      ],
      odd: 4,
      even: null,
      evenHead: 1,
      highlightOdd: -1,
      highlightEven: -1,
      currentLine: 13,
      description: '✅ Complete: Return head. List rearranged: 1→3→5→2→4. Odd indices before even!',
      action: 'done'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const oddVal = stepData.odd !== null ? `node ${stepData.odd + 1}` : 'null';
    const evenVal = stepData.even !== null ? `node ${stepData.even + 1}` : 'null';
    const evenHeadVal = stepData.evenHead !== null ? `node ${stepData.evenHead + 1}` : 'null';
    const oddCount = stepData.list.filter(n => n.group === 'odd').length;
    const evenCount = stepData.list.filter(n => n.group === 'even').length;
    
    return [
      { line: 1, code: 'function oddEvenList(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (!head || !head.next) return head;', active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: '  let odd = head;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `odd: ${oddVal}` : '' },
      { line: 4, code: '  let even = head.next;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `even: ${evenVal}` : '' },
      { line: 5, code: '  let evenHead = even;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `evenHead: ${evenHeadVal}` : '' },
      { line: 6, code: '  ', active: false, indent: 1 },
      { line: 7, code: '  while (even && even.next) {', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? (stepData.even !== null ? `✓ continue: odd=${oddVal}, even=${evenVal}` : '✗ exit loop') : '' },
      { line: 8, code: '    odd.next = even.next;', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `link odd group: ${oddCount}` : '' },
      { line: 9, code: '    odd = odd.next;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `odd: ${oddVal}` : '' },
      { line: 10, code: '    even.next = odd.next;', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `link even group: ${evenCount}` : '' },
      { line: 11, code: '    even = even.next;', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 ? `even: ${evenVal}` : '' },
      { line: 12, code: '  }', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? `groups: odd=${oddCount}, even=${evenCount}` : '' },
      { line: 13, code: '  ', active: false, indent: 1 },
      { line: 14, code: '  odd.next = evenHead;', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? `connect: ${oddVal} → ${evenHeadVal}` : '' },
      { line: 15, code: '  return head;', active: stepData.currentLine === 13, indent: 1, values: stepData.currentLine === 13 ? '✓ rearranged' : '' },
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
      <PageHeader icon={Shuffle} category="DSA · Linked Lists" title="Odd Even Linked List" description="Rearrange nodes: group odd indices before even indices" colorTheme="violet" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Three Pointers', 'Group Rearrange', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Index-Based Grouping', desc: 'Group nodes by odd/even index positions' },
              { title: 'Three-Pointer Technique', desc: 'Use odd, even, and evenHead pointers' },
              { title: 'Link Manipulation', desc: 'Rearrange links without extra space' },
              { title: 'In-Place Rearrangement', desc: 'O(1) space, single pass solution' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-violet-600" />The Problem</CardTitle><CardDescription>Understanding odd-even grouping</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given a linked list, group all nodes at <strong>odd indices</strong> together followed by nodes at <strong>even indices</strong>, and return the rearranged list. Note: The first node is at index 0 (even), second at index 1 (odd), etc.</p>
          
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-700">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-4 flex items-center gap-2"><Shuffle className="w-5 h-5" /> Example</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-violet-300">
                <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-2">Input (original):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3 → 4 → 5</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Indices: 0(even), 1(odd), 2(even), 3(odd), 4(even)</p>
              </div>
              <div className="flex items-center justify-center"><div className="p-3 bg-violet-100 dark:bg-violet-900/40 rounded-full"><Shuffle className="w-6 h-6 text-violet-600 dark:text-violet-400" /></div></div>
              <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-lg border-2 border-violet-500">
                <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">Output (rearranged):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 3 → 5 → 2 → 4</div>
                <p className="text-xs text-center text-violet-600 dark:text-violet-400">Odd indices (1,3,5) first, then even indices (2,4)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Algorithm Approach</h4>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>1. Three Pointers:</strong> odd (tracks odd group), even (tracks even group), evenHead (saves start of even group)</p>
              <p><strong>2. Alternating Links:</strong> odd.next = even.next (skip even), even.next = odd.next (skip odd)</p>
              <p><strong>3. Move Both:</strong> Advance both pointers after each link operation</p>
              <p><strong>4. Connect Groups:</strong> After loop, connect odd group end to evenHead</p>
              <p><strong>5. Return:</strong> Original head (now points to rearranged list)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/40">
              <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Odd-Even Rearrangement: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how we group odd and even indexed nodes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-violet-300 dark:border-violet-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-violet-900 dark:text-violet-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-violet-600 focus:ring-violet-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 rounded-lg border-2 border-violet-300 dark:border-violet-700">
              <span className="text-sm font-bold text-violet-900 dark:text-violet-100">Step {currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">oddEvenList.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-violet-50 dark:bg-violet-900/20 border-l-2 border-violet-400 dark:border-violet-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-violet-600 dark:text-violet-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">odd:</span><span className="font-semibold text-orange-600 dark:text-orange-400">{currentStepData.odd !== null ? `node ${currentStepData.odd + 1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">even:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.even !== null ? `node ${currentStepData.even + 1}` : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">evenHead:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{currentStepData.evenHead !== null ? `node ${currentStepData.evenHead + 1}` : 'null'}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-300 dark:border-violet-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-violet-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-violet-900 dark:text-violet-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'init-odd' && '🎯 Initialize odd Pointer'}
                      {currentStepData.action === 'init-even' && '🎯 Initialize even Pointer'}
                      {currentStepData.action === 'save-even-head' && '💾 Save evenHead'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'link-odd' && '🔗 Link odd Group'}
                      {currentStepData.action === 'move-odd' && '➡️ Move odd Pointer'}
                      {currentStepData.action === 'link-even' && '🔗 Link even Group'}
                      {currentStepData.action === 'move-even' && '➡️ Move even Pointer'}
                      {currentStepData.action === 'loop-exit' && '🚪 Exit Loop'}
                      {currentStepData.action === 'connect-groups' && '🔗 Connect Groups'}
                      {currentStepData.action === 'done' && '🎉 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-violet-900 dark:text-violet-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-violet-900 dark:text-violet-100">List Visualization:</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-orange-400 text-orange-600">Odd: {currentStepData.list.filter(n => n.group === 'odd').length}</Badge>
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">Even: {currentStepData.list.filter(n => n.group === 'even').length}</Badge>
                </div>
              </div>
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  {currentStepData.list.map((node, index) => {
                    const isOdd = currentStepData.highlightOdd === index;
                    const isEven = currentStepData.highlightEven === index;
                    return (
                      <div key={index} className="flex items-center gap-3 relative">
                        {isOdd && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="text-2xl mb-1 pointer-pulse">👆</div>
                              <div className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/80 px-3 py-1.5 rounded border-2 border-orange-500 whitespace-nowrap shadow-lg">ODD</div>
                              <div className="w-0.5 h-10 bg-gradient-to-b from-orange-500 to-transparent mt-2"></div>
                            </div>
                          </div>
                        )}
                        {isEven && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="w-0.5 h-10 bg-gradient-to-t from-blue-500 to-transparent mb-2"></div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">EVEN</div>
                              <div className="text-2xl mt-1 pointer-pulse">👇</div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isOdd || isEven ? 'scale-110 ring-4 ring-violet-200 dark:ring-violet-900 highlight-node' : ''} ${node.group === 'odd' ? 'border-orange-500 dark:border-orange-400 group-glow' : node.group === 'even' ? 'border-blue-500 dark:border-blue-400 group-glow' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-5 py-3 border-r-2 transition-colors ${node.group === 'odd' ? 'bg-orange-100 dark:bg-orange-900 border-orange-500' : node.group === 'even' ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-2xl font-bold ${node.group === 'odd' ? 'text-orange-900 dark:text-orange-100' : node.group === 'even' ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-4 py-3 flex items-center ${node.group === 'odd' ? 'bg-orange-200 dark:bg-orange-800' : node.group === 'even' ? 'bg-blue-200 dark:bg-blue-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            <ArrowRight className={`w-5 h-5 ${node.group === 'odd' ? 'text-orange-900 dark:text-orange-100' : node.group === 'even' ? 'text-blue-900 dark:text-blue-100' : 'text-slate-500 dark:text-slate-400'}`} />
                          </div>
                        </div>
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
              <div className="h-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-violet-200 dark:border-violet-700 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CheckCircle className="h-5 w-5 text-violet-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Index-Based Grouping:</strong> Group by index position (0-based), not node values</span></li>
            <li className="flex items-start gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Three Pointers:</strong> odd, even, evenHead work together to rearrange</span></li>
            <li className="flex items-start gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Alternating Links:</strong> Skip nodes by linking odd.next = even.next and vice versa</span></li>
            <li className="flex items-start gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Connect Groups:</strong> Final step connects end of odd group to start of even group</span></li>
            <li className="flex items-start gap-2"><span className="text-violet-600 font-bold">•</span><span><strong>Optimal:</strong> O(n) time with O(1) space - in-place rearrangement</span></li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

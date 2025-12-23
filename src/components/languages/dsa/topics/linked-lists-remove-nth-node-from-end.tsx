'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Target,
  Sparkles,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

type Node = { value: number; next: number | null };

type Step = {
  step: number;
  list: Node[];
  dummy: number | null;
  first: number | null;
  second: number | null;
  remove: number | null;
  currentLine: number;
  description: string;
  action: string;
  vars: { [key: string]: string | undefined };
};

const steps: Step[] = [
  {
    step: 1,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: null,
    first: null,
    second: null,
    remove: null,
    currentLine: 1,
    description: '🚀 Function Start: removeNthFromEnd(head, n) called with head pointing to node 1, n = 2.',
    action: 'init',
    vars: { head: '1→2→3→4→5', n: '2' },
  },
  {
    step: 2,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: null,
    first: null,
    second: null,
    remove: null,
    currentLine: 2,
    description: '🧩 Create Dummy: const dummy = { val: -1, next: head }. Dummy node created with value -1, pointing to head.',
    action: 'setup',
    vars: { dummy: '{val: -1, next: 1}', head: '1→2→3→4→5' },
  },
  {
    step: 3,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: -1,
    second: -1,
    remove: null,
    currentLine: 3,
    description: '📍 Initialize Pointers: let first = dummy, second = dummy. Both pointers start at dummy node.',
    action: 'setup',
    vars: { first: 'dummy', second: 'dummy', dummy: 'dummy→1' },
  },
  {
    step: 4,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: -1,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '🔄 For Loop Start: for (let i = 0; i <= n; i++). Initialize i = 0, condition: 0 <= 2 is true.',
    action: 'loop-start',
    vars: { i: '0', n: '2', condition: '0 <= 2 = true', first: 'dummy', second: 'dummy' },
  },
  {
    step: 5,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 0,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '➡️ First Move (i=0): first = first.next. first moves from dummy to node 1. Gap: 1 node.',
    action: 'advance',
    vars: { i: '0', first: '1', second: 'dummy', gap: '1', 'first.next': '2' },
  },
  {
    step: 6,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 0,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '🔄 Loop Continue: i++ makes i = 1. Check condition: 1 <= 2 is true. Continue loop.',
    action: 'advance',
    vars: { i: '1', n: '2', condition: '1 <= 2 = true', first: '1', second: 'dummy' },
  },
  {
    step: 7,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 1,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '➡️ Second Move (i=1): first = first.next. first moves from node 1 to node 2. Gap: 2 nodes.',
    action: 'advance',
    vars: { i: '1', first: '2', second: 'dummy', gap: '2', 'first.next': '3' },
  },
  {
    step: 8,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 1,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '🔄 Loop Continue: i++ makes i = 2. Check condition: 2 <= 2 is true. Continue loop.',
    action: 'advance',
    vars: { i: '2', n: '2', condition: '2 <= 2 = true', first: '2', second: 'dummy' },
  },
  {
    step: 9,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 2,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '➡️ Third Move (i=2): first = first.next. first moves from node 2 to node 3. Gap: 3 nodes established.',
    action: 'advance',
    vars: { i: '2', first: '3', second: 'dummy', gap: '3', 'first.next': '4' },
  },
  {
    step: 10,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 2,
    second: -1,
    remove: null,
    currentLine: 4,
    description: '🔄 Loop Continue: i++ makes i = 3. Check condition: 3 <= 2 is false. For loop ends.',
    action: 'loop-end',
    vars: { i: '3', n: '2', condition: '3 <= 2 = false', first: '3', second: 'dummy' },
  },
  {
    step: 11,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 2,
    second: -1,
    remove: null,
    currentLine: 6,
    description: '🚶‍♂️ While Loop Start: while (first !== null). Check: first (node 3) !== null is true.',
    action: 'move-start',
    vars: { first: '3', second: 'dummy', condition: 'first !== null = true', gap: '3' },
  },
  {
    step: 12,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 3,
    second: -1,
    remove: null,
    currentLine: 7,
    description: '➡️ First Pointer Move: first = first.next. first moves from node 3 to node 4.',
    action: 'move',
    vars: { first: '4', second: 'dummy', 'first.next': '5', gap: '3' },
  },
  {
    step: 13,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 3,
    second: 0,
    remove: null,
    currentLine: 8,
    description: '➡️ Second Pointer Move: second = second.next. second moves from dummy to node 1.',
    action: 'move',
    vars: { first: '4', second: '1', 'second.next': '2', gap: '3' },
  },
  {
    step: 14,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 3,
    second: 0,
    remove: null,
    currentLine: 9,
    description: '🔄 End While Iteration: } reached. first is at node 4, second at node 1. Gap maintained.',
    action: 'move',
    vars: { first: '4', second: '1', gap: '3', condition: 'continue while' },
  },
  {
    step: 15,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 3,
    second: 0,
    remove: null,
    currentLine: 6,
    description: '🚶‍♂️ While Loop Check: while (first !== null). Check: first (node 4) !== null is true.',
    action: 'move',
    vars: { first: '4', second: '1', condition: 'first !== null = true', gap: '3' },
  },
  {
    step: 16,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 4,
    second: 0,
    remove: null,
    currentLine: 7,
    description: '➡️ First Pointer Move: first = first.next. first moves from node 4 to node 5.',
    action: 'move',
    vars: { first: '5', second: '1', 'first.next': 'null', gap: '3' },
  },
  {
    step: 17,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 4,
    second: 1,
    remove: null,
    currentLine: 8,
    description: '➡️ Second Pointer Move: second = second.next. second moves from node 1 to node 2.',
    action: 'move',
    vars: { first: '5', second: '2', 'second.next': '3', gap: '3' },
  },
  {
    step: 18,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 4,
    second: 1,
    remove: null,
    currentLine: 9,
    description: '🔄 End While Iteration: } reached. first is at node 5, second at node 2. Gap maintained.',
    action: 'move',
    vars: { first: '5', second: '2', gap: '3', condition: 'continue while' },
  },
  {
    step: 19,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: 4,
    second: 1,
    remove: null,
    currentLine: 6,
    description: '🚶‍♂️ While Loop Check: while (first !== null). Check: first (node 5) !== null is true.',
    action: 'move',
    vars: { first: '5', second: '2', condition: 'first !== null = true', gap: '3' },
  },
  {
    step: 20,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 1,
    remove: null,
    currentLine: 7,
    description: '➡️ First Pointer Move: first = first.next. first moves from node 5 to null (end of list).',
    action: 'move',
    vars: { first: 'null', second: '2', 'first.next': 'null', gap: '3' },
  },
  {
    step: 21,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: null,
    currentLine: 8,
    description: '➡️ Second Pointer Move: second = second.next. second moves from node 2 to node 3.',
    action: 'move',
    vars: { first: 'null', second: '3', 'second.next': '4', gap: '3' },
  },
  {
    step: 22,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: null,
    currentLine: 9,
    description: '🔄 End While Iteration: } reached. first is null, second at node 3. Gap maintained.',
    action: 'move',
    vars: { first: 'null', second: '3', gap: '3', condition: 'continue while' },
  },
  {
    step: 23,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: null,
    currentLine: 6,
    description: '🛑 While Loop Check: while (first !== null). Check: first (null) !== null is false. Loop ends.',
    action: 'loop-end',
    vars: { first: 'null', second: '3', condition: 'first !== null = false', target: 'second.next = 4' },
  },
  {
    step: 24,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: 3,
    currentLine: 10,
    description: '📍 Position Found: second is at node 3, second.next is node 4 (target to remove).',
    action: 'position',
    vars: { first: 'null', second: '3', 'second.next': '4', target: 'node 4' },
  },
  {
    step: 25,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 3 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: 3,
    currentLine: 11,
    description: '✂️ Remove Operation: second.next = second.next.next. Access second.next.next (node 5).',
    action: 'remove',
    vars: { second: '3', 'second.next': '4', 'second.next.next': '5', operation: '3.next = 5' },
  },
  {
    step: 26,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 4 },
      { value: 4, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: 3,
    currentLine: 11,
    description: '✂️ Node Removed: Link updated. Node 3 now points to node 5, skipping node 4.',
    action: 'remove',
    vars: { second: '3', 'second.next': '5', removed: 'node 4', result: '1→2→3→5' },
  },
  {
    step: 27,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: null,
    currentLine: 12,
    description: '✅ Return Statement: return dummy.next. dummy.next points to node 1 (new head).',
    action: 'return',
    vars: { dummy: 'dummy', 'dummy.next': '1', result: '1→2→3→5' },
  },
  {
    step: 28,
    list: [
      { value: 1, next: 1 },
      { value: 2, next: 2 },
      { value: 3, next: 4 },
      { value: 5, next: null },
    ],
    dummy: -1,
    first: null,
    second: 2,
    remove: null,
    currentLine: 13,
    description: '🎯 Function Complete: } reached. Successfully removed 2nd node from end. Final list: 1→2→3→5.',
    action: 'done',
    vars: { result: '1→2→3→5', removed: 'node 4', complexity: 'O(n) time, O(1) space' },
  },
];

const getCodeWithValues = (stepData: Step) => {
  const getVarValue = (key: string): string => {
    const value = stepData.vars[key];
    if (value === undefined) return '';
    return `${key}: ${value}`;
  };

  return [
    {
      line: 1,
      code: 'function removeNthFromEnd(head, n) {',
      active: stepData.currentLine === 1,
      indent: 0,
      values: stepData.currentLine === 1 ? `${getVarValue('head')}, ${getVarValue('n')}` : '',
    },
    {
      line: 2,
      code: '  const dummy = { val: -1, next: head };',
      active: stepData.currentLine === 2,
      indent: 1,
      values: stepData.currentLine === 2 ? getVarValue('dummy') : '',
    },
    {
      line: 3,
      code: '  let first = dummy, second = dummy;',
      active: stepData.currentLine === 3,
      indent: 1,
      values: stepData.currentLine === 3 ? `${getVarValue('first')}, ${getVarValue('second')}` : '',
    },
    {
      line: 4,
      code: '  for (let i = 0; i <= n; i++) first = first.next;',
      active: stepData.currentLine === 4,
      indent: 1,
      values: stepData.currentLine === 4 ? `${getVarValue('i')}, ${getVarValue('condition')}, ${getVarValue('first')}, ${getVarValue('gap')}` : '',
    },
    {
      line: 5,
      code: '  ',
      active: false,
      indent: 0,
      values: '',
    },
    {
      line: 6,
      code: '  while (first !== null) {',
      active: stepData.currentLine === 6,
      indent: 1,
      values: stepData.currentLine === 6 ? getVarValue('condition') : '',
    },
    {
      line: 7,
      code: '    first = first.next;',
      active: stepData.currentLine === 7,
      indent: 2,
      values: stepData.currentLine === 7 ? getVarValue('first') : '',
    },
    {
      line: 8,
      code: '    second = second.next;',
      active: stepData.currentLine === 8,
      indent: 2,
      values: stepData.currentLine === 8 ? getVarValue('second') : '',
    },
    {
      line: 9,
      code: '  }',
      active: stepData.currentLine === 9,
      indent: 1,
      values: stepData.currentLine === 9 ? `${getVarValue('first')}, ${getVarValue('second')}, ${getVarValue('gap')}` : '',
    },
    {
      line: 10,
      code: '  ',
      active: false,
      indent: 0,
      values: '',
    },
    {
      line: 11,
      code: '  second.next = second.next.next;',
      active: stepData.currentLine === 11,
      indent: 1,
      values: stepData.currentLine === 11 ? `${getVarValue('second')}, ${getVarValue('second.next')}, ${getVarValue('second.next.next')}, ${getVarValue('operation')}` : '',
    },
    {
      line: 12,
      code: '  return dummy.next;',
      active: stepData.currentLine === 12,
      indent: 1,
      values: stepData.currentLine === 12 ? getVarValue('result') : '',
    },
    {
      line: 13,
      code: '}',
      active: stepData.currentLine === 13,
      indent: 0,
      values: stepData.currentLine === 13 ? `${getVarValue('result')}, ${getVarValue('complexity')}` : '',
    },
  ];
};

export default function LinkedListsRemoveNthNodeFromEnd() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (!isAnimating) return;
    const speedMap = { slow: 3500, normal: 2500, fast: 1500 };
    const delay = speedMap[animationSpeed];
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, delay);
    return () => clearInterval(timer);
  }, [isAnimating, animationSpeed]);

  const goToStep = (stepIndex: number) => {
    if (stepIndex < 0 || stepIndex >= steps.length) return;
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
  };

  const handleReset = () => {
    setIsAnimating(false);
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) goToStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="DSA · Linked Lists · Two-Pointer"
        title="Remove Nth Node from End"
        description="Two-pointer gap technique with dummy node to remove the Nth node from the end in one pass."
        colorTheme="blue"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              What is Remove Nth Node from End?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given a linked list, remove the Nth node from the end of the list and return its head.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-sm">1→2→3→4→5, n = 2</div>
                  <div className="text-xs text-slate-500 mt-1">Remove 2nd node from end (node 4)</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-sm">1→2→3→5</div>
                  <div className="text-xs text-green-600 mt-1">Node 4 removed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Cases
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Valid Case Example</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Valid ✓</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      List: 1→2→3, n = 1. Remove last node (3). Result: 1→2
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-red-700 dark:text-red-300">Edge Case Example</span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">Edge ⚠️</span>
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      List: 1→2, n = 2. Remove head node (1). Result: 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Create Dummy Node</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Explanation:</div>
                    <div className="text-sm">Add dummy before head to handle edge cases where head needs to be removed.</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Create Gap</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Explanation:</div>
                    <div className="text-sm">Move first pointer n+1 steps ahead to create a gap of n+1 between first and second.</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Move Together</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Explanation:</div>
                    <div className="text-sm">Move both pointers until first reaches end. Second will be just before target.</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Remove Node</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Explanation:</div>
                    <div className="text-sm">Skip the target node by connecting second.next to second.next.next.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Two-pointer gap technique maintains fixed distance between pointers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Dummy node eliminates edge case handling for head removal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Single pass: O(n) time, O(1) space complexity</span>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the algorithm works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="slow"
                checked={animationSpeed === 'slow'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'slow')}
                disabled={isAnimating}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="normal"
                checked={animationSpeed === 'normal'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'normal')}
                disabled={isAnimating}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Normal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="fast"
                checked={animationSpeed === 'fast'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'fast')}
                disabled={isAnimating}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
          </div>

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
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
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

          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">algorithm.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(currentStepData).map((line) => (
                  <div
                    key={line.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      line.active ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500' : ''
                    }`}
                  >
                    <span
                      className={`select-none w-6 text-right flex-shrink-0 ${
                        line.active ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-400 dark:text-slate-600'
                      }`}
                    >
                      {line.line}
                    </span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${line.indent * 16}px` }}>{line.code}</span>
                      {line.active && line.values && (
                        <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">{line.values}</span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    {Object.entries(currentStepData.vars).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">{key}:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

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
                      {currentStepData.action === 'setup' && '🧩 Setup'}
                      {currentStepData.action === 'loop-start' && '🔄 Loop Iteration'}
                      {currentStepData.action === 'advance' && '➡️ Advancing'}
                      {currentStepData.action === 'move-start' && '🚶‍♂️ Move Phase'}
                      {currentStepData.action === 'move' && '➡️ Moving'}
                      {currentStepData.action === 'loop-end' && '🛑 Loop End'}
                      {currentStepData.action === 'position' && '📍 Position Found'}
                      {currentStepData.action === 'remove' && '✂️ Removing'}
                      {currentStepData.action === 'return' && '✅ Return'}
                      {currentStepData.action === 'done' && '🎯 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-slate-600 dark:text-slate-400">first</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                    <span className="text-slate-600 dark:text-slate-400">second</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-slate-600 dark:text-slate-400">remove</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {currentStepData.dummy === -1 && (
                    <div className="relative">
                      <div className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                        <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">dummy</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">next: 1</div>
                      </div>
                    </div>
                  )}
                  {currentStepData.list.map((node, idx) => {
                    const isFirst = currentStepData.first === idx;
                    const isSecond = currentStepData.second === idx;
                    const isRemove = currentStepData.remove === idx;
                    return (
                      <div key={idx} className="relative">
                        <div
                          className={`px-3 py-2 rounded-lg border ${
                            isRemove
                              ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {node.value}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            next: {node.next ?? 'null'}
                          </div>
                        </div>
                        {isFirst && (
                          <span className="absolute -top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40">
                            first
                          </span>
                        )}
                        {isSecond && (
                          <span className="absolute -top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40">
                            second
                          </span>
                        )}
                        {isRemove && (
                          <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40">
                            remove
                          </span>
                        )}
                        {idx < currentStepData.list.length - 1 && node.next !== null && (
                          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-400">
                            →
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

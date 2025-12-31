'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Plus, Calculator, ArrowRight, AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsAddTwoNumbers() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes numberPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes carryGlow {
      0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.9); }
    }
    @keyframes sumBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes slideInResult {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes pointerMove {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }
    .number-pulse { animation: numberPulse 0.8s ease-in-out infinite; }
    .carry-glow { animation: carryGlow 1.5s ease-in-out infinite; }
    .sum-bounce { animation: sumBounce 0.6s ease-out; }
    .slide-in-result { animation: slideInResult 0.5s ease-out; }
    .pointer-move { animation: pointerMove 1s ease-in-out infinite; }
  `;

  type AddTwoNumbersNode = {
    value: number;
    highlighted: boolean;
    processed: boolean;
  };

  type AddTwoNumbersStep = {
    step: number;
    list1: AddTwoNumbersNode[];
    list2: AddTwoNumbersNode[];
    result: AddTwoNumbersNode[];
    l1: number | null;
    l2: number | null;
    carry: number;
    sum: number;
    digit: number;
    dummy?: number | null;
    current?: number | null;
    currentLine: number;
    description: string;
    action: string;
  };

  // Add Two Numbers: 342 + 465 = 807 (represented as 2→4→3 + 5→6→4 = 7→0→8)
  const steps: AddTwoNumbersStep[] = [
    {
      step: 1,
      list1: [
        { value: 2, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 1,
      description: '📋 Problem Setup: We need to add 342 + 465. Lists are stored in reverse order: 2→4→3 represents 342, 5→6→4 represents 465.',
      action: 'init'
    },
    {
      step: 2,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 2,
      description: '🏗️ Create dummy node: dummy = new ListNode(0). This helps simplify edge cases and provides a consistent return pointer.',
      action: 'create-dummy'
    },
    {
      step: 3,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 3,
      description: '📍 Set current pointer: current = dummy. This pointer will build our result list, starting from dummy.next.',
      action: 'set-current'
    },
    {
      step: 4,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 4,
      description: '🎯 Initialize carry: carry = 0. This will store any overflow digit (0-9) that needs to be added to the next position.',
      action: 'init-carry'
    },
    {
      step: 5,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 6,
      description: '🔄 Loop condition check: while (l1 !== null || l2 !== null). Since both pointers point to valid nodes (2 and 5), we enter the loop.',
      action: 'loop-check'
    },
    {
      step: 6,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 7,
      digit: 0,
      currentLine: 7,
      description: '➕ Calculate total sum: sum = (l1?.val || 0) + (l2?.val || 0) + carry = 2 + 5 + 0 = 7. This is the raw sum before extracting digit and carry.',
      action: 'calculate-sum'
    },
    {
      step: 7,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 7,
      digit: 0,
      currentLine: 8,
      description: '🔄 Update carry: carry = Math.floor(sum / 10) = Math.floor(7 / 10) = 0. Since 7 < 10, no carry needed for next digit.',
      action: 'update-carry-first'
    },
    {
      step: 8,
      list1: [
        { value: 2, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: true, processed: false },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: true, processed: true }
      ],
      l1: 0,
      l2: 0,
      carry: 0,
      sum: 7,
      digit: 7,
      currentLine: 9,
      description: '🔢 Create result node: current.next = new ListNode(sum % 10) = new ListNode(7 % 10) = new ListNode(7). First digit of result is 7.',
      action: 'create-result-node'
    },
    {
      step: 9,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 0,
      sum: 7,
      digit: 7,
      currentLine: 10,
      description: '📍 Move current pointer: current = current.next. Now current points to the newly created node with value 7, ready for next iteration.',
      action: 'move-current'
    },
    {
      step: 10,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 0,
      sum: 7,
      digit: 7,
      currentLine: 11,
      description: '➡️ Advance l1 pointer: l1 = l1?.next. Now l1 points to node with value 4 (second digit of first number).',
      action: 'advance-l1'
    },
    {
      step: 11,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 0,
      sum: 7,
      digit: 7,
      currentLine: 12,
      description: '➡️ Advance l2 pointer: l2 = l2?.next. Now l2 points to node with value 6 (second digit of second number).',
      action: 'advance-l2'
    },
    {
      step: 12,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 6,
      description: '🔄 Loop condition check (2nd iteration): Both l1 (4) and l2 (6) exist? YES! Continue adding second digits.',
      action: 'loop-check-2'
    },
    {
      step: 13,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 0,
      sum: 10,
      digit: 0,
      currentLine: 7,
      description: '➕ Calculate sum (2nd digit): sum = 4 + 6 + carry(0) = 10. This sum is >= 10, so we will have a carry!',
      action: 'calculate-sum-2'
    },
    {
      step: 14,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 1,
      sum: 10,
      digit: 0,
      currentLine: 8,
      description: '🔄 Update carry (2nd digit): carry = Math.floor(10 / 10) = 1. Since sum >= 10, we carry 1 to the next position.',
      action: 'update-carry-2'
    },
    {
      step: 15,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false },
        { value: 3, highlighted: false, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: true, processed: false },
        { value: 4, highlighted: false, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: true, processed: true }
      ],
      l1: 1,
      l2: 1,
      carry: 1,
      sum: 10,
      digit: 0,
      currentLine: 9,
      description: '🔢 Create result node (2nd digit): current.next = new ListNode(10 % 10) = new ListNode(0). Second digit of result is 0.',
      action: 'create-result-node-2'
    },
    {
      step: 11,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: true, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true }
      ],
      l1: 2,
      l2: 2,
      carry: 1,
      sum: 0,
      digit: 0,
      currentLine: 6,
      description: '🔄 Loop Check: Both l1 (3) and l2 (4) exist? YES! Continue addition.',
      action: 'loop-check'
    },
    {
      step: 12,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: true, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true }
      ],
      l1: 2,
      l2: 2,
      carry: 1,
      sum: 8,
      digit: 0,
      currentLine: 7,
      description: '📊 Calculate sum: 3 + 4 + carry(1) = 8',
      action: 'calculate-sum'
    },
    {
      step: 13,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: true, processed: false }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: true, processed: false }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true },
        { value: 8, highlighted: true, processed: true }
      ],
      l1: 2,
      l2: 2,
      carry: 0,
      sum: 8,
      digit: 8,
      currentLine: 8,
      description: '🔢 Extract digit: digit = sum % 10 = 8 % 10 = 8. Create result node with value 8.',
      action: 'extract-digit'
    },
    {
      step: 14,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: false, processed: true }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true },
        { value: 8, highlighted: false, processed: true }
      ],
      l1: null,
      l2: null,
      carry: 0,
      sum: 8,
      digit: 8,
      currentLine: 9,
      description: '🔄 Update carry: carry = Math.floor(8 / 10) = 0. Move pointers to next (both null).',
      action: 'update-carry'
    },
    {
      step: 15,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: false, processed: true }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true },
        { value: 8, highlighted: false, processed: true }
      ],
      l1: null,
      l2: null,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 6,
      description: '🔄 Loop Check: l1 (null) or l2 (null)? YES! Exit main loop.',
      action: 'loop-exit'
    },
    {
      step: 16,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: false, processed: true }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true },
        { value: 8, highlighted: false, processed: true }
      ],
      l1: null,
      l2: null,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 12,
      description: '🔍 Final carry check: carry > 0? NO (carry = 0). No extra node needed.',
      action: 'final-carry-check'
    },
    {
      step: 17,
      list1: [
        { value: 2, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true },
        { value: 3, highlighted: false, processed: true }
      ],
      list2: [
        { value: 5, highlighted: false, processed: true },
        { value: 6, highlighted: false, processed: true },
        { value: 4, highlighted: false, processed: true }
      ],
      result: [
        { value: 7, highlighted: false, processed: true },
        { value: 0, highlighted: false, processed: true },
        { value: 8, highlighted: false, processed: true }
      ],
      l1: null,
      l2: null,
      carry: 0,
      sum: 0,
      digit: 0,
      currentLine: 13,
      description: '✅ Complete: Return dummy.next. Result: 7→0→8 (represents 807 = 342 + 465).',
      action: 'done'
    }
  ];

  const getCodeWithValues = (stepData: AddTwoNumbersStep) => {
    const l1Val = stepData.l1 !== null ? stepData.list1[stepData.l1]?.value : 'null';
    const l2Val = stepData.l2 !== null ? stepData.list2[stepData.l2]?.value : 'null';
    const resultCount = stepData.result.length;
    const dummyIndex = stepData.dummy ?? null;
    const currentIndex = stepData.current ?? null;
    const dummyVal = dummyIndex !== null ? (dummyIndex === -1 ? 'dummy' : stepData.list1[dummyIndex]?.value ?? 'null') : 'null';
    const currentVal = currentIndex !== null ? (currentIndex === -1 ? 'dummy' : stepData.result[currentIndex]?.value ?? 'null') : 'null';
    
    // Calculate variable values for each step
    const getVariableValues = () => {
      switch(stepData.step) {
        case 1:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = null; current = null; carry = 0';
        case 2:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = null; carry = 0';
        case 3:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0';
        case 4:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0';
        case 5:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0; l1 ≠ null = true; l2 ≠ null = true';
        case 6:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0; sum = 2 + 5 + 0 = 7';
        case 7:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0; sum = 7; carry = Math.floor(7/10) = 0';
        case 8:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = null; current = dummy; carry = 0; digit = 7 % 10 = 7; create node(7)';
        case 9:
          return 'l1 = 2→4→3; l2 = 5→6→4; dummy = 0; dummy.next = 7; current = 7; carry = 0; result = 7';
        case 10:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7; current = 7; carry = 0; l1 advanced; l2 advanced';
        case 11:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7; current = 7; carry = 0; l1 ≠ null = true; l2 ≠ null = true';
        case 12:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7; current = 7; carry = 0; sum = 4 + 6 + 0 = 10';
        case 13:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7; current = 7; carry = 0; sum = 10; carry = Math.floor(10/10) = 1';
        case 14:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7; current = 7; carry = 1; digit = 10 % 10 = 0; create node(0)';
        case 15:
          return 'l1 = 4→3; l2 = 6→4; dummy = 0; dummy.next = 7→0; current = 0; carry = 1; result = 7→0';
        case 16:
          return 'l1 = 3; l2 = 4; dummy = 0; dummy.next = 7→0; current = 0; carry = 1; l1 advanced; l2 advanced';
        case 17:
          return 'l1 = 3; l2 = 4; dummy = 0; dummy.next = 7→0; current = 0; carry = 1; l1 ≠ null = true; l2 ≠ null = true';
        case 18:
          return 'l1 = 3; l2 = 4; dummy = 0; dummy.next = 7→0; current = 0; carry = 1; sum = 3 + 4 + 1 = 8';
        case 19:
          return 'l1 = 3; l2 = 4; dummy = 0; dummy.next = 7→0; current = 0; carry = 1; sum = 8; carry = Math.floor(8/10) = 0';
        case 20:
          return 'l1 = 3; l2 = 4; dummy = 0; dummy.next = 7→0; current = 0; carry = 0; digit = 8 % 10 = 8; create node(8)';
        case 21:
          return 'l1 = null; l2 = null; dummy = 0; dummy.next = 7→0→8; current = 8; carry = 0; result = 7→0→8';
        case 22:
          return 'l1 = null; l2 = null; dummy = 0; dummy.next = 7→0→8; current = 8; carry = 0; l1 ≠ null = false; l2 ≠ null = false';
        case 23:
          return 'l1 = null; l2 = null; dummy = 0; dummy.next = 7→0→8; current = 8; carry = 0; carry > 0 = false; no extra node';
        case 24:
          return 'l1 = null; l2 = null; dummy = 0; dummy.next = 7→0→8; current = 8; carry = 0; return = dummy.next = 7→0→8';
        case 25:
          return 'l1 = null; l2 = null; dummy = 0; dummy.next = 7→0→8; current = 8; carry = 0; result = 807; success = true';
        default:
          return `l1 = ${l1Val}→...; l2 = ${l2Val}→...; dummy = ${dummyVal}; current = ${currentVal}; carry = ${stepData.carry}`;
      }
    };
    
    const variableValues = getVariableValues();
    
    return [
      { line: 1, code: 'function addTwoNumbers(l1, l2) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
      { line: 2, code: '  let dummy = new ListNode(0);', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `dummy = ${dummyVal}; dummy.next = ${stepData.step >= 2 ? 'null' : 'undefined'}` : '' },
      { line: 3, code: '  let current = dummy;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `current = ${currentVal}; dummy = ${dummyVal}` : '' },
      { line: 4, code: '  let carry = 0;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `carry = ${stepData.carry}; current = ${currentVal}` : '' },
      { line: 5, code: '  ', active: false, indent: 1 },
      { line: 6, code: '  while (l1 !== null || l2 !== null) {', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `l1 = ${l1Val}; l2 = ${l2Val}; l1 ≠ null = ${stepData.l1 !== null}; l2 ≠ null = ${stepData.l2 !== null}` : '' },
      { line: 7, code: '    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `${l1Val} + ${l2Val} + ${stepData.carry} = ${stepData.sum}` : '' },
      { line: 8, code: '    carry = Math.floor(sum / 10);', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `Math.floor(${stepData.sum}/10) = ${stepData.carry}` : '' },
      { line: 9, code: '    current.next = new ListNode(sum % 10);', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `${stepData.sum} % 10 = ${stepData.digit}; create node(${stepData.digit})` : '' },
      { line: 10, code: '    current = current.next;', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 ? `current = ${stepData.digit}; result = ${stepData.result.map(n => n.value).join('→')}` : '' },
      { line: 11, code: '    l1 = l1?.next;', active: stepData.currentLine === 11, indent: 2, values: stepData.currentLine === 11 ? `l1 = ${stepData.l1 !== null && stepData.l1 + 1 < stepData.list1.length ? stepData.list1[stepData.l1 + 1]?.value : 'null'}` : '' },
      { line: 12, code: '    l2 = l2?.next;', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? `l2 = ${stepData.l2 !== null && stepData.l2 + 1 < stepData.list2.length ? stepData.list2[stepData.l2 + 1]?.value : 'null'}` : '' },
      { line: 13, code: '  }', active: false, indent: 1, values: stepData.step >= 22 ? 'loop complete; all digits processed' : '' },
      { line: 14, code: '  ', active: false, indent: 1 },
      { line: 15, code: '  if (carry > 0) {', active: stepData.currentLine === 15, indent: 1, values: stepData.currentLine === 15 ? `carry = ${stepData.carry}; carry > 0 = ${stepData.carry > 0}` : '' },
      { line: 16, code: '    current.next = new ListNode(carry);', active: false, indent: 2, values: stepData.carry > 0 ? `add extra node(${stepData.carry})` : 'no extra node needed' },
      { line: 17, code: '  }', active: false, indent: 1 },
      { line: 18, code: '  ', active: false, indent: 1 },
      { line: 19, code: '  return dummy.next;', active: stepData.currentLine === 19, indent: 1, values: stepData.currentLine === 19 ? `dummy.next = ${resultCount > 0 ? stepData.result.map(n => n.value).join('→') : '7→0→8'}; return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('→') : '7→0→8'}` : '' },
      { line: 20, code: '}', active: false, indent: 0, values: stepData.step >= 25 ? 'function complete; 342 + 465 = 807' : '' }
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
      <PageHeader icon={Calculator} category="DSA · Linked Lists" title="Add Two Numbers" description="Add two numbers represented as linked lists (digits in reverse order)" colorTheme="emerald" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Math Operations', 'Carry Handling', 'Time: O(max(m,n))', 'Space: O(max(m,n))'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Digit-by-Digit Addition', desc: 'Add numbers digit by digit like manual addition' },
              { title: 'Carry Propagation', desc: 'Handle carry-over between digits correctly' },
              { title: 'Linked List Traversal', desc: 'Traverse two lists simultaneously' },
              { title: 'Result Construction', desc: 'Build result list while processing' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-emerald-600" />The Problem</CardTitle><CardDescription>Adding numbers in linked list format</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each node contains a single digit. Add the two numbers and return the sum as a linked list.</p>
          
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2"><Calculator className="w-5 h-5" /> Example</h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-emerald-300">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Input List 1:</p>
                  <div className="font-mono text-sm text-center mb-2">2 → 4 → 3</div>
                  <p className="text-xs text-center text-slate-600 dark:text-slate-400">Represents: 342 (reverse order)</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-emerald-300">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Input List 2:</p>
                  <div className="font-mono text-sm text-center mb-2">5 → 6 → 4</div>
                  <p className="text-xs text-center text-slate-600 dark:text-slate-400">Represents: 465 (reverse order)</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full">
                  <Plus className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-500">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Output (sum):</p>
                <div className="font-mono text-sm text-center mb-2">7 → 0 → 8</div>
                <p className="text-xs text-center text-emerald-600 dark:text-emerald-400">Represents: 807 (342 + 465 = 807)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Algorithm Approach</h4>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>1. Simultaneous Traversal:</strong> Process both lists digit by digit</p>
              <p><strong>2. Sum with Carry:</strong> Calculate sum = digit1 + digit2 + carry</p>
              <p><strong>3. Extract Digit:</strong> New digit = sum % 10, New carry = Math.floor(sum / 10)</p>
              <p><strong>4. Build Result:</strong> Append new digit to result list</p>
              <p><strong>5. Handle Remainder:</strong> Continue until both lists exhausted</p>
              <p><strong>6. Final Carry:</strong> Add remaining carry if greater than 0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Addition Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how we add two numbers digit by digit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-emerald-300 dark:border-emerald-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">Step {currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">addTwoNumbers.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">l1:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{currentStepData.l1 !== null ? currentStepData.list1[currentStepData.l1]?.value : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">l2:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{currentStepData.l2 !== null ? currentStepData.list2[currentStepData.l2]?.value : 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">carry:</span><span className={`font-semibold ${currentStepData.carry > 0 ? 'text-red-600 dark:text-red-400 carry-glow' : 'text-slate-600 dark:text-slate-400'}`}>{currentStepData.carry}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">sum:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">{currentStepData.sum}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">digit:</span><span className="font-semibold text-orange-600 dark:text-orange-400">{currentStepData.digit}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-emerald-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-emerald-900 dark:text-emerald-100 mt-0.5">
                      {currentStepData.action === 'init' && '📋 Problem Setup'}
                      {currentStepData.action === 'create-dummy' && '🏗️ Create Dummy Node'}
                      {currentStepData.action === 'set-current' && '📍 Set Current Pointer'}
                      {currentStepData.action === 'init-carry' && '🎯 Initialize Carry'}
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check (1st)'}
                      {currentStepData.action === 'loop-check-2' && '🔄 Loop Check (2nd)'}
                      {currentStepData.action === 'calculate-sum' && '➕ Calculate Sum (1st)'}
                      {currentStepData.action === 'calculate-sum-2' && '➕ Calculate Sum (2nd)'}
                      {currentStepData.action === 'update-carry-first' && '🔄 Update Carry (1st)'}
                      {currentStepData.action === 'update-carry-2' && '🔄 Update Carry (2nd)'}
                      {currentStepData.action === 'create-result-node' && '🔢 Create Result Node (1st)'}
                      {currentStepData.action === 'create-result-node-2' && '🔢 Create Result Node (2nd)'}
                      {currentStepData.action === 'move-current' && '📍 Move Current Pointer'}
                      {currentStepData.action === 'advance-l1' && '➡️ Advance L1 Pointer'}
                      {currentStepData.action === 'advance-l2' && '➡️ Advance L2 Pointer'}
                      {currentStepData.action === 'loop-exit' && '🚪 Exit Loop'}
                      {currentStepData.action === 'final-carry-check' && '🔍 Final Carry Check'}
                      {currentStepData.action === 'done' && '🎉 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-emerald-900 dark:text-emerald-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">List Visualization:</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">List 1: 3 nodes</Badge>
                  <Badge variant="outline" className="text-xs border-purple-400 text-purple-600">List 2: 3 nodes</Badge>
                  <Badge variant="outline" className="text-xs border-orange-400 text-orange-600">Result: {currentStepData.result.length} nodes</Badge>
                </div>
              </div>
              
              <div className="space-y-8 px-8 py-12 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                
                {/* List 1 */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-blue-700 dark:text-blue-300 text-center">List 1 (342)</div>
                  <div className="flex items-center justify-center gap-3 min-w-max relative">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.list1.map((node, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {currentStepData.l1 === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">l1</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-blue-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${currentStepData.l1 === index ? 'scale-110 ring-4 ring-blue-200 dark:ring-blue-900 number-pulse' : ''} ${node.processed ? 'border-blue-300 dark:border-blue-600' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-4 py-2 border-r-2 transition-colors ${node.processed ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-xl font-bold ${node.processed ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-3 py-2 flex items-center ${node.processed ? 'bg-blue-200 dark:bg-blue-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            <ArrowRight className={`w-4 h-4 ${node.processed ? 'text-blue-900 dark:text-blue-100' : 'text-slate-500 dark:text-slate-400'}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>

                {/* List 2 */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-purple-700 dark:text-purple-300 text-center">List 2 (465)</div>
                  <div className="flex items-center justify-center gap-3 min-w-max relative">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.list2.map((node, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {currentStepData.l2 === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded border-2 border-purple-500 whitespace-nowrap shadow-lg">l2</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-purple-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-purple-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${currentStepData.l2 === index ? 'scale-110 ring-4 ring-purple-200 dark:ring-purple-900 number-pulse' : ''} ${node.processed ? 'border-purple-300 dark:border-purple-600' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-4 py-2 border-r-2 transition-colors ${node.processed ? 'bg-purple-100 dark:bg-purple-900 border-purple-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-xl font-bold ${node.processed ? 'text-purple-900 dark:text-purple-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-3 py-2 flex items-center ${node.processed ? 'bg-purple-200 dark:bg-purple-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            <ArrowRight className={`w-4 h-4 ${node.processed ? 'text-purple-900 dark:text-purple-100' : 'text-slate-500 dark:text-slate-400'}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>

                {/* Result */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-orange-700 dark:text-orange-300 text-center">Result (807)</div>
                  <div className="flex items-center justify-center gap-3 min-w-max">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.result.length > 0 ? (
                      currentStepData.result.map((node, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${node.highlighted ? 'scale-110 ring-4 ring-orange-200 dark:ring-orange-900 sum-bounce' : ''} border-orange-500 dark:border-orange-400`}>
                            <div className="px-4 py-2 border-r-2 bg-orange-100 dark:bg-orange-900 border-orange-500">
                              <div className="text-xl font-bold text-orange-900 dark:text-orange-100 slide-in-result">{node.value}</div>
                            </div>
                            <div className="px-3 py-2 flex items-center bg-orange-200 dark:bg-orange-800">
                              <ArrowRight className="w-4 h-4 text-orange-900 dark:text-orange-100" />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">Building result...</div>
                    )}
                    {currentStepData.result.length > 0 && (
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                    )}
                  </div>
                </div>

                {/* Carry Display */}
                {currentStepData.carry > 0 && (
                  <div className="flex justify-center">
                    <div className="px-4 py-2 bg-red-100 dark:bg-red-900/40 border-2 border-red-500 rounded-lg shadow-lg carry-glow">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-red-700 dark:text-red-300">Carry:</span>
                        <span className="text-lg font-bold text-red-900 dark:text-red-100">{currentStepData.carry}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle>Key Insight</AlertTitle>
              <AlertDescription>
                This algorithm mimics manual addition! We process digits from right to left (least significant to most significant), just like how we add numbers on paper. The carry is propagated to the next more significant digit.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, AlertCircle, RefreshCw
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsDoublyReverseList() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes nodePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    @keyframes pointerSwap {
      0% { opacity: 1; transform: translateY(0); }
      50% { opacity: 0.3; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes highlightSwap {
      0%, 100% { background-color: transparent; }
      50% { background-color: rgba(59, 130, 246, 0.2); }
    }
    .node-pulse { animation: nodePulse 1s ease-in-out infinite; }
    .pointer-swap { animation: pointerSwap 0.8s ease-in-out; }
    .highlight-swap { animation: highlightSwap 1s ease-in-out; }
  `;

  type DoublyReverseNode = {
    value: number;
    prev: number | null;
    next: number | null;
    highlighted: boolean;
    processed: boolean;
    swapped: boolean;
  };

  type DoublyReverseResultNode = {
    value: number;
    prev: number | null;
    next: number | null;
    highlighted: boolean;
    processed: boolean;
  };

  type ReverseStep = {
    step: number;
    list: DoublyReverseNode[];
    result: DoublyReverseResultNode[];
    current: number | null;
    temp: number | null;
    head: number | null;
    currentLine: number;
    description: string;
    action: string;
  };

  // Reverse doubly linked list: 10↔20↔30↔40 becomes 40↔30↔20↔10
  const reverseSteps: ReverseStep[] = [
    {
      step: 1,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 1,
      description: '📋 Problem Setup: Reverse doubly linked list 10↔20↔30↔40. Target: Transform to 40↔30↔20↔10 by swapping prev and next pointers for each node.',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 2,
      description: '🔍 Edge Case Check: if (head === null) return null. List is not empty (head points to node 10), so we can proceed with reversal.',
      action: 'null-check'
    },
    {
      step: 3,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 3,
      description: '🔍 Single Node Check: if (head.next === null) return head. List has multiple nodes, so reversal is needed.',
      action: 'single-node-check'
    },
    {
      step: 4,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: null,
      head: 0,
      currentLine: 4,
      description: '📍 Initialize Current: let current = head. Start traversal from head (node 10) to swap pointers throughout the list.',
      action: 'init-current'
    },
    {
      step: 5,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: null,
      head: 0,
      currentLine: 5,
      description: '🔄 Initialize Temp: let temp = null. Temp will store the next node during pointer swapping.',
      action: 'init-temp'
    },
    {
      step: 6,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: null,
      head: 0,
      currentLine: 6,
      description: '🔄 Loop Entry: while (current !== null). current points to node 10 (not null), so enter loop to swap pointers.',
      action: 'loop-entry-1'
    },
    {
      step: 7,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: 1,
      head: 0,
      currentLine: 7,
      description: '💾 Store Next: temp = current.next. Store node 20 in temp before swapping pointers. temp = 20.',
      action: 'store-next-1'
    },
    {
      step: 8,
      list: [
        { value: 10, prev: 1, next: 1, highlighted: true, processed: false, swapped: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: 1,
      head: 0,
      currentLine: 8,
      description: '🔄 Swap Next Pointer: current.next = current.prev. Set node 10\'s next to its prev (null). Node 10.next = null.',
      action: 'swap-next-1'
    },
    {
      step: 9,
      list: [
        { value: 10, prev: 1, next: null, highlighted: true, processed: false, swapped: true },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 0,
      temp: 1,
      head: 0,
      currentLine: 9,
      description: '🔄 Swap Prev Pointer: current.prev = temp. Set node 10\'s prev to stored temp (node 20). Node 10.prev = 20.',
      action: 'swap-prev-1'
    },
    {
      step: 10,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 1,
      temp: 2,
      head: 0,
      currentLine: 10,
      description: '➡️ Move Current: current = current.prev. Move to node 20 (was stored in temp). Continue swapping for remaining nodes.',
      action: 'move-current-1'
    },
    {
      step: 11,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 1,
      temp: 2,
      head: 0,
      currentLine: 6,
      description: '🔄 Loop Continue: while (current !== null). current points to node 20 (not null), continue loop.',
      action: 'loop-entry-2'
    },
    {
      step: 12,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 1,
      temp: 2,
      head: 0,
      currentLine: 7,
      description: '💾 Store Next: temp = current.next. Store node 30 in temp before swapping pointers. temp = 30.',
      action: 'store-next-2'
    },
    {
      step: 13,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 2, highlighted: true, processed: false, swapped: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 1,
      temp: 2,
      head: 0,
      currentLine: 8,
      description: '🔄 Swap Next Pointer: current.next = current.prev. Set node 20\'s next to its prev (node 10). Node 20.next = 10.',
      action: 'swap-next-2'
    },
    {
      step: 14,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: true, processed: false, swapped: true },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 1,
      temp: 2,
      head: 0,
      currentLine: 9,
      description: '🔄 Swap Prev Pointer: current.prev = temp. Set node 20\'s prev to stored temp (node 30). Node 20.prev = 30.',
      action: 'swap-prev-2'
    },
    {
      step: 15,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 2,
      temp: 3,
      head: 0,
      currentLine: 10,
      description: '➡️ Move Current: current = current.prev. Move to node 30 (was stored in temp). Continue the swapping process.',
      action: 'move-current-2'
    },
    {
      step: 16,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 2,
      temp: 3,
      head: 0,
      currentLine: 6,
      description: '🔄 Loop Continue: while (current !== null). current points to node 30 (not null), continue loop.',
      action: 'loop-entry-3'
    },
    {
      step: 17,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 2,
      temp: 3,
      head: 0,
      currentLine: 7,
      description: '💾 Store Next: temp = current.next. Store node 40 in temp before swapping pointers. temp = 40.',
      action: 'store-next-3'
    },
    {
      step: 18,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 3, highlighted: true, processed: false, swapped: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 2,
      temp: 3,
      head: 0,
      currentLine: 8,
      description: '🔄 Swap Next Pointer: current.next = current.prev. Set node 30\'s next to its prev (node 20). Node 30.next = 20.',
      action: 'swap-next-3'
    },
    {
      step: 19,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: true, processed: false, swapped: true },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, swapped: false }
      ],
      result: [],
      current: 2,
      temp: 3,
      head: 0,
      currentLine: 9,
      description: '🔄 Swap Prev Pointer: current.prev = temp. Set node 30\'s prev to stored temp (node 40). Node 30.prev = 40.',
      action: 'swap-prev-3'
    },
    {
      step: 20,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: 2, next: null, highlighted: true, processed: false, swapped: false }
      ],
      result: [],
      current: 3,
      temp: null,
      head: 0,
      currentLine: 10,
      description: '➡️ Move Current: current = current.prev. Move to node 40 (was stored in temp). Last node to process.',
      action: 'move-current-3'
    },
    {
      step: 21,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: 2, next: null, highlighted: true, processed: false, swapped: false }
      ],
      result: [],
      current: 3,
      temp: null,
      head: 0,
      currentLine: 6,
      description: '🔄 Final Loop: while (current !== null). current points to node 40 (not null), final iteration.',
      action: 'loop-entry-4'
    },
    {
      step: 22,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: 2, next: null, highlighted: true, processed: false, swapped: false }
      ],
      result: [],
      current: 3,
      temp: null,
      head: 0,
      currentLine: 7,
      description: '💾 Store Next: temp = current.next. Store null in temp (node 40 is last). temp = null.',
      action: 'store-next-4'
    },
    {
      step: 23,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: null, next: null, highlighted: true, processed: false, swapped: false }
      ],
      result: [],
      current: 3,
      temp: null,
      head: 0,
      currentLine: 8,
      description: '🔄 Swap Next Pointer: current.next = current.prev. Set node 40\'s next to its prev (node 30). Node 40.next = 30.',
      action: 'swap-next-4'
    },
    {
      step: 24,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: null, next: 3, highlighted: true, processed: false, swapped: true }
      ],
      result: [],
      current: 3,
      temp: null,
      head: 0,
      currentLine: 9,
      description: '🔄 Swap Prev Pointer: current.prev = temp. Set node 40\'s prev to stored temp (null). Node 40.prev = null.',
      action: 'swap-prev-4'
    },
    {
      step: 25,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: null, next: 3, highlighted: false, processed: true, swapped: true }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 10,
      description: '➡️ Move Current: current = current.prev. Move to null (was stored in temp). Loop ends as current is null.',
      action: 'move-current-final'
    },
    {
      step: 26,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: null, next: 3, highlighted: false, processed: true, swapped: true }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 6,
      description: '🔄 Loop Exit: while (current !== null). current is null, exit loop. All nodes have been processed and pointers swapped.',
      action: 'loop-exit'
    },
    {
      step: 27,
      list: [
        { value: 10, prev: 1, next: null, highlighted: false, processed: true, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: true, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: true, swapped: true },
        { value: 40, prev: null, next: 3, highlighted: false, processed: true, swapped: true }
      ],
      result: [],
      current: null,
      temp: null,
      head: 0,
      currentLine: 11,
      description: '🎯 Find New Head: The original head (node 10) is now the tail. We need to return the new head (original tail).',
      action: 'find-new-head'
    },
    {
      step: 28,
      list: [
        { value: 40, prev: null, next: 3, highlighted: false, processed: false, swapped: true },
        { value: 30, prev: 3, next: 1, highlighted: false, processed: false, swapped: true },
        { value: 20, prev: 2, next: 0, highlighted: false, processed: false, swapped: true },
        { value: 10, prev: 1, next: null, highlighted: false, processed: false, swapped: true }
      ],
      result: [
        { value: 40, prev: null, next: 1, highlighted: false, processed: false },
        { value: 30, prev: 0, next: 2, highlighted: false, processed: false },
        { value: 20, prev: 1, next: 3, highlighted: false, processed: false },
        { value: 10, prev: 2, next: null, highlighted: false, processed: false }
      ],
      current: null,
      temp: null,
      head: null,
      currentLine: 12,
      description: '✅ Return Result: return current (was head.prev). The original head (node 10) is now the tail. New head is node 40. List reversed: 40↔30↔20↔10!',
      action: 'return-result'
    }
  ];

  const steps = reverseSteps;
  const currentStepData = steps[currentStep];

  const getCodeWithValues = (stepData: ReverseStep) => {
    const currentIndex = stepData.current ?? null;
    const tempIndex = stepData.temp ?? null;
    const headIndex = stepData.head ?? null;
    const currentNode = currentIndex !== null ? stepData.list[currentIndex] : null;
    const tempNode = tempIndex !== null ? stepData.list[tempIndex] : null;
    const currentVal = currentNode?.value ?? null;
    const tempVal = tempNode?.value ?? null;
    const resultCount = stepData.result.length;
    
    // Calculate variable values for each step
    const getVariableValues = () => {
      switch(stepData.step) {
        case 1:
          return 'head = 10↔20↔30↔40; current = null; temp = null; return = null';
        case 2:
          return 'head = 10↔20↔30↔40; head ≠ null = true; current = null; temp = null';
        case 3:
          return 'head = 10↔20↔30↔40; head.next ≠ null = true; current = null; temp = null';
        case 4:
          return 'head = 10↔20↔30↔40; current = 10; current.prev = null; current.next = 20';
        case 5:
          return 'head = 10↔20↔30↔40; current = 10; temp = null; initialized';
        case 6:
          return 'head = 10↔20↔30↔40; current = 10; current ≠ null = true; enter loop';
        case 7:
          return 'head = 10↔20↔30↔40; current = 10; temp = 20; store next';
        case 8:
          return 'head = 10↔20↔30↔40; current = 10; temp = 20; current.next = null';
        case 9:
          return 'head = 10↔20↔30↔40; current = 10; temp = 20; current.prev = 20';
        case 10:
          return 'head = 10↔20↔30↔40; current = 20; temp = 20; move to next';
        case 11:
          return 'head = 10↔20↔30↔40; current = 20; current ≠ null = true; continue loop';
        case 12:
          return 'head = 10↔20↔30↔40; current = 20; temp = 30; store next';
        case 13:
          return 'head = 10↔20↔30↔40; current = 20; temp = 30; current.next = 10';
        case 14:
          return 'head = 10↔20↔30↔40; current = 20; temp = 30; current.prev = 30';
        case 15:
          return 'head = 10↔20↔30↔40; current = 30; temp = 40; move to next';
        case 16:
          return 'head = 10↔20↔30↔40; current = 30; current ≠ null = true; continue loop';
        case 17:
          return 'head = 10↔20↔30↔40; current = 30; temp = 40; store next';
        case 18:
          return 'head = 10↔20↔30↔40; current = 30; temp = 40; current.next = 20';
        case 19:
          return 'head = 10↔20↔30↔40; current = 30; temp = 40; current.prev = 40';
        case 20:
          return 'head = 10↔20↔30↔40; current = 40; temp = null; move to next';
        case 21:
          return 'head = 10↔20↔30↔40; current = 40; current ≠ null = true; final loop';
        case 22:
          return 'head = 10↔20↔30↔40; current = 40; temp = null; store next (null)';
        case 23:
          return 'head = 10↔20↔30↔40; current = 40; temp = null; current.next = 30';
        case 24:
          return 'head = 10↔20↔30↔40; current = 40; temp = null; current.prev = null';
        case 25:
          return 'head = 10↔20↔30↔40; current = null; temp = null; loop ends';
        case 26:
          return 'head = 10↔20↔30↔40; current = null; all nodes processed; exit loop';
        case 27:
          return 'head = 10↔20↔30↔40; current = null; find new head (original tail)';
        case 28:
          return 'head = 40↔30↔20↔10; current = null; temp = null; return = 40↔30↔20↔10';
        default:
          return `current = ${currentVal ?? 'null'}; temp = ${tempVal ?? 'null'}`;
      }
    };
    
    const variableValues = getVariableValues();
    const prevVal = currentNode && currentNode.prev !== null ? stepData.list[currentNode.prev]?.value ?? 'null' : 'null';
    
    return [
      { line: 1, code: 'function reverseDoublyLinkedList(head) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
      { line: 2, code: '  if (head === null) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `head !== null = ${headIndex !== null || stepData.step < 28}` : '' },
      { line: 3, code: '  if (head.next === null) return head;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? `head.next !== null = ${headIndex !== null && stepData.list[headIndex] && stepData.list[headIndex]?.next !== null}` : '' },
      { line: 4, code: '  let current = head;', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? `current = ${currentVal ?? 'null'}` : '' },
      { line: 5, code: '  let temp = null;', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? `temp = ${tempVal ?? 'null'}` : '' },
      { line: 6, code: '  while (current !== null) {', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `current ≠ null = ${currentIndex !== null}` : '' },
      { line: 7, code: '    temp = current.next;', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `temp = ${tempVal ?? 'null'}` : '' },
      { line: 8, code: '    current.next = current.prev;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `current.next = ${prevVal}` : '' },
      { line: 9, code: '    current.prev = temp;', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `current.prev = ${tempVal ?? 'null'}` : '' },
      { line: 10, code: '    current = current.prev;', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 ? `current = ${tempVal ?? 'null'}` : '' },
      { line: 11, code: '  }', active: false, indent: 1, values: stepData.step >= 26 ? 'all nodes processed' : '' },
      { line: 12, code: '  return current;', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? `return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('↔') : '40↔30↔20↔10'}` : '' },
      { line: 13, code: '}', active: false, indent: 0, values: stepData.step >= 28 ? 'O(n) time complexity' : '' }
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

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader icon={RefreshCw} category="DSA · Linked Lists" title="Reverse Doubly Linked List" description="Master the art of reversing doubly linked lists with detailed step-by-step animations" colorTheme="blue" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['O(n) Time', 'In-Place', 'Space: O(1)', 'Bidirectional'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Pointer Swapping', desc: 'Swap prev and next pointers for each node' },
              { title: 'In-Place Operation', desc: 'Reverse without using extra space' },
              { title: 'Traversal Strategy', desc: 'Use original next as new traversal direction' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-blue-600" />The Problem</CardTitle><CardDescription>Reversing a doubly linked list by swapping pointers</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the <strong>head</strong> of a doubly linked list, reverse the list in-place. The algorithm should swap both <strong>prev</strong> and <strong>next</strong> pointers for each node.</p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2"><RefreshCw className="w-5 h-5" /> Reversal Process</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-blue-300">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Original List</p>
                <div className="font-mono text-sm text-center mb-2">null ↔ 10 ↔ 20 ↔ 30 ↔ 40 ↔ null</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Head points to node 10, tail points to node 40</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-indigo-300">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">After Reversal</p>
                <div className="font-mono text-sm text-center mb-2">null ↔ 40 ↔ 30 ↔ 20 ↔ 10 ↔ null</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Head now points to node 40, tail points to node 10</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Reversal Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how pointers are swapped to reverse the doubly linked list</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-blue-300 dark:border-blue-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">
                    reverseDoublyLinkedList.js
                  </span>
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
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-blue-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-blue-900 dark:text-blue-100 mt-0.5">
                      {currentStepData.action === 'init' && '📋 Problem Setup'}
                      {currentStepData.action === 'null-check' && '🔍 Edge Case Check'}
                      {currentStepData.action === 'single-node-check' && '🔍 Single Node Check'}
                      {currentStepData.action === 'init-current' && '📍 Initialize Current'}
                      {currentStepData.action === 'init-temp' && '🔄 Initialize Temp'}
                      {currentStepData.action === 'loop-entry-1' && '🔄 Loop Entry (Node 10)'}
                      {currentStepData.action === 'store-next-1' && '💾 Store Next (Node 10)'}
                      {currentStepData.action === 'swap-next-1' && '🔄 Swap Next Pointer (Node 10)'}
                      {currentStepData.action === 'swap-prev-1' && '🔄 Swap Prev Pointer (Node 10)'}
                      {currentStepData.action === 'move-current-1' && '➡️ Move Current (to Node 20)'}
                      {currentStepData.action === 'loop-entry-2' && '🔄 Loop Continue (Node 20)'}
                      {currentStepData.action === 'store-next-2' && '💾 Store Next (Node 20)'}
                      {currentStepData.action === 'swap-next-2' && '🔄 Swap Next Pointer (Node 20)'}
                      {currentStepData.action === 'swap-prev-2' && '🔄 Swap Prev Pointer (Node 20)'}
                      {currentStepData.action === 'move-current-2' && '➡️ Move Current (to Node 30)'}
                      {currentStepData.action === 'loop-entry-3' && '🔄 Loop Continue (Node 30)'}
                      {currentStepData.action === 'store-next-3' && '💾 Store Next (Node 30)'}
                      {currentStepData.action === 'swap-next-3' && '🔄 Swap Next Pointer (Node 30)'}
                      {currentStepData.action === 'swap-prev-3' && '🔄 Swap Prev Pointer (Node 30)'}
                      {currentStepData.action === 'move-current-3' && '➡️ Move Current (to Node 40)'}
                      {currentStepData.action === 'loop-entry-4' && '🔄 Final Loop (Node 40)'}
                      {currentStepData.action === 'store-next-4' && '💾 Store Next (Node 40)'}
                      {currentStepData.action === 'swap-next-4' && '🔄 Swap Next Pointer (Node 40)'}
                      {currentStepData.action === 'swap-prev-4' && '🔄 Swap Prev Pointer (Node 40)'}
                      {currentStepData.action === 'move-current-final' && '➡️ Move Current (to null)'}
                      {currentStepData.action === 'loop-exit' && '🔄 Loop Exit'}
                      {currentStepData.action === 'find-new-head' && '🎯 Find New Head'}
                      {currentStepData.action === 'return-result' && '✅ Return Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-blue-900 dark:text-blue-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Doubly Linked List Visualization:</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">Original: 4 nodes</Badge>
                  <Badge variant="outline" className="text-xs border-green-400 text-green-600">Result: {currentStepData.result.length || 4} nodes</Badge>
                </div>
              </div>
              
              <div className="space-y-8 px-8 py-12 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                
                {/* Original List */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">Current List State</div>
                  <div className="flex items-center justify-center gap-3 min-w-max relative">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.list.map((node, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {currentStepData.current === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">current</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-green-500 to-green-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {node.swapped && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-80px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-sm mb-1">🔄</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500 whitespace-nowrap shadow">
                                Pointers Swapped
                              </div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow transition-all duration-300 ${
                          node.swapped ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 
                          node.highlighted ? 'border-blue-400 bg-blue-50 dark:bg-blue-950/20 node-pulse' : 
                          node.processed ? 'border-slate-300 dark:border-slate-600' : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          <div className={`px-2 py-2 border-r-2 transition-colors duration-300 ${
                            node.swapped ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 pointer-swap' :
                            node.highlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' :
                            node.processed ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}>
                            <div className="flex flex-col items-center">
                              <ArrowLeft className={`w-3 h-3 ${
                                node.swapped ? 'text-blue-700 dark:text-blue-300' :
                                node.highlighted ? 'text-blue-700 dark:text-blue-300' :
                                node.processed ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'
                              }`} />
                              <span className="text-xs mt-1 font-medium">prev</span>
                            </div>
                          </div>
                          <div className={`px-4 py-2 border-r-2 transition-colors duration-300 ${
                            node.swapped ? 'bg-white dark:bg-slate-900 border-blue-500' :
                            node.highlighted ? 'bg-blue-50 dark:bg-blue-900/50 border-blue-500' :
                            node.processed ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}>
                            <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{node.value}</div>
                          </div>
                          <div className={`px-2 py-2 transition-colors duration-300 ${
                            node.swapped ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 pointer-swap' :
                            node.highlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' :
                            node.processed ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-700'
                          }`}>
                            <div className="flex flex-col items-center">
                              <ArrowRight className={`w-3 h-3 ${
                                node.swapped ? 'text-blue-700 dark:text-blue-300' :
                                node.highlighted ? 'text-blue-700 dark:text-blue-300' :
                                node.processed ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'
                              }`} />
                              <span className="text-xs mt-1 font-medium">next</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                  </div>
                </div>

                {/* Result List */}
                {currentStepData.result.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-green-700 dark:text-green-300 text-center">
                      Reversed List (Complete)
                    </div>
                    <div className="flex items-center justify-center gap-3 min-w-max">
                      <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                      {currentStepData.result.map((node, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex border-2 rounded-lg overflow-hidden shadow transition-all duration-300 border-green-500 dark:border-green-400">
                            <div className="px-2 py-2 border-r-2 bg-green-100 dark:bg-green-900 border-green-500">
                              <div className="flex flex-col items-center">
                                <ArrowLeft className="w-3 h-3 text-green-900 dark:text-green-100" />
                                <span className="text-xs mt-1 font-medium">prev</span>
                              </div>
                            </div>
                            <div className="px-4 py-2 border-r-2 bg-white dark:bg-slate-900 border-green-500">
                              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{node.value}</div>
                            </div>
                            <div className="px-2 py-2 bg-green-200 dark:bg-green-800">
                              <div className="flex flex-col items-center">
                                <ArrowRight className="w-3 h-3 text-green-900 dark:text-green-100" />
                                <span className="text-xs mt-1 font-medium">next</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">null</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Alert className="border-blue-200 dark:border-blue-700">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <AlertTitle>Key Insight</AlertTitle>
              <AlertDescription>
                In doubly linked lists, we can reverse in O(n) time and O(1) space by swapping prev and next pointers for each node. The original head becomes the new tail, and we traverse using the original next pointers (now stored in prev).
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

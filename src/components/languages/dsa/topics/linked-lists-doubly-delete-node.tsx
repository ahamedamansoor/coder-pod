'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Trash2, ArrowRight, ArrowLeft, AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsDoublyDeleteNode() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [deleteType, setDeleteType] = useState<'beginning' | 'end' | 'middle'>('beginning');

  const animationStyles = `
    @keyframes nodePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes deleteGlow {
      0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.9); }
    }
    @keyframes pointerMove {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }
    @keyframes nodeDelete {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
      100% { opacity: 0; transform: scale(0); }
    }
    @keyframes slideInResult {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .node-pulse { animation: nodePulse 0.8s ease-in-out infinite; }
    .delete-glow { animation: deleteGlow 1.5s ease-in-out infinite; }
    .pointer-move { animation: pointerMove 1s ease-in-out infinite; }
    .node-delete { animation: nodeDelete 0.6s ease-out; }
    .slide-in-result { animation: slideInResult 0.5s ease-out; }
  `;

  // Delete at beginning: 10↔20↔30↔40 becomes 20↔30↔40 (delete node 10)
  const beginningSteps: DoublyDeleteStep[] = [
    {
      step: 1,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      temp: null,
      currentLine: 1,
      description: '📋 Problem Setup: Delete the first node from doubly linked list 10↔20↔30↔40. Target: Remove node 10, result should be 20↔30↔40.',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      temp: null,
      currentLine: 2,
      description: '🔍 Null Check: if (head === null) return null. List is not empty (head points to node 10), so we can proceed.',
      action: 'null-check'
    },
    {
      step: 3,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      temp: 0,
      currentLine: 3,
      description: '📍 Store Reference: const temp = head. Store reference to current head (node 10) so we can delete it later.',
      action: 'store-temp'
    },
    {
      step: 4,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: null, next: 2, highlighted: true, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 1,
      temp: 0,
      currentLine: 4,
      description: '🔗 Update Head: head = head.next. Move head pointer from node 10 to node 20. New head is now node 20.',
      action: 'update-head'
    },
    {
      step: 5,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: null, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 1,
      temp: 0,
      currentLine: 5,
      description: '🔗 Update New Head Prev: head.prev = null. Set new head\'s prev pointer to null since it\'s now the first node.',
      action: 'update-head-prev'
    },
    {
      step: 6,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: true },
        { value: 20, prev: null, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 1,
      temp: 0,
      currentLine: 6,
      description: '🗑️ Delete Node: // delete temp. Node 10 is now disconnected from both sides and can be garbage collected.',
      action: 'delete-node'
    },
    {
      step: 7,
      list: [
        { value: 20, prev: null, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [
        { value: 20, prev: null, next: 1, highlighted: false, processed: false },
        { value: 30, prev: 0, next: 2, highlighted: false, processed: false },
        { value: 40, prev: 1, next: null, highlighted: false, processed: false }
      ],
      head: 0,
      temp: null,
      currentLine: 7,
      description: '✅ Return Result: return head. Returns the modified list: 20↔30↔40. Successfully deleted first node in O(1) time!',
      action: 'return-result'
    }
  ];

  // Delete at end: 10↔20↔30↔40 becomes 10↔20↔30 (delete node 40)
  const endSteps: DoublyDeleteStep[] = [
    {
      step: 1,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      tail: null,
      currentLine: 1,
      description: '📋 Problem Setup: Delete the last node from doubly linked list 10↔20↔30↔40. Target: Remove node 40, result should be 10↔20↔30.',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      tail: null,
      currentLine: 2,
      description: '🔍 Null Check: if (head === null) return null. List is not empty, so we can proceed with deletion.',
      action: 'null-check'
    },
    {
      step: 3,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: true, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      tail: 3,
      currentLine: 3,
      description: '🔍 Find Tail: In doubly linked list with tail pointer, we can directly access last node. tail points to node 40.',
      action: 'find-tail'
    },
    {
      step: 4,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      tail: 3,
      currentLine: 4,
      description: '🔗 Update Prev Node: tail.prev.next = null. Set node 30\'s next pointer to null, disconnecting node 40.',
      action: 'update-prev-next'
    },
    {
      step: 5,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: null, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: true }
      ],
      result: [],
      head: 0,
      tail: 2,
      currentLine: 5,
      description: '🔗 Update Tail: tail = tail.prev. Move tail pointer from node 40 to node 30. New tail is now node 30.',
      action: 'update-tail'
    },
    {
      step: 6,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false },
        { value: 30, prev: 1, next: null, highlighted: false, processed: false }
      ],
      head: 0,
      tail: null,
      currentLine: 6,
      description: '✅ Return Result: return head. Returns the modified list: 10↔20↔30. Successfully deleted last node in O(1) time with tail pointer!',
      action: 'return-result'
    }
  ];

  // Delete middle node: 10↔20↔30↔40 becomes 10↔20↔40 (delete node 30)
  const middleSteps: DoublyDeleteStep[] = [
    {
      step: 1,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: null,
      target: 30,
      currentLine: 1,
      description: '📋 Problem Setup: Delete node with value 30 from doubly linked list 10↔20↔30↔40. Target: Remove node 30, result should be 10↔20↔40.',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: null,
      target: 30,
      currentLine: 2,
      description: '🔍 Head Check: if (head.data === target). head.data (10) ≠ target (30), so target is not the head node.',
      action: 'head-check'
    },
    {
      step: 3,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 0,
      target: 30,
      currentLine: 3,
      description: '📍 Initialize Current: let current = head. Start traversal from head (node 10) to find the target node.',
      action: 'init-current'
    },
    {
      step: 4,
      list: [
        { value: 10, prev: null, next: 1, highlighted: true, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 0,
      target: 30,
      currentLine: 4,
      description: '🔍 Check Next: while (current !== null && current.data !== target). current.data (10) ≠ target (30), continue loop.',
      action: 'loop-check-1'
    },
    {
      step: 5,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 1,
      target: 30,
      currentLine: 5,
      description: '➡️ Move Current: current = current.next. Move from node 10 to node 20. Getting closer to target.',
      action: 'move-current-1'
    },
    {
      step: 6,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 1,
      target: 30,
      currentLine: 4,
      description: '🔍 Check Next: while (current !== null && current.data !== target). current.data (20) ≠ target (30), continue loop.',
      action: 'loop-check-2'
    },
    {
      step: 7,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 2,
      target: 30,
      currentLine: 5,
      description: '➡️ Move Current: current = current.next. Move from node 20 to node 30. Now at target node!',
      action: 'move-current-2'
    },
    {
      step: 8,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: true, processed: false, toDelete: false },
        { value: 40, prev: 2, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 2,
      target: 30,
      currentLine: 6,
      description: '🎯 Target Found: current.data (30) === target (30)! Found the node to delete.',
      action: 'target-found'
    },
    {
      step: 9,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 2, highlighted: true, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: false, toDelete: true },
        { value: 40, prev: 2, next: null, highlighted: true, processed: false, toDelete: false }
      ],
      result: [],
      head: 0,
      current: 2,
      target: 30,
      currentLine: 7,
      description: '🔗 Update Neighbors: current.prev.next = current.next AND current.next.prev = current.prev. Connect node 20 to node 40, bypassing node 30.',
      action: 'update-neighbors'
    },
    {
      step: 10,
      list: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false, toDelete: false },
        { value: 20, prev: 0, next: 3, highlighted: false, processed: false, toDelete: false },
        { value: 30, prev: 1, next: 3, highlighted: false, processed: true, toDelete: true },
        { value: 40, prev: 1, next: null, highlighted: false, processed: false, toDelete: false }
      ],
      result: [
        { value: 10, prev: null, next: 1, highlighted: false, processed: false },
        { value: 20, prev: 0, next: 2, highlighted: false, processed: false },
        { value: 40, prev: 1, next: null, highlighted: false, processed: false }
      ],
      head: 0,
      current: null,
      target: 30,
      currentLine: 8,
      description: '✅ Return Result: return head. Returns the modified list: 10↔20↔40. Successfully deleted middle node in O(n) time (search) + O(1) deletion!',
      action: 'return-result'
    }
  ];

  type DoublyDeleteNode = {
    value: number;
    prev: number | null;
    next: number | null;
    highlighted: boolean;
    processed: boolean;
    toDelete: boolean;
  };

  type DoublyDeleteResultNode = {
    value: number;
    prev: number | null;
    next: number | null;
    highlighted: boolean;
    processed: boolean;
  };

  type DoublyDeleteStep = {
    step: number;
    list: DoublyDeleteNode[];
    result: DoublyDeleteResultNode[];
    head: number | null;
    tail?: number | null;
    temp?: number | null;
    current?: number | null;
    target?: number | null;
    currentLine: number;
    description: string;
    action: string;
  };

  const getSteps = (): DoublyDeleteStep[] => {
    switch(deleteType) {
      case 'beginning': return beginningSteps;
      case 'end': return endSteps;
      case 'middle': return middleSteps;
      default: return beginningSteps;
    }
  };

  const steps = getSteps();
  const currentStepData = steps[currentStep];

  const getCodeWithValues = (stepData: DoublyDeleteStep) => {
    const headIndex = stepData.head ?? null;
    const tempIndex = stepData.temp ?? null;
    const currentIndex = stepData.current ?? null;
    const tailIndex = stepData.tail ?? null;
    const targetVal = stepData.target ?? null;
    const headVal = headIndex !== null ? stepData.list[headIndex]?.value ?? null : null;
    const tempVal = tempIndex !== null ? stepData.list[tempIndex]?.value ?? null : null;
    const currentVal = currentIndex !== null ? stepData.list[currentIndex]?.value ?? null : null;
    const tailVal = tailIndex !== null ? stepData.list[tailIndex]?.value ?? null : null;
    const resultCount = stepData.result.length;

    const formatVal = (val: number | null) => (val ?? 'null');
    const getListVal = (index: number | null) =>
      index !== null && index >= 0 && index < stepData.list.length
        ? stepData.list[index]?.value ?? 'null'
        : 'null';
    
    // Calculate variable values for each step
    const getVariableValues = () => {
      if (deleteType === 'beginning') {
        switch(stepData.step) {
          case 1:
            return 'head = 10↔20↔30↔40; temp = null; return = null';
          case 2:
            return 'head = 10↔20↔30↔40; head !== null = true; temp = null';
          case 3:
            return 'head = 10↔20↔30↔40; temp = 10; temp.prev = null; temp.next = 20';
          case 4:
            return 'head = 20↔30↔40; temp = 10; head = temp.next';
          case 5:
            return 'head = 20↔30↔40; temp = 10; head.prev = null';
          case 6:
            return 'head = 20↔30↔40; temp = 10; temp deleted';
          case 7:
            return 'head = 20↔30↔40; temp = null; return = 20↔30↔40';
          default:
            return `head = ${formatVal(headVal)}↔...; temp = ${formatVal(tempVal)}`;
        }
      } else if (deleteType === 'end') {
        switch(stepData.step) {
          case 1:
            return 'head = 10↔20↔30↔40; tail = null; return = null';
          case 2:
            return 'head = 10↔20↔30↔40; head ≠ null = true; tail = null';
          case 3:
            return 'head = 10↔20↔30↔40; tail = 40; tail.prev = 30';
          case 4:
            return 'head = 10↔20↔30↔40; tail = 40; tail.prev.next = null';
          case 5:
            return 'head = 10↔20↔30↔40; tail = 30; tail.prev = 20';
          case 6:
            return 'head = 10↔20↔30; tail = null; return = 10↔20↔30';
          default:
            return `head = ${formatVal(headVal)}↔...; tail = ${formatVal(tailVal)}`;
        }
      } else {
        switch(stepData.step) {
          case 1:
            return 'head = 10↔20↔30↔40; current = null; target = 30';
          case 2:
            return 'head = 10↔20↔30↔40; head.data = 10 ≠ 30; current = null';
          case 3:
            return 'head = 10↔20↔30↔40; current = 10; current.prev = null; current.next = 20';
          case 4:
            return 'head = 10↔20↔30↔40; current = 10; current.data ≠ 30; continue';
          case 5:
            return 'head = 10↔20↔30↔40; current = 20; current.prev = 10; current.next = 30';
          case 6:
            return 'head = 10↔20↔30↔40; current = 20; current.data ≠ 30; continue';
          case 7:
            return 'head = 10↔20↔30↔40; current = 30; current.prev = 20; current.next = 40';
          case 8:
            return 'head = 10↔20↔30↔40; current = 30; current.data = 30 = target; found!';
          case 9:
            return 'head = 10↔20↔30↔40; current = 30; 20.next = 40; 40.prev = 20; 30 bypassed';
          case 10:
            return 'head = 10↔20↔40; current = null; return = 10↔20↔40';
          default:
            return `head = ${formatVal(headVal)}↔...; current = ${formatVal(currentVal)}; target = ${formatVal(targetVal)}`;
        }
      }
    };
    
    const variableValues = getVariableValues();
    
    if (deleteType === 'beginning') {
      return [
        { line: 1, code: 'function deleteAtBeginning(head) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
        { line: 2, code: '  if (head === null) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `head !== null = ${stepData.head !== null}` : '' },
        { line: 3, code: '  const temp = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? `temp = ${formatVal(tempVal)}` : '' },
        { line: 4, code: '  head = head.next;', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? `head = ${formatVal(headVal)}` : '' },
        { line: 5, code: '  head.prev = null;', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? `head.prev = null` : '' },
        { line: 6, code: '  // delete temp', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `temp = ${formatVal(tempVal)} deleted` : '' },
        { line: 7, code: '  return head;', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('↔') : '20↔30↔40'}` : '' },
        { line: 8, code: '}', active: false, indent: 0, values: stepData.step >= 7 ? 'O(1) time complexity' : '' }
      ];
    } else if (deleteType === 'end') {
      return [
        { line: 1, code: 'function deleteAtEnd(head, tail) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
        { line: 2, code: '  if (head === null) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `head !== null = ${stepData.head !== null}` : '' },
        { line: 3, code: '  const lastNode = tail;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? `lastNode = ${formatVal(tailVal)}` : '' },
        { line: 4, code: '  lastNode.prev.next = null;', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? `lastNode.prev.next = null` : '' },
        { line: 5, code: '  tail = lastNode.prev;', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? `tail = ${formatVal(tailVal)}` : '' },
        { line: 6, code: '  // delete lastNode', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `lastNode = ${formatVal(tailVal)} deleted` : '' },
        { line: 7, code: '  return head;', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('↔') : '10↔20↔30'}` : '' },
        { line: 8, code: '}', active: false, indent: 0, values: stepData.step >= 6 ? 'O(1) time with tail pointer' : '' }
      ];
    } else {
      return [
        { line: 1, code: 'function deleteByValue(head, target) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
        { line: 2, code: '  if (head === null) return null;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `head !== null = ${stepData.head !== null}` : '' },
        { line: 3, code: '  let current = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? `current = ${formatVal(currentVal)}` : '' },
        { line: 4, code: '  while (current !== null && current.data !== target) {', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? `current.data ≠ ${formatVal(targetVal)}` : '' },
        { line: 5, code: '    current = current.next;', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 ? `current = ${formatVal(currentVal)}` : '' },
        { line: 6, code: '  }', active: false, indent: 1, values: stepData.step >= 7 ? 'found target node' : '' },
        { line: 7, code: '  if (current === null) return head;', active: false, indent: 1, values: '' },
        { line: 8, code: '  current.prev.next = current.next;', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `current.prev.next = ${currentIndex !== null && currentIndex + 1 < stepData.list.length ? getListVal(currentIndex + 1) : 'null'}` : '' },
        { line: 9, code: '  current.next.prev = current.prev;', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `current.next.prev = ${currentIndex !== null && currentIndex - 1 >= 0 ? getListVal(currentIndex - 1) : 'null'}` : '' },
        { line: 10, code: '  // delete current', active: false, indent: 1, values: '' },
        { line: 11, code: '  return head;', active: stepData.currentLine === 8, indent: 1, values: stepData.currentLine === 8 ? `return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('↔') : '10↔20↔40'}` : '' },
        { line: 12, code: '}', active: false, indent: 0, values: stepData.step >= 10 ? 'O(n) search + O(1) deletion' : '' }
      ];
    }
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

  const handleTypeChange = (type: 'beginning' | 'end' | 'middle') => {
    setDeleteType(type);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader icon={Trash2} category="DSA · Linked Lists" title="Delete Node in O(1) Time" description="Master deletion operations in doubly linked lists with detailed step-by-step animations" colorTheme="red" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {deleteType === 'beginning' ? ['O(1) Time', 'Head Update', 'Space: O(1)'] : deleteType === 'end' ? ['O(1) Time', 'Tail Pointer', 'Space: O(1)'] : ['O(n) Search', 'O(1) Delete', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Bidirectional Pointers', desc: 'Update both prev and next pointers' },
              { title: 'Tail Pointer Advantage', desc: 'O(1) deletion at end with tail' },
              { title: 'Memory Management', desc: 'Proper disconnection from both sides' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-red-600" />The Problem</CardTitle><CardDescription>Deleting nodes from doubly linked lists efficiently</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the <strong>head</strong> of a doubly linked list, delete nodes at different positions with optimal time complexity. Doubly linked lists have both <strong>prev</strong> and <strong>next</strong> pointers.</p>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2"><Trash2 className="w-5 h-5" /> Three Deletion Types</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-red-300">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">Delete at Beginning: O(1)</p>
                <div className="font-mono text-sm text-center mb-2">null ↔ 10 ↔ 20 ↔ 30 ↔ 40</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Delete node 10 → null ↔ 20 ↔ 30 ↔ 40</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-orange-300">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">Delete at End: O(1) with tail</p>
                <div className="font-mono text-sm text-center mb-2">10 ↔ 20 ↔ 30 ↔ 40 ↔ null</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Delete node 40 → 10 ↔ 20 ↔ 30 ↔ null</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-pink-300">
                <p className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2">Delete by Value: O(n) + O(1)</p>
                <div className="font-mono text-sm text-center mb-2">10 ↔ 20 ↔ 30 ↔ 40</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">Delete node 30 → 10 ↔ 20 ↔ 40</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            Deletion Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how different deletion operations work in doubly linked lists</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                onClick={() => handleTypeChange('beginning')}
                variant={deleteType === 'beginning' ? 'default' : 'outline'}
                className={deleteType === 'beginning' ? 'bg-red-600 hover:bg-red-700' : ''}
              >
                Delete at Beginning (O(1))
              </Button>
              <Button 
                onClick={() => handleTypeChange('end')}
                variant={deleteType === 'end' ? 'default' : 'outline'}
                className={deleteType === 'end' ? 'bg-orange-600 hover:bg-orange-700' : ''}
              >
                Delete at End (O(1) with tail)
              </Button>
              <Button 
                onClick={() => handleTypeChange('middle')}
                variant={deleteType === 'middle' ? 'default' : 'outline'}
                className={deleteType === 'middle' ? 'bg-pink-600 hover:bg-pink-700' : ''}
              >
                Delete by Value (O(n) + O(1))
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-red-300 dark:border-red-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-red-900 dark:text-red-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-red-600 focus:ring-red-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 rounded-lg border-2 border-red-300 dark:border-red-700">
              <span className="text-sm font-bold text-red-900 dark:text-red-100">Step {currentStep + 1} / {steps.length}</span>
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
                    {deleteType === 'beginning' ? 'deleteAtBeginning.js' : deleteType === 'end' ? 'deleteAtEnd.js' : 'deleteByValue.js'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-red-50 dark:bg-red-900/20 border-l-2 border-red-400 dark:border-red-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-red-600 dark:text-red-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-300 dark:border-red-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-red-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-red-900 dark:text-red-100 mt-0.5">
                      {currentStepData.action === 'init' && '📋 Problem Setup'}
                      {currentStepData.action === 'null-check' && '🔍 Null Check'}
                      {currentStepData.action === 'head-check' && '🔍 Head Check'}
                      {currentStepData.action === 'store-temp' && '📍 Store Reference'}
                      {currentStepData.action === 'init-current' && '📍 Initialize Current'}
                      {currentStepData.action === 'update-head' && '🔗 Update Head'}
                      {currentStepData.action === 'update-head-prev' && '🔗 Update Head Prev'}
                      {currentStepData.action === 'find-tail' && '🔍 Find Tail'}
                      {currentStepData.action === 'update-prev-next' && '🔗 Update Prev Next'}
                      {currentStepData.action === 'update-tail' && '🔗 Update Tail'}
                      {currentStepData.action === 'loop-check-1' && '🔄 Loop Check (1)'}
                      {currentStepData.action === 'loop-check-2' && '🔄 Loop Check (2)'}
                      {currentStepData.action === 'target-check-1' && '🎯 Target Check (1)'}
                      {currentStepData.action === 'target-found' && '🎯 Target Found'}
                      {currentStepData.action === 'move-current-1' && '➡️ Move Current (1)'}
                      {currentStepData.action === 'move-current-2' && '➡️ Move Current (2)'}
                      {currentStepData.action === 'update-neighbors' && '🔗 Update Neighbors'}
                      {currentStepData.action === 'delete-node' && '🗑️ Delete Node'}
                      {currentStepData.action === 'return-result' && '✅ Return Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-red-900 dark:text-red-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-red-900 dark:text-red-100">Doubly Linked List Visualization:</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">Original: 4 nodes</Badge>
                  <Badge variant="outline" className="text-xs border-green-400 text-green-600">Result: {currentStepData.result.length || 3} nodes</Badge>
                </div>
              </div>
              
              <div className="space-y-8 px-8 py-12 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                
                {/* Original List */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">Original List</div>
                  <div className="flex items-center justify-center gap-3 min-w-max relative">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.list.map((node, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {currentStepData.head === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">head</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-blue-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {(deleteType !== 'beginning' && currentStepData.current === index) && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">current</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-green-500 to-green-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {(deleteType === 'end' && currentStepData.tail === index) && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded border-2 border-purple-500 whitespace-nowrap shadow-lg">tail</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 to-purple-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-purple-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {node.toDelete && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">🗑️</div>
                              <div className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/80 px-3 py-1.5 rounded border-2 border-red-500 whitespace-nowrap shadow-lg delete-glow">DELETE</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-red-500 to-red-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                          node.toDelete ? 'border-red-500 dark:border-red-400 delete-glow' : 
                          node.highlighted ? 'scale-110 ring-4 ring-blue-200 dark:ring-blue-900 node-pulse' : 
                          node.processed ? 'border-slate-300 dark:border-slate-600' : 'border-slate-300 dark:border-slate-600'
                        } ${node.toDelete ? 'node-delete' : ''}`}>
                          <div className={`px-2 py-2 border-r-2 transition-colors ${
                            node.toDelete ? 'bg-red-100 dark:bg-red-900 border-red-500' :
                            node.highlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' :
                            node.processed ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}>
                            <ArrowLeft className={`w-3 h-3 ${
                              node.toDelete ? 'text-red-900 dark:text-red-100' :
                              node.highlighted ? 'text-blue-900 dark:text-blue-100' :
                              node.processed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'
                            }`} />
                          </div>
                          <div className={`px-4 py-2 border-r-2 transition-colors ${
                            node.toDelete ? 'bg-red-100 dark:bg-red-900 border-red-500' :
                            node.highlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' :
                            node.processed ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}>
                            <div className={`text-xl font-bold ${
                              node.toDelete ? 'text-red-900 dark:text-red-100' :
                              node.highlighted ? 'text-blue-900 dark:text-blue-100' :
                              node.processed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'
                            }`}>{node.value}</div>
                          </div>
                          <div className={`px-2 py-2 flex items-center ${
                            node.toDelete ? 'bg-red-200 dark:bg-red-800' :
                            node.highlighted ? 'bg-blue-200 dark:bg-blue-800' :
                            node.processed ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-700'
                          }`}>
                            <ArrowRight className={`w-3 h-3 ${
                              node.toDelete ? 'text-red-900 dark:text-red-100' :
                              node.highlighted ? 'text-blue-900 dark:text-blue-100' :
                              node.processed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'
                            }`} />
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
                    <div className="text-sm font-bold text-green-700 dark:text-green-300 text-center">Result List</div>
                    <div className="flex items-center justify-center gap-3 min-w-max">
                      <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                      {currentStepData.result.map((node, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 border-green-500 dark:border-green-400 slide-in-result">
                            <div className="px-2 py-2 border-r-2 bg-green-100 dark:bg-green-900 border-green-500">
                              <ArrowLeft className="w-3 h-3 text-green-900 dark:text-green-100" />
                            </div>
                            <div className="px-4 py-2 border-r-2 bg-green-100 dark:bg-green-900 border-green-500">
                              <div className="text-xl font-bold text-green-900 dark:text-green-100">{node.value}</div>
                            </div>
                            <div className="px-2 py-2 flex items-center bg-green-200 dark:bg-green-800">
                              <ArrowRight className="w-3 h-3 text-green-900 dark:text-green-100" />
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
            <Alert className="border-orange-200 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertTitle>Key Insight</AlertTitle>
              <AlertDescription>
                {deleteType === 'beginning' 
                  ? 'Doubly linked lists allow O(1) deletion at beginning by updating head and head.prev.'
                  : deleteType === 'end'
                  ? 'With tail pointer, doubly linked lists achieve O(1) deletion at end - impossible in singly linked lists!'
                  : 'Delete by value requires O(n) search but deletion itself is O(1) due to bidirectional pointers.'
                }
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

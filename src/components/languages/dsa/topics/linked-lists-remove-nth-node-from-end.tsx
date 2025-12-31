'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, Trash2, ArrowRight, AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsRemoveNthNodeFromEnd() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes nodePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes removeGlow {
      0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.9); }
    }
    @keyframes pointerMove {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }
    @keyframes nodeRemove {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
      100% { opacity: 0; transform: scale(0); }
    }
    @keyframes slideInResult {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .node-pulse { animation: nodePulse 0.8s ease-in-out infinite; }
    .remove-glow { animation: removeGlow 1.5s ease-in-out infinite; }
    .pointer-move { animation: pointerMove 1s ease-in-out infinite; }
    .node-remove { animation: nodeRemove 0.6s ease-out; }
    .slide-in-result { animation: slideInResult 0.5s ease-out; }
  `;

  // Remove 2nd node from end: 1→2→3→4→5 becomes 1→2→3→5 (remove node 4)
  const steps = [
    {
      step: 1,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: null,
      first: null,
      second: null,
      remove: null,
      n: 2,
      currentLine: 1,
      description: '📋 Problem Understanding: We need to remove the 2nd node from the end of list 1→2→3→4→5. Counting from end: 5(1st), 4(2nd), 3(3rd), 2(4th), 1(5th). Target: Remove node 4.',
      action: 'problem-understanding'
    },
    {
      step: 2,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: null,
      first: null,
      second: null,
      remove: null,
      n: 2,
      currentLine: 1,
      description: '🎯 Strategy Overview: Use two-pointer technique. First pointer moves n+1 steps ahead, then both move together. When first reaches end, second points before target.',
      action: 'strategy-overview'
    },
    {
      step: 3,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: null,
      remove: null,
      n: 2,
      currentLine: 2,
      description: '🏗️ Create Dummy Node: dummy = new ListNode(-1). This dummy node acts as a "virtual head" that simplifies edge cases, especially when we need to remove the actual head node.',
      action: 'create-dummy'
    },
    {
      step: 4,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: null,
      remove: null,
      n: 2,
      currentLine: 3,
      description: '🔗 Connect Dummy to Head: dummy.next = head. Now we have: dummy → 1 → 2 → 3 → 4 → 5 → null. This ensures we always have a node before the actual head.',
      action: 'connect-dummy'
    },
    {
      step: 5,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: -1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 4,
      description: '📍 Initialize First Pointer: first = dummy. Both pointers start at dummy. First will move ahead to create a gap of n+1 nodes between the two pointers.',
      action: 'init-first'
    },
    {
      step: 6,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: -1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 5,
      description: '📍 Initialize Second Pointer: second = dummy. Both pointers now at same position. Gap between them: 0 nodes. We will create a gap of n+1 = 3 nodes.',
      action: 'init-second'
    },
    {
      step: 7,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: -1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 7,
      description: '🔄 Setup First Loop: for (let i = 0; i <= n; i++). We need to move first pointer n+1 = 3 times (i = 0, 1, 2) to create the required gap.',
      action: 'setup-first-loop'
    },
    {
      step: 8,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: -1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 8,
      description: '🔢 Loop Check (i=0): i <= n? 0 <= 2 = TRUE. Continue loop. We will move first pointer while maintaining the gap calculation.',
      action: 'loop-check-1'
    },
    {
      step: 9,
      list: [
        { value: 1, highlighted: true, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 0,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 8,
      description: '➡️ Move First (i=0): first = first.next. First moves from dummy to node 1. Gap between first and second: 1 node. Second still at dummy.',
      action: 'move-first-1'
    },
    {
      step: 10,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 0,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 7,
      description: '🔢 Loop Check (i=1): i++ makes i = 1. Check: 1 <= 2 = TRUE. Continue loop. Need 2 more moves to reach gap of 3 nodes.',
      action: 'loop-check-2'
    },
    {
      step: 11,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: true, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 8,
      description: '➡️ Move First (i=1): first = first.next. First moves to node 2. Gap between first and second: 2 nodes. Getting closer to target gap.',
      action: 'move-first-2'
    },
    {
      step: 12,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 1,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 7,
      description: '🔢 Loop Check (i=2): i++ makes i = 2. Check: 2 <= 2 = TRUE. Continue loop. One more move needed to reach gap of 3 nodes.',
      action: 'loop-check-3'
    },
    {
      step: 13,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: true, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 2,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 8,
      description: '➡️ Move First (i=2): first = first.next. First moves to node 3. Gap between first and second: 3 nodes. Perfect! First is now n+1 positions ahead.',
      action: 'move-first-3'
    },
    {
      step: 14,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 2,
      second: -1,
      remove: null,
      n: 2,
      currentLine: 7,
      description: '🔢 Loop Check (i=3): i++ makes i = 3. Check: 3 <= 2 = FALSE. Exit first loop. Gap established: first at node 3, second at dummy (3 nodes apart).',
      action: 'first-loop-complete'
    },
    {
      step: 15,
      list: [
        { value: 1, highlighted: true, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: true, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 2,
      second: 0,
      remove: null,
      n: 2,
      currentLine: 11,
      description: '🔄 Main Loop Start: while (first !== null). First points to node 3 (not null), so enter loop. We will move both pointers together to maintain the gap.',
      action: 'main-loop-start'
    },
    {
      step: 16,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 2,
      second: 0,
      remove: null,
      n: 2,
      currentLine: 12,
      description: '➡️ Move First Pointer: first = first.next. First moves from node 3 to node 4. Gap will be maintained when second also moves.',
      action: 'move-first-main-1'
    },
    {
      step: 17,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 3,
      second: 0,
      remove: null,
      n: 2,
      currentLine: 13,
      description: '➡️ Move Second Pointer: second = second.next. Second moves from dummy to node 1. Gap maintained: first at node 4, second at node 1 (3 nodes apart).',
      action: 'move-second-main-1'
    },
    {
      step: 18,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: true, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: true, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 3,
      second: 1,
      remove: null,
      n: 2,
      currentLine: 11,
      description: '🔄 Continue Main Loop: First points to node 4 (not null), continue. Both pointers will move together again, maintaining the 3-node gap.',
      action: 'main-loop-continue-1'
    },
    {
      step: 19,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 3,
      second: 1,
      remove: null,
      n: 2,
      currentLine: 12,
      description: '➡️ Move First Pointer: first = first.next. First moves from node 4 to node 5. Getting closer to the end of the list.',
      action: 'move-first-main-2'
    },
    {
      step: 20,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 4,
      second: 1,
      remove: null,
      n: 2,
      currentLine: 13,
      description: '➡️ Move Second Pointer: second = second.next. Second moves from node 1 to node 2. Gap maintained: first at node 5, second at node 2 (3 nodes apart).',
      action: 'move-second-main-2'
    },
    {
      step: 21,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: true, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 4,
      second: 2,
      remove: null,
      n: 2,
      currentLine: 11,
      description: '🔄 Continue Main Loop: First points to node 5 (not null), continue. This is the final iteration before first reaches the end.',
      action: 'main-loop-continue-2'
    },
    {
      step: 22,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: 4,
      second: 2,
      remove: null,
      n: 2,
      currentLine: 12,
      description: '➡️ Move First Pointer: first = first.next. First moves from node 5 to null (end of list). This is the critical moment!',
      action: 'move-first-main-3'
    },
    {
      step: 23,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: true, processed: false, toRemove: false },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: 2,
      remove: 3,
      n: 2,
      currentLine: 13,
      description: '➡️ Move Second Pointer: second = second.next. Second moves from node 2 to node 3. Now second.next (node 4) is exactly the node we need to remove!',
      action: 'move-second-main-3'
    },
    {
      step: 24,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: true },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: 2,
      remove: 3,
      n: 2,
      currentLine: 11,
      description: '🛑 Main Loop Ends: while (first !== null). First is now null, so exit loop. Perfect positioning: second points to node 3, second.next points to node 4 (target).',
      action: 'main-loop-end'
    },
    {
      step: 25,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: true },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: 2,
      remove: 3,
      n: 2,
      currentLine: 15,
      description: '🎯 Target Identification: second points to node 3, so second.next (node 4) is our target. We need to skip node 4 and connect node 3 directly to node 5.',
      action: 'target-identification'
    },
    {
      step: 26,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: true, processed: false, toRemove: false },
        { value: 4, highlighted: false, processed: false, toRemove: true },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [],
      dummy: -1,
      first: null,
      second: 2,
      remove: 3,
      n: 2,
      currentLine: 16,
      description: '🗑️ Remove Operation: second.next = second.next.next. This means: node 3.next = node 4.next (which is node 5). We are essentially "skipping" node 4.',
      action: 'remove-operation'
    },
    {
      step: 27,
      list: [
        { value: 1, highlighted: false, processed: false, toRemove: false },
        { value: 2, highlighted: false, processed: false, toRemove: false },
        { value: 3, highlighted: false, processed: true, toRemove: false },
        { value: 4, highlighted: false, processed: true, toRemove: true },
        { value: 5, highlighted: false, processed: false, toRemove: false }
      ],
      result: [
        { value: 1, highlighted: false, processed: false },
        { value: 2, highlighted: false, processed: false },
        { value: 3, highlighted: false, processed: false },
        { value: 5, highlighted: false, processed: false }
      ],
      dummy: -1,
      first: null,
      second: 2,
      remove: null,
      n: 2,
      currentLine: 18,
      description: '✅ Return Result: return dummy.next. Since dummy.next points to node 1, we return the modified list: 1→2→3→5. Node 4 successfully removed!',
      action: 'return-result'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const firstVal = stepData.first !== null ? (stepData.first === -1 ? 'dummy' : stepData.list[stepData.first]?.value) : 'null';
    const secondVal = stepData.second !== null ? (stepData.second === -1 ? 'dummy' : stepData.list[stepData.second]?.value) : 'null';
    const removeVal = stepData.remove !== null ? stepData.list[stepData.remove]?.value : 'null';
    const resultCount = stepData.result.length;
    const dummyVal = stepData.dummy !== null ? (stepData.dummy === -1 ? 'dummy' : stepData.list[stepData.dummy]?.value) : 'null';
    
    // Calculate variable values for each step
    const getVariableValues = () => {
      switch(stepData.step) {
        case 1:
          return 'head = 1→2→3→4→5; n = 2; dummy = null; first = null; second = null';
        case 2:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = null';
        case 3:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = dummy; second = null';
        case 4:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = dummy; second = dummy';
        case 5:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = dummy; second = dummy; i = 0';
        case 6:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = dummy; second = dummy; i = 0; 0 ≤ 2 = true';
        case 7:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 1; second = dummy; i = 0; gap = 1';
        case 8:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 1; second = dummy; i = 1; 1 ≤ 2 = true';
        case 9:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 2; second = dummy; i = 1; gap = 2';
        case 10:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 2; second = dummy; i = 2; 2 ≤ 2 = true';
        case 11:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 3; second = dummy; i = 2; gap = 3';
        case 12:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 3; second = dummy; i = 3; 3 ≤ 2 = false';
        case 13:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 3; second = dummy; first ≠ null = true';
        case 14:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 4; second = dummy; gap maintained = 3';
        case 15:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 4; second = 1; gap maintained = 3';
        case 16:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 4; second = 1; first ≠ null = true';
        case 17:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 5; second = 2; gap maintained = 3';
        case 18:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = 5; second = 2; first ≠ null = true';
        case 19:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; loop ends';
        case 20:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; second.next = 4 (target)';
        case 21:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; target = 4; remove = true';
        case 22:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; 3.next = 5 (skip 4)';
        case 23:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; result = 1→2→3→5';
        case 24:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; return = dummy.next = 1→2→3→5';
        case 25:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; removed = 4; success = true';
        case 26:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; removed = 4; result = 1→2→3→5';
        case 27:
          return 'head = 1→2→3→4→5; n = 2; dummy = -1; dummy.next = 1; first = null; second = 3; removed = 4; return = 1→2→3→5';
        default:
          return `head = 1→2→3→4→5; n = ${stepData.n}; dummy = ${dummyVal}; first = ${firstVal}; second = ${secondVal}`;
      }
    };
    
    const variableValues = getVariableValues();
    
    return [
      { line: 1, code: 'function removeNthFromEnd(head, n) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step >= 1 ? variableValues : '' },
      { line: 2, code: '  let dummy = new ListNode(-1);', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `dummy = ${dummyVal}; dummy.next = ${stepData.step >= 2 ? '1' : 'null'}` : '' },
      { line: 3, code: '  dummy.next = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `dummy.next = ${stepData.step >= 3 ? '1' : 'null'}; dummy = ${dummyVal}` : '' },
      { line: 4, code: '  let first = dummy;', active: stepData.currentLine === 4, indent: 1, values: stepData.step >= 4 ? `first = ${firstVal}; dummy = ${dummyVal}` : '' },
      { line: 5, code: '  let second = dummy;', active: stepData.currentLine === 5, indent: 1, values: stepData.step >= 5 ? `second = ${secondVal}; first = ${firstVal}` : '' },
      { line: 6, code: '  ', active: false, indent: 1 },
      { line: 7, code: '  for (let i = 0; i <= n; i++) {', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `i = ${stepData.step >= 7 && stepData.step <= 12 ? Math.min(stepData.step - 7, 3) : 0}; n = ${stepData.n}; ${stepData.step >= 7 && stepData.step <= 12 ? `${Math.min(stepData.step - 7, 3)} <= ${stepData.n} = ${Math.min(stepData.step - 7, 3) <= stepData.n}` : ''}` : '' },
      { line: 8, code: '    first = first.next;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 && stepData.step >= 7 && stepData.step <= 11 ? `first = ${firstVal}; gap = ${stepData.step - 6}` : '' },
      { line: 9, code: '  }', active: false, indent: 1, values: stepData.step >= 12 ? `first loop complete; first = ${firstVal}; gap = ${stepData.n + 1}` : '' },
      { line: 10, code: '  ', active: false, indent: 1 },
      { line: 11, code: '  while (first !== null) {', active: stepData.currentLine === 11, indent: 1, values: stepData.currentLine === 11 ? `first = ${firstVal}; first !== null = ${stepData.first !== null}` : '' },
      { line: 12, code: '    first = first.next;', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? `first = ${firstVal}; second = ${secondVal}` : '' },
      { line: 13, code: '    second = second.next;', active: stepData.currentLine === 13, indent: 2, values: stepData.currentLine === 13 ? `second = ${secondVal}; gap maintained = ${stepData.n + 1}` : '' },
      { line: 14, code: '  }', active: false, indent: 1, values: stepData.step >= 19 ? `loop complete; first = ${firstVal}; second = ${secondVal}` : '' },
      { line: 15, code: '  ', active: false, indent: 1 },
      { line: 16, code: '  second.next = second.next.next;', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 ? `second.next = ${removeVal}; second.next.next = ${stepData.remove !== null && stepData.remove + 1 < stepData.list.length ? stepData.list[stepData.remove + 1]?.value : 'null'}; removing ${removeVal}` : '' },
      { line: 17, code: '  ', active: false, indent: 1 },
      { line: 18, code: '  return dummy.next;', active: stepData.currentLine === 18, indent: 1, values: stepData.currentLine === 18 ? `dummy.next = ${resultCount > 0 ? stepData.result.map(n => n.value).join('→') : '1→2→3→5'}; return = ${resultCount > 0 ? stepData.result.map(n => n.value).join('→') : '1→2→3→5'}` : '' },
      { line: 19, code: '}', active: false, indent: 0, values: stepData.step >= 27 ? 'function complete; node 4 removed successfully' : '' }
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
  
  // Calculate pointer values for display
  const firstVal = currentStepData.first !== null ? (currentStepData.first === -1 ? 'dummy' : currentStepData.list[currentStepData.first]?.value) : 'null';
  const secondVal = currentStepData.second !== null ? (currentStepData.second === -1 ? 'dummy' : currentStepData.list[currentStepData.second]?.value) : 'null';
  const removeVal = currentStepData.remove !== null ? currentStepData.list[currentStepData.remove]?.value : 'null';

  return (
    <div className="space-y-8">
      <style>{animationStyles}</style>
      <PageHeader icon={Trash2} category="DSA · Linked Lists" title="Remove Nth Node From End" description="Remove the nth node from the end of a linked list using two pointers" colorTheme="red" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Two Pointers', 'Dummy Node', 'Time: O(L)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Two Pointer Technique', desc: 'Use fast and slow pointers with n+1 gap' },
              { title: 'Dummy Node Strategy', desc: 'Handle edge cases like removing head' },
              { title: 'Single Pass Solution', desc: 'Find and remove target in one traversal' },
              { title: 'Pointer Manipulation', desc: 'Skip target node by updating next pointer' }
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
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-red-600" />The Problem</CardTitle><CardDescription>Removing nth node from end using two pointers</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the <strong>head</strong> of a linked list, remove the <strong>nth</strong> node from the end of the list and return its head. Can you do this in <strong>one pass</strong>?</p>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2"><Trash2 className="w-5 h-5" /> Example</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-red-300">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">Input List:</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3 → 4 → 5</div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">n = 2 (remove 2nd from end)</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-full">
                  <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-500">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-3">Output (after removal):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3 → 5</div>
                <p className="text-xs text-center text-red-600 dark:text-red-400">Node 4 (2nd from end) removed</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Two Pointer Strategy</h4>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>1. Create dummy node</strong> pointing to head (handles edge cases)</p>
              <p><strong>2. Move first pointer</strong> n+1 positions ahead</p>
              <p><strong>3. Move both pointers</strong> until first reaches end</p>
              <p><strong>4. Second pointer</strong> now points before target node</p>
              <p><strong>5. Skip target node</strong> by updating second.next</p>
              <p><strong>6. Return dummy.next</strong> as the new head</p>
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
            Removal Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how two pointers find and remove the target node</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-red-300 dark:border-red-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">removeNthFromEnd.js</span>
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
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">first:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{firstVal}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">second:</span><span className="font-semibold text-green-600 dark:text-green-400">{secondVal}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">n:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{currentStepData.n}</span></div>
                    {currentStepData.remove !== null && <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">remove:</span><span className="font-semibold text-red-600 dark:text-red-400">{removeVal}</span></div>}
                  </div>
                </div>
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
                      {currentStepData.action === 'problem-understanding' && '📋 Problem Understanding'}
                      {currentStepData.action === 'strategy-overview' && '🎯 Strategy Overview'}
                      {currentStepData.action === 'create-dummy' && '🏗️ Create Dummy Node'}
                      {currentStepData.action === 'connect-dummy' && '🔗 Connect Dummy to Head'}
                      {currentStepData.action === 'init-first' && '📍 Initialize First Pointer'}
                      {currentStepData.action === 'init-second' && '📍 Initialize Second Pointer'}
                      {currentStepData.action === 'setup-first-loop' && '🔄 Setup First Loop'}
                      {currentStepData.action === 'loop-check-1' && '🔢 Loop Check (i=0)'}
                      {currentStepData.action === 'move-first-1' && '➡️ Move First (i=0)'}
                      {currentStepData.action === 'loop-check-2' && '🔢 Loop Check (i=1)'}
                      {currentStepData.action === 'move-first-2' && '➡️ Move First (i=1)'}
                      {currentStepData.action === 'loop-check-3' && '🔢 Loop Check (i=2)'}
                      {currentStepData.action === 'move-first-3' && '➡️ Move First (i=2)'}
                      {currentStepData.action === 'first-loop-complete' && '✅ First Loop Complete'}
                      {currentStepData.action === 'main-loop-start' && '🔄 Main Loop Start'}
                      {currentStepData.action === 'move-first-main-1' && '➡️ Move First Pointer (1)'}
                      {currentStepData.action === 'move-second-main-1' && '➡️ Move Second Pointer (1)'}
                      {currentStepData.action === 'main-loop-continue-1' && '🔄 Continue Main Loop (1)'}
                      {currentStepData.action === 'move-first-main-2' && '➡️ Move First Pointer (2)'}
                      {currentStepData.action === 'move-second-main-2' && '➡️ Move Second Pointer (2)'}
                      {currentStepData.action === 'main-loop-continue-2' && '🔄 Continue Main Loop (2)'}
                      {currentStepData.action === 'move-first-main-3' && '➡️ Move First Pointer (3)'}
                      {currentStepData.action === 'move-second-main-3' && '➡️ Move Second Pointer (3)'}
                      {currentStepData.action === 'main-loop-end' && '🛑 Main Loop End'}
                      {currentStepData.action === 'target-identification' && '🎯 Target Identification'}
                      {currentStepData.action === 'remove-operation' && '🗑️ Remove Operation'}
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
                <p className="text-sm font-medium text-red-900 dark:text-red-100">List Visualization:</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">Original: 5 nodes</Badge>
                  <Badge variant="outline" className="text-xs border-green-400 text-green-600">Result: {currentStepData.result.length || 4} nodes</Badge>
                </div>
              </div>
              
              <div className="space-y-8 px-8 py-12 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                
                {/* Original List */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">Original List</div>
                  <div className="flex items-center justify-center gap-3 min-w-max relative">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    {currentStepData.dummy !== null && (
                      <>
                        <div className="flex items-center gap-3 relative">
                          <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${currentStepData.first === -1 || currentStepData.second === -1 ? 'scale-110 ring-4 ring-yellow-200 dark:ring-yellow-900' : ''} border-yellow-300 dark:border-yellow-600`}>
                            <div className="px-3 py-2 border-r-2 bg-yellow-100 dark:bg-yellow-900 border-yellow-500">
                              <div className="text-lg font-bold text-yellow-900 dark:text-yellow-100">-1</div>
                            </div>
                            <div className="px-3 py-2 flex items-center bg-yellow-200 dark:bg-yellow-800">
                              <ArrowRight className="w-4 h-4 text-yellow-900 dark:text-yellow-100" />
                            </div>
                          </div>
                          {currentStepData.first === -1 && (
                            <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                              <div className="flex flex-col items-center">
                                <div className="text-lg mb-1 pointer-move">👇</div>
                                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">first</div>
                                <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-blue-300 mt-2"></div>
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 -mt-1"></div>
                              </div>
                            </div>
                          )}
                          {currentStepData.second === -1 && (
                            <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                              <div className="flex flex-col items-center">
                                <div className="text-lg mb-1 pointer-move">👇</div>
                                <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">second</div>
                                <div className="w-0.5 h-12 bg-gradient-to-b from-green-500 to-green-300 mt-2"></div>
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500 -mt-1"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </>
                    )}
                    {currentStepData.list.map((node, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {currentStepData.first === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">first</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-blue-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {currentStepData.second === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">👇</div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">second</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-green-500 to-green-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        {currentStepData.remove === index && (
                          <div className="absolute z-10" style={{ left: '50%', top: '-70px', transform: 'translateX(-50%)' }}>
                            <div className="flex flex-col items-center">
                              <div className="text-lg mb-1 pointer-move">🗑️</div>
                              <div className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/80 px-3 py-1.5 rounded border-2 border-red-500 whitespace-nowrap shadow-lg remove-glow">REMOVE</div>
                              <div className="w-0.5 h-12 bg-gradient-to-b from-red-500 to-red-300 mt-2"></div>
                              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-500 -mt-1"></div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                          node.toRemove ? 'border-red-500 dark:border-red-400 remove-glow' : 
                          node.highlighted ? 'scale-110 ring-4 ring-blue-200 dark:ring-blue-900 node-pulse' : 
                          node.processed ? 'border-slate-300 dark:border-slate-600' : 'border-slate-300 dark:border-slate-600'
                        } ${node.toRemove ? 'node-remove' : ''}`}>
                          <div className={`px-4 py-2 border-r-2 transition-colors ${
                            node.toRemove ? 'bg-red-100 dark:bg-red-900 border-red-500' :
                            node.highlighted ? 'bg-blue-100 dark:bg-blue-900 border-blue-500' :
                            node.processed ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}>
                            <div className={`text-xl font-bold ${
                              node.toRemove ? 'text-red-900 dark:text-red-100' :
                              node.highlighted ? 'text-blue-900 dark:text-blue-100' :
                              node.processed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'
                            }`}>{node.value}</div>
                          </div>
                          <div className={`px-3 py-2 flex items-center ${
                            node.toRemove ? 'bg-red-200 dark:bg-red-800' :
                            node.highlighted ? 'bg-blue-200 dark:bg-blue-800' :
                            node.processed ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-700'
                          }`}>
                            <ArrowRight className={`w-4 h-4 ${
                              node.toRemove ? 'text-red-900 dark:text-red-100' :
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
                            <div className="px-4 py-2 border-r-2 bg-green-100 dark:bg-green-900 border-green-500">
                              <div className="text-xl font-bold text-green-900 dark:text-green-100">{node.value}</div>
                            </div>
                            <div className="px-3 py-2 flex items-center bg-green-200 dark:bg-green-800">
                              <ArrowRight className="w-4 h-4 text-green-900 dark:text-green-100" />
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
                The two-pointer technique creates a gap of n+1 nodes between first and second pointers. When first reaches the end, second points exactly before the node to remove!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

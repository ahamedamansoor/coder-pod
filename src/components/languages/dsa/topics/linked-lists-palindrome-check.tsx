'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target, Lightbulb, CheckCircle, Play, RotateCcw, 
  ChevronLeft, ChevronRight, ArrowLeftRight, Repeat
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsPalindromeCheck() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const animationStyles = `
    @keyframes pointerMove {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes compareGlow {
      0%, 100% { box-shadow: 0 0 0 rgba(16, 185, 129, 0); }
      50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.8); }
    }
    @keyframes matchSuccess {
      0% { transform: scale(1); }
      50% { transform: scale(1.15); }
      100% { transform: scale(1.1); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes flipArrow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(180deg); }
    }
    .pointer-move { animation: pointerMove 1.2s ease-in-out infinite; }
    .compare-glow { animation: compareGlow 1.5s ease-in-out infinite; }
    .match-success { animation: matchSuccess 0.6s ease-out; }
    .slide-in { animation: slideIn 0.5s ease-out; }
    .flip-arrow { animation: flipArrow 0.6s ease-out; }
  `;

  // Check palindrome: 1→2→2→1 (true) using find middle, reverse second half, compare
  // 23 detailed atomic steps covering all three phases
  const steps = [
    {
      step: 1,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: null,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 1,
      phase: 'init',
      isPalindrome: null,
      description: '📋 Initialize: List 1→2→2→1. Goal: Check if it\'s a palindrome (reads same forward and backward).',
      action: 'init'
    },
    {
      step: 2,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 0,
      fast: 0,
      p1: null,
      p2: null,
      highlightSlow: 0,
      highlightFast: 0,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 2,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🎯 Phase 1: Find Middle - Initialize slow and fast pointers at head.',
      action: 'init-pointers'
    },
    {
      step: 3,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 0,
      fast: 0,
      p1: null,
      p2: null,
      highlightSlow: 0,
      highlightFast: 0,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 4,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🔄 Loop Check: Is fast (index 0) and fast.next (index 1) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 4,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 1,
      fast: 0,
      p1: null,
      p2: null,
      highlightSlow: 1,
      highlightFast: 0,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 5,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🐢 Move Slow: slow = slow.next. Slow moves from index 0 → index 1.',
      action: 'move-slow'
    },
    {
      step: 5,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 1,
      fast: 2,
      p1: null,
      p2: null,
      highlightSlow: 1,
      highlightFast: 2,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 6,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🐰 Move Fast: fast = fast.next.next. Fast moves from index 0 → index 2 (2 steps).',
      action: 'move-fast'
    },
    {
      step: 6,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 1,
      fast: 2,
      p1: null,
      p2: null,
      highlightSlow: 1,
      highlightFast: 2,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 4,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🔄 Loop Check: Is fast (index 2) and fast.next (index 3) !== null? YES! Continue.',
      action: 'loop-check'
    },
    {
      step: 7,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: 2,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: 2,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 5,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🐢 Move Slow: slow = slow.next. Slow moves from index 1 → index 2.',
      action: 'move-slow'
    },
    {
      step: 8,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 6,
      phase: 'find-middle',
      isPalindrome: null,
      description: '🐰 Move Fast: fast = fast.next.next. Fast reaches null (end of list).',
      action: 'fast-end'
    },
    {
      step: 9,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 7,
      phase: 'find-middle',
      isPalindrome: null,
      description: '✅ Middle Found: fast is null. Loop exits. slow at index 2 is the middle/start of second half.',
      action: 'middle-found'
    },
    {
      step: 10,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 8,
      phase: 'reverse',
      isPalindrome: null,
      description: '🔄 Phase 2: Reverse Second Half - Initialize prev=null, current=slow (index 2).',
      action: 'init-reverse'
    },
    {
      step: 11,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 10,
      phase: 'reverse',
      isPalindrome: null,
      description: '🔄 Reverse Loop: Is current (index 2) !== null? YES! Enter reversal.',
      action: 'reverse-loop-check'
    },
    {
      step: 12,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 11,
      phase: 'reverse',
      isPalindrome: null,
      description: '💾 Save Next: next = current.next. Save node at index 3 before breaking link.',
      action: 'save-next'
    },
    {
      step: 13,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 2,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 12,
      phase: 'reverse',
      isPalindrome: null,
      description: '🔄 Reverse Link: current.next = prev. Node at index 2 now points to null.',
      action: 'reverse-link'
    },
    {
      step: 14,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 13,
      phase: 'reverse',
      isPalindrome: null,
      description: '➡️ Move Pointers: prev = current (index 2), current = next (index 3).',
      action: 'move-reverse-pointers'
    },
    {
      step: 15,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 3,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 10,
      phase: 'reverse',
      isPalindrome: null,
      description: '🔄 Reverse Loop: Is current (index 3) !== null? YES! Continue reversal.',
      action: 'reverse-loop-check'
    },
    {
      step: 16,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 3,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 11,
      phase: 'reverse',
      isPalindrome: null,
      description: '💾 Save Next: next = current.next. Save null (end of list).',
      action: 'save-next'
    },
    {
      step: 17,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: 3,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 12,
      phase: 'reverse',
      isPalindrome: null,
      description: '🔄 Reverse Link: current.next = prev. Node at index 3 now points to node at index 2.',
      action: 'reverse-link'
    },
    {
      step: 18,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 13,
      phase: 'reverse',
      isPalindrome: null,
      description: '✅ Reverse Complete: current reaches null. Second half reversed: 1←2.',
      action: 'reverse-complete'
    },
    {
      step: 19,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: 0,
      p2: 3,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: 0,
      highlightP2: 3,
      currentLine: 15,
      phase: 'compare',
      isPalindrome: null,
      description: '🔍 Phase 3: Compare - Initialize p1=head (index 0), p2=prev (reversed head, index 3).',
      action: 'init-compare'
    },
    {
      step: 20,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: 0,
      p2: 3,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: 0,
      highlightP2: 3,
      currentLine: 17,
      phase: 'compare',
      isPalindrome: null,
      description: '🔄 Compare Loop: Is p2 (index 3) !== null? YES! Enter comparison.',
      action: 'compare-loop-check'
    },
    {
      step: 21,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: true, matched: false },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: true, matched: false }
      ],
      slow: 2,
      fast: null,
      p1: 0,
      p2: 3,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: 0,
      highlightP2: 3,
      currentLine: 18,
      phase: 'compare',
      isPalindrome: null,
      description: '✓ Compare Values: p1.value (1) === p2.value (1)? YES! Match found.',
      action: 'compare-match'
    },
    {
      step: 22,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: true }
      ],
      slow: 2,
      fast: null,
      p1: 1,
      p2: 2,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: 1,
      highlightP2: 2,
      currentLine: 19,
      phase: 'compare',
      isPalindrome: null,
      description: '➡️ Move Both: p1 = p1.next (index 0→1), p2 = p2.next (index 3→2).',
      action: 'move-compare'
    },
    {
      step: 23,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: false, isMiddle: false, comparing: true, matched: false },
        { value: 2, reversed: true, isMiddle: true, comparing: true, matched: false },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: true }
      ],
      slow: 2,
      fast: null,
      p1: 1,
      p2: 2,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: 1,
      highlightP2: 2,
      currentLine: 18,
      phase: 'compare',
      isPalindrome: null,
      description: '✓ Compare Values: p1.value (2) === p2.value (2)? YES! Match found.',
      action: 'compare-match'
    },
    {
      step: 24,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: true },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: true }
      ],
      slow: 2,
      fast: null,
      p1: 2,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 17,
      phase: 'compare',
      isPalindrome: null,
      description: '🔄 Compare Loop: p2 reached middle (null). All values matched! Exit loop.',
      action: 'compare-complete'
    },
    {
      step: 25,
      list: [
        { value: 1, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: false, isMiddle: false, comparing: false, matched: true },
        { value: 2, reversed: true, isMiddle: true, comparing: false, matched: true },
        { value: 1, reversed: true, isMiddle: false, comparing: false, matched: true }
      ],
      slow: 2,
      fast: null,
      p1: null,
      p2: null,
      highlightSlow: -1,
      highlightFast: -1,
      highlightP1: -1,
      highlightP2: -1,
      currentLine: 21,
      phase: 'complete',
      isPalindrome: true,
      description: '🎉 Complete: All values matched! Return true. List IS a PALINDROME! ✓',
      action: 'palindrome-true'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const slowVal = stepData.slow !== null ? `index ${stepData.slow}` : 'null';
    const fastVal = stepData.fast !== null ? `index ${stepData.fast}` : 'null';
    const p1Val = stepData.p1 !== null ? `index ${stepData.p1}` : 'null';
    const p2Val = stepData.p2 !== null ? `index ${stepData.p2}` : 'null';
    
    return [
      { line: 1, code: 'function isPalindrome(head) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  // Phase 1: Find middle using slow/fast', active: stepData.currentLine === 2, indent: 1, values: stepData.phase === 'find-middle' ? '← current phase' : '' },
      { line: 3, code: '  let slow = head, fast = head;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 2 ? `slow: ${slowVal}, fast: ${fastVal}` : '' },
      { line: 4, code: '  while (fast && fast.next) {', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? (stepData.fast !== null ? '✓ continue' : '✗ exit') : '' },
      { line: 5, code: '    slow = slow.next;', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 ? `slow: ${slowVal}` : '' },
      { line: 6, code: '    fast = fast.next.next;', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `fast: ${fastVal}` : '' },
      { line: 7, code: '  }', active: stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 7 ? `middle at ${slowVal}` : '' },
      { line: 8, code: '  // Phase 2: Reverse second half', active: stepData.currentLine === 8, indent: 1, values: stepData.phase === 'reverse' ? '← current phase' : '' },
      { line: 9, code: '  let prev = null, curr = slow;', active: stepData.currentLine === 9, indent: 1, values: stepData.phase === 'reverse' || stepData.phase === 'compare' ? `prev: null, curr: ${slowVal}` : '' },
      { line: 10, code: '  while (curr) {', active: stepData.currentLine === 10, indent: 1, values: stepData.currentLine === 10 ? '✓ continue reversal' : '' },
      { line: 11, code: '    let next = curr.next;', active: stepData.currentLine === 11, indent: 2, values: stepData.currentLine === 11 ? 'save next' : '' },
      { line: 12, code: '    curr.next = prev;', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? 'reverse link' : '' },
      { line: 13, code: '    prev = curr; curr = next;', active: stepData.currentLine === 13, indent: 2, values: stepData.currentLine === 13 ? 'move pointers' : '' },
      { line: 14, code: '  }', active: stepData.currentLine === 14, indent: 1, values: stepData.currentLine === 13 ? 'reversal complete' : '' },
      { line: 15, code: '  // Phase 3: Compare both halves', active: stepData.currentLine === 15, indent: 1, values: stepData.phase === 'compare' ? '← current phase' : '' },
      { line: 16, code: '  let p1 = head, p2 = prev;', active: stepData.currentLine === 15, indent: 1, values: stepData.phase === 'compare' || stepData.phase === 'complete' ? `p1: ${p1Val}, p2: ${p2Val}` : '' },
      { line: 17, code: '  while (p2) {', active: stepData.currentLine === 17, indent: 1, values: stepData.currentLine === 17 ? (stepData.p2 !== null ? '✓ continue' : '✗ exit') : '' },
      { line: 18, code: '    if (p1.val !== p2.val) return false;', active: stepData.currentLine === 18, indent: 2, values: stepData.currentLine === 18 ? (stepData.action === 'compare-match' ? '✓ values match' : '✗ no match') : '' },
      { line: 19, code: '    p1 = p1.next; p2 = p2.next;', active: stepData.currentLine === 19, indent: 2, values: stepData.currentLine === 19 ? `p1: ${p1Val}, p2: ${p2Val}` : '' },
      { line: 20, code: '  }', active: stepData.currentLine === 20, indent: 1 },
      { line: 21, code: '  return true;', active: stepData.currentLine === 21, indent: 1, values: stepData.currentLine === 21 ? '✓ is palindrome' : '' },
      { line: 22, code: '}', active: false, indent: 0 }
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
      <PageHeader icon={ArrowLeftRight} category="DSA · Linked Lists" title="Palindrome Linked List" description="Check if a linked list reads the same forward and backward" colorTheme="teal" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Three Phases', 'Slow/Fast Pointers', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
          <Badge key={`${badge}-${index}`} variant={index === 0 ? 'secondary' : 'outline'} className="text-sm">{badge}</Badge>
        ))}
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-600" />What You'll Learn</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Find Middle (Slow/Fast)', desc: 'Locate middle using two-pointer technique' },
              { title: 'Reverse Second Half', desc: 'In-place reversal from middle to end' },
              { title: 'Compare Halves', desc: 'Match first half with reversed second half' },
              { title: 'Optimal Approach', desc: 'O(n) time, O(1) space solution' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div><p className="font-medium">{item.title}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-teal-600" />The Problem</CardTitle><CardDescription>Understanding palindrome detection</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">Given the head of a singly linked list, determine if it is a <strong>palindrome</strong> (reads the same forward and backward).</p>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5" /> Examples</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-teal-300">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-2">Example 1 (Palindrome):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 2 → 1</div>
                <p className="text-xs text-center text-teal-600 dark:text-teal-400">✓ Reads same both ways</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-teal-300">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-2">Example 2 (Not Palindrome):</p>
                <div className="font-mono text-sm text-center mb-2">1 → 2 → 3</div>
                <p className="text-xs text-center text-red-600 dark:text-red-400">✗ Different forward/backward</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">💡 Three-Phase Algorithm</h4>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>Phase 1: Find Middle</strong></p>
              <p className="pl-4">Use slow/fast pointers. Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at middle.</p>
              <p><strong>Phase 2: Reverse Second Half</strong></p>
              <p className="pl-4">Starting from middle, reverse the second half of the list in-place.</p>
              <p><strong>Phase 3: Compare Halves</strong></p>
              <p className="pl-4">Compare first half (from head) with reversed second half. If all match → palindrome!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Palindrome Check: Step-by-Step
          </CardTitle>
          <CardDescription>Watch the three-phase palindrome detection algorithm</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
              <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-teal-300 dark:border-teal-700"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-medium text-teal-900 dark:text-teal-100">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 rounded-lg border-2 border-teal-300 dark:border-teal-700">
              <span className="text-sm font-bold text-teal-900 dark:text-teal-100">Step {currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isPalindrome.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>
              <div className="p-3 font-mono text-[13px] leading-relaxed overflow-x-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-teal-50 dark:bg-teal-900/20 border-l-2 border-teal-400 dark:border-teal-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-teal-600 dark:text-teal-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-teal-600 dark:text-teal-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">phase:</span><span className="font-semibold text-teal-600 dark:text-teal-400">{currentStepData.phase}</span></div>
                    {currentStepData.isPalindrome !== null && (
                      <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">result:</span><span className={`font-semibold ${currentStepData.isPalindrome ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{currentStepData.isPalindrome ? '✓ palindrome' : '✗ not palindrome'}</span></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-300 dark:border-teal-700 shadow-sm mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-teal-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wide">Step {currentStepData.step} of {steps.length}</div>
                    <div className="text-sm font-medium text-teal-900 dark:text-teal-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'init-pointers' && '🎯 Initialize Pointers'}
                      {currentStepData.action === 'move-to-middle' && '🐢🐰 Move to Middle'}
                      {currentStepData.action === 'middle-found' && '✅ Middle Found'}
                      {currentStepData.action === 'start-reverse' && '🔄 Start Reversal'}
                      {currentStepData.action === 'reverse-node' && '🔄 Reversing Node'}
                      {currentStepData.action === 'reverse-complete' && '🔄 Reversal Complete'}
                      {currentStepData.action === 'start-compare' && '🔍 Start Comparison'}
                      {currentStepData.action === 'compare-match' && '✓ Values Match'}
                      {currentStepData.action === 'move-compare' && '➡️ Move Comparison Pointers'}
                      {currentStepData.action === 'palindrome-true' && '🎉 Palindrome Confirmed'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-teal-900 dark:text-teal-50 pl-14">{currentStepData.description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-teal-900 dark:text-teal-100">List Visualization:</p>
                <div className="flex items-center gap-2">
                  {currentStepData.phase === 'find-middle' && <Badge variant="outline" className="text-xs border-blue-400 text-blue-600">Phase 1: Finding Middle</Badge>}
                  {currentStepData.phase === 'reverse' && <Badge variant="outline" className="text-xs border-orange-400 text-orange-600">Phase 2: Reversing</Badge>}
                  {currentStepData.phase === 'compare' && <Badge variant="outline" className="text-xs border-green-400 text-green-600">Phase 3: Comparing</Badge>}
                  {currentStepData.phase === 'complete' && <Badge variant="outline" className="text-xs border-teal-400 text-teal-600">Complete</Badge>}
                </div>
              </div>
              <div className="px-8 py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 min-w-max relative">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-400">HEAD</div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  {currentStepData.list.map((node, index) => {
                    const isSlow = currentStepData.highlightSlow === index;
                    const isFast = currentStepData.highlightFast === index;
                    const isP1 = currentStepData.highlightP1 === index;
                    const isP2 = currentStepData.highlightP2 === index;
                    return (
                      <div key={index} className="flex items-center gap-3 relative">
                        {isSlow && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="text-2xl mb-1 pointer-move">🐢</div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border-2 border-blue-500 whitespace-nowrap shadow-lg">SLOW</div>
                              <div className="w-0.5 h-10 bg-gradient-to-b from-blue-500 to-transparent mt-2"></div>
                            </div>
                          </div>
                        )}
                        {isFast && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="w-0.5 h-10 bg-gradient-to-t from-orange-500 to-transparent mb-2"></div>
                              <div className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/80 px-3 py-1.5 rounded border-2 border-orange-500 whitespace-nowrap shadow-lg">FAST</div>
                              <div className="text-2xl mt-1 pointer-move">🐰</div>
                            </div>
                          </div>
                        )}
                        {isP1 && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="text-2xl mb-1 pointer-move">👆</div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-1.5 rounded border-2 border-green-500 whitespace-nowrap shadow-lg">P1</div>
                              <div className="w-0.5 h-10 bg-gradient-to-b from-green-500 to-transparent mt-2"></div>
                            </div>
                          </div>
                        )}
                        {isP2 && (
                          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-85px' }}>
                            <div className="flex flex-col items-center slide-in">
                              <div className="w-0.5 h-10 bg-gradient-to-t from-pink-500 to-transparent mb-2"></div>
                              <div className="text-xs font-bold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/80 px-3 py-1.5 rounded border-2 border-pink-500 whitespace-nowrap shadow-lg">P2</div>
                              <div className="text-2xl mt-1 pointer-move">👇</div>
                            </div>
                          </div>
                        )}
                        <div className={`flex border-2 rounded-lg overflow-hidden shadow-md transition-all duration-500 ${node.matched ? 'match-success' : ''} ${node.comparing ? 'compare-glow' : ''} ${isSlow || isFast || isP1 || isP2 ? 'border-teal-500 dark:border-teal-400 scale-110 ring-4 ring-teal-200 dark:ring-teal-900' : node.isMiddle ? 'border-orange-500 dark:border-orange-400 ring-2 ring-orange-300' : node.matched ? 'border-green-500 dark:border-green-400' : 'border-slate-300 dark:border-slate-600'}`}>
                          <div className={`px-5 py-3 border-r-2 transition-colors ${isSlow || isFast || isP1 || isP2 ? 'bg-teal-100 dark:bg-teal-900 border-teal-500' : node.isMiddle ? 'bg-orange-100 dark:bg-orange-900 border-orange-500' : node.matched ? 'bg-green-100 dark:bg-green-900 border-green-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                            <div className={`text-2xl font-bold ${isSlow || isFast || isP1 || isP2 ? 'text-teal-900 dark:text-teal-100' : node.isMiddle ? 'text-orange-900 dark:text-orange-100' : node.matched ? 'text-green-900 dark:text-green-100' : 'text-slate-700 dark:text-slate-300'}`}>{node.value}</div>
                          </div>
                          <div className={`px-4 py-3 flex items-center ${isSlow || isFast || isP1 || isP2 ? 'bg-teal-200 dark:bg-teal-800' : node.isMiddle ? 'bg-orange-200 dark:bg-orange-800' : node.matched ? 'bg-green-200 dark:bg-green-800' : 'bg-slate-100 dark:bg-slate-700'}`}>
                            <svg className={`w-5 h-5 transition-all ${node.reversed ? 'flip-arrow' : ''} ${isSlow || isFast || isP1 || isP2 ? 'text-teal-900 dark:text-teal-100' : node.isMiddle ? 'text-orange-900 dark:text-orange-100' : node.matched ? 'text-green-900 dark:text-green-100' : 'text-slate-500 dark:text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: node.reversed ? 'rotate(180deg)' : 'none' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
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
              <div className="h-full bg-gradient-to-r from-teal-600 to-cyan-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-teal-200 dark:border-teal-700 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
        <CheckCircle className="h-5 w-5 text-teal-600" />
        <AlertTitle>🎓 Key Takeaways</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">•</span><span><strong>Three-Phase Approach:</strong> Find middle, reverse second half, compare both halves</span></li>
            <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">•</span><span><strong>Slow/Fast Technique:</strong> Slow moves 1 step, fast moves 2 steps to find middle efficiently</span></li>
            <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">•</span><span><strong>In-Place Reversal:</strong> Reverse second half without extra space</span></li>
            <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">•</span><span><strong>Optimal Complexity:</strong> O(n) time with single pass, O(1) space</span></li>
            <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">•</span><span><strong>Edge Cases:</strong> Handle single node, two nodes, and odd/even length lists</span></li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

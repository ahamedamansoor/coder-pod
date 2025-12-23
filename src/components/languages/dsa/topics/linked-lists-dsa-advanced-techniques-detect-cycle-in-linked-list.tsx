'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Activity, 
  BookOpen, 
  Target, 
  Infinity, 
  ArrowRight, 
  Zap, 
  Hash, 
  CheckCircle, 
  Lightbulb, 
  Sparkles, 
  Play, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Code,
  Check,
  X,
  Circle,
  AlertCircle
} from 'lucide-react';

type Node = {
  value: number;
  next: number | null;
};

type AlgorithmType = 'floyd' | 'hash' | 'mark';

interface Step {
  step: number;
  list: Node[];
  slow?: number;
  fast?: number;
  current?: number | null;
  visited?: number[];
  marked?: number[];
  cycleStart?: number;
  currentLine: number;
  description: string;
  action: string;
  vars: { [key: string]: string | undefined };
}

export default function DetectCycleInLinkedList() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [hasCycle, setHasCycle] = useState(true);
  const [algorithmType, setAlgorithmType] = useState<AlgorithmType>('floyd');
  
  // Algorithm pointers/indices
  const [slow, setSlow] = useState(0);
  const [fast, setFast] = useState(0);
  const [current, setCurrent] = useState(0);
  
  // Algorithm-specific state
  const [visited, setVisited] = useState<number[]>([]);
  const [marked, setMarked] = useState<number[]>([]);
  
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const generateFloydSteps = () => {
    if (!hasCycle) {
      return [
        // Initialization steps
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 0, currentLine: 1, description: '📋 Initialize: Check if head exists? YES!', action: 'init', vars: { head: 'exists' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 0, currentLine: 2, description: '📋 Check: Does head.next exist? YES!', action: 'init', vars: { headNext: 'exists' } },
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 0, currentLine: 4, description: '📋 Initialize: Set slow = head (node 10)', action: 'init', vars: { slow: '10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 0, currentLine: 5, description: '📋 Initialize: Set fast = head.next (node 20)', action: 'init', vars: { slow: '10', fast: '20' } },
        
        // Loop iterations
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 1, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (10 ≠ 20)', action: 'loop-check', vars: { slow: '10', fast: '20' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 1, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '20' } },
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 0, fast: 1, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '30' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 1, currentLine: 9, description: '➡️ Move: slow = slow.next (10 → 20)', action: 'move', vars: { slow: '20', fast: '20' } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: 10, description: '⚡ Move: fast = fast.next.next (20 → 40)', action: 'move', vars: { slow: '20', fast: '40' } },
        
        { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (20 ≠ 40)', action: 'loop-check', vars: { slow: '20', fast: '40' } },
        { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '40' } },
        { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: 8, description: '❌ Check: Does fast.next exist? NO! (40.next = null)', action: 'check', vars: { fastNext: 'null' } },
        { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: 8, description: '✅ Return: No cycle detected (fast reached null)', action: 'result', vars: { result: 'false' } },
        { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], slow: 1, fast: 3, currentLine: -1, description: '🎯 Algorithm complete! List is acyclic', action: 'done', vars: { result: 'No cycle' } },
      ];
    }

    // Cycle case with comprehensive steps
    return [
      // Initialization (5 steps)
      { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 0, cycleStart: 0, currentLine: 1, description: '📋 Initialize: Check if head exists? YES!', action: 'init', vars: { head: 'exists' } },
      { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 0, cycleStart: 0, currentLine: 2, description: '📋 Check: Does head.next exist? YES!', action: 'init', vars: { headNext: 'exists' } },
      { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 0, cycleStart: 0, currentLine: 4, description: '📋 Initialize: Set slow = head (node 10)', action: 'init', vars: { slow: '10' } },
      { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 0, cycleStart: 0, currentLine: 5, description: '📋 Initialize: Set fast = head.next (node 20)', action: 'init', vars: { slow: '10', fast: '20' } },
      { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 1, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (10 ≠ 20)', action: 'loop-check', vars: { slow: '10', fast: '20' } },
      
      // First iteration (7 steps)
      { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '20' } },
      { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '30' } },
      { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 1, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (10 → 20)', action: 'move', vars: { slow: '20', fast: '20' } },
      { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 2, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (20 → 30)', action: 'move', vars: { slow: '20', fast: '30' } },
      { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 2, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (20 ≠ 30)', action: 'loop-check', vars: { slow: '20', fast: '30' } },
      { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '30' } },
      { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '40' } },
      
      // Second iteration (7 steps)
      { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 2, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (20 → 30)', action: 'move', vars: { slow: '30', fast: '30' } },
      { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 3, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (30 → 10)', action: 'move', vars: { slow: '30', fast: '10' } },
      { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 3, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (30 ≠ 10)', action: 'loop-check', vars: { slow: '30', fast: '10' } },
      { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '10' } },
      { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '20' } },
      { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 3, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (30 → 40)', action: 'move', vars: { slow: '40', fast: '10' } },
      { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 1, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (10 → 20)', action: 'move', vars: { slow: '40', fast: '20' } },
      
      // Third iteration (7 steps)
      { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 1, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (40 ≠ 20)', action: 'loop-check', vars: { slow: '40', fast: '20' } },
      { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '20' } },
      { step: 22, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '30' } },
      { step: 23, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 1, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (40 → 10)', action: 'move', vars: { slow: '10', fast: '20' } },
      { step: 24, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 2, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (20 → 30)', action: 'move', vars: { slow: '10', fast: '30' } },
      { step: 25, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 2, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (10 ≠ 30)', action: 'loop-check', vars: { slow: '10', fast: '30' } },
      { step: 26, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '30' } },
      { step: 27, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '40' } },
      
      // Fourth iteration (7 steps)
      { step: 28, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 2, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (10 → 20)', action: 'move', vars: { slow: '20', fast: '30' } },
      { step: 29, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 3, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (30 → 10)', action: 'move', vars: { slow: '20', fast: '10' } },
      { step: 30, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 3, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (20 ≠ 10)', action: 'loop-check', vars: { slow: '20', fast: '10' } },
      { step: 31, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '10' } },
      { step: 32, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '20' } },
      { step: 33, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 3, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (20 → 30)', action: 'move', vars: { slow: '30', fast: '10' } },
      { step: 34, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 1, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (10 → 20)', action: 'move', vars: { slow: '30', fast: '20' } },
      
      // Fifth iteration - Detection! (7 steps)
      { step: 35, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 1, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (30 ≠ 20)', action: 'loop-check', vars: { slow: '30', fast: '20' } },
      { step: 36, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '20' } },
      { step: 37, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 2, fast: 1, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '30' } },
      { step: 38, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 1, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (30 → 40)', action: 'move', vars: { slow: '40', fast: '20' } },
      { step: 39, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 2, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (20 → 30)', action: 'move', vars: { slow: '40', fast: '30' } },
      { step: 40, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 2, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (40 ≠ 30)', action: 'loop-check', vars: { slow: '40', fast: '30' } },
      { step: 41, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '30' } },
      
      // Sixth iteration - Getting closer (6 steps)
      { step: 42, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 3, fast: 2, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '40' } },
      { step: 43, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 2, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (40 → 10)', action: 'move', vars: { slow: '10', fast: '30' } },
      { step: 44, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 3, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (30 → 10)', action: 'move', vars: { slow: '10', fast: '10' } },
      { step: 45, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 3, cycleStart: 0, currentLine: 7, description: '🔄 Loop Check: Is slow !== fast? YES! (10 ≠ 10)', action: 'loop-check', vars: { slow: '10', fast: '10' } },
      { step: 46, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast exist? YES!', action: 'check', vars: { fast: '10' } },
      { step: 47, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 0, fast: 3, cycleStart: 0, currentLine: 8, description: '🔍 Check: Does fast.next exist? YES!', action: 'check', vars: { fastNext: '20' } },
      
      // Final iteration - Meeting point! (6 steps)
      { step: 48, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 3, cycleStart: 0, currentLine: 9, description: '➡️ Move: slow = slow.next (10 → 20)', action: 'move', vars: { slow: '20', fast: '10' } },
      { step: 49, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 1, cycleStart: 0, currentLine: 10, description: '⚡ Move: fast = fast.next.next (10 → 20)', action: 'move', vars: { slow: '20', fast: '20' } },
      { step: 50, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 1, cycleStart: 0, currentLine: 7, description: '🎯 Loop Check: Is slow !== fast? NO! (20 = 20)', action: 'loop-complete', vars: { slow: '20', fast: '20' } },
      { step: 51, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 1, cycleStart: 0, currentLine: 12, description: '✅ Return: Cycle detected! Pointers met at node 20', action: 'result', vars: { result: 'true' } },
      { step: 52, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], slow: 1, fast: 1, cycleStart: 0, currentLine: -1, description: '🏆 Algorithm complete! Cycle found in linked list', action: 'done', vars: { result: 'Cycle detected' } },
    ];
  };

  const generateHashSteps = () => {
    if (!hasCycle) {
      return [
        // Initialization (2 steps)
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, visited: [], currentLine: 1, description: '📋 Initialize: Create empty Set() for visited nodes', action: 'init', vars: { visited: '{}' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, visited: [], currentLine: 2, description: '📋 Initialize: Set current = head (node 10)', action: 'init', vars: { current: '10', visited: '{}' } },
        
        // Process each node (6 steps per node = 24 steps total)
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, visited: [], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, visited: [], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (10 not visited)', action: 'check', vars: { current: '10', visited: '{}' } },
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, visited: [0], currentLine: 6, description: '➕ Add: Add node 10 to visited set', action: 'visit', vars: { current: '10', visited: '{10}' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, visited: [0], currentLine: 7, description: '➡️ Move: current = current.next (10 → 20)', action: 'move', vars: { current: '20', visited: '{10}' } },
        
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, visited: [0], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 20)', action: 'loop-check', vars: { current: '20' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, visited: [0], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (20 not visited)', action: 'check', vars: { current: '20', visited: '{10}' } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, visited: [0, 1], currentLine: 6, description: '➕ Add: Add node 20 to visited set', action: 'visit', vars: { current: '20', visited: '{10,20}' } },
        { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, visited: [0, 1], currentLine: 7, description: '➡️ Move: current = current.next (20 → 30)', action: 'move', vars: { current: '30', visited: '{10,20}' } },
        
        { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, visited: [0, 1], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 30)', action: 'loop-check', vars: { current: '30' } },
        { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, visited: [0, 1], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (30 not visited)', action: 'check', vars: { current: '30', visited: '{10,20}' } },
        { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, visited: [0, 1, 2], currentLine: 6, description: '➕ Add: Add node 30 to visited set', action: 'visit', vars: { current: '30', visited: '{10,20,30}' } },
        { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, visited: [0, 1, 2], currentLine: 7, description: '➡️ Move: current = current.next (30 → 40)', action: 'move', vars: { current: '40', visited: '{10,20,30}' } },
        
        { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, visited: [0, 1, 2], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 40)', action: 'loop-check', vars: { current: '40' } },
        { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, visited: [0, 1, 2], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (40 not visited)', action: 'check', vars: { current: '40', visited: '{10,20,30}' } },
        { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, visited: [0, 1, 2, 3], currentLine: 6, description: '➕ Add: Add node 40 to visited set', action: 'visit', vars: { current: '40', visited: '{10,20,30,40}' } },
        { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, visited: [0, 1, 2, 3], currentLine: 7, description: '➡️ Move: current = current.next (40 → null)', action: 'move', vars: { current: 'null', visited: '{10,20,30,40}' } },
        
        // Termination (3 steps)
        { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, visited: [0, 1, 2, 3], currentLine: 4, description: '🔄 Loop Check: Is current !== null? NO! (current = null)', action: 'loop-complete', vars: { current: 'null' } },
        { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, visited: [0, 1, 2, 3], currentLine: 9, description: '✅ Return: No cycle detected (reached end)', action: 'result', vars: { result: 'false' } },
        { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, visited: [0, 1, 2, 3], currentLine: -1, description: '🎯 Algorithm complete! List is acyclic', action: 'done', vars: { result: 'No cycle' } },
      ];
    }

    // Cycle case with comprehensive steps
    return [
      // Initialization (2 steps)
      { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [], currentLine: 1, description: '📋 Initialize: Create empty Set() for visited nodes', action: 'init', vars: { visited: '{}' } },
      { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [], currentLine: 2, description: '📋 Initialize: Set current = head (node 10)', action: 'init', vars: { current: '10', visited: '{}' } },
      
      // Process each node until cycle detected (6 steps per node)
      { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
      { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (10 not visited)', action: 'check', vars: { current: '10', visited: '{}' } },
      { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0], currentLine: 6, description: '➕ Add: Add node 10 to visited set', action: 'visit', vars: { current: '10', visited: '{10}' } },
      { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, visited: [0], currentLine: 7, description: '➡️ Move: current = current.next (10 → 20)', action: 'move', vars: { current: '20', visited: '{10}' } },
      
      { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, visited: [0], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 20)', action: 'loop-check', vars: { current: '20' } },
      { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, visited: [0], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (20 not visited)', action: 'check', vars: { current: '20', visited: '{10}' } },
      { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, visited: [0, 1], currentLine: 6, description: '➕ Add: Add node 20 to visited set', action: 'visit', vars: { current: '20', visited: '{10,20}' } },
      { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, visited: [0, 1], currentLine: 7, description: '➡️ Move: current = current.next (20 → 30)', action: 'move', vars: { current: '30', visited: '{10,20}' } },
      
      { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, visited: [0, 1], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 30)', action: 'loop-check', vars: { current: '30' } },
      { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, visited: [0, 1], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (30 not visited)', action: 'check', vars: { current: '30', visited: '{10,20}' } },
      { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, visited: [0, 1, 2], currentLine: 6, description: '➕ Add: Add node 30 to visited set', action: 'visit', vars: { current: '30', visited: '{10,20,30}' } },
      { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, visited: [0, 1, 2], currentLine: 7, description: '➡️ Move: current = current.next (30 → 40)', action: 'move', vars: { current: '40', visited: '{10,20,30}' } },
      
      { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, visited: [0, 1, 2], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 40)', action: 'loop-check', vars: { current: '40' } },
      { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, visited: [0, 1, 2], currentLine: 5, description: '🔍 Check: Is current in visited? NO! (40 not visited)', action: 'check', vars: { current: '40', visited: '{10,20,30}' } },
      { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, visited: [0, 1, 2, 3], currentLine: 6, description: '➕ Add: Add node 40 to visited set', action: 'visit', vars: { current: '40', visited: '{10,20,30,40}' } },
      { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0, 1, 2, 3], currentLine: 7, description: '➡️ Move: current = current.next (40 → 10)', action: 'move', vars: { current: '10', visited: '{10,20,30,40}' } },
      
      // Cycle detection (3 steps)
      { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0, 1, 2, 3], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
      { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0, 1, 2, 3], currentLine: 5, description: '🎯 Check: Is current in visited? YES! (10 already visited)', action: 'detect', vars: { current: '10', visited: '{10,20,30,40}' } },
      { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0, 1, 2, 3], currentLine: 6, description: '✅ Return: Cycle detected! Found repeated node 10', action: 'result', vars: { result: 'true' } },
      { step: 22, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, visited: [0, 1, 2, 3], currentLine: -1, description: '🏆 Algorithm complete! Cycle found in linked list', action: 'done', vars: { result: 'Cycle detected' } },
    ];
  };

  const generateMarkSteps = () => {
    if (!hasCycle) {
      return [
        // Initialization (2 steps)
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, marked: [], currentLine: 1, description: '📋 Initialize: Set current = head (node 10)', action: 'init', vars: { current: '10', marked: 'none' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, marked: [], currentLine: 2, description: '📋 Check: Does current exist? YES!', action: 'init', vars: { current: '10' } },
        
        // Process each node (4 steps per node = 16 steps total)
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, marked: [], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, marked: [], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (10 not marked)', action: 'check', vars: { current: '10', marked: 'none' } },
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 0, marked: [0], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 10)', action: 'mark', vars: { current: '10', marked: '10' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, marked: [0], currentLine: 7, description: '➡️ Move: current = current.next (10 → 20)', action: 'move', vars: { current: '20', marked: '10' } },
        
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, marked: [0], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 20)', action: 'loop-check', vars: { current: '20' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, marked: [0], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (20 not marked)', action: 'check', vars: { current: '20', marked: '10' } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 1, marked: [0, 1], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 20)', action: 'mark', vars: { current: '20', marked: '10,20' } },
        { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, marked: [0, 1], currentLine: 7, description: '➡️ Move: current = current.next (20 → 30)', action: 'move', vars: { current: '30', marked: '10,20' } },
        
        { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, marked: [0, 1], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 30)', action: 'loop-check', vars: { current: '30' } },
        { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, marked: [0, 1], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (30 not marked)', action: 'check', vars: { current: '30', marked: '10,20' } },
        { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 2, marked: [0, 1, 2], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 30)', action: 'mark', vars: { current: '30', marked: '10,20,30' } },
        { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, marked: [0, 1, 2], currentLine: 7, description: '➡️ Move: current = current.next (30 → 40)', action: 'move', vars: { current: '40', marked: '10,20,30' } },
        
        { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, marked: [0, 1, 2], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 40)', action: 'loop-check', vars: { current: '40' } },
        { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, marked: [0, 1, 2], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (40 not marked)', action: 'check', vars: { current: '40', marked: '10,20,30' } },
        { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: 3, marked: [0, 1, 2, 3], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 40)', action: 'mark', vars: { current: '40', marked: '10,20,30,40' } },
        { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, marked: [0, 1, 2, 3], currentLine: 7, description: '➡️ Move: current = current.next (40 → null)', action: 'move', vars: { current: 'null', marked: '10,20,30,40' } },
        
        // Termination (3 steps)
        { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, marked: [0, 1, 2, 3], currentLine: 4, description: '🔄 Loop Check: Is current !== null? NO! (current = null)', action: 'loop-complete', vars: { current: 'null' } },
        { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, marked: [0, 1, 2, 3], currentLine: 9, description: '✅ Return: No cycle detected (reached end)', action: 'result', vars: { result: 'false' } },
        { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], current: null, marked: [0, 1, 2, 3], currentLine: -1, description: '🎯 Algorithm complete! List is acyclic', action: 'done', vars: { result: 'No cycle' } },
      ];
    }

    // Cycle case with comprehensive steps
    return [
      // Initialization (2 steps)
      { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [], currentLine: 1, description: '📋 Initialize: Set current = head (node 10)', action: 'init', vars: { current: '10', marked: 'none' } },
      { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [], currentLine: 2, description: '📋 Check: Does current exist? YES!', action: 'init', vars: { current: '10' } },
      
      // Process each node until cycle detected (4 steps per node)
      { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
      { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (10 not marked)', action: 'check', vars: { current: '10', marked: 'none' } },
      { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 10)', action: 'mark', vars: { current: '10', marked: '10' } },
      { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, marked: [0], currentLine: 7, description: '➡️ Move: current = current.next (10 → 20)', action: 'move', vars: { current: '20', marked: '10' } },
      
      { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, marked: [0], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 20)', action: 'loop-check', vars: { current: '20' } },
      { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, marked: [0], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (20 not marked)', action: 'check', vars: { current: '20', marked: '10' } },
      { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 1, marked: [0, 1], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 20)', action: 'mark', vars: { current: '20', marked: '10,20' } },
      { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, marked: [0, 1], currentLine: 7, description: '➡️ Move: current = current.next (20 → 30)', action: 'move', vars: { current: '30', marked: '10,20' } },
      
      { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, marked: [0, 1], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 30)', action: 'loop-check', vars: { current: '30' } },
      { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, marked: [0, 1], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (30 not marked)', action: 'check', vars: { current: '30', marked: '10,20' } },
      { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 2, marked: [0, 1, 2], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 30)', action: 'mark', vars: { current: '30', marked: '10,20,30' } },
      { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, marked: [0, 1, 2], currentLine: 7, description: '➡️ Move: current = current.next (30 → 40)', action: 'move', vars: { current: '40', marked: '10,20,30' } },
      
      { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, marked: [0, 1, 2], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 40)', action: 'loop-check', vars: { current: '40' } },
      { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, marked: [0, 1, 2], currentLine: 5, description: '🔍 Check: Is current.visited true? NO! (40 not marked)', action: 'check', vars: { current: '40', marked: '10,20,30' } },
      { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 3, marked: [0, 1, 2, 3], currentLine: 6, description: '🏷️ Mark: Set current.visited = true (mark node 40)', action: 'mark', vars: { current: '40', marked: '10,20,30,40' } },
      { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0, 1, 2, 3], currentLine: 7, description: '➡️ Move: current = current.next (40 → 10)', action: 'move', vars: { current: '10', marked: '10,20,30,40' } },
      
      // Cycle detection (3 steps)
      { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0, 1, 2, 3], currentLine: 4, description: '🔄 Loop Check: Is current !== null? YES! (current = 10)', action: 'loop-check', vars: { current: '10' } },
      { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0, 1, 2, 3], currentLine: 5, description: '🎯 Check: Is current.visited true? YES! (10 already marked)', action: 'detect', vars: { current: '10', marked: '10,20,30,40' } },
      { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0, 1, 2, 3], currentLine: 6, description: '✅ Return: Cycle detected! Found marked node 10', action: 'result', vars: { result: 'true' } },
      { step: 22, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], current: 0, marked: [0, 1, 2, 3], currentLine: -1, description: '🏆 Algorithm complete! Cycle found in linked list', action: 'done', vars: { result: 'Cycle detected' } },
    ];
  };

  const getSteps = () => {
    switch (algorithmType) {
      case 'floyd': return generateFloydSteps();
      case 'hash': return generateHashSteps();
      case 'mark': return generateMarkSteps();
      default: return generateFloydSteps();
    }
  };

  const [steps, setSteps] = useState(getSteps());

  useEffect(() => {
    setSteps(getSteps());
    setCurrentStep(0);
  }, [algorithmType, hasCycle]);

  // Helper Functions
  const getCodeWithValues = (stepData: Step) => {
    const getVarValue = (key: string): string => {
      const value = stepData.vars[key];
      return value !== undefined ? String(value) : '';
    };

    if (algorithmType === 'floyd') {
      return [
        { 
          line: 1, 
          code: 'function detectCycle(head) {', 
          active: stepData.currentLine === 1, 
          indent: 0 
        },
        { 
          line: 2, 
          code: '    if (!head || !head.next) return false;', 
          active: stepData.currentLine === 2, 
          indent: 1
        },
        { 
          line: 3, 
          code: '    ', 
          active: stepData.currentLine === 3, 
          indent: 0
        },
        { 
          line: 4, 
          code: '    let slow = head;', 
          active: stepData.currentLine === 4, 
          indent: 1,
          values: stepData.currentLine === 4 ? `slow=${getVarValue('slow') || 'head'}` : ''
        },
        { 
          line: 5, 
          code: '    let fast = head.next;', 
          active: stepData.currentLine === 5, 
          indent: 1,
          values: stepData.currentLine === 5 ? `fast=${getVarValue('fast') || 'head.next'}` : ''
        },
        { 
          line: 6, 
          code: '    ', 
          active: stepData.currentLine === 6, 
          indent: 0
        },
        { 
          line: 7, 
          code: '    while (slow !== fast) {', 
          active: stepData.currentLine === 7, 
          indent: 1
        },
        { 
          line: 8, 
          code: '        if (!fast || !fast.next) return false;', 
          active: stepData.currentLine === 8, 
          indent: 2
        },
        { 
          line: 9, 
          code: '        slow = slow.next;', 
          active: stepData.currentLine === 9, 
          indent: 2,
          values: stepData.currentLine === 9 ? `slow=${getVarValue('slow') || 'next'}` : ''
        },
        { 
          line: 10, 
          code: '        fast = fast.next.next;', 
          active: stepData.currentLine === 10, 
          indent: 2,
          values: stepData.currentLine === 10 ? `fast=${getVarValue('fast') || 'next.next'}` : ''
        },
        { 
          line: 11, 
          code: '    }', 
          active: stepData.currentLine === 11, 
          indent: 1
        },
        { 
          line: 12, 
          code: '    ', 
          active: stepData.currentLine === 12, 
          indent: 0
        },
        { 
          line: 13, 
          code: '    return true; // Cycle detected', 
          active: stepData.currentLine === 13, 
          indent: 1,
          values: stepData.currentLine === 13 ? `result=${getVarValue('result') || 'true'}` : ''
        },
        { 
          line: 14, 
          code: '}', 
          active: stepData.currentLine === 14, 
          indent: 0
        }
      ];
    } else if (algorithmType === 'hash') {
      return [
        { 
          line: 1, 
          code: 'function detectCycle(head) {', 
          active: stepData.currentLine === 1, 
          indent: 0 
        },
        { 
          line: 2, 
          code: '    const visited = new Set();', 
          active: stepData.currentLine === 2, 
          indent: 1,
          values: stepData.currentLine === 2 ? `visited=${getVarValue('visited') || '{}'}` : ''
        },
        { 
          line: 3, 
          code: '    let current = head;', 
          active: stepData.currentLine === 3, 
          indent: 1,
          values: stepData.currentLine === 3 ? `current=${getVarValue('current') || 'head'}` : ''
        },
        { 
          line: 4, 
          code: '    ', 
          active: stepData.currentLine === 4, 
          indent: 0
        },
        { 
          line: 5, 
          code: '    while (current !== null) {', 
          active: stepData.currentLine === 5, 
          indent: 1
        },
        { 
          line: 6, 
          code: '        if (visited.has(current)) {', 
          active: stepData.currentLine === 6, 
          indent: 2
        },
        { 
          line: 7, 
          code: '            return true; // Cycle detected', 
          active: stepData.currentLine === 7, 
          indent: 3
        },
        { 
          line: 8, 
          code: '        }', 
          active: stepData.currentLine === 8, 
          indent: 2
        },
        { 
          line: 9, 
          code: '        visited.add(current);', 
          active: stepData.currentLine === 9, 
          indent: 2,
          values: stepData.currentLine === 9 ? `visited=${getVarValue('visited') || '{}'}` : ''
        },
        { 
          line: 10, 
          code: '        current = current.next;', 
          active: stepData.currentLine === 10, 
          indent: 2,
          values: stepData.currentLine === 10 ? `current=${getVarValue('current') || 'next'}` : ''
        },
        { 
          line: 11, 
          code: '    }', 
          active: stepData.currentLine === 11, 
          indent: 1
        },
        { 
          line: 12, 
          code: '    ', 
          active: stepData.currentLine === 12, 
          indent: 0
        },
        { 
          line: 13, 
          code: '    return false; // No cycle', 
          active: stepData.currentLine === 13, 
          indent: 1,
          values: stepData.currentLine === 13 ? `result=${getVarValue('result') || 'false'}` : ''
        },
        { 
          line: 14, 
          code: '}', 
          active: stepData.currentLine === 14, 
          indent: 0
        }
      ];
    } else {
      // Mark algorithm
      return [
        { 
          line: 1, 
          code: 'function detectCycle(head) {', 
          active: stepData.currentLine === 1, 
          indent: 0 
        },
        { 
          line: 2, 
          code: '    let current = head;', 
          active: stepData.currentLine === 2, 
          indent: 1,
          values: stepData.currentLine === 2 ? `current=${getVarValue('current') || 'head'}` : ''
        },
        { 
          line: 3, 
          code: '    ', 
          active: stepData.currentLine === 3, 
          indent: 0
        },
        { 
          line: 4, 
          code: '    while (current !== null) {', 
          active: stepData.currentLine === 4, 
          indent: 1
        },
        { 
          line: 5, 
          code: '        if (current.visited) {', 
          active: stepData.currentLine === 5, 
          indent: 2
        },
        { 
          line: 6, 
          code: '            return true; // Cycle detected', 
          active: stepData.currentLine === 6, 
          indent: 3
        },
        { 
          line: 7, 
          code: '        }', 
          active: stepData.currentLine === 7, 
          indent: 2
        },
        { 
          line: 8, 
          code: '        current.visited = true;', 
          active: stepData.currentLine === 8, 
          indent: 2,
          values: stepData.currentLine === 8 ? `marked=${getVarValue('marked') || 'none'}` : ''
        },
        { 
          line: 9, 
          code: '        current = current.next;', 
          active: stepData.currentLine === 9, 
          indent: 2,
          values: stepData.currentLine === 9 ? `current=${getVarValue('current') || 'next'}` : ''
        },
        { 
          line: 10, 
          code: '    }', 
          active: stepData.currentLine === 10, 
          indent: 1
        },
        { 
          line: 11, 
          code: '    ', 
          active: stepData.currentLine === 11, 
          indent: 0
        },
        { 
          line: 12, 
          code: '    return false; // No cycle', 
          active: stepData.currentLine === 12, 
          indent: 1,
          values: stepData.currentLine === 12 ? `result=${getVarValue('result') || 'false'}` : ''
        },
        { 
          line: 13, 
          code: '}', 
          active: stepData.currentLine === 13, 
          indent: 0
        }
      ];
    }
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    if ('slow' in step && step.slow !== undefined) setSlow(step.slow);
    if ('fast' in step && step.fast !== undefined) setFast(step.fast);
    if ('current' in step && step.current !== undefined) setCurrent(step.current ?? 0);
    if ('visited' in step && step.visited !== undefined) setVisited(step.visited);
    if ('marked' in step && step.marked !== undefined) setMarked(step.marked);
  };

  const handlePrevious = () => {
    if (currentStep > 0 && !isAnimating) {
      goToStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1 && !isAnimating) {
      goToStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    if (!isAnimating) {
      goToStep(0);
    }
  };

  const getAnimationDelay = () => {
    switch (animationSpeed) {
      case 'slow': return 3500;
      case 'fast': return 1500;
      default: return 2500;
    }
  };

  const handlePlay = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      goToStep(0);

      const delay = getAnimationDelay();

      steps.forEach((step, index) => {
        setTimeout(() => {
          if (index < steps.length) {
            goToStep(index);
          }
          if (index === steps.length - 1) {
            setTimeout(() => setIsAnimating(false), 2000);
          }
        }, index * delay);
      });
    }
  };

  const renderNode = (node: Node, index: number, step: Step) => {
    const isSlow = step.slow === index;
    const isFast = step.fast === index;
    const isCurrent = step.current === index;
    const isVisited = step.visited?.includes(index);
    const isMarked = step.marked?.includes(index);
    const isHighlighted = isSlow || isFast || isCurrent;

    let nodeColor = 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600';
    let icon = null;
    let iconColor = '';

    if (isSlow && isFast) {
      nodeColor = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-600';
      icon = <Target className="w-4 h-4" />;
      iconColor = 'text-white';
    } else if (isSlow) {
      nodeColor = 'bg-blue-500 text-white border-blue-600';
      icon = <Circle className="w-4 h-4" />;
      iconColor = 'text-white';
    } else if (isFast) {
      nodeColor = 'bg-purple-500 text-white border-purple-600';
      icon = <Zap className="w-4 h-4" />;
      iconColor = 'text-white';
    } else if (isCurrent) {
      nodeColor = 'bg-green-500 text-white border-green-600';
      icon = <Activity className="w-4 h-4" />;
      iconColor = 'text-white';
    } else if (isMarked) {
      nodeColor = 'bg-orange-500 text-white border-orange-600';
      icon = <CheckCircle className="w-4 h-4" />;
      iconColor = 'text-white';
    } else if (isVisited) {
      nodeColor = 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700';
    }

    return (
      <div key={index} className="relative">
        {/* Enhanced Node Design - More like actual linked list nodes */}
        <div className={`relative w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center font-bold transition-all duration-500 hover:scale-105 shadow-lg ${nodeColor} ${isHighlighted ? 'ring-4 ring-blue-200 dark:ring-blue-800 animate-pulse' : 'scale-100'}`}>
          {/* Node Value */}
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {node.value}
          </div>
          <div className="text-xs opacity-75 text-slate-600 dark:text-slate-400">
            Node {index}
          </div>
          
          {/* Next Pointer Visual */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-400 dark:border-slate-600 flex items-center justify-center">
            <ArrowRight className="w-2 h-2 text-slate-600 dark:text-slate-400" />
          </div>
        </div>
        
        {/* Pointer Indicators - Slow at top, Fast at bottom */}
        {isSlow && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="px-3 py-1 bg-blue-500 text-white rounded-full shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">SLOW</span>
            </div>
          </div>
        )}
        {isFast && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="px-3 py-1 bg-purple-500 text-white rounded-full shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">FAST</span>
            </div>
          </div>
        )}
        {isCurrent && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="p-2 rounded-full bg-green-500 text-white shadow-lg">
              <Target className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-green-600 uppercase tracking-wider">CURR</span>
          </div>
        )}
        {isMarked && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
            <div className="p-2 rounded-full bg-orange-500 text-white shadow-lg">
              <CheckCircle className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">MARK</span>
          </div>
        )}
        {step.cycleStart === index && (
          <div className="absolute -top-6 right-0 flex flex-col items-center gap-1 animate-pulse">
            <div className="px-2 py-1 bg-red-500 text-white rounded-full shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">START</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderArrow = (fromIndex: number, toIndex: number | null, step: Step) => {
    if (toIndex === null) {
      return (
        <div className="flex items-center">
          <div className="relative">
            <ArrowRight className="w-8 h-8 text-slate-400 transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50 animate-pulse"></div>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow-lg">
            <span className="text-slate-500 text-sm font-bold">null</span>
          </div>
        </div>
      );
    }

    const isHighlighted = step.slow === fromIndex || step.fast === fromIndex || step.current === fromIndex;
    
    return (
      <div className={`flex items-center transition-all duration-500 ${isHighlighted ? 'scale-125' : 'scale-100'}`}>
        <div className="relative">
          <ArrowRight className={`w-8 h-8 transition-all duration-300 ${isHighlighted ? 'text-blue-500 drop-shadow-lg' : 'text-slate-400'}`} />
          {isHighlighted && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 animate-pulse rounded-lg"></div>
          )}
        </div>
      </div>
    );
  };

  const currentStepData = steps[currentStep] || steps[0];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader 
        icon={Activity} 
        category="DSA · Linked Lists" 
        title="Detect Cycle in Linked List" 
        description="Master three algorithms to detect cycles in linked lists: Floyd's Tortoise and Hare, Hash Set, and Node Marking"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Intermediate', variant: 'default' },
        ]}
      />

      {/* What You'll Learn Section */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            What You'll Learn
          </CardTitle>
          <CardDescription>
            Master cycle detection techniques and understand when to use each approach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Floyd's Algorithm</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Learn the elegant two-pointer technique that detects cycles in O(n) time with O(1) space
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Hash Set Method</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Understand how to use a Set to track visited nodes and detect cycles with O(n) space
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Node Marking</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Explore how to modify node structure to mark visited nodes and detect cycles
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Problem Statement */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is a Cycle? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Infinity className="w-5 h-5" />
              What is a Linked List Cycle?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                A cycle occurs when a node's next pointer points back to a previous node in the list, creating an infinite loop.
              </p>
              
              {/* Visual Examples */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">ACYCLIC LIST</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-full flex items-center justify-center text-sm font-bold">10</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-full flex items-center justify-center text-sm font-bold">20</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-full flex items-center justify-center text-sm font-bold">30</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center text-xs font-bold">null</div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">Ends at null → No cycle</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">CYCLIC LIST</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-700 rounded-full flex items-center justify-center text-sm font-bold">10</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-700 rounded-full flex items-center justify-center text-sm font-bold">20</div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-700 rounded-full flex items-center justify-center text-sm font-bold">30</div>
                    <ArrowRight className="w-4 h-4 text-red-500" />
                    <div className="w-12 h-12 bg-red-200 dark:bg-red-800 border-2 border-red-400 rounded-full flex items-center justify-center text-sm font-bold animate-pulse">10</div>
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400 mt-2">Points back → Cycle detected!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Comparison */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Approaches
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Floyd's Algorithm</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">O(1) Space</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Two pointers move at different speeds. If they meet, there's a cycle.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Hash Set Method</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">O(n) Space</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Store visited nodes in a Set. If we see a node again, there's a cycle.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-orange-700 dark:text-orange-300">Node Marking</span>
                      <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Modifies Structure</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Mark visited nodes directly. If we find an already marked node, there's a cycle.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How Cycle Detection Works
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Traverse the List</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Start from the head and move through each node</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-8 h-8 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-center text-xs">10</div>
                      <ArrowRight className="w-3 h-3" />
                      <div className="w-8 h-8 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-center text-xs">20</div>
                      <ArrowRight className="w-3 h-3" />
                      <div className="w-8 h-8 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-center text-xs">30</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Track Visited Nodes</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Keep track of nodes you've already seen</div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded">{'{10, 20, 30}'}</div>
                      <span className="text-xs text-slate-500">visited set</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Detect Repetition</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If you encounter a node that's already been visited → Cycle!</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-8 h-8 bg-red-100 border-2 border-red-400 rounded-full flex items-center justify-center text-xs animate-pulse">20</div>
                      <span className="text-xs text-red-600 font-semibold">Already seen!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>A cycle means you can traverse infinitely without reaching null</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Floyd's algorithm uses two pointers: slow (1 step) and fast (2 steps)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Hash Set method is simpler but uses extra memory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Node marking modifies the original structure (use with caution)</span>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Algorithm Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Algorithm Selection
          </CardTitle>
          <CardDescription>
            Choose an algorithm to visualize cycle detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant={algorithmType === 'floyd' ? 'default' : 'outline'}
              onClick={() => setAlgorithmType('floyd')}
              className="h-auto p-4 flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">Floyd's Algorithm</span>
              </div>
              <span className="text-xs opacity-75">Tortoise and Hare (O(1) space)</span>
            </Button>
            
            <Button
              variant={algorithmType === 'hash' ? 'default' : 'outline'}
              onClick={() => setAlgorithmType('hash')}
              className="h-auto p-4 flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4" />
                <span className="font-semibold">Hash Set</span>
              </div>
              <span className="text-xs opacity-75">Track visited nodes (O(n) space)</span>
            </Button>
            
            <Button
              variant={algorithmType === 'mark' ? 'default' : 'outline'}
              onClick={() => setAlgorithmType('mark')}
              className="h-auto p-4 flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Node Marking</span>
              </div>
              <span className="text-xs opacity-75">Modify node structure (O(1) space)</span>
            </Button>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasCycle}
                onChange={(e) => setHasCycle(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">List has cycle</span>
            </label>
            
            <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {['slow', 'normal', 'fast'].map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4"
                />
                <span className="text-sm capitalize">{speed}</span>
              </label>
            ))}
          </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Step-by-Step Animation
            </span>
            <span className="text-sm font-normal text-slate-500">
              Step {currentStepData.step} of {steps.length}
            </span>
          </CardTitle>
          <CardDescription>
            Watch how the {algorithmType === 'floyd' ? "Floyd's Tortoise and Hare" : algorithmType === 'hash' ? 'Hash Set' : 'Node Marking'} algorithm works
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
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

          {/* Navigation Controls */}
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

          {/* Code Viewer */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">detect-cycle.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    {currentStepData.vars && Object.entries(currentStepData.vars).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400 font-mono">{key}:</span>
                        <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description Card */}
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
                      {currentStepData.action === 'loop-check' && '🔄 Loop Check'}
                      {currentStepData.action === 'check' && '🔍 Checking'}
                      {currentStepData.action === 'move' && '➡️ Moving'}
                      {currentStepData.action === 'visit' && '📍 Visiting'}
                      {currentStepData.action === 'mark' && '🏷️ Marking'}
                      {currentStepData.action === 'detect' && '✅ Detection'}
                      {currentStepData.action === 'result' && '🎯 Result'}
                      {currentStepData.action === 'done' && '🏆 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  {algorithmType === 'floyd' && (
                    <>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-400">Slow</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-400">Fast</span>
                      </div>
                    </>
                  )}
                  {(algorithmType === 'hash' || algorithmType === 'mark') && (
                    <>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-400">Current</span>
                      </div>
                      {algorithmType === 'hash' && (
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-amber-200 dark:bg-amber-800 rounded-full border border-amber-400"></div>
                          <span className="text-slate-600 dark:text-slate-400">Visited</span>
                        </div>
                      )}
                      {algorithmType === 'mark' && (
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-slate-600 dark:text-slate-400">Marked</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {currentStepData.list.map((node: Node, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {renderNode(node, idx, currentStepData)}
                      {renderArrow(idx, node.next, currentStepData)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
          <CardDescription>
            Complete code examples for cycle detection algorithms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {algorithmType === 'floyd' && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" />
                Floyd's Tortoise and Hare Algorithm
              </h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`function detectCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true; // Cycle detected
}`}
              </div>
            </div>
          )}

          {algorithmType === 'hash' && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-green-500" />
                Hash Set Algorithm
              </h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`function detectCycle(head) {
    const visited = new Set();
    let current = head;
    
    while (current) {
        if (visited.has(current)) {
            return true; // Cycle detected
        }
        visited.add(current);
        current = current.next;
    }
    
    return false; // No cycle
}`}
              </div>
            </div>
          )}

          {algorithmType === 'mark' && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                Node Marking Algorithm
              </h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`function detectCycle(head) {
    let current = head;
    
    while (current) {
        if (current.visited) {
            return true; // Cycle detected
        }
        current.visited = true;
        current = current.next;
    }
    
    return false; // No cycle
}`}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Complexity Analysis
          </CardTitle>
          <CardDescription>
            Save your cycle detection notes and delete them when no longer needed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                    <th className="text-left p-3 border border-blue-200 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-100">Algorithm</th>
                    <th className="text-center p-3 border border-blue-200 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-100">Time Complexity</th>
                    <th className="text-center p-3 border border-blue-200 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-100">Space Complexity</th>
                    <th className="text-left p-3 border border-blue-200 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-100">Pros & Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold">Floyd's Algorithm</span>
                      </div>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-sm font-semibold">O(n)</span>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-sm font-semibold">O(1)</span>
                    </td>
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span>Constant space</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span>No modification</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-500" />
                          <span>Harder to understand</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4 text-green-600" />
                        <span className="font-semibold">Hash Set Method</span>
                      </div>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-sm font-semibold">O(n)</span>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded text-sm font-semibold">O(n)</span>
                    </td>
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span>Easy to understand</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span>No modification</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-500" />
                          <span>Extra memory usage</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold">Node Marking</span>
                      </div>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-sm font-semibold">O(n)</span>
                    </td>
                    <td className="text-center p-3 border border-blue-200 dark:border-blue-700">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-sm font-semibold">O(1)</span>
                    </td>
                    <td className="p-3 border border-blue-200 dark:border-blue-700">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-600" />
                          <span>Constant space</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-500" />
                          <span>Modifies structure</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-500" />
                          <span>Not always possible</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Key Insights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                    <div>
                      <div className="font-semibold text-purple-900 dark:text-purple-100">Time Complexity</div>
                      <div className="text-sm text-purple-800 dark:text-purple-200">
                        All algorithms have O(n) time complexity since we must potentially visit each node once.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold text-purple-900 dark:text-purple-100">Space Trade-offs</div>
                      <div className="text-sm text-purple-800 dark:text-purple-200">
                        Floyd's algorithm and Node marking use O(1) space, while Hash Set uses O(n) space.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                    <div>
                      <div className="font-semibold text-purple-900 dark:text-purple-100">Modification Considerations</div>
                      <div className="text-sm text-purple-800 dark:text-purple-200">
                        Node marking modifies the original structure, which may not be allowed in some scenarios.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                    <div>
                      <div className="font-semibold text-purple-900 dark:text-purple-100">Best Choice</div>
                      <div className="text-sm text-purple-800 dark:text-purple-200">
                        Floyd's algorithm is generally preferred for interviews due to O(1) space and no modification.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Tips */}
            <Alert className="border-blue-200 dark:border-blue-700">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <AlertTitle>Performance Tips</AlertTitle>
              <AlertDescription className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Floyd's algorithm is optimal for space - use it when memory is a concern</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Hash Set is easier to implement and understand, good for learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Node marking is only possible when you can modify the node structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Consider the constraints of your problem when choosing an algorithm</span>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippets */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>
            Full code implementations for all three cycle detection algorithms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Floyd's Algorithm */}
          <div className="space-y-3">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Floyd's Tortoise and Hare Algorithm
            </h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">floyd-cycle-detection.js</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono text-slate-700 dark:text-slate-300">
{`function detectCycleFloyd(head) {
    // Edge case: empty list or single node
    if (!head || !head.next) {
        return false;
    }
    
    // Initialize two pointers
    let slow = head;        // Moves 1 step at a time
    let fast = head.next;   // Moves 2 steps at a time
    
    // Loop until pointers meet or fast reaches end
    while (slow !== fast) {
        // If fast reaches the end, no cycle exists
        if (!fast || !fast.next) {
            return false;
        }
        
        // Move pointers
        slow = slow.next;           // 1 step
        fast = fast.next.next;      // 2 steps
    }
    
    // Pointers met - cycle detected!
    return true;
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Hash Set Method */}
          <div className="space-y-3">
            <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Hash Set Method
            </h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">hash-set-cycle-detection.js</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono text-slate-700 dark:text-slate-300">
{`function detectCycleHashSet(head) {
    // Create a Set to store visited nodes
    const visited = new Set();
    let current = head;
    
    // Traverse the list
    while (current !== null) {
        // If node already visited, cycle detected
        if (visited.has(current)) {
            return true;
        }
        
        // Mark current node as visited
        visited.add(current);
        
        // Move to next node
        current = current.next;
    }
    
    // Reached end of list - no cycle
    return false;
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Node Marking Method */}
          <div className="space-y-3">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Node Marking Method
            </h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">node-marking-cycle-detection.js</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono text-slate-700 dark:text-slate-300">
{`function detectCycleMarking(head) {
    let current = head;
    
    // Traverse the list
    while (current !== null) {
        // If node already marked, cycle detected
        if (current.visited === true) {
            return true;
        }
        
        // Mark current node as visited
        current.visited = true;
        
        // Move to next node
        current = current.next;
    }
    
    // Reached end of list - no cycle
    return false;
}

// Note: This method modifies the original list structure
// Make sure to reset visited flags if needed later`}
                </code>
              </pre>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Usage Example</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
              <pre className="text-sm font-mono text-slate-700 dark:text-slate-300">
{`// Create a linked list with a cycle
const node1 = { value: 10, next: null };
const node2 = { value: 20, next: null };
const node3 = { value: 30, next: null };
const node4 = { value: 40, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

// Test different algorithms
console.log(detectCycleFloyd(node1));    // true
console.log(detectCycleHashSet(node1));  // true
console.log(detectCycleMarking(node1));  // true`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

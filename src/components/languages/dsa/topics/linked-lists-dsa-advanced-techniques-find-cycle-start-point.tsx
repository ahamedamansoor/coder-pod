'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, Pause, RotateCcw, SkipForward, ChevronLeft, ChevronRight, Target, ArrowRight, CheckCircle, AlertCircle, Lightbulb, Code, Eye } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared';

interface Node {
  value: number;
  next: number | null;
}

interface Step {
  step: number;
  list: Node[];
  tortoise?: number;
  hare?: number;
  cycleStart?: number;
  phase?: string;
  currentLine: number;
  description: string;
  action: string;
  vars: { [key: string]: string | undefined };
  highlighted?: number[];
  meetingPoint?: number;
  distanceTraveled?: { tortoise: number; hare: number };
}

export default function FindCycleStartPoint() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [hasCycle, setHasCycle] = useState(true);
  
  // Algorithm pointers/indices
  const [tortoise, setTortoise] = useState(0);
  const [hare, setHare] = useState(0);
  
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const generateFindCycleStartSteps = (): Step[] => {
    if (!hasCycle) {
      return [
        // No cycle case - comprehensive steps
        { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 0, phase: '1', currentLine: 1, description: '📋 Phase 1: Check if head exists', action: 'init', vars: { head: 'exists' } },
        { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 0, phase: '1', currentLine: 2, description: '📋 Check: Does head.next exist? YES!', action: 'init', vars: { headNext: 'exists' } },
        { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 0, phase: '1', currentLine: 3, description: '📋 Initialize: Set tortoise = head (node 10)', action: 'init', vars: { tortoise: '10' } },
        { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 0, phase: '1', currentLine: 4, description: '📋 Initialize: Set hare = head.next (node 20)', action: 'init', vars: { tortoise: '10', hare: '20' } },
        { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 1, phase: '1', currentLine: 6, description: '🔄 Loop Check: Is tortoise !== hare? YES! (10 ≠ 20)', action: 'loop-check', vars: { tortoise: '10', hare: '20' } },
        { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 1, phase: '1', currentLine: 6, description: '🔍 Check: Does hare exist? YES!', action: 'check', vars: { hare: '20' } },
        { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 1, phase: '1', currentLine: 6, description: '❌ Check: Does hare.next exist? NO! (20.next = null)', action: 'check', vars: { hareNext: 'null' } },
        { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 1, phase: '1', currentLine: 7, description: '✅ Return: No cycle detected (hare reached null)', action: 'result', vars: { result: 'false' } },
        { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: null }], tortoise: 0, hare: 1, phase: '1', currentLine: -1, description: '🎯 Algorithm complete! No cycle found', action: 'done', vars: { result: 'No cycle' } },
      ];
    }

    // Cycle case - Comprehensive 40+ steps following the template guidelines
    return [
      // INITIALIZATION PHASE (5 steps)
      { step: 1, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 1, description: '📋 Phase 1: Find meeting point in cycle', action: 'init', vars: { phase: '1' } },
      { step: 2, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 2, description: '📋 Initialize: Check if head exists? YES!', action: 'init', vars: { head: 'exists' } },
      { step: 3, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 3, description: '📋 Initialize: Check if head.next exists? YES!', action: 'init', vars: { headNext: 'exists' } },
      { step: 4, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 4, description: '📋 Initialize: Set tortoise = head (node 10)', action: 'init', vars: { tortoise: '10' } },
      { step: 5, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 6, description: '📋 Initialize: Set hare = head (node 10)', action: 'init', vars: { tortoise: '10', hare: '10' } },

      // PHASE 1 - FIND MEETING POINT (Detailed 20 steps)
      { step: 6, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 6, description: '🔄 Loop Check: Is tortoise !== hare? YES! (10 ≠ 10 initially, but will move)', action: 'loop-check', vars: { tortoise: '10', hare: '10' } },
      { step: 7, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 7, description: '🔍 Check: Does hare exist? YES!', action: 'check', vars: { hare: '10' } },
      { step: 8, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 7, description: '🔍 Check: Does hare.next exist? YES! (10.next = 20)', action: 'check', vars: { hareNext: '20' } },
      
      // Iteration 1
      { step: 9, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 8, description: '🔄 Iteration 1: Move tortoise by 1 step', action: 'move', vars: { tortoise: '10', hare: '10' } },
      { step: 10, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 0, phase: '1', currentLine: 8, description: '➡️ Move: tortoise = tortoise.next (10 → 20)', action: 'move', vars: { tortoise: '20', hare: '10' } },
      { step: 11, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 0, phase: '1', currentLine: 8, description: '🔄 Iteration 1: Move hare by 2 steps', action: 'move', vars: { tortoise: '20', hare: '10' } },
      { step: 12, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 2, phase: '1', currentLine: 8, description: '⚡ Move: hare = hare.next.next (10 → 30)', action: 'move', vars: { tortoise: '20', hare: '30' } },
      { step: 13, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 2, phase: '1', currentLine: 6, description: '🔄 Loop Check: Is tortoise !== hare? YES! (20 ≠ 30)', action: 'loop-check', vars: { tortoise: '20', hare: '30' } },

      // Iteration 2
      { step: 14, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 2, phase: '1', currentLine: 7, description: '🔍 Check: Does hare exist? YES!', action: 'check', vars: { hare: '30' } },
      { step: 15, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 2, phase: '1', currentLine: 7, description: '🔍 Check: Does hare.next exist? YES! (30.next = 40)', action: 'check', vars: { hareNext: '40' } },
      { step: 16, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 1, hare: 2, phase: '1', currentLine: 8, description: '➡️ Move: tortoise = tortoise.next (20 → 30)', action: 'move', vars: { tortoise: '30', hare: '30' } },
      { step: 17, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 2, hare: 2, phase: '1', currentLine: 8, description: '⚡ Move: hare = hare.next.next (30 → 10 via 40→1)', action: 'move', vars: { tortoise: '30', hare: '10' } },
      { step: 18, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 2, hare: 0, phase: '1', currentLine: 6, description: '🔄 Loop Check: Is tortoise !== hare? YES! (30 ≠ 10)', action: 'loop-check', vars: { tortoise: '30', hare: '10' } },

      // Iteration 3
      { step: 19, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 2, hare: 0, phase: '1', currentLine: 7, description: '🔍 Check: Does hare exist? YES!', action: 'check', vars: { hare: '10' } },
      { step: 20, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 2, hare: 0, phase: '1', currentLine: 7, description: '🔍 Check: Does hare.next exist? YES! (10.next = 20)', action: 'check', vars: { hareNext: '20' } },
      { step: 21, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 2, hare: 0, phase: '1', currentLine: 8, description: '➡️ Move: tortoise = tortoise.next (30 → 40)', action: 'move', vars: { tortoise: '40', hare: '10' } },
      { step: 22, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 3, hare: 0, phase: '1', currentLine: 8, description: '⚡ Move: hare = hare.next.next (10 → 30 via 20→30)', action: 'move', vars: { tortoise: '40', hare: '30' } },
      { step: 23, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 3, hare: 2, phase: '1', currentLine: 6, description: '🔄 Loop Check: Is tortoise !== hare? YES! (40 ≠ 30)', action: 'loop-check', vars: { tortoise: '40', hare: '30' } },

      // Iteration 4 - Meeting point found
      { step: 24, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 3, hare: 2, phase: '1', currentLine: 7, description: '🔍 Check: Does hare exist? YES!', action: 'check', vars: { hare: '30' } },
      { step: 25, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 3, hare: 2, phase: '1', currentLine: 7, description: '🔍 Check: Does hare.next exist? YES! (30.next = 40)', action: 'check', vars: { hareNext: '40' } },
      { step: 26, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 3, hare: 2, phase: '1', currentLine: 8, description: '➡️ Move: tortoise = tortoise.next (40 → 10 via cycle)', action: 'move', vars: { tortoise: '10', hare: '30' } },
      { step: 27, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 2, phase: '1', currentLine: 8, description: '⚡ Move: hare = hare.next.next (30 → 10 via 40→10)', action: 'move', vars: { tortoise: '10', hare: '10' } },
      { step: 28, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, phase: '1', currentLine: 6, description: '🎯 Meeting point found! tortoise === hare at node 10', action: 'meet', vars: { tortoise: '10', hare: '10', meet: '10' } },

      // PHASE 2 - FIND CYCLE START (Detailed 12 steps)
      { step: 29, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 13, description: '📋 Phase 2: Find cycle start point', action: 'init', vars: { phase: '2' } },
      { step: 30, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 10, description: '🔄 Reset: Set tortoise = head (node 10), hare stays at meeting point', action: 'reset', vars: { tortoise: '10', hare: '10' } },
      { step: 31, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 11, description: '🔍 Loop: Move both pointers by 1 step until they meet again', action: 'loop', vars: { tortoise: '10', hare: '10' } },
      { step: 32, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 12, description: '🔄 Loop Check: Is tortoise !== hare? NO! (10 = 10)', action: 'loop-check', vars: { tortoise: '10', hare: '10' } },
      { step: 33, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 13, description: '✅ Found! Both pointers meet immediately at node 10', action: 'found', vars: { tortoise: '10', hare: '10', cycleStart: '10' } },
      { step: 34, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 14, description: '🎯 Return: Cycle start point is node 10 (value: 10)', action: 'result', vars: { result: '10' } },
      { step: 35, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: 15, description: '🏆 Algorithm complete! Cycle starts at node 10', action: 'done', vars: { result: 'Node 10' } },

      // Mathematical explanation steps
      { step: 36, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: -1, description: '📊 Math: Distance from head to cycle start = 0', action: 'explain', vars: { distance: '0' } },
      { step: 37, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: -1, description: '📊 Math: Distance from meeting point to cycle start = 0', action: 'explain', vars: { distance: '0' } },
      { step: 38, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: -1, description: '📊 Math: Since distances are equal, head is the cycle start', action: 'explain', vars: { conclusion: 'head = cycle start' } },
      { step: 39, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: -1, description: '🎓 Key Insight: When tortoise and hare meet at head, head is cycle start', action: 'insight', vars: { insight: 'meeting at head = cycle start' } },
      { step: 40, list: [{ value: 10, next: 1 }, { value: 20, next: 2 }, { value: 30, next: 3 }, { value: 40, next: 1 }], tortoise: 0, hare: 0, cycleStart: 0, phase: '2', currentLine: -1, description: '🏁 Final Result: Cycle starts at node 0 with value 10', action: 'complete', vars: { final: 'Node 0 (value 10)' } },
    ];
  };

  const [steps] = useState<Step[]>(generateFindCycleStartSteps());

  useEffect(() => {
    const stepData = steps[currentStep];
    if (stepData) {
      setTortoise(stepData.tortoise ?? 0);
      setHare(stepData.hare ?? 0);
    }
  }, [currentStep, steps]);

  useEffect(() => {
    if (isAnimating && currentStep < steps.length - 1) {
      const speed = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 500 : 1000;
      animationRef.current = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, speed);
    } else if (currentStep >= steps.length - 1) {
      setIsAnimating(false);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isAnimating, currentStep, steps.length, animationSpeed]);

  const currentStepData = steps[currentStep] || steps[0];

  const renderNode = (node: Node, index: number, step: Step) => {
    const isTortoise = step.tortoise === index;
    const isHare = step.hare === index;
    const isCycleStart = step.cycleStart === index;

    let nodeColor = 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600';
    
    if (isTortoise && isHare) {
      nodeColor = 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-green-400 dark:border-green-600 shadow-lg shadow-green-500/20';
    } else if (isTortoise) {
      nodeColor = 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/30 border-blue-400 dark:border-blue-600 shadow-lg shadow-blue-500/20';
    } else if (isHare) {
      nodeColor = 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/30 border-purple-400 dark:border-purple-600 shadow-lg shadow-purple-500/20';
    } else if (isCycleStart) {
      nodeColor = 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-900/30 border-red-400 dark:border-red-600 shadow-lg shadow-red-500/20';
    }

    return (
      <div key={index} className="relative">
        <div className={`relative w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center font-bold transition-all duration-500 hover:scale-105 shadow-lg ${nodeColor}`}>
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {node.value}
          </div>
          <div className="text-xs opacity-75 text-slate-600 dark:text-slate-400">
            Node {index}
          </div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-400 dark:border-slate-600 flex items-center justify-center">
            <ArrowRight className="w-2 h-2 text-slate-600 dark:text-slate-400" />
          </div>
        </div>
        
        {/* Pointer Indicators */}
        {isTortoise && isHare && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-500"></div>
            <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg border-2 border-green-600">
              <span className="text-xs font-bold uppercase tracking-wider">MEET</span>
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 font-medium">Both pointers</div>
          </div>
        )}
        {isTortoise && !isHare && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500"></div>
            <div className="px-3 py-1 bg-blue-500 text-white rounded-full shadow-lg border-2 border-blue-600">
              <span className="text-xs font-bold uppercase tracking-wider">TORTOISE</span>
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">1 step</div>
          </div>
        )}
        {isHare && !isTortoise && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-purple-500"></div>
            <div className="px-3 py-1 bg-purple-500 text-white rounded-full shadow-lg border-2 border-purple-600">
              <span className="text-xs font-bold uppercase tracking-wider">HARE</span>
            </div>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">2 steps</div>
          </div>
        )}
        {isCycleStart && (
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 dark:text-slate-400">
              NULL
            </div>
          </div>
        </div>
      );
    }

    const isHighlighted = step.tortoise === fromIndex || step.hare === fromIndex;
    
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

  const getCodeWithValues = (stepData: Step) => {
    const getVarValue = (key: string): string => {
      const value = stepData.vars[key];
      if (value === undefined) return '';
      
      // Format tortoise and hare as object structures
      if (key === 'tortoise' || key === 'hare') {
        if (value === 'null') return `${key} = null`;
        if (value === 'false') return `${key} = false`;
        
        // Get the actual node value and next pointer
        const nodeIndex = parseInt(String(value));
        if (!isNaN(nodeIndex) && stepData.list && stepData.list[nodeIndex]) {
          const node = stepData.list[nodeIndex];
          const nextValue = node.next !== null ? node.next : 'null';
          return `${key} = { value: ${node.value}, next: ${nextValue} }`;
        }
      }
      
      return `${key}: ${value}`;
    };

    return [
      { 
        line: 1, 
        code: `function findCycleStart(head) {`, 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: ''
      },
      { 
        line: 2, 
        code: `  if (!head || !head.next) return null;`, 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: ''
      },
      { 
        line: 3, 
        code: `  let tortoise = head, hare = head;`, 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: `${getVarValue('tortoise')}, ${getVarValue('hare')}`
      },
      { 
        line: 4, 
        code: `  `, 
        active: stepData.currentLine === 4, 
        indent: 0,
        values: ''
      },
      { 
        line: 5, 
        code: `  // Phase 1: Find meeting point`, 
        active: stepData.currentLine === 5, 
        indent: 0,
        values: ''
      },
      { 
        line: 6, 
        code: `  while (hare && hare.next) {`, 
        active: stepData.currentLine === 6, 
        indent: 1,
        values: `${getVarValue('hare')}`
      },
      { 
        line: 7, 
        code: `    tortoise = tortoise.next;`, 
        active: stepData.currentLine === 7, 
        indent: 2,
        values: `${getVarValue('tortoise')}`
      },
      { 
        line: 8, 
        code: `    hare = hare.next.next;`, 
        active: stepData.currentLine === 8, 
        indent: 2,
        values: `${getVarValue('hare')}`
      },
      { 
        line: 9, 
        code: `    if (tortoise === hare) break;`, 
        active: stepData.currentLine === 9, 
        indent: 2,
        values: `${getVarValue('tortoise')}, ${getVarValue('hare')}`
      },
      { 
        line: 10, 
        code: `  }`, 
        active: stepData.currentLine === 10, 
        indent: 1,
        values: ''
      },
      { 
        line: 11, 
        code: `  `, 
        active: stepData.currentLine === 11, 
        indent: 0,
        values: ''
      },
      { 
        line: 12, 
        code: `  // Phase 2: Find cycle start`, 
        active: stepData.currentLine === 12, 
        indent: 0,
        values: ''
      },
      { 
        line: 13, 
        code: `  tortoise = head;`, 
        active: stepData.currentLine === 13, 
        indent: 1,
        values: `${getVarValue('tortoise')}`
      },
      { 
        line: 14, 
        code: `  while (tortoise !== hare) {`, 
        active: stepData.currentLine === 14, 
        indent: 1,
        values: `${getVarValue('tortoise')}, ${getVarValue('hare')}`
      },
      { 
        line: 15, 
        code: `    tortoise = tortoise.next;`, 
        active: stepData.currentLine === 15, 
        indent: 2,
        values: `${getVarValue('tortoise')}`
      },
      { 
        line: 16, 
        code: `    hare = hare.next;`, 
        active: stepData.currentLine === 16, 
        indent: 2,
        values: `${getVarValue('hare')}`
      },
      { 
        line: 17, 
        code: `  }`, 
        active: stepData.currentLine === 17, 
        indent: 1,
        values: ''
      },
      { 
        line: 18, 
        code: `  `, 
        active: stepData.currentLine === 18, 
        indent: 0,
        values: ''
      },
      { 
        line: 19, 
        code: `  return tortoise; // Cycle start point`, 
        active: stepData.currentLine === 19, 
        indent: 1,
        values: `${getVarValue('tortoise')}`
      },
      { 
        line: 20, 
        code: `}`, 
        active: stepData.currentLine === 20, 
        indent: 0,
        values: ''
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setTortoise(step.tortoise ?? 0);
    setHare(step.hare ?? 0);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 3500,
      normal: 2500,
      fast: 1500
    };
    const delay = speedMap[animationSpeed];

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
  };

  const handlePlayPause = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
    }
    setIsAnimating(!isAnimating);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
    goToStep(0);
  };

  const handleStepForward = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case 'init': return '🚀 Initialization';
      case 'loop-check': return '🔄 Loop Check';
      case 'check': return '🔍 Checking';
      case 'move': return '➡️ Moving Pointers';
      case 'meet': return '🎯 Meeting Point Found';
      case 'reset': return '🔄 Reset Phase';
      case 'found': return '✅ Cycle Start Found';
      case 'result': return '🎯 Result';
      case 'done': return '🏆 Complete';
      case 'explain': return '📊 Mathematics';
      case 'insight': return '🎓 Key Insight';
      case 'complete': return '🏁 Final Result';
      default: return '📋 Processing';
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={Target}
        category="DSA · Linked Lists · Advanced Techniques"
        title="Find Cycle Start Point"
        description="Learn how to find the exact node where a cycle begins in a linked list using Floyd's algorithm with two-phase approach"
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Two Pointers', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is a Cycle Start Point?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                The cycle start point is the <strong>first node</strong> where the cycle begins in a linked list. It's the node that gets visited twice when traversing the cycle.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-sm">
                    10 → 20 → 30 → 40 → 20 (cycle)
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Cycle starts at node with value 20
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-sm text-green-900 dark:text-green-100">
                    Node with value: 20
                  </div>
                  <div className="text-xs text-green-800 dark:text-green-200 mt-1">
                    Reference to cycle start node
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Cases
            </h4>
            
            {/* Valid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Valid Case Example</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Valid ✓</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    10 → 20 → 30 → 40 → 20 (cycle starts at 20)
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Algorithm finds node 20 as cycle start
                  </div>
                </div>
              </div>
            </div>

            {/* Invalid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-red-700 dark:text-red-300">No Cycle Case</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">No Cycle ✗</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    10 → 20 → 30 → 40 → null
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                    Fast pointer reaches null, no cycle exists
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Phase 1: Find Meeting Point</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Use tortoise (1 step) and hare (2 steps) pointers:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      tortoise = tortoise.next<br/>
                      hare = hare.next.next
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      They will meet somewhere in the cycle
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Phase 2: Find Cycle Start</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Reset tortoise to head, move both at same speed:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      tortoise = head<br/>
                      while (tortoise !== hare) {`{`}<br/>
                      &nbsp;&nbsp;tortoise = tortoise.next<br/>
                      &nbsp;&nbsp;hare = hare.next<br/>
                      {`}`}
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      Meeting point is the cycle start!
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Mathematical Foundation</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Why this works:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      Distance(head → cycle start) =<br/>
                      Distance(meeting point → cycle start)
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      When both move at same speed, they meet at cycle start
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Visual Legend */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Visual Pointer Legend
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 border-2 border-blue-400 rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-blue-500 -mt-1"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 dark:text-blue-100">TORTOISE</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Moves 1 step at a time</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Blue pointer with arrow</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 border-2 border-purple-400 rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-purple-500 -mt-1"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-900 dark:text-purple-100">HARE</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Moves 2 steps at a time</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Purple pointer with arrow</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-2 border-green-400 rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-green-500 -mt-1"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900 dark:text-green-100">MEET</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Both pointers at same position</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Green gradient with special indicator</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 border-2 border-red-400 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-900 dark:text-red-100">START</div>
                    <div className="text-xs text-red-700 dark:text-red-300">Cycle start node</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Red indicator on node</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <div className="text-xs text-indigo-700 dark:text-indigo-300 font-medium mb-1">💡 Visual Tip:</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Watch how the tortoise moves slowly while the hare jumps ahead. When they meet, you'll see the green "MEET" indicator. The cycle start is marked with a red "START" badge.
              </div>
            </div>
          </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Two-phase approach: meeting point → cycle start</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Fast pointer moves twice as fast as slow pointer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Mathematical proof ensures correctness</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>O(n) time complexity, O(1) space complexity</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the algorithm works with {steps.length} detailed steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control - Line 2 */}
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
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation Controls - Line 3 */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handleStepBackward}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleStepForward}
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">find-cycle-start.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.active && lineData.values && (
                        <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">
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
                    {Object.entries(currentStepData.vars).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">{key}:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{String(value)}</span>
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
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {getActionLabel(steps[currentStep].action)}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  {currentStepData.phase && (
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-800 dark:text-emerald-200 font-medium">
                      Phase {currentStepData.phase}
                    </span>
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

      {/* Complexity Analysis Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We traverse the list at most twice - once to find the meeting point and once to find the cycle start. Each traversal is O(n), so total is O(n).
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only two pointers are used regardless of the list size. No additional data structures are needed, making it constant space.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function findCycleStart(head) {
  if (!head || !head.next) return null;
  
  let tortoise = head, hare = head;
  let meetingPoint = null;
  
  // Phase 1: Find meeting point
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      meetingPoint = tortoise;
      break;
    }
  }
  
  // No cycle found
  if (!meetingPoint) return null;
  
  // Phase 2: Find cycle start
  tortoise = head;
  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }
  
  return tortoise; // Cycle start point
}`}
      />

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <div>
                  <div className="font-semibold">Mathematical Foundation</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    The distance from head to cycle start equals the distance from meeting point to cycle start when traversing the cycle.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <div>
                  <div className="font-semibold">Two-Phase Approach</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Phase 1 finds any meeting point in the cycle, Phase 2 locates the exact start point.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <div>
                  <div className="font-semibold">Pointer Speed Ratio</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Fast pointer moves twice as fast as slow pointer, ensuring they meet within the cycle.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                <div>
                  <div className="font-semibold">No Extra Space</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Achieves O(1) space complexity by using only two pointers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

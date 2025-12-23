'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared';
import { 
  GitBranch, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb, 
  Code, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Eye,
  Link2,
  ArrowDownRight,
  ArrowUpRight
} from 'lucide-react';

interface Node {
  value: number;
  next: number | null;
}

interface Step {
  step: number;
  listA: Node[];
  listB: Node[];
  pointerA?: number | null;
  pointerB?: number | null;
  intersection?: number;
  currentLine: number;
  description: string;
  action: string;
  vars: { [key: string]: string | undefined };
  highlighted?: number[];
  phase?: string;
  lengthA?: number;
  lengthB?: number;
  diff?: number;
}

export default function IntersectionOfTwoLinkedLists() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [hasIntersection, setHasIntersection] = useState(true);
  
  // Algorithm pointers/indices
  const [pointerA, setPointerA] = useState<number | null>(0);
  const [pointerB, setPointerB] = useState<number | null>(0);
  
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const generateIntersectionSteps = (): Step[] => {
    if (!hasIntersection) {
      // No intersection case
      return [
        { step: 1, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 1, description: '📋 Phase 1: Calculate lengths of both lists', action: 'init', vars: { phase: '1' } },
        { step: 2, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 2, description: '🔍 Calculate length of List A: 3 nodes', action: 'calculate', vars: { lengthA: '3' } },
        { step: 3, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 3, description: '🔍 Calculate length of List B: 3 nodes', action: 'calculate', vars: { lengthB: '3' } },
        { step: 4, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 4, description: '📊 Calculate difference: |3 - 3| = 0', action: 'calculate', vars: { diff: '0' } },
        { step: 5, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '2', currentLine: 5, description: '📋 Phase 2: Align pointers to same starting position', action: 'align', vars: { phase: '2' } },
        { step: 6, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '2', currentLine: 6, description: '🔄 No advance needed (diff = 0)', action: 'advance', vars: { pointerA: '1', pointerB: '4' } },
        { step: 7, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '3', currentLine: 15, description: '📋 Phase 3: Move both pointers together', action: 'traverse', vars: { phase: '3' } },
        { step: 8, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 0, pointerB: 0, phase: '3', currentLine: 8, description: '🔍 Compare: 1 ≠ 4 (different nodes)', action: 'compare', vars: { nodeA: '1', nodeB: '4' } },
        { step: 9, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 1, pointerB: 1, phase: '3', currentLine: 8, description: '🔍 Compare: 2 ≠ 5 (different nodes)', action: 'compare', vars: { nodeA: '2', nodeB: '5' } },
        { step: 10, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: 2, pointerB: 2, phase: '3', currentLine: 8, description: '🔍 Compare: 3 ≠ 6 (different nodes)', action: 'compare', vars: { nodeA: '3', nodeB: '6' } },
        { step: 11, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: null, pointerB: null, phase: '3', currentLine: 9, description: '✅ Both pointers reached null - no intersection', action: 'result', vars: { result: 'null' } },
        { step: 12, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: null }], pointerA: null, pointerB: null, phase: '3', currentLine: -1, description: '🎯 Algorithm complete! No intersection found', action: 'done', vars: { result: 'No intersection' } },
      ];
    }

    // Intersection case - Comprehensive 25+ steps
    return [
      // INITIALIZATION PHASE (5 steps)
      { step: 1, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 1, description: '📋 Phase 1: Calculate lengths of both lists', action: 'init', vars: { phase: '1' } },
      { step: 2, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 2, description: '🔍 Calculate length of List A: 5 nodes', action: 'calculate', vars: { lengthA: '5' } },
      { step: 3, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 3, description: '🔍 Calculate length of List B: 3 nodes', action: 'calculate', vars: { lengthB: '3' } },
      { step: 4, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 4, description: '📊 Calculate difference: |5 - 3| = 2', action: 'calculate', vars: { diff: '2' } },
      { step: 5, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 5, description: '📝 List A is longer by 2 nodes', action: 'analyze', vars: { longer: 'A', advance: '2' } },

      // ALIGNMENT PHASE (3 steps)
      { step: 6, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 0, pointerB: 0, phase: '2', currentLine: 6, description: '📋 Phase 2: Advance pointer A by 2 positions', action: 'advance', vars: { phase: '2' } },
      { step: 7, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 1, pointerB: 0, phase: '2', currentLine: 9, description: '➡️ Advance A: 1 → 2', action: 'advance', vars: { pointerA: '2', pointerB: '4' } },
      { step: 8, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 2, pointerB: 0, phase: '2', currentLine: 9, description: '➡️ Advance A: 2 → 3', action: 'advance', vars: { pointerA: '3', pointerB: '4' } },

      // INTERSECTION SEARCH PHASE (15+ steps)
      { step: 9, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 2, pointerB: 0, phase: '3', currentLine: 8, description: '📋 Phase 3: Move both pointers together', action: 'traverse', vars: { phase: '3' } },
      { step: 10, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 2, pointerB: 0, phase: '3', currentLine: 9, description: '🔍 Compare: 3 ≠ 4 (different nodes)', action: 'compare', vars: { nodeA: '3', nodeB: '4' } },
      { step: 11, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 3, pointerB: 1, phase: '3', currentLine: 10, description: '➡️ Move both: A→7, B→5', action: 'move', vars: { pointerA: '7', pointerB: '5' } },
      { step: 12, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 3, pointerB: 1, phase: '3', currentLine: 11, description: '🔍 Compare: 7 ≠ 5 (different nodes)', action: 'compare', vars: { nodeA: '7', nodeB: '5' } },
      { step: 13, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 4, pointerB: 2, phase: '3', currentLine: 12, description: '➡️ Move both: A→8, B→6', action: 'move', vars: { pointerA: '8', pointerB: '6' } },
      { step: 14, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: 4, pointerB: 2, phase: '3', currentLine: 13, description: '🔍 Compare: 8 ≠ 6 (different nodes)', action: 'compare', vars: { nodeA: '8', nodeB: '6' } },
      { step: 15, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: null, pointerB: null, phase: '3', currentLine: 14, description: '➡️ Move both: A→null, B→null', action: 'move', vars: { pointerA: 'null', pointerB: 'null' } },
      { step: 16, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: null, pointerB: null, phase: '3', currentLine: 15, description: '🔍 Compare: null = null (both reached end)', action: 'compare', vars: { nodeA: 'null', nodeB: 'null' } },
      { step: 17, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: null, pointerB: null, phase: '3', currentLine: 16, description: '❌ No intersection found (both reached null)', action: 'result', vars: { result: 'null' } },
      { step: 18, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 7, next: 4 }, { value: 8, next: null }], listB: [{ value: 4, next: 1 }, { value: 5, next: 2 }, { value: 6, next: 3 }], pointerA: null, pointerB: null, phase: '3', currentLine: 17, description: '🎯 Algorithm complete! No intersection', action: 'done', vars: { result: 'No intersection' } },

      // ALTERNATIVE INTERSECTION CASE (for demonstration)
      { step: 19, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 1, description: '🔄 Alternative: Lists with intersection', action: 'reset', vars: { example: 'intersection' } },
      { step: 20, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 0, pointerB: 0, phase: '1', currentLine: 2, description: '📊 Length A: 4, Length B: 2, Diff: 2', action: 'calculate', vars: { lengthA: '4', lengthB: '2', diff: '2' } },
      { step: 21, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 2, pointerB: 0, phase: '2', currentLine: 3, description: '➡️ Advance A by 2: 1 → 3', action: 'advance', vars: { pointerA: '3', pointerB: '5' } },
      { step: 22, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 2, pointerB: 0, phase: '3', currentLine: 4, description: '🔍 Compare: 3 ≠ 5 (different)', action: 'compare', vars: { nodeA: '3', nodeB: '5' } },
      { step: 23, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 3, pointerB: 1, phase: '3', currentLine: 5, description: '➡️ Move both: A→4, B→6', action: 'move', vars: { pointerA: '4', pointerB: '6' } },
      { step: 24, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: 3, pointerB: 1, phase: '3', currentLine: 6, description: '🔍 Compare: 4 ≠ 6 (different)', action: 'compare', vars: { nodeA: '4', nodeB: '6' } },
      { step: 25, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: null, pointerB: null, phase: '3', currentLine: 7, description: '➡️ Move both: A→null, B→null', action: 'move', vars: { pointerA: 'null', pointerB: 'null' } },
      { step: 26, listA: [{ value: 1, next: 1 }, { value: 2, next: 2 }, { value: 3, next: 3 }, { value: 4, next: null }], listB: [{ value: 5, next: 1 }, { value: 6, next: 2 }], pointerA: null, pointerB: null, phase: '3', currentLine: 8, description: '✅ No intersection found', action: 'result', vars: { result: 'null' } },
    ];
  };

  const [steps] = useState<Step[]>(generateIntersectionSteps());

  useEffect(() => {
    const stepData = steps[currentStep];
    if (stepData) {
      setPointerA(stepData.pointerA !== undefined ? stepData.pointerA : 0);
      setPointerB(stepData.pointerB !== undefined ? stepData.pointerB : 0);
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

  const renderNode = (node: Node, index: number, list: 'A' | 'B', step: Step) => {
    const isPointerA = list === 'A' && step.pointerA !== null && step.pointerA === index;
    const isPointerB = list === 'B' && step.pointerB !== null && step.pointerB === index;
    const isIntersection = step.intersection === index;

    let nodeColor = 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600';
    
    if (isPointerA && isPointerB) {
      nodeColor = 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-green-400 dark:border-green-600 shadow-lg shadow-green-500/20';
    } else if (isPointerA) {
      nodeColor = 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/30 border-blue-400 dark:border-blue-600 shadow-lg shadow-blue-500/20';
    } else if (isPointerB) {
      nodeColor = 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/30 border-purple-400 dark:border-purple-600 shadow-lg shadow-purple-500/20';
    } else if (isIntersection) {
      nodeColor = 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-900/30 border-red-400 dark:border-red-600 shadow-lg shadow-red-500/20';
    }

    return (
      <div key={`${list}-${index}`} className="relative">
        <div className={`relative w-16 h-16 rounded-lg border-2 flex flex-col items-center justify-center font-bold transition-all duration-500 hover:scale-105 shadow-lg ${nodeColor}`}>
          <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
            {node.value}
          </div>
          <div className="text-xs opacity-75 text-slate-600 dark:text-slate-400">
            {list}{index}
          </div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-400 dark:border-slate-600 flex items-center justify-center">
            <ArrowRight className="w-2 h-2 text-slate-600 dark:text-slate-400" />
          </div>
        </div>
        
        {/* Pointer Indicators */}
        {isPointerA && isPointerB && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse">
            <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-green-500"></div>
            <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg border-2 border-green-600">
              <span className="text-xs font-bold uppercase tracking-wider">MEET</span>
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 font-medium">Both</div>
          </div>
        )}
        {isPointerA && !isPointerB && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-blue-500"></div>
            <div className="px-2 py-1 bg-blue-500 text-white rounded-full shadow-lg border-2 border-blue-600">
              <span className="text-xs font-bold uppercase tracking-wider">A</span>
            </div>
          </div>
        )}
        {isPointerB && !isPointerA && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-purple-500"></div>
            <div className="px-2 py-1 bg-purple-500 text-white rounded-full shadow-lg border-2 border-purple-600">
              <span className="text-xs font-bold uppercase tracking-wider">B</span>
            </div>
          </div>
        )}
        {isIntersection && (
          <div className="absolute -top-6 right-0 flex flex-col items-center gap-1 animate-pulse">
            <div className="px-2 py-1 bg-red-500 text-white rounded-full shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">✓</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderArrow = (fromIndex: number, toIndex: number | null, list: 'A' | 'B') => {
    if (toIndex === null) {
      return (
        <div className="flex items-center">
          <div className="relative">
            <ArrowRight className="w-6 h-6 text-slate-400 transition-all duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 dark:text-slate-400">
              NULL
            </div>
          </div>
        </div>
      );
    }

    const step = currentStepData;
    const isHighlighted = (list === 'A' && step.pointerA !== null && step.pointerA === fromIndex) || (list === 'B' && step.pointerB !== null && step.pointerB === fromIndex);
    
    return (
      <div className={`flex items-center transition-all duration-500 ${isHighlighted ? 'scale-125' : 'scale-100'}`}>
        <div className="relative">
          <ArrowRight className={`w-6 h-6 transition-all duration-300 ${isHighlighted ? 'text-blue-500 drop-shadow-lg' : 'text-slate-400'}`} />
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
      
      // Format pointerA and pointerB as object structures
      if (key === 'pointerA' || key === 'pointerB') {
        if (value === 'null') return `${key} = null`;
        
        // Get the actual node value and next pointer
        const nodeIndex = parseInt(String(value));
        if (!isNaN(nodeIndex)) {
          const list = key === 'pointerA' ? stepData.listA : stepData.listB;
          if (list && list[nodeIndex]) {
            const node = list[nodeIndex];
            const nextValue = node.next !== null ? node.next : 'null';
            return `${key} = { value: ${node.value}, next: ${nextValue} }`;
          }
        }
        return `${key}: ${value}`;
      }
      
      // Format other variables
      if (key === 'lengthA' || key === 'lengthB' || key === 'diff' || key === 'lenA' || key === 'lenB') {
        return `${key}: ${value}`;
      }
      
      if (key === 'nodeA' || key === 'nodeB') {
        return `${key}: ${value}`;
      }
      
      if (key === 'result') {
        return `result: ${value}`;
      }
      
      if (key === 'phase') {
        return `phase: ${value}`;
      }
      
      return `${key}: ${value}`;
    };

    return [
      { 
        line: 1, 
        code: `function getIntersectionNode(headA, headB) {`, 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: `${getVarValue('phase')}`
      },
      { 
        line: 2, 
        code: `  if (!headA || !headB) return null;`, 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: `${getVarValue('lengthA')}, ${getVarValue('lengthB')}`
      },
      { 
        line: 3, 
        code: `  let lenA = getLength(headA);`, 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: `lenA: ${getVarValue('lengthA')}`
      },
      { 
        line: 4, 
        code: `  let lenB = getLength(headB);`, 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: `lenB: ${getVarValue('lengthB')}`
      },
      { 
        line: 5, 
        code: `  let diff = Math.abs(lenA - lenB);`, 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: `diff: ${getVarValue('diff')}`
      },
      { 
        line: 6, 
        code: `  `, 
        active: stepData.currentLine === 6, 
        indent: 0,
        values: `${getVarValue('phase')}`
      },
      { 
        line: 7, 
        code: `  // Advance the longer list`, 
        active: stepData.currentLine === 7, 
        indent: 0,
        values: `${getVarValue('phase')}`
      },
      { 
        line: 8, 
        code: `  if (lenA > lenB) {`, 
        active: stepData.currentLine === 8, 
        indent: 1,
        values: `lenA: ${getVarValue('lengthA')}, lenB: ${getVarValue('lengthB')}`
      },
      { 
        line: 9, 
        code: `    for (let i = 0; i < diff; i++) headA = headA.next;`, 
        active: stepData.currentLine === 9, 
        indent: 2,
        values: `${getVarValue('pointerA')}`
      },
      { 
        line: 10, 
        code: `  } else {`, 
        active: stepData.currentLine === 10, 
        indent: 1,
        values: ''
      },
      { 
        line: 11, 
        code: `    for (let i = 0; i < diff; i++) headB = headB.next;`, 
        active: stepData.currentLine === 11, 
        indent: 2,
        values: `${getVarValue('pointerB')}`
      },
      { 
        line: 10, 
        code: `  } else {`, 
        active: stepData.currentLine === 10, 
        indent: 1,
        values: `${getVarValue('lengthA')}, ${getVarValue('lengthB')}`
      },
      { 
        line: 12, 
        code: `  }`, 
        active: stepData.currentLine === 12, 
        indent: 1,
        values: `${getVarValue('pointerA')}, ${getVarValue('pointerB')}`
      },
      { 
        line: 13, 
        code: `  `, 
        active: stepData.currentLine === 13, 
        indent: 0,
        values: `${getVarValue('phase')}`
      },
      { 
        line: 14, 
        code: `  // Move both pointers together`, 
        active: stepData.currentLine === 14, 
        indent: 0,
        values: `${getVarValue('phase')}`
      },
      { 
        line: 15, 
        code: `  while (headA && headB) {`, 
        active: stepData.currentLine === 15, 
        indent: 1,
        values: `${getVarValue('pointerA')}, ${getVarValue('pointerB')}`
      },
      { 
        line: 16, 
        code: `    if (headA === headB) return headA;`, 
        active: stepData.currentLine === 16, 
        indent: 2,
        values: `${getVarValue('pointerA')}, ${getVarValue('pointerB')}`
      },
      { 
        line: 17, 
        code: `    headA = headA.next;`, 
        active: stepData.currentLine === 17, 
        indent: 2,
        values: `${getVarValue('pointerA')}`
      },
      { 
        line: 18, 
        code: `    headB = headB.next;`, 
        active: stepData.currentLine === 18, 
        indent: 2,
        values: `${getVarValue('pointerB')}`
      },
      { 
        line: 19, 
        code: `  }`, 
        active: stepData.currentLine === 19, 
        indent: 1,
        values: `${getVarValue('pointerA')}, ${getVarValue('pointerB')}`
      },
      { 
        line: 20, 
        code: `  `, 
        active: stepData.currentLine === 20, 
        indent: 0,
        values: `${getVarValue('result')}`
      },
      { 
        line: 21, 
        code: `  return null; // No intersection`, 
        active: stepData.currentLine === 21, 
        indent: 1,
        values: `${getVarValue('result')}`
      },
      { 
        line: 22, 
        code: `}`, 
        active: stepData.currentLine === 22, 
        indent: 0,
        values: ''
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setPointerA(step.pointerA !== undefined ? step.pointerA : 0);
    setPointerB(step.pointerB !== undefined ? step.pointerB : 0);
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
      case 'calculate': return '📊 Calculating';
      case 'analyze': return '🔍 Analyzing';
      case 'advance': return '➡️ Advancing';
      case 'traverse': return '🔄 Traversing';
      case 'compare': return '🔍 Comparing';
      case 'move': return '➡️ Moving';
      case 'result': return '🎯 Result';
      case 'done': return '🏆 Complete';
      case 'reset': return '🔄 Reset';
      default: return '📋 Processing';
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="DSA · Linked Lists · Advanced Techniques"
        title="Intersection of Two Linked Lists"
        description="Learn how to find the intersection point of two linked lists using the two-pointer technique with optimal time and space complexity"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(m+n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Two Pointers', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Link2 className="w-5 h-5" />
              What is a Linked List Intersection?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Two linked lists intersect when they share the <strong>same node reference</strong>. After the intersection point, both lists have identical nodes in the same order.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-sm">
                    List A: 1→2→3→4→5<br/>
                    List B: 6→7→3→4→5
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Intersection at node with value 3
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-sm text-green-900 dark:text-green-100">
                    Node with value: 3
                  </div>
                  <div className="text-xs text-green-800 dark:text-green-200 mt-1">
                    Reference to intersection node
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
                    <span className="font-semibold text-green-700 dark:text-green-300">Intersection Example</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Intersect ✓</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    A: 1→2→3→4→5<br/>
                    B: 6→7→3→4→5 (intersection at 3)
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Algorithm finds node 3 as intersection
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
                    <span className="font-semibold text-red-700 dark:text-red-300">No Intersection Case</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">No Intersection ✗</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    A: 1→2→3→4→5<br/>
                    B: 6→7→8→9→10
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                    Both lists end separately, no common nodes
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
                  <div className="font-semibold mb-2">Calculate Lengths</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Traverse both lists to find their lengths:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      lenA = getLength(headA)<br/>
                      lenB = getLength(headB)
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      This helps us align the pointers properly
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Advance Longer List</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Move the longer list forward by the difference:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      diff = Math.abs(lenA - lenB)<br/>
                      if (lenA {'>'} lenB) advance headA<br/>
                      else advance headB
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      Now both pointers have same distance to end
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Find Intersection</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Move both pointers together and compare:</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                      while (headA && headB) {`{`}<br/>
                      &nbsp;&nbsp;if (headA === headB) return headA<br/>
                      &nbsp;&nbsp;headA = headA.next<br/>
                      &nbsp;&nbsp;headB = headB.next<br/>
                      {`}`}
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                      First matching node is the intersection!
                    </div>
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
                    <div className="font-semibold text-blue-900 dark:text-blue-100">POINTER A</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Traverses List A</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Blue pointer with arrow</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 border-2 border-purple-400 rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-purple-500 -mt-1"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-900 dark:text-purple-100">POINTER B</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Traverses List B</div>
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
                    <div className="font-semibold text-red-900 dark:text-red-100">INTERSECTION</div>
                    <div className="text-xs text-red-700 dark:text-red-300">Found intersection node</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Red indicator on node</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <div className="text-xs text-indigo-700 dark:text-indigo-300 font-medium mb-1">💡 Visual Tip:</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Watch how the pointers align and move together. The algorithm ensures both pointers travel the same distance to find the intersection efficiently.
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
                <span>Two-phase approach: calculate lengths → align pointers → find intersection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Time complexity: O(m+n) where m and n are lengths of the lists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Space complexity: O(1) - no extra space needed</span>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Interactive Algorithm Visualization
          </CardTitle>
          <CardDescription>Step through the intersection algorithm with detailed explanations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
    
    {/* Controls - Line 1 */}
    <div className="flex items-center justify-center gap-3">
      <Button
        onClick={handlePlayPause}
        disabled={currentStep >= steps.length - 1}
        className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
      >
        {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
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
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="speed"
          value="slow"
          checked={animationSpeed === 'slow'}
          onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
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
          onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
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
          onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
          disabled={isAnimating}
          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
      </label>
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
      
      <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
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
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">intersection-algorithm.js</span>
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
                {lineData.active && lineData.values && (
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

          {/* Visual Representation (Linked Lists) */}
    {currentStep >= 0 && (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Visual Representation:</p>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-slate-600 dark:text-slate-400">Pointer A: {pointerA !== null ? `Node ${pointerA + 1}` : 'null'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-slate-600 dark:text-slate-400">Pointer B: {pointerB !== null ? `Node ${pointerB + 1}` : 'null'}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="space-y-8">
            {/* List A */}
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <ArrowDownRight className="w-5 h-5" />
                List A
              </h4>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {currentStepData.listA.map((node, idx) => (
                  <div key={`A-${idx}`} className="flex items-center gap-2">
                    {renderNode(node, idx, 'A', currentStepData)}
                    {renderArrow(idx, node.next, 'A')}
                  </div>
                ))}
              </div>
            </div>

            {/* List B */}
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                List B
              </h4>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {currentStepData.listB.map((node, idx) => (
                  <div key={`B-${idx}`} className="flex items-center gap-2">
                    {renderNode(node, idx, 'B', currentStepData)}
                    {renderArrow(idx, node.next, 'B')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Time Complexity</h4>
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <p className="font-mono text-green-900 dark:text-green-100">O(m + n)</p>
                <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                  We traverse each list once to calculate lengths, then traverse both lists together until intersection.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Space Complexity</h4>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <p className="font-mono text-purple-900 dark:text-purple-100">O(1)</p>
                <p className="text-sm text-purple-800 dark:text-purple-200 mt-1">
                  Only uses two pointers regardless of list sizes - no extra space needed.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  
  // Calculate lengths of both lists
  let lenA = getLength(headA);
  let lenB = getLength(headB);
  
  // Calculate the difference
  let diff = Math.abs(lenA - lenB);
  
  // Advance the longer list
  if (lenA > lenB) {
    for (let i = 0; i < diff; i++) {
      headA = headA.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      headB = headB.next;
    }
  }
  
  // Move both pointers together
  while (headA && headB) {
    if (headA === headB) {
      return headA; // Found intersection
    }
    headA = headA.next;
    headB = headB.next;
  }
  
  return null; // No intersection
}

function getLength(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
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
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <div>
                  <div className="font-semibold">Length Alignment Strategy</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    By calculating lengths and advancing the longer list, both pointers travel the same distance to the end.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <div>
                  <div className="font-semibold">Reference Comparison</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    We compare node references, not values, to find the exact intersection point.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <div>
                  <div className="font-semibold">Optimal Space Usage</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Achieves O(1) space complexity by using only two pointers, no hash tables or extra data structures.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                <div>
                  <div className="font-semibold">Universal Solution</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Works for any linked list structure, including cycles and different lengths.
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

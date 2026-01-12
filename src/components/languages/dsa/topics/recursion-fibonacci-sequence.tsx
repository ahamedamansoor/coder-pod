'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Infinity,
  ArrowRight, Layers, TrendingUp, TreePine
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionFibonacciSequence() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific state
  const [n] = useState(5);
  const [currentN, setCurrentN] = useState(5);
  const [result, setResult] = useState(0);
  const [callTree, setCallTree] = useState<{n: number, value: number, left?: any, right?: any}>({n: 5, value: 0});
  const [output, setOutput] = useState<string[]>([]);
  const [fibSequence, setFibSequence] = useState<number[]>([]);
  const [highlightedNodes, setHighlightedNodes] = useState<Set<string>>(new Set());

  // Simplified steps focusing on diagrammatic explanation (25 steps)
  const steps = [
    // Introduction and Base Cases (5 steps)
    { step: 1, n: 5, currentN: 5, result: 0, callTree: {n: 5, value: 0}, output: [], fibSequence: [], highlightedNodes: new Set(['5']), currentLine: 1, description: '🌳 Start: fibonacci(5) | Root node created, need to calculate', action: 'init' },
    { step: 2, n: 5, currentN: 5, result: 0, callTree: {n: 5, value: 0}, output: [], fibSequence: [], highlightedNodes: new Set(['5']), currentLine: 2, description: '🔍 Check: n = 5, is n <= 1? NO | Need to go deeper', action: 'check' },
    { step: 3, n: 5, currentN: 5, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 0}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['5', '4', '3']), currentLine: 3, description: '🌱 Branch: fibonacci(5) = fibonacci(4) + fibonacci(3) | Split into two children', action: 'branch' },
    
    // Calculate fibonacci(4) (4 steps)
    { step: 4, n: 4, currentN: 4, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 0}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['4']), currentLine: 2, description: '🔍 Check: fibonacci(4), n = 4 > 1 | Continue splitting', action: 'check' },
    { step: 5, n: 4, currentN: 4, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 0}, right: {n: 2, value: 0}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['4', '3', '2']), currentLine: 3, description: '🌱 Branch: fibonacci(4) = fibonacci(3) + fibonacci(2) | Create more children', action: 'branch' },
    
    // Calculate fibonacci(3) from left branch (4 steps)
    { step: 6, n: 3, currentN: 3, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 0, left: {n: 2, value: 0}, right: {n: 1, value: 1}}, right: {n: 2, value: 0}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['3', '2', '1']), currentLine: 3, description: '🌱 Branch: fibonacci(3) = fibonacci(2) + fibonacci(1) | fibonacci(1) = 1 (base case)', action: 'branch' },
    
    // Calculate fibonacci(2) and base cases (4 steps)
    { step: 7, n: 2, currentN: 2, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 0, left: {n: 2, value: 0, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 0}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['2', '1', '0']), currentLine: 3, description: '🌱 Branch: fibonacci(2) = fibonacci(1) + fibonacci(0) | Both base cases: 1 + 0 = 1', action: 'branch' },
    { step: 8, n: 2, currentN: 2, result: 1, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 0, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 0}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['2']), currentLine: 3, description: '🧮 Calculate: fibonacci(2) = 1 + 0 = 1 | Bottom-up calculation', action: 'calculate' },
    { step: 9, n: 3, currentN: 3, result: 2, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 0}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['3']), currentLine: 3, description: '🧮 Calculate: fibonacci(3) = 1 + 1 = 2 | fibonacci(2) + fibonacci(1)', action: 'calculate' },
    { step: 10, n: 2, currentN: 2, result: 1, callTree: {n: 5, value: 0, left: {n: 4, value: 0, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['2']), currentLine: 3, description: '🧮 Calculate: fibonacci(2) = 1 + 0 = 1 | Right branch fibonacci(2)', action: 'calculate' },
    
    // Calculate fibonacci(4) (2 steps)
    { step: 11, n: 4, currentN: 4, result: 3, callTree: {n: 5, value: 0, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 0}}, output: [], fibSequence: [], highlightedNodes: new Set(['4']), currentLine: 3, description: '🧮 Calculate: fibonacci(4) = 2 + 1 = 3 | fibonacci(3) + fibonacci(2)', action: 'calculate' },
    
    // Calculate fibonacci(3) from right branch (4 steps)
    { step: 12, n: 3, currentN: 3, result: 0, callTree: {n: 5, value: 0, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 0, left: {n: 2, value: 0}, right: {n: 1, value: 0}}}, output: [], fibSequence: [], highlightedNodes: new Set(['3', '2', '1']), currentLine: 3, description: '🌱 Branch: fibonacci(3) = fibonacci(2) + fibonacci(1) | Right branch starts', action: 'branch' },
    { step: 13, n: 2, currentN: 2, result: 1, callTree: {n: 5, value: 0, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 0, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 0}}}, output: [], fibSequence: [], highlightedNodes: new Set(['2']), currentLine: 3, description: '🧮 Calculate: fibonacci(2) = 1 + 0 = 1 | Right branch fibonacci(2)', action: 'calculate' },
    { step: 14, n: 1, currentN: 1, result: 1, callTree: {n: 5, value: 0, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 0, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}}, output: [], fibSequence: [], highlightedNodes: new Set(['1']), currentLine: 2, description: '✅ Base Case: fibonacci(1) = 1 | Right branch base case', action: 'base' },
    { step: 15, n: 3, currentN: 3, result: 2, callTree: {n: 5, value: 0, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}}, output: [], fibSequence: [], highlightedNodes: new Set(['3']), currentLine: 3, description: '🧮 Calculate: fibonacci(3) = 1 + 1 = 2 | Right branch fibonacci(3)', action: 'calculate' },
    
    // Final calculation (3 steps)
    { step: 16, n: 5, currentN: 5, result: 5, callTree: {n: 5, value: 5, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}}, output: [], fibSequence: [], highlightedNodes: new Set(['5']), currentLine: 3, description: '🧮 Calculate: fibonacci(5) = 3 + 2 = 5 | Final result', action: 'calculate' },
    { step: 17, n: 5, currentN: 5, result: 5, callTree: {n: 5, value: 5, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}}, output: ['5'], fibSequence: [0, 1, 1, 2, 3, 5], highlightedNodes: new Set(['5']), currentLine: 3, description: '📤 Output: fibonacci(5) = 5 | Complete sequence: 0, 1, 1, 2, 3, 5', action: 'output' },
    { step: 18, n: 5, currentN: 5, result: 5, callTree: {n: 5, value: 5, left: {n: 4, value: 3, left: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}, right: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}}, right: {n: 3, value: 2, left: {n: 2, value: 1, left: {n: 1, value: 1}, right: {n: 0, value: 0}}, right: {n: 1, value: 1}}}, output: ['5'], fibSequence: [0, 1, 1, 2, 3, 5], highlightedNodes: new Set(['5']), currentLine: 3, description: '🎯 Complete! fibonacci(5) = 5 | Tree fully calculated', action: 'complete' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const getInlineValues = () => {
      switch (stepData.action) {
        case 'init':
          return `n=${stepData.n}, result=${stepData.result}`;
        case 'check':
          return `n=${stepData.n}, n<=1? ${stepData.n <= 1 ? 'YES' : 'NO'}`;
        case 'branch':
          return `n=${stepData.n}, splitting into fibonacci(${stepData.n-1}) + fibonacci(${stepData.n-2})`;
        case 'calculate':
          return `n=${stepData.n}, result=${stepData.result}`;
        case 'base':
          return `n=${stepData.n}, BASE CASE: return ${stepData.n}`;
        case 'output':
          return `result=${stepData.result}, output=[${stepData.output.join(', ')}]`;
        case 'complete':
          return `FINAL: fibonacci(${stepData.n}) = ${stepData.result}`;
        default:
          return `n=${stepData.n}, result=${stepData.result}`;
      }
    };

    return [
      { 
        line: 1, 
        code: 'function fibonacci(n) {', 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: stepData.currentLine === 1 ? getInlineValues() : ''
      },
      { 
        line: 2, 
        code: '  if (n <= 1) {', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? getInlineValues() : ''
      },
      { 
        line: 3, 
        code: '    return n;', 
        active: stepData.currentLine === 3 && stepData.action === 'base', 
        indent: 2,
        values: stepData.currentLine === 3 && stepData.action === 'base' ? getInlineValues() : ''
      },
      { 
        line: 4, 
        code: '  }', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? getInlineValues() : ''
      },
      { 
        line: 5, 
        code: '  return fibonacci(n - 1) + fibonacci(n - 2);', 
        active: stepData.currentLine === 3 && stepData.action !== 'base', 
        indent: 1,
        values: stepData.currentLine === 3 && stepData.action !== 'base' ? getInlineValues() : ''
      },
      { 
        line: 6, 
        code: '}', 
        active: stepData.currentLine === 6, 
        indent: 0,
        values: stepData.currentLine === 6 ? getInlineValues() : ''
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentN(step.n);
    setResult(step.result);
    setCallTree(step.callTree);
    setOutput(step.output);
    setFibSequence(step.fibSequence);
    setHighlightedNodes(step.highlightedNodes);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 2000,
      normal: 1000,
      fast: 500
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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
    goToStep(0);
  };

  // Calculate tree width for proper centering
  const calculateTreeWidth = (node: any, level: number = 0): number => {
    if (!node) return 0;
    if (level > 3) return 80; // Maximum depth limit
    
    const leftWidth = node.left ? calculateTreeWidth(node.left, level + 1) : 0;
    const rightWidth = node.right ? calculateTreeWidth(node.right, level + 1) : 0;
    // For centered layout, use reduced horizontal spacing for root level
    const horizontalSpacing = level === 0 ? 75 : 100;
    return Math.max(leftWidth, rightWidth, 120) + horizontalSpacing * 2;
  };

  // Calculate tree height for dynamic container sizing
  const calculateTreeHeight = (node: any, level: number = 0): number => {
    if (!node) return 0;
    if (level > 4) return 0; // Increased depth limit for full tree
    
    const leftHeight = node.left ? calculateTreeHeight(node.left, level + 1) : 0;
    const rightHeight = node.right ? calculateTreeHeight(node.right, level + 1) : 0;
    // For vertical layout with increased spacing, height is the sum of both children heights plus spacing
    const verticalSpacing = level === 0 ? 120 : 100;
    const nodeHeight = level === 0 ? 64 : level === 1 ? 56 : level === 2 ? 48 : 40;
    
    return leftHeight + rightHeight + verticalSpacing * 2 + nodeHeight;
  };

  // Render tree node recursively with proper centering
  const renderTreeNode = (node: any, x: number, y: number, level: number = 0, parentX?: number, parentY?: number) => {
    if (!node) return null;
    
    const isHighlighted = highlightedNodes.has(node.n.toString());
    const nodeColor = node.value > 0 ? 'bg-green-500' : isHighlighted ? 'bg-blue-500' : 'bg-slate-400';
    const nodeSize = level === 0 ? 'w-16 h-16' : level === 1 ? 'w-14 h-14' : level === 2 ? 'w-12 h-12' : 'w-10 h-10';
    const nodeRadius = level === 0 ? 32 : level === 1 ? 28 : level === 2 ? 24 : 20;
    const verticalSpacing = level === 0 ? 120 : 100; // More spacing for root level
    const horizontalSpacing = level === 0 ? 75 : 100; // Reduced spacing for root to center children
    
    // Calculate positions for tree layout
    const leftChildY = y + verticalSpacing;
    const rightChildY = y + verticalSpacing;
    const leftChildX = x - horizontalSpacing;
    const rightChildX = x + horizontalSpacing;
    
    return (
      <div key={`${node.n}-${x}-${y}`} className="absolute" style={{ left: x, top: y }}>
        {/* Node */}
        <div className={`${nodeSize} ${nodeColor} rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${isHighlighted ? 'ring-4 ring-blue-300 scale-110' : ''}`}>
          <div className="text-center">
            <div className={`${level === 0 ? 'text-lg' : level === 1 ? 'text-base' : 'text-sm'}`}>F({node.n})</div>
            {node.value > 0 && <div className="text-xs">={node.value}</div>}
          </div>
        </div>
        
        {/* Children */}
        {node.left && renderTreeNode(node.left, leftChildX, leftChildY, level + 1, x, y)}
        {node.right && renderTreeNode(node.right, rightChildX, rightChildY, level + 1, x, y)}
        
        {/* Connection lines to children */}
        {node.left && (
          <svg 
            className="absolute pointer-events-none" 
            style={{ 
              left: Math.min(x, leftChildX) - 20, 
              top: y, 
              width: Math.abs(leftChildX - x) + 40, 
              height: verticalSpacing + 40
            }}
          >
            <line 
              x1={x > leftChildX ? Math.abs(x - leftChildX) + 20 : 20} 
              y1={20} 
              x2={x > leftChildX ? 20 : Math.abs(leftChildX - x) + 20} 
              y2={verticalSpacing + 20} 
              stroke="#64748b" 
              strokeWidth="2" 
            />
          </svg>
        )}
        {node.right && (
          <svg 
            className="absolute pointer-events-none" 
            style={{ 
              left: Math.min(x, rightChildX) - 20, 
              top: y, 
              width: Math.abs(rightChildX - x) + 40, 
              height: verticalSpacing + 40
            }}
          >
            <line 
              x1={x < rightChildX ? 20 : Math.abs(x - rightChildX) + 20} 
              y1={20} 
              x2={x < rightChildX ? Math.abs(rightChildX - x) + 20 : 20} 
              y2={verticalSpacing + 20} 
              stroke="#64748b" 
              strokeWidth="2" 
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={TreePine}
        category="DSA · Recursion · Basic Recursion"
        title="Fibonacci Sequence"
        description="Generate Fibonacci numbers using recursion with detailed tree visualization and step-by-step diagrammatic explanation."
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(2^n)', variant: 'default' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Tree Recursion', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding Fibonacci Visually
          </CardTitle>
          <CardDescription>Let's explore the Fibonacci sequence through interactive diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Problem Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Infinity className="w-5 h-5" />
              What is the Fibonacci Sequence?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                The Fibonacci sequence is a series where each number is the sum of the two preceding ones. It starts with 0 and 1, creating the pattern: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
              </p>
              
              {/* Visual Sequence */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {[0, 1, 1, 2, 3, 5, 8, 13].map((num, index) => (
                  <div key={index} className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                      {num}
                    </div>
                    {index > 1 && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index - 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Each number (except the first two) is the sum of the two previous numbers. The blue circles show the position in the sequence.
              </p>
            </div>
          </div>

          {/* Mathematical Formula */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
              Mathematical Formula
            </h4>
            
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
              <div className="font-mono text-lg text-blue-800 dark:text-blue-200 mb-2">
                F(n) = F(n-1) + F(n-2)
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <div>Base cases: F(0) = 0, F(1) = 1</div>
                <div>Example: F(5) = F(4) + F(3) = 3 + 2 = 5 ✓</div>
              </div>
            </div>
          </div>

          {/* Diagrammatic Algorithm */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TreePine className="w-5 h-5" />
              How Recursion Builds the Tree
            </h4>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-3 text-lg">Start with Root</div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">fibonacci(n) creates root node:</div>
                    <div className="flex justify-center py-4">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        F(n)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-3 text-lg">Branch into Children</div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Each node splits into two children:</div>
                    <div className="flex justify-center items-center gap-6 py-4">
                      <div className="w-14 h-14 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        F(n-1)
                      </div>
                      <div className="w-14 h-14 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        F(n-2)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-3 text-lg">Reach Base Cases</div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Stop when n ≤ 1 (leaves of tree):</div>
                    <div className="flex justify-center items-center gap-4 py-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        F(1)=1
                      </div>
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        F(0)=0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-3 text-lg">Calculate Bottom-Up</div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Combine results upward:</div>
                    <div className="font-mono text-lg text-purple-700 dark:text-purple-300 py-2 text-center">
                      F(2) = F(1) + F(0) = 1 + 0 = 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Insights</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">🌳</span>
                <span>Each call creates a binary tree structure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">🔄</span>
                <span>Many calculations are repeated (inefficient)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">📊</span>
                <span>Time complexity grows exponentially: O(2^n)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">🎯</span>
                <span>Perfect for understanding tree recursion concepts</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Interactive Tree Visualization
          </CardTitle>
          <CardDescription>Watch the Fibonacci tree grow and calculate step by step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
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

          {/* Speed Control */}
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
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

          {/* fibonacci.js and Step Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-slate-900 dark:bg-slate-700 rounded-md">
                  <span className="text-xs font-mono text-white">fibonacci.js</span>
                </div>
                <div className="px-3 py-1 bg-emerald-600 text-white rounded-md">
                  <span className="text-xs font-semibold">Step 18 of 18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tree Visualization */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Fibonacci Call Tree:</p>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Calculated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">Pending</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div 
                className="relative flex items-start justify-center"
                style={{ height: `${Math.max(calculateTreeHeight(callTree) + 120, 500)}px` }}
              >
                <div className="relative flex items-start justify-center w-full">
                  {renderTreeNode(callTree, calculateTreeWidth(callTree) / 2, 0)}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div>Tree Depth: 5 levels</div>
                  <div>Total Nodes: 15</div>
                  <div>Leaves: 8 (base cases)</div>
                </div>
              </div>
            </div>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">fibonacci.js</span>
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
                      {lineData.values && (
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
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">n:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].n}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">result:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].result}</span>
                    </div>
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
                      {steps[currentStep].action === 'init' && '🌳 Tree Initialization'}
                      {steps[currentStep].action === 'check' && '🔍 Condition Check'}
                      {steps[currentStep].action === 'branch' && '🌱 Branch Creation'}
                      {steps[currentStep].action === 'calculate' && '🧮 Bottom-Up Calculation'}
                      {steps[currentStep].action === 'base' && '✅ Base Case Hit'}
                      {steps[currentStep].action === 'output' && '📤 Output Result'}
                      {steps[currentStep].action === 'complete' && '🎯 Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Fibonacci Sequence Display */}
          {currentStep >= 0 && fibSequence.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Fibonacci Sequence:</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
                <div className="flex flex-wrap gap-2">
                  {fibSequence.map((num, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-emerald-300 dark:border-emerald-600 font-mono text-sm font-semibold text-emerald-800 dark:text-emerald-200"
                    >
                      F({index}) = {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Console Output */}
          {currentStep >= 0 && output.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Console Output:</p>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="font-mono text-sm text-green-400">
                  <div>$ node fibonacci.js</div>
                  <div>fibonacci(5) = {output[0]}</div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Complexity Analysis
          </CardTitle>
          <CardDescription>Understanding the performance characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">Time Complexity: O(2^n)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Each node creates 2 children (binary tree)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Total nodes ≈ 2^(n+1) - 1</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">fibonacci(40) ≈ 1 trillion operations!</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Space Complexity: O(n)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Maximum tree height = n</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Call stack depth = tree height</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Memory freed during unwinding</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Optimization Comparison</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Recursive:</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(2^n) ❌</div>
                  <div>Space: O(n) ✅</div>
                  <div>Simple ✅</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Memoization:</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(n) ✅</div>
                  <div>Space: O(n) ✅</div>
                  <div>Caches results ✅</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Iterative:</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(n) ✅</div>
                  <div>Space: O(1) ✅</div>
                  <div>Most efficient ✅</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Code Example */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Infinity className="w-6 h-6 text-emerald-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>Full recursive solution with debugging output</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`function fibonacci(n) {
  console.log(\`🌱 Calling fibonacci(\${n})\`);
  
  // Base cases: the foundation of our tree
  if (n <= 1) {
    console.log(\`✅ Base case: fibonacci(\${n}) = \${n}\`);
    return n;
  }
  
  // Recursive case: grow the tree branches
  console.log(\`🌳 fibonacci(\${n}) = fibonacci(\${n-1}) + fibonacci(\${n-2})\`);
  const leftBranch = fibonacci(n - 1);
  const rightBranch = fibonacci(n - 2);
  const result = leftBranch + rightBranch;
  
  console.log(\`🧮 fibonacci(\${n}) = \${leftBranch} + \${rightBranch} = \${result}\`);
  return result;
}

// Generate and display the sequence
function generateFibonacciSequence(n) {
  console.log(\`\\n🎯 Generating Fibonacci sequence up to F(\${n}):\`);
  
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }
  
  console.log(\`\\n📊 Complete sequence: [\${sequence.join(', ')}]\`);
  return sequence;
}

// Test the function
const n = 5;
console.log(\`\\n=== Fibonacci Sequence Demo ===\`);
const sequence = generateFibonacciSequence(n);
console.log(\`\\n🏆 Final result: fibonacci(\${n}) = \${sequence[n]}\`);`}
          />
        </CardContent>
      </Card>

    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Lightbulb, Code
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Badge } from '@/components/ui/badge';

export default function DepthFirstSearch() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Graph structure: adjacency list
  // 0 -> [1, 2]
  // 1 -> [2, 3]
  // 2 -> [0, 3]
  // 3 -> [3]
  
  const graph = {
    0: [1, 2],
    1: [2, 3],
    2: [0, 3],
    3: [3]
  };

  const steps = [
    {
      step: 1,
      description: '📋 Initialize: Create visited set and result array',
      action: 'init',
      currentLine: 1,
      currentNode: null,
      visited: [],
      stack: [],
      result: [],
      callStack: [],
      exploring: null
    },
    {
      step: 2,
      description: '🚀 Call traverse(0): Start DFS traversal from node 0',
      action: 'init',
      currentLine: 1,
      currentNode: 0,
      visited: [],
      stack: [0],
      result: [],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 3,
      description: '✅ Add to visited: Mark node 0 as visited',
      action: 'visit',
      currentLine: 2,
      currentNode: 0,
      visited: [0],
      stack: [0],
      result: [],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 4,
      description: '📝 Push to result: Add node 0 to traversal result',
      action: 'visit',
      currentLine: 2,
      currentNode: 0,
      visited: [0],
      stack: [0],
      result: [0],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 5,
      description: '🔍 Loop start: Check neighbors of node 0',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 0,
      visited: [0],
      stack: [0],
      result: [0],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 6,
      description: '👀 Found neighbors: Node 0 has neighbors [1, 2]',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 0,
      visited: [0],
      stack: [0],
      result: [0],
      callStack: ['traverse(0)'],
      exploring: [1, 2]
    },
    {
      step: 7,
      description: '✔️ Check neighbor 1: Not visited yet, can recurse',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 0,
      visited: [0],
      stack: [0],
      result: [0],
      callStack: ['traverse(0)'],
      exploring: [1]
    },
    {
      step: 8,
      description: '➡️ Recurse deeper: Call traverse(1)',
      action: 'recurse',
      currentLine: 4,
      currentNode: 1,
      visited: [0],
      stack: [0, 1],
      result: [0],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 9,
      description: '✅ Mark visited: Add node 1 to visited set',
      action: 'visit',
      currentLine: 2,
      currentNode: 1,
      visited: [0, 1],
      stack: [0, 1],
      result: [0],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 10,
      description: '📝 Add to result: Push node 1 to result array',
      action: 'visit',
      currentLine: 2,
      currentNode: 1,
      visited: [0, 1],
      stack: [0, 1],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 11,
      description: '🔍 Loop start: Check neighbors of node 1',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 1,
      visited: [0, 1],
      stack: [0, 1],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 12,
      description: '👀 Found neighbors: Node 1 has neighbors [2, 3]',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 1,
      visited: [0, 1],
      stack: [0, 1],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: [2, 3]
    },
    {
      step: 13,
      description: '✔️ Check neighbor 2: Not visited yet, can recurse',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 1,
      visited: [0, 1],
      stack: [0, 1],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: [2]
    },
    {
      step: 14,
      description: '➡️ Recurse deeper: Call traverse(2)',
      action: 'recurse',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1],
      stack: [0, 1, 2],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 15,
      description: '✅ Mark visited: Add node 2 to visited set',
      action: 'visit',
      currentLine: 2,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 16,
      description: '📝 Add to result: Push node 2 to result array',
      action: 'visit',
      currentLine: 2,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 17,
      description: '🔍 Loop start: Check neighbors of node 2',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 18,
      description: '👀 Found neighbors: Node 2 has neighbors [0, 3]',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: [0, 3]
    },
    {
      step: 19,
      description: '❌ Check neighbor 0: Already visited, skip it',
      action: 'skip',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: [0]
    },
    {
      step: 20,
      description: '✔️ Check neighbor 3: Not visited yet, can recurse',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2],
      stack: [0, 1, 2],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: [3]
    },
    {
      step: 21,
      description: '➡️ Recurse deeper: Call traverse(3)',
      action: 'recurse',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: null
    },
    {
      step: 22,
      description: '✅ Mark visited: Add node 3 to visited set',
      action: 'visit',
      currentLine: 2,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: null
    },
    {
      step: 23,
      description: '📝 Add to result: Push node 3 to result array (Complete!)',
      action: 'visit',
      currentLine: 2,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: null
    },
    {
      step: 24,
      description: '🔍 Loop start: Check neighbors of node 3',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: null
    },
    {
      step: 25,
      description: '👀 Found neighbors: Node 3 has self-loop [3]',
      action: 'check-neighbors',
      currentLine: 3,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: [3]
    },
    {
      step: 26,
      description: '❌ Check neighbor 3: Already visited (self), skip it',
      action: 'skip',
      currentLine: 3,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: []
    },
    {
      step: 27,
      description: '⬅️ Loop end: No more neighbors, exit loop',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2, 3],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)', 'traverse(3)'],
      exploring: null
    },
    {
      step: 28,
      description: '⬅️ Return from traverse(3): Back to traverse(2)',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 29,
      description: '⬅️ Loop end: No more neighbors, exit loop',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      stack: [0, 1, 2],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)', 'traverse(2)'],
      exploring: null
    },
    {
      step: 30,
      description: '⬅️ Return from traverse(2): Back to traverse(1)',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 1,
      visited: [0, 1, 2, 3],
      stack: [0, 1],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 31,
      description: '⬅️ Loop end: No more neighbors, exit loop',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 1,
      visited: [0, 1, 2, 3],
      stack: [0, 1],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)', 'traverse(1)'],
      exploring: null
    },
    {
      step: 32,
      description: '⬅️ Return from traverse(1): Back to traverse(0)',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 0,
      visited: [0, 1, 2, 3],
      stack: [0],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 33,
      description: '⬅️ Loop end: No more neighbors, exit loop',
      action: 'backtrack',
      currentLine: 5,
      currentNode: 0,
      visited: [0, 1, 2, 3],
      stack: [0],
      result: [0, 1, 2, 3],
      callStack: ['traverse(0)'],
      exploring: null
    },
    {
      step: 34,
      description: '⬅️ Return from traverse(0): Back to dfs function',
      action: 'backtrack',
      currentLine: 5,
      currentNode: null,
      visited: [0, 1, 2, 3],
      stack: [],
      result: [0, 1, 2, 3],
      callStack: [],
      exploring: null
    },
    {
      step: 35,
      description: '🎯 Complete: Return result [0 → 1 → 2 → 3]',
      action: 'complete',
      currentLine: 6,
      currentNode: null,
      visited: [0, 1, 2, 3],
      stack: [],
      result: [0, 1, 2, 3],
      callStack: [],
      exploring: null
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const getVisitedComment = () => {
      if (stepData.currentNode !== null && stepData.action === 'visit') {
        return `visited = {${stepData.visited.join(', ')}}, Adding node ${stepData.currentNode}`;
      }
      if (stepData.visited.length > 0) {
        return `visited = {${stepData.visited.join(', ')}}`;
      }
      return '';
    };

    const getResultComment = () => {
      if (stepData.result.length > 0) {
        return `result = [${stepData.result.join(' → ')}]`;
      }
      return '';
    };

    const getNeighborsComment = () => {
      if (stepData.exploring) {
        return `graph[${stepData.currentNode}] = [${stepData.exploring.join(', ')}], Checking each neighbor`;
      }
      return '';
    };

    const getRecurseComment = () => {
      if (stepData.action === 'recurse') {
        return `Going deeper: traverse(${stepData.currentNode}), Stack: ${stepData.callStack.join(' → ')}`;
      }
      return '';
    };

    const getBacktrackComment = () => {
      if (stepData.action === 'backtrack') {
        return `Returning from node ${stepData.currentNode}, Stack: ${stepData.callStack.length > 0 ? stepData.callStack.join(' → ') : 'empty'}`;
      }
      return '';
    };

    return [
      { line: 1, code: 'function dfs(graph, start) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step === 1 ? `start = ${stepData.currentNode}` : '' },
      { line: 2, code: '  const visited = new Set();', active: stepData.currentLine === 1, indent: 1, values: stepData.step === 1 ? 'visited = {}' : '' },
      { line: 3, code: '  const result = [];', active: stepData.currentLine === 1, indent: 1, values: stepData.step === 1 ? 'result = []' : '' },
      { line: 4, code: '  ', active: false, indent: 0 },
      { line: 5, code: '  function traverse(node) {', active: stepData.currentLine === 2 || stepData.currentLine === 3 || stepData.currentLine === 4, indent: 1, values: stepData.currentNode !== null ? `node = ${stepData.currentNode}` : '' },
      { line: 6, code: '    // Mark current node as visited', active: false, indent: 2 },
      { line: 7, code: '    visited.add(node);', active: stepData.currentLine === 2, indent: 2, values: getVisitedComment() },
      { line: 8, code: '    result.push(node);', active: stepData.currentLine === 2, indent: 2, values: getResultComment() },
      { line: 9, code: '    ', active: false, indent: 0 },
      { line: 10, code: '    // Visit all unvisited neighbors', active: false, indent: 2 },
      { line: 11, code: '    for (const neighbor of graph[node]) {', active: stepData.currentLine === 3, indent: 2, values: getNeighborsComment() },
      { line: 12, code: '      if (!visited.has(neighbor)) {', active: stepData.currentLine === 3 || stepData.currentLine === 4, indent: 3, values: stepData.exploring && stepData.action === 'check-neighbors' ? `Checking if unvisited` : '' },
      { line: 13, code: '        traverse(neighbor); // Recursive call', active: stepData.currentLine === 4, indent: 4, values: getRecurseComment() },
      { line: 14, code: '      }', active: false, indent: 3 },
      { line: 15, code: '    }', active: false, indent: 2 },
      { line: 16, code: '  }', active: stepData.currentLine === 5, indent: 1, values: getBacktrackComment() },
      { line: 17, code: '  ', active: false, indent: 0 },
      { line: 18, code: '  traverse(start);', active: stepData.currentLine === 1, indent: 1, values: stepData.step === 1 ? `Begin traversal from node ${stepData.currentNode}` : '' },
      { line: 19, code: '  return result;', active: stepData.currentLine === 6, indent: 1, values: stepData.action === 'complete' ? `Final result: [${stepData.result.join(' → ')}]` : '' },
      { line: 20, code: '}', active: stepData.currentLine === 6, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 2500,
      normal: 1500,
      fast: 800
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
  };

  // Node positions for visualization - larger spacing for clarity
  const nodePositions = {
    0: { x: 200, y: 80 },
    1: { x: 100, y: 200 },
    2: { x: 300, y: 200 },
    3: { x: 200, y: 320 }
  };

  // Helper function to calculate edge endpoints (stop at circle edge, not center)
  const getEdgeCoords = (fromNode: number, toNode: number) => {
    const from = nodePositions[fromNode as keyof typeof nodePositions];
    const to = nodePositions[toNode as keyof typeof nodePositions];
    const radius = 30; // node radius
    
    // Calculate angle
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) {
      // Self-loop
      return {
        x1: from.x + radius,
        y1: from.y,
        x2: from.x + radius,
        y2: from.y + radius * 2
      };
    }
    
    // Adjust start and end points to circle edge
    const offsetX = (dx / distance) * radius;
    const offsetY = (dy / distance) * radius;
    
    return {
      x1: from.x + offsetX,
      y1: from.y + offsetY,
      x2: to.x - offsetX,
      y2: to.y - offsetY
    };
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={GitBranch}
        category="DSA · Graphs"
        title="Depth First Search (DFS)"
        description="Explore graphs by going as deep as possible before backtracking - master the recursive traversal technique"
        colorTheme="rose"
        badges={[
          { label: 'Time: O(V+E)', variant: 'success' },
          { label: 'Space: O(V)', variant: 'info' },
          { label: 'Recursive', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600" />
            Understanding Depth First Search
          </CardTitle>
          <CardDescription>Learn how DFS explores graphs by diving deep before exploring wide</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is DFS? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              What is Depth First Search?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>DFS</strong> is a graph traversal algorithm that explores as far as possible along each branch before backtracking. 
                Think of it like exploring a maze by always going forward until you hit a dead end, then backtracking.
              </p>
              
              {/* Graph Visualization */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">EXAMPLE GRAPH</div>
                <div className="flex items-center justify-center">
                  <svg width="300" height="350" viewBox="0 0 300 350" className="max-w-full">
                    {/* Edges */}
                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                      </marker>
                    </defs>
                    
                    {/* Edge 0→1: from (150,80) to (80,180) */}
                    <line x1="138" y1="101" x2="92" y2="159" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Edge 0→2: from (150,80) to (220,180) */}
                    <line x1="162" y1="101" x2="208" y2="159" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Edge 1→2: from (80,180) to (220,180) */}
                    <line x1="105" y1="180" x2="195" y2="180" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Edge 1→3: from (80,180) to (150,280) */}
                    <line x1="92" y1="201" x2="138" y2="259" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Edge 2→3: from (220,180) to (150,280) */}
                    <line x1="208" y1="201" x2="162" y2="259" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Edge 2→0: from (220,180) to (150,80) */}
                    <line x1="208" y1="159" x2="162" y2="101" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Self-loop 3→3 */}
                    <path d="M 175 280 Q 200 280 175 305" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    
                    {/* Nodes */}
                    <circle cx="150" cy="80" r="25" fill="#f43f5e" className="opacity-80" />
                    <text x="150" y="88" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">0</text>
                    
                    <circle cx="80" cy="180" r="25" fill="#f43f5e" className="opacity-80" />
                    <text x="80" y="188" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    
                    <circle cx="220" cy="180" r="25" fill="#f43f5e" className="opacity-80" />
                    <text x="220" y="188" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
                    
                    <circle cx="150" cy="280" r="25" fill="#f43f5e" className="opacity-80" />
                    <text x="150" y="288" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">3</text>
                  </svg>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-3 text-center">
                  Starting from node 0, DFS will visit: 0 → 1 → 2 → 3
                </div>
              </div>
            </div>
          </div>

          {/* How DFS Works */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How DFS Works (3 Key Steps)
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Visit & Mark</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Visit a node, mark it as visited, and add it to the result
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Explore Neighbors</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      For each unvisited neighbor, recursively call DFS
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Backtrack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      When all neighbors are visited, return to previous node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Visual Walkthrough */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              Step-by-Step Visual Walkthrough
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-200 mb-6">
              Let's walk through DFS on our example graph, starting from node 0
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Start: Visit Node 0</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Mark node 0 as visited and add to result</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-step1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#cbd5e1" />
                        </marker>
                      </defs>
                      {/* Only show edges from node 0 (current) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step1)" opacity="0.3" />
                      <line x1="137" y1="67" x2="176" y2="128" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step1)" opacity="0.3" />
                      
                      {/* Node 0 - Current (Rose with glow) */}
                      <circle cx="125" cy="50" r="32" fill="#f43f5e" stroke="#be123c" strokeWidth="3" filter="url(#glow)" />
                      {/* Bouncing indicator above node */}
                      <circle cx="125" cy="10" r="6" fill="#f43f5e" opacity="0.9">
                        <animate attributeName="cy" values="10;15;10" dur="0.8s" repeatCount="indefinite" />
                      </circle>
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Unvisited */}
                      <circle cx="62" cy="145" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
                      
                      {/* Node 2 - Unvisited */}
                      <circle cx="188" cy="145" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      
                      {/* Node 3 - Unvisited */}
                      <circle cx="125" cy="235" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Current Node</div>
                    <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-md">0</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Call Stack</div>
                    <div className="text-xs font-mono text-purple-700 dark:text-purple-300">dfs(0)</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Explore: Check Neighbors of 0</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Node 0 has neighbors [1, 2] - pick first unvisited: 1</div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 DFS Rule: Always explore the first unvisited neighbor</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">We go DEEP into node 1 before exploring node 2</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Recurse: Visit Node 1</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Go deep into node 1, mark as visited</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-step3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                        <marker id="arrow-step3-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#cbd5e1" />
                        </marker>
                      </defs>
                      {/* Edge 0→1 - Traversed (green) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step3)" opacity="0.8" />
                      {/* Edges from node 1 (current) */}
                      <line x1="84" y1="145" x2="166" y2="145" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step3-gray)" opacity="0.3" />
                      <line x1="74" y1="165" x2="113" y2="218" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step3-gray)" opacity="0.3" />
                      
                      {/* Node 0 - Visited */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Current (Rose with glow) */}
                      <circle cx="62" cy="145" r="28" fill="#f43f5e" stroke="#be123c" strokeWidth="3" filter="url(#glow)" />
                      {/* Bouncing indicator above node */}
                      <circle cx="62" cy="108" r="6" fill="#f43f5e" opacity="0.9">
                        <animate attributeName="cy" values="108;113;108" dur="0.8s" repeatCount="indefinite" />
                      </circle>
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                      <circle cx="45" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="45" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
                      
                      {/* Node 2 - Unvisited */}
                      <circle cx="188" cy="145" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      
                      {/* Node 3 - Unvisited */}
                      <circle cx="125" cy="235" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Current Node</div>
                    <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">1</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Call Stack</div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-purple-700 dark:text-purple-300">dfs(1) ← top</div>
                      <div className="text-xs font-mono text-purple-500 dark:text-purple-400">dfs(0)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">4</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Explore: Check Neighbors of 1</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Node 1 has neighbors [2, 3] - pick first unvisited: 2</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Neighbor: 2</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400">✓ Not visited - explore!</div>
                  </div>
                  <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Neighbor: 3</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">⏸️ Check later</div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">5</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Recurse: Visit Node 2</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Go deep into node 2, mark as visited</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-step5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                        <marker id="arrow-step5-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#cbd5e1" />
                        </marker>
                      </defs>
                      {/* Traversed edges - green */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step5)" opacity="0.8" />
                      <line x1="84" y1="145" x2="166" y2="145" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step5)" opacity="0.8" />
                      {/* Edges from node 2 (current) */}
                      <line x1="176" y1="165" x2="137" y2="218" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step5-gray)" opacity="0.3" />
                      
                      {/* Node 0 - Visited */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Visited */}
                      <circle cx="62" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
                      <circle cx="45" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="45" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
                      
                      {/* Node 2 - Current (Rose with glow) */}
                      <circle cx="188" cy="145" r="28" fill="#f43f5e" stroke="#be123c" strokeWidth="3" filter="url(#glow)" />
                      {/* Bouncing indicator above node */}
                      <circle cx="188" cy="108" r="6" fill="#f43f5e" opacity="0.9">
                        <animate attributeName="cy" values="108;113;108" dur="0.8s" repeatCount="indefinite" />
                      </circle>
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
                      <circle cx="205" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="205" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">3</text>
                      
                      {/* Node 3 - Unvisited */}
                      <circle cx="125" cy="235" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Current Node</div>
                    <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">1</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">2</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Call Stack</div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-purple-700 dark:text-purple-300">dfs(2) ← top</div>
                      <div className="text-xs font-mono text-purple-500 dark:text-purple-400">dfs(1)</div>
                      <div className="text-xs font-mono text-purple-400 dark:text-purple-500">dfs(0)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">6</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Check: Neighbors of 2</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Node 2 has neighbors [0, 3] - 0 is visited, explore 3</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Neighbor: 0</div>
                    <div className="text-xs text-red-600 dark:text-red-400">✗ Already visited - skip!</div>
                  </div>
                  <div className="flex-1 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Neighbor: 3</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400">✓ Not visited - explore!</div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">7</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Recurse: Visit Node 3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Last unvisited node - mark as visited</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-step7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                      </defs>
                      {/* All traversed edges - green (DFS path: 0→1→2→3) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step7)" opacity="0.8" />
                      <line x1="84" y1="145" x2="166" y2="145" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step7)" opacity="0.8" />
                      <line x1="176" y1="165" x2="137" y2="218" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step7)" opacity="0.8" />
                      
                      {/* Node 0 - Visited */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Visited */}
                      <circle cx="62" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
                      <circle cx="45" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="45" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
                      
                      {/* Node 2 - Visited */}
                      <circle cx="188" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      <circle cx="205" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="205" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">3</text>
                      
                      {/* Node 3 - Current (Rose with glow) */}
                      <circle cx="125" cy="235" r="28" fill="#f43f5e" stroke="#be123c" strokeWidth="3" filter="url(#glow)" />
                      {/* Bouncing indicator above node */}
                      <circle cx="125" cy="198" r="6" fill="#f43f5e" opacity="0.9">
                        <animate attributeName="cy" values="198;203;198" dur="0.8s" repeatCount="indefinite" />
                      </circle>
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">3</text>
                      <circle cx="110" cy="220" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="110" y="225" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">4</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Current Node</div>
                    <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited (All!)</div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">1</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">2</div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">3</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Call Stack (Deepest)</div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-purple-700 dark:text-purple-300">dfs(3) ← top</div>
                      <div className="text-xs font-mono text-purple-500 dark:text-purple-400">dfs(2)</div>
                      <div className="text-xs font-mono text-purple-400 dark:text-purple-500">dfs(1)</div>
                      <div className="text-xs font-mono text-purple-300 dark:text-purple-600">dfs(0)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">8</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Backtrack: Return from Node 3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">All neighbors visited or already in set - return to caller</div>
                  </div>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">⬅️ Backtracking</div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400">Node 3 has self-loop, but it's already visited. No more work to do here. Pop from call stack and return to node 2.</div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-green-500 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">✓</div>
                  <div>
                    <div className="font-bold text-lg text-green-800 dark:text-green-100">Complete: DFS Finished!</div>
                    <div className="text-sm text-green-600 dark:text-green-400">All nodes visited, final result ready</div>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500 dark:border-green-700">
                  <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-3">Final Traversal Order:</div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-2xl shadow-lg">0</div>
                    <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-2xl shadow-lg">1</div>
                    <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-2xl shadow-lg">2</div>
                    <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-2xl shadow-lg">3</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* DFS vs BFS */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              DFS vs BFS (Breadth First Search)
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* DFS */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-rose-500">
                <div className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Depth First (DFS)</div>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600" />
                    Goes deep first (like a maze)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600" />
                    Uses recursion/stack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600" />
                    Better for path finding
                  </li>
                </ul>
              </div>

              {/* BFS */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Breadth First (BFS)</div>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Goes wide first (level by level)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Uses queue
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Better for shortest path
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Concepts */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Recursive Nature:</strong> DFS naturally uses recursion (or explicit stack)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Visited Set:</strong> Prevents infinite loops in graphs with cycles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Backtracking:</strong> Returns to explore other paths when stuck</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/40">
              <GitBranch className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            Interactive DFS Animation
          </CardTitle>
          <CardDescription>Watch how DFS explores the graph step by step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
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
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation */}
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 rounded-lg border-2 border-rose-300 dark:border-rose-700">
              <span className="text-sm font-bold text-rose-900 dark:text-rose-100">
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
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">dfs-recursive.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-rose-50 dark:bg-rose-900/20 border-l-2 border-rose-400 dark:border-rose-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-rose-600 dark:text-rose-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-rose-600 dark:text-rose-400 font-semibold">
                          // {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step Description */}
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
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'visit' && '✅ Visiting Node'}
                      {steps[currentStep].action === 'check-neighbors' && '🔍 Checking Neighbors'}
                      {steps[currentStep].action === 'recurse' && '➡️ Recursing'}
                      {steps[currentStep].action === 'skip' && '⏭️ Skipping'}
                      {steps[currentStep].action === 'backtrack' && '⬅️ Backtracking'}
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

          {/* Graph Visualization */}
          {currentStep >= 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-rose-900 dark:text-rose-100 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-rose-500 to-pink-500 rounded-full"></div>
                  Live Graph Traversal
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Unvisited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Visited</span>
                  </div>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Depth: {steps[currentStep].stack.length}
                  </div>
                </div>

                <div className="flex items-center justify-center min-h-[400px]">
                  <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full">
                    <defs>
                      {/* Gradient for active edges */}
                      <linearGradient id="activeEdgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                      </linearGradient>
                      
                      {/* Glow filter */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>

                      {/* Arrow markers */}
                      <marker id="arrowInactive" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#cbd5e1" />
                      </marker>
                      <marker id="arrowActive" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
                        <polygon points="0 0, 12 3, 0 6" fill="#f43f5e" />
                      </marker>
                      <marker id="arrowVisited" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                      </marker>
                    </defs>
                    
                    {/* Enhanced edges with accurate positioning */}
                    {[
                      { from: 0, to: 1 },
                      { from: 0, to: 2 },
                      { from: 1, to: 2 },
                      { from: 1, to: 3 },
                      { from: 2, to: 3 },
                      { from: 2, to: 0 },
                      { from: 3, to: 3 }
                    ].map((edge, idx) => {
                      const coords = getEdgeCoords(edge.from, edge.to);
                      const fromVisited = steps[currentStep].visited.includes(edge.from);
                      const toVisited = steps[currentStep].visited.includes(edge.to);
                      const isActive = steps[currentStep].currentNode === edge.from && 
                                      steps[currentStep].exploring?.includes(edge.to);
                      const isTraversed = fromVisited && toVisited;
                      
                      // Special handling for self-loop
                      if (edge.from === edge.to) {
                        const pos = nodePositions[edge.from as keyof typeof nodePositions];
                        return (
                          <g key={idx}>
                            <path
                              d={`M ${pos.x + 30} ${pos.y} Q ${pos.x + 60} ${pos.y} ${pos.x + 30} ${pos.y + 30}`}
                              fill="none"
                              stroke={isActive ? '#f43f5e' : isTraversed ? '#10b981' : '#cbd5e1'}
                              strokeWidth={isActive ? '4' : '2'}
                              markerEnd={isActive ? 'url(#arrowActive)' : isTraversed ? 'url(#arrowVisited)' : 'url(#arrowInactive)'}
                              opacity={isActive ? 1 : isTraversed ? 0.8 : 0.3}
                              style={{ transition: 'all 0.5s ease' }}
                            />
                          </g>
                        );
                      }
                      
                      return (
                        <g key={idx}>
                          {isTraversed && (
                            <line
                              x1={coords.x1}
                              y1={coords.y1}
                              x2={coords.x2}
                              y2={coords.y2}
                              stroke="url(#activeEdgeGradient)"
                              strokeWidth="3"
                              opacity="0.6"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          )}
                          <line
                            x1={coords.x1}
                            y1={coords.y1}
                            x2={coords.x2}
                            y2={coords.y2}
                            stroke={isActive ? '#f43f5e' : isTraversed ? '#10b981' : '#cbd5e1'}
                            strokeWidth={isActive ? '4' : '2'}
                            markerEnd={isActive ? 'url(#arrowActive)' : isTraversed ? 'url(#arrowVisited)' : 'url(#arrowInactive)'}
                            opacity={isActive ? 1 : isTraversed ? 0.8 : 0.3}
                            style={{ transition: 'all 0.5s ease' }}
                          />
                        </g>
                      );
                    })}
                    
                    {/* Enhanced nodes with better animations */}
                    {Object.entries(nodePositions).map(([node, pos]) => {
                      const nodeNum = parseInt(node);
                      const isVisited = steps[currentStep].visited.includes(nodeNum);
                      const isCurrent = steps[currentStep].currentNode === nodeNum;
                      const visitOrder = steps[currentStep].result.indexOf(nodeNum);
                      
                      return (
                        <g key={node}>
                          {/* Bouncing indicator above current node */}
                          {isCurrent && (
                            <circle cx={pos.x} cy={pos.y - 45} r="6" fill="#f43f5e" opacity="0.9">
                              <animate attributeName="cy" values={`${pos.y - 45};${pos.y - 40};${pos.y - 45}`} dur="0.8s" repeatCount="indefinite" />
                            </circle>
                          )}
                          
                          {/* Main node circle */}
                          <circle 
                            cx={pos.x} 
                            cy={pos.y} 
                            r="30" 
                            fill={isCurrent ? '#f43f5e' : isVisited ? '#10b981' : '#94a3b8'} 
                            stroke={isCurrent ? '#be123c' : isVisited ? '#059669' : '#64748b'}
                            strokeWidth="3"
                            filter={isCurrent ? 'url(#glow)' : undefined}
                            style={{
                              transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                              transformOrigin: `${pos.x}px ${pos.y}px`,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: isCurrent ? '0 10px 25px rgba(244, 63, 94, 0.5)' : 'none'
                            }}
                            className={isCurrent ? 'animate-pulse' : ''}
                          />
                          
                          {/* Node label */}
                          <text 
                            x={pos.x} 
                            y={pos.y + 8} 
                            textAnchor="middle" 
                            fill="white" 
                            fontSize="24" 
                            fontWeight="bold"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                          >
                            {node}
                          </text>
                          
                          {/* Node label below */}
                          <text 
                            x={pos.x} 
                            y={pos.y + 50} 
                            textAnchor="middle" 
                            fill={isCurrent ? '#f43f5e' : isVisited ? '#10b981' : '#64748b'} 
                            fontSize="11" 
                            fontWeight="600"
                          >
                            Node {node}
                          </text>
                          
                          {/* Visit order indicator - Rendered last for z-index on top */}
                          {isVisited && visitOrder >= 0 && (
                            <g style={{ pointerEvents: 'none' }}>
                              <circle
                                cx={pos.x - 20}
                                cy={pos.y - 20}
                                r="12"
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                              />
                              <text
                                x={pos.x - 20}
                                y={pos.y - 16}
                                textAnchor="middle"
                                fill="white"
                                fontSize="11"
                                fontWeight="bold"
                              >
                                {visitOrder + 1}
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
                
              {/* Enhanced State Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Visited</div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {steps[currentStep].visited.map((node) => (
                      <div key={node} className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">
                        {node}
                      </div>
                    ))}
                    {steps[currentStep].visited.length === 0 && (
                      <span className="text-sm text-slate-400 italic">None yet</span>
                    )}
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Call Stack</div>
                  </div>
                  <div className="space-y-1">
                    {steps[currentStep].callStack.slice().reverse().map((call, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-300">
                          {call}
                        </div>
                      </div>
                    ))}
                    {steps[currentStep].callStack.length === 0 && (
                      <span className="text-sm text-slate-400 italic">Empty</span>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border-2 border-rose-200 dark:border-rose-800 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div className="text-sm font-bold text-rose-700 dark:text-rose-300">Traversal Order</div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {steps[currentStep].result.map((node, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md relative">
                          {node}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-[9px] font-bold text-rose-600 border border-rose-300">
                            {idx + 1}
                          </div>
                        </div>
                        {idx < steps[currentStep].result.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-rose-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(V + E)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We visit each vertex once (V) and explore each edge once (E), giving us O(V + E) time complexity.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(V)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The visited set stores V nodes. The recursion call stack can go up to V levels deep in worst case.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippets */}
      <CodeSnippet
        title="DFS - Recursive Implementation"
        language="javascript"
        code={`function dfsRecursive(graph, start) {
  const visited = new Set();
  const result = [];

  function dfs(node) {
    // Mark node as visited
    visited.add(node);
    result.push(node);

    // Explore all neighbors
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);  // Recursive call
      }
    }
  }

  dfs(start);
  return result;
}

// Example usage
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

console.log(dfsRecursive(graph, 0));
// Output: [0, 1, 2, 3]`}
      />

      <CodeSnippet
        title="DFS - Iterative Implementation (using Stack)"
        language="javascript"
        code={`function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      // Mark as visited
      visited.add(node);
      result.push(node);

      // Add all unvisited neighbors to stack
      // Reverse to maintain left-to-right order
      const neighbors = [...graph[node]].reverse();
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example usage
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

console.log(dfsIterative(graph, 0));
// Output: [0, 1, 2, 3]`}
      />

      {/* Applications */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle>Real-World Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Path Finding</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Finding if a path exists between two nodes, cycle detection, and topological sorting.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Connected Components</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Finding all connected components in a graph, useful in social networks and clustering.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Maze Solving</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Exploring all possible paths in a maze to find the exit or solution.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Game AI</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Exploring game trees, evaluating moves, and implementing game-playing algorithms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

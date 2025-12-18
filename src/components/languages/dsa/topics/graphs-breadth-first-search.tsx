'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Layers, Code, Lightbulb
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Badge } from '@/components/ui/badge';

export default function BreadthFirstSearch() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Graph structure: Same as DFS for comparison
  const graph = {
    0: [1, 2],
    1: [2, 3],
    2: [0, 3],
    3: [3]
  };

  const nodePositions = {
    0: { x: 175, y: 70 },
    1: { x: 95, y: 150 },
    2: { x: 255, y: 150 },
    3: { x: 175, y: 230 }
  };

  const steps = [
    {
      step: 1,
      description: '📋 Initialize: Create visited set and result array',
      action: 'init',
      currentLine: 1,
      currentNode: null,
      visited: [],
      queue: [],
      result: [],
      exploring: null
    },
    {
      step: 2,
      description: '📦 Initialize: Create empty queue for BFS',
      action: 'init',
      currentLine: 1,
      currentNode: null,
      visited: [],
      queue: [],
      result: [],
      exploring: null
    },
    {
      step: 3,
      description: '✅ Mark start: Add node 0 to visited set',
      action: 'visit',
      currentLine: 2,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [],
      exploring: null
    },
    {
      step: 4,
      description: '➕ Enqueue: Add node 0 to queue',
      action: 'enqueue',
      currentLine: 2,
      currentNode: 0,
      visited: [0],
      queue: [0],
      result: [],
      exploring: null
    },
    {
      step: 5,
      description: '🔍 Loop check: Is queue empty? NO (queue = [0])',
      action: 'loop-check',
      currentLine: 3,
      currentNode: null,
      visited: [0],
      queue: [0],
      result: [],
      exploring: null
    },
    {
      step: 6,
      description: '➖ Dequeue: Remove node 0 from front of queue',
      action: 'dequeue',
      currentLine: 3,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [],
      exploring: null
    },
    {
      step: 7,
      description: '📝 Add to result: Push node 0 to result array',
      action: 'process',
      currentLine: 3,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [0],
      exploring: null
    },
    {
      step: 8,
      description: '👀 Explore: Check neighbors of node 0',
      action: 'explore',
      currentLine: 4,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [0],
      exploring: null
    },
    {
      step: 9,
      description: '🔎 Found neighbors: Node 0 has neighbors [1, 2]',
      action: 'check-neighbors',
      currentLine: 4,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [0],
      exploring: [1, 2]
    },
    {
      step: 10,
      description: '✔️ Check neighbor 1: Not visited yet',
      action: 'check',
      currentLine: 4,
      currentNode: 0,
      visited: [0],
      queue: [],
      result: [0],
      exploring: [1]
    },
    {
      step: 11,
      description: '✅ Mark visited: Add node 1 to visited set',
      action: 'visit',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1],
      queue: [],
      result: [0],
      exploring: null
    },
    {
      step: 12,
      description: '➕ Enqueue: Add node 1 to end of queue',
      action: 'enqueue',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1],
      queue: [1],
      result: [0],
      exploring: null
    },
    {
      step: 13,
      description: '✔️ Check neighbor 2: Not visited yet',
      action: 'check',
      currentLine: 4,
      currentNode: 0,
      visited: [0, 1],
      queue: [1],
      result: [0],
      exploring: [2]
    },
    {
      step: 14,
      description: '✅ Mark visited: Add node 2 to visited set',
      action: 'visit',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2],
      queue: [1],
      result: [0],
      exploring: null
    },
    {
      step: 15,
      description: '➕ Enqueue: Add node 2 to end of queue',
      action: 'enqueue',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2],
      queue: [1, 2],
      result: [0],
      exploring: null
    },
    {
      step: 16,
      description: '🔍 Loop check: Is queue empty? NO (queue = [1, 2])',
      action: 'loop-check',
      currentLine: 3,
      currentNode: null,
      visited: [0, 1, 2],
      queue: [1, 2],
      result: [0],
      exploring: null
    },
    {
      step: 17,
      description: '➖ Dequeue: Remove node 1 from front of queue',
      action: 'dequeue',
      currentLine: 3,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0],
      exploring: null
    },
    {
      step: 18,
      description: '📝 Add to result: Push node 1 to result array',
      action: 'process',
      currentLine: 3,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0, 1],
      exploring: null
    },
    {
      step: 19,
      description: '👀 Explore: Check neighbors of node 1',
      action: 'explore',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0, 1],
      exploring: null
    },
    {
      step: 20,
      description: '🔎 Found neighbors: Node 1 has neighbors [2, 3]',
      action: 'check-neighbors',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0, 1],
      exploring: [2, 3]
    },
    {
      step: 21,
      description: '❌ Check neighbor 2: Already visited, skip it',
      action: 'skip',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0, 1],
      exploring: [2]
    },
    {
      step: 22,
      description: '✔️ Check neighbor 3: Not visited yet',
      action: 'check',
      currentLine: 4,
      currentNode: 1,
      visited: [0, 1, 2],
      queue: [2],
      result: [0, 1],
      exploring: [3]
    },
    {
      step: 23,
      description: '✅ Mark visited: Add node 3 to visited set',
      action: 'visit',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [2],
      result: [0, 1],
      exploring: null
    },
    {
      step: 24,
      description: '➕ Enqueue: Add node 3 to end of queue',
      action: 'enqueue',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [2, 3],
      result: [0, 1],
      exploring: null
    },
    {
      step: 25,
      description: '🔍 Loop check: Is queue empty? NO (queue = [2, 3])',
      action: 'loop-check',
      currentLine: 3,
      currentNode: null,
      visited: [0, 1, 2, 3],
      queue: [2, 3],
      result: [0, 1],
      exploring: null
    },
    {
      step: 26,
      description: '➖ Dequeue: Remove node 2 from front of queue',
      action: 'dequeue',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1],
      exploring: null
    },
    {
      step: 27,
      description: '📝 Add to result: Push node 2 to result array',
      action: 'process',
      currentLine: 3,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: null
    },
    {
      step: 28,
      description: '👀 Explore: Check neighbors of node 2',
      action: 'explore',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: null
    },
    {
      step: 29,
      description: '🔎 Found neighbors: Node 2 has neighbors [0, 3]',
      action: 'check-neighbors',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: [0, 3]
    },
    {
      step: 30,
      description: '❌ Check neighbor 0: Already visited, skip it',
      action: 'skip',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: [0]
    },
    {
      step: 31,
      description: '❌ Check neighbor 3: Already visited, skip it',
      action: 'skip',
      currentLine: 4,
      currentNode: 2,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: [3]
    },
    {
      step: 32,
      description: '🔍 Loop check: Is queue empty? NO (queue = [3])',
      action: 'loop-check',
      currentLine: 3,
      currentNode: null,
      visited: [0, 1, 2, 3],
      queue: [3],
      result: [0, 1, 2],
      exploring: null
    },
    {
      step: 33,
      description: '➖ Dequeue: Remove node 3 from front of queue',
      action: 'dequeue',
      currentLine: 3,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2],
      exploring: null
    },
    {
      step: 34,
      description: '📝 Add to result: Push node 3 to result array (Complete!)',
      action: 'process',
      currentLine: 3,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: null
    },
    {
      step: 35,
      description: '👀 Explore: Check neighbors of node 3',
      action: 'explore',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: null
    },
    {
      step: 36,
      description: '🔎 Found neighbors: Node 3 has self-loop [3]',
      action: 'check-neighbors',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: [3]
    },
    {
      step: 37,
      description: '❌ Check neighbor 3: Already visited (self), skip it',
      action: 'skip',
      currentLine: 4,
      currentNode: 3,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: []
    },
    {
      step: 38,
      description: '🔍 Loop check: Is queue empty? YES (queue = [])',
      action: 'loop-complete',
      currentLine: 3,
      currentNode: null,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: null
    },
    {
      step: 39,
      description: '🎯 Complete: Return result [0 → 1 → 2 → 3]',
      action: 'complete',
      currentLine: 5,
      currentNode: null,
      visited: [0, 1, 2, 3],
      queue: [],
      result: [0, 1, 2, 3],
      exploring: null
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const getVisitedComment = () => {
      if (stepData.visited.length > 0) {
        return `visited = {${stepData.visited.join(', ')}}`;
      }
      return 'visited = {}';
    };

    const getQueueComment = () => {
      if (stepData.queue.length > 0) {
        return `queue = [${stepData.queue.join(' ← ')}] (front → rear)`;
      }
      return 'queue = [] (empty)';
    };

    const getResultComment = () => {
      if (stepData.result.length > 0) {
        return `result = [${stepData.result.join(' → ')}]`;
      }
      return 'result = []';
    };

    const getNeighborsComment = () => {
      if (stepData.exploring) {
        return `neighbors = [${stepData.exploring.join(', ')}]`;
      }
      return '';
    };

    const getEnqueueComment = () => {
      if (stepData.action === 'enqueue' && stepData.currentNode !== null) {
        return `Enqueuing node ${stepData.currentNode} at rear`;
      }
      return '';
    };

    const getDequeueComment = () => {
      if (stepData.action === 'dequeue' && stepData.currentNode !== null) {
        return `Dequeued node ${stepData.currentNode} from front`;
      }
      return '';
    };

    return [
      { line: 1, code: 'function bfs(graph, start) {', active: stepData.currentLine === 1, indent: 0, values: stepData.step === 1 ? `start = ${stepData.currentNode !== null ? stepData.currentNode : 0}` : '' },
      { line: 2, code: '  const visited = new Set();', active: stepData.currentLine === 1, indent: 1, values: stepData.step === 1 ? getVisitedComment() : getVisitedComment() },
      { line: 3, code: '  const queue = []; // FIFO', active: stepData.currentLine === 1, indent: 1, values: stepData.step === 2 ? getQueueComment() : getQueueComment() },
      { line: 4, code: '  const result = [];', active: stepData.currentLine === 1, indent: 1, values: getResultComment() },
      { line: 5, code: '  ', active: false, indent: 0 },
      { line: 6, code: '  // Mark start node as visited', active: false, indent: 1 },
      { line: 7, code: '  visited.add(start);', active: stepData.currentLine === 2, indent: 1, values: stepData.action === 'visit' && stepData.currentNode === 0 ? `visited.add(0)` : '' },
      { line: 8, code: '  queue.push(start);', active: stepData.currentLine === 2, indent: 1, values: stepData.step === 4 ? `queue.push(0)` : '' },
      { line: 9, code: '  ', active: false, indent: 0 },
      { line: 10, code: '  // Process queue level by level', active: false, indent: 1 },
      { line: 11, code: '  while (queue.length > 0) {', active: stepData.currentLine === 3, indent: 1, values: stepData.action === 'loop-check' ? getQueueComment() : '' },
      { line: 12, code: '    const node = queue.shift();', active: stepData.currentLine === 3 && stepData.action === 'dequeue', indent: 2, values: getDequeueComment() },
      { line: 13, code: '    result.push(node);', active: stepData.currentLine === 3 && stepData.action === 'process', indent: 2, values: stepData.action === 'process' ? `Processed: ${stepData.currentNode}` : '' },
      { line: 14, code: '    ', active: false, indent: 0 },
      { line: 15, code: '    // Add unvisited neighbors', active: false, indent: 2 },
      { line: 16, code: '    for (const neighbor of graph[node]) {', active: stepData.currentLine === 4, indent: 2, values: getNeighborsComment() },
      { line: 17, code: '      if (!visited.has(neighbor)) {', active: stepData.currentLine === 4, indent: 3, values: stepData.action === 'check' || stepData.action === 'skip' ? (stepData.action === 'skip' ? `${stepData.exploring?.[0]} already visited` : `${stepData.exploring?.[0]} not visited`) : '' },
      { line: 18, code: '        visited.add(neighbor);', active: stepData.currentLine === 4 && stepData.action === 'visit', indent: 4, values: stepData.action === 'visit' && stepData.currentNode !== null ? `visited.add(${stepData.currentNode})` : '' },
      { line: 19, code: '        queue.push(neighbor);', active: stepData.currentLine === 4 && stepData.action === 'enqueue', indent: 4, values: getEnqueueComment() },
      { line: 20, code: '      }', active: false, indent: 3 },
      { line: 21, code: '    }', active: false, indent: 2 },
      { line: 22, code: '  }', active: stepData.currentLine === 3 && stepData.action === 'loop-complete', indent: 1, values: stepData.action === 'loop-complete' ? 'Queue empty, exit loop' : '' },
      { line: 23, code: '  ', active: false, indent: 0 },
      { line: 24, code: '  return result;', active: stepData.currentLine === 5, indent: 1, values: stepData.action === 'complete' ? `Final: [${stepData.result.join(' → ')}]` : '' },
      { line: 25, code: '}', active: stepData.currentLine === 5, indent: 0 },
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

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="DSA · Graphs"
        title="Breadth First Search (BFS)"
        description="Level-order traversal using a queue (FIFO) to explore graphs layer by layer"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(V + E)', variant: 'success' },
          { label: 'Space: O(V)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Understanding BFS Visually
          </CardTitle>
          <CardDescription>Let's explore how BFS traverses graphs level by level</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Section 1: What is BFS? */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              What is Breadth First Search?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                BFS is a graph traversal algorithm that explores nodes <strong>level by level</strong>, visiting all neighbors at the current depth before moving to the next level. It uses a <strong>queue (FIFO)</strong> data structure.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">GRAPH</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    <div>0 → [1, 2]</div>
                    <div>1 → [2, 3]</div>
                    <div>2 → [0, 3]</div>
                    <div>3 → [3]</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500 dark:border-green-600">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">BFS TRAVERSAL</div>
                  <div className="text-sm font-mono text-green-900 dark:text-green-100">
                    [0 → 1 → 2 → 3]
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Level-order: 0 | 1,2 | 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: BFS vs DFS */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              BFS vs DFS: Key Differences
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-300">BFS (Breadth First)</span>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">Queue</Badge>
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Uses <strong>Queue (FIFO)</strong></li>
                      <li>• Explores <strong>level by level</strong></li>
                      <li>• Finds <strong>shortest path</strong></li>
                      <li>• Order: 0 → 1 → 2 → 3</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-rose-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-rose-700 dark:text-rose-300">DFS (Depth First)</span>
                      <Badge variant="outline" className="text-rose-600 border-rose-600">Stack</Badge>
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Uses <strong>Stack (LIFO)</strong></li>
                      <li>• Explores <strong>deep first</strong></li>
                      <li>• Finds <strong>any path</strong></li>
                      <li>• Order: 0 → 1 → 2 → 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How BFS Works */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Mark start node as visited and enqueue it</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs text-slate-700 dark:text-slate-300">
                    <code>visited.add(0); queue.push(0);</code>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-slate-900 dark:text-slate-100">While queue is not empty, dequeue front node</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs text-slate-700 dark:text-slate-300">
                    <code>const node = queue.shift(); // Remove from front</code>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Process current node and add to result</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs text-slate-700 dark:text-slate-300">
                    <code>result.push(node); // Add to traversal result</code>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Enqueue all unvisited neighbors</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border text-xs text-slate-700 dark:text-slate-300">
                    <code>if (!visited.has(neighbor)) queue.push(neighbor);</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Queue (FIFO):</strong> First In First Out - processes nodes in order they were discovered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Level-order:</strong> All nodes at depth d are processed before any node at depth d+1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Shortest Path:</strong> BFS finds shortest path in unweighted graphs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Mark on Discovery:</strong> Mark nodes visited when adding to queue, not when dequeuing</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Follow BFS traversal from start to finish with animated graph visualizations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              Step-by-Step Visual Walkthrough
            </h4>
            <p className="text-sm text-cyan-800 dark:text-cyan-200 mb-6">
              Let's walk through BFS on our example graph, starting from node 0
            </p>

            <div className="space-y-6">
              
              {/* Step 1: Start with node 0 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Start: Mark Node 0 & Enqueue</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Mark node 0 as visited and add to queue</div>
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
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Only show edges from node 0 (current) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step1)" opacity="0.3" />
                      <line x1="137" y1="67" x2="176" y2="128" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow-step1)" opacity="0.3" />
                      
                      {/* Node 0 - Current (Blue with glow) */}
                      <circle cx="125" cy="50" r="32" fill="#3b82f6" stroke="#1e40af" strokeWidth="3" filter="url(#glow)" />
                      {/* Bouncing indicator above node */}
                      <circle cx="125" cy="10" r="6" fill="#3b82f6" opacity="0.9">
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
                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-md">0</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Queue</div>
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-300">[0]</div>
                  </div>
                </div>
              </div>

              {/* Step 2: Dequeue and explore node 0 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Dequeue & Process: Node 0</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Dequeue node 0, explore its neighbors [1, 2]</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-step2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                        <marker id="arrow-step2-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#cbd5e1" />
                        </marker>
                      </defs>
                      {/* Edges from 0 to neighbors */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step2)" opacity="0.8" />
                      <line x1="137" y1="67" x2="176" y2="128" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-step2)" opacity="0.8" />
                      
                      {/* Node 0 - Processed */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Visited (in queue) */}
                      <circle cx="62" cy="145" r="22" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
                      
                      {/* Node 2 - Visited (in queue) */}
                      <circle cx="188" cy="145" r="22" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      
                      {/* Node 3 - Unvisited */}
                      <circle cx="125" cy="235" r="22" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Processed</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-semibold shadow-sm">0</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold">0</div>
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">1</div>
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">2</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Queue</div>
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-300">[1, 2]</div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 BFS Explores Level by Level</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">Node 0's neighbors (1, 2) are marked visited and added to queue. They'll be processed in FIFO order.</div>
                </div>
              </div>

              {/* Step 3: Process node 1 */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Dequeue & Process: Node 1</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Dequeue node 1, explore neighbors [2, 3]</div>
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
                        <marker id="arrow-step3-blue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                        </marker>
                      </defs>
                      {/* Previous edges (green) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-step3)" opacity="0.6" />
                      <line x1="137" y1="67" x2="176" y2="128" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-step3)" opacity="0.6" />
                      {/* Current edge 1→3 */}
                      <line x1="74" y1="165" x2="113" y2="218" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-step3-blue)" opacity="0.8" />
                      
                      {/* Node 0 - Visited */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      {/* Node 1 - Current (processing) */}
                      <circle cx="62" cy="145" r="28" fill="#3b82f6" stroke="#1e40af" strokeWidth="3" filter="url(#glow)" />
                      <circle cx="62" cy="108" r="6" fill="#3b82f6" opacity="0.9">
                        <animate attributeName="cy" values="108;113;108" dur="0.8s" repeatCount="indefinite" />
                      </circle>
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                      <circle cx="45" cy="130" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
                      <text x="45" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
                      
                      {/* Node 2 - Visited (in queue) */}
                      <circle cx="188" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      
                      {/* Node 3 - Now visited (just added to queue) */}
                      <circle cx="125" cy="235" r="22" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                    </svg>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Processed</div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold">0</div>
                      <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold">1</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Visited</div>
                    <div className="flex gap-1 flex-wrap">
                      <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white text-[10px] font-semibold">0</div>
                      <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white text-[10px] font-semibold">1</div>
                      <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white text-[10px] font-semibold">2</div>
                      <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white text-[10px] font-semibold">3</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Queue</div>
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-300">[2, 3]</div>
                  </div>
                </div>
              </div>

              {/* Step 4: Final - Complete traversal */}
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">✓</div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 dark:text-slate-100">Complete: All Nodes Visited</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">BFS traversal complete in level-order</div>
                  </div>
                </div>
                
                {/* Graph Diagram */}
                <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border">
                  <div className="flex justify-center">
                    <svg width="250" height="280" viewBox="0 0 250 280">
                      <defs>
                        <marker id="arrow-final" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                      </defs>
                      {/* All edges traversed (green) */}
                      <line x1="113" y1="67" x2="74" y2="128" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-final)" opacity="0.6" />
                      <line x1="137" y1="67" x2="176" y2="128" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-final)" opacity="0.6" />
                      <line x1="84" y1="145" x2="166" y2="145" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-final)" opacity="0.6" />
                      <line x1="74" y1="165" x2="113" y2="218" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-final)" opacity="0.6" />
                      <line x1="176" y1="165" x2="137" y2="218" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-final)" opacity="0.6" />
                      
                      {/* All nodes visited (green) with visit order */}
                      <circle cx="125" cy="50" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="58" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">0</text>
                      <circle cx="105" cy="32" r="10" fill="#f59e0b" stroke="white" strokeWidth="2" />
                      <text x="105" y="37" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
                      
                      <circle cx="62" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="62" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
                      <circle cx="45" cy="130" r="10" fill="#f59e0b" stroke="white" strokeWidth="2" />
                      <text x="45" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
                      
                      <circle cx="188" cy="145" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="188" y="152" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
                      <circle cx="205" cy="130" r="10" fill="#f59e0b" stroke="white" strokeWidth="2" />
                      <text x="205" y="135" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">3</text>
                      
                      <circle cx="125" cy="235" r="22" fill="#10b981" stroke="#059669" strokeWidth="2" />
                      <text x="125" y="242" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
                      <circle cx="142" cy="220" r="10" fill="#f59e0b" stroke="white" strokeWidth="2" />
                      <text x="142" y="225" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">4</text>
                    </svg>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-green-900 dark:text-green-100">BFS Complete: [0, 1, 2, 3]</div>
                      <div className="text-xs text-green-700 dark:text-green-300 mt-1">Level-order traversal: [0] | [1, 2] | [3]</div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-2">Queue is empty - all nodes processed in breadth-first order!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Observations */}
              <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <AlertTitle>Key Observations</AlertTitle>
                <AlertDescription className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">1.</span>
                    <span><strong>Level-order traversal:</strong> Nodes visited level by level (0 → 1,2 → 3)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">2.</span>
                    <span><strong>Queue ensures FIFO:</strong> First discovered nodes are processed first</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">3.</span>
                    <span><strong>Shortest path guaranteed:</strong> BFS finds shortest path in unweighted graphs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">4.</span>
                    <span><strong>Mark when enqueuing:</strong> Prevents duplicate entries in queue</span>
                  </div>
                </AlertDescription>
              </Alert>

            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Interactive BFS Animation
          </CardTitle>
          <CardDescription>Watch how BFS explores the graph level by level using a queue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
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
          <div className="flex items-center justify-center gap-2 flex-wrap">
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
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
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
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">bfs-iterative.js</span>
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
                      {steps[currentStep].action === 'visit' && '✅ Marking Visited'}
                      {steps[currentStep].action === 'enqueue' && '➕ Enqueuing'}
                      {steps[currentStep].action === 'dequeue' && '➖ Dequeuing'}
                      {steps[currentStep].action === 'process' && '📝 Processing'}
                      {steps[currentStep].action === 'loop-check' && '🔍 Loop Check'}
                      {steps[currentStep].action === 'explore' && '👀 Exploring'}
                      {steps[currentStep].action === 'check-neighbors' && '🔎 Checking Neighbors'}
                      {steps[currentStep].action === 'check' && '✔️ Checking'}
                      {steps[currentStep].action === 'skip' && '❌ Skipping'}
                      {steps[currentStep].action === 'loop-complete' && '✅ Loop Complete'}
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
                <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  Live Graph Traversal
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Unvisited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Visited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Current</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <svg viewBox="0 0 350 300" className="w-full h-auto max-h-80">
                  <defs>
                    <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" opacity="0.6" />
                    </marker>
                  </defs>

                  {/* Edges */}
                  {Object.entries(graph).map(([from, toNodes]) => (
                    toNodes.map((to) => {
                      const fromNum = parseInt(from);
                      const fromPos = nodePositions[fromNum as keyof typeof nodePositions];
                      const toPos = nodePositions[to as keyof typeof nodePositions];
                      
                      if (fromNum === to) {
                        return (
                          <path
                            key={`${from}-${to}`}
                            d={`M ${fromPos.x + 22} ${fromPos.y} Q ${fromPos.x + 45} ${fromPos.y - 26} ${fromPos.x} ${fromPos.y - 22}`}
                            fill="none"
                            stroke="url(#edgeGradient)"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                            opacity="0.4"
                          />
                        );
                      }

                      const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x);
                      const fromX = fromPos.x + Math.cos(angle) * 26;
                      const fromY = fromPos.y + Math.sin(angle) * 26;
                      const toX = toPos.x - Math.cos(angle) * 26;
                      const toY = toPos.y - Math.sin(angle) * 26;

                      const isTraversed = steps[currentStep].result.includes(fromNum) && 
                                         steps[currentStep].visited.includes(to);

                      return (
                        <line
                          key={`${from}-${to}`}
                          x1={fromX}
                          y1={fromY}
                          x2={toX}
                          y2={toY}
                          stroke={isTraversed ? '#3b82f6' : 'url(#edgeGradient)'}
                          strokeWidth={isTraversed ? 2.5 : 2}
                          markerEnd="url(#arrowhead)"
                          opacity={isTraversed ? 0.8 : 0.4}
                          className={isTraversed ? 'animate-pulse' : ''}
                        />
                      );
                    })
                  ))}

                  {/* Nodes */}
                  {Object.entries(nodePositions).map(([node, pos]) => {
                    const nodeNum = parseInt(node);
                    const isVisited = steps[currentStep].visited.includes(nodeNum);
                    const isCurrent = steps[currentStep].currentNode === nodeNum;
                    const visitOrder = steps[currentStep].result.indexOf(nodeNum);
                    
                    return (
                      <g key={node}>
                        {/* Bouncing indicator above current node */}
                        {isCurrent && (
                          <circle cx={pos.x} cy={pos.y - 38} r="5" fill="#3b82f6" opacity="0.9">
                            <animate attributeName="cy" values={`${pos.y - 38};${pos.y - 34};${pos.y - 38}`} dur="0.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                        
                        {/* Main node circle */}
                        <circle 
                          cx={pos.x} 
                          cy={pos.y} 
                          r="26" 
                          fill={isCurrent ? '#3b82f6' : isVisited ? '#10b981' : '#94a3b8'} 
                          stroke={isCurrent ? '#1e40af' : isVisited ? '#059669' : '#64748b'}
                          strokeWidth="2.5"
                          filter={isCurrent ? 'url(#glow)' : undefined}
                          style={{
                            transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                            transformOrigin: `${pos.x}px ${pos.y}px`,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                          className={isCurrent ? 'animate-pulse' : ''}
                        />
                        
                        {/* Node label */}
                        <text 
                          x={pos.x} 
                          y={pos.y + 7} 
                          textAnchor="middle" 
                          fill="white" 
                          fontSize="20" 
                          fontWeight="bold"
                          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                        >
                          {node}
                        </text>
                        
                        {/* Node label below */}
                        <text 
                          x={pos.x} 
                          y={pos.y + 42} 
                          textAnchor="middle" 
                          fill={isCurrent ? '#3b82f6' : isVisited ? '#10b981' : '#64748b'} 
                          fontSize="11" 
                          fontWeight="600"
                        >
                          Node {node}
                        </text>
                        
                        {/* Visit order indicator - Rendered last for z-index on top */}
                        {isVisited && visitOrder >= 0 && (
                          <g style={{ pointerEvents: 'none' }}>
                            <circle
                              cx={pos.x - 18}
                              cy={pos.y - 18}
                              r="10"
                              fill="#10b981"
                              stroke="white"
                              strokeWidth="2"
                              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                            />
                            <text
                              x={pos.x - 18}
                              y={pos.y - 14}
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

              {/* Queue Visualization */}
              <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full"></div>
                    Queue State (FIFO)
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300">
                    <span className="font-semibold">Front →</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold">← Rear</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 min-h-[80px] p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  {steps[currentStep].queue.length === 0 ? (
                    <div className="flex-1 text-center text-slate-500 dark:text-slate-400 italic">
                      Queue is empty
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">FRONT</div>
                        <ArrowRight className="w-4 h-4 text-amber-500" />
                      </div>
                      {steps[currentStep].queue.map((node, idx) => (
                        <div key={`${node}-${idx}`} className="flex items-center">
                          <div className="w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 bg-amber-100 dark:bg-amber-900/40 border-amber-500 text-amber-900 dark:text-amber-100">
                            {node}
                          </div>
                          {idx < steps[currentStep].queue.length - 1 && (
                            <ArrowRight className="w-5 h-5 text-amber-400 mx-1" />
                          )}
                        </div>
                      ))}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">REAR</div>
                        <ArrowRight className="w-4 h-4 text-amber-500 rotate-180" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
          <CardDescription>Time and space complexity breakdown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(V + E)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We visit each vertex (V) once and explore each edge (E) once. For dense graphs, this approaches O(V²).
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(V)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We need space for the visited set (O(V)), queue (O(V) in worst case), and result array (O(V)).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete BFS Implementation"
        language="javascript"
        code={`function bfs(graph, start) {
  const visited = new Set();
  const queue = [];
  const result = [];
  
  // Mark start node as visited and enqueue it
  visited.add(start);
  queue.push(start);
  
  // Process queue level by level
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue from front
    result.push(node);
    
    // Add all unvisited neighbors to queue
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue at rear
      }
    }
  }
  
  return result;
}

// Example usage
const graph = {
  0: [1, 2],
  1: [2, 3],
  2: [0, 3],
  3: [3]
};

console.log(bfs(graph, 0)); // Output: [0, 1, 2, 3]`}
      />
    </div>
  );
}

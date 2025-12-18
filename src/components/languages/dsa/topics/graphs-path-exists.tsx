'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function PathExistsInGraph() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const graph = {
    0: [1, 3],
    1: [0, 2],
    2: [1, 4],
    3: [0, 4],
    4: [2, 3]
  };

  const nodePositions = {
    0: { x: 120, y: 100 },
    1: { x: 300, y: 100 },
    2: { x: 480, y: 100 },
    3: { x: 120, y: 280 },
    4: { x: 480, y: 280 }
  };

  const source = 0;
  const destination = 4;

  const steps = [
    { step: 1, description: '📋 Problem: Find if path exists from node 0 to node 4', action: 'init', currentLine: 1, currentNode: null, visited: [], queue: [], found: false, checking: null },
    { step: 2, description: '📋 Initialize: Create visited set', action: 'init', currentLine: 2, currentNode: null, visited: [], queue: [], found: false, checking: null },
    { step: 3, description: '📋 Initialize: Create empty queue', action: 'init', currentLine: 3, currentNode: null, visited: [], queue: [], found: false, checking: null },
    { step: 4, description: '🚀 Start: Mark source node 0 as visited', action: 'start', currentLine: 4, currentNode: 0, visited: [0], queue: [], found: false, checking: null },
    { step: 5, description: '➕ Enqueue: Add source node 0 to queue', action: 'enqueue', currentLine: 5, currentNode: 0, visited: [0], queue: [0], found: false, checking: null },
    { step: 6, description: '🔄 Loop Check: Is queue empty? NO! Queue = [0]', action: 'loop-check', currentLine: 6, currentNode: 0, visited: [0], queue: [0], found: false, checking: null },
    { step: 7, description: '📤 Dequeue: Remove front element = 0', action: 'dequeue', currentLine: 7, currentNode: 0, visited: [0], queue: [], found: false, checking: null },
    { step: 8, description: '🎯 Check: Is current node(0) == destination(4)? NO', action: 'check-destination', currentLine: 8, currentNode: 0, visited: [0], queue: [], found: false, checking: 0 },
    { step: 9, description: '👀 Explore: Get neighbors of node 0 → [1, 3]', action: 'get-neighbors', currentLine: 9, currentNode: 0, visited: [0], queue: [], found: false, checking: null },
    { step: 10, description: '🔍 Check Neighbor: Is node 1 visited? NO', action: 'check-visited', currentLine: 10, currentNode: 0, visited: [0], queue: [], found: false, checking: 1 },
    { step: 11, description: '✅ Mark: Add node 1 to visited set', action: 'mark-visited', currentLine: 11, currentNode: 0, visited: [0, 1], queue: [], found: false, checking: 1 },
    { step: 12, description: '➕ Enqueue: Add node 1 to queue', action: 'enqueue', currentLine: 12, currentNode: 0, visited: [0, 1], queue: [1], found: false, checking: null },
    { step: 13, description: '🔍 Check Neighbor: Is node 3 visited? NO', action: 'check-visited', currentLine: 10, currentNode: 0, visited: [0, 1], queue: [1], found: false, checking: 3 },
    { step: 14, description: '✅ Mark: Add node 3 to visited set', action: 'mark-visited', currentLine: 11, currentNode: 0, visited: [0, 1, 3], queue: [1], found: false, checking: 3 },
    { step: 15, description: '➕ Enqueue: Add node 3 to queue', action: 'enqueue', currentLine: 12, currentNode: 0, visited: [0, 1, 3], queue: [1, 3], found: false, checking: null },
    { step: 16, description: '🔄 Loop Check: Is queue empty? NO! Queue = [1, 3]', action: 'loop-check', currentLine: 6, currentNode: null, visited: [0, 1, 3], queue: [1, 3], found: false, checking: null },
    { step: 17, description: '📤 Dequeue: Remove front element = 1', action: 'dequeue', currentLine: 7, currentNode: 1, visited: [0, 1, 3], queue: [3], found: false, checking: null },
    { step: 18, description: '🎯 Check: Is current node(1) == destination(4)? NO', action: 'check-destination', currentLine: 8, currentNode: 1, visited: [0, 1, 3], queue: [3], found: false, checking: 1 },
    { step: 19, description: '👀 Explore: Get neighbors of node 1 → [0, 2]', action: 'get-neighbors', currentLine: 9, currentNode: 1, visited: [0, 1, 3], queue: [3], found: false, checking: null },
    { step: 20, description: '🔍 Check Neighbor: Is node 0 visited? YES (skip)', action: 'check-visited', currentLine: 10, currentNode: 1, visited: [0, 1, 3], queue: [3], found: false, checking: 0 },
    { step: 21, description: '🔍 Check Neighbor: Is node 2 visited? NO', action: 'check-visited', currentLine: 10, currentNode: 1, visited: [0, 1, 3], queue: [3], found: false, checking: 2 },
    { step: 22, description: '✅ Mark: Add node 2 to visited set', action: 'mark-visited', currentLine: 11, currentNode: 1, visited: [0, 1, 3, 2], queue: [3], found: false, checking: 2 },
    { step: 23, description: '➕ Enqueue: Add node 2 to queue', action: 'enqueue', currentLine: 12, currentNode: 1, visited: [0, 1, 3, 2], queue: [3, 2], found: false, checking: null },
    { step: 24, description: '🔄 Loop Check: Is queue empty? NO! Queue = [3, 2]', action: 'loop-check', currentLine: 6, currentNode: null, visited: [0, 1, 3, 2], queue: [3, 2], found: false, checking: null },
    { step: 25, description: '📤 Dequeue: Remove front element = 3', action: 'dequeue', currentLine: 7, currentNode: 3, visited: [0, 1, 3, 2], queue: [2], found: false, checking: null },
    { step: 26, description: '🎯 Check: Is current node(3) == destination(4)? NO', action: 'check-destination', currentLine: 8, currentNode: 3, visited: [0, 1, 3, 2], queue: [2], found: false, checking: 3 },
    { step: 27, description: '👀 Explore: Get neighbors of node 3 → [0, 4]', action: 'get-neighbors', currentLine: 9, currentNode: 3, visited: [0, 1, 3, 2], queue: [2], found: false, checking: null },
    { step: 28, description: '🔍 Check Neighbor: Is node 0 visited? YES (skip)', action: 'check-visited', currentLine: 10, currentNode: 3, visited: [0, 1, 3, 2], queue: [2], found: false, checking: 0 },
    { step: 29, description: '🔍 Check Neighbor: Is node 4 visited? NO', action: 'check-visited', currentLine: 10, currentNode: 3, visited: [0, 1, 3, 2], queue: [2], found: false, checking: 4 },
    { step: 30, description: '✅ Mark: Add node 4 to visited set', action: 'mark-visited', currentLine: 11, currentNode: 3, visited: [0, 1, 3, 2, 4], queue: [2], found: false, checking: 4 },
    { step: 31, description: '➕ Enqueue: Add node 4 to queue', action: 'enqueue', currentLine: 12, currentNode: 3, visited: [0, 1, 3, 2, 4], queue: [2, 4], found: false, checking: null },
    { step: 32, description: '🔄 Loop Check: Is queue empty? NO! Queue = [2, 4]', action: 'loop-check', currentLine: 6, currentNode: null, visited: [0, 1, 3, 2, 4], queue: [2, 4], found: false, checking: null },
    { step: 33, description: '📤 Dequeue: Remove front element = 2', action: 'dequeue', currentLine: 7, currentNode: 2, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: null },
    { step: 34, description: '🎯 Check: Is current node(2) == destination(4)? NO', action: 'check-destination', currentLine: 8, currentNode: 2, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: 2 },
    { step: 35, description: '👀 Explore: Get neighbors of node 2 → [1, 4]', action: 'get-neighbors', currentLine: 9, currentNode: 2, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: null },
    { step: 36, description: '🔍 Check Neighbor: Is node 1 visited? YES (skip)', action: 'check-visited', currentLine: 10, currentNode: 2, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: 1 },
    { step: 37, description: '🔍 Check Neighbor: Is node 4 visited? YES (skip)', action: 'check-visited', currentLine: 10, currentNode: 2, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: 4 },
    { step: 38, description: '🔄 Loop Check: Is queue empty? NO! Queue = [4]', action: 'loop-check', currentLine: 6, currentNode: null, visited: [0, 1, 3, 2, 4], queue: [4], found: false, checking: null },
    { step: 39, description: '📤 Dequeue: Remove front element = 4', action: 'dequeue', currentLine: 7, currentNode: 4, visited: [0, 1, 3, 2, 4], queue: [], found: false, checking: null },
    { step: 40, description: '🎯 Check: Is current node(4) == destination(4)? YES! 🎉', action: 'found', currentLine: 8, currentNode: 4, visited: [0, 1, 3, 2, 4], queue: [], found: true, checking: 4 },
    { step: 41, description: '✅ Success: Path exists from node 0 to node 4! Return true', action: 'result', currentLine: 13, currentNode: 4, visited: [0, 1, 3, 2, 4], queue: [], found: true, checking: null },
    { step: 42, description: '🎯 Complete: Algorithm finished successfully!', action: 'done', currentLine: 14, currentNode: 4, visited: [0, 1, 3, 2, 4], queue: [], found: true, checking: null }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const visitedStr = `{${stepData.visited.join(', ')}}`;
    const queueStr = `[${stepData.queue.join(', ')}]`;
    
    return [
      { line: 1, code: 'function validPath(n, edges, source, destination) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  const visited = new Set();', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `visited=${visitedStr}` : '' },
      { line: 3, code: '  const queue = [];', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `queue=${queueStr}` : '' },
      { line: 4, code: '  visited.add(source);', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 ? `add(${source})` : '' },
      { line: 5, code: '  queue.push(source);', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 ? `push(${source})` : '' },
      { line: 6, code: '  while (queue.length > 0) {', active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `queue.length=${stepData.queue.length}` : '' },
      { line: 7, code: '    const node = queue.shift();', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 && stepData.currentNode !== null ? `node=${stepData.currentNode}` : '' },
      { line: 8, code: '    if (node === destination) return true;', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `${stepData.currentNode}===${destination}? ${stepData.found ? 'YES' : 'NO'}` : '' },
      { line: 9, code: '    for (const neighbor of graph[node]) {', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 && stepData.currentNode !== null ? `neighbors=${JSON.stringify(graph[stepData.currentNode as keyof typeof graph])}` : '' },
      { line: 10, code: '      if (!visited.has(neighbor)) {', active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 && stepData.checking !== null ? `visited.has(${stepData.checking})? ${stepData.visited.includes(stepData.checking) ? 'YES' : 'NO'}` : '' },
      { line: 11, code: '        visited.add(neighbor);', active: stepData.currentLine === 11, indent: 4, values: stepData.currentLine === 11 && stepData.checking !== null ? `add(${stepData.checking})` : '' },
      { line: 12, code: '        queue.push(neighbor);', active: stepData.currentLine === 12, indent: 4, values: stepData.currentLine === 12 && stepData.checking !== null ? `push(${stepData.checking})` : '' },
      { line: 13, code: '  }}}', active: false, indent: 1 },
      { line: 14, code: '  return false;', active: stepData.currentLine === 14 || stepData.currentLine === 13, indent: 1, values: stepData.currentLine >= 13 && stepData.found ? 'returned true' : '' },
      { line: 15, code: '}', active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => setCurrentStep(stepIndex);

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedMap = { slow: 2000, normal: 1500, fast: 800 };
    const delay = speedMap[animationSpeed];
    steps.forEach((_, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) setTimeout(() => setIsAnimating(false), 2000);
      }, index * delay);
    });
  };

  const handleNext = () => { if (currentStep < steps.length - 1) goToStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 0) goToStep(currentStep - 1); };
  const handleReset = () => { setCurrentStep(0); setIsAnimating(false); };

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={GitBranch}
        category="DSA · Graphs"
        title="Find if Path Exists in Graph"
        description="Use BFS traversal to determine if a valid path exists between two nodes"
        colorTheme="emerald"
        badges={[
          { label: 'BFS', variant: 'default' },
          { label: 'Time: O(V+E)', variant: 'success' },
          { label: 'Space: O(V)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement - Keeping implementation concise */}
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn path finding with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What is Path Existence?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given an undirected graph with n nodes (labeled 0 to n-1), edges, source, and destination nodes, determine if there exists a valid path from source to destination.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">n =</span> 5 nodes</div>
                  <div><span className="font-semibold">edges =</span> [[0,1], [0,3], [1,2], [2,4], [3,4]]</div>
                  <div><span className="font-semibold">source =</span> 0, <span className="font-semibold">destination =</span> 4</div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">true</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-2">✓ Path exists: 0 → 1 → 2 → 4 or 0 → 3 → 4</div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>BFS for Shortest Path:</strong> Explores level by level</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>Visited Set:</strong> Prevents cycles and revisiting</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>Early Termination:</strong> Return true when found</span></div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Path Finding Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Network className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Interactive Path Finding Animation
          </CardTitle>
          <CardDescription>Watch BFS explore the graph from node 0 to node 4</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as typeof animationSpeed)} disabled={isAnimating} className="w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 rounded border border-emerald-300 dark:border-emerald-700">
              <span className="text-xs font-medium text-emerald-900 dark:text-emerald-100">{currentStep + 1} / {steps.length}</span>
            </div>
            <Button onClick={handleNext} disabled={currentStep === steps.length - 1 || isAnimating} variant="outline" size="lg">
              Next<ChevronRight className="w-4 h-4 ml-2" />
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">pathExists.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Current:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].currentNode ?? 'null'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Queue:</span><span className="font-semibold text-amber-600 dark:text-amber-400">[{steps[currentStep].queue.join(', ')}]</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Visited:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].visited.length} nodes</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].found ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].found ? 'bg-green-600' : 'bg-blue-600'}`}>
                    {steps[currentStep].found ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].found ? 'text-green-900 dark:text-green-100' : 'text-blue-900 dark:text-blue-100'}`}>
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'start' && '🎬 Starting BFS'}
                      {steps[currentStep].action === 'loop-check' && '🔄 Loop Check'}
                      {steps[currentStep].action === 'dequeue' && '📤 Dequeue'}
                      {steps[currentStep].action === 'check-destination' && '🎯 Check Destination'}
                      {steps[currentStep].action === 'get-neighbors' && '👀 Exploring Neighbors'}
                      {steps[currentStep].action === 'check-visited' && '🔍 Check if Visited'}
                      {steps[currentStep].action === 'mark-visited' && '✅ Mark as Visited'}
                      {steps[currentStep].action === 'enqueue' && '➕ Enqueue'}
                      {steps[currentStep].action === 'found' && '🎉 Destination Found!'}
                      {steps[currentStep].action === 'result' && '✅ Return Result'}
                      {steps[currentStep].action === 'done' && '🎯 Complete'}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].found ? 'text-green-900 dark:text-green-50' : 'text-blue-900 dark:text-blue-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Graph Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Graph Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-slate-400"></div><span className="text-slate-600 dark:text-slate-400">Unvisited</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500"></div><span className="text-slate-600 dark:text-slate-400">Visited</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-amber-500"></div><span className="text-slate-600 dark:text-slate-400">Checking</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-600 ring-2 ring-green-300"></div><span className="text-slate-600 dark:text-slate-400">Found</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <svg viewBox="0 0 600 380" className="w-full h-auto">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#94a3b8" /></marker>
                    <marker id="arrowhead-active" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#10b981" /></marker>
                    <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>

                  {/* Edges */}
                  {Object.entries(graph).map(([from, toNodes]) => (
                    toNodes.map((to) => {
                      const fromNum = parseInt(from);
                      const fromPos = nodePositions[fromNum as keyof typeof nodePositions];
                      const toPos = nodePositions[to as keyof typeof nodePositions];
                      const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x);
                      const fromX = fromPos.x + Math.cos(angle) * 22;
                      const fromY = fromPos.y + Math.sin(angle) * 22;
                      const toX = toPos.x - Math.cos(angle) * 22;
                      const toY = toPos.y - Math.sin(angle) * 22;
                      const isTraversed = steps[currentStep].visited.includes(fromNum) && steps[currentStep].visited.includes(to);
                      return <line key={`${from}-${to}`} x1={fromX} y1={fromY} x2={toX} y2={toY} stroke={isTraversed ? '#10b981' : '#cbd5e1'} strokeWidth={isTraversed ? 3 : 2} markerEnd={isTraversed ? 'url(#arrowhead-active)' : 'url(#arrowhead)'} opacity={isTraversed ? 0.8 : 0.4} />;
                    })
                  ))}

                  {/* Nodes */}
                  {Object.entries(nodePositions).map(([node, pos]) => {
                    const nodeNum = parseInt(node);
                    const isVisited = steps[currentStep].visited.includes(nodeNum);
                    const isCurrent = steps[currentStep].currentNode === nodeNum;
                    const isChecking = steps[currentStep].checking === nodeNum;
                    const isDestination = nodeNum === destination && steps[currentStep].found;
                    return (
                      <g key={node}>
                        {isCurrent && <circle cx={pos.x} cy={pos.y - 38} r="4" fill="#3b82f6" opacity="0.9"><animate attributeName="cy" values={`${pos.y - 38};${pos.y - 34};${pos.y - 38}`} dur="0.8s" repeatCount="indefinite" /></circle>}
                        <circle cx={pos.x} cy={pos.y} r="22" fill={isDestination ? '#16a34a' : isChecking ? '#f59e0b' : isCurrent ? '#3b82f6' : isVisited ? '#10b981' : '#94a3b8'} stroke={isDestination ? '#15803d' : isChecking ? '#d97706' : isCurrent ? '#1e40af' : isVisited ? '#059669' : '#64748b'} strokeWidth={isDestination ? 3 : 2.5} filter={isCurrent || isDestination ? 'url(#glow)' : undefined} style={{ transform: isCurrent || isDestination ? 'scale(1.15)' : 'scale(1)', transformOrigin: `${pos.x}px ${pos.y}px`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} className={isCurrent || isDestination ? 'animate-pulse' : ''} />
                        <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{node}</text>
                        <text x={pos.x} y={pos.y + 42} textAnchor="middle" fontSize="10" fontWeight="600" fill={nodeNum === source ? '#3b82f6' : nodeNum === destination ? '#16a34a' : '#64748b'}>{nodeNum === source ? 'Source' : nodeNum === destination ? 'Dest' : ''}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          )}

          {/* Queue Visualization */}
          {currentStep >= 0 && steps[currentStep].queue.length > 0 && (
            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-700">
              <div className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-3">Queue (FIFO):</div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-amber-700 dark:text-amber-300">Front →</span>
                {steps[currentStep].queue.map((node, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-lg border-2 border-amber-600 shadow-md">{node}</div>
                    {idx < steps[currentStep].queue.length - 1 && <span className="text-amber-400">→</span>}
                  </div>
                ))}
                <span className="text-xs text-amber-700 dark:text-amber-300">← Rear</span>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <GitBranch className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Understanding BFS path finding through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Step 1: Initialization */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Initialize: Start from Source Node</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We start the BFS algorithm by initializing our data structures. First, we create a <strong>visited set</strong> to keep track of nodes we've already explored (prevents infinite loops in graphs with cycles). Then we create an empty <strong>queue</strong> for BFS traversal.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-blue-600 dark:text-blue-400">Key Action:</strong> Mark the source node (0) as visited and add it to the queue. This is our starting point for exploration.
                </p>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <p className="text-sm text-blue-900 dark:text-blue-100"><strong>💡 Why?</strong> The queue follows FIFO (First In, First Out) principle, ensuring we explore nodes level by level, which is the core of BFS.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-sm mb-2 text-slate-900 dark:text-slate-100">State:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Visited:</span>
                      <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">{'{0}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Queue:</span>
                      <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">[0]</code>
                    </div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 300 200" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-step1"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <line x1="60" y1="50" x2="150" y2="50" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="60" y1="50" x2="60" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="150" y1="50" x2="240" y2="50" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="240" y1="50" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="60" y1="140" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <circle cx="60" cy="25" r="4" fill="#3b82f6" opacity="0.9"><animate attributeName="cy" values="25;30;25" dur="0.8s" repeatCount="indefinite"/></circle>
                <circle cx="60" cy="50" r="20" fill="#3b82f6" stroke="#1e40af" strokeWidth="3" filter="url(#glow-step1)" className="animate-pulse"/>
                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                <text x="60" y="30" textAnchor="middle" fontSize="10" fill="#3b82f6" fontWeight="600">Source</text>
                <circle cx="150" cy="50" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                <circle cx="240" cy="50" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="240" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                <circle cx="60" cy="140" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="60" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
                <circle cx="240" cy="140" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="240" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
                <text x="240" y="165" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="600">Dest</text>
              </svg>
            </div>
          </div>

          {/* Step 2: Process First Node */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dequeue & Explore Neighbors</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Now we start the main BFS loop. We <strong>dequeue</strong> (remove) node 0 from the front of the queue. This node becomes our current processing node.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-emerald-600 dark:text-emerald-400">Step-by-Step:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-2">
                  <li>Check if node 0 is the destination (node 4) → <strong>No</strong></li>
                  <li>Find all neighbors of node 0 → Found: <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">1</code> and <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">3</code></li>
                  <li>For each unvisited neighbor, mark as visited and enqueue</li>
                  <li>Neighbors 1 and 3 are now in queue for future processing</li>
                </ol>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <p className="text-sm text-emerald-900 dark:text-emerald-100"><strong>💡 Why?</strong> By marking nodes as visited immediately, we prevent adding them to the queue multiple times, which would waste time and memory.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-sm mb-2 text-slate-900 dark:text-slate-100">State:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Current:</span>
                      <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">0</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Visited:</span>
                      <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">{'{0, 1, 3}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Queue:</span>
                      <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">[1, 3]</code>
                    </div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 300 200" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-step2"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <line x1="60" y1="50" x2="150" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/></line>
                <line x1="60" y1="50" x2="60" y2="140" stroke="#10b981" strokeWidth="3" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/></line>
                <line x1="150" y1="50" x2="240" y2="50" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="240" y1="50" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="60" y1="140" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <circle cx="60" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"><animate attributeName="r" values="20;22;20" dur="1s" repeatCount="indefinite"/></circle>
                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                <circle cx="150" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"><animate attributeName="r" values="20;22;20" dur="1s" repeatCount="indefinite"/></circle>
                <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                <circle cx="240" cy="50" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="240" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                <circle cx="60" cy="140" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"><animate attributeName="r" values="20;22;20" dur="1s" repeatCount="indefinite"/></circle>
                <text x="60" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
                <circle cx="240" cy="140" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="240" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
              </svg>
            </div>
          </div>

          {/* Step 3: Continue BFS */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Process Node 1, Discover Node 2</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Continue the BFS process. <strong>Dequeue node 1</strong> from the front of the queue (FIFO order). Node 1 becomes our current processing node.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-purple-600 dark:text-purple-400">Exploration Process:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-2">
                  <li>Check if node 1 is the destination → <strong>No</strong></li>
                  <li>Get neighbors of node 1 → Found: <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">0</code> and <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">2</code></li>
                  <li>Node 0 is already visited → <strong>Skip</strong> (prevents cycles)</li>
                  <li>Node 2 is new → Mark as visited and add to queue</li>
                </ol>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <p className="text-sm text-purple-900 dark:text-purple-100"><strong>💡 Pattern:</strong> BFS explores layer by layer. We're now on the second layer of nodes from the source, discovering node 2.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="font-semibold text-sm mb-2 text-slate-900 dark:text-slate-100">State:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Current:</span>
                      <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">1</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Visited:</span>
                      <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">{'{0, 1, 3, 2}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 dark:text-slate-400">Queue:</span>
                      <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">[3, 2]</code>
                    </div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 300 200" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-step3"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <line x1="60" y1="50" x2="150" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                <line x1="60" y1="50" x2="60" y2="140" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                <line x1="150" y1="50" x2="240" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/></line>
                <line x1="240" y1="50" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <line x1="60" y1="140" x2="240" y2="140" stroke="#cbd5e1" strokeWidth="2" opacity="0.4"/>
                <circle cx="60" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                <circle cx="150" cy="25" r="4" fill="#3b82f6" opacity="0.9"><animate attributeName="cy" values="25;30;25" dur="0.8s" repeatCount="indefinite"/></circle>
                <circle cx="150" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3" filter="url(#glow-step3)" className="animate-pulse"/>
                <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                <circle cx="240" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"><animate attributeName="r" values="20;22;20" dur="1s" repeatCount="indefinite"/></circle>
                <text x="240" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                <circle cx="60" cy="140" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="60" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
                <circle cx="240" cy="140" r="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                <text x="240" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
              </svg>
            </div>
          </div>

          {/* Step 4: Find Destination */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">4</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Process Node 3, Find Destination!</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  This is where we find the path! <strong>Dequeue node 3</strong> and continue the exploration process.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-green-600 dark:text-green-400">Discovery Moment:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 ml-2">
                  <li>Check if node 3 is the destination → <strong>No</strong></li>
                  <li>Get neighbors of node 3 → Found: <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">0</code> and <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">4</code></li>
                  <li>Node 0 is already visited → <strong>Skip</strong></li>
                  <li>Node 4 is new → Mark as visited and add to queue</li>
                  <li>Continue BFS: Dequeue node 4 from queue</li>
                  <li>Check if node 4 is destination → <strong className="text-green-600 dark:text-green-400">YES! ✓</strong></li>
                  <li>Path exists! Return <code className="px-1 py-0.5 bg-green-200 dark:bg-green-700 rounded text-xs font-bold">true</code></li>
                </ol>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <p className="text-sm text-purple-900 dark:text-purple-100 mb-2"><strong>📍 After Dequeuing Node 3:</strong></p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400">Current:</span>
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">3</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400">Visited:</span>
                      <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">{'{0, 1, 3, 2}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400">Queue:</span>
                      <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">[2]</code>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                  <p className="text-sm text-orange-900 dark:text-orange-100 mb-2"><strong>📍 After Adding Node 4:</strong></p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 dark:text-orange-400">Visited:</span>
                      <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded">{'{0, 1, 3, 2, 4}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 dark:text-orange-400">Queue:</span>
                      <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">[2, 4]</code>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <p className="text-sm text-green-900 dark:text-green-100 mb-2"><strong>🎉 After Dequeuing Node 4:</strong></p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 dark:text-green-400">Current:</span>
                      <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-bold">4</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 dark:text-green-400">Is Destination?</span>
                      <code className="px-1.5 py-0.5 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded font-bold">YES! ✓</code>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="font-semibold text-sm mb-2 text-green-900 dark:text-green-100">✅ Final Result:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 dark:text-green-400">Path Found:</span>
                      <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-bold">0 → 1/3 → 4</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 dark:text-green-400">All Visited Nodes:</span>
                      <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">{'{0, 1, 3, 2, 4}'}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 dark:text-green-400">Return Value:</span>
                      <code className="px-2 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded font-bold text-base">true</code>
                    </div>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 300 200" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-step4"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <line x1="60" y1="50" x2="150" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                <line x1="60" y1="50" x2="60" y2="140" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                <line x1="150" y1="50" x2="240" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                <line x1="240" y1="50" x2="240" y2="140" stroke="#10b981" strokeWidth="3" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/></line>
                <line x1="60" y1="140" x2="240" y2="140" stroke="#10b981" strokeWidth="3" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/></line>
                <circle cx="60" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                <circle cx="150" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                <circle cx="240" cy="50" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="240" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                <circle cx="60" cy="140" r="20" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="60" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
                <circle cx="240" cy="115" r="5" fill="#16a34a" opacity="0.9"><animate attributeName="cy" values="115;120;115" dur="0.6s" repeatCount="indefinite"/></circle>
                <circle cx="240" cy="140" r="20" fill="#16a34a" stroke="#15803d" strokeWidth="4" filter="url(#glow-step4)" className="animate-pulse"><animate attributeName="r" values="20;23;20" dur="1s" repeatCount="indefinite"/></circle>
                <text x="240" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
                <text x="240" y="165" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="600">Found!</text>
              </svg>
            </div>
          </div>

          {/* Key Insights */}
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <Lightbulb className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Level-by-level:</strong> BFS explores all neighbors at the current level before moving deeper</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Visited tracking:</strong> Prevents revisiting nodes and handles cycles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Queue order:</strong> FIFO ensures we process nodes in the order they're discovered</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Early exit:</strong> As soon as destination is found, we return true</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Complexity & Code */}
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader><CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">⏱️ Time: O(V + E)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visit each vertex once and traverse all edges</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space: O(V)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visited set and queue store up to V vertices</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete BFS Solution"
        language="javascript"
        code={`function validPath(n, edges, source, destination) {
  // Build adjacency list
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // BFS
  const visited = new Set();
  const queue = [source];
  visited.add(source);

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === destination) return true;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}`}
      />
    </div>
  );
}

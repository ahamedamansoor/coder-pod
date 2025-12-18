'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code, Route
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function AllPathsSourceTarget() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Graph: [[1,2],[3],[3],[]]
  // Node 0 -> [1,2], Node 1 -> [3], Node 2 -> [3], Node 3 -> []
  const graph = [[1,2],[3],[3],[]];

  const steps = [
    { step: 1, description: '🎯 Problem: Find all paths from source (0) to target (3)', currentLine: 1, node: null, path: [], allPaths: [], exploring: [], inDFS: false },
    { step: 2, description: '📋 Initialize: Empty result array for all paths', currentLine: 2, node: null, path: [], allPaths: [], exploring: [], inDFS: false },
    { step: 3, description: '🚀 Start DFS from source node 0', currentLine: 3, node: 0, path: [0], allPaths: [], exploring: [0], inDFS: true },
    { step: 4, description: '🔍 Node 0: Check if reached target? NO (0 ≠ 3)', currentLine: 5, node: 0, path: [0], allPaths: [], exploring: [0], inDFS: true },
    { step: 5, description: '👀 Node 0: Neighbors are [1, 2]', currentLine: 6, node: 0, path: [0], allPaths: [], exploring: [0], inDFS: true },
    { step: 6, description: '➡️ Explore neighbor 1 from node 0', currentLine: 7, node: 1, path: [0, 1], allPaths: [], exploring: [0, 1], inDFS: true },
    { step: 7, description: '🔍 Node 1: Check if reached target? NO (1 ≠ 3)', currentLine: 5, node: 1, path: [0, 1], allPaths: [], exploring: [0, 1], inDFS: true },
    { step: 8, description: '👀 Node 1: Neighbors are [3]', currentLine: 6, node: 1, path: [0, 1], allPaths: [], exploring: [0, 1], inDFS: true },
    { step: 9, description: '➡️ Explore neighbor 3 from node 1', currentLine: 7, node: 3, path: [0, 1, 3], allPaths: [], exploring: [0, 1, 3], inDFS: true },
    { step: 10, description: '✅ Node 3: Reached TARGET! Path complete', currentLine: 5, node: 3, path: [0, 1, 3], allPaths: [], exploring: [0, 1, 3], inDFS: true },
    { step: 11, description: '📝 Save path: [0, 1, 3]', currentLine: 8, node: 3, path: [0, 1, 3], allPaths: [[0, 1, 3]], exploring: [0, 1, 3], inDFS: true },
    { step: 12, description: '🔙 Backtrack from node 3 to node 1', currentLine: 7, node: 1, path: [0, 1], allPaths: [[0, 1, 3]], exploring: [0, 1], inDFS: true },
    { step: 13, description: '✅ Node 1: All neighbors explored', currentLine: 6, node: 1, path: [0, 1], allPaths: [[0, 1, 3]], exploring: [0, 1], inDFS: true },
    { step: 14, description: '🔙 Backtrack from node 1 to node 0', currentLine: 7, node: 0, path: [0], allPaths: [[0, 1, 3]], exploring: [0], inDFS: true },
    { step: 15, description: '➡️ Explore neighbor 2 from node 0', currentLine: 7, node: 2, path: [0, 2], allPaths: [[0, 1, 3]], exploring: [0, 2], inDFS: true },
    { step: 16, description: '🔍 Node 2: Check if reached target? NO (2 ≠ 3)', currentLine: 5, node: 2, path: [0, 2], allPaths: [[0, 1, 3]], exploring: [0, 2], inDFS: true },
    { step: 17, description: '👀 Node 2: Neighbors are [3]', currentLine: 6, node: 2, path: [0, 2], allPaths: [[0, 1, 3]], exploring: [0, 2], inDFS: true },
    { step: 18, description: '➡️ Explore neighbor 3 from node 2', currentLine: 7, node: 3, path: [0, 2, 3], allPaths: [[0, 1, 3]], exploring: [0, 2, 3], inDFS: true },
    { step: 19, description: '✅ Node 3: Reached TARGET! Path complete', currentLine: 5, node: 3, path: [0, 2, 3], allPaths: [[0, 1, 3]], exploring: [0, 2, 3], inDFS: true },
    { step: 20, description: '📝 Save path: [0, 2, 3]', currentLine: 8, node: 3, path: [0, 2, 3], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [0, 2, 3], inDFS: true },
    { step: 21, description: '🔙 Backtrack from node 3 to node 2', currentLine: 7, node: 2, path: [0, 2], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [0, 2], inDFS: true },
    { step: 22, description: '✅ Node 2: All neighbors explored', currentLine: 6, node: 2, path: [0, 2], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [0, 2], inDFS: true },
    { step: 23, description: '🔙 Backtrack from node 2 to node 0', currentLine: 7, node: 0, path: [0], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [0], inDFS: true },
    { step: 24, description: '✅ Node 0: All neighbors explored', currentLine: 6, node: 0, path: [0], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [0], inDFS: true },
    { step: 25, description: '🎯 Complete! Found all paths', currentLine: 9, node: null, path: [], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [], inDFS: false },
    { step: 26, description: '✅ Return: 2 paths found', currentLine: 9, node: null, path: [], allPaths: [[0, 1, 3], [0, 2, 3]], exploring: [], inDFS: false }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const pathStr = stepData.path.length > 0 ? `[${stepData.path.join(', ')}]` : '[]';
    const pathsCount = stepData.allPaths.length;
    
    return [
      { line: 1, code: 'function allPathsSourceTarget(graph) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  const result = [];', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `result has ${pathsCount} paths` : '' },
      { line: 3, code: '  const path = [0]; // Start from source', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `path = ${pathStr}` : '' },
      { line: 4, code: '  dfs(0, graph, path, result);', active: stepData.currentLine === 3 && stepData.step === 3, indent: 1 },
      { line: 5, code: '  return result;', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 ? `return ${pathsCount} paths` : '' },
      { line: 6, code: '}', active: false, indent: 0 },
      { line: 7, code: '', active: false, indent: 0 },
      { line: 8, code: 'function dfs(node, graph, path, result) {', active: stepData.inDFS, indent: 0, values: stepData.inDFS && stepData.node !== null ? `dfs(${stepData.node})` : '' },
      { line: 9, code: '  if (node === graph.length - 1) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 && stepData.node !== null ? `${stepData.node} === ${graph.length - 1}?` : '' },
      { line: 10, code: '    result.push([...path]); // Found path!', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `save ${pathStr}` : '' },
      { line: 11, code: '    return;', active: stepData.currentLine === 8, indent: 2 },
      { line: 12, code: '  }', active: false, indent: 1 },
      { line: 13, code: '  for (const neighbor of graph[node]) {', active: stepData.currentLine === 6 || stepData.currentLine === 7, indent: 1, values: stepData.currentLine === 6 && stepData.node !== null ? `neighbors = [${graph[stepData.node].join(', ')}]` : '' },
      { line: 14, code: '    path.push(neighbor);', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `add to path` : '' },
      { line: 15, code: '    dfs(neighbor, graph, path, result);', active: stepData.currentLine === 7, indent: 2 },
      { line: 16, code: '    path.pop(); // Backtrack', active: stepData.currentLine === 7, indent: 2, values: stepData.description.includes('Backtrack') ? 'backtracking' : '' },
      { line: 17, code: '  }', active: false, indent: 1 },
      { line: 18, code: '}', active: false, indent: 0 },
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

  const getNodeColor = (nodeIndex: number, stepData: typeof steps[0]) => {
    if (stepData.node === nodeIndex) return '#3b82f6'; // blue - current
    if ((stepData.exploring as number[]).includes(nodeIndex)) return '#f59e0b'; // orange - in path
    if (nodeIndex === 0) return '#10b981'; // green - source
    if (nodeIndex === 3) return '#ef4444'; // red - target
    return '#94a3b8'; // gray - unvisited
  };

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={Route}
        category="DSA · Graphs"
        title="All Paths from Source to Target"
        description="Find all possible paths from source to target using backtracking DFS"
        colorTheme="blue"
        badges={[
          { label: 'DFS + Backtracking', variant: 'default' },
          { label: 'Time: O(2^N × N)', variant: 'success' },
          { label: 'Space: O(N)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-blue-200 dark:border-blue-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn path finding with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What is All Paths from Source to Target?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given a <strong>Directed Acyclic Graph (DAG)</strong> with <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">n</code> nodes labeled from <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">0</code> to <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">n-1</code>, find <strong>all possible paths</strong> from node <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">0</code> (source) to node <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">n-1</code> (target).
            </p>
            
            <div className="grid md:grid-cols-3 gap-3">
              {/* Graph Representation */}
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">GRAPH (ADJACENCY LIST)</div>
                <div className="font-mono text-xs space-y-1">
                  <div><span className="text-green-600 font-bold">0</span> → [<span className="text-blue-600">1, 2</span>]</div>
                  <div><span className="text-blue-600 font-bold">1</span> → [<span className="text-blue-600">3</span>]</div>
                  <div><span className="text-blue-600 font-bold">2</span> → [<span className="text-blue-600">3</span>]</div>
                  <div><span className="text-red-600 font-bold">3</span> → []</div>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Source (0)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Target (3)</span>
                  </div>
                </div>
              </div>

              {/* Visual Graph */}
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-2">GRAPH VISUALIZATION</div>
                <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48">
                  {/* Edges */}
                  <defs>
                    <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6"/>
                    </marker>
                  </defs>
                  <line x1="50" y1="50" x2="50" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
                  <line x1="50" y1="50" x2="140" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
                  <line x1="50" y1="130" x2="90" y2="160" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
                  <line x1="150" y1="130" x2="110" y2="160" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
                  
                  {/* Nodes */}
                  <circle cx="50" cy="50" r="18" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                  <text x="50" y="50" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" dy="4">0</text>
                  
                  <circle cx="50" cy="130" r="18" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                  <text x="50" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" dy="4">1</text>
                  
                  <circle cx="150" cy="130" r="18" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                  <text x="150" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" dy="4">2</text>
                  
                  <circle cx="100" cy="180" r="18" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                  <text x="100" y="180" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" dy="4">3</text>
                </svg>
              </div>

              {/* Output */}
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-2">ALL PATHS OUTPUT</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Paths found</div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">[0, 1, 3]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">[0, 2, 3]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Path Examples */}
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <h5 className="text-sm font-semibold text-purple-900 dark:text-purple-100">Path 1: [0, 1, 3]</h5>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <svg viewBox="0 0 200 140" className="w-full h-auto max-h-32">
                    <defs>
                      <marker id="arrowpurple1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#a855f7"/>
                      </marker>
                    </defs>
                    <line x1="50" y1="30" x2="50" y2="70" stroke="#a855f7" strokeWidth="4" markerEnd="url(#arrowpurple1)"/>
                    <line x1="50" y1="100" x2="95" y2="100" stroke="#a855f7" strokeWidth="4" markerEnd="url(#arrowpurple1)"/>
                    
                    <circle cx="50" cy="20" r="13" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                    <text x="50" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">0</text>
                    
                    <circle cx="50" cy="90" r="13" fill="#a855f7" stroke="#9333ea" strokeWidth="2"/>
                    <text x="50" y="90" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">1</text>
                    
                    <circle cx="120" cy="100" r="13" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                    <text x="120" y="100" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">3</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Route: 0 → 1 → 3</p>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-300 dark:border-indigo-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <h5 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Path 2: [0, 2, 3]</h5>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <svg viewBox="0 0 200 140" className="w-full h-auto max-h-32">
                    <defs>
                      <marker id="arrowindigo" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#6366f1"/>
                      </marker>
                    </defs>
                    <line x1="60" y1="30" x2="110" y2="80" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrowindigo)"/>
                    <line x1="120" y1="100" x2="95" y2="100" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrowindigo)"/>
                    
                    <circle cx="50" cy="20" r="13" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                    <text x="50" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">0</text>
                    
                    <circle cx="120" cy="90" r="13" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
                    <text x="120" y="90" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">2</text>
                    
                    <circle cx="80" cy="100" r="13" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                    <text x="80" y="100" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" dy="4">3</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Route: 0 → 2 → 3</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Key Algorithm Strategy</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">1.</span><span><strong>DFS with Backtracking:</strong> Explore all paths by trying each possibility</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">2.</span><span><strong>Path Tracking:</strong> Maintain current path and save when target reached</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">3.</span><span><strong>Backtrack:</strong> Remove node from path after exploring all its paths</span></div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-blue-200 dark:border-blue-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Understanding path finding through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Path 1 Discovery */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Finding Path 1</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">
                Start DFS from node <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-medium">0</code>. 
                Explore neighbor 1, then from 1 explore neighbor 3. Reached target! 
                Save path <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-medium">[0, 1, 3]</code>. 
                <span className="font-semibold text-blue-600">Path 1 complete</span>
              </p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
              <defs>
                <marker id="arrow1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#a855f7"/>
                </marker>
              </defs>
              {/* Path 1 edges */}
              <line x1="100" y1="80" x2="100" y2="150" stroke="#a855f7" strokeWidth="4" markerEnd="url(#arrow1)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="100" y1="190" x2="190" y2="240" stroke="#a855f7" strokeWidth="4" markerEnd="url(#arrow1)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </line>
              
              {/* Other edges (faded) */}
              <line x1="110" y1="80" x2="280" y2="150" stroke="#cbd5e1" strokeWidth="2" opacity="0.3"/>
              <line x1="300" y1="180" x2="220" y2="230" stroke="#cbd5e1" strokeWidth="2" opacity="0.3"/>
              
              {/* Nodes */}
              <circle cx="100" cy="60" r="30" fill="#10b981" stroke="#059669" strokeWidth="4"/>
              <text x="100" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="100" y="70" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">0</text>
              
              <circle cx="100" cy="180" r="30" fill="#a855f7" stroke="#9333ea" strokeWidth="4"/>
              <text x="100" y="175" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="100" y="190" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
              
              <circle cx="300" cy="170" r="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2"/>
              <text x="300" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="300" y="180" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
              
              <circle cx="200" cy="260" r="30" fill="#ef4444" stroke="#dc2626" strokeWidth="4"/>
              <text x="200" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="200" y="270" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">3</text>
              
              <rect x="5" y="5" width="120" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="10" y="20" fontSize="12" fill="#a855f7" fontWeight="600">Path 1: [0→1→3]</text>
            </svg>
          </div>

          {/* Path 2 Discovery */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Finding Path 2</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">
                Backtrack to node 0. Explore neighbor 2, then from 2 explore neighbor 3. Reached target! 
                Save path <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded font-medium">[0, 2, 3]</code>. 
                All neighbors of 0 explored. <span className="font-semibold text-blue-600">✅ 2 paths found</span>
              </p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
              <defs>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#6366f1"/>
                </marker>
              </defs>
              {/* Path 2 edges */}
              <line x1="110" y1="80" x2="280" y2="150" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrow2)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="290" y1="190" x2="220" y2="230" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrow2)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </line>
              
              {/* Other edges (faded) */}
              <line x1="100" y1="80" x2="100" y2="150" stroke="#cbd5e1" strokeWidth="2" opacity="0.3"/>
              <line x1="100" y1="180" x2="190" y2="230" stroke="#cbd5e1" strokeWidth="2" opacity="0.3"/>
              
              {/* Nodes */}
              <circle cx="100" cy="60" r="30" fill="#10b981" stroke="#059669" strokeWidth="4"/>
              <text x="100" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="100" y="70" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">0</text>
              
              <circle cx="100" cy="170" r="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2"/>
              <text x="100" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="100" y="180" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
              
              <circle cx="300" cy="170" r="30" fill="#6366f1" stroke="#4f46e5" strokeWidth="4"/>
              <text x="300" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="300" y="180" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
              
              <circle cx="200" cy="260" r="30" fill="#ef4444" stroke="#dc2626" strokeWidth="4"/>
              <text x="200" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
              <text x="200" y="270" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">3</text>
              
              <rect x="5" y="5" width="120" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="10" y="20" fontSize="12" fill="#6366f1" fontWeight="600">Path 2: [0→2→3]</text>
            </svg>
          </div>

          {/* Key Insights */}
          <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Backtracking:</strong> After exploring a path, remove the node to try other paths</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>DFS Exploration:</strong> Explore each neighbor recursively until reaching target</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Path Storage:</strong> When target reached, save a copy of the current path</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>DAG Property:</strong> No cycles means no need for visited array</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-blue-200 dark:border-blue-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Interactive Path Finding Animation
          </CardTitle>
          <CardDescription>Watch DFS with backtracking find all paths</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
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
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as typeof animationSpeed)} disabled={isAnimating} className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded border border-blue-300 dark:border-blue-700">
              <span className="text-xs font-medium text-blue-900 dark:text-blue-100">{currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">allPaths.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Current Node:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].node ?? '-'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Path:</span><span className="font-semibold text-orange-600 dark:text-orange-400">[{steps[currentStep].path.join(', ')}]</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Paths Found:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].allPaths.length}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].step >= 25 ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700' : 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-300 dark:border-indigo-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].step >= 25 ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                    {steps[currentStep].step >= 25 ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].step >= 25 ? 'text-blue-900 dark:text-blue-100' : 'text-indigo-900 dark:text-indigo-100'}`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].step >= 25 ? 'text-blue-900 dark:text-blue-50' : 'text-indigo-900 dark:text-indigo-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Graph Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Graph Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500"></div><span className="text-slate-600 dark:text-slate-400">Source</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-red-500"></div><span className="text-slate-600 dark:text-slate-400">Target</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-amber-500"></div><span className="text-slate-600 dark:text-slate-400">In Path</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full max-w-lg h-auto">
                  {/* Edges */}
                  <defs>
                    <marker id="arrowgraph" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6"/>
                    </marker>
                  </defs>
                  <line x1="100" y1="80" x2="100" y2="150" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowgraph)" opacity="0.6"/>
                  <line x1="110" y1="80" x2="280" y2="150" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowgraph)" opacity="0.6"/>
                  <line x1="100" y1="190" x2="190" y2="240" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowgraph)" opacity="0.6"/>
                  <line x1="290" y1="190" x2="220" y2="230" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowgraph)" opacity="0.6"/>
                  
                  {/* Nodes */}
                  {[
                    { id: 0, x: 100, y: 60 },
                    { id: 1, x: 100, y: 180 },
                    { id: 2, x: 300, y: 180 },
                    { id: 3, x: 200, y: 260 }
                  ].map((node) => {
                    const color = getNodeColor(node.id, steps[currentStep]);
                    return (
                      <g key={node.id}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="35"
                          fill={color}
                          stroke={color === '#3b82f6' ? '#2563eb' : color === '#f59e0b' ? '#d97706' : color === '#10b981' ? '#059669' : color === '#ef4444' ? '#dc2626' : '#64748b'}
                          strokeWidth="4"
                        />
                        <text
                          x={node.x}
                          y={node.y}
                          textAnchor="middle"
                          fill="white"
                          fontSize="24"
                          fontWeight="bold"
                        >
                          {node.id}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Code Implementation */}
      <Card className="border-blue-200 dark:border-blue-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Complete Implementation
          </CardTitle>
          <CardDescription>JavaScript implementation with backtracking</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`/**
 * Find all paths from source (0) to target (n-1) in a DAG
 * @param {number[][]} graph - Adjacency list representation
 * @return {number[][]} - All paths from source to target
 * 
 * Time Complexity: O(2^N × N) - In worst case, exponential paths
 * Space Complexity: O(N) - Recursion stack and path array
 */
function allPathsSourceTarget(graph) {
  const result = [];
  const path = [0]; // Start from source node 0
  const target = graph.length - 1;
  
  function dfs(node) {
    // Base case: reached target
    if (node === target) {
      result.push([...path]); // Save a copy of current path
      return;
    }
    
    // Explore all neighbors
    for (const neighbor of graph[node]) {
      path.push(neighbor);    // Add neighbor to path
      dfs(neighbor);          // Recursive DFS
      path.pop();             // Backtrack: remove neighbor
    }
  }
  
  dfs(0); // Start DFS from source
  return result;
}

// Example usage:
const graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph));
// Output: [[0,1,3], [0,2,3]]

/**
 * Why Backtracking?
 * - We need to explore ALL possible paths
 * - After exploring one path, we "undo" (pop) to try another
 * - This ensures we find every valid path from source to target
 * 
 * Why No Visited Array?
 * - Graph is a DAG (Directed Acyclic Graph)
 * - No cycles means we won't revisit nodes in the same path
 * - Visited array is only needed for graphs with cycles
 */`}
          />
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Practice Problems
          </CardTitle>
          <CardDescription>Master path finding with these problems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'All Paths From Source to Target', difficulty: 'Medium', link: 'https://leetcode.com/problems/all-paths-from-source-to-target/' },
              { name: 'Path With Maximum Probability', difficulty: 'Medium', link: 'https://leetcode.com/problems/path-with-maximum-probability/' },
              { name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
              { name: 'Find the City With Smallest Number of Neighbors', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/' },
            ].map((problem, index) => (
              <a
                key={index}
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {problem.name}
                    </h4>
                    <span className={`text-xs font-medium ${
                      problem.difficulty === 'Easy' ? 'text-green-600' :
                      problem.difficulty === 'Medium' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

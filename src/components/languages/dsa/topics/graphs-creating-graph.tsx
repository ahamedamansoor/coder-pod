'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Grid3x3, List, Lightbulb
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Badge } from '@/components/ui/badge';

type GraphType = 'adjacency-list' | 'adjacency-matrix';

export default function CreatingGraph() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [graphType, setGraphType] = useState<GraphType>('adjacency-list');

  // Graph data: Creating a simple directed graph
  // Edges: 0→1, 0→2, 1→2, 2→3, 3→1
  const nodes = [0, 1, 2, 3];
  const edges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 1 }
  ];

  const adjacencyListSteps = [
    {
      step: 1,
      description: '📋 Initialize: Creating empty adjacency list with Map()',
      action: 'init',
      currentLine: 1,
      graph: new Map(),
      currentNode: null,
      currentEdge: null,
      addedNodes: [],
      addedEdges: []
    },
    {
      step: 2,
      description: '📍 Step 1: Add node 0 to adjacency list',
      action: 'add-node',
      currentLine: 2,
      graph: new Map([[0, []]]),
      currentNode: 0,
      currentEdge: null,
      addedNodes: [0],
      addedEdges: []
    },
    {
      step: 3,
      description: '📍 Step 2: Add node 1 to adjacency list',
      action: 'add-node',
      currentLine: 2,
      graph: new Map([[0, []], [1, []]]),
      currentNode: 1,
      currentEdge: null,
      addedNodes: [0, 1],
      addedEdges: []
    },
    {
      step: 4,
      description: '📍 Step 3: Add node 2 to adjacency list',
      action: 'add-node',
      currentLine: 2,
      graph: new Map([[0, []], [1, []], [2, []]]),
      currentNode: 2,
      currentEdge: null,
      addedNodes: [0, 1, 2],
      addedEdges: []
    },
    {
      step: 5,
      description: '📍 Step 4: Add node 3 to adjacency list',
      action: 'add-node',
      currentLine: 2,
      graph: new Map([[0, []], [1, []], [2, []], [3, []]]),
      currentNode: 3,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: []
    },
    {
      step: 6,
      description: '✅ All nodes added! Now let\'s add edges (connections)',
      action: 'nodes-complete',
      currentLine: 3,
      graph: new Map([[0, []], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: []
    },
    {
      step: 7,
      description: '➡️ Adding edge: 0 → 1',
      action: 'add-edge',
      currentLine: 4,
      graph: new Map([[0, []], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: { from: 0, to: 1 },
      addedNodes: [0, 1, 2, 3],
      addedEdges: []
    },
    {
      step: 8,
      description: '✅ Edge added: adjacencyList[0] = [1]',
      action: 'edge-complete',
      currentLine: 4,
      graph: new Map([[0, [1]], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }]
    },
    {
      step: 9,
      description: '➡️ Adding edge: 0 → 2',
      action: 'add-edge',
      currentLine: 4,
      graph: new Map([[0, [1]], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: { from: 0, to: 2 },
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }]
    },
    {
      step: 10,
      description: '✅ Edge added: adjacencyList[0] = [1, 2]',
      action: 'edge-complete',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }]
    },
    {
      step: 11,
      description: '➡️ Adding edge: 1 → 2',
      action: 'add-edge',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, []], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: { from: 1, to: 2 },
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }]
    },
    {
      step: 12,
      description: '✅ Edge added: adjacencyList[1] = [2]',
      action: 'edge-complete',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }]
    },
    {
      step: 13,
      description: '➡️ Adding edge: 2 → 3',
      action: 'add-edge',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, []], [3, []]]),
      currentNode: null,
      currentEdge: { from: 2, to: 3 },
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }]
    },
    {
      step: 14,
      description: '✅ Edge added: adjacencyList[2] = [3]',
      action: 'edge-complete',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, [3]], [3, []]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }, { from: 2, to: 3 }]
    },
    {
      step: 15,
      description: '➡️ Adding edge: 3 → 1',
      action: 'add-edge',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, [3]], [3, []]]),
      currentNode: null,
      currentEdge: { from: 3, to: 1 },
      addedNodes: [0, 1, 2, 3],
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }, { from: 2, to: 3 }]
    },
    {
      step: 16,
      description: '✅ Edge added: adjacencyList[3] = [1]',
      action: 'edge-complete',
      currentLine: 4,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, [3]], [3, [1]]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: edges
    },
    {
      step: 17,
      description: '🎯 Graph complete! Adjacency List representation ready',
      action: 'complete',
      currentLine: 5,
      graph: new Map([[0, [1, 2]], [1, [2]], [2, [3]], [3, [1]]]),
      currentNode: null,
      currentEdge: null,
      addedNodes: [0, 1, 2, 3],
      addedEdges: edges
    }
  ];

  const adjacencyMatrixSteps = [
    {
      step: 1,
      description: '📋 Initialize: Creating 4x4 matrix filled with 0s',
      action: 'init',
      currentLine: 1,
      matrix: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: null,
      addedEdges: []
    },
    {
      step: 2,
      description: '➡️ Adding edge: 0 → 1 (Setting matrix[0][1] = 1)',
      action: 'add-edge',
      currentLine: 2,
      matrix: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: { from: 0, to: 1 },
      addedEdges: []
    },
    {
      step: 3,
      description: '✅ matrix[0][1] = 1 (Edge 0→1 added)',
      action: 'edge-complete',
      currentLine: 2,
      matrix: [[0,1,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: null,
      addedEdges: [{ from: 0, to: 1 }]
    },
    {
      step: 4,
      description: '➡️ Adding edge: 0 → 2 (Setting matrix[0][2] = 1)',
      action: 'add-edge',
      currentLine: 2,
      matrix: [[0,1,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: { from: 0, to: 2 },
      addedEdges: [{ from: 0, to: 1 }]
    },
    {
      step: 5,
      description: '✅ matrix[0][2] = 1 (Edge 0→2 added)',
      action: 'edge-complete',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: null,
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }]
    },
    {
      step: 6,
      description: '➡️ Adding edge: 1 → 2 (Setting matrix[1][2] = 1)',
      action: 'add-edge',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: { from: 1, to: 2 },
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }]
    },
    {
      step: 7,
      description: '✅ matrix[1][2] = 1 (Edge 1→2 added)',
      action: 'edge-complete',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: null,
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }]
    },
    {
      step: 8,
      description: '➡️ Adding edge: 2 → 3 (Setting matrix[2][3] = 1)',
      action: 'add-edge',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,0], [0,0,0,0]],
      currentEdge: { from: 2, to: 3 },
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }]
    },
    {
      step: 9,
      description: '✅ matrix[2][3] = 1 (Edge 2→3 added)',
      action: 'edge-complete',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,1], [0,0,0,0]],
      currentEdge: null,
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }, { from: 2, to: 3 }]
    },
    {
      step: 10,
      description: '➡️ Adding edge: 3 → 1 (Setting matrix[3][1] = 1)',
      action: 'add-edge',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,1], [0,0,0,0]],
      currentEdge: { from: 3, to: 1 },
      addedEdges: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }, { from: 2, to: 3 }]
    },
    {
      step: 11,
      description: '✅ matrix[3][1] = 1 (Edge 3→1 added)',
      action: 'edge-complete',
      currentLine: 2,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,1], [0,1,0,0]],
      currentEdge: null,
      addedEdges: edges
    },
    {
      step: 12,
      description: '🎯 Graph complete! Adjacency Matrix representation ready',
      action: 'complete',
      currentLine: 3,
      matrix: [[0,1,1,0], [0,0,1,0], [0,0,0,1], [0,1,0,0]],
      currentEdge: null,
      addedEdges: edges
    }
  ];

  const steps = graphType === 'adjacency-list' ? adjacencyListSteps : adjacencyMatrixSteps;

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    if (graphType === 'adjacency-list') {
      const getGraphState = () => {
        if ('graph' in stepData && stepData.graph instanceof Map) {
          const entries = Array.from(stepData.graph.entries())
            .map(([k, v]) => `${k}: [${v.join(', ')}]`)
            .join(', ');
          return entries ? `{ ${entries} }` : '{}';
        }
        return '{}';
      };

      const getNodesAdded = () => {
        if ('addedNodes' in stepData && stepData.addedNodes.length > 0) {
          return `Nodes added: [${stepData.addedNodes.join(', ')}]`;
        }
        return '';
      };

      const getEdgeAction = () => {
        if ('currentEdge' in stepData && stepData.currentEdge) {
          const edge = stepData.currentEdge;
          return `Adding ${edge.from} → ${edge.to} to graph[${edge.from}]`;
        }
        if ('addedEdges' in stepData && stepData.addedEdges.length > 0 && stepData.action === 'edge-complete') {
          return `Total edges: ${stepData.addedEdges.length}`;
        }
        return '';
      };

      return [
        { line: 1, code: 'const graph = new Map();', active: stepData.currentLine === 1, indent: 0, values: stepData.action === 'init' ? 'graph = {}' : getGraphState() },
        { line: 2, code: '// Add all nodes first', active: false, indent: 0 },
        { line: 3, code: 'for (let node of nodes) {', active: stepData.currentLine === 2, indent: 0, values: getNodesAdded() },
        { line: 4, code: '  graph.set(node, []);', active: stepData.currentLine === 2, indent: 1, values: 'currentNode' in stepData && stepData.currentNode !== null ? `Setting graph[${stepData.currentNode}] = []` : '' },
        { line: 5, code: '}', active: false, indent: 0 },
        { line: 6, code: '', active: false, indent: 0 },
        { line: 7, code: '// Add edges (connections)', active: stepData.currentLine === 3, indent: 0, values: stepData.action === 'nodes-complete' ? 'All nodes ready, starting edges' : '' },
        { line: 8, code: 'function addEdge(from, to) {', active: stepData.currentLine === 4, indent: 0, values: getEdgeAction() },
        { line: 9, code: '  graph.get(from).push(to);', active: stepData.currentLine === 4, indent: 1, values: 'currentEdge' in stepData && 'graph' in stepData && stepData.currentEdge && stepData.graph instanceof Map && stepData.action === 'edge-complete' ? `graph[${stepData.currentEdge.from}] now = [${((stepData.graph.get(stepData.currentEdge.from) as number[]) || []).join(', ')}]` : '' },
        { line: 10, code: '}', active: false, indent: 0 },
        { line: 11, code: '', active: false, indent: 0 },
        { line: 12, code: 'return graph;', active: stepData.currentLine === 5, indent: 0, values: stepData.action === 'complete' ? `Final: ${getGraphState()}` : '' }
      ];
    } else {
      const getMatrixState = () => {
        if ('matrix' in stepData && Array.isArray(stepData.matrix)) {
          return stepData.matrix.map(row => `[${row.join(', ')}]`).join(', ');
        }
        return '';
      };

      const getEdgeCount = () => {
        if ('addedEdges' in stepData) {
          return `Edges added: ${stepData.addedEdges.length}/5`;
        }
        return '';
      };

      return [
        { line: 1, code: 'const n = 4; // number of nodes', active: stepData.currentLine === 1, indent: 0, values: 'n = 4' },
        { line: 2, code: 'const matrix = Array(n).fill(0)', active: stepData.currentLine === 1, indent: 0, values: stepData.action === 'init' ? 'Creating 4×4 matrix' : '' },
        { line: 3, code: '  .map(() => Array(n).fill(0));', active: stepData.currentLine === 1, indent: 0, values: stepData.action === 'init' ? 'All cells = 0' : '' },
        { line: 4, code: '', active: false, indent: 0 },
        { line: 5, code: '// Add edges by setting matrix[i][j] = 1', active: stepData.currentLine === 2, indent: 0, values: getEdgeCount() },
        { line: 6, code: 'function addEdge(from, to) {', active: stepData.currentLine === 2, indent: 0, values: 'currentEdge' in stepData && stepData.currentEdge ? `Setting matrix[${stepData.currentEdge.from}][${stepData.currentEdge.to}] = 1` : '' },
        { line: 7, code: '  matrix[from][to] = 1;', active: stepData.currentLine === 2, indent: 1, values: 'currentEdge' in stepData && stepData.currentEdge && stepData.action === 'edge-complete' ? `Edge ${stepData.currentEdge.from}→${stepData.currentEdge.to} added` : '' },
        { line: 8, code: '}', active: false, indent: 0 },
        { line: 9, code: '', active: false, indent: 0 },
        { line: 10, code: 'return matrix;', active: stepData.currentLine === 3, indent: 0, values: stepData.action === 'complete' ? 'Matrix complete!' : '' }
      ];
    }
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
        icon={Network}
        category="DSA · Graphs"
        title="Creating a Graph"
        description="Learn how to represent graphs using Adjacency List and Adjacency Matrix with step-by-step visualization"
        colorTheme="rose"
        badges={[
          { label: 'Adjacency List', variant: 'default' },
          { label: 'Adjacency Matrix', variant: 'default' },
          { label: 'Fundamental', variant: 'success' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600" />
            Understanding Graph Representation
          </CardTitle>
          <CardDescription>Learn the two most common ways to store graph data structures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is a Graph? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              What is a Graph?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                A <strong>graph</strong> is a data structure consisting of <strong>nodes (vertices)</strong> connected by <strong>edges</strong>. 
                It's used to represent relationships, networks, and connections.
              </p>
              
              {/* Example Graph Visualization */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">EXAMPLE GRAPH</div>
                <div className="flex items-center justify-center">
                  <svg width="300" height="200" viewBox="0 0 300 200" className="max-w-full">
                    {/* Nodes */}
                    <circle cx="50" cy="50" r="20" fill="#f43f5e" className="opacity-80" />
                    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">0</text>
                    
                    <circle cx="250" cy="50" r="20" fill="#f43f5e" className="opacity-80" />
                    <text x="250" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
                    
                    <circle cx="250" cy="150" r="20" fill="#f43f5e" className="opacity-80" />
                    <text x="250" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
                    
                    <circle cx="50" cy="150" r="20" fill="#f43f5e" className="opacity-80" />
                    <text x="50" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">3</text>
                    
                    {/* Edges */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
                      </marker>
                    </defs>
                    
                    <line x1="70" y1="50" x2="230" y2="50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="60" y1="65" x2="240" y2="140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="240" y1="65" x2="240" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="230" y1="150" x2="70" y2="150" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="50" y1="130" x2="240" y2="65" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  </svg>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-3 text-center">
                  A directed graph with 4 nodes and 5 edges
                </div>
              </div>
            </div>
          </div>

          {/* Two Representations */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Two Ways to Store a Graph
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Adjacency List */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-rose-500">
                <div className="flex items-start gap-3">
                  <List className="w-5 h-5 text-rose-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-rose-700 dark:text-rose-300 mb-2">1. Adjacency List</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Store each node with its list of neighbors
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded font-mono text-xs">
                      0 → [1, 2]<br/>
                      1 → [2]<br/>
                      2 → [3]<br/>
                      3 → [1]
                    </div>
                    <div className="mt-3 space-y-1">
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-xs">Space: O(V+E)</Badge>
                      <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs ml-2">Fast lookup</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adjacency Matrix */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-indigo-500">
                <div className="flex items-start gap-3">
                  <Grid3x3 className="w-5 h-5 text-indigo-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">2. Adjacency Matrix</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Use a 2D array where matrix[i][j] = 1 if edge exists
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded font-mono text-xs">
                      [0,1,1,0]<br/>
                      [0,0,1,0]<br/>
                      [0,0,0,1]<br/>
                      [0,1,0,0]
                    </div>
                    <div className="mt-3 space-y-1">
                      <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 text-xs">Space: O(V²)</Badge>
                      <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 text-xs ml-2">O(1) edge check</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use Which */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
              <ArrowRight className="w-5 h-5" />
              When to Use Each Representation
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Use Adjacency List when:</div>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Graph is sparse (few edges)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    You need to iterate over neighbors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Memory is limited
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Use Adjacency Matrix when:</div>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Graph is dense (many edges)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Need fast edge existence check
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Working with weighted graphs
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
                <span><strong>Directed vs Undirected:</strong> Edges can have direction (→) or be bidirectional (↔)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Space Trade-off:</strong> Adjacency List uses less space for sparse graphs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Time Trade-off:</strong> Matrix gives O(1) edge lookup, List gives O(degree)</span>
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
              <Network className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            Interactive Graph Creation
          </CardTitle>
          <CardDescription>Watch how we build the graph step by step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Graph Type Toggle */}
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Choose Representation:</span>
            <Button
              onClick={() => { setGraphType('adjacency-list'); setCurrentStep(0); setIsAnimating(false); }}
              variant={graphType === 'adjacency-list' ? 'default' : 'outline'}
              className={graphType === 'adjacency-list' ? 'bg-gradient-to-r from-rose-600 to-pink-600' : ''}
            >
              <List className="w-4 h-4 mr-2" />
              Adjacency List
            </Button>
            <Button
              onClick={() => { setGraphType('adjacency-matrix'); setCurrentStep(0); setIsAnimating(false); }}
              variant={graphType === 'adjacency-matrix' ? 'default' : 'outline'}
              className={graphType === 'adjacency-matrix' ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : ''}
            >
              <Grid3x3 className="w-4 h-4 mr-2" />
              Adjacency Matrix
            </Button>
          </div>

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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">graph-creation.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Building</span>
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
                          {lineData.values}
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
                      {steps[currentStep].action === 'add-node' && '📍 Adding Node'}
                      {steps[currentStep].action === 'add-edge' && '➡️ Adding Edge'}
                      {steps[currentStep].action === 'edge-complete' && '✅ Edge Added'}
                      {steps[currentStep].action === 'nodes-complete' && '✅ Nodes Complete'}
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

          {/* Visual Representation */}
          {currentStep >= 0 && graphType === 'adjacency-list' && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-rose-900 dark:text-rose-100">Adjacency List Visualization:</h4>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="space-y-3">
                  {Array.from((steps[currentStep] as any).graph as Map<number, number[]>).map(([node, neighbors]) => (
                    <div key={node} className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all duration-500 ${
                        (steps[currentStep] as any).currentNode === node
                          ? 'bg-rose-200 dark:bg-rose-800 border-rose-500 scale-110 ring-4 ring-rose-300 animate-pulse'
                          : 'bg-rose-100 dark:bg-rose-900/40 border-rose-300 dark:border-rose-700'
                      }`}>
                        {node}
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                        {neighbors.length === 0 ? (
                          <span className="text-sm text-slate-400 italic">empty []</span>
                        ) : (
                          <div className="flex items-center gap-2 flex-wrap">
                            {neighbors.map((neighbor, idx) => {
                              const isCurrentEdge = (steps[currentStep] as any).currentEdge?.from === node && (steps[currentStep] as any).currentEdge?.to === neighbor;
                              return (
                                <div
                                  key={idx}
                                  className={`px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-500 ${
                                    isCurrentEdge
                                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white scale-110 shadow-lg animate-pulse'
                                      : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                                  }`}
                                >
                                  {neighbor}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Matrix Visualization */}
          {currentStep >= 0 && graphType === 'adjacency-matrix' && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Adjacency Matrix Visualization:</h4>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-12 h-12 text-sm font-semibold text-slate-500"></th>
                      {nodes.map(node => (
                        <th key={node} className="w-16 h-12 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                          {node}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
	                    {((steps[currentStep] as any).matrix as number[][]).map((row, rowIdx) => (
	                      <tr key={rowIdx}>
	                        <th className="w-12 h-12 text-sm font-semibold text-indigo-700 dark:text-indigo-300">{rowIdx}</th>
	                        {row.map((cell, colIdx) => {
	                          const isCurrentEdge = (steps[currentStep] as any).currentEdge?.from === rowIdx && (steps[currentStep] as any).currentEdge?.to === colIdx;
	                          return (
	                            <td
	                              key={colIdx}
                              className={`w-16 h-12 text-center font-mono font-bold text-lg border border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                                isCurrentEdge
                                  ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white scale-110 shadow-xl ring-2 ring-indigo-400'
                                  : cell === 1
                                  ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
                              }`}
                            >
                              {cell}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle>Complexity Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="p-3 text-left font-semibold text-sm border border-slate-200 dark:border-slate-700">Operation</th>
                  <th className="p-3 text-center font-semibold text-sm border border-slate-200 dark:border-slate-700">Adjacency List</th>
                  <th className="p-3 text-center font-semibold text-sm border border-slate-200 dark:border-slate-700">Adjacency Matrix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-700">Space Complexity</td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">O(V + E)</Badge>
                  </td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">O(V²)</Badge>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-700">Add Edge</td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">O(1)</Badge>
                  </td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">O(1)</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-700">Check Edge Exists</td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">O(degree)</Badge>
                  </td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">O(1)</Badge>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-700">Get All Neighbors</td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">O(degree)</Badge>
                  </td>
                  <td className="p-3 text-center border border-slate-200 dark:border-slate-700">
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">O(V)</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            <strong>Note:</strong> V = number of vertices, E = number of edges, degree = number of edges connected to a node
          </div>
        </CardContent>
      </Card>

      {/* Code Snippets */}
      <CodeSnippet
        title="Adjacency List Implementation"
        language="javascript"
        code={`class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge (directed)
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
  }

  // Get neighbors of a vertex
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  // Display the graph
  display() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(vertex + " -> " + edges.join(", "));
    }
  }
}

// Usage
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

graph.display();`}
      />

      <CodeSnippet
        title="Adjacency Matrix Implementation"
        language="javascript"
        code={`class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    // Initialize matrix with all 0s
    this.matrix = Array(numVertices)
      .fill(0)
      .map(() => Array(numVertices).fill(0));
  }

  // Add an edge (directed)
  addEdge(vertex1, vertex2) {
    this.matrix[vertex1][vertex2] = 1;
  }

  // Remove an edge
  removeEdge(vertex1, vertex2) {
    this.matrix[vertex1][vertex2] = 0;
  }

  // Check if edge exists
  hasEdge(vertex1, vertex2) {
    return this.matrix[vertex1][vertex2] === 1;
  }

  // Get all neighbors of a vertex
  getNeighbors(vertex) {
    const neighbors = [];
    for (let i = 0; i < this.numVertices; i++) {
      if (this.matrix[vertex][i] === 1) {
        neighbors.push(i);
      }
    }
    return neighbors;
  }

  // Display the matrix
  display() {
    console.log(this.matrix);
  }
}

// Usage
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

graph.display();`}
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code, Mountain
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function NumberOfEnclaves() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // 4x4 grid example
  const grid = [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ];

  const steps = [
    { step: 1, description: '🏔️ Problem: Count land cells that cannot reach the boundary', currentLine: 1, row: null, col: null, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 2, description: '📋 Initialize: enclaves = 0', currentLine: 2, row: null, col: null, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 3, description: '🔄 Strategy: First mark all boundary-connected land', currentLine: 3, row: null, col: null, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 4, description: '🔍 Scan Top Boundary (row 0): All water, skip', currentLine: 4, row: 0, col: null, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 5, description: '🔍 Scan Bottom Boundary (row 3): All water, skip', currentLine: 4, row: 3, col: null, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 6, description: '🔍 Scan Left Boundary (col 0): Check (1,0)', currentLine: 5, row: 1, col: 0, visited: [], enclaveCount: 0, boundaryConnected: [], inDFS: false },
    { step: 7, description: '✅ Found boundary land at (1,0)! Start DFS', currentLine: 6, row: 1, col: 0, visited: [], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 8, description: '🔒 DFS: Mark (1,0) as boundary-connected', currentLine: 11, row: 1, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 9, description: '⬇️ DFS: Try down (2,0)', currentLine: 12, row: 2, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 10, description: '🌊 DFS: (2,0) is water - return', currentLine: 11, row: 2, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 11, description: '⬆️ DFS: Try up (0,0)', currentLine: 12, row: 0, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 12, description: '🌊 DFS: (0,0) is water - return', currentLine: 11, row: 0, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 13, description: '➡️ DFS: Try right (1,1)', currentLine: 12, row: 1, col: 1, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 14, description: '🌊 DFS: (1,1) is water - return', currentLine: 11, row: 1, col: 1, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 15, description: '⬅️ DFS: Try left - out of bounds', currentLine: 12, row: 1, col: -1, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: true },
    { step: 16, description: '✅ DFS Complete from (1,0)', currentLine: 6, row: 1, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 17, description: '🔍 Continue scanning boundaries...', currentLine: 5, row: 2, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 18, description: '🔍 Scan Right Boundary (col 3): All water, skip', currentLine: 5, row: null, col: 3, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 19, description: '✅ Phase 1 Complete: Marked all boundary-connected land', currentLine: 7, row: null, col: null, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 20, description: '🔄 Phase 2: Count remaining unmarked land cells', currentLine: 8, row: null, col: null, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 21, description: '🔍 Scan (0,0) - water (skip)', currentLine: 9, row: 0, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 22, description: '🔍 Scan (0,1) - water (skip)', currentLine: 9, row: 0, col: 1, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 23, description: '🔍 Scan (0,2) - water (skip)', currentLine: 9, row: 0, col: 2, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 24, description: '🔍 Scan (0,3) - water (skip)', currentLine: 9, row: 0, col: 3, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 25, description: '🔍 Scan (1,0) - boundary-connected (skip)', currentLine: 9, row: 1, col: 0, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 26, description: '🔍 Scan (1,1) - water (skip)', currentLine: 9, row: 1, col: 1, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 27, description: '🏔️ Scan (1,2) - ENCLAVE! Not boundary-connected', currentLine: 9, row: 1, col: 2, visited: [[1,0]], enclaveCount: 0, boundaryConnected: [[1,0]], inDFS: false },
    { step: 28, description: '➕ Count: enclaves++ (found cell at 1,2)', currentLine: 10, row: 1, col: 2, visited: [[1,0]], enclaveCount: 1, boundaryConnected: [[1,0]], inDFS: false },
    { step: 29, description: '🔍 Scan (1,3) - water (skip)', currentLine: 9, row: 1, col: 3, visited: [[1,0]], enclaveCount: 1, boundaryConnected: [[1,0]], inDFS: false },
    { step: 30, description: '🔍 Scan (2,0) - water (skip)', currentLine: 9, row: 2, col: 0, visited: [[1,0]], enclaveCount: 1, boundaryConnected: [[1,0]], inDFS: false },
    { step: 31, description: '🏔️ Scan (2,1) - ENCLAVE! Not boundary-connected', currentLine: 9, row: 2, col: 1, visited: [[1,0]], enclaveCount: 1, boundaryConnected: [[1,0]], inDFS: false },
    { step: 32, description: '➕ Count: enclaves++ (found cell at 2,1)', currentLine: 10, row: 2, col: 1, visited: [[1,0]], enclaveCount: 2, boundaryConnected: [[1,0]], inDFS: false },
    { step: 33, description: '🏔️ Scan (2,2) - ENCLAVE! Not boundary-connected', currentLine: 9, row: 2, col: 2, visited: [[1,0]], enclaveCount: 2, boundaryConnected: [[1,0]], inDFS: false },
    { step: 34, description: '➕ Count: enclaves++ (found cell at 2,2)', currentLine: 10, row: 2, col: 2, visited: [[1,0]], enclaveCount: 3, boundaryConnected: [[1,0]], inDFS: false },
    { step: 35, description: '🔍 Scan (2,3) - water (skip)', currentLine: 9, row: 2, col: 3, visited: [[1,0]], enclaveCount: 3, boundaryConnected: [[1,0]], inDFS: false },
    { step: 36, description: '🔍 Scan row 3 - all water (skip)', currentLine: 9, row: 3, col: 0, visited: [[1,0]], enclaveCount: 3, boundaryConnected: [[1,0]], inDFS: false },
    { step: 37, description: '🎯 Return: enclaves = 3', currentLine: 13, row: null, col: null, visited: [[1,0]], enclaveCount: 3, boundaryConnected: [[1,0]], inDFS: false },
    { step: 38, description: '✅ Complete: Found 3 enclave cells!', currentLine: 13, row: null, col: null, visited: [[1,0]], enclaveCount: 3, boundaryConnected: [[1,0]], inDFS: false }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const enclaveCountStr = stepData.enclaveCount.toString();
    
    return [
      { line: 1, code: 'function numEnclaves(grid) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let enclaves = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `enclaves=${enclaveCountStr}` : '' },
      { line: 3, code: '  const rows = grid.length, cols = grid[0].length;', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `rows=4, cols=4` : '' },
      { line: 4, code: '  // Phase 1: Mark boundary-connected land', active: stepData.currentLine === 4, indent: 1 },
      { line: 5, code: '  for (let r = 0; r < rows; r++) {', active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: (stepData.currentLine === 4 || stepData.currentLine === 5) && stepData.row !== null ? `r=${stepData.row}` : '' },
      { line: 6, code: '    for (let c = 0; c < cols; c++) {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && stepData.col !== null ? `c=${stepData.col}` : '' },
      { line: 7, code: '      if (isBoundary(r,c) && grid[r][c]===1) {', active: stepData.currentLine === 6, indent: 3, values: stepData.currentLine === 6 && stepData.row !== null && stepData.col !== null ? `grid[${stepData.row}][${stepData.col}]=${grid[stepData.row][stepData.col]}` : '' },
      { line: 8, code: '        dfs(r, c); // Mark as boundary-connected', active: stepData.currentLine === 6 && stepData.inDFS, indent: 4, values: stepData.currentLine === 6 && stepData.row !== null && stepData.col !== null ? `dfs(${stepData.row},${stepData.col})` : '' },
      { line: 9, code: '  }}}', active: stepData.currentLine === 7, indent: 1 },
      { line: 10, code: '  // Phase 2: Count unmarked land', active: stepData.currentLine === 8, indent: 1 },
      { line: 11, code: '  for (let r = 0; r < rows; r++) {', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 && stepData.row !== null ? `r=${stepData.row}, c=${stepData.col ?? 0}` : '' },
      { line: 12, code: '    for (let c = 0; c < cols; c++) {', active: stepData.currentLine === 9, indent: 2 },
      { line: 13, code: '      if (grid[r][c] === 1) enclaves++;', active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 ? `enclaves++ → ${stepData.enclaveCount}` : '' },
      { line: 14, code: '  }}', active: false, indent: 1 },
      { line: 15, code: '  return enclaves;', active: stepData.currentLine === 13, indent: 1, values: stepData.currentLine === 13 ? `return ${enclaveCountStr}` : '' },
      { line: 16, code: '}', active: false, indent: 0 },
      { line: 17, code: '', active: false, indent: 0 },
      { line: 18, code: 'function dfs(r, c) {', active: stepData.inDFS && stepData.currentLine >= 11 && stepData.currentLine <= 12, indent: 0, values: stepData.inDFS && stepData.row !== null && stepData.col !== null ? `dfs(${stepData.row},${stepData.col})` : '' },
      { line: 19, code: '  if (outOfBounds || water) return;', active: stepData.currentLine === 11, indent: 1, values: stepData.currentLine === 11 && stepData.row !== null && stepData.col !== null ? `check (${stepData.row},${stepData.col})` : '' },
      { line: 20, code: '  grid[r][c] = 0; // Mark as visited', active: stepData.currentLine === 11 && stepData.inDFS && stepData.row !== null && !((stepData.row === 2 && stepData.col === 0) || (stepData.row === 0 && stepData.col === 0) || (stepData.row === 1 && stepData.col === 1) || (stepData.row === 1 && stepData.col === -1)), indent: 1, values: stepData.currentLine === 11 && stepData.inDFS && stepData.row !== null && !((stepData.row === 2 && stepData.col === 0) || (stepData.row === 0 && stepData.col === 0) || (stepData.row === 1 && stepData.col === 1) || (stepData.row === 1 && stepData.col === -1)) ? `mark (${stepData.row},${stepData.col})` : '' },
      { line: 21, code: '  dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 && stepData.row !== null && stepData.col !== null ? `try 4 directions` : '' },
      { line: 22, code: '}', active: false, indent: 0 },
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

  const getCellColor = (r: number, c: number, stepData: typeof steps[0]) => {
    const isBoundaryConnected = stepData.boundaryConnected.some(([br, bc]) => br === r && bc === c);
    const isCurrent = stepData.row === r && stepData.col === c;
    const isEnclave = (r === 1 && c === 2) || (r === 2 && c === 1) || (r === 2 && c === 2);
    
    if (stepData.step >= 27 && isEnclave && stepData.enclaveCount > 0) {
      if (r === 1 && c === 2 && stepData.step >= 28) return '#f59e0b'; // orange - enclave found
      if (r === 2 && c === 1 && stepData.step >= 32) return '#f59e0b'; // orange - enclave found
      if (r === 2 && c === 2 && stepData.step >= 34) return '#f59e0b'; // orange - enclave found
    }
    
    if (isCurrent) return '#3b82f6'; // blue - current
    if (isBoundaryConnected) return '#ef4444'; // red - boundary-connected
    if (grid[r][c] === 1) return '#94a3b8'; // gray - unvisited land
    return '#1e293b'; // dark - water
  };

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={Mountain}
        category="DSA · Graphs"
        title="Number of Enclaves"
        description="Count land cells that cannot walk off the boundary using DFS from edges"
        colorTheme="orange"
        badges={[
          { label: 'DFS', variant: 'default' },
          { label: 'Time: O(M×N)', variant: 'success' },
          { label: 'Space: O(M×N)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-orange-200 dark:border-orange-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn enclave counting with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What is an Enclave?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given a 2D grid of <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-sm">1</code> (land) and <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-sm">0</code> (water), an <strong>enclave</strong> is a land cell that <strong>cannot</strong> reach the boundary of the grid by walking on land cells (horizontally or vertically).
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Input Grid */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">INPUT GRID (4×4)</div>
                <div className="font-mono text-xs space-y-1">
                  <div>[<span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-red-600 font-bold">1</span>, <span className="text-slate-400">0</span>, <span className="text-orange-600 font-bold">1</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-slate-400">0</span>, <span className="text-orange-600 font-bold">1</span>, <span className="text-orange-600 font-bold">1</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>]</div>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">1</span>
                    <span className="text-slate-600 dark:text-slate-400">= Land</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">0</span>
                    <span className="text-slate-600 dark:text-slate-400">= Water</span>
                  </div>
                </div>
              </div>

              {/* Visual Grid */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">VISUAL REPRESENTATION</div>
                <svg viewBox="0 0 200 200" className="w-full h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3].map((col) => {
                      const isBoundary = row === 1 && col === 0;
                      const isEnclave = (row === 1 && col === 2) || (row === 2 && col === 1) || (row === 2 && col === 2);
                      const color = isBoundary ? '#ef4444' : isEnclave ? '#f59e0b' : '#1e293b';
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 48 + 5}
                            y={row * 48 + 5}
                            width="45"
                            height="45"
                            fill={color}
                            stroke={isBoundary || isEnclave ? '#ffffff' : '#475569'}
                            strokeWidth={isBoundary || isEnclave ? 2 : 1}
                            rx="4"
                          />
                          <text x={col * 48 + 27.5} y={row * 48 + 32} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                            {grid[row][col]}
                          </text>
                        </g>
                      );
                    })
                  ))}
                </svg>
                <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-red-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Boundary</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-orange-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Enclave</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">OUTPUT</div>
                <div className="text-5xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Enclave cells</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Boundary: 1 cell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Enclaves: 3 cells</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Boundary vs Enclave Comparison */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">✅ NOT an Enclave</h5>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <svg viewBox="0 0 200 140" className="w-full h-auto">
                    {/* Boundary indicator */}
                    <rect x="0" y="40" width="10" height="60" fill="#dc2626" opacity="0.3"/>
                    <text x="5" y="30" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">BOUNDARY</text>
                    
                    {/* Land cell on boundary */}
                    <rect x="15" y="50" width="40" height="40" fill="#ef4444" stroke="#dc2626" strokeWidth="3" rx="4"/>
                    <text x="35" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Land</text>
                    <text x="35" y="77" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                    
                    {/* Arrow to boundary */}
                    <line x1="35" y1="50" x2="5" y2="30" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowred)"/>
                    <text x="60" y="70" textAnchor="start" fill="#dc2626" fontSize="11" fontWeight="600">Can reach boundary!</text>
                    
                    <defs>
                      <marker id="arrowred" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,10 L10,5 z" fill="#dc2626"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Land on/connected to boundary</p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">❌ IS an Enclave</h5>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <svg viewBox="0 0 200 140" className="w-full h-auto">
                    {/* Water surrounding */}
                    <rect x="20" y="20" width="35" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="37.5" y="42" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">0</text>
                    
                    <rect x="60" y="20" width="35" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="77.5" y="42" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">0</text>
                    
                    <rect x="20" y="60" width="35" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="37.5" y="82" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">0</text>
                    
                    {/* Land cell (enclave) */}
                    <rect x="60" y="60" width="35" height="35" fill="#f59e0b" stroke="#d97706" strokeWidth="3" rx="4"/>
                    <text x="77.5" y="75" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Land</text>
                    <text x="77.5" y="87" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                    
                    <rect x="100" y="60" width="35" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="117.5" y="82" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">0</text>
                    
                    <rect x="60" y="100" width="35" height="35" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="77.5" y="122" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">0</text>
                    
                    <text x="145" y="80" textAnchor="start" fill="#d97706" fontSize="11" fontWeight="600">Surrounded</text>
                    <text x="145" y="92" textAnchor="start" fill="#d97706" fontSize="11" fontWeight="600">by water!</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Land completely surrounded, cannot reach boundary</p>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Key Algorithm Strategy</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">1.</span><span><strong>Phase 1:</strong> Start DFS from ALL boundary land cells</span></div>
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">2.</span><span><strong>Mark:</strong> All land reachable from boundaries as "not enclaves"</span></div>
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">3.</span><span><strong>Phase 2:</strong> Count remaining unmarked land cells</span></div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-orange-200 dark:border-orange-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <GitBranch className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Understanding enclave detection through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Phase 1 - Mark Boundary Connected */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Phase 1: Mark Boundary-Connected Land</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">Scan all boundary edges for land cells. Found land at <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded font-medium">(1,0)</code> on left edge. Run DFS to mark as safe - all neighbors are water. <span className="font-semibold text-red-600">Boundary: 1 cell</span></p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-md h-auto">
              <defs>
                <filter id="glow-boundary"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              {/* Grid cells */}
              {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3].map((col) => {
                    const isBoundary = row === 1 && col === 0;
                    const isEnclave = (row === 1 && col === 2) || (row === 2 && col === 1) || (row === 2 && col === 2);
                    const color = isBoundary ? '#ef4444' : (isEnclave || grid[row][col] === 1 ? '#94a3b8' : '#1e293b');
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 55 + 10}
                          y={row * 55 + 10}
                          width="50"
                          height="50"
                          fill={color}
                          stroke={isBoundary ? '#dc2626' : '#64748b'}
                          strokeWidth={isBoundary ? 3 : 1}
                          rx="4"
                          filter={isBoundary ? 'url(#glow-boundary)' : undefined}
                        >
                          {isBoundary && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text x={col * 55 + 35} y={row * 55 + 40} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                          {grid[row][col]}
                        </text>
                      </g>
                    );
                  })
                ))}
              <rect x="5" y="220" width="150" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="10" y="235" fontSize="11" fill="#ef4444" fontWeight="600">Red: Boundary-connected</text>
              </svg>
            </div>
          </div>


          {/* Step 2: Phase 2 - Count Enclaves */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Phase 2: Count Unmarked Land (Enclaves)</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">Scan entire grid. Count all land cells that weren't marked as boundary-connected: <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-medium">(1,2), (2,1), (2,2)</code>. These are completely surrounded by water. <span className="font-semibold text-orange-600">✅ Total: 3 enclaves</span></p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-md h-auto">
              <defs>
                <filter id="glow-enclave"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3].map((col) => {
                    const isBoundary = row === 1 && col === 0;
                    const isEnclave = (row === 1 && col === 2) || (row === 2 && col === 1) || (row === 2 && col === 2);
                    const color = isBoundary ? '#ef4444' : isEnclave ? '#f59e0b' : (grid[row][col] === 1 ? '#94a3b8' : '#1e293b');
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 55 + 10}
                          y={row * 55 + 10}
                          width="50"
                          height="50"
                          fill={color}
                          stroke={isEnclave ? '#d97706' : (isBoundary ? '#dc2626' : '#64748b')}
                          strokeWidth={isEnclave || isBoundary ? 3 : 1}
                          rx="4"
                          filter={isEnclave ? 'url(#glow-enclave)' : undefined}
                        >
                          {isEnclave && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text x={col * 55 + 35} y={row * 55 + 40} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                          {grid[row][col]}
                        </text>
                      </g>
                    );
                  })
                ))}
              <rect x="5" y="210" width="195" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="10" y="225" fontSize="11" fontWeight="600">
                <tspan fill="#ef4444">Red: Boundary </tspan>
                <tspan fill="#f59e0b">Orange: Enclaves (3)</tspan>
              </text>
              </svg>
            </div>
          </div>


          {/* Key Insights */}
          <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Reverse Thinking:</strong> Instead of finding enclaves directly, find what's NOT an enclave</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Boundary DFS:</strong> Mark all land reachable from edges - these can "walk off" the grid</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Two-Pass Algorithm:</strong> First mark boundary-connected, then count unmarked</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Efficient:</strong> O(M×N) time - visit each cell at most twice</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-orange-200 dark:border-orange-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Network className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Interactive Enclave Counting Animation
          </CardTitle>
          <CardDescription>Watch the two-phase algorithm in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
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
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as typeof animationSpeed)} disabled={isAnimating} className="w-4 h-4 text-orange-600 focus:ring-orange-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded border border-orange-300 dark:border-orange-700">
              <span className="text-xs font-medium text-orange-900 dark:text-orange-100">{currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">numEnclaves.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-orange-50 dark:bg-orange-900/20 border-l-2 border-orange-400 dark:border-orange-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-orange-600 dark:text-orange-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-orange-600 dark:text-orange-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Position:</span><span className="font-semibold text-blue-600 dark:text-blue-400">({steps[currentStep].row ?? '-'}, {steps[currentStep].col ?? '-'})</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Enclaves:</span><span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].enclaveCount}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Boundary:</span><span className="font-semibold text-red-600 dark:text-red-400">{steps[currentStep].boundaryConnected.length}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].enclaveCount === 3 ? 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-300 dark:border-orange-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].enclaveCount === 3 ? 'bg-orange-600' : 'bg-blue-600'}`}>
                    {steps[currentStep].enclaveCount === 3 ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].enclaveCount === 3 ? 'text-orange-900 dark:text-orange-100' : 'text-blue-900 dark:text-blue-100'}`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].enclaveCount === 3 ? 'text-orange-900 dark:text-orange-50' : 'text-blue-900 dark:text-blue-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Grid Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Grid Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-700"></div><span className="text-slate-600 dark:text-slate-400">Water</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-400"></div><span className="text-slate-600 dark:text-slate-400">Land</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-red-500"></div><span className="text-slate-600 dark:text-slate-400">Boundary</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-orange-500"></div><span className="text-slate-600 dark:text-slate-400">Enclave</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-full max-w-md h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3].map((col) => {
                      const color = getCellColor(row, col, steps[currentStep]);
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 55 + 10}
                            y={row * 55 + 10}
                            width="50"
                            height="50"
                            fill={color}
                            stroke="#64748b"
                            strokeWidth="2"
                            rx="4"
                          />
                          <text
                            x={col * 55 + 35}
                            y={row * 55 + 40}
                            textAnchor="middle"
                            fill="white"
                            fontSize="18"
                            fontWeight="bold"
                          >
                            {grid[row][col]}
                          </text>
                        </g>
                      );
                    })
                  ))}
                </svg>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity & Code */}
      <Card className="border-orange-200 dark:border-orange-800 mb-8">
        <CardHeader><CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">⏱️ Time: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visit each cell at most twice (boundary scan + counting)</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Recursion stack in worst case (all land connected)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Number of Enclaves - Complete Implementation"
        language="javascript"
        code={`function numEnclaves(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  function dfs(r, c) {
    // Boundary or water check
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return;
    }
    
    // Mark as visited
    grid[r][c] = 0;
    
    // Explore 4 directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }
  
  // Phase 1: Mark all boundary-connected land
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Check if on boundary
      if ((r === 0 || r === rows - 1 || c === 0 || c === cols - 1) && grid[r][c] === 1) {
        dfs(r, c);
      }
    }
  }
  
  // Phase 2: Count remaining land cells (enclaves)
  let enclaves = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        enclaves++;
      }
    }
  }
  
  return enclaves;
}

// Example usage
const grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
];

console.log(numEnclaves(grid)); // Output: 3
// Enclave cells: (1,2), (2,1), (2,2)`}
        colorTheme="orange"
      />

    </div>
  );
}

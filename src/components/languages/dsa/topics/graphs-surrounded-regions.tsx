'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code, Shield
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SurroundedRegions() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // 4x5 grid example - using strings for display
  const initialGrid = [
    ['X', 'X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X', 'X'],
    ['X', 'X', 'O', 'X', 'X'],
    ['O', 'X', 'X', 'X', 'X']
  ];

  const steps = [
    { step: 1, description: '🎯 Problem: Capture all O\'s completely surrounded by X', currentLine: 1, row: null, col: null, safe: [], grid: initialGrid.map(r => [...r]), inDFS: false },
    { step: 2, description: '📋 Strategy: Mark boundary-connected O\'s as safe', currentLine: 2, row: null, col: null, safe: [], grid: initialGrid.map(r => [...r]), inDFS: false },
    { step: 3, description: '🔍 Scan Top Boundary (row 0): All X, skip', currentLine: 3, row: 0, col: null, safe: [], grid: initialGrid.map(r => [...r]), inDFS: false },
    { step: 4, description: '🔍 Scan Bottom Boundary (row 3): Check (3,0)', currentLine: 3, row: 3, col: 0, safe: [], grid: initialGrid.map(r => [...r]), inDFS: false },
    { step: 5, description: '✅ Found boundary O at (3,0)! Start DFS', currentLine: 4, row: 3, col: 0, safe: [[3,0]], grid: initialGrid.map(r => [...r]), inDFS: true },
    { step: 6, description: '🔒 DFS: Mark (3,0) as safe (temp mark as T)', currentLine: 9, row: 3, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 7, description: '⬇️ DFS: Try down - out of bounds', currentLine: 10, row: 4, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 8, description: '⬆️ DFS: Try up (2,0)', currentLine: 10, row: 2, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 9, description: '🌊 DFS: (2,0) is X - return', currentLine: 9, row: 2, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 10, description: '➡️ DFS: Try right (3,1)', currentLine: 10, row: 3, col: 1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 11, description: '🌊 DFS: (3,1) is X - return', currentLine: 9, row: 3, col: 1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 12, description: '⬅️ DFS: Try left - out of bounds', currentLine: 10, row: 3, col: -1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: true },
    { step: 13, description: '✅ DFS Complete from (3,0)', currentLine: 4, row: 3, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 14, description: '🔍 Continue scanning boundaries...', currentLine: 3, row: 3, col: 1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 15, description: '🔍 Scan Left Boundary (col 0): Found T, skip', currentLine: 3, row: null, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 16, description: '🔍 Scan Right Boundary (col 4): All X, skip', currentLine: 3, row: null, col: 4, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 17, description: '✅ Phase 1 Complete: Marked all safe O\'s as T', currentLine: 5, row: null, col: null, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 18, description: '🔄 Phase 2: Flip surrounded O\'s to X', currentLine: 6, row: null, col: null, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 19, description: '🔍 Scan (0,0) - X (no change)', currentLine: 7, row: 0, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 20, description: '🔍 Skip row 0... scan (1,1)', currentLine: 7, row: 1, col: 1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','O','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 21, description: '❌ Capture! (1,1) is O → flip to X', currentLine: 8, row: 1, col: 1, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 22, description: '🔍 Scan (1,2)', currentLine: 7, row: 1, col: 2, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','O','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 23, description: '❌ Capture! (1,2) is O → flip to X', currentLine: 8, row: 1, col: 2, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 24, description: '🔍 Scan (2,2)', currentLine: 7, row: 2, col: 2, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','O','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 25, description: '❌ Capture! (2,2) is O → flip to X', currentLine: 8, row: 2, col: 2, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 26, description: '🔍 Scan (3,0) - T (safe, restore to O)', currentLine: 8, row: 3, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X'],['T','X','X','X','X']], inDFS: false },
    { step: 27, description: '✅ Restore: T → O (boundary-connected)', currentLine: 8, row: 3, col: 0, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X'],['O','X','X','X','X']], inDFS: false },
    { step: 28, description: '🎯 Complete! All surrounded O\'s captured', currentLine: 11, row: null, col: null, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X'],['O','X','X','X','X']], inDFS: false },
    { step: 29, description: '✅ Final Grid: 3 O\'s captured, 1 safe O restored', currentLine: 11, row: null, col: null, safe: [[3,0]], grid: [['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X'],['O','X','X','X','X']], inDFS: false }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const safeCount = stepData.safe.length;
    
    return [
      { line: 1, code: 'function solve(board) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  const rows = board.length, cols = board[0].length;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `rows=4, cols=5` : '' },
      { line: 3, code: '  // Phase 1: Mark boundary-connected O as T', active: stepData.currentLine === 3, indent: 1 },
      { line: 4, code: '  for (boundary cells) {', active: stepData.currentLine === 3 || stepData.currentLine === 4, indent: 1, values: (stepData.currentLine === 3 || stepData.currentLine === 4) && stepData.row !== null && stepData.col !== null ? `checking (${stepData.row},${stepData.col})` : '' },
      { line: 5, code: '    if (board[r][c] === "O") dfs(r, c);', active: stepData.currentLine === 4 && !stepData.inDFS, indent: 2, values: stepData.currentLine === 4 && stepData.row !== null && stepData.col !== null ? `dfs(${stepData.row},${stepData.col})` : '' },
      { line: 6, code: '  }', active: stepData.currentLine === 5, indent: 1 },
      { line: 7, code: '  // Phase 2: Flip O to X, restore T to O', active: stepData.currentLine === 6, indent: 1 },
      { line: 8, code: '  for (let r = 0; r < rows; r++) {', active: stepData.currentLine === 7 || stepData.currentLine === 8, indent: 1, values: (stepData.currentLine === 7 || stepData.currentLine === 8) && stepData.row !== null && stepData.col !== null ? `(${stepData.row},${stepData.col})` : '' },
      { line: 9, code: '    for (let c = 0; c < cols; c++) {', active: stepData.currentLine === 7 || stepData.currentLine === 8, indent: 2 },
      { line: 10, code: '      if (board[r][c] === "O") board[r][c] = "X";', active: stepData.currentLine === 8 && stepData.grid[stepData.row ?? 0][stepData.col ?? 0] !== 'T', indent: 3, values: stepData.currentLine === 8 && stepData.row !== null && stepData.col !== null && stepData.grid[stepData.row][stepData.col] === 'O' ? `flip to X` : '' },
      { line: 11, code: '      if (board[r][c] === "T") board[r][c] = "O";', active: stepData.currentLine === 8 && stepData.grid[stepData.row ?? 0][stepData.col ?? 0] === 'T', indent: 3, values: stepData.currentLine === 8 && stepData.row !== null && stepData.col !== null && stepData.step === 28 ? `restore to O` : '' },
      { line: 12, code: '  }}', active: false, indent: 1 },
      { line: 13, code: '}', active: stepData.currentLine === 11, indent: 0 },
      { line: 14, code: '', active: false, indent: 0 },
      { line: 15, code: 'function dfs(r, c) {', active: stepData.inDFS && stepData.currentLine >= 9 && stepData.currentLine <= 10, indent: 0, values: stepData.inDFS && stepData.row !== null && stepData.col !== null ? `dfs(${stepData.row},${stepData.col})` : '' },
      { line: 16, code: '  if (outOfBounds || board[r][c] !== "O") return;', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 && stepData.row !== null && stepData.col !== null ? `check (${stepData.row},${stepData.col})` : '' },
      { line: 17, code: '  board[r][c] = "T"; // Temp mark as safe', active: stepData.currentLine === 9 && stepData.inDFS && stepData.grid[stepData.row ?? 0][stepData.col ?? 0] === 'O', indent: 1, values: stepData.currentLine === 9 && stepData.inDFS && stepData.row !== null && stepData.col !== null && stepData.step === 6 ? `mark (${stepData.row},${stepData.col})` : '' },
      { line: 18, code: '  dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);', active: stepData.currentLine === 10, indent: 1, values: stepData.currentLine === 10 ? `try 4 directions` : '' },
      { line: 19, code: '}', active: false, indent: 0 },
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
    const cellValue = stepData.grid[r][c];
    const isCurrent = stepData.row === r && stepData.col === c;
    
    if (isCurrent && stepData.step >= 20) return '#3b82f6'; // blue - current in phase 2
    if (cellValue === 'T') return '#10b981'; // green - safe (temp marked)
    if (cellValue === 'O') {
      if (stepData.step < 19) return '#f59e0b'; // orange - O before capture
      return '#f59e0b'; // orange - O after capture (only boundary ones)
    }
    if (isCurrent && stepData.step < 20) return '#3b82f6'; // blue - current in phase 1
    return '#64748b'; // slate - X
  };

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={Shield}
        category="DSA · Graphs"
        title="Surrounded Regions"
        description="Capture all O's completely surrounded by X using boundary DFS"
        colorTheme="teal"
        badges={[
          { label: 'DFS', variant: 'default' },
          { label: 'Time: O(M×N)', variant: 'success' },
          { label: 'Space: O(M×N)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-teal-200 dark:border-teal-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn region capturing with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What are Surrounded Regions?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given a 2D board of <code className="px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/30 rounded text-sm">X</code> and <code className="px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/30 rounded text-sm">O</code>, capture all regions of <strong>O</strong> that are completely surrounded by <strong>X</strong>. A region is captured by flipping all <strong>O's</strong> into <strong>X's</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Input Board */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">INPUT BOARD</div>
                <div className="font-mono text-xs space-y-1">
                  <div>['<span className="text-slate-400">X</span>','<span className="text-slate-400">X</span>','<span className="text-slate-400">X</span>','<span className="text-slate-400">X</span>']</div>
                  <div>['<span className="text-slate-400">X</span>',<span className="text-red-600 font-bold">'O'</span>,<span className="text-red-600 font-bold">'O'</span>,'<span className="text-slate-400">X</span>']</div>
                  <div>['<span className="text-slate-400">X</span>','<span className="text-slate-400">X</span>',<span className="text-red-600 font-bold">'O'</span>,'<span className="text-slate-400">X</span>']</div>
                  <div>['<span className="text-slate-400">X</span>',<span className="text-green-600 font-bold">'O'</span>,'<span className="text-slate-400">X</span>','<span className="text-slate-400">X</span>']</div>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">X</span>
                    <span className="text-slate-600 dark:text-slate-400">= Wall</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">O</span>
                    <span className="text-slate-600 dark:text-slate-400">= Region</span>
                  </div>
                </div>
              </div>

              {/* Visual Representation */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">VISUAL REPRESENTATION</div>
                <svg viewBox="0 0 200 200" className="w-full h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3].map((col) => {
                      const isSafe = row === 3 && col === 1;
                      const isCaptured = (row === 1 && col === 1) || (row === 1 && col === 2) || (row === 2 && col === 2);
                      const isX = !isSafe && !isCaptured;
                      const color = isSafe ? '#10b981' : isCaptured ? '#ef4444' : '#64748b';
                      const label = isSafe ? 'O' : isCaptured ? 'O' : 'X';
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 48 + 5}
                            y={row * 48 + 5}
                            width="45"
                            height="45"
                            fill={color}
                            stroke={isSafe || isCaptured ? '#ffffff' : '#475569'}
                            strokeWidth={isSafe || isCaptured ? 2 : 1}
                            rx="4"
                          />
                          <text x={col * 48 + 27.5} y={row * 48 + 32} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                            {label}
                          </text>
                        </g>
                      );
                    })
                  ))}
                </svg>
                <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Safe O</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-red-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Captured</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">OUTPUT BOARD</div>
                <div className="text-5xl font-bold text-teal-600 mb-2">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">O's captured</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Captured: 3 O's</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Safe: 1 O</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safe vs Captured Comparison */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-green-900 dark:text-green-100">✅ Safe O (NOT Captured)</h5>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <svg viewBox="0 0 200 140" className="w-full h-auto">
                    {/* Boundary indicator */}
                    <rect x="0" y="40" width="200" height="10" fill="#10b981" opacity="0.2"/>
                    <text x="100" y="30" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">BOUNDARY</text>
                    
                    {/* Safe O on boundary */}
                    <rect x="80" y="55" width="40" height="40" fill="#10b981" stroke="#059669" strokeWidth="3" rx="4"/>
                    <text x="100" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Region</text>
                    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">O</text>
                    
                    {/* Arrow to boundary */}
                    <line x1="100" y1="55" x2="100" y2="50" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)"/>
                    <text x="100" y="110" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">Touches boundary!</text>
                    
                    <defs>
                      <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,10 L10,5 z" fill="#10b981"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">O connected to boundary = cannot be surrounded</p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">❌ Captured O</h5>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <svg viewBox="0 0 200 140" className="w-full h-auto">
                    {/* Surrounding X's */}
                    <rect x="20" y="20" width="35" height="35" fill="#64748b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="37.5" y="42" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                    
                    <rect x="60" y="20" width="35" height="35" fill="#64748b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="77.5" y="42" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                    
                    <rect x="20" y="60" width="35" height="35" fill="#64748b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="37.5" y="82" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                    
                    {/* Captured O in center */}
                    <rect x="60" y="60" width="35" height="35" fill="#ef4444" stroke="#dc2626" strokeWidth="3" rx="4"/>
                    <text x="77.5" y="75" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Region</text>
                    <text x="77.5" y="87" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">O</text>
                    
                    <rect x="100" y="60" width="35" height="35" fill="#64748b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="117.5" y="82" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                    
                    <rect x="60" y="100" width="35" height="35" fill="#64748b" stroke="#475569" strokeWidth="1" rx="4"/>
                    <text x="77.5" y="122" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                    
                    <text x="145" y="80" textAnchor="start" fill="#dc2626" fontSize="11" fontWeight="600">Surrounded</text>
                    <text x="145" y="92" textAnchor="start" fill="#dc2626" fontSize="11" fontWeight="600">by X!</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">O completely surrounded by X = will be captured (flipped to X)</p>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Key Algorithm Strategy</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">1.</span><span><strong>Reverse Approach:</strong> Find O's that should NOT be captured (boundary-connected)</span></div>
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">2.</span><span><strong>Phase 1:</strong> DFS from boundary O's, mark them temporarily as 'T'</span></div>
              <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">3.</span><span><strong>Phase 2:</strong> Flip all remaining O's to X, restore T's back to O</span></div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-teal-200 dark:border-teal-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <GitBranch className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Understanding region capture through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Phase 1 - Mark Safe O's */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Phase 1: Mark Boundary-Connected O's</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">Scan boundaries for O cells. Found O at <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-medium">(3,0)</code> on bottom edge. Run DFS and mark as 'T' (temporary safe). All connected O's preserved. <span className="font-semibold text-green-600">Safe: 1 cell</span></p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-safe"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3, 4].map((col) => {
                    const isSafe = row === 3 && col === 0;
                    const isO = (row === 1 && col === 1) || (row === 1 && col === 2) || (row === 2 && col === 2);
                    const color = isSafe ? '#10b981' : isO ? '#f59e0b' : '#64748b';
                    const label = isSafe ? 'T' : isO ? 'O' : 'X';
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 60 + 50}
                          y={row * 60 + 30}
                          width="55"
                          height="55"
                          fill={color}
                          stroke={isSafe ? '#059669' : '#475569'}
                          strokeWidth={isSafe ? 3 : 1}
                          rx="4"
                          filter={isSafe ? 'url(#glow-safe)' : undefined}
                        >
                          {isSafe && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text x={col * 60 + 77.5} y={row * 60 + 62} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                          {label}
                        </text>
                      </g>
                    );
                  })
                ))}
                <rect x="5" y="275" width="120" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="290" fontSize="11" fill="#10b981" fontWeight="600">Green: Safe (T)</text>
              </svg>
            </div>

          {/* Step 2: Phase 2 - Capture Surrounded O's */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Phase 2: Flip Surrounded Regions</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">Scan entire board. Flip unmarked O's to X: <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded font-medium">(1,1), (1,2), (2,2)</code>. Restore T back to O. Surrounded regions captured. <span className="font-semibold text-teal-600">✅ Captured: 3 O's</span></p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3, 4].map((col) => {
                    const isSafe = row === 3 && col === 0;
                    const color = isSafe ? '#10b981' : '#64748b';
                    const label = isSafe ? 'O' : 'X';
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 60 + 50}
                          y={row * 60 + 30}
                          width="55"
                          height="55"
                          fill={color}
                          stroke={isSafe ? '#059669' : '#475569'}
                          strokeWidth={isSafe ? 3 : 1}
                          rx="4"
                        />
                        <text x={col * 60 + 77.5} y={row * 60 + 62} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                          {label}
                        </text>
                      </g>
                    );
                  })
                ))}
                <rect x="5" y="265" width="235" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="280" fontSize="11" fontWeight="600">
                  <tspan fill="#64748b">Gray: X (captured) </tspan>
                  <tspan fill="#10b981">Green: O (safe)</tspan>
                </text>
              </svg>
          </div>

          {/* Key Insights */}
          <Alert className="border-teal-200 dark:border-teal-700 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-teal-950/20 dark:to-cyan-950/20">
            <Lightbulb className="h-5 w-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Boundary Protection:</strong> Any O touching the boundary cannot be surrounded</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Temp Marking:</strong> Use 'T' to distinguish safe O's during processing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Two-Pass:</strong> First mark safe, then flip surrounded - avoids confusion</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>In-Place:</strong> Modifies board directly, no extra space needed</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-teal-200 dark:border-teal-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <Network className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Interactive Region Capture Animation
          </CardTitle>
          <CardDescription>Watch the two-phase algorithm in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
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
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as typeof animationSpeed)} disabled={isAnimating} className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40 rounded border border-teal-300 dark:border-teal-700">
              <span className="text-xs font-medium text-teal-900 dark:text-teal-100">{currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">solve.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-teal-50 dark:bg-teal-900/20 border-l-2 border-teal-400 dark:border-teal-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-teal-600 dark:text-teal-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-teal-600 dark:text-teal-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Position:</span><span className="font-semibold text-blue-600 dark:text-blue-400">({steps[currentStep].row ?? '-'}, {steps[currentStep].col ?? '-'})</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Safe:</span><span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].safe.length}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Phase:</span><span className="font-semibold text-teal-600 dark:text-teal-400">{steps[currentStep].step < 19 ? '1 (Mark)' : '2 (Capture)'}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].step >= 29 ? 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-300 dark:border-teal-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].step >= 29 ? 'bg-teal-600' : 'bg-blue-600'}`}>
                    {steps[currentStep].step >= 29 ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].step >= 29 ? 'text-teal-900 dark:text-teal-100' : 'text-blue-900 dark:text-blue-100'}`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].step >= 29 ? 'text-teal-900 dark:text-teal-50' : 'text-blue-900 dark:text-blue-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Grid Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-teal-900 dark:text-teal-100">Board Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-500"></div><span className="text-slate-600 dark:text-slate-400">X</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-orange-500"></div><span className="text-slate-600 dark:text-slate-400">O</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-green-500"></div><span className="text-slate-600 dark:text-slate-400">T (Safe)</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <svg viewBox="0 0 295 240" className="w-full max-w-md h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3, 4].map((col) => {
                      const color = getCellColor(row, col, steps[currentStep]);
                      const cellValue = steps[currentStep].grid[row][col];
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 55 + 10}
                            y={row * 55 + 10}
                            width="50"
                            height="50"
                            fill={color}
                            stroke="#475569"
                            strokeWidth="2"
                            rx="4"
                          />
                          <text
                            x={col * 55 + 35}
                            y={row * 55 + 40}
                            textAnchor="middle"
                            fill="white"
                            fontSize="20"
                            fontWeight="bold"
                          >
                            {cellValue}
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
      <Card className="border-teal-200 dark:border-teal-800 mb-8">
        <CardHeader><CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-teal-200 dark:border-teal-700">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">⏱️ Time: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visit each cell at most twice (boundary DFS + final pass)</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Recursion stack in worst case + in-place modification</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Surrounded Regions - Complete Implementation"
        language="javascript"
        code={`function solve(board) {
  if (!board || board.length === 0) return;
  
  const rows = board.length;
  const cols = board[0].length;
  
  function dfs(r, c) {
    // Boundary or already visited
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
      return;
    }
    
    // Mark as safe (temporary)
    board[r][c] = 'T';
    
    // Explore 4 directions
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  // Phase 1: Mark all boundary-connected O's as T
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Check if on boundary
      if ((r === 0 || r === rows - 1 || c === 0 || c === cols - 1) && board[r][c] === 'O') {
        dfs(r, c);
      }
    }
  }
  
  // Phase 2: Flip surrounded O's to X, restore T's to O
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X'; // Capture surrounded O
      } else if (board[r][c] === 'T') {
        board[r][c] = 'O'; // Restore safe O
      }
    }
  }
}

// Example usage
const board = [
  ['X','X','X','X'],
  ['X','O','O','X'],
  ['X','X','O','X'],
  ['X','O','X','X']
];

solve(board);
// Result: 3 O's captured, 1 O safe
// [['X','X','X','X'],
//  ['X','X','X','X'],
//  ['X','X','X','X'],
//  ['X','O','X','X']]`}
        colorTheme="teal"
      />

    </div>
  );
}

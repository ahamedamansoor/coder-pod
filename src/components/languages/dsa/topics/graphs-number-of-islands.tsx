'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function NumberOfIslands() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // 4x5 grid example
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ];

  const steps = [
    { step: 1, description: '🏝️ Problem: Count the number of islands (connected 1s)', currentLine: 1, row: null, col: null, visited: [], islandCount: 0, exploring: [], inDFS: false },
    { step: 2, description: '📋 Initialize: Set island count = 0', currentLine: 2, row: null, col: null, visited: [], islandCount: 0, exploring: [], inDFS: false },
    { step: 3, description: '🔄 Loop: Start iterating r=0, c=0', currentLine: 3, row: 0, col: 0, visited: [], islandCount: 0, exploring: [], inDFS: false },
    { step: 4, description: '🔍 Check: Is grid[0][0] == "1"? YES', currentLine: 5, row: 0, col: 0, visited: [], islandCount: 0, exploring: [], inDFS: false },
    { step: 5, description: '🚀 Call DFS: dfs(grid, 0, 0)', currentLine: 6, row: 0, col: 0, visited: [], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 6, description: '🔒 DFS: Mark grid[0][0] = "0" (visited)', currentLine: 14, row: 0, col: 0, visited: [[0,0]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 7, description: '⬇️ DFS: Try down - dfs(grid, 1, 0)', currentLine: 15, row: 1, col: 0, visited: [[0,0]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 8, description: '✅ DFS: grid[1][0] is land, mark as visited', currentLine: 14, row: 1, col: 0, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 9, description: '⬇️ DFS: Try down from (1,0) - dfs(grid, 2, 0)', currentLine: 15, row: 2, col: 0, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 10, description: '🌊 DFS: grid[2][0] is water - return', currentLine: 13, row: 2, col: 0, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 11, description: '⬆️ DFS: Try up from (1,0) - dfs(grid, 0, 0)', currentLine: 16, row: 0, col: 0, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 12, description: '🌊 DFS: grid[0][0] already visited (water) - return', currentLine: 13, row: 0, col: 0, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 13, description: '➡️ DFS: Try right from (1,0) - dfs(grid, 1, 1)', currentLine: 17, row: 1, col: 1, visited: [[0,0], [1,0]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 14, description: '✅ DFS: grid[1][1] is land, mark as visited', currentLine: 14, row: 1, col: 1, visited: [[0,0], [1,0], [1,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1]], inDFS: true },
    { step: 15, description: '⬇️ DFS: Try down from (1,1) - dfs(grid, 2, 1)', currentLine: 15, row: 2, col: 1, visited: [[0,0], [1,0], [1,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1]], inDFS: true },
    { step: 16, description: '🌊 DFS: grid[2][1] is water - return', currentLine: 13, row: 2, col: 1, visited: [[0,0], [1,0], [1,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1]], inDFS: true },
    { step: 17, description: '⬆️ DFS: Try up from (1,1) - dfs(grid, 0, 1)', currentLine: 16, row: 0, col: 1, visited: [[0,0], [1,0], [1,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1]], inDFS: true },
    { step: 18, description: '✅ DFS: grid[0][1] is land, mark as visited', currentLine: 14, row: 0, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 19, description: '⬇️ DFS: Try down from (0,1) - already visited', currentLine: 15, row: 1, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 20, description: '⬆️ DFS: Try up from (0,1) - out of bounds', currentLine: 16, row: -1, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 21, description: '➡️ DFS: Try right from (0,1) - dfs(grid, 0, 2)', currentLine: 17, row: 0, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 22, description: '🌊 DFS: grid[0][2] is water - return', currentLine: 13, row: 0, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 23, description: '⬅️ DFS: Try left from (0,1) - already visited', currentLine: 18, row: 0, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0], [1,1], [0,1]], inDFS: true },
    { step: 24, description: '🔙 DFS: Backtrack from (0,1) complete', currentLine: 16, row: 1, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 25, description: '➡️ DFS: Try right from (1,1) - water', currentLine: 17, row: 1, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 26, description: '⬅️ DFS: Try left from (1,1) - already visited', currentLine: 18, row: 1, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0], [1,0]], inDFS: true },
    { step: 27, description: '🔙 DFS: All neighbors of (1,0) explored', currentLine: 15, row: 1, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 28, description: '⬆️ DFS: Continue from (0,0) - up already done', currentLine: 16, row: 0, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 29, description: '➡️ DFS: Try right from (0,0) - already visited', currentLine: 17, row: 0, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 30, description: '⬅️ DFS: Try left from (0,0) - out of bounds', currentLine: 18, row: 0, col: -1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [[0,0]], inDFS: true },
    { step: 31, description: '✅ DFS Complete: Island 1 fully explored', currentLine: 6, row: 0, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 0, exploring: [], inDFS: false },
    { step: 32, description: '➕ Increment: count++ (Island 1 found!)', currentLine: 7, row: 0, col: 0, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 33, description: '🔄 Loop: Continue to c=1', currentLine: 3, row: 0, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 34, description: '🌊 Check: grid[0][1] already visited (skip)', currentLine: 5, row: 0, col: 1, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 35, description: '🔄 Loop: Continue to c=2', currentLine: 3, row: 0, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 36, description: '🌊 Check: grid[0][2] is water (skip)', currentLine: 5, row: 0, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 37, description: '🔄 Loop: Skip water cells... move to r=2, c=2', currentLine: 3, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 38, description: '🔍 Check: Is grid[2][2] == "1"? YES', currentLine: 5, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [], inDFS: false },
    { step: 39, description: '🚀 Call DFS: dfs(grid, 2, 2)', currentLine: 6, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 40, description: '🔒 DFS: Mark grid[2][2] = "0" (visited)', currentLine: 14, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 41, description: '⬇️ DFS: Try down - dfs(grid, 3, 2)', currentLine: 15, row: 3, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 42, description: '🌊 DFS: grid[3][2] is water - return', currentLine: 13, row: 3, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 43, description: '⬆️ DFS: Try up - dfs(grid, 1, 2)', currentLine: 16, row: 1, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 44, description: '🌊 DFS: grid[1][2] is water - return', currentLine: 13, row: 1, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 45, description: '➡️ DFS: Try right - dfs(grid, 2, 3)', currentLine: 17, row: 2, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 46, description: '🌊 DFS: grid[2][3] is water - return', currentLine: 13, row: 2, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 47, description: '⬅️ DFS: Try left - dfs(grid, 2, 1)', currentLine: 18, row: 2, col: 1, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 48, description: '🌊 DFS: grid[2][1] is water - return', currentLine: 13, row: 2, col: 1, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [[2,2]], inDFS: true },
    { step: 49, description: '✅ DFS Complete: Island 2 fully explored (1 cell)', currentLine: 6, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 1, exploring: [], inDFS: false },
    { step: 50, description: '➕ Increment: count++ (Island 2 found!)', currentLine: 7, row: 2, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 2, exploring: [], inDFS: false },
    { step: 51, description: '🔄 Loop: Continue scanning... move to r=3, c=3', currentLine: 3, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 2, exploring: [], inDFS: false },
    { step: 52, description: '🔍 Check: Is grid[3][3] == "1"? YES', currentLine: 5, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 2, exploring: [], inDFS: false },
    { step: 53, description: '🚀 Call DFS: dfs(grid, 3, 3)', currentLine: 6, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 54, description: '🔒 DFS: Mark grid[3][3] = "0" (visited)', currentLine: 14, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 55, description: '⬇️ DFS: Try down - dfs(grid, 4, 3)', currentLine: 15, row: 4, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 56, description: '🚫 DFS: Out of bounds (row 4) - return', currentLine: 13, row: 4, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 57, description: '⬆️ DFS: Try up - dfs(grid, 2, 3)', currentLine: 16, row: 2, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 58, description: '🌊 DFS: grid[2][3] is water - return', currentLine: 13, row: 2, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 59, description: '➡️ DFS: Try right - dfs(grid, 3, 4)', currentLine: 17, row: 3, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 60, description: '✅ DFS: grid[3][4] is land, mark as visited', currentLine: 14, row: 3, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3], [3,4]], inDFS: true },
    { step: 61, description: '⬇️ DFS: Try down from (3,4) - out of bounds', currentLine: 15, row: 4, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3], [3,4]], inDFS: true },
    { step: 62, description: '⬆️ DFS: Try up from (3,4) - water', currentLine: 16, row: 2, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3], [3,4]], inDFS: true },
    { step: 63, description: '➡️ DFS: Try right from (3,4) - out of bounds', currentLine: 17, row: 3, col: 5, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3], [3,4]], inDFS: true },
    { step: 64, description: '⬅️ DFS: Try left from (3,4) - already visited', currentLine: 18, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3], [3,4]], inDFS: true },
    { step: 65, description: '🔙 DFS: Backtrack from (3,4) complete', currentLine: 17, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 66, description: '⬅️ DFS: Try left from (3,3) - water', currentLine: 18, row: 3, col: 2, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [[3,3]], inDFS: true },
    { step: 67, description: '✅ DFS Complete: Island 3 fully explored (2 cells)', currentLine: 6, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 2, exploring: [], inDFS: false },
    { step: 68, description: '➕ Increment: count++ (Island 3 found!)', currentLine: 7, row: 3, col: 3, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 3, exploring: [], inDFS: false },
    { step: 69, description: '🔄 Loop: Continue c=4 - visited (skip)', currentLine: 3, row: 3, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 3, exploring: [], inDFS: false },
    { step: 70, description: '🔄 Loop: All cells scanned - loop complete', currentLine: 3, row: 3, col: 4, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 3, exploring: [], inDFS: false },
    { step: 71, description: '🎯 Return: count = 3 (Found 3 islands!)', currentLine: 9, row: null, col: null, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 3, exploring: [], inDFS: false },
    { step: 72, description: '✅ Complete: Algorithm finished successfully!', currentLine: 9, row: null, col: null, visited: [[0,0], [1,0], [1,1], [0,1], [2,2], [3,3], [3,4]], islandCount: 3, exploring: [], inDFS: false }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const islandCountStr = stepData.islandCount.toString();
    const visitedCount = stepData.visited.length;
    
    return [
      { line: 1, code: 'function numIslands(grid) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let count = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `count=${islandCountStr}` : '' },
      { line: 3, code: '  for (let r = 0; r < rows; r++) {', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 && stepData.row !== null && stepData.col !== null ? `r=${stepData.row}, c=${stepData.col}` : '' },
      { line: 4, code: '    for (let c = 0; c < cols; c++) {', active: stepData.currentLine === 3 || stepData.currentLine === 4, indent: 2 },
      { line: 5, code: '      if (grid[r][c] === "1") {', active: stepData.currentLine === 5, indent: 3, values: stepData.currentLine === 5 && stepData.row !== null && stepData.col !== null ? `grid[${stepData.row}][${stepData.col}]=="${grid[stepData.row][stepData.col]}"` : '' },
      { line: 6, code: '        dfs(grid, r, c);', active: stepData.currentLine === 6 && !stepData.inDFS, indent: 4, values: stepData.currentLine === 6 && stepData.row !== null && stepData.col !== null ? `call dfs(${stepData.row}, ${stepData.col})` : '' },
      { line: 7, code: '        count++;', active: stepData.currentLine === 7, indent: 4, values: stepData.currentLine === 7 ? `count++ → ${stepData.islandCount}` : '' },
      { line: 8, code: '  }}}', active: false, indent: 1 },
      { line: 9, code: '  return count;', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 ? `return ${islandCountStr}` : '' },
      { line: 10, code: '}', active: false, indent: 0 },
      { line: 11, code: '', active: false, indent: 0 },
      { line: 12, code: 'function dfs(grid, r, c) {', active: stepData.inDFS && (stepData.currentLine === 13 || stepData.currentLine === 14 || stepData.currentLine === 15 || stepData.currentLine === 16 || stepData.currentLine === 17 || stepData.currentLine === 18), indent: 0, values: stepData.inDFS && stepData.row !== null && stepData.col !== null ? `dfs(${stepData.row}, ${stepData.col})` : '' },
      { line: 13, code: '  if (out of bounds || water) return;', active: stepData.currentLine === 13, indent: 1, values: stepData.currentLine === 13 && stepData.row !== null && stepData.col !== null ? `check (${stepData.row},${stepData.col})` : '' },
      { line: 14, code: '  grid[r][c] = "0"; // mark visited', active: stepData.currentLine === 14, indent: 1, values: stepData.currentLine === 14 && stepData.row !== null && stepData.col !== null ? `mark (${stepData.row},${stepData.col})` : '' },
      { line: 15, code: '  dfs(grid, r+1, c); // down', active: stepData.currentLine === 15, indent: 1, values: stepData.currentLine === 15 && stepData.row !== null && stepData.col !== null ? `try (${stepData.row+1},${stepData.col})` : '' },
      { line: 16, code: '  dfs(grid, r-1, c); // up', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 && stepData.row !== null && stepData.col !== null ? `try (${stepData.row-1},${stepData.col})` : '' },
      { line: 17, code: '  dfs(grid, r, c+1); // right', active: stepData.currentLine === 17, indent: 1, values: stepData.currentLine === 17 && stepData.row !== null && stepData.col !== null ? `try (${stepData.row},${stepData.col+1})` : '' },
      { line: 18, code: '  dfs(grid, r, c-1); // left', active: stepData.currentLine === 18, indent: 1, values: stepData.currentLine === 18 && stepData.row !== null && stepData.col !== null ? `try (${stepData.row},${stepData.col-1})` : '' },
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
    const isVisited = stepData.visited.some(([vr, vc]) => vr === r && vc === c);
    const isExploring = stepData.exploring.some(([er, ec]) => er === r && ec === c);
    const isCurrent = stepData.row === r && stepData.col === c;
    
    if (isCurrent) return '#3b82f6'; // blue - current
    if (isExploring) return '#f59e0b'; // orange - exploring
    if (isVisited) return '#10b981'; // green - visited
    if (grid[r][c] === 1) return '#94a3b8'; // gray - unvisited land
    return '#1e293b'; // dark - water
  };

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={Layers}
        category="DSA · Graphs"
        title="Number of Islands"
        description="Use DFS to count distinct islands in a 2D grid"
        colorTheme="emerald"
        badges={[
          { label: 'DFS', variant: 'default' },
          { label: 'Time: O(M×N)', variant: 'success' },
          { label: 'Space: O(M×N)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn island counting with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What is an Island?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given a 2D grid of <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-sm">1</code>s (land) and <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-sm">0</code>s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands <strong>horizontally or vertically</strong> (not diagonally).
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Input Grid */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">INPUT GRID</div>
                <div className="font-mono text-xs space-y-1">
                  <div>[<span className="text-emerald-600 font-bold">1</span>, <span className="text-emerald-600 font-bold">1</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-emerald-600 font-bold">1</span>, <span className="text-emerald-600 font-bold">1</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-purple-600 font-bold">1</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>]</div>
                  <div>[<span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-slate-400">0</span>, <span className="text-orange-600 font-bold">1</span>, <span className="text-orange-600 font-bold">1</span>]</div>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">1</span>
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
                <svg viewBox="0 0 250 200" className="w-full h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3, 4].map((col) => {
                      const isIsland1 = (row === 0 || row === 1) && (col === 0 || col === 1);
                      const isIsland2 = row === 2 && col === 2;
                      const isIsland3 = row === 3 && (col === 3 || col === 4);
                      const color = isIsland1 ? '#10b981' : isIsland2 ? '#a855f7' : isIsland3 ? '#f59e0b' : '#1e293b';
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 48 + 5}
                            y={row * 48 + 5}
                            width="45"
                            height="45"
                            fill={color}
                            stroke={isIsland1 || isIsland2 || isIsland3 ? '#ffffff' : '#475569'}
                            strokeWidth={isIsland1 || isIsland2 || isIsland3 ? 2 : 1}
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
                <div className="mt-2 grid grid-cols-3 gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-emerald-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Island 1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-purple-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Island 2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-orange-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Island 3</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">OUTPUT</div>
                <div className="text-5xl font-bold text-emerald-600 mb-2">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Islands found</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Island 1: 4 cells</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Island 2: 1 cell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Island 3: 2 cells</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connectivity Rules */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">✅ Connected (Same Island)</h5>
                </div>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 150 150" className="w-32 h-32">
                    {/* Center cell */}
                    <rect x="52" y="52" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="74.5" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    
                    {/* Up */}
                    <rect x="52" y="3" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="74.5" y="33" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="74.5" y1="50" x2="74.5" y2="52" stroke="#10b981" strokeWidth="3"/>
                    
                    {/* Right */}
                    <rect x="101" y="52" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="123.5" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="99" y1="74.5" x2="101" y2="74.5" stroke="#10b981" strokeWidth="3"/>
                    
                    {/* Down */}
                    <rect x="52" y="101" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="74.5" y="131" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="74.5" y1="99" x2="74.5" y2="101" stroke="#10b981" strokeWidth="3"/>
                    
                    {/* Left */}
                    <rect x="3" y="52" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="25.5" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="50" y1="74.5" x2="52" y2="74.5" stroke="#10b981" strokeWidth="3"/>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">4-directional: ⬆️ ⬇️ ⬅️ ➡️</p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">❌ Not Connected (Different Islands)</h5>
                </div>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 150 150" className="w-32 h-32">
                    {/* Center cell */}
                    <rect x="52" y="52" width="45" height="45" fill="#10b981" stroke="#059669" strokeWidth="2" rx="4"/>
                    <text x="74.5" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    
                    {/* Diagonal top-left */}
                    <rect x="3" y="3" width="45" height="45" fill="#a855f7" stroke="#9333ea" strokeWidth="2" rx="4"/>
                    <text x="25.5" y="33" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="30" y1="30" x2="68" y2="68" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
                    <text x="49" y="49" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">✗</text>
                    
                    {/* Diagonal top-right */}
                    <rect x="101" y="3" width="45" height="45" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="4"/>
                    <text x="123.5" y="33" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="118" y1="30" x2="80" y2="68" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
                    <text x="99" y="49" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">✗</text>
                    
                    {/* Diagonal bottom-left */}
                    <rect x="3" y="101" width="45" height="45" fill="#ec4899" stroke="#db2777" strokeWidth="2" rx="4"/>
                    <text x="25.5" y="131" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="30" y1="118" x2="68" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
                    <text x="49" y="99" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">✗</text>
                    
                    {/* Diagonal bottom-right */}
                    <rect x="101" y="101" width="45" height="45" fill="#06b6d4" stroke="#0891b2" strokeWidth="2" rx="4"/>
                    <text x="123.5" y="131" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                    <line x1="118" y1="118" x2="80" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
                    <text x="99" y="99" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">✗</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Diagonals don't count: ↖️ ↗️ ↙️ ↘️</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>DFS Approach:</strong> Mark all connected lands as visited</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>4-Directional:</strong> Check up, down, left, right (not diagonal)</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>Mark as Visited:</strong> Change '1' to '0' to avoid revisiting</span></div>
            </AlertDescription>
          </Alert>

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
          <CardDescription>Understanding island counting through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Find First Island */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">First Island Found</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">
                Start scanning from top-left. Found land at <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded font-medium">(0,0)</code>. 
                Run DFS to mark all connected land: explores right to (0,1), down to (1,0), then (1,1). 
                All 4 cells form one island. <span className="font-semibold text-emerald-600">Islands: 1</span>
              </p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-island1"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {/* Grid cells */}
                {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3, 4].map((col) => {
                    const isIsland1 = (row === 0 || row === 1) && (col === 0 || col === 1);
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 60 + 50}
                          y={row * 60 + 30}
                          width="55"
                          height="55"
                          fill={isIsland1 ? '#10b981' : (grid[row][col] === 1 ? '#94a3b8' : '#1e293b')}
                          stroke={isIsland1 ? '#059669' : '#64748b'}
                          strokeWidth={isIsland1 ? 3 : 1}
                          rx="4"
                          filter={isIsland1 ? 'url(#glow-island1)' : undefined}
                        >
                          {isIsland1 && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text
                          x={col * 60 + 77.5}
                          y={row * 60 + 62}
                          textAnchor="middle"
                          fill="white"
                          fontSize="20"
                          fontWeight="bold"
                        >
                          {grid[row][col]}
                        </text>
                      </g>
                    );
                  })
                ))}
                <rect x="5" y="275" width="135" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="290" fontSize="12" fill="#10b981" fontWeight="600">Island 1: 4 cells</text>
              </svg>
            </div>


          {/* Step 2: Find Second Island */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Second Island Found</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">
                Continue scanning. Skip already visited cells and water. Found new land at <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-medium">(2,2)</code>. 
                DFS checks all 4 directions - all are water or out of bounds. This is a single-cell island. 
                <span className="font-semibold text-purple-600">Islands: 2</span>
              </p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-island2"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3, 4].map((col) => {
                    const isIsland1 = (row === 0 || row === 1) && (col === 0 || col === 1);
                    const isIsland2 = row === 2 && col === 2;
                    const color = isIsland1 ? '#10b981' : isIsland2 ? '#a855f7' : (grid[row][col] === 1 ? '#94a3b8' : '#1e293b');
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 60 + 50}
                          y={row * 60 + 30}
                          width="55"
                          height="55"
                          fill={color}
                          stroke={isIsland2 ? '#9333ea' : (isIsland1 ? '#059669' : '#64748b')}
                          strokeWidth={isIsland2 ? 3 : (isIsland1 ? 2 : 1)}
                          rx="4"
                          filter={isIsland2 ? 'url(#glow-island2)' : undefined}
                        >
                          {isIsland2 && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text x={col * 60 + 77.5} y={row * 60 + 62} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                          {grid[row][col]}
                        </text>
                      </g>
                    );
                  })
                ))}
                <rect x="5" y="275" width="125" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="290" fontSize="12" fill="#a855f7" fontWeight="600">Island 2: 1 cell</text>
              </svg>
            </div>

          {/* Step 3: Find Third Island */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Third Island Found</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">
                Continue grid scan. Found unvisited land at <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-medium">(3,3)</code>. 
                Run DFS which explores right to (3,4). Both cells connected, forming the third island. 
                Grid scan complete - no more unvisited land. <span className="font-semibold text-orange-600">✅ Total: 3 islands</span>
              </p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-island3"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {[0, 1, 2, 3].map((row) => (
                  [0, 1, 2, 3, 4].map((col) => {
                    const isIsland1 = (row === 0 || row === 1) && (col === 0 || col === 1);
                    const isIsland2 = row === 2 && col === 2;
                    const isIsland3 = row === 3 && (col === 3 || col === 4);
                    const color = isIsland1 ? '#10b981' : isIsland2 ? '#a855f7' : isIsland3 ? '#f59e0b' : (grid[row][col] === 1 ? '#94a3b8' : '#1e293b');
                    return (
                      <g key={`${row}-${col}`}>
                        <rect
                          x={col * 60 + 50}
                          y={row * 60 + 30}
                          width="55"
                          height="55"
                          fill={color}
                          stroke={isIsland3 ? '#d97706' : (isIsland2 ? '#9333ea' : (isIsland1 ? '#059669' : '#64748b'))}
                          strokeWidth={isIsland3 ? 3 : (isIsland2 || isIsland1 ? 2 : 1)}
                          rx="4"
                          filter={isIsland3 ? 'url(#glow-island3)' : undefined}
                        >
                          {isIsland3 && <animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite"/>}
                        </rect>
                        <text x={col * 60 + 77.5} y={row * 60 + 62} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                          {grid[row][col]}
                        </text>
                      </g>
                    );
                  })
                ))}
                <rect x="5" y="265" width="215" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="280" fontSize="12" fontWeight="600">
                  <tspan fill="#10b981">Island 1 </tspan>
                  <tspan fill="#a855f7">Island 2 </tspan>
                  <tspan fill="#f59e0b">Island 3</tspan>
                </text>
              </svg>
            </div>

          {/* Key Insights */}
          <Alert className="border-emerald-200 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <Lightbulb className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>DFS Marking:</strong> Once we find land, DFS marks all connected cells to avoid counting them again</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>4 Directions:</strong> Islands are connected horizontally or vertically, not diagonally</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>In-place Modification:</strong> Changing '1' to '0' marks visited without extra space</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Count on Discovery:</strong> Increment counter only when starting DFS on a new island</span>
              </div>
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
            Interactive Island Counting Animation
          </CardTitle>
          <CardDescription>Watch DFS explore the grid and count islands</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">numIslands.js</span>
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
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Position:</span><span className="font-semibold text-blue-600 dark:text-blue-400">({steps[currentStep].row ?? '-'}, {steps[currentStep].col ?? '-'})</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Islands:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].islandCount}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Visited:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].visited.length} cells</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].islandCount === 3 ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].islandCount === 3 ? 'bg-green-600' : 'bg-blue-600'}`}>
                    {steps[currentStep].islandCount === 3 ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].islandCount === 3 ? 'text-green-900 dark:text-green-100' : 'text-blue-900 dark:text-blue-100'}`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].islandCount === 3 ? 'text-green-900 dark:text-green-50' : 'text-blue-900 dark:text-blue-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Grid Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Grid Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-700"></div><span className="text-slate-600 dark:text-slate-400">Water</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-400"></div><span className="text-slate-600 dark:text-slate-400">Land</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-amber-500"></div><span className="text-slate-600 dark:text-slate-400">Exploring</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-emerald-500"></div><span className="text-slate-600 dark:text-slate-400">Visited</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <svg viewBox="0 0 300 220" className="w-full max-w-md h-auto">
                  {[0, 1, 2, 3].map((row) => (
                    [0, 1, 2, 3, 4].map((col) => {
                      const color = getCellColor(row, col, steps[currentStep]);
                      return (
                        <g key={`${row}-${col}`}>
                          <rect
                            x={col * 55 + 10}
                            y={row * 50 + 10}
                            width="50"
                            height="45"
                            fill={color}
                            stroke="#64748b"
                            strokeWidth="2"
                            rx="4"
                          />
                          <text
                            x={col * 55 + 35}
                            y={row * 50 + 38}
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
      <Card className="border-emerald-200 dark:border-emerald-800 mb-8">
        <CardHeader><CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">⏱️ Time: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visit each cell once. M = rows, N = columns</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space: O(M × N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Recursion stack in worst case (all land)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Number of Islands - Complete Implementation"
        language="javascript"
        code={`function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  
  function dfs(r, c) {
    // Boundary check and water check
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
      return;
    }
    
    // Mark as visited by changing to water
    grid[r][c] = '0';
    
    // Explore all 4 directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }
  
  // Scan the entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        dfs(r, c); // Mark entire island
        count++; // Found a new island
      }
    }
  }
  
  return count;
}

// Example usage
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

console.log(numIslands(grid)); // Output: 3`}
        colorTheme="emerald"
      />

    </div>
  );
}

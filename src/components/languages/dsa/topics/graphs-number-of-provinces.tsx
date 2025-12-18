'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, 
  GitBranch, ArrowRight, Network, 
  Lightbulb, Code, Users
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function NumberOfProvinces() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Adjacency matrix: 3 cities (0, 1, 2)
  const isConnected = [
    [1, 1, 0],  // City 0 connected to 0 (itself) and 1
    [1, 1, 0],  // City 1 connected to 0 and 1
    [0, 0, 1]   // City 2 connected only to itself
  ];

  const steps = [
    { step: 1, description: '🏙️ Problem: Count provinces (groups of connected cities)', currentLine: 1, city: null, visited: [], provinceCount: 0, exploring: [], inDFS: false },
    { step: 2, description: '📋 Initialize: Set province count = 0', currentLine: 2, city: null, visited: [], provinceCount: 0, exploring: [], inDFS: false },
    { step: 3, description: '📋 Initialize: Create visited array [false, false, false]', currentLine: 3, city: null, visited: [], provinceCount: 0, exploring: [], inDFS: false },
    { step: 4, description: '🔄 Loop: Start iterating city i=0', currentLine: 4, city: 0, visited: [], provinceCount: 0, exploring: [], inDFS: false },
    { step: 5, description: '🔍 Check: Is city 0 visited? NO', currentLine: 5, city: 0, visited: [], provinceCount: 0, exploring: [], inDFS: false },
    { step: 6, description: '🚀 Call DFS: dfs(0) - Explore province starting from city 0', currentLine: 6, city: 0, visited: [], provinceCount: 0, exploring: [0], inDFS: true },
    { step: 7, description: '✅ DFS: Mark city 0 as visited', currentLine: 12, city: 0, visited: [0], provinceCount: 0, exploring: [0], inDFS: true },
    { step: 8, description: '🔄 DFS: Loop through all cities to find connections', currentLine: 13, city: 0, visited: [0], provinceCount: 0, exploring: [0], inDFS: true },
    { step: 9, description: '🔍 DFS: Check j=0 - isConnected[0][0]=1, but already visited', currentLine: 14, city: 0, visited: [0], provinceCount: 0, exploring: [0], inDFS: true, checkingCity: 0 },
    { step: 10, description: '🔍 DFS: Check j=1 - isConnected[0][1]=1 and not visited!', currentLine: 14, city: 0, visited: [0], provinceCount: 0, exploring: [0], inDFS: true, checkingCity: 1 },
    { step: 11, description: '🚀 DFS: Recursive call dfs(1) from city 0', currentLine: 15, city: 1, visited: [0], provinceCount: 0, exploring: [0, 1], inDFS: true },
    { step: 12, description: '✅ DFS: Mark city 1 as visited', currentLine: 12, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0, 1], inDFS: true },
    { step: 13, description: '🔄 DFS: Loop through all cities from city 1', currentLine: 13, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0, 1], inDFS: true },
    { step: 14, description: '🔍 DFS: Check j=0 - isConnected[1][0]=1, but already visited', currentLine: 14, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0, 1], inDFS: true, checkingCity: 0 },
    { step: 15, description: '🔍 DFS: Check j=1 - isConnected[1][1]=1, but already visited', currentLine: 14, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0, 1], inDFS: true, checkingCity: 1 },
    { step: 16, description: '🔍 DFS: Check j=2 - isConnected[1][2]=0 (not connected)', currentLine: 14, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0, 1], inDFS: true, checkingCity: 2 },
    { step: 17, description: '🔙 DFS: Return from dfs(1) - all neighbors explored', currentLine: 13, city: 1, visited: [0, 1], provinceCount: 0, exploring: [0], inDFS: true },
    { step: 18, description: '🔍 DFS: Back to city 0, continue checking j=2', currentLine: 14, city: 0, visited: [0, 1], provinceCount: 0, exploring: [0], inDFS: true, checkingCity: 2 },
    { step: 19, description: '🔍 DFS: Check j=2 - isConnected[0][2]=0 (not connected)', currentLine: 14, city: 0, visited: [0, 1], provinceCount: 0, exploring: [0], inDFS: true, checkingCity: 2 },
    { step: 20, description: '✅ DFS Complete: Province 1 fully explored (cities 0, 1)', currentLine: 6, city: 0, visited: [0, 1], provinceCount: 0, exploring: [], inDFS: false },
    { step: 21, description: '➕ Increment: provinceCount++ (Province 1 found!)', currentLine: 7, city: 0, visited: [0, 1], provinceCount: 1, exploring: [], inDFS: false },
    { step: 22, description: '🔄 Loop: Continue to city i=1', currentLine: 4, city: 1, visited: [0, 1], provinceCount: 1, exploring: [], inDFS: false },
    { step: 23, description: '✅ Check: City 1 already visited (skip)', currentLine: 5, city: 1, visited: [0, 1], provinceCount: 1, exploring: [], inDFS: false },
    { step: 24, description: '🔄 Loop: Continue to city i=2', currentLine: 4, city: 2, visited: [0, 1], provinceCount: 1, exploring: [], inDFS: false },
    { step: 25, description: '🔍 Check: Is city 2 visited? NO', currentLine: 5, city: 2, visited: [0, 1], provinceCount: 1, exploring: [], inDFS: false },
    { step: 26, description: '🚀 Call DFS: dfs(2) - Explore province starting from city 2', currentLine: 6, city: 2, visited: [0, 1], provinceCount: 1, exploring: [2], inDFS: true },
    { step: 27, description: '✅ DFS: Mark city 2 as visited', currentLine: 12, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [2], inDFS: true },
    { step: 28, description: '🔄 DFS: Loop through all cities from city 2', currentLine: 13, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [2], inDFS: true },
    { step: 29, description: '🔍 DFS: Check j=0 - isConnected[2][0]=0 (not connected)', currentLine: 14, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [2], inDFS: true, checkingCity: 0 },
    { step: 30, description: '🔍 DFS: Check j=1 - isConnected[2][1]=0 (not connected)', currentLine: 14, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [2], inDFS: true, checkingCity: 1 },
    { step: 31, description: '🔍 DFS: Check j=2 - isConnected[2][2]=1, but already visited', currentLine: 14, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [2], inDFS: true, checkingCity: 2 },
    { step: 32, description: '✅ DFS Complete: Province 2 fully explored (only city 2)', currentLine: 6, city: 2, visited: [0, 1, 2], provinceCount: 1, exploring: [], inDFS: false },
    { step: 33, description: '➕ Increment: provinceCount++ (Province 2 found!)', currentLine: 7, city: 2, visited: [0, 1, 2], provinceCount: 2, exploring: [], inDFS: false },
    { step: 34, description: '🔄 Loop: All cities checked - loop complete', currentLine: 4, city: 2, visited: [0, 1, 2], provinceCount: 2, exploring: [], inDFS: false },
    { step: 35, description: '🎯 Return: provinceCount = 2 (Found 2 provinces!)', currentLine: 8, city: null, visited: [0, 1, 2], provinceCount: 2, exploring: [], inDFS: false },
    { step: 36, description: '✅ Complete: Algorithm finished successfully!', currentLine: 8, city: null, visited: [0, 1, 2], provinceCount: 2, exploring: [], inDFS: false }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const provinceCountStr = stepData.provinceCount.toString();
    const visitedStr = `[${stepData.visited.map(v => `true`).join(', ')}]`;
    const checkingCity = stepData.checkingCity;
    
    return [
      { line: 1, code: 'function findCircleNum(isConnected) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let provinces = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.step >= 2 ? `provinces=${provinceCountStr}` : '' },
      { line: 3, code: '  const visited = new Array(n).fill(false);', active: stepData.currentLine === 3, indent: 1, values: stepData.step >= 3 ? `visited=${visitedStr}` : '' },
      { line: 4, code: '  for (let i = 0; i < n; i++) {', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine === 4 && stepData.city !== null ? `i=${stepData.city}` : '' },
      { line: 5, code: '    if (!visited[i]) {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && stepData.city !== null ? `visited[${stepData.city}]=${stepData.visited.includes(stepData.city)}` : '' },
      { line: 6, code: '      dfs(i);', active: stepData.currentLine === 6 && !stepData.inDFS, indent: 3, values: stepData.currentLine === 6 && stepData.city !== null ? `call dfs(${stepData.city})` : '' },
      { line: 7, code: '      provinces++;', active: stepData.currentLine === 7, indent: 3, values: stepData.currentLine === 7 ? `provinces++ → ${stepData.provinceCount}` : '' },
      { line: 8, code: '  }}', active: false, indent: 1 },
      { line: 9, code: '  return provinces;', active: stepData.currentLine === 8, indent: 1, values: stepData.currentLine === 8 ? `return ${provinceCountStr}` : '' },
      { line: 10, code: '}', active: false, indent: 0 },
      { line: 11, code: '', active: false, indent: 0 },
      { line: 12, code: 'function dfs(i) {', active: stepData.inDFS && (stepData.currentLine >= 12 && stepData.currentLine <= 15), indent: 0, values: stepData.inDFS && stepData.city !== null ? `dfs(${stepData.city})` : '' },
      { line: 13, code: '  visited[i] = true;', active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 && stepData.city !== null ? `visited[${stepData.city}]=true` : '' },
      { line: 14, code: '  for (let j = 0; j < n; j++) {', active: stepData.currentLine === 13 || stepData.currentLine === 14, indent: 1, values: (stepData.currentLine === 13 || stepData.currentLine === 14) && checkingCity !== undefined ? `j=${checkingCity}` : '' },
      { line: 15, code: '    if (isConnected[i][j] === 1 && !visited[j]) {', active: stepData.currentLine === 14, indent: 2, values: stepData.currentLine === 14 && stepData.city !== null && checkingCity !== undefined ? `isConnected[${stepData.city}][${checkingCity}]=${isConnected[stepData.city][checkingCity]}` : '' },
      { line: 16, code: '      dfs(j);', active: stepData.currentLine === 15, indent: 3, values: stepData.currentLine === 15 && checkingCity !== undefined ? `call dfs(${checkingCity})` : '' },
      { line: 17, code: '  }}', active: false, indent: 1 },
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

  const getCityColor = (cityIndex: number, stepData: typeof steps[0]) => {
    const isVisited = stepData.visited.includes(cityIndex);
    const isExploring = stepData.exploring.includes(cityIndex);
    const isCurrent = stepData.city === cityIndex;
    
    if (isCurrent) return '#3b82f6'; // blue - current
    if (isExploring) return '#f59e0b'; // orange - exploring
    if (isVisited) return '#10b981'; // green - visited
    return '#94a3b8'; // gray - unvisited
  };

  const cities = [
    { id: 0, x: 100, y: 100, label: 'City 0' },
    { id: 1, x: 300, y: 100, label: 'City 1' },
    { id: 2, x: 200, y: 250, label: 'City 2' }
  ];

  return (
    <div className="w-full px-4 py-8">
      <PageHeader
        icon={Users}
        category="DSA · Graphs"
        title="Number of Provinces"
        description="Use DFS to count connected components in an adjacency matrix"
        colorTheme="purple"
        badges={[
          { label: 'DFS', variant: 'default' },
          { label: 'Time: O(N²)', variant: 'success' },
          { label: 'Space: O(N)', variant: 'info' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-purple-200 dark:border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Learn province counting with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5" />
              What is a Province?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Given <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">n</code> cities and an <strong>adjacency matrix</strong> <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">isConnected</code> where <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">isConnected[i][j] = 1</code> if city <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">i</code> and city <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">j</code> are directly connected. A <strong>province</strong> is a group of directly or indirectly connected cities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Adjacency Matrix */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">ADJACENCY MATRIX</div>
                <div className="font-mono text-xs space-y-1">
                  <div className="flex gap-2">
                    <span className="text-slate-400 w-6">&nbsp;</span>
                    <span className="text-purple-600 font-bold w-6">0</span>
                    <span className="text-purple-600 font-bold w-6">1</span>
                    <span className="text-purple-600 font-bold w-6">2</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-600 font-bold w-6">0</span>
                    <span className="w-6 text-emerald-600 font-bold">1</span>
                    <span className="w-6 text-emerald-600 font-bold">1</span>
                    <span className="w-6 text-slate-400">0</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-600 font-bold w-6">1</span>
                    <span className="w-6 text-emerald-600 font-bold">1</span>
                    <span className="w-6 text-emerald-600 font-bold">1</span>
                    <span className="w-6 text-slate-400">0</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-600 font-bold w-6">2</span>
                    <span className="w-6 text-slate-400">0</span>
                    <span className="w-6 text-slate-400">0</span>
                    <span className="w-6 text-purple-600 font-bold">1</span>
                  </div>
                </div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">1</span>
                    <span className="text-slate-600 dark:text-slate-400">= Connected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">0</span>
                    <span className="text-slate-600 dark:text-slate-400">= Not connected</span>
                  </div>
                </div>
              </div>

              {/* Visual Graph */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">GRAPH REPRESENTATION</div>
                <svg viewBox="0 0 200 180" className="w-full h-auto">
                  {/* Connection line */}
                  <line x1="50" y1="50" x2="150" y2="50" stroke="#10b981" strokeWidth="3" opacity="0.8"/>
                  
                  {/* City 0 */}
                  <circle cx="50" cy="50" r="25" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                  <text x="50" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                  <text x="50" y="57" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">0</text>
                  
                  {/* City 1 */}
                  <circle cx="150" cy="50" r="25" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                  <text x="150" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                  <text x="150" y="57" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
                  
                  {/* City 2 */}
                  <circle cx="100" cy="130" r="25" fill="#a855f7" stroke="#9333ea" strokeWidth="3"/>
                  <text x="100" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                  <text x="100" y="137" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
                </svg>
                <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Province 1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-slate-600 dark:text-slate-400">Province 2</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">OUTPUT</div>
                <div className="text-5xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">Provinces found</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Province 1: 2 cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Province 2: 1 city</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Types */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">✅ Same Province</h5>
                </div>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 250 120" className="w-full h-auto">
                    {/* Direct connection */}
                    <text x="125" y="15" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Direct Connection</text>
                    <circle cx="60" cy="60" r="25" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                    <text x="60" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                    <text x="60" y="67" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                    
                    <line x1="85" y1="60" x2="165" y2="60" stroke="#10b981" strokeWidth="4"/>
                    <text x="125" y="50" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Connected</text>
                    
                    <circle cx="190" cy="60" r="25" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                    <text x="190" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                    <text x="190" y="67" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                    
                    <text x="125" y="105" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">matrix[0][1] = 1</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Cities connected in adjacency matrix</p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <h5 className="font-semibold text-red-900 dark:text-red-100">❌ Different Provinces</h5>
                </div>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 250 120" className="w-full h-auto">
                    {/* No connection */}
                    <text x="125" y="15" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">No Connection</text>
                    <circle cx="60" cy="60" r="25" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                    <text x="60" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                    <text x="60" y="67" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">0</text>
                    
                    <line x1="85" y1="60" x2="165" y2="60" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5"/>
                    <text x="125" y="50" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="bold">✗</text>
                    
                    <circle cx="190" cy="60" r="25" fill="#a855f7" stroke="#9333ea" strokeWidth="3"/>
                    <text x="190" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">City</text>
                    <text x="190" y="67" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                    
                    <text x="125" y="105" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="600">matrix[0][2] = 0</text>
                  </svg>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">Cities not connected in adjacency matrix</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>Adjacency Matrix:</strong> 2D array where matrix[i][j]=1 means connection</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>DFS Approach:</strong> Visit all connected cities from each unvisited city</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span><strong>Connected Component:</strong> Each DFS exploration finds one province</span></div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Step-by-Step Visual Walkthrough */}
      <Card className="border-purple-200 dark:border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <GitBranch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Visual Walkthrough
          </CardTitle>
          <CardDescription>Understanding province counting through diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Step 1: Find Province 1 */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Province 1: Cities 0 & 1</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">Start from city 0. DFS explores connected cities via adjacency matrix: city 0 → city 1 (connected via edge). Province 1 complete. <span className="font-semibold text-emerald-600">Provinces: 1</span></p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-prov1"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {/* Connection line */}
                <line x1="100" y1="100" x2="300" y2="100" stroke="#10b981" strokeWidth="4" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
                </line>
                {/* City 0 */}
                <circle cx="100" cy="100" r="35" fill="#10b981" stroke="#059669" strokeWidth="4" filter="url(#glow-prov1)">
                  <animate attributeName="r" values="35;38;35" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="100" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="100" y="110" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">0</text>
                {/* City 1 */}
                <circle cx="300" cy="100" r="35" fill="#10b981" stroke="#059669" strokeWidth="4" filter="url(#glow-prov1)">
                  <animate attributeName="r" values="35;38;35" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="300" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="300" y="110" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                {/* City 2 */}
                <circle cx="200" cy="230" r="35" fill="#94a3b8" stroke="#64748b" strokeWidth="3"/>
                <text x="200" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="200" y="240" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
                <rect x="5" y="275" width="180" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="290" fontSize="12" fill="#10b981" fontWeight="600">Province 1: Cities 0 & 1</text>
              </svg>
            </div>

          {/* Step 2: Find Province 2 */}
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Province 2: City 2</h3>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed ml-10">City 1 already visited (skip). City 2 unvisited - start new DFS. Check adjacency matrix - no connections to other cities. Isolated province. <span className="font-semibold text-purple-600">✅ Total: 2 provinces</span></p>
            </div>
            <svg viewBox="0 0 400 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <defs>
                  <filter id="glow-prov2"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                {/* Connection line */}
                <line x1="100" y1="100" x2="300" y2="100" stroke="#10b981" strokeWidth="4" opacity="0.6"/>
                {/* City 0 */}
                <circle cx="100" cy="100" r="35" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="100" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="100" y="110" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">0</text>
                {/* City 1 */}
                <circle cx="300" cy="100" r="35" fill="#10b981" stroke="#059669" strokeWidth="3"/>
                <text x="300" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="300" y="110" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>
                {/* City 2 */}
                <circle cx="200" cy="230" r="35" fill="#a855f7" stroke="#9333ea" strokeWidth="4" filter="url(#glow-prov2)">
                  <animate attributeName="r" values="35;38;35" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="200" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">City</text>
                <text x="200" y="240" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2</text>
                <rect x="5" y="265" width="235" height="20" fill="white" fillOpacity="0.9" rx="4" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="10" y="280" fontSize="12" fontWeight="600">
                  <tspan fill="#10b981">Province 1: {'{0,1}'} </tspan>
                  <tspan fill="#a855f7">Province 2: {'{2}'}</tspan>
                </text>
              </svg>
            </div>

          {/* Key Insights */}
          <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <Lightbulb className="h-5 w-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Key Insights</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>One DFS = One Province:</strong> Each DFS exploration from an unvisited city finds one complete province</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Adjacency Matrix:</strong> Check matrix[i][j]=1 to find all cities connected to city i</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Visited Array:</strong> Prevents revisiting cities and counting them in multiple provinces</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Count on Discovery:</strong> Increment counter only when starting DFS on a new unvisited city</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-purple-200 dark:border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Interactive Province Counting Animation
          </CardTitle>
          <CardDescription>Watch DFS explore cities and count provinces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
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
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as typeof animationSpeed)} disabled={isAnimating} className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg">
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded border border-purple-300 dark:border-purple-700">
              <span className="text-xs font-medium text-purple-900 dark:text-purple-100">{currentStep + 1} / {steps.length}</span>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findCircleNum.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>
                      {lineData.values && <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">// {lineData.values}</span>}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Current City:</span><span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].city ?? '-'}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Provinces:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].provinceCount}</span></div>
                    <div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">Visited:</span><span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].visited.length} cities</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-4 rounded-lg border shadow-sm ${steps[currentStep].provinceCount === 2 ? 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-300 dark:border-purple-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${steps[currentStep].provinceCount === 2 ? 'bg-purple-600' : 'bg-blue-600'}`}>
                    {steps[currentStep].provinceCount === 2 ? <CheckCircle className="w-4 h-4 text-white" /> : <GitBranch className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${steps[currentStep].provinceCount === 2 ? 'text-purple-900 dark:text-purple-100' : 'text-blue-900 dark:text-blue-100'}`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed pl-8 ${steps[currentStep].provinceCount === 2 ? 'text-purple-900 dark:text-purple-50' : 'text-blue-900 dark:text-blue-50'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Graph Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">City Network Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-slate-400"></div><span className="text-slate-600 dark:text-slate-400">Unvisited</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div><span className="text-slate-600 dark:text-slate-400">Current</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-amber-500"></div><span className="text-slate-600 dark:text-slate-400">Exploring</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500"></div><span className="text-slate-600 dark:text-slate-400">Visited</span></div>
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full max-w-lg h-auto">
                  {/* Connection lines */}
                  <line x1="100" y1="100" x2="300" y2="100" stroke={steps[currentStep].visited.includes(0) && steps[currentStep].visited.includes(1) ? '#10b981' : '#cbd5e1'} strokeWidth="3" opacity="0.6"/>
                  
                  {/* Cities */}
                  {cities.map((city) => {
                    const color = getCityColor(city.id, steps[currentStep]);
                    return (
                      <g key={city.id}>
                        <circle cx={city.x} cy={city.y} r="30" fill={color} stroke={color === '#3b82f6' ? '#1e40af' : color === '#f59e0b' ? '#d97706' : color === '#10b981' ? '#059669' : '#64748b'} strokeWidth="3"/>
                        <text x={city.x} y={city.y - 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">City</text>
                        <text x={city.x} y={city.y + 10} textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">{city.id}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity & Code */}
      <Card className="border-purple-200 dark:border-purple-800 mb-8">
        <CardHeader><CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">⏱️ Time: O(N²)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visit each city once, check N connections per city. N = number of cities</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space: O(N)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Visited array + recursion stack depth at most N</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Number of Provinces - Complete Implementation"
        language="javascript"
        code={`function findCircleNum(isConnected) {
  const n = isConnected.length;
  let provinces = 0;
  const visited = new Array(n).fill(false);
  
  function dfs(i) {
    visited[i] = true;
    
    // Check all other cities
    for (let j = 0; j < n; j++) {
      // If connected and not visited, explore
      if (isConnected[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }
  
  // Try to start DFS from each city
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // Explore entire province
      provinces++; // Found a new province
    }
  }
  
  return provinces;
}

// Example usage
const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];

console.log(findCircleNum(isConnected)); // Output: 2
// Province 1: Cities 0 and 1 (connected)
// Province 2: City 2 (isolated)`}
        colorTheme="purple"
      />

    </div>
  );
}

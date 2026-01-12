import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { GitBranch, GitFork, Layers, Info, ArrowRight, Copy, Check } from 'lucide-react';

const GitBranching: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'creation' | 'development' | 'merge'>('creation');

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitFork}
        category="Git & GitHub · Git Fundamentals"
        title="Git Branching"
        description="Learn how to create, manage, and merge branches in Git. Master parallel development workflows that enable teams to collaborate effectively without conflicts!"
        colorTheme="cyan"
      />

      {/* Section 1: Understanding Branches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <GitBranch className="w-7 h-7" />
            Understanding Git Branches
          </CardTitle>
          <CardDescription className="text-base">
            Learn how Git branches work and why they're essential for parallel development.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">What is a Branch?</h4>
            <p className="text-cyan-800 dark:text-cyan-200 mb-4">
              A branch in Git is essentially a movable pointer to a specific commit. Unlike other version control systems, 
              Git branches are lightweight and cheap to create, making it easy to work on multiple features simultaneously.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-cyan-950/50 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h5 className="font-medium text-cyan-900 dark:text-cyan-100 mb-2">🌳 Main Branch</h5>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  The default branch, typically named 'main' or 'master', represents the stable production code.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-cyan-950/50 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h5 className="font-medium text-cyan-900 dark:text-cyan-100 mb-2">🌿 Feature Branch</h5>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  Created from main to work on new features without affecting the stable code.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-cyan-950/50 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h5 className="font-medium text-cyan-900 dark:text-cyan-100 mb-2">🔀 Merge</h5>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  Combines changes from a feature branch back into main when the feature is complete.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Why Use Branches?</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Parallel Development:</strong> Multiple developers can work on different features simultaneously without conflicts.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Isolation:</strong> Experimental or incomplete code doesn't affect the main production branch.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Safe Testing:</strong> Features can be thoroughly tested in isolation before merging.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Easy Rollback:</strong> If something goes wrong, you can easily switch back to a stable state.</span>
              </li>
            </ul>
          </div>

          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Branches in Git are lightweight and cheap to create. Unlike other version control systems, Git branches are simply pointers to commits, making branching operations nearly instantaneous.
            </AlertDescription>
          </Alert>

          {/* Visual Branch Evolution Diagram */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-100 mb-4 text-center">🌳 Visual Branch Evolution</h4>
            
            <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                This diagram shows how branches split from the main line (A→D), develop features (F1, F2, F3, F4), and merge back (M1, M2).
              </p>
            </div>
            
            <div className="relative h-[600px] w-full bg-white dark:bg-gray-800 rounded-lg p-8 overflow-hidden">
              {/* SVG for all connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {/* Drop shadow filter */}
                <defs>
                  <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                  </filter>
                  <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.4"/>
                  </filter>
                </defs>
                
                {/* Main branch horizontal line - A to M1 to M2 to D */}
                <line x1="80" y1="300" x2="92%" y2="300" stroke="#1E40AF" strokeWidth="8" strokeLinecap="round" filter="url(#lineShadow)" />
                
                {/* Highlighted line segment between A and D */}
                <line x1="80" y1="300" x2="88%" y2="300" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                
                {/* Feature Branch 1: First red dot to F1 center point - updated for new positions */}
                <line x1="25%" y1="292" x2="22%" y2="92" stroke="#059669" strokeWidth="2" strokeDasharray="5,3" />
                
                {/* Connection from F1 to F2 (solid line) - updated for new positions */}
                <line x1="22%" y1="92" x2="32%" y2="92" stroke="#059669" strokeWidth="2" />
                
                {/* Connection from F2 to merge 1 (dotted line) - updated for new positions */}
                <line x1="32%" y1="92" x2="45%" y2="292" stroke="#059669" strokeWidth="2" strokeDasharray="5,3" />
                
                {/* Feature Branch 2: Split 2 to F3 center point - original line positions */}
                <line x1="55%" y1="292" x2="55%" y2="508" stroke="#D97706" strokeWidth="2" strokeDasharray="5,3" />
                
                {/* Connection from F3 to F4 (solid line) - original line positions */}
                <line x1="55%" y1="508" x2="65%" y2="508" stroke="#D97706" strokeWidth="2" />
                
                {/* Connection from F4 to merge 2 (dotted line) - original line positions */}
                <line x1="65%" y1="508" x2="75%" y2="292" stroke="#D97706" strokeWidth="2" strokeDasharray="5,3" />
                
                {/* Branch split indicators */}
                <circle cx="25%" cy="300" r="8" fill="#DC2626" stroke="#B91C1C" strokeWidth="2" filter="url(#arrowShadow)" />
                <circle cx="55%" cy="300" r="8" fill="#DC2626" stroke="#B91C1C" strokeWidth="2" filter="url(#arrowShadow)" />
                
                {/* Merge point indicators */}
                <circle cx="45%" cy="300" r="10" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2" filter="url(#arrowShadow)" />
                <circle cx="75%" cy="300" r="10" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2" filter="url(#arrowShadow)" />
                
                {/* Direction arrows */}
                <path d="M 15% 295 L 20% 300 L 15% 305 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1" />
                <path d="M 85% 295 L 90% 300 L 85% 305 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1" />
              </svg>
              
              {/* Main Branch Commits - A and D only */}
              <div className="absolute left-8 top-[272px] z-10">
                <div className="relative group">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Initial</div>
                </div>
              </div>
              
              {/* Final D commit */}
              <div className="absolute left-[85%] top-[272px] z-10">
                <div className="relative group">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Final</div>
                </div>
              </div>
              
              {/* Feature Branch 1 Commits (above main) - moved slightly left */}
              <div className="absolute left-[20%] top-16 z-10">
                <div className="relative group">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-200 dark:ring-green-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold">F1</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Feature 1</div>
                </div>
              </div>
              
              <div className="absolute left-[30%] top-16 z-10">
                <div className="relative group">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-200 dark:ring-green-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold">F2</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Feature 1</div>
                </div>
              </div>
              
              {/* Feature Branch 2 Commits (below main) - moved slightly left */}
              <div className="absolute left-[53%] top-[456px] z-10">
                <div className="relative group">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-amber-200 dark:ring-amber-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold">F3</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Feature 2</div>
                </div>
              </div>
              
              <div className="absolute left-[63%] top-[456px] z-10">
                <div className="relative group">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-amber-200 dark:ring-amber-800 transition-all group-hover:scale-110">
                    <span className="text-white font-bold">F4</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">Feature 2</div>
                </div>
              </div>
              
              {/* Branch Labels */}
              <div className="absolute left-2 top-[220px] z-10">
                <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full shadow-lg border border-blue-300 dark:border-blue-700">
                  <span className="text-sm font-bold text-blue-700 dark:text-blue-300">🌳 main</span>
                </div>
              </div>
              
              <div className="absolute left-[25%] top-0 z-10">
                <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full shadow-lg border border-green-300 dark:border-green-700">
                  <span className="text-sm font-bold text-green-700 dark:text-green-300">🌿 feature-1</span>
                </div>
              </div>
              
              <div className="absolute left-[55%] bottom-0 z-10">
                <div className="bg-amber-100 dark:bg-amber-900 px-4 py-2 rounded-full shadow-lg border border-amber-300 dark:border-amber-700">
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-300">🌿 feature-2</span>
                </div>
              </div>
              
              {/* Annotations */}
              <div className="absolute left-[23%] top-[200px] z-10">
                <div className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded text-xs font-semibold text-red-700 dark:text-red-300">
                  Split 1
                </div>
              </div>
              
              <div className="absolute left-[53%] top-[380px] z-10">
                <div className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded text-xs font-semibold text-red-700 dark:text-red-300">
                  Split 2
                </div>
              </div>
              
              <div className="absolute left-[43%] top-[240px] z-10">
                <div className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs font-semibold text-purple-700 dark:text-purple-300">
                  Merge 1
                </div>
              </div>
              
              <div className="absolute left-[73%] top-[240px] z-10">
                <div className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs font-semibold text-purple-700 dark:text-purple-300">
                  Merge 2
                </div>
              </div>
              
              {/* Enhanced Legend */}
              <div className="absolute bottom-6 right-6 z-10 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-300 dark:border-gray-600 shadow-2xl">
                <h6 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Legend</h6>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Main branch (A→D)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-md"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Feature 1 (F1→F2)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full shadow-md"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Feature 2 (F3→F4)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full shadow-md"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Merges (M1, M2)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Branch points</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Main Line</h5>
                </div>
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  Flow: A → M1 → M2 → D (final state)
                </p>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-green-900 dark:text-green-100 text-sm">Feature 1</h5>
                </div>
                <p className="text-xs text-green-800 dark:text-green-200">
                  Splits early, develops F1→F2, merges at M1
                </p>
              </div>
              
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-amber-900 dark:text-amber-100 text-sm">Feature 2</h5>
                </div>
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  Splits after M1, develops F3→F4, merges at M2
                </p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Final State</h5>
                </div>
                <p className="text-xs text-purple-800 dark:text-purple-200">
                  D represents final merged state
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Branch Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <Layers className="w-7 h-7" />
            Types of Branches
          </CardTitle>
          <CardDescription className="text-base">
            Different types of branches serve different purposes in a well-organized Git workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                    Production
                  </Badge>
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Main/Master</h5>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  The primary branch containing production-ready code.
                </p>
                <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• Always stable and deployable</li>
                  <li>• Protected from direct commits</li>
                  <li>• Only updated via merges</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                    Development
                  </Badge>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Develop</h5>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Integration branch for features ready for next release.
                </p>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Contains tested features</li>
                  <li>• Next release candidate</li>
                  <li>• Integration testing happens here</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                    Feature
                  </Badge>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Feature/*</h5>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Branches for developing new features or improvements.
                </p>
                <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Created from develop branch</li>
                  <li>• Feature-specific work</li>
                  <li>• Merged back when complete</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200">
                    Hotfix
                  </Badge>
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Hotfix/*</h5>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                  Emergency fixes for production issues.
                </p>
                <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Created from main branch</li>
                  <li>• Critical bug fixes</li>
                  <li>• Merged into main and develop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-950/30 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Branch Naming Conventions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Good Examples:</h5>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 font-mono text-xs">
                  <li>• feature/user-authentication</li>
                  <li>• bugfix/login-validation</li>
                  <li>• hotfix/security-patch</li>
                  <li>• refactor/payment-system</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Best Practices:</h5>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <li>• Use descriptive names</li>
                  <li>• Include type prefix</li>
                  <li>• Use kebab-case</li>
                  <li>• Keep names concise but clear</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Basic Branching Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <GitFork className="w-7 h-7" />
            Basic Branching Example
          </CardTitle>
          <CardDescription className="text-base">
            A simple example showing how to create and work with branches.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">Creating a New Feature Branch</h4>
            <div className="bg-gray-100 dark:bg-gray-900 text-cyan-700 dark:text-cyan-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="mb-2"># Switch to main branch and ensure it's up to date</div>
              <div className="mb-2"><span className="text-white">git</span> checkout main</div>
              <div className="mb-2"><span className="text-white">git</span> pull origin main</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Create and switch to a new feature branch</div>
              <div className="mb-2"><span className="text-white">git</span> checkout -b feature/user-profile</div>
              <div className="mb-4"></div>
              <div className="mb-2"># You're now on the new branch and can start working</div>
              <div className="mb-2"><span className="text-white">git</span> branch  # Shows current branch highlighted</div>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Working on Your Branch</h4>
            <div className="bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="mb-2"># Make changes to your files</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Stage and commit your changes</div>
              <div className="mb-2"><span className="text-white">git</span> add .</div>
              <div className="mb-2"><span className="text-white">git</span> commit -m "Add user profile component"</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Push your branch to remote repository</div>
              <div className="mb-2"><span className="text-white">git</span> push -u origin feature/user-profile</div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Merging Back to Main</h4>
            <div className="bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-purple-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="mb-2"># Switch back to main branch</div>
              <div className="mb-2"><span className="text-white">git</span> checkout main</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Merge your feature branch</div>
              <div className="mb-2"><span className="text-white">git</span> merge feature/user-profile</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Push the merged changes</div>
              <div className="mb-2"><span className="text-white">git</span> push origin main</div>
              <div className="mb-4"></div>
              <div className="mb-2"># Clean up by deleting the feature branch</div>
              <div className="mb-2"><span className="text-white">git</span> branch -d feature/user-profile</div>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              In team environments, it's common to use Pull Requests (GitHub) or Merge Requests (GitLab) instead of directly merging branches. 
              This allows code review before changes are integrated into the main branch.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 5: Branch Management Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <GitBranch className="w-7 h-7" />
            Branch Management Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Follow these practices to maintain a clean and efficient Git workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 rounded-r-lg">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do's</h5>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>• Create branches for each feature or bug fix</li>
                  <li>• Keep branches focused on a single purpose</li>
                  <li>• Use descriptive branch names</li>
                  <li>• Regularly sync with the main branch</li>
                  <li>• Delete merged branches to keep repository clean</li>
                  <li>• Write clear commit messages</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20 rounded-r-lg">
                <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don'ts</h5>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                  <li>• Work directly on the main branch</li>
                  <li>• Keep branches alive for too long</li>
                  <li>• Make branches too large or complex</li>
                  <li>• Force push to shared branches</li>
                  <li>• Leave stale branches in the repository</li>
                  <li>• Commit sensitive data to any branch</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🔄 Syncing Your Branch</h5>
                <div className="bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-blue-400 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                  <div className="mb-1"># Fetch latest changes from remote</div>
                  <div className="mb-2"><span className="text-white">git</span> fetch origin</div>
                  <div className="mb-1"># Rebase your branch on top of main</div>
                  <div className="mb-2"><span className="text-white">git</span> rebase origin/main</div>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                  This keeps your branch up-to-date and minimizes merge conflicts.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🧹 Cleaning Up</h5>
                <div className="bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-purple-400 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                  <div className="mb-1"># List all branches (including remote)</div>
                  <div className="mb-2"><span className="text-white">git</span> branch -a</div>
                  <div className="mb-1"># Delete local merged branches</div>
                  <div className="mb-2"><span className="text-white">git</span> branch --merged | grep -v "main" | xargs git branch -d</div>
                </div>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-2">
                  Regular cleanup keeps your repository organized and easy to navigate.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">💡 Pro Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                <li>• Use <code className="bg-amber-200 dark:bg-amber-800 px-1 rounded">git stash</code> to save work in progress</li>
                <li>• Configure auto-completion for Git commands</li>
                <li>• Use Git hooks to enforce branch naming conventions</li>
                <li>• Set up branch protection rules for main branch</li>
              </ul>
              <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                <li>• Use <code className="bg-amber-200 dark:bg-amber-800 px-1 rounded">git reflog</code> to recover lost commits</li>
                <li>• Enable signed commits for better security</li>
                <li>• Use Git aliases for frequently used commands</li>
                <li>• Regularly review and update your .gitignore file</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitBranching;

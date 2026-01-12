import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { GitMerge, GitPullRequest, AlertTriangle, ArrowRight, Info, GitBranch } from 'lucide-react';

const GitMerging: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'fastforward' | 'threeway' | 'conflict'>('fastforward');

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitMerge}
        category="Git & GitHub · Git Fundamentals"
        title="Git Merging"
        description="Learn how to merge branches in Git. Master different merge strategies and handle conflicts like a pro!"
        colorTheme="purple"
      />

      {/* Section 1: Understanding Merges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <GitMerge className="w-7 h-7" />
            Understanding Git Merges
          </CardTitle>
          <CardDescription className="text-base">
            Learn how Git combines changes from different branches and understand different merge strategies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">What is a Merge?</h4>
            <p className="text-purple-800 dark:text-purple-200 mb-4">
              A merge in Git is a way to integrate changes from one branch into another. Git automatically combines 
              the changes when possible, but sometimes requires manual intervention when conflicts occur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">🚀 Fast-Forward</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Simple merge where main branch pointer moves forward to feature branch.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">🔀 Three-Way</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Creates a merge commit when both branches have new commits.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">⚠️ Conflicts</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  When same files are edited, manual resolution is required.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Why Merge?</h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Integrate Features:</strong> Combine completed features into the main codebase.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Team Collaboration:</strong> Share work between team members efficiently.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Maintain History:</strong> Keep a complete record of how code evolved.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span><strong>Resolve Conflicts:</strong> Handle overlapping changes systematically.</span>
              </li>
            </ul>
          </div>

          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Git uses a three-way merge algorithm by default. It finds the common ancestor of both branches, 
              compares the changes, and creates a new merge commit that combines both sets of changes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 2: Types of Merges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <GitBranch className="w-7 h-7" />
            Types of Merges
          </CardTitle>
          <CardDescription className="text-base">
            Different merge scenarios require different strategies. Understanding these helps you choose the right approach.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Merge Type Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveDiagram('fastforward')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeDiagram === 'fastforward'
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fast-Forward</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Main hasn't moved forward</p>
            </button>

            <button
              onClick={() => setActiveDiagram('threeway')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeDiagram === 'threeway'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <GitMerge className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Three-Way</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Both branches have new commits</p>
            </button>

            <button
              onClick={() => setActiveDiagram('conflict')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeDiagram === 'conflict'
                  ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Conflicts</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Same files edited in both</p>
            </button>
          </div>

          {/* Diagram Display */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
            {activeDiagram === 'fastforward' && <FastForwardMergeDiagram />}
            {activeDiagram === 'threeway' && <ThreeWayMergeDiagram />}
            {activeDiagram === 'conflict' && <MergeConflictsDiagram />}
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Essential Merge Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
            <GitPullRequest className="w-7 h-7" />
            Essential Merge Commands
          </CardTitle>
          <CardDescription className="text-base">
            Master these Git commands to handle any merge scenario confidently.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                    Basic
                  </Badge>
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Merge a Branch</h5>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Switch to target branch</div>
                  <div className="mb-2"><span className="text-white">git</span> checkout main</div>
                  <div className="mb-2"># Merge feature branch</div>
                  <div className="mb-2"><span className="text-white">git</span> merge feature-branch</div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                    Strategy
                  </Badge>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Fast-Forward Only</h5>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Only merge if fast-forward possible</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --ff-only feature-branch</div>
                  <div className="mb-2"># Always create merge commit</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --no-ff feature-branch</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200">
                    Conflicts
                  </Badge>
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Handle Conflicts</h5>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 text-red-700 dark:text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Cancel merge and restore</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --abort</div>
                  <div className="mb-2"># Continue after resolving</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --continue</div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                    Advanced
                  </Badge>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Merge Strategies</h5>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-purple-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Use specific strategy</div>
                  <div className="mb-2"><span className="text-white">git</span> merge -s recursive feature</div>
                  <div className="mb-2"># Squash commits</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --squash feature</div>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Always review changes before merging. Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">git diff</code> to see what will be merged, 
              and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">git log --oneline --graph</code> to visualize the merge history.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

// Fast-Forward Merge Component
const FastForwardMergeDiagram: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fast-Forward Merge</h4>
        <p className="text-sm text-green-800 dark:text-green-200">
          The simplest merge type. Main branch pointer simply moves forward to point to the feature branch commit.
          No merge commit is created.
        </p>
      </div>

      <div className="relative h-[400px] w-full bg-white dark:bg-gray-800 rounded-lg p-8 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <filter id="ffShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Main branch line */}
          <line x1="100" y1="200" x2="1100" y2="200" stroke="#10B981" strokeWidth="8" strokeLinecap="round" filter="url(#ffShadow)" />
          <line x1="100" y1="200" x2="1100" y2="200" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeDasharray="20,10">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Directional arrows */}
          <path d="M 300 195 L 310 200 L 300 205 Z" fill="#059669">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M 600 195 L 610 200 L 600 205 Z" fill="#059669">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </path>
        </svg>
        
        {/* Commits */}
        <div className="absolute left-[68px] top-[172px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        <div className="absolute left-[368px] top-[172px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-200 dark:ring-green-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        <div className="absolute left-[668px] top-[172px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-200 dark:ring-green-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        {/* Branch labels */}
        <div className="absolute left-2 top-[140px] z-10">
          <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full shadow-lg border border-blue-300 dark:border-blue-700">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300">🌳 main</span>
          </div>
        </div>
        
        <div className="absolute left-[30%] top-0 z-10">
          <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full shadow-lg border border-green-300 dark:border-green-700">
            <span className="text-sm font-bold text-green-700 dark:text-green-300">🌿 feature</span>
          </div>
        </div>
        
        {/* Fast-forward arrow */}
        <div className="absolute left-[780px] top-[100px] z-10">
          <div className="flex flex-col items-center">
            <div className="text-2xl animate-bounce">👆</div>
            <div className="mt-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full text-xs font-bold text-purple-700 dark:text-purple-300">
              main fast-forwards
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <h5 className="font-semibold text-green-900 dark:text-green-100 text-sm">Before</h5>
          </div>
          <p className="text-xs text-green-800 dark:text-green-200">
            Main points to A, feature has B and C
          </p>
        </div>
        
        <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <h5 className="font-semibold text-green-900 dark:text-green-100 text-sm">Merge</h5>
          </div>
          <p className="text-xs text-green-800 dark:text-green-200">
            Main pointer moves to C
          </p>
        </div>
        
        <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <h5 className="font-semibold text-green-900 dark:text-green-100 text-sm">Result</h5>
          </div>
          <p className="text-xs text-green-800 dark:text-green-200">
            Linear history, no merge commit
          </p>
        </div>
      </div>
    </div>
  );
};

// Three-Way Merge Component
const ThreeWayMergeDiagram: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Three-Way Merge</h4>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Both branches have moved forward with new commits. Git creates a merge commit that combines both histories.
        </p>
      </div>

      <div className="relative h-[400px] w-full bg-white dark:bg-gray-800 rounded-lg p-8 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <filter id="twShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Main branch line */}
          <line x1="100" y1="250" x2="700" y2="250" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" filter="url(#twShadow)" />
          <line x1="100" y1="250" x2="700" y2="250" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" strokeDasharray="20,10">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Feature branch line */}
          <line x1="300" y1="250" x2="300" y2="100" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" filter="url(#twShadow)" />
          <line x1="300" y1="100" x2="500" y2="100" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" filter="url(#twShadow)" />
          <line x1="300" y1="250" x2="300" y2="100" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeDasharray="15,8">
            <animate attributeName="stroke-dashoffset" from="23" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="100" x2="500" y2="100" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" strokeDasharray="15,8">
            <animate attributeName="stroke-dashoffset" from="23" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Merge line */}
          <line x1="500" y1="100" x2="700" y2="250" stroke="#10B981" strokeWidth="6" strokeLinecap="round" filter="url(#twShadow)">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          
          {/* Continue main after merge */}
          <line x1="700" y1="250" x2="1100" y2="250" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" filter="url(#twShadow)" />
          <line x1="700" y1="250" x2="1100" y2="250" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" strokeDasharray="20,10">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Directional arrows */}
          <path d="M 200 245 L 210 250 L 200 255 Z" fill="#2563EB">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M 295 180 L 300 175 L 305 180 Z" fill="#7C3AED">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
          </path>
          <path d="M 400 95 L 410 100 L 400 105 Z" fill="#7C3AED">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
          </path>
          <path d="M 600 180 L 610 185 L 605 175 Z" fill="#10B981">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M 800 245 L 810 250 L 800 255 Z" fill="#2563EB">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
          </path>
        </svg>
        
        {/* Commits */}
        <div className="absolute left-[68px] top-[222px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-200 dark:ring-gray-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        <div className="absolute left-[468px] top-[222px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        <div className="absolute left-[268px] top-[72px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-purple-200 dark:ring-purple-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold">B</span>
            </div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        <div className="absolute left-[468px] top-[72px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-purple-200 dark:ring-purple-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold">C</span>
            </div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        <div className="absolute left-[668px] top-[222px] z-10">
          <div className="relative group">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-200 dark:ring-green-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        {/* Branch labels */}
        <div className="absolute left-2 top-[180px] z-10">
          <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full shadow-lg border border-blue-300 dark:border-blue-700">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300">🌳 main</span>
          </div>
        </div>
        
        <div className="absolute left-[25%] top-0 z-10">
          <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full shadow-lg border border-purple-300 dark:border-purple-700">
            <span className="text-sm font-bold text-purple-700 dark:text-purple-300">🌿 feature</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <h5 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Diverge</h5>
          </div>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            Both branches add commits since A (common ancestor)
          </p>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <h5 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Merge</h5>
          </div>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            Create merge commit M
          </p>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <h5 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Result</h5>
          </div>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            Non-linear history with merge commit
          </p>
        </div>
      </div>
    </div>
  );
};

// Merge Conflicts Component
const MergeConflictsDiagram: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Merge Conflicts</h4>
        <p className="text-sm text-red-800 dark:text-red-200">
          When both branches modify the same lines, Git can't auto-merge. Manual resolution is required.
        </p>
      </div>

      <div className="relative h-[400px] w-full bg-white dark:bg-gray-800 rounded-lg p-8 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <filter id="conflictShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Main branch line */}
          <line x1="100" y1="250" x2="700" y2="250" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" filter="url(#conflictShadow)" />
          <line x1="100" y1="250" x2="700" y2="250" stroke="#F87171" strokeWidth="4" strokeLinecap="round" strokeDasharray="20,10">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Feature branch line */}
          <line x1="300" y1="250" x2="300" y2="100" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" filter="url(#conflictShadow)" />
          <line x1="300" y1="100" x2="500" y2="100" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" filter="url(#conflictShadow)" />
          <line x1="300" y1="250" x2="300" y2="100" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeDasharray="15,8">
            <animate attributeName="stroke-dashoffset" from="23" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="100" x2="500" y2="100" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeDasharray="15,8">
            <animate attributeName="stroke-dashoffset" from="23" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Conflict line */}
          <line x1="500" y1="100" x2="700" y2="250" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" strokeDasharray="5,5" filter="url(#conflictShadow)">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#DC2626;#EF4444;#DC2626" dur="1s" repeatCount="indefinite" />
          </line>
          
          {/* Continue main after conflict */}
          <line x1="700" y1="250" x2="1100" y2="250" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" filter="url(#conflictShadow)" />
          <line x1="700" y1="250" x2="1100" y2="250" stroke="#F87171" strokeWidth="4" strokeLinecap="round" strokeDasharray="20,10">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite" />
          </line>
          
          {/* Directional arrows */}
          <path d="M 200 245 L 210 250 L 200 255 Z" fill="#DC2626">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M 295 180 L 300 175 L 305 180 Z" fill="#D97706">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
          </path>
          <path d="M 400 95 L 410 100 L 400 105 Z" fill="#D97706">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
          </path>
          
          {/* Conflict zone indicator */}
          <circle cx="700" cy="250" r="18" fill="#DC2626" stroke="#991B1B" strokeWidth="3" filter="url(#conflictShadow)">
            <animate attributeName="r" values="18;24;18" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="250" r="18" fill="none" stroke="#EF4444" strokeWidth="3">
            <animate attributeName="r" values="18;30;18" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="700" y="255" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            <animate attributeName="fontSize" values="20;24;20" dur="1s" repeatCount="indefinite" />
            !
          </text>
        </svg>
        
        {/* Commits */}
        <div className="absolute left-[68px] top-[222px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-200 dark:ring-gray-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        <div className="absolute left-[468px] top-[222px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-red-200 dark:ring-red-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">main</div>
          </div>
        </div>
        
        <div className="absolute left-[268px] top-[72px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-amber-200 dark:ring-amber-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold">B</span>
            </div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        <div className="absolute left-[468px] top-[72px] z-10">
          <div className="relative group">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-amber-200 dark:ring-amber-800 transition-all group-hover:scale-110">
              <span className="text-white font-bold">C</span>
            </div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-400 whitespace-nowrap">feature</div>
          </div>
        </div>
        
        {/* Branch labels */}
        <div className="absolute left-2 top-[180px] z-10">
          <div className="bg-red-100 dark:bg-red-900 px-4 py-2 rounded-full shadow-lg border border-red-300 dark:border-red-700">
            <span className="text-sm font-bold text-red-700 dark:text-red-300">🌳 main</span>
          </div>
        </div>
        
        <div className="absolute left-[25%] top-0 z-10">
          <div className="bg-amber-100 dark:bg-amber-900 px-4 py-2 rounded-full shadow-lg border border-amber-300 dark:border-amber-700">
            <span className="text-sm font-bold text-amber-700 dark:text-amber-300">🌿 feature</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <h5 className="font-semibold text-red-900 dark:text-red-100 text-sm">Edit Same File</h5>
          </div>
          <p className="text-xs text-red-800 dark:text-red-200">
            Both branches change same lines since A (common ancestor)
          </p>
        </div>
        
        <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <h5 className="font-semibold text-red-900 dark:text-red-100 text-sm">Conflict</h5>
          </div>
          <p className="text-xs text-red-800 dark:text-red-200">
            Git stops and asks for help
          </p>
        </div>
        
        <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <h5 className="font-semibold text-red-900 dark:text-red-100 text-sm">Resolve</h5>
          </div>
          <p className="text-xs text-red-800 dark:text-red-200">
            Edit files, then commit
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitMerging;

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, GitMerge, ArrowRight, Info, CheckCircle, XCircle, RefreshCw, FileText, Terminal } from 'lucide-react';

const GitConflicts: React.FC = () => {
  const [activeStep, setActiveStep] = useState<'detect' | 'identify' | 'resolve' | 'complete'>('detect');

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={AlertTriangle}
        category="Git & GitHub · Git Fundamentals"
        title="Resolving Merge Conflicts"
        description="Learn how to identify, understand, and resolve merge conflicts step by step. Master conflict resolution strategies and prevention techniques."
        colorTheme="red"
      />

      {/* Section 1: Understanding Conflicts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            <AlertTriangle className="w-7 h-7" />
            Understanding Merge Conflicts
          </CardTitle>
          <CardDescription className="text-base">
            Learn what causes merge conflicts and how Git handles them. Conflicts are normal in collaborative development!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">What Are Merge Conflicts?</h4>
            <p className="text-red-800 dark:text-red-200 mb-4">
              Merge conflicts occur when Git cannot automatically resolve differences between two branches. 
              This happens when the same lines in the same file are changed differently in both branches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-700">
                <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">⚠️ Common Causes</h5>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Same file edited in both branches</li>
                  <li>• Same lines modified differently</li>
                  <li>• File deleted in one, modified in other</li>
                  <li>• Binary file conflicts</li>
                </ul>
              </div>
              <div className="p-3 bg-white dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-700">
                <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">🎯 Git's Response</h5>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Stops the merge process</li>
                  <li>• Marks conflicted files</li>
                  <li>• Waits for manual resolution</li>
                  <li>• Requires explicit continuation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Conflict Markers Explained</h4>
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              Git adds special markers to show the conflicting sections in your files:
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 text-amber-700 dark:text-amber-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="mb-2"><span className="text-red-500">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></div>
              <div className="mb-2 text-blue-600">Current branch content (your changes)</div>
              <div className="mb-2"><span className="text-gray-500">=======</span></div>
              <div className="mb-2 text-green-600">Incoming branch content (their changes)</div>
              <div><span className="text-green-500">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch</span></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-white dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Start Marker</span>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300">Current branch version</p>
              </div>
              <div className="p-3 bg-white dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Separator</span>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300">Divides the versions</p>
              </div>
              <div className="p-3 bg-white dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">End Marker</span>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300">Incoming branch version</p>
              </div>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Conflicts are not errors! They're Git's way of asking you to make a decision when both branches have 
              valuable changes to the same code. Take time to understand both perspectives before resolving.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 2: Step-by-Step Resolution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            <Terminal className="w-7 h-7" />
            Step-by-Step Resolution Process
          </CardTitle>
          <CardDescription className="text-base">
            Follow these steps to resolve any merge conflict systematically and safely.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step Selector */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveStep('detect')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeStep === 'detect'
                  ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">1. Detect</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Git stops and reports conflicts</p>
            </button>

            <button
              onClick={() => setActiveStep('identify')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeStep === 'identify'
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">2. Identify</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Find conflicted files</p>
            </button>

            <button
              onClick={() => setActiveStep('resolve')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeStep === 'resolve'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <GitMerge className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">3. Resolve</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Edit and fix conflicts</p>
            </button>

            <button
              onClick={() => setActiveStep('complete')}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeStep === 'complete'
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">4. Complete</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Stage and commit</p>
            </button>
          </div>

          {/* Step Details */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
            {activeStep === 'detect' && <DetectStep />}
            {activeStep === 'identify' && <IdentifyStep />}
            {activeStep === 'resolve' && <ResolveStep />}
            {activeStep === 'complete' && <CompleteStep />}
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Resolution Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            <RefreshCw className="w-7 h-7" />
            Resolution Strategies
          </CardTitle>
          <CardDescription className="text-base">
            Different approaches to resolve conflicts based on your specific needs and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                    Strategy 1
                  </Badge>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Keep Current Changes</h5>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Accept the current branch's version and discard incoming changes.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Accept current branch version</div>
                  <div className="mb-2"><span className="text-white">git</span> checkout --ours filename.js</div>
                  <div className="mb-2"><span className="text-white">git</span> add filename.js</div>
                  <div><span className="text-white">git</span> commit -m "Keep current changes"</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                    Strategy 2
                  </Badge>
                  <h5 className="font-semibold text-green-900 dark:text-green-100">Keep Incoming Changes</h5>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  Accept the incoming branch's version and discard current changes.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Accept incoming branch version</div>
                  <div className="mb-2"><span className="text-white">git</span> checkout --theirs filename.js</div>
                  <div className="mb-2"><span className="text-white">git</span> add filename.js</div>
                  <div><span className="text-white">git</span> commit -m "Accept incoming changes"</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                    Strategy 3
                  </Badge>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Manual Merge</h5>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Combine both versions manually for the best result.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-purple-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Edit file manually, remove markers</div>
                  <div className="mb-2"><span className="text-white">#</span> Keep desired content</div>
                  <div className="mb-2"><span className="text-white">git</span> add filename.js</div>
                  <div><span className="text-white">git</span> commit -m "Manually resolved conflicts"</div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200">
                    Emergency
                  </Badge>
                  <h5 className="font-semibold text-red-900 dark:text-red-100">Abort Merge</h5>
                </div>
                <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                  Cancel the entire merge and restore the previous state.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 text-red-700 dark:text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2"># Cancel merge completely</div>
                  <div className="mb-2"><span className="text-white">git</span> merge --abort</div>
                  <div className="text-green-500"># Repository restored to pre-merge state</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Prevention Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-red-600 dark:text-red-400">
            <CheckCircle className="w-7 h-7" />
            Preventing Conflicts
          </CardTitle>
          <CardDescription className="text-base">
            Best practices and proactive measures to minimize merge conflicts in your workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🛡️ Best Practices</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Pull regularly:</strong> Keep your branch updated with latest changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Small branches:</strong> Keep feature branches focused and short-lived</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Communicate:</strong> Let team know what you're working on</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Code reviews:</strong> Use pull requests to catch issues early</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Merge frequently:</strong> Reduce divergence between branches</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🔧 Proactive Measures</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Use <code className="px-1 bg-blue-100 dark:bg-blue-900 rounded">git fetch</code>:</strong> Stay aware of remote changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Rebase when appropriate:</strong> Keep linear history</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Small commits:</strong> Split large changes into smaller pieces</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Feature flags:</strong> Use toggles for incomplete features</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Clear ownership:</strong> Establish who works on which files</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              Remember: Some conflicts are unavoidable and actually beneficial! They force important conversations 
              about code design and ensure all changes are carefully considered before being merged.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

// Step Components
const DetectStep: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">Step 1: Detect the Conflict</h4>
        <p className="text-sm text-red-800 dark:text-red-200 mb-4">
          When Git encounters a conflict during a merge, it stops the process and shows you which files have conflicts.
        </p>
        <div className="bg-gray-100 dark:bg-gray-900 text-red-700 dark:text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="mb-2"><span className="text-white">$</span> git merge feature-branch</div>
          <div className="mb-2 text-yellow-600">Auto-merging src/app.js</div>
          <div className="mb-2 text-red-500">CONFLICT (content): Merge conflict in src/app.js</div>
          <div className="mb-2 text-red-500">CONFLICT (content): Merge conflict in src/utils.js</div>
          <div className="text-amber-600">Automatic merge failed; fix conflicts and then commit the result.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-white dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-900 dark:text-red-100">Merge Stopped</span>
          </div>
          <p className="text-xs text-red-700 dark:text-red-300">Git halts the merge process</p>
        </div>
        <div className="p-3 bg-white dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-red-900 dark:text-red-100">Files Marked</span>
          </div>
          <p className="text-xs text-red-700 dark:text-red-300">Conflicted files are identified</p>
        </div>
        <div className="p-3 bg-white dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-900 dark:text-red-100">Manual Fix Needed</span>
          </div>
          <p className="text-xs text-red-700 dark:text-red-300">Your intervention required</p>
        </div>
      </div>
    </div>
  );
};

const IdentifyStep: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
        <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Step 2: Identify Conflicted Files</h4>
        <p className="text-sm text-amber-800 dark:text-amber-200 mb-4">
          Use <code className="px-1 bg-amber-100 dark:bg-amber-900 rounded">git status</code> to see exactly which files need to be resolved.
        </p>
        <div className="bg-gray-100 dark:bg-gray-900 text-amber-700 dark:text-amber-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="mb-2"><span className="text-white">$</span> git status</div>
          <div className="mb-2 text-red-500">On branch main</div>
          <div className="mb-2 text-red-500">You have unmerged paths.</div>
          <div className="mb-2 text-amber-600">  (fix conflicts and run "git commit")</div>
          <div className="mb-2 text-amber-600">  (use "git merge --abort" to abort the merge)</div>
          <div className="mb-2"></div>
          <div className="mb-2 text-red-500">Unmerged paths:</div>
          <div className="mb-2 text-amber-600">  (use "git add &lt;file&gt;..." to mark resolution)</div>
          <div className="mb-2 ml-4 text-red-500">both modified:   src/app.js</div>
          <div className="ml-4 text-red-500">both modified:   src/utils.js</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-white dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-700">
          <h5 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Status Indicators</h5>
          <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
            <li>• <span className="text-red-500">both modified:</span> File changed in both branches</li>
            <li>• <span className="text-red-500">deleted by us:</span> Deleted in current branch</li>
            <li>• <span className="text-red-500">deleted by them:</span> Deleted in incoming branch</li>
            <li>• <span className="text-red-500">added by us:</span> Added in current branch</li>
          </ul>
        </div>
        <div className="p-3 bg-white dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-700">
          <h5 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Next Actions</h5>
          <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
            <li>• Open each conflicted file</li>
            <li>• Look for conflict markers</li>
            <li>• Decide which changes to keep</li>
            <li>• Remove the markers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ResolveStep: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Step 3: Resolve the Conflicts</h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
          Open each conflicted file and edit it to keep the content you want. Remove all conflict markers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-900 text-blue-700 dark:text-blue-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="mb-2 text-gray-500">// Before: File with conflict markers</div>
          <div className="mb-2"><span className="text-red-500">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></div>
          <div className="mb-2 text-blue-600">const greeting = "Hello World";</div>
          <div className="mb-2"><span className="text-gray-500">=======</span></div>
          <div className="mb-2 text-green-600">const greeting = "Hi there!";</div>
          <div className="mb-2"><span className="text-green-500">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch</span></div>
          <div className="mb-2"></div>
          <div className="mb-2 text-gray-500">// After: Resolved file</div>
          <div className="mb-2 text-blue-600">const greeting = "Hello World!";</div>
          <div className="text-gray-500">// Conflict markers removed</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-white dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">1</span>
            </div>
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Open File</span>
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-300">Use your editor to open conflicted files</p>
        </div>
        <div className="p-3 bg-white dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">2</span>
            </div>
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Edit Content</span>
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-300">Keep desired changes, remove markers</p>
        </div>
        <div className="p-3 bg-white dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Save File</span>
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-300">Save changes to disk</p>
        </div>
      </div>
    </div>
  );
};

const CompleteStep: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Step 4: Complete the Merge</h4>
        <p className="text-sm text-green-800 dark:text-green-200 mb-4">
          After resolving all conflicts, stage the files and commit to complete the merge process.
        </p>
        <div className="bg-gray-100 dark:bg-gray-900 text-green-700 dark:text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="mb-2"><span className="text-white">$</span> git add src/app.js src/utils.js</div>
          <div className="mb-2 text-amber-600"># Mark files as resolved</div>
          <div className="mb-2"><span className="text-white">$</span> git status</div>
          <div className="mb-2 text-green-600">All conflicts fixed but you are still merging.</div>
          <div className="mb-2 text-green-600">  (use "git commit" to complete merge)</div>
          <div className="mb-2"><span className="text-white">$</span> git commit -m "Resolve merge conflicts"</div>
          <div className="text-green-600">[main 1a2b3c4] Merge branch 'feature-branch'</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-white dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-700">
          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">✅ Success Indicators</h5>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• No more conflict markers in files</li>
            <li>• <code className="px-1 bg-green-100 dark:bg-green-900 rounded">git status</code> shows clean state</li>
            <li>• Merge commit created</li>
            <li>• Branches are successfully merged</li>
          </ul>
        </div>
        <div className="p-3 bg-white dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-700">
          <h5 className="font-medium text-green-900 dark:text-green-100 mb-2">🎯 Best Practices</h5>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Test the merged code</li>
            <li>• Review the merge commit</li>
            <li>• Push to remote repository</li>
            <li>• Delete feature branch if done</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitConflicts;

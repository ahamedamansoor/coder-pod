import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  GitBranch, 
  GitMerge, 
  ArrowRight, 
  Info, 
  GitCommit, 
  GitPullRequest, 
  History, 
  ArrowDownUp,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Terminal,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const GitRebase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'simple' | 'interactive' | 'squash' | 'conflict' | 'vsmerge'>('simple');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1500);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          const maxSteps = getMaxSteps(activeDemo);
          if (prev >= maxSteps) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, animationSpeed);
      return () => clearInterval(timer);
    }
  }, [isPlaying, activeDemo, animationSpeed]);

  const getMaxSteps = (demo: string) => {
    switch (demo) {
      case 'simple': return 4;
      case 'interactive': return 5;
      case 'squash': return 3;
      case 'conflict': return 6;
      case 'vsmerge': return 4;
      default: return 4;
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={GitBranch}
        category="Git & GitHub · Git Fundamentals"
        title="Git Rebase"
        description="Master the art of rewriting commit history with interactive animations and visual demonstrations."
        colorTheme="orange"
      />

      {/* Section 1: Understanding Rebase */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
            <GitBranch className="w-7 h-7" />
            Understanding Git Rebase
          </CardTitle>
          <CardDescription className="text-base">
            Rebase is Git's powerful tool for creating linear, clean commit history through intelligent branch rewriting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-xl border border-orange-200 dark:border-orange-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-orange-500 text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-orange-900 dark:text-orange-100">Linear History</h3>
              </div>
              <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
                Creates straight, chronological commit history without merge clutter. Perfect for clean project timelines.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-500 text-white">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-purple-900 dark:text-purple-100">Rewrites History</h3>
              </div>
              <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
                Creates new commit hashes and reorganizes history. Powerful but requires careful handling.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-xl border border-green-200 dark:border-green-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-green-500 text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-green-900 dark:text-green-100">Clean Integration</h3>
              </div>
              <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                Eliminates merge commits and creates seamless branch integration with minimal noise.
              </p>
            </div>
          </div>

          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Golden Rule:</strong> Never rebase commits that exist outside your local repository and that others may have based work on. 
              Rebase rewrites history and can cause serious issues for collaborators.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Section 2: Interactive Animated Demonstrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
            <History className="w-7 h-7" />
            Interactive Rebase Animations
          </CardTitle>
          <CardDescription className="text-base">
            Watch step-by-step animated demonstrations of different rebase scenarios with full control over playback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Demo Selector */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { id: 'simple', label: 'Simple', icon: GitBranch, color: 'orange' },
              { id: 'interactive', label: 'Interactive', icon: GitCommit, color: 'purple' },
              { id: 'squash', label: 'Squash', icon: GitPullRequest, color: 'green' },
              { id: 'conflict', label: 'Conflict', icon: AlertTriangle, color: 'red' },
              { id: 'vsmerge', label: 'vs Merge', icon: ArrowDownUp, color: 'blue' }
            ].map(({ id, label, icon: Icon, color }) => (
              <Button
                key={id}
                onClick={() => {
                  setActiveDemo(id as any);
                  resetAnimation();
                }}
                variant={activeDemo === id ? 'default' : 'outline'}
                className={`flex flex-col items-center gap-2 h-auto py-4 ${
                  activeDemo === id 
                    ? `bg-${color}-500 hover:bg-${color}-600 text-white` 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </Button>
            ))}
          </div>

          {/* Animation Controls */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                size="sm"
                className="flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button onClick={resetAnimation} size="sm" variant="outline">
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Speed:</span>
              <select
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                className="px-3 py-1 text-sm border rounded-md bg-white dark:bg-gray-700"
              >
                <option value={2000}>Slow</option>
                <option value={1500}>Normal</option>
                <option value={1000}>Fast</option>
                <option value={500}>Very Fast</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Step:</span>
              <Badge variant="secondary">{currentStep + 1}/{getMaxSteps(activeDemo)}</Badge>
            </div>
          </div>

          {/* Animation Display */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 min-h-[400px]">
            <AnimatedRebaseDemo 
              demo={activeDemo} 
              step={currentStep} 
              isPlaying={isPlaying}
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Essential Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
            <Terminal className="w-7 h-7" />
            Essential Rebase Commands
          </CardTitle>
          <CardDescription className="text-base">
            Master these commands to handle any rebase scenario with confidence.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CommandCard
              title="Basic Rebase"
              commands={[
                { code: 'git checkout feature', description: 'Switch to feature branch' },
                { code: 'git rebase main', description: 'Rebase onto main branch' },
                { code: 'git rebase origin/main', description: 'Rebase onto remote main' }
              ]}
              color="orange"
            />

            <CommandCard
              title="Interactive Rebase"
              commands={[
                { code: 'git rebase -i HEAD~3', description: 'Edit last 3 commits' },
                { code: 'git rebase -i <commit-hash>', description: 'Rebase from specific commit' },
                { code: 'git rebase -i --autosquash', description: 'Auto-fixup/squash commits' }
              ]}
              color="purple"
            />

            <CommandCard
              title="Conflict Resolution"
              commands={[
                { code: 'git rebase --continue', description: 'Continue after resolving conflicts' },
                { code: 'git rebase --skip', description: 'Skip the current commit' },
                { code: 'git rebase --abort', description: 'Cancel the entire rebase' }
              ]}
              color="red"
            />

            <CommandCard
              title="Advanced Options"
              commands={[
                { code: 'git pull --rebase', description: 'Pull with rebase instead of merge' },
                { code: 'git rebase --onto main feature~2', description: 'Rebase specific range' },
                { code: 'git reflog', description: 'Show all recent operations' }
              ]}
              color="green"
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
            <Info className="w-7 h-7" />
            Best Practices & Guidelines
          </CardTitle>
          <CardDescription className="text-base">
            When and how to use rebase safely in your development workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="flex items-center gap-2 font-bold text-green-900 dark:text-green-100 mb-4">
                <CheckCircle className="w-5 h-5" />
                When to Rebase
              </h4>
              <ul className="space-y-3 text-sm text-green-800 dark:text-green-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Feature branches:</strong> Before merging to keep history clean and readable</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Local commits only:</strong> Never rebase commits that have been pushed and shared</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Personal projects:</strong> When you're the sole contributor to the repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span><strong>Before PRs:</strong> Clean up commit history by squashing related changes</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="flex items-center gap-2 font-bold text-red-900 dark:text-red-100 mb-4">
                <XCircle className="w-5 h-5" />
                When NOT to Rebase
              </h4>
              <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span><strong>Shared branches:</strong> Never rebase main, master, or develop branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span><strong>Public commits:</strong> If others have based work on your commits</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span><strong>Released code:</strong> After tags or releases have been created</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span><strong>CI/CD branches:</strong> Branches used in automated deployment pipelines</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>Pro Tip:</strong> Always test rebase operations on a backup branch first. Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">git reflog</code> 
              to recover lost commits if something goes wrong during rebase.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

// Command Card Component
const CommandCard: React.FC<{
  title: string;
  commands: { code: string; description: string }[];
  color: string;
}> = ({ title, commands, color }) => {
  return (
    <div className={`p-6 bg-${color}-50 dark:bg-${color}-950/30 rounded-xl border border-${color}-200 dark:border-${color}-700`}>
      <h3 className={`font-bold text-${color}-900 dark:text-${color}-100 mb-4`}>{title}</h3>
      <div className="space-y-3">
        {commands.map((cmd, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
            <code className={`text-sm text-${color}-700 dark:text-${color}-400 font-mono block mb-1`}>
              {cmd.code}
            </code>
            <p className="text-xs text-gray-600 dark:text-gray-400">{cmd.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated Rebase Demo Component
const AnimatedRebaseDemo: React.FC<{
  demo: string;
  step: number;
  isPlaying: boolean;
}> = ({ demo, step, isPlaying }) => {
  switch (demo) {
    case 'simple':
      return <SimpleRebaseAnimation step={step} isPlaying={isPlaying} />;
    case 'interactive':
      return <InteractiveRebaseAnimation step={step} isPlaying={isPlaying} />;
    case 'squash':
      return <SquashRebaseAnimation step={step} isPlaying={isPlaying} />;
    case 'conflict':
      return <ConflictRebaseAnimation step={step} isPlaying={isPlaying} />;
    case 'vsmerge':
      return <RebaseVsMergeAnimation step={step} isPlaying={isPlaying} />;
    default:
      return <SimpleRebaseAnimation step={step} isPlaying={isPlaying} />;
  }
};

// Simple Rebase Animation
const SimpleRebaseAnimation: React.FC<{ step: number; isPlaying: boolean }> = ({ step }) => {
  const renderCommit = (id: string, highlighted: boolean = false) => (
    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${
      highlighted 
        ? 'border-orange-500 bg-orange-500 text-white scale-110 shadow-lg' 
        : 'border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
    }`}>
      {id}
    </div>
  );

  const renderBranch = (name: string, commits: string[], highlighted: number[] = []) => (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-20">{name}</span>
      <div className="flex items-center gap-2">
        {commits.map((commit, idx) => (
          <React.Fragment key={commit}>
            {idx > 0 && <div className="w-6 h-0.5 bg-gray-600"></div>}
            {renderCommit(commit, highlighted.includes(idx))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Simple Rebase</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Moving feature branch onto latest main</p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-4">
          {step === 0 && (
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <p className="text-sm text-orange-800 dark:text-orange-200">Initial state: Feature diverged from main</p>
            </div>
          )}

          {step === 0 && (
            <div className="space-y-2">
              {renderBranch('main', ['A', 'B', 'C'])}
              <div className="flex items-center ml-20">
                <div className="w-0.5 h-6 bg-gray-400"></div>
              </div>
              {renderBranch('feature', ['D', 'E'])}
            </div>
          )}

          {step === 1 && (
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-800 dark:text-blue-200">Starting rebase: git rebase main</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              {renderBranch('main', ['A', 'B', 'C'])}
              <div className="flex items-center ml-20">
                <div className="w-0.5 h-6 bg-orange-400 animate-pulse"></div>
              </div>
              {renderBranch('feature', ['D', 'E'], [0, 1])}
              <p className="text-center text-sm text-orange-600 dark:text-orange-400 mt-2">Moving commits D', E' onto C...</p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2">
              {renderBranch('main', ['A', 'B', 'C'])}
              {renderBranch('feature', ["D'", "E'"], [0, 1])}
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700 mt-4">
                <p className="text-sm text-green-800 dark:text-green-200">✓ Rebase complete! Linear history achieved.</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-2">
              {renderBranch('main & feature', ['A', 'B', 'C', "D'", "E'"], [3, 4])}
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700 mt-4">
                <p className="text-sm text-green-800 dark:text-green-200">✓ Perfect linear history!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Interactive Rebase Animation
const InteractiveRebaseAnimation: React.FC<{ step: number; isPlaying: boolean }> = ({ step }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">Interactive Rebase</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Edit, reorder, squash, or split commits</p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-4">
          {step === 0 && (
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">Before: git rebase -i HEAD~4</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 1234567 Commit C</div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 2345678 Commit D</div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 3456789 Commit E</div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 4567890 Commit F</div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">Edit the interactive rebase file:</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded border border-yellow-300 dark:border-yellow-700">
                  <span className="text-purple-600 dark:text-purple-400">squash</span> 1234567 Commit C
                </div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">
                  <span className="text-purple-600 dark:text-purple-400">reorder</span> 4567890 Commit F
                </div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">
                  <span className="text-purple-600 dark:text-purple-400">pick</span> 3456789 Commit E
                </div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">
                  <span className="text-purple-600 dark:text-purple-400">pick</span> 2345678 Commit D
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">Processing: Reordering and squashing...</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center animate-pulse">F</div>
                <div className="w-6 h-0.5 bg-purple-500"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center animate-pulse">E</div>
                <div className="w-6 h-0.5 bg-purple-500"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center animate-pulse">D</div>
                <div className="w-6 h-0.5 bg-purple-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center animate-pulse">C</div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">After interactive rebase:</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 4567890 Commit F</div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 3456789 Commit E</div>
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick 2345678 Commit D</div>
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded border border-green-300 dark:border-green-700">
                  squash 1234567 Commit C (squashed)
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200">✓ Interactive rebase complete!</p>
              <p className="text-xs text-green-700 dark:text-green-300 mt-2">Commits reordered: F → E → D → C (squashed)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Squash Rebase Animation
const SquashRebaseAnimation: React.FC<{ step: number; isPlaying: boolean }> = ({ step }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-2">Squash Commits</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Combine multiple commits into one</p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-4">
          {step === 0 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">Before: Multiple related commits</p>
              <div className="flex items-center justify-center gap-2">
                {['C', 'D', 'E'].map((commit, idx) => (
                  <React.Fragment key={commit}>
                    <div className="w-10 h-10 rounded-full border-2 border-green-600 bg-white dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-green-600 dark:text-green-400">
                      {commit}
                    </div>
                    {idx < 2 && <div className="w-8 h-0.5 bg-green-600"></div>}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-4">3 separate commits</p>
            </div>
          )}

          {step === 1 && (
            <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">Squashing with git rebase -i</p>
              <div className="space-y-2 font-mono text-sm mb-4">
                <div className="p-2 bg-white dark:bg-gray-800 rounded">pick abc1234 Feature implementation</div>
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded border border-orange-300 dark:border-orange-700">
                  <span className="text-orange-600 dark:text-orange-400">squash</span> def5678 Fix typo
                </div>
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded border border-orange-300 dark:border-orange-700">
                  <span className="text-orange-600 dark:text-orange-400">squash</span> ghi9012 Add tests
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center animate-pulse text-sm font-bold">
                  CDE
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">After: Single clean commit</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-green-600 bg-green-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                  CDE
                </div>
              </div>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-4">1 combined commit with unified message</p>
              <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-700 dark:text-gray-300 font-mono">
                  "Feature implementation with fixes and tests"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Conflict Rebase Animation
const ConflictRebaseAnimation: React.FC<{ step: number; isPlaying: boolean }> = ({ step }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">Handling Conflicts</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Resolving conflicts during rebase</p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-4 max-w-lg">
          {step === 0 && (
            <div className="p-6 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">⚠️ Conflict detected!</p>
              <div className="font-mono text-sm text-red-700 dark:text-red-300 mb-4">
                <div>CONFLICT (content): Merge conflict in src/app.js</div>
                <div>error: could not apply 1234567... Update feature</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <XCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">Step 1: Open conflicted file</p>
              <div className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4">
                <div className="text-red-600">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</div>
                <div className="text-gray-700 dark:text-gray-300">Main branch content</div>
                <div className="text-red-600">=======</div>
                <div className="text-green-600">Feature branch content</div>
                <div className="text-red-600">&gt;&gt;&gt;&gt;&gt;&gt;&gt; 1234567... Update feature</div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">Step 2: Resolve conflicts manually</p>
              <div className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4">
                <div className="text-gray-700 dark:text-gray-300">Resolved merged content</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center animate-pulse">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">Step 3: Stage resolved file</p>
              <div className="font-mono text-sm text-purple-700 dark:text-purple-400 mb-4">
                <div>$ git add src/app.js</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">Step 4: Continue rebase</p>
              <div className="font-mono text-sm text-green-700 dark:text-green-400 mb-4">
                <div>$ git rebase --continue</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center animate-pulse">
                  <Play className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">✓ Conflict resolved successfully!</p>
              <div className="font-mono text-sm text-green-700 dark:text-green-400 mb-4">
                <div>Successfully rebased and updated refs/heads/feature.</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Rebase vs Merge Animation
const RebaseVsMergeAnimation: React.FC<{ step: number; isPlaying: boolean }> = ({ step }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">Rebase vs Merge</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Side-by-side comparison</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5" /> Rebase
          </h4>
          <div className="space-y-4">
            {step === 0 && (
              <div className="text-center text-sm text-orange-800 dark:text-orange-200">
                Initial state
              </div>
            )}
            {step === 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">feature</span>
                  <div className="flex items-center gap-1 ml-20">
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">D</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">E</div>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-orange-500 text-white flex items-center justify-center text-xs animate-pulse">D</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-orange-500 text-white flex items-center justify-center text-xs animate-pulse">E</div>
                  </div>
                </div>
                <div className="text-center text-xs text-orange-600 dark:text-orange-400 mt-2">
                  Linear history
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">D</div>
                    <div className="w-4 h-0.5 bg-orange-600"></div>
                    <div className="w-6 h-6 rounded-full border border-orange-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">E</div>
                  </div>
                </div>
                <div className="text-center text-xs text-green-600 dark:text-green-400 mt-2">
                  ✓ Clean, linear history
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">✓ Rebase Benefits:</p>
                <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• Linear, clean history</li>
                  <li>• No merge commits</li>
                  <li>• Easy to read timeline</li>
                  <li>• Rewrites commit hashes</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
            <GitMerge className="w-5 h-5" /> Merge
          </h4>
          <div className="space-y-4">
            {step === 0 && (
              <div className="text-center text-sm text-blue-800 dark:text-blue-200">
                Initial state
              </div>
            )}
            {step === 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">feature</span>
                  <div className="flex items-center gap-1 ml-20">
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">D</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">E</div>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                  </div>
                </div>
                <div className="flex items-center justify-center ml-8">
                  <div className="w-0.5 h-4 bg-blue-600"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1 ml-8">
                    <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 text-white flex items-center justify-center text-xs animate-pulse">M</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">feature</span>
                  <div className="flex items-center gap-1 ml-20">
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">D</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">E</div>
                  </div>
                </div>
                <div className="text-center text-xs text-blue-600 dark:text-blue-400 mt-2">
                  Merge commit created
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">A</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">B</div>
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <div className="w-6 h-6 rounded-full border border-blue-600 bg-white dark:bg-gray-800 flex items-center justify-center text-xs">C</div>
                  </div>
                </div>
                <div className="flex items-center justify-center ml-8">
                  <div className="w-0.5 h-4 bg-blue-600"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-12">main</span>
                  <div className="flex items-center gap-1 ml-8">
                    <div className="w-8 h-8 rounded-full border border-blue-600 bg-blue-500 text-white flex items-center justify-center text-xs">M</div>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Preserved original history
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-300 dark:border-blue-700">
                <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">✓ Merge Benefits:</p>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Preserves exact history</li>
                  <li>• Non-destructive</li>
                  <li>• Shows branch context</li>
                  <li>• Keeps original commits</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitRebase;

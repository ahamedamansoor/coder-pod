'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Play, Bug, Target, Code, Settings, Search, 
    CheckCircle, AlertTriangle, Eye, MousePointer, 
    Monitor, Smartphone, Tablet, Zap, Activity,
    FileText, Layers, RefreshCw, Sun, Moon, 
    Maximize, Move, RotateCcw, Grid, Compass,
    Wrench, Microscope, Shield, AlertCircle
} from 'lucide-react';

interface CssDebuggingProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssDebugging({ onOpenWebPlayground }: CssDebuggingProps) {
    const [selectedTechnique, setSelectedTechnique] = useState('inspector');
    const [selectedIssue, setSelectedIssue] = useState('specificity');

    // Debugging Techniques
    const debuggingTechniques = [
        {
            id: 'inspector',
            name: 'Browser Inspector',
            icon: Search,
            description: 'Use DevTools to inspect and modify CSS in real-time',
            difficulty: 'Easy',
            effectiveness: 'High',
            color: 'blue'
        },
        {
            id: 'border-method',
            name: 'Border Method',
            icon: Target,
            description: 'Add colored borders to visualize element boundaries',
            difficulty: 'Easy',
            effectiveness: 'Medium',
            color: 'green'
        },
        {
            id: 'background-colors',
            name: 'Background Colors',
            icon: Layers,
            description: 'Use temporary background colors to debug layouts',
            difficulty: 'Easy',
            effectiveness: 'Medium',
            color: 'purple'
        },
        {
            id: 'css-validation',
            name: 'CSS Validation',
            icon: Shield,
            description: 'Validate CSS syntax and catch errors early',
            difficulty: 'Easy',
            effectiveness: 'High',
            color: 'orange'
        }
    ];

    // Common CSS Issues
    const commonIssues = [
        {
            id: 'specificity',
            name: 'Specificity Wars',
            icon: AlertTriangle,
            description: 'CSS rules not applying due to specificity conflicts',
            severity: 'High',
            frequency: 'Very Common',
            solution: 'Use more specific selectors or !important sparingly'
        },
        {
            id: 'box-model',
            name: 'Box Model Issues',
            icon: Grid,
            description: 'Unexpected element sizing due to box model misunderstanding',
            severity: 'Medium',
            frequency: 'Common',
            solution: 'Use box-sizing: border-box and understand padding/margin'
        },
        {
            id: 'float-issues',
            name: 'Float Problems',
            icon: Move,
            description: 'Layout breaking due to float behavior',
            severity: 'Medium',
            frequency: 'Less Common',
            solution: 'Use modern layout methods like Flexbox or Grid'
        },
        {
            id: 'z-index',
            name: 'Z-Index Stacking',
            icon: Layers,
            description: 'Elements not stacking in the expected order',
            severity: 'Medium',
            frequency: 'Common',
            solution: 'Understand stacking contexts and use logical z-index values'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Bug className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Debugging</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Master the art of finding and fixing CSS issues with proven debugging techniques and tools.
                </p>
            </div>

            {/* Interactive CSS Debugging Playground */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Bug className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        Interactive CSS Debugging Playground
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        Master CSS debugging with systematic techniques, interactive tools, and practical problem-solving methods.
                    </CardDescription>
                    
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap gap-2 mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-blue-200/30">
                        <Button 
                            variant={selectedTechnique === 'inspector' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedTechnique('inspector')}
                            className="flex items-center gap-2"
                        >
                            <Search className="w-4 h-4" />
                            Browser Inspector
                        </Button>
                        <Button 
                            variant={selectedTechnique === 'border-method' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedTechnique('border-method')}
                            className="flex items-center gap-2"
                        >
                            <Target className="w-4 h-4" />
                            Border Method
                        </Button>
                        <Button 
                            variant={selectedIssue === 'specificity' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedIssue('specificity')}
                            className="flex items-center gap-2"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Specificity Wars
                        </Button>
                        <Button 
                            variant={selectedIssue === 'box-model' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedIssue('box-model')}
                            className="flex items-center gap-2"
                        >
                            <Grid className="w-4 h-4" />
                            Box Model
                        </Button>
                        <Button 
                            variant={selectedIssue === 'z-index' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedIssue('z-index')}
                            className="flex items-center gap-2"
                        >
                            <Layers className="w-4 h-4" />
                            Z-Index Issues
                        </Button>
                        <Button 
                            variant={selectedTechnique === 'css-validation' ? 'default' : 'outline'} 
                            size="sm"
                            onClick={() => setSelectedTechnique('css-validation')}
                            className="flex items-center gap-2"
                        >
                            <Shield className="w-4 h-4" />
                            CSS Validation
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="relative p-6 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Debugging Process */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Microscope className="w-5 h-5" />
                                    🎯 The Debugging Process
                                </h4>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                        <div>
                                            <div className="font-semibold text-red-700 dark:text-red-300">Identify the Problem</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">What's not working as expected?</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300">Isolate the Issue</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Use DevTools to inspect elements</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                        <div>
                                            <div className="font-semibold text-yellow-700 dark:text-yellow-300">Analyze the Cause</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Check specificity, inheritance, box model</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300">Apply the Fix</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Implement the solution and test</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300">Verify the Solution</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Test across browsers and devices</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50 mt-4">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                                        🎪 Debugging Mindset
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Stay systematic, be patient, and use the right tools. Every CSS bug has a logical explanation!
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Wrench className="w-5 h-5" />
                                    🛠️ Essential Debugging Tools
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Search className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">DevTools</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Browser inspector</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Target className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Border Method</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Visual boundaries</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Shield className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Validators</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Syntax checking</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Activity className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Performance</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Speed analysis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Issues Preview */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2">🐛</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Common Issues</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            Specificity Wars
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                                            <Grid className="w-4 h-4" />
                                            Box Model Issues
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-yellow-600 dark:text-yellow-400">
                                            <Layers className="w-4 h-4" />
                                            Z-Index Problems
                                        </div>
                                    </div>
                                    
                                    <div className="text-2xl font-bold text-gray-400">+</div>
                                    
                                    <div className="text-4xl mb-2">🔧</div>
                                    <div className="font-bold text-lg text-gray-600 dark:text-gray-400">Solutions</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Systematic Approach
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                                            <Eye className="w-4 h-4" />
                                            Visual Debugging
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Learn to read browser DevTools - they're your best debugging companion!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Debugging Techniques */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Wrench className="w-5 h-5" />
                        CSS Debugging Techniques
                    </CardTitle>
                    <CardDescription>
                        Essential methods and tools for identifying and fixing CSS issues effectively.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Techniques Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {debuggingTechniques.map((technique) => (
                                <div 
                                    key={technique.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedTechnique === technique.id
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedTechnique(technique.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <technique.icon className={`w-8 h-8 text-${technique.color}-500`} />
                                        <div>
                                            <h3 className="font-bold text-lg">{technique.name}</h3>
                                            <div className="flex gap-2">
                                                <Badge variant="secondary" className={`bg-${technique.color}-100 text-${technique.color}-800`}>
                                                    {technique.difficulty}
                                                </Badge>
                                                <Badge variant="outline">
                                                    {technique.effectiveness} Impact
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {technique.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Browser Inspector Deep Dive */}
                        {selectedTechnique === 'inspector' && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-semibold mb-4 text-blue-700 dark:text-blue-300">🔍 Browser Inspector Mastery</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🎯</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Element Inspector</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Right-click → Inspect</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            F12 or Ctrl+Shift+I
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📊</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Computed Styles</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">See final CSS values</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            Computed tab
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🎨</div>
                                        <div className="font-semibold text-blue-700 dark:text-blue-300">Live Editing</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Test changes instantly</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded font-mono text-xs">
                                            Click to edit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Border Method Demo */}
                        {selectedTechnique === 'border-method' && (
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200">
                                <h4 className="font-semibold mb-4 text-green-700 dark:text-green-300">🎯 Border Method Visualization</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                            <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
                                                <div style={{ border: '2px solid blue', padding: '5px' }}>
                                                    <div style={{ border: '2px solid green', padding: '5px' }}>
                                                        Content with debug borders
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900 rounded-lg p-4">
                                        <div className="font-mono text-sm text-white">
                                            <div className="text-gray-400">/* Debug borders */</div>
                                            <div><span className="text-blue-400">.container</span> {'{'}</div>
                                            <div>  <span className="text-green-400">border</span>: <span className="text-yellow-400">2px solid red</span>;</div>
                                            <div>{'}'}</div>
                                            <br />
                                            <div><span className="text-blue-400">.wrapper</span> {'{'}</div>
                                            <div>  <span className="text-green-400">border</span>: <span className="text-yellow-400">2px solid blue</span>;</div>
                                            <div>{'}'}</div>
                                            <br />
                                            <div><span className="text-blue-400">.content</span> {'{'}</div>
                                            <div>  <span className="text-green-400">border</span>: <span className="text-yellow-400">2px solid green</span>;</div>
                                            <div>{'}'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Common CSS Issues */}
            <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="w-5 h-5" />
                        Common CSS Issues & Solutions
                    </CardTitle>
                    <CardDescription>
                        The most frequent CSS problems developers encounter and how to fix them.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Issues Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {commonIssues.map((issue) => (
                                <div 
                                    key={issue.id}
                                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                        selectedIssue === issue.id
                                            ? 'border-red-500 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedIssue(issue.id)}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <issue.icon className="w-8 h-8 text-red-500" />
                                        <div>
                                            <h3 className="font-bold text-lg">{issue.name}</h3>
                                            <div className="flex gap-2">
                                                <Badge variant="destructive" className="bg-red-100 text-red-800">
                                                    {issue.severity}
                                                </Badge>
                                                <Badge variant="outline">
                                                    {issue.frequency}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {issue.description}
                                    </p>
                                    <div className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                                        <strong>Solution:</strong> {issue.solution}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Specificity Wars Deep Dive */}
                        {selectedIssue === 'specificity' && (
                            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200">
                                <h4 className="font-semibold mb-4 text-red-700 dark:text-red-300">⚔️ Specificity Wars Explained</h4>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                                        <div className="text-sm font-medium mb-2">Specificity Hierarchy (Highest to Lowest)</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-2 bg-red-100 dark:bg-red-900/30 rounded">
                                                <div className="w-6 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">1</div>
                                                <div className="font-mono text-sm">!important</div>
                                                <div className="text-xs text-gray-600">(1000 points)</div>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
                                                <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">2</div>
                                                <div className="font-mono text-sm">#id</div>
                                                <div className="text-xs text-gray-600">(100 points)</div>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                                                <div className="w-6 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">3</div>
                                                <div className="font-mono text-sm">.class</div>
                                                <div className="text-xs text-gray-600">(10 points)</div>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                                                <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">4</div>
                                                <div className="font-mono text-sm">element</div>
                                                <div className="text-xs text-gray-600">(1 point)</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm font-medium mb-2 text-red-600">❌ Problem Example</div>
                                            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                                <div className="text-gray-400">/* This won't work */</div>
                                                <div><span className="text-blue-400">.button</span> {'{'}</div>
                                                <div>  <span className="text-green-400">background</span>: <span className="text-yellow-400">blue</span>;</div>
                                                <div>{'}'}</div>
                                                <br />
                                                <div className="text-gray-400">/* Higher specificity */</div>
                                                <div><span className="text-blue-400">#header .nav .button</span> {'{'}</div>
                                                <div>  <span className="text-green-400">background</span>: <span className="text-yellow-400">red</span>;</div>
                                                <div>{'}'}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-2 text-green-600">✅ Solution</div>
                                            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-white">
                                                <div className="text-gray-400">/* Use more specific selector */</div>
                                                <div><span className="text-blue-400">#header .nav .button.primary</span> {'{'}</div>
                                                <div>  <span className="text-green-400">background</span>: <span className="text-yellow-400">blue</span>;</div>
                                                <div>{'}'}</div>
                                                <br />
                                                <div className="text-gray-400">/* Or use CSS custom properties */</div>
                                                <div><span className="text-blue-400">.button</span> {'{'}</div>
                                                <div>  <span className="text-green-400">background</span>: <span className="text-yellow-400">var(--button-color, blue)</span>;</div>
                                                <div>{'}'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Box Model Issues */}
                        {selectedIssue === 'box-model' && (
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200">
                                <h4 className="font-semibold mb-4 text-orange-700 dark:text-orange-300">📦 Box Model Debugging</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                            <div className="text-sm font-medium mb-2">Box Model Visualization</div>
                                            <div className="relative">
                                                <div className="bg-blue-200 p-4 text-center text-xs">
                                                    Margin
                                                    <div className="bg-green-200 p-4 mt-2">
                                                        Border
                                                        <div className="bg-yellow-200 p-4 mt-2">
                                                            Padding
                                                            <div className="bg-red-200 p-4 mt-2">
                                                                Content
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                                            <div className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">Common Problem</div>
                                            <div className="text-xs text-red-600 dark:text-red-400">
                                                Element wider than expected due to padding/border added to width
                                            </div>
                                        </div>
                                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                                            <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Solution</div>
                                            <div className="text-xs text-green-600 dark:text-green-400 font-mono">
                                                box-sizing: border-box;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Live Debugging Examples */}
            <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <Code className="w-5 h-5" />
                        Live Debugging Examples
                    </CardTitle>
                    <CardDescription>
                        Interactive examples showing common CSS issues and their debugging process.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Layout Debugging */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Grid className="w-5 h-5" />
                                🔧 Layout Debugging Demo
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                        <div className="text-sm font-medium mb-2">Broken Layout</div>
                                        <div className="space-y-2">
                                            <div className="bg-red-200 p-2 text-xs" style={{ width: '120%' }}>
                                                This div is overflowing!
                                            </div>
                                            <div className="bg-blue-200 p-2 text-xs">
                                                Normal div
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-red-600">
                                        ❌ Element overflows container
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                        <div className="text-sm font-medium mb-2">Fixed Layout</div>
                                        <div className="space-y-2" style={{ overflow: 'hidden' }}>
                                            <div className="bg-green-200 p-2 text-xs" style={{ maxWidth: '100%' }}>
                                                This div respects boundaries
                                            </div>
                                            <div className="bg-blue-200 p-2 text-xs">
                                                Normal div
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-green-600">
                                        ✅ Added max-width: 100%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Z-Index Debugging */}
                        <div>
                            <h4 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                <Layers className="w-5 h-5" />
                                📚 Z-Index Stacking Demo
                            </h4>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                <div className="relative h-32">
                                    <div 
                                        className="absolute bg-red-500 text-white p-2 text-xs rounded"
                                        style={{ top: '10px', left: '10px', zIndex: 1 }}
                                    >
                                        Z-Index: 1
                                    </div>
                                    <div 
                                        className="absolute bg-blue-500 text-white p-2 text-xs rounded"
                                        style={{ top: '30px', left: '30px', zIndex: 3 }}
                                    >
                                        Z-Index: 3
                                    </div>
                                    <div 
                                        className="absolute bg-green-500 text-white p-2 text-xs rounded"
                                        style={{ top: '50px', left: '50px', zIndex: 2 }}
                                    >
                                        Z-Index: 2
                                    </div>
                                </div>
                                <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                                    Blue (z-index: 3) appears on top, then Green (z-index: 2), then Red (z-index: 1)
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Debugging Playground */}
            <Card className="border-pink-200 bg-pink-50/50 dark:bg-pink-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
                        <Play className="w-5 h-5" />
                        Interactive Playground
                    </CardTitle>
                    <CardDescription>
                        Practice debugging CSS issues in a safe, live, interactive environment.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <Button 
                        onClick={() => onOpenWebPlayground(
                            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Debugging Playground</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>CSS Debugging Lab</h1>
            <nav class="debug-tools">
                <button onclick="toggleBorders()" id="border-btn">Toggle Debug Borders</button>
                <button onclick="toggleOutlines()" id="outline-btn">Toggle Outlines</button>
                <button onclick="showBoxModel()" id="box-model-btn">Show Box Model</button>
                <button onclick="resetStyles()" id="reset-btn">Reset</button>
            </nav>
        </header>
        
        <main class="main-content">
            <section class="problem-section">
                <h2>Debug These Issues</h2>
                
                <div class="issue-card" id="specificity-issue">
                    <h3>Specificity Problem</h3>
                    <div class="button-container">
                        <button class="btn primary-btn" id="problem-btn">This should be blue!</button>
                    </div>
                    <p class="issue-description">The button should be blue, but it's showing as red. Can you fix it?</p>
                </div>
                
                <div class="issue-card" id="layout-issue">
                    <h3>Layout Problem</h3>
                    <div class="flex-container">
                        <div class="flex-item">Item 1</div>
                        <div class="flex-item broken-item">Broken Item</div>
                        <div class="flex-item">Item 3</div>
                    </div>
                    <p class="issue-description">The middle item is breaking the layout. Find and fix the issue!</p>
                </div>
                
                <div class="issue-card" id="zindex-issue">
                    <h3>Z-Index Problem</h3>
                    <div class="stacking-context">
                        <div class="modal-backdrop"></div>
                        <div class="dropdown">Dropdown Menu</div>
                        <div class="modal">Modal Dialog</div>
                    </div>
                    <p class="issue-description">The dropdown should appear above the modal. Fix the stacking order!</p>
                </div>
            </section>
            
            <aside class="debug-panel">
                <h3>Debug Information</h3>
                <div id="debug-info">
                    <p>Use the debug tools above to inspect elements and identify issues.</p>
                    <div class="debug-stats">
                        <div class="stat">
                            <span class="label">Elements with borders:</span>
                            <span class="value" id="border-count">0</span>
                        </div>
                        <div class="stat">
                            <span class="label">Debug mode:</span>
                            <span class="value" id="debug-mode">Off</span>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    </div>
</body>
</html>`,
                            `/* Base Styles */
* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
    background: #f8f9fa;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.header {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.header h1 {
    margin: 0 0 1rem 0;
    color: #333;
}

.debug-tools {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.debug-tools button {
    padding: 0.5rem 1rem;
    border: 2px solid #007bff;
    background: white;
    color: #007bff;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
}

.debug-tools button:hover {
    background: #007bff;
    color: white;
}

.debug-tools button.active {
    background: #007bff;
    color: white;
}

.main-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.problem-section {
    space-y: 2rem;
}

.issue-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.issue-card h3 {
    margin: 0 0 1rem 0;
    color: #dc3545;
}

.issue-description {
    margin: 1rem 0 0 0;
    color: #666;
    font-size: 0.875rem;
    background: #fff3cd;
    padding: 0.75rem;
    border-radius: 6px;
    border-left: 4px solid #ffc107;
}

/* Specificity Problem Styles */
.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.primary-btn {
    background: #007bff !important;
    color: white;
}

/* This has higher specificity and overrides the blue */
.issue-card .button-container .btn {
    background: #dc3545;
    color: white;
}

/* Layout Problem Styles */
.flex-container {
    display: flex;
    gap: 1rem;
    background: #e9ecef;
    padding: 1rem;
    border-radius: 6px;
}

.flex-item {
    flex: 1;
    padding: 1rem;
    background: #007bff;
    color: white;
    text-align: center;
    border-radius: 4px;
}

.broken-item {
    width: 500px; /* This breaks the flex layout */
    flex: none;
}

/* Z-Index Problem Styles */
.stacking-context {
    position: relative;
    height: 200px;
    background: #e9ecef;
    border-radius: 6px;
    overflow: hidden;
}

.modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
}

.dropdown {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    z-index: 50; /* Lower than modal backdrop */
}

.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 200;
}

.debug-panel {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    height: fit-content;
    position: sticky;
    top: 2rem;
}

.debug-panel h3 {
    margin: 0 0 1rem 0;
    color: #333;
}

.debug-stats {
    margin-top: 1rem;
}

.stat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: #f8f9fa;
    border-radius: 4px;
}

.label {
    font-weight: 600;
    color: #666;
}

.value {
    color: #007bff;
    font-weight: 600;
}

/* Debug Styles */
.debug-borders * {
    border: 1px solid red !important;
}

.debug-outlines * {
    outline: 2px solid blue !important;
}

.debug-box-model * {
    background: rgba(255, 0, 0, 0.1) !important;
    border: 1px dashed red !important;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
    }
    
    .debug-tools {
        flex-direction: column;
    }
    
    .flex-container {
        flex-direction: column;
    }
    
    .broken-item {
        width: auto;
    }
}`,
                            `// CSS Debugging Playground JavaScript
let debugMode = {
    borders: false,
    outlines: false,
    boxModel: false
};

function toggleBorders() {
    const body = document.body;
    const btn = document.getElementById('border-btn');
    
    debugMode.borders = !debugMode.borders;
    
    if (debugMode.borders) {
        body.classList.add('debug-borders');
        btn.classList.add('active');
        btn.textContent = 'Hide Debug Borders';
    } else {
        body.classList.remove('debug-borders');
        btn.classList.remove('active');
        btn.textContent = 'Toggle Debug Borders';
    }
    
    updateDebugInfo();
}

function toggleOutlines() {
    const body = document.body;
    const btn = document.getElementById('outline-btn');
    
    debugMode.outlines = !debugMode.outlines;
    
    if (debugMode.outlines) {
        body.classList.add('debug-outlines');
        btn.classList.add('active');
        btn.textContent = 'Hide Outlines';
    } else {
        body.classList.remove('debug-outlines');
        btn.classList.remove('active');
        btn.textContent = 'Toggle Outlines';
    }
    
    updateDebugInfo();
}

function showBoxModel() {
    const body = document.body;
    const btn = document.getElementById('box-model-btn');
    
    debugMode.boxModel = !debugMode.boxModel;
    
    if (debugMode.boxModel) {
        body.classList.add('debug-box-model');
        btn.classList.add('active');
        btn.textContent = 'Hide Box Model';
    } else {
        body.classList.remove('debug-box-model');
        btn.classList.remove('active');
        btn.textContent = 'Show Box Model';
    }
    
    updateDebugInfo();
}

function resetStyles() {
    const body = document.body;
    const buttons = document.querySelectorAll('.debug-tools button');
    
    // Reset all debug modes
    debugMode = { borders: false, outlines: false, boxModel: false };
    
    // Remove all debug classes
    body.classList.remove('debug-borders', 'debug-outlines', 'debug-box-model');
    
    // Reset button states
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset button text
    document.getElementById('border-btn').textContent = 'Toggle Debug Borders';
    document.getElementById('outline-btn').textContent = 'Toggle Outlines';
    document.getElementById('box-model-btn').textContent = 'Show Box Model';
    
    updateDebugInfo();
}

function updateDebugInfo() {
    const borderCount = debugMode.borders ? document.querySelectorAll('*').length : 0;
    const debugModeText = Object.values(debugMode).some(mode => mode) ? 'On' : 'Off';
    
    document.getElementById('border-count').textContent = borderCount;
    document.getElementById('debug-mode').textContent = debugModeText;
}

// Add click handlers for issue demonstrations
function demonstrateSpecificityFix() {
    const problemBtn = document.getElementById('problem-btn');
    const style = document.createElement('style');
    style.textContent = \`
        .issue-card .button-container .btn.primary-btn {
            background: #007bff !important;
        }
    \`;
    document.head.appendChild(style);
    
    alert('Fixed! Added more specific selector to override the red background.');
}

function demonstrateLayoutFix() {
    const brokenItem = document.querySelector('.broken-item');
    brokenItem.style.width = 'auto';
    brokenItem.style.flex = '1';
    
    alert('Fixed! Removed fixed width and restored flex: 1 property.');
}

function demonstrateZIndexFix() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.zIndex = '300';
    
    alert('Fixed! Increased dropdown z-index to 300 to appear above modal.');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateDebugInfo();
    
    // Add click handlers for demonstrations
    document.getElementById('problem-btn').addEventListener('click', demonstrateSpecificityFix);
    document.querySelector('.broken-item').addEventListener('click', demonstrateLayoutFix);
    document.querySelector('.dropdown').addEventListener('click', demonstrateZIndexFix);
    
    console.log('CSS Debugging Playground loaded!');
    console.log('Use the debug tools to inspect elements and identify issues.');
});`
                        )}
                        className="w-full"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Open Debugging Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

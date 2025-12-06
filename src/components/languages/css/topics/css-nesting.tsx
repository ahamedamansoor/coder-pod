'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Layers, Sparkles, CheckCircle, Info, Code, Zap, Package
} from 'lucide-react';

interface CssNestingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssNesting({ onOpenWebPlayground }: CssNestingProps) {
    
    // Basic Nesting Example
    const basicNestingExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Nesting Basics</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        }
    }
    
    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .container {
            background: #1e293b;
            color: #e2e8f0;
        }
    }
    
    h1 {
        text-align: center;
        color: #8b5cf6;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #a78bfa;
        }
    }
    
    .subtitle {
        text-align: center;
        color: #64748b;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .subtitle {
            color: #94a3b8;
        }
    }
    
    /* Traditional CSS (Without Nesting) */
    .card-traditional {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .card-traditional {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .card-traditional h3 {
        color: #ef4444;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .card-traditional h3 {
            color: #f87171;
        }
    }
    
    .card-traditional p {
        color: #64748b;
        line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
        .card-traditional p {
            color: #cbd5e1;
        }
    }
    
    .card-traditional button {
        background: #ef4444;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 1rem;
    }
    
    .card-traditional button:hover {
        background: #dc2626;
    }
    
    /* Modern CSS (With Nesting) */
    .card-nested {
        background: #f0fdf4;
        border: 2px solid #bbf7d0;
        border-radius: 12px;
        padding: 1.5rem;
        max-width: 100%;
        overflow: hidden;
        
        & h3 {
            color: #10b981;
            margin-bottom: 1rem;
        }
        
        & p {
            color: #64748b;
            line-height: 1.6;
        }
        
        & button {
            background: #10b981;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 1rem;
            
            &:hover {
                background: #059669;
            }
        }
    }
    
    @media (prefers-color-scheme: dark) {
        .card-nested {
            background: #14532d;
            border-color: #15803d;
            
            & h3 {
                color: #34d399;
            }
            
            & p {
                color: #cbd5e1;
            }
        }
    }
    
    .comparison {
        display: grid;
        gap: 1.5rem;
    }
    
    .label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    .label-old {
        background: #fee2e2;
        color: #991b1b;
    }
    
    .label-new {
        background: #d1fae5;
        color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
        .label-old {
            background: #7f1d1d;
            color: #fca5a5;
        }
        
        .label-new {
            background: #064e3b;
            color: #6ee7b7;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 CSS Nesting</h1>
        <p class="subtitle">Write cleaner, more organized CSS with native nesting</p>
        
        <div class="comparison">
            <div>
                <span class="label label-old">❌ Traditional CSS</span>
                <div class="card-traditional">
                    <h3>Without Nesting</h3>
                    <p>Requires multiple separate selectors and repetitive class names.</p>
                    <button>Learn More</button>
                </div>
            </div>
            
            <div>
                <span class="label label-new">✅ Modern CSS Nesting</span>
                <div class="card-nested">
                    <h3>With Nesting</h3>
                    <p>Clean, organized code with nested selectors - just like SCSS!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Advanced Nesting Example
    const advancedNestingExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Nesting</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        }
    }
    
    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .container {
            background: #1e293b;
            color: #e2e8f0;
        }
    }
    
    h1 {
        text-align: center;
        color: #8b5cf6;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #a78bfa;
        }
    }
    
    /* Advanced Nesting with & selector */
    .card {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        transition: all 0.3s;
        max-width: 100%;
        overflow: hidden;
        
        /* Nested element */
        & .card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            
            & .icon {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #8b5cf6, #7c3aed);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.25rem;
            }
            
            & h3 {
                color: #1f2937;
                font-size: 1.1rem;
            }
        }
        
        & .card-body {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1rem;
            
            & strong {
                color: #8b5cf6;
                font-weight: 600;
            }
        }
        
        & .card-footer {
            display: flex;
            gap: 0.5rem;
            
            & button {
                padding: 0.5rem 1rem;
                border-radius: 6px;
                border: none;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s;
                
                &.primary {
                    background: #8b5cf6;
                    color: white;
                    
                    &:hover {
                        background: #7c3aed;
                        transform: translateY(-2px);
                    }
                }
                
                &.secondary {
                    background: #e5e7eb;
                    color: #374151;
                    
                    &:hover {
                        background: #d1d5db;
                    }
                }
            }
        }
        
        /* Pseudo-class nesting */
        &:hover {
            border-color: #8b5cf6;
            box-shadow: 0 8px 16px rgba(139, 92, 246, 0.2);
        }
        
        /* State variations */
        &.success {
            border-color: #10b981;
            
            & .card-header .icon {
                background: linear-gradient(135deg, #10b981, #059669);
            }
            
            & .card-body strong {
                color: #10b981;
            }
        }
        
        &.warning {
            border-color: #f59e0b;
            
            & .card-header .icon {
                background: linear-gradient(135deg, #f59e0b, #d97706);
            }
            
            & .card-body strong {
                color: #f59e0b;
            }
        }
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: #334155;
            border-color: #475569;
            
            & .card-header h3 {
                color: #f1f5f9;
            }
            
            & .card-body {
                color: #cbd5e1;
            }
            
            & .card-footer button.secondary {
                background: #475569;
                color: #e2e8f0;
                
                &:hover {
                    background: #64748b;
                }
            }
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Advanced CSS Nesting</h1>
        
        <div class="card">
            <div class="card-header">
                <div class="icon">🎯</div>
                <h3>Default Card</h3>
            </div>
            <div class="card-body">
                This card uses <strong>nested selectors</strong> for cleaner CSS organization.
            </div>
            <div class="card-footer">
                <button class="primary">Primary</button>
                <button class="secondary">Secondary</button>
            </div>
        </div>
        
        <div class="card success">
            <div class="card-header">
                <div class="icon">✅</div>
                <h3>Success Card</h3>
            </div>
            <div class="card-body">
                Uses <strong>modifier classes</strong> with nested state variations.
            </div>
            <div class="card-footer">
                <button class="primary">Continue</button>
                <button class="secondary">Cancel</button>
            </div>
        </div>
        
        <div class="card warning">
            <div class="card-header">
                <div class="icon">⚠️</div>
                <h3>Warning Card</h3>
            </div>
            <div class="card-body">
                Demonstrates <strong>complex nesting</strong> with multiple levels and states.
            </div>
            <div class="card-footer">
                <button class="primary">Proceed</button>
                <button class="secondary">Go Back</button>
            </div>
        </div>
    </div>
</body>
</html>`;

    const handleOpenPlayground = (code: string) => {
        if (onOpenWebPlayground) {
            onOpenWebPlayground(code, '', '');
        }
    };

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Layers}
                category="CSS · Advanced"
                title="CSS Nesting"
                description="Write cleaner, more maintainable CSS with native nesting support - no preprocessor required!"
                colorTheme="purple"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
                        <div className="relative">
                            <Layers className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Nesting?
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                        🚀 Write cleaner, more organized CSS with native nesting - just like Sass, but built right into CSS!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    🎯 Nesting vs Traditional CSS
                                </h4>
                                
                                {/* Visual comparison */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <Code className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                            <h4 className="font-semibold mb-2">Cleaner Code</h4>
                            <p className="text-sm text-muted-foreground">
                                Group related styles together for better organization
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <Package className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                            <h4 className="font-semibold mb-2">No Preprocessor</h4>
                            <p className="text-sm text-muted-foreground">
                                Native CSS feature - no build tools required
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                            <h4 className="font-semibold mb-2">Better DX</h4>
                            <p className="text-sm text-muted-foreground">
                                Improved developer experience and code readability
                            </p>
                        </div>
                    </div>

                                {/* Interactive hint */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        💡 Key Difference
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Nesting keeps related styles together, making code easier to read and maintain - no more repeating parent selectors!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Nesting Capabilities
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Code className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">& Selector</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Reference parent</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Package className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">No Build Tools</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Native CSS</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Zap className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Clean Code</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Better organization</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <CheckCircle className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Less Repetition</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">DRY code</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🎯</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Nesting</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Clean & organized
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Easy to maintain
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Native support
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Limit nesting to 3-4 levels maximum to keep CSS specificity manageable!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Comparison kept from before */}
                    <div className="mt-6 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center space-y-3">
                                <div className="text-4xl mb-2">📝</div>
                                <div className="font-bold text-lg text-gray-700 dark:text-gray-300">Traditional CSS</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                        <span className="text-lg">❌</span>
                                        Repetitive selectors
                                    </div>
                                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                        <span className="text-lg">❌</span>
                                        Hard to maintain
                                    </div>
                                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                        <span className="text-lg">❌</span>
                                        Verbose code
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center space-y-3">
                                <div className="relative">
                                    <div className="text-4xl mb-2 animate-bounce">🎯</div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                </div>
                                <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Nesting</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                        <CheckCircle className="w-4 h-4" />
                                        Clean & organized
                                    </div>
                                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                        <CheckCircle className="w-4 h-4" />
                                        Easy to maintain
                                    </div>
                                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                        <CheckCircle className="w-4 h-4" />
                                        Native support
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Comparison */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-400 text-xs ml-2">Traditional CSS</span>
                            </div>
                            <div className="font-mono text-xs">
                                <div className="text-blue-600 dark:text-blue-400">.card</div>
                                <div className="text-gray-900 dark:text-white"> {'{ ... }'}</div>
                                <div className="text-blue-600 dark:text-blue-400">.card h3</div>
                                <div className="text-gray-900 dark:text-white"> {'{ ... }'}</div>
                                <div className="text-blue-600 dark:text-blue-400">.card p</div>
                                <div className="text-gray-900 dark:text-white"> {'{ ... }'}</div>
                                <div className="text-blue-600 dark:text-blue-400">.card button</div>
                                <div className="text-gray-900 dark:text-white"> {'{ ... }'}</div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-50 dark:bg-gray-900 rounded-xl p-4 border border-purple-300 dark:border-purple-500">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-purple-700 dark:text-purple-400 text-xs ml-2">CSS Nesting ✨</span>
                            </div>
                            <div className="font-mono text-xs">
                                <div className="text-blue-600 dark:text-blue-400">.card</div>
                                <div className="text-gray-900 dark:text-white"> {'{'}</div>
                                <div className="text-gray-900 dark:text-white">   <span className="text-gray-500">/* styles */</span></div>
                                <div className="text-gray-900 dark:text-white">   <span className="text-purple-700 dark:text-purple-400">&</span> h3 {'{ ... }'}</div>
                                <div className="text-gray-900 dark:text-white">   <span className="text-purple-700 dark:text-purple-400">&</span> p {'{ ... }'}</div>
                                <div className="text-gray-900 dark:text-white">   <span className="text-purple-700 dark:text-purple-400">&</span> button {'{ ... }'}</div>
                                <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC NESTING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        1. Basic Nesting Syntax
                    </CardTitle>
                    <CardDescription>
                        Compare traditional CSS with modern nested CSS
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={basicNestingExample}
                        title="Basic CSS Nesting Demo"
                        colorTheme="purple"
                        onOpenPlayground={() => handleOpenPlayground(basicNestingExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">💡 Key Benefits:</h4>
                        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Reduced repetition</strong> - No need to repeat parent selectors</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Better organization</strong> - Related styles are grouped together</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Easier maintenance</strong> - Changes are localized to one place</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* ADVANCED NESTING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        2. Advanced Nesting with & Selector
                    </CardTitle>
                    <CardDescription>
                        Use the & selector for complex nesting scenarios
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={advancedNestingExample}
                        title="Advanced Nesting Examples"
                        colorTheme="purple"
                        onOpenPlayground={() => handleOpenPlayground(advancedNestingExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🎯 The & Selector:</h4>
                        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>&</strong> represents the parent selector</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>&:hover</strong> applies styles on hover</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>&.modifier</strong> combines with modifier classes</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* SYNTAX REFERENCE */}
            <Card>
                <CardHeader>
                    <CardTitle>Nesting Syntax Reference</CardTitle>
                    <CardDescription>
                        Quick reference for CSS nesting patterns
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                .parent {"{ & .child { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Basic descendant selector nesting</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                .parent {"{ &:hover { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Pseudo-class nesting</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                .parent {"{ &.modifier { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Modifier class nesting</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                .parent {"{ &::before { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Pseudo-element nesting</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                {"@media (min-width: 768px) { .parent { & .child { } } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Media query nesting</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
                <AlertDescription className="text-green-800 dark:text-green-200">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Limit nesting depth</strong> - Keep nesting to 3-4 levels maximum</li>
                        <li><strong>Use & selector</strong> - Be explicit with the & selector for clarity</li>
                        <li><strong>Group related styles</strong> - Nest styles that belong together logically</li>
                        <li><strong>Avoid over-nesting</strong> - Don't nest just because you can</li>
                        <li><strong>Consider specificity</strong> - Nesting increases selector specificity</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>CSS Nesting is supported in modern browsers!</strong> Chrome 112+, Edge 112+, Safari 16.5+, and Firefox 117+. For older browsers, consider using PostCSS with the nesting plugin or a CSS preprocessor like Sass.
                </AlertDescription>
            </Alert>
        </div>
    );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Target, Sparkles, CheckCircle, Info, Code, Box, Shield
} from 'lucide-react';

interface CssScopingProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssScoping({ onOpenWebPlayground }: CssScopingProps) {
    
    // Basic Scoping Example
    const basicScopingExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Scoping Basics</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #15803d 0%, #166534 100%);
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
        color: #22c55e;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #4ade80;
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
    
    /* Without Scoping - Global Styles */
    .card {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .card h3 {
        color: #1f2937;
        margin-bottom: 0.75rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .card h3 {
            color: #f1f5f9;
        }
    }
    
    .card p {
        color: #64748b;
        line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
        .card p {
            color: #cbd5e1;
        }
    }
    
    /* With Scoping - Only affects elements within .scoped-section */
    @scope (.scoped-section) {
        .card {
            background: linear-gradient(135deg, #d1fae5, #a7f3d0);
            border-color: #22c55e;
        }
        
        .card h3 {
            color: #065f46;
        }
        
        .card p {
            color: #047857;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        @scope (.scoped-section) {
            .card {
                background: linear-gradient(135deg, #14532d, #15803d);
                border-color: #22c55e;
            }
            
            .card h3 {
                color: #6ee7b7;
            }
            
            .card p {
                color: #86efac;
            }
        }
    }
    
    .section-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }
    
    .label-global {
        background: #dbeafe;
        color: #1e40af;
    }
    
    .label-scoped {
        background: #d1fae5;
        color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
        .label-global {
            background: #1e3a8a;
            color: #93c5fd;
        }
        
        .label-scoped {
            background: #064e3b;
            color: #6ee7b7;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 CSS Scoping</h1>
        <p class="subtitle">Limit CSS rules to specific sections of your page</p>
        
        <div class="global-section">
            <span class="section-label label-global">🌍 Global Styles</span>
            <div class="card">
                <h3>Regular Card</h3>
                <p>This card uses global CSS styles that apply everywhere.</p>
            </div>
        </div>
        
        <div class="scoped-section">
            <span class="section-label label-scoped">🔒 Scoped Styles</span>
            <div class="card">
                <h3>Scoped Card</h3>
                <p>This card uses scoped CSS that only applies within the scoped-section!</p>
            </div>
        </div>
        
        <div class="global-section">
            <span class="section-label label-global">🌍 Global Styles Again</span>
            <div class="card">
                <h3>Another Regular Card</h3>
                <p>Back to global styles - scoping doesn't affect this card.</p>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Advanced Scoping Example
    const advancedScopingExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Scoping</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #15803d 0%, #166534 100%);
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
        color: #22c55e;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #4ade80;
        }
    }
    
    /* Scoping with limits - applies to .article but not nested .sidebar */
    @scope (.article) to (.sidebar) {
        h2 {
            color: #3b82f6;
            border-left: 4px solid #3b82f6;
            padding-left: 1rem;
            margin-bottom: 1rem;
        }
        
        p {
            color: #64748b;
            line-height: 1.8;
            margin-bottom: 1rem;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        @scope (.article) to (.sidebar) {
            h2 {
                color: #60a5fa;
                border-color: #60a5fa;
            }
            
            p {
                color: #cbd5e1;
            }
        }
    }
    
    .article {
        background: #f8fafc;
        border-radius: 12px;
        padding: 2rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .article {
            background: #334155;
        }
    }
    
    .sidebar {
        background: #fef3c7;
        border: 2px solid #fbbf24;
        border-radius: 8px;
        padding: 1.5rem;
        margin-top: 1.5rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .sidebar {
            background: #78350f;
            border-color: #fbbf24;
        }
    }
    
    .sidebar h2 {
        color: #92400e;
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .sidebar h2 {
            color: #fde047;
        }
    }
    
    .sidebar p {
        color: #78350f;
        font-size: 0.875rem;
        line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
        .sidebar p {
            color: #fde68a;
        }
    }
    
    .demo-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        background: #dbeafe;
        color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
        .demo-badge {
            background: #1e3a8a;
            color: #93c5fd;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔬 Advanced Scoping with Limits</h1>
        
        <div class="article">
            <span class="demo-badge">Scoped Section</span>
            <h2>Main Article Content</h2>
            <p>This heading and paragraph are styled by the scoped CSS rules.</p>
            <p>The scope applies to elements within .article but NOT within .sidebar!</p>
            
            <div class="sidebar">
                <span class="demo-badge">Excluded from Scope</span>
                <h2>Sidebar Content</h2>
                <p>This h2 and p are NOT affected by the scoped styles because they're inside .sidebar (the scope limit).</p>
            </div>
            
            <h2>More Article Content</h2>
            <p>Back to scoped styles - this content is affected again because it's in .article but not in .sidebar.</p>
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
                icon={Target}
                category="CSS · Advanced"
                title="CSS Scoping"
                description="Scope CSS rules to specific parts of your page with the @scope rule - precise style control without naming conflicts"
                colorTheme="green"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-green-700 dark:text-green-300">
                        <div className="relative">
                            <Target className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                        </div>
                        What is CSS Scoping?
                    </CardTitle>
                    <CardDescription className="text-lg text-green-600 dark:text-green-400">
                        🚀 Contain CSS rules to specific sections - create truly isolated components without style leaks!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Shield className="w-5 h-5 animate-pulse" />
                                    🎯 Scope Isolation
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Scoping</strong> using the <code className="text-xs bg-muted px-1 py-0.5 rounded">@scope</code> rule allows you to apply styles only within a specific part of your HTML. This prevents style conflicts and makes component-based styling easier!
                                </p>

                                {/* Scope Hint */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50 mt-4">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🔒 Scope Boundaries
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Styles defined with @scope only affect elements within the specified container - perfect for component isolation!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Scoping Capabilities
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Shield className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Isolation</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">No style leaks</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Box className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Components</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Perfect for isolation</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Code className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Clean Selectors</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Simple names</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Target className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Precise Control</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Target specific areas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">🎯</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-green-700 dark:text-green-300">CSS Scoping</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            No style leaks
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Component isolation
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Clean code
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
                                        Use @scope with the 'to' keyword to exclude specific descendants!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scope Visualization */}
                    <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50">
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="text-4xl mb-2 animate-bounce">🎯</div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">🔒</div>
                            </div>
                            <h4 className="font-bold text-lg text-green-700 dark:text-green-300 mb-2">Scope Boundaries</h4>
                            <p className="text-sm text-green-600 dark:text-green-400">Styles stay within their scope</p>
                        </div>
                        
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700">
                                <div className="text-xs text-muted-foreground mb-2">🌍 Global Scope</div>
                                <div className="space-y-2">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded border-2 border-green-500 border-dashed">
                                        <div className="text-xs font-mono text-green-700 dark:text-green-300 mb-1">@scope (.component)</div>
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                                            <div className="flex items-center gap-2">
                                                <Shield className="w-3 h-3 text-green-600" />
                                                <span className="text-green-600 dark:text-green-400 font-semibold">Scoped styles apply here only</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-xs text-center">
                                        <span className="text-muted-foreground">Other elements unaffected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex justify-center gap-4">
                            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs">
                                <CheckCircle className="w-3 h-3 text-green-600" />
                                <span className="text-gray-700 dark:text-gray-300">No style leaks</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs">
                                <Box className="w-3 h-3 text-green-600" />
                                <span className="text-gray-700 dark:text-gray-300">Component isolation</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Scope Example</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🎯 Define scope boundary */</div>
                            <div className="text-purple-700 dark:text-purple-400">@scope</div>
                            <div className="text-gray-900 dark:text-white"> (.component) {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">.card</span> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">     <span className="text-green-600 dark:text-green-400">background</span>: <span className="text-yellow-600 dark:text-yellow-400">green</span>;</div>
                            <div className="text-gray-900 dark:text-white">   {'}'}</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🚫 This .card is NOT affected */</div>
                            <div className="text-blue-600 dark:text-blue-400">.other-card</div>
                            <div className="text-gray-900 dark:text-white"> {'{ ... }'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC SCOPING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                            <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        1. Basic Scoping Syntax
                    </CardTitle>
                    <CardDescription>
                        Limit styles to a specific container
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={basicScopingExample}
                        title="Basic CSS Scoping Demo"
                        colorTheme="green"
                        onOpenPlayground={() => handleOpenPlayground(basicScopingExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">💡 How Scoping Works:</h4>
                        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>@scope (.selector)</strong> limits styles to elements inside .selector</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Styles don't leak</strong> outside the scoped container</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Same classes</strong> can have different styles in different scopes</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* ADVANCED SCOPING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                            <Box className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        2. Scoping with Limits
                    </CardTitle>
                    <CardDescription>
                        Exclude specific nested elements from the scope
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={advancedScopingExample}
                        title="Advanced Scoping with Exclusions"
                        colorTheme="green"
                        onOpenPlayground={() => handleOpenPlayground(advancedScopingExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🎯 Scope Limits:</h4>
                        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>@scope (.root) to (.limit)</strong> excludes .limit and its children</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Useful for nested components</strong> that should maintain their own styles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Prevents style bleeding</strong> into nested scoped sections</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* SYNTAX REFERENCE */}
            <Card>
                <CardHeader>
                    <CardTitle>Scoping Syntax Reference</CardTitle>
                    <CardDescription>
                        Common patterns for using @scope
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-green-600 dark:text-green-400">
                                @scope (.container) {"{ .card { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Apply styles only to .card inside .container</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-green-600 dark:text-green-400">
                                @scope (.parent) to (.child) {"{ p { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Style p in .parent but not in .child</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-green-600 dark:text-green-400">
                                @scope {"{ :scope { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">:scope selector targets the scope root element</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-green-600 dark:text-green-400">
                                @scope (article) {"{ & h2 { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Combine scoping with nesting</p>
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
                        <li><strong>Use for components</strong> - Perfect for isolating component styles</li>
                        <li><strong>Combine with nesting</strong> - Use @scope with CSS nesting for cleaner code</li>
                        <li><strong>Set clear boundaries</strong> - Define scope roots that match your component structure</li>
                        <li><strong>Use limits wisely</strong> - Exclude nested components that should maintain independence</li>
                        <li><strong>Avoid over-scoping</strong> - Don't scope every single element unnecessarily</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>CSS @scope is a newer feature!</strong> Currently supported in Chrome 118+, Edge 118+, and Safari 17.4+. Firefox support is in development. For broader compatibility, consider using CSS Modules, Shadow DOM, or BEM naming conventions as alternatives.
                </AlertDescription>
            </Alert>
        </div>
    );
}

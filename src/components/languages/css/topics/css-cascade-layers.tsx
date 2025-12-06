'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Layers, Sparkles, CheckCircle, Info, Code, ArrowDown, Package
} from 'lucide-react';

interface CssCascadeLayersProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssCascadeLayers({ onOpenWebPlayground }: CssCascadeLayersProps) {
    
    // Basic Layers Example
    const basicLayersExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Cascade Layers Basics</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
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
        color: #3b82f6;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #60a5fa;
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
    
    /* Define layer order - earlier layers have lower priority */
    @layer reset, base, components, utilities;
    
    /* Reset Layer - Lowest Priority */
    @layer reset {
        .demo-box {
            background: #f87171;
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 600;
            max-width: 100%;
            overflow: hidden;
        }
    }
    
    /* Base Layer */
    @layer base {
        .demo-box {
            background: #fb923c;
            font-size: 1rem;
        }
    }
    
    /* Components Layer */
    @layer components {
        .demo-box {
            background: #fbbf24;
            border: 3px solid #f59e0b;
        }
    }
    
    /* Utilities Layer - Highest Priority */
    @layer utilities {
        .demo-box {
            background: #10b981;
        }
    }
    
    .layer-info {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .layer-card {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 1rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .layer-card {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .layer-card h3 {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: #1f2937;
    }
    
    @media (prefers-color-scheme: dark) {
        .layer-card h3 {
            color: #f1f5f9;
        }
    }
    
    .layer-card p {
        font-size: 0.85rem;
        color: #64748b;
        line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
        .layer-card p {
            color: #cbd5e1;
        }
    }
    
    .priority-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: 0.5rem;
    }
    
    .priority-low {
        background: #fee2e2;
        color: #991b1b;
    }
    
    .priority-high {
        background: #d1fae5;
        color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
        .priority-low {
            background: #7f1d1d;
            color: #fca5a5;
        }
        
        .priority-high {
            background: #064e3b;
            color: #6ee7b7;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 CSS Cascade Layers</h1>
        <p class="subtitle">Control CSS priority with explicit layers</p>
        
        <div class="demo-box">
            This box's final color is GREEN (utilities layer wins!)
        </div>
        
        <div class="layer-info">
            <div class="layer-card">
                <h3>
                    Layer 1: reset
                    <span class="priority-badge priority-low">Lowest Priority</span>
                </h3>
                <p>Sets color to RED, but gets overridden by higher layers</p>
            </div>
            
            <div class="layer-card">
                <h3>Layer 2: base</h3>
                <p>Changes color to ORANGE</p>
            </div>
            
            <div class="layer-card">
                <h3>Layer 3: components</h3>
                <p>Changes color to YELLOW and adds border</p>
            </div>
            
            <div class="layer-card">
                <h3>
                    Layer 4: utilities
                    <span class="priority-badge priority-high">Highest Priority</span>
                </h3>
                <p>Final color is GREEN - this layer wins!</p>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Practical Layers Example
    const practicalLayersExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical Cascade Layers</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
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
        color: #3b82f6;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #60a5fa;
        }
    }
    
    /* Layer Declaration */
    @layer framework, components, utilities;
    
    /* Framework Layer (3rd Party CSS) */
    @layer framework {
        .button {
            background: #9ca3af;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .button:hover {
            background: #6b7280;
        }
    }
    
    /* Components Layer (Your Custom Components) */
    @layer components {
        .button {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            padding: 0.875rem 1.75rem;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .button:hover {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            transform: translateY(-2px);
        }
        
        .button.success {
            background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .button.danger {
            background: linear-gradient(135deg, #ef4444, #dc2626);
        }
    }
    
    /* Utilities Layer (Override Everything) */
    @layer utilities {
        .shadow-lg {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
        }
        
        .rounded-full {
            border-radius: 9999px !important;
        }
    }
    
    .demo-section {
        margin-bottom: 2rem;
    }
    
    .demo-section h2 {
        font-size: 1.1rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .demo-section h2 {
            color: #f1f5f9;
        }
    }
    
    .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .info-box {
        background: #eff6ff;
        border: 2px solid #bfdbfe;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        font-size: 0.875rem;
        color: #1e40af;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .info-box {
            background: #1e3a8a;
            border-color: #3b82f6;
            color: #bfdbfe;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Practical Cascade Layers</h1>
        
        <div class="demo-section">
            <h2>Default Buttons (Framework + Components Layers)</h2>
            <div class="button-group">
                <button class="button">Default</button>
                <button class="button success">Success</button>
                <button class="button danger">Danger</button>
            </div>
            <div class="info-box">
                These buttons inherit styles from framework layer and are enhanced by components layer
            </div>
        </div>
        
        <div class="demo-section">
            <h2>With Utility Overrides</h2>
            <div class="button-group">
                <button class="button shadow-lg">Shadow</button>
                <button class="button success rounded-full">Rounded</button>
                <button class="button danger shadow-lg rounded-full">Both</button>
            </div>
            <div class="info-box">
                Utility layer has highest priority and can override component styles
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
                title="CSS Cascade Layers"
                description="Organize and control CSS priority with explicit cascade layers - manage specificity conflicts effectively"
                colorTheme="blue"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
                        <div className="relative">
                            <Layers className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Cascade Layers?
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                        🚀 Take control of CSS priority with explicit layers - organize styles like a pro and say goodbye to specificity wars!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <ArrowDown className="w-5 h-5 animate-pulse" />
                                    🎯 Layer Priority Control
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Cascade Layers</strong> (<code className="text-xs bg-muted px-1 py-0.5 rounded">@layer</code>) allow you to explicitly define the <strong className="text-foreground">priority order</strong> of your CSS. This helps manage specificity conflicts!
                                </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                            <h4 className="font-semibold mb-2">Priority Control</h4>
                            <p className="text-sm text-muted-foreground">
                                Define which styles take precedence
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <Package className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                            <h4 className="font-semibold mb-2">Framework Friendly</h4>
                            <p className="text-sm text-muted-foreground">
                                Easily override third-party CSS
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                            <h4 className="font-semibold mb-2">Better Organization</h4>
                            <p className="text-sm text-muted-foreground">
                                Structure CSS by logical concerns
                            </p>
                        </div>
                    </div>

                                {/* Layer Stack Visual */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50 mb-4">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Package className="w-4 h-4" />
                                        📚 Layer Order
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Earlier layers have lower priority → Later layers win! Perfect for organizing framework, component, and utility styles.
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Layer Capabilities
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <ArrowDown className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Priority Control</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Define order</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                                        <Package className="w-6 h-6 text-pink-500" />
                                        <div>
                                            <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Framework Friendly</div>
                                            <div className="text-xs text-pink-600 dark:text-pink-400">Override 3rd party</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Code className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Organization</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Logical structure</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <CheckCircle className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">No !important</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Clean overrides</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">📚</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Cascade Layers</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Explicit priority
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Framework control
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Clean organization
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
                                        Order your layers as: reset → base → components → utilities for maximum control!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Layer Stack Visualization kept */}
                    <div className="mt-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/50">
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="text-4xl mb-2 animate-bounce">📚</div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                            </div>
                            <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2">Layer Priority Stack</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Higher layers override lower layers</p>
                        </div>
                        
                        <div className="space-y-2 max-w-md mx-auto">
                            <div className="bg-green-500/90 text-white p-3 rounded-lg text-center font-semibold transform hover:scale-105 transition-transform">
                                <div className="flex items-center justify-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    Layer 4: utilities (Highest Priority)
                                </div>
                            </div>
                            <div className="bg-blue-500/80 text-white p-3 rounded-lg text-center font-semibold transform hover:scale-105 transition-transform">
                                Layer 3: components
                            </div>
                            <div className="bg-indigo-500/70 text-white p-3 rounded-lg text-center font-semibold transform hover:scale-105 transition-transform">
                                Layer 2: base
                            </div>
                            <div className="bg-gray-500/60 text-white p-3 rounded-lg text-center font-semibold transform hover:scale-105 transition-transform">
                                Layer 1: reset (Lowest Priority)
                            </div>
                        </div>
                        
                        <div className="mt-4 text-center">
                            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm">
                                <ArrowDown className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700 dark:text-gray-300">Priority flows upward</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Layer Declaration</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 📚 Define Layer Order */</div>
                            <div className="text-purple-700 dark:text-purple-400">@layer</div>
                            <div className="text-gray-900 dark:text-white"> reset, base, components, utilities;</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Use Layers */</div>
                            <div className="text-purple-700 dark:text-purple-400">@layer</div>
                            <div className="text-gray-900 dark:text-white"> components {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">.button</span> {'{ ... }'}</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC LAYERS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        1. Understanding Layer Priority
                    </CardTitle>
                    <CardDescription>
                        See how cascade layers determine which styles win
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={basicLayersExample}
                        title="Cascade Layers Priority Demo"
                        colorTheme="blue"
                        onOpenPlayground={() => handleOpenPlayground(basicLayersExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎯 How Layer Priority Works:</h4>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Earlier layers</strong> have lower priority</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Later layers</strong> override earlier ones</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Layer order</strong> is defined with @layer declaration</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* PRACTICAL EXAMPLE */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        2. Practical Use Case
                    </CardTitle>
                    <CardDescription>
                        Organize framework, component, and utility styles
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={practicalLayersExample}
                        title="Real-World Layer Organization"
                        colorTheme="blue"
                        onOpenPlayground={() => handleOpenPlayground(practicalLayersExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Common Layer Structure:</h4>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>framework</strong> - Third-party CSS (Bootstrap, etc.)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>components</strong> - Your custom components</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>utilities</strong> - Override classes (highest priority)</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* SYNTAX REFERENCE */}
            <Card>
                <CardHeader>
                    <CardTitle>Layer Syntax Reference</CardTitle>
                    <CardDescription>
                        Common patterns for defining and using layers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                                @layer reset, base, components;
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Declare layer order (earlier = lower priority)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                                @layer base {"{ .button { } }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Define styles in a specific layer</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                                @import url(framework.css) layer(framework);
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Import external CSS into a layer</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                                @layer components.buttons {"{ }"}
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Create nested/namespaced layers</p>
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
                        <li><strong>Declare layers early</strong> - Define layer order at the top of your CSS</li>
                        <li><strong>Use meaningful names</strong> - Choose clear, descriptive layer names</li>
                        <li><strong>Avoid !important</strong> - Layers make !important largely unnecessary</li>
                        <li><strong>Group by concern</strong> - Organize layers by functionality, not file structure</li>
                        <li><strong>Document your layers</strong> - Explain the purpose of each layer</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Great support in modern browsers!</strong> CSS Cascade Layers are supported in Chrome 99+, Edge 99+, Safari 15.4+, and Firefox 97+. Consider using @supports to provide fallbacks for older browsers if needed.
                </AlertDescription>
            </Alert>
        </div>
    );
}

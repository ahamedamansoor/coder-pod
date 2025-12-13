'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Wand2, Sparkles, CheckCircle, Info, Code, Star, Box, Zap, Lightbulb, ArrowRight
} from 'lucide-react';

interface CssGeneratedContentProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssGeneratedContent({ onOpenWebPlayground }: CssGeneratedContentProps) {
    
    // Basic Generated Content Example
    const basicGeneratedExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Generated Content Basics</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #9f1239 0%, #86198f 100%);
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
        color: #ec4899;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #f9a8d4;
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
    
    /* Adding content with ::before */
    .quote {
        position: relative;
        background: #fdf2f8;
        border-left: 4px solid #ec4899;
        padding: 1.5rem;
        padding-left: 4rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        font-style: italic;
        color: #831843;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .quote {
            background: #500724;
            border-color: #f9a8d4;
            color: #fbcfe8;
        }
    }
    
    .quote::before {
        content: '"';
        position: absolute;
        left: 1rem;
        top: 0.5rem;
        font-size: 3rem;
        color: #ec4899;
        line-height: 1;
    }
    
    @media (prefers-color-scheme: dark) {
        .quote::before {
            color: #f9a8d4;
        }
    }
    
    /* Adding content with ::after */
    .badge {
        display: inline-block;
        background: linear-gradient(135deg, #ec4899, #d946ef);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        position: relative;
        margin-bottom: 1rem;
    }
    
    .badge::after {
        content: ' ✓';
        margin-left: 0.5rem;
    }
    
    /* Decorative elements */
    .card {
        background: #f8fafc;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        position: relative;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: #334155;
            border-color: #475569;
        }
    }
    
    .card::before {
        content: '⭐';
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        animation: rotate 3s linear infinite;
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
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
    
    /* External link indicator */
    .link {
        color: #ec4899;
        text-decoration: none;
        border-bottom: 2px solid #f9a8d4;
        transition: all 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
        .link {
            color: #f9a8d4;
            border-color: #ec4899;
        }
    }
    
    .link::after {
        content: ' →';
        font-weight: bold;
    }
    
    .link:hover {
        color: #d946ef;
        border-color: #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
        .link:hover {
            color: #fbcfe8;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>✨ Generated Content</h1>
        <p class="subtitle">Add visual elements with CSS pseudo-elements</p>
        
        <div class="badge">Premium Feature</div>
        
        <div class="quote">
            CSS generated content allows you to add decorative elements without cluttering your HTML.
        </div>
        
        <div class="card">
            <h3>Featured Content</h3>
            <p>This card has a rotating star added with ::before pseudo-element.</p>
        </div>
        
        <p style="color: #64748b; text-align: center;">
            Learn more at our <a href="#" class="link">documentation page</a>
        </p>
    </div>
</body>
</html>`;

    // Advanced Generated Content Example
    const advancedGeneratedExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Generated Content</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #9f1239 0%, #86198f 100%);
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
        color: #ec4899;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #f9a8d4;
        }
    }
    
    /* Tooltip with generated content */
    .tooltip {
        position: relative;
        display: inline-block;
        color: #ec4899;
        font-weight: 600;
        cursor: help;
        border-bottom: 2px dashed #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
        .tooltip {
            color: #f9a8d4;
            border-color: #f9a8d4;
        }
    }
    
    .tooltip::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-8px);
        background: #1f2937;
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: normal;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s, transform 0.3s;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 200px;
        word-wrap: break-word;
        white-space: normal;
    }
    
    @media (prefers-color-scheme: dark) {
        .tooltip::after {
            background: #334155;
        }
    }
    
    .tooltip::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        border: 6px solid transparent;
        border-top-color: #1f2937;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s, transform 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
        .tooltip::before {
            border-top-color: #334155;
        }
    }
    
    .tooltip:hover::after,
    .tooltip:hover::before {
        opacity: 1;
        transform: translateX(-50%) translateY(-4px);
    }
    
    /* Fancy button with glow effect */
    .btn {
        display: inline-block;
        background: linear-gradient(135deg, #ec4899, #d946ef);
        color: white;
        padding: 0.875rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        margin: 1rem 0;
    }
    
    .btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }
    
    .btn:hover::before {
        width: 300px;
        height: 300px;
    }
    
    .btn span {
        position: relative;
        z-index: 1;
    }
    
    /* Required field indicator */
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-label {
        display: block;
        color: #1f2937;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .form-label {
            color: #f1f5f9;
        }
    }
    
    .required::after {
        content: ' *';
        color: #ef4444;
    }
    
    .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
        .form-input {
            background: #334155;
            border-color: #475569;
            color: #e2e8f0;
        }
    }
    
    .form-input:focus {
        outline: none;
        border-color: #ec4899;
    }
    
    /* Status indicators */
    .status {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0.25rem;
    }
    
    .status.success {
        background: #d1fae5;
        color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
        .status.success {
            background: #064e3b;
            color: #6ee7b7;
        }
    }
    
    .status.success::before {
        content: '✓ ';
    }
    
    .status.warning {
        background: #fef3c7;
        color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
        .status.warning {
            background: #78350f;
            color: #fde68a;
        }
    }
    
    .status.warning::before {
        content: '⚠ ';
    }
    
    .status.error {
        background: #fee2e2;
        color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
        .status.error {
            background: #7f1d1d;
            color: #fca5a5;
        }
    }
    
    .status.error::before {
        content: '✗ ';
    }
    
    .demo-section {
        background: #f8fafc;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .demo-section {
            background: #334155;
        }
    }
    
    .demo-section h3 {
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .demo-section h3 {
            color: #f1f5f9;
        }
    }
    
    p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        p {
            color: #cbd5e1;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Advanced Generated Content</h1>
        
        <div class="demo-section">
            <h3>Interactive Tooltips</h3>
            <p>
                Hover over <span class="tooltip" data-tooltip="This is helpful information">this text</span> 
                to see a tooltip created with ::before and ::after pseudo-elements.
            </p>
        </div>
        
        <div class="demo-section">
            <h3>Fancy Button</h3>
            <a href="#" class="btn"><span>Click Me</span></a>
            <p style="margin-top: 1rem; font-size: 0.875rem;">Hover to see the ripple effect created with ::before</p>
        </div>
        
        <div class="demo-section">
            <h3>Form with Required Fields</h3>
            <div class="form-group">
                <label class="form-label required">Email Address</label>
                <input type="email" class="form-input" placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label class="form-label required">Password</label>
                <input type="password" class="form-input" placeholder="Enter password">
            </div>
        </div>
        
        <div class="demo-section">
            <h3>Status Indicators</h3>
            <div>
                <span class="status success">Success</span>
                <span class="status warning">Warning</span>
                <span class="status error">Error</span>
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
                icon={Wand2}
                category="CSS · Advanced CSS"
                title="Generated Content"
                description="Add decorative elements and dynamic content with ::before and ::after pseudo-elements"
                colorTheme="indigo"
            />

            {/* INTRODUCTION */}
            <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
                <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                            <Wand2 className="w-7 h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <div>
                            <CardTitle className="text-2xl">CSS Generated Content</CardTitle>
                            <CardDescription className="text-base">
                                ::before and ::after pseudo-elements
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Alert className="border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-950/30 dark:via-blue-950/30 dark:to-purple-950/30">
                        <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                        <AlertTitle className="text-indigo-900 dark:text-indigo-100 text-lg">Generated Content = Pure CSS Magic! ✨</AlertTitle>
                        <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                            Use <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">::before</code> and <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">::after</code> <strong>pseudo-elements</strong> to insert content before or after an element without touching HTML. 
                            Perfect for <strong>decorative elements</strong>, <strong>icons</strong>, <strong>tooltips</strong>, and <strong>dynamic content</strong>!
                        </AlertDescription>
                    </Alert>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-600" />
                            Why Use Generated Content?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                                    <Star className="w-4 h-4 text-blue-600" />
                                    ✨ Decorative
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Add visual elements without extra HTML
                                </p>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                                    <Box className="w-4 h-4 text-blue-600" />
                                    🎯 Dynamic
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Display attributes or counter values
                                </p>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                                    <Code className="w-4 h-4 text-blue-600" />
                                    🧹 Clean
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Keep markup semantic and minimal
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pseudo-element Visualization */}
                    <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-pink-200/50">
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="text-4xl mb-2 animate-bounce">✨</div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">🎨</div>
                            </div>
                            <h4 className="font-bold text-lg text-pink-700 dark:text-pink-300 mb-2">Pseudo-elements in Action</h4>
                            <p className="text-sm text-pink-600 dark:text-pink-400">Add content without touching HTML</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-700">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        B
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground">::before</span>
                                </div>
                                <div className="text-sm font-semibold mb-1">Before Content</div>
                                <div className="text-xs text-muted-foreground">Inserts before element</div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-pink-200 dark:border-pink-700">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        A
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground">::after</span>
                                </div>
                                <div className="text-sm font-semibold mb-1">After Content</div>
                                <div className="text-xs text-muted-foreground">Inserts after element</div>
                            </div>
                        </div>
                        
                        <div className="mt-4 text-center">
                            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm">
                                <CheckCircle className="w-4 h-4 text-pink-600" />
                                <span className="text-gray-700 dark:text-gray-300">No HTML changes needed!</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Generated Content Example</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* ✨ Add content with ::before */</div>
                            <div className="text-blue-600 dark:text-blue-400">.quote::before</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">content</span>: <span className="text-yellow-600 dark:text-yellow-400">'"'</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">font-size</span>: <span className="text-yellow-600 dark:text-yellow-400">3rem</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* 🎯 Add content with ::after */</div>
                            <div className="text-blue-600 dark:text-blue-400">.badge::after</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">content</span>: <span className="text-yellow-600 dark:text-yellow-400">' ✓'</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC GENERATED CONTENT */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        Basic ::before and ::after
                    </CardTitle>
                    <CardDescription>
                        Add content before or after elements
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={basicGeneratedExample}
                        title="Basic Generated Content Demo"
                        colorTheme="indigo"
                        onOpenPlayground={() => handleOpenPlayground(basicGeneratedExample)}
                    />
                    
                    <div className="mt-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
                        <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5" />
                            ✨ How It Works
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-purple-900 dark:text-purple-100">::before</strong>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Inserts content BEFORE the element's content</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-purple-900 dark:text-purple-100">::after</strong>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Inserts content AFTER the element's content</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <strong className="text-purple-900 dark:text-purple-100">content property</strong>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Required to display anything - even empty ""</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ADVANCED GENERATED CONTENT */}
            <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Wand2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        Advanced Techniques
                    </CardTitle>
                    <CardDescription>
                        Tooltips, effects, and dynamic content with attr()
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={advancedGeneratedExample}
                        title="Advanced Generated Content Examples"
                        colorTheme="indigo"
                        onOpenPlayground={() => handleOpenPlayground(advancedGeneratedExample)}
                    />
                    
                    <div className="mt-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
                        <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            🎯 Advanced Uses
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                                    1
                                </div>
                                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">attr()</h5>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Display HTML attribute values dynamically</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                                    2
                                </div>
                                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Tooltips</h5>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Created with positioning and transitions</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                                    3
                                </div>
                                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Visual FX</h5>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Ripples, glows, and animations</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CONTENT PROPERTY VALUES */}
            <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                        Content Property Reference
                    </CardTitle>
                    <CardDescription>
                        All values you can use with the content property
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-green-700 dark:text-green-300 font-bold">
                                    content: "text";
                                </code>
                                <span className="text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">String</span>
                            </div>
                            <p className="text-sm text-green-700 dark:text-green-300">Insert plain text</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-blue-700 dark:text-blue-300 font-bold">
                                    content: attr(data-label);
                                </code>
                                <span className="text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Dynamic</span>
                            </div>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Display HTML attribute value</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-purple-700 dark:text-purple-300 font-bold">
                                    content: counter(name);
                                </code>
                                <span className="text-xs bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Counter</span>
                            </div>
                            <p className="text-sm text-purple-700 dark:text-purple-300">Display counter value</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-amber-700 dark:text-amber-300 font-bold">
                                    content: url(icon.svg);
                                </code>
                                <span className="text-xs bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">Image</span>
                            </div>
                            <p className="text-sm text-amber-700 dark:text-amber-300">Insert image or SVG</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-950/20 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-gray-700 dark:text-gray-300 font-bold">
                                    content: "";
                                </code>
                                <span className="text-xs bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">Empty</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Empty content (for decorative elements)</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
                            <div className="flex items-center justify-between mb-2">
                                <code className="text-sm font-mono text-pink-700 dark:text-pink-300 font-bold">
                                    content: "★" " " attr(rating);
                                </code>
                                <span className="text-xs bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded">Combined</span>
                            </div>
                            <p className="text-sm text-pink-700 dark:text-pink-300">Combine multiple values with spaces</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember 💡</AlertTitle>
                <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
                    <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span><strong>Keep it decorative</strong> - Don't add essential content</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span><strong>Accessibility matters</strong> - Screen readers may not read generated content</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span><strong>Perfect for icons</strong> - Visual indicators without HTML</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span><strong>content: ""</strong> required even for empty pseudo-elements</span>
                    </div>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Universal browser support!</strong> The ::before and ::after pseudo-elements have been supported in all major browsers for many years, including IE8+ (with single colon syntax :before/:after). They're a reliable feature for production use.
                </AlertDescription>
            </Alert>
        </div>
    );
}

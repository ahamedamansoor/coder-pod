'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
    Hash, Sparkles, CheckCircle, Info, Code, ListOrdered, FileText
} from 'lucide-react';

interface CssCountersProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssCounters({ onOpenWebPlayground }: CssCountersProps) {
    
    // Basic Counters Example
    const basicCountersExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Counters Basics</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #c2410c 0%, #9a3412 100%);
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
        color: #f97316;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #fb923c;
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
    
    /* Initialize counter */
    .tutorial {
        counter-reset: step;
        background: #f8fafc;
        border-radius: 12px;
        padding: 2rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .tutorial {
            background: #334155;
        }
    }
    
    /* Increment and display counter */
    .step {
        counter-increment: step;
        position: relative;
        padding-left: 4rem;
        margin-bottom: 1.5rem;
        padding: 1.5rem;
        padding-left: 4.5rem;
        background: white;
        border-radius: 8px;
        border-left: 4px solid #f97316;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .step {
            background: #1e293b;
        }
    }
    
    .step::before {
        content: counter(step);
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 2.5rem;
        height: 2.5rem;
        background: linear-gradient(135deg, #f97316, #ea580c);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.25rem;
        box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
    }
    
    .step h3 {
        color: #1f2937;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .step h3 {
            color: #f1f5f9;
        }
    }
    
    .step p {
        color: #64748b;
        line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
        .step p {
            color: #cbd5e1;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔢 CSS Counters</h1>
        <p class="subtitle">Automatic numbering without JavaScript</p>
        
        <div class="tutorial">
            <div class="step">
                <h3>Create Your Account</h3>
                <p>Start by filling out the registration form with your details.</p>
            </div>
            
            <div class="step">
                <h3>Verify Your Email</h3>
                <p>Check your inbox for the verification link and click to confirm.</p>
            </div>
            
            <div class="step">
                <h3>Complete Your Profile</h3>
                <p>Add additional information to personalize your experience.</p>
            </div>
            
            <div class="step">
                <h3>Start Using the Platform</h3>
                <p>You're all set! Begin exploring all the features available.</p>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Nested Counters Example
    const nestedCountersExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested CSS Counters</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
        padding: 40px 20px;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #c2410c 0%, #9a3412 100%);
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
        color: #f97316;
        margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
        h1 {
            color: #fb923c;
        }
    }
    
    /* Multiple counters for nested lists */
    .document {
        counter-reset: chapter;
        background: #f8fafc;
        border-radius: 12px;
        padding: 2rem;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .document {
            background: #334155;
        }
    }
    
    .chapter {
        counter-reset: section;
        counter-increment: chapter;
        margin-bottom: 2rem;
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        border-left: 4px solid #f97316;
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .chapter {
            background: #1e293b;
        }
    }
    
    .chapter h2 {
        color: #f97316;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .chapter h2 {
            color: #fb923c;
        }
    }
    
    .chapter h2::before {
        content: "Chapter " counter(chapter) ": ";
        font-weight: bold;
    }
    
    .section {
        counter-increment: section;
        margin-bottom: 1rem;
        padding-left: 2rem;
        position: relative;
    }
    
    .section::before {
        content: counter(chapter) "." counter(section) " ";
        position: absolute;
        left: 0;
        color: #f97316;
        font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
        .section::before {
            color: #fb923c;
        }
    }
    
    .section h3 {
        color: #1f2937;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: inline;
    }
    
    @media (prefers-color-scheme: dark) {
        .section h3 {
            color: #f1f5f9;
        }
    }
    
    .section p {
        color: #64748b;
        line-height: 1.6;
        margin-top: 0.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .section p {
            color: #cbd5e1;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 Nested Counters</h1>
        
        <div class="document">
            <div class="chapter">
                <h2>Getting Started</h2>
                
                <div class="section">
                    <h3>Installation</h3>
                    <p>Learn how to install and set up the application.</p>
                </div>
                
                <div class="section">
                    <h3>Configuration</h3>
                    <p>Configure your environment for optimal performance.</p>
                </div>
                
                <div class="section">
                    <h3>First Steps</h3>
                    <p>Take your first steps with the platform.</p>
                </div>
            </div>
            
            <div class="chapter">
                <h2>Core Concepts</h2>
                
                <div class="section">
                    <h3>Understanding Components</h3>
                    <p>Learn about the building blocks of the system.</p>
                </div>
                
                <div class="section">
                    <h3>Data Flow</h3>
                    <p>Understand how data moves through the application.</p>
                </div>
            </div>
            
            <div class="chapter">
                <h2>Advanced Topics</h2>
                
                <div class="section">
                    <h3>Performance Optimization</h3>
                    <p>Tips and tricks for maximum performance.</p>
                </div>
                
                <div class="section">
                    <h3>Security Best Practices</h3>
                    <p>Keep your application secure and protected.</p>
                </div>
                
                <div class="section">
                    <h3>Deployment Strategies</h3>
                    <p>Deploy your application to production.</p>
                </div>
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
                icon={Hash}
                category="CSS · Intermediate"
                title="CSS Counters"
                description="Create automatic numbering systems with CSS counters - perfect for steps, chapters, and ordered content"
                colorTheme="orange"
            />

            {/* INTRODUCTION */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        What are CSS Counters?
                    </CardTitle>
                    <CardDescription>
                        Automatic numbering without JavaScript
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">CSS Counters</strong> are variables maintained by CSS that can be incremented and displayed automatically. They're perfect for creating <strong className="text-foreground">numbered lists</strong>, <strong className="text-foreground">chapters</strong>, <strong className="text-foreground">steps</strong>, or any content that needs automatic sequential numbering.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <ListOrdered className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
                            <h4 className="font-semibold mb-2">Automatic</h4>
                            <p className="text-sm text-muted-foreground">
                                Numbers update automatically as content changes
                            </p>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
                            <h4 className="font-semibold mb-2">Flexible</h4>
                            <p className="text-sm text-muted-foreground">
                                Support for nested numbering and custom formats
                            </p>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <Code className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
                            <h4 className="font-semibold mb-2">No JavaScript</h4>
                            <p className="text-sm text-muted-foreground">
                                Pure CSS solution, no scripting required
                            </p>
                        </div>
                    </div>

                    {/* Counter Visualization */}
                    <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-yellow-900/30 p-6 rounded-xl border border-orange-200/50">
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="text-4xl mb-2 animate-bounce">🔢</div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                            </div>
                            <h4 className="font-bold text-lg text-orange-700 dark:text-orange-300 mb-2">Automatic Numbering</h4>
                            <p className="text-sm text-orange-600 dark:text-orange-400">CSS does the counting for you!</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700 transform hover:scale-105 transition-transform">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
                                    1
                                </div>
                                <div className="text-center text-sm font-semibold">counter-reset</div>
                                <div className="text-xs text-muted-foreground text-center mt-1">Initialize counter</div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700 transform hover:scale-105 transition-transform">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
                                    2
                                </div>
                                <div className="text-center text-sm font-semibold">counter-increment</div>
                                <div className="text-xs text-muted-foreground text-center mt-1">Increase counter</div>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700 transform hover:scale-105 transition-transform">
                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
                                    3
                                </div>
                                <div className="text-center text-sm font-semibold">counter()</div>
                                <div className="text-xs text-muted-foreground text-center mt-1">Display value</div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Counter Example</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">/* 🔢 Initialize */</div>
                            <div className="text-blue-600 dark:text-blue-400">.container</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">counter-reset</span>: <span className="text-yellow-600 dark:text-yellow-400">step</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                            <br />
                            <div className="text-gray-500">/* ➕ Increment & Display */</div>
                            <div className="text-blue-600 dark:text-blue-400">.item::before</div>
                            <div className="text-gray-900 dark:text-white"> {'{'}</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">counter-increment</span>: <span className="text-yellow-600 dark:text-yellow-400">step</span>;</div>
                            <div className="text-gray-900 dark:text-white">   <span className="text-green-600 dark:text-green-400">content</span>: <span className="text-yellow-600 dark:text-yellow-400">counter(step)</span>;</div>
                            <div className="text-gray-900 dark:text-white"> {'}'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BASIC COUNTERS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <ListOrdered className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        1. Basic Counter Usage
                    </CardTitle>
                    <CardDescription>
                        Create sequential numbering with counter-reset and counter-increment
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={basicCountersExample}
                        title="Basic CSS Counters Demo"
                        colorTheme="orange"
                        onOpenPlayground={() => handleOpenPlayground(basicCountersExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">🔢 How Counters Work:</h4>
                        <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>counter-reset: name</strong> initializes a counter</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>counter-increment: name</strong> increases the counter</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>counter(name)</strong> displays the current value</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* NESTED COUNTERS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        2. Nested Counters
                    </CardTitle>
                    <CardDescription>
                        Create hierarchical numbering with multiple counters
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        html={nestedCountersExample}
                        title="Nested Counters Demo"
                        colorTheme="orange"
                        onOpenPlayground={() => handleOpenPlayground(nestedCountersExample)}
                    />
                    
                    <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">📚 Nested Counter Benefits:</h4>
                        <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Multiple levels</strong> of numbering (1.1, 1.2, 2.1, etc.)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Perfect for documents</strong> with chapters and sections</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span><strong>Automatic reset</strong> of child counters when parent increments</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* COUNTER PROPERTIES */}
            <Card>
                <CardHeader>
                    <CardTitle>Counter Properties Reference</CardTitle>
                    <CardDescription>
                        Essential CSS counter properties and functions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                                counter-reset: name 0;
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Initialize counter (optional start value)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                                counter-increment: name 1;
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Increment counter (optional step value)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                                content: counter(name);
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Display counter value</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                                content: counter(name, upper-roman);
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Format counter (decimal, upper-roman, lower-alpha, etc.)</p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted border">
                            <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                                content: counters(name, ".");
                            </code>
                            <p className="text-sm text-muted-foreground mt-1">Display nested counters with separator</p>
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
                        <li><strong>Name counters clearly</strong> - Use descriptive names like "chapter" or "step"</li>
                        <li><strong>Reset at parent level</strong> - Reset counters on container elements</li>
                        <li><strong>Use with ::before</strong> - Display counters in pseudo-elements</li>
                        <li><strong>Consider accessibility</strong> - Screen readers may not announce counter values</li>
                        <li><strong>Format appropriately</strong> - Choose numbering styles that fit your context</li>
                    </ul>
                </AlertDescription>
            </Alert>

            {/* BROWSER SUPPORT */}
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Browser Support</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Excellent browser support!</strong> CSS Counters have been supported in all major browsers for many years, including IE8+. They're a reliable feature you can use in production today.
                </AlertDescription>
            </Alert>
        </div>
    );
}

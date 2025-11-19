
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Share2, Lightbulb, AlertTriangle, Puzzle, Copy } from 'lucide-react';
import React from 'react';

export default function SassExtendInheritance({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const extendHtml = `<div class="alert">A basic alert.</div>
<div class="alert alert-success">A success message.</div>
<div class="alert alert-error">An error message.</div>`;

    const extendScss = `// Define a base style using a class selector
.alert {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

// Extend the .alert styles
.alert-success {
  @extend .alert;
  border-color: green;
  background-color: #e8f5e9;
}

.alert-error {
  @extend .alert;
  border-color: red;
  background-color: #ffebee;
}`;

    const extendCss = `/* The selectors are grouped together */
.alert, .alert-success, .alert-error {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.alert-success {
  border-color: green;
  background-color: #e8f5e9;
}

.alert-error {
  border-color: red;
  background-color: #ffebee;
}`;

    const placeholderScss = `// Define a placeholder selector
// This will NOT appear in the CSS unless it's extended
%message-base {
  font-family: sans-serif;
  border: 1px solid blue;
  padding: 10px;
}

.success {
  @extend %message-base;
  background-color: lightgreen;
}

.warning {
  @extend %message-base;
  background-color: lightyellow;
}`;

    const placeholderCss = `/* %message-base does not appear on its own */
.success, .warning {
  font-family: sans-serif;
  border: 1px solid blue;
  padding: 10px;
}

.success {
  background-color: lightgreen;
}

.warning {
  background-color: lightyellow;
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Share2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass @extend & Inheritance</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Sharing styles between selectors to keep your CSS DRY (Don't Repeat Yourself).</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Team Uniform" Analogy</CardTitle>
                    <CardDescription>
                        Imagine a sports team where everyone wears the same basic uniform (a base style). Then, different players (selectors) get special additions, like the goalie getting different gloves. `@extend` lets you say, "This player wears the same uniform as that player," without having to describe the whole uniform all over again.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>How `@extend` Works</CardTitle>
                    <CardDescription>
                        `@extend` tells Sass that one selector should inherit the styles of another. The key difference from `@mixin` is how it compiles the CSS: it groups the selectors that share the same styles.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (What you write)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{extendScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS (What the browser gets)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{extendCss}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onOpenWebPlayground(extendHtml, extendScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Placeholder Selectors: `%`</CardTitle>
                    <CardDescription>A placeholder selector is a special type of selector that starts with `%`. It's designed to be extended but never compiled into CSS on its own. This is the **recommended way** to create base styles for `@extend`.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Using a placeholder prevents you from having to create a base class like `.alert` in your HTML if it's never used by itself.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (with `%placeholder`)</h3>
                            <div className="bg-background rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{placeholderScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS</h3>
                            <div className="bg-background rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{placeholderCss}</pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>`@extend` vs. `@mixin`: A Critical Difference</CardTitle>
                    <CardDescription>This is a common point of confusion for developers.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Puzzle className="w-5 h-5 text-primary"/>`@mixin`</h3>
                             <p className="text-sm text-muted-foreground mb-2">**What it does:** Copies the styles to each selector that includes it.</p>
                            <p className="text-sm font-semibold">**When to use:** When you need to pass arguments and create dynamic, customizable styles. Perfect for complex properties like gradients or when you need variations.</p>
                        </div>
                        <div className="bg-card border p-4 rounded-lg">
                             <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Copy className="w-5 h-5 text-primary"/>`@extend`</h3>
                            <p className="text-sm text-muted-foreground mb-2">**What it does:** Groups selectors together to share one block of CSS rules.</p>
                             <p className="text-sm font-semibold">**When to use:** When a set of styles is completely static and will be reused exactly as-is across multiple selectors. Ideal for sharing foundational styles.</p>
                        </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground mt-6">**Rule of thumb:** If your "recipe" needs different "ingredients" (arguments), use a `@mixin`. If you're just saying "this should look exactly like that", use `@extend` with a placeholder selector.</p>
                 </CardContent>
            </Card>
        </div>
    );
}

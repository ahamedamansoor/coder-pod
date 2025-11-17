
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Variable, Lightbulb, Palette, File, Hash, Text } from 'lucide-react';
import React from 'react';

export default function SassVariables({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const scssCode = `$primary-color: #3b82f6;
$font-stack: Helvetica, sans-serif;
$base-padding: 1rem;

body {
  font-family: $font-stack;
}

.container {
  padding: $base-padding;
  background: $primary-color;
  color: white;
}
`;

    const globalScopeCode = `// _variables.scss
$primary-color: #3b82f6;
$base-font-size: 16px;

// main.scss
@import 'variables';

body {
  font-size: $base-font-size;
  color: $primary-color;
}
`;

    const localScopeCode = `.card {
  $card-padding: 1.5rem; // Local variable

  padding: $card-padding;
  
  h2 {
    // This works because h2 is inside .card
    padding-bottom: $card-padding;
  }
}

.footer {
  // This would cause an error! 
  // $card-padding is not available here.
  // padding: $card-padding;
}
`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Variable className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass/SCSS Variables</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing reusable values to keep your stylesheets DRY.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Magic Paint Bucket" Analogy</CardTitle>
                    <CardDescription>
                        Imagine you have a magic paint bucket (a variable) labeled "MainBrandColor". You use this bucket to paint your website's buttons, links, and headers. If you ever want to change the brand color, you just change the color in the one magic bucket, and every element painted with it updates automatically.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Syntax: Defining and Using Variables</CardTitle>
                    <CardDescription>
                        Variables in Sass always start with a dollar sign (`$`).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{scssCode}</pre>
                    </div>
                    <Button onClick={() => onOpenWebPlayground('<div class="container">Hello Variables!</div>', scssCode, '')}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Variable Scope</CardTitle>
                    <CardDescription>
                        Scope determines where your variables are available.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg">Global Scope</h3>
                        <p className="text-sm text-muted-foreground mb-2">Variables defined outside of any selector are global. They can be used anywhere in your stylesheet.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{globalScopeCode}</pre>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg">Local Scope</h3>
                        <p className="text-sm text-muted-foreground mb-2">Variables defined inside a selector (`&#123;...&#125;`) are local. They can only be used within that selector.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{localScopeCode}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Data Types</CardTitle>
                    <CardDescription>Sass variables can store different types of data, not just colors.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-background p-3 rounded-lg border">
                        <h4 className="font-bold flex items-center gap-2"><Palette className="w-4 h-4"/>Colors</h4>
                        <code className="text-xs font-mono">$my-color: #ff0000;</code>
                    </div>
                     <div className="bg-background p-3 rounded-lg border">
                        <h4 className="font-bold flex items-center gap-2"><Hash className="w-4 h-4"/>Numbers</h4>
                        <code className="text-xs font-mono">$base-font-size: 16px;</code>
                    </div>
                     <div className="bg-background p-3 rounded-lg border">
                        <h4 className="font-bold flex items-center gap-2"><Text className="w-4 h-4"/>Strings</h4>
                        <code className="text-xs font-mono">$font-family: "Helvetica";</code>
                    </div>
                     <div className="bg-background p-3 rounded-lg border">
                        <h4 className="font-bold flex items-center gap-2"><File className="w-4 h-4"/>Lists</h4>
                        <code className="text-xs font-mono">$paddings: 5px 10px;</code>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

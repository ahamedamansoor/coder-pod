'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Variable, Play, PaintBucket, Lightbulb, Scope, Palette, FileText, Hash } from 'lucide-react';
import React from 'react';

interface SassVariablesProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function SassVariables({ onOpenWebPlayground }: SassVariablesProps) {

    const playgroundCode = {
        html: `<h1>Sass Variables</h1>
<div class="card">
  <p>This card uses global variables for its styles.</p>
  <button class="primary-button">Primary</button>
  <button class="secondary-button">Secondary</button>
</div>`,
        css: `// --- Global Variables ---
$primary-color: #3b82f6; // Blue
$secondary-color: #10b981; // Green
$font-family: sans-serif;
$base-padding: 1rem;
$border-radius: 8px;

body {
  font-family: $font-family;
  padding: $base-padding;
}

.card {
  border: 1px solid #ddd;
  border-radius: $border-radius;
  padding: $base-padding * 1.5;

  p {
    // --- Local Scope Variable ---
    // This variable only exists inside the 'p' rule
    $text-color: #333;
    color: $text-color;
  }
}

button {
  padding: $base-padding / 2 $base-padding;
  border-radius: $border-radius;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;
}

.primary-button {
  background-color: $primary-color;
}

.secondary-button {
  background-color: $secondary-color;
}
`,
        js: ''
    };

    const dataTypes = [
        { icon: Palette, type: 'Colors', example: '$primary-color: #3b82f6;' },
        { icon: Hash, type: 'Numbers', example: '$font-size: 16px; \n$base-padding: 1rem;' },
        { icon: FileText, type: 'Strings', example: '$font-family: "Helvetica", sans-serif;' },
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Variable className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass/SCSS Variables</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Storing reusable values like colors and font sizes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><PaintBucket className="w-6 h-6 text-primary" />The &quot;Magic Paint Bucket&quot; Analogy</CardTitle>
                    <CardDescription>
                        Imagine you have a magic paint bucket. You label it &quot;Main Brand Color&quot; and fill it with your favorite blue. Now, whenever you need to paint something blue, you just use the magic bucket instead of mixing the color from scratch every time. If you decide to change your brand color to red, you only have to change the color in that one magic bucket, and everything painted with it instantly updates!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>That&apos;s exactly what Sass variables do for your CSS. They let you store a value once and reuse it everywhere.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Syntax: Declaring and Using Variables</CardTitle>
                    <CardDescription>Variables in Sass always start with a dollar sign (`$`).</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`// 1. Declare the variable (like filling the paint bucket)
$primary-color: #3b82f6;

// 2. Use the variable (like using the paint bucket)
.button {
  background-color: $primary-color;
}`}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Variable Data Types</CardTitle>
                    <CardDescription>Variables can store different kinds of values.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    {dataTypes.map(dt => (
                        <div key={dt.type} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><dt.icon className="w-5 h-5 text-primary"/>{dt.type}</h3>
                            <div className="bg-background p-2 rounded-md">
                                <pre className="font-mono text-sm whitespace-pre-wrap">{dt.example}</pre>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Scope className="w-6 h-6 text-primary"/>Variable Scope</CardTitle>
                    <CardDescription>Where you define a variable determines where it can be used.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                     <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold text-lg mb-2">Global Scope</h3>
                        <p className="text-sm text-muted-foreground">A variable defined at the top level of your stylesheet (not inside any rule) is available everywhere.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold text-lg mb-2">Local Scope</h3>
                        <p className="text-sm text-muted-foreground">A variable defined inside a CSS rule (e.g., inside `.card { ... }`) is only available within that rule and its nested children.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground. Try changing the `$primary-color` variable at the top and see how both buttons update instantly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

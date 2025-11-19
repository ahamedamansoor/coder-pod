'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ToyBrick, File, Code, ArrowRight, BookCopy, Share2, AlertTriangle, Lightbulb } from 'lucide-react';
import React from 'react';

const defineCode = `function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`;

const exportCode = `// Button.js
export default function MyButton() {
  return (
    <button>My Button</button>
  );
}`;

const importCode = `// App.js
import MyButton from './Button.js';

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;

export default function YourFirstComponent({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <ToyBrick className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Your First Component</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable building blocks for your user interface.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Custom LEGO® Brick" Analogy</CardTitle>
                    <CardDescription>
                        React components are like creating your own custom LEGO® bricks. You design a brick once (e.g., a special "profile picture" brick with a specific shape and color), and then you can reuse that same brick anywhere you need a profile picture, without having to rebuild it from scratch every time.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-primary"/>Defining a Component</CardTitle>
                    <CardDescription>
                        A React component is a JavaScript function that returns some markup (written in JSX).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{defineCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(defineCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary">The 3 Golden Rules of Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">1.</p>
                        <div>
                            <h3 className="font-semibold">Component names must start with a capital letter.</h3>
                            <p className="text-sm text-muted-foreground">`&lt;MyButton /&gt;` is a component. `&lt;myButton /&gt;` is treated as a regular HTML tag.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">2.</p>
                        <div>
                            <h3 className="font-semibold">Components must return a single JSX element.</h3>
                            <p className="text-sm text-muted-foreground">If you need to return multiple elements, wrap them in a single parent `&lt;div&gt;` or use a Fragment (`&lt;&gt;...&lt;/&gt;`).</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">3.</p>
                        <div>
                            <h3 className="font-semibold">JSX tags must be closed.</h3>
                            <p className="text-sm text-muted-foreground">Regular HTML tags like `&lt;img&gt;` must be written as self-closing tags: `&lt;img /&gt;`.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Share2 className="w-6 h-6 text-primary"/>Exporting and Importing Components</CardTitle>
                    <CardDescription>
                        The magic of components is their reusability. You define a component in one file and then use it in another.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><File className="w-5 h-5"/>1. Export the component</h3>
                            <p className="text-sm text-muted-foreground mb-2">Use `export default` to mark the main component in a file.</p>
                            <div className="bg-background rounded-md p-2">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{exportCode}</pre>
                            </div>
                        </div>
                         <div className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><BookCopy className="w-5 h-5"/>2. Import and use the component</h3>
                            <p className="text-sm text-muted-foreground mb-2">Use `import` in another file to use your new component like an HTML tag.</p>
                             <div className="bg-background rounded-md p-2">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{importCode}</pre>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-center justify-center text-center text-muted-foreground text-sm gap-4 p-4 rounded-lg border bg-muted/50">
                        <p className="font-bold">Button.js</p>
                        <ArrowRight className="w-6 h-6"/>
                        <p className="font-bold">App.js</p>
                        <ArrowRight className="w-6 h-6"/>
                        <p className="font-bold">Browser Renders</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

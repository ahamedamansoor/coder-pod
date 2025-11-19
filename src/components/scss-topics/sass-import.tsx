
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Import, Book, File, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import React from 'react';

export default function SassImport() {

    const partialExample = `// _variables.scss
$primary-color: #8a2be2;
$base-font-size: 16px;

// _buttons.scss
@import 'variables';

.button {
  background-color: $primary-color;
  font-size: $base-font-size;
  padding: 10px 15px;
}`;

    const mainExample = `// main.scss
@import 'buttons';

body {
  font-family: sans-serif;
}
`;
    
    const finalCss = `/* main.css - Compiled Output */
.button {
  background-color: #8a2be2;
  font-size: 16px;
  padding: 10px 15px;
}

body {
  font-family: sans-serif;
}
`;


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Import className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass @import</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Organizing your stylesheets by splitting them into smaller, reusable files.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Building a Book" Analogy</CardTitle>
                    <CardDescription>
                        You wouldn't write an entire book in a single, massive text file. You'd write separate chapters and then assemble them. Sass's `@import` works the same way: it lets you take smaller SCSS files (chapters) and combine them into one larger file (the book) that gets sent to the browser.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Partials: The Building Blocks</CardTitle>
                    <CardDescription>
                        A partial is a Sass file named with a leading underscore, like `_variables.scss` or `_buttons.scss`. The underscore tells Sass that this file is only a part of a larger stylesheet and should not be compiled into a CSS file on its own.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">When you import a partial, you do so **without** the underscore or file extension.</p>
                    <div className="bg-muted rounded-md p-4 mt-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">@import 'variables';</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>How it Works: A Full Example</CardTitle>
                    <CardDescription>
                        Let's see how we can use `@import` to organize variables and component styles into separate files.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-6">
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            <div className="bg-muted p-4 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2 text-primary">1. Define Partials</h3>
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{partialExample}</pre>
                            </div>
                            <div className="bg-muted p-4 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2 text-primary">2. Import into Main File</h3>
                                 <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{mainExample}</pre>
                            </div>
                        </div>
                        <ArrowRight className="w-8 h-8 text-muted-foreground -rotate-90 md:rotate-0" />
                         <div className="w-full bg-muted p-4 rounded-lg border">
                            <h3 className="font-semibold text-lg mb-2 text-primary">3. Get a Single CSS File</h3>
                            <p className="text-sm text-muted-foreground mb-2">The Sass compiler processes all the imports and generates a single, clean CSS file that contains all the styles.</p>
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{finalCss}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>Heads Up: CSS `@import` vs. Sass `@import`</CardTitle>
                    <CardDescription>
                       It's important not to confuse Sass's `@import` with the native CSS `@import` rule.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>**Sass `@import`** happens at **compile time**. It grabs the content of your partials and combines them into one CSS file. This is very efficient as the browser only has to make one request to get all the styles.</li>
                        <li>**CSS `@import`** happens at **run time**. It tells the browser to make another HTTP request to fetch an additional CSS file. This can slow down your page rendering because the browser has to wait for multiple files to download.</li>
                    </ul>
                     <p className="text-xs text-muted-foreground mt-4">For this reason, you should almost always use Sass's `@import` and avoid the native CSS version.</p>
                </CardContent>
            </Card>
        </div>
    );
}

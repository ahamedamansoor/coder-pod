
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, FunctionSquare, Lightbulb, AlertTriangle, Blocks } from 'lucide-react';
import React from 'react';

export default function SassFunctions({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const builtInExampleHtml = `<div class="element"></div>`;
    const builtInExampleScss = `$color: #8a2be2; // BlueViolet

.element {
  // darken() is a built-in color function
  background-color: darken($color, 15%);
  width: round(100.6px); // round() is a built-in numeric function
  padding: 10px;
}`;
    const builtInExampleCss = `.element {
  background-color: #5d12a3;
  width: 101px;
  padding: 10px;
}`;
    
    const customFunctionHtml = `<div class="box"></div>`;
    const customFunctionScss = `// A custom function to calculate rem units from pixels
@function px-to-rem($pixels, $base-font-size: 16px) {
  @return ($pixels / $base-font-size) * 1rem;
}

.box {
  // Use the custom function
  width: px-to-rem(200px);
  padding: px-to-rem(16px);
  background-color: lightblue;
}`;
    const customFunctionCss = `.box {
  width: 12.5rem;
  padding: 1rem;
  background-color: lightblue;
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FunctionSquare className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass Functions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Using built-in functions and writing your own to perform complex operations.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Functions?</CardTitle>
                    <CardDescription>
                        Functions are similar to mixins, but they are meant to compute and **`@return` a value**, not to directly output styles. They are perfect for encapsulating common calculations and logic.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Using Built-in Functions</CardTitle>
                    <CardDescription>
                        Sass comes with a rich library of built-in functions for manipulating colors, numbers, strings, and more.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (What you write)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{builtInExampleScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS (What the browser gets)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{builtInExampleCss}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onOpenWebPlayground(builtInExampleHtml, builtInExampleScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Writing Your Own Functions</CardTitle>
                    <CardDescription>You can define your own functions using the `@function` rule and return a value using `@return`. This is great for creating reusable calculations.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (with custom function)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{customFunctionScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{customFunctionCss}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onOpenWebPlayground(customFunctionHtml, customFunctionScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try a custom function
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>`@function` vs. `@mixin`: A Critical Difference</CardTitle>
                    <CardDescription>They seem similar, but have very different purposes.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>**`@function`**: Computes and **`@return`s a single value**. It should not have side effects like generating CSS rules. Use it for calculations (e.g., converting units, calculating color shades).</li>
                        <li>**`@mixin`**: **Generates CSS rules**. It's for creating reusable blocks of styles. It does not return a value.</li>
                    </ul>
                     <p className="text-sm font-semibold text-center mt-4">If you need to produce CSS styles, use a mixin. If you need to compute a value to be used in your styles, use a function.</p>
                 </CardContent>
            </Card>
        </div>
    );
}

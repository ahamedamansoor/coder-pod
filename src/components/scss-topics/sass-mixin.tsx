'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Puzzle, BookText, Lightbulb, AlertTriangle, Blocks } from 'lucide-react';
import React from 'react';

export default function SassMixin({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const basicMixinHtml = `<button class="error-button">Error</button>
<button class="success-button">Success</button>`;

    const basicMixinScss = `// Define a mixin for a basic theme button
@mixin theme-button($theme-color) {
  background-color: $theme-color;
  color: white;
  border: 1px solid darken($theme-color, 10%);
  padding: 10px 20px;
  border-radius: 5px;
}

// Use the mixin
.error-button {
  @include theme-button(red);
}

.success-button {
  @include theme-button(green);
}`;
    
    const basicMixinCss = `.error-button {
  background-color: red;
  color: white;
  border: 1px solid #cc0000;
  padding: 10px 20px;
  border-radius: 5px;
}

.success-button {
  background-color: green;
  color: white;
  border: 1px solid #006400;
  padding: 10px 20px;
  border-radius: 5px;
}`;

    const contentMixinHtml = `<div class="card">
  <h2>Title</h2>
  <p>Some content here.</p>
</div>`;

    const contentMixinScss = `// Mixin for creating a media query
@mixin for-desktop {
  @media (min-width: 1024px) {
    // The @content directive outputs the styles passed into the mixin
    @content;
  }
}

.card {
  width: 100%;

  // Use the mixin and pass a block of styles
  @include for-desktop {
    width: 50%;
    margin: 0 auto;
  }
}`;

    const contentMixinCss = `.card {
  width: 100%;
}
@media (min-width: 1024px) {
  .card {
    width: 50%;
    margin: 0 auto;
  }
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Puzzle className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass @mixin</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable groups of CSS declarations, like functions for your styles.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Recipe" Analogy</CardTitle>
                    <CardDescription>
                        A `@mixin` is like a recipe for a style. You can define a recipe once (e.g., how to make a "fancy button"), and then whenever you need a fancy button, you just say "include the fancy button recipe here." You can even pass in different "ingredients" (arguments) to customize the result.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Defining and Including a Mixin</CardTitle>
                    <CardDescription>
                        You define a mixin with `@mixin` and then use it with `@include`.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (What you write)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{basicMixinScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS (What the browser gets)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{basicMixinCss}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onOpenWebPlayground(basicMixinHtml, basicMixinScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><BookText className="w-5 h-5"/>Arguments & Default Values</CardTitle>
                    <CardDescription>Mixins can accept arguments, just like functions in a programming language. You can also provide default values, making some arguments optional.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-background rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`@mixin fancy-box($padding: 1rem, $border-color: #ccc) {
  padding: $padding;
  border: 1px solid $border-color;
  border-radius: 5px;
}

.box-a {
  @include fancy-box(); // Uses default values
}

.box-b {
  @include fancy-box(2rem, blue); // Provides new values
}
`}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Blocks className="w-5 h-5 text-primary"/>Passing Content Blocks with `@content`</CardTitle>
                    <CardDescription>
                        One of the most advanced features of mixins is the ability to pass a whole block of styles into the mixin, which is then placed where the `@content` directive appears. This is extremely useful for creating responsive media query mixins.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                     <div>
                        <h3 className="font-semibold text-primary mb-2">SCSS</h3>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{contentMixinScss}</pre>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-foreground mb-2">Compiled CSS</h3>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{contentMixinCss}</pre>
                        </div>
                    </div>
                     <div className="md:col-span-2 mt-4">
                        <Button onClick={() => onOpenWebPlayground(contentMixinHtml, contentMixinScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try `@content` in the Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>`@mixin` vs. `@extend`</CardTitle>
                    <CardDescription>
                       Don't confuse `@mixin` with `@extend`. They are similar but have a key difference.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>**`@mixin`**: Injects the styles into your selector. If you use a mixin 10 times, the same block of CSS properties will be duplicated in your final CSS file 10 times. Use it when you need to pass arguments and customize the output.</li>
                        <li>**`@extend`**: Creates a comma-separated list of selectors. The styles are defined once, and all selectors that extend it are grouped together. This results in smaller CSS files but can create complex, hard-to-read selectors if overused. Use it when the styles are static and don't need customization.</li>
                    </ul>
                     <p className="text-xs text-muted-foreground mt-4">As a general rule, prefer `@mixin` for its flexibility and safety. Use `@extend` only for simple, non-customizable style sharing.</p>
                 </CardContent>
            </Card>
        </div>
    );
}

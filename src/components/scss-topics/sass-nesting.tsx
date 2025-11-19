
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Layers, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import React from 'react';

export default function SassNesting({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const basicNestingHtml = `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>`;
    
    const basicNestingScss = `nav {
  background-color: #f0f0f0;
  padding: 1rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;

      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
}`;
    
    const basicNestingCss = `nav {
  background-color: #f0f0f0;
  padding: 1rem;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
  margin-right: 1rem;
}
nav ul li a {
  text-decoration: none;
  color: #333;
}`;

    const parentSelectorScss = `.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  
  // The '&' refers to the parent selector, which is '.button'
  &:hover {
    background-color: darkblue;
  }

  &.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}`;

    const parentSelectorCss = `.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
}
.button:hover {
  background-color: darkblue;
}
.button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}`;
    
    const bemExampleScss = `.card {
  border: 1px solid #ccc;

  // '&' refers to '.card'
  &__header {
    font-weight: bold;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
  
  &__content {
    padding: 1rem;
  }
  
  &--dark {
    background-color: #333;
    color: white;
  }
}`;

    const bemExampleCss = `.card {
  border: 1px solid #ccc;
}
.card__header {
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
.card__content {
  padding: 1rem;
}
.card--dark {
  background-color: #333;
  color: white;
}`;

    const nestedPropsScss = `div {
  font: {
    family: sans-serif;
    size: 16px;
    weight: bold;
  }
  
  border: {
    style: solid;
    width: 2px;
    color: red;
    radius: 5px; // This is a bonus - border-radius
  }
}`;

     const nestedPropsCss = `div {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  border-radius: 5px;
}`;

    const overNestingScss = `section.main-content {
  div.container {
    article.post {
      h1.post-title {
        color: red; // A very specific selector
      }
    }
  }
}`;

    const overNestingCss = `section.main-content div.container article.post h1.post-title {
  color: red;
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Layers className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Sass/SCSS Nesting</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Writing CSS rules that mirror your HTML structure.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Russian Dolls" Analogy</CardTitle>
                    <CardDescription>
                        Think of your HTML as a set of Russian nesting dolls. An `&lt;li&gt;` is inside a `&lt;ul&gt;`, which is inside a `&lt;nav&gt;`. Nesting in Sass allows your styles to follow the same structure, making your code visually intuitive and easy to read.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Basic Nesting</CardTitle>
                    <CardDescription>
                        Instead of writing separate selectors, you can nest the child selectors directly inside the parent selector.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-primary mb-2">SCSS (What you write)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{basicNestingScss}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Compiled CSS (What the browser gets)</h3>
                            <div className="bg-muted rounded-md p-4">
                                <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{basicNestingCss}</pre>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onOpenWebPlayground(basicNestingHtml, basicNestingScss, '')}>
                            <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>The Parent Selector: `&`</CardTitle>
                    <CardDescription>The `&` is a special character that refers to the parent selector. It's incredibly powerful for creating complex selectors in a clean way.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Case 1: Pseudo-classes</h3>
                        <p className="text-sm text-muted-foreground mb-2">Perfect for adding `:hover`, `:focus`, or `:active` states.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{parentSelectorScss}</pre>
                        </div>
                         <div className="my-2 flex justify-center"><ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" /></div>
                         <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{parentSelectorCss}</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Case 2: BEM-style Naming</h3>
                        <p className="text-sm text-muted-foreground mb-2">The `&` makes it easy to construct BEM (Block, Element, Modifier) class names.</p>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{bemExampleScss}</pre>
                        </div>
                         <div className="my-2 flex justify-center"><ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" /></div>
                         <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{bemExampleCss}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Nested Properties</CardTitle>
                    <CardDescription>
                        You can also nest CSS properties that share a common prefix, like `font-family`, `font-size`, `font-weight`.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                     <div>
                        <h3 className="font-semibold text-primary mb-2">SCSS</h3>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{nestedPropsScss}</pre>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-foreground mb-2">Compiled CSS</h3>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{nestedPropsCss}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>The Dangers of Over-Nesting</CardTitle>
                    <CardDescription>
                       While nesting is useful, nesting too deeply is a common mistake. It leads to overly specific CSS selectors that are hard to override and can increase your CSS file size.
                    </CardDescription>
                </CardHeader>
                 <CardContent className="grid md:grid-cols-2 gap-6">
                     <div>
                        <h3 className="font-semibold text-destructive mb-2">Bad: Deeply Nested SCSS</h3>
                        <div className="bg-card rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{overNestingScss}</pre>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-foreground mb-2">Result: Highly Specific CSS</h3>
                        <div className="bg-card rounded-md p-4">
                            <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{overNestingCss}</pre>
                        </div>
                    </div>
                </CardContent>
                 <CardContent>
                     <p className="text-center text-sm font-semibold mt-4">A good rule of thumb is to try not to nest more than 3 levels deep.</p>
                 </CardContent>
            </Card>
        </div>
    );
}

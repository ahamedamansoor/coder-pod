
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Code, ArrowRight, Layers, File, Book, Lightbulb } from 'lucide-react';
import React from 'react';

export default function WhatIsSass() {

    const cssCode = `.card {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h2 {
  color: #333;
  font-size: 20px;
}

.card .button {
  background: blue;
  color: white;
  padding: 10px 15px;
}
`;

    const scssCode = `$primary-color: blue;

.card {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h2 {
    color: #333;
    font-size: 20px;
  }
  
  .button {
    background: $primary-color;
    color: white;
    padding: 10px 15px;
  }
}
`;
    
    const features = [
        { icon: Layers, title: "Variables", description: "Store reusable values like colors, fonts, and spacing." },
        { icon: File, title: "Nesting", description: "Write CSS rules that mirror your HTML structure, making code cleaner." },
        { icon: Book, title: "Partials & Modules", description: "Split your CSS into smaller, manageable files." },
        { icon: Code, title: "Mixins & Functions", description: "Create reusable blocks of styles or logic, like functions in programming." },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Sass/SCSS Introduction</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">An introduction to CSS with superpowers.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is Sass/SCSS?</CardTitle>
                <CardDescription>
                    Sass (Syntactically Awesome Style Sheets) is a **CSS preprocessor**. It's an extension of CSS that adds programming-like features, which are then compiled into regular, browser-friendly CSS.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Think of it as writing CSS in an advanced, more powerful language. This makes your stylesheets more maintainable, themeable, and DRY (Don't Repeat Yourself).</p>
                 <div className="mt-4 flex items-center justify-center gap-4 p-6 bg-muted rounded-lg">
                    <div className="text-center">
                        <p className="font-bold text-primary">SCSS Code</p>
                        <p className="text-xs text-muted-foreground">(What you write)</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0"/>
                    <div className="text-center">
                        <p className="font-bold text-green-600">Compiler</p>
                        <p className="text-xs text-muted-foreground">(e.g., `sass`)</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground shrink-0"/>
                    <div className="text-center">
                        <p className="font-bold text-foreground">Plain CSS</p>
                        <p className="text-xs text-muted-foreground">(What the browser reads)</p>
                    </div>
                 </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Sass vs. SCSS: What's the Difference?</CardTitle>
                <CardDescription>You'll see both terms, but they refer to two different syntaxes.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold text-lg">Sass (Indented Syntax)</h3>
                    <p className="text-sm text-muted-foreground">The original syntax. It uses indentation instead of brackets and newlines instead of semicolons. It is less common today.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-primary">
                    <h3 className="font-bold text-lg text-primary">SCSS (Sassy CSS)</h3>
                    <p className="text-sm text-muted-foreground">The more modern and widely-used syntax. It's a superset of CSS, meaning **all valid CSS is also valid SCSS**. It uses brackets and semicolons, just like regular CSS.</p>
                </div>
            </CardContent>
            <CardContent>
                <p className="text-center text-sm text-muted-foreground font-semibold">This course will focus exclusively on the SCSS syntax.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Why is it "CSS with Superpowers"?</CardTitle>
                <CardDescription>SCSS adds features that developers have wanted in CSS for years.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map(f => (
                    <div key={f.title} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2"><f.icon className="w-5 h-5 text-primary"/>{f.title}</h3>
                        <p className="text-xs text-muted-foreground">{f.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>A Quick Comparison</CardTitle>
                <CardDescription>Here's how a simple component style looks in both SCSS and the final compiled CSS.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                 <div>
                    <h3 className="font-semibold text-primary mb-2">SCSS (what you write)</h3>
                     <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{scssCode}</pre>
                    </div>
                 </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Compiled CSS (what browser gets)</h3>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-xs text-foreground whitespace-pre-wrap">{cssCode}</pre>
                    </div>
                 </div>
            </CardContent>
        </Card>

      </div>
    );
}

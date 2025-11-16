
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Paintbrush, Play, Link, Palette, FileCode } from 'lucide-react';
import React from 'react';

interface IntroductionToCssProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function IntroductionToCss({ onOpenWebPlayground }: IntroductionToCssProps) {

    const playgroundCode = {
        html: `<!-- This is the HTML file (index.html) -->
<h1>Hello, CSS!</h1>
<p>This paragraph is styled by an external stylesheet.</p>`,
        css: `/* This is the CSS file (styles.css) */
body {
  background-color: #f0f2f5;
  font-family: sans-serif;
}

h1 {
  color: hsl(var(--primary));
  text-align: center;
}

p {
  color: #555;
  font-size: 18px;
}`,
        js: ''
    };

    const methods = [
        {
            icon: Link,
            name: "External CSS",
            desc: "The best method. You write CSS in a separate `.css` file and link to it from your HTML file's `<head>` section.",
            pros: "Keeps styles separate, easy to maintain, styles multiple pages.",
        },
        {
            icon: Palette,
            name: "Internal CSS",
            desc: "You write CSS inside a `<style>` tag within the HTML file's `<head>` section.",
            pros: "Good for single-page styles, keeps everything in one file.",
        },
        {
            icon: FileCode,
            name: "Inline CSS",
            desc: "You apply styles directly to an HTML element using the `style` attribute.",
            pros: "Useful for quick, specific styling, but quickly becomes unmanageable.",
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Paintbrush className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Introduction</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">What is CSS and how does it bring your HTML to life?</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is CSS?</CardTitle>
                    <CardDescription>
                       **CSS** stands for **C**ascading **S**tyle **S**heets. It's the language we use to describe the presentation of a document written in a markup language like HTML. In simple terms, HTML is the skeleton, and CSS is the clothing and appearance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>CSS controls everything from colors and fonts to layout and responsiveness.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Three Ways to Add CSS</CardTitle>
                    <CardDescription>
                        There are three methods for applying CSS to an HTML document.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    {methods.map(m => (
                        <div key={m.name} className="bg-muted p-4 rounded-lg border">
                           <h3 className="font-bold flex items-center gap-2 mb-2"><m.icon className="w-5 h-5 text-primary"/>{m.name}</h3>
                           <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
                           <p className="text-xs font-semibold text-green-600">Pros: <span className="font-normal text-muted-foreground">{m.pros}</span></p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action (External CSS)</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how an external stylesheet changes the appearance of the HTML content.</CardDescription>
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


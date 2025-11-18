'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sigma, Play, Lightbulb, Link, Check, FileInput } from 'lucide-react';
import React from 'react';

export default function OutputElement({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Simple Calculation</h2>
<form oninput="result.value=parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" name="a" value="50">
  +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="result" for="a b">100</output>
</form>

<h2 style="margin-top: 2rem;">Range Slider Example</h2>
<form oninput="x.value=parseInt(a_range.value)">
    0
    <input type="range" id="a_range" name="a_range" value="50">
    100 +
    <input type="number" name="b_num" value="50">
    =
    <output name="x" for="a_range b_num"></output>
</form>`,
        css: `body { 
  font-family: sans-serif;
  padding: 2rem;
}
form {
    border: 1px solid #ccc;
    padding: 1.5rem;
    border-radius: 8px;
    font-size: 1.2rem;
}
input[type="number"] {
    width: 60px;
    padding: 5px;
}
output {
    font-weight: bold;
    color: hsl(var(--primary));
}`,
        js: ''
    };
    
    const attributes = [
        { icon: Link, attr: 'for', desc: 'A space-separated list of IDs of other elements. It indicates that the output element is the result of calculations involving these elements.' },
        { icon: FileInput, attr: 'form', desc: 'Allows you to associate the output element with a form, even if it is not nested inside it.' },
        { icon: Check, attr: 'name', desc: 'The name of the element, which is used when submitting the form.' },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Sigma className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">The &lt;output&gt; Element</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Representing the result of a calculation or user action.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is the &lt;output&gt; Element?</CardTitle>
                <CardDescription>The `&lt;output&gt;` tag is a semantic element used to display the result of a calculation or a user action. Think of it as the digital display on a calculator—it's there specifically to show you the answer.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Why not just use a `&lt;span&gt;` or `&lt;div&gt;`?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">While you can display results in any element, using `&lt;output&gt;` is semantically correct. It explicitly tells browsers and assistive technologies (like screen readers) that this element's content is the result of a calculation and establishes a relationship between the inputs and the result, which improves accessibility.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Key Attributes</CardTitle>
                <CardDescription>The `&lt;output&gt;` element has a few important attributes to make it work effectively.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                {attributes.map(attr => (
                    <div key={attr.attr} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-1"><attr.icon className="w-5 h-5 text-primary" />{attr.attr}</h3>
                        <p className="text-sm text-muted-foreground">{attr.desc}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Change the values in the number inputs or slide the range input to see the output update automatically. This is handled by the `oninput` event of the form.</CardDescription>
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

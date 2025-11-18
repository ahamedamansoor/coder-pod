
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { List, Play, Lightbulb } from 'lucide-react';
import React from 'react';

export default function DatalistElement({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Choose Your Favorite Browser</h2>
<form>
  <label for="browser-choice">Browser:</label>
  <input list="browsers" id="browser-choice" name="browser-choice" />

  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  
  <input type="submit" style="margin-top: 1rem;">
</form>`,
        css: `body { 
  font-family: sans-serif;
  padding: 2rem;
}
label {
  font-weight: bold;
}
input {
  padding: 8px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid #ccc;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <List className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">The &lt;datalist&gt; Element</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Providing a pre-defined list of options for an input field.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is a &lt;datalist&gt;?</CardTitle>
                <CardDescription>The `&lt;datalist&gt;` element specifies a list of pre-defined options for an `&lt;input&gt;` element. It provides an "autocomplete" feature on input fields. Users will see a drop-down list of the pre-defined options as they type.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>You link an `&lt;input&gt;` to a `&lt;datalist&gt;` using the `list` attribute on the input, which must have the same value as the `id` of the datalist.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    <li>The `&lt;datalist&gt;` element contains a series of `&lt;option&gt;` elements.</li>
                    <li>The `value` of each `&lt;option&gt;` is what will be suggested to the user.</li>
                </ul>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{playgroundCode.html}</pre>
                </div>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>User Flexibility</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Unlike the `&lt;select&gt;` element, a `&lt;datalist&gt;` provides suggestions but does not restrict the user to only those options. The user can still type in a different value if they wish.</p>
            </CardContent>
        </Card>

      </div>
    );
}

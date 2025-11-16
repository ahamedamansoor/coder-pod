'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code, Play, AlertTriangle, Key, CaseSensitive, Keyboard } from 'lucide-react';
import React from 'react';

export default function CharacterEntities({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const commonEntities = [
        { char: '<', name: '&lt;', number: '&#60;', description: 'Less-than sign (opening tag bracket)' },
        { char: '>', name: '&gt;', number: '&#62;', description: 'Greater-than sign (closing tag bracket)' },
        { char: '&', name: '&amp;', number: '&#38;', description: 'Ampersand (starts an entity)' },
        { char: '"', name: '&quot;', number: '&#34;', description: 'Double quotation mark' },
        { char: "'", name: '&apos;', number: '&#39;', description: 'Single quotation mark (apostrophe)' },
        { char: '©', name: '&copy;', number: '&#169;', description: 'Copyright symbol' },
        { char: '®', name: '&reg;', number: '&#174;', description: 'Registered trademark symbol' },
        { char: '€', name: '&euro;', number: '&#8364;', description: 'Euro sign' },
        { char: ' ', name: '&nbsp;', number: '&#160;', description: 'Non-breaking space' },
    ];

    const playgroundCode = {
        html: `<h2>Displaying Code</h2>
<p>To show a paragraph tag in your text, you must use entities:</p>
<pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

<h2>Special Symbols</h2>
<p>
  You can buy this for 100 &euro; (Euros).
  Copyright &copy; 2024 Coder Pod. All rights reserved&reg;.
</p>

<h2>Non-Breaking Space</h2>
<p>
  This prevents a line break between two words, like right&nbsp;here.
  Even if you resize the window, "right" and "here" will stay together.
</p>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
pre {
  background-color: hsl(var(--muted));
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid hsl(var(--border));
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Key className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Character Entities</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Using "secret codes" to display reserved characters and special symbols.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Are Entities Needed?</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Code className="w-5 h-5 text-primary"/>Reserved Characters</h3>
                    <p className="text-xs text-muted-foreground">Some characters, like `<` and `>`, are part of HTML's syntax. To display them as text, you must use their entity equivalent.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Keyboard className="w-5 h-5 text-primary"/>Symbols Not on Keyboard</h3>
                    <p className="text-xs text-muted-foreground">Entities allow you to display symbols like the copyright sign (©), trademark (®), or currency symbols (€).</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><CaseSensitive className="w-5 h-5 text-primary"/>Invisible Characters</h3>
                    <p className="text-xs text-muted-foreground">Some entities represent non-visible characters, like the non-breaking space (`&nbsp;`), which prevents a line break.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Anatomy of an Entity</CardTitle>
                <CardDescription>An entity always starts with an ampersand (`&`) and ends with a semicolon (`;`).</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold mb-2">Entity Name: <code className="text-primary">&amp;name;</code></h3>
                    <p className="text-sm text-muted-foreground">This is the more readable and recommended way (e.g., `&copy;`).</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold mb-2">Entity Number: <code className="text-primary">&amp;#number;</code></h3>
                    <p className="text-sm text-muted-foreground">Each character has a unique number code (e.g., `&#169;` for the copyright symbol).</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Commonly Used Character Entities</CardTitle>
                <CardDescription>Here is a quick reference for the most common entities you'll encounter.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Character</TableHead>
                            <TableHead>Entity Name</TableHead>
                            <TableHead>Entity Number</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {commonEntities.map((entity) => (
                            <TableRow key={entity.name}>
                                <TableCell className="font-bold text-lg text-center">{entity.char}</TableCell>
                                <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.name}</code></TableCell>
                                <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.number}</code></TableCell>
                                <TableCell>{entity.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how entities are rendered by the browser.</CardDescription>
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
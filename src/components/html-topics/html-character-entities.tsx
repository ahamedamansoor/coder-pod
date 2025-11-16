
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Key, Play, AlertCircle } from 'lucide-react';
import React from 'react';

export default function CharacterEntities({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const commonEntities = [
        { description: 'Less than sign', result: '<', name: '&lt;', number: '&#60;' },
        { description: 'Greater than sign', result: '>', name: '&gt;', number: '&#62;' },
        { description: 'Ampersand', result: '&', name: '&amp;', number: '&#38;' },
        { description: 'Double quotation mark', result: '"', name: '&quot;', number: '&#34;' },
        { description: 'Single quotation mark', result: "'", name: '&apos;', number: '&#39;' },
        { description: 'Copyright symbol', result: '©', name: '&copy;', number: '&#169;' },
        { description: 'Registered trademark', result: '®', name: '&reg;', number: '&#174;' },
        { description: 'Euro sign', result: '€', name: '&euro;', number: '&#8364;' },
        { description: 'Cent sign', result: '¢', name: '&cent;', number: '&#162;' },
        { description: 'Non-breaking space', result: ' ', name: '&nbsp;', number: '&#160;' },
    ];
    
    const playgroundCode = {
        html: `<!-- Using character entities to display code -->
<h2>Displaying HTML Code</h2>
<p>
  To show a paragraph tag, you must use entities: 
  <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
</p>

<!-- Using entities for symbols -->
<h2>Symbols & Copyright</h2>
<p>
  The price is 50&cent;. Special offers may apply.
</p>
<p>
  Copyright &copy; 2024 Coder Pod&reg;.
</p>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-family: monospace;
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
                <CardTitle className="flex items-center gap-3"><AlertCircle className="w-6 h-6 text-primary"/>Why Are They Needed?</CardTitle>
                <CardDescription>Some characters are reserved in HTML. For example, you cannot use the less than (`<`) and greater than (`>`) signs in your text, because the browser will interpret them as the start and end of a tag.</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="text-sm text-muted-foreground">To display a reserved character, we must use a **character entity** instead. They are also used for displaying special symbols not found on a standard keyboard.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Anatomy of an Entity</CardTitle>
                <CardDescription>A character entity has two forms: the **name** and the **number**. Both produce the same result. They always start with an ampersand (`&`) and end with a semicolon (`;`).</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold text-lg">Entity Name</h3>
                        <code className="text-primary font-mono bg-background p-1 rounded">&amp;lt;</code>
                        <p className="text-xs text-muted-foreground mt-1">Easier to remember.</p>
                    </div>
                     <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold text-lg">Entity Number</h3>
                        <code className="text-primary font-mono bg-background p-1 rounded">&amp;#60;</code>
                        <p className="text-xs text-muted-foreground mt-1">Supported by all browsers.</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">While entity names are more readable, not all have a name. Every character has a number.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Common Character Entities</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Result</TableHead>
                            <TableHead>Entity Name</TableHead>
                            <TableHead>Entity Number</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {commonEntities.map(entity => (
                            <TableRow key={entity.name}>
                                <TableCell>{entity.description}</TableCell>
                                <TableCell className="font-bold text-lg">{entity.result}</TableCell>
                                <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.name}</code></TableCell>
                                <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.number}</code></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this example in the Web Playground to see how these entities are rendered by the browser.</CardDescription>
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

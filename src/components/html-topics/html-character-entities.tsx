
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Key, Play, AlertCircle, Sigma, DollarSign, Pilcrow } from 'lucide-react';
import React from 'react';

export default function HtmlCharacterEntities({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const reservedChars = [
        { description: 'Less than', result: '<', name: '&lt;', number: '&#60;' },
        { description: 'Greater than', result: '>', name: '&gt;', number: '&#62;' },
        { description: 'Ampersand', result: '&', name: '&amp;', number: '&#38;' },
        { description: 'Double quote', result: '"', name: '&quot;', number: '&#34;' },
        { description: 'Single quote', result: "'", name: '&apos;', number: '&#39;' },
    ];
    
    const punctuationSymbols = [
        { description: 'Non-breaking space', result: ' ', name: '&nbsp;', number: '&#160;' },
        { description: 'Inverted exclamation', result: '¡', name: '&iexcl;', number: '&#161;' },
        { description: 'Inverted question mark', result: '¿', name: '&iquest;', number: '&#191;' },
        { description: 'Section sign', result: '§', name: '&sect;', number: '&#167;' },
        { description: 'Paragraph sign', result: '¶', name: '&para;', number: '&#182;' },
        { description: 'Bullet', result: '•', name: '&bull;', number: '&#8226;' },
        { description: 'En dash', result: '–', name: '&ndash;', number: '&#8211;' },
        { description: 'Em dash', result: '—', name: '&mdash;', number: '&#8212;' },
    ];
    
    const currencySymbols = [
        { description: 'Cent', result: '¢', name: '&cent;', number: '&#162;' },
        { description: 'Pound', result: '£', name: '&pound;', number: '&#163;' },
        { description: 'Yen', result: '¥', name: '&yen;', number: '&#165;' },
        { description: 'Euro', result: '€', name: '&euro;', number: '&#8364;' },
        { description: 'Copyright', result: '©', name: '&copy;', number: '&#169;' },
        { description: 'Registered TM', result: '®', name: '&reg;', number: '&#174;' },
    ];
    
    const mathSymbols = [
        { description: 'Plus-minus', result: '±', name: '&plusmn;', number: '&#177;' },
        { description: 'Multiplication', result: '×', name: '&times;', number: '&#215;' },
        { description: 'Division', result: '÷', name: '&divide;', number: '&#247;' },
        { description: 'Not equal', result: '≠', name: '&ne;', number: '&#8800;' },
        { description: 'Less than or equal', result: '≤', name: '&le;', number: '&#8804;' },
        { description: 'Greater than or equal', result: '≥', name: '&ge;', number: '&#8805;' },
        { description: 'Degree', result: '°', name: '&deg;', number: '&#176;' },
        { description: 'Tilde', result: '~', name: 'N/A', number: '&#126;' },
    ];
    
    const playgroundCode = {
        html: `<!-- Using character entities to display code -->
<h2>Code & Reserved Characters</h2>
<p>
  To show a paragraph tag, you must use entities: 
  <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
</p>

<!-- Using entities for symbols -->
<h2>Symbols, Currency & Math</h2>
<p>
  The price is 50&cent; or &euro;0.50.
</p>
<p>
  Is 5 &ge; 4? Yes. Is 5 &ne; 5? No.
</p>
<p>
  Copyright &copy; 2024 Coder Pod&reg;.
</p>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
h2 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
  margin-top: 1.5rem;
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
    
    const EntityTable = ({ entities }: { entities: typeof reservedChars }) => (
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
                {entities.map(entity => (
                    <TableRow key={entity.name}>
                        <TableCell>{entity.description}</TableCell>
                        <TableCell>
                            <code className="font-mono text-foreground text-lg bg-muted p-2 rounded">{entity.result}</code>
                        </TableCell>
                        <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.name}</code></TableCell>
                        <TableCell><code className="font-mono text-primary bg-muted p-1 rounded">{entity.number}</code></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

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
                <CardTitle className="flex items-center gap-3"><AlertCircle className="w-6 h-6 text-primary" />Why Are They Needed?</CardTitle>
                <CardDescription>Some characters are reserved in HTML. For example, you cannot use the less than (`&lt;`) and greater than (`&gt;`) signs in your text, because the browser will interpret them as the start and end of a tag.</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="text-sm text-muted-foreground">To display a reserved character, we must use a **character entity** instead. They are also used for displaying special symbols not found on a standard keyboard.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Reserved Characters</CardTitle>
            </CardHeader>
            <CardContent>
                <EntityTable entities={reservedChars} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Pilcrow className="w-6 h-6 text-primary"/>Punctuation & Symbols</CardTitle>
            </CardHeader>
            <CardContent>
                <EntityTable entities={punctuationSymbols} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><DollarSign className="w-6 h-6 text-primary"/>Currency & Trademark Symbols</CardTitle>
            </CardHeader>
            <CardContent>
                <EntityTable entities={currencySymbols} />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Sigma className="w-6 h-6 text-primary"/>Mathematical Symbols</CardTitle>
            </CardHeader>
            <CardContent>
                <EntityTable entities={mathSymbols} />
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


'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Scale, Award, Shield, AlertTriangle, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssSpecificityProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssSpecificity({ onOpenWebPlayground }: CssSpecificityProps) {

    const specificityHierarchy = [
        { level: 1, selector: 'Inline Styles', example: 'style="..."', weight: '1,0,0,0' },
        { level: 2, selector: 'IDs', example: '#my-id', weight: '0,1,0,0' },
        { level: 3, selector: 'Classes, Pseudo-classes, Attributes', example: '.my-class, :hover, [type="text"]', weight: '0,0,1,0' },
        { level: 4, selector: 'Elements & Pseudo-elements', example: 'div, ::before', weight: '0,0,0,1' },
    ];
    
    const playgroundCode = {
        html: `<div id="unique-id" class="box important" style="color: purple;">Am I purple, red, or blue?</div>`,
        css: `/* 
  Which color will win? 
  1. Inline style (purple) has the highest specificity (1,0,0,0)
  2. ID selector (red) is next (0,1,0,0)
  3. Class selector (blue) is next (0,0,1,0)
  4. Element selector (black) is last (0,0,0,1)
*/

/* ID selector - Specificity: 0,1,0,0 */
#unique-id {
  color: red;
}

/* Class selector - Specificity: 0,0,1,0 */
.box {
  color: blue;
}

/* Element selector - Specificity: 0,0,0,1 */
div {
  color: black;
}`,
        js: `// The inline style "color: purple;" will win.`
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Award className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Specificity & Cascade</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding how browsers decide which CSS rule wins when multiple rules apply to the same element.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Argument" Analogy</CardTitle>
                    <CardDescription>Imagine different people are shouting instructions at an HTML element. CSS Specificity is the rule that decides whose voice is the "loudest" and most important. An ID selector shouts louder than a class selector, which shouts louder than an element selector.</CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Scale className="w-6 h-6 text-primary"/>The Specificity Hierarchy (Most to Least Powerful)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {specificityHierarchy.map(item => (
                        <div key={item.level} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                             <div className="text-2xl font-bold text-primary">{item.level}</div>
                            <div>
                                <h3 className="font-bold text-lg">{item.selector}</h3>
                                <p className="text-sm text-muted-foreground mb-2">Example: <code className="font-mono bg-background p-1 rounded">{item.example}</code></p>
                                <p className="text-xs font-semibold">Weight: {item.weight}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">The universal selector (`*`) and inherited styles have a specificity of 0,0,0,0.</p>
                 </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>This div is targeted by four different rules. Which one wins? The inline style, because it has the highest specificity.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>What about the Cascade?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">The Cascade is the "C" in CSS. It's the overall process browsers use to combine different stylesheets and resolve conflicts.</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-sm">
                        <li><strong>Origin and Importance:</strong> Browser styles are applied first, then your user styles, then your author (your own) styles. `!important` rules reverse this order.</li>
                        <li><strong>Specificity:</strong> If two selectors have the same origin, the one with higher specificity wins (as explained above).</li>
                        <li><strong>Source Order:</strong> If two selectors have the same origin AND the same specificity, the one that appears **last** in the code wins.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>The `!important` Rule</CardTitle>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">Adding `!important` to a style declaration makes it override any other declaration. While it seems powerful, it should be avoided whenever possible as it breaks the natural cascade and makes debugging very difficult. It's usually a sign of poorly structured CSS.</p>
                 </CardContent>
            </Card>

        </div>
    );
}

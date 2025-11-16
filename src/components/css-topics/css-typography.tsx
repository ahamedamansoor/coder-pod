
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Type, CaseSensitive, Pilcrow, Ruler } from 'lucide-react';
import React from 'react';

interface CssTypographyProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTypography({ onOpenWebPlayground }: CssTypographyProps) {

    const playgroundCode = {
        html: `<h1>Typography Showcase</h1>
<p>This paragraph demonstrates various typography properties. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
`,
        css: `body {
  /* You can specify multiple fonts as fallbacks */
  font-family: 'Georgia', 'Times New Roman', serif;
}

h1 {
  font-size: 2.5rem; /* rem is a responsive unit relative to the root font size */
  font-weight: 700; /* 400 is normal, 700 is bold */
  text-transform: uppercase;
  letter-spacing: 2px;
  color: hsl(var(--primary));
}

p {
  font-size: 16px; /* A fixed size in pixels */
  font-style: italic;
  line-height: 1.6; /* 1.6 times the font size, for better readability */
  text-align: justify;
  color: hsl(var(--foreground));
}
`,
        js: ''
    };
    
    const typoProps = [
        { icon: Type, prop: 'font-family', desc: 'Specifies the font for an element. You can list multiple fonts as fallbacks.' },
        { icon: Ruler, prop: 'font-size', desc: 'Sets the size of the font. Can use units like `px`, `em`, `rem`.' },
        { icon: Type, prop: 'font-weight', desc: 'Sets how thick or thin characters in text should be displayed (e.g., `normal`, `bold`, or numbers like `400`, `700`).' },
        { icon: Type, prop: 'font-style', desc: 'Specifies the font style for a text (e.g., `normal`, `italic`).' },
        { icon: Pilcrow, prop: 'line-height', desc: 'Sets the distance between lines of text. Using a unitless value (e.g., `1.5`) is recommended for scalability.' },
        { icon: Pilcrow, prop: 'text-align', desc: 'Specifies the horizontal alignment of text (`left`, `right`, `center`, `justify`).' },
        { icon: CaseSensitive, prop: 'text-transform', desc: 'Controls the capitalization of text (`uppercase`, `lowercase`, `capitalize`).' },
        { icon: CaseSensitive, prop: 'letter-spacing', desc: 'Increases or decreases the space between characters in a text.' },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Type className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Typography</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Controlling the appearance of text on your web pages.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Typography?</CardTitle>
                    <CardDescription>
                       In web design, typography refers to the art and technique of arranging text to make it legible, readable, and appealing when displayed. CSS provides a powerful set of properties to control every aspect of your text's appearance.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Common Typography Properties</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {typoProps.map(p => (
                        <div key={p.prop} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.prop}`</h3>
                            <p className="text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see how different typography properties affect the heading and paragraph text.</CardDescription>
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

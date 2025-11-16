
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Palette, Fingerprint, Tags, Link, FileImage, Settings, Play } from 'lucide-react';
import React from 'react';

export default function HtmlAttributes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const globalAttributes = [
        {
            icon: Fingerprint,
            name: 'id',
            description: 'Provides a unique identifier for an element. No two elements on a page should have the same ID. It\'s used for CSS styling and JavaScript manipulation.',
            example: '<h1 id="main-title">My Website</h1>'
        },
        {
            icon: Tags,
            name: 'class',
            description: 'Assigns one or more class names to an element. Multiple elements can share the same class. It\'s primarily used for CSS styling.',
            example: '<p class="highlight important">A key paragraph.</p>'
        },
        {
            icon: Palette,
            name: 'style',
            description: 'Applies inline CSS styles directly to an element. This is less flexible than using external stylesheets but is useful for quick, specific styling.',
            example: '<p style="color: blue; font-size: 16px;">Blue text.</p>'
        },
        {
            icon: Settings,
            name: 'data-*',
            description: 'A way to store extra, custom information on an element that is not tied to any specific HTML feature. Useful for JavaScript to store state or metadata.',
            example: '<div data-user-id="123" data-role="admin">User Info</div>'
        },
    ];

    const specificAttributes = [
        {
            tag: '<a>',
            icon: Link,
            attributes: [
                { name: 'href', description: 'The Hyperlink Reference. Specifies the URL the link points to.' },
                { name: 'target', description: 'Where to open the linked document (e.g., `_blank` for a new tab).' },
            ],
            example: '<a href="https://example.com" target="_blank">Visit Example.com</a>'
        },
        {
            tag: '<img>',
            icon: FileImage,
            attributes: [
                { name: 'src', description: 'The Source. Specifies the path to the image file.' },
                { name: 'alt', description: 'Alternative text, shown if the image cannot be displayed. Crucial for accessibility.' },
                { name: 'width/height', description: 'Sets the dimensions of the image in pixels.' },
            ],
            example: '<img src="https://picsum.photos/id/10/200/150" alt="A beautiful landscape" width="200" height="150">'
        },
    ];
    
    const playgroundCode = {
        html: `<!-- Global Attributes Example -->
<h1 id="title">Styling with Attributes</h1>
<p class="intro-text" style="color: navy;">This paragraph uses both a class and an inline style attribute.</p>

<!-- Specific Attributes Example -->
<p>Here is a link to a great resource: 
  <a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a>
</p>

<p>And here is an image:</p>
<img 
  src="https://picsum.photos/seed/101/400/250" 
  alt="Random placeholder image" 
  width="400" 
  height="250"
>`,
        css: `/* Using the 'id' selector */
#title {
  color: hsl(var(--primary));
  text-decoration: underline;
}

/* Using the 'class' selector */
.intro-text {
  font-style: italic;
  font-size: 1.1rem;
  border-left: 4px solid hsl(var(--primary));
  padding-left: 10px;
  /* The inline style="color: navy;" will override this color! */
  color: black; 
}`,
        js: ''
    };


    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Car className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Attributes</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Customizing your HTML elements with extra information and features.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Car Customization Analogy</CardTitle>
                <CardDescription>Think of an HTML tag as a base model car, and attributes as the optional features you add to it.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 font-mono text-lg text-center border">
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-blue-500">&lt;p&gt;</span>Content<span className="text-blue-500">&lt;/p&gt;</span>
                        </div>
                         <p className="text-sm text-muted-foreground hidden md:block">Base Model</p>
                    </div>
                     <p className="text-sm text-muted-foreground md:hidden">Base Model</p>
                    <div className="text-3xl font-thin text-muted-foreground">+</div>
                    <div className="flex items-center gap-2">
                         <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-red-500">class</span>=<span className="text-green-500">"intro"</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">Custom Feature</p>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">Custom Feature</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Global Attributes</CardTitle>
                <CardDescription>These are attributes that can be used on almost any HTML element.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {globalAttributes.map((attr) => (
                    <div key={attr.name} className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                            <attr.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{attr.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{attr.description}</p>
                            <code className="text-xs bg-muted p-1 rounded-md font-mono">{attr.example}</code>
                        </div>
                    </div>
                ))}
                 <div className="pt-4">
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try Attributes in the Playground
                    </Button>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Element-Specific Attributes</CardTitle>
                <CardDescription>These attributes are designed for particular tags and give them their unique functionality.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {specificAttributes.map((spec) => (
                    <div key={spec.tag} className="p-4 border rounded-lg bg-muted/50">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                            <spec.icon className="w-6 h-6 text-primary"/>
                            Attributes for <code className="font-mono text-primary bg-background p-1 rounded">{spec.tag}</code>
                        </h3>
                        <div className="space-y-3 mb-4">
                            {spec.attributes.map(attr => (
                                <p key={attr.name} className="text-sm">
                                    <code className="font-semibold bg-background p-1 rounded">{attr.name}</code>: {attr.description}
                                </p>
                            ))}
                        </div>
                        <div className="bg-background p-3 rounded-md border">
                            <p className="text-xs text-muted-foreground mb-1">Example:</p>
                             <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{spec.example}</pre>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    );
}

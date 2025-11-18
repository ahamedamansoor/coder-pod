'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Fingerprint, Tags, HelpCircle, SpellCheck, Keyboard } from 'lucide-react';
import React from 'react';

export default function GlobalAttributes() {

    const attributes = [
        { icon: Fingerprint, attr: 'id', desc: 'Provides a unique identifier for an element. Crucial for JavaScript manipulation and anchor links.' },
        { icon: Tags, attr: 'class', desc: 'Assigns one or more class names to an element, primarily for CSS styling.' },
        { icon: HelpCircle, attr: 'title', desc: 'Provides extra information about an element, which typically appears as a tooltip on hover.' },
        { icon: SpellCheck, attr: 'lang', desc: 'Specifies the language of the element\'s content, which helps search engines and screen readers.' },
        { icon: Keyboard, attr: 'tabindex', desc: 'Controls whether an element can be focused with the Tab key and in what order.' },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Globe className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Global Attributes Overview</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Attributes that can be used on all HTML elements.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are Global Attributes?</CardTitle>
                <CardDescription>Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Key Global Attributes</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attributes.map(p => (
                    <div key={p.attr} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.attr}`</h3>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    );
}

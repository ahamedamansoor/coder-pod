'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Highlighter, Type, Bold, Italic, Underline, Link, Subscript, Superscript, Lightbulb, Play } from 'lucide-react';
import React from 'react';

export default function TextFormatting({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    
    const semanticTags = [
        { icon: Bold, tag: '<strong>', description: 'Indicates that the text has strong importance, seriousness, or urgency. Browsers typically render this as bold text.' },
        { icon: Italic, tag: '<em>', description: 'Stands for "emphasis". It indicates stress emphasis of a word or sentence. Browsers typically render this as italicized text.' },
        { icon: Highlighter, tag: '<mark>', description: 'Represents text which is marked or highlighted for reference purposes, due to its relevance in another context. Think of it like using a highlighter pen.' },
    ];
    
    const presentationalTags = [
        { icon: Bold, tag: '<b>', description: 'The "Bold" element is used to draw attention to text without implying any extra importance. It\'s purely for styling.' },
        { icon: Italic, tag: '<i>', description: 'The "Italic" element represents a range of text that is set off from the normal text for some reason, such as a technical term, a thought, or a name. It\'s also just for styling.' },
        { icon: Underline, tag: '<u>', description: 'The "Underline" element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. It is often confused with links.' },
    ];
    
    const specialtyTags = [
        { icon: Subscript, tag: '<sub>', description: 'The "Subscript" element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are rendered with a lowered baseline.' },
        { icon: Superscript, tag: '<sup>', description: 'The "Superscript" element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline.' },
    ];

    const playgroundCode = {
        html: `<h1>Text Formatting Showcase</h1>

<p>
  This paragraph demonstrates various text formatting tags. 
  For example, this is <strong>important text</strong>, which is different from just <b>bold text</b>.
</p>

<p>
  You can also add <em>emphasis</em> to your words, or simply put them in <i>italics</i> for stylistic reasons.
  Sometimes you might want to <mark>highlight a section</mark> for reference.
</p>

<p>
  Be careful with the <u>underline tag</u>, as users might confuse it with a <a href="#">link</a>.
</p>

<p>
  Finally, you can write chemical formulas like H<sub>2</sub>O using subscript, 
  or mathematical equations like E = mc<sup>2</sup> using superscript.
</p>`,
        css: `body {
  font-family: sans-serif;
  line-height: 1.6;
}
p {
  max-width: 600px;
}
mark {
  background-color: #fafa98;
  padding: 0.2em;
  border-radius: 3px;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Type className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Text Formatting</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Adding meaning and style to your text.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Lightbulb className="w-6 h-6 text-primary" />Semantic vs. Presentational</CardTitle>
                <CardDescription>
                    This is the most important concept in text formatting. Some tags add meaning to your text (semantic), while others just change its appearance (presentational). Search engines and screen readers rely on semantic tags to understand your content.
                </CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Semantic Tags (The "Why")</CardTitle>
                <CardDescription>These tags tell the browser *why* the text is important or different.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {semanticTags.map((tag) => (
                    <div key={tag.tag} className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                            <tag.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <code className="text-lg font-bold font-mono">{tag.tag}</code>
                            <p className="text-sm text-muted-foreground">{tag.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Presentational Tags (The "How")</CardTitle>
                <CardDescription>These tags only affect the visual appearance. While they still work, it's often better to use CSS for styling.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 {presentationalTags.map((tag) => (
                    <div key={tag.tag} className="flex items-start gap-4">
                        <div className="bg-muted-foreground/10 text-muted-foreground p-3 rounded-full mt-1">
                            <tag.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <code className="text-lg font-bold font-mono">{tag.tag}</code>
                            <p className="text-sm text-muted-foreground">{tag.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Specialty Formatting Tags</CardTitle>
                <CardDescription>Used for specific typographical conventions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 {specialtyTags.map((tag) => (
                    <div key={tag.tag} className="flex items-start gap-4">
                         <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                            <tag.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <code className="text-lg font-bold font-mono">{tag.tag}</code>
                            <p className="text-sm text-muted-foreground">{tag.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Try Them All!</CardTitle>
                <CardDescription>See how all these tags render in a real example. Open this code in the Web Playground to experiment.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg border">
                    <pre className="font-mono text-sm whitespace-pre-wrap">{playgroundCode.html}</pre>
                </div>
                 <div className="mt-4">
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try in Web Playground
                    </Button>
                </div>
            </CardContent>
        </Card>

      </div>
    );
}

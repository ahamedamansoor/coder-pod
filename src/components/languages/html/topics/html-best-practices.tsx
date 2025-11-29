'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, Code, Accessibility, Zap, Folder, FileCheck, CaseLower, File } from 'lucide-react';
import React from 'react';

export default function HtmlBestPractices() {

    const practices = [
        { icon: Code, title: "Use Semantic HTML", description: "Use tags for their meaning, not just their appearance (`<nav>`, `<article>`, `<button>`). This improves accessibility and SEO." },
        { icon: Accessibility, title: "Prioritize Accessibility", description: "Always include `alt` text for images, use `<label>` for form inputs, and ensure a logical heading structure (`<h1>`, `<h2>`, etc.)." },
        { icon: Zap, title: "Optimize for Performance", description: "Use `loading=\"lazy\"` for off-screen images/iframes. Optimize image sizes and use modern formats like WebP." },
        { icon: Folder, title: "Maintain a Logical Structure", description: "Ensure your document has a single `<h1>` and that heading levels are not skipped (e.g., don't jump from an `<h2>` to an `<h4>`)." },
        { icon: FileCheck, title: "Validate Your HTML", description: "Use tools like the W3C Markup Validation Service to check for errors in your HTML, which can prevent unexpected rendering issues." },
        { icon: CaseLower, title: "Use Lowercase for Tags and Attributes", description: "While HTML is not case-sensitive, it's a strong convention to write all tags and attributes in lowercase for consistency and readability." },
        { icon: File, title: "Close Your Tags", description: "While some tags are self-closing (like `<img>`), most tags that have an opening tag (like `<p>`) also need a closing tag (`</p>`). Omitting them can lead to unpredictable rendering issues." },

    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <ThumbsUp className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Best Practices</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Guidelines for writing clean, maintainable, and effective HTML.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Follow Best Practices?</CardTitle>
                <CardDescription>Writing good HTML isn't just about making a page look right. It's about ensuring it's accessible to everyone, performant, easy for search engines to understand, and simple for other developers (including your future self) to maintain.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Principles</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practices.map(p => (
                    <div key={p.title} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>{p.title}</h3>
                        <p className="text-xs text-muted-foreground">{p.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    );
}

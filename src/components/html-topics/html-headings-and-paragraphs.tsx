
'use client';
import { Heading1 } from 'lucide-react';
import React from 'react';

export default function HtmlHeadingsAndParagraphs({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Heading1 className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Headings & Paragraphs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Structuring your text content for readability and meaning.</p>
        </div>
      </div>
    );
}

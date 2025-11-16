
'use client';
import React from 'react';
import { FormInput } from 'lucide-react';

export default function FormInputTypes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FormInput className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Form Input Types</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">This content is under construction.</p>
            </div>
        </div>
    );
}

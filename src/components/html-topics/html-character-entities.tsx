'use client';
import { Key } from 'lucide-react';
import React from 'react';

export default function CharacterEntities({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Key className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Character Entities</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Using "secret codes" to display reserved characters and special symbols.</p>
        </div>
      </div>
    );
}

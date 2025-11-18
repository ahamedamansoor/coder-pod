'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Mail, Table, Code, Image } from 'lucide-react';
import React from 'react';

export default function HtmlEmailBasics() {

    const challenges = [
        { icon: Code, title: "Limited CSS Support", description: "Many modern CSS properties (like Grid, Flexbox, and animations) are not supported. Inline styles are the most reliable method." },
        { icon: Table, title: "Table-based Layouts", description: "The most reliable way to create columns and structure is by using nested `<table>` elements, a practice abandoned in web development years ago." },
        { icon: Image, title: "Image Blocking", description: "Many email clients block images by default. It's crucial to use descriptive `alt` text for all images." },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Mail className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Email Basics</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding the unique and frustrating world of coding for email.</p>
        </div>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>It's Not Modern Web Development</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Coding an HTML email is like stepping back in time to the late 1990s. Email clients (like Outlook, Gmail, Apple Mail) have very inconsistent and outdated rendering engines. What works in a web browser will often break in an email client.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Main Challenges</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                {challenges.map(p => (
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

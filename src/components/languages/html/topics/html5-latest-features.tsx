
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Play, Lightbulb, MessageSquare, Pointer, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Html5LatestFeatures() {

    const features = [
        {
            title: 'The Native <dialog> Element',
            slug: 'dialog-element',
            description: 'Create fully accessible modal and non-modal dialog boxes with built-in focus management and keyboard controls, drastically reducing reliance on JavaScript libraries.',
            icon: MessageSquare
        },
        {
            title: 'The Popover API',
            slug: 'popover-api',
            description: 'A brand-new, declarative way to create transient UI elements like menus, tooltips, and popovers that appear on top of other content, complete with built-in light-dismiss behavior.',
            icon: Pointer
        }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Sparkles className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML5 Latest Features</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Exploring powerful new elements and APIs that simplify web development.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Focus on These Features?</CardTitle>
                <CardDescription>The web is constantly evolving. The latest additions to HTML focus on solving common, complex problems that developers have faced for years, providing native, browser-level solutions that are more accessible, performant, and easier to implement.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-green-600"/>Better Accessibility</h3>
                    <p className="text-xs text-muted-foreground">Native elements have accessibility built-in, handling things like keyboard navigation and screen reader announcements automatically.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-green-600"/>Less JavaScript</h3>
                    <p className="text-xs text-muted-foreground">Reduces the need for large, third-party libraries to accomplish common UI patterns, leading to smaller bundle sizes.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-green-600"/>Improved Performance</h3>
                    <p className="text-xs text-muted-foreground">Browser-native features are highly optimized and perform better than most JavaScript-based solutions.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Key New Features to Learn</CardTitle>
                <CardDescription>Click on a topic below to dive into a detailed explanation with interactive examples.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {features.map(feature => (
                    <Link key={feature.slug} href={`/src/app/languages/html/${feature.slug}`} className="block">
                         <Card className="hover:border-primary hover:shadow-lg transition-all">
                             <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-full">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    <CardDescription className="mt-1">{feature.description}</CardDescription>
                                </div>
                             </CardHeader>
                         </Card>
                    </Link>
                ))}
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">The HTML standard is a living document. New features are constantly being proposed and added to browsers. Keeping an eye on resources like the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="text-primary underline">MDN Web Docs</a> and <a href="https://web.dev/blog" target="_blank" rel="noopener noreferrer" className="text-primary underline">web.dev</a> is a great way to stay up-to-date with the cutting edge of web platform capabilities.</p>
            </CardContent>
        </Card>

      </div>
    );
}

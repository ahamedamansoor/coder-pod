
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { VenetianMask, Users, Tv, Smartphone, Globe, Briefcase, BrainCircuit, Gamepad2, Cloud, Network, Share2 } from 'lucide-react';

export function WhatIsJava() {
    const applications = [
        { name: 'Desktop GUI Applications', icon: Tv },
        { name: 'Mobile Applications (Android)', icon: Smartphone },
        { name: 'Web-based Applications', icon: Globe },
        { name: 'Enterprise Applications', icon: Briefcase },
        { name: 'Scientific Applications', icon: BrainCircuit },
        { name: 'Gaming Applications', icon: Gamepad2 },
        { name: 'Big Data Technologies', icon: Cloud },
        { name: 'IoT Applications', icon: Network },
        { name: 'Distributed Applications', icon: Share2 },
        { name: 'Cloud-based Applications', icon: Cloud },
    ];

    return (
        <div id="what-is-java-page" data-test="what-is-java-page" className="w-full space-y-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <VenetianMask className="w-12 h-12 text-primary" />
                    <h1 className="text-5xl font-bold tracking-tight text-foreground">What is Java?</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A high-level, versatile, and object-oriented programming language designed for building robust, secure, and cross-platform applications.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-3xl">
                        <Users className="w-8 h-8 text-primary" />
                        Where is Java Used?
                    </CardTitle>
                    <CardDescription>Java's versatility makes it a popular choice across many domains.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {applications.map((app) => (
                        <div key={app.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                            <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
                                <app.icon className="w-7 h-7" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{app.name}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}

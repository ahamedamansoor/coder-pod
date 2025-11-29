'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Database, MapPin, Hand, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Html5Apis() {
    
    const apis = [
        { 
            slug: "web-storage-api", 
            title: "Web Storage API", 
            description: "Store data locally in the user's browser with localStorage and sessionStorage.",
            icon: Database
        },
        { 
            slug: "geolocation-api", 
            title: "Geolocation API", 
            description: "Access a user's geographical location (with their permission).",
            icon: MapPin
        },
        { 
            slug: "drag-and-drop-api", 
            title: "Drag and Drop API", 
            description: "Implement native drag-and-drop functionality for elements.",
            icon: Hand
        },
        { 
            slug: "fetch-api", 
            title: "Fetch API", 
            description: "A modern, flexible interface for making network requests (e.g., getting data from a server).",
            icon: Network
        },
        { 
            slug: "web-workers-api", 
            title: "Web Workers API", 
            description: "Run scripts in background threads to avoid freezing the user interface.",
            icon: Cpu
        },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML5 APIs Overview</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Powerful browser features that allow your JavaScript code to do amazing things.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What's an API?</CardTitle>
                <CardDescription>An API (Application Programming Interface) is a set of tools and protocols for building software. In the context of HTML5, these are interfaces exposed by web browsers that allow your JavaScript code to interact with browser features that were previously off-limits.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Explore Key Web APIs</CardTitle>
                <CardDescription>Click on a topic below to dive into a detailed explanation with interactive examples.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {apis.map(api => (
                    <Link key={api.slug} href={`/src/app/languages/html/${api.slug}`} className="block">
                         <Card className="hover:border-primary hover:shadow-lg transition-all">
                             <CardHeader className="flex flex-row items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-full">
                                        <api.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{api.title}</CardTitle>
                                        <CardDescription className="mt-1">{api.description}</CardDescription>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted-foreground"/>
                             </CardHeader>
                         </Card>
                    </Link>
                ))}
            </CardContent>
        </Card>

      </div>
    );
}

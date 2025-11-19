
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rss, BookOpen, GitBranch, Lightbulb, Zap, Rocket } from 'lucide-react';
import React from 'react';

const updates = [
    {
        version: "React 19 (Beta)",
        date: "April 2024",
        features: [
            { title: "Actions", description: "A new feature for managing data submission from client to server. You can use hooks like `useActionState` and `useFormStatus` to handle pending states, errors, and responses.", icon: Zap },
            { title: "Server Components", description: "A major architectural shift. Components can now run on the server, before bundling, to fetch data and reduce the amount of JavaScript sent to the client.", icon: Rocket },
            { title: "New Hooks: `useActionState`", description: "A hook to manage the state of form Actions, including pending and response states.", icon: Lightbulb },
            { title: "New Hooks: `useFormStatus`", description: "A hook that gives you status information (e.g., `pending`) of the last form submission.", icon: Lightbulb },
            { title: "New Hooks: `useOptimistic`", description: "Allows you to apply optimistic updates to the UI immediately, which are then reverted if the background action fails.", icon: Lightbulb },
            { title: "ref as a prop", description: "You can now pass `ref` as a regular prop to function components, removing the need for `forwardRef` in most cases.", icon: GitBranch },
        ],
    },
    {
        version: "React 18",
        date: "March 2022",
        features: [
            { title: "Concurrent Features", description: "The foundation for new features. Concurrency allows React to interrupt a long-running render to handle something more important.", icon: Zap },
            { title: "Automatic Batching", description: "React now automatically groups multiple state updates into a single re-render for better performance, even those inside promises or timeouts.", icon: Rocket },
            { title: "Transitions (`useTransition`)", description: "A new feature that lets you mark some state updates as non-urgent, preventing them from blocking user input.", icon: Lightbulb },
            { title: "Suspense for Data Fetching", description: "On the server, Suspense allows you to stream HTML and handle data loading states declaratively.", icon: Rocket },
        ],
    },
];

export default function ReactVersionUpdates() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Rss className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">React Version Updates</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    A summary of the latest and most impactful features in recent React versions.
                </p>
            </div>

            {updates.map((update) => (
                <Card key={update.version}>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                             <CardTitle className="text-3xl">{update.version}</CardTitle>
                             <Badge variant="outline">{update.date}</Badge>
                        </div>
                        <CardDescription>Key features introduced in this version.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {update.features.map((feature) => (
                             <div key={feature.title} className="bg-muted p-4 rounded-lg border">
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                                    <feature.icon className="w-5 h-5 text-primary"/>
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            ))}
            
            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <BookOpen className="w-5 h-5"/>
                        Where to Learn More
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">For the most detailed and up-to-date information, always refer to the official React documentation and blog.</p>
                    <a 
                        href="https://react.dev/blog" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary font-semibold underline mt-2 inline-block"
                    >
                        Official React Blog
                    </a>
                </CardContent>
            </Card>
        </div>
    );
}

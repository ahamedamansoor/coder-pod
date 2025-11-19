'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, ToyBrick, Goal, Puzzle, Globe, Zap, Code, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import React from 'react';

const corePrinciples = [
    {
        icon: Goal,
        title: "Declarative",
        description: "You tell React what you want the UI to look like based on the current state, and React handles the complex steps to update the actual DOM. You describe the 'what', not the 'how'.",
    },
    {
        icon: Puzzle,
        title: "Component-Based",
        description: "You build encapsulated components that manage their own state, then compose them to make complex UIs. This makes your code reusable and easy to reason about.",
    },
    {
        icon: Globe,
        title: "Learn Once, Write Anywhere",
        description: "React can also power mobile apps using React Native, allowing you to use the same core principles to build for different platforms.",
    },
];

const keyFeatures = [
    { icon: Code, name: "JSX" },
    { icon: Zap, name: "Virtual DOM" },
    { icon: ShieldCheck, name: "Unidirectional Data Flow" },
];

const codeExample = `// Declarative React Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// You just declare WHAT you want: a heading with a name.
// React handles HOW to create and update the DOM element.
ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('root')
);`;


export default function WhatIsReact({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>The LEGO® Analogy</CardTitle>
                    <CardDescription>
                        Think of building a user interface like building with LEGO bricks.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Instead of a messy pile of plastic, React gives you a box of well-organized, reusable bricks called **components**. Each component is a self-contained piece of UI (like a button, a search bar, or a user profile card). You can then assemble these bricks to build complex structures (your application). If you need another button, you just grab another "button" brick from your box!</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>React's Core Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    {corePrinciples.map(p => (
                        <div key={p.title} className="bg-muted p-6 rounded-lg border">
                            <div className="flex items-center gap-3 mb-3">
                                <p.icon className="w-6 h-6 text-primary" />
                                <h3 className="text-xl font-bold">{p.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{p.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Declarative Code</CardTitle>
                    <CardDescription>
                        This simple React component shows how you declare what the UI should look like.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{codeExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(codeExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary">Key Features at a Glance</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-4">
                    {keyFeatures.map(f => (
                        <div key={f.name} className="flex items-center gap-2 bg-background p-3 rounded-md border shadow-sm">
                            <f.icon className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{f.name}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}

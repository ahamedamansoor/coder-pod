
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clapperboard, Clock, Forward, Timer } from 'lucide-react';
import React from 'react';

interface CssTransitionsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssTransitions({ onOpenWebPlayground }: CssTransitionsProps) {

    const playgroundCode = {
        html: `<div class="box">Hover over me!</div>`,
        css: `body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(var(--background));
}

.box {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  
  /* --- Transition Properties --- */

  /* What property to animate */
  transition-property: transform, background-color, border-radius;
  
  /* How long the animation should take */
  transition-duration: 0.5s;
  
  /* The speed curve of the animation */
  transition-timing-function: ease-in-out;

  /* Optional delay before starting */
  transition-delay: 0s;
}

/* The state we are transitioning TO */
.box:hover {
  background-color: hsl(var(--destructive));
  transform: scale(1.2) rotate(15deg);
  border-radius: 50%;
}`,
        js: ''
    };
    
    const transitionProps = [
        { icon: Clapperboard, prop: 'transition-property', desc: 'The name of the CSS property to apply a transition to (e.g., `background-color`, `transform`).' },
        { icon: Clock, prop: 'transition-duration', desc: 'How long the transition should take to complete (e.g., `0.5s`, `300ms`).' },
        { icon: Forward, prop: 'transition-timing-function', desc: 'The speed curve of the transition (e.g., `ease`, `linear`, `ease-in-out`).' },
        { icon: Timer, prop: 'transition-delay', desc: 'An optional delay before the transition starts.' },
    ];
    
    const shorthandExample = `.box {
  transition: all 0.5s ease-in-out;
}`;


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Clapperboard className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Transitions</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating smooth animations when an element changes state.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Transitions?</CardTitle>
                    <CardDescription>
                       Transitions allow you to define the change from one CSS property value to another over a period of time, rather than having it happen instantly. This creates a smooth, animated effect. A common use case is animating a button's color change on hover.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The Four Transition Properties</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                    {transitionProps.map(p => (
                        <div key={p.prop} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>`{p.prop}`</h3>
                            <p className="text-sm text-muted-foreground">{p.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>The `transition` Shorthand</CardTitle>
                    <CardDescription>
                        It's much more common to use the shorthand `transition` property to set all these values in one line. The order is: `property duration timing-function delay`.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{shorthandExample}</pre>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground and hover over the box to see its color, size, and shape smoothly transition to their new state.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                        <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

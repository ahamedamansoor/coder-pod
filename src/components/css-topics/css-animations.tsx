
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Film, Repeat, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssAnimationsProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssAnimations({ onOpenWebPlayground }: CssAnimationsProps) {

    const keyframesExample = `@keyframes slidein {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}`;

    const animationPropertiesExample = `.box {
  animation-name: slidein;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}`;
    
    const shorthandExample = `.box {
  animation: slidein 3s ease-in-out 1s infinite alternate;
}`;

    const playgroundCode = {
        html: `<div class="box">Animating!</div>`,
        css: `body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: hsl(var(--background));
}

.box {
  width: 100px;
  height: 100px;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  
  /* Shorthand animation property */
  animation: my-animation 4s ease-in-out 1s infinite alternate;
}

/* Define the keyframes for the animation */
@keyframes my-animation {
  /* Start state */
  0% {
    transform: scale(1) rotate(0deg);
    background-color: hsl(var(--primary));
    border-radius: 8px;
  }
  
  /* Intermediate state */
  50% {
    transform: scale(1.5) rotate(180deg);
    background-color: hsl(var(--destructive));
    border-radius: 50%;
  }

  /* End state */
  100% {
    transform: scale(1) rotate(360deg);
    background-color: hsl(var(--primary));
    border-radius: 8px;
  }
}`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Film className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">CSS Animations</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating complex, multi-step animations with keyframes.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are CSS Animations?</CardTitle>
                    <CardDescription>
                       While transitions are great for simple changes from one state to another, animations allow you to create complex sequences with multiple steps. They give you fine-grained control over the animation process.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Animations consist of two main parts: the `@keyframes` rule that defines the animation steps, and the `animation` properties that apply those keyframes to an element.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Repeat className="text-primary"/>`@keyframes` Rule</CardTitle>
                    <CardDescription>
                        The `@keyframes` at-rule defines the stages of an animation. You can define styles for specific points in the animation using percentages (from 0% to 100%) or the keywords `from` (same as 0%) and `to` (same as 100%).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{keyframesExample}</pre>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Animation Properties</CardTitle>
                    <CardDescription>
                        Once you have your keyframes, you apply them to an element using `animation` properties.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                        <li>`animation-name`: The name of your `@keyframes` rule.</li>
                        <li>`animation-duration`: How long the animation takes.</li>
                        <li>`animation-timing-function`: The speed curve of the animation (e.g., `ease-in`, `linear`).</li>
                        <li>`animation-delay`: How long to wait before starting the animation.</li>
                        <li>`animation-iteration-count`: How many times to repeat (`infinite` for endless).</li>
                        <li>`animation-direction`: The direction of the animation (e.g., `normal`, `reverse`, `alternate`).</li>
                    </ul>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{animationPropertiesExample}</pre>
                    </div>
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Shorthand</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">It's common to use the shorthand `animation` property to set all these values in one line.</p>
                             <div className="bg-background rounded-md p-4">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{shorthandExample}</pre>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground to see a multi-step animation that changes an element's size, color, shape, and rotation.</CardDescription>
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

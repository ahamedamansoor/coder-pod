
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Smartphone, Tablet, Laptop, Tv, Scaling, Lightbulb } from 'lucide-react';
import React from 'react';

interface CssResponsiveDesignProps {
    onOpenWebPlayground: (html: string, css: string, js: string) => void;
}

export default function CssResponsiveDesign({ onOpenWebPlayground }: CssResponsiveDesignProps) {

    const playgroundCode = {
        html: `<div class="container">
  <h1>Responsive Design</h1>
  <p>Resize your browser window to see the layout change!</p>
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</div>`,
        css: `body {
  font-family: sans-serif;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: background-color 0.3s;
}

.container {
  padding: 1rem;
}

.box {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.5rem;
}

/* --- Media Queries --- */

/* Mobile First: Default styles are for small screens */
.container {
  display: block; /* Each box takes full width */
}

/* Tablet: For screens 600px and wider */
@media (min-width: 600px) {
  body {
    background-color: hsl(var(--secondary) / 0.2);
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .box1 {
    grid-column: 1 / 3; /* Box 1 spans both columns */
  }
}

/* Desktop: For screens 900px and wider */
@media (min-width: 900px) {
  body {
    background-color: hsl(var(--muted));
  }
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
  .box1 {
    grid-column: auto; /* Reset to default */
  }
}
`,
        js: ''
    };

    const coreConcepts = [
        { icon: Scaling, title: "Fluid Grids", desc: "Using relative units like percentages (%) or `fr` units instead of fixed units like pixels (`px`) to create layouts that stretch and shrink." },
        { icon: Scaling, title: "Flexible Images", desc: "Setting `max-width: 100%;` on images to ensure they scale down to fit their container without overflowing." },
        { icon: Scaling, title: "Media Queries", desc: "The magic of responsive design. They allow you to apply different CSS rules based on the device's characteristics, like its width, height, or orientation." },
    ];


    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Smartphone className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Responsive Web Design</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Making websites that look great on any device, from phones to desktops.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Responsive Design?</CardTitle>
                    <CardDescription>
                       Responsive Web Design (RWD) is an approach that makes your web pages render well on a variety of devices and window or screen sizes. Content, design, and performance are necessary across all devices to ensure usability and satisfaction.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-around items-center">
                    <Smartphone className="w-8 h-8 text-muted-foreground" />
                    <Tablet className="w-10 h-10 text-muted-foreground" />
                    <Laptop className="w-12 h-12 text-muted-foreground" />
                    <Tv className="w-16 h-16 text-muted-foreground" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The Three Core Concepts</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                    {coreConcepts.map(c => (
                         <div key={c.title} className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-bold flex items-center gap-2 mb-2"><c.icon className="w-5 h-5 text-primary"/>{c.title}</h3>
                            <p className="text-sm text-muted-foreground">{c.desc}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Media Queries</CardTitle>
                    <CardDescription>
                        A media query is used to apply a block of CSS properties only if a certain condition is true.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`@media (condition) {
  /* CSS rules to apply when the condition is met */
}`}</pre>
                    </div>
                     <p className="text-sm mt-4">The most common condition is based on viewport width:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                        <li>`min-width: 600px`: Applies styles when the viewport is **600px or wider**.</li>
                        <li>`max-width: 599px`: Applies styles when the viewport is **599px or narrower**.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Mobile-First Approach</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">It is a best practice to design for mobile devices first, and then scale up to larger screens. This means your default CSS should be for small screens, and you use `min-width` media queries to add complexity for tablets and desktops. This approach often leads to cleaner code and better performance on mobile.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>See It In Action</CardTitle>
                    <CardDescription>Open this example in the Web Playground. Make the "Preview" pane wider and narrower to see the background color and layout change at different breakpoints.</CardDescription>
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

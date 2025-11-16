
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UniversalAccess, Play, Building, Search, UserCheck, Eye, Pointer, Puzzle, Speaker } from 'lucide-react';
import React from 'react';

export default function Accessibility({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const principles = [
        { icon: Eye, title: "Perceivable", description: "Users must be able to perceive the information being presented—it can't be invisible to all of their senses." },
        { icon: Pointer, title: "Operable", description: "Users must be able to operate the interface. The interface cannot require interaction that a user cannot perform." },
        { icon: Puzzle, title: "Understandable", description: "Users must be able to understand the information as well as the operation of the user interface." },
        { icon: Speaker, title: "Robust", description: "Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies." },
    ];
    
    const playgroundCode = {
        html: `<h2>Forms: Before vs. After</h2>

<!-- BAD: Not Accessible -->
<h3>Inaccessible Form:</h3>
<div>
  Your Name:
  <input type="text">
  <button>Submit</button>
</div>

<hr>

<!-- GOOD: Accessible -->
<h3>Accessible Form:</h3>
<form>
  <label for="name-input">Your Name:</label>
  <input type="text" id="name-input" name="username">
  <button type="submit">Submit</button>
</form>

<hr>

<h2>Images: Before vs. After</h2>

<!-- BAD: No alt text -->
<h3>Inaccessible Image:</h3>
<img src="https://picsum.photos/seed/a11y/200/150" data-ai-hint="nature mountain">

<!-- GOOD: With descriptive alt text -->
<h3>Accessible Image:</h3>
<img src="https://picsum.photos/seed/a11y/200/150" alt="A majestic snow-capped mountain against a clear blue sky" data-ai-hint="nature mountain">`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
h3 { margin-top: 1rem; }
hr { margin: 2rem 0; border: none; border-top: 1px solid #eee; }
input { 
  margin-right: 5px; 
  padding: 5px;
}
button {
  padding: 5px 10px;
}
img { 
  border: 2px solid #ccc;
  border-radius: 4px;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <UniversalAccess className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Accessibility (a11y)</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Building websites that everyone can use, regardless of ability.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The "Digital Ramps" Analogy</CardTitle>
                <CardDescription>Just as a physical building needs ramps and elevators for people with mobility issues, a website needs to be built in a way that people using assistive technologies (like screen readers) can navigate and understand it.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-muted p-4 rounded-lg border text-center">
                        <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><Building className="w-5 h-5 text-primary"/>Inclusion</h3>
                        <p className="text-sm text-muted-foreground">It's the right thing to do, ensuring everyone has access to information.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border text-center">
                        <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><Search className="w-5 h-5 text-primary"/>Better SEO</h3>
                        <p className="text-sm text-muted-foreground">Accessible sites are easier for search engines to crawl and understand.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg border text-center">
                        <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-2"><UserCheck className="w-5 h-5 text-primary"/>Wider Audience</h3>
                        <p className="text-sm text-muted-foreground">You reach more users, including those with permanent or temporary disabilities.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The 4 Principles of Accessibility (POUR)</CardTitle>
                <CardDescription>These are the cornerstones of the Web Content Accessibility Guidelines (WCAG).</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {principles.map(p => (
                    <div key={p.title} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold flex items-center gap-2 mb-2"><p.icon className="w-5 h-5 text-primary"/>{p.title}</h3>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Practical HTML Accessibility Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>1. Use Semantic HTML:</strong> Always use tags for their meaning (`&lt;nav&gt;` for navigation, `&lt;button&gt;` for buttons), not just `&lt;div&gt;`s.</p>
                <p><strong>2. Provide `alt` Text for Images:</strong> Every `&lt;img&gt;` tag needs a descriptive `alt` attribute. If an image is purely decorative, use `alt=""`.</p>
                <p><strong>3. Use `&lt;label&gt;` for Form Inputs:</strong> Every form input (`&lt;input&gt;`, `&lt;textarea&gt;`, etc.) should have a corresponding `&lt;label&gt;` linked with the `for` and `id` attributes.</p>
                <p><strong>4. Ensure Logical Document Structure:</strong> Use headings (`&lt;h1&gt;`, `&lt;h2&gt;`, etc.) in a logical, hierarchical order. Don't skip levels.</p>
                <p><strong>5. Provide Keyboard Navigation:</strong> Ensure all interactive elements like links and buttons can be accessed and activated using the Tab key and Enter/Space keys.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to see the difference between an inaccessible and an accessible form and image.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary">Advanced: Introduction to ARIA</CardTitle>
                <CardDescription>ARIA (Accessible Rich Internet Applications) is a set of attributes you can add to HTML elements to make them more accessible, especially for complex UI components like modals, tabs, or custom dropdowns.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-2">ARIA doesn't change an element's behavior or appearance, it only provides extra information to assistive technologies.</p>
                <p><strong>Example:</strong> A `&lt;div&gt;` made to look like a button.</p>
                 <div className="bg-muted p-4 rounded-lg mt-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`<div role="button" tabindex="0">Click Me</div>`}</pre>
                </div>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>`role="button"` tells a screen reader, "Treat this element like a button."</li>
                    <li>`tabindex="0"` makes the `div` focusable with the keyboard.</li>
                </ul>
                 <p className="text-xs text-muted-foreground mt-4"><strong>Rule of thumb:</strong> Don't use ARIA if a native HTML element already provides the needed semantics. A real `&lt;button&gt;` is always better than a `&lt;div&gt;` with `role="button"`. Use ARIA to enhance, not to reinvent.</p>
            </CardContent>
        </Card>

      </div>
    );
}

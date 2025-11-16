
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCode, PersonStanding, BrainCircuit, Accessibility, Paintbrush, Link, Code, Play } from 'lucide-react';
import React from 'react';

export default function DocumentStructure({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const boilerplateCode = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Awesome Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is the visible part of my page.</p>
    <script src="script.js"></script>
  </body>
</html>`;

    const codeForPlayground = {
      html: `<h1>Welcome to My Page!</h1>
<p>This is the visible content of the page, structured by HTML.</p>
<button onclick="showAlert()">Click Me</button>`,
      css: `body {
  background-color: #f0f8ff;
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
}
h1 {
  color: #4a4a4a;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}`,
      js: `function showAlert() {
  alert("Hello from JavaScript! This alert is allowed because of the 'allow-modals' sandbox setting.");
}`
    };

    const headElements = [
        { icon: Code, tag: '<title>', description: 'Sets the title of the page, which appears in the browser tab.' },
        { icon: Accessibility, tag: '<meta>', description: 'Provides metadata like character set (`<meta charset="UTF-8">`) or viewport settings for mobile.' },
        { icon: Paintbrush, tag: '<link>', description: 'Used to link external resources, most commonly CSS stylesheets.' },
        { icon: Code, tag: '<script>', description: 'Used to embed or reference executable JavaScript code. Can be in head or body.' },
        { icon: Code, tag: '<style>', description: 'Used to write CSS code directly inside the HTML document.' },
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <FileCode className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Document Structure</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The essential boilerplate for every web page.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Human Body Analogy</CardTitle>
                <CardDescription>Think of an HTML document like a person. It helps to understand where everything goes.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                 <div className="p-6 rounded-lg border-2 border-green-500/20 bg-green-500/10 flex flex-col items-center text-center">
                    <PersonStanding className="w-10 h-10 mb-4 text-green-600" />
                    <h3 className="text-xl font-bold mb-2 text-green-700">&lt;html&gt;</h3>
                    <p className="text-sm text-muted-foreground">The whole person. This tag wraps everything.</p>
                </div>
                 <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-blue-500/10 flex flex-col items-center text-center">
                    <BrainCircuit className="w-10 h-10 mb-4 text-blue-600" />
                    <h3 className="text-xl font-bold mb-2 text-blue-700">&lt;head&gt;</h3>
                    <p className="text-sm text-muted-foreground">The brain. It contains important information (thoughts, settings) that isn't visibly displayed on the body itself.</p>
                </div>
                 <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-purple-500/10 flex flex-col items-center text-center">
                    <Accessibility className="w-10 h-10 mb-4 text-purple-600" />
                    <h3 className="text-xl font-bold mb-2 text-purple-700">&lt;body&gt;</h3>
                    <p className="text-sm text-muted-foreground">The visible body. This contains all the content that users see and interact with—text, images, buttons, etc.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Basic Boilerplate</CardTitle>
                <CardDescription>Every HTML page starts with this fundamental structure. The indentation shows how elements are "nested" inside each other.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{boilerplateCode}</pre>
                </div>
                 <div className="space-y-3 text-sm">
                    <p><code className="font-semibold bg-foreground/10 p-1 rounded">&lt;!DOCTYPE html&gt;</code>: This is the very first thing. It's a declaration telling the browser, "Hey, this is an HTML5 document."</p>
                    <p><code className="font-semibold bg-foreground/10 p-1 rounded">&lt;html&gt;</code>: The root element that contains all other elements.</p>
                    <p><code className="font-semibold bg-foreground/10 p-1 rounded">&lt;head&gt;</code>: The "brain" containing metadata. This content is not displayed on the page.</p>
                    <p><code className="font-semibold bg-foreground/10 p-1 rounded">&lt;body&gt;</code>: The "body" containing the visible content of the page.</p>
                </div>
                <div className="mt-6">
                    <Button onClick={() => onOpenWebPlayground(codeForPlayground.html, codeForPlayground.css, codeForPlayground.js)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Web Playground
                    </Button>
                </div>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle>What Goes in the &lt;head&gt;?</CardTitle>
                <CardDescription>Important setup information and links to external files.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                {headElements.map((el) => (
                    <div key={el.tag} className="flex items-start gap-3 bg-muted p-4 rounded-lg">
                        <el.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <code className="font-bold text-base">{el.tag}</code>
                            <p className="text-xs text-muted-foreground">{el.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    );
}

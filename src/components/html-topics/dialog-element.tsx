
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Play, Lightbulb, Check, Shield, Pointer } from 'lucide-react';
import React from 'react';

export default function DialogElement({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<!-- The button to open the dialog -->
<button id="showDialog">Show Dialog</button>

<!-- The dialog element, hidden by default -->
<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>This is a native HTML dialog. You can put any content here, like forms or text.</p>
  
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>`,
        css: `dialog {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* Style the backdrop that appears behind modal dialogs */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
}
`,
        js: `const showButton = document.getElementById('showDialog');
const myDialog = document.getElementById('myDialog');

// Show the dialog modally
showButton.addEventListener('click', () => {
  myDialog.showModal();
});

// The 'close' button inside the form with method="dialog"
// will automatically close the dialog without any JS.
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <MessageSquare className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">The Native &lt;dialog&gt; Element</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating accessible modal and non-modal dialogs with built-in browser functionality.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Why Use the Native &lt;dialog&gt;?</CardTitle>
                <CardDescription>For years, developers relied on JavaScript libraries and complex CSS to create dialog boxes (popups). The native `&lt;dialog&gt;` element simplifies this immensely.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-green-600"/>Built-in Accessibility</h3>
                    <p className="text-xs text-muted-foreground">It properly manages focus, ARIA attributes, and keyboard interactions (like closing with the Escape key) out of the box.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Simpler Code</h3>
                    <p className="text-xs text-muted-foreground">Less JavaScript is needed to manage its state. No need to toggle classes or manage focus manually.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Check className="w-5 h-5 text-green-600"/>Top Layer Rendering</h3>
                    <p className="text-xs text-muted-foreground">Modal dialogs render in a special "top layer", so you don't have to worry about CSS `z-index` issues.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Key JavaScript Methods</CardTitle>
                <CardDescription>You control the dialog's visibility with JavaScript.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2">
                    <li>`dialog.show()`: Opens the dialog as non-modal (user can still interact with the rest of the page).</li>
                    <li>`dialog.showModal()`: Opens the dialog as a modal, with a backdrop, disabling interaction with the rest of the page.</li>
                    <li>`dialog.close()`: Closes the dialog.</li>
                </ul>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Click the button to open the modal dialog. You can close it with the "Close" button or by pressing the Escape key.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Closing a Dialog without JavaScript</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">If you place a `&lt;button&gt;` inside a `&lt;form&gt;` element that has the attribute `method="dialog"`, clicking that button will automatically close the parent dialog without needing any JavaScript `close()` calls. This is a convenient, declarative way to handle simple close actions.</p>
            </CardContent>
        </Card>

      </div>
    );
}

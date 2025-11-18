'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Hand, Lightbulb, Check, Shield } from 'lucide-react';
import React from 'react';

export default function DragAndDropApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Drag and Drop Example</h2>
<p>Drag the box and drop it into the target area.</p>

<div id="drag-source" draggable="true">Drag Me</div>
<div id="drop-target">Drop Here</div>

<p id="drop-result"></p>`,
        css: `#drag-source {
  width: 100px;
  height: 100px;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  margin-bottom: 1rem;
  border-radius: 8px;
}
#drop-target {
  width: 200px;
  height: 150px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
}
#drop-target.drag-over {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.1);
  transform: scale(1.05);
}`,
        js: `const source = document.getElementById('drag-source');
const target = document.getElementById('drop-target');
const dropResult = document.getElementById('drop-result');

// 1. Fired when the user starts dragging the element
source.ondragstart = (event) => {
  // Set the data to be transferred
  event.dataTransfer.setData("text/plain", "This item was dragged");
  dropResult.textContent = ''; // Clear previous result
};

// 2. Fired when a dragged element is over the drop target
target.ondragover = (event) => {
  // By default, dropping is not allowed. We must prevent this default behavior.
  event.preventDefault(); 
  target.classList.add('drag-over');
};

// 3. Fired when the dragged element leaves the drop target
target.ondragleave = () => {
  target.classList.remove('drag-over');
};

// 4. Fired when the dragged element is dropped on the target
target.ondrop = (event) => {
  event.preventDefault();
  target.classList.remove('drag-over');
  const data = event.dataTransfer.getData("text/plain");
  dropResult.textContent = 'Success! Data received: "' + data + '"';
};`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Hand className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Drag and Drop API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Implementing native drag-and-drop functionality for elements.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>The Event-Based Model</CardTitle>
                <CardDescription>The Drag and Drop API isn't a single element but a series of events that you listen for on both the draggable element and the drop target.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Core Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>1. Make an element draggable:</strong> Add the `draggable="true"` attribute to any HTML element.</p>
                <p><strong>2. Handle the `dragstart` event:</strong> On the draggable element, listen for `ondragstart` to specify what data should be transferred.</p>
                <p><strong>3. Handle events on the drop target:</strong> The target needs event handlers for `ondragover` and `ondrop`.</p>
                <p><strong>4. Prevent default behavior:</strong> Crucially, you must call `event.preventDefault()` in the `ondragover` handler to signal that this element is a valid drop target.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. Drag the blue box and drop it onto the target area to see the events in action.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>

      </div>
    );
}

'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Play, Network, MapPin, Database, Hand, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';

export default function Html5Apis({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const playgroundCode = {
        html: `<h2>Geolocation API</h2>
<button id="getLocation">Find My Location</button>
<p id="locationResult"></p>

<hr>

<h2>Web Storage API</h2>
<input id="dataInput" placeholder="Enter data to save" />
<button id="saveData">Save to localStorage</button>
<button id="loadData">Load from localStorage</button>
<p>Saved data: <span id="storageResult"></span></p>

<hr>

<h2>Drag and Drop API</h2>
<div id="drag-source" draggable="true">Drag me</div>
<div id="drop-target">Drop here</div>
<p id="dropResult"></p>
`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
}
hr {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid #eee;
}
#drag-source {
  width: 100px;
  height: 100px;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  margin-bottom: 1rem;
}
#drop-target {
  width: 200px;
  height: 150px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}
#drop-target.drag-over {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.1);
}
`,
        js: `// Geolocation
const getLocationBtn = document.getElementById('getLocation');
const locationResult = document.getElementById('locationResult');
getLocationBtn.onclick = () => {
  if (navigator.geolocation) {
    locationResult.textContent = "Locating...";
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    locationResult.textContent = "Geolocation is not supported by this browser.";
  }
};
function showPosition(position) {
  locationResult.textContent = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
}
function showError(error) {
  locationResult.textContent = "Error: " + error.message;
}

// Web Storage
const dataInput = document.getElementById('dataInput');
const storageResult = document.getElementById('storageResult');
document.getElementById('saveData').onclick = () => {
  localStorage.setItem('myData', dataInput.value);
  storageResult.textContent = "Data saved!";
};
document.getElementById('loadData').onclick = () => {
  const savedData = localStorage.getItem('myData');
  storageResult.textContent = savedData || "No data found.";
};

// Drag and Drop
const source = document.getElementById('drag-source');
const target = document.getElementById('drop-target');
const dropResult = document.getElementById('dropResult');

source.ondragstart = (e) => {
  e.dataTransfer.setData("text", "Dragged item");
};
target.ondragover = (e) => {
  e.preventDefault();
  target.classList.add('drag-over');
};
target.ondragleave = () => {
    target.classList.remove('drag-over');
};
target.ondrop = (e) => {
  e.preventDefault();
  target.classList.remove('drag-over');
  dropResult.textContent = "Success! You dropped the item.";
};
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML5 APIs</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Powerful browser features you can use with JavaScript.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What's an API?</CardTitle>
                <CardDescription>An API (Application Programming Interface) is a set of tools and protocols for building software. In the context of HTML5, these are interfaces exposed by web browsers that allow your JavaScript code to interact with browser features that were previously off-limits, like the user's location or local file storage.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><MapPin className="w-6 h-6 text-primary" />Geolocation API</CardTitle>
                <CardDescription>Allows you to get the geographical position of a user. For privacy reasons, the user is asked for permission to report location information.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-4">The core method is <code className="font-mono bg-muted p-1 rounded">navigator.geolocation.getCurrentPosition()</code>, which takes a success callback function and an optional error callback.</p>
                 <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
}

function showPosition(position) {
  // position.coords.latitude
  // position.coords.longitude
}

function showError(error) {
  // handle errors
}`}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Database className="w-6 h-6 text-primary" />Web Storage API</CardTitle>
                <CardDescription>Provides mechanisms by which browsers can store key/value pairs, in a much more intuitive way than cookies.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>localStorage</TableHead>
                            <TableHead>sessionStorage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">Persistence</TableCell>
                            <TableCell>Persists even after the browser is closed and reopened. <CheckCircle2 className="inline w-4 h-4 text-green-500"/></TableCell>
                            <TableCell>Lasts only for the duration of the page session (until the tab is closed). <XCircle className="inline w-4 h-4 text-destructive"/></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-semibold">Methods</TableCell>
                            <TableCell colSpan={2} className="text-center">`setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Example Use Case</TableCell>
                            <TableCell>Storing user preferences (like theme) or a "remember me" login status.</TableCell>
                            <TableCell>Storing data in a multi-step form that you don't want to lose on a page refresh.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><Hand className="w-6 h-6 text-primary" />Drag and Drop API</CardTitle>
                <CardDescription>A powerful interface that lets you make almost any element on a page draggable and define drop zones for it.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-4">It involves a series of events and attributes:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Set the `draggable="true"` attribute on the element you want to drag.</li>
                    <li>Listen for the `dragstart` event on the source element to set data.</li>
                    <li>Listen for the `dragover` event on the target element and call `event.preventDefault()` to allow a drop.</li>
                    <li>Listen for the `drop` event on the target element to handle the dropped data.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See Them All In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground to interact with all three APIs. Note that Geolocation may require you to grant permission within the playground's iframe.</CardDescription>
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

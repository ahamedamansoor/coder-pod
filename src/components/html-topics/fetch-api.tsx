'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Network, Lightbulb, Check, Shield, FileJson } from 'lucide-react';
import React from 'react';

export default function FetchApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Fetch API Demo</h2>
<p>Click the button to fetch user data from a public API.</p>
<button id="fetchBtn">Fetch User Data</button>
<div id="output"></div>
`,
        css: `#output {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 4px;
  font-family: monospace;
  white-space: pre-wrap;
}`,
        js: `const fetchBtn = document.getElementById('fetchBtn');
const outputDiv = document.getElementById('output');

fetchBtn.addEventListener('click', () => {
  outputDiv.textContent = 'Fetching...';

  // The Fetch API returns a Promise.
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON from the response
      return response.json();
    })
    .then(data => {
      // Use the data
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      // Handle any errors
      outputDiv.textContent = 'Error: ' + error.message;
      console.error('There was a problem with the fetch operation:', error);
    });
});
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">The Fetch API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The modern, standard way to make network requests in the browser.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is the Fetch API?</CardTitle>
                <CardDescription>The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously across the network.</CardDescription>
            </CardHeader>
            <CardContent>
                 <p>It's the modern replacement for the older `XMLHttpRequest` (XHR) and is based on **Promises**, making asynchronous code much cleaner.</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>A simple `fetch()` call takes one argument—the path to the resource you want to fetch—and returns a Promise that resolves to the `Response` to that request.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse the JSON from the response
  .then(data => {
    console.log(data); // Use the data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });`}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. Click the button to fetch sample user data from the JSONPlaceholder API and display it.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><FileJson className="w-5 h-5"/>Handling the `Response`</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">The `Response` object you get back from `fetch` doesn't directly contain the JSON response body. It's a representation of the entire HTTP response. You need to call one of its methods to extract the body in the desired format, such as:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>`response.json()`: Parses the response body as JSON.</li>
                    <li>`response.text()`: Returns the response body as a string.</li>
                    <li>`response.blob()`: Returns the response body as a Blob (binary data).</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">These methods also return Promises, which is why you see the chained `.then()` calls.</p>
            </CardContent>
        </Card>

      </div>
    );
}

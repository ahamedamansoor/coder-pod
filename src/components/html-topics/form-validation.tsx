'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckSquare, Play, ShieldCheck } from 'lucide-react';
import React from 'react';

export default function FormValidation({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const validationAttributes = [
        { attr: 'required', desc: 'Specifies that an input field must be filled out before submitting.' },
        { attr: 'minlength / maxlength', desc: 'Specifies the minimum and maximum number of characters allowed in a text field.' },
        { attr: 'min / max', desc: 'Specifies the minimum and maximum values for an input of type `number` or `date`.' },
        { attr: 'type', desc: 'Specifies the type of data to be entered (e.g., `email`, `url`, `number`).' },
        { attr: 'pattern', desc: 'Specifies a regular expression that the input\'s value is checked against.' },
    ];

    const playgroundCode = {
        html: `<form>
  <div class="form-group">
    <label for="username">Username (required, 4-8 chars):</label>
    <input type="text" id="username" name="username" required minlength="4" maxlength="8">
  </div>
  
  <div class="form-group">
    <label for="email">Email (required):</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="age">Age (18-99):</label>
    <input type="number" id="age" name="age" min="18" max="99">
  </div>

  <div class="form-group">
    <label for="zip">Zip Code (5 digits):</label>
    <input type="text" id="zip" name="zip" pattern="[0-9]{5}" title="Five digit zip code">
  </div>
  
  <button type="submit">Submit</button>
</form>`,
        css: `form { font-family: sans-serif; max-width: 400px; margin: 2rem auto; }
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 0.25rem; }
input { 
    width: 100%; 
    padding: 8px; 
    box-sizing: border-box; 
    border: 1px solid #ccc;
    border-radius: 4px;
}
/* Style for invalid inputs */
input:invalid {
    border-color: red;
    box-shadow: 0 0 3px rgba(255,0,0,0.3);
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Form Validation</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Ensuring users enter correct and valid data before submitting a form.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Client-Side vs. Server-Side Validation</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold text-lg">Client-Side (In the Browser)</h3>
                    <p className="text-sm text-muted-foreground">Happens in the user's browser before the data is sent to the server. It's fast and provides immediate feedback. HTML5 validation is client-side.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold text-lg">Server-Side (On the Server)</h3>
                    <p className="text-sm text-muted-foreground">Happens on the server after data has been submitted. It's the final, secure line of defense, as client-side validation can be bypassed.</p>
                </div>
            </CardContent>
            <CardContent>
                <p className="text-center text-sm font-semibold">Important: Always use server-side validation. Use client-side validation as a "nice-to-have" to improve user experience.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>HTML5 Constraint Validation API</CardTitle>
                <CardDescription>HTML5 introduced several new attributes that allow you to perform validation declaratively, without any JavaScript.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Attribute</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {validationAttributes.map(attr => (
                            <TableRow key={attr.attr}>
                                <TableCell><code className="font-mono text-primary font-semibold">{attr.attr}</code></TableCell>
                                <TableCell>{attr.desc}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this example in the Web Playground. Try to submit the form with invalid data (e.g., an empty username, a short password) to see the browser's built-in error messages.</CardDescription>
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

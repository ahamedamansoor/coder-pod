
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, Play, FileText, Send, Key, Vote } from 'lucide-react';
import React from 'react';

export default function HtmlForms({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const formAnatomy = [
        { tag: '<form>', description: 'The container for the entire form.' },
        { tag: '<label>', description: 'A caption for an item in a user interface.' },
        { tag: '<input>', description: 'The most used form element, an input field where the user can enter data.' },
        { tag: '<textarea>', description: 'A multi-line text input control.' },
        { tag: '<button>', description: 'A clickable button, often used to submit the form.' },
        { tag: '<select>', description: 'A drop-down list.' },
        { tag: '<option>', description: 'An option in a drop-down list.' },
        { tag: '<fieldset>', description: 'Groups related elements in a form.' },
        { tag: '<legend>', description: 'A caption for the <fieldset> element.' },
    ];
    
    const formAttributes = [
        { attr: 'action', description: 'Specifies where to send the form-data when a form is submitted. Usually a URL on a server.' },
        { attr: 'method', description: 'Specifies the HTTP method to use when sending form-data. Can be "GET" or "POST".' },
        { attr: 'name', description: 'The name of the form, used to reference it with JavaScript.' },
        { attr: 'target', description: 'Specifies where to display the response after submitting the form (e.g., "_blank").' },
    ];

    const playgroundCode = {
        html: `<form action="/submit-form" method="post">
  <fieldset>
    <legend>Personal Information</legend>
    
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name">
    </div>
    
    <div>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email">
    </div>
  </fieldset>

  <fieldset>
    <legend>Your Message</legend>

    <div>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </div>
  </fieldset>
  
  <div class="button">
    <button type="submit">Submit your message</button>
  </div>
</form>`,
        css: `form {
  font-family: sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 500px;
  margin: 2rem auto;
  background-color: #f9f9f9;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

legend {
  font-weight: bold;
  color: hsl(var(--primary));
  padding: 0 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Important */
}

textarea {
  resize: vertical;
  min-height: 80px;
}

div {
  margin-bottom: 1rem;
}

button {
  background-color: hsl(var(--primary));
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <FileText className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Forms</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The primary way to collect user input on the web.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is a Form?</CardTitle>
                <CardDescription>An HTML form is a section of a document containing controls such as text fields, password fields, checkboxes, radio buttons, submit buttons, etc. It's like a digital questionnaire used to collect information from the user.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Core `<form>` Element</CardTitle>
                <CardDescription>Everything starts with the `<form>` tag, which acts as a container for all the input fields.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="bg-muted p-4 rounded-lg border mb-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Key className="w-5 h-5 text-primary"/>Key Attributes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {formAttributes.map(attr => (
                            <div key={attr.attr} className="bg-background p-3 rounded">
                                <code className="font-mono font-bold text-primary">{attr.attr}</code>
                                <p className="text-xs text-muted-foreground mt-1">{attr.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 text-center">
                    <p className="font-mono text-lg">`<form action="/server-url" method="POST">`</p>
                    <Send className="w-6 h-6 text-primary"/>
                    <p>User Data</p>
                    <Vote className="w-6 h-6 text-primary"/>
                    <p>Server</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Common Form Elements</CardTitle>
                <CardDescription>These are the building blocks you'll use inside your `<form>` tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formAnatomy.map(el => (
                        <div key={el.tag} className="bg-muted p-4 rounded-lg border">
                            <code className="font-mono font-bold text-primary">{el.tag}</code>
                            <p className="text-xs text-muted-foreground mt-1">{el.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>Open this full form example in the Web Playground. It combines `<fieldset>`, `<legend>`, `<label>`, `<input>`, and `<textarea>` for a well-structured form.</CardDescription>
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

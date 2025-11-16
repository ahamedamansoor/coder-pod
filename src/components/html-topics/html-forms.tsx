
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, Play, FileText, CheckSquare, List, Send, Group, Lightbulb } from 'lucide-react';
import React from 'react';

export default function HtmlForms({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    
    const formElements = [
        { icon: FormInput, tag: '<input>', description: 'The most versatile form element. Its behavior is defined by its `type` attribute (e.g., `text`, `password`, `checkbox`).' },
        { icon: FileText, tag: '<textarea>', description: 'Defines a multi-line text input field, perfect for messages or comments.' },
        { icon: List, tag: '<select> and <option>', description: 'Creates a dropdown list. Each `<option>` tag defines an available option.' },
        { icon: Send, tag: '<button>', description: 'A clickable button. Use `type="submit"` to make it submit the form data.' },
    ];
    
    const formAttributes = [
        { attribute: 'action', description: 'Specifies where to send the form-data when a form is submitted. This is usually a URL on a server.' },
        { attribute: 'method', description: 'Specifies the HTTP method to use when sending form-data. Can be "GET" or "POST".' },
    ];

    const inputAttributes = [
        { attribute: 'type', description: 'Defines the type of input control (e.g., `text`, `email`, `password`, `submit`).' },
        { attribute: 'name', description: 'Crucial for sending data. The `name` is sent to the server as the key for the input\'s value.' },
        { attribute: 'value', description: 'Specifies the initial value of an input field, or the value associated with radio/checkbox options.' },
        { attribute: 'placeholder', description: 'Provides a short hint that describes the expected value of an input field.' },
        { attribute: 'required', description: 'A boolean attribute specifying that an input field must be filled out before submitting the form.' },
    ];
    
    const playgroundCode = {
        html: `<form action="/submit-form" method="post">
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="fullName">Full Name:</label>
    <input type="text" id="fullName" name="fullName" placeholder="John Doe" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </fieldset>
  
  <fieldset>
    <legend>Your Message</legend>
    
    <label for="department">Department:</label>
    <select id="department" name="department">
      <option value="sales">Sales</option>
      <option value="support" selected>Support</option>
      <option value="billing">Billing</option>
    </select>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <label>
      <input type="checkbox" name="newsletter" value="subscribe" checked>
      Subscribe to our newsletter
    </label>
  </fieldset>
  
  <button type="submit">Send Message</button>
</form>`,
        css: `form {
  max-width: 500px;
  margin: 0 auto;
  font-family: sans-serif;
}
fieldset {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
legend {
  font-weight: bold;
  padding: 0 0.5rem;
  color: hsl(var(--primary));
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input[type="text"],
input[type="email"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Important! */
}
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: hsl(var(--primary));
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <FormInput className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Forms</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Collecting user input to make your web pages interactive.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is a Form?</CardTitle>
                <CardDescription>An HTML form is a section of a document containing controls such as text fields, password fields, checkboxes, etc. It's the primary way a website collects information from users.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Form Elements</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                {formElements.map((el) => (
                    <div key={el.tag} className="bg-muted p-4 rounded-lg border">
                        <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><el.icon className="w-5 h-5 text-primary"/>`{el.tag}`</h3>
                        <p className="text-sm text-muted-foreground">{el.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>The `<form>` Tag Attributes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {formAttributes.map(attr => (
                    <div key={attr.attribute} className="p-4 bg-muted border rounded-lg">
                        <code className="font-bold font-mono text-primary">{attr.attribute}</code>
                        <p className="text-sm text-muted-foreground mt-1">{attr.description}</p>
                    </div>
                ))}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold flex items-center gap-2"><Lightbulb className="w-4 h-4 text-primary"/>GET vs. POST</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                        <strong>GET:</strong> Appends form-data into the URL. Good for search forms, but never use for sensitive data.
                        <br />
                        <strong>POST:</strong> Sends form-data as an HTTP post transaction. More secure and has no size limitations. This is the standard for most forms.
                    </p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Essential `<input>` Attributes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {inputAttributes.map(attr => (
                    <div key={attr.attribute} className="p-4 bg-muted border rounded-lg">
                        <code className="font-bold font-mono text-primary">{attr.attribute}</code>
                        <p className="text-sm text-muted-foreground mt-1">{attr.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Group className="w-5 h-5 text-primary"/>Grouping Content: `<fieldset>` and `<legend>`</CardTitle>
                <CardDescription>These tags are used to group related elements in a form, which improves accessibility and organization. `<fieldset>` draws a box around the related elements, and `<legend>` defines a caption for the `<fieldset>`.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It All In Action</CardTitle>
                <CardDescription>This example combines all the concepts into a complete, styled contact form. Open it in the Web Playground to experiment.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Form in Playground
                </Button>
            </CardContent>
        </Card>
      </div>
    );
}

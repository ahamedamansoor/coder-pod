'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Settings, FileInput, Server, Send, Key, Vote, Shield, Check, ListFilter, Lightbulb, UserCheck, CalendarDays } from 'lucide-react';

export default function FormAttributes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
  
  const formAttributes = [
    { icon: Send, attr: 'action', desc: 'The URL of the server-side script that will process the form data.' },
    { icon: Key, attr: 'method', desc: 'The HTTP method to use. "GET" appends data to the URL (for searches), "POST" sends it in the request body (for sensitive data).' },
    { icon: Vote, attr: 'target', desc: 'Where to display the response (e.g., "_blank" for a new tab).' },
    { icon: FileInput, attr: 'enctype', desc: 'How the form-data should be encoded when submitting, especially important for file uploads (`multipart/form-data`).' },
    { icon: Shield, attr: 'novalidate', desc: 'A boolean attribute that prevents the browser from validating the form data upon submission.' },
  ];
  
  const inputAttributes = [
    { icon: Key, attr: 'name', desc: 'The name of the input, sent to the server along with the input\'s value.' },
    { icon: Key, attr: 'id', desc: 'A unique identifier for the input, used to associate it with a `<label>`.' },
    { icon: Key, attr: 'value', desc: 'The initial or current value of the input control.' },
    { icon: Lightbulb, attr: 'placeholder', desc: 'A hint to the user of what can be entered in the control.' },
    { icon: Check, attr: 'required', desc: 'Specifies that the user must fill in a value before submitting.' },
    { icon: Check, attr: 'disabled', desc: 'Specifies that an input field should be unusable and un-clickable.' },
    { icon: Check, attr: 'readonly', desc: 'Specifies that an input field cannot be changed by the user.' },
    { icon: UserCheck, attr: 'autofocus', desc: 'Specifies that an input field should automatically get focus when the page loads.' },
    { icon: ListFilter, attr: 'pattern', desc: 'A regular expression that the input\'s value is checked against.' },
    { icon: CalendarDays, attr: 'min / max', desc: 'The minimum and maximum value for an input element (for `number`, `range`, `date` types).' },
  ];

  const playgroundCode = `
<form action="#" method="get" style="max-width: 600px; margin: auto; font-family: sans-serif;">
  <fieldset>
    <legend>Login Form</legend>
    
    <p>
      <label for="username">Username:</label><br>
      <input 
        type="text" 
        id="username" 
        name="username" 
        required 
        placeholder="Enter your username"
        minlength="4"
        autofocus>
    </p>
    
    <p>
      <label for="password">Password:</label><br>
      <input 
        type="password" 
        id="password" 
        name="password" 
        required
        pattern=".{8,}"
        title="Password must be at least 8 characters long.">
    </p>
    
    <p>
      <label for="age">Age:</label><br>
      <input 
        type="number" 
        id="age" 
        name="age" 
        min="18" 
        max="120"
        value="25">
    </p>

    <p>
      <label for="profile">Profile (Read-only):</label><br>
      <input 
        type="text" 
        id="profile" 
        name="profile" 
        value="user_profile_123"
        readonly>
    </p>
    
    <p>
      <label for="legacy">Legacy ID (Disabled):</label><br>
      <input 
        type="text" 
        id="legacy" 
        name="legacy" 
        value="old-id-001"
        disabled>
    </p>
    
  </fieldset>
  
  <div style="margin-top: 1rem;">
    <input type="submit" value="Submit">
  </div>
</form>
  `;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Settings className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Form Attributes</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Configuring the behavior and validation of your HTML forms.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attributes for the `<form>` Element</CardTitle>
          <CardDescription>These attributes control how the entire form behaves and where its data is sent.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formAttributes.map(attr => (
            <div key={attr.attr} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-bold flex items-center gap-2 mb-1"><attr.icon className="w-5 h-5 text-primary" />{attr.attr}</h3>
              <p className="text-sm text-muted-foreground">{attr.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attributes for `<input>` Elements</CardTitle>
          <CardDescription>These attributes define the behavior, validation, and appearance of individual form controls.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inputAttributes.map(attr => (
            <div key={attr.attr} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-bold flex items-center gap-2 mb-1"><attr.icon className="w-5 h-5 text-primary" />{attr.attr}</h3>
              <p className="text-sm text-muted-foreground">{attr.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>See It In Action</CardTitle>
          <CardDescription>
            Open this example in the Web Playground. Try submitting with an empty username (which is `required`) or a short password to see browser validation work.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onOpenWebPlayground(playgroundCode, 'form {font-family: sans-serif; line-height: 1.6;} fieldset { margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc; padding: 1rem;} legend {font-weight: bold;} label {display: block; margin-bottom: 4px;} input {padding: 8px; width: 95%; border-radius: 4px; border: 1px solid #ccc;} input:read-only {background-color: #eee;} input:disabled {background-color: #f9f9f9; cursor: not-allowed;}', '')}>
            <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}

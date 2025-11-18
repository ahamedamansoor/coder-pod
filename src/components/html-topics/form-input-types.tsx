'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FormInput,
  Play,
  FileText,
  Key,
  Mail,
  Phone,
  Link,
  Search,
  CheckCircle,
  Circle,
  Calendar,
  Clock,
  Hash,
  Sliders,
  Upload,
  Palette,
  Send,
  RotateCcw,
  EyeOff,
  Settings,
  Lightbulb,
} from 'lucide-react';

export default function FormInputTypes({
  onOpenWebPlayground,
}: {
  onOpenWebPlayground: (html: string, css: string, js: string) => void;
}) {
  const commonInputTypes = [
    {
      icon: FileText,
      type: 'text',
      desc: 'The default value. A single-line text field.',
    },
    { icon: Key, type: 'password', desc: 'A single-line text field whose value is obscured.' },
    { icon: Mail, type: 'email', desc: 'For email addresses. May trigger a special keyboard on mobile.' },
    { icon: Phone, type: 'tel', desc: 'For telephone numbers.' },
    { icon: Link, type: 'url', desc: 'For URLs.' },
    { icon: Search, type: 'search', desc: 'For search fields.' },
  ];

  const choiceInputTypes = [
    {
      icon: Circle,
      type: 'radio',
      desc: 'Allows a user to select only one of a limited number of choices. Radios with the same `name` attribute are in the same group.',
    },
    {
      icon: CheckCircle,
      type: 'checkbox',
      desc: 'Allows a user to select one or more options from a set.',
    },
  ];
  
  const dateTimeInputTypes = [
    { icon: Calendar, type: 'date', desc: 'A control for specifying a date.' },
    { icon: Clock, type: 'time', desc: 'A control for specifying a time.' },
    { icon: Calendar, type: 'datetime-local', desc: 'A control for specifying a date and time, with no time zone.' },
    { icon: Calendar, type: 'month', desc: 'A control for specifying a month and year.' },
    { icon: Calendar, type: 'week', desc: 'A control for specifying a week and year.' },
  ];
  
  const numericInputTypes = [
      { icon: Hash, type: 'number', desc: 'For numerical input. Can be constrained with `min`, `max`, and `step` attributes.' },
      { icon: Sliders, type: 'range', desc: 'A slider control for selecting a value within a range (`min` and `max`).' },
  ];

  const actionInputTypes = [
    { icon: Send, type: 'submit', desc: 'A button that submits the form data to the server.' },
    { icon: RotateCcw, type: 'reset', desc: 'A button that resets all form controls to their initial values.' },
    { icon: FormInput, type: 'button', desc: 'A generic button with no default behavior, often used with JavaScript.' },
  ];
  
  const otherInputTypes = [
    { icon: Upload, type: 'file', desc: 'Allows the user to select one or more files from their device storage.' },
    { icon: Palette, type: 'color', desc: 'A control for specifying a color.' },
    { icon: EyeOff, type: 'hidden', desc: 'An input field that is not visible to the user, used to send data that the user should not see or modify.' },
  ];

  const commonAttributes = [
      { attr: 'name', desc: 'The name of the input, sent to the server with the input\'s value on submission.' },
      { attr: 'value', desc: 'The initial value of the control.' },
      { attr: 'placeholder', desc: 'A hint to the user of what can be entered in the control.' },
      { attr: 'required', desc: 'Specifies that the user must fill in a value before submitting the form.' },
      { attr: 'disabled', desc: 'Specifies that an input field should be disabled (un-clickable and unusable).' },
      { attr: 'readonly', desc: 'Specifies that an input field is read-only (cannot be changed by the user).' },
      { attr: 'id', desc: 'A unique identifier, used to associate a `<label>` with the input.' },
  ];
  
  const numericAttributes = [
      { attr: 'min', desc: 'The minimum allowed value.' },
      { attr: 'max', desc: 'The maximum allowed value.' },
      { attr: 'step', desc: 'The legal number intervals for the input.' },
  ];
  
  const textPatternAttributes = [
      { attr: 'minlength', desc: 'Minimum number of characters required.' },
      { attr: 'maxlength', desc: 'Maximum number of characters allowed.' },
      { attr: 'pattern', desc: 'A regular expression the input\'s value is checked against on form submission.' },
  ];

  const playgroundCode = `
    <form action="#" method="get" style="max-width: 600px; margin: auto;">
      <fieldset>
        <legend>Text & Choice Inputs</legend>
        
        <p>
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" required placeholder="John Doe">
        </p>
        
        <p>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required placeholder="you@example.com">
        </p>

        <p>Are you a developer?<br>
          <input type="radio" id="dev_yes" name="is_developer" value="yes">
          <label for="dev_yes">Yes</label>
          <input type="radio" id="dev_no" name="is_developer" value="no" checked>
          <label for="dev_no">No</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>Numeric & Date Inputs</legend>
        <p>
          <label for="experience">Years of Experience (0-50):</label><br>
          <input type="number" id="experience" name="experience" min="0" max="50" step="1" value="5">
        </p>
        
        <p>
          <label for="satisfaction">Satisfaction (1-10):</label><br>
          <input type="range" id="satisfaction" name="satisfaction" min="1" max="10" value="8">
        </p>
        
        <p>
          <label for="start_date">Project Start Date:</label><br>
          <input type="date" id="start_date" name="start_date">
        </p>
      </fieldset>
      
      <div style="margin-top: 1rem;">
        <input type="submit" value="Submit Info">
        <input type="reset" value="Reset Form">
      </div>
    </form>
  `;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <FormInput className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Form Input Types</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Exploring the versatile `<input />` element.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Common Text-Based Inputs</CardTitle>
          <CardDescription>Inputs for collecting various kinds of text from the user.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonInputTypes.map(input => (
            <div key={input.type} className="bg-muted p-4 rounded-lg border">
              <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
              <p className="text-sm text-muted-foreground">{input.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Choice Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {choiceInputTypes.map(input => (
                <div key={input.type} className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
                  <p className="text-sm text-muted-foreground">{input.desc}</p>
                </div>
              ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Date &amp; Time Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {dateTimeInputTypes.map(input => (
                <div key={input.type} className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
                  <p className="text-sm text-muted-foreground">{input.desc}</p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <Card>
          <CardHeader>
            <CardTitle>Numeric Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {numericInputTypes.map(input => (
                <div key={input.type} className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
                  <p className="text-sm text-muted-foreground">{input.desc}</p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Button &amp; Action Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {actionInputTypes.map(input => (
                <div key={input.type} className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
                  <p className="text-sm text-muted-foreground">{input.desc}</p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Other Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {otherInputTypes.map(input => (
                <div key={input.type} className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-bold flex items-center gap-2 mb-1"><input.icon className="w-5 h-5 text-primary" />{input.type}</h3>
                  <p className="text-sm text-muted-foreground">{input.desc}</p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
      
       <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Settings className="w-5 h-5" />Important Attributes</CardTitle>
                <CardDescription>These attributes customize the behavior of your input fields.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Common to All</h3>
                    {commonAttributes.map(attr => (
                        <p key={attr.attr} className="text-sm mb-1"><code className="font-mono bg-background p-1 rounded font-semibold">{attr.attr}</code>: {attr.desc}</p>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-2">For Numeric Types</h3>
                    {numericAttributes.map(attr => (
                        <p key={attr.attr} className="text-sm mb-1"><code className="font-mono bg-background p-1 rounded font-semibold">{attr.attr}</code>: {attr.desc}</p>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-2">For Text-like Types</h3>
                    {textPatternAttributes.map(attr => (
                        <p key={attr.attr} className="text-sm mb-1"><code className="font-mono bg-background p-1 rounded font-semibold">{attr.attr}</code>: {attr.desc}</p>
                    ))}
                </div>
            </CardContent>
        </Card>

      <Card>
        <CardHeader>
          <CardTitle>See It In Action</CardTitle>
          <CardDescription>
            Open this full example in the Web Playground to interact with a form that uses many of these input types and attributes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onOpenWebPlayground(playgroundCode, 'form {font-family: sans-serif;} fieldset {margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc; padding: 1rem;} legend {font-weight: bold;}', '')}>
            <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}

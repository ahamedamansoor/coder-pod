
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, Play, Type, CheckSquare, Calendar, Hash, Palette, Upload, MousePointerClick } from 'lucide-react';
import React from 'react';

export default function FormInputTypes({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const inputTypes = [
        {
            category: "Text Inputs",
            icon: Type,
            types: [
                { name: "text", desc: "A single-line text field." },
                { name: "password", desc: "A single-line text field whose value is obscured." },
                { name: "email", desc: "A field for an email address. May trigger a special keyboard on mobile." },
                { name: "search", desc: "A text field for search terms. May include a clear button." },
                { name: "tel", desc: "A field for a telephone number. May trigger a numeric keypad on mobile." },
                { name: "url", desc: "A field for a URL. May include validation." },
            ]
        },
        {
            category: "Choice Inputs",
            icon: CheckSquare,
            types: [
                { name: "radio", desc: "A radio button, allowing a single value to be selected from a group of choices with the same `name`." },
                { name: "checkbox", desc: "A check box which allows single values to be selected/deselected." },
            ]
        },
        {
            category: "Date & Time Inputs",
            icon: Calendar,
            types: [
                { name: "date", desc: "A control for entering a date (year, month, and day, with no time)." },
                { name: "time", desc: "A control for entering a time value with no time zone." },
                { name: "datetime-local", desc: "A control for entering a date and time, with no time zone." },
                { name: "month", desc: "A control for entering a month and year, with no time zone." },
                { name: "week", desc: "A control for entering a date consisting of a week-year number and a week number." },
            ]
        },
        {
            category: "Numeric Inputs",
            icon: Hash,
            types: [
                { name: "number", desc: "A control for entering a number. Includes built-in validation and stepper arrows." },
                { name: "range", desc: "A control for entering a number whose exact value is not important. Displays as a slider." },
            ]
        },
        {
            category: "Specialized Inputs",
            icon: Palette,
            types: [
                { name: "color", desc: "A control for specifying a color. Opens the system's color picker." },
                { name: "file", desc: "A control that lets the user choose one or more files from their device storage." },
            ]
        },
        {
            category: "Button Inputs",
            icon: MousePointerClick,
            types: [
                { name: "submit", desc: "A button that submits the form." },
                { name: "reset", desc: "A button that resets all form controls to their initial values." },
                { name: "button", desc: "A generic button with no default behavior, typically used with JavaScript." },
            ]
        }
    ];

    const playgroundCode = {
        html: `<form action="#" method="get">
  <fieldset>
    <legend>Text Inputs</legend>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="e.g., johndoe" required>
    <br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <fieldset>
    <legend>Choice Inputs</legend>
    <p>Favorite Language:</p>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
    <br><br>
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Subscribe to newsletter</label>
  </fieldset>
  
  <fieldset>
    <legend>Date, Time, and Numeric Inputs</legend>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    <br><br>
    <label for="appt-time">Appointment Time:</label>
    <input type="time" id="appt-time" name="appt-time">
    <br><br>
    <label for="quantity">Quantity (1-5):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5">
    <br><br>
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="11">
  </fieldset>

  <fieldset>
    <legend>Specialized Inputs</legend>
    <label for="favcolor">Favorite Color:</label>
    <input type="color" id="favcolor" name="favcolor" value="#ff0000">
    <br><br>
    <label for="id_proof">Upload ID:</label>
    <input type="file" id="id_proof" name="id_proof">
  </fieldset>
  
  <br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>`,
        css: `body {
  font-family: sans-serif;
  background-color: #f4f4f9;
}
form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
legend {
  font-weight: bold;
  padding: 0 0.5rem;
  color: hsl(var(--primary));
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input[type="text"],
input[type="password"],
input[type="email"],
input[type="date"],
input[type="time"],
input[type="number"] {
  width: calc(100% - 16px);
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
input[type="submit"],
input[type="reset"] {
  padding: 10px 20px;
  border: none;
  background-color: hsl(var(--primary));
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
input[type="reset"] {
  background-color: #6c757d;
}
`,
        js: ''
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FormInput className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Form Input Types</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Exploring the many "faces" of the versatile `<input>` element.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Power of the `type` Attribute</CardTitle>
                    <CardDescription>
                        The `<input>` tag is a chameleon. By simply changing its `type` attribute, you can create a wide variety of form controls, from simple text boxes to complex color pickers. The browser handles the UI and basic validation for you.
                    </CardDescription>
                </CardHeader>
            </Card>

            {inputTypes.map(group => (
                <Card key={group.category}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><group.icon className="w-6 h-6 text-primary"/>{group.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        {group.types.map(type => (
                             <div key={type.name} className="bg-muted p-4 rounded-lg border">
                                <code className="font-mono text-primary font-semibold">type="{type.name}"</code>
                                <p className="text-sm text-muted-foreground mt-1">{type.desc}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            ))}

            <Card>
                <CardHeader>
                    <CardTitle>The "Kitchen Sink" Playground</CardTitle>
                    <CardDescription>This interactive example includes most of the input types discussed. Open it in the Web Playground to see how they all look and behave in a real browser environment.</CardDescription>
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

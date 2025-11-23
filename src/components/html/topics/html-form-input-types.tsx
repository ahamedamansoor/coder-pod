'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, FileText, Key, Mail, Phone, Link, Search, Circle, CheckCircle, Calendar, Clock, Hash, Sliders, Send, RotateCcw, Upload, Palette, EyeOff, Settings, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface HtmlFormInputTypesProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

// Playground form sample
const playgroundHTML = `<form action="#" method="get" style="max-width: 600px; margin: auto; font-family: system-ui;">
  <fieldset>
    <legend>Text & Choice Inputs</legend>
    <p><label for="name">Name:</label><br><input type="text" id="name" name="name" required placeholder="John Doe"></p>
    <p><label for="email">Email:</label><br><input type="email" id="email" name="email" required placeholder="you@example.com"></p>
    <p>Developer?<br>
      <input type="radio" id="dev_yes" name="is_developer" value="yes"> <label for="dev_yes">Yes</label>
      <input type="radio" id="dev_no" name="is_developer" value="no" checked> <label for="dev_no">No</label>
    </p>
  </fieldset>
  <fieldset>
    <legend>Numbers & Dates</legend>
    <p><label for="experience">Experience (0-50):</label><br><input type="number" id="experience" name="experience" min="0" max="50" step="1" value="5"></p>
    <p><label for="satisfaction">Satisfaction (1-10):</label><br><input type="range" id="satisfaction" name="satisfaction" min="1" max="10" value="8"></p>
    <p><label for="start_date">Start Date:</label><br><input type="date" id="start_date" name="start_date"></p>
  </fieldset>
  <div style="margin-top:1rem;"><input type="submit" value="Submit Info"> <input type="reset" value="Reset"></div>
</form>`;
const playgroundCSS = `fieldset { margin-bottom:1rem; border:1px solid #ccc; border-radius:6px; padding:1rem; }
legend { font-weight:600; }
input, select { padding:8px; margin-top:4px; width:100%; box-sizing:border-box; }
input[type=radio] { width:auto; }`;

export default function HtmlFormInputTypes({ onOpenWebPlayground }: HtmlFormInputTypesProps) {
  const common = [
    { icon: FileText, type: 'text', desc: 'Single-line text.' },
    { icon: Key, type: 'password', desc: 'Obscured entry.' },
    { icon: Mail, type: 'email', desc: 'Email pattern + mobile keyboard.' },
    { icon: Phone, type: 'tel', desc: 'Telephone numbers.' },
    { icon: Link, type: 'url', desc: 'Valid URL format.' },
    { icon: Search, type: 'search', desc: 'Search field semantics.' },
  ];
  const choice = [
    { icon: Circle, type: 'radio', desc: 'Exclusive selection within same name group.' },
    { icon: CheckCircle, type: 'checkbox', desc: 'Multiple independent selections.' },
  ];
  const datetime = [
    { icon: Calendar, type: 'date', desc: 'Date selector.' },
    { icon: Clock, type: 'time', desc: 'Time input.' },
    { icon: Calendar, type: 'datetime-local', desc: 'Local date & time.' },
    { icon: Calendar, type: 'month', desc: 'Month/year.' },
    { icon: Calendar, type: 'week', desc: 'Week-based.' },
  ];
  const numeric = [
    { icon: Hash, type: 'number', desc: 'Numerical entry.' },
    { icon: Sliders, type: 'range', desc: 'Slider control.' },
  ];
  const action = [
    { icon: Send, type: 'submit', desc: 'Submit form.' },
    { icon: RotateCcw, type: 'reset', desc: 'Reset form values.' },
    { icon: FormInput, type: 'button', desc: 'Custom scripted button.' },
  ];
  const misc = [
    { icon: Upload, type: 'file', desc: 'File picker.' },
    { icon: Palette, type: 'color', desc: 'Color chooser.' },
    { icon: EyeOff, type: 'hidden', desc: 'Hidden value transport.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader icon={File} category="HTML Basics" title="Form Input Types" description="Exploring the versatile <input> element" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Text-Based Inputs</CardTitle><CardDescription>Collect free‑form user text with contextual keyboards.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {common.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card><CardHeader><CardTitle>Choice Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{choice.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Date & Time</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{datetime.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card><CardHeader><CardTitle>Numeric Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{numeric.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Action Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{action.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Miscellaneous</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{misc.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
      </div>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Attribute Highlights</CardTitle><CardDescription>Essential modifiers for behavior & validation.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-xs">
          <div>
            <h4 className="font-semibold mb-1">Common</h4>
            {['name','value','placeholder','required','disabled','readonly','id'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-1">Numeric</h4>
            {['min','max','step'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-1">Text Patterns</h4>
            {['minlength','maxlength','pattern'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Playground</CardTitle><CardDescription>Interact with multiple types simultaneously.</CardDescription></CardHeader>
        <CardContent><Button onClick={() => onOpenWebPlayground?.(playgroundHTML, playgroundCSS, '')}><Play className="mr-2 h-4 w-4" /> Open Example</Button></CardContent>
      </Card>
    </div>
  );
}


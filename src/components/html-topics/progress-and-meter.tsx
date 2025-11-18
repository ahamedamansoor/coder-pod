'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Battery, Sliders, Lightbulb, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

export default function ProgressAndMeter({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Progress Bar: File Upload</h2>
<label for="file">Uploading progress:</label>
<progress id="file" value="70" max="100"> 70% </progress>

<h2 style="margin-top:2rem;">Meter: Disk Usage</h2>
<label for="disk_c">Disk C Usage:</label>
<meter id="disk_c" min="0" max="100" low="40" high="80" optimum="20" value="35">at 35%</meter>

<label for="disk_d">Disk D Usage:</label>
<meter id="disk_d" min="0" max="100" low="40" high="80" optimum="20" value="85">at 85%</meter>
`,
        css: `body { 
  font-family: sans-serif;
  padding: 1rem;
}
label {
    display: block;
    margin: 1rem 0 0.5rem 0;
}
progress, meter {
    width: 100%;
    height: 25px;
}`,
        js: ``
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Sliders className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Progress &amp; Meter Elements</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Semantically displaying progress bars and scalar measurements.</p>
        </div>

        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>The Core Difference</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/>Use `&lt;progress&gt;` for...</h3>
                    <p className="text-sm text-muted-foreground">The completion of a task that is in progress. Think of a download bar, file transfer, or the steps in a setup wizard.</p>
                </div>
                <div className="bg-background border p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/>Use `&lt;meter&gt;` for...</h3>
                    <p className="text-sm text-muted-foreground">A scalar measurement within a known range, or a fractional value. Think of disk usage, battery level, or a "password strength" indicator.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sliders className="text-primary"/>The `&lt;progress&gt;` Element</CardTitle>
                <CardDescription>Represents the completion progress of a task.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">It has two main attributes:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                    <li>`value`: The current progress. Must be between 0 and `max`.</li>
                    <li>`max`: The maximum value, indicating the task is complete. Defaults to 1.</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                    <label htmlFor="file-upload">Uploading: 70%</label>
                    <progress id="file-upload" value="70" max="100" className="w-full"> 70% </progress>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Battery className="text-primary"/>The `&lt;meter&gt;` Element</CardTitle>
                <CardDescription>Represents a scalar measurement within a known range.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">It has more complex attributes to define ranges:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                    <li>`value`: The current measured value.</li>
                    <li>`min` / `max`: The lower and upper bounds of the range. Defaults are 0 and 1.</li>
                    <li>`low` / `high`: Defines the boundaries for the "low" and "high" parts of the range.</li>
                    <li>`optimum`: Indicates the optimal numeric value. The browser may color the meter bar differently depending on whether the `value` is near the optimum.</li>
                </ul>
                 <div className="bg-muted p-4 rounded-lg space-y-4">
                    <div>
                        <label htmlFor="disk-low">Low Usage (Good):</label>
                        <meter id="disk-low" min="0" max="100" low="40" high="80" optimum="20" value="25" className="w-full">at 25/100</meter>
                    </div>
                     <div>
                        <label htmlFor="disk-med">Medium Usage (Okay):</label>
                        <meter id="disk-med" min="0" max="100" low="40" high="80" optimum="20" value="60" className="w-full">at 60/100</meter>
                    </div>
                    <div>
                        <label htmlFor="disk-high">High Usage (Warning):</label>
                        <meter id="disk-high" min="0" max="100" low="40" high="80" optimum="20" value="90" className="w-full">at 90/100</meter>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Note: The styling of the meter element (green, yellow, red) is browser-dependent but can be customized with CSS pseudo-classes like `:moz-meter-bar`.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground to see both elements rendered by the browser.
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

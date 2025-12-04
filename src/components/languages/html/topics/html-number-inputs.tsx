'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FormInput, Zap, Code } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlNumberInputsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const numberPlayground = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Number Inputs</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .number-pane { background: white; max-width: 520px; margin: 0 auto; padding: 2rem; border-radius: 1rem; box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15); display: grid; gap: 1rem; }
    @media (prefers-color-scheme: dark) { .number-pane { background: #1e293b; box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); } }
    .number-pane label { font-weight: 600; color: #1e293b; }
    @media (prefers-color-scheme: dark) { .number-pane label { color: #f1f5f9; } }
    .number-pane input { width: 100%; padding: 0.85rem 0.9rem; border-radius: 0.75rem; border: 2px solid #cbd5e1; font-size: 1rem; background: #f8fafc; color: #1e293b; }
    @media (prefers-color-scheme: dark) { .number-pane input { background: #0f172a; color: #f1f5f9; border-color: #475569; } }
    .number-pane input[type="range"] { padding: 0; accent-color: #4f46e5; cursor: pointer; }
    @media (prefers-color-scheme: dark) { .number-pane input[type="range"] { accent-color: #6366f1; } }
    .number-pane input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    @media (prefers-color-scheme: dark) { .number-pane input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2); } }
    .number-pane input:disabled { opacity: 0.6; cursor: not-allowed; }
  </style>
</head>
<body>
  <form class="number-pane">
    <label for="quantity">Quantity (0-100):</label>
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="5" value="50" />

    <label for="range">Range slider</label>
    <input type="range" id="range" name="range" min="0" max="100" value="75" />

    <label>Disabled number control</label>
    <input type="number" disabled value="42" />
  </form>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlNumberInputs({ onOpenWebPlayground }: HtmlNumberInputsProps) {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        icon={FormInput}
        category="HTML · Forms"
        title="Number Inputs"
        description="Control numerical data with type=&quot;number&quot; and range sliders, including min/max, steps, and disabled/readonly states."
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Number input anatomy
          </CardTitle>
          <CardDescription className="text-base">
            Use attributes such as <code className="bg-slate-100 px-1 rounded">min</code>, <code className="bg-slate-100 px-1 rounded">max</code>, and <code className="bg-slate-100 px-1 rounded">step</code> to control the allowed range.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Min / Max', copy: 'Define the numeric boundaries to prevent invalid entries.' },
            { title: 'Step', copy: 'Control the increment/decrement value and enable spinner snapping.' },
            { title: 'Range', copy: 'Use a slider (<code>range</code>) for visual tweens.' },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
              <Badge className="bg-blue-100 text-blue-700 mb-2">{item.title}</Badge>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.copy}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="mb-0 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Live Number Input Examples
          </CardTitle>
          <CardDescription className="text-base">
            Try typing numbers, dragging the slider, and previewing disabled/readonly states.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Number + Range Inputs"
            description="Mix number inputs with spinner controls and a range slider."
            html={numberPlayground.html}
            css={numberPlayground.css}
            js={numberPlayground.js}
            colorTheme="blue"
            previewHeight="520px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

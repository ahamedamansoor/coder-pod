 'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Clock8 } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTimeElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const example = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Element</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .event { max-width: 500px; margin: 0 auto; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
    @media (prefers-color-scheme: dark) { .event { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); } }
    .event p { color: #1e293b; line-height: 1.6; }
    @media (prefers-color-scheme: dark) { .event p { color: #f1f5f9; } }
    time { font-weight: 600; color: #b45309; background: #fef3c7; padding: 0.25rem 0.5rem; border-radius: 4px; }
    @media (prefers-color-scheme: dark) { time { color: #fbbf24; background: #78350f; } }
  </style>
</head>
<body>
  <div class="event">
    <p>Event starts at <time datetime="2025-12-03T19:00">7:00 PM, December 3, 2025</time></p>
    <p>Make sure to mark your calendar!</p>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

const diagram = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Timeline</title>
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .timeline { max-width: 500px; margin: 0 auto; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); border-left: 4px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .timeline { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); border-left-color: #60a5fa; } }
    ul { list-style: none; padding: 0; margin: 0; }
    li { margin: 0.75rem 0; color: #1e293b; }
    @media (prefers-color-scheme: dark) { li { color: #f1f5f9; } }
    time { background: #fef3c7; color: #92400e; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; }
    @media (prefers-color-scheme: dark) { time { background: #78350f; color: #fde68a; } }
  </style>
</head>
<body>
  <div class="timeline">
    <ul>
      <li><time datetime="2025-12-01">Dec 1</time> - Idea & Brainstorming</li>
      <li><time datetime="2025-12-05">Dec 5</time> - Design Phase</li>
      <li><time datetime="2025-12-10">Dec 10</time> - Product Launch</li>
    </ul>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlTimeElement({ onOpenWebPlayground }: HtmlTimeElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Clock8}
        category="HTML · Semantic Structure"
        title="&lt;time&gt; Element"
        description="Mark up dates and times in a machine-readable way"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Date &amp; Time Example</CardTitle>
          <CardDescription>Structured timestamp for events</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;time&gt; Element"
            description="Human and machine readable date/time"
            html={example.html}
            css={example.css}
            js={example.js}
            colorTheme="blue"
            previewHeight="180px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Timeline Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Timeline with <time>"
            description="Using multiple time elements"
            html={diagram.html}
            css={diagram.css}
            js={diagram.js}
            colorTheme="blue"
            previewHeight="180px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

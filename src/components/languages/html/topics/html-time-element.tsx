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
  html: `<p>Event starts at <time datetime="2025-12-03T19:00">7:00 PM, Dec 3 2025</time></p>`,
  css: `time{font-weight:600;color:#b45309;} @media(prefers-color-scheme:dark){time{color:#fbbf24;}}`,
  js: ``,
};

const diagram = {
  html: `<ul style='list-style:none;padding:0;font-family:sans-serif'><li><time datetime='2025-12-01'>Dec 1</time> - Idea</li><li><time datetime='2025-12-05'>Dec 5</time> - Design</li><li><time datetime='2025-12-10'>Dec 10</time> - Launch</li></ul>`,
  css: `li{margin:.3rem 0} time{background:#fef3c7;padding:.2rem .5rem;border-radius:4px}`,
  js: ``,
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

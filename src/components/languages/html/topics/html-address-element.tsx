'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { MapPin } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlAddressElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const example = {
  html: `<address class="contact-info">
  Written by <a href="mailto:jane@example.com">Jane</a><br />
  Visit us at:<br />
  123 Code Street<br />
  Web City, 56789
</address>`,
  css: `.contact-info{background:#e8f0fe;padding:1.2rem;border-left:4px solid #3b82f6;border-radius:8px;font-style:normal;} .contact-info a{color:#1d4ed8;text-decoration:none;font-weight:600;} @media(prefers-color-scheme:dark){.contact-info{background:#1e3a8a;color:#dbeafe;} .contact-info a{color:#93c5fd;}}`,
  js: ``,
};

const diagram = {
  html: `<footer style='text-align:center;font-family:sans-serif'><address style='display:inline-block;background:#eff6ff;padding:1rem;border-radius:6px'>Address in footer</address></footer>`,
  css: ``,
  js: ``,
};

export default function HtmlAddressElement({ onOpenWebPlayground }: HtmlAddressElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={MapPin}
        category="HTML · Semantic Structure"
        title="&lt;address&gt; Element"
        description="Provide contact information semantically"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Contact Block</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;address&gt; Example"
            description="Machine-readable contact details"
            html={example.html}
            css={example.css}
            js={example.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Footer Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Address in Footer"
            description="Contact info placement"
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

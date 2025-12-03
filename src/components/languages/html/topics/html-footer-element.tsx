'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { LayoutTemplate, Landmark } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlFooterElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicFooterExample = {
  html: `<footer class="site-footer">
  <p>&copy; 2025 • CoderPod</p>
  <nav>
    <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
  </nav>
</footer>`,
  css: `.site-footer {
  background:#1f2937;color:white;text-align:center;padding:2rem 1rem;
}
.site-footer a{color:#93c5fd;text-decoration:none;margin:0 .3rem;}
.site-footer a:hover{text-decoration:underline;}
@media(prefers-color-scheme:dark){.site-footer{background:#0f172a;}}`,
  js: ``,
};

export default function HtmlFooterElement({ onOpenWebPlayground }: HtmlFooterElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={LayoutTemplate}
        category="HTML · Semantic Structure"
        title="&lt;footer&gt; Element"
        description="Wrap up pages or sections with semantic footer information"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Landmark className="w-7 h-7" />
            Basic Site Footer
          </CardTitle>
          <CardDescription>Typical copyright and links layout</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Simple &lt;footer&gt;"
            description="A minimal semantic site footer"
            html={basicFooterExample.html}
            css={basicFooterExample.css}
            js={basicFooterExample.js}
            colorTheme="blue"
            previewHeight="260px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

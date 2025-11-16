'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, Play, Globe, File, Hash, Mail, Phone, ExternalLink, Download, HelpCircle, ShieldAlert } from 'lucide-react';
import React from 'react';

export default function HtmlLinks({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {

    const anatomyCode = `<a href="https://www.example.com">Visit Example.com</a>`;
    const absoluteLink = `<a href="https://www.google.com">Search on Google</a>`;
    const relativeLink = `<a href="/about.html">About Us</a>`;
    const anchorLink = `<h2 id="section1">Section 1</h2>
<p>Content for section 1...</p>

<a href="#section1">Jump to Section 1</a>`;
    const mailLink = `<a href="mailto:someone@example.com">Send Email</a>`;
    const telLink = `<a href="tel:+1234567890">Call Us</a>`;

    const attributeExamples = {
        target: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in a new tab</a>`,
        download: `<a href="/files/document.pdf" download>Download PDF</a>`,
        title: `<a href="/" title="Go to the homepage">Home</a>`
    };

    const fullPlaygroundCode = {
        html: `<h1>Link Showcase</h1>

<h2>External Link</h2>
<p><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Visit MDN Web Docs</a></p>

<h2>Internal (Relative) Link</h2>
<p><a href="/contact">Contact Page (doesn't exist here, but shows the syntax)</a></p>

<h2>Jump to Section</h2>
<p><a href="#conclusion">Go to the conclusion</a></p>

<h2>Special Links</h2>
<p><a href="mailto:info@example.com">Email Us</a> | <a href="tel:555-1234">Call Us</a></p>

<h2>Download Link</h2>
<p><a href="#" download="fake_document.txt">Download a file</a></p>
<hr style="margin: 2rem 0;">

<h2 id="conclusion">Conclusion Section</h2>
<p>You've successfully jumped to this section using an anchor link!</p>`,
        css: `body { 
  font-family: sans-serif;
  line-height: 1.6;
  padding-bottom: 50vh; /* Add space to make scrolling visible */
}
a {
  color: hsl(var(--primary));
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
h1, h2 {
  color: hsl(var(--foreground));
  border-bottom: 1px solid hsl(var(--border));
  padding-bottom: 4px;
}`,
        js: ''
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Link className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Links (Hyperlinks)</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating doorways to navigate between pages and websites.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Anatomy of a Link</CardTitle>
                <CardDescription>A link, or anchor tag, is made of three key parts.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 text-center border">
                    <code className="font-mono text-blue-500 text-lg">&lt;a</code>
                    <div className="text-sm">
                        <p className="font-bold">Opening Tag</p>
                        <p className="text-muted-foreground">The `a` stands for anchor.</p>
                    </div>
                    <code className="font-mono text-red-500 text-lg">href="..."</code>
                    <div className="text-sm">
                        <p className="font-bold">`href` Attribute</p>
                        <p className="text-muted-foreground">The destination URL.</p>
                    </div>
                     <code className="font-mono text-blue-500 text-lg">&gt;</code>
                    <code className="font-mono text-green-500 text-lg">Clickable Text</code>
                    <div className="text-sm">
                        <p className="font-bold">Content</p>
                        <p className="text-muted-foreground">What the user sees.</p>
                    </div>
                    <code className="font-mono text-blue-500 text-lg">&lt;/a&gt;</code>
                    <div className="text-sm">
                        <p className="font-bold">Closing Tag</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Types of Links</CardTitle>
                <CardDescription>Links can point to different kinds of destinations.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Globe className="w-5 h-5 text-primary"/>Absolute URLs</h3>
                    <p className="text-xs text-muted-foreground mb-2">A full web address to an external site.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{absoluteLink}</pre>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><File className="w-5 h-5 text-primary"/>Relative URLs</h3>
                    <p className="text-xs text-muted-foreground mb-2">A path to a file within your own website.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{relativeLink}</pre>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Hash className="w-5 h-5 text-primary"/>Anchor/Fragment Links</h3>
                    <p className="text-xs text-muted-foreground mb-2">Jumps to a specific element on the current page (that has an `id` attribute).</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{anchorLink}</pre>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Mail className="w-5 h-5 text-primary"/>Special Links</h3>
                    <p className="text-xs text-muted-foreground mb-2">Can trigger actions like opening an email client or phone dialer.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{mailLink}</pre>
                    <pre className="font-mono text-sm bg-background p-2 rounded mt-2">{telLink}</pre>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Important Link Attributes</CardTitle>
                <CardDescription>Customize your link's behavior with these powerful attributes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><ExternalLink className="w-5 h-5 text-primary"/>`target="_blank"`</h3>
                    <p className="text-sm text-muted-foreground mb-2">Opens the linked document in a new window or tab. The most common use case.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded mb-3">{attributeExamples.target}</pre>
                    <div className="flex items-start gap-3 p-3 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-700">
                        <ShieldAlert className="w-5 h-5 mt-1 shrink-0"/>
                        <p className="text-xs">**Security Note:** Always add `rel="noopener noreferrer"` when using `target="_blank"` to prevent potential security vulnerabilities.</p>
                    </div>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><Download className="w-5 h-5 text-primary"/>`download`</h3>
                    <p className="text-sm text-muted-foreground mb-2">Specifies that the target will be downloaded when a user clicks on the hyperlink. You can optionally provide a value to rename the file.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{attributeExamples.download}</pre>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-bold flex items-center gap-2 mb-2"><HelpCircle className="w-5 h-5 text-primary"/>`title`</h3>
                    <p className="text-sm text-muted-foreground mb-2">Provides extra information about the link, which appears as a tooltip when the user hovers over it.</p>
                    <pre className="font-mono text-sm bg-background p-2 rounded">{attributeExamples.title}</pre>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Putting It All Together</CardTitle>
                <CardDescription>Open this complete example in the Web Playground to see all link types in action and experiment with them.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(fullPlaygroundCode.html, fullPlaygroundCode.css, fullPlaygroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Full Example in Playground
                </Button>
            </CardContent>
        </Card>
      </div>
    );
}

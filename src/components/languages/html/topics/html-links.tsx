
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, Play, Globe, File, Hash, Mail, Phone, ExternalLink, Download, HelpCircle, ShieldAlert } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

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
        title: `<a href="/public" title="Go to the homepage">Home</a>`
    };

    const fullPlaygroundCode = {
        html: `<h1>Link Showcase</h1>

<h2>External Link</h2>
<p>
  This link opens in a new tab.
  <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Visit MDN Web Docs</a>
</p>

<h2>Internal (Relative) Link</h2>
<p>
  This link doesn't go anywhere here, but on a real site it would.
  <a href="javascript:alert('This would go to another page!');">Contact Page</a>
</p>

<h2>Jump to Section</h2>
<p><a href="#conclusion">Go to the conclusion</a></p>

<h2>Special Links</h2>
<p><a href="mailto:info@example.com">Email Us</a> | <a href="tel:555-1234">Call Us</a></p>

<h2>Download Link</h2>
<p>
  This link will download a text file.
  <a 
    href="data:text/plain;charset=utf-8,Hello world! This is a demo file." 
    download="demo-file.txt"
  >
    Download a file
  </a>
</p>

<hr style="margin: 2rem 0;" />

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
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={Link}
          category="HTML Basics"
          title="HTML Links (Hyperlinks)"
          description="Creating doorways to navigate between pages and websites"
          colorTheme="blue"
        />

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
        
        {/* HTML Links in Action */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Link className="w-6 h-6 text-blue-600" /> HTML Links in Action</CardTitle>
            <CardDescription className="text-base">See how different types of links work with dark mode support</CardDescription>
          </CardHeader>
          <CardContent>
            <FrontendCodePreview
              title="Links Examples"
              description="Practical demonstration of external, internal, anchor, email, phone, and download links"
              html={`<div class="container">
  <h1>HTML Links Demo</h1>
  
  <!-- External Link -->
  <section class="section external-section">
    <h2>🌍 External Links</h2>
    <p>
      Visit <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> to learn more about web development.
    </p>
    <p class="note">Opens in a new tab with security attributes</p>
  </section>
  
  <!-- Internal/Relative Link -->
  <section class="section internal-section">
    <h2>📄 Internal Links</h2>
    <p>
      Navigate to <a href="#section-bottom">bottom of this page</a> or
      <a href="/about">About Page</a> (would work on real site)
    </p>
    <p class="note">Relative paths navigate within your website</p>
  </section>
  
  <!-- Anchor Links -->
  <section class="section anchor-section">
    <h2>🔗 Anchor Links</h2>
    <div class="link-box">
      <a href="#intro">Jump to Introduction</a>
      <a href="#features">Jump to Features</a>
      <a href="#contact">Jump to Contact</a>
    </div>
    <p class="note">Links to specific sections with id attributes</p>
  </section>
  
  <!-- Email & Phone Links -->
  <section class="section contact-section">
    <h2>📧 Contact Links</h2>
    <div class="link-box">
      <a href="mailto:hello@example.com">📨 Send Email</a>
      <a href="tel:+1234567890">📱 Call: +1 (234) 567-890</a>
    </div>
    <p class="note">Special protocols for email and phone</p>
  </section>
  
  <!-- Download Link -->
  <section class="section download-section">
    <h2>💾 Download Link</h2>
    <a href="data:text/plain;charset=utf-8,Hello%20World!%20This%20is%20a%20demo%20file." download="demo.txt" class="download-btn">
      ⬇️ Download Demo File
    </a>
    <p class="note">Forces download instead of navigation</p>
  </section>
  
  <!-- Target Sections for Anchors -->
  <div style="margin-top: 3rem;">
    <section id="intro" class="target-section">
      <h3>📖 Introduction</h3>
      <p>This is the introduction section you jumped to!</p>
    </section>
    
    <section id="features" class="target-section">
      <h3>✨ Features</h3>
      <p>This is the features section!</p>
    </section>
    
    <section id="contact" class="target-section">
      <h3>📞 Contact</h3>
      <p>This is the contact section!</p>
    </section>
    
    <div id="section-bottom" class="target-section">
      <h3>🎯 Bottom Section</h3>
      <p>You made it to the bottom!</p>
    </div>
  </div>
</div>`}
              css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .container {
  background: #1e293b;
}

h1 {
  color: #1e40af;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
  transition: color 0.3s, border-color 0.3s;
}

html.dark h1 {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

.section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
}

html.dark .section {
  background: #334155;
}

.section h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #475569;
  transition: color 0.3s;
}

html.dark .section h2 {
  color: #cbd5e1;
}

.external-section {
  border-left: 4px solid #3b82f6;
}

html.dark .external-section {
  border-left-color: #60a5fa;
}

.internal-section {
  border-left: 4px solid #10b981;
}

html.dark .internal-section {
  border-left-color: #34d399;
}

.anchor-section {
  border-left: 4px solid #f59e0b;
}

html.dark .anchor-section {
  border-left-color: #fbbf24;
}

.contact-section {
  border-left: 4px solid #8b5cf6;
}

html.dark .contact-section {
  border-left-color: #a78bfa;
}

.download-section {
  border-left: 4px solid #ec4899;
}

html.dark .download-section {
  border-left-color: #f472b6;
}

a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 3px;
  transition: all 0.2s;
}

html.dark a {
  color: #60a5fa;
}

a:hover {
  background: #dbeafe;
  text-decoration: underline;
}

html.dark a:hover {
  background: #1e3a8a;
}

.link-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.link-box a {
  background: #eff6ff;
  padding: 0.5rem 1rem;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  font-weight: 600;
}

html.dark .link-box a {
  background: #1e3a8a;
  border-color: #60a5fa;
}

.download-btn {
  display: inline-block;
  background: #ec4899;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

html.dark .download-btn {
  background: #f472b6;
  color: #1e293b;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
  background: #db2777;
}

.note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  font-size: 0.875rem;
  color: #78350f;
  border-radius: 4px;
  transition: all 0.3s;
}

html.dark .note {
  background: #713f12;
  border-left-color: #fbbf24;
  color: #fef3c7;
}

.target-section {
  background: #f0f9ff;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 2px solid #0ea5e9;
  transition: all 0.3s;
}

html.dark .target-section {
  background: #0c4a6e;
  border-color: #38bdf8;
}

.target-section h3 {
  color: #0369a1;
  margin-bottom: 0.5rem;
}

html.dark .target-section h3 {
  color: #7dd3fc;
}

.target-section:target {
  background: #dbeafe;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  animation: highlight 1s ease-out;
}

html.dark .target-section:target {
  background: #1e3a8a;
  border-color: #60a5fa;
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

@keyframes highlight {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}`}
              colorTheme="blue"
              icon={Link}
              previewHeight="800px"
            />
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
                <CardTitle>Interactive Links Playground</CardTitle>
                <CardDescription>Experiment with all link types in a live code editor with preview and console.</CardDescription>
            </CardHeader>
            <CardContent>
                <InteractivePlayground
                  title="Complete Links Playground"
                  description="Explore external, internal, anchor, email, phone, and download links"
                  features={[
                    'External Links',
                    'Anchor Navigation',
                    'Special Protocols',
                    'Download Attribute'
                  ]}
                  buttonText="Open Links Playground"
                  onLaunchPlayground={onOpenWebPlayground}
                  playgroundData={{
                    html: fullPlaygroundCode.html,
                    css: fullPlaygroundCode.css,
                    js: fullPlaygroundCode.js
                  }}
                  colorTheme="blue"
                />
            </CardContent>
        </Card>
      </div>
    );
}

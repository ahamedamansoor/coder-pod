'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Info, Zap, Check, Shield } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlLinksTargetProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLinksTarget({ onOpenWebPlayground }: HtmlLinksTargetProps) {
  const openPlayground = (html: string, css: string, js: string) => {
    onOpenWebPlayground?.(html, css, js);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Target}
        category="HTML · Links"
        title="Link Target Attribute"
        description="Control where links open - in the same window, new tab, or new window"
        colorTheme="blue"
      />

      {/* Section 1: Understanding target */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Info className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is the target Attribute?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Control how and where your links open
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/70 dark:bg-slate-900/50 p-5 rounded-lg border border-blue-100 dark:border-blue-900">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              The target attribute specifies where a linked document will open.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              By default, links open in the same window/tab. With the <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">target</code> attribute, you can make links open in a new tab, new window, or even specific frames.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">🔄 Flexible</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Control user experience with link behavior
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">🎯 User-Friendly</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Users stay on your page while exploring links
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">🌐 Common</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Essential for external links
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Target Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Target Values Explained
          </CardTitle>
          <CardDescription className="text-base">
            Different ways to open links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* _self */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
            <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">target="_self"</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens the link in the same window/tab (default behavior - no need to specify)
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-blue-200 dark:border-blue-800">
              &lt;a href="page.html" target="_self"&gt;Same Tab&lt;/a&gt;
            </code>
          </div>

          {/* _blank */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
            <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">target="_blank"</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens the link in a new browser tab or window
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
              &lt;a href="https://example.com" target="_blank"&gt;Open in New Tab&lt;/a&gt;
            </code>
          </div>

          {/* _parent */}
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
            <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">target="_parent"</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens in the parent frame (if no parent, acts like _self)
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-purple-200 dark:border-purple-800">
              &lt;a href="page.html" target="_parent"&gt;Parent Frame&lt;/a&gt;
            </code>
          </div>

          {/* _top */}
          <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
            <p className="font-mono font-bold text-orange-600 dark:text-orange-400 mb-2">target="_top"</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens in the full body of the window (breaks out of frames)
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-orange-200 dark:border-orange-800">
              &lt;a href="page.html" target="_top"&gt;Top Frame&lt;/a&gt;
            </code>
          </div>

          {/* Custom name */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
            <p className="font-mono font-bold text-amber-600 dark:text-amber-400 mb-2">target="framename"</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens in a named frame (rarely used in modern web development)
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-amber-200 dark:border-amber-800">
              &lt;a href="page.html" target="myframe"&gt;Custom Frame&lt;/a&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Practical Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            See It in Action
          </CardTitle>
          <CardDescription className="text-base">
            Real examples of target attribute usage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Same Tab */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              1️⃣ Default - Same Tab
            </h4>
            <FrontendCodePreview
              title="Internal Navigation (Same Tab)"
              description="Links to other pages on your site open in the same tab"
              html={`<nav>
  <a href="/">Home</a>
  <a href="/about">About Us</a>
  <a href="/services">Services</a>
</nav>`}
              css={`body {
  font-family: system-ui;
  margin: 0;
  padding: 2rem;
}

nav {
  background: #3b82f6;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
}

html.dark body {
  background: #0f172a;
}

html.dark nav {
  background: #1e40af;
}

a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s;
  font-weight: 500;
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}

html.dark a:hover {
  background: rgba(255, 255, 255, 0.15);
}`}
              colorTheme="blue"
              previewHeight="400px"
              onOpenPlayground={() => openPlayground(
                `<nav><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a></nav>`,
                `nav { background: #3b82f6; padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; } a { color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; transition: all 0.3s; font-weight: 500; } a:hover { background: rgba(255, 255, 255, 0.2); } /* Dark mode */ html.dark body { background: #0f172a; } html.dark nav { background: #1e40af; } html.dark a:hover { background: rgba(255, 255, 255, 0.15); }`,
                ``
              )}
            />
          </div>

          {/* Example 2: New Tab */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              2️⃣ External Links - New Tab
            </h4>
            <FrontendCodePreview
              title="External Links (New Tab)"
              description="External links open in a new tab, keeping user on your site"
              html={`<section class="resources">
  <h2>Learn More</h2>
  <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
    📖 MDN Web Docs
  </a>
  <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
    🎓 W3Schools
  </a>
</section>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
}

.resources {
  max-width: 500px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

html.dark .resources {
  background: #1e293b;
}

h2 {
  color: #1e40af;
  margin-bottom: 1.5rem;
}

a {
  display: block;
  padding: 1rem;
  margin: 0.5rem 0;
  background: #10b981;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
}

a:hover {
  background: #059669;
  transform: translateX(4px);
}

html.dark a {
  background: #059669;
}

html.dark a:hover {
  background: #34d399;
}`}
              colorTheme="blue"
              previewHeight="400px"
              onOpenPlayground={() => openPlayground(
                `<section class="resources"><h2>Learn More</h2><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">📖 MDN Web Docs</a><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">🎓 W3Schools</a></section>`,
                `.resources { max-width: 500px; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); } a { display: block; padding: 1rem; margin: 0.5rem 0; background: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: 500; transition: all 0.3s; } a:hover { background: #059669; } /* Dark mode */ html.dark body { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); } html.dark .resources { background: #1e293b; } html.dark a { background: #059669; } html.dark a:hover { background: #34d399; }`,
                ``
              )}
            />
          </div>

          {/* Example 3: Mixed Links */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              3️⃣ Combined Navigation
            </h4>
            <FrontendCodePreview
              title="Internal & External Links"
              description="Mixing internal and external links with appropriate targets"
              html={`<div class="footer-links">
  <div class="section">
    <h3>Company</h3>
    <a href="/about">About Us</a>
    <a href="/careers">Careers</a>
    <a href="/contact">Contact</a>
  </div>
  
  <div class="section">
    <h3>Resources</h3>
    <a href="https://blog.example.com" target="_blank">Blog</a>
    <a href="https://twitter.com" target="_blank">Follow Us</a>
    <a href="https://github.com" target="_blank">GitHub</a>
  </div>
</div>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
}

html.dark .footer-links {
  background: #1e293b;
}

.section h3 {
  color: #1e40af;
  margin-bottom: 1rem;
}

html.dark .section h3 {
  color: #60a5fa;
}

.section a {
  display: block;
  color: #3b82f6;
  text-decoration: none;
  margin: 0.5rem 0;
  transition: all 0.3s;
  font-weight: 500;
}

.section a:hover {
  color: #2563eb;
  padding-left: 0.5rem;
}

html.dark .section a {
  color: #60a5fa;
}

html.dark .section a:hover {
  color: #93c5fd;
}`}
              colorTheme="blue"
              previewHeight="420px"
              onOpenPlayground={() => openPlayground(
                `<div class="footer-links"><div class="section"><h3>Company</h3><a href="/about">About Us</a><a href="/careers">Careers</a><a href="/contact">Contact</a></div><div class="section"><h3>Resources</h3><a href="https://blog.example.com" target="_blank">Blog</a><a href="https://twitter.com" target="_blank">Follow Us</a></div></div>`,
                `.footer-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; background: #f3f4f6; padding: 2rem; border-radius: 12px; } .section h3 { color: #1e40af; margin-bottom: 1rem; } .section a { display: block; color: #3b82f6; text-decoration: none; margin: 0.5rem 0; transition: all 0.3s; font-weight: 500; } .section a:hover { color: #2563eb; padding-left: 0.5rem; } /* Dark mode */ html.dark .footer-links { background: #1e293b; } html.dark .section a { color: #60a5fa; } html.dark .section a:hover { color: #93c5fd; }`,
                ``
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Security & Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Shield className="w-7 h-7" />
            Security & rel Attribute
          </CardTitle>
          <CardDescription className="text-base">
            Important security considerations for external links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">⚠️ Important Security Note</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              When using <code className="bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded font-mono">target="_blank"</code>, always add <code className="bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded font-mono">rel="noopener noreferrer"</code> to prevent security vulnerabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">✅ Secure</h4>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
                &lt;a href="url" target="_blank" rel="noopener noreferrer"&gt;
              </code>
            </div>

            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-2">❌ Not Secure</h4>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-rose-200 dark:border-rose-800">
                &lt;a href="url" target="_blank"&gt;
              </code>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-5 rounded-lg border border-blue-200 dark:border-blue-700 mt-4">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">What does rel do?</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><strong>noopener:</strong> Prevents the new page from accessing the original page's window object</li>
              <li><strong>noreferrer:</strong> Hides referrer information when clicking the link</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Check className="w-7 h-7" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Guidelines for using the target attribute
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-3">✅ Do This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use target="_blank" for external links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Always add rel="noopener noreferrer" with _blank</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Keep internal links in same tab for better UX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Test links on different browsers</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-700 dark:text-rose-400 mb-3">❌ Avoid This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Opening all links in new tabs (confusing UX)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Using target without rel attribute</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Overusing target="_blank"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Forgetting to test links in production</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

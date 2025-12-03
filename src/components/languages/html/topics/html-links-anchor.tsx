'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link as LinkIcon, Info, Zap, Check, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlLinksAnchorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLinksAnchor({ onOpenWebPlayground }: HtmlLinksAnchorProps) {
  const openPlayground = (html: string, css: string, js: string) => {
    onOpenWebPlayground?.(html, css, js);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={LinkIcon}
        category="HTML · Links"
        title="Anchor Links"
        description="Master the fundamental <a> tag and navigate through your web pages"
        colorTheme="blue"
      />

      {/* Section 1: What is an Anchor Link? */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Info className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What is an Anchor Link?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Understanding the foundation of web navigation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/70 dark:bg-slate-900/50 p-5 rounded-lg border border-blue-100 dark:border-blue-900">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              An anchor link is a hyperlink that takes you from one place to another on the web.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">&lt;a&gt;</code> element (anchor) is the most important HTML tag for creating clickable links. It's the foundation of how the web works - connecting pages, websites, and content!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">🌐 Purpose</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Navigate between pages and websites
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">🎯 Key Feature</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The href attribute specifies the destination
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">✨ Most Common</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The most used element on the web
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: The Basic Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Basic Structure
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the anatomy of an anchor link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual breakdown */}
          <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700">
            <div className="font-mono text-sm leading-relaxed space-y-2">
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold">&lt;a</span>
                <span className="text-orange-600 dark:text-orange-400 font-bold"> href</span>
                <span className="text-slate-700 dark:text-slate-300">=</span>
                <span className="text-green-600 dark:text-green-400">"destination.html"</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">&gt;</span>
              </div>
              <div className="pl-6">
                <span className="text-slate-700 dark:text-slate-300">Click me!</span>
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold">&lt;/a&gt;</span>
              </div>
            </div>
          </div>

          {/* Parts explanation */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
              <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">Opening Tag</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Marks the start of the link with the &lt;a&gt; tag
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
              <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">href Attribute</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Specifies where the link goes (URL or file path)
              </p>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
              <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">Link Text</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The visible text users click on
              </p>
            </div>
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
            Real examples of anchor links in use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Simple Text Link */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              1️⃣ Simple Text Link
            </h4>
            <FrontendCodePreview
              title="Basic Anchor Link"
              description="A simple clickable text link to another website"
              html={`<p>
  Visit our <a href="https://developer.mozilla.org">documentation site</a> to learn more.
</p>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
}

a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

a:hover {
  color: #2563eb;
  border-bottom-color: #2563eb;
}

a:visited {
  color: #7c3aed;
}`}
              colorTheme="blue"
              previewHeight="200px"
              onOpenPlayground={() => openPlayground(
                `<p>Visit our <a href="https://developer.mozilla.org">documentation site</a> to learn more.</p>`,
                `body { font-family: system-ui; padding: 2rem; } a { color: #3b82f6; text-decoration: none; font-weight: 500; } a:hover { color: #2563eb; text-decoration: underline; }`,
                ``
              )}
            />
          </div>

          {/* Example 2: Link with Icon */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              2️⃣ Link with Visual Style
            </h4>
            <FrontendCodePreview
              title="Styled Link Button"
              description="A link styled to look like a button"
              html={`<div class="link-container">
  <a href="https://example.com" class="btn-link">
    📖 Learn More
  </a>
</div>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

.link-container {
  display: flex;
  gap: 1rem;
}

.btn-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-link:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(59, 130, 246, 0.3);
}`}
              colorTheme="blue"
              previewHeight="220px"
              onOpenPlayground={() => openPlayground(
                `<a href="https://example.com" class="btn-link">📖 Learn More</a>`,
                `.btn-link { display: inline-block; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s; } .btn-link:hover { background: #2563eb; transform: translateY(-2px); }`,
                ``
              )}
            />
          </div>

          {/* Example 3: Multiple Links */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              3️⃣ Navigation Menu
            </h4>
            <FrontendCodePreview
              title="Link Navigation"
              description="Multiple links organized as a navigation menu"
              html={`<nav class="navbar">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/services" class="nav-link">Services</a>
  <a href="/contact" class="nav-link">Contact</a>
</nav>`}
              css={`body {
  font-family: system-ui;
  margin: 0;
}

.navbar {
  background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
  padding: 1rem 2rem;
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid #fbbf24;
}`}
              colorTheme="blue"
              previewHeight="250px"
              onOpenPlayground={() => openPlayground(
                `<nav class="navbar"><a href="/" class="nav-link active">Home</a><a href="/about" class="nav-link">About</a><a href="/services" class="nav-link">Services</a><a href="/contact" class="nav-link">Contact</a></nav>`,
                `.navbar { background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%); padding: 1rem 2rem; display: flex; gap: 2rem; } .nav-link { color: white; text-decoration: none; font-weight: 500; padding: 0.5rem 1rem; border-radius: 6px; transition: all 0.3s; } .nav-link:hover { background: rgba(255, 255, 255, 0.1); } .nav-link.active { background: rgba(255, 255, 255, 0.2); border-bottom: 2px solid #fbbf24; }`,
                ``
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Info className="w-7 h-7" />
            Key Concepts
          </CardTitle>
          <CardDescription className="text-base">
            Important attributes and behaviors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* href attribute */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3 mb-3">
                <LinkIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-orange-700 dark:text-orange-300">href Attribute</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Specifies the URL or path where the link goes
                  </p>
                  <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded mt-2 block font-mono text-orange-600">
                    href="https://example.com"
                  </code>
                </div>
              </div>
            </div>

            {/* visited state */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300">Link States</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Links change appearance when hovered, clicked, or visited
                  </p>
                  <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded mt-2 block font-mono text-purple-600">
                    a:hover, a:visited, a:active
                  </code>
                </div>
              </div>
            </div>

            {/* accessibility */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-start gap-3 mb-3">
                <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">Accessible Links</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Use descriptive link text that explains the destination
                  </p>
                  <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded mt-2 block font-mono text-emerald-600">
                    &lt;a&gt;Learn More&lt;/a&gt;
                  </code>
                </div>
              </div>
            </div>

            {/* title attribute */}
            <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-amber-700 dark:text-amber-300">Title Tooltip</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Shows additional info when user hovers over the link
                  </p>
                  <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded mt-2 block font-mono text-amber-600">
                    title="Click to visit"
                  </code>
                </div>
              </div>
            </div>
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
            Writing better anchor links
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-3">✅ Do This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use descriptive link text like "Learn More" or "Click here to read article"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use full URLs for external links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Make links visually distinct from regular text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Test all links to ensure they work</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-700 dark:text-rose-400 mb-3">❌ Avoid This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Using "Click here" as link text (not descriptive)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Using "javascript:void(0)" (non-functional links)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Forgetting to remove underlines or styling for clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Opening external links without user awareness</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


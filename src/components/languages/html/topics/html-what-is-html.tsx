'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { 
  Globe, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb,
  Code2,
  Zap,
  Book,
  Users
} from 'lucide-react';

interface HtmlIntroductionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlIntroduction({ onOpenWebPlayground }: HtmlIntroductionProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Hero Section */}
      <PageHeader
        icon={Globe}
        category="HTML · Fundamentals"
        title="What is HTML?"
        description="Discover the language that builds every website you've ever visited—simple, powerful, and essential for the web."
        colorTheme="blue"
      />

      {/* 1. SIMPLE DEFINITION */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Book className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">HTML: The Web's Building Blocks</CardTitle>
              <CardDescription className="text-base mt-1">
                HyperText Markup Language — The foundation of every webpage
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Full Form */}
            <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-500 text-white mb-4">FULL FORM</Badge>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400">H</span>yper
                  <span className="text-blue-600 dark:text-blue-400">T</span>ext{' '}
                  <span className="text-blue-600 dark:text-blue-400">M</span>arkup{' '}
                  <span className="text-blue-600 dark:text-blue-400">L</span>anguage
                </h3>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p><strong>HyperText:</strong> Text with clickable links connecting pages</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p><strong>Markup:</strong> Special tags that describe content</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p><strong>Language:</strong> Set of rules browsers understand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Facts */}
            <div className="space-y-4">
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-bold text-lg">Created in 1991</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  By Tim Berners-Lee at CERN, Switzerland to share scientific documents. Today it powers the entire web!
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-bold text-lg">Powers 1.9 Billion+ Sites</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Every website—from Google to YouTube—is built with HTML. It's the web's universal language.
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-bold text-lg">Free & Open Standard</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Anyone can learn and use HTML for free. No licenses, no fees—just pure web creation power!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. WHAT DOES HTML DO? */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Layers className="w-7 h-7" />
            What Does HTML Actually Do?
          </CardTitle>
          <CardDescription className="text-base">
            Think of HTML as the skeleton of a webpage—it gives structure and meaning to content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
            {[
              { emoji: '📝', label: 'Write HTML', desc: 'Add tags to text', color: 'orange' },
              { emoji: '🌐', label: 'Browser Reads', desc: 'Understands tags', color: 'blue' },
              { emoji: '🎨', label: 'Displays Page', desc: 'Shows beautiful result', color: 'emerald' },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 transition-all hover:scale-105">
                  <div className="text-4xl mb-2">{step.emoji}</div>
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{step.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.desc}</div>
                </div>
                {idx < 2 && (
                  <ArrowRight className="w-6 h-6 text-blue-500 dark:text-blue-400 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Explanation Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/10 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                <h4 className="font-bold">1. Gives Structure</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                HTML organizes content into headings, paragraphs, lists, and sections—like chapters in a book.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <h4 className="font-bold">2. Adds Meaning</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Tags tell browsers "this is a button" or "this is a heading"—so they know how to display it.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                <h4 className="font-bold">3. Connects Pages</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                HTML links let you jump from one page to another—that's what makes the web a "web"!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Key Point</AlertTitle>
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              HTML doesn't control colors or fonts—that's CSS's job. HTML only cares about <strong>what</strong> things are, not <strong>how</strong> they look.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 3. HOW HTML TAGS WORK */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code2 className="w-7 h-7" />
            How HTML Tags Work
          </CardTitle>
          <CardDescription className="text-base">
            Tags are like wrappers that tell the browser what type of content you have
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Your First HTML Tags"
            description="See how tags wrap around content to give it meaning"
            html={`<h1>Welcome to My Website!</h1>
<p>This is a paragraph of text.</p>
<button>Click Me</button>`}
            css={`body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  }
}

div {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  div {
    background: #1e293b;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  }
}

h1 {
  color: #ea580c;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #fb923c;
  }
}

p {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #cbd5e1;
  }
}

button {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.6);
}`}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />

          {/* Tag Structure Explanation */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-500 text-white mb-4">ANATOMY OF A TAG</Badge>
              <div className="font-mono text-sm space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                  <code className="text-blue-600 dark:text-blue-400">&lt;h1&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Welcome!</span>
                  <code className="text-blue-600 dark:text-blue-400">&lt;/h1&gt;</code>
                </div>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>• <strong>&lt;h1&gt;</strong> = Opening tag (starts the element)</p>
                  <p>• <strong>Welcome!</strong> = Content (what you want to show)</p>
                  <p>• <strong>&lt;/h1&gt;</strong> = Closing tag (ends the element)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <Badge className="bg-blue-500 text-white mb-4">COMMON TAGS</Badge>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono text-xs">&lt;h1&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Main heading (biggest text)</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono text-xs">&lt;p&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Paragraph (normal text)</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono text-xs">&lt;button&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Clickable button</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono text-xs">&lt;a&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Link to another page</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono text-xs">&lt;img&gt;</code>
                  <span className="text-slate-700 dark:text-slate-300">Image (no closing tag!)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. REAL EXAMPLES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            See HTML in Action
          </CardTitle>
          <CardDescription className="text-base">
            Watch how different tags create different types of content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Headings Example */}
          <FrontendCodePreview
            title="Headings: Size Matters"
            description="HTML has 6 heading levels—h1 is the biggest, h6 is the smallest"
            html={`<h1>Heading 1 - Main Title</h1>
<h2>Heading 2 - Section Title</h2>
<h3>Heading 3 - Subsection</h3>
<p>Use headings to organize your content like a table of contents!</p>`}
            css={`body {
  padding: 2.5rem;
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }
}

h1 {
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  border-left: 6px solid #3b82f6;
  padding-left: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #93c5fd;
    border-left-color: #60a5fa;
  }
}

h2 {
  color: #2563eb;
  font-size: 2rem;
  margin-bottom: 0.75rem;
  border-left: 5px solid #60a5fa;
  padding-left: 1rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #bfdbfe;
    border-left-color: #93c5fd;
  }
}

h3 {
  color: #3b82f6;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  border-left: 4px solid #93c5fd;
  padding-left: 1rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #dbeafe;
    border-left-color: #bfdbfe;
  }
}

p {
  color: #1e40af;
  line-height: 1.6;
  font-size: 1.05rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #e0e7ff;
    background: #1e3a8a;
  }
}`}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />

          {/* Links Example */}
          <FrontendCodePreview
            title="Links: Connect the Web"
            description="The <a> tag creates clickable links—the heart of the web"
            html={`<div class="nav">
  <h2>Navigation Links</h2>
  <p>Click any link below to navigate!</p>
  <div class="links">
    <a href="#home">🏠 Home</a>
    <a href="#about">👤 About</a>
    <a href="#contact">📧 Contact</a>
  </div>
</div>`}
            css={`body {
  padding: 2rem;
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  font-family: system-ui, sans-serif;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #581c87 0%, #6b21a8 100%);
  }
}

.nav {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

@media (prefers-color-scheme: dark) {
  .nav {
    background: #1e293b;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
}

h2 {
  color: #7c3aed;
  margin-bottom: 0.75rem;
  font-size: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #c4b5fd;
  }
}

p {
  color: #64748b;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #cbd5e1;
  }
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

a {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

a:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5);
}`}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />

          {/* Lists Example */}
          <FrontendCodePreview
            title="Lists: Organize Information"
            description="Two types: <ul> for bullet points, <ol> for numbered lists"
            html={`<div class="lists">
  <div class="list-box">
    <h3>🛒 Shopping List</h3>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Orange Juice</li>
      <li>Bread</li>
    </ul>
  </div>
  <div class="list-box">
    <h3>📝 Recipe Steps</h3>
    <ol>
      <li>Preheat oven</li>
      <li>Mix ingredients</li>
      <li>Bake for 20 min</li>
      <li>Let it cool</li>
    </ol>
  </div>
</div>`}
            css={`body {
  padding: 2rem;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  font-family: system-ui, sans-serif;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
}

.lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.list-box {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
}

@media (prefers-color-scheme: dark) {
  .list-box {
    background: #1e293b;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }
}

h3 {
  color: #059669;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #6ee7b7;
  }
}

ul, ol {
  padding-left: 1.5rem;
}

li {
  color: #047857;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  font-size: 1.05rem;
}

@media (prefers-color-scheme: dark) {
  li {
    color: #a7f3d0;
  }
}`}
            colorTheme="blue"
            previewHeight="340px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* 5. WHY HTML MATTERS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Why HTML is Important
          </CardTitle>
          <CardDescription className="text-base">
            HTML is more than just code—it's the foundation that makes the web accessible and useful for everyone
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-lg">Accessibility</h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Proper HTML helps screen readers describe pages to people with visual impairments. Good tags = better access for everyone.
            </p>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Inclusive Web
            </Badge>
          </div>

          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-lg">SEO (Search Rankings)</h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Search engines like Google read HTML to understand your content. Better HTML = higher rankings in search results!
            </p>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Discoverable
            </Badge>
          </div>

          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-lg">Foundation for Styling</h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              CSS and JavaScript need HTML to work. Without HTML structure, you can't add colors, animations, or interactivity.
            </p>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Essential Base
            </Badge>
          </div>

          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-lg">Easy to Learn</h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              HTML is one of the easiest programming languages to start with. You can build your first webpage in minutes!
            </p>
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Beginner-Friendly
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* 6. MODERN HTML5 FEATURES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Modern HTML Features
          </CardTitle>
          <CardDescription className="text-base">
            HTML5 added powerful new elements that make building websites easier and more interactive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <Badge className="bg-blue-500 text-white mb-3">NEW</Badge>
              <h4 className="font-bold text-lg mb-2">&lt;dialog&gt; Element</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Create native popup dialogs and modals without JavaScript libraries. Built-in focus management and accessibility!
              </p>
              <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                &lt;dialog id="myDialog"&gt;Hello!&lt;/dialog&gt;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <Badge className="bg-blue-500 text-white mb-3">NEW</Badge>
              <h4 className="font-bold text-lg mb-2">&lt;picture&gt; Element</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Serve different images for different screen sizes. Perfect for responsive design and faster loading!
              </p>
              <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                &lt;picture&gt;&lt;source srcset="..."&gt;&lt;/picture&gt;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <Badge className="bg-blue-500 text-white mb-3">NEW</Badge>
              <h4 className="font-bold text-lg mb-2">&lt;video&gt; & &lt;audio&gt;</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Embed videos and music directly without plugins. Add captions, controls, and custom players easily.
              </p>
              <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                &lt;video controls src="movie.mp4"&gt;&lt;/video&gt;
              </code>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <Badge className="bg-blue-500 text-white mb-3">NEW</Badge>
              <h4 className="font-bold text-lg mb-2">Semantic Tags</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;footer&gt; make code more meaningful and accessible.
              </p>
              <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                &lt;main&gt;&lt;article&gt;Content&lt;/article&gt;&lt;/main&gt;
              </code>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>HTML is Always Evolving</AlertTitle>
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              The HTML standard is continuously updated with new features. Stay curious and keep learning as the web grows!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 7. INTERACTIVE PLAYGROUND */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🚀 Try HTML Yourself"
          description="Experiment with HTML tags, see instant results, and build your first interactive webpage!"
          features={[
            'Write real HTML code',
            'See changes instantly',
            'Learn by experimenting',
            'Build something amazing'
          ]}
          buttonText="Launch HTML Playground"
          onLaunchPlayground={() => onOpenWebPlayground(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <div class="container">
    <header>
      <h1>🎉 Welcome to HTML!</h1>
      <p>Edit this code and watch the magic happen!</p>
    </header>

    <section class="content">
      <h2>What can you build?</h2>
      <ul>
        <li>Personal websites</li>
        <li>Blogs and portfolios</li>
        <li>Online stores</li>
        <li>Web applications</li>
      </ul>

      <button onclick="celebrate()">Click Me!</button>
      
      <div id="message" class="message"></div>
    </section>
  </div>
</body>
</html>`,
            `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

header {
  background: white;
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

header p {
  color: #64748b;
  font-size: 1.2rem;
}

.content {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  margin-bottom: 2rem;
}

li {
  color: #475569;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: #f1f5f9;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  font-size: 1.1rem;
}

li:before {
  content: "✓ ";
  color: #667eea;
  font-weight: bold;
  margin-right: 0.5rem;
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.message {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s;
}

.message.show {
  opacity: 1;
}`,
            `function celebrate() {
  const message = document.getElementById('message');
  message.textContent = '🎉 Awesome! You just interacted with HTML!';
  message.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
  message.style.color = 'white';
  message.classList.add('show');
  
  // Confetti effect
  setTimeout(() => {
    message.textContent = '✨ Keep exploring and building amazing things!';
  }, 2000);
}

console.log('🚀 Welcome to HTML! Start coding and see your ideas come to life!');`
          )}
          playgroundData={{
            html: `<!DOCTYPE html><html><body><h1>HTML Playground</h1></body></html>`,
            css: '',
            js: ''
          }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}

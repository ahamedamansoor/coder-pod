'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  File, Bone, Paintbrush, Zap, Plus, FileCode, Globe, Code, Layout,
  Sparkles, CheckCircle, AlertCircle, Info, History, TrendingUp, Layers,
  Box, Play, BookOpen, Target, ArrowRight, Minus, Rocket
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React from 'react';

export default function HtmlIntroduction({ onOpenWebPlayground }: { onOpenWebPlayground?: (html: string, css: string, js: string) => void }) {

    const simpleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to HTML!</p>
</body>
</html>`;

    const playgroundCode = {
      html: `<header>
  <h1>🌟 Welcome to HTML</h1>
  <p>The foundation of the web</p>
</header>

<main>
  <section>
    <h2>What can HTML do?</h2>
    <ul>
      <li>Create structure</li>
      <li>Display content</li>
      <li>Link pages together</li>
    </ul>
  </section>

  <section>
    <h2>Try it yourself!</h2>
    <p>Change the text or add elements.</p>
    <button onclick="alert('HTML is awesome!')">
      Click Me!
    </button>
  </section>
</main>

<footer>
  <p>Made with ❤️ using HTML</p>
</footer>`,
      css: `body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

header {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h2 {
  color: #667eea;
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}`,
      js: ``
    };

    const roles = [
      {
        icon: Bone,
        title: "HTML",
        subtitle: "The Skeleton",
        description: "Provides structure and content",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
      },
      {
        icon: Paintbrush,
        title: "CSS",
        subtitle: "The Skin & Style",
        description: "Makes things beautiful",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
      },
      {
        icon: Zap,
        title: "JavaScript",
        subtitle: "The Muscles & Brain",
        description: "Adds interactivity",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10"
      },
    ];

    const htmlHistory = [
      { year: "1991", event: "Tim Berners-Lee creates HTML", icon: Rocket },
      { year: "1995", event: "HTML 2.0 - First standard", icon: FileCode },
      { year: "1997", event: "HTML 3.2 & 4.0 released", icon: Layout },
      { year: "2014", event: "HTML5 - Modern web standard", icon: Sparkles },
    ];

    const whyHtmlMatters = [
      { icon: Globe, title: "Universal Language", description: "Every website uses HTML", color: "text-blue-600" },
      { icon: Layers, title: "Easy to Learn", description: "Simple syntax and instant results", color: "text-green-600" },
      { icon: TrendingUp, title: "Essential Skill", description: "Required for web development careers", color: "text-purple-600" },
      { icon: Box, title: "Building Block", description: "Foundation for CSS and JavaScript", color: "text-orange-600" },
    ];

    return (
      <div className="w-full space-y-8 min-h-screen pb-16">
        <PageHeader
          icon={File}
          category="HTML Basics"
          title="HTML Introduction"
          description="Understanding HTML and its role in building web pages"
          colorTheme="blue"
        />

        {/* What is HTML */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <FileCode className="w-8 h-8 text-primary" />
              What is HTML?
            </CardTitle>
            <CardDescription className="text-lg">
              HTML stands for <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-blue-500/10 border-2 border-blue-500/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  HTML is:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>A <strong>markup language</strong>, not a programming language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>The <strong>standard language</strong> for creating web pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Used to <strong>structure content</strong> on the web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Composed of <strong>elements/tags</strong></span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-orange-500/10 border-2 border-orange-500/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  HTML is NOT:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>A programming language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>A styling language (that's CSS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Used for complex calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Capable of storing data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 p-6 rounded-lg border-2 border-purple-500/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-600" />
                Think of it like this:
              </h3>
              <p className="text-muted-foreground">
                HTML is like the <strong>blueprint of a house</strong>. It defines where the rooms are and what the structure looks like. But it doesn't make the house beautiful (that's CSS) or functional with lights (that's JavaScript).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Web Triad */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Layers className="w-8 h-8 text-primary" />
              The Web Development Triad
            </CardTitle>
            <CardDescription className="text-lg">
              HTML, CSS, and JavaScript work together to create websites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div 
                  key={role.title} 
                  className={`p-6 rounded-xl border-2 border-${role.color.split('-')[1]}-500/20 ${role.bgColor} flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow`}
                >
                  <role.icon className={`w-12 h-12 ${role.color}`} />
                  <div>
                    <h3 className={`text-2xl font-bold ${role.color}`}>{role.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{role.subtitle}</p>
                  </div>
                  <p className="text-sm">{role.description}</p>
                </div>
              ))}
            </div>

            {/* Visual Diagram */}
            <div className="bg-muted p-8 rounded-lg border-2 border-border">
              <h3 className="text-center font-bold text-lg mb-6">How They Work Together</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex-1 text-center">
                  <div className="p-4 bg-orange-500/20 rounded-lg border-2 border-orange-500">
                    <Bone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-bold">HTML</p>
                  </div>
                </div>
                <Plus className="w-6 h-6" />
                <div className="flex-1 text-center">
                  <div className="p-4 bg-blue-500/20 rounded-lg border-2 border-blue-500">
                    <Paintbrush className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-bold">CSS</p>
                  </div>
                </div>
                <Plus className="w-6 h-6" />
                <div className="flex-1 text-center">
                  <div className="p-4 bg-yellow-500/20 rounded-lg border-2 border-yellow-500">
                    <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <p className="font-bold">JavaScript</p>
                  </div>
                </div>
                <span className="text-2xl">=</span>
                <div className="flex-1 text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border-2 border-purple-500">
                    <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-bold">Website</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anatomy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Target className="w-8 h-8 text-primary" />
              Anatomy of an HTML Element
            </CardTitle>
            <CardDescription className="text-lg">
              Understanding the parts of an HTML element
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-lg border-2">
              <div className="text-center mb-6">
                <div className="font-mono text-2xl p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg inline-block">
                  <span className="text-blue-600 font-bold">&lt;p</span>
                  <span className="text-green-600"> class=</span>
                  <span className="text-orange-600">&quot;intro&quot;</span>
                  <span className="text-blue-600 font-bold">&gt;</span>
                  <span className="text-foreground">This is a paragraph.</span>
                  <span className="text-blue-600 font-bold">&lt;/p&gt;</span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-500">
                  <div className="font-mono text-lg mb-2 text-blue-600 font-bold">&lt;p&gt;</div>
                  <Badge variant="secondary">Opening Tag</Badge>
                </div>

                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-500">
                  <div className="font-mono text-sm mb-2 text-green-600">class=&quot;intro&quot;</div>
                  <Badge variant="secondary">Attribute</Badge>
                </div>

                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-500">
                  <div className="font-mono text-sm mb-2">Content</div>
                  <Badge variant="secondary">Text</Badge>
                </div>

                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-red-500">
                  <div className="font-mono text-lg mb-2 text-red-600 font-bold">&lt;/p&gt;</div>
                  <Badge variant="secondary">Closing Tag</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Page Layout Diagram */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Layout className="w-8 h-8 text-primary" />
              Visual Layout of a Simple Page
            </CardTitle>
            <CardDescription className="text-lg">
              See where common HTML sections usually live on a page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-muted-foreground">
                  This diagram shows a typical high-level layout using semantic elements. The exact design comes from
                  CSS, but the <strong>structure</strong> comes from HTML.
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>&lt;header&gt;</strong> — logo, site title, main navigation.
                  </li>
                  <li>
                    <strong>&lt;nav&gt;</strong> — primary links to important areas.
                  </li>
                  <li>
                    <strong>&lt;main&gt;</strong> — the unique content of this page.
                  </li>
                  <li>
                    <strong>&lt;aside&gt;</strong> — related content, sidebars, or ads.
                  </li>
                  <li>
                    <strong>&lt;footer&gt;</strong> — copyright, secondary links, legal info.
                  </li>
                </ul>
              </div>
              <div className="rounded-md border bg-slate-50 dark:bg-slate-900/60 p-4 space-y-3 text-xs md:text-sm">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  <span>Page layout overview</span>
                  <span>Semantic regions</span>
                </div>
                <div className="space-y-2">
                  <div className="h-9 rounded-md bg-blue-100 dark:bg-blue-900/60 border border-blue-300 dark:border-blue-700 flex items-center justify-center font-mono text-[11px] md:text-xs">
                    &lt;header&gt;
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 h-24 rounded-md bg-indigo-50 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center font-mono text-[11px] md:text-xs text-center px-1">
                      &lt;nav&gt;
                    </div>
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="flex-1 rounded-md bg-emerald-50 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-700 flex items-center justify-center font-mono text-[11px] md:text-xs">
                        &lt;section&gt;
                      </div>
                      <div className="flex-1 rounded-md bg-amber-50 dark:bg-amber-900/60 border border-amber-200 dark:border-amber-700 flex items-center justify-center font-mono text-[11px] md:text-xs">
                        &lt;article&gt;
                      </div>
                    </div>
                  </div>
                  <div className="h-9 rounded-md bg-violet-50 dark:bg-violet-900/60 border border-violet-200 dark:border-violet-700 flex items-center justify-center font-mono text-[11px] md:text-xs">
                    &lt;aside&gt;
                  </div>
                  <div className="h-9 rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-mono text-[11px] md:text-xs">
                    &lt;footer&gt;
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <History className="w-8 h-8 text-primary" />
              History of HTML
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pl-8">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-6">
                {htmlHistory.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg absolute left-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-6">
                      <Badge variant="outline" className="mb-2">{item.year}</Badge>
                      <p className="font-bold">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why HTML Matters */}
        <Card className="border-2 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <BookOpen className="w-8 h-8 text-green-600" />
              Why Learning HTML Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {whyHtmlMatters.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-lg border-2 border-border">
                  <item.icon className={`w-10 h-10 ${item.color} flex-shrink-0`} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Simple Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileCode className="w-6 h-6 text-primary"/>
              A Basic HTML Document
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md overflow-hidden border bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 mb-4">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800">
                <span className="uppercase tracking-wide">index.html</span>
                <span className="text-slate-500 dark:text-slate-300">Basic HTML document</span>
              </div>
              <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{simpleHtml}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              This is the minimum structure most beginner HTML pages start with. As you learn more,
              you&apos;ll add metadata in the <code className="font-mono">&lt;head&gt;</code>, semantic layout
              elements in the <code className="font-mono">&lt;body&gt;</code>, and connect CSS and JavaScript files.
            </p>
          </CardContent>
        </Card>

        {/* How Browsers Read HTML - Flow Diagram */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Layout className="w-8 h-8 text-primary" />
              How Browsers Turn HTML into a Page
            </CardTitle>
            <CardDescription className="text-lg">
              From your <code className="font-mono">.html</code> file to pixels on the screen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  When you open an HTML file in a browser, the browser doesn&apos;t &quot;run&quot; it like a program.
                  Instead, it <strong>parses</strong> the markup and builds internal trees that represent the page.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span><strong>HTML Parser</strong> reads tags and builds the <strong>DOM (Document Object Model)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span><strong>CSS</strong> is loaded and combined with the DOM to build the <strong>render tree</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>The browser performs <strong>layout</strong> (where things go) and <strong>painting</strong> (how they look).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>JavaScript can then <strong>modify the DOM</strong> to update the page dynamically.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border">
                <p className="text-xs font-semibold mb-3 text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  Render pipeline (conceptual chart)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-3 py-2 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] md:text-xs text-slate-500 dark:text-slate-400">Step 1</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="mt-1 font-semibold">HTML parsed → DOM tree</div>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      The browser reads tags and turns them into nodes in the Document Object Model (DOM).
                    </p>
                  </div>
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-3 py-2 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] md:text-xs text-slate-500 dark:text-slate-400">Step 2</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="mt-1 font-semibold">CSS parsed → CSSOM</div>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Stylesheets are parsed into a separate tree (the CSSOM) that describes visual rules.
                    </p>
                  </div>
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-3 py-2 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] md:text-xs text-slate-500 dark:text-slate-400">Step 3</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="mt-1 font-semibold">Render tree → Layout</div>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      DOM + CSSOM combine into a render tree. The browser calculates sizes and positions.
                    </p>
                  </div>
                  <div className="rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-3 py-2 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] md:text-xs text-slate-500 dark:text-slate-400">Step 4</span>
                    </div>
                    <div className="mt-1 font-semibold">Paint → Compositing</div>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Pixels are drawn and composited to the screen. JavaScript can then update the DOM and trigger re-renders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beginner vs Expert View */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Code className="w-8 h-8 text-primary" />
              Beginner vs Expert View of HTML
            </CardTitle>
            <CardDescription className="text-lg">
              Start with mental models that make sense now, then grow into deeper concepts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="beginner">Beginner View</TabsTrigger>
                <TabsTrigger value="expert">Expert View</TabsTrigger>
              </TabsList>

              <TabsContent value="beginner" className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  As a beginner, treat HTML like <strong>labels and containers</strong> for your content.
                  Each tag describes what something <em>is</em>, not how it looks.
                </p>
                <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
                  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                    <span className="uppercase tracking-wide">mental-model.html</span>
                    <span className="text-slate-500 dark:text-slate-300">Beginner-friendly structure</span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{`<header>Website title and navigation</header>
<main>
  <section>One logical block of content</section>
  <section>Another logical block of content</section>
</main>
<footer>Copyright and links</footer>`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="expert" className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  As you advance, you&apos;ll think of HTML in terms of <strong>accessibility</strong>, <strong>semantics</strong>,
                  and how it shapes the <strong>DOM tree</strong> that JavaScript interacts with.
                </p>
                <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-green-100">
                  <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                    <span className="uppercase tracking-wide">dom-focused.html</span>
                    <span className="text-slate-500 dark:text-slate-300">Semantics, accessibility, DOM hooks</span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{`<main id="app-root">
  <article aria-labelledby="post-title">
    <h1 id="post-title">Understanding the DOM</h1>
    <p class="lead">HTML shapes the nodes JavaScript talks to.</p>
    <button type="button" data-action="highlight">
      Highlight key elements
    </button>
  </article>
</main>`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Edge Cases & Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Sparkles className="w-8 h-8 text-primary" />
              Common Pitfalls and Edge Cases
            </CardTitle>
            <CardDescription className="text-lg">
              Small details that make a big difference even in simple pages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-base flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  Common mistakes
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Forgetting required attributes like <code className="font-mono">alt</code> on images.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Incorrectly nesting elements (e.g., putting a <code className="font-mono">&lt;div&gt;</code> inside <code className="font-mono">&lt;p&gt;</code>).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Using headings out of order (<code className="font-mono">&lt;h3&gt;</code> directly after <code className="font-mono">&lt;h1&gt;</code>).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Minus className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                    <span>Relying on HTML alone for layout instead of combining it with CSS.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-base flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Best practices from day one
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Use semantic tags (<code className="font-mono">&lt;main&gt;</code>, <code className="font-mono">&lt;nav&gt;</code>, <code className="font-mono">&lt;section&gt;</code>) instead of generic <code className="font-mono">&lt;div&gt;</code> blocks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Always include a <code className="font-mono">&lt;!DOCTYPE html&gt;</code> at the top of your document.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Set the <code className="font-mono">lang</code> attribute on the <code className="font-mono">&lt;html&gt;</code> element for accessibility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Validate your HTML using the official W3C validator to catch structural errors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Playground */}
        {onOpenWebPlayground && (
          <Card className="border-2 border-primary/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Play className="w-8 h-8 text-primary" />
                Try It Live!
              </CardTitle>
              <CardDescription className="text-lg">
                Click below to experiment with HTML in the interactive playground
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}
                className="w-full md:w-auto"
              >
                <Play className="mr-2 h-5 w-5" /> Open Web Playground
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
}

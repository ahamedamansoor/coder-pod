'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  File, Bone, Paintbrush, Zap, Plus, FileCode, Globe, Code, Layout,
  Sparkles, CheckCircle, AlertCircle, Info, History, TrendingUp, Layers,
  Box, Play, BookOpen, Target, ArrowRight, Minus, Rocket
} from 'lucide-react';
import { PageHeader } from '../generic-page-header';
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
            <div className="bg-muted rounded-md p-4 mb-4">
              <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleHtml}</pre>
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

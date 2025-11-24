'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Code2, Globe, Zap, Layers, Play, Sparkles, Terminal, MonitorSmartphone,
  Server, Cpu, BookOpen, Rocket, Brain, CheckCircle2, ArrowRight,
  History, Activity, Database, Cloud, Smartphone, FileCode, Users,
  Timer, Lightbulb, TrendingUp, Target, Package, Workflow, Coffee,
  Palette, Box, MousePointerClick, Eye, ShieldCheck, Gauge, Network,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

interface JavaScriptWhatIsJavaScriptProps {
  onOpenEditor?: (code: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptWhatIsJavaScript({ onOpenEditor, onOpenWebPlayground }: JavaScriptWhatIsJavaScriptProps) {
  const [activeDemo, setActiveDemo] = useState<string>('');

  const openDemo = (title: string, html: string, css: string, js: string) => {
    setActiveDemo(title);
    if (onOpenWebPlayground) {
      onOpenWebPlayground(html, css, js);
    }
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Title - Using Generic Component with Blue Theme (CODER POD Logo Color) */}
      <PageHeader
        icon={Code2}
        category="JavaScript Fundamentals"
        title="What is JavaScript?"
        description="The language that brings the web to life - from interactive websites to full-stack applications"
        colorTheme="blue"
      />

      {/* Hero Introduction */}
      <div className="relative overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10 border border-border p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">
                JavaScript: The Language of Interactive Web
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                JavaScript (JS) is a <strong className="text-foreground">dynamic, high-level programming language</strong> that makes websites interactive and alive. 
                It&apos;s the only language that runs natively in web browsers, making it the backbone of modern web development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40 flex items-center gap-2 justify-center py-2 px-3">
                  <Rocket className="w-4 h-4" />
                  Easy to Learn
                </Badge>
                <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40 flex items-center gap-2 justify-center py-2 px-3">
                  <Globe className="w-4 h-4" />
                  Runs Everywhere
                </Badge>
                <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40 flex items-center gap-2 justify-center py-2 px-3">
                  <Zap className="w-4 h-4" />
                  Dynamic & Fast
                </Badge>
                <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40 flex items-center gap-2 justify-center py-2 px-3">
                  <Users className="w-4 h-4" />
                  Huge Community
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Three Pillars - Diagrammatic */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-7 h-7" />
            The Three Pillars of Web Development
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Every modern website is built with these three core technologies working together
          </p>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* HTML */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50/60 dark:bg-blue-950/10 rounded-xl border border-blue-100/50 dark:border-blue-900/30">
                <FileCode className="w-10 h-10 text-blue-600/70 dark:text-blue-400/70 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-700/80 dark:text-blue-300/80">HTML</h3>
                  <p className="text-sm text-blue-600/60 dark:text-blue-400/60">Structure</p>
                </div>
              </div>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500/60 dark:text-blue-400/60" />
                  <span className="text-sm text-muted-foreground">Page structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500/60 dark:text-blue-400/60" />
                  <span className="text-sm text-muted-foreground">Content organization</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50/30 dark:bg-blue-950/10 rounded-lg font-mono text-xs border border-blue-100/30 dark:border-blue-900/20">
                <div className="text-blue-600/70 dark:text-blue-400/60">&lt;button&gt;Click&lt;/button&gt;</div>
              </div>
            </div>

            {/* CSS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-purple-50/60 dark:bg-purple-950/10 rounded-xl border border-purple-100/50 dark:border-purple-900/30">
                <Palette className="w-10 h-10 text-purple-600/70 dark:text-purple-400/70 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-purple-700/80 dark:text-purple-300/80">CSS</h3>
                  <p className="text-sm text-purple-600/60 dark:text-purple-400/60">Style</p>
                </div>
              </div>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500/60 dark:text-purple-400/60" />
                  <span className="text-sm text-muted-foreground">Visual styling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500/60 dark:text-purple-400/60" />
                  <span className="text-sm text-muted-foreground">Layout & design</span>
                </div>
              </div>
              <div className="p-3 bg-purple-50/30 dark:bg-purple-950/10 rounded-lg font-mono text-xs border border-purple-100/30 dark:border-purple-900/20">
                <div className="text-purple-600/70 dark:text-purple-400/60">color: blue;</div>
              </div>
            </div>

            {/* JavaScript - Highlighted */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-amber-50/60 dark:bg-amber-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
                <Zap className="w-10 h-10 text-amber-600/80 dark:text-amber-400/80 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-amber-700/90 dark:text-amber-300/90">JavaScript</h3>
                  <p className="text-sm text-amber-600/70 dark:text-amber-400/70">Behavior</p>
                </div>
              </div>
              <div className="space-y-2 pl-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600/70 dark:text-amber-400/70" />
                  <span className="text-sm font-semibold">Interactivity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600/70 dark:text-amber-400/70" />
                  <span className="text-sm font-semibold">Dynamic updates</span>
                </div>
              </div>
              <div className="p-3 bg-amber-50/30 dark:bg-amber-950/10 rounded-lg font-mono text-xs border border-amber-100/30 dark:border-amber-900/20">
                <div className="text-amber-600/80 dark:text-amber-400/70">onClick = () =&gt; {'{}'}</div>
              </div>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="mt-8 p-6 bg-slate-50/50 dark:bg-slate-900/20 rounded-xl border border-slate-200/50 dark:border-slate-800/30">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="bg-blue-50/50 dark:bg-blue-950/10 text-blue-700/80 dark:text-blue-300/80 border-blue-200/40 dark:border-blue-800/30">HTML</Badge>
              <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
              <Badge variant="outline" className="bg-purple-50/50 dark:bg-purple-950/10 text-purple-700/80 dark:text-purple-300/80 border-purple-200/40 dark:border-purple-800/30">CSS</Badge>
              <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
              <Badge variant="outline" className="bg-amber-50/50 dark:bg-amber-950/10 text-amber-700/90 dark:text-amber-300/90 border-amber-200/50 dark:border-amber-800/30 font-semibold">JavaScript</Badge>
              <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
              <div className="px-4 py-2 bg-emerald-50/60 dark:bg-emerald-950/10 text-emerald-700/90 dark:text-emerald-300/90 rounded-full border border-emerald-200/50 dark:border-emerald-800/30 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Interactive Website
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Execution Map */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-7 h-7 text-blue-600/80 dark:text-blue-400/80" />
            JavaScript in a Page: Diagram View
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Follow how code travels from your editor to the browser and then responds to users.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              Write JS
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              Bundle/Serve
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              Browser Loads
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              Parse & Execute
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              DOM Updates
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-blue-200/60 dark:border-blue-800/40 font-semibold">
              Events & Re-renders
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h4 className="font-semibold">Parse & Compile</h4>
              </div>
              <p className="text-sm text-muted-foreground">Browser reads your JS, builds an abstract syntax tree, and JIT compiles hot paths.</p>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h4 className="font-semibold">Event Loop</h4>
              </div>
              <p className="text-sm text-muted-foreground">Tasks (clicks, timers, network) queue up and run one at a time, keeping apps responsive.</p>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-2">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h4 className="font-semibold">DOM & Paint</h4>
              </div>
              <p className="text-sm text-muted-foreground">JS updates DOM/CSSOM; browser runs layout & paint to show the latest UI state.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JavaScript in Simple Words */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <BookOpen className="w-7 h-7" />
            JavaScript in Simple Words
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-sky-50/50 dark:bg-sky-950/10 rounded-lg border-l-4 border-sky-400/50 dark:border-sky-600/40">
                <h4 className="font-bold  mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  For Complete Beginners
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Imagine a button on a webpage. <strong className="text-foreground">HTML creates the button</strong>, 
                  <strong className="text-muted-foreground"> CSS makes it pretty</strong>, and 
                  <strong className="text-primary"> JavaScript makes it DO something</strong> when clicked!
                </p>
              </div>
              
              <div className="p-4 bg-violet-50/50 dark:bg-violet-950/10 rounded-lg border-l-4 border-violet-400/50 dark:border-violet-600/40">
                <h4 className="font-bold  mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  For Intermediate Learners
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  JavaScript is a <strong>scripting language</strong> that executes in browsers or servers (Node.js). 
                  It supports <strong>event-driven programming</strong>, <strong>async operations</strong>, and manipulates the DOM dynamically.
                </p>
              </div>

              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/10 rounded-lg border-l-4 border-rose-400/50 dark:border-rose-600/40">
                <h4 className="font-bold  mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  For Advanced Developers
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A <strong>multi-paradigm</strong>, <strong>prototype-based</strong> language with 
                  <strong> first-class functions</strong>, featuring an <strong>event loop</strong>, 
                  <strong> closures</strong>, and JIT compilation on V8.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-amber-50/40 dark:bg-amber-950/10 rounded-xl border border-amber-200/40 dark:border-amber-800/30">
                <h4 className="font-bold text-amber-700/90 dark:text-amber-300/90 mb-4 text-lg flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Real-World Examples
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <MousePointerClick className="w-5 h-5 text-amber-600/70 dark:text-amber-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Form Validation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Check email format before submission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <Activity className="w-5 h-5 text-sky-600/70 dark:text-sky-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Live Updates</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Chat, notifications, stock prices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <Sparkles className="w-5 h-5 text-purple-600/70 dark:text-purple-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Animations</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Smooth transitions, interactive effects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <Database className="w-5 h-5 text-emerald-600/70 dark:text-emerald-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Data Loading</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fetch data without page refresh (AJAX)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Where JavaScript Runs */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <Globe className="w-7 h-7" />
            Where Does JavaScript Run?
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            From browser-only to running almost everywhere
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Client Side */}
            <div className="space-y-4">
              <div className="p-6 bg-blue-50/50 dark:bg-blue-950/10 rounded-xl border border-blue-100/40 dark:border-blue-900/30 shadow-sm hover:shadow-md transition-shadow">
                <MonitorSmartphone className="w-12 h-12 text-blue-600/70 dark:text-blue-400/70 mb-3" />
                <h3 className="text-xl font-bold  mb-2">Client-Side</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">In Your Web Browser</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">All major browsers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">DOM manipulation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">User interactions</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-center">
                <p className="text-sm font-semibold ">Where it all started! 🌐</p>
              </div>
            </div>

            {/* Server Side */}
            <div className="space-y-4">
              <div className="p-6 bg-blue-50/50 dark:bg-blue-950/10 rounded-xl border border-blue-100/40 dark:border-blue-900/30 shadow-sm hover:shadow-md transition-shadow">
                <Server className="w-12 h-12 text-emerald-600/70 dark:text-emerald-400/70 mb-3" />
                <h3 className="text-xl font-bold  mb-2">Server-Side</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Node.js & Backend</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">APIs & Services</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">Database operations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">Real-time apps</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-center">
                <p className="text-sm font-semibold ">Same language everywhere! 🚀</p>
              </div>
            </div>

            {/* Beyond Web */}
            <div className="space-y-4">
              <div className="p-6 bg-amber-50/50 dark:bg-amber-950/10 rounded-xl border border-amber-200/40 dark:border-amber-800/30 border-purple-200/50 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-shadow">
                <Cpu className="w-12 h-12 text-purple-600/70 dark:text-purple-400/70 mb-3" />
                <h3 className="text-xl font-bold  mb-2">Beyond Web</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Mobile, Desktop & IoT</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">React Native (Mobile)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">Electron (Desktop)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-gray-700 dark:text-gray-300">IoT Devices</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-center">
                <p className="text-sm font-semibold ">Truly universal! 🌍</p>
              </div>
            </div>
          </div>

          {/* Ecosystem Diagram */}
          <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <h4 className="text-center font-bold text-gray-700 dark:text-gray-300 mb-4">JavaScript Ecosystem</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-blue-50/80 dark:bg-blue-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30 text-center">
                <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600/80 dark:text-blue-400/80" />
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Browsers</p>
              </div>
              <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/20 rounded-lg border border-emerald-200/50 dark:border-emerald-800/30 text-center">
                <Server className="w-6 h-6 mx-auto mb-2 text-emerald-600/80 dark:text-emerald-400/80" />
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Node.js</p>
              </div>
              <div className="p-3 bg-purple-50/80 dark:bg-purple-950/20 rounded-lg border border-purple-200/50 dark:border-purple-800/30 text-center">
                <Smartphone className="w-6 h-6 mx-auto mb-2 text-purple-600/80 dark:text-purple-400/80" />
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">Mobile</p>
              </div>
              <div className="p-3 bg-cyan-50/80 dark:bg-cyan-950/20 rounded-lg border border-cyan-200/50 dark:border-cyan-800/30 text-center">
                <Cloud className="w-6 h-6 mx-auto mb-2 text-cyan-600/80 dark:text-cyan-400/80" />
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">Cloud</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples with Web Playground */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <Play className="w-7 h-7" />
            Try JavaScript Live!
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Click to open examples in the web playground and see JavaScript in action
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Hello World */}
            <div className="p-6 bg-amber-50/50 dark:bg-amber-950/10 rounded-xl border border-amber-200/40 dark:border-amber-800/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Hello World</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your first JavaScript program</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm border border-gray-300 dark:border-gray-700">
                <div className="text-gray-600 dark:text-gray-500">// Your first JS code</div>
                <div className="text-blue-600 dark:text-blue-400">console</div><span className="text-gray-900 dark:text-white">.log(</span><span className="text-green-600 dark:text-green-400">&apos;Hello, JavaScript!&apos;</span><span className="text-gray-900 dark:text-white">);</span>
              </div>
              <Button 
                onClick={() => openDemo(
                  'Hello World',
                  `<!DOCTYPE html>
<html>
<head>
  <title>Hello JavaScript</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 20% 20%, #fff7ed 0, #fff 35%), #f1f5f9;
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .card {
      width: min(640px, 100%);
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 20px 80px rgba(15, 23, 42, 0.08);
      padding: 24px;
    }
    h1 {
      margin: 0 0 12px;
      color: #f59e0b;
      font-size: 26px;
      letter-spacing: -0.5px;
    }
    p {
      margin: 0 0 12px;
      color: #475569;
    }
    #output {
      margin-top: 16px;
      padding: 16px;
      border-radius: 12px;
      background: linear-gradient(120deg, #fff7ed, #fef9c3);
      border: 1px dashed #fbbf24;
      color: #0f172a;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>JavaScript Hello World</h1>
    <p>Your first script writes to the console and the page.</p>
    <div id="output">Waiting for JavaScript...</div>
  </div>
</body>
</html>`,
                  ``,
                  `// Your first JavaScript
console.log('Hello, JavaScript!');
document.getElementById('output').innerHTML = '<h2>✅ Hello, JavaScript!</h2><p>You just ran your first JS code!</p>';`
                )}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Run in Playground
              </Button>
            </div>

            {/* Example 2: Interactive Button */}
            <div className="p-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500/80 dark:bg-blue-600/80 rounded-lg">
                  <MousePointerClick className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-700/90 dark:text-blue-300/90">Interactive Button</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Click events in action</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm border border-gray-300 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400">button</div><span className="text-gray-900 dark:text-white">.onclick = () =&gt; {'{'}</span>
                <div className="pl-4 text-purple-600 dark:text-purple-400">alert</div><span className="text-gray-900 dark:text-white">(</span><span className="text-green-600 dark:text-green-400">&apos;Clicked!&apos;</span><span className="text-gray-900 dark:text-white">);</span>
                <div className="text-white">{'}'};</div>
              </div>
              <Button 
                onClick={() => openDemo(
                  'Interactive Button',
                  `<!DOCTYPE html>
<html>
<head>
  <title>Interactive Button</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: linear-gradient(180deg, #eff6ff, #e0f2fe);
      display: grid;
      place-items: center;
      padding: 24px;
      color: #0f172a;
    }
    .panel {
      width: min(720px, 100%);
      background: #fff;
      border: 1px solid #dbeafe;
      border-radius: 18px;
      box-shadow: 0 24px 80px rgba(37, 99, 235, 0.12);
      padding: 28px;
      text-align: center;
    }
    h1 { margin: 0 0 10px; color: #2563eb; }
    p { margin: 0 0 18px; color: #475569; }
    #myBtn {
      background: linear-gradient(120deg, #2563eb, #38bdf8);
      color: #fff;
      padding: 14px 32px;
      border: none;
      border-radius: 999px;
      font-size: 17px;
      letter-spacing: 0.3px;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.2s ease;
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
    }
    #myBtn:hover { transform: translateY(-1px); }
    #myBtn:active { transform: translateY(0); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
    #output {
      margin-top: 18px;
      padding: 16px;
      border-radius: 12px;
      background: #f1f5f9;
      border: 1px dashed #cbd5e1;
      font-weight: 600;
      color: #0f172a;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Click the Button!</h1>
    <p>JavaScript listens for your click, updates text, and counts interactions.</p>
    <button id="myBtn">Click Me</button>
    <div id="output">No clicks yet.</div>
  </div>
</body>
</html>`,
                  ``,
                  `let clickCount = 0;
const button = document.getElementById('myBtn');
const output = document.getElementById('output');

button.onclick = () => {
  clickCount++;
  output.innerHTML = '<h2>🎉 Button Clicked!</h2><p>Total clicks: ' + clickCount + '</p>';
};`
                )}
                className="w-full bg-blue-500/80 hover:bg-blue-600/90 dark:bg-blue-600/80 dark:hover:bg-blue-700/90 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Run in Playground
              </Button>
            </div>

            {/* Example 3: Dynamic Content */}
            <div className="p-6 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 ">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-emerald-500/80 dark:bg-emerald-600/80 rounded-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-700/90 dark:text-emerald-300/90">Dynamic Content</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Update page without reload</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm border border-gray-300 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400">element</div><span className="text-gray-900 dark:text-white">.innerHTML = </span>
                <div className="pl-4 text-green-600 dark:text-green-400">&apos;New content!&apos;</div><span className="text-gray-900 dark:text-white">;</span>
              </div>
              <Button 
                onClick={() => openDemo(
                  'Dynamic Content',
                  `<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Content</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: linear-gradient(145deg, #ecfdf3, #e0f2fe);
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .wrapper {
      width: min(720px, 100%);
      background: #fff;
      border: 1px solid #bbf7d0;
      border-radius: 18px;
      padding: 26px;
      box-shadow: 0 20px 70px rgba(16, 185, 129, 0.15);
    }
    h1 { margin: 0 0 8px; color: #10b981; letter-spacing: -0.4px; }
    p { margin: 0 0 16px; color: #475569; }
    #updateBtn {
      background: linear-gradient(120deg, #10b981, #22c55e);
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 12px 30px rgba(16, 185, 129, 0.25);
      font-weight: 600;
      transition: transform 0.12s ease;
    }
    #updateBtn:hover { transform: translateY(-1px); }
    #content {
      margin-top: 18px;
      padding: 18px;
      border-radius: 12px;
      background: #f0fdf4;
      border: 1px dashed #34d399;
      font-size: 18px;
      transition: all 0.3s ease;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>Dynamic Content Update</h1>
    <p>Click the button and watch JavaScript rewrite the card in-place.</p>
    <button id="updateBtn">Update Content</button>
    <div id="content">Original content here...</div>
  </div>
</body>
</html>`,
                  ``,
                  `const button = document.getElementById('updateBtn');
const content = document.getElementById('content');
let updateCount = 0;

button.onclick = () => {
  updateCount++;
  content.innerHTML = '<h2>✨ Content Updated!</h2><p>Update #' + updateCount + '</p><p>JavaScript changed this without reloading the page!</p>';
  content.style.background = '#d1fae5';
};`
                )}
                className="w-full bg-emerald-500/80 hover:bg-emerald-600/90 dark:bg-emerald-600/80 dark:hover:bg-emerald-700/90 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Run in Playground
              </Button>
            </div>

            {/* Example 4: Form Validation */}
            <div className="p-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 ">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-500/80 dark:bg-purple-600/80 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-700/90 dark:text-purple-300/90 ">Form Validation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Check user input</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm border border-gray-300 dark:border-gray-700">
                <div className="text-purple-600 dark:text-purple-400">if</div><span className="text-gray-900 dark:text-white"> (email.includes(</span><span className="text-green-600 dark:text-green-400">&apos;@&apos;</span><span className="text-gray-900 dark:text-white">)) {'{'}</span>
                <div className="pl-4 text-gray-500">// Valid ✅</div>
                <div className="text-white">{'}'}</div>
              </div>
              <Button 
                onClick={() => openDemo(
                  'Form Validation',
                  `<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 80% 20%, #fdf4ff, #eef2ff);
      display: grid;
      place-items: center;
      padding: 24px;
      color: #0f172a;
    }
    .card {
      width: min(720px, 100%);
      background: #fff;
      border: 1px solid #e9d5ff;
      border-radius: 18px;
      padding: 26px;
      box-shadow: 0 22px 70px rgba(168, 85, 247, 0.15);
    }
    h1 { margin: 0 0 10px; color: #a855f7; letter-spacing: -0.4px; }
    p { margin: 0 0 14px; color: #475569; }
    .input-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    #emailInput {
      flex: 1;
      min-width: 220px;
      padding: 12px 14px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 16px;
      transition: border 0.2s ease, box-shadow 0.2s ease;
    }
    #emailInput:focus {
      border-color: #a855f7;
      box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.18);
      outline: none;
    }
    #validateBtn {
      background: linear-gradient(120deg, #a855f7, #6366f1);
      color: #fff;
      padding: 12px 20px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
      box-shadow: 0 14px 36px rgba(99, 102, 241, 0.22);
      transition: transform 0.12s ease;
    }
    #validateBtn:hover { transform: translateY(-1px); }
    #result {
      margin-top: 18px;
      padding: 14px;
      border-radius: 12px;
      font-weight: 700;
      display: inline-block;
      min-width: 240px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Email Validation</h1>
    <p>Enter an email and let JavaScript validate it before any submit.</p>
    <div class="input-row">
      <input type="text" id="emailInput" placeholder="you@example.com" />
      <button id="validateBtn">Validate</button>
    </div>
    <div id="result"></div>
  </div>
</body>
</html>`,
                  ``,
                  `const input = document.getElementById('emailInput');
const button = document.getElementById('validateBtn');
const result = document.getElementById('result');

button.onclick = () => {
  const email = input.value;
  if (email.includes('@') && email.includes('.')) {
    result.innerHTML = '✅ Valid email format!';
    result.style.background = '#d1fae5';
    result.style.color = '#065f46';
  } else {
    result.innerHTML = '❌ Invalid email format!';
    result.style.background = '#fee2e2';
    result.style.color = '#991b1b';
  }
};`
                )}
                className="w-full bg-purple-500/80 hover:bg-purple-600/90 dark:bg-purple-600/80 dark:hover:bg-purple-700/90 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Run in Playground
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brief History */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <History className="w-7 h-7" />
            A Brief History of JavaScript
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-primary/50"></div>
            
            <div className="space-y-8">
              {/* 1995 */}
              <div className="relative flex items-start gap-6 pl-20">
                <div className="absolute left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  1995
                </div>
                <div className="flex-1 bg-amber-50/50 dark:bg-amber-950/10 p-6 rounded-xl border border-amber-200/40 dark:border-amber-800/30 ">
                  <h4 className="text-lg font-bold  mb-2 flex items-center gap-2">
                    <Coffee className="w-5 h-5" />
                    Birth of JavaScript
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Created by <strong>Brendan Eich</strong> in just <strong>10 days</strong> at Netscape. 
                    Originally called &quot;Mocha&quot;, then &quot;LiveScript&quot;, finally &quot;JavaScript&quot; for marketing reasons.
                  </p>
                </div>
              </div>

              {/* 1997 */}
              <div className="relative flex items-start gap-6 pl-20">
                <div className="absolute left-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  1997
                </div>
                <div className="flex-1 bg-blue-50/50 dark:bg-blue-950/10 p-6 rounded-xl border border-blue-200/40 dark:border-blue-800/30">
                  <h4 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <FileCode className="w-5 h-5" />
                    ECMAScript Standard
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    JavaScript became standardized as <strong>ECMAScript (ES)</strong>. This ensured consistency across different browsers.
                  </p>
                </div>
              </div>

              {/* 2009 */}
              <div className="relative flex items-start gap-6 pl-20">
                <div className="absolute left-0 w-16 h-16 bg-emerald-500/80 dark:bg-emerald-600/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  2009
                </div>
                <div className="flex-1 bg-emerald-50/50 dark:bg-emerald-950/10 p-6 rounded-xl border border-emerald-200/40 dark:border-emerald-800/30 ">
                  <h4 className="text-lg font-bold  mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    Node.js Released
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Ryan Dahl</strong> created Node.js, allowing JavaScript to run on servers. 
                    This revolutionized web development - same language for front and back!
                  </p>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative flex items-start gap-6 pl-20">
                <div className="absolute left-0 w-16 h-16 bg-sky-500/80 dark:bg-sky-600/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  2015
                </div>
                <div className="flex-1 bg-sky-50/50 dark:bg-sky-950/10 p-6 rounded-xl border border-sky-200/50 dark:border-sky-800/30">
                  <h4 className="text-lg font-bold  mb-2 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    ES6/ES2015 Revolution
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Major update with <strong>arrow functions</strong>, <strong>classes</strong>, <strong>promises</strong>, 
                    <strong> let/const</strong>, and more. Modern JavaScript was born!
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative flex items-start gap-6 pl-20">
                <div className="absolute left-0 w-16 h-16 bg-purple-500/80 dark:bg-purple-600/80 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  NOW
                </div>
                <div className="flex-1 bg-purple-50/50 dark:bg-purple-950/10 p-6 rounded-xl border border-purple-200/40 dark:border-purple-800/30 ">
                  <h4 className="text-lg font-bold  mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Most Popular Language
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    JavaScript is the <strong>#1 most used programming language</strong> on GitHub. 
                    Powers millions of websites, apps, and services worldwide!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <Sparkles className="w-7 h-7" />
            Key Features of JavaScript
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold ">Dynamic Typing</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Variables can hold any type of data. No need to declare types explicitly.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 ">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold ">Event-Driven</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Responds to user actions like clicks, keypresses, and mouse movements.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 ">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold ">First-Class Functions</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Functions can be stored in variables, passed as arguments, and returned.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-500 rounded-lg">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-primary">Asynchronous</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Handle multiple operations at once with callbacks, promises, and async/await.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-rose-500 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-foreground">Prototype-Based</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Objects inherit properties from prototypes, enabling powerful inheritance patterns.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30 ">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyan-500 rounded-lg">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold ">Cross-Platform</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Write once, run anywhere - browsers, servers, mobile, desktop, IoT.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Journey - Beginner to Expert */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <TrendingUp className="w-7 h-7" />
            Your JavaScript Learning Journey
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            From absolute beginner to expert developer
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Beginner Level */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <div className="flex-1 p-6 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 ">
                <h4 className="text-lg font-bold  mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Beginner: The Fundamentals
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">What you&apos;ll learn:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Variables (let, const, var)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Data types & operators
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Functions & loops
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Basic DOM manipulation
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">You can build:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Simple calculators</li>
                      <li>• Form validation</li>
                      <li>• Interactive buttons</li>
                      <li>• Basic games (tic-tac-toe)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <div className="flex-1 p-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
                <h4 className="text-lg font-bold  mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Intermediate: Deeper Concepts
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">What you&apos;ll learn:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-foreground" />
                        Async/await & Promises
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-foreground" />
                        ES6+ features
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-foreground" />
                        API calls & JSON
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-foreground" />
                        Error handling
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">You can build:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Weather apps with APIs</li>
                      <li>• To-do list with storage</li>
                      <li>• Image galleries</li>
                      <li>• Real-time chat apps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <div className="flex-1 p-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 ">
                <h4 className="text-lg font-bold  mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Advanced: Professional Development
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">What you&apos;ll learn:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Design patterns
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Performance optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Testing & debugging
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Frameworks (React, Vue, Node)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">You can build:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Full-stack applications</li>
                      <li>• E-commerce platforms</li>
                      <li>• Social media apps</li>
                      <li>• Enterprise solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Learn JavaScript */}
      <Card className="">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-3 text-2xl ">
            <Lightbulb className="w-7 h-7" />
            Why Learn JavaScript?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30  text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold  mb-2 text-lg">High Demand</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                One of the most in-demand skills in tech. Millions of job opportunities worldwide.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold  mb-2 text-lg">Rich Ecosystem</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Millions of packages on npm. Tools and libraries for everything you need.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30  text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold  mb-2 text-lg">Full-Stack</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Master both frontend and backend with a single language.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 dark:bg-amber-950/10 rounded-xl border border-amber-200/40 dark:border-amber-800/30 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2 text-lg">Fast Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Build and iterate quickly. See changes instantly in the browser.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-rose-50/60 to-orange-50/60 dark:from-rose-950/10 dark:to-orange-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2 text-lg">Great Community</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Massive community support. Endless tutorials, forums, and resources.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30  text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold  mb-2 text-lg">Future-Proof</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Constantly evolving with new features. Will remain relevant for years.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 space-y-6">
          <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
            <Sparkles className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your JavaScript Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            JavaScript opens the door to web development, full-stack engineering, and countless opportunities. 
            Start learning today and join millions of developers worldwide!
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Badge className="bg-white text-amber-700 text-base px-6 py-3 hover:bg-white/90 transition-colors">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Easy to Start
            </Badge>
            <Badge className="bg-white text-amber-700 text-base px-6 py-3 hover:bg-white/90 transition-colors">
              <Rocket className="w-5 h-5 mr-2" />
              Fast Progress
            </Badge>
            <Badge className="bg-white text-amber-700 text-base px-6 py-3 hover:bg-white/90 transition-colors">
              <Target className="w-5 h-5 mr-2" />
              Career Ready
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

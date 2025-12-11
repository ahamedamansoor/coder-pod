'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TopicTitle } from '@/components/shared/topic-title';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { 
  Blocks, 
  Sparkles, 
  Zap, 
  Package,
  Component,
  RefreshCw,
  ArrowRight,
  Smile,
  Box,
  TrendingUp
} from 'lucide-react';

export default function WhatIsReact() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Blocks}
        category="React · Introduction & Setup"
        title="What is React?"
        description="Discover React - Facebook's powerful JavaScript library for building fast, interactive user interfaces with reusable components."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Introduction: What is React? */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
        <CardContent className="space-y-6 pt-6">
          <TopicTitle
            icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
            title="What is React?"
            description="Discover React - Facebook's powerful JavaScript library for building fast, interactive user interfaces with reusable components"
            size="lg"
          />
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>React</strong> is a <strong>JavaScript library</strong> created by Facebook (Meta) for building user interfaces. 
            Think of it as a smart toolbox that helps you create interactive websites and apps more easily!
          </p>

          {/* Founding Story */}
          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-cyan-300 dark:border-cyan-700">
            <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">The React Origin Story 🚀</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
              <p><strong>Created by Jordan Walke</strong>, a software engineer at Facebook, React was born in <strong>2011</strong> to solve Facebook's scaling problems. It was first deployed on Facebook's News Feed, then Instagram in 2012.</p>
              <p><strong>Open-sourced in May 2013</strong> at JSConf US, React revolutionized how developers build web applications. What started as Facebook's internal tool is now the <strong>#1 most loved web framework</strong> used by millions worldwide!</p>
            </AlertDescription>
          </Alert>

          {/* Key Facts Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Library, Not Framework</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React focuses solely on the view layer. Flexible and lightweight - add only what you need!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Powered by Meta</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintained by Meta (Facebook) & open-source community. Used in Facebook, Instagram, WhatsApp & more!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-400">Industry Standard</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                16M+ weekly downloads on npm. Used by Netflix, Airbnb, Uber, Tesla, and thousands more!
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-lg mb-4 text-cyan-900 dark:text-cyan-100 flex items-center gap-2">
              <span className="text-2xl">⏱️</span> React Timeline
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2011</Badge>
                <p className="text-gray-700 dark:text-gray-300">Jordan Walke creates FaxJS (React prototype) at Facebook</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2013</Badge>
                <p className="text-gray-700 dark:text-gray-300">React open-sourced at JSConf US - Game changer! 🎉</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2015</Badge>
                <p className="text-gray-700 dark:text-gray-300">React Native launched - Build mobile apps with React!</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2019</Badge>
                <p className="text-gray-700 dark:text-gray-300">React Hooks introduced - Revolutionized state management</p>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-500 text-white shrink-0">2024</Badge>
                <p className="text-gray-700 dark:text-gray-300">React 19 - Compiler, Server Components, Actions & more! 🚀</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Think of React Like Building with LEGO Blocks */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardContent className="space-y-6 pt-6">
          <TopicTitle
            icon={<Blocks className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
            title="Think of React Like... Building with LEGO! 🧱"
            description="React gives you organized building blocks to create your UI, just like LEGO sets help you build amazing things!"
            size="lg"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-3xl">🔨</span> Traditional Way (HTML/JS)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Imagine building with loose bricks scattered everywhere. Every time you want to make something, you have to start from scratch. Want another button? Write all the code again! 😰
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-3xl">✨</span> React Way
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                React gives you organized LEGO sets! Create a "Button" component once, use it everywhere. Need 100 buttons? Just copy the same block! It's like magic! 🪄
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
            <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Big Idea</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              React lets you build UIs from <strong>reusable pieces</strong> called <strong>components</strong>. It's like having a toolbox of ready-made parts you can snap together!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated How React Works */}
      <Card className="border-2">
        <CardContent className="space-y-6 pt-6">
          <TopicTitle
            icon={<RefreshCw className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
            title="How Does React Actually Work? 🔄"
            description="Let's visualize the magic behind React's reactive updates and component rendering"
            size="lg"
          />
          <div className="relative max-w-5xl mx-auto">
            {/* The Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Step 1: Data Changes */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-8 rounded-2xl border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center animate-bounce">
                      <Box className="w-10 h-10 text-white" />
                    </div>
                    <Badge className="bg-purple-500 text-white text-sm">1. Data Changes</Badge>
                    <p className="text-center text-sm font-medium">User clicks<br/>or data updates</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-cyan-500 animate-pulse" />
              </div>

              {/* Step 2: React Updates */}
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-8 rounded-2xl border-2 border-cyan-300 dark:border-cyan-700">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-cyan-500 dark:bg-cyan-600 flex items-center justify-center animate-bounce" style={{animationDelay: '0.3s'}}>
                      <RefreshCw className="w-10 h-10 text-white animate-spin" style={{animationDuration: '2s'}} />
                    </div>
                    <Badge className="bg-cyan-500 text-white text-sm">2. React Reacts!</Badge>
                    <p className="text-center text-sm font-medium">Auto-updates<br/>only what changed</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-emerald-500 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>

              {/* Step 3: UI Updates */}
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-8 rounded-2xl border-2 border-emerald-300 dark:border-emerald-700">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center">
                      <Smile className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <Badge className="bg-emerald-500 text-white text-sm">3. User Sees It!</Badge>
                    <p className="text-center text-sm font-medium">Screen updates<br/>instantly ⚡</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                ⚡ All of this happens in <span className="text-cyan-600 dark:text-cyan-400">milliseconds</span>!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your First React Component */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Component className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
          title="Your First React Component"
          description="Here's a simple React component. Notice how clean and readable it is!"
          size="lg"
        />

        <FrontendCodePreview
          title="Simple Greeting Component"
          description="A basic React component that displays a greeting message"
          colorTheme="cyan"
          react={`function Greeting() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the world of components! 🎉</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);`}
          html={`<div id="root"></div>`}
          css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#root > div {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 40px;
  border-radius: 16px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
}

#root h1 {
  font-size: 2.5rem;
  margin: 0 0 16px 0;
  font-weight: bold;
}

#root p {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
}`}
          js={`// Load React from CDN
const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function Greeting() {
    return h('div', null,
      h('h1', null, 'Hello, React!'),
      h('p', null, 'Welcome to the world of components! 🎉')
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Greeting));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
        />
      </div>

      {/* Interactive Example with State */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
          title="Interactive Component with State"
          description="This is where React shines! Watch how state makes components interactive:"
          size="lg"
        />

        <FrontendCodePreview
          title="Counter Component"
          description="Click the button and count updates automatically!"
          colorTheme="purple"
          react={`const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);`}
          html={`<div id="root"></div>`}
          css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#root > div {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
  width: 100%;
  max-width: 800px;
}

#root > div p {
  font-size: 1.5rem;
  margin: 0 0 30px 0;
  font-weight: 500;
}

#root > div button {
  padding: 15px 50px;
  font-size: 1.2rem;
  background: white;
  color: #8b5cf6;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

#root > div button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

#root > div button:active {
  transform: translateY(0);
}`}
          js={`// Load React from CDN
const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function Counter() {
    const [count, setCount] = useState(0);
    
    return h('div', { className: 'counter-box' },
      h('p', null, \`You clicked \${count} times\`),
      h('button', { 
        onClick: () => setCount(count + 1) 
      }, 'Click me!')
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Counter));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
        />
      </div>


      {/* What Makes React Special? */}
      <Card>
        <CardContent className="space-y-6 pt-6">
          <TopicTitle
            icon={<Sparkles className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
            title="Why Developers Love React"
            description="Discover the key features that make React one of the most popular JavaScript libraries"
            size="lg"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg border">
              <h4 className="font-bold mb-2">✅ Reusable & Organized</h4>
              <p className="text-sm text-muted-foreground">Build components once, use them everywhere. Your code stays clean and manageable.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg border">
              <h4 className="font-bold mb-2">⚡ Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">React's "Virtual DOM" makes updates super quick. Users never wait!</p>
            </div>
            <div className="p-4 bg-muted rounded-lg border">
              <h4 className="font-bold mb-2">🌍 Huge Community</h4>
              <p className="text-sm text-muted-foreground">Millions of developers use React. Need help? There's always someone to ask!</p>
            </div>
            <div className="p-4 bg-muted rounded-lg border">
              <h4 className="font-bold mb-2">📱 Works Everywhere</h4>
              <p className="text-sm text-muted-foreground">Web, mobile (React Native), desktop - same skills, different platforms!</p>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Code2,
  Sparkles,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Heart,
} from 'lucide-react';

export default function JavaScriptWhatIsJavaScript() {
  return (
    <div className="w-full min-h-screen space-y-8 pb-16">
      <PageHeader
        icon={Code2}
        category="JavaScript Fundamentals"
        title="What is JavaScript?"
        description="The programming language that powers modern web interactivity"
        colorTheme="yellow"
      />

      {/* Simple Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                JavaScript Makes Web Pages Come Alive
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think about your favorite websites. When you click a button and something happens, when you fill out a form and it checks your input, when images slide across the screen - that's <strong className="text-yellow-700 dark:text-yellow-400">JavaScript</strong> working behind the scenes.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              If building a website is like building a house:<br/>
              <strong>HTML</strong> is the structure (walls, rooms, doors)<br/>
              <strong>CSS</strong> is the decoration (colors, furniture, style)<br/>
              <strong>JavaScript</strong> is the electricity and plumbing (makes everything work)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* What Does JavaScript Do? */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>What Does JavaScript Actually Do?</CardTitle>
              <CardDescription>Real examples you see every day</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🖱️</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Responds to Clicks</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Buttons that add items to cart, "Like" buttons, menu dropdowns, pop-ups, and notifications
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Validates Forms</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Checks if email format is correct, password is strong enough, all required fields are filled
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Creates Animations</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Image sliders, smooth scrolling, loading spinners, interactive charts and graphs
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Updates Content</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Shows new messages without refreshing, loads more posts as you scroll, updates prices in real-time
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Analogy */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 overflow-hidden">
        <CardContent className="pt-8 pb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Understanding JavaScript: A Visual Analogy
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Think of building a website like creating a person
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* HTML - Skeleton */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-orange-300 dark:border-orange-700 hover:scale-105 transition-transform">
                <div className="text-6xl mb-4 text-center">🦴</div>
                <h4 className="text-xl font-bold mb-3 text-center text-orange-700 dark:text-orange-400">HTML</h4>
                <div className="text-center mb-4">
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-0 text-sm">
                    The Skeleton
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Provides the <strong>structure and bones</strong>. Headings, paragraphs, images, buttons - the basic framework.
                </p>
              </div>
            </div>

            {/* CSS - Dress/Style */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-blue-300 dark:border-blue-700 hover:scale-105 transition-transform">
                <div className="text-6xl mb-4 text-center">👗</div>
                <h4 className="text-xl font-bold mb-3 text-center text-blue-700 dark:text-blue-400">CSS</h4>
                <div className="text-center mb-4">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 text-sm">
                    The Dress
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Makes it <strong>look beautiful</strong>. Colors, fonts, spacing, layouts - the styling and appearance.
                </p>
              </div>
            </div>

            {/* JavaScript - Movement */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-yellow-300 dark:border-yellow-700 hover:scale-105 transition-transform shadow-lg">
                <div className="text-6xl mb-4 text-center animate-bounce">🏃</div>
                <h4 className="text-xl font-bold mb-3 text-center text-yellow-700 dark:text-yellow-400">JavaScript</h4>
                <div className="text-center mb-4">
                  <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-0 text-sm">
                    The Movement
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Brings it to <strong>life with actions</strong>. Walking, running, responding - the behavior and interactivity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/60 dark:bg-slate-900/60 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">The Complete Picture</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  A skeleton alone is just bones. Add a dress and it looks nice. But add <strong className="text-yellow-700 dark:text-yellow-400">movement (JavaScript)</strong> and suddenly it's alive! It can walk, dance, respond when you talk to it. That's what JavaScript does to websites - it makes them <strong>interactive and alive</strong>.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Rocket className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>See JavaScript in Action!</CardTitle>
              <CardDescription>Try these interactive examples - click and interact!</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <CodeSnippet
        title="Example 1: Click Counter"
        description="Every click updates the number - this is JavaScript responding to your actions!"
        code={`const button = document.getElementById('clickBtn');
const counter = document.getElementById('counter');

let count = 0;

button.addEventListener('click', () => {
  count = count + 1;
  counter.textContent = count;
  console.log('Clicked! Count is now:', count);
});`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<div style="text-align: center; padding: 60px 40px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px;">
  <h2 style="color: #92400e; margin-bottom: 16px; font-size: 24px;">Click Counter</h2>
  <div style="font-size: 72px; font-weight: bold; color: #b45309; margin: 24px 0;" id="counter">0</div>
  <button id="clickBtn" style="padding: 16px 40px; font-size: 18px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3); transition: all 0.2s;">Click Me!</button>
</div>`,
          css: `button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4) !important;
}

button:active {
  transform: translateY(0);
}`,
          js: `const button = document.getElementById('clickBtn');
const counter = document.getElementById('counter');

let count = 0;

button.addEventListener('click', () => {
  count = count + 1;
  counter.textContent = count;
  console.log('Clicked! Count is now:', count);
});`,
          layout: 'horizontal',
        }}
      />

      <CodeSnippet
        title="Example 2: Greeting Generator"
        description="Type your name and get a personalized greeting!"
        code={`const input = document.getElementById('nameInput');
const button = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

button.addEventListener('click', () => {
  const name = input.value;
  
  if (name) {
    greeting.textContent = \`Hello, \${name}! Welcome to JavaScript! 👋\`;
    greeting.style.color = '#15803d';
    console.log('Greeting created for:', name);
  } else {
    greeting.textContent = 'Please enter your name first!';
    greeting.style.color = '#dc2626';
    console.log('No name entered');
  }
});`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<div style="text-align: center; padding: 60px 40px; background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); border-radius: 12px;">
  <h2 style="color: #92400e; margin-bottom: 24px; font-size: 24px;">What's Your Name?</h2>
  <input id="nameInput" type="text" placeholder="Enter your name..." style="padding: 14px 20px; font-size: 16px; border: 3px solid #f59e0b; border-radius: 10px; width: 260px; margin-right: 12px;" />
  <button id="greetBtn" style="padding: 14px 32px; font-size: 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">Greet Me!</button>
  <p id="greeting" style="margin-top: 32px; font-size: 22px; font-weight: 600; min-height: 30px; color: #78350f;"></p>
</div>`,
          css: `input:focus {
  outline: none;
  border-color: #d97706;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4) !important;
}`,
          js: `const input = document.getElementById('nameInput');
const button = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

button.addEventListener('click', () => {
  const name = input.value;
  
  if (name) {
    greeting.textContent = \`Hello, \${name}! Welcome to JavaScript! 👋\`;
    greeting.style.color = '#15803d';
    console.log('Greeting created for:', name);
  } else {
    greeting.textContent = 'Please enter your name first!';
    greeting.style.color = '#dc2626';
    console.log('No name entered');
  }
});`,
          layout: 'horizontal',
        }}
      />

      <CodeSnippet
        title="Example 3: Background Color Changer"
        description="Click the button to randomly change the background color"
        code={`const button = document.getElementById('changeBtn');
const box = document.getElementById('colorBox');
const colorName = document.getElementById('colorName');

const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
const colorNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  box.style.background = colors[randomIndex];
  colorName.textContent = colorNames[randomIndex];
  console.log('Color changed to:', colorNames[randomIndex]);
});`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<div style="text-align: center; padding: 40px; background: #fffbeb; border-radius: 12px;">
  <div id="colorBox" style="width: 200px; height: 200px; margin: 0 auto 24px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 20px; transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.1);"></div>
  <h3 id="colorName" style="font-size: 28px; font-weight: bold; margin-bottom: 24px; color: #78350f;">Yellow</h3>
  <button id="changeBtn" style="padding: 14px 32px; font-size: 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">Change Color</button>
</div>`,
          css: `button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4) !important;
}`,
          js: `const button = document.getElementById('changeBtn');
const box = document.getElementById('colorBox');
const colorName = document.getElementById('colorName');

const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
const colorNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  box.style.background = colors[randomIndex];
  colorName.textContent = colorNames[randomIndex];
  console.log('Color changed to:', colorNames[randomIndex]);
});`,
          layout: 'horizontal',
        }}
      />

      {/* Where JavaScript Runs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Globe className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Where Can You Use JavaScript?</CardTitle>
              <CardDescription>JavaScript is everywhere on the web and beyond</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <Monitor className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Websites</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Interactive features, animations, form validation, and dynamic content
              </p>
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0">
                Most Common
              </Badge>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <Smartphone className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Mobile Apps</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Build iOS and Android apps using React Native or similar frameworks
              </p>
              <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-0">
                Very Popular
              </Badge>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800/30">
              <Code2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Servers</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Build backend systems with Node.js to handle databases and APIs
              </p>
              <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-0">
                Powerful
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why JavaScript? */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Heart className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Why Should You Learn JavaScript?</CardTitle>
              <CardDescription>Perfect for beginners and professionals alike</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10">
              <div className="text-3xl">🎯</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Easy to Get Started</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No complicated setup. Every computer has a web browser. Just open the browser console (press F12), type JavaScript, and see results instantly. It's that simple!
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10">
              <div className="text-3xl">💼</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">High Job Demand</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  JavaScript is the #1 most used programming language. Every company building websites or apps needs JavaScript developers. Great career opportunities and salaries.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Build Anything</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  From simple interactive buttons to complex web apps like Gmail, mobile apps like Instagram, or even games. One language for everything!
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border-2 border-amber-200 dark:border-amber-800/30 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/10 dark:to-yellow-950/10">
              <div className="text-3xl">🌍</div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Massive Community</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Millions of developers worldwide. Tons of free resources, tutorials, libraries, and frameworks. Someone has probably solved any problem you'll face!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Makes Websites Interactive</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JavaScript responds to user actions like clicks, typing, and scrolling
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Beginner Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No installation needed - just open browser console and start coding
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Works Everywhere</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Websites, mobile apps, servers, games - JavaScript does it all
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Great Career Path</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    High demand, excellent salaries, remote work opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

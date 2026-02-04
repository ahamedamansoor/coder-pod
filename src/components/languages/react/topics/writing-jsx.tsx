'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Code,
  Brackets,
  Lightbulb,
  CurlyBraces,
  Sparkles,
  Tag,
  CheckCircle2,
  XCircle,
  Shield,
  Zap,
  Box,
  FileCode
} from 'lucide-react';

export default function WritingJSX() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Brackets}
        category="React · Core Concepts"
        title="Writing JSX"
        description="Learn JSX syntax - the special syntax that lets you write HTML-like code in JavaScript. Master the language of React!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is JSX?"
              description="JSX stands for JavaScript XML - it's a syntax extension that lets you write HTML-like code in JavaScript!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              JSX looks like HTML, but it's actually JavaScript under the hood. React transforms your JSX code into regular JavaScript function calls. This makes your code more readable and intuitive!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-red-500">✗</span> Before JSX
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  React.createElement('h1', null, 'Hello!')
                </div>
                <p className="text-xs text-muted-foreground mt-2">Hard to read and write</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span> With JSX
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  {'<h1>Hello!</h1>'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Clean and intuitive!</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why JSX?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                JSX makes React code easier to write and understand. It combines the power of JavaScript with the familiarity of HTML - best of both worlds!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Your First JSX"
            description="Let's write some JSX and see it in action!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Hello World in JSX"
            description="The simplest JSX example - just like HTML but in React!"
            colorTheme="cyan"
            react={`function Greeting() {
  return (
    <div className="greeting">
      <h1>Hello, World! 👋</h1>
      <p>Welcome to React with JSX!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function Greeting() {
    return h('div', { className: 'greeting' },
      h('h1', null, 'Hello, World! 👋'),
      h('p', null, 'Welcome to React with JSX!')
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Greeting));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
}

.greeting {
  background: white;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.greeting h1 {
  color: #06b6d4;
  font-size: 2.5rem;
  margin: 0 0 15px 0;
}

.greeting p {
  color: #64748b;
  font-size: 1.2rem;
  margin: 0;
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Tag className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="JSX Rules You Must Follow"
              description="JSX has a few important rules - follow these and you'll be fine!"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3 mb-3">
                  <Badge className="bg-purple-600">Rule 1</Badge>
                  <h3 className="font-bold text-lg">Return a Single Root Element</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  You can't return multiple JSX elements side by side. Wrap them in a parent element like {'<div>'} or use a Fragment {'<>...</>'}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">❌ Wrong</p>
                    <pre className="text-xs">{`return (
  <h1>Title</h1>
  <p>Text</p>
);`}</pre>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">✅ Correct</p>
                    <pre className="text-xs">{`return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);`}</pre>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3 mb-3">
                  <Badge className="bg-purple-600">Rule 2</Badge>
                  <h3 className="font-bold text-lg">Close All Tags</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  JSX requires all tags to be explicitly closed. Self-closing tags like {'<img>'} must end with {'/>'}.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">❌ Wrong</p>
                    <pre className="text-xs">{`<img src="cat.jpg">
<br>
<input type="text">`}</pre>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">✅ Correct</p>
                    <pre className="text-xs">{`<img src="cat.jpg" />
<br />
<input type="text" />`}</pre>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3 mb-3">
                  <Badge className="bg-purple-600">Rule 3</Badge>
                  <h3 className="font-bold text-lg">Use className Instead of class</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Since 'class' is a reserved keyword in JavaScript, JSX uses 'className' instead.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">❌ Wrong</p>
                    <pre className="text-xs">{'<div class="container">'}</pre>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">✅ Correct</p>
                    <pre className="text-xs">{'<div className="container">'}</pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="JSX with Multiple Elements"
            description="Building more complex UI structures with proper nesting"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Profile Card with Multiple Elements"
            description="See how JSX handles multiple nested elements - just like HTML!"
            colorTheme="cyan"
            react={`function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="avatar">👤</div>
      <h2 className="name">Sarah Johnson</h2>
      <p className="title">Frontend Developer</p>
      <div className="stats">
        <div className="stat">
          <strong>156</strong>
          <span>Projects</span>
        </div>
        <div className="stat">
          <strong>2.4k</strong>
          <span>Followers</span>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileCard />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function ProfileCard() {
    return h('div', { className: 'profile-card' },
      h('div', { className: 'avatar' }, '👤'),
      h('h2', { className: 'name' }, 'Sarah Johnson'),
      h('p', { className: 'title' }, 'Frontend Developer'),
      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('strong', null, '156'),
          h('span', null, 'Projects')
        ),
        h('div', { className: 'stat' },
          h('strong', null, '2.4k'),
          h('span', null, 'Followers')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ProfileCard));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.profile-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 300px;
}

.avatar {
  font-size: 4rem;
  margin-bottom: 20px;
}

.name {
  color: #1e293b;
  font-size: 1.8rem;
  margin: 0 0 5px 0;
}

.title {
  color: #64748b;
  margin: 0 0 25px 0;
}

.stats {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat strong {
  color: #667eea;
  font-size: 1.5rem;
}

.stat span {
  color: #94a3b8;
  font-size: 0.85rem;
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<FileCode className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="JSX Attributes"
              description="How to add attributes to your JSX elements"
              size="lg"
            />

            <div className="space-y-4">
              <p className="text-base text-gray-700 dark:text-gray-300">
                JSX attributes work similarly to HTML attributes, but with a few differences:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    camelCase Properties
                  </h4>
                  <p className="text-sm mb-3">Most attributes use camelCase:</p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded text-sm font-mono">
                    {'<button onClick={handler}>'}
                    <br />
                    {'<div className="box">'}
                    <br />
                    {'<label htmlFor="name">'}
                  </div>
                </div>

                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-600" />
                    Reserved Words
                  </h4>
                  <p className="text-sm mb-3">Some HTML attributes have different names:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code className="text-red-600">class</code>
                      <span>→</span>
                      <code className="text-green-600">className</code>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600">for</code>
                      <span>→</span>
                      <code className="text-green-600">htmlFor</code>
                    </div>
                    <div className="flex justify-between">
                      <code className="text-red-600">tabindex</code>
                      <span>→</span>
                      <code className="text-green-600">tabIndex</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  JSX Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these tips to write clean, maintainable JSX code!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>parentheses</strong> for multi-line JSX</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>self-closing tags</strong> for elements without children</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>Fragments</strong> {'<>...</>'} to avoid extra divs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Keep JSX <strong>readable</strong> with proper indentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>meaningful names</strong> for className values</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Avoid This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>class</strong> instead of <strong>className</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't forget to <strong>close tags</strong> properly</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't return <strong>multiple root elements</strong> without wrapper</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>inline styles</strong> excessively (use CSS)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't nest JSX <strong>too deeply</strong> (break into components)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}


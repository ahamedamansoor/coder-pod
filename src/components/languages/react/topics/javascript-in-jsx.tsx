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

export default function JavaScriptInJSX() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={CurlyBraces}
        category="React · Core Concepts"
        title="JavaScript in JSX"
        description="Master the art of embedding JavaScript expressions in JSX using curly braces. Make your components dynamic and powerful!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CurlyBraces className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Magic of Curly Braces {}"
              description="Curly braces are your gateway to JavaScript inside JSX!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In JSX, you write HTML-like code. But what if you want to use a JavaScript variable or expression? That's where <strong>curly braces {'{}'}</strong> come in! They let you "escape" back into JavaScript from JSX.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-red-500">✗</span> Without Curly Braces
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  {'<h1>Hello, name</h1>'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Shows literal text "name"</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span> With Curly Braces
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  {'<h1>Hello, {name}</h1>'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Shows the value: "Hello, Sarah"</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Think of it like this</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Curly braces are like "JavaScript mode". When React sees {'{}'}, it evaluates whatever JavaScript is inside and displays the result!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Displaying Variables"
            description="Use curly braces to show JavaScript variables in your JSX!"
            size="lg"
          />

          <FrontendCodePreview
            title="Using Variables with Curly Braces"
            description="See how JavaScript variables are displayed using {} in JSX!"
            colorTheme="cyan"
            react={`function Greeting() {
  const name = "Sarah";
  const age = 25;
  
  return (
    <div className="card">
      <h1>Hello, {name}! 👋</h1>
      <p>You are {age} years old</p>
      <p>Next year you'll be {age + 1}</p>
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
    const name = "Sarah";
    const age = 25;
    
    return h('div', { className: 'card' },
      h('h1', null, 'Hello, ', name, '! 👋'),
      h('p', null, 'You are ', age, ' years old'),
      h('p', null, 'Next year you\\'ll be ', age + 1)
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

.card {
  background: white;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.card h1 {
  color: #06b6d4;
  font-size: 2.5rem;
  margin: 0 0 15px 0;
}

.card p {
  color: #64748b;
  font-size: 1.2rem;
  margin: 10px 0;
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What Can You Put in Curly Braces?"
              description="Almost any JavaScript expression works inside {}!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ Works Great
                </h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    {'{name}'}
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    {'{2 + 2}'}
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    {'{user.age}'}
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    {'{formatDate(today)}'}
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  ❌ Doesn't Work
                </h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded">
                    {'{if (x) ...}'}
                  </div>
                  <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded">
                    {'{for (let i ...}'}
                  </div>
                  <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded">
                    {'{const x = 5}'}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    These are statements, not expressions!
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Remember</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Expressions produce a value. Statements (like if, for) don't. Use expressions inside curly braces!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Box className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Using Object Properties"
            description="Access object properties inside JSX with curly braces!"
            size="lg"
          />

          <FrontendCodePreview
            title="User Profile with Object"
            description="See how to display object properties in JSX"
            colorTheme="cyan"
            react={`function UserProfile() {
  const user = {
    name: "Alex Chen",
    role: "Frontend Developer",
    location: "San Francisco",
    followers: 1234
  };
  
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p className="role">{user.role}</p>
      <p className="location">📍 {user.location}</p>
      <p className="followers">👥 {user.followers} followers</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserProfile />);`}
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

  function UserProfile() {
    const user = {
      name: "Alex Chen",
      role: "Frontend Developer",
      location: "San Francisco",
      followers: 1234
    };
    
    return h('div', { className: 'profile' },
      h('h2', null, user.name),
      h('p', { className: 'role' }, user.role),
      h('p', { className: 'location' }, '📍 ', user.location),
      h('p', { className: 'followers' }, '👥 ', user.followers, ' followers')
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(UserProfile));
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

.profile {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  min-width: 300px;
}

.profile h2 {
  color: #667eea;
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.profile p {
  margin: 8px 0;
  color: #64748b;
  font-size: 1.1rem;
}

.profile .role {
  color: #8b5cf6;
  font-weight: 600;
}

.profile .location, .profile .followers {
  font-size: 0.95rem;
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Using Curly Braces in Attributes"
              description="You can use JavaScript in HTML attributes too!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Curly braces aren't just for text content - you can use them in attributes like <code>src</code>, <code>alt</code>, <code>className</code>, and more!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold mb-3">Static Attributes</h4>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded text-sm font-mono">
                  {'<img src="cat.jpg" />'}
                  <br />
                  {'<div className="card" />'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Use quotes for fixed values</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold mb-3">Dynamic Attributes</h4>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded text-sm font-mono">
                  {'<img src={imageUrl} />'}
                  <br />
                  {'<div className={theme} />'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Use curly braces for variables</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Important Rule</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Don't mix quotes and curly braces! Use <code>src={'{imageUrl}'}</code> NOT <code>src="{'{imageUrl}'}"</code>
              </AlertDescription>
            </Alert>
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
                  Curly Braces Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these tips to use JavaScript in JSX effectively!
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
                    <span>Use curly braces for <strong>variables</strong>: <code>{'{name}'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use curly braces for <strong>expressions</strong>: <code>{'{2 + 2}'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use curly braces for <strong>object properties</strong>: <code>{'{user.name}'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use curly braces for <strong>function calls</strong>: <code>{'{formatDate()}'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use curly braces in <strong>attributes</strong>: <code>{'src={url}'}</code></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Don't Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>statements</strong>: <code>{'{if (x) ...}'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't mix <strong>quotes and braces</strong>: <code>{'src="{url}"'}</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't forget <strong>curly braces</strong> for variables in attributes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>objects directly</strong>: <code>{'{user}'}</code> won't display</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't declare <strong>variables</strong>: <code>{'{const x = 5}'}</code></span>
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

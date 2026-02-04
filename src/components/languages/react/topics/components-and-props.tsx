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
  Package,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  XCircle,
  Gift,
  Zap,
  Users,
  MessageSquare
} from 'lucide-react';

export default function ComponentsAndProps() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="React · Describing the UI"
        title="Components and Props"
        description="Master the art of passing data between components using props. Build reusable, flexible components that communicate with each other!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Gift className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Props?"
              description="Props are like function parameters - they let you pass data into components!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Props</strong> (short for "properties") are how React components talk to each other. Think of props as arguments you pass to a function. When you create a component, you can give it data through props, and the component can use that data to display different content!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-blue-500">📦</span> Parent Component
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  {'<Greeting name="Sarah" />'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Passes data down ⬇️</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-green-500">🎁</span> Child Component
                </h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                  {'function Greeting(props) { ... }'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Receives data ✅</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Props flow one way: from parent to child (top to bottom). A child component can't change its props - they're read-only!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Your First Prop"
            description="Let's pass data to a component using props!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Passing Props to a Component"
            description="See how to pass a name prop and display it in the component"
            colorTheme="cyan"
            react={`function Greeting(props) {
  return (
    <div className="card">
      <h1>Hello, {props.name}! 👋</h1>
      <p>Welcome to React Props!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Sarah" />
      <Greeting name="Mike" />
      <Greeting name="Emma" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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

  function Greeting(props) {
    return h('div', { className: 'card' },
      h('h1', null, 'Hello, ', props.name, '! 👋'),
      h('p', null, 'Welcome to React Props!')
    );
  }

  function App() {
    return h('div', null,
      h(Greeting, { name: 'Sarah' }),
      h(Greeting, { name: 'Mike' }),
      h(Greeting, { name: 'Emma' })
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  padding: 20px;
}

.card {
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin: 10px;
}

.card h1 {
  color: #06b6d4;
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.card p {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Destructuring Props"
              description="A cleaner way to access props!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Instead of writing <code>props.name</code> every time, you can <strong>destructure</strong> props directly in the function parameters. This makes your code cleaner and easier to read!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold mb-3">Without Destructuring</h4>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded text-sm font-mono space-y-2">
                  <div>function Card(props) {'{'}</div>
                  <div className="pl-4">return {'<div>'}</div>
                  <div className="pl-8">{'<h2>{props.title}</h2>'}</div>
                  <div className="pl-8">{'<p>{props.text}</p>'}</div>
                  <div className="pl-4">{'</div>'}</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Repetitive 😕</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold mb-3">With Destructuring ✨</h4>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded text-sm font-mono space-y-2">
                  <div>function Card({'{title, text}'}) {'{'}</div>
                  <div className="pl-4">return {'<div>'}</div>
                  <div className="pl-8">{'<h2>{title}</h2>'}</div>
                  <div className="pl-8">{'<p>{text}</p>'}</div>
                  <div className="pl-4">{'</div>'}</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Clean & readable! ✅</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Multiple Props"
            description="Pass as many props as you need to a component!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="User Card with Multiple Props"
            description="Pass multiple props like name, role, and avatar to create rich components"
            colorTheme="cyan"
            react={`function UserCard({ name, role, avatar }) {
  return (
    <div className="user-card">
      <div className="avatar">{avatar}</div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <UserCard 
        name="Sarah Johnson" 
        role="Frontend Developer" 
        avatar="👩‍💻"
      />
      <UserCard 
        name="Mike Chen" 
        role="Backend Engineer" 
        avatar="👨‍💼"
      />
      <UserCard 
        name="Emma Davis" 
        role="UI/UX Designer" 
        avatar="👩‍🎨"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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

  function UserCard({ name, role, avatar }) {
    return h('div', { className: 'user-card' },
      h('div', { className: 'avatar' }, avatar),
      h('h2', null, name),
      h('p', { className: 'role' }, role)
    );
  }

  function App() {
    return h('div', { className: 'container' },
      h(UserCard, { name: 'Sarah Johnson', role: 'Frontend Developer', avatar: '👩‍💻' }),
      h(UserCard, { name: 'Mike Chen', role: 'Backend Engineer', avatar: '👨‍💼' }),
      h(UserCard, { name: 'Emma Davis', role: 'UI/UX Designer', avatar: '👩‍🎨' })
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.user-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  min-width: 200px;
}

.avatar {
  font-size: 4rem;
  margin-bottom: 15px;
}

.user-card h2 {
  color: #667eea;
  font-size: 1.5rem;
  margin: 0 0 8px 0;
}

.user-card .role {
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Default Props"
              description="Provide fallback values when props aren't passed!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Sometimes you want a prop to have a default value if it's not provided. You can use <strong>default parameters</strong> in destructuring to set fallback values!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold mb-3">Setting Default Values</h4>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded font-mono text-sm space-y-2">
                <div>function Button({'{text = "Click me", color = "blue"}'}) {'{'}</div>
                <div className="pl-4">return {'<button style={{background: color}}>'}</div>
                <div className="pl-8">{'{text}'}</div>
                <div className="pl-4">{'</button>'}</div>
                <div>{'}'}</div>
                <div className="mt-4 text-muted-foreground">{'// Usage:'}</div>
                <div>{'<Button />'}  <span className="text-green-600">{'// Uses defaults'}</span></div>
                <div>{'<Button text="Submit" />'}  <span className="text-green-600">{'// text="Submit", color="blue"'}</span></div>
                <div>{'<Button text="Delete" color="red" />'}  <span className="text-green-600">{'// Both custom'}</span></div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Default props make your components more flexible and prevent errors when props are missing!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="The Children Prop"
            description="A special prop for nesting content inside components!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Using the children Prop"
            description="The children prop lets you pass JSX content between component tags"
            colorTheme="cyan"
            react={`function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card title="Welcome! 👋">
        <p>This is content passed as children!</p>
        <p>You can put anything here!</p>
      </Card>
      
      <Card title="Features ⭐">
        <p>✅ Easy to use</p>
        <p>✅ Flexible</p>
        <p>✅ Reusable</p>
      </Card>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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

  function Card({ title, children }) {
    return h('div', { className: 'card' },
      h('h3', null, title),
      h('div', { className: 'content' }, children)
    );
  }

  function App() {
    return h('div', { className: 'container' },
      h(Card, { title: 'Welcome! 👋' },
        h('p', null, 'This is content passed as children!'),
        h('p', null, 'You can put anything here!')
      ),
      h(Card, { title: 'Features ⭐' },
        h('p', null, '✅ Easy to use'),
        h('p', null, '✅ Flexible'),
        h('p', null, '✅ Reusable')
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 250px;
  max-width: 300px;
}

.card h3 {
  color: #06b6d4;
  font-size: 1.5rem;
  margin: 0 0 15px 0;
  border-bottom: 2px solid #06b6d4;
  padding-bottom: 10px;
}

.card .content {
  color: #64748b;
}

.card .content p {
  margin: 8px 0;
  font-size: 1rem;
}`}
          />
        </div>

        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  Props Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these guidelines to use props effectively!
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
                    <span>Use <strong>descriptive prop names</strong> like <code>userName</code> not <code>x</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span><strong>Destructure props</strong> for cleaner code</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Provide <strong>default values</strong> when appropriate</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Keep props <strong>simple and focused</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <code>children</code> for <strong>wrapping content</strong></span>
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
                    <span>Don't <strong>modify props</strong> - they're read-only!</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't pass <strong>too many props</strong> (use objects instead)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>unclear names</strong> like <code>data1</code>, <code>data2</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>forget type checking</strong> in larger apps</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't create <strong>circular dependencies</strong> between components</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<MessageSquare className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Props Flow: Parent to Child"
              description="Understanding the one-way data flow in React"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center border-2 border-indigo-400">
                    <span className="text-sm font-bold">Parent</span>
                  </div>
                  <ArrowRight className="w-8 h-8 text-indigo-600" />
                  <div className="w-32 h-20 bg-indigo-100 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center border-2 border-indigo-400">
                    <span className="text-sm font-bold">Child</span>
                  </div>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm">
                  <p className="font-semibold mb-2">Key Points:</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Data flows <strong>downward</strong> from parent to child</li>
                    <li>• Children <strong>cannot modify</strong> props they receive</li>
                    <li>• This makes data flow <strong>predictable</strong> and easier to debug</li>
                    <li>• Parent components <strong>control</strong> what data children receive</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Why One-Way?</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                One-way data flow makes React apps easier to understand and debug. You always know where data comes from and where it's going!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

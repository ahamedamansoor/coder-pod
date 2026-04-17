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
  ShieldCheck,
  Lightbulb,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Bug,
  Beaker,
  RefreshCw
} from 'lucide-react';

export default function KeepingComponentsPure() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ShieldCheck}
        category="React · Describing the UI"
        title="Keeping Components Pure"
        description="Learn why pure components are predictable, testable, and safe. Master the art of writing reliable React code!"
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Beaker className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is a Pure Function?"
              description="Pure functions are predictable - same input always gives same output!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A <strong>pure function</strong> is like a reliable calculator. Give it the same input, and it always returns the same output. It doesn't change anything outside itself, and it doesn't depend on anything that might change. React components should work the same way!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ Pure Function
                </h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>function double(x) {'{'}</div>
                  <div className="pl-4">return x * 2;</div>
                  <div>{'}'}</div>
                  <div className="mt-3 text-muted-foreground">double(3) → 6 (always!)</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Same input = Same output ✅</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  ❌ Impure Function
                </h4>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>let count = 0;</div>
                  <div>function increment() {'{'}</div>
                  <div className="pl-4">count = count + 1;</div>
                  <div className="pl-4">return count;</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Changes external variable ❌</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pure Components = Predictable UI</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                When React components are pure, they're easier to understand, test, and debug. Same props always produce the same JSX!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Pure Component Example"
            description="A component that always produces the same output for the same props!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Pure Recipe Component"
            description="Given the same props, this component always renders the same result"
            colorTheme="cyan"
            react={`function Recipe({ name, ingredients, servings }) {
  // Pure! Only uses props, no external variables
  const multipliedIngredients = ingredients.map(ing => ({
    ...ing,
    amount: ing.amount * servings
  }));
  
  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <p className="servings">Servings: {servings}</p>
      <ul>
        {multipliedIngredients.map((ing, i) => (
          <li key={i}>
            {ing.amount} {ing.unit} {ing.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const pancakeIngredients = [
    { name: 'Flour', amount: 1, unit: 'cup' },
    { name: 'Eggs', amount: 2, unit: '' },
    { name: 'Milk', amount: 1, unit: 'cup' }
  ];
  
  return (
    <div className="container">
      <Recipe 
        name="Pancakes 🥞" 
        ingredients={pancakeIngredients}
        servings={2}
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

  function Recipe({ name, ingredients, servings }) {
    const multipliedIngredients = ingredients.map(ing => ({
      ...ing,
      amount: ing.amount * servings
    }));
    
    return h('div', { className: 'recipe-card' },
      h('h2', null, name),
      h('p', { className: 'servings' }, 'Servings: ', servings),
      h('ul', null,
        multipliedIngredients.map((ing, i) =>
          h('li', { key: i }, ing.amount, ' ', ing.unit, ' ', ing.name)
        )
      )
    );
  }

  function App() {
    const pancakeIngredients = [
      { name: 'Flour', amount: 1, unit: 'cup' },
      { name: 'Eggs', amount: 2, unit: '' },
      { name: 'Milk', amount: 1, unit: 'cup' }
    ];
    
    return h('div', { className: 'container' },
      h(Recipe, { 
        name: 'Pancakes 🥞', 
        ingredients: pancakeIngredients,
        servings: 2
      })
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
  justify-content: center;
}

.recipe-card {
  background: white;
  padding: 35px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  min-width: 300px;
}

.recipe-card h2 {
  color: #06b6d4;
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.servings {
  color: #8b5cf6;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 20px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  border-left: 3px solid #06b6d4;
  color: #1e293b;
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Bug className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What Makes a Component Impure?"
              description="Side effects - when your component changes things outside itself!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A component is <strong>impure</strong> when it has <strong>side effects</strong> - it changes things that existed before rendering. This includes modifying variables outside the component, changing the DOM directly, or making network requests during render.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  ❌ Impure: Modifying External Variable
                </h4>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>let guestCount = 0;</div>
                  <div className="mt-2">function Cup() {'{'}</div>
                  <div className="pl-4">guestCount = guestCount + 1;  {'// ❌ BAD!'}</div>
                  <div className="pl-4">return {'<h2>Guest #{guestCount}</h2>;'}</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-red-600 mt-2">Problem: Changes external state during render!</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ Pure: Using Props
                </h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>function Cup({'{guest}'}) {'{'}</div>
                  <div className="pl-4">return {'<h2>Guest #{guest}</h2>;  // ✅ GOOD!'}</div>
                  <div>{'}'}</div>
                </div>
                <p className="text-xs text-green-600 mt-2">Solution: Pass data through props!</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Why Does This Matter?</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                React may render components multiple times. If a component has side effects, those effects will run multiple times, causing bugs!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Local Mutation is OK!"
              description="Changing variables created during rendering is perfectly fine!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              It's totally fine to change variables and arrays that you create <strong>during the same render</strong>. This is called <strong>local mutation</strong>. The key is that these variables didn't exist before your component started rendering!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                ✅ Local Mutation Example
              </h4>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded font-mono text-sm space-y-2">
                <div>function TodoList({'{todos}'}) {'{'}</div>
                <div className="pl-4 text-muted-foreground">{'// Create NEW array during this render'}</div>
                <div className="pl-4">const items = [];  {'// ✅ Fresh & local'}</div>
                <div className="pl-4"></div>
                <div className="pl-4">for (let i = 0; i {'<'} todos.length; i++) {'{'}</div>
                <div className="pl-8">items.push({'<li>{todos[i]}</li>'});  {'// ✅ OK to mutate'}</div>
                <div className="pl-4">{'}'}</div>
                <div className="pl-4"></div>
                <div className="pl-4">return {'<ul>{items}</ul>;'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-xs text-green-600 mt-3">✅ The array was created fresh in this render - safe to change!</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="React's Strict Mode"
            description="A development tool that helps you find impure components!"
            size="lg"
          />

          <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
            <CardContent className="space-y-6 pt-6">
              <p className="text-base text-gray-700 dark:text-gray-300">
                React has a special <strong>Strict Mode</strong> that calls each component twice during development (not in production). If your component is impure, calling it twice will reveal the problem!
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                  <h4 className="font-bold mb-3">How It Works</h4>
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm space-y-3">
                    <div className="flex items-start gap-2">
                      <span>1️⃣</span>
                      <span>Renders component once</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>2️⃣</span>
                      <span>Renders component again</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>3️⃣</span>
                      <span>If results differ → Component is impure!</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                  <h4 className="font-bold mb-3">Enabling Strict Mode</h4>
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm font-mono space-y-2">
                    <div>{'<React.StrictMode>'}</div>
                    <div className="pl-4">{'<App />'}</div>
                    <div>{'</React.StrictMode>'}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Wrap your app to enable checking!</p>
                </div>
              </div>

              <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
                <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <AlertTitle className="text-indigo-900 dark:text-indigo-100">Development Only</AlertTitle>
                <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                  Strict Mode only runs in development. Your production build won't call components twice!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-emerald-50/50 dark:from-teal-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-teal-600 dark:text-teal-400" />}
              title="Where Should Side Effects Go?"
              description="Side effects belong in event handlers and useEffect, not during render!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If you need to do something with side effects (update a variable, call an API, modify the DOM), don't do it during render! Instead, use <strong>event handlers</strong> or the <strong>useEffect</strong> Hook.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ Event Handlers
                </h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>function Button() {'{'}</div>
                  <div className="pl-4">function handleClick() {'{'}</div>
                  <div className="pl-8">{'// Side effects OK here!'}</div>
                  <div className="pl-8">console.log('clicked');</div>
                  <div className="pl-4">{'}'}</div>
                  <div className="pl-4"></div>
                  <div className="pl-4">return {'<button onClick={handleClick} />'}</div>
                  <div>{'}'}</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ useEffect Hook
                </h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm font-mono space-y-2">
                  <div>function Component() {'{'}</div>
                  <div className="pl-4">useEffect(() ={'>'} {'{'}</div>
                  <div className="pl-8">{'// Side effects OK here!'}</div>
                  <div className="pl-8">fetchData();</div>
                  <div className="pl-4">{'}, []);'}</div>
                  <div className="pl-4"></div>
                  <div className="pl-4">return {'<div>...</div>'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border-teal-300 dark:border-teal-700">
              <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <AlertTitle className="text-teal-900 dark:text-teal-100">Remember</AlertTitle>
              <AlertDescription className="text-teal-800 dark:text-teal-200">
                Rendering must be pure. Side effects go in event handlers or useEffect!
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
                  Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these guidelines to keep your components pure!
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
                    <span>Only use <strong>props and state</strong> during render</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Create <strong>new arrays/objects</strong> instead of modifying existing ones</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Put side effects in <strong>event handlers</strong> or <strong>useEffect</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>Strict Mode</strong> during development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Test that components work when <strong>rendered twice</strong></span>
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
                    <span>Don't <strong>modify variables</strong> that existed before render</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>mutate props</strong> - they're read-only!</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't make <strong>API calls</strong> during render</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>modify the DOM</strong> directly during render</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't rely on <strong>timing</strong> of other renders</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Quick Summary"
              description="Key takeaways about pure components!"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">What is Purity?</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  A pure component only cares about its props. Given the same props, it always returns the same JSX. It doesn't change anything outside itself.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">Why Does It Matter?</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React can skip rendering pure components when their props haven't changed. Pure components are also easier to test, debug, and optimize!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">The Golden Rule</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  Keep rendering pure. Put side effects in event handlers or useEffect!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

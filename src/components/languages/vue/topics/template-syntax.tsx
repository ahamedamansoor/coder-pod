'use client';

import React from 'react';
import { Code, Braces, Type, Hash } from 'lucide-react';

export default function TemplateSyntax() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/30">
            <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Template Syntax</h1>
            <p className="text-lg text-muted-foreground">Vue's declarative template syntax</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Introduction</h2>
        <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <p className="text-lg leading-relaxed">
            Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to 
            the underlying component instance's data. All Vue.js templates are valid HTML that can be parsed by 
            spec-compliant browsers and HTML parsers.
          </p>
        </div>
      </section>

      {/* Text Interpolation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Text Interpolation</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Basic Text Binding</h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-4">The most basic form of data binding is text interpolation using the "Mustache" syntax:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<span>Message: {{ message }}</span>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              The mustache tag will be replaced with the value of the <code className="bg-slate-200 px-1">message</code> property 
              on the corresponding component instance. It will also be updated whenever the <code className="bg-slate-200 px-1">message</code> property changes.
            </p>
          </div>
        </div>
      </section>

      {/* Raw HTML */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Raw HTML</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Braces className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Using v-html</h3>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <p className="mb-4">The double mustaches interpret data as plain text, not HTML. To output real HTML, use the <code className="bg-orange-100 px-1">v-html</code> directive:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>`}</pre>
            </div>
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded">
              <p className="text-red-800 dark:text-red-200 font-semibold">⚠️ Security Warning</p>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily 
                lead to XSS attacks. Only use v-html on trusted content and never on user-provided content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribute Bindings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Attribute Bindings</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Using v-bind</h3>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <p className="mb-4">Mustaches cannot be used inside HTML attributes. Instead, use a <code className="bg-green-100 px-1">v-bind</code> directive:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<div v-bind:id="dynamicId"></div>`}</pre>
            </div>
            <p className="mt-4 mb-4">The shorthand for <code className="bg-green-100 px-1">v-bind</code> is simply <code className="bg-green-100 px-1">:</code>:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<div :id="dynamicId"></div>`}</pre>
            </div>
          </div>
        </div>

        {/* Boolean Attributes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Boolean Attributes</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-4">For boolean attributes, Vue follows the browser's behavior:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<button :disabled="isButtonDisabled">Button</button>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              If <code className="bg-slate-200 px-1">isButtonDisabled</code> has the value <code className="bg-slate-200 px-1">null</code>, <code className="bg-slate-200 px-1">undefined</code>, or <code className="bg-slate-200 px-1">false</code>, 
              the <code className="bg-slate-200 px-1">disabled</code> attribute will not be included in the rendered <code className="bg-slate-200 px-1">&lt;button&gt;</code> element.
            </p>
          </div>
        </div>

        {/* Dynamic Attributes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Dynamic Attributes</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-4">You can also bind to dynamic attribute names:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<button :[key]="value"></button>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              When <code className="bg-slate-200 px-1">key</code> is <code className="bg-slate-200 px-1">"href"</code>, this binding will be equivalent to <code className="bg-slate-200 px-1">v-bind:href="value"</code>.
            </p>
          </div>
        </div>
      </section>

      {/* JavaScript Expressions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">JavaScript Expressions</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="mb-4">Vue.js supports full JavaScript expressions inside all data bindings:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div :id="'list-' + id"></div>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              These expressions will be evaluated as JavaScript in the data scope of the current component instance.
            </p>
          </div>
        </div>

        {/* Restrictions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Expression Restrictions</h3>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="mb-4">Each binding can only contain <strong>one single expression</strong>. The following will NOT work:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm text-red-400">
              <pre>{`<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Directives */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Directives</h2>
        <div className="space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <p className="mb-4">Directives are special attributes with the <code className="bg-indigo-100 px-1">v-</code> prefix. Directive attribute values are expected 
            to be single JavaScript expressions (with the exception of <code className="bg-indigo-100 px-1">v-for</code> and <code className="bg-indigo-100 px-1">v-on</code>).</p>
            
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<p v-if="seen">Now you see me</p>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Here, the <code className="bg-indigo-100 px-1">v-if</code> directive would remove/insert the &lt;p&gt; element based on the truthiness of the value of the expression <code className="bg-indigo-100 px-1">seen</code>.
            </p>
          </div>
        </div>

        {/* Arguments */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Arguments</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-4">Some directives can take an "argument", denoted by a colon after the directive name:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<a v-bind:href="url"> ... </a>
<a :href="url"> ... </a>

<!-- Shorthand for v-on -->
<a v-on:click="doSomething"> ... </a>
<a @click="doSomething"> ... </a>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Here <code className="bg-slate-200 px-1">href</code> is the argument telling the <code className="bg-slate-200 px-1">v-bind</code> directive to bind the element's <code className="bg-slate-200 px-1">href</code> attribute 
              to the value of the expression <code className="bg-slate-200 px-1">url</code>.
            </p>
          </div>
        </div>

        {/* Dynamic Arguments */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Dynamic Arguments</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-4">It is also possible to use a dynamic argument in a directive attribute:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<a v-bind:[attributeName]="url"> ... </a>
<a :[attributeName]="url"> ... </a>`}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Here <code className="bg-slate-200 px-1">attributeName</code> will be dynamically evaluated as a JavaScript expression, and its evaluated value 
              will be used as the final argument name.
            </p>
          </div>
        </div>
      </section>

      {/* Modifiers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Modifiers</h2>
        <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
          <p className="mb-4">Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way:</p>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
            <pre>{`<form @submit.prevent="onSubmit"> ... </form>`}</pre>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            The <code className="bg-teal-100 px-1">.prevent</code> modifier tells the <code className="bg-teal-100 px-1">v-on</code> directive to call <code className="bg-teal-100 px-1">event.preventDefault()</code> 
            on the triggered event.
          </p>
        </div>
      </section>

      {/* Shorthands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Shorthands</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">v-bind Shorthand</h3>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm mb-2">
              <pre>{`<!-- Full syntax -->
<a v-bind:href="url"> ... </a>

<!-- Shorthand -->
<a :href="url"> ... </a>`}</pre>
            </div>
          </div>
          
          <div className="bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
            <h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">v-on Shorthand</h3>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm mb-2">
              <pre>{`<!-- Full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- Shorthand -->
<a @click="doSomething"> ... </a>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Practice Examples</h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Try these examples:</h3>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
            <pre>{`<!-- Text interpolation -->
<h1>{{ title }}</h1>
<p>{{ message.toUpperCase() }}</p>

<!-- Attribute binding -->
<img :src="imageUrl" :alt="imageAlt">
<div :class="{ active: isActive, 'text-danger': hasError }">

<!-- Conditional rendering -->
<p v-if="showMessage">{{ message }}</p>
<p v-else>Message is hidden</p>

<!-- Event handling -->
<button @click="count++">Count: {{ count }}</button>
<button @click="greet('Hello')">Greet</button>`}</pre>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span>Use <code className="bg-purple-100 px-1">{'{ }'}</code> for text interpolation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span>Use <code className="bg-purple-100 px-1">v-bind:</code> or <code className="bg-purple-100 px-1">:</code> for attribute binding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span>Use <code className="bg-purple-100 px-1">v-html</code> for raw HTML (with caution)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span>All bindings support JavaScript expressions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">✓</span>
              <span>Use shorthands <code className="bg-purple-100 px-1">:</code> and <code className="bg-purple-100 px-1">@</code> for cleaner code</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

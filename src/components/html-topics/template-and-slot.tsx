'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Copy, Lightbulb, Puzzle } from 'lucide-react';
import React from 'react';

export default function TemplateAndSlot({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Example of a Reusable Card Component</h2>

<!-- 1. The template holds the reusable structure -->
<template id="user-card-template">
  <style>
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h3 {
      margin: 0 0 0.5rem 0;
      color: hsl(var(--primary));
    }
    .email {
        color: #777;
    }
    ::slotted(p) { /* Style content projected into a slot */
      font-style: italic;
    }
  </style>
  <div class="card">
    <h3>
      <slot name="user-name">Default Name</slot>
    </h3>
    <div class="email">
      <slot name="user-email">default@example.com</slot>
    </div>
    <div class="bio">
      <slot>Default bio content...</slot>
    </div>
  </div>
</template>

<!-- 2. Create a custom element to use the template -->
<script>
  class UserCard extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('user-card-template');
      const templateContent = template.content;
      
      this.attachShadow({ mode: 'open' }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
  customElements.define('user-card', UserCard);
<\/script>

<!-- 3. Use the custom element and fill the slots -->
<user-card>
  <span slot="user-name">Alice</span>
  <span slot="user-email">alice@example.com</span>
  <p>Alice is a software developer from New York.</p>
</user-card>

<user-card>
  <span slot="user-name">Bob</span>
  <span slot="user-email">bob@example.com</span>
  <p>Bob is a graphic designer from California.</p>
</user-card>
`,
        css: `/* Global styles can be added here, but styles inside
   the <template> are encapsulated by the Shadow DOM! */
body {
  font-family: sans-serif;
}`,
        js: `// The necessary JavaScript is already included in the HTML pane.`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Puzzle className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Template &amp; Slot Elements</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable chunks of HTML for Web Components.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What are they?</CardTitle>
                <CardDescription>
                    The `&lt;template&gt;` and `&lt;slot&gt;` elements are fundamental building blocks of **Web Components**. They provide a native way to create reusable markup that can be customized and instantiated multiple times on a page.
                </CardDescription>
            </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Copy className="text-primary"/>The `&lt;template&gt;` Element</CardTitle>
                    <CardDescription>A `&lt;template&gt;` is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Think of it as a blueprint for a piece of UI. Its content is inert until you clone it and append it to the DOM.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Puzzle className="text-primary"/>The `&lt;slot&gt;` Element</CardTitle>
                    <CardDescription>A `&lt;slot&gt;` is a placeholder inside a web component that you can fill with your own markup from the outside. This allows you to create flexible, customizable components.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">You can have multiple "named" slots in a template to create specific insertion points.</p>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    This example shows the full pattern:
                    1. A `&lt;template&gt;` defines a "user-card" structure with slots for a name, email, and bio.
                    2. A custom element (`&lt;user-card&gt;`) is defined in JavaScript to use this template.
                    3. We use the `&lt;user-card&gt;` element and fill its slots with our own content.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Lightbulb className="w-5 h-5"/>Shadow DOM</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">In the example, you see the term `attachShadow(&#123; mode: 'open' &#125;)`. This is the key to **encapsulation** in Web Components. The "Shadow DOM" is a hidden DOM tree attached to an element. Styles and scripts inside the Shadow DOM are isolated from the rest of the page, preventing CSS conflicts and keeping the component's internal structure separate.</p>
            </CardContent>
        </Card>

      </div>
    );
}

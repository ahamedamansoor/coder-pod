'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Wand2,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
} from 'lucide-react';

export default function DOMManipulation() {
  const [textDemo, setTextDemo] = useState('Original Text');
  const [htmlDemo, setHtmlDemo] = useState('Original <strong>HTML</strong>');
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [classes, setClasses] = useState(['default']);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Wand2}
        category="JavaScript Fundamentals"
        title="DOM Manipulation"
        description="Add, modify, and delete elements dynamically with JavaScript"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is DOM Manipulation?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                DOM manipulation is the process of <strong className="text-yellow-700 dark:text-yellow-400">dynamically changing</strong> your web page using JavaScript. Create, modify, or delete elements without reloading the page!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Wand2 className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Make Pages Interactive</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Every interactive website you use - adding to cart, liking posts, updating content - uses DOM manipulation behind the scenes!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demos */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Demos</CardTitle>
          <CardDescription>Click buttons to see DOM manipulation in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Text Content Demo */}
          <div className="border-2 border-yellow-200 dark:border-yellow-800/30 rounded-xl p-6 bg-yellow-50/30 dark:bg-yellow-950/10">
            <h4 className="font-semibold mb-3">Change Text Content</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 border">
              <p className="font-mono text-lg">{textDemo}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setTextDemo('Updated Text! 🎉')} className="bg-yellow-600 hover:bg-yellow-700">
                <Edit3 className="w-4 h-4 mr-2" />
                Change Text
              </Button>
              <Button onClick={() => setTextDemo('Original Text')} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* HTML Content Demo */}
          <div className="border-2 border-amber-200 dark:border-amber-800/30 rounded-xl p-6 bg-amber-50/30 dark:bg-amber-950/10">
            <h4 className="font-semibold mb-3">Change HTML Content</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 border">
              <p dangerouslySetInnerHTML={{ __html: htmlDemo }} />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setHtmlDemo('<em>Styled</em> <strong style="color: #10b981;">Content!</strong>')} className="bg-amber-600 hover:bg-amber-700">
                <Edit3 className="w-4 h-4 mr-2" />
                Change HTML
              </Button>
              <Button onClick={() => setHtmlDemo('Original <strong>HTML</strong>')} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Add/Remove Elements */}
          <div className="border-2 border-orange-200 dark:border-orange-800/30 rounded-xl p-6 bg-orange-50/30 dark:bg-orange-950/10">
            <h4 className="font-semibold mb-3">Add/Remove Elements</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4 border space-y-2">
              {items.map((item, index) => (
                <div key={index} className="px-3 py-2 bg-orange-100 dark:bg-orange-900/30 rounded animate-in fade-in">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setItems([...items, `Item ${items.length + 1}`])} className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
              <Button onClick={() => items.length > 0 && setItems(items.slice(0, -1))} className="bg-red-600 hover:bg-red-700">
                <Trash2 className="w-4 h-4 mr-2" />
                Remove Item
              </Button>
              <Button onClick={() => setItems(['Item 1', 'Item 2', 'Item 3'])} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Class Manipulation */}
          <div className="border-2 border-emerald-200 dark:border-emerald-800/30 rounded-xl p-6 bg-emerald-50/30 dark:bg-emerald-950/10">
            <h4 className="font-semibold mb-3">Toggle CSS Classes</h4>
            <div className={`bg-white dark:bg-slate-900 rounded-lg p-6 mb-4 border-2 transition-all ${
              classes.includes('highlight') ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' : ''
            } ${
              classes.includes('bold') ? 'font-bold' : ''
            } ${
              classes.includes('large') ? 'text-xl' : ''
            }`}>
              <p>This box changes based on classes!</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button 
                onClick={() => setClasses(prev => prev.includes('highlight') ? prev.filter(c => c !== 'highlight') : [...prev, 'highlight'])}
                variant={classes.includes('highlight') ? 'default' : 'outline'}
              >
                Highlight
              </Button>
              <Button 
                onClick={() => setClasses(prev => prev.includes('bold') ? prev.filter(c => c !== 'bold') : [...prev, 'bold'])}
                variant={classes.includes('bold') ? 'default' : 'outline'}
              >
                Bold
              </Button>
              <Button 
                onClick={() => setClasses(prev => prev.includes('large') ? prev.filter(c => c !== 'large') : [...prev, 'large'])}
                variant={classes.includes('large') ? 'default' : 'outline'}
              >
                Large
              </Button>
              <Button onClick={() => setClasses(['default'])} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Changing Text */}
      <CodeSnippet
        title="Changing Text Content"
        description="Modify element text safely"
        code={`const heading = document.querySelector('h1');

// Change text (safe - no HTML)
heading.textContent = 'New Title';

// Get text
console.log(heading.textContent);  // 'New Title'

// Change text of multiple elements
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
  item.textContent = \`Item \${index + 1}\`;
});

// Append to existing text
const paragraph = document.querySelector('p');
paragraph.textContent += ' More text!';`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Changing HTML Content"
        description="Insert HTML markup"
        code={`const container = document.querySelector('.container');

// Set HTML content (be careful with user input!)
container.innerHTML = '<h2>Title</h2><p>Content</p>';

// Get HTML
console.log(container.innerHTML);

// Add to existing HTML
container.innerHTML += '<div>New section</div>';

// Clear all content
container.innerHTML = '';

// ⚠️ Security warning: Never use innerHTML with user input
// BAD (vulnerable to XSS):
const userInput = getUserInput();
div.innerHTML = userInput;  // DON'T DO THIS!

// GOOD (safe):
div.textContent = userInput;  // Use textContent instead`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Creating Elements"
        description="Add new elements to the page"
        code={`// Create element
const div = document.createElement('div');
div.textContent = 'Hello!';
div.className = 'box';

// Add attributes
div.id = 'myBox';
div.setAttribute('data-value', '123');

// Add to page
document.body.appendChild(div);

// Create and append in one go
const button = document.createElement('button');
button.textContent = 'Click me';
button.onclick = () => alert('Clicked!');
document.body.appendChild(button);

// Insert at specific position
const container = document.querySelector('.container');
const newItem = document.createElement('div');
newItem.textContent = 'New item';

// Add to beginning
container.insertBefore(newItem, container.firstChild);

// Or use insertAdjacentElement
container.insertAdjacentElement('afterbegin', newItem);  // Start
container.insertAdjacentElement('beforeend', newItem);   // End
container.insertAdjacentElement('beforebegin', newItem); // Before container
container.insertAdjacentElement('afterend', newItem);    // After container`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; }
    .container { border: 2px solid #3b82f6; padding: 15px; border-radius: 8px; margin: 20px 0; background: #eff6ff; }
    .box { padding: 10px; margin: 5px 0; background: #fef3c7; border-radius: 4px; border-left: 4px solid #f59e0b; }
    button { padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; margin: 5px; }
  </style>
</head>
<body>
  <h2>Creating Elements Demo</h2>
  <div class="container">
    <p>Existing content</p>
  </div>
</body>
</html>`,
          css: '',
          js: `const container = document.querySelector('.container');

// Create new div
const div = document.createElement('div');
div.textContent = 'Dynamically created!';
div.className = 'box';
div.setAttribute('data-value', '123');
container.appendChild(div);
console.log('Created div');

// Create button
setTimeout(() => {
  const button = document.createElement('button');
  button.textContent = 'Click me!';
  button.onclick = () => alert('Clicked!');
  container.appendChild(button);
  console.log('Added button');
}, 1000);`,
          visiblePanels: ['js', 'preview', 'console']
        }}
      />

      <CodeSnippet
        title="Removing Elements"
        description="Delete elements from DOM"
        code={`const element = document.querySelector('.old');

// Modern way (simple!)
element.remove();

// Remove specific child
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
parent.removeChild(child);

// Remove all children (clear container)
const container = document.querySelector('.container');

// Method 1: innerHTML (fast but removes event listeners)
container.innerHTML = '';

// Method 2: Loop through children (preserves cleanup)
while (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Remove multiple elements
const items = document.querySelectorAll('.item');
items.forEach(item => item.remove());

// Remove if condition is met
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  if (box.classList.contains('old')) {
    box.remove();
  }
});`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Cloning Elements"
        description="Duplicate existing elements"
        code={`const original = document.querySelector('.template');

// Clone element (shallow - no children)
const clone1 = original.cloneNode(false);

// Clone element (deep - includes all children)
const clone2 = original.cloneNode(true);

// Modify clone before adding
clone2.textContent = 'Cloned item';
clone2.classList.add('cloned');

// Add clone to DOM
document.body.appendChild(clone2);

// Clone and append multiple times
const template = document.querySelector('.item-template');
for (let i = 0; i < 5; i++) {
  const newItem = template.cloneNode(true);
  newItem.textContent = \`Item \${i + 1}\`;
  document.querySelector('.list').appendChild(newItem);
}

// Note: Event listeners are NOT copied!
// You need to add them again after cloning`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Replacing Elements"
        description="Swap one element with another"
        code={`// Create new element
const newElement = document.createElement('div');
newElement.textContent = 'New content';
newElement.className = 'new-box';

// Get old element
const oldElement = document.querySelector('.old-box');

// Replace
oldElement.replaceWith(newElement);

// Or using parent
const parent = document.querySelector('.container');
parent.replaceChild(newElement, oldElement);

// Replace multiple elements
const oldItems = document.querySelectorAll('.old-item');
oldItems.forEach(oldItem => {
  const newItem = document.createElement('div');
  newItem.textContent = 'Updated!';
  newItem.className = 'new-item';
  oldItem.replaceWith(newItem);
});`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Modifying Attributes"
        description="Change element attributes"
        code={`const link = document.querySelector('a');

// Set attribute
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.setAttribute('data-id', '123');

// Get attribute
console.log(link.getAttribute('href'));

// Check if attribute exists
if (link.hasAttribute('target')) {
  console.log('Has target attribute');
}

// Remove attribute
link.removeAttribute('target');

// Direct property access (preferred for standard attributes)
link.href = 'https://example.com';
link.id = 'myLink';
link.className = 'active';

// Data attributes
link.dataset.id = '123';        // <a data-id="123">
link.dataset.userName = 'John'; // <a data-user-name="John">
console.log(link.dataset.id);   // '123'

// Multiple attributes at once
Object.assign(link, {
  href: 'https://example.com',
  title: 'Click here',
  target: '_blank'
});`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Class Manipulation"
        description="Add, remove, toggle CSS classes"
        code={`const box = document.querySelector('.box');

// Add single class
box.classList.add('active');

// Add multiple classes
box.classList.add('highlight', 'large', 'primary');

// Remove class
box.classList.remove('active');

// Toggle class (add if not present, remove if present)
box.classList.toggle('visible');

// Toggle with condition
box.classList.toggle('visible', true);  // Force add
box.classList.toggle('visible', false); // Force remove

// Check if class exists
if (box.classList.contains('active')) {
  console.log('Box is active');
}

// Replace class
box.classList.replace('old-class', 'new-class');

// Get all classes as array
const classes = Array.from(box.classList);
console.log(classes);

// Old way (still works, but classList is better)
box.className = 'box active';        // Replace all classes
box.className += ' highlight';       // Add class (bad - extra space issues)`}
        language="javascript"
        colorTheme="yellow"
        embedPlayground={true}
        playgroundConfig={{
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; }
    .box { padding: 20px; margin: 20px 0; background: #f1f5f9; border: 2px solid #cbd5e1; border-radius: 8px; transition: all 0.3s; }
    .active { border-color: #10b981; background: #d1fae5; }
    .highlight { background: #fef3c7; }
    .large { padding: 30px; font-size: 18px; }
  </style>
</head>
<body>
  <h2>Class Manipulation Demo</h2>
  <div class="box">Watch my classes change!</div>
</body>
</html>`,
          css: '',
          js: `const box = document.querySelector('.box');

// Add class
box.classList.add('active');
console.log('Added active class');

setTimeout(() => {
  box.classList.add('highlight');
  console.log('Added highlight class');
}, 1000);

setTimeout(() => {
  box.classList.toggle('large');
  console.log('Toggled large class');
}, 2000);

setTimeout(() => {
  console.log('Classes:', Array.from(box.classList));
}, 2500);`,
          visiblePanels: ['js', 'preview', 'console']
        }}
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>textContent</strong> for plain text</li>
                <li>• Use <strong>classList</strong> for class manipulation</li>
                <li>• Cache DOM queries in variables</li>
                <li>• Batch updates before adding to DOM</li>
                <li>• Use <strong>cloneNode(true)</strong> to copy elements</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use <strong>innerHTML</strong> with user input (XSS risk)</li>
                <li>• Don't manipulate DOM in loops</li>
                <li>• Don't use <strong>className</strong> (use classList)</li>
                <li>• Don't query DOM repeatedly</li>
                <li>• Don't forget event listeners on clones</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Performance Tips</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Cache selectors:</strong> Store elements in variables instead of querying repeatedly</div>
              <div><strong>Batch DOM changes:</strong> Build elements in memory, then append once</div>
              <div><strong>Use DocumentFragment:</strong> For adding multiple elements efficiently</div>
              <div><strong>Minimize reflows:</strong> Change classes instead of inline styles</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Security Warning</AlertTitle>
            <AlertDescription className="text-base">
              Never use <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">innerHTML</code> with user-provided content - it can lead to XSS attacks! Always use <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">textContent</code> for user input.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

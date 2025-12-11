'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';
import {
  Code2,
  Globe,
  Sparkles,
  Zap,
  Rocket,
  Heart,
  Smartphone,
  Server,
  Gamepad2,
  ShoppingCart,
  Video,
  MessageCircle,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Lightbulb,
  Layers,
  Box,
  Cpu,
  Play,
  FileCode,
  Database,
} from 'lucide-react';

export default function JavaScriptWhatIsJavaScript() {
  const { openWithContent } = useWebPlayground();

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Code2}
        category="JavaScript · Fundamentals"
        title="What is JavaScript?"
        description="The programming language that powers the modern web - from interactive websites to full-stack applications"
        colorTheme="amber"
      />

      {/* What is JavaScript? */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            The Language of the Web
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript makes websites interactive, dynamic, and alive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>JavaScript</strong> is a <strong>high-level, interpreted programming language</strong> that runs in web browsers and enables you to create interactive web pages. It's one of the three core technologies of the web, alongside HTML (structure) and CSS (styling). While HTML defines what content appears on a page and CSS defines how it looks, <strong>JavaScript defines how it behaves</strong>.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Created in 1995 by Brendan Eich in just 10 days, JavaScript has evolved into the <strong>most popular programming language in the world</strong>. Today, it powers not just websites, but also servers (Node.js), mobile apps (React Native), desktop applications (Electron), and even IoT devices.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">#1</div>
              <div className="text-xs font-semibold text-muted-foreground">Most Popular Language</div>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">98%</div>
              <div className="text-xs font-semibold text-muted-foreground">Websites Use JS</div>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">17M+</div>
              <div className="text-xs font-semibold text-muted-foreground">Developers Worldwide</div>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">29</div>
              <div className="text-xs font-semibold text-muted-foreground">Years Old (1995)</div>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why "JavaScript"?</AlertTitle>
            <AlertDescription>
              Despite the name, JavaScript has <strong>no relation to Java</strong>! It was originally called "Mocha," then "LiveScript," but was renamed to "JavaScript" for marketing reasons when Java was popular. The official name is <strong>ECMAScript</strong> (the specification), but everyone calls it JavaScript.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* First Code Example */}
      <CodeSnippet
        title="Your First JavaScript Code"
        description="See how simple JavaScript is - just a few lines to create interactivity"
        code={`// Display a message
console.log('Hello, JavaScript!');

// Perform calculations
const sum = 5 + 3;
console.log('5 + 3 =', sum);  // 8

// Make decisions
const temperature = 25;
if (temperature > 20) {
  console.log('It\\'s a warm day!');
} else {
  console.log('It\\'s a bit cold.');
}

// Work with text
const name = 'Alice';
const greeting = \`Hello, \${name}! Welcome to JavaScript.\`;
console.log(greeting);

// Output:
// Hello, JavaScript!
// 5 + 3 = 8
// It's a warm day!
// Hello, Alice! Welcome to JavaScript.`}
        language="javascript"
        colorTheme="amber"
        icon={Code2}
      />

      {/* Try in Playground */}
      <Card className="bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 border-2 border-amber-200 dark:border-amber-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center flex-shrink-0">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                Try JavaScript Live!
                <Badge variant="secondary" className="text-xs">Interactive</Badge>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Open this example in our interactive playground and see JavaScript in action. Change the code and see instant results!
              </p>
              <Button
                onClick={() => {
                  openWithContent(
                    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First JavaScript</title>
</head>
<body>
  <div class="container">
    <h1 id="title">Hello, JavaScript!</h1>
    <p id="output">Click the button to see magic! ✨</p>
    <button id="myButton">Click Me!</button>
  </div>
</body>
</html>`,
                    `.container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  color: white;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in;
}

#output {
  font-size: 1.2rem;
  margin: 30px 0;
  min-height: 60px;
}

button {
  background: white;
  color: #f59e0b;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}`,
                    `// Get elements
const button = document.getElementById('myButton');
const output = document.getElementById('output');
const title = document.getElementById('title');

let clickCount = 0;

// Add click event
button.addEventListener('click', function() {
  clickCount++;
  
  // Change content dynamically
  output.textContent = \`You've clicked \${clickCount} times! 🎉\`;
  
  // Change colors
  const colors = ['#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.container').style.background = 
    \`linear-gradient(135deg, \${randomColor} 0%, #f59e0b 100%)\`;
  
  // Animate title
  title.style.transform = 'scale(1.1)';
  setTimeout(() => {
    title.style.transform = 'scale(1)';
  }, 200);
  
  console.log('Button clicked! Count:', clickCount);
});

console.log('JavaScript is ready! Click the button to see magic! ✨');`,
                    'js'
                  );
                }}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Open in Playground
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Web Trinity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The Web Technology Trinity
          </CardTitle>
          <CardDescription className="text-base">
            How JavaScript works together with HTML and CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  HTML
                </h4>
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30">Structure</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Defines the content and structure - headings, paragraphs, images, links. It's the <strong>skeleton</strong> of the webpage.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-orange-600 dark:text-orange-400">&lt;h1&gt;Title&lt;/h1&gt;</div>
                <div className="text-muted-foreground mt-1">WHAT is on the page</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  CSS
                </h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Style</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Controls appearance and layout - colors, fonts, spacing. It's the <strong>skin and clothing</strong> that makes it beautiful.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-blue-600 dark:text-blue-400">color: blue;</div>
                <div className="text-muted-foreground mt-1">HOW it looks</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  JavaScript
                </h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Behavior</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Makes it interactive and alive - responds to clicks, validates forms, animates. It's the <strong>brain and muscles</strong>.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div className="text-amber-600 dark:text-amber-400">button.click()</div>
                <div className="text-muted-foreground mt-1">HOW it behaves</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: HTML + CSS + JavaScript"
        description="See how all three technologies work together"
        code={`<!-- HTML: Structure -->
<div class="counter">
  <h2 id="display">Count: 0</h2>
  <button id="incrementBtn">Increase</button>
  <button id="decrementBtn">Decrease</button>
  <button id="resetBtn">Reset</button>
</div>

/* CSS: Style */
.counter {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

button {
  margin: 5px;
  padding: 10px 20px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  transform: scale(1.05);
}

// JavaScript: Behavior
let count = 0;
const display = document.getElementById('display');

document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  display.textContent = \`Count: \${count}\`;
});

document.getElementById('decrementBtn').addEventListener('click', () => {
  count--;
  display.textContent = \`Count: \${count}\`;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  display.textContent = 'Count: 0';
});

// Result: Interactive counter that responds to button clicks!`}
        language="javascript"
        colorTheme="blue"
        icon={Layers}
      />

      {/* What JavaScript Powers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What JavaScript Powers
          </CardTitle>
          <CardDescription className="text-base">
            Real-world applications built with JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">Web Applications</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Gmail, Google Maps, Facebook, Twitter - all powered by JavaScript for rich, interactive experiences
              </p>
              <Badge variant="outline" className="text-xs">React, Vue, Angular</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <Server className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h4 className="font-semibold mb-2">Backend & APIs</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Node.js powers servers, REST APIs, GraphQL, and microservices at companies like Netflix and Uber
              </p>
              <Badge variant="outline" className="text-xs">Node.js, Express</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-semibold mb-2">Mobile Apps</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Instagram, Discord, Walmart - iOS & Android apps built with React Native and JavaScript
              </p>
              <Badge variant="outline" className="text-xs">React Native, Ionic</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <Cpu className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-3" />
              <h4 className="font-semibold mb-2">Desktop Software</h4>
              <p className="text-sm text-muted-foreground mb-3">
                VS Code, Slack, Discord, Spotify - desktop apps built with Electron framework
              </p>
              <Badge variant="outline" className="text-xs">Electron</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 rounded-xl border border-red-200/50 dark:border-red-800/30">
              <Gamepad2 className="w-8 h-8 text-red-600 dark:text-red-400 mb-3" />
              <h4 className="font-semibold mb-2">Browser Games</h4>
              <p className="text-sm text-muted-foreground mb-3">
                2D/3D games, simulations, and interactive experiences using WebGL, Canvas, and game engines
              </p>
              <Badge variant="outline" className="text-xs">Phaser, Three.js</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-teal-50/60 dark:from-cyan-950/10 dark:to-teal-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <Database className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
              <h4 className="font-semibold mb-2">Databases</h4>
              <p className="text-sm text-muted-foreground mb-3">
                MongoDB, CouchDB - NoSQL databases that use JavaScript for queries and operations
              </p>
              <Badge variant="outline" className="text-xs">MongoDB, Firebase</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key JavaScript Features */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Key Features of JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            What makes JavaScript powerful and unique
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Dynamically Typed
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                No need to declare variable types - JavaScript figures it out automatically
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>let x = 5;        <span className="text-muted-foreground">// number</span></div>
                <div>x = "hello";     <span className="text-muted-foreground">// now string!</span></div>
                <div>x = true;        <span className="text-muted-foreground">// now boolean!</span></div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Event-Driven
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Responds to user actions like clicks, key presses, mouse movements
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>button.addEventListener('click', () => {"{"}</div>
                <div className="ml-4">console.log('Clicked!');</div>
                <div>{"}"});</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Asynchronous
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Handle multiple operations without blocking - fetch data, timers, animations
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>async function getData() {"{"}</div>
                <div className="ml-4">const data = await fetch(url);</div>
                <div className="ml-4">return data;</div>
                <div>{"}"}</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Object-Oriented
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Everything is an object - functions, arrays, even functions are objects!
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>const person = {"{"}</div>
                <div className="ml-4">name: 'Alice',</div>
                <div className="ml-4">greet() {"{"} return 'Hi!'; {"}"}</div>
                <div>{"}"};</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="JavaScript Superpowers"
        description="See key features in action"
        code={`// 1. Dynamic Typing - Variables can change types
let data = 42;              // number
data = "now a string";      // string
data = [1, 2, 3];          // array
console.log(typeof data);   // "object"

// 2. Event-Driven Programming
document.querySelector('#myButton').addEventListener('click', function() {
  console.log('Button was clicked!');
  alert('Hello from JavaScript!');
});

// 3. Asynchronous Operations (Promises & Async/Await)
async function fetchUserData() {
  console.log('Fetching user data...');
  
  const response = await fetch('https://api.example.com/user/1');
  const user = await response.json();
  
  console.log('User:', user.name);
  return user;
}

// 4. First-Class Functions (Functions as values)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

const sayHi = greet;  // Assign function to variable
console.log(sayHi('Alice'));  // "Hello, Alice!"

// 5. Object-Oriented
const car = {
  brand: 'Tesla',
  model: 'Model 3',
  year: 2024,
  start() {
    console.log(\`\${this.brand} \${this.model} started!\`);
  }
};

car.start();  // "Tesla Model 3 started!"

// 6. Array Methods (Functional Programming)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10]
console.log('Evens:', evens);      // [2, 4]
console.log('Sum:', sum);          // 15`}
        language="javascript"
        colorTheme="purple"
        icon={Zap}
      />

      {/* Why JavaScript is Special */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Heart className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why JavaScript is Unique
          </CardTitle>
          <CardDescription className="text-base">
            What sets JavaScript apart from other programming languages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Runs Everywhere</h4>
                  <p className="text-sm text-muted-foreground">
                    The <strong>only language</strong> that runs natively in every web browser. No installation, no compilation, no configuration - just open the browser and start coding instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Massive Ecosystem</h4>
                  <p className="text-sm text-muted-foreground">
                    Over <strong>2.5 million packages</strong> on npm (Node Package Manager). Find a library for anything - animations, charts, date handling, testing, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Beginner-Friendly</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple syntax, forgiving nature, and <strong>instant feedback</strong> in the browser console. Perfect for learning programming - see results immediately without complex setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                  <Layers className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Full-Stack Power</h4>
                  <p className="text-sm text-muted-foreground">
                    Use <strong>one language for everything</strong> - frontend (React), backend (Node.js), mobile (React Native), desktop (Electron). No need to learn multiple languages.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Career Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Most in-demand tech skill</strong> globally. Every company needs JavaScript developers - from startups to FAANG. Average salary: $110k+ in the US.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Active Community</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>17+ million developers</strong> worldwide. Massive Stack Overflow presence, GitHub repos, YouTube tutorials, and conferences. Help is always available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest JavaScript Features (ES2024) */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/40 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Modern JavaScript (ES2024)
          </CardTitle>
          <CardDescription className="text-base">
            Latest features in JavaScript - constantly evolving
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            JavaScript follows the <strong>ECMAScript specification</strong> and receives yearly updates. Each year brings new features that make coding easier and more powerful. Here are some modern features you'll love:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Optional Chaining (?.)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">ES2020</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Safely access nested properties without errors
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>const name = user?.profile?.name;</div>
                <div className="text-muted-foreground mt-1">// No error if user is null!</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Nullish Coalescing (??)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">ES2020</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Default values only for null/undefined
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>const count = value ?? 0;</div>
                <div className="text-muted-foreground mt-1">// Use 0 only if value is null/undefined</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Array Methods</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">ES2023</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                New methods like findLast, toSorted, toReversed
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>const last = arr.findLast(x => x > 10);</div>
                <div className="text-muted-foreground mt-1">// Find from end of array</div>
              </div>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Top-Level Await</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">ES2022</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use await at the top level in modules
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs border">
                <div>const data = await fetch(url);</div>
                <div className="text-muted-foreground mt-1">// No async wrapper needed!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Modern JavaScript Features"
        description="Latest syntax and capabilities (ES2020-2024)"
        code={`// 1. Optional Chaining (?.) - Safe property access
const user = { name: 'Alice', address: { city: 'NYC' } };
console.log(user?.address?.city);  // "NYC"
console.log(user?.phone?.number);  // undefined (no error!)

// 2. Nullish Coalescing (??) - Better default values
const count = 0;
console.log(count || 100);   // 100 (wrong! 0 is falsy)
console.log(count ?? 100);   // 0 (correct! only null/undefined trigger default)

// 3. Array.at() - Negative indexing
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.at(-1));  // "orange" (last item)
console.log(fruits.at(-2));  // "banana" (second to last)

// 4. Object.hasOwn() - Better property checking
const obj = { name: 'Alice' };
console.log(Object.hasOwn(obj, 'name'));  // true
console.log(Object.hasOwn(obj, 'age'));   // false

// 5. Array.findLast() - Find from end
const numbers = [1, 5, 10, 15, 20];
const lastOver10 = numbers.findLast(n => n > 10);
console.log(lastOver10);  // 20

// 6. Top-Level Await (in modules)
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);

// 7. Private Class Fields (#)
class BankAccount {
  #balance = 0;  // Private field
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());  // 100
// console.log(account.#balance);   // ERROR: Private field!

// 8. Logical Assignment (&&= ||= ??=)
let x = 5;
x ||= 10;  // x = x || 10 (if x is falsy, set to 10)
console.log(x);  // 5 (x was truthy)

let y = null;
y ??= 100;  // y = y ?? 100
console.log(y);  // 100 (y was null)`}
        language="javascript"
        colorTheme="blue"
        icon={Sparkles}
      />

      {/* Evolution Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Clock className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            JavaScript Through the Years
          </CardTitle>
          <CardDescription className="text-base">
            From simple scripts to powering the entire web
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg border bg-white dark:bg-slate-900/50">
              <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-lg font-bold text-amber-700 dark:text-amber-400 h-fit">
                1995
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Birth of JavaScript</h4>
                <p className="text-sm text-muted-foreground">
                  Created by Brendan Eich at Netscape in just <strong>10 days</strong>. Originally called "Mocha," then "LiveScript," finally renamed to "JavaScript" for marketing.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border bg-white dark:bg-slate-900/50">
              <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-lg font-bold text-amber-700 dark:text-amber-400 h-fit">
                2009
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Node.js Revolution</h4>
                <p className="text-sm text-muted-foreground">
                  Ryan Dahl created <strong>Node.js</strong>, allowing JavaScript to run on servers. This changed everything - JavaScript became a full-stack language.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border bg-white dark:bg-slate-900/50">
              <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-lg font-bold text-amber-700 dark:text-amber-400 h-fit">
                2015
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">ES6/ES2015 - Modern JavaScript</h4>
                <p className="text-sm text-muted-foreground">
                  Major update with <strong>classes, arrow functions, promises, modules</strong>, and more. Made JavaScript truly modern and powerful.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg border bg-white dark:bg-slate-900/50">
              <div className="bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-lg font-bold text-amber-700 dark:text-amber-400 h-fit">
                2024
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">JavaScript Everywhere</h4>
                <p className="text-sm text-muted-foreground">
                  Powers web, mobile, desktop, IoT, AI/ML, blockchain, and more. The most <strong>versatile and popular language</strong> ever created.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/20 dark:to-yellow-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Badge className="bg-amber-600 text-white text-base px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Essential Takeaways
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-slate-900/50">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">The Web's Native Language</strong>
                <span className="text-sm text-muted-foreground">
                  JavaScript is built into every browser - no installation needed to start building interactive websites
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-slate-900/50">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">Beyond the Browser</strong>
                <span className="text-sm text-muted-foreground">
                  With Node.js, JavaScript now powers servers, APIs, mobile apps, and even desktop software
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-slate-900/50">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">Beginner-Friendly</strong>
                <span className="text-sm text-muted-foreground">
                  Simple syntax, instant feedback, and a forgiving nature make it perfect for learning programming
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-slate-900/50">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">Career Powerhouse</strong>
                <span className="text-sm text-muted-foreground">
                  Most in-demand programming skill with millions of job opportunities worldwide
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

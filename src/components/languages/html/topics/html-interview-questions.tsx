'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Brain, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Clock, 
  Star,
  Lightbulb,
  Award,
  TrendingUp,
  ArrowLeft,
  ChevronDown,
  Code,
  Palette,
  FileText,
  Play
} from 'lucide-react';
import React from 'react';
import { marked } from 'marked';
import Link from 'next/link';
import InterviewHeader from '@/components/shared/interview-header';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

const easyQuestions = [
  {
    question: "What does HTML stand for?",
    idealAnswer: "HTML stands for **HyperText Markup Language**. It's the standard language used to create and design documents on the World Wide Web.",
  },
  {
    question: "What is the difference between `<div>` and `<span>`?",
    idealAnswer: "`<div>` is a **block-level element**, meaning it starts on a new line and takes up the full width available. It's used for grouping larger sections of content. `<span>` is an **inline-level element**, meaning it does not start on a new line and only takes up as much width as necessary. It's used for styling a small part of a text, like a single word.",
  },
  {
    question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
    idealAnswer: "The `alt` (alternative text) attribute is crucial for **accessibility**. It provides a text description of an image for screen readers used by visually impaired users. It's also displayed if the image fails to load, and it helps search engines understand the image content.",
  },
  {
    question: "What are HTML attributes?",
    idealAnswer: "HTML attributes provide **additional information** about HTML elements. They are always specified in the opening tag and come in name/value pairs like `name=\"value\"`. Examples include `class`, `id`, `src`, `href`, and `style`.",
  },
  {
    question: "What is the difference between `<ul>` and `<ol>`?",
    idealAnswer: "`<ul>` creates an **unordered list** with bullet points, while `<ol>` creates an **ordered list** with numbered items. Use `<ul>` when the order doesn't matter (like a shopping list) and `<ol>` when sequence is important (like step-by-step instructions).",
  },
  {
    question: "What is the purpose of HTML comments?",
    idealAnswer: "HTML comments are used to add **notes and documentation** to your code that won't be displayed in the browser. They start with `<!--` and end with `-->`. Comments help developers understand the code, leave reminders, or temporarily disable code during debugging.",
  },
  {
    question: "What is the difference between `<head>` and `<body>` tags?",
    idealAnswer: "`<head>` contains **meta-information** about the HTML document that isn't displayed on the page, such as title, meta tags, styles, and scripts. `<body>` contains the **visible content** that users see, like text, images, links, and other elements.",
  },
  {
    question: "What is the purpose of the `<title>` tag?",
    idealAnswer: "The `<title>` tag defines the title of the HTML document, which appears in the browser's title bar or tab. It's important for SEO and user experience, as it helps users and search engines understand what the page is about.",
  },
  {
    question: "What is the difference between `<p>` and `<br>` tags?",
    idealAnswer: "`<p>` is a **paragraph tag** that creates a new paragraph with automatic spacing before and after. `<br>` is a **line break tag** that creates a single line break within the same paragraph. Use `<p>` for separate paragraphs and `<br>` for line breaks within text.",
  },
  {
    question: "What are HTML entities and why are they used?",
    idealAnswer: "HTML entities are special codes used to display reserved characters or characters that don't appear on keyboard. For example, `&lt;` displays `<`, `&gt;` displays `>`, and `&amp;` displays `&`. They're used when you need to show these characters as text rather than HTML markup.",
  },
];

const mediumQuestions = [
  {
    question: "Explain the difference between `<strong>`, `<b>`, `<em>`, and `<i>` tags.",
    idealAnswer: "This is about **semantic meaning vs. presentation**:\n\n- `<strong>` and `<b>` both make text bold by default, but `<strong>` indicates that the text has **strong importance**, seriousness, or urgency.\n- `<em>` and `<i>` both make text italicized by default, but `<em>` (emphasis) indicates **stress emphasis** on a word or phrase.\n\nIn short, use `<strong>` and `<em>` when you want to convey meaning and importance. Use `<b>` and `<i>` only when you want a specific visual style without adding semantic weight.",
  },
  {
    question: "What are semantic HTML5 elements? Give a few examples.",
    idealAnswer: "Semantic elements are HTML elements that clearly describe their meaning or purpose to both the browser and the developer. They make the code more readable and accessible.\n\nExamples include:\n- `<header>`: Introductory content for a page or section.\n- `<nav>`: A set of navigation links.\n- `<main>`: The main, unique content of a page.\n- `<article>`: A self-contained piece of content (e.g., a blog post).\n- `<section>`: A thematic grouping of content.\n- `<footer>`: The footer for a page or section, containing info like copyright and contact details.\n- `<aside>`: Content that is tangentially related, like a sidebar.",
  },
  {
    question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
    idealAnswer: "The `<!DOCTYPE html>` declaration must be the very first thing in your HTML document. It is an instruction to the web browser about what version of HTML the page is written in. This ensures that the page is parsed and rendered correctly by the browser in \"standards mode\". Without it, browsers may enter \"quirks mode,\" which can lead to inconsistent and unpredictable rendering.",
  },
  {
    question: "What are the new form input types introduced in HTML5?",
    idealAnswer: "HTML5 introduced several new input types that provide better user experience and validation:\n\n- `email`: For email addresses with built-in validation\n- `url`: For web URLs with automatic validation\n- `tel`: For telephone numbers\n- `search`: For search fields (may have special styling in some browsers)\n- `number`: For numeric input with min/max/step attributes\n- `range`: For slider controls\n- `date`, `time`, `datetime-local`, `month`, `week`: For date/time input\n- `color`: For color selection\n\nThese new types improve user experience by providing appropriate input methods and built-in validation.",
  },
  {
    question: "What is the difference between `id` and `class` attributes?",
    idealAnswer: "**ID vs Class differences:**\n\n- **Uniqueness**: `id` must be **unique** within the entire document, while `class` can be applied to **multiple elements**\n- **CSS Selection**: `id` is selected with `#` (e.g., `#header`), `class` with `.` (e.g., `.button`)\n- **JavaScript**: `getElementById()` returns a single element, while `getElementsByClassName()` returns a collection\n- **Specificity**: `id` has **higher CSS specificity** than `class`\n- **Use Cases**: Use `id` for unique page elements (header, footer, main content), use `class` for reusable styling (buttons, cards, form inputs)",
  },
  {
    question: "What are HTML5 semantic elements and why are they important for SEO?",
    idealAnswer: "HTML5 semantic elements provide **meaningful structure** to web content, helping both browsers and search engines understand the page hierarchy:\n\n**SEO Benefits:**\n- **Better indexing**: Search engines understand content structure better\n- **Rich snippets**: Semantic markup can enable enhanced search results\n- **Accessibility**: Improves experience for screen readers\n- **Code maintainability**: Clearer structure for developers\n\n**Key semantic elements:**\n- `<article>`: Standalone content (blog posts, news)\n- `<section>`: Thematic content groups\n- `<nav>`: Navigation blocks\n- `<aside>`: Sidebar content\n- `<header>`/`<footer>`: Page/section headers and footers\n- `<main>`: Primary content area\n\nSearch engines use these elements to determine content importance and context.",
  },
  {
    question: "Explain the difference between GET and POST HTTP methods in forms.",
    idealAnswer: "**GET vs POST methods:**\n\n**GET Method:**\n- Appends form data to the URL as query parameters\n- Data is visible in the browser address bar\n- Limited data size (URL length restrictions)\n- Can be bookmarked and cached\n- Should be used for safe, idempotent operations (search, filtering)\n\n**POST Method:**\n- Sends form data in the HTTP request body\n- Data is not visible in the URL\n- Can send large amounts of data\n- Cannot be bookmarked easily\n- Should be used for sensitive data or operations that change server state\n\n**Security considerations:**\n- Never send passwords or sensitive data via GET\n- POST is more secure for sensitive information\n- GET requests are logged in server logs and browser history",
  },
  {
    question: "What are HTML5 form validation attributes and how do they work?",
    idealAnswer: "HTML5 provides built-in form validation attributes that improve user experience:\n\n**Required Attributes:**\n- `required`: Field must be filled out\n- `pattern`: Regex pattern for validation (e.g., pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\")\n- `min`/`max`: Numeric range validation\n- `minlength`/`maxlength`: String length constraints\n\n**Input Type Validation:**\n- `email`: Validates email format\n- `url`: Validates URL format\n- `number`: Ensures numeric input\n- `tel`: Phone number format\n\n**Other Validation Features:**\n- `novalidate`: Disables browser validation\n- Custom validation messages with `setCustomValidity()`\n- `:valid`, `:invalid` CSS pseudo-classes\n- `constraint validation API` for custom logic\n\n**Example:**\n```html\n<input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n```",
  },
  {
    question: "Explain the difference between relative and absolute URLs in HTML.",
    idealAnswer: "URL types determine how resources are located:\n\n**Absolute URLs:**\n- Complete URL including protocol (http/https)\n- Example: `https://example.com/images/photo.jpg`\n- Works from any page/location\n- Used for external resources\n\n**Relative URLs:**\n- Path relative to current document\n- Examples: `../images/photo.jpg`, `/css/style.css`, `page.html`\n- More portable for same-site resources\n- Types: root-relative (`/path`), relative (`../path`), same-directory (`file.html`)\n\n**Best Practices:**\n- Use root-relative (`/`) for site-wide consistency\n- Use relative for same-directory resources\n- Use absolute for external resources only\n- Consider protocol-relative URLs (`//cdn.com/lib.js`) for flexible protocols",
  },
  {
    question: "What are HTML data attributes and when should you use them?",
    idealAnswer: "Data attributes allow you to store custom data private to the page or application:\n\n**Syntax:**\n- Prefix: `data-*` (e.g., `data-user-id`, `data-role`)\n- Can store strings, numbers (as strings)\n- Accessed via JavaScript: `element.dataset.userId`\n\n**Use Cases:**\n- Store configuration data\n- Pass data to JavaScript event handlers\n- Component state management\n- ARIA extensions\n- Testing identifiers\n\n**Example:**\n```html\n<div data-user-id=\"123\" data-role=\"admin\">John Doe</div>\n<script>\nconst userId = element.dataset.userId; // '123'\n</script>\n```\n\n**Best Practices:**\n- Use lowercase with hyphens\n- Don't store sensitive data\n- Consider JSON for complex data\n- Use semantic HTML when possible instead",
  },
  {
    question: "Explain HTML5 audio and video elements and their attributes.",
    idealAnswer: "HTML5 introduced native `<audio>` and `<video>` elements for multimedia content without plugins.\n\n**Audio Element:**\n```html\n<audio controls autoplay loop muted preload=\"auto\">\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  <source src=\"audio.ogg\" type=\"audio/ogg\">\n  Your browser does not support audio.\n</audio>\n```\n\n**Video Element:**\n```html\n<video width=\"640\" height=\"480\" controls poster=\"poster.jpg\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n  <track kind=\"subtitles\" src=\"subtitles.vtt\" srclang=\"en\" label=\"English\">\n  Your browser does not support video.\n</video>\n```\n\n**Key Attributes:**\n- `controls`: Show browser controls\n- `autoplay`: Start playing automatically\n- `loop`: Repeat playback\n- `muted`: Start muted\n- `preload`: `none`, `metadata`, or `auto`\n- `poster`: Image for video before playback\n- `width/height`: Video dimensions\n- `crossorigin`: For cross-origin media\n\n**JavaScript API:**\n- `play()`, `pause()`, `load()`\n- `currentTime`, `duration`, `volume`\n- Events: `play`, `pause`, `ended`, `timeupdate`",
  },
  {
    question: "What are HTML5 Canvas and SVG? When would you use each?",
    idealAnswer: "Canvas and SVG are both for graphics but serve different purposes:\n\n**Canvas:**\n- **Raster-based**: Pixel-based drawing\n- **JavaScript-driven**: Drawn via JavaScript API\n- **Immediate mode**: No DOM representation\n- **Best for**: Games, image manipulation, complex animations\n\n```html\n<canvas id=\"myCanvas\" width=\"500\" height=\"400\"></canvas>\n<script>\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 50, 50);\n</script>\n```\n\n**SVG:**\n- **Vector-based**: XML-based graphics\n- **DOM elements**: Part of document tree\n- **Retained mode**: Elements persist in DOM\n- **Best for**: Icons, charts, illustrations, scalable graphics\n\n```html\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" />\n  <rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"red\" />\n</svg>\n```\n\n**When to Use:**\n- **Canvas**: Photo editing, games, pixel manipulation\n- **SVG**: Icons, logos, data visualization, responsive graphics\n- **Performance**: Canvas better for many objects, SVG better for few",
  },
  {
    question: "How do you embed maps and external content in HTML?",
    idealAnswer: "HTML provides several ways to embed external content like maps:\n\n**iframe Element:**\n```html\n<iframe src=\"https://www.google.com/maps/embed?...\" \n        width=\"600\" height=\"450\" \n        style=\"border:0\" \n        allowfullscreen=\"\" \n        loading=\"lazy\">\n</iframe>\n```\n\n**Key iframe Attributes:**\n- `src`: URL of embedded content\n- `width/height`: Dimensions\n- `allowfullscreen`: Enable fullscreen\n- `loading=\"lazy\"`: Defer loading until needed\n- `sandbox`: Security restrictions\n- `allow`: Feature permissions\n\n**Google Maps Embed:**\n```html\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...\"\n        width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\"\n        loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\">\n</iframe>\n```\n\n**Other Embedding Methods:**\n- **embed**: For plugins (legacy)\n- **object**: For various content types\n- **video/audio**: Native media elements\n\n**Security Considerations:**\n- Use `sandbox` attribute for untrusted content\n- Implement CSP policies\n- Consider `loading=\"lazy\"` for performance\n- Use HTTPS for secure content",
  },
  {
    question: "What are HTML5 Web Storage APIs?",
    idealAnswer: "HTML5 provides client-side storage APIs for persisting data:\n\n**localStorage:**\n- **Persistent**: Data survives browser restarts\n- **Capacity**: ~5-10MB per origin\n- **Scope**: Same origin only\n\n```javascript\n// Save data\nlocalStorage.setItem('user', JSON.stringify({name: 'John'}));\n\n// Retrieve data\nconst user = JSON.parse(localStorage.getItem('user'));\n\n// Remove data\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // Clear all\n```\n\n**sessionStorage:**\n- **Session-based**: Cleared when tab closes\n- **Capacity**: ~5-10MB per origin\n- **Scope**: Current tab only\n\n```javascript\nsessionStorage.setItem('tempData', 'value');\nconst data = sessionStorage.getItem('tempData');\n```\n\n**IndexedDB:**\n- **Database**: Client-side NoSQL database\n- **Capacity**: Much larger (GBs)\n- **Features**: Indexes, transactions, cursors\n\n```javascript\nconst request = indexedDB.open('myDB', 1);\nrequest.onsuccess = (event) => {\n  const db = event.target.result;\n  // Use database\n};\n```\n\n**Use Cases:**\n- **localStorage**: User preferences, cached data\n- **sessionStorage**: Form data, temporary state\n- **IndexedDB**: Large datasets, offline applications",
  },
  {
    question: "Explain HTML5 Geolocation API.",
    idealAnswer: "Geolocation API allows web apps to access user's location:\n\n**Basic Usage:**\n```javascript\n// Get current position\nnavigator.geolocation.getCurrentPosition(\n  (position) => {\n    console.log('Latitude:', position.coords.latitude);\n    console.log('Longitude:', position.coords.longitude);\n    console.log('Accuracy:', position.coords.accuracy);\n  },\n  (error) => {\n    console.error('Error:', error.message);\n  },\n  {\n    enableHighAccuracy: true,\n    timeout: 5000,\n    maximumAge: 0\n  }\n);\n```\n\n**Watch Position:**\n```javascript\nconst watchId = navigator.geolocation.watchPosition(\n  (position) => updateMap(position),\n  handleError,\n  options\n);\n```\n\n**Position Object:**\n- `coords.latitude/longitude`: Geographic coordinates\n- `coords.accuracy`: Accuracy in meters\n- `coords.altitude`: Height above sea level\n- `coords.speed`: Speed in m/s\n- `timestamp`: Time of measurement\n\n**Security & Privacy:**\n- **Permission Required**: User must grant access\n- **HTTPS Required**: Secure context required\n- **User Notification**: Browser shows location indicator\n\n**Use Cases:**\n- Location-based services\n- Maps and navigation\n- Weather applications\n- Social media check-ins\n- Distance calculations",
  },
  {
    question: "What are HTML5 WebSockets and how do they work?",
    idealAnswer: "WebSockets provide full-duplex communication between client and server:\n\n**WebSocket Connection:**\n```javascript\n// Create WebSocket connection\nconst socket = new WebSocket('wss://echo.websocket.org');\n\n// Connection opened\nsocket.addEventListener('open', (event) => {\n  socket.send('Hello Server!');\n});\n\n// Listen for messages\nsocket.addEventListener('message', (event) => {\n  console.log('Message from server:', event.data);\n});\n\n// Connection closed\nsocket.addEventListener('close', (event) => {\n  console.log('Connection closed');\n});\n\n// Handle errors\nsocket.addEventListener('error', (event) => {\n  console.error('WebSocket error:', event);\n});\n```\n\n**WebSocket Methods:**\n- `send(data)`: Send data to server\n- `close()`: Close connection\n- `readyState`: Connection state\n\n**Connection States:**\n- `CONNECTING` (0): Connection in progress\n- `OPEN` (1): Connection ready\n- `CLOSING` (2): Connection closing\n- `CLOSED` (3): Connection closed\n\n**Advantages over HTTP:**\n- **Real-time**: Instant bidirectional communication\n- **Low Latency**: No HTTP overhead per message\n- **Efficient**: Single connection for multiple messages\n- **Full Duplex**: Send and receive simultaneously\n\n**Use Cases:**\n- Chat applications\n- Real-time collaboration\n- Live notifications\n- Online gaming\n- Financial trading platforms\n- Live sports updates",
  },
];

const hardQuestions = [
  {
    question: "Explain the difference between `localStorage`, `sessionStorage`, and `cookies`.",
    idealAnswer: "All three are ways to store data on the client-side, but they differ in capacity, persistence, and accessibility:\n\n- **`localStorage`**: Stores data with no expiration date. It persists even after the browser window is closed and reopened. It has a capacity of about 5-10MB and is specific to the protocol and origin of the page.\n- **`sessionStorage`**: Stores data for one session only. The data is cleared when the page session ends (i.e., when the browser tab is closed). It also has a capacity of about 5-10MB and is scoped to the current tab.\n- **`cookies`**: Have a small capacity (about 4KB). They are sent with every HTTP request to the server, which can impact performance. They can have an expiration date and are often used for tracking and managing user sessions on the server-side.",
  },
  {
    question: "What is the `box-sizing` CSS property and how does it relate to HTML layout?",
    idealAnswer: "The `box-sizing` property defines how the total width and height of an element is calculated.\n\n- `content-box` (default): The `width` and `height` properties only apply to the content area. Any `padding` and `border` are added *on top* of the specified width and height, which often makes layout calculations difficult.\n- `border-box`: The `width` and `height` properties include the content, padding, and border. This is a much more intuitive way to work. For example, if you set `width: 200px;`, the element's total visible width will be 200px, regardless of its padding or border.\n\nIt is a common best practice to apply `box-sizing: border-box;` to all elements for more predictable layouts:\n```css\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n```",
  },
  {
    question: "Explain the concept of Web Accessibility (A11y) and key HTML accessibility features.",
    idealAnswer: "Web Accessibility ensures that websites are usable by people with disabilities. Key HTML accessibility features include:\n\n**Semantic HTML:**\n- Use proper semantic elements (`<nav>`, `<main>`, `<header>`, `<footer>`)\n- Proper heading hierarchy (h1 → h2 → h3)\n- Use `<button>` for buttons, not `<div>` with click handlers\n\n**ARIA Attributes:**\n- `aria-label`: Provides accessible name for elements\n- `aria-describedby`: References element containing description\n- `aria-expanded`: Indicates collapsible content state\n- `role`: Defines element purpose when semantic HTML isn't enough\n\n**Other Features:**\n- `alt` attributes for images\n- `for` attribute linking labels to form inputs\n- `tabindex` for keyboard navigation\n- `skip links` for keyboard users\n- `lang` attribute for screen readers\n\nAccessibility benefits everyone, not just users with disabilities.",
  },
  {
    question: "What are Web Components and how do they work? Explain Custom Elements, Shadow DOM, and Templates.",
    idealAnswer: "Web Components are a set of web platform APIs that allow you to create reusable custom elements:\n\n**Custom Elements:**\n- Create your own HTML tags with `class MyElement extends HTMLElement`\n- Define using `customElements.define('my-element', MyElement)`\n- Lifecycle callbacks: `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`\n\n**Shadow DOM:**\n- Encapsulates DOM and CSS, preventing style conflicts\n- Created with `element.attachShadow({ mode: 'open' })`\n- Styles inside Shadow DOM don't affect the main document\n- Provides true component encapsulation\n\n**Templates:**\n- `<template>` element holds inert HTML fragments\n- Content isn't rendered until activated\n- Can be cloned and inserted: `template.content.cloneNode(true)`\n- Often used with `<slot>` for content projection\n\n**Example:**\n```javascript\nclass MyCard extends HTMLElement {\n  connectedCallback() {\n    const shadow = this.attachShadow({mode: 'open'});\n    shadow.innerHTML = `<style>:host { display: block; }</style><slot></slot>`;\n  }\n}\ncustomElements.define('my-card', MyCard);\n```",
  },
  {
    question: "Explain HTML5 performance optimization techniques and best practices.",
    idealAnswer: "HTML5 offers several performance optimization techniques:\n\n**Resource Loading:**\n- `defer` and `async` attributes for non-blocking script loading\n- `rel=\"preload\"` for critical resources\n- `rel=\"prefetch\"` for resources needed soon\n- `loading=\"lazy\"` for images and iframes\n\n**Critical Rendering Path:**\n- Minimize DOM size and depth\n- Optimize CSS delivery (inline critical CSS, async non-critical)\n- Reduce render-blocking resources\n- Use `will-change` property for animations\n\n**Image Optimization:**\n- Responsive images with `srcset` and `sizes`\n- Modern formats (WebP, AVIF) with `<picture>` element\n- Proper image compression and dimensions\n\n**Other Techniques:**\n- Minify HTML (remove whitespace, comments)\n- Use semantic HTML for better parsing\n- Implement proper caching strategies\n- Reduce HTTP requests with resource bundling\n- Use CDN for static assets\n- Optimize web fonts loading\n\nPerformance monitoring with `PerformanceObserver` API helps identify bottlenecks.",
  },
  {
    question: "What is the Content Security Policy (CSP) and how does it enhance HTML security?",
    idealAnswer: "Content Security Policy (CSP) is a security layer that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks.\n\n**How CSP Works:**\n- Implemented via HTTP headers or meta tags\n- Defines whitelist of content sources\n- Blocks inline scripts and eval() by default\n- Prevents mixed content issues\n\n**Common CSP Directives:**\n- `script-src`: Specifies allowed JavaScript sources\n- `style-src`: Controls CSS source origins\n- `img-src`: Defines valid image sources\n- `connect-src`: Limits fetch/XMLHttpRequest destinations\n- `font-src`: Controls font loading sources\n- `default-src`: Fallback for all resource types\n\n**Implementation Examples:**\n```html\n<!-- Via meta tag -->\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://trusted.cdn.com\">\n\n<!-- Strict policy -->\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;\">\n```\n\n**Security Benefits:**\n- Prevents XSS attacks by blocking unauthorized scripts\n- Reduces attack surface for data injection\n- Enforces HTTPS usage\n- Controls resource loading from trusted sources only",
  },
  {
    question: "Explain the concept of progressive enhancement and graceful degradation in HTML.",
    idealAnswer: "**Progressive Enhancement** and **Graceful Degradation** are two approaches to building web applications that work across different browsers and capabilities.\n\n**Progressive Enhancement:**\n- **Start with basic functionality** that works everywhere\n- **Layer advanced features** on top for capable browsers\n- **Core content is always accessible** regardless of JavaScript/CSS support\n- **Mobile-first approach**: Build for basic devices first\n\n**Example:**\n```html\n<!-- Basic HTML that works everywhere -->\n<form action=\"/submit\" method=\"POST\">\n  <input type=\"text\" name=\"username\" required>\n  <button type=\"submit\">Submit</button>\n</form>\n\n<!-- Enhanced with JavaScript for modern browsers -->\n<script>\nif ('fetch' in window) {\n  // Add AJAX submission for modern browsers\n  document.querySelector('form').addEventListener('submit', handleSubmit);\n}\n</script>\n```\n\n**Graceful Degradation:**\n- **Build full-featured version** for modern browsers\n- **Provide fallbacks** for older browsers\n- **Detect capabilities** and serve appropriate experience\n- **Feature detection** over browser detection\n\n**Key Principles:**\n- **Semantic HTML** ensures content structure\n- **Progressive enhancement** is preferred approach\n- **Always test without JavaScript** to ensure core functionality\n- **Use feature detection**: `if ('feature' in window)`\n- **Provide meaningful fallbacks** for missing capabilities",
  },
  {
    question: "What are HTML5 Web Workers and how do they improve performance?",
    idealAnswer: "Web Workers allow JavaScript to run in background threads, preventing the main thread from being blocked by computationally intensive tasks.\n\n**How Web Workers Work:**\n- Run scripts in background threads separate from main UI thread\n- Communicate with main thread via `postMessage()` and `onmessage`\n- Cannot directly access DOM or window objects\n- Have access to limited APIs (XHR, WebSocket, IndexedDB, etc.)\n\n**Benefits:**\n- **Non-blocking UI**: Heavy computations don't freeze the interface\n- **Better performance**: Parallel processing for CPU-intensive tasks\n- **Improved responsiveness**: UI remains interactive during background work\n- **Better user experience**: Smooth animations and interactions\n\n**Implementation Example:**\n```javascript\n// Main thread\nconst worker = new Worker('worker.js');\nworker.postMessage({ data: largeDataSet });\nworker.onmessage = function(e) {\n  console.log('Result:', e.data.result);\n};\n\n// worker.js\nself.onmessage = function(e) {\n  const result = performHeavyComputation(e.data.data);\n  self.postMessage({ result: result });\n};\n```\n\n**Use Cases:**\n- Image/video processing\n- Complex calculations\n- Data analysis and sorting\n- Background file operations\n- Real-time data processing\n\n**Types of Workers:**\n- **Dedicated Workers**: One-to-one relationship with creator\n- **Shared Workers**: Can be shared by multiple scripts\n- **Service Workers**: Network proxy for offline applications",
  },
  {
    question: "Explain the Critical Rendering Path and HTML's impact on web performance.",
    idealAnswer: "The **Critical Rendering Path** is the sequence of steps browsers take to convert HTML, CSS, and JavaScript into pixels on screen.\n\n**Steps in Critical Rendering Path:**\n1. **DOM Construction**: Parse HTML → DOM Tree\n2. **CSSOM Construction**: Parse CSS → CSSOM Tree\n3. **Render Tree**: Combine DOM + CSSOM → Render Tree\n4. **Layout**: Calculate positions and sizes\n5. **Paint**: Draw pixels to screen\n6. **Composite**: Combine layers\n\n**HTML's Performance Impact:**\n- **DOM Size**: Larger DOM = slower parsing and memory usage\n- **Blocking Resources**: Scripts block DOM construction unless async/defer\n- **CSS Blocking**: CSS blocks rendering until CSSOM is built\n- **Reflow/Repaint**: DOM changes trigger expensive calculations\n\n**Optimization Techniques:**\n- Minimize DOM nodes and nesting depth\n- Use `async`/`defer` for non-critical scripts\n- Inline critical CSS, async load non-critical\n- Avoid inline styles causing layout thrashing\n- Use `loading=\"lazy\"` for images and iframes\n- Implement proper resource hints (`preload`, `prefetch`)\n\n**Measurement Tools:**\n- Performance API for timing\n- Chrome DevTools Performance tab\n- Lighthouse audits for performance scoring",
  },
  {
    question: "What are HTML5 Microdata and how does it enhance SEO?",
    idealAnswer: "Microdata is a specification that nests metadata within existing content, helping search engines understand content better.\n\n**Key Attributes:**\n- `itemscope`: Defines an item\n- `itemtype`: Specifies vocabulary (schema.org)\n- `itemprop`: Defines properties\n\n**Example:**\n```html\n<div itemscope itemtype=\"http://schema.org/Person\">\n  <span itemprop=\"name\">John Doe</span>\n  <span itemprop=\"jobTitle\">Software Engineer</span>\n  <span itemprop=\"telephone\">555-1234</span>\n</div>\n```\n\n**SEO Benefits:**\n- **Rich Snippets**: Enhanced search results with ratings, prices\n- **Knowledge Graph**: Feeds Google's knowledge panels\n- **Better Understanding**: Improved content comprehension\n- **Local SEO**: Enhanced business listings\n\n**Common Schemas:**\n- `Organization`: Company information\n- `Product`: Product details and reviews\n- `Article`: Blog posts and news\n- `Recipe`: Cooking instructions\n- `Event`: Event details\n\n**Alternatives:**\n- **JSON-LD**: Google's preferred format\n- **RDFa**: Another microformat option\n- **Open Graph**: Social media metadata",
  },
  {
    question: "Explain HTML5 Server-Sent Events (SSE) and their use cases.",
    idealAnswer: "Server-Sent Events provide a standard way for servers to push data to web clients automatically over HTTP.\n\n**How SSE Works:**\n- **One-way Communication**: Server → Client only\n- **Persistent Connection**: Long-lived HTTP connection\n- **Text-based Data**: Sends plain text data streams\n- **Automatic Reconnection**: Browser handles reconnection\n\n**Implementation:**\n```javascript\n// Client-side\nconst eventSource = new EventSource('/events');\neventSource.onmessage = (event) => {\n  console.log('New data:', event.data);\n};\n\n// Server-side (Node.js)\nres.writeHead(200, {\n  'Content-Type': 'text/event-stream',\n  'Cache-Control': 'no-cache',\n  'Connection': 'keep-alive'\n});\nres.write('data: Hello World\\n\\n');\n```\n\n**Use Cases:**\n- **Live Notifications**: Social media feeds, news updates\n- **Stock Tickers**: Real-time financial data\n- **Monitoring**: System status, logs\n- **Chat Applications**: One-way messaging\n- **Sports Scores**: Live game updates\n\n**Advantages over WebSockets:**\n- Simpler implementation\n- Automatic reconnection\n- Built-in event types\n- HTTP-based (no special protocol)\n- Better for server-to-client updates\n\n**Limitations:**\n- One-way communication only\n- Text data only (no binary)\n- Limited to same-origin policy",
  },
];

const categories = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
};

interface QnAProps {
  questions: { question: string; idealAnswer: string }[];
}

const languages = [
  {
    title: 'HTML',
    icon: <Code className="w-4 h-4" />,
    href: '/prepare/html/interview-questions',
    color: 'orange',
    status: 'available'
  },
  {
    title: 'CSS',
    icon: <Palette className="w-4 h-4" />,
    href: '/prepare/css/interview-questions',
    color: 'blue',
    status: 'available'
  },
  {
    title: 'JavaScript',
    icon: <FileText className="w-4 h-4" />,
    href: '/prepare/javascript/interview-questions',
    color: 'yellow',
    status: 'available'
  },
  {
    title: 'React',
    icon: <Play className="w-4 h-4" />,
    href: '#',
    color: 'cyan',
    status: 'learning'
  },
  {
    title: 'TypeScript',
    icon: <Code className="w-4 h-4" />,
    href: '#',
    color: 'blue',
    status: 'learning'
  }
];

interface HtmlInterviewQuestionsProps {
  showBackButton?: boolean;
}

function QnA({ questions }: QnAProps) {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          <Accordion type="single" collapsible className="w-full border-0 bg-transparent">
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="text-left hover:no-underline p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                      {q.question}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1">
                    Answer
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Answer</span>
                  </div>
                  <div 
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: String(marked.parse(q.idealAnswer)) }} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default function HtmlInterviewQuestions({ showBackButton = true }: HtmlInterviewQuestionsProps) {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'interview-questions',
    title: 'Interview Questions',
    explanation: 'Common HTML interview questions to prepare you for technical assessments',
    category: 'Overview'
  };

  const language: Language = {
    slug: 'html',
    name: 'HTML',
    description: 'The foundation of web development - structure and content for the web',
    topics: []
  };

  const difficultyStats = {
    easy: { count: easyQuestions.length, icon: BookOpen, color: 'green', time: '5-10 min' },
    medium: { count: mediumQuestions.length, icon: Target, color: 'yellow', time: '10-15 min' },
    hard: { count: hardQuestions.length, icon: TrendingUp, color: 'red', time: '15-20 min' }
  };

  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      
      {/* Interview Header */}
      <InterviewHeader showBackButton={showBackButton} currentLanguage="HTML" />
        
      {/* Questions Tabs */}
      <div className="space-y-6">
        
        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer">
              <BookOpen className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Easy</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{easyQuestions.length} questions • 5-10 min</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer">
              <Target className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Medium</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{mediumQuestions.length} questions • 10-15 min</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer">
              <TrendingUp className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Hard</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{hardQuestions.length} questions • 15-20 min</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="easy" className="space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <BookOpen className="w-5 h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Fundamental HTML concepts perfect for beginners and quick reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={categories.easy} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Target className="w-5 h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-300">
                  Intermediate concepts that test deeper understanding of HTML
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={categories.medium} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <TrendingUp className="w-5 h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  Advanced topics and complex scenarios for experienced developers
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={categories.hard} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Additional Resources */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Next Steps
          </CardTitle>
          <CardDescription>Continue your HTML learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📚 Learning Plan</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                Follow our structured learning path to master HTML from basics to advanced topics.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                → Comprehensive roadmap with 128 topics
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Practice Projects</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                Apply your knowledge with hands-on projects and real-world examples.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                → Build portfolios while learning
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      
      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />
    </div>
  );
}

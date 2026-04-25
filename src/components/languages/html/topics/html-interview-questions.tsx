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
  Play,
  Rocket
} from 'lucide-react';
import React, { useState } from 'react';
import { marked } from 'marked';
import Link from 'next/link';
import InterviewHeader from '@/components/shared/interview-header';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

const easyQuestions = [
  {
    question: "What does HTML stand for?",
    idealAnswer: "HTML stands for **HyperText Markup Language**. It's the standard language used to create and design documents on the World Wide Web.",
  },
  {
    question: "What is HTML?",
    idealAnswer: "HTML (HyperText Markup Language) is the **standard markup language** for creating web pages. It provides the basic structure and content of websites using a system of tags and attributes that browsers interpret to display text, images, and other media.",
  },
  {
    question: "What are HTML tags?",
    idealAnswer: "HTML tags are **keywords surrounded by angle brackets** like `<html>`, `<body>`, `<h1>`. They define different elements and content types in an HTML document. Tags usually come in pairs - an opening tag `<tag>` and a closing tag `</tag>` - though some are self-closing like `<img>` and `<br>`.",
  },
  {
    question: "What is the difference between HTML elements and tags?",
    idealAnswer: "**Tags** are the markup keywords (like `<p>`), while **elements** include the opening tag, content, and closing tag. For example, `<p>Hello</p>` is an element, where `<p>` and `</p>` are the tags. Some elements are self-contained (like `<img>`) and consist of just one tag.",
  },
  {
    question: "What is a semantic element?",
    idealAnswer: "Semantic elements are HTML tags that **clearly describe their meaning** to both the browser and developer. Examples include `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`. They make code more readable, improve accessibility, and help with SEO by providing context about the content structure.",
    implementation: 'semantic'
  },
  {
    question: "What is the basic structure of an HTML document?",
    idealAnswer: "A basic HTML document has this structure:\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- Visible content goes here -->\n</body>\n</html>\n```\nThe document starts with DOCTYPE, followed by html, head, and body sections.",
  },
  {
    question: "What is the purpose of <!DOCTYPE html>?",
    idealAnswer: "`<!DOCTYPE html>` is the **document type declaration** that tells the browser which version of HTML the document uses. For HTML5, it's simplified to just `<!DOCTYPE html>`. It ensures the browser renders the page in **standards mode** rather than quirks mode, preventing inconsistent rendering.",
  },
  {
    question: "What are attributes in HTML?",
    idealAnswer: "HTML attributes provide **additional information** about elements. They are always specified in the opening tag as name/value pairs like `class=\"container\"` or `id=\"header\"`. Common attributes include `class`, `id`, `src`, `href`, `alt`, `style`, and `title`.",
  },
  {
    question: "What is the difference between id and class?",
    idealAnswer: "**ID** attributes must be **unique** within a page and can only be used once. **Class** attributes can be applied to **multiple elements**. IDs are selected with `#` in CSS, classes with `.`. IDs have higher specificity and are typically used for unique page elements, while classes are for reusable styling.",
  },
  {
    question: "What are block-level elements?",
    idealAnswer: "Block-level elements start on a **new line** and take up the **full width available**. Examples include `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<form>`, and `<table>`. They can contain other block-level and inline elements.",
  },
  {
    question: "What are inline elements?",
    idealAnswer: "Inline elements do **not start on a new line** and only take up as much width as necessary. Examples include `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<code>`, and `<br>`. They typically appear within block-level elements and cannot contain block-level elements.",
  },
  {
    question: "What is the difference between `<div>` and `<span>`?",
    idealAnswer: "`<div>` is a **block-level element**, meaning it starts on a new line and takes up the full width available. It's used for grouping larger sections of content. `<span>` is an **inline-level element**, meaning it does not start on a new line and only takes up as much width as necessary. It's used for styling a small part of a text, like a single word.",
    implementation: 'block-inline'
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
  {
    question: "What are forms in HTML?",
    idealAnswer: "HTML forms are used to collect user input and send it to a server for processing. They provide interactive elements like text fields, checkboxes, radio buttons, and submit buttons. Forms are essential for user interactions such as login, registration, search, and data submission.",
  },
  {
    question: "What are different input types in HTML5?",
    idealAnswer: "HTML5 introduced many new input types for better user experience:\n\n**Text-based:** `text`, `password`, `email`, `url`, `tel`, `search`\n**Numeric:** `number`, `range` (slider)\n**Date/Time:** `date`, `time`, `datetime-local`, `month`, `week`\n**Selection:** `checkbox`, `radio`, `color`\n**Special:** `file`, `hidden`, `submit`, `reset`, `button`\n\nThese provide built-in validation and better mobile keyboards.",
    implementation: 'input-types'
  },
  {
    question: "What is the purpose of the <label> tag?",
    idealAnswer: "The `<label>` tag provides a text label for form elements, improving accessibility and usability:\n\n**Benefits:**\n- **Accessibility**: Links label to input for screen readers\n- **Usability**: Clicking label focuses the input field\n- **Clarity**: Describes what the input field expects\n\n**Two ways to use:**\n```html\n<!-- Implicit label -->\n<label>Username: <input type=\"text\" name=\"username\"></label>\n\n<!-- Explicit label (recommended) -->\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\">\n```",
  },
  {
    question: "What is the difference between radio and checkbox?",
    idealAnswer: "**Radio Buttons vs Checkboxes:**\n\n**Radio Buttons:**\n- **Single selection**: Only one option can be selected\n- **Group behavior**: Same `name` attribute creates a group\n- **Mutually exclusive**: Selecting one deselects others\n- **Use case**: Choose one option from many (gender, payment method)\n\n**Checkboxes:**\n- **Multiple selection**: Can select multiple options\n- **Independent**: Each checkbox works independently\n- **Same name optional**: Can have same name with array notation\n- **Use case**: Select multiple items (interests, features)",
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
    implementation: 'media'
  },
  {
    question: "What are HTML5 Canvas and SVG? When would you use each?",
    idealAnswer: "Canvas and SVG are both for graphics but serve different purposes:\n\n**Canvas:**\n- **Raster-based**: Pixel-based drawing\n- **JavaScript-driven**: Drawn via JavaScript API\n- **Immediate mode**: No DOM representation\n- **Best for**: Games, image manipulation, complex animations\n\n```html\n<canvas id=\"myCanvas\" width=\"500\" height=\"400\"></canvas>\n<script>\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 50, 50);\n</script>\n```\n\n**SVG:**\n- **Vector-based**: XML-based graphics\n- **DOM elements**: Part of document tree\n- **Retained mode**: Elements persist in DOM\n- **Best for**: Icons, charts, illustrations, scalable graphics\n\n```html\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"blue\" />\n  <rect x=\"10\" y=\"10\" width=\"30\" height=\"30\" fill=\"red\" />\n</svg>\n```\n\n**When to Use:**\n- **Canvas**: Photo editing, games, pixel manipulation\n- **SVG**: Icons, logos, data visualization, responsive graphics\n- **Performance**: Canvas better for many objects, SVG better for few",
    implementation: 'canvas-svg'
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
  {
    question: "What is the difference between HTML and XHTML?",
    idealAnswer: "**HTML vs XHTML differences:**\n\n**Syntax Rules:**\n- **HTML**: More forgiving, tags can be unclosed, case-insensitive\n- **XHTML**: Stricter XML-based syntax, all tags must be closed, case-sensitive\n\n**Key Differences:**\n- **XHTML** requires all elements to be properly nested and closed\n- **XHTML** attribute values must be in quotes\n- **XHTML** attribute minimization is not allowed (e.g., `disabled=\"disabled\"` not just `disabled`)\n- **XHTML** documents must be well-formed XML\n- **HTML5** merged the best of both, allowing HTML syntax while maintaining compatibility\n\n**Example:**\n```html\n<!-- HTML (valid) -->\n<img src=\"photo.jpg\" alt=\"Photo\">\n<br>\n\n<!-- XHTML (required) -->\n<img src=\"photo.jpg\" alt=\"Photo\" />\n<br />\n```",
  },
  {
    question: "What is the <div> tag used for?",
    idealAnswer: "The `<div>` tag is a **block-level container** used to group and structure HTML content. It's a generic container that:\n\n**Common Uses:**\n- **Layout structuring**: Create sections and containers\n- **CSS styling**: Apply styles to groups of elements\n- **JavaScript manipulation**: Target groups of elements\n- **Responsive design**: Create wrapper elements\n\n**Example:**\n```html\n<div class=\"container\">\n  <div class=\"header\">\n    <h1>Page Title</h1>\n  </div>\n  <div class=\"content\">\n    <p>Main content here</p>\n  </div>\n</div>\n```\n\n**Best Practices:**\n- Use semantic HTML5 elements when possible (`<header>`, `<main>`, `<section>`)\n- Use `<div>` for styling hooks or when no semantic element fits\n- Don't overuse - prefer semantic elements for better accessibility and SEO",
  },
  {
    question: "What is the <span> tag used for?",
    idealAnswer: "The `<span>` tag is an **inline container** used to group and style inline content. It's commonly used for:\n\n**Common Uses:**\n- **Text styling**: Apply CSS to specific text portions\n- **JavaScript targeting**: Select specific inline elements\n- **Highlighting**: Emphasize parts of text\n- **Grouping inline elements**: Apply styles to multiple inline elements\n\n**Example:**\n```html\n<p>This is <span class=\"highlight\">important text</span> that needs emphasis.</p>\n<p>Contact: <span class=\"email\">user@example.com</span></p>\n```\n\n**Key Characteristics:**\n- **Inline element**: Doesn't start new line\n- **No semantic meaning**: Purely for styling/grouping\n- **Versatile**: Can contain text, images, other inline elements\n- **CSS-friendly**: Perfect for targeted styling\n\n**Best Practices:**\n- Use for styling hooks, not semantic meaning\n- Consider `<strong>`, `<em>`, `<mark>` for semantic alternatives\n- Keep spans minimal and purposeful",
  },
  {
    question: "What is the <iframe> tag?",
    idealAnswer: "The `<iframe>` (inline frame) tag embeds another HTML document within the current document:\n\n**Basic Syntax:**\n```html\n<iframe src=\"https://example.com\" width=\"600\" height=\"400\">\n  Your browser doesn't support iframes.\n</iframe>\n```\n\n**Key Attributes:**\n- `src`: URL of the embedded content\n- `width/height`: Dimensions of the frame\n- `frameborder`: Border visibility (deprecated in HTML5)\n- `allowfullscreen`: Enable fullscreen capability\n- `loading=\"lazy\"`: Defer loading until needed\n- `sandbox`: Security restrictions for embedded content\n\n**Common Uses:**\n- **Embedded videos**: YouTube, Vimeo players\n- **Maps**: Google Maps integration\n- **Social media**: Twitter feeds, Facebook posts\n- **Third-party widgets**: Calendars, forms\n\n**Security Considerations:**\n- Use `sandbox` attribute for untrusted content\n- Implement CSP policies\n- Be aware of same-origin policy restrictions\n- Consider performance impact of multiple iframes",
  },
  {
    question: "What is the difference between <section> and <article>?",
    idealAnswer: "**Both are semantic HTML5 elements but serve different purposes:**\n\n**`<section>`:**\n- **Thematic grouping**: Groups related content\n- **Generic container**: More flexible than article\n- **Can contain articles**: Sections can have multiple articles\n- **Example**: Chapters, tabbed content, navigation sections\n\n```html\n<section>\n  <h2>Products</h2>\n  <article>Product 1 details</article>\n  <article>Product 2 details</article>\n</section>\n```\n\n**`<article>`:**\n- **Self-contained content**: Stands alone and makes sense independently\n- **Distributable**: Can be syndicated or reused\n- **Has its own heading**: Typically contains h1-h6\n- **Example**: Blog posts, news articles, forum posts, user comments\n\n```html\n<article>\n  <h1>Blog Post Title</h1>\n  <p>Content that makes sense on its own...</p>\n</article>\n```\n\n**Key Differences:**\n- **Article**: Content is complete and standalone\n- **Section**: Content is related but not necessarily standalone\n- **Nesting**: Articles can contain sections, sections can contain articles\n- **Use case**: Article for independent content, section for related content grouping",
  },
  {
    question: "What is the difference between GET and POST methods?",
    idealAnswer: "**GET vs POST methods:**\n\n**GET Method:**\n- Appends form data to the URL as query parameters\n- Data is visible in the browser address bar\n- Limited data size (URL length restrictions)\n- Can be bookmarked and cached\n- Should be used for safe, idempotent operations (search, filtering)\n\n**POST Method:**\n- Sends form data in the HTTP request body\n- Data is not visible in the URL\n- Can send large amounts of data\n- Cannot be bookmarked easily\n- Should be used for sensitive data or operations that change server state\n\n**Security considerations:**\n- Never send passwords or sensitive data via GET\n- POST is more secure for sensitive information\n- GET requests are logged in server logs and browser history",
  },
  {
    question: "What is form validation in HTML?",
    idealAnswer: "HTML5 provides built-in form validation to improve user experience:\n\n**Built-in Validation:**\n- **Required fields**: `required` attribute ensures field completion\n- **Pattern validation**: `pattern` attribute for regex matching\n- **Type validation**: Input types like `email`, `url`, `number`\n- **Length constraints**: `minlength`, `maxlength` attributes\n- **Numeric constraints**: `min`, `max`, `step` for numbers\n\n**Validation States:**\n- `:valid` - Input passes validation\n- `:invalid` - Input fails validation\n- `:required` - Required field\n- `:optional` - Optional field\n\n**JavaScript Validation API:**\n- `checkValidity()` - Returns true/false\n- `setCustomValidity()` - Set custom error messages\n- `validationMessage` - Get current error message",
  },
  {
    question: "What is the required attribute?",
    idealAnswer: "The `required` attribute specifies that an input field must be filled out before submitting the form:\n\n**Basic Usage:**\n```html\n<input type=\"text\" name=\"username\" required>\n<input type=\"email\" name=\"email\" required>\n<textarea name=\"message\" required></textarea>\n<select name=\"country\" required>\n  <option value=\"\">Select a country</option>\n  <option value=\"us\">United States</option>\n</select>\n```\n\n**Key Features:**\n- **Browser validation**: Prevents form submission if empty\n- **Visual indicators**: Browser shows validation UI\n- **Accessibility**: Screen readers announce required fields\n- **CSS styling**: Can be styled with `:required` pseudo-class",
  },
  {
    question: "What is the placeholder attribute?",
    idealAnswer: "The `placeholder` attribute provides a short hint or example text that describes the expected value of an input field:\n\n**Basic Usage:**\n```html\n<input type=\"text\" placeholder=\"Enter your name\">\n<input type=\"email\" placeholder=\"user@example.com\">\n<input type=\"tel\" placeholder=\"(555) 123-4567\">\n<textarea placeholder=\"Enter your message here...\"></textarea>\n```\n\n**Key Characteristics:**\n- **Temporary text**: Disappears when user starts typing\n- **Not a replacement**: Should not replace labels\n- **Styling**: Can be styled with `::placeholder` pseudo-element\n- **Accessibility**: Not read by screen readers by default\n\n**Best Practices:**\n- **Use with labels**: Always include proper `<label>` elements\n- **Be descriptive**: Provide meaningful examples\n- **Keep short**: Use concise, helpful text",
  },
  {
    question: "What is the pattern attribute?",
    idealAnswer: "The `pattern` attribute specifies a regular expression that the input field's value is checked against:\n\n**Basic Syntax:**\n```html\n<input type=\"text\" pattern=\"[A-Za-z]{3}\" title=\"Three letters\">\n<input type=\"text\" pattern=\"\\d{3}-\\d{3}-\\d{4}\" placeholder=\"123-456-7890\">\n<input type=\"password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain number, uppercase and lowercase letter, and at least 8 characters\">\n```\n\n**Common Patterns:**\n- **Phone**: `\\d{3}-\\d{3}-\\d{4}`\n- **Email**: `[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$`\n- **Password**: `(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`\n- **Username**: `[a-zA-Z0-9_]{4,16}`\n\n**Key Features:**\n- **Client-side validation**: Browser validates before submission\n- **Custom error messages**: Use `title` attribute for hints\n- **Regex support**: Full JavaScript regular expression support",
  },
  {
    question: "What is the autocomplete attribute?",
    idealAnswer: "The `autocomplete` attribute specifies whether the browser should automatically fill in the input field based on previously entered values:\n\n**Values:**\n- `on` - Enable autocomplete (default)\n- `off` - Disable autocomplete\n- `name`, `email`, `username`, `password` - Specific field types\n\n**Common Autocomplete Values:**\n- `name`, `email`, `username`, `password`\n- `street-address`, `city`, `country`, `postal-code`\n- `tel`, `fax`\n- `cc-number`, `cc-exp`, `cc-csc`\n- `bday`, `bday-day`, `bday-month`, `bday-year`\n\n**Security Considerations:**\n- **Sensitive fields**: Use `autocomplete=\"off\"` for sensitive data\n- **Password fields**: Use `new-password` or `current-password`\n- **Financial info**: Be careful with credit card autocomplete",
  },
  {
    question: "How do you upload a file in HTML?",
    idealAnswer: "File uploads use the `<input type=\"file\">` element with specific attributes:\n\n**Basic File Upload:**\n```html\n<input type=\"file\" name=\"document\">\n```\n\n**Advanced Options:**\n```html\n<!-- Single file upload -->\n<input type=\"file\" name=\"resume\" accept=\".pdf,.doc,.docx\">\n\n<!-- Multiple file upload -->\n<input type=\"file\" name=\"images\" multiple accept=\"image/*\">\n\n<!-- Form setup required -->\n<form method=\"post\" enctype=\"multipart/form-data\" action=\"/upload\">\n  <input type=\"file\" name=\"file\" required>\n  <button type=\"submit\">Upload</button>\n</form>\n```\n\n**Key Attributes:**\n- `accept`: Specifies allowed file types\n- `multiple`: Allows selecting multiple files\n- `required`: Makes file selection mandatory\n\n**Important Notes:**\n- **Form enctype**: Must be `multipart/form-data`\n- **Method**: Should be `POST`\n- **Server handling**: Requires server-side file processing",
  },
  {
    question: "What is the <fieldset> tag?",
    idealAnswer: "The `<fieldset>` tag groups related elements in a form, creating a visual and semantic grouping:\n\n**Basic Structure:**\n```html\n<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\">\n  </fieldset>\n</form>\n```\n\n**Key Features:**\n- **Visual grouping**: Creates border around related fields\n- **Semantic meaning**: Groups related form controls\n- **Accessibility**: Helps screen reader users understand form structure\n- **Legend**: `<legend>` provides caption for the fieldset\n\n**Benefits:**\n- **Organization**: Logical grouping of form fields\n- **Accessibility**: Better navigation for screen readers\n- **Styling**: Can be styled as a unit",
  },
  {
    question: "What is the <datalist> tag?",
    idealAnswer: "The `<datalist>` tag provides a list of predefined options for an `<input>` element, creating an autocomplete dropdown:\n\n**Basic Usage:**\n```html\n<label for=\"browser\">Choose a browser:</label>\n<input list=\"browsers\" id=\"browser\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n  <option value=\"Edge\">\n  <option value=\"Opera\">\n</datalist>\n```\n\n**Key Features:**\n- **Flexible input**: Users can type custom values or select from list\n- **Auto-filtering**: List filters as user types\n- **No validation**: Doesn't restrict input to list values\n- **Connected via list**: Input's `list` attribute matches datalist's `id`\n\n**Benefits:**\n- **User experience**: Faster input completion\n- **Suggestions**: Provides helpful hints\n- **Flexibility**: Allows custom input\n- **Accessibility**: Works with screen readers\n\n**Use Cases:**\n- Search suggestions\n- Common selections\n- Product recommendations\n- Location suggestions",
  },
];

const hardQuestions = [
  {
    question: "Explain the Critical Rendering Path and how HTML affects it.",
    idealAnswer: "The **Critical Rendering Path** is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. HTML's structure directly impacts performance:\n\n**Steps in Critical Rendering Path:**\n1. **DOM Construction** - Browser parses HTML into DOM tree\n2. **CSSOM Construction** - CSS is parsed into CSS Object Model\n3. **Render Tree** - Combines DOM and CSSOM\n4. **Layout** - Calculates element positions and sizes\n5. **Paint** - Fills pixels for each element\n6. **Composite** - Combines layers for final display\n\n**HTML's Impact:**\n- **Blocking resources**: `<script>` tags without `async`/`defer` block rendering\n- **CSS delivery**: `<link>` in `<head>` blocks rendering\n- **Image loading**: `<img>` doesn't block but affects layout\n- **Optimization**: Proper tag order and attributes improve performance\n\n**Optimization Techniques:**\n```html\n<head>\n  <!-- CSS first -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  \n  <!-- Scripts with defer -->\n  <script defer src=\"app.js\"></script>\n</head>\n<body>\n  <!-- Content first -->\n  <main>...</main>\n  \n  <!-- Non-critical scripts at end -->\n  <script src=\"analytics.js\"></script>\n</body>\n```",
  },
  {
    question: "What are Web Components and how do the four main technologies work together?",
    idealAnswer: "Web Components are a set of web platform APIs that allow you to create **reusable custom elements** with encapsulated functionality. They consist of four main technologies:\n\n**1. Custom Elements:**\n```javascript\nclass MyButton extends HTMLElement {\n  constructor() {\n    super();\n    this.addEventListener('click', () => {\n      alert('Clicked!');\n    });\n  }\n  \n  connectedCallback() {\n    this.innerHTML = `<button>Click me</button>`;\n  }\n}\n\ncustomElements.define('my-button', MyButton);\n```\n\n**2. Shadow DOM:**\n- Provides **DOM encapsulation**\n- Prevents CSS conflicts\n- Creates scoped styling\n\n```javascript\nconnectedCallback() {\n  const shadow = this.attachShadow({mode: 'closed'});\n  shadow.innerHTML = `\n    <style>\n      button { background: blue; }\n    </style>\n    <button><slot></slot></button>\n  `;\n}\n```\n\n**3. HTML Templates:**\n```html\n<template id=\"my-template\">\n  <style>p { color: red; }</style>\n  <p><slot name=\"content\"></slot></p>\n</template>\n```\n\n**4. HTML Imports:** (deprecated, use ES modules instead)\n\n**Benefits:**\n- **Reusability**: Use components across projects\n- **Encapsulation**: No CSS/JS conflicts\n- **Framework-agnostic**: Works with any framework\n- **Browser native**: No additional dependencies needed",
  },
  {
    question: "Explain Content Security Policy (CSP) and how to implement it via HTML meta tags.",
    idealAnswer: "Content Security Policy (CSP) is a **security layer** that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. It's implemented through HTTP headers or HTML meta tags.\n\n**Implementation via Meta Tag:**\n```html\n<meta http-equiv=\"Content-Security-Policy\" \n      content=\"default-src 'self'; \n              script-src 'self' https://trusted.cdn.com; \n              style-src 'self' 'unsafe-inline'; \n              img-src 'self' data: https:; \n              connect-src 'self' api.example.com; \n              font-src 'self'; \n              object-src 'none'; \n              media-src 'self'; \n              frame-src 'none';\">\n```\n\n**Directives Explained:**\n- **default-src**: Default policy for all resources\n- **script-src**: Allowed JavaScript sources\n- **style-src**: Allowed CSS sources\n- **img-src**: Allowed image sources\n- **connect-src**: Allowed AJAX/WebSocket connections\n- **font-src**: Allowed font sources\n- **object-src**: Allowed plugin sources (Flash, etc.)\n- **frame-src**: Allowed frame sources\n\n**Security Keywords:**\n- **'self'**: Same origin only\n- **'none'**: No sources allowed\n- **'unsafe-inline'**: Allows inline scripts/styles\n- **'unsafe-eval'**: Allows eval()\n- **data:**: Allows data: URIs\n\n**Best Practices:**\n- Start with restrictive policy and loosen as needed\n- Use **nonce** or **hash** for inline scripts instead of 'unsafe-inline'\n- Report violations with `report-uri` directive\n- Test in report-only mode first: `Content-Security-Policy-Report-Only`",
  },
  {
    question: "What is the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR) in HTML?",
    idealAnswer: "SSR and CSR are two approaches to rendering web pages, each with different HTML generation strategies:\n\n**Server-Side Rendering (SSR):**\n- **HTML Generation**: Server creates complete HTML on each request\n- **First Paint**: Fast - browser receives fully rendered HTML\n- **SEO**: Excellent - content is in initial HTML\n- **JavaScript**: Minimal or progressive enhancement\n- **Example**: Traditional PHP, Ruby on Rails, Next.js SSR\n\n```html\n<!-- SSR Response (Complete HTML) -->\n<!DOCTYPE html>\n<html>\n<head><title>My Page</title></head>\n<body>\n  <h1>Welcome John</h1>\n  <p>Your recent orders:...</p>\n  <script src=\"app.js\"></script>\n</body>\n</html>\n```\n\n**Client-Side Rendering (CSR):**\n- **HTML Generation**: Minimal HTML, JavaScript builds the page\n- **First Paint**: Slower - must download and execute JS first\n- **SEO**: Challenging - requires additional solutions\n- **JavaScript**: Heavy - required for initial render\n- **Example**: React, Vue, Angular SPAs\n\n```html\n<!-- CSR Response (Minimal HTML) -->\n<!DOCTYPE html>\n<html>\n<head><title>My App</title></head>\n<body>\n  <div id=\"root\"></div>\n  <script src=\"bundle.js\"></script>\n</body>\n</html>\n```\n\n**Trade-offs:**\n\n**SSR Advantages:**\n- Better SEO\n- Faster first paint\n- Better accessibility\n- Works without JavaScript\n\n**CSR Advantages:**\n- Richer interactions\n- Better user experience after initial load\n- Easier state management\n- Reduced server load\n\n**Hybrid Approaches:**\n- **Static Site Generation (SSG)**: Build-time HTML generation\n- **Incremental Static Regeneration**: Update static content periodically\n- **Isomorphic/Universal**: Can render on both server and client",
  },
  {
    question: "Explain the Intersection Observer API and its use cases in HTML.",
    idealAnswer: "The **Intersection Observer API** provides a way to **asynchronously observe changes** in the intersection of a target element with an ancestor element or with a top-level document's viewport. It's more performant than traditional scroll event listeners.\n\n**Basic Implementation:**\n```javascript\n// Create observer\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Element is visible!');\n      entry.target.classList.add('visible');\n    }\n  });\n}, {\n  threshold: 0.5, // 50% visible\n  rootMargin: '100px' // Start 100px before entering viewport\n});\n\n// Start observing\nconst element = document.querySelector('.animate-on-scroll');\nobserver.observe(element);\n```\n\n**Common Use Cases:**\n\n**1. Lazy Loading Images:**\n```html\n<img data-src=\"image.jpg\" class=\"lazy-load\" alt=\"Description\">\n```\n```javascript\nconst imgObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      img.classList.remove('lazy-load');\n      imgObserver.unobserve(img);\n    }\n  });\n});\n```\n\n**2. Infinite Scrolling:**\n```javascript\nconst loadMoreObserver = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting) {\n    loadMoreContent();\n  }\n});\n\nloadMoreObserver.observe(document.querySelector('.load-more-trigger'));\n```\n\n**3. Animation Triggers:**\n```html\n<div class=\"fade-in\" data-animate>Content</div>\n```\n\n**4. Analytics Tracking:**\n```javascript\nconst analyticsObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting && !entry.target.dataset.tracked) {\n      gtag('event', 'view', { element: entry.target.id });\n      entry.target.dataset.tracked = 'true';\n    }\n  });\n});\n```\n\n**Options:**\n- **threshold**: 0-1 (percentage of element visible)\n- **root**: viewport or specific container\n- **rootMargin**: offset around viewport\n- **trackVisibility**: track element visibility\n- **delay**: throttle notifications\n\n**Browser Support:**\n- Modern browsers (Chrome 51+, Firefox 55+, Safari 12.1+)\n- Polyfill available for older browsers",
  },
  {
    question: "What are the differences between localStorage, sessionStorage, and IndexedDB?",
    idealAnswer: "These are **client-side storage mechanisms** with different characteristics and use cases:\n\n**localStorage:**\n- **Capacity**: ~5-10 MB per domain\n- **Persistence**: **Permanent** - survives browser restarts\n- **Scope**: Same origin (protocol + domain + port)\n- **Access**: Synchronous API\n- **Data Type**: Strings only (JSON.stringify needed for objects)\n\n```javascript\n// localStorage\nlocalStorage.setItem('user', JSON.stringify({name: 'John'}));\nconst user = JSON.parse(localStorage.getItem('user'));\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // Clear all\n```\n\n**sessionStorage:**\n- **Capacity**: ~5-10 MB per domain\n- **Persistence**: **Session only** - cleared when tab closes\n- **Scope**: Same origin + tab-specific\n- **Access**: Synchronous API\n- **Data Type**: Strings only\n\n```javascript\n// sessionStorage\nsessionStorage.setItem('tempData', 'temporary');\nsessionStorage.getItem('tempData');\n```\n\n**IndexedDB:**\n- **Capacity**: **Large** - up to several GB per domain\n- **Persistence**: **Permanent** - survives browser restarts\n- **Scope**: Same origin\n- **Access**: **Asynchronous API** (non-blocking)\n- **Data Type**: **Structured data** - objects, arrays, blobs, files\n- **Features**: Transactions, indexes, cursors, versioning\n\n```javascript\n// IndexedDB\nconst request = indexedDB.open('myDatabase', 1);\n\nrequest.onupgradeneeded = (event) => {\n  const db = event.target.result;\n  const objectStore = db.createObjectStore('users', { keyPath: 'id' });\n  objectStore.createIndex('name', 'name', { unique: false });\n};\n\nrequest.onsuccess = (event) => {\n  const db = event.target.result;\n  const transaction = db.transaction(['users'], 'readwrite');\n  const store = transaction.objectStore('users');\n  \n  store.add({ id: 1, name: 'John', email: 'john@example.com' });\n};\n```\n\n**Use Cases:**\n- **localStorage**: User preferences, theme settings, authentication tokens\n- **sessionStorage**: Form data, multi-step wizards, temporary state\n- **IndexedDB**: Large datasets, offline applications, file storage, complex queries\n\n**Security Considerations:**\n- All are vulnerable to XSS attacks\n- Never store sensitive data (passwords, tokens) without encryption\n- Use HTTPS to prevent man-in-the-middle attacks\n- Consider expiration policies for sensitive data",
  },
  {
    question: "Explain the role of the `sandbox` attribute in iframes and its security implications.",
    idealAnswer: "The `sandbox` attribute on `<iframe>` elements provides **enhanced security** by restricting the capabilities of the embedded content. It creates a **restricted environment** for untrusted content.\n\n**Basic Usage:**\n```html\n<iframe src=\"https://example.com\" sandbox></iframe>\n```\n\n**Security Restrictions (Default):**\n- **No popup windows** (`window.open()` blocked)\n- **No form submissions** to other frames\n- **No script execution** (JavaScript disabled)\n- **No same-origin requests** (AJAX, localStorage blocked)\n- **No navigation** of top-level window\n- **No plugins** (Flash, etc.)\n- **No automatic media playback**\n- **No pointer lock**\n- **No fullscreen API**\n\n**Sandbox Values (Relaxing Restrictions):**\n```html\n<!-- Allow scripts -->\n<iframe sandbox=\"allow-scripts\"></iframe>\n\n<!-- Allow same-origin -->\n<iframe sandbox=\"allow-same-origin\"></iframe>\n\n<!-- Allow form submission -->\n<iframe sandbox=\"allow-forms\"></iframe>\n\n<!-- Allow popups -->\n<iframe sandbox=\"allow-popups\"></iframe>\n\n<!-- Allow top-level navigation -->\n<iframe sandbox=\"allow-top-navigation\"></iframe>\n\n<!-- Multiple permissions -->\n<iframe sandbox=\"allow-scripts allow-same-origin allow-forms\"></iframe>\n```\n\n**Security Best Practices:**\n\n**1. Always Use Sandbox for Untrusted Content:**\n```html\n<!-- User-generated content -->\n<iframe sandbox=\"allow-scripts\" srcdoc=\"<script>alert('XSS')</script>\"></iframe>\n```\n\n**2. Avoid Dangerous Combinations:**\n```html\n<!-- DANGEROUS: Allows script execution + same-origin access -->\n<iframe sandbox=\"allow-scripts allow-same-origin\"></iframe>\n<!-- This can break out of sandbox! -->\n```\n\n**3. Use CSP with Iframes:**\n```html\n<meta http-equiv=\"Content-Security-Policy\" \n      content=\"frame-src 'self' https://trusted.com;\">\n```\n\n**4. Modern Security Headers:**\n```html\n<meta http-equiv=\"X-Frame-Options\" content=\"DENY\">\n<meta http-equiv=\"X-Content-Type-Options\" content=\"nosniff\">\n```\n\n**Real-World Use Cases:**\n- **Third-party widgets**: Social media buttons, ads\n- **Code editors**: CodePen, JSFiddle embeds\n- **User content**: Comments, rich text editors\n- **Payment forms**: Stripe, PayPal iframes\n- **Isolated applications**: Micro-frontends\n\n**Browser Support:**\n- All modern browsers\n- IE10+ with limited support\n\n**Security Benefits:**\n- **XSS prevention**: Scripts can't access parent page\n- **Clickjacking protection**: Prevents hidden UI attacks\n- **Data isolation**: Can't access localStorage/cookies\n- **Navigation control**: Prevents redirect attacks",
  },
  {
    question: "What are Service Workers and how do they enable offline functionality in HTML applications?",
    idealAnswer: "Service Workers are **JavaScript scripts that run in the background**, separate from web pages, enabling features like offline support, background sync, and push notifications. They act as a **proxy between the browser and network**.\n\n**Key Characteristics:**\n- **Separate thread**: Runs independently of main JavaScript\n- **No DOM access**: Cannot directly manipulate DOM\n- **HTTPS required**: Must be served over secure connection\n- **Persistent**: Remains active even when page is closed\n- **Event-driven**: Responds to network events\n\n**Registration and Lifecycle:**\n```javascript\n// Register service worker\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(registration => {\n      console.log('SW registered:', registration);\n    })\n    .catch(error => {\n      console.log('SW registration failed:', error);\n    });\n}\n```\n\n**Service Worker Events:**\n```javascript\n// sw.js\nself.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open('v1').then(cache => {\n      return cache.addAll([\n        '/',\n        '/index.html',\n        '/styles.css',\n        '/app.js',\n        '/offline.html'\n      ]);\n    })\n  );\n});\n\nself.addEventListener('activate', event => {\n  event.waitUntil(\n    caches.keys().then(cacheNames => {\n      return Promise.all(\n        cacheNames.filter(name => name !== 'v1')\n          .map(name => caches.delete(name))\n      );\n    })\n  );\n});\n\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => {\n        // Return cached version or fetch from network\n        return response || fetch(event.request);\n      })\n      .catch(() => {\n        // Offline fallback\n        return caches.match('/offline.html');\n      })\n  );\n});\n```\n\n**Caching Strategies:**\n\n**1. Cache First:**\n```javascript\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => response || fetch(event.request))\n  );\n});\n```\n\n**2. Network First:**\n```javascript\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    fetch(event.request)\n      .then(response => {\n        // Cache successful responses\n        caches.open('dynamic').then(cache => {\n          cache.put(event.request, response.clone());\n        });\n        return response;\n      })\n      .catch(() => caches.match(event.request))\n  );\n});\n```\n\n**3. Stale While Revalidate:**\n```javascript\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.open('dynamic').then(cache => {\n      return cache.match(event.request).then(response => {\n        const fetchPromise = fetch(event.request).then(networkResponse => {\n          cache.put(event.request, networkResponse.clone());\n          return networkResponse;\n        });\n        return response || fetchPromise;\n      });\n    })\n  );\n});\n```\n\n**HTML Integration:**\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"theme-color\" content=\"#000000\">\n  <link rel=\"manifest\" href=\"/manifest.json\">\n</head>\n<body>\n  <div id=\"app\"></div>\n  \n  <script>\n    // Check for service worker support\n    if ('serviceWorker' in navigator) {\n      navigator.serviceWorker.register('/sw.js');\n    }\n    \n    // Handle online/offline status\n    window.addEventListener('online', () => {\n      document.body.classList.remove('offline');\n    });\n    \n    window.addEventListener('offline', () => {\n      document.body.classList.add('offline');\n    });\n  </script>\n</body>\n</html>\n```\n\n**Web App Manifest:**\n```json\n{\n  \"name\": \"My Offline App\",\n  \"short_name\": \"OfflineApp\",\n  \"start_url\": \"/\",\n  \"display\": \"standalone\",\n  \"background_color\": \"#ffffff\",\n  \"theme_color\": \"#000000\",\n  \"icons\": [\n    {\n      \"src\": \"/icon-192.png\",\n      \"sizes\": \"192x192\",\n      \"type\": \"image/png\"\n    }\n  ]\n}\n```\n\n**Benefits:**\n- **Offline functionality**: App works without internet\n- **Performance**: Faster load times from cache\n- **Background sync**: Sync data when connection returns\n- **Push notifications**: Engage users when offline\n- **App-like experience**: Can be added to home screen",
  },
  {
    question: "Explain the Web Vitals metrics and how HTML structure impacts Core Web Vitals.",
    idealAnswer: "Web Vitals are **essential metrics for measuring user experience** on the web. Core Web Vitals focus on loading performance, interactivity, and visual stability. HTML structure directly impacts these metrics.\n\n**Three Core Web Vitals:**\n\n**1. Largest Contentful Paint (LCP)**\n- **What it measures**: Loading performance - time to render largest visible element\n- **Good threshold**: Under 2.5 seconds\n- **HTML Impact**:\n  ```html\n  <!-- BAD: Large images without dimensions -->\n  <img src=\"hero-image.jpg\" alt=\"Hero\">\n  \n  <!-- GOOD: Include dimensions to prevent layout shift -->\n  <img src=\"hero-image.jpg\" \n       width=\"1200\" \n       height=\"600\" \n       loading=\"eager\" \n       alt=\"Hero\">\n       \n  <!-- GOOD: Preload critical resources -->\n  <link rel=\"preload\" as=\"image\" href=\"hero-image.jpg\">\n  <link rel=\"preload\" as=\"font\" href=\"critical-font.woff2\" crossorigin>\n  ```\n\n**2. First Input Delay (FID) / Interaction to Next Paint (INP)**\n- **What it measures**: Interactivity - time from user interaction to browser response\n- **Good threshold**: Under 100ms (FID) / 200ms (INP)\n- **HTML Impact**:\n  ```html\n  <!-- BAD: Blocking scripts in head -->\n  <head>\n    <script src=\"large-bundle.js\"></script>\n  </head>\n  \n  <!-- GOOD: Non-blocking scripts -->\n  <head>\n    <script src=\"critical.js\"></script>\n    <script defer src=\"non-critical.js\"></script>\n    <script async src=\"analytics.js\"></script>\n  </head>\n  \n  <!-- GOOD: Split critical and non-critical JS -->\n  <body>\n    <script>\n      // Critical inline JS for above-the-fold content\n      initCriticalFeatures();\n    </script>\n    <script defer src=\"app.js\"></script>\n  </body>\n  ```\n\n**3. Cumulative Layout Shift (CLS)**\n- **What it measures**: Visual stability - unexpected layout movement\n- **Good threshold**: Under 0.1\n- **HTML Impact**:\n  ```html\n  <!-- BAD: Images without dimensions cause layout shift -->\n  <div class=\"card\">\n    <img src=\"profile.jpg\" alt=\"Profile\">\n    <h2>John Doe</h2>\n  </div>\n  \n  <!-- GOOD: Include dimensions and aspect ratio -->\n  <div class=\"card\">\n    <img src=\"profile.jpg\" \n         width=\"100\" \n         height=\"100\" \n         alt=\"Profile\"\n         style=\"aspect-ratio: 1/1;\">\n    <h2>John Doe</h2>\n  </div>\n  \n  <!-- GOOD: Reserve space for dynamic content -->\n  <div class=\"ad-container\" style=\"min-height: 250px;\">\n    <!-- Ad will load here -->\n  </div>\n  \n  <!-- GOOD: Use font-display to prevent invisible text -->\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Inter&display=swap\">\n  ```\n\n**Optimization Techniques:**\n\n**1. Critical HTML Structure:**\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Preconnect to external domains -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://cdn.example.com\">\n  \n  <!-- Critical CSS inline -->\n  <style>\n    /* Above-the-fold styles */\n    body { margin: 0; font-family: system-ui; }\n    .hero { height: 60vh; background: #f0f0f0; }\n  </style>\n  \n  <!-- Non-critical CSS deferred -->\n  <link rel=\"preload\" href=\"styles.css\" as=\"style\" onload=\"this.onload=null;this.rel='stylesheet'\">\n  \n  <!-- Viewport meta tag -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <!-- Above-the-fold content first -->\n  <header class=\"hero\">\n    <h1>Welcome</h1>\n  </header>\n  \n  <!-- Lazy load below-the-fold content -->\n  <main>\n    <section class=\"lazy-section\" data-src=\"content.html\"></section>\n  </main>\n  \n  <!-- Scripts at end with defer -->\n  <script defer src=\"app.js\"></script>\n</body>\n</html>\n```\n\n**2. Image Optimization:**\n```html\n<!-- Modern image formats and responsive images -->\n<picture>\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <img src=\"hero.jpg\" \n       alt=\"Hero image\"\n       width=\"1200\" \n       height=\"600\"\n       loading=\"eager\"\n       decoding=\"sync\">\n</picture>\n\n<!-- Lazy load non-critical images -->\n<img src=\"placeholder.jpg\" \n     data-src=\"full-image.jpg\"\n     width=\"800\" \n     height=\"400\"\n     loading=\"lazy\"\n     class=\"lazy-load\"\n     alt=\"Description\">\n```\n\n**3. Font Loading Strategy:**\n```html\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter&display=swap\" rel=\"stylesheet\">\n\n<style>\n  /* Fallback fonts with font-display */\n  @font-face {\n    font-family: 'Inter';\n    src: url('/fonts/inter.woff2') format('woff2');\n    font-display: swap;\n  }\n</style>\n```\n\n**Measurement and Monitoring:**\n```html\n<!-- Web Vitals measurement script -->\n<script>\n  import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';\n  \n  getCLS(console.log);\n  getFID(console.log);\n  getFCP(console.log);\n  getLCP(console.log);\n  getTTFB(console.log);\n</script>\n```\n\n**Key Takeaways:**\n- **HTML structure** significantly impacts Core Web Vitals\n- **Resource loading order** affects LCP and FID\n- **Element dimensions** prevent CLS\n- **Critical path optimization** improves all metrics\n- **Modern HTML features** (loading, decoding, aspect-ratio) help optimization",
  },
  {
    question: "What is the difference between rel=\"preload\", rel=\"prefetch\", and rel=\"preconnect\" in HTML?",
    idealAnswer: "These are **resource hints** that optimize resource loading by telling the browser about resources that will be needed soon. Each serves a different purpose and timing.\n\n**rel=\"preconnect\"**\n- **Purpose**: Establish early connection to external domains\n- **When**: As soon as possible, usually in `<head>`\n- **What it does**: DNS lookup, TCP handshake, TLS negotiation\n- **Does NOT**: Download the actual resource\n\n```html\n<!-- Preconnect to external services -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://api.example.com\" crossorigin>\n<link rel=\"preconnect\" href=\"https://cdn.jsdelivr.net\">\n```\n\n**rel=\"preload\"**\n- **Purpose**: Download critical resources with high priority\n- **When**: For resources needed immediately (above-the-fold)\n- **What it does**: Fetches and caches resource for immediate use\n- **Priority**: Highest priority among resource hints\n\n```html\n<!-- Preload critical CSS -->\n<link rel=\"preload\" href=\"critical.css\" as=\"style\">\n\n<!-- Preload critical JavaScript -->\n<link rel=\"preload\" href=\"app.js\" as=\"script\">\n\n<!-- Preload critical fonts -->\n<link rel=\"preload\" href=\"main-font.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n\n<!-- Preload critical images -->\n<link rel=\"preload\" href=\"hero-image.jpg\" as=\"image\">\n\n<!-- Preload API responses -->\n<link rel=\"preload\" href=\"/api/user-data\" as=\"fetch\" crossorigin>\n```\n\n**rel=\"prefetch\"**\n- **Purpose**: Download resources for next navigation/page\n- **When**: Low priority, when browser is idle\n- **What it does**: Downloads and caches for future use\n- **Priority**: Lowest priority, won't compete with current page\n\n```html\n<!-- Prefetch next page resources -->\n<link rel=\"prefetch\" href=\"/page2.html\">\n<link rel=\"prefetch\" href=\"/styles/page2.css\">\n<link rel=\"prefetch\" href=\"/js/page2.js\">\n\n<!-- Prefetch likely user actions -->\n<link rel=\"prefetch\" href=\"/api/search-results?q=html\">\n```\n\n**Comparison Table:**\n| Feature | preconnect | preload | prefetch |\n|---------|------------|---------|-----------|\n| **Timing** | Immediately | Immediately | When idle |\n| **Priority** | High | Highest | Low |\n| **Downloads** | No (just connection) | Yes | Yes |\n| **Use Case** | External domains | Critical resources | Future resources |\n| **Browser Support** | Modern | Modern | Modern |\n\n**Advanced Usage:**\n\n**1. Combined Strategy:**\n```html\n<head>\n  <!-- 1. Preconnect to external domains -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://cdn.example.com\">\n  \n  <!-- 2. Preload critical resources -->\n  <link rel=\"preload\" href=\"hero.css\" as=\"style\">\n  <link rel=\"preload\" href=\"hero.js\" as=\"script\">\n  <link rel=\"preload\" href=\"hero-font.woff2\" as=\"font\" crossorigin>\n  \n  <!-- 3. Prefetch next page resources -->\n  <link rel=\"prefetch\" href=\"/about.html\">\n  <link rel=\"prefetch\" href=\"/about.css\">\n</head>\n```\n\n**2. Dynamic Preloading:**\n```javascript\n// Preload resources based on user interaction\nfunction preloadOnHover(element, resources) {\n  element.addEventListener('mouseenter', () => {\n    resources.forEach(resource => {\n      const link = document.createElement('link');\n      link.rel = 'preload';\n      link.href = resource.url;\n      link.as = resource.type;\n      if (resource.crossorigin) link.crossOrigin = 'anonymous';\n      document.head.appendChild(link);\n    });\n  }, { once: true });\n}\n\n// Usage\npreloadOnHover(document.querySelector('.next-page-link'), [\n  { url: '/next-page.js', type: 'script' },\n  { url: '/next-page.css', type: 'style' }\n]);\n```\n\n**3. Resource Hints for SPAs:**\n```html\n<!-- Preload initial bundle -->\n<link rel=\"preload\" href=\"app.bundle.js\" as=\"script\">\n\n<!-- Preconnect to API -->\n<link rel=\"preconnect\" href=\"https://api.example.com\" crossorigin>\n\n<!-- Prefetch lazy-loaded chunks -->\n<link rel=\"prefetch\" href=\"dashboard.chunk.js\">\n<link rel=\"prefetch\" href=\"profile.chunk.js\">\n```\n\n**Performance Impact:**\n- **preconnect**: Saves 100-500ms on first request to external domain\n- **preload**: Can reduce LCP by 20-40% for critical resources\n- **prefetch**: Makes next page load 50-80% faster\n\n**Best Practices:**\n- **Use preconnect** for external domains (fonts, APIs, CDNs)\n- **Use preload** for above-the-fold critical resources\n- **Use prefetch** for resources needed in next navigation\n- **Don't overuse**: Too many preloads can hurt performance\n- **Monitor**: Use DevTools to verify resource hints are working\n- **Combine with compression**: Resource hints work best with gzip/brotli",
  },
  {
    question: "Explain the role of the `importmap` feature in HTML and how it changes module loading.",
    idealAnswer: "The `importmap` feature is a **modern HTML specification** that allows developers to control how JavaScript module imports are resolved, enabling **bare module specifiers** and **module versioning** without build tools.\n\n**Traditional Module Loading (Problem):**\n```javascript\n// Before importmaps - required full URLs or build tools\nimport { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';\nimport { useState } from './node_modules/react/index.js';\n```\n\n**With Importmap (Solution):**\n```html\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"vue\": \"https://unpkg.com/vue@3/dist/vue.esm-browser.js\",\n    \"react\": \"https://unpkg.com/react@18/umd/react.production.min.js\",\n    \"react-dom\": \"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js\",\n    \"lodash\": \"https://unpkg.com/lodash-es@4.17.21/lodash.js\",\n    \"moment\": \"https://unpkg.com/moment@2.29.4/moment.js\",\n    \"./\": \"./modules/\"\n  }\n}\n</script>\n\n<script type=\"module\">\n// Now we can use bare specifiers!\nimport { createApp } from 'vue';\nimport { useState } from 'react';\nimport { debounce } from 'lodash';\nimport moment from 'moment';\nimport { utils } from './helpers.js'; // Maps to ./modules/helpers.js\n</script>\n```\n\n**Key Features:**\n\n**1. Bare Module Specifiers:**\n```html\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"jquery\": \"https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js\",\n    \"bootstrap\": \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js\"\n  }\n}\n</script>\n\n<script type=\"module\">\nimport $ from 'jquery';        // Works!\nimport 'bootstrap';          // Works!\n</script>\n```\n\n**2. Version Management:**\n```html\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"react\": \"https://unpkg.com/react@18.2.0/umd/react.production.min.js\",\n    \"react-dom\": \"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js\",\n    \"react/\": \"https://unpkg.com/react@18.2.0/\"\n  }\n}\n</script>\n```\n\n**3. Path Mapping:**\n```html\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"@components/\": \"./src/components/\",\n    \"@utils/\": \"./src/utils/\",\n    \"@styles/\": \"./src/styles/\"\n  }\n}\n</script>\n\n<script type=\"module\">\nimport Button from '@components/Button.js';\nimport { formatDate } from '@utils/date.js';\nimport './@styles/main.css';\n</script>\n```\n\n**4. Fallback and Scopes:**\n```html\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"moment\": \"https://cdn.skypack.dev/moment\",\n    \"lodash/\": \"https://cdn.skypack.dev/lodash-es/\"\n  },\n  \"scopes\": {\n    \"/modules/\": {\n      \"moment\": \"https://cdn.skypack.dev/moment@2.29.4\",\n      \"lodash/\": \"https://cdn.skypack.dev/lodash-es@4.17.21/\"\n    }\n  }\n}\n</script>\n```\n\n**Advanced Usage:**\n\n**1. Dynamic Importmaps:**\n```javascript\n// Update importmap dynamically\nconst importMap = document.querySelector('script[type=\"importmap\"]');\nconst map = JSON.parse(importMap.textContent);\n\nmap.imports.newModule = 'https://unpkg.com/new-module@1.0.0/index.js';\nimportMap.textContent = JSON.stringify(map, null, 2);\n```\n\n**2. Multiple Importmaps:**\n```html\n<!-- First importmap -->\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"vue\": \"https://unpkg.com/vue@3/dist/vue.esm-browser.js\"\n  }\n}\n</script>\n\n<!-- Second importmap (merges with first) -->\n<script type=\"importmap\">\n{\n  \"imports\": {\n    \"react\": \"https://unpkg.com/react@18/umd/react.production.min.js\"\n  }\n}\n</script>\n```\n\n**3. External Importmaps:**\n```html\n<script type=\"importmap\" src=\"/importmaps/vendor.json\"></script>\n```\n\n**Benefits:**\n- **No build tools needed**: Direct module imports in browser\n- **CDN-friendly**: Easy to use external modules\n- **Version control**: Pin specific versions in one place\n- **Path aliases**: Clean import paths like `@components/`\n- **Development**: Faster iteration without bundling\n- **Production**: Can still use bundlers for optimization\n\n**Browser Support:**\n- Chrome 89+, Firefox 108+, Edge 89+, Safari 16.4+\n- Polyfill available for older browsers\n\n**Real-World Example:**\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Modern App with Importmap</title>\n  <script type=\"importmap\">\n  {\n    \"imports\": {\n      \"vue\": \"https://unpkg.com/vue@3/dist/vue.esm-browser.js\",\n      \"vue-router\": \"https://unpkg.com/vue-router@4/dist/vue-router.esm-browser.js\",\n      \"pinia\": \"https://unpkg.com/pinia@2/dist/pinia.esm-browser.js\",\n      \"@/\": \"./src/\"\n    }\n  }\n  </script>\n</head>\n<body>\n  <div id=\"app\"></div>\n  \n  <script type=\"module\">\n    import { createApp } from 'vue';\n    import { createRouter, createWebHistory } from 'vue-router';\n    import { createPinia } from 'pinia';\n    import App from '@/App.js';\n    import routes from '@/router/index.js';\n    \n    const app = createApp(App);\n    const router = createRouter({ history: createWebHistory(), routes });\n    const pinia = createPinia();\n    \n    app.use(router);\n    app.use(pinia);\n    app.mount('#app');\n  </script>\n</body>\n</html>\n```\n\n**Limitations:**\n- Only works with ES modules (`type=\"module\"`)\n- Not supported in older browsers (requires polyfill)\n- Dynamic importmap updates have limitations\n- Some tools may not support importmaps yet",
  },
  {
    question: "What are HTML Portal Elements and how do they enable cross-iframe embedding?",
    idealAnswer: "HTML Portal Elements (`<portal>`) are an **experimental web platform feature** that allows embedding external content in a way that overcomes traditional iframe limitations. They enable **seamless navigation** and **cross-origin communication** while maintaining security.\n\n**Traditional Iframe Limitations:**\n- **Isolated context**: Separate JavaScript environment\n- **Navigation barriers**: Cannot navigate parent page\n- **SEO issues**: Content not indexed properly\n- **Responsive challenges**: Fixed dimensions, difficult to make responsive\n- **Performance overhead**: Additional document and rendering context\n\n**Portal Element Solution:**\n```html\n<!-- Basic portal usage -->\n<portal src=\"https://example.com/article.html\" \n         style=\"width: 100%; height: 500px;\">\n</portal>\n\n<!-- Portal with attributes -->\n<portal src=\"https://shop.example.com/product/123\" \n         referrerpolicy=\"no-referrer-when-downgrade\"\n         allow=\"accelerometer; camera; microphone\"\n         style=\"contain: strict;\">\n</portal>\n```\n\n**Key Features:**\n\n**1. Seamless Navigation:**\n```html\n<!-- Portal can navigate the main page -->\n<portal src=\"https://news.example.com\"></portal>\n\n<script>\nconst portal = document.querySelector('portal');\n\n// When user clicks on a link inside the portal\nportal.addEventListener('activate', (event) => {\n  // The portal content becomes the main page content\n  console.log('Portal activated:', event.url);\n});\n</script>\n```\n\n**2. Cross-Origin Communication:**\n```html\n<portal id=\"chat-widget\" src=\"https://chat.example.com/widget\"></portal>\n\n<script>\nconst portal = document.getElementById('chat-widget');\n\n// Send messages to portal\nportal.postMessage({ type: 'user_data', user: 'john' }, 'https://chat.example.com');\n\n// Receive messages from portal\nwindow.addEventListener('message', (event) => {\n  if (event.origin === 'https://chat.example.com') {\n    console.log('Message from portal:', event.data);\n  }\n});\n</script>\n```\n\n**3. Portal States and Lifecycle:**\n```javascript\nconst portal = document.querySelector('portal');\n\n// Portal states\nportal.addEventListener('load', () => {\n  console.log('Portal content loaded');\n});\n\nportal.addEventListener('error', () => {\n  console.log('Portal failed to load');\n});\n\n// Programmatically control portal\nportal.src = 'https://new-content.example.com';\nportal.reload();\nportal.close();\n```\n\n**Advanced Use Cases:**\n\n**1. Micro-Frontends:**\n```html\n<!-- Main application shell -->\n<header>My App</header>\n<main>\n  <!-- Portal for micro-frontend -->\n  <portal src=\"https://dashboard.example.com\" \n           id=\"dashboard-portal\"\n           style=\"width: 100%; height: 600px;\">\n  </portal>\n</main>\n\n<script>\n// Handle navigation between micro-frontends\nconst portals = {\n  dashboard: 'https://dashboard.example.com',\n  analytics: 'https://analytics.example.com',\n  settings: 'https://settings.example.com'\n};\n\ndocument.querySelectorAll('.nav-link').forEach(link => {\n  link.addEventListener('click', (e) => {\n    e.preventDefault();\n    const portal = document.getElementById('dashboard-portal');\n    portal.src = portals[e.target.dataset.section];\n  });\n});\n</script>\n```\n\n**2. Content Integration:**\n```html\n<!-- News article with embedded content -->\n<article>\n  <h1>Breaking News</h1>\n  <p>Main article content...</p>\n  \n  <!-- Embedded related content from partner site -->\n  <portal src=\"https://partner.example.com/related/123\" \n           style=\"width: 100%; height: 400px;\">\n  </portal>\n</article>\n```\n\n**3. E-commerce Integration:**\n```html\n<!-- Product page with reviews portal -->\n<div class=\"product-info\">\n  <h1>Product Name</h1>\n  <p>Product description...</p>\n  \n  <!-- Reviews from external service -->\n  <section class=\"reviews\">\n    <h2>Customer Reviews</h2>\n    <portal src=\"https://reviews.example.com/product/456\" \n             id=\"reviews-portal\"\n             style=\"width: 100%; height: 600px;\">\n    </portal>\n  </section>\n</div>\n```\n\n**Security Considerations:**\n```html\n<!-- Secure portal configuration -->\n<portal src=\"https://trusted.example.com/content\" \n         referrerpolicy=\"strict-origin-when-cross-origin\"\n         allow=\"accelerometer; ambient-light-sensor; autoplay; battery; camera; display-capture; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; payment; picture-in-picture; publickey-credentials-get; screen-wake-lock; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking\"\n         sandbox=\"allow-scripts allow-same-origin allow-forms allow-popups\"\n         style=\"contain: strict; content-visibility: auto;\">\n</portal>\n```\n\n**CSS Integration:**\n```css\n/* Portal styling */\nportal {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  overflow: hidden;\n  contain: strict;\n}\n\n/* Responsive portals */\n@media (max-width: 768px) {\n  portal {\n    height: 400px;\n  }\n}\n\n/* Loading state */\nportal:loading {\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nportal:loading::after {\n  content: \"Loading...\";\n  color: #666;\n}\n```\n\n**Browser Support and Polyfills:**\n```html\n<!-- Feature detection and polyfill -->\n<script>\nif (!HTMLPortalElement) {\n  // Load polyfill\n  const script = document.createElement('script');\n  script.src = 'https://unpkg.com/@webcomponents/webcomponentsjs';\n  document.head.appendChild(script);\n}\n</script>\n\n<!-- Fallback for unsupported browsers -->\n<portal src=\"https://content.example.com\">\n  <iframe src=\"https://content.example.com\" \n          style=\"width: 100%; height: 500px; border: none;\">\n  </iframe>\n</portal>\n```\n\n**Benefits over Iframes:**\n- **Better SEO**: Content is part of main document\n- **Improved performance**: Shared rendering context\n- **Seamless navigation**: Can navigate the main page\n- **Better responsive behavior**: More flexible sizing\n- **Enhanced communication**: Easier cross-origin messaging\n- **Accessibility**: Better screen reader support\n\n**Current Status:**\n- **Experimental**: Still in development, not widely supported\n- **Chrome**: Behind flag (chrome://flags/#enable-experimental-web-platform-features)\n- **Standardization**: W3C specification in progress\n- **Future**: Expected to revolutionize web component architecture",
  }
];

const implementationQuestions: { question: string; idealAnswer: string; implementation: string }[] = [
  {
    question: "Build a Semantic Web Page Layout",
    idealAnswer: "Create a well-structured, semantic HTML5 page layout that demonstrates proper use of header, nav, main, aside, section, article, and footer elements. This layout should be accessible and SEO-friendly with proper heading hierarchy and landmark roles.",
    implementation: 'semantic-layout'
  },
  {
    question: "Create an Accessible Form",
    idealAnswer: "Build a form with proper accessibility features including labels, fieldsets, ARIA attributes, error handling, and validation. The form should be fully keyboard navigable and screen reader friendly.",
    implementation: 'accessible-form'
  },
  {
    question: "Build a Responsive Image Component",
    idealAnswer: "Create an image component using srcset and picture elements to serve different images based on device size and resolution. Include lazy loading, alt text, and fallbacks for better performance.",
    implementation: 'responsive-image'
  },
  {
    question: "Create a Multi-Step Form (HTML structure only)",
    idealAnswer: "Design the HTML structure for a multi-step form with progress indicator, step navigation, and proper semantic markup. Each step should be a section with appropriate form elements.",
    implementation: 'multistep-form'
  },
  {
    question: "Build a Table with Proper Semantics",
    idealAnswer: "Create a data table with thead, tbody, th, scope attributes, and caption. Include proper headers for accessibility and responsive design considerations.",
    implementation: 'semantic-table'
  },
  {
    question: "Implement a Video Player",
    idealAnswer: "Build a custom video player using HTML5 video element with controls, fallback content, tracks for subtitles, and JavaScript API integration for enhanced functionality.",
    implementation: 'video-player'
  },
  {
    question: "Create a Navigation Menu",
    idealAnswer: "Design an accessible navigation menu with ARIA attributes, keyboard navigation, submenus, and responsive behavior. Use nav element with proper list structure.",
    implementation: 'navigation-menu'
  },
  {
    question: "Build a Card Component",
    idealAnswer: "Create a reusable card component containing an image, title, description, and button. Use semantic markup and consider accessibility and responsive design.",
    implementation: 'card-component'
  },
  {
    question: "Create a Modal Structure (HTML only)",
    idealAnswer: "Design a modal dialog with proper ARIA attributes, focus management structure, overlay, and semantic markup. The modal should be accessible with keyboard and screen readers.",
    implementation: 'modal-structure'
  },
  {
    question: "Build a Blog Page Layout",
    idealAnswer: "Create a blog page with article elements for posts, aside for sidebar, comments section with proper nesting, and time elements for dates. Use semantic HTML5 throughout.",
    implementation: 'blog-layout'
  },
];

const categories = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
  implementation: implementationQuestions,
};

interface QnAProps {
  questions: { question: string; idealAnswer: string; implementation?: string }[];
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

function QnA({ questions, isImplementation = false }: QnAProps & { isImplementation?: boolean }) {
  const { openWithContent } = useWebPlayground();

  const openPlayground = (type: string) => {
    let html = '';
    let css = '';
    let js = '';
    
    if (type === 'block-inline') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Div vs Span - Interactive Demo</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --bg-tertiary: #e8e8e8;
            --bg-div: #e3f2fd;
            --border-div: #2196f3;
            --bg-span: #fff3e0;
            --border-span: #ff9800;
            --text-primary: #333333;
            --text-secondary: #666666;
            --highlight-bg: #ffeb3b;
            --shadow-color: rgba(0,0,0,0.1);
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-tertiary: #3a3a3a;
                --bg-div: #1e3a5f;
                --border-div: #42a5f5;
                --bg-span: #4a3426;
                --border-span: #fb8c00;
                --text-primary: #ffffff;
                --text-secondary: #b0b0b0;
                --highlight-bg: #fbc02d;
                --shadow-color: rgba(0,0,0,0.3);
            }
        }
        
        * {
            box-sizing: border-box;
        }
        
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
            padding: 20px; 
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: var(--text-primary);
            margin-bottom: 10px;
        }
        
        .subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 30px;
        }
        
        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .demo-card {
            background: var(--bg-secondary);
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 2px 8px var(--shadow-color);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .demo-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px var(--shadow-color);
        }
        
        .element-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .element-title {
            font-size: 1.5em;
            font-weight: bold;
            margin: 0;
        }
        
        .div-title {
            color: var(--border-div);
        }
        
        .span-title {
            color: var(--border-span);
        }
        
        .element-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: 600;
            color: white;
        }
        
        .div-badge {
            background: var(--border-div);
        }
        
        .span-badge {
            background: var(--border-span);
        }
        
        .demo-area {
            background: var(--bg-primary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            min-height: 200px;
            position: relative;
        }
        
        /* Div styles */
        .div-example {
            background: var(--bg-div);
            border: 2px solid var(--border-div);
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            transition: all 0.3s;
        }
        
        .div-example:hover {
            transform: translateX(5px);
            box-shadow: 0 2px 8px var(--shadow-color);
        }
        
        .div-nested {
            background: rgba(33, 150, 243, 0.1);
            border: 1px dashed var(--border-div);
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
        }
        
        /* Span styles */
        .span-example {
            background: var(--bg-span);
            border: 2px solid var(--border-span);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
            transition: all 0.3s;
            cursor: pointer;
        }
        
        .span-example:hover {
            background: var(--border-span);
            color: white;
            transform: scale(1.1);
        }
        
        .span-multiple {
            display: inline-block;
            margin: 0 5px;
        }
        
        .controls {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            color: white;
        }
        
        .div-btn {
            background: var(--border-div);
        }
        
        .div-btn:hover {
            background: #1976d2;
        }
        
        .span-btn {
            background: var(--border-span);
        }
        
        .span-btn:hover {
            background: #f57c00;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .feature-list li:last-child {
            border-bottom: none;
        }
        
        .feature-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
            flex-shrink: 0;
        }
        
        .div-icon {
            background: var(--border-div);
        }
        
        .span-icon {
            background: var(--border-span);
        }
        
        .code-block {
            background: var(--bg-tertiary);
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
            overflow-x: auto;
        }
        
        .interactive-demo {
            background: var(--bg-tertiary);
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        
        .demo-title {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 15px;
            color: var(--text-primary);
        }
        
        .width-demo {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
        }
        
        .width-item {
            flex: 1;
            text-align: center;
        }
        
        .width-display {
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            padding: 10px;
            margin-top: 10px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9em;
        }
        
        .visual-box {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            position: relative;
        }
        
        .visual-label {
            position: absolute;
            top: -10px;
            left: 10px;
            background: var(--bg-primary);
            padding: 0 5px;
            font-size: 0.8em;
            color: var(--text-secondary);
        }
        
        @media (max-width: 768px) {
            .comparison-grid {
                grid-template-columns: 1fr;
            }
            
            .width-demo {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Div vs Span Elements</h1>
        <p class="subtitle">Interactive demonstration of block-level vs inline elements</p>
        
        <div class="comparison-grid">
            <!-- DIV SECTION -->
            <div class="demo-card">
                <div class="element-header">
                    <h2 class="element-title div-title">&lt;div&gt;</h2>
                    <span class="element-badge div-badge">Block-level</span>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    A block-level element that starts on a new line and takes up the full width available.
                </p>
                
                <div class="demo-area">
                    <div class="div-example">
                        <h4>First Div</h4>
                        <p>I take up the full width!</p>
                    </div>
                    
                    <div class="div-example">
                        <h4>Second Div</h4>
                        <p>I always start on a new line.</p>
                        <div class="div-nested">
                            <p>I'm a nested div inside another div!</p>
                        </div>
                    </div>
                </div>
                
                <div class="controls">
                    <button class="div-btn" onclick="addDiv()">Add Div</button>
                    <button class="div-btn" onclick="toggleDivBorders()">Toggle Borders</button>
                    <button class="div-btn" onclick="resetDivs()">Reset</button>
                </div>
                
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon div-icon">✓</span>
                        <span>Starts on a new line</span>
                    </li>
                    <li>
                        <span class="feature-icon div-icon">✓</span>
                        <span>Takes full available width</span>
                    </li>
                    <li>
                        <span class="feature-icon div-icon">✓</span>
                        <span>Can contain other block/inline elements</span>
                    </li>
                    <li>
                        <span class="feature-icon div-icon">✓</span>
                        <span>Can have width, height, margin, padding</span>
                    </li>
                </ul>
                
                <div class="code-block">
&lt;div class="container"&gt;
  &lt;h2&gt;Block Element&lt;/h2&gt;
  &lt;p&gt;Full width content&lt;/p&gt;
&lt;/div&gt;
                </div>
            </div>
            
            <!-- SPAN SECTION -->
            <div class="demo-card">
                <div class="element-header">
                    <h2 class="element-title span-title">&lt;span&gt;</h2>
                    <span class="element-badge span-badge">Inline</span>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    An inline element that doesn't start on a new line and only takes up as much width as necessary.
                </p>
                
                <div class="demo-area">
                    <p>This paragraph has <span class="span-example">multiple span elements</span> that 
                    <span class="span-example">flow with the text</span> without breaking the line.</p>
                    
                    <p>Try <span class="span-example" onclick="highlightSpan(this)">clicking</span> on 
                    <span class="span-example" onclick="highlightSpan(this)">these spans</span> to 
                    <span class="span-example" onclick="highlightSpan(this)">see interactions</span>!</p>
                    
                    <p>Spans can be <span class="span-example">styled</span> 
                    <span class="span-example">individually</span> 
                    <span class="span-example">with CSS</span>.</p>
                </div>
                
                <div class="controls">
                    <button class="span-btn" onclick="highlightAllSpans()">Highlight All</button>
                    <button class="span-btn" onclick="changeSpanColor()">Change Color</button>
                    <button class="span-btn" onclick="resetSpans()">Reset</button>
                </div>
                
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon span-icon">✓</span>
                        <span>Doesn't start on a new line</span>
                    </li>
                    <li>
                        <span class="feature-icon span-icon">✓</span>
                        <span>Only takes needed width</span>
                    </li>
                    <li>
                        <span class="feature-icon span-icon">✓</span>
                        <span>Cannot contain block elements</span>
                    </li>
                    <li>
                        <span class="feature-icon span-icon">✓</span>
                        <span>Perfect for text styling</span>
                    </li>
                </ul>
                
                <div class="code-block">
&lt;p&gt;Text with &lt;span class="highlight"&gt;
  styled content&lt;/span&gt; inside.&lt;/p&gt;
                </div>
            </div>
        </div>
        
        <!-- WIDTH COMPARISON DEMO -->
        <div class="interactive-demo">
            <h3 class="demo-title">📏 Width Behavior Comparison</h3>
            <p style="color: var(--text-secondary);">
                Notice how div automatically takes full width while span only takes what it needs.
            </p>
            
            <div class="width-demo">
                <div class="width-item">
                    <h4 style="color: var(--border-div);">Div Width</h4>
                    <div class="visual-box">
                        <span class="visual-label">div</span>
                        <div style="background: var(--bg-div); border: 2px solid var(--border-div); padding: 10px;">
                            Short content
                        </div>
                    </div>
                    <div class="width-display">Width: 100% (full available)</div>
                </div>
                
                <div class="width-item">
                    <h4 style="color: var(--border-span);">Span Width</h4>
                    <div class="visual-box">
                        <span class="visual-label">span</span>
                        <span style="background: var(--bg-span); border: 2px solid var(--border-span); padding: 2px 6px;">
                            Short content
                        </span>
                    </div>
                    <div class="width-display">Width: Auto (content-based)</div>
                </div>
            </div>
        </div>
        
        <!-- NESTING DEMO -->
        <div class="interactive-demo" style="margin-top: 20px;">
            <h3 class="demo-title">📦 Nesting Rules</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div>
                    <h4 style="color: var(--border-div); margin-bottom: 10px;">✅ Valid Nesting</h4>
                    <div style="background: var(--bg-primary); padding: 15px; border-radius: 4px; font-family: monospace; font-size: 0.9em;">
                        &lt;div&gt;<br>
                        &nbsp;&nbsp;&lt;span&gt;Valid&lt;/span&gt;<br>
                        &nbsp;&nbsp;&lt;div&gt;Also Valid&lt;/div&gt;<br>
                        &nbsp;&nbsp;&lt;p&gt;Valid&lt;/p&gt;<br>
                        &lt;/div&gt;
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--border-span); margin-bottom: 10px;">❌ Invalid Nesting</h4>
                    <div style="background: var(--bg-primary); padding: 15px; border-radius: 4px; font-family: monospace; font-size: 0.9em;">
                        &lt;span&gt;<br>
                        &nbsp;&nbsp;&lt;div&gt;❌ Invalid&lt;/div&gt;<br>
                        &nbsp;&nbsp;&lt;p&gt;❌ Invalid&lt;/p&gt;<br>
                        &lt;/span&gt;<br>
                        <small style="color: var(--text-secondary);">Span can't contain block elements!</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        let divCount = 2;
        let spanColors = ['#fff3e0', '#f3e5f5', '#e8f5e9', '#fce4ec'];
        let currentColorIndex = 0;
        
        function addDiv() {
            const demoArea = document.querySelector('.demo-area');
            const newDiv = document.createElement('div');
            newDiv.className = 'div-example';
            newDiv.innerHTML = \`
                <h4>Dynamic Div #\${++divCount}</h4>
                <p>I was added with JavaScript!</p>
            \`;
            demoArea.appendChild(newDiv);
        }
        
        function toggleDivBorders() {
            const divs = document.querySelectorAll('.div-example');
            divs.forEach(div => {
                if (div.style.borderStyle === 'dashed') {
                    div.style.borderStyle = 'solid';
                } else {
                    div.style.borderStyle = 'dashed';
                }
            });
        }
        
        function resetDivs() {
            const demoArea = document.querySelector('.demo-area');
            demoArea.innerHTML = \`
                <div class="div-example">
                    <h4>First Div</h4>
                    <p>I take up the full width!</p>
                </div>
                
                <div class="div-example">
                    <h4>Second Div</h4>
                    <p>I always start on a new line.</p>
                    <div class="div-nested">
                        <p>I'm a nested div inside another div!</p>
                    </div>
                </div>
            \`;
            divCount = 2;
        }
        
        function highlightSpan(span) {
            span.style.background = '#ffeb3b';
            span.style.color = '#333';
            setTimeout(() => {
                span.style.background = '';
                span.style.color = '';
            }, 1000);
        }
        
        function highlightAllSpans() {
            const spans = document.querySelectorAll('.span-example');
            spans.forEach(span => {
                span.style.background = '#ffeb3b';
                span.style.color = '#333';
                setTimeout(() => {
                    span.style.background = '';
                    span.style.color = '';
                }, 2000);
            });
        }
        
        function changeSpanColor() {
            const spans = document.querySelectorAll('.span-example');
            currentColorIndex = (currentColorIndex + 1) % spanColors.length;
            spans.forEach(span => {
                span.style.background = spanColors[currentColorIndex];
            });
        }
        
        function resetSpans() {
            const spans = document.querySelectorAll('.span-example');
            spans.forEach(span => {
                span.style.background = '';
                span.style.color = '';
            });
            currentColorIndex = 0;
        }
    </script>
</body>
</html>`;
    } else if (type === 'semantic') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Elements</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f4f4f4;
            --bg-tertiary: #e9e9e9;
            --bg-article: #ffffff;
            --bg-section: #f9f9f9;
            --bg-aside: #ffeaa7;
            --bg-footer: #333333;
            --bg-non-semantic: #ffcccc;
            --text-primary: #2c3e50;
            --text-secondary: #333333;
            --text-footer: #ffffff;
            --border-color: #ddd;
            --highlight-bg: #ffeb3b;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-tertiary: #3a3a3a;
                --bg-article: #242424;
                --bg-section: #2d2d2d;
                --bg-aside: #4a3c28;
                --bg-footer: #1a1a1a;
                --bg-non-semantic: #4a1c1c;
                --text-primary: #ffffff;
                --text-secondary: #e0e0e0;
                --text-footer: #ffffff;
                --border-color: #444;
                --highlight-bg: #fbc02d;
            }
        }
        
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 0; 
            padding: 20px; 
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
        }
        
        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .semantic-example, .non-semantic-example {
            padding: 15px;
            border-radius: 8px;
        }
        
        .semantic-example {
            background: var(--bg-secondary);
            border: 2px solid #4caf50;
        }
        
        .non-semantic-example {
            background: var(--bg-non-semantic);
            border: 2px solid #f44336;
        }
        
        header { 
            background: var(--bg-secondary); 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 20px;
            transition: background-color 0.3s;
        }
        
        nav { 
            background: var(--bg-tertiary); 
            padding: 10px; 
            margin-bottom: 20px;
            border-radius: 8px;
            transition: background-color 0.3s;
        }
        
        nav ul { 
            list-style: none; 
            padding: 0; 
            margin: 0; 
            display: flex; 
            gap: 20px; 
            flex-wrap: wrap;
        }
        
        nav a { 
            text-decoration: none; 
            color: var(--text-secondary); 
            font-weight: bold;
            transition: color 0.3s;
        }
        
        main { 
            max-width: 800px; 
            margin: 0 auto; 
        }
        
        article { 
            background: var(--bg-article); 
            padding: 20px; 
            margin-bottom: 20px; 
            border: 1px solid var(--border-color); 
            border-radius: 8px;
            transition: background-color 0.3s, border-color 0.3s;
        }
        
        section { 
            background: var(--bg-section); 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            transition: background-color 0.3s;
        }
        
        aside { 
            background: var(--bg-aside); 
            padding: 15px; 
            border-radius: 8px; 
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        
        footer { 
            background: var(--bg-footer); 
            color: var(--text-footer); 
            padding: 20px; 
            text-align: center; 
            border-radius: 8px; 
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        
        h1, h2, h3 { 
            color: var(--text-primary);
            transition: color 0.3s;
        }
        
        p {
            color: var(--text-secondary);
            transition: color 0.3s;
        }
        
        .highlight { 
            background: var(--highlight-bg); 
            padding: 2px 4px;
            border-radius: 3px;
            transition: background-color 0.3s;
        }
        
        .code {
            font-family: monospace;
            background: rgba(0,0,0,0.1);
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.8em;
            font-weight: bold;
            margin-left: 10px;
        }
        
        .semantic-badge {
            background: #4caf50;
            color: white;
        }
        
        .non-semantic-badge {
            background: #f44336;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Semantic HTML Elements</h1>
    <p>Semantic elements <span class="highlight">clearly describe their meaning</span> to both the browser and developer.</p>
    
    <div class="comparison">
        <!-- SEMANTIC EXAMPLE -->
        <div class="semantic-example">
            <h2>Semantic HTML <span class="badge semantic-badge">GOOD</span></h2>
            <p>Uses elements that describe their content:</p>
            <div style="background: var(--bg-article); padding: 10px; border-radius: 5px; margin: 10px 0;">
                <span class="code">&lt;header&gt;</span> - Site header<br>
                <span class="code">&lt;nav&gt;</span> - Navigation<br>
                <span class="code">&lt;main&gt;</span> - Main content<br>
                <span class="code">&lt;article&gt;</span> - Self-contained content<br>
                <span class="code">&lt;section&gt;</span> - Thematic grouping<br>
                <span class="code">&lt;aside&gt;</span> - Related content<br>
                <span class="code">&lt;footer&gt;</span> - Site footer
            </div>
            <p style="font-size: 0.9em;">✓ Better accessibility<br>✓ Improved SEO<br>✓ Clearer code</p>
        </div>
        
        <!-- NON-SEMANTIC EXAMPLE -->
        <div class="non-semantic-example">
            <h2>Non-Semantic HTML <span class="badge non-semantic-badge">AVOID</span></h2>
            <p>Uses generic elements without meaning:</p>
            <div style="background: rgba(0,0,0,0.1); padding: 10px; border-radius: 5px; margin: 10px 0;">
                <span class="code">&lt;div id="header"&gt;</span><br>
                <span class="code">&lt;div class="nav"&gt;</span><br>
                <span class="code">&lt;div class="main"&gt;</span><br>
                <span class="code">&lt;div class="article"&gt;</span><br>
                <span class="code">&lt;div class="section"&gt;</span><br>
                <span class="code">&lt;div class="sidebar"&gt;</span><br>
                <span class="code">&lt;div id="footer"&gt;</span>
            </div>
            <p style="font-size: 0.9em;">✗ Poor accessibility<br>✗ Weak SEO<br>✗ Unclear structure</p>
        </div>
    </div>
    
    <!-- LIVE SEMANTIC EXAMPLE -->
    <header>
        <h2>&lt;header&gt; Example</h2>
        <p>This is a semantic header element - it clearly defines it's the header of the page.</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <p style="margin: 10px 0 0 0; font-size: 0.9em;">
            <span class="code">&lt;nav&gt;</span> clearly indicates this is navigation.
        </p>
    </nav>
    
    <main>
        <article>
            <h2>&lt;article&gt; Element</h2>
            <p>This semantic element represents self-contained content that could stand alone.</p>
            
            <section>
                <h3>&lt;section&gt; Element</h3>
                <p>Groups related content thematically. Better than a generic div!</p>
            </section>
            
            <section>
                <h3>Benefits of Semantic HTML</h3>
                <p>Semantic elements like <span class="highlight">&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;</span> provide:</p>
                <ul>
                    <li><strong>Accessibility</strong>: Screen readers understand structure</li>
                    <li><strong>SEO</strong>: Search engines get context</li>
                    <li><strong>Readability</strong>: Code is self-documenting</li>
                </ul>
            </section>
        </article>
        
        <aside>
            <h3>&lt;aside&gt; Element</h3>
            <p>Content tangentially related to the main content (like a sidebar).</p>
        </aside>
    </main>
    
    <footer>
        <p>&lt;footer&gt; - Clearly defines this as the page footer</p>
        <p style="font-size: 0.9em; margin-top: 10px;">
            Remember: Use semantic elements when available. Use &lt;div&gt; only when no semantic element fits!
        </p>
    </footer>
</body>
</html>`;
    } else if (type === 'input-types') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Input Types</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --bg-tertiary: #e8e8e8;
            --text-primary: #333333;
            --text-secondary: #666666;
            --border-color: #ddd;
            --accent-color: #4a90e2;
            --success-color: #4caf50;
            --warning-color: #ff9800;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-tertiary: #3a3a3a;
                --text-primary: #ffffff;
                --text-secondary: #b0b0b0;
                --border-color: #444;
                --accent-color: #5ca3f5;
                --success-color: #66bb6a;
                --warning-color: #ffa726;
            }
        }
        
        * {
            box-sizing: border-box;
        }
        
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
            padding: 20px; 
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
            line-height: 1.6;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: var(--text-primary);
            margin-bottom: 10px;
        }
        
        .subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 30px;
        }
        
        .input-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .input-card {
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .input-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .input-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: var(--text-primary);
            font-size: 0.9em;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 14px;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: border-color 0.2s;
        }
        
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }
        
        input[type="color"] {
            height: 40px;
            cursor: pointer;
        }
        
        input[type="range"] {
            padding: 0;
        }
        
        input[type="file"] {
            padding: 8px;
        }
        
        .range-value {
            text-align: center;
            font-weight: bold;
            color: var(--accent-color);
            margin-top: 5px;
        }
        
        .card-title {
            font-size: 1.1em;
            font-weight: bold;
            margin-bottom: 15px;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .badge {
            background: var(--accent-color);
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75em;
            font-weight: normal;
        }
        
        .badge.new {
            background: var(--success-color);
        }
        
        .info-box {
            background: var(--bg-tertiary);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
        }
        
        .info-box h3 {
            margin-top: 0;
            color: var(--text-primary);
        }
        
        .info-box ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .info-box li {
            margin-bottom: 5px;
            color: var(--text-secondary);
        }
        
        .output {
            background: var(--bg-tertiary);
            padding: 10px;
            border-radius: 6px;
            margin-top: 10px;
            font-family: monospace;
            font-size: 0.9em;
            color: var(--text-secondary);
            min-height: 20px;
        }
        
        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }
        
        button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            background: var(--accent-color);
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        button:hover {
            background: #3a7bc8;
        }
        
        button.secondary {
            background: var(--bg-tertiary);
            color: var(--text-primary);
        }
        
        button.secondary:hover {
            background: var(--border-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>HTML5 Input Types</h1>
        <p class="subtitle">Interactive demonstration of all HTML5 input types with their features</p>
        
        <div class="input-grid">
            <!-- Text-based Inputs -->
            <div class="input-card">
                <div class="card-title">Text-based Inputs</div>
                
                <div class="input-group">
                    <label for="text">Text Input</label>
                    <input type="text" id="text" placeholder="Enter any text">
                </div>
                
                <div class="input-group">
                    <label for="password">Password Input</label>
                    <input type="password" id="password" placeholder="Enter password">
                </div>
                
                <div class="input-group">
                    <label for="email">Email Input <span class="badge new">HTML5</span></label>
                    <input type="email" id="email" placeholder="user@example.com">
                </div>
                
                <div class="input-group">
                    <label for="url">URL Input <span class="badge new">HTML5</span></label>
                    <input type="url" id="url" placeholder="https://example.com">
                </div>
                
                <div class="input-group">
                    <label for="tel">Telephone Input <span class="badge new">HTML5</span></label>
                    <input type="tel" id="tel" placeholder="(555) 123-4567">
                </div>
                
                <div class="input-group">
                    <label for="search">Search Input <span class="badge new">HTML5</span></label>
                    <input type="search" id="search" placeholder="Search...">
                </div>
            </div>
            
            <!-- Numeric Inputs -->
            <div class="input-card">
                <div class="card-title">Numeric Inputs</div>
                
                <div class="input-group">
                    <label for="number">Number Input <span class="badge new">HTML5</span></label>
                    <input type="number" id="number" min="0" max="100" step="5" value="50">
                </div>
                
                <div class="input-group">
                    <label for="range">Range Slider <span class="badge new">HTML5</span></label>
                    <input type="range" id="range" min="0" max="100" value="50" oninput="updateRangeValue(this.value)">
                    <div class="range-value" id="rangeValue">50</div>
                </div>
            </div>
            
            <!-- Date/Time Inputs -->
            <div class="input-card">
                <div class="card-title">Date/Time Inputs <span class="badge new">HTML5</span></div>
                
                <div class="input-group">
                    <label for="date">Date</label>
                    <input type="date" id="date">
                </div>
                
                <div class="input-group">
                    <label for="time">Time</label>
                    <input type="time" id="time">
                </div>
                
                <div class="input-group">
                    <label for="datetime-local">Date-Time Local</label>
                    <input type="datetime-local" id="datetime-local">
                </div>
                
                <div class="input-group">
                    <label for="month">Month</label>
                    <input type="month" id="month">
                </div>
                
                <div class="input-group">
                    <label for="week">Week</label>
                    <input type="week" id="week">
                </div>
            </div>
            
            <!-- Selection Inputs -->
            <div class="input-card">
                <div class="card-title">Selection Inputs</div>
                
                <div class="input-group">
                    <label>Checkbox Group</label>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="checkbox" name="options" value="option1" style="width: auto; margin-right: 8px;">
                            Option 1
                        </label>
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="checkbox" name="options" value="option2" style="width: auto; margin-right: 8px;">
                            Option 2
                        </label>
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="checkbox" name="options" value="option3" style="width: auto; margin-right: 8px;">
                            Option 3
                        </label>
                    </div>
                </div>
                
                <div class="input-group">
                    <label>Radio Group</label>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="radio" name="choice" value="choice1" style="width: auto; margin-right: 8px;">
                            Choice 1
                        </label>
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="radio" name="choice" value="choice2" style="width: auto; margin-right: 8px;">
                            Choice 2
                        </label>
                        <label style="display: flex; align-items: center; font-weight: normal;">
                            <input type="radio" name="choice" value="choice3" style="width: auto; margin-right: 8px;">
                            Choice 3
                        </label>
                    </div>
                </div>
                
                <div class="input-group">
                    <label for="color">Color Picker <span class="badge new">HTML5</span></label>
                    <input type="color" id="color" value="#4a90e2">
                </div>
            </div>
            
            <!-- Special Inputs -->
            <div class="input-card">
                <div class="card-title">Special Inputs</div>
                
                <div class="input-group">
                    <label for="file">File Upload</label>
                    <input type="file" id="file" onchange="showFileInfo(this)">
                    <div class="output" id="fileInfo">No file selected</div>
                </div>
                
                <div class="input-group">
                    <label for="select">Select Dropdown</label>
                    <select id="select">
                        <option value="">Choose an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="textarea">Textarea</label>
                    <textarea id="textarea" rows="3" placeholder="Enter multiple lines of text"></textarea>
                </div>
                
                <div class="button-group">
                    <button type="button" onclick="submitForm()">Submit Form</button>
                    <button type="button" class="secondary" onclick="resetForm()">Reset</button>
                </div>
            </div>
            
            <!-- Form Validation -->
            <div class="input-card">
                <div class="card-title">Validation Examples <span class="badge new">HTML5</span></div>
                
                <form id="validationForm" onsubmit="handleValidation(event)">
                    <div class="input-group">
                        <label for="required">Required Field *</label>
                        <input type="text" id="required" required placeholder="This field is required">
                    </div>
                    
                    <div class="input-group">
                        <label for="pattern">Pattern (Phone: XXX-XXX-XXXX)</label>
                        <input type="tel" id="pattern" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                               placeholder="123-456-7890" title="Format: 123-456-7890">
                    </div>
                    
                    <div class="input-group">
                        <label for="minlength">Min Length (5 characters)</label>
                        <input type="text" id="minlength" minlength="5" placeholder="At least 5 characters">
                    </div>
                    
                    <div class="input-group">
                        <label for="minmax">Number between 1 and 10</label>
                        <input type="number" id="minmax" min="1" max="10" value="5">
                    </div>
                    
                    <button type="submit">Validate & Submit</button>
                    <div class="output" id="validationResult"></div>
                </form>
            </div>
        </div>
        
        <div class="info-box">
            <h3>Key Benefits of HTML5 Input Types:</h3>
            <ul>
                <li><strong>Built-in Validation:</strong> Browser handles validation without JavaScript</li>
                <li><strong>Mobile Optimization:</strong> Shows appropriate keyboard on mobile devices</li>
                <li><strong>Better UX:</strong> Native controls like date pickers and color pickers</li>
                <li><strong>Accessibility:</strong> Better screen reader support</li>
                <li><strong>No JavaScript Required:</strong> Basic functionality works without JS</li>
            </ul>
            
            <h3>Browser Support:</h3>
            <p style="color: var(--text-secondary); margin: 10px 0;">
                Most modern browsers support all HTML5 input types. Unsupported types fall back to type="text".
            </p>
        </div>
    </div>
    
    <script>
        function updateRangeValue(value) {
            document.getElementById('rangeValue').textContent = value;
        }
        
        function showFileInfo(input) {
            const file = input.files[0];
            const info = document.getElementById('fileInfo');
            
            if (file) {
                info.textContent = \`Selected: \${file.name} (\${formatFileSize(file.size)})\`;
            } else {
                info.textContent = 'No file selected';
            }
        }
        
        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        function submitForm() {
            const formData = new FormData(document.querySelector('form'));
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                if (!data[key]) data[key] = [];
                data[key].push(value);
            }
            
            // Add non-form inputs
            document.querySelectorAll('input, select, textarea').forEach(input => {
                if (input.type !== 'checkbox' && input.type !== 'radio' && input.type !== 'submit' && input.type !== 'file') {
                    data[input.id || input.name] = input.value;
                }
            });
            
            console.log('Form Data:', data);
            alert('Form submitted! Check console for data.');
        }
        
        function resetForm() {
            document.querySelectorAll('input, select, textarea').forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = false;
                } else if (input.type !== 'submit') {
                    input.value = '';
                }
            });
            document.getElementById('rangeValue').textContent = '50';
            document.getElementById('fileInfo').textContent = 'No file selected';
            document.getElementById('validationResult').textContent = '';
        }
        
        function handleValidation(event) {
            event.preventDefault();
            const form = event.target;
            const result = document.getElementById('validationResult');
            
            if (form.checkValidity()) {
                result.textContent = '✓ Form is valid!';
                result.style.color = 'var(--success-color)';
            } else {
                result.textContent = '✗ Please fix the validation errors';
                result.style.color = 'var(--warning-color)';
            }
        }
        
        // Set default values for date inputs
        document.addEventListener('DOMContentLoaded', function() {
            const now = new Date();
            const date = now.toISOString().split('T')[0];
            const time = now.toTimeString().slice(0, 5);
            const datetime = now.toISOString().slice(0, 16);
            
            document.getElementById('date').value = date;
            document.getElementById('time').value = time;
            document.getElementById('datetime-local').value = datetime;
        });
    </script>
</body>
</html>`;
    } else if (type === 'canvas-svg') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas vs SVG Comparison</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --bg-tertiary: #e8e8e8;
            --text-primary: #333333;
            --text-secondary: #666666;
            --border-color: #ddd;
            --canvas-color: #ff6b6b;
            --svg-color: #4ecdc4;
            --code-bg: rgba(0,0,0,0.1);
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-tertiary: #3a3a3a;
                --text-primary: #ffffff;
                --text-secondary: #b0b0b0;
                --border-color: #444;
                --canvas-color: #ff8787;
                --svg-color: #6eddd5;
                --code-bg: rgba(255,255,255,0.1);
            }
        }
        
        * {
            box-sizing: border-box;
        }
        
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
            padding: 20px; 
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: var(--text-primary);
            margin-bottom: 10px;
        }
        
        .subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 30px;
        }
        
        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .tech-card {
            background: var(--bg-secondary);
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .tech-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .tech-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .tech-title {
            font-size: 1.5em;
            font-weight: bold;
            margin: 0;
        }
        
        .canvas-title {
            color: var(--canvas-color);
        }
        
        .svg-title {
            color: var(--svg-color);
        }
        
        .tech-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: 600;
            color: white;
        }
        
        .canvas-badge {
            background: var(--canvas-color);
        }
        
        .svg-badge {
            background: var(--svg-color);
        }
        
        .demo-area {
            background: var(--bg-primary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
            position: relative;
        }
        
        canvas {
            border: 1px solid var(--border-color);
            background: white;
            cursor: crosshair;
        }
        
        svg {
            border: 1px solid var(--border-color);
            background: white;
        }
        
        .controls {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            color: white;
        }
        
        .canvas-btn {
            background: var(--canvas-color);
        }
        
        .canvas-btn:hover {
            background: #ff5252;
        }
        
        .svg-btn {
            background: var(--svg-color);
        }
        
        .svg-btn:hover {
            background: #3db8af;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .feature-list li:last-child {
            border-bottom: none;
        }
        
        .feature-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
            flex-shrink: 0;
        }
        
        .canvas-icon {
            background: var(--canvas-color);
        }
        
        .svg-icon {
            background: var(--svg-color);
        }
        
        .code-block {
            background: var(--code-bg);
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
            overflow-x: auto;
        }
        
        .interactive-demo {
            background: var(--bg-tertiary);
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        
        .demo-title {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 15px;
            color: var(--text-primary);
        }
        
        .scaling-demo {
            display: flex;
            gap: 20px;
            align-items: flex-start;
            margin-top: 20px;
        }
        
        .scale-item {
            flex: 1;
            text-align: center;
        }
        
        .scale-controls {
            margin-top: 10px;
        }
        
        input[type="range"] {
            width: 100%;
            margin: 10px 0;
        }
        
        .scale-value {
            font-weight: bold;
            color: var(--text-primary);
        }
        
        @media (max-width: 768px) {
            .comparison-grid {
                grid-template-columns: 1fr;
            }
            
            .scaling-demo {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Canvas vs SVG</h1>
        <p class="subtitle">Interactive comparison of HTML5 graphics technologies</p>
        
        <div class="comparison-grid">
            <!-- CANVAS SECTION -->
            <div class="tech-card">
                <div class="tech-header">
                    <h2 class="tech-title canvas-title">Canvas</h2>
                    <span class="tech-badge canvas-badge">Raster</span>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    Pixel-based drawing surface manipulated with JavaScript. Perfect for dynamic graphics and image manipulation.
                </p>
                
                <div class="demo-area">
                    <canvas id="myCanvas" width="350" height="250"></canvas>
                </div>
                
                <div class="controls">
                    <button class="canvas-btn" onclick="drawShapes()">Draw Shapes</button>
                    <button class="canvas-btn" onclick="animateCanvas()">Animate</button>
                    <button class="canvas-btn" onclick="clearCanvas()">Clear</button>
                    <button class="canvas-btn" onclick="drawImage()">Draw Image</button>
                </div>
                
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon canvas-icon">✓</span>
                        <span>Pixel-based (raster graphics)</span>
                    </li>
                    <li>
                        <span class="feature-icon canvas-icon">✓</span>
                        <span>JavaScript-driven drawing API</span>
                    </li>
                    <li>
                        <span class="feature-icon canvas-icon">✓</span>
                        <span>Immediate mode (no DOM)</span>
                    </li>
                    <li>
                        <span class="feature-icon canvas-icon">✓</span>
                        <span>Great for games & animations</span>
                    </li>
                    <li>
                        <span class="feature-icon canvas-icon">✓</span>
                        <span>Image manipulation</span>
                    </li>
                </ul>
                
                <div class="code-block">
// Canvas Drawing
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#ff6b6b';
ctx.fillRect(50, 50, 100, 100);
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.fill();
                </div>
            </div>
            
            <!-- SVG SECTION -->
            <div class="tech-card">
                <div class="tech-header">
                    <h2 class="tech-title svg-title">SVG</h2>
                    <span class="tech-badge svg-badge">Vector</span>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    XML-based vector graphics that scale perfectly. Ideal for icons, charts, and responsive illustrations.
                </p>
                
                <div class="demo-area">
                    <svg id="mySvg" width="350" height="250" xmlns="http://www.w3.org/2000/svg">
                        <rect id="svgRect" x="50" y="50" width="100" height="100" fill="#4ecdc4" rx="10"/>
                        <circle id="svgCircle" cx="200" cy="100" r="50" fill="#4ecdc4"/>
                        <path id="svgPath" d="M 50 200 Q 175 150 300 200" stroke="#4ecdc4" stroke-width="3" fill="none"/>
                    </svg>
                </div>
                
                <div class="controls">
                    <button class="svg-btn" onclick="morphSvg()">Morph Shapes</button>
                    <button class="svg-btn" onclick="animateSvg()">Animate</button>
                    <button class="svg-btn" onclick="resetSvg()">Reset</button>
                    <button class="svg-btn" onclick="addInteractive()">Interactive</button>
                </div>
                
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon svg-icon">✓</span>
                        <span>Vector-based (scalable)</span>
                    </li>
                    <li>
                        <span class="feature-icon svg-icon">✓</span>
                        <span>DOM elements (accessible)</span>
                    </li>
                    <li>
                        <span class="feature-icon svg-icon">✓</span>
                        <span>Retained mode (persistent)</span>
                    </li>
                    <li>
                        <span class="feature-icon svg-icon">✓</span>
                        <span>Perfect for icons & logos</span>
                    </li>
                    <li>
                        <span class="feature-icon svg-icon">✓</span>
                        <span>CSS styling & animations</span>
                    </li>
                </ul>
                
                <div class="code-block">
&lt;svg width="350" height="250"&gt;
  &lt;rect x="50" y="50" width="100" height="100" 
        fill="#4ecdc4" rx="10"/&gt;
  &lt;circle cx="200" cy="100" r="50" fill="#4ecdc4"/&gt;
&lt;/svg&gt;
                </div>
            </div>
        </div>
        
        <!-- SCALING DEMO -->
        <div class="interactive-demo">
            <h3 class="demo-title">🔍 Scaling Comparison</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">
                Notice how SVG stays sharp at any size while Canvas becomes pixelated when scaled up.
            </p>
            
            <div class="scaling-demo">
                <div class="scale-item">
                    <h4 style="color: var(--canvas-color);">Canvas</h4>
                    <div style="transform-origin: top left;">
                        <canvas id="scaleCanvas" width="100" height="100"></canvas>
                    </div>
                    <div class="scale-controls">
                        <label>Scale: <span class="scale-value" id="canvasScale">1x</span></label>
                        <input type="range" id="canvasRange" min="0.5" max="3" step="0.1" value="1" 
                               oninput="scaleCanvas(this.value)">
                    </div>
                </div>
                
                <div class="scale-item">
                    <h4 style="color: var(--svg-color);">SVG</h4>
                    <div style="transform-origin: top left;">
                        <svg id="scaleSvg" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" fill="#4ecdc4"/>
                            <text x="50" y="55" text-anchor="middle" fill="white" font-size="20" font-weight="bold">SVG</text>
                        </svg>
                    </div>
                    <div class="scale-controls">
                        <label>Scale: <span class="scale-value" id="svgScale">1x</span></label>
                        <input type="range" id="svgRange" min="0.5" max="3" step="0.1" value="1" 
                               oninput="scaleSvg(this.value)">
                    </div>
                </div>
            </div>
        </div>
        
        <!-- USE CASES -->
        <div class="interactive-demo" style="margin-top: 20px;">
            <h3 class="demo-title">📊 When to Use Which?</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div>
                    <h4 style="color: var(--canvas-color); margin-bottom: 10px;">✅ Use Canvas When:</h4>
                    <ul style="color: var(--text-secondary); padding-left: 20px;">
                        <li>Building games or complex animations</li>
                        <li>Image manipulation/editing</li>
                        <li>Pixel-level control needed</li>
                        <li>Many objects (1000+)</li>
                        <li>Real-time data visualization</li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: var(--svg-color); margin-bottom: 10px;">✅ Use SVG When:</h4>
                    <ul style="color: var(--text-secondary); padding-left: 20px;">
                        <li>Creating icons and logos</li>
                        <li>Responsive graphics needed</li>
                        <li>Accessibility is important</li>
                        <li>Few objects with interactions</li>
                        <li>Data charts and illustrations</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Canvas functions
        let canvasAnimation = null;
        
        function drawShapes() {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw rectangle
            ctx.fillStyle = '#ff6b6b';
            ctx.fillRect(50, 50, 100, 100);
            
            // Draw circle
            ctx.beginPath();
            ctx.arc(200, 100, 50, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw triangle
            ctx.beginPath();
            ctx.moveTo(300, 50);
            ctx.lineTo(350, 150);
            ctx.lineTo(250, 150);
            ctx.closePath();
            ctx.fill();
        }
        
        function animateCanvas() {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            let x = 0;
            
            if (canvasAnimation) {
                cancelAnimationFrame(canvasAnimation);
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Animated circle
                ctx.fillStyle = '#ff6b6b';
                ctx.beginPath();
                ctx.arc(x, 125, 30, 0, Math.PI * 2);
                ctx.fill();
                
                x += 2;
                if (x > canvas.width + 30) x = -30;
                
                canvasAnimation = requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        function clearCanvas() {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (canvasAnimation) {
                cancelAnimationFrame(canvasAnimation);
                canvasAnimation = null;
            }
        }
        
        function drawImage() {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#ff6b6b');
            gradient.addColorStop(0.5, '#feca57');
            gradient.addColorStop(1, '#ff6b6b');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add text
            ctx.fillStyle = 'white';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Canvas', canvas.width / 2, canvas.height / 2);
        }
        
        // SVG functions
        function morphSvg() {
            const rect = document.getElementById('svgRect');
            const circle = document.getElementById('svgCircle');
            
            rect.setAttribute('rx', '50');
            rect.setAttribute('ry', '25');
            circle.setAttribute('r', '30');
            
            setTimeout(() => {
                rect.setAttribute('rx', '10');
                circle.setAttribute('r', '50');
            }, 1000);
        }
        
        function animateSvg() {
            const circle = document.getElementById('svgCircle');
            circle.style.transition = 'all 1s ease-in-out';
            circle.setAttribute('cy', '50');
            
            setTimeout(() => {
                circle.setAttribute('cy', '100');
            }, 1000);
        }
        
        function resetSvg() {
            const rect = document.getElementById('svgRect');
            const circle = document.getElementById('svgCircle');
            
            rect.setAttribute('rx', '10');
            rect.setAttribute('ry', '10');
            circle.setAttribute('r', '50');
            circle.setAttribute('cy', '100');
            circle.style.transition = '';
        }
        
        function addInteractive() {
            const svg = document.getElementById('mySvg');
            const circle = document.getElementById('svgCircle');
            
            circle.style.cursor = 'pointer';
            circle.style.transition = 'all 0.3s';
            
            circle.onmouseover = function() {
                this.setAttribute('fill', '#3db8af');
                this.setAttribute('r', '60');
            };
            
            circle.onmouseout = function() {
                this.setAttribute('fill', '#4ecdc4');
                this.setAttribute('r', '50');
            };
        }
        
        // Scaling functions
        function scaleCanvas(value) {
            const canvas = document.getElementById('scaleCanvas');
            const ctx = canvas.getContext('2d');
            const scaleDisplay = document.getElementById('canvasScale');
            
            canvas.style.transform = \`scale(\${value})\`;
            scaleDisplay.textContent = \`\${value}x\`;
            
            // Redraw on scale
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff6b6b';
            ctx.fillRect(20, 20, 60, 60);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 16px Arial';
            ctx.fillText('Canvas', 50, 55);
        }
        
        function scaleSvg(value) {
            const svg = document.getElementById('scaleSvg');
            const scaleDisplay = document.getElementById('svgScale');
            
            svg.style.transform = \`scale(\${value})\`;
            scaleDisplay.textContent = \`\${value}x\`;
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            drawShapes();
            scaleCanvas(1);
            scaleSvg(1);
        });
    </script>
</body>
</html>`;
    } else if (type === 'media') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Audio and Video Elements</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --bg-tertiary: #e8e8e8;
            --text-primary: #333333;
            --text-secondary: #666666;
            --border-color: #ddd;
            --code-bg: rgba(0,0,0,0.1);
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-tertiary: #3a3a3a;
                --text-primary: #ffffff;
                --text-secondary: #b0b0b0;
                --border-color: #444;
                --code-bg: rgba(255,255,255,0.1);
            }
        }
        
        body { 
            font-family: Arial, sans-serif; 
            padding: 20px; 
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
        }
        
        .media-container { 
            max-width: 700px; 
            margin: 20px auto; 
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
        }
        
        .attributes-box {
            background: var(--bg-tertiary);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        video { 
            width: 100%; 
            border-radius: 8px; 
            background: #000;
        }
        
        audio { 
            width: 100%; 
            margin-top: 10px;
        }
        
        h1, h2, h3 {
            color: var(--text-primary);
            transition: color 0.3s;
        }
        
        p {
            color: var(--text-secondary);
            transition: color 0.3s;
        }
        
        .code {
            font-family: monospace;
            background: var(--code-bg);
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        .attribute-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin: 10px 0;
        }
        
        .attribute-item {
            background: var(--bg-primary);
            padding: 8px;
            border-radius: 5px;
            border: 1px solid var(--border-color);
        }
        
        .attribute-name {
            font-weight: bold;
            color: var(--text-primary);
        }
        
        .attribute-desc {
            font-size: 0.85em;
            color: var(--text-secondary);
            margin-top: 2px;
        }
    </style>
</head>
<body>
    <h1>HTML5 Audio and Video Elements</h1>
    <p>HTML5 introduced native <span class="code">&lt;audio&gt;</span> and <span class="code">&lt;video&gt;</span> elements for multimedia content without plugins.</p>
    
    <!-- VIDEO EXAMPLE -->
    <div class="media-container">
        <h2>Video Element Example</h2>
        <p>This video demonstrates common attributes:</p>
        
        <div class="attributes-box">
            <h3>Key Attributes Used:</h3>
            <div class="attribute-list">
                <div class="attribute-item">
                    <div class="attribute-name">controls</div>
                    <div class="attribute-desc">Shows browser controls</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">poster</div>
                    <div class="attribute-desc">Image before playback</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">width/height</div>
                    <div class="attribute-desc">Video dimensions</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">autoplay</div>
                    <div class="attribute-desc">Starts automatically</div>
                </div>
            </div>
        </div>
        
        <video controls poster="https://picsum.photos/seed/video-poster/700/400.jpg" width="700" height="400">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            <source src="https://www.w3schools.com/html/mov_bbb.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        
        <p style="margin-top: 15px; font-size: 0.9em;">
            <strong>Note:</strong> Multiple sources ensure compatibility across browsers.
        </p>
    </div>
    
    <!-- AUDIO EXAMPLE -->
    <div class="media-container">
        <h2>Audio Element Example</h2>
        <p>Audio element with various attributes:</p>
        
        <div class="attributes-box">
            <h3>Key Attributes Used:</h3>
            <div class="attribute-list">
                <div class="attribute-item">
                    <div class="attribute-name">controls</div>
                    <div class="attribute-desc">Show audio controls</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">autoplay</div>
                    <div class="attribute-desc">Auto-play (muted by default)</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">loop</div>
                    <div class="attribute-desc">Repeat playback</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">muted</div>
                    <div class="attribute-desc">Start muted</div>
                </div>
                <div class="attribute-item">
                    <div class="attribute-name">preload</div>
                    <div class="attribute-desc">Load metadata early</div>
                </div>
            </div>
        </div>
        
        <audio controls autoplay loop muted preload="auto">
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
            Your browser does not support the audio element.
        </audio>
        
        <p style="margin-top: 15px; font-size: 0.9em;">
            <strong>Tip:</strong> Audio with autoplay must be muted in most browsers.
        </p>
    </div>
    
    <!-- ADDITIONAL FEATURES -->
    <div class="media-container">
        <h2>Additional Features</h2>
        
        <h3>1. Text Tracks (Subtitles)</h3>
        <p>Video can include subtitles/captions:</p>
        <div class="code">
            &lt;track kind="subtitles" src="subtitles.vtt" srclang="en" label="English"&gt;
        </div>
        
        <h3>2. JavaScript API</h3>
        <p>Control media with JavaScript:</p>
        <div class="code">
            video.play(); video.pause(); video.currentTime = 10;
        </div>
        
        <h3>3. Events</h3>
        <p>Listen to media events:</p>
        <div class="code">
            video.addEventListener('play', handler);<br>
            video.addEventListener('pause', handler);<br>
            video.addEventListener('ended', handler);
        </div>
    </div>
</body>
</html>`;
        } else if (type === 'semantic-layout') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic Web Page Layout</title>
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-header: #343a40;
            --bg-nav: #495057;
            --bg-aside: #e9ecef;
            --bg-footer: #212529;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --text-light: #ffffff;
            --border-color: #dee2e6;
            --accent-color: #007bff;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-header: #0d1117;
                --bg-nav: #161b22;
                --bg-aside: #21262d;
                --bg-footer: #0d1117;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --text-light: #ffffff;
                --border-color: #30363d;
                --accent-color: #58a6ff;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
        }
        
        /* Header Styles */
        header {
            background-color: var(--bg-header);
            color: var(--text-light);
            padding: 1rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        /* Navigation Styles */
        nav {
            background-color: var(--bg-nav);
            padding: 0.5rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .nav-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .nav-list {
            list-style: none;
            display: flex;
            gap: 2rem;
        }
        
        .nav-list a {
            color: var(--text-light);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .nav-list a:hover {
            background-color: var(--accent-color);
        }
        
        /* Main Layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 2rem;
        }
        
        /* Main Content */
        main {
            min-height: 400px;
        }
        
        article {
            background-color: var(--bg-secondary);
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        article h1 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        article h2 {
            color: var(--text-primary);
            margin: 2rem 0 1rem;
        }
        
        article p {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        article .meta {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 2rem;
        }
        
        /* Sidebar */
        aside {
            background-color: var(--bg-aside);
            padding: 1.5rem;
            border-radius: 8px;
            height: fit-content;
            position: sticky;
            top: 80px;
        }
        
        aside h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .sidebar-list {
            list-style: none;
        }
        
        .sidebar-list li {
            margin-bottom: 0.5rem;
        }
        
        .sidebar-list a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .sidebar-list a:hover {
            color: var(--accent-color);
        }
        
        /* Footer */
        footer {
            background-color: var(--bg-footer);
            color: var(--text-light);
            padding: 2rem 0;
            margin-top: 3rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            text-align: center;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
        }
        
        .footer-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: var(--accent-color);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                grid-template-columns: 1fr;
                padding: 1rem;
            }
            
            .nav-list {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }
            
            aside {
                position: static;
            }
        }
        
        /* Highlight semantic elements */
        header, nav, main, aside, footer, article, section {
            position: relative;
        }
        
        header::before, nav::before, main::before, aside::before, footer::before, article::before, section::before {
            content: attr(tag);
            position: absolute;
            top: -25px;
            left: 0;
            font-size: 0.7rem;
            color: var(--accent-color);
            font-family: monospace;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <header tag="header">
        <div class="header-content">
            <div class="logo">MyWebsite</div>
            <div class="header-contact">contact@mywebsite.com</div>
        </div>
    </header>
    
    <nav tag="nav">
        <div class="nav-content">
            <ul class="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container">
        <main tag="main">
            <article tag="article">
                <h1>Welcome to Our Semantic HTML Layout</h1>
                <div class="meta">
                    <time datetime="2024-01-15">January 15, 2024</time> • 
                    <span>By John Doe</span> • 
                    <span>5 min read</span>
                </div>
                
                <p>This is an example of a well-structured, semantic HTML5 layout. Notice how we use proper semantic elements to give meaning to our content structure.</p>
                
                <section tag="section">
                    <h2>Why Semantic HTML Matters</h2>
                    <p>Semantic HTML provides meaning to the web page rather than just presentation. It improves accessibility, SEO, and code maintainability.</p>
                </section>
                
                <section tag="section">
                    <h2>Key Semantic Elements Used</h2>
                    <p>We've used various HTML5 semantic elements in this layout:</p>
                    <ul>
                        <li><strong>&lt;header&gt;</strong> - Contains introductory content</li>
                        <li><strong>&lt;nav&gt;</strong> - Contains navigation links</li>
                        <li><strong>&lt;main&gt;</strong> - Contains the main content</li>
                        <li><strong>&lt;article&gt;</strong> - Self-contained content</li>
                        <li><strong>&lt;section&gt;</strong> - Thematic grouping of content</li>
                        <li><strong>&lt;aside&gt;</strong> - Sidebar content</li>
                        <li><strong>&lt;footer&gt;</strong> - Footer information</li>
                    </ul>
                </section>
                
                <section tag="section">
                    <h2>Benefits for Accessibility</h2>
                    <p>Screen readers can navigate using landmarks, making the page more accessible to users with disabilities. Each semantic element creates a landmark that helps users understand the page structure.</p>
                </section>
            </article>
        </main>
        
        <aside tag="aside">
            <h3>Related Articles</h3>
            <ul class="sidebar-list">
                <li><a href="#">Understanding HTML5 Semantics</a></li>
                <li><a href="#">Web Accessibility Best Practices</a></li>
                <li><a href="#">SEO Optimization Tips</a></li>
                <li><a href="#">Modern CSS Layout Techniques</a></li>
            </ul>
            
            <h3 style="margin-top: 2rem;">Categories</h3>
            <ul class="sidebar-list">
                <li><a href="#">HTML5</a></li>
                <li><a href="#">CSS3</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">Web Design</a></li>
            </ul>
        </aside>
    </div>
    
    <footer tag="footer">
        <div class="footer-content">
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
                <a href="#">RSS Feed</a>
            </div>
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.7;">
                Built with semantic HTML5 for better accessibility and SEO
            </p>
        </div>
    </footer>
</body>
</html>`;
    } else if (type === 'accessible-form') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accessible Form - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-form: #ffffff;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --border-color: #dee2e6;
            --accent-color: #007bff;
            --error-color: #dc3545;
            --success-color: #28a745;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-form: #212529;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --border-color: #30363d;
                --accent-color: #58a6ff;
                --error-color: #f85149;
                --success-color: #3fb950;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: var(--bg-form);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }
        
        .required {
            color: var(--error-color);
        }
        
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        textarea,
        select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-size: 1rem;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: border-color 0.3s;
        }
        
        input:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
        }
        
        input:invalid:not(:placeholder-shown) {
            border-color: var(--error-color);
        }
        
        .error-message {
            color: var(--error-color);
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: none;
        }
        
        input:invalid:not(:placeholder-shown) ~ .error-message {
            display: block;
        }
        
        /* Form State Panel */
        .form-state-panel {
            background: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            border: 2px solid var(--border-color);
        }
        
        .form-state-panel h3 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .validation-summary {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .status-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .status-item.valid {
            background: #d4edda;
            color: #155724;
        }
        
        .status-item.invalid {
            background: #f8d7da;
            color: #721c24;
        }
        
        .status-item.untouched {
            background: #e2e3e5;
            color: #383d41;
        }
        
        /* Password Input */
        .password-input-wrapper {
            position: relative;
        }
        
        .password-toggle {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.25rem;
            color: var(--text-secondary);
        }
        
        .password-toggle:hover {
            color: var(--text-primary);
        }
        
        .password-strength {
            margin-top: 0.5rem;
        }
        
        .strength-bar {
            height: 4px;
            background: var(--border-color);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 0.25rem;
        }
        
        .strength-fill {
            height: 100%;
            width: 0;
            transition: width 0.3s ease, background-color 0.3s ease;
            background: var(--error-color);
        }
        
        .strength-fill.weak {
            width: 25%;
            background: var(--error-color);
        }
        
        .strength-fill.fair {
            width: 50%;
            background: #ffc107;
        }
        
        .strength-fill.good {
            width: 75%;
            background: #28a745;
        }
        
        .strength-fill.strong {
            width: 100%;
            background: #20c997;
        }
        
        .strength-text {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }
        
        /* Character Counter */
        .char-count {
            float: right;
            font-size: 0.875rem;
            color: var(--text-secondary);
            font-weight: normal;
        }
        
        /* Conditional Fields */
        .conditional-field {
            transition: all 0.3s ease;
            overflow: hidden;
        }
        
        .conditional-field[hidden] {
            display: none;
        }
        
        /* File Upload */
        .file-upload-wrapper {
            position: relative;
        }
        
        .file-upload-wrapper input[type="file"] {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        
        .file-drop-area {
            border: 2px dashed var(--border-color);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            background: var(--bg-secondary);
        }
        
        .file-drop-area:hover,
        .file-drop-area.drag-over {
            border-color: var(--accent-color);
            background: #f0f6fc;
        }
        
        .file-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .file-text {
            margin: 0.5rem 0;
            color: var(--text-primary);
        }
        
        .file-browse-btn {
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875rem;
        }
        
        .file-browse-btn:hover {
            background: #0056b3;
        }
        
        .file-help {
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
        }
        
        .file-preview {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem;
            background: var(--bg-secondary);
            border-radius: 4px;
            margin-top: 0.5rem;
        }
        
        .file-name {
            font-size: 0.875rem;
            color: var(--text-primary);
        }
        
        .file-remove {
            background: var(--error-color);
            color: white;
            border: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1rem;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .help-text {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-top: 0.25rem;
        }
        
        .checkbox-group,
        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .checkbox-item,
        .radio-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        input[type="checkbox"],
        input[type="radio"] {
            width: auto;
            margin: 0;
        }
        
        .checkbox-item label,
        .radio-item label {
            margin: 0;
            font-weight: normal;
            cursor: pointer;
        }
        
        button {
            background-color: var(--accent-color);
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(0,123,255,0.3);
        }
        
        .success-message {
            background-color: var(--success-color);
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            display: none;
        }
        
        .success-message.show {
            display: block;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
            input,
            textarea,
            select {
                border: 2px solid;
            }
            
            button {
                border: 2px solid;
            }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            * {
                transition: none;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Advanced Accessible Form</h1>
        <p>Demonstrates comprehensive form features with real-time validation, input masking, and accessibility best practices.</p>
        
        <!-- Form State Panel -->
        <div class="form-state-panel" role="status" aria-live="polite">
            <h3>Form Validation Status</h3>
            <div class="validation-summary">
                <div class="status-item valid">
                    <span class="status-icon">✓</span>
                    <span class="status-text">Valid fields: <span id="validCount">0</span></span>
                </div>
                <div class="status-item invalid">
                    <span class="status-icon">⚠</span>
                    <span class="status-text">Invalid fields: <span id="invalidCount">0</span></span>
                </div>
                <div class="status-item untouched">
                    <span class="status-icon">○</span>
                    <span class="status-text">Untouched fields: <span id="untouchedCount">0</span></span>
                </div>
            </div>
        </div>
        
        <form id="contactForm" novalidate>
            <fieldset>
                <legend>Personal Information</legend>
                
                <div class="form-group">
                    <label for="fullName">
                        Full Name <span class="required" aria-label="required">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        required 
                        aria-required="true"
                        placeholder="John Doe"
                        autocomplete="name"
                    />
                    <span class="error-message" role="alert">Please enter your full name</span>
                </div>
                
                <div class="form-group">
                    <label for="email">
                        Email Address <span class="required" aria-label="required">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        aria-required="true"
                        placeholder="john@example.com"
                        autocomplete="email"
                    />
                    <span class="error-message" role="alert">Please enter a valid email address</span>
                    <span class="help-text">We'll never share your email with anyone else.</span>
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="(123) 456-7890"
                        autocomplete="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        class="phone-input"
                        aria-describedby="phoneHelp phoneError"
                    />
                    <span class="help-text" id="phoneHelp">Format: (123) 456-7890</span>
                    <span class="error-message" id="phoneError" role="alert" aria-live="polite"></span>
                </div>
                
                <div class="form-group">
                    <label for="password">
                        Password <span class="required" aria-label="required">*</span>
                    </label>
                    <div class="password-input-wrapper">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            aria-required="true"
                            autocomplete="new-password"
                            minlength="8"
                            aria-describedby="passwordStrength passwordHelp"
                        />
                        <button type="button" class="password-toggle" aria-label="Show password">
                            <span class="toggle-icon">👁️</span>
                        </button>
                    </div>
                    <div class="password-strength" id="passwordStrength" aria-live="polite">
                        <div class="strength-bar">
                            <div class="strength-fill"></div>
                        </div>
                        <span class="strength-text">Enter a password</span>
                    </div>
                    <span class="help-text" id="passwordHelp">Use 8+ characters with mixed case, numbers, and symbols</span>
                </div>
                
                <div class="form-group">
                    <label for="bio">
                        Bio <span class="char-count"><span id="bioCount">0</span>/200</span>
                    </label>
                    <textarea 
                        id="bio" 
                        name="bio" 
                        rows="4" 
                        maxlength="200"
                        placeholder="Tell us about yourself..."
                        aria-describedby="bioHelp"
                    ></textarea>
                    <span class="help-text" id="bioHelp">Brief description for your profile</span>
                </div>
                
                <div class="form-group">
                    <label for="birthdate">
                        Date of Birth <span class="required" aria-label="required">*</span>
                    </label>
                    <input 
                        type="date" 
                        id="birthdate" 
                        name="birthdate" 
                        required 
                        aria-required="true"
                        min="1900-01-01"
                        max="2006-12-31"
                    />
                    <span class="error-message" role="alert">Please enter a valid date of birth</span>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Contact Preferences</legend>
                
                <div class="form-group">
                    <label for="contactMethod">Preferred Contact Method</label>
                    <select id="contactMethod" name="contactMethod" aria-describedby="contactMethodHelp">
                        <option value="">Select a method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="sms">SMS</option>
                        <option value="mail">Mail</option>
                    </select>
                    <span class="help-text" id="contactMethodHelp">Choose how you'd like us to reach you</span>
                </div>
                
                <!-- Conditional field based on contact method -->
                <div class="form-group conditional-field" id="emailTimeField" hidden>
                    <label for="emailTime">Best time to email</label>
                    <select id="emailTime" name="emailTime">
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                </div>
                
                <div class="form-group conditional-field" id="phoneTimeField" hidden>
                    <label for="phoneTime">Best time to call</label>
                    <select id="phoneTime" name="phoneTime">
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="country">Country</label>
                    <input 
                        type="text" 
                        id="country" 
                        name="country" 
                        list="countryList"
                        placeholder="Start typing your country..."
                        autocomplete="country"
                    />
                    <datalist id="countryList">
                        <option value="United States">
                        <option value="United Kingdom">
                        <option value="Canada">
                        <option value="Australia">
                        <option value="Germany">
                        <option value="France">
                        <option value="Japan">
                        <option value="China">
                        <option value="India">
                        <option value="Brazil">
                    </datalist>
                </div>
                
                <div class="form-group">
                    <label>Upload Resume (Optional)</label>
                    <div class="file-upload-wrapper" data-drop-zone>
                        <input 
                            type="file" 
                            id="resume" 
                            name="resume" 
                            accept=".pdf,.doc,.docx"
                            aria-describedby="fileHelp"
                        />
                        <div class="file-drop-area">
                            <div class="file-icon">📄</div>
                            <p class="file-text">Drag and drop your resume here or</p>
                            <button type="button" class="file-browse-btn">Browse Files</button>
                            <p class="file-help">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                        <div class="file-preview" hidden>
                            <span class="file-name"></span>
                            <button type="button" class="file-remove" aria-label="Remove file">×</button>
                        </div>
                    </div>
                    <span class="help-text" id="fileHelp"></span>
                </div>
                
                <div class="form-group">
                    <legend>How did you hear about us?</legend>
                    <div class="radio-group" role="group" aria-labelledby="hear-about-label">
                        <div class="radio-item">
                            <input type="radio" id="search" name="hearAbout" value="search">
                            <label for="search">Search Engine</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="social" name="hearAbout" value="social">
                            <label for="social">Social Media</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="friend" name="hearAbout" value="friend">
                            <label for="friend">Friend or Colleague</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="other" name="hearAbout" value="other">
                            <label for="other">Other</label>
                        </div>
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Additional Information</legend>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        placeholder="Type your message here..."
                        aria-describedby="message-help"
                    ></textarea>
                    <span id="message-help" class="help-text">Maximum 500 characters</span>
                </div>
                
                <div class="form-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="newsletter" name="newsletter">
                        <label for="newsletter">Subscribe to our newsletter</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="terms" name="terms" required aria-required="true">
                        <label for="terms">
                            I agree to the <a href="#">Terms and Conditions</a> <span class="required" aria-label="required">*</span>
                        </label>
                    </div>
                    <span class="error-message" role="alert">You must agree to the terms and conditions</span>
                </div>
            </fieldset>
            
            <button type="submit">Submit Form</button>
        </form>
        
        <div id="successMessage" class="success-message" role="alert" aria-live="polite">
            Thank you! Your form has been submitted successfully.
        </div>
    </div>
    
    <script>
        // Form validation and advanced features
        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        const validCount = document.getElementById('validCount');
        const invalidCount = document.getElementById('invalidCount');
        const untouchedCount = document.getElementById('untouchedCount');
        
        // Track form field states
        const fieldStates = new Map();
        
        // Initialize all fields
        function initializeFields() {
            const allFields = form.querySelectorAll('input, textarea, select');
            allFields.forEach(field => {
                fieldStates.set(field, 'untouched');
            });
            updateFormState();
        }
        
        // Update form state panel
        function updateFormState() {
            let valid = 0, invalid = 0, untouched = 0;
            
            fieldStates.forEach(state => {
                if (state === 'valid') valid++;
                else if (state === 'invalid') invalid++;
                else untouched++;
            });
            
            validCount.textContent = valid;
            invalidCount.textContent = invalid;
            untouchedCount.textContent = untouched;
        }
        
        // Phone number formatting
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3,6) + '-' + value.slice(6,10);
            } else if (value.length >= 3) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3);
            }
            e.target.value = value;
            
            // Update field state
            if (value.length === 14) {
                fieldStates.set(e.target, 'valid');
                document.getElementById('phoneError').textContent = '';
            } else if (value.length > 0) {
                fieldStates.set(e.target, 'invalid');
                document.getElementById('phoneError').textContent = 'Please enter a complete phone number';
            }
            updateFormState();
        });
        
        // Password strength checker
        const passwordInput = document.getElementById('password');
        const strengthFill = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        const passwordToggle = document.querySelector('.password-toggle');
        
        passwordInput.addEventListener('input', function(e) {
            const password = e.target.value;
            let strength = 0;
            
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/)) strength++;
            if (password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;
            
            strengthFill.className = 'strength-fill';
            
            if (password.length === 0) {
                strengthText.textContent = 'Enter a password';
                fieldStates.set(e.target, 'untouched');
            } else if (strength <= 2) {
                strengthFill.classList.add('weak');
                strengthText.textContent = 'Weak password';
                fieldStates.set(e.target, 'invalid');
            } else if (strength === 3) {
                strengthFill.classList.add('fair');
                strengthText.textContent = 'Fair password';
                fieldStates.set(e.target, 'invalid');
            } else if (strength === 4) {
                strengthFill.classList.add('good');
                strengthText.textContent = 'Good password';
                fieldStates.set(e.target, 'valid');
            } else {
                strengthFill.classList.add('strong');
                strengthText.textContent = 'Strong password';
                fieldStates.set(e.target, 'valid');
            }
            updateFormState();
        });
        
        // Password toggle
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            this.querySelector('.toggle-icon').textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
        
        // Character counter for bio
        const bioInput = document.getElementById('bio');
        const bioCount = document.getElementById('bioCount');
        
        bioInput.addEventListener('input', function(e) {
            const count = e.target.value.length;
            bioCount.textContent = count;
            
            if (count === 0) {
                fieldStates.set(e.target, 'untouched');
            } else {
                fieldStates.set(e.target, 'valid');
            }
            updateFormState();
        });
        
        // Conditional fields based on contact method
        const contactMethod = document.getElementById('contactMethod');
        const emailTimeField = document.getElementById('emailTimeField');
        const phoneTimeField = document.getElementById('phoneTimeField');
        
        contactMethod.addEventListener('change', function(e) {
            emailTimeField.hidden = true;
            phoneTimeField.hidden = true;
            
            if (e.target.value === 'email') {
                emailTimeField.hidden = false;
            } else if (e.target.value === 'phone' || e.target.value === 'sms') {
                phoneTimeField.hidden = false;
            }
            
            fieldStates.set(e.target, e.target.value ? 'valid' : 'invalid');
            updateFormState();
        });
        
        // File upload with drag and drop
        const fileInput = document.getElementById('resume');
        const fileDropArea = document.querySelector('.file-drop-area');
        const filePreview = document.querySelector('.file-preview');
        const fileName = document.querySelector('.file-name');
        const fileRemove = document.querySelector('.file-remove');
        const fileHelp = document.getElementById('fileHelp');
        
        fileDropArea.addEventListener('click', () => fileInput.click());
        
        fileDropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileDropArea.classList.add('drag-over');
        });
        
        fileDropArea.addEventListener('dragleave', () => {
            fileDropArea.classList.remove('drag-over');
        });
        
        fileDropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            fileDropArea.classList.remove('drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0]);
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });
        
        fileRemove.addEventListener('click', () => {
            fileInput.value = '';
            fileDropArea.style.display = 'block';
            filePreview.hidden = true;
            fileHelp.textContent = '';
            fieldStates.set(fileInput, 'untouched');
            updateFormState();
        });
        
        function handleFileUpload(file) {
            const maxSize = 5 * 1024 * 1024; // 5MB
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            
            if (file.size > maxSize) {
                fileHelp.textContent = 'File size exceeds 5MB limit';
                fileHelp.style.color = 'var(--error-color)';
                fieldStates.set(fileInput, 'invalid');
            } else if (!allowedTypes.includes(file.type)) {
                fileHelp.textContent = 'Invalid file type';
                fileHelp.style.color = 'var(--error-color)';
                fieldStates.set(fileInput, 'invalid');
            } else {
                fileName.textContent = file.name;
                fileDropArea.style.display = 'none';
                filePreview.hidden = false;
                fileHelp.textContent = 'File uploaded successfully';
                fileHelp.style.color = 'var(--success-color)';
                fieldStates.set(fileInput, 'valid');
            }
            updateFormState();
        }
        
        // Real-time validation for all fields
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (fieldStates.get(this) !== 'untouched') {
                    validateField(this);
                }
            });
        });
        
        function validateField(field) {
            if (field.hasAttribute('required') && !field.value.trim()) {
                fieldStates.set(field, 'invalid');
                field.setAttribute('aria-invalid', 'true');
            } else if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(field.value)) {
                    fieldStates.set(field, 'valid');
                    field.setAttribute('aria-invalid', 'false');
                } else {
                    fieldStates.set(field, 'invalid');
                    field.setAttribute('aria-invalid', 'true');
                }
            } else if (field.value && fieldStates.get(field) !== 'invalid') {
                fieldStates.set(field, 'valid');
                field.setAttribute('aria-invalid', 'false');
            }
            updateFormState();
        }
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                validateField(field);
                if (fieldStates.get(field) === 'invalid') {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show success message
                successMessage.classList.add('show');
                successMessage.focus();
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    successMessage.classList.remove('show');
                    initializeFields();
                    
                    // Reset file upload UI
                    fileDropArea.style.display = 'block';
                    filePreview.hidden = true;
                    fileHelp.textContent = '';
                    
                    // Reset password strength
                    strengthFill.className = 'strength-fill';
                    strengthText.textContent = 'Enter a password';
                    
                    // Reset character counter
                    bioCount.textContent = '0';
                }, 3000);
            } else {
                // Focus first invalid field
                const firstInvalid = form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
        
        // Initialize on load
        initializeFields();
        
        // Character counter for message field (legacy)
        const messageField = document.getElementById('message');
        const maxLength = 500;
        
        messageField.addEventListener('input', function() {
            if (this.value.length > maxLength) {
                this.value = this.value.substring(0, maxLength);
            }
        });
    </script>
</body>
</html>`;
    } else if (type === 'responsive-image') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Responsive Image - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --border-color: #dee2e6;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --border-color: #30363d;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .image-card {
            background-color: var(--bg-secondary);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .image-card img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .image-card figcaption {
            padding: 1rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        
        .art-direction {
            margin-bottom: 3rem;
        }
        
        .art-direction h2 {
            margin-bottom: 1rem;
        }
        
        .art-direction img {
            width: 100%;
            height: auto;
        }
        
        .info-box {
            background-color: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        .info-box h3 {
            margin-bottom: 0.5rem;
        }
        
        .info-box p {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        .loading {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        
        @media (max-width: 768px) {
            .image-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Responsive Image Component Examples</h1>
        
        <div class="info-box">
            <h3>📱 Responsive Images with srcset</h3>
            <p>These images use the srcset attribute to serve different sizes based on device width.</p>
        </div>
        
        <div class="image-grid">
            <figure class="image-card">
                <img 
                    src="https://picsum.photos/seed/responsive1/400/300.jpg"
                    srcset="https://picsum.photos/seed/responsive1/400/300.jpg 400w,
                            https://picsum.photos/seed/responsive1/800/600.jpg 800w,
                            https://picsum.photos/seed/responsive1/1200/900.jpg 1200w"
                    sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
                    alt="A beautiful landscape with mountains and lake"
                    loading="lazy"
                />
                <figcaption>Standard responsive image with srcset</figcaption>
            </figure>
            
            <figure class="image-card">
                <img 
                    src="https://picsum.photos/seed/responsive2/400/300.jpg"
                    srcset="https://picsum.photos/seed/responsive2/400/300.jpg 400w,
                            https://picsum.photos/seed/responsive2/800/600.jpg 800w,
                            https://picsum.photos/seed/responsive2/1200/900.jpg 1200w"
                    sizes="(max-width: 400px) 100vw, 50vw"
                    alt="City skyline at sunset"
                    loading="lazy"
                />
                <figcaption>Using relative units (vw) in sizes attribute</figcaption>
            </figure>
        </div>
        
        <div class="info-box">
            <h3>🎨 Art Direction with picture element</h3>
            <p>The picture element allows different images for different viewport sizes.</p>
        </div>
        
        <div class="art-direction">
            <h2>Art Direction Example</h2>
            <picture>
                <source media="(max-width: 600px)" srcset="https://picsum.photos/seed/mobile/600/400.jpg">
                <source media="(max-width: 1200px)" srcset="https://picsum.photos/seed/tablet/1200/600.jpg">
                <img src="https://picsum.photos/seed/desktop/1600/800.jpg" alt="Responsive image with art direction">
            </picture>
        </div>
        
        <div class="info-box">
            <h3>🖼️ Format Selection</h3>
            <p>Serving modern formats (WebP) with fallbacks for older browsers.</p>
        </div>
        
        <div class="image-grid">
            <figure class="image-card">
                <picture>
                    <source type="image/webp" srcset="https://picsum.photos/seed/webp1/400/300.jpg">
                    <img src="https://picsum.photos/seed/webp1/400/300.jpg" alt="WebP format example">
                </picture>
                <figcaption>WebP format with JPEG fallback</figcaption>
            </figure>
            
            <figure class="image-card">
                <picture>
                    <source type="image/avif" srcset="https://picsum.photos/seed/avif1/400/300.jpg">
                    <source type="image/webp" srcset="https://picsum.photos/seed/webp2/400/300.jpg">
                    <img src="https://picsum.photos/seed/fallback/400/300.jpg" alt="AVIF format example">
                </picture>
                <figcaption>AVIF → WebP → JPEG fallback chain</figcaption>
            </figure>
        </div>
        
        <div class="info-box">
            <h3>⚡ Performance Features</h3>
            <p>Demonstrating lazy loading and priority hints.</p>
        </div>
        
        <div class="image-grid">
            <figure class="image-card">
                <img 
                    src="https://picsum.photos/seed/lazy1/400/300.jpg"
                    alt="Lazy loaded image"
                    loading="lazy"
                />
                <figcaption>Lazy loaded image (loads when scrolled into view)</figcaption>
            </figure>
            
            <figure class="image-card">
                <img 
                    src="https://picsum.photos/seed/priority1/400/300.jpg"
                    alt="High priority image"
                    loading="eager"
                    fetchpriority="high"
                />
                <figcaption>High priority image (loads immediately)</figcaption>
            </figure>
        </div>
    </div>
    
    <script>
        // Demonstrate lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '0';
                        img.addEventListener('load', () => {
                            img.style.transition = 'opacity 0.3s';
                            img.style.opacity = '1';
                        });
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
        
        // Log image loading information
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', () => {
                console.log(\`Image loaded: \${img.src}\`);
                console.log(\`Natural size: \${img.naturalWidth}x\${img.naturalHeight}\`);
                console.log(\`Display size: \${img.width}x\${img.height}\`);
            });
            
            img.addEventListener('error', () => {
                console.error(\`Failed to load: \${img.src}\`);
            });
        });
    </script>
</body>
</html>`;
    } else if (type === 'multistep-form') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Multi-Step Form - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-step: #e9ecef;
            --bg-step-active: #007bff;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --text-light: #ffffff;
            --border-color: #dee2e6;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-step: #30363d;
                --bg-step-active: #58a6ff;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --text-light: #ffffff;
                --border-color: #444;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        /* Progress Bar */
        .progress-container {
            margin-bottom: 3rem;
        }
        
        .progress-bar {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-bottom: 1rem;
        }
        
        .progress-bar::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--border-color);
            z-index: 0;
        }
        
        .progress-line {
            position: absolute;
            top: 20px;
            left: 0;
            height: 2px;
            background-color: var(--bg-step-active);
            z-index: 1;
            transition: width 0.3s ease;
        }
        
        .step {
            position: relative;
            z-index: 2;
            text-align: center;
            flex: 1;
        }
        
        .step-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--bg-step);
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 0.5rem;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .step.active .step-circle {
            background-color: var(--bg-step-active);
            border-color: var(--bg-step-active);
            color: var(--text-light);
        }
        
        .step.completed .step-circle {
            background-color: var(--bg-step-active);
            border-color: var(--bg-step-active);
            color: var(--text-light);
        }
        
        .step-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        .step.active .step-label {
            color: var(--text-primary);
            font-weight: 500;
        }
        
        /* Form Sections */
        .form-sections {
            background-color: var(--bg-secondary);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .form-section {
            display: none;
        }
        
        .form-section.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .section-title {
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-size: 1rem;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }
        
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--bg-step-active);
            box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
        }
        
        .radio-group, .checkbox-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .radio-item, .checkbox-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        input[type="radio"], input[type="checkbox"] {
            width: auto;
        }
        
        /* Navigation Buttons */
        .form-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-color);
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background-color: var(--bg-step-active);
            color: var(--text-light);
        }
        
        .btn-primary:hover {
            background-color: #0056b3;
        }
        
        .btn-secondary {
            background-color: var(--bg-step);
            color: var(--text-primary);
        }
        
        .btn-secondary:hover {
            background-color: #d6d6d6;
        }
        
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        /* Summary Section */
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .summary-card {
            background-color: var(--bg-primary);
            padding: 1.5rem;
            border-radius: 6px;
            border: 1px solid var(--border-color);
        }
        
        .summary-card h4 {
            margin-bottom: 1rem;
            color: var(--bg-step-active);
        }
        
        .summary-item {
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
        }
        
        .summary-label {
            font-weight: 500;
        }
        
        .summary-value {
            color: var(--text-secondary);
        }
        
        @media (max-width: 600px) {
            .step-label {
                font-size: 0.75rem;
            }
            
            .form-navigation {
                flex-direction: column;
                gap: 1rem;
            }
            
            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Multi-Step Registration Form</h1>
        
        <!-- Progress Indicator -->
        <div class="progress-container" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4">
            <div class="progress-bar">
                <div class="progress-line" style="width: 0%"></div>
                
                <div class="step active" data-step="1">
                    <div class="step-circle" aria-label="Step 1">1</div>
                    <div class="step-label">Personal Info</div>
                </div>
                
                <div class="step" data-step="2">
                    <div class="step-circle" aria-label="Step 2">2</div>
                    <div class="step-label">Account Details</div>
                </div>
                
                <div class="step" data-step="3">
                    <div class="step-circle" aria-label="Step 3">3</div>
                    <div class="step-label">Preferences</div>
                </div>
                
                <div class="step" data-step="4">
                    <div class="step-circle" aria-label="Step 4">4</div>
                    <div class="step-label">Review</div>
                </div>
            </div>
        </div>
        
        <!-- Form Sections -->
        <div class="form-sections">
            <form id="multiStepForm">
                <!-- Step 1: Personal Information -->
                <section class="form-section active" id="step1">
                    <h2 class="section-title">Personal Information</h2>
                    
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    
                    <div class="form-group">
                        <label for="birthdate">Date of Birth</label>
                        <input type="date" id="birthdate" name="birthdate">
                    </div>
                </section>
                
                <!-- Step 2: Account Details -->
                <section class="form-section" id="step2">
                    <h2 class="section-title">Account Details</h2>
                    
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="securityQuestion">Security Question</label>
                        <select id="securityQuestion" name="securityQuestion">
                            <option value="">Select a question</option>
                            <option value="pet">What was your first pet's name?</option>
                            <option value="school">What elementary school did you attend?</option>
                            <option value="city">In what city were you born?</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="securityAnswer">Security Answer</label>
                        <input type="text" id="securityAnswer" name="securityAnswer">
                    </div>
                </section>
                
                <!-- Step 3: Preferences -->
                <section class="form-section" id="step3">
                    <h2 class="section-title">Preferences</h2>
                    
                    <div class="form-group">
                        <label>Account Type</label>
                        <div class="radio-group">
                            <div class="radio-item">
                                <input type="radio" id="personal" name="accountType" value="personal">
                                <label for="personal">Personal Account</label>
                            </div>
                            <div class="radio-item">
                                <input type="radio" id="business" name="accountType" value="business">
                                <label for="business">Business Account</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Notification Preferences</label>
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="checkbox" id="emailNotif" name="notifications" value="email">
                                <label for="emailNotif">Email Notifications</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="smsNotif" name="notifications" value="sms">
                                <label for="smsNotif">SMS Notifications</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="pushNotif" name="notifications" value="push">
                                <label for="pushNotif">Push Notifications</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="language">Preferred Language</label>
                        <select id="language" name="language">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="timezone">Timezone</label>
                        <select id="timezone" name="timezone">
                            <option value="EST">Eastern Time (EST)</option>
                            <option value="CST">Central Time (CST)</option>
                            <option value="MST">Mountain Time (MST)</option>
                            <option value="PST">Pacific Time (PST)</option>
                        </select>
                    </div>
                </section>
                
                <!-- Step 4: Review -->
                <section class="form-section" id="step4">
                    <h2 class="section-title">Review Your Information</h2>
                    
                    <div class="summary-grid">
                        <div class="summary-card">
                            <h4>Personal Information</h4>
                            <div class="summary-item">
                                <span class="summary-label">Name:</span>
                                <span class="summary-value" id="reviewName">-</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-label">Email:</span>
                                <span class="summary-value" id="reviewEmail">-</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-label">Phone:</span>
                                <span class="summary-value" id="reviewPhone">-</span>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <h4>Account Details</h4>
                            <div class="summary-item">
                                <span class="summary-label">Username:</span>
                                <span class="summary-value" id="reviewUsername">-</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-label">Security Question:</span>
                                <span class="summary-value" id="reviewSecurity">-</span>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <h4>Preferences</h4>
                            <div class="summary-item">
                                <span class="summary-label">Account Type:</span>
                                <span class="summary-value" id="reviewAccountType">-</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-label">Language:</span>
                                <span class="summary-value" id="reviewLanguage">-</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-label">Timezone:</span>
                                <span class="summary-value" id="reviewTimezone">-</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="checkbox-item">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                </section>
                
                <!-- Navigation Buttons -->
                <div class="form-navigation">
                    <button type="button" class="btn btn-secondary" id="prevBtn" disabled>Previous</button>
                    <button type="button" class="btn btn-primary" id="nextBtn">Next</button>
                </div>
            </form>
        </div>
    </div>
    
    <script>
        let currentStep = 1;
        const totalSteps = 4;
        
        const form = document.getElementById('multiStepForm');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const progressLine = document.querySelector('.progress-line');
        const progressBar = document.querySelector('.progress-container');
        
        // Show/hide sections
        function showStep(step) {
            // Hide all sections
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show current section
            document.getElementById(\`step\${step}\`).classList.add('active');
            
            // Update progress bar
            updateProgress(step);
            
            // Update buttons
            prevBtn.disabled = step === 1;
            nextBtn.textContent = step === totalSteps ? 'Submit' : 'Next';
            
            // If on review step, populate summary
            if (step === totalSteps) {
                populateSummary();
            }
        }
        
        // Update progress bar
        function updateProgress(step) {
            // Update step circles
            document.querySelectorAll('.step').forEach((stepEl, index) => {
                if (index < step - 1) {
                    stepEl.classList.add('completed');
                    stepEl.classList.remove('active');
                } else if (index === step - 1) {
                    stepEl.classList.add('active');
                    stepEl.classList.remove('completed');
                } else {
                    stepEl.classList.remove('active', 'completed');
                }
            });
            
            // Update progress line
            const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;
            progressLine.style.width = \`\${progressPercentage}%\`;
            
            // Update ARIA attributes
            progressBar.setAttribute('aria-valuenow', step);
        }
        
        // Validate current step
        function validateStep(step) {
            const currentSection = document.getElementById(\`step\${step}\`);
            const requiredFields = currentSection.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.focus();
                    alert('Please fill in all required fields');
                }
            });
            
            // Special validation for password match
            if (step === 2) {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    isValid = false;
                    alert('Passwords do not match');
                    document.getElementById('confirmPassword').focus();
                }
            }
            
            return isValid;
        }
        
        // Populate summary
        function populateSummary() {
            // Personal info
            document.getElementById('reviewName').textContent = 
                \`\${document.getElementById('firstName').value} \${document.getElementById('lastName').value}\`;
            document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
            document.getElementById('reviewPhone').textContent = document.getElementById('phone').value || 'Not provided';
            
            // Account details
            document.getElementById('reviewUsername').textContent = document.getElementById('username').value;
            const securityQuestion = document.getElementById('securityQuestion');
            document.getElementById('reviewSecurity').textContent = 
                securityQuestion.options[securityQuestion.selectedIndex].text || 'Not selected';
            
            // Preferences
            const accountType = document.querySelector('input[name="accountType"]:checked');
            document.getElementById('reviewAccountType').textContent = 
                accountType ? accountType.value.charAt(0).toUpperCase() + accountType.value.slice(1) : 'Not selected';
            
            const language = document.getElementById('language');
            document.getElementById('reviewLanguage').textContent = 
                language.options[language.selectedIndex].text;
            
            const timezone = document.getElementById('timezone');
            document.getElementById('reviewTimezone').textContent = 
                timezone.options[timezone.selectedIndex].text;
        }
        
        // Button event listeners
        nextBtn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    showStep(currentStep);
                } else {
                    // Submit form
                    alert('Form submitted successfully!');
                    form.reset();
                    currentStep = 1;
                    showStep(currentStep);
                }
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        });
        
        // Initialize
        showStep(currentStep);
    </script>
</body>
</html>`;
    } else if (type === 'semantic-table') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic Table - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-header: #e9ecef;
            --bg-hover: #f0f6fc;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --border-color: #dee2e6;
            --accent-color: #007bff;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-header: #30363d;
                --bg-hover: #1f2428;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --border-color: #444;
                --accent-color: #58a6ff;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .table-container {
            background-color: var(--bg-secondary);
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            overflow-x: auto;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }
        
        caption {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-align: left;
            color: var(--text-primary);
        }
        
        thead {
            background-color: var(--bg-header);
        }
        
        th {
            padding: 0.75rem 1rem;
            text-align: left;
            font-weight: 600;
            color: var(--text-primary);
            border-bottom: 2px solid var(--border-color);
            white-space: nowrap;
        }
        
        td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        tbody tr:hover {
            background-color: var(--bg-hover);
        }
        
        tbody tr:last-child td {
            border-bottom: none;
        }
        
        .numeric {
            text-align: right;
        }
        
        .status {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .status.active {
            background-color: #28a745;
            color: white;
        }
        
        .status.inactive {
            background-color: #6c757d;
            color: white;
        }
        
        .status.pending {
            background-color: #ffc107;
            color: #212529;
        }
        
        .sortable {
            cursor: pointer;
            user-select: none;
            position: relative;
            padding-right: 1.5rem;
        }
        
        .sortable:hover {
            color: var(--accent-color);
        }
        
        .sortable::after {
            content: '↕';
            position: absolute;
            right: 0.5rem;
            opacity: 0.5;
        }
        
        .sortable.asc::after {
            content: '↑';
            opacity: 1;
        }
        
        .sortable.desc::after {
            content: '↓';
            opacity: 1;
        }
        
        /* Responsive table */
        @media (max-width: 768px) {
            .table-container {
                padding: 0.5rem;
            }
            
            th, td {
                padding: 0.5rem;
                font-size: 0.875rem;
            }
            
            .hide-mobile {
                display: none;
            }
        }
        
        /* Print styles */
        @media print {
            body {
                padding: 0;
            }
            
            .table-container {
                box-shadow: none;
                border: 1px solid #000;
            }
            
            th, td {
                border: 1px solid #000;
            }
            
            .status {
                background: none !important;
                color: #000 !important;
                border: 1px solid #000;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Semantic Table Examples</h1>
        
        <!-- Basic Semantic Table -->
        <div class="table-container">
            <table>
                <caption>Employee Information</caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Email</th>
                        <th scope="col" class="numeric">Salary</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">001</th>
                        <td>John Smith</td>
                        <td>Engineering</td>
                        <td>john.smith@company.com</td>
                        <td class="numeric">$85,000</td>
                        <td><span class="status active">Active</span></td>
                    </tr>
                    <tr>
                        <th scope="row">002</th>
                        <td>Sarah Johnson</td>
                        <td>Marketing</td>
                        <td>sarah.j@company.com</td>
                        <td class="numeric">$72,000</td>
                        <td><span class="status active">Active</span></td>
                    </tr>
                    <tr>
                        <th scope="row">003</th>
                        <td>Mike Davis</td>
                        <td>Sales</td>
                        <td>mike.davis@company.com</td>
                        <td class="numeric">$68,000</td>
                        <td><span class="status inactive">Inactive</span></td>
                    </tr>
                    <tr>
                        <th scope="row">004</th>
                        <td>Emily Chen</td>
                        <td>Engineering</td>
                        <td>emily.chen@company.com</td>
                        <td class="numeric">$92,000</td>
                        <td><span class="status active">Active</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Complex Table with Row/Column Groups -->
        <div class="table-container">
            <table>
                <caption>Quarterly Sales Report 2024</caption>
                <colgroup>
                    <col span="1" style="width: 20%;">
                    <col span="4" style="width: 20%;">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">Region</th>
                        <th scope="colgroup" colspan="4">Quarterly Revenue ($)</th>
                    </tr>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Q1</th>
                        <th scope="col">Q2</th>
                        <th scope="col">Q3</th>
                        <th scope="col">Q4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="rowgroup" rowspan="2">North America</th>
                        <td>250,000</td>
                        <td>275,000</td>
                        <td>290,000</td>
                        <td>310,000</td>
                    </tr>
                    <tr>
                        <td>180,000</td>
                        <td>195,000</td>
                        <td>210,000</td>
                        <td>225,000</td>
                    </tr>
                    <tr>
                        <th scope="rowgroup" rowspan="2">Europe</th>
                        <td>320,000</td>
                        <td>335,000</td>
                        <td>350,000</td>
                        <td>375,000</td>
                    </tr>
                    <tr>
                        <td>280,000</td>
                        <td>295,000</td>
                        <td>310,000</td>
                        <td>330,000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Total</th>
                        <td>1,030,000</td>
                        <td>1,100,000</td>
                        <td>1,160,000</td>
                        <td>1,240,000</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        
        <!-- Interactive Sortable Table -->
        <div class="table-container">
            <table id="sortableTable">
                <caption>Product Inventory (Click headers to sort)</caption>
                <thead>
                    <tr>
                        <th scope="col" class="sortable" data-column="id">Product ID</th>
                        <th scope="col" class="sortable" data-column="name">Product Name</th>
                        <th scope="col" class="sortable" data-column="category">Category</th>
                        <th scope="col" class="sortable numeric" data-column="price">Price</th>
                        <th scope="col" class="sortable numeric" data-column="stock">Stock</th>
                        <th scope="col" class="hide-mobile">Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PRD001</td>
                        <td>Laptop Pro 15"</td>
                        <td>Electronics</td>
                        <td class="numeric">$1,299</td>
                        <td class="numeric">45</td>
                        <td class="hide-mobile">2024-01-15</td>
                    </tr>
                    <tr>
                        <td>PRD002</td>
                        <td>Wireless Mouse</td>
                        <td>Electronics</td>
                        <td class="numeric">$29.99</td>
                        <td class="numeric">120</td>
                        <td class="hide-mobile">2024-01-14</td>
                    </tr>
                    <tr>
                        <td>PRD003</td>
                        <td>Ergonomic Chair</td>
                        <td>Furniture</td>
                        <td class="numeric">$399</td>
                        <td class="numeric">18</td>
                        <td class="hide-mobile">2024-01-13</td>
                    </tr>
                    <tr>
                        <td>PRD004</td>
                        <td>USB-C Hub</td>
                        <td>Electronics</td>
                        <td class="numeric">$49.99</td>
                        <td class="numeric">85</td>
                        <td class="hide-mobile">2024-01-12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <script>
        // Table sorting functionality
        class TableSort {
            constructor(tableId) {
                this.table = document.getElementById(tableId);
                this.tbody = this.table.querySelector('tbody');
                this.headers = this.table.querySelectorAll('th.sortable');
                this.rows = Array.from(this.tbody.querySelectorAll('tr'));
                this.currentSort = { column: null, direction: 'asc' };
                
                this.init();
            }
            
            init() {
                this.headers.forEach(header => {
                    header.addEventListener('click', () => {
                        const column = header.dataset.column;
                        this.sort(column);
                    });
                });
            }
            
            sort(column) {
                // Update sort direction
                if (this.currentSort.column === column) {
                    this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    this.currentSort.column = column;
                    this.currentSort.direction = 'asc';
                }
                
                // Update header classes
                this.headers.forEach(header => {
                    header.classList.remove('asc', 'desc');
                    if (header.dataset.column === column) {
                        header.classList.add(this.currentSort.direction);
                    }
                });
                
                // Sort rows
                const sortedRows = this.rows.sort((a, b) => {
                    const aValue = this.getCellValue(a, column);
                    const bValue = this.getCellValue(b, column);
                    
                    // Handle numeric values
                    if (column === 'price' || column === 'stock') {
                        const aNum = parseFloat(aValue.replace(/[^0-9.-]+/g, ''));
                        const bNum = parseFloat(bValue.replace(/[^0-9.-]+/g, ''));
                        return this.currentSort.direction === 'asc' ? aNum - bNum : bNum - aNum;
                    }
                    
                    // Handle string values
                    return this.currentSort.direction === 'asc' 
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                });
                
                // Re-append sorted rows
                sortedRows.forEach(row => this.tbody.appendChild(row));
            }
            
            getCellValue(row, column) {
                const columnIndex = Array.from(this.headers).findIndex(
                    header => header.dataset.column === column
                );
                return row.cells[columnIndex].textContent.trim();
            }
        }
        
        // Initialize sortable table
        const sortableTable = new TableSort('sortableTable');
        
        // Add keyboard navigation for tables
        document.querySelectorAll('table').forEach(table => {
            table.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
                    const cell = e.target;
                    const row = cell.parentElement;
                    const cells = Array.from(row.cells);
                    const index = cells.indexOf(cell);
                    
                    switch(e.key) {
                        case 'ArrowLeft':
                            if (index > 0) cells[index - 1].focus();
                            e.preventDefault();
                            break;
                        case 'ArrowRight':
                            if (index < cells.length - 1) cells[index + 1].focus();
                            e.preventDefault();
                            break;
                        case 'ArrowUp':
                            const prevRow = row.previousElementSibling;
                            if (prevRow && prevRow.cells[index]) prevRow.cells[index].focus();
                            e.preventDefault();
                            break;
                        case 'ArrowDown':
                            const nextRow = row.nextElementSibling;
                            if (nextRow && nextRow.cells[index]) nextRow.cells[index].focus();
                            e.preventDefault();
                            break;
                    }
                }
            });
            
            // Make cells focusable
            table.querySelectorAll('td, th').forEach(cell => {
                cell.setAttribute('tabindex', '0');
            });
        });
    </script>
</body>
</html>`;
    } else if (type === 'video-player') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accessible Video Player - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #000000;
            --bg-controls: rgba(0, 0, 0, 0.8);
            --bg-progress: #e9ecef;
            --text-primary: #ffffff;
            --text-secondary: #adb5bd;
            --accent-color: #007bff;
            --hover-color: #58a6ff;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .video-container {
            position: relative;
            background-color: var(--bg-secondary);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            margin-bottom: 2rem;
        }
        
        video {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .video-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, var(--bg-controls));
            padding: 2rem 1rem 1rem;
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        .video-controls.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .progress-bar {
            width: 100%;
            height: 6px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
            margin-bottom: 1rem;
            cursor: pointer;
            position: relative;
        }
        
        .progress-filled {
            height: 100%;
            background-color: var(--accent-color);
            border-radius: 3px;
            width: 0%;
            transition: width 0.1s linear;
        }
        
        .progress-buffered {
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 3px;
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
        }
        
        .controls-row {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .control-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        button {
            background: none;
            border: none;
            color: var(--text-primary);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        button:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--hover-color);
        }
        
        button:focus {
            outline: 2px solid var(--accent-color);
            outline-offset: 2px;
        }
        
        .time-display {
            color: var(--text-primary);
            font-size: 0.875rem;
            font-family: monospace;
            min-width: 100px;
        }
        
        .volume-slider {
            width: 80px;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            cursor: pointer;
            position: relative;
        }
        
        .volume-filled {
            height: 100%;
            background-color: var(--text-primary);
            border-radius: 2px;
            width: 70%;
        }
        
        .playback-speed {
            color: var(--text-primary);
            font-size: 0.875rem;
            background: none;
            border: 1px solid var(--text-secondary);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .playback-speed:hover {
            border-color: var(--hover-color);
            color: var(--hover-color);
        }
        
        .fullscreen-btn {
            margin-left: auto;
        }
        
        .captions-container {
            position: absolute;
            bottom: 80px;
            left: 0;
            right: 0;
            text-align: center;
            padding: 0 1rem;
            pointer-events: none;
        }
        
        .captions {
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--text-primary);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 1.125rem;
            max-width: 80%;
        }
        
        .video-info {
            background-color: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        .video-info h2 {
            margin-bottom: 0.5rem;
        }
        
        .video-info p {
            color: #6c757d;
            margin-bottom: 1rem;
        }
        
        .chapters {
            margin-top: 2rem;
        }
        
        .chapters h3 {
            margin-bottom: 1rem;
        }
        
        .chapter-list {
            list-style: none;
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 1rem;
        }
        
        .chapter-item {
            padding: 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chapter-item:hover {
            background-color: #e9ecef;
        }
        
        .chapter-time {
            color: #6c757d;
            font-family: monospace;
            font-size: 0.875rem;
        }
        
        /* Loading spinner */
        .loading-spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top-color: var(--text-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            display: none;
        }
        
        .loading .loading-spinner {
            display: block;
        }
        
        @keyframes spin {
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        /* Keyboard shortcuts info */
        .shortcuts {
            background-color: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
        }
        
        .shortcuts h3 {
            margin-bottom: 1rem;
        }
        
        .shortcut-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.5rem;
        }
        
        .shortcut-item {
            display: flex;
            gap: 0.5rem;
        }
        
        .shortcut-key {
            background-color: #e9ecef;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Accessible Video Player</h1>
        
        <div class="video-container" id="videoContainer">
            <video id="videoPlayer" preload="metadata">
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                <track label="English" kind="subtitles" srclang="en" src="data:text/vtt;base64,V0VCVlRUCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMDAwCkJpZyBCdWNrIEJ1bm55IC0gYSBMb3ZlbHkgQmxlbmRlciBTaG9ydCBGaWxtCjAwOjAwOjA1LjAwMCAtLT4gMDA6MDA6MTAuMDAwClRoZSBmaWxtIGZvbGxvd3MgYSBzaW5nbGUgZGFsaW5nIHJhYmJpdCBiaWcgYnVja2J1bm55CjAwOjAwOjEwLjAwMCAtLT4gMDA6MDA6MTUuMDAwCkFzIGhlIGludGVyYWN0cyB3aXRoIG90aGVyIGNoYXJhY3RlcnMgaW4gdGhlIGZvcmVzdA==" default>
                Your browser does not support the video tag.
            </video>
            
            <div class="loading-spinner"></div>
            
            <div class="captions-container">
                <div class="captions" id="captions" aria-live="polite"></div>
            </div>
            
            <div class="video-controls" id="videoControls">
                <div class="progress-bar" id="progressBar" role="slider" aria-label="Video progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                    <div class="progress-buffered" id="progressBuffered"></div>
                    <div class="progress-filled" id="progressFilled"></div>
                </div>
                
                <div class="controls-row">
                    <div class="control-group">
                        <button id="playPauseBtn" aria-label="Play">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                        
                        <button id="rewindBtn" aria-label="Rewind 10 seconds">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                            </svg>
                        </button>
                        
                        <button id="forwardBtn" aria-label="Forward 10 seconds">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="control-group">
                        <span class="time-display" id="timeDisplay">0:00 / 0:00</span>
                    </div>
                    
                    <div class="control-group">
                        <button id="muteBtn" aria-label="Mute">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                            </svg>
                        </button>
                        
                        <div class="volume-slider" id="volumeSlider" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
                            <div class="volume-filled" id="volumeFilled"></div>
                        </div>
                    </div>
                    
                    <div class="control-group">
                        <button id="captionsBtn" aria-label="Toggle captions">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>
                            </svg>
                        </button>
                        
                        <select class="playback-speed" id="playbackSpeed" aria-label="Playback speed">
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1" selected>1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="2">2x</option>
                        </select>
                    </div>
                    
                    <button id="pipBtn" aria-label="Picture-in-Picture">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                        </svg>
                    </button>
                    
                    <button id="fullscreenBtn" class="fullscreen-btn" aria-label="Fullscreen">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="video-info">
            <h2>Big Buck Bunny</h2>
            <p>A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.</p>
            <p>Duration: 9:56 | Resolution: 1920x1080 | Codec: H.264</p>
        </div>
        
        <div class="chapters">
            <h3>Chapters</h3>
            <ul class="chapter-list">
                <li class="chapter-item" data-time="0">
                    <span>Introduction</span>
                    <span class="chapter-time">0:00</span>
                </li>
                <li class="chapter-item" data-time="120">
                    <span>The Meeting</span>
                    <span class="chapter-time">2:00</span>
                </li>
                <li class="chapter-item" data-time="240">
                    <span>The Conflict</span>
                    <span class="chapter-time">4:00</span>
                </li>
                <li class="chapter-item" data-time="360">
                    <span>The Resolution</span>
                    <span class="chapter-time">6:00</span>
                </li>
                <li class="chapter-item" data-time="480">
                    <span>Credits</span>
                    <span class="chapter-time">8:00</span>
                </li>
            </ul>
        </div>
        
        <div class="shortcuts">
            <h3>Keyboard Shortcuts</h3>
            <div class="shortcut-list">
                <div class="shortcut-item">
                    <span class="shortcut-key">Space</span>
                    <span>Play/Pause</span>
                </div>
                <div class="shortcut-item">
                    <span class="shortcut-key">←/→</span>
                    <span>Rewind/Forward 5s</span>
                </div>
                <div class="shortcut-item">
                    <span class="shortcut-key">↑/↓</span>
                    <span>Volume Up/Down</span>
                </div>
                <div class="shortcut-item">
                    <span class="shortcut-key">M</span>
                    <span>Mute/Unmute</span>
                </div>
                <div class="shortcut-item">
                    <span class="shortcut-key">F</span>
                    <span>Fullscreen</span>
                </div>
                <div class="shortcut-item">
                    <span class="shortcut-key">C</span>
                    <span>Toggle Captions</span>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        class VideoPlayer {
            constructor() {
                this.video = document.getElementById('videoPlayer');
                this.container = document.getElementById('videoContainer');
                this.controls = document.getElementById('videoControls');
                this.progressBar = document.getElementById('progressBar');
                this.progressFilled = document.getElementById('progressFilled');
                this.progressBuffered = document.getElementById('progressBuffered');
                this.playPauseBtn = document.getElementById('playPauseBtn');
                this.timeDisplay = document.getElementById('timeDisplay');
                this.volumeSlider = document.getElementById('volumeSlider');
                this.volumeFilled = document.getElementById('volumeFilled');
                this.muteBtn = document.getElementById('muteBtn');
                this.captionsBtn = document.getElementById('captionsBtn');
                this.captions = document.getElementById('captions');
                this.playbackSpeed = document.getElementById('playbackSpeed');
                this.fullscreenBtn = document.getElementById('fullscreenBtn');
                this.pipBtn = document.getElementById('pipBtn');
                
                this.controlsTimeout = null;
                this.isScrubbing = false;
                
                this.init();
            }
            
            init() {
                // Play/Pause
                this.playPauseBtn.addEventListener('click', () => this.togglePlay());
                this.video.addEventListener('click', () => this.togglePlay());
                
                // Progress bar
                this.progressBar.addEventListener('click', (e) => this.scrub(e));
                this.progressBar.addEventListener('mousedown', () => this.isScrubbing = true);
                this.progressBar.addEventListener('mouseup', () => this.isScrubbing = false);
                this.progressBar.addEventListener('mousemove', (e) => {
                    if (this.isScrubbing) this.scrub(e);
                });
                
                // Update progress
                this.video.addEventListener('timeupdate', () => this.updateProgress());
                this.video.addEventListener('progress', () => this.updateBuffered());
                
                // Time display
                this.video.addEventListener('loadedmetadata', () => this.updateTimeDisplay());
                this.video.addEventListener('timeupdate', () => this.updateTimeDisplay());
                
                // Volume
                this.volumeSlider.addEventListener('click', (e) => this.changeVolume(e));
                this.muteBtn.addEventListener('click', () => this.toggleMute());
                
                // Skip buttons
                document.getElementById('rewindBtn').addEventListener('click', () => this.skip(-10));
                document.getElementById('forwardBtn').addEventListener('click', () => this.skip(10));
                
                // Captions
                this.captionsBtn.addEventListener('click', () => this.toggleCaptions());
                this.video.addEventListener('cuechange', () => this.updateCaptions());
                
                // Playback speed
                this.playbackSpeed.addEventListener('change', (e) => {
                    this.video.playbackRate = parseFloat(e.target.value);
                });
                
                // Fullscreen
                this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
                document.addEventListener('fullscreenchange', () => this.updateFullscreenBtn());
                
                // Picture-in-Picture
                this.pipBtn.addEventListener('click', () => this.togglePiP());
                
                // Controls visibility
                this.video.addEventListener('mouseenter', () => this.showControls());
                this.video.addEventListener('mouseleave', () => this.hideControls());
                this.container.addEventListener('mousemove', () => this.showControls());
                
                // Keyboard shortcuts
                document.addEventListener('keydown', (e) => this.handleKeyboard(e));
                
                // Chapters
                document.querySelectorAll('.chapter-item').forEach(item => {
                    item.addEventListener('click', () => {
                        this.video.currentTime = parseFloat(item.dataset.time);
                    });
                });
                
                // Loading state
                this.video.addEventListener('waiting', () => {
                    this.container.classList.add('loading');
                });
                this.video.addEventListener('canplay', () => {
                    this.container.classList.remove('loading');
                });
            }
            
            togglePlay() {
                if (this.video.paused) {
                    this.video.play();
                    this.playPauseBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                    this.playPauseBtn.setAttribute('aria-label', 'Pause');
                } else {
                    this.video.pause();
                    this.playPauseBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
                    this.playPauseBtn.setAttribute('aria-label', 'Play');
                }
            }
            
            scrub(e) {
                const rect = this.progressBar.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                this.video.currentTime = pos * this.video.duration;
            }
            
            updateProgress() {
                const percent = (this.video.currentTime / this.video.duration) * 100;
                this.progressFilled.style.width = percent + '%';
                this.progressBar.setAttribute('aria-valuenow', percent);
            }
            
            updateBuffered() {
                if (this.video.buffered.length > 0) {
                    const bufferedEnd = this.video.buffered.end(this.video.buffered.length - 1);
                    const duration = this.video.duration;
                    const percent = (bufferedEnd / duration) * 100;
                    this.progressBuffered.style.width = percent + '%';
                }
            }
            
            updateTimeDisplay() {
                const current = this.formatTime(this.video.currentTime);
                const duration = this.formatTime(this.video.duration);
                this.timeDisplay.textContent = \`\${current} / \${duration}\`;
            }
            
            formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                seconds = Math.floor(seconds % 60);
                return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
            }
            
            changeVolume(e) {
                const rect = this.volumeSlider.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                this.video.volume = pos;
                this.volumeFilled.style.width = (pos * 100) + '%';
                this.volumeSlider.setAttribute('aria-valuenow', pos * 100);
            }
            
            toggleMute() {
                this.video.muted = !this.video.muted;
                if (this.video.muted) {
                    this.muteBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
                    this.muteBtn.setAttribute('aria-label', 'Unmute');
                } else {
                    this.muteBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';
                    this.muteBtn.setAttribute('aria-label', 'Mute');
                }
            }
            
            skip(seconds) {
                this.video.currentTime += seconds;
            }
            
            toggleCaptions() {
                const track = this.video.textTracks[0];
                track.mode = track.mode === 'showing' ? 'hidden' : 'showing';
                this.captionsBtn.style.color = track.mode === 'showing' ? 'var(--accent-color)' : '';
            }
            
            updateCaptions() {
                const track = this.video.textTracks[0];
                const activeCue = track.activeCues[0];
                
                if (activeCue) {
                    this.captions.textContent = activeCue.text;
                    this.captions.style.display = 'inline-block';
                } else {
                    this.captions.style.display = 'none';
                }
            }
            
            toggleFullscreen() {
                if (!document.fullscreenElement) {
                    this.container.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            }
            
            updateFullscreenBtn() {
                if (document.fullscreenElement) {
                    this.fullscreenBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>';
                    this.fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
                } else {
                    this.fullscreenBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
                    this.fullscreenBtn.setAttribute('aria-label', 'Fullscreen');
                }
            }
            
            async togglePiP() {
                try {
                    if (document.pictureInPictureElement) {
                        await document.exitPictureInPicture();
                    } else {
                        await this.video.requestPictureInPicture();
                    }
                } catch (error) {
                    console.error('PiP error:', error);
                }
            }
            
            showControls() {
                this.controls.classList.remove('hidden');
                clearTimeout(this.controlsTimeout);
                this.controlsTimeout = setTimeout(() => {
                    if (!this.video.paused) {
                        this.hideControls();
                    }
                }, 3000);
            }
            
            hideControls() {
                if (!this.video.paused && !this.isScrubbing) {
                    this.controls.classList.add('hidden');
                }
            }
            
            handleKeyboard(e) {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
                
                switch(e.key) {
                    case ' ':
                        e.preventDefault();
                        this.togglePlay();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.skip(-5);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.skip(5);
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        this.video.volume = Math.min(1, this.video.volume + 0.1);
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        this.video.volume = Math.max(0, this.video.volume - 0.1);
                        break;
                    case 'm':
                        e.preventDefault();
                        this.toggleMute();
                        break;
                    case 'f':
                        e.preventDefault();
                        this.toggleFullscreen();
                        break;
                    case 'c':
                        e.preventDefault();
                        this.toggleCaptions();
                        break;
                }
            }
        }
        
        // Initialize video player
        const player = new VideoPlayer();
    </script>
</body>
</html>`;
    } else if (type === 'navigation-menu') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accessible Navigation Menu - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-nav: #343a40;
            --bg-dropdown: #ffffff;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --text-nav: #ffffff;
            --text-dropdown: #212529;
            --border-color: #dee2e6;
            --accent-color: #007bff;
            --hover-color: #58a6ff;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-nav: #212529;
                --bg-dropdown: #2d2d2d;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --text-nav: #ffffff;
                --text-dropdown: #f0f6fc;
                --border-color: #444;
                --accent-color: #58a6ff;
                --hover-color: #79c0ff;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
        }
        
        /* Skip to main content link */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
        
        /* Header and Navigation */
        header {
            background-color: var(--bg-nav);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .nav-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--text-nav);
            text-decoration: none;
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--text-nav);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        /* Main Navigation */
        nav {
            background-color: rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-item {
            position: relative;
        }
        
        .nav-link {
            display: block;
            padding: 0.75rem 1rem;
            color: var(--text-nav);
            text-decoration: none;
            transition: background-color 0.3s;
            white-space: nowrap;
        }
        
        .nav-link:hover,
        .nav-link:focus {
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--text-nav);
        }
        
        .nav-link[aria-expanded="true"] {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        /* Dropdown Menu */
        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 200px;
            background-color: var(--bg-dropdown);
            border: 1px solid var(--border-color);
            border-radius: 0 0 4px 4px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
        }
        
        .dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-item {
            display: block;
            padding: 0.75rem 1rem;
            color: var(--text-dropdown);
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        .dropdown-item:hover,
        .dropdown-item:focus {
            background-color: var(--bg-secondary);
            color: var(--text-dropdown);
        }
        
        .dropdown-divider {
            height: 1px;
            background-color: var(--border-color);
            margin: 0.5rem 0;
        }
        
        /* Dropdown arrow */
        .nav-link.has-dropdown::after {
            content: '▼';
            font-size: 0.7em;
            margin-left: 0.5rem;
            transition: transform 0.3s;
        }
        
        .nav-link[aria-expanded="true"]::after {
            transform: rotate(180deg);
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
            
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: var(--bg-nav);
                flex-direction: column;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            .nav-menu.show {
                max-height: 100vh;
            }
            
            .nav-item {
                width: 100%;
            }
            
            .dropdown {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                box-shadow: none;
                border: none;
                background-color: rgba(0, 0, 0, 0.1);
                display: none;
            }
            
            .dropdown.show {
                display: block;
            }
            
            .dropdown-item {
                padding-left: 2rem;
            }
        }
        
        /* Main Content */
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            min-height: calc(100vh - 200px);
        }
        
        .content-section {
            margin-bottom: 3rem;
        }
        
        h1 {
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        h2 {
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }
        
        p {
            margin-bottom: 1rem;
            color: var(--text-secondary);
        }
        
        /* Breadcrumb Navigation */
        .breadcrumb {
            padding: 0.75rem 0;
            margin-bottom: 2rem;
        }
        
        .breadcrumb-list {
            display: flex;
            list-style: none;
            flex-wrap: wrap;
        }
        
        .breadcrumb-item {
            display: flex;
            align-items: center;
        }
        
        .breadcrumb-item:not(:last-child)::after {
            content: '/';
            margin: 0 0.5rem;
            color: var(--text-secondary);
        }
        
        .breadcrumb-link {
            color: var(--text-secondary);
            text-decoration: none;
        }
        
        .breadcrumb-link:hover,
        .breadcrumb-link:focus {
            color: var(--accent-color);
        }
        
        .breadcrumb-item:last-child .breadcrumb-link {
            color: var(--text-primary);
            font-weight: 500;
        }
        
        /* Footer Navigation */
        footer {
            background-color: var(--bg-secondary);
            padding: 2rem 0;
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.5rem;
        }
        
        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
        }
        
        .footer-links a:hover,
        .footer-links a:focus {
            color: var(--accent-color);
        }
        
        /* Focus styles */
        *:focus {
            outline: 2px solid var(--accent-color);
            outline-offset: 2px;
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            * {
                transition: none !important;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header>
        <div class="nav-container">
            <div class="nav-top">
                <a href="#" class="logo">MyWebsite</a>
                <button class="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">
                    ☰
                </button>
            </div>
            
            <nav role="navigation" aria-label="Main navigation">
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link has-dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                        <div class="dropdown" role="menu">
                            <a href="#" class="dropdown-item" role="menuitem">Web Development</a>
                            <a href="#" class="dropdown-item" role="menuitem">Mobile Apps</a>
                            <a href="#" class="dropdown-item" role="menuitem">UI/UX Design</a>
                            <div class="dropdown-divider" role="separator"></div>
                            <a href="#" class="dropdown-item" role="menuitem">All Products</a>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link has-dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div class="dropdown" role="menu">
                            <a href="#" class="dropdown-item" role="menuitem">Consulting</a>
                            <a href="#" class="dropdown-item" role="menuitem">Training</a>
                            <a href="#" class="dropdown-item" role="menuitem">Support</a>
                            <div class="dropdown-divider" role="separator"></div>
                            <a href="#" class="dropdown-item" role="menuitem">Pricing</a>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link has-dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                        </a>
                        <div class="dropdown" role="menu">
                            <a href="#" class="dropdown-item" role="menuitem">Documentation</a>
                            <a href="#" class="dropdown-item" role="menuitem">Tutorials</a>
                            <a href="#" class="dropdown-item" role="menuitem">Blog</a>
                            <a href="#" class="dropdown-item" role="menuitem">Community</a>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <div class="nav-container">
            <ol class="breadcrumb-list">
                <li class="breadcrumb-item">
                    <a href="#" class="breadcrumb-link">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#" class="breadcrumb-link">Resources</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#" class="breadcrumb-link" aria-current="page">Tutorials</a>
                </li>
            </ol>
        </div>
    </nav>
    
    <main id="main-content">
        <div class="content-section">
            <h1>Accessible Navigation Menu</h1>
            <p>This page demonstrates various types of accessible navigation patterns including main navigation, dropdown menus, breadcrumbs, and footer navigation.</p>
            
            <h2>Features</h2>
            <ul>
                <li>Fully keyboard accessible</li>
                <li>Screen reader friendly with proper ARIA labels</li>
                <li>Mobile responsive with hamburger menu</li>
                <li>Skip to main content link</li>
                <li>Breadcrumb navigation</li>
                <li>Focus management</li>
                <li>Reduced motion support</li>
            </ul>
            
            <h2>Keyboard Navigation</h2>
            <p>Use the following keyboard shortcuts to navigate:</p>
            <ul>
                <li><kbd>Tab</kbd> - Move to next focusable element</li>
                <li><kbd>Shift + Tab</kbd> - Move to previous focusable element</li>
                <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Activate links and buttons</li>
                <li><kbd>Escape</kbd> - Close dropdown menus</li>
                <li><kbd>Arrow Keys</kbd> - Navigate within dropdown menus</li>
            </ul>
        </div>
        
        <div class="content-section">
            <h2>Demo Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h3>Subsection</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
    </main>
    
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Product</h3>
                <ul class="footer-links">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Use Cases</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Company</h3>
                <ul class="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Resources</h3>
                <ul class="footer-links">
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">API Reference</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Legal</h3>
                <ul class="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">License</a></li>
                </ul>
            </div>
        </div>
    </footer>
    
    <script>
        class NavigationMenu {
            constructor() {
                this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                this.navMenu = document.querySelector('.nav-menu');
                this.dropdowns = document.querySelectorAll('.dropdown');
                this.navLinks = document.querySelectorAll('.nav-link.has-dropdown');
                
                this.init();
            }
            
            init() {
                // Mobile menu toggle
                this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
                
                // Dropdown menus
                this.navLinks.forEach(link => {
                    // Mouse events
                    link.addEventListener('mouseenter', () => this.showDropdown(link));
                    link.addEventListener('mouseleave', () => this.hideDropdown(link));
                    
                    // Keyboard events
                    link.addEventListener('keydown', (e) => this.handleDropdownKeydown(e, link));
                    
                    // Touch events for mobile
                    link.addEventListener('click', (e) => this.handleDropdownClick(e, link));
                });
                
                // Close dropdowns on escape
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeAllDropdowns();
                    }
                });
                
                // Close dropdowns when clicking outside
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.nav-item')) {
                        this.closeAllDropdowns();
                    }
                });
            }
            
            toggleMobileMenu() {
                const isExpanded = this.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                this.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                this.navMenu.classList.toggle('show');
            }
            
            showDropdown(link) {
                if (window.innerWidth > 768) {
                    const dropdown = link.nextElementSibling;
                    link.setAttribute('aria-expanded', 'true');
                    dropdown.classList.add('show');
                }
            }
            
            hideDropdown(link) {
                if (window.innerWidth > 768) {
                    const dropdown = link.nextElementSibling;
                    link.setAttribute('aria-expanded', 'false');
                    dropdown.classList.remove('show');
                }
            }
            
            handleDropdownClick(e, link) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = link.nextElementSibling;
                    const isExpanded = link.getAttribute('aria-expanded') === 'true';
                    
                    // Close other dropdowns
                    this.navLinks.forEach(otherLink => {
                        if (otherLink !== link) {
                            otherLink.setAttribute('aria-expanded', 'false');
                            otherLink.nextElementSibling.classList.remove('show');
                        }
                    });
                    
                    // Toggle current dropdown
                    link.setAttribute('aria-expanded', !isExpanded);
                    dropdown.classList.toggle('show');
                }
            }
            
            handleDropdownKeydown(e, link) {
                const dropdown = link.nextElementSibling;
                const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
                
                switch(e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        if (window.innerWidth > 768) {
                            this.showDropdown(link);
                            // Focus first dropdown item
                            if (dropdownItems.length > 0) {
                                dropdownItems[0].focus();
                            }
                        } else {
                            this.handleDropdownClick(e, link);
                        }
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        if (link.getAttribute('aria-expanded') === 'true') {
                            // Focus first dropdown item
                            if (dropdownItems.length > 0) {
                                dropdownItems[0].focus();
                            }
                        } else {
                            this.showDropdown(link);
                            if (dropdownItems.length > 0) {
                                dropdownItems[0].focus();
                            }
                        }
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        if (link.getAttribute('aria-expanded') === 'true') {
                            // Focus last dropdown item
                            if (dropdownItems.length > 0) {
                                dropdownItems[dropdownItems.length - 1].focus();
                            }
                        }
                        break;
                }
            }
            
            closeAllDropdowns() {
                this.navLinks.forEach(link => {
                    this.hideDropdown(link);
                });
            }
        }
        
        // Initialize navigation
        const nav = new NavigationMenu();
        
        // Handle dropdown item keyboard navigation
        document.querySelectorAll('.dropdown-item').forEach((item, index, items) => {
            item.addEventListener('keydown', (e) => {
                const dropdown = item.closest('.dropdown');
                const dropdownItems = Array.from(dropdown.querySelectorAll('.dropdown-item'));
                const currentIndex = dropdownItems.indexOf(item);
                
                switch(e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        const nextIndex = (currentIndex + 1) % dropdownItems.length;
                        dropdownItems[nextIndex].focus();
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        const prevIndex = currentIndex === 0 ? dropdownItems.length - 1 : currentIndex - 1;
                        dropdownItems[prevIndex].focus();
                        break;
                    case 'Escape':
                        e.preventDefault();
                        const navLink = dropdown.previousElementSibling;
                        navLink.focus();
                        navLink.setAttribute('aria-expanded', 'false');
                        dropdown.classList.remove('show');
                        break;
                }
            });
        });
    </script>
</body>
</html>`;
    } else if (type === 'card-component') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Card Component - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-card: #ffffff;
            --bg-card-hover: #f0f6fc;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --text-muted: #868e96;
            --border-color: #dee2e6;
            --accent-color: #007bff;
            --success-color: #28a745;
            --warning-color: #ffc107;
            --danger-color: #dc3545;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-card: #212529;
                --bg-card-hover: #1f2428;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --text-muted: #6e7681;
                --border-color: #30363d;
                --accent-color: #58a6ff;
                --success-color: #3fb950;
                --warning-color: #d29922;
                --danger-color: #f85149;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .section-title {
            margin: 3rem 0 1.5rem;
            color: var(--text-primary);
        }
        
        /* Basic Card Grid */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }
        
        .card {
            background-color: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            background-color: var(--bg-card-hover);
        }
        
        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .card-body {
            padding: 1.5rem;
        }
        
        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }
        
        .card-subtitle {
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .card-text {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .card-footer {
            padding: 1rem 1.5rem;
            background-color: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .card-link {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
        }
        
        .card-link:hover {
            text-decoration: underline;
        }
        
        /* Card with Tags */
        .card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .tag {
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .tag-primary {
            background-color: #e3f2fd;
            color: #1976d2;
        }
        
        .tag-success {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        
        .tag-warning {
            background-color: #fff3e0;
            color: #f57c00;
        }
        
        /* Profile Card */
        .profile-card {
            text-align: center;
            padding: 2rem;
        }
        
        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            object-fit: cover;
            border: 3px solid var(--border-color);
        }
        
        .profile-name {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .profile-title {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .profile-stats {
            display: flex;
            justify-content: space-around;
            padding: 1rem 0;
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
            margin: 1rem 0;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .stat-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        .profile-bio {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }
        
        .profile-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
        }
        
        .btn {
            padding: 0.5rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background-color: var(--accent-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: #0056b3;
        }
        
        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-primary);
        }
        
        .btn-outline:hover {
            background-color: var(--bg-secondary);
        }
        
        /* Product Card */
        .product-card {
            position: relative;
        }
        
        .product-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background-color: var(--danger-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 1;
        }
        
        .product-price {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .price-current {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .price-original {
            font-size: 1rem;
            color: var(--text-muted);
            text-decoration: line-through;
        }
        
        .product-rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .stars {
            color: #ffc107;
        }
        
        .rating-count {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }
        
        /* Stats Card */
        .stats-card {
            background: linear-gradient(135deg, var(--accent-color), #0056b3);
            color: white;
            padding: 2rem;
        }
        
        .stats-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.8;
        }
        
        .stats-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .stats-label {
            font-size: 1rem;
            opacity: 0.9;
        }
        
        .stats-change {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.25rem 0.75rem;
            background-color: rgba(255,255,255,0.2);
            border-radius: 4px;
            font-size: 0.875rem;
        }
        
        /* Horizontal Card */
        .horizontal-card {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        
        .horizontal-card .card-image {
            width: 200px;
            height: 150px;
            flex-shrink: 0;
        }
        
        .horizontal-card .card-body {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .horizontal-card {
                flex-direction: column;
            }
            
            .horizontal-card .card-image {
                width: 100%;
            }
            
            .card-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Card Component Examples</h1>
        
        <h2 class="section-title">Basic Cards</h2>
        <div class="card-grid">
            <article class="card">
                <img src="https://picsum.photos/seed/card1/400/200.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Card Title</h3>
                    <p class="card-subtitle">Secondary text</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Read more →</a>
                </div>
            </article>
            
            <article class="card">
                <img src="https://picsum.photos/seed/card2/400/200.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Another Card</h3>
                    <p class="card-subtitle">With different content</p>
                    <p class="card-text">This card demonstrates how the same component can be used with different content while maintaining consistency.</p>
                    <a href="#" class="card-link">Learn more →</a>
                </div>
            </article>
            
            <article class="card">
                <img src="https://picsum.photos/seed/card3/400/200.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Third Card</h3>
                    <p class="card-subtitle">More variations</p>
                    <p class="card-text">Cards are versatile components that can contain various types of content including images, text, and actions.</p>
                    <a href="#" class="card-link">View details →</a>
                </div>
            </article>
        </div>
        
        <h2 class="section-title">Cards with Tags</h2>
        <div class="card-grid">
            <article class="card">
                <img src="https://picsum.photos/seed/tag1/400/200.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <div class="card-tags">
                        <span class="tag tag-primary">Technology</span>
                        <span class="tag tag-success">New</span>
                    </div>
                    <h3 class="card-title">Tech Article</h3>
                    <p class="card-text">Exploring the latest trends in web development and modern JavaScript frameworks.</p>
                </div>
                <div class="card-footer">
                    <span class="text-muted">5 min read</span>
                    <a href="#" class="card-link">Read →</a>
                </div>
            </article>
            
            <article class="card">
                <img src="https://picsum.photos/seed/tag2/400/200.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <div class="card-tags">
                        <span class="tag tag-warning">Featured</span>
                        <span class="tag tag-primary">Design</span>
                    </div>
                    <h3 class="card-title">Design Tips</h3>
                    <p class="card-text">Essential design principles for creating beautiful and functional user interfaces.</p>
                </div>
                <div class="card-footer">
                    <span class="text-muted">8 min read</span>
                    <a href="#" class="card-link">Read →</a>
                </div>
            </article>
        </div>
        
        <h2 class="section-title">Profile Cards</h2>
        <div class="card-grid">
            <article class="card profile-card">
                <img src="https://picsum.photos/seed/avatar1/100/100.jpg" alt="Profile picture" class="profile-avatar">
                <h3 class="profile-name">Sarah Johnson</h3>
                <p class="profile-title">Senior UX Designer</p>
                <div class="profile-stats">
                    <div class="stat">
                        <div class="stat-value">127</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">4.9</div>
                        <div class="stat-label">Rating</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">89</div>
                        <div class="stat-label">Clients</div>
                    </div>
                </div>
                <p class="profile-bio">Passionate about creating intuitive and beautiful user experiences. Specialized in mobile app design and design systems.</p>
                <div class="profile-actions">
                    <button class="btn btn-primary">Follow</button>
                    <button class="btn btn-outline">Message</button>
                </div>
            </article>
            
            <article class="card profile-card">
                <img src="https://picsum.photos/seed/avatar2/100/100.jpg" alt="Profile picture" class="profile-avatar">
                <h3 class="profile-name">Mike Chen</h3>
                <p class="profile-title">Full Stack Developer</p>
                <div class="profile-stats">
                    <div class="stat">
                        <div class="stat-value">243</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">4.8</div>
                        <div class="stat-label">Rating</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">156</div>
                        <div class="stat-label">Clients</div>
                    </div>
                </div>
                <p class="profile-bio">Building scalable web applications with modern technologies. Expert in React, Node.js, and cloud architecture.</p>
                <div class="profile-actions">
                    <button class="btn btn-primary">Follow</button>
                    <button class="btn btn-outline">Message</button>
                </div>
            </article>
        </div>
        
        <h2 class="section-title">Product Cards</h2>
        <div class="card-grid">
            <article class="card product-card">
                <span class="product-badge">-20%</span>
                <img src="https://picsum.photos/seed/product1/400/300.jpg" alt="Product image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Wireless Headphones</h3>
                    <div class="product-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-count">(324)</span>
                    </div>
                    <div class="product-price">
                        <span class="price-current">$79.99</span>
                        <span class="price-original">$99.99</span>
                    </div>
                    <p class="card-text">Premium noise-cancelling wireless headphones with 30-hour battery life.</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </article>
            
            <article class="card product-card">
                <img src="https://picsum.photos/seed/product2/400/300.jpg" alt="Product image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Smart Watch</h3>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-count">(512)</span>
                    </div>
                    <div class="product-price">
                        <span class="price-current">$249.99</span>
                    </div>
                    <p class="card-text">Advanced fitness tracking, heart rate monitoring, and smartphone integration.</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </article>
        </div>
        
        <h2 class="section-title">Stats Cards</h2>
        <div class="card-grid">
            <article class="card stats-card">
                <div class="stats-icon">📈</div>
                <div class="stats-value">2,543</div>
                <div class="stats-label">Total Sales</div>
                <span class="stats-change">↑ 12% from last month</span>
            </article>
            
            <article class="card stats-card" style="background: linear-gradient(135deg, var(--success-color), #1e7e34);">
                <div class="stats-icon">👥</div>
                <div class="stats-value">1,234</div>
                <div class="stats-label">New Users</div>
                <span class="stats-change">↑ 23% from last month</span>
            </article>
            
            <article class="card stats-card" style="background: linear-gradient(135deg, var(--warning-color), #e0a800);">
                <div class="stats-icon">💰</div>
                <div class="stats-value">$45,678</div>
                <div class="stats-label">Revenue</div>
                <span class="stats-change">↑ 8% from last month</span>
            </article>
        </div>
        
        <h2 class="section-title">Horizontal Cards</h2>
        <div class="card-grid" style="grid-template-columns: 1fr;">
            <article class="card horizontal-card">
                <img src="https://picsum.photos/seed/horiz1/400/300.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Breaking News: Major Announcement</h3>
                    <p class="card-subtitle">Technology • 2 hours ago</p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="card-footer" style="background: none; border: none; padding: 0;">
                        <a href="#" class="card-link">Read full article →</a>
                    </div>
                </div>
            </article>
            
            <article class="card horizontal-card">
                <img src="https://picsum.photos/seed/horiz2/400/300.jpg" alt="Card image" class="card-image">
                <div class="card-body">
                    <h3 class="card-title">Tutorial: Advanced CSS Techniques</h3>
                    <p class="card-subtitle">Education • 5 hours ago</p>
                    <p class="card-text">Learn how to create stunning animations and transitions using modern CSS features including Grid, Flexbox, and custom properties.</p>
                    <div class="card-footer" style="background: none; border: none; padding: 0;">
                        <a href="#" class="card-link">Watch tutorial →</a>
                    </div>
                </div>
            </article>
        </div>
    </div>
    
    <script>
        // Add interactive features
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.textContent === 'Add to Cart') {
                    this.textContent = 'Added!';
                    this.style.backgroundColor = 'var(--success-color)';
                    setTimeout(() => {
                        this.textContent = 'Add to Cart';
                        this.style.backgroundColor = '';
                    }, 2000);
                } else if (this.textContent === 'Follow') {
                    const isFollowing = this.textContent === 'Follow';
                    this.textContent = isFollowing ? 'Following' : 'Follow';
                    this.classList.toggle('btn-outline');
                }
            });
        });
        
        // Card click analytics
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('a') && !e.target.closest('button')) {
                    console.log('Card clicked:', this.querySelector('.card-title, .profile-name').textContent);
                }
            });
        });
        
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '0';
                        img.addEventListener('load', () => {
                            img.style.transition = 'opacity 0.3s';
                            img.style.opacity = '1';
                        });
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('.card-image, .profile-avatar').forEach(img => {
                imageObserver.observe(img);
            });
        }
    </script>
</body>
</html>`;
    } else if (type === 'modal-structure') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accessible Modal Structure - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-modal: #ffffff;
            --bg-overlay: rgba(0, 0, 0, 0.5);
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --border-color: #dee2e6;
            --accent-color: #007bff;
            --danger-color: #dc3545;
            --success-color: #28a745;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-modal: #212529;
                --bg-overlay: rgba(0, 0, 0, 0.7);
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --border-color: #30363d;
                --accent-color: #58a6ff;
                --danger-color: #f85149;
                --success-color: #3fb950;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
            padding: 2rem;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .demo-section {
            margin-bottom: 3rem;
        }
        
        h2 {
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        p {
            margin-bottom: 1rem;
            color: var(--text-secondary);
        }
        
        .button-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background-color: var(--accent-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: #0056b3;
        }
        
        .btn-success {
            background-color: var(--success-color);
            color: white;
        }
        
        .btn-danger {
            background-color: var(--danger-color);
            color: white;
        }
        
        .btn-secondary {
            background-color: var(--bg-secondary);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }
        
        .btn-secondary:hover {
            background-color: #e9ecef;
        }
        
        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--bg-overlay);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal {
            background-color: var(--bg-modal);
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .modal-overlay.show .modal {
            transform: scale(1);
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .modal-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.25rem;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        
        .modal-close:hover {
            background-color: var(--bg-secondary);
            color: var(--text-primary);
        }
        
        .modal-body {
            padding: 1.5rem;
            color: var(--text-secondary);
        }
        
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
        }
        
        /* Form Styles */
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }
        
        input, textarea, select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-size: 1rem;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }
        
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
        }
        
        textarea {
            resize: vertical;
            min-height: 100px;
        }
        
        /* Alert Modal */
        .alert-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-align: center;
        }
        
        .alert-icon.warning {
            color: #ffc107;
        }
        
        .alert-icon.error {
            color: var(--danger-color);
        }
        
        .alert-icon.success {
            color: var(--success-color);
        }
        
        .alert-message {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        /* Image Modal */
        .modal-image {
            width: 100%;
            height: auto;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
        
        /* Loading Modal */
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top-color: var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 2rem auto;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Focus styles */
        *:focus {
            outline: 2px solid var(--accent-color);
            outline-offset: 2px;
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            * {
                transition: none !important;
                animation: none !important;
            }
        }
        
        /* Mobile responsive */
        @media (max-width: 600px) {
            .modal {
                max-width: 95%;
                margin: 1rem;
            }
            
            .modal-header,
            .modal-body,
            .modal-footer {
                padding: 1rem;
            }
            
            .modal-title {
                font-size: 1.25rem;
            }
            
            .button-group {
                flex-direction: column;
            }
            
            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <h1>Accessible Modal Structure</h1>
        
        <div class="demo-section">
            <h2>Basic Modal Types</h2>
            <p>Click the buttons below to see different types of accessible modals. Each modal is properly structured with semantic HTML and ARIA attributes.</p>
            
            <div class="button-group">
                <button class="btn btn-primary" onclick="openModal('basicModal')">Open Basic Modal</button>
                <button class="btn btn-success" onclick="openModal('formModal')">Open Form Modal</button>
                <button class="btn btn-danger" onclick="openModal('alertModal')">Open Alert Modal</button>
                <button class="btn btn-primary" onclick="openModal('imageModal')">Open Image Modal</button>
                <button class="btn btn-secondary" onclick="openModal('loadingModal')">Open Loading Modal</button>
            </div>
        </div>
        
        <div class="demo-section">
            <h2>Accessibility Features</h2>
            <ul>
                <li>Traps focus within the modal</li>
                <li>Restores focus to trigger element when closed</li>
                <li>Prevents body scroll when open</li>
                <li>Closes on Escape key</li>
                <li>Closes on overlay click</li>
                <li>Proper ARIA attributes for screen readers</li>
                <li>Announces modal content to screen readers</li>
                <li>Supports reduced motion preferences</li>
            </ul>
        </div>
    </div>
    
    <!-- Basic Modal -->
    <div class="modal-overlay" id="basicModal" role="dialog" aria-modal="true" aria-labelledby="basicTitle" aria-describedby="basicDescription">
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title" id="basicTitle">Basic Modal</h2>
                <button class="modal-close" onclick="closeModal('basicModal')" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body" id="basicDescription">
                <p>This is a basic modal dialog. It demonstrates the fundamental structure of an accessible modal component.</p>
                <p>The modal traps focus within its boundaries, ensuring keyboard users can navigate through interactive elements without accidentally leaving the modal.</p>
                <p>Screen readers will announce the modal title and description when it opens.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('basicModal')">Cancel</button>
                <button class="btn btn-primary" onclick="closeModal('basicModal')">Save Changes</button>
            </div>
        </div>
    </div>
    
    <!-- Form Modal -->
    <div class="modal-overlay" id="formModal" role="dialog" aria-modal="true" aria-labelledby="formTitle">
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title" id="formTitle">Contact Form</h2>
                <button class="modal-close" onclick="closeModal('formModal')" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('formModal')">Cancel</button>
                <button class="btn btn-primary" onclick="submitForm()">Submit</button>
            </div>
        </div>
    </div>
    
    <!-- Alert Modal -->
    <div class="modal-overlay" id="alertModal" role="dialog" aria-modal="true" aria-labelledby="alertTitle" aria-describedby="alertMessage">
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title" id="alertTitle">Confirmation Required</h2>
                <button class="modal-close" onclick="closeModal('alertModal')" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="alert-icon warning">⚠️</div>
                <p class="alert-message" id="alertMessage">Are you sure you want to delete this item? This action cannot be undone.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('alertModal')">Cancel</button>
                <button class="btn btn-danger" onclick="confirmDelete()">Delete</button>
            </div>
        </div>
    </div>
    
    <!-- Image Modal -->
    <div class="modal-overlay" id="imageModal" role="dialog" aria-modal="true" aria-labelledby="imageTitle">
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title" id="imageTitle">Image Gallery</h2>
                <button class="modal-close" onclick="closeModal('imageModal')" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <img src="https://picsum.photos/seed/modalimage/600/400.jpg" alt="Beautiful landscape" class="modal-image">
                <p>This is an example of a modal used for displaying images or media content. The modal can be used for lightboxes, galleries, or media previews.</p>
                <p>Images within modals should always have appropriate alt text for accessibility.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="closeModal('imageModal')">Close</button>
            </div>
        </div>
    </div>
    
    <!-- Loading Modal -->
    <div class="modal-overlay" id="loadingModal" role="dialog" aria-modal="true" aria-labelledby="loadingTitle" aria-describedby="loadingMessage">
        <div class="modal">
            <div class="modal-body" style="text-align: center;">
                <div class="loading-spinner"></div>
                <h2 class="modal-title" id="loadingTitle" style="margin-bottom: 1rem;">Processing...</h2>
                <p id="loadingMessage">Please wait while we process your request. This may take a few moments.</p>
            </div>
        </div>
    </div>
    
    <script>
        let lastFocusedElement = null;
        let modalOpenCount = 0;
        
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const overlay = modal.parentElement;
            
            // Store the last focused element
            lastFocusedElement = document.activeElement;
            
            // Show the modal
            overlay.classList.add('show');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Set focus to first focusable element
            const focusableElements = modal.querySelectorAll('button, input, textarea, select, a');
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
            
            // Add event listeners
            overlay.addEventListener('click', handleOverlayClick);
            document.addEventListener('keydown', handleEscapeKey);
            
            // Announce to screen readers
            announceToScreenReader('Modal opened');
            
            modalOpenCount++;
        }
        
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            const overlay = modal.parentElement;
            
            // Hide the modal
            overlay.classList.remove('show');
            
            // Restore body scroll
            if (modalOpenCount <= 1) {
                document.body.style.overflow = '';
            }
            
            // Restore focus
            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
            
            // Remove event listeners
            overlay.removeEventListener('click', handleOverlayClick);
            document.removeEventListener('keydown', handleEscapeKey);
            
            // Announce to screen readers
            announceToScreenReader('Modal closed');
            
            modalOpenCount--;
        }
        
        function handleOverlayClick(e) {
            if (e.target === e.currentTarget) {
                const modalId = e.currentTarget.querySelector('.modal').parentElement.id;
                closeModal(modalId);
            }
        }
        
        function handleEscapeKey(e) {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal-overlay.show');
                if (openModal) {
                    closeModal(openModal.id);
                }
            }
        }
        
        function submitForm() {
            const form = document.getElementById('contactForm');
            const formData = new FormData(form);
            
            // Validate form
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.focus();
                }
            });
            
            if (isValid) {
                // Show loading modal
                closeModal('formModal');
                openModal('loadingModal');
                
                // Simulate API call
                setTimeout(() => {
                    closeModal('loadingModal');
                    alert('Form submitted successfully!');
                }, 2000);
            }
        }
        
        function confirmDelete() {
            closeModal('alertModal');
            openModal('loadingModal');
            
            setTimeout(() => {
                closeModal('loadingModal');
                alert('Item deleted successfully!');
            }, 1500);
        }
        
        function announceToScreenReader(message) {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.style.position = 'absolute';
            announcement.style.left = '-10000px';
            announcement.textContent = message;
            
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }
        
        // Trap focus within modal
        document.addEventListener('keydown', function(e) {
            const openModal = document.querySelector('.modal-overlay.show');
            if (!openModal) return;
            
            if (e.key === 'Tab') {
                const focusableElements = openModal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    </script>
</body>
</html>`;
    } else if (type === 'blog-layout') {
      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog Layout - HTML Interview Example</title>
    <style>
        /* Info Panel Styles */
        .info-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .info-panel h1 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }
        
        .feature-item {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            backdrop-filter: blur(10px);
        }
        
        .feature-item::before {
            content: '✓';
            margin-right: 0.5rem;
            color: #4ade80;
        }
        
        /* Main Styles */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --bg-card: #ffffff;
            --bg-header: #343a40;
            --bg-footer: #212529;
            --text-primary: #212529;
            --text-secondary: #6c757d;
            --text-muted: #868e96;
            --text-header: #ffffff;
            --text-footer: #ffffff;
            --border-color: #dee2e6;
            --accent-color: #007bff;
            --hover-color: #58a6ff;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-primary: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --bg-card: #212529;
                --bg-header: #0d1117;
                --bg-footer: #161b22;
                --text-primary: #f0f6fc;
                --text-secondary: #8b949e;
                --text-muted: #6e7681;
                --text-header: #f0f6fc;
                --text-footer: #8b949e;
                --border-color: #30363d;
                --accent-color: #58a6ff;
                --hover-color: #79c0ff;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background-color: var(--bg-primary);
        }
        
        /* Skip to main content */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
        
        /* Header */
        header {
            background-color: var(--bg-header);
            color: var(--text-header);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--text-header);
            text-decoration: none;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }
        
        nav a {
            color: var(--text-header);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: var(--hover-color);
        }
        
        /* Main Layout */
        .blog-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 3rem;
        }
        
        /* Blog Posts */
        main {
            min-width: 0;
        }
        
        .blog-post {
            background-color: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 2rem;
            margin-bottom: 2rem;
            transition: box-shadow 0.3s ease;
        }
        
        .blog-post:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .post-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        .post-author {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .author-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        
        .post-category {
            background-color: var(--accent-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 500;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        .post-category:hover {
            background-color: #0056b3;
        }
        
        .post-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .post-title a {
            color: inherit;
            text-decoration: none;
        }
        
        .post-title a:hover {
            color: var(--accent-color);
        }
        
        .post-excerpt {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            line-height: 1.7;
        }
        
        .post-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }
        
        .post-content {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 2rem;
        }
        
        .post-content h2 {
            color: var(--text-primary);
            margin: 2rem 0 1rem;
            font-size: 1.5rem;
        }
        
        .post-content h3 {
            color: var(--text-primary);
            margin: 1.5rem 0 0.75rem;
            font-size: 1.25rem;
        }
        
        .post-content p {
            margin-bottom: 1rem;
        }
        
        .post-content ul, .post-content ol {
            margin-left: 2rem;
            margin-bottom: 1rem;
        }
        
        .post-content blockquote {
            border-left: 4px solid var(--accent-color);
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: var(--text-secondary);
        }
        
        .post-content code {
            background-color: var(--bg-secondary);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        .post-content pre {
            background-color: var(--bg-secondary);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
        }
        
        .post-content pre code {
            background: none;
            padding: 0;
        }
        
        .post-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        
        .tag {
            background-color: var(--bg-secondary);
            color: var(--text-secondary);
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .tag:hover {
            background-color: var(--accent-color);
            color: white;
        }
        
        .post-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border-color);
        }
        
        .share-buttons {
            display: flex;
            gap: 0.5rem;
        }
        
        .share-btn {
            background: none;
            border: 1px solid var(--border-color);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--text-secondary);
        }
        
        .share-btn:hover {
            background-color: var(--accent-color);
            border-color: var(--accent-color);
            color: white;
        }
        
        /* Sidebar */
        aside {
            position: sticky;
            top: 100px;
            height: fit-content;
        }
        
        .sidebar-section {
            background-color: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .sidebar-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        
        .sidebar-list {
            list-style: none;
        }
        
        .sidebar-list li {
            margin-bottom: 0.75rem;
        }
        
        .sidebar-list a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .sidebar-list a:hover {
            color: var(--accent-color);
        }
        
        .recent-post {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .recent-post-image {
            width: 60px;
            height: 60px;
            border-radius: 4px;
            object-fit: cover;
            flex-shrink: 0;
        }
        
        .recent-post-title {
            font-size: 0.875rem;
            line-height: 1.4;
            color: var(--text-secondary);
        }
        
        .recent-post-title:hover {
            color: var(--accent-color);
        }
        
        /* Newsletter Form */
        .newsletter-form {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .newsletter-input {
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }
        
        .newsletter-btn {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
        }
        
        .newsletter-btn:hover {
            background-color: #0056b3;
        }
        
        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 3rem;
        }
        
        .page-link {
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .page-link:hover,
        .page-link.active {
            background-color: var(--accent-color);
            border-color: var(--accent-color);
            color: white;
        }
        
        /* Footer */
        footer {
            background-color: var(--bg-footer);
            color: var(--text-footer);
            padding: 3rem 0 1rem;
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section li {
            margin-bottom: 0.5rem;
        }
        
        .footer-section a {
            color: var(--text-footer);
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }
        
        .footer-section a:hover {
            opacity: 1;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            opacity: 0.8;
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
            .blog-container {
                grid-template-columns: 1fr;
            }
            
            aside {
                position: static;
                order: -1;
            }
        }
        
        @media (max-width: 600px) {
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            nav ul {
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
            }
            
            .post-title {
                font-size: 1.5rem;
            }
            
            .post-meta {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            
            .post-actions {
                flex-direction: column;
                gap: 1rem;
            }
            
            .share-buttons {
                width: 100%;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <!-- Main Content -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header>
        <div class="header-container">
            <a href="#" class="logo">TechBlog</a>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <div class="blog-container" id="main-content">
        <main>
            <!-- Featured Post -->
            <article class="blog-post">
                <div class="post-meta">
                    <div class="post-author">
                        <img src="https://picsum.photos/seed/author1/32/32.jpg" alt="John Doe" class="author-avatar">
                        <span>John Doe</span>
                    </div>
                    <span>•</span>
                    <time datetime="2024-01-15">January 15, 2024</time>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                
                <a href="#" class="post-category">Featured</a>
                
                <h1 class="post-title">
                    <a href="#">The Future of Web Development: Trends to Watch in 2024</a>
                </h1>
                
                <p class="post-excerpt">
                    Explore the cutting-edge technologies and practices that are shaping the future of web development, from AI-powered tools to advanced frameworks.
                </p>
                
                <img src="https://picsum.photos/seed/blog1/800/400.jpg" alt="Web development trends" class="post-image">
                
                <div class="post-content">
                    <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at an unprecedented pace. As we navigate through 2024, several key trends are reshaping how we build and experience the web.</p>
                    
                    <h2>1. AI-Powered Development Tools</h2>
                    <p>Artificial Intelligence is revolutionizing the development process. Tools like GitHub Copilot, ChatGPT, and various AI assistants are becoming indispensable for developers, offering code suggestions, bug fixes, and even entire function generation.</p>
                    
                    <blockquote>
                        "AI isn't replacing developers; it's augmenting their capabilities and allowing them to focus on more complex problem-solving."
                    </blockquote>
                    
                    <h2>2. The Rise of WebAssembly</h2>
                    <p>WebAssembly (WASM) is gaining traction as a powerful solution for performance-critical applications. It enables near-native execution speeds for web applications, opening doors for complex applications like video editing, 3D gaming, and scientific computing directly in the browser.</p>
                    
                    <h3>Key Benefits of WebAssembly:</h3>
                    <ul>
                        <li>Near-native performance</li>
                        <li>Language agnostic (C++, Rust, Go, etc.)</li>
                        <li>Secure sandboxed execution</li>
                        <li>Seamless integration with JavaScript</li>
                    </ul>
                    
                    <h2>3. Edge Computing and CDN Evolution</h2>
                    <p>Edge computing is transforming how we deliver content and process data. By moving computation closer to users, we can significantly reduce latency and improve user experience. Modern CDNs are evolving beyond simple content delivery to offer edge computing capabilities.</p>
                    
                    <pre><code>// Example of edge function
export default async function(request) {
  const url = new URL(request.url);
  const country = request.cf.country;
  
  // Customize response based on location
  return new Response(\`Hello from \${country}!\`);
}</code></pre>
                    
                    <p>As we look ahead, these trends will continue to evolve and intersect, creating new possibilities for web applications. Developers who stay ahead of these changes will be well-positioned to create the next generation of web experiences.</p>
                </div>
                
                <div class="post-tags">
                    <a href="#" class="tag">#WebDevelopment</a>
                    <a href="#" class="tag">#JavaScript</a>
                    <a href="#" class="tag">#AI</a>
                    <a href="#" class="tag">#WebAssembly</a>
                    <a href="#" class="tag">#EdgeComputing</a>
                </div>
                
                <div class="post-actions">
                    <div class="share-buttons">
                        <button class="share-btn">Share</button>
                        <button class="share-btn">Tweet</button>
                    </div>
                    <a href="#" class="post-category">Read more →</a>
                </div>
            </article>
            
            <!-- Regular Post -->
            <article class="blog-post">
                <div class="post-meta">
                    <div class="post-author">
                        <img src="https://picsum.photos/seed/author2/32/32.jpg" alt="Jane Smith" class="author-avatar">
                        <span>Jane Smith</span>
                    </div>
                    <span>•</span>
                    <time datetime="2024-01-14">January 14, 2024</time>
                    <span>•</span>
                    <span>8 min read</span>
                </div>
                
                <h2 class="post-title">
                    <a href="#">Building Accessible Web Applications: A Complete Guide</a>
                </h2>
                
                <p class="post-excerpt">
                    Learn the essential principles and practices for creating web applications that are accessible to all users, regardless of their abilities or disabilities.
                </p>
                
                <div class="post-content">
                    <p>Web accessibility is not just a nice-to-have feature—it's a fundamental aspect of creating inclusive digital experiences. In this guide, we'll explore the key principles and practical techniques for building accessible web applications.</p>
                    
                    <h2>Understanding WCAG Guidelines</h2>
                    <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content more accessible. The guidelines are organized around four main principles:</p>
                    
                    <ul>
                        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
                        <li><strong>Operable:</strong> Interface components must be operable</li>
                        <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
                        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
                    </ul>
                    
                    <h2>Implementing Semantic HTML</h2>
                    <p>Semantic HTML forms the foundation of accessible web applications. Using appropriate HTML elements provides meaning and structure to content, making it easier for assistive technologies to interpret and navigate.</p>
                </div>
                
                <div class="post-tags">
                    <a href="#" class="tag">#Accessibility</a>
                    <a href="#" class="tag">#WCAG</a>
                    <a href="#" class="tag">#HTML</a>
                    <a href="#" class="tag">#UX</a>
                </div>
                
                <div class="post-actions">
                    <div class="share-buttons">
                        <button class="share-btn">Share</button>
                        <button class="share-btn">Tweet</button>
                    </div>
                    <a href="#" class="post-category">Read more →</a>
                </div>
            </article>
            
            <!-- Pagination -->
            <nav class="pagination" aria-label="Blog pagination">
                <a href="#" class="page-link">←</a>
                <a href="#" class="page-link active">1</a>
                <a href="#" class="page-link">2</a>
                <a href="#" class="page-link">3</a>
                <a href="#" class="page-link">→</a>
            </nav>
        </main>
        
        <aside>
            <!-- Search -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">Search</h3>
                <input type="search" placeholder="Search posts..." class="newsletter-input">
            </div>
            
            <!-- Categories -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">Categories</h3>
                <ul class="sidebar-list">
                    <li><a href="#">Web Development (15)</a></li>
                    <li><a href="#">JavaScript (8)</a></li>
                    <li><a href="#">CSS (6)</a></li>
                    <li><a href="#">Accessibility (4)</a></li>
                    <li><a href="#">Performance (7)</a></li>
                </ul>
            </div>
            
            <!-- Recent Posts -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="recent-post">
                    <img src="https://picsum.photos/seed/recent1/60/60.jpg" alt="Recent post" class="recent-post-image">
                    <a href="#" class="recent-post-title">Understanding React Server Components</a>
                </div>
                <div class="recent-post">
                    <img src="https://picsum.photos/seed/recent2/60/60.jpg" alt="Recent post" class="recent-post-image">
                    <a href="#" class="recent-post-title">CSS Grid vs Flexbox: When to Use Which</a>
                </div>
                <div class="recent-post">
                    <img src="https://picsum.photos/seed/recent3/60/60.jpg" alt="Recent post" class="recent-post-image">
                    <a href="#" class="recent-post-title">Optimizing Web Performance in 2024</a>
                </div>
            </div>
            
            <!-- Newsletter -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">Newsletter</h3>
                <p style="margin-bottom: 1rem; color: var(--text-secondary);">Subscribe to get the latest posts delivered to your inbox.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email" class="newsletter-input" required>
                    <button type="submit" class="newsletter-btn">Subscribe</button>
                </form>
            </div>
            
            <!-- Tags Cloud -->
            <div class="sidebar-section">
                <h3 class="sidebar-title">Popular Tags</h3>
                <div class="post-tags">
                    <a href="#" class="tag">#JavaScript</a>
                    <a href="#" class="tag">#React</a>
                    <a href="#" class="tag">#CSS</a>
                    <a href="#" class="tag">#Node.js</a>
                    <a href="#" class="tag">#TypeScript</a>
                    <a href="#" class="tag">#Vue</a>
                    <a href="#" class="tag">#Performance</a>
                </div>
            </div>
        </aside>
    </div>
    
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About TechBlog</h3>
                <p style="opacity: 0.8; line-height: 1.6;">Your go-to resource for the latest in web development, design trends, and technology insights.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">RSS Feed</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Mobile Dev</a></li>
                    <li><a href="#">UI/UX Design</a></li>
                    <li><a href="#">DevOps</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect</h3>
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 TechBlog. All rights reserved. Built with semantic HTML5 for accessibility.</p>
        </div>
    </footer>
    
    <script>
        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(\`Thank you for subscribing with email: \${email}\`);
            this.reset();
        });
        
        // Search functionality
        document.querySelector('input[type="search"]').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Implement search logic here
        });
        
        // Share button functionality
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.textContent === 'Tweet') {
                    window.open('https://twitter.com/intent/tweet?text=Check out this amazing blog post!', '_blank');
                } else {
                    // Copy link to clipboard
                    navigator.clipboard.writeText(window.location.href);
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Share';
                    }, 2000);
                }
            });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '0';
                        img.addEventListener('load', () => {
                            img.style.transition = 'opacity 0.3s';
                            img.style.opacity = '1';
                        });
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('.post-image, .recent-post-image, .author-avatar').forEach(img => {
                imageObserver.observe(img);
            });
        }
    </script>
</body>
</html>`;
    }
    
    if (html) {
      openWithContent(html, css, js, 'html');
    }
  };

  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          {isImplementation ? (
            // For implementation questions - no accordion, just playground button
            <div className="p-4">
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold text-xs">{index + 1}</span>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                    {q.question}
                  </p>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex-shrink-0">
                    Implementation
                  </Badge>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPlayground(q.implementation);
                  }}
                  className="w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center"
                  title="Try in Playground"
                >
                  <Code className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            // For regular questions - with accordion and YouTube
            <Accordion type="single" collapsible className="w-full border-0 bg-transparent">
              <AccordionItem value={`item-${index}`} className="border-0">
                <AccordionTrigger className="text-left hover:no-underline p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                        {q.question}
                      </p>
                      {q.implementation && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex-shrink-0">
                          Implementation
                        </Badge>
                      )}
                    </div>
                    {!isImplementation && (
                      <Button
                        onClick={() => {
                          const searchQuery = encodeURIComponent(`${q.question} HTML`);
                          window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                        }}
                        className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center mr-2"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                    {q.implementation && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPlayground(q.implementation);
                        }}
                        className="w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center mr-2"
                        title="Try in Playground"
                      >
                        <Code className="w-4 h-4" />
                      </Button>
                    )}
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
          )}
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
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300">{easyQuestions.length} questions • 5-10 min</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Target className="w-4 h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300">{mediumQuestions.length} questions • 10-15 min</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300">{hardQuestions.length} questions • 15-20 min</span>
            </TabsTrigger>
            <TabsTrigger value="implementation" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/60 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200 data-[state=active]:shadow-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200">Implementation</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300">{implementationQuestions.length} questions • Hands-on</span>
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
                <QnA questions={categories.easy} isImplementation={false} />
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
                <QnA questions={categories.medium} isImplementation={false} />
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
                <QnA questions={categories.hard} isImplementation={false} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implementation" className="space-y-4">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
                  <Rocket className="w-5 h-5" />
                  🚀 Top 10 HTML Implementation Questions
                </CardTitle>
                <CardDescription className="text-purple-700 dark:text-purple-300">
                  Practical coding tasks asked in interviews and machine tests - All with playground implementations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <QnA questions={categories.implementation} isImplementation={true} />
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

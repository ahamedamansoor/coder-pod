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

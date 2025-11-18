import type { Language } from './types';

export const html: Language = {
  slug: 'html',
  name: 'HTML',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning HTML from scratch.' },
    // HTML Basics
    { slug: 'introduction-to-html', title: 'HTML Introduction', explanation: 'What is HTML and its role in web pages.' },
    { slug: 'document-structure', title: 'Document Structure', explanation: 'Understanding the basic boilerplate of an HTML document, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`.' },
    { slug: 'html-elements-and-tags', title: 'Elements and Tags', explanation: 'The basic building blocks of HTML.' },
    { slug: 'html-attributes', title: 'Attributes', explanation: 'Providing additional information about elements, such as `id`, `class`, `src`, and `href`.' },
    { slug: 'html-headings-and-paragraphs', title: 'Headings & Paragraphs', explanation: 'Structuring text content with `<h1>` through `<h6>` and `<p>` tags.' },
    { slug: 'text-formatting', title: 'Text Formatting', explanation: 'Using tags like `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`, `<mark>`, and `<sub>` to format text.' },
    { slug: 'html-comments', title: 'Comments', explanation: 'How to add comments to your HTML code that are ignored by the browser.' },
    { slug: 'character-entities', title: 'Character Entities', explanation: 'How to display reserved characters like `<`, `>`, and `&`, and special symbols like `&copy;`.' },
    // Content & Structure
    { slug: 'html-lists', title: 'Lists', explanation: 'Creating ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.' },
    { slug: 'html-links', title: 'Links (Hyperlinks)', explanation: 'Navigating between pages and websites using the `<a>` tag.' },
    { slug: 'html-images', title: 'Images', explanation: 'Embedding images in your web pages using the `<img>` tag.' },
    { slug: 'block-vs-inline', title: 'Block vs. Inline Elements', explanation: 'Understanding the difference between block-level elements (like `<div>`, `<p>`) and inline-level elements (like `<span>`, `<a>`).' },
    { slug: 'html-tables', title: 'Tables', explanation: 'Displaying data in a tabular format using `<table>`, `<tr>`, `<th>`, and `<td>`.' },
    { slug: 'html-semantic-elements', title: 'Semantic HTML', explanation: 'Using tags that describe their meaning and purpose, such as `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.' },
    // Forms & Input
    { slug: 'html-forms', title: 'Forms', explanation: 'Collecting user input with `<form>`, `<input>`, `<textarea>`, and `<button>`.' },
    { slug: 'form-input-types', title: 'Form Input Types', explanation: 'Exploring various input types like `text`, `password`, `checkbox`, `radio`, `submit`, `date`, and `color`.' },
    { slug: 'form-attributes', title: 'Form Attributes', explanation: 'Understanding attributes like `action`, `method`, `name`, `value`, `placeholder`, and `required`.' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Using HTML5 constraint validation API attributes like `pattern`, `min`, `max`, `minlength`, `maxlength`.' },
    { slug: 'datalist-element', title: 'Datalist Element', explanation: 'Providing "autocomplete" functionality for input controls.' },
    { slug: 'output-element', title: 'The <output> Element', explanation: 'Representing the result of a calculation or user action.' },
    // Media & Graphics
    { slug: 'audio-and-video', title: 'Audio and Video', explanation: 'Embedding media content with the `<audio>` and `<video>` tags.' },
    { slug: 'iframes', title: 'Iframes', explanation: 'Embedding another HTML document within the current one using `<iframe>`.' },
    { slug: 'svg-and-canvas', title: 'SVG and Canvas', explanation: 'Introduction to embedding vector graphics with `<svg>` and drawing graphics with `<canvas>`.' },
    { slug: 'responsive-images', title: 'Responsive Images', explanation: 'Using `<picture>`, `srcset`, and `sizes` for art direction and resolution switching.' },
    // Advanced Topics & HTML5 Features
    { slug: 'html5-latest-features', title: 'HTML5 Latest Features', explanation: 'Exploring new additions like the native `<dialog>` element and Popover API.' },
    { slug: 'dialog-element', title: 'Native <dialog> Element', explanation: 'Creating native, accessible modal dialogs without JavaScript libraries.' },
    { slug: 'popover-api', title: 'Popover API', explanation: 'Creating transient UI elements like menus, tooltips, and popovers with built-in behavior.' },
    { slug: 'details-and-summary', title: 'Details & Summary Elements', explanation: 'Creating native, accessible disclosure widgets (accordions).' },
    { slug: 'lazy-loading', title: 'Native Lazy Loading', explanation: 'Improving performance by deferring the loading of off-screen images and iframes.' },
    { slug: 'content-visibility', title: 'Content Visibility', explanation: 'Boosting rendering performance with the `content-visibility` CSS property.' },
    { slug: 'template-and-slot', title: 'Template & Slot Elements', explanation: 'Creating reusable markup templates and the basics of Web Components.' },
    { slug: 'data-attributes', title: 'Custom Data Attributes', explanation: 'Storing custom data private to the page or application using `data-*` attributes.' },
    { slug: 'content-editable', title: 'Content Editable', explanation: 'Making any HTML element editable by the user with the `contenteditable` attribute.' },
    { slug: 'progress-and-meter', title: 'Progress & Meter Elements', explanation: 'Displaying progress with `<progress>` and measurements with `<meter>`.' },
    { slug: 'advanced-tables', title: 'Advanced Tables', explanation: 'Enhancing table accessibility and structure with `scope`, `<thead>`, `<tbody>`, `<tfoot>`, and `<colgroup>`.' },
    // Metadata, SEO, and Best Practices
    { slug: 'meta-tags-and-seo', title: 'Meta Tags & SEO', explanation: 'Using meta tags, Open Graph, Twitter Cards, and favicons to improve search and social visibility.' },
    { slug: 'html-document-metadata', title: 'Advanced Document Metadata', explanation: 'Understanding `<base>`, advanced `<link>` relations (preload, prefetch), and `<script>` attributes (async, defer).' },
    { slug: 'microdata-structured-data', title: 'Microdata & Structured Data', explanation: 'Using Schema.org markup to provide rich snippets for search engines.' },
    { slug: 'html-best-practices', title: 'HTML Best Practices', explanation: 'Covering code organization, naming conventions, performance, and validation.' },
    { slug: 'html-email-basics', title: 'HTML Email Basics', explanation: 'Understanding the unique challenges and techniques for coding HTML emails.' },
    { slug: 'global-attributes', title: 'Global Attributes Overview', explanation: 'A look at important attributes available on all elements, like `title`, `lang`, `tabindex`, and ARIA roles.' },
    // API & Interactivity
    { slug: 'html5-apis', title: 'HTML5 APIs Overview', explanation: 'An overview of powerful browser APIs like Geolocation, Web Storage, and more.' },
    { slug: 'web-workers-api', title: 'Web Workers API', explanation: 'Running background scripts in a separate thread to avoid freezing the user interface.' },
    { slug: 'accessibility', title: 'Accessibility (a11y)', explanation: 'Best practices for writing accessible HTML, including ARIA roles and proper semantic structure to support users with disabilities.' },
    { slug: 'interview-simulator', title: 'AI Interview Simulator', explanation: 'Practice for your next technical interview with an AI-powered simulator.' },
  ]
};
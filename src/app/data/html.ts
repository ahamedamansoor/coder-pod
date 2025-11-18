
import type { Language } from './types';

export const html: Language = {
  slug: 'html',
  name: 'HTML',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning HTML from scratch.' },
    { slug: 'introduction-to-html', title: 'HTML Introduction', explanation: 'What is HTML and its role in web pages.' },
    { slug: 'document-structure', title: 'Document Structure', explanation: 'Understanding the basic boilerplate of an HTML document, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`.' },
    { slug: 'html-elements-and-tags', title: 'Elements and Tags', explanation: 'The basic building blocks of HTML.' },
    { slug: 'html-attributes', title: 'Attributes', explanation: 'Providing additional information about elements, such as `id`, `class`, `src`, and `href`.' },
    { slug: 'html-headings-and-paragraphs', title: 'Headings & Paragraphs', explanation: 'Structuring text content with `<h1>` through `<h6>` and `<p>` tags.' },
    { slug: 'text-formatting', title: 'Text Formatting', explanation: 'Using tags like `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`, `<mark>`, and `<sub>` to format text.' },
    { slug: 'html-comments', title: 'Comments', explanation: 'How to add comments to your HTML code that are ignored by the browser.' },
    { slug: 'html-lists', title: 'Lists', explanation: 'Creating ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.' },
    { slug: 'html-links', title: 'Links (Hyperlinks)', explanation: 'Navigating between pages and websites using the `<a>` tag.' },
    { slug: 'html-images', title: 'Images', explanation: 'Embedding images in your web pages using the `<img>` tag.' },
    { slug: 'block-vs-inline', title: 'Block vs. Inline Elements', explanation: 'Understanding the difference between block-level elements (like `<div>`, `<p>`) and inline-level elements (like `<span>`, `<a>`).' },
    { slug: 'html-tables', title: 'Tables', explanation: 'Displaying data in a tabular format using `<table>`, `<tr>`, `<th>`, and `<td>`.' },
    { slug: 'html-semantic-elements', title: 'Semantic HTML', explanation: 'Using tags that describe their meaning and purpose, such as `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.' },
    { slug: 'html-forms', title: 'Forms', explanation: 'Collecting user input with `<form>`, `<input>`, `<textarea>`, and `<button>`.' },
    { slug: 'form-input-types', title: 'Form Input Types', explanation: 'Exploring various input types like `text`, `password`, `checkbox`, `radio`, `submit`, `date`, and `color`.' },
    { slug: 'form-attributes', title: 'Form Attributes', explanation: 'Understanding attributes like `action`, `method`, `name`, `value`, `placeholder`, and `required`.' },
    { slug: 'audio-and-video', title: 'Audio and Video', explanation: 'Embedding media content with the `<audio>` and `<video>` tags.' },
    { slug: 'iframes', title: 'Iframes', explanation: 'Embedding another HTML document within the current one using `<iframe>`.' },
    { slug: 'svg-and-canvas', title: 'SVG and Canvas', explanation: 'Introduction to embedding vector graphics with `<svg>` and drawing graphics with `<canvas>`.' },
    { slug: 'character-entities', title: 'Character Entities', explanation: 'How to display reserved characters like `<`, `>`, and `&`, and special symbols like `&copy;`.' },
    { slug: 'html5-apis', title: 'HTML5 APIs', explanation: 'An overview of powerful browser APIs like Geolocation, Web Storage, Web Workers, and Web Sockets.' },
    { slug: 'web-workers-api', title: 'Web Workers API', explanation: 'Running background scripts in a separate thread to avoid freezing the user interface.' },
    { slug: 'accessibility', title: 'Accessibility (a11y)', explanation: 'Best practices for writing accessible HTML, including ARIA roles and proper semantic structure to support users with disabilities.' },
  ]
};

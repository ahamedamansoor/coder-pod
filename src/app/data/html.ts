import type { Language } from './types';

export const html: Language = {
  slug: 'html',
  name: 'HTML',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A structured roadmap for learning HTML from scratch.' },

    // Foundation
    { slug: 'introduction-to-html', title: 'HTML Introduction', explanation: 'What is HTML and its role in web pages.', category: 'Foundation' },
    { slug: 'document-structure', title: 'Document Structure', explanation: 'Understanding the basic boilerplate of an HTML document, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`.', category: 'Foundation' },

    // Core Building Blocks
    { slug: 'html-elements-and-tags', title: 'Elements and Tags', explanation: 'The basic building blocks of HTML.', category: 'Core Building Blocks' },
    { slug: 'html-headings-and-paragraphs', title: 'Headings & Paragraphs', explanation: 'Structuring text content with `<h1>` through `<h6>` and `<p>` tags.', category: 'Core Building Blocks' },
    { slug: 'text-formatting', title: 'Text Formatting', explanation: 'Using tags like `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`, `<mark>`, and `<sub>` to format text.', category: 'Core Building Blocks' },
    { slug: 'html-attributes', title: 'Attributes', explanation: 'Providing additional information about elements, such as `id`, `class`, `src`, and `href`.', category: 'Core Building Blocks' },
    { slug: 'global-attributes', title: 'Global Attributes Overview', explanation: 'Important attributes available on all elements, like `title`, `lang`, `tabindex`, and ARIA roles.', category: 'Core Building Blocks' },
    { slug: 'html-comments', title: 'Comments', explanation: 'How to add comments to your HTML code that are ignored by the browser.', category: 'Core Building Blocks' },
    { slug: 'character-entities', title: 'Character Entities', explanation: 'How to display reserved characters like `<`, `>`, and `&`, and special symbols like `&copy;`.', category: 'Core Building Blocks' },

    // Grouping & Layout
    { slug: 'block-vs-inline', title: 'Block vs. Inline Elements', explanation: 'Difference between block-level elements (like `<div>`, `<p>`) and inline-level elements (like `<span>`, `<a>`).', category: 'Grouping & Layout' },
    { slug: 'html-lists', title: 'Lists', explanation: 'Creating ordered (`<ol>`), unordered (`<ul>`), and description (`<dl>`) lists.', category: 'Grouping & Layout' },
    { slug: 'html-links', title: 'Links (Hyperlinks)', explanation: 'Navigating between pages and websites using the `<a>` tag.', category: 'Grouping & Layout' },
    { slug: 'html-images', title: 'Images', explanation: 'Embedding images in your web pages using the `<img>` tag.', category: 'Grouping & Layout' },
    { slug: 'html-tables', title: 'Tables', explanation: 'Displaying data in a tabular format using `<table>`, `<tr>`, `<th>`, and `<td>`.', category: 'Grouping & Layout' },
    { slug: 'html-semantic-elements', title: 'Semantic HTML', explanation: 'Using tags that describe their meaning and purpose, such as `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.', category: 'Grouping & Layout' },

    // Forms & User Input
    { slug: 'html-forms', title: 'Forms', explanation: 'Collecting user input with `<form>`, `<input>`, `<textarea>`, and `<button>`.', category: 'Forms & User Input' },
    { slug: 'form-input-types', title: 'Form Input Types', explanation: 'Exploring various input types like `text`, `password`, `checkbox`, `radio`, `submit`, `date`, and `color`.', category: 'Forms & User Input' },
    { slug: 'form-attributes', title: 'Form Attributes', explanation: 'Understanding attributes like `action`, `method`, `name`, `value`, `placeholder`, and `required`.', category: 'Forms & User Input' },
    { slug: 'form-validation', title: 'Form Validation', explanation: 'Using HTML5 constraint validation attributes like `pattern`, `min`, `max`, `minlength`, `maxlength`.', category: 'Forms & User Input' },
    { slug: 'datalist-element', title: 'Datalist Element', explanation: 'Providing "autocomplete" functionality for input controls.', category: 'Forms & User Input' },
    { slug: 'output-element', title: 'The <output> Element', explanation: 'Representing the result of a calculation or user action.', category: 'Forms & User Input' },
    { slug: 'progress-and-meter', title: 'Progress & Meter Elements', explanation: 'Displaying progress with `<progress>` and measurements with `<meter>`.', category: 'Forms & User Input' },

    // Media & Graphics
    { slug: 'audio-and-video', title: 'Audio and Video', explanation: 'Embedding media content with the `<audio>` and `<video>` tags.', category: 'Media & Graphics' },
    { slug: 'responsive-images', title: 'Responsive Images', explanation: 'Using `<picture>`, `srcset`, and `sizes` for art direction and resolution switching.', category: 'Media & Graphics' },
    { slug: 'iframes', title: 'Iframes', explanation: 'Embedding another HTML document within the current one using `<iframe>`.', category: 'Media & Graphics' },
    { slug: 'svg-and-canvas', title: 'SVG and Canvas', explanation: 'Embedding vector graphics with `<svg>` and drawing graphics with `<canvas>`.', category: 'Media & Graphics' },

    // Interactive & Components
    { slug: 'details-and-summary', title: 'Details & Summary Elements', explanation: 'Creating native, accessible disclosure widgets (accordions).', category: 'Interactive & Components' },
    { slug: 'dialog-element', title: 'Native <dialog> Element', explanation: 'Creating native, accessible modal dialogs without JS libraries.', category: 'Interactive & Components' },
    { slug: 'popover-api', title: 'Popover API', explanation: 'Transient UI elements like menus, tooltips, and popovers with built-in behavior.', category: 'Interactive & Components' },
    { slug: 'template-and-slot', title: 'Template & Slot Elements', explanation: 'Creating reusable markup templates and basics of Web Components.', category: 'Interactive & Components' },
    { slug: 'content-editable', title: 'Content Editable', explanation: 'Making any HTML element editable by the user with `contenteditable`.', category: 'Interactive & Components' },
    { slug: 'data-attributes', title: 'Custom Data Attributes', explanation: 'Storing custom data private to the page or application using `data-*` attributes.', category: 'Interactive & Components' },

    // Performance & Enhancement
    { slug: 'lazy-loading', title: 'Native Lazy Loading', explanation: 'Improving performance by deferring the loading of off-screen images and iframes.', category: 'Performance & Enhancement' },
    { slug: 'content-visibility', title: 'Content Visibility', explanation: 'Boosting rendering performance with the `content-visibility` CSS property.', category: 'Performance & Enhancement' },
    { slug: 'advanced-tables', title: 'Advanced Tables', explanation: 'Enhancing table accessibility and structure with `scope`, `<thead>`, `<tbody>`, `<tfoot>`, and `<colgroup>`.', category: 'Performance & Enhancement' },

    // Browser & Platform APIs
    { slug: 'html5-latest-features', title: 'HTML5 Latest Features', explanation: 'Exploring new additions like <dialog> and the Popover API.', category: 'Browser & Platform APIs' },
    { slug: 'fetch-api', title: 'Fetch API', explanation: 'Making network requests with the Fetch API.', category: 'Browser & Platform APIs' },
    { slug: 'web-storage-api', title: 'Web Storage API', explanation: 'Persisting simple key/value data with localStorage and sessionStorage.', category: 'Browser & Platform APIs' },
    { slug: 'geolocation-api', title: 'Geolocation API', explanation: 'Retrieving user geographic location with permissions.', category: 'Browser & Platform APIs' },
    { slug: 'drag-and-drop-api', title: 'Drag and Drop API', explanation: 'Implementing native drag-and-drop interactions.', category: 'Browser & Platform APIs' },
    { slug: 'web-workers-api', title: 'Web Workers API', explanation: 'Running scripts in background threads for performance.', category: 'Browser & Platform APIs' },

    // Metadata & SEO
    { slug: 'meta-tags-and-seo', title: 'Meta Tags & SEO', explanation: 'Meta tags, Open Graph, Twitter Cards, and favicons.', category: 'Metadata & SEO' },
    { slug: 'html-document-metadata', title: 'Advanced Document Metadata', explanation: 'Understanding `<base>`, advanced `<link>` relations, and `<script>` attributes.', category: 'Metadata & SEO' },
    { slug: 'microdata-structured-data', title: 'Microdata & Structured Data', explanation: 'Using Schema.org markup for rich snippets.', category: 'Metadata & SEO' },

    // Accessibility & Quality
    { slug: 'accessibility', title: 'Accessibility (a11y)', explanation: 'Best practices for writing accessible HTML.', category: 'Accessibility & Quality' },
    { slug: 'html-best-practices', title: 'HTML Best Practices', explanation: 'Code organization, naming conventions, performance, and validation.', category: 'Accessibility & Quality' },
  ]
};

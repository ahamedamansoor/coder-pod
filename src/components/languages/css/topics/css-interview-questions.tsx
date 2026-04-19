'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  BookOpen, 
  Target, 
  Brain,
  TrendingUp,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';

const easyQuestions = [
  {
    question: "What is the difference between `class` and `id` selectors in CSS?",
    idealAnswer: "**Class selectors** (`.classname`) can be used on multiple elements and are reusable:\n```css\n.highlight { color: blue; }\n<div class=\"highlight\">Text</div>\n<p class=\"highlight\">Text</p>\n```\n\n**ID selectors** (`#idname`) must be unique and can only be used on one element:\n```css\n#header { font-size: 24px; }\n<div id=\"header\">Header</div>\n```\n\n**Key Differences:**\n- Class: Multiple elements, reusable, lower specificity\n- ID: Single element, unique, higher specificity\n- Best practice: Use classes for styling, IDs for JavaScript hooks or anchors",
  },
  {
    question: "What are CSS specificity rules?",
    idealAnswer: "CSS specificity determines which styles are applied when multiple rules target the same element:\n\n**Specificity Hierarchy (highest to lowest):**\n1. **Inline styles**: `style=\"color: red;\"` (1000)\n2. **ID selectors**: `#header` (100)\n3. **Class selectors**: `.class` (10)\n4. **Attribute selectors**: `[type=\"text\"]` (10)\n5. **Pseudo-classes**: `:hover` (10)\n6. **Element selectors**: `div` (1)\n7. **Universal selector**: `*` (0)\n\n**Example:**\n```css\n#nav .link { color: blue; } /* Specificity: 100 + 10 = 110 */\n.nav .link { color: red; }   /* Specificity: 10 + 10 = 20 */\n```\nBlue wins due to higher specificity.",
  },
  {
    question: "What is the CSS box model?",
    idealAnswer: "The CSS box model describes how elements are structured and sized:\n\n**Components (from inside out):**\n1. **Content**: Actual content (text, images)\n2. **Padding**: Space between content and border\n3. **Border**: Surrounds padding and content\n4. **Margin**: Space outside the border\n\n**Width Calculation:**\n- `box-sizing: content-box` (default): width = content only\n- `box-sizing: border-box`: width = content + padding + border\n\n```css\ndiv {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n  box-sizing: border-box; /* Total width stays 200px */\n}\n```",
  },
  {
    question: "What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?",
    idealAnswer: "**`display: none`**:\n- Element completely removed from document flow\n- No space reserved\n- Not accessible to screen readers\n- `display: block` to show again\n\n**`visibility: hidden`**:\n- Element invisible but space reserved\n- Still in document flow\n- Accessible to screen readers\n- `visibility: visible` to show again\n\n**`opacity: 0`**:\n- Element transparent but space reserved\n- Still interactive (clickable)\n- Accessible to screen readers\n- `opacity: 1` to show again\n\n**Use Cases:**\n- `display: none`: Completely remove elements\n- `visibility: hidden`: Hide but maintain layout\n- `opacity: 0`: Fade effects and animations",
  },
  {
    question: "What are CSS pseudo-classes and pseudo-elements?",
    idealAnswer: "**Pseudo-classes** target elements based on state:\n```css\n/* State-based */\n:hover { } /* Mouse over */\n:focus { } /* Element focused */\n:active { } /* Being clicked */\n\n/* Position-based */\n:first-child { } /* First child */\n:last-child { }  /* Last child */\n:nth-child(2) { } /* 2nd child */\n```\n\n**Pseudo-elements** target specific parts of elements:\n```css\n::before { content: \"★\"; } /* Before content */\n::after { content: \"★\"; }  /* After content */\n::first-letter { } /* First letter */\n::first-line { }   /* First line */\n::selection { }    /* Selected text */\n```\n\n**Syntax:**\n- Pseudo-classes: Single colon (`:`)\n- Pseudo-elements: Double colon (`::`) in CSS3",
  },
  {
    question: "What is the difference between `em`, `rem`, `px`, and `%` units in CSS?",
    idealAnswer: "**`px` (pixels)**:\n- Absolute unit, fixed size\n- Not scalable, consistent across devices\n```css\nfont-size: 16px;\n```\n\n**`em` (relative to parent)**:\n- Relative to parent element's font-size\n- Can compound unexpectedly\n```css\n.child { font-size: 1.2em; } /* 1.2 × parent font-size */\n```\n\n**`rem` (relative to root)**:\n- Relative to root (`html`) element's font-size\n- Predictable, doesn't compound\n```css\n.child { font-size: 1.2rem; } /* 1.2 × root font-size */\n```\n\n**`%` (percentage)**:\n- Relative to parent element's same property\n- Varies by property (width vs font-size)\n```css\nwidth: 50%; /* 50% of parent width */\nfont-size: 120%; /* 120% of parent font-size */\n```\n\n**Best Practice**: Use `rem` for typography, `%` for layouts.",
  },
  {
    question: "What are CSS combinators?",
    idealAnswer: "CSS combinators define relationships between selectors:\n\n**Descendant selector** (space):\n```css\ndiv p { color: blue; } /* p inside div */\n```\n\n**Child selector** (`>`):\n```css\ndiv > p { color: red; } /* direct child p of div */\n```\n\n**Adjacent sibling selector** (`+`):\n```css\nh1 + p { margin-top: 0; } /* p immediately after h1 */\n```\n\n**General sibling selector** (`~`):\n```css\nh1 ~ p { color: gray; } /* any p after h1 */\n```\n\n**Example Usage:**\n```css\nnav > ul > li > a { /* Direct navigation links */\n  text-decoration: none;\n}\nh2 + p { /* First paragraph after heading */\n  font-weight: bold;\n}\n```",
  },
  {
    question: "What is CSS inheritance?",
    idealAnswer: "CSS inheritance is when properties pass from parent to child elements:\n\n**Inherited Properties:**\n- `font-family`, `font-size`, `font-weight`, `color`\n- `text-align`, `line-height`, `letter-spacing`\n- `list-style`, `cursor`, `visibility`\n\n**Not Inherited:**\n- `width`, `height`, `margin`, `padding`, `border`\n- `background`, `display`, `position`\n- `float`, `clear`, `vertical-align`\n\n**Controlling Inheritance:**\n```css\n/* Force inheritance */\n.child {\n  width: inherit;\n  height: inherit;\n}\n\n/* Prevent inheritance */\n.child {\n  color: initial; /* Reset to default */\n  color: unset;   /* Reset to inherited or default */\n  all: unset;     /* Reset all properties */\n}\n```",
  },
  {
    question: "What are CSS comments and how do you write them?",
    idealAnswer: "CSS comments are used to add notes and documentation to your stylesheets:\n\n**Syntax:**\n```css\n/* This is a single-line comment */\n\n/* This is a\n   multi-line comment\n   that spans multiple lines */\n```\n\n**Uses:**\n- Explain complex rules\n- Temporarily disable code\n- Add section separators\n- Document architecture\n\n**Best Practices:**\n```css\n/* =================================\n   HEADER STYLES\n   ================================= */\n.header {\n  background: #333;\n  /* padding: 20px; Temporarily disabled */\n  color: white;\n}\n\n/* Navigation links - hover effects */\n.nav a:hover {\n  color: #ff6b6b; /* Accent color */\n}\n```",
  },
  {
    question: "What is the difference between `margin` and `padding`?",
    idealAnswer: "**Padding** is space INSIDE an element:\n- Between content and border\n- Part of the element's background\n- Affects total size (unless box-sizing: border-box)\n```css\n.box {\n  padding: 20px; /* 20px inside all sides */\n  background: lightblue; /* Background includes padding */\n}\n```\n\n**Margin** is space OUTSIDE an element:\n- Between element and its neighbors\n- Transparent (no background)\n- Collapses with adjacent margins\n```css\n.box {\n  margin: 20px; /* 20px outside all sides */\n}\n```\n\n**Visual Example:**\n```\n  | margin |\n+----------+\n| padding  |\n| content   |\n| padding  |\n+----------+\n  | margin |\n```\n\n**Use Cases:**\n- Padding: Internal spacing, breathing room\n- Margin: External spacing, element separation",
  },
  {
    question: "What is the CSS `!important` declaration and when should you use it?",
    idealAnswer: "**`!important`** overrides all other CSS declarations:\n```css\n.example {\n  color: red !important; /* This will always win */\n}\n```\n\n**Specificity Order:**\n1. `!important` rules\n2. Inline styles\n3. ID selectors\n4. Class selectors\n5. Element selectors\n\n**When to Use:**\n- Utility classes that must win\n- Overriding third-party CSS\n- Emergency fixes (temporary)\n- Print styles\n\n**When NOT to Use:**\n- Regular styling (bad practice)\n- When specificity works better\n- In component-based development\n\n**Better Alternatives:**\n```css\n/* Use higher specificity instead */\n.parent .child { color: red; }\n\n/* Use CSS Modules or scoped styles */\n```\n\n**Best Practice**: Avoid `!important` unless absolutely necessary.",
  },
  {
    question: "What are CSS attribute selectors?",
    idealAnswer: "Attribute selectors target elements based on their attributes:\n\n**Basic Attribute Selector**:\n```css\n[type=\"text\"] { border: 1px solid #ccc; }\n```\n\n**Attribute Contains Value**:\n```css\n[class*=\"btn\"] { /* class contains \"btn\" */\n  cursor: pointer;\n}\n```\n\n**Attribute Starts With**:\n```css\n[href^=\"https\"] { /* External links */\n  color: #0066cc;\n}\n```\n\n**Attribute Ends With**:\n```css\n[src$=\".pdf\"] { /* PDF files */\n  border: 1px solid red;\n}\n```\n\n**Attribute Contains Word**:\n```css\n[class~=\"active\"] { /* class contains word \"active\" */\n  background: yellow;\n}\n```\n\n**Use Cases:**\n- Styling form inputs by type\n- External/internal link styling\n- File type indicators\n- Component state styling",
  },
  {
    question: "What is CSS `z-index` and how does stacking context work?",
    idealAnswer: "**`z-index`** controls the stacking order of positioned elements:\n\n**Basic Usage:**\n```css\n.element1 { z-index: 10; }\n.element2 { z-index: 20; } /* On top */\n```\n\n**Stacking Context Rules:**\n- Root element (`<html>`) creates base context\n- `position: relative/absolute/fixed` + `z-index` creates new context\n- Elements with higher `z-index` appear above lower ones\n- `z-index` only works on positioned elements\n\n**Stacking Order (bottom to top):**\n1. Root element background/borders\n2. Block-level elements (non-positioned)\n3. Floated elements\n4. Inline elements (non-positioned)\n5. Positioned elements (by `z-index`)\n\n**Common Issues:**\n```css\n/* This won't work - no position */\n.no-position { z-index: 100; }\n\n/* This creates new stacking context */\n.parent {\n  position: relative;\n  z-index: 1;\n}\n```\n\n**Best Practice**: Use minimal `z-index` values and understand stacking contexts.",
  },
];

const mediumQuestions = [
  {
    question: "Explain CSS Flexbox and its main properties.",
    idealAnswer: "Flexbox is a one-dimensional layout system for arranging items in rows or columns.\n\n**Container Properties:**\n```css\n.container {\n  display: flex;              /* Enable flexbox */\n  flex-direction: row;        /* row | column | row-reverse | column-reverse */\n  justify-content: center;    /* main axis alignment */\n  align-items: center;        /* cross axis alignment */\n  flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */\n  gap: 20px;                  /* space between items */\n}\n```\n\n**Item Properties:**\n```css\n.item {\n  flex-grow: 1;               /* grow factor */\n  flex-shrink: 0;             /* shrink factor */\n  flex-basis: auto;           /* base size */\n  align-self: flex-start;     /* override align-items */\n  order: 2;                   /* visual order */\n}\n```\n\n**Main Concepts:**\n- **Main axis**: Primary direction (row by default)\n- **Cross axis**: Perpendicular to main axis\n- **Flex container**: Parent with display: flex\n- **Flex items**: Direct children of flex container",
  },
  {
    question: "What is CSS Grid and how does it differ from Flexbox?",
    idealAnswer: "CSS Grid is a two-dimensional layout system for creating complex layouts.\n\n**Grid Container Properties:**\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */\n  grid-template-rows: auto 1fr auto;    /* 3 rows */\n  gap: 20px;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n}\n```\n\n**Grid Item Properties:**\n```css\n.item {\n  grid-column: 1 / 3;        /* span columns 1-2 */\n  grid-row: 2;               /* row 2 */\n  grid-area: main;           /* named area */\n}\n```\n\n**Grid vs Flexbox:**\n- **Grid**: 2D (rows + columns), complex layouts\n- **Flexbox**: 1D (row OR column), component layout\n- **Use Grid**: Page layouts, card grids\n- **Use Flexbox**: Navigation, form controls, centering",
  },
  {
    question: "What are CSS custom properties (variables) and how do you use them?",
    idealAnswer: "CSS custom properties allow you to store reusable values:\n\n**Declaration:**\n```css\n:root {\n  --primary-color: #3498db;\n  --font-size-base: 16px;\n  --spacing-unit: 8px;\n  --border-radius: 4px;\n}\n```\n\n**Usage:**\n```css\n.button {\n  background: var(--primary-color);\n  font-size: var(--font-size-base);\n  padding: calc(var(--spacing-unit) * 2);\n  border-radius: var(--border-radius);\n}\n```\n\n**Fallback Values:**\n```css\n.color {\n  color: var(--primary-color, #333); /* Fallback if not defined */\n}\n```\n\n**Dynamic Updates:**\n```css\n.theme-dark {\n  --primary-color: #2ecc71;\n}\n```\n\n**Benefits:**\n- Maintainable theming\n- Dynamic updates with JavaScript\n- Reduced repetition\n- Easy dark/light mode switching",
  },
  {
    question: "Explain CSS positioning (static, relative, absolute, fixed, sticky).",
    idealAnswer: "CSS positioning controls how elements are placed in the document:\n\n**`position: static`** (default):\n- Normal document flow\n- Not affected by top/left/right/bottom\n```css\n.static { position: static; }\n```\n\n**`position: relative`**:\n- Positioned relative to its normal position\n- Space reserved in document flow\n```css\n.relative {\n  position: relative;\n  top: 10px; /* Move down 10px from normal position */\n  left: 20px; /* Move right 20px from normal position */\n}\n```\n\n**`position: absolute`**:\n- Positioned relative to nearest positioned ancestor\n- Removed from normal document flow\n```css\n.absolute {\n  position: absolute;\n  top: 0; right: 0; /* Top-right corner of parent */\n}\n```\n\n**`position: fixed`**:\n- Positioned relative to viewport\n- Stays in place when scrolling\n```css\n.fixed {\n  position: fixed;\n  bottom: 20px; right: 20px; /* Fixed position */\n}\n```\n\n**`position: sticky`**:\n- Switches between relative and fixed\n- Sticks when reaching scroll position\n```css\n.sticky {\n  position: sticky;\n  top: 0; /* Stick to top when scrolling */\n}",
  },
  {
    question: "What are CSS transitions and how do they work?",
    idealAnswer: "CSS transitions provide smooth animations between property changes:\n\n**Basic Syntax:**\n```css\n.button {\n  background: blue;\n  transition: background 0.3s ease;\n}\n.button:hover {\n  background: red; /* Smooth transition over 0.3s */\n}\n```\n\n**Multiple Properties:**\n```css\n.element {\n  transition: \n    background 0.3s ease,\n    transform 0.2s ease-in-out,\n    opacity 0.5s linear;\n}\n```\n\n**Shorthand Properties:**\n```css\n.element {\n  transition: all 0.3s ease; /* All animatable properties */\n  transition: transform 0.2s; /* Duration defaults to 0s */\n}\n```\n\n**Timing Functions:**\n- `ease`: Slow start/end, fast middle (default)\n- `linear`: Constant speed\n- `ease-in`: Slow start\n- `ease-out`: Slow end\n- `ease-in-out`: Slow start and end\n- `cubic-bezier()`: Custom timing curve",
  },
  {
    question: "What are CSS animations and keyframes?",
    idealAnswer: "CSS animations create complex movements using keyframes:\n\n**Defining Keyframes:**\n```css\n@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  50% {\n    transform: translateX(10px);\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n```\n\n**Applying Animation:**\n```css\n.element {\n  animation: slideIn 2s ease-in-out infinite;\n}\n```\n\n**Animation Properties:**\n```css\n.element {\n  animation-name: slideIn;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n}\n```\n\n**Multiple Animations:**\n```css\n.element {\n  animation: slideIn 2s, pulse 1s infinite;\n}\n```\n\n**Animation Events:**\n- `animationstart`: Animation begins\n- `animationend`: Animation completes\n- `animationiteration`: Each repetition",
  },
  {
    question: "What are CSS media queries and responsive design?",
    idealAnswer: "Media queries enable responsive design by applying styles based on device characteristics:\n\n**Basic Syntax:**\n```css\n@media (max-width: 768px) {\n  .container {\n    width: 100%;\n    padding: 10px;\n  }\n}\n```\n\n**Common Breakpoints:**\n```css\n/* Mobile */\n@media (max-width: 480px) { }\n\n/* Tablet */\n@media (min-width: 481px) and (max-width: 768px) { }\n\n/* Desktop */\n@media (min-width: 769px) { }\n```\n\n**Media Features:**\n```css\n/* Screen size */\n@media (min-width: 1024px) { }\n\n/* Device orientation */\n@media (orientation: portrait) { }\n\n/* Resolution */\n@media (min-resolution: 2dppx) { }\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) { }\n```\n\n**Mobile-First Approach:**\n```css\n/* Base styles (mobile) */\n.container { width: 100%; }\n\n/* Tablet and up */\n@media (min-width: 768px) {\n  .container { width: 750px; }\n}\n\n/* Desktop and up */\n@media (min-width: 1024px) {\n  .container { width: 970px; }\n}\n```",
  },
  {
    question: "What is the CSS `will-change` property?",
    idealAnswer: "The `will-change` property hints to browsers about upcoming changes for optimization:\n\n**Usage:**\n```css\n.element {\n  will-change: transform, opacity;\n}\n```\n\n**Common Values:**\n```css\n.will-change-transform {\n  will-change: transform;\n}\n\n.will-change-opacity {\n  will-change: opacity;\n}\n\n.will-change-multiple {\n  will-change: transform, opacity, top, left;\n}\n```\n\n**When to Use:**\n- Elements that will be animated\n- Elements that will change frequently\n- 3D transforms and opacity changes\n\n**When NOT to Use:**\n- Don't apply to too many elements\n- Remove when animation completes\n- Don't use for static content\n\n**Best Practices:**\n```css\n/* Apply before animation */\n.element:hover {\n  will-change: transform;\n}\n\n/* Remove after animation */\n.element:not(:hover) {\n  will-change: auto;\n}\n```\n\n**Benefits:**\n- Smoother animations\n- Better performance\n- GPU acceleration preparation",
  },
  {
    question: "What is CSS Block Formatting Context (BFC) and why is it important?",
    idealAnswer: "A Block Formatting Context is a part of the visual CSS rendering where block boxes are laid out.\n\n**What Creates BFC:**\n- Root element (`<html>`)\n- `float: left/right`\n- `position: absolute/fixed`\n- `display: inline-block/table-cell/flex/grid`\n- `overflow: hidden/scroll/auto` (except visible)\n- `contain: layout/content/paint`\n\n**BFC Rules:**\n- Boxes are laid out vertically\nn- Margin collapse doesn't happen between parent and child\n- BFC doesn't overlap floated elements\n- BFC contains floats\n\n**Practical Uses:**\n```css\n/* Clear floats without clearfix */\n.container {\n  overflow: hidden; /* Creates BFC */\n}\n\n/* Prevent margin collapse */\n.parent {\n  overflow: hidden; /* Creates BFC */\n}\n.child {\n  margin-top: 20px; /* Won't collapse with parent */\n}\n\n/* Layout with floats */\n.sidebar {\n  float: left;\n  width: 200px;\n}\n.main {\n  overflow: hidden; /* Creates BFC, doesn't overlap sidebar */\n}\n```\n\n**Benefits:**\n- Better layout control\n- Predictable float behavior\n- Prevents margin collapse issues",
  },
  {
    question: "Explain CSS `object-fit` and `object-position` properties.",
    idealAnswer: "These properties control how replaced elements (images, videos) are sized and positioned.\n\n**`object-fit` Values:**\n```css\nimg {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;     /* Scales to cover, may crop */\n  object-fit: contain;    /* Scales to fit, may have empty space */\n  object-fit: fill;       /* Stretches to fill, may distort */\n  object-fit: none;       /* Original size, may crop */\n  object-fit: scale-down; /* Smallest of contain or none */\n}\n```\n\n**`object-position` Usage:**\n```css\nimg {\n  object-fit: cover;\n  object-position: top left;    /* Align to top-left */\n  object-position: center;      /* Center the image */\n  object-position: 50% 25%;     /* Custom positioning */\n}\n```\n\n**Common Use Cases:**\n```css\n/* Profile pictures - always circular */\n.avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\n\n/* Hero images - full coverage */\n.hero img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  object-position: center;\n}\n```\n\n**Benefits:**\n- Consistent image sizing\n- No image distortion\n- Better control over focal points",
  },
  {
    question: "What are CSS blend modes and how do they work?",
    idealAnswer: "CSS blend modes control how elements blend with their background.\n\n**`background-blend-mode`**:\n```css\n.hero {\n  background-image: url('image.jpg'), url('gradient.png');\n  background-blend-mode: multiply; /* Blends background layers */\n  background-blend-mode: screen;    /* Lighter blend */\n  background-blend-mode: overlay;   /* Combines multiply and screen */\n}\n```\n\n**`mix-blend-mode`**:\n```css\n.text {\n  mix-blend-mode: difference; /* Blends with content behind */\n  mix-blend-mode: color-dodge; /* Lighter effect */\n  mix-blend-mode: color-burn;  /* Darker effect */\n}\n```\n\n**Common Blend Modes:**\n- `multiply`: Darkens (good for shadows)\n- `screen`: Lightens (good for highlights)\n- `overlay`: Combines multiply and screen\n- `soft-light`: Subtle color changes\n- `hard-light`: Stronger version of overlay\n- `difference`: Inverts colors\n\n**Use Cases:**\n```css\n/* Duotone effect */\n.image {\n  background: blue;\n  mix-blend-mode: multiply;\n}\n\n/* Text effects */\n.heading {\n  mix-blend-mode: difference;\n  color: white;\n}\n```\n\n**Benefits:**\n- Creative visual effects\n- No need for image editing\n- Dynamic color combinations",
  },
];

const hardQuestions = [
  {
    question: "Explain CSS containment and its performance benefits.",
    idealAnswer: "CSS containment isolates parts of the page for performance optimization:\n\n**Types of Containment:**\n```css\n/* Layout containment */\n.contain-layout {\n  contain: layout;\n  /* Browser knows layout won't affect outside */\n}\n\n/* Paint containment */\n.contain-paint {\n  contain: paint;\n  /* Browser knows content won't overflow */\n}\n\n/* Size containment */\n.contain-size {\n  contain: size;\n  /* Browser knows dimensions won't change */\n}\n\n/* Style containment */\n.contain-style {\n  contain: style;\n  /* Counter values won't affect outside */\n}\n```\n\n**Strict Containment:**\n```css\n.strict {\n  contain: strict; /* layout, paint, size */\n}\n\n/* Modern equivalent */\n.strict {\n  contain: layout paint size;\n}\n```\n\n**Performance Benefits:**\n- **Reduced Reflows**: Browser limits layout calculations\n- **Optimized Painting**: Isolates paint operations\n- **Better Scrolling**: Improves scroll performance\n- **Memory Efficiency**: Reduces memory usage\n\n**Use Cases:**\n- Widgets and components\n- Social media feeds\n- Chat applications\n- Image galleries",
  },
  {
    question: "What are CSS Houdini and the Paint API?",
    idealAnswer: "CSS Houdini exposes browser rendering engines to developers:\n\n**What is Houdini?**\n- Low-level CSS engine APIs\n- Create custom CSS features\n- Better performance than polyfills\n- Future of CSS extensibility\n\n**Paint API Example:**\n```css\n/* Register custom paint worklet */\nCSS.paintWorklet.addModule('paint-worklet.js');\n\n/* Use in CSS */\n.element {\n  background: paint(myPattern);\n  --pattern-color: #3498db;\n  --pattern-size: 20px;\n}\n```\n\n**Paint Worklet (paint-worklet.js):**\n```js\nregisterPaint('myPattern', class {\n  static get inputProperties() {\n    return ['--pattern-color', '--pattern-size'];\n  }\n  \n  paint(ctx, size, properties) {\n    const color = properties.get('--pattern-color').toString();\n    const patternSize = properties.get('--pattern-size').toNumber();\n    \n    ctx.fillStyle = color;\n    for (let x = 0; x < size.width; x += patternSize) {\n      for (let y = 0; y < size.height; y += patternSize) {\n        ctx.fillRect(x, y, patternSize/2, patternSize/2);\n      }\n    }\n  }\n});\n```\n\n**Other Houdini APIs:**\n- **Layout API**: Custom layout algorithms\n- **Animation API**: Enhanced animations\n- **Typed OM**: Better CSS object model",
  },
  {
    question: "Explain CSS Grid subgrid and its use cases.",
    idealAnswer: "CSS subgrid allows nested grids to inherit parent grid lines:\n\n**Basic Subgrid:**\n```css\n.parent {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n\n.child {\n  display: grid;\n  grid-template-columns: subgrid; /* Inherits parent columns */\n  grid-column: 1 / -1; /* Spans all parent columns */\n}\n```\n\n**Row Subgrid:**\n```css\n.child {\n  display: grid;\n  grid-template-rows: subgrid; /* Inherits parent rows */\n}\n```\n\n**Both Dimensions:**\n```css\n.child {\n  display: grid;\n  grid-template: subgrid / subgrid;\n}\n```\n\n**Use Cases:**\n- **Card layouts**: Align content across cards\n- **Form sections**: Consistent field alignment\n- **Navigation menus**: Nested menu alignment\n- **Data tables**: Complex table structures\n\n**Example - Card Layout:**\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: subgrid;\n  grid-column: span 1;\n}\n\n.card-header { grid-row: 1; }\n.card-content { grid-row: 2; }\n.card-footer { grid-row: 3; }\n```",
  },
  {
    question: "What are CSS container queries and how do they work?",
    idealAnswer: "Container queries apply styles based on parent container size, not viewport:\n\n**Setup Container:**\n```css\n.card-container {\n  container-type: inline-size; /* Respond to width */\n  container-type: size;       /* Respond to width and height */\n  container-name: card;       /* Optional naming */\n}\n```\n\n**Container Queries:**\n```css\n/* Query container size */\n@container (min-width: 400px) {\n  .card-title {\n    font-size: 1.5rem;\n  }\n}\n\n/* Named container query */\n@container card (min-width: 600px) {\n  .card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n/* Container orientation */\n@container (orientation: portrait) {\n  .card {\n    flex-direction: column;\n  }\n}\n```\n\n**Use Cases:**\n- **Component-based design**: Responsive components\n- **Card layouts**: Different layouts based on container\n- **Sidebars**: Adaptive navigation\n- **Widgets**: Context-aware widgets\n\n**Example - Responsive Card:**\n```css\n.sidebar {\n  container-type: inline-size;\n}\n\n@container (min-width: 300px) {\n  .widget {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@container (min-width: 500px) {\n  .widget {\n    grid-template-columns: 1fr 2fr 1fr;\n  }\n}\n```",
  },
  {
    question: "Explain CSS cascade layers and specificity management.",
    idealAnswer: "CSS cascade layers control specificity and cascade order:\n\n**Defining Layers:**\n```css\n/* Define layer order */\n@layer reset, base, components, utilities;\n\n/* Add to layers */\n@layer reset {\n  * { margin: 0; padding: 0; }\n}\n\n@layer base {\n  body { font-family: system-ui; }\n}\n\n@layer components {\n  .button { background: blue; }\n}\n\n@layer utilities {\n  .bg-red { background: red !important; }\n}\n```\n\n**Unlayered Styles:**\n```css\n/* Unlayered styles have highest specificity */\n.unlayered {\n  color: green; /* Wins over layered styles */\n}\n```\n\n**Nested Layers:**\n```css\n@layer components {\n  @layer buttons {\n    .btn { /* components.buttons */ }\n  }\n  \n  @layer forms {\n    .input { /* components.forms */ }\n  }\n}\n```\n\n**Benefits:**\n- **Specificity Control**: Override without !important\n- **Organization**: Clear structure for styles\n- **Maintenance**: Easier to manage large codebases\n- **Third-party CSS**: Isolate external styles",
  },
  {
    question: "What are CSS logical properties and writing modes?",
    idealAnswer: "Logical properties adapt to different writing directions:\n\n**Physical vs Logical:**\n```css\n/* Physical properties */\n.physical {\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-top: 10px;\n  border-bottom: 1px solid;\n}\n\n/* Logical properties */\n.logical {\n  margin-inline: 20px;  /* left + right */\n  margin-block: 10px;    /* top + bottom */\n  padding-block-start: 10px;  /* top */\n  border-block-end: 1px solid; /* bottom */\n}\n```\n\n**Writing Modes:**\n```css\n.horizontal-tb {\n  writing-mode: horizontal-tb; /* Default */\n}\n\n.vertical-rl {\n  writing-mode: vertical-rl; /* Right to left */\n}\n\n.vertical-lr {\n  writing-mode: vertical-lr; /* Left to right */\n}\n```\n\n**Text Direction:**\n```css\n.ltr {\n  direction: ltr; /* Left to right */\n}\n\n.rtl {\n  direction: rtl; /* Right to left */\n}\n```\n\n**Logical Dimensions:**\n```css\n.container {\n  inline-size: 100%;  /* width in horizontal, height in vertical */\n  block-size: 200px;  /* height in horizontal, width in vertical */\n  max-inline-size: 800px;\n  min-block-size: 100px;\n}\n```\n\n**Use Cases:**\n- Internationalization (i18n)\n- RTL language support\n- Vertical layouts\n- Responsive design",
  },
  {
    question: "Explain CSS scroll-driven animations and the Scroll Timeline API.",
    idealAnswer: "Scroll-driven animations link animation progress to scroll position:\n\n**Scroll Timeline Setup:**\n```css\n/* Define scroll timeline */\n@scroll-timeline scroll-timeline {\n  source: auto; /* viewport or element */\n  orientation: vertical; /* scroll direction */\n  scroll-offsets: 0%, 100%; /* animation range */\n}\n\n/* Apply to animation */\n.element {\n  animation: move 2s linear;\n  animation-timeline: scroll-timeline;\n}\n```\n\n**Named Scroll Progress Timeline:**\n```css\n@scroll-timeline progress-timeline(block 100px, block 200px) {\n  /* Animates between 100px and 200px scroll position */\n}\n\n.parallax {\n  animation: slide 1s linear;\n  animation-timeline: progress-timeline;\n}\n```\n\n**View Timeline:**\n```css\n@view-timeline view-timeline(block) {\n  /* Animates while element is in view */\n}\n\n.fade-in {\n  animation: fade 1s ease;\n  animation-timeline: view-timeline;\n}\n```\n\n**Animation Keyframes:**\n```css\n@keyframes move {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(100px); }\n}\n\n@keyframes fade {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n```\n\n**Use Cases:**\n- **Parallax effects**: Background scrolling\n- **Progress indicators**: Scroll progress\n- **Reveal animations**: Content on scroll\n- **Sticky headers**: Animated headers",
  },
  {
    question: "What are CSS `:has()` selector and its practical applications?",
    idealAnswer: "The `:has()` selector is the parent selector, allowing you to select elements based on their children.\n\n**Basic Syntax:**\n```css\n/* Select div that contains a p element */\ndiv:has(p) {\n  border: 2px solid blue;\n}\n\n/* Select article that has an h2 followed by p */\narticle:has(h2 + p) {\n  margin-bottom: 2rem;\n}\n```\n\n**Practical Use Cases:**\n```css\n/* Form validation - style fieldset with errors */\nfieldset:has(.error) {\n  border-color: red;\n}\n\n/* Card layouts - different styles based on content */\n.card:has(img) {\n  display: flex;\n  flex-direction: column;\n}\n\n.card:has(ul) {\n  padding-left: 1rem;\n}\n\n/* Navigation - highlight active section */\n.nav:has(.active) {\n  background: #f0f0f0;\n}\n```\n\n**Advanced Selectors:**\n```css\n/* Multiple conditions */\n.container:has(h1):has(p) {\n  /* Contains both h1 and p */\n}\n\n/* Negation with :has() */\n.card:not(:has(.badge)) {\n  /* Cards without badges */\n}\n\n/* Nested :has() */\n.sidebar:has(.menu:has(.active)) {\n  /* Sidebar with active menu item */\n}\n```\n\n**Benefits:**\n- Eliminates need for JavaScript\n- Better semantic styling\n- Reduced class dependencies\n- More maintainable code",
  },
  {
    question: "Explain CSS `@property` at-rule and custom property registration.",
    idealAnswer: "The `@property` at-rule allows registration of CSS custom properties with type checking and default values.\n\n**Basic Registration:**\n```css\n@property --primary-color {\n  syntax: '<color>';\n  inherits: false;\n  initial-value: #3498db;\n}\n\n@property --spacing-unit {\n  syntax: '<length>';\n  inherits: true;\n  initial-value: 8px;\n}\n```\n\n**Syntax Types:**\n```css\n/* Color values */\n@property --theme-color {\n  syntax: '<color>';\n  inherits: true;\n  initial-value: blue;\n}\n\n/* Length values */\n@property --border-width {\n  syntax: '<length-percentage>';\n  inherits: false;\n  initial-value: 2px;\n}\n\n/* Number values */\n@property --scale {\n  syntax: '<number>';\n  inherits: false;\n  initial-value: 1;\n}\n\n/* Custom syntax */\n@property --direction {\n  syntax: 'left | right | center';\n  inherits: false;\n  initial-value: left;\n}\n```\n\n**Benefits:**\n```css\n/* Type checking prevents invalid values */\n.button {\n  background: var(--primary-color); /* Only accepts colors */\n  transform: scale(var(--scale));   /* Only accepts numbers */\n}\n\n/* Animation support */\n@keyframes pulse {\n  0% { --scale: 1; }\n  100% { --scale: 1.2; }\n}\n\n.element {\n  animation: pulse 2s ease-in-out;\n  transform: scale(var(--scale));\n}\n```\n\n**Use Cases:**\n- Design system tokens\n- Component theming\n- Animation variables\n- Type safety in CSS",
  },
  {
    question: "What are CSS `@starting-style` and `@position-try` at-rules?",
    idealAnswer: "These are modern CSS at-rules for better animation and positioning control.\n\n**`@starting-style` for Entry Animations:**\n```css\n/* Define starting state for animations */\n@starting-style {\n  .dialog {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n\n/* Transition from starting style */\n.dialog {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 0.3s, transform 0.3s;\n}\n\n/* Works with display: none */\n.dialog[open] {\n  display: block;\n}\n```\n\n**`@position-try` for Anchor Positioning:**\n```css\n/* Define fallback positions */\n@position-try --bottom-left {\n  position: absolute;\n  bottom: anchor(top);\n  left: anchor(left);\n}\n\n@position-try --top-right {\n  position: absolute;\n  top: anchor(bottom);\n  right: anchor(right);\n}\n\n/* Use with position-try-fallbacks */\n.tooltip {\n  position: absolute;\n  top: anchor(bottom);\n  left: anchor(left);\n  position-try-fallbacks: --bottom-left, --top-right;\n}\n```\n\n**Anchor Positioning Setup:**\n```css\n/* Define anchor */\n.button {\n  anchor-name: --my-button;\n}\n\n/* Position element relative to anchor */\n.tooltip {\n  position: absolute;\n  top: anchor(bottom);\n  left: anchor(center);\n  position-anchor: --my-button;\n}\n```\n\n**Benefits:**\n- Smooth entry animations\n- Better popover positioning\n- Fallback positioning strategies\n- Reduced JavaScript dependency",
  },
  {
    question: "Explain CSS `@scope` at-rule and style encapsulation.",
    idealAnswer: "The `@scope` at-rule limits the reach of CSS selectors to specific DOM subtrees.\n\n**Basic Scoping:**\n```css\n/* Scope styles to .component subtree */\n@scope (.component) {\n  /* These styles only apply within .component */\n  h1 { color: blue; }\n  p { margin: 1rem; }\n  .button { background: red; }\n}\n\n/* Equivalent to: */\n.component h1,\n.component .component h1,\n.component .component .component h1 { /* etc */ }\n```\n\n**Scope with Limits:**\n```css\n/* Scope to .card but exclude .card-header */\n@scope (.card) to (.card-content) {\n  h2 { font-size: 1.5rem; }\n  p { line-height: 1.6; }\n}\n```\n\n**Multiple Scopes:**\n```css\n/* Different styles for different contexts */\n@scope (.sidebar) {\n  .nav { flex-direction: column; }\n}\n\n@scope (.header) {\n  .nav { flex-direction: row; }\n}\n```\n\n**Scope with Pseudo-classes:**\n```css\n@scope (.form:valid) {\n  .submit-button {\n    background: green;\n  }\n}\n\n@scope (.form:invalid) {\n  .submit-button {\n    background: gray;\n  }\n}\n```\n\n**Benefits:**\n- **Style Encapsulation**: Prevents style leakage\n- **Specificity Control**: Lower specificity than global styles\n- **Component Architecture**: Better component-based design\n- **Maintenance**: Easier to debug and maintain styles\n- **Performance**: More efficient CSS matching",
  },
  {
    question: "What are CSS trigonometric functions and their use cases?",
    idealAnswer: "CSS now supports mathematical functions like `sin()`, `cos()`, and `tan()`.\n\n**Basic Trigonometric Functions:**\n```css\n.element {\n  /* Rotate based on sine wave */\n  transform: rotate(calc(sin(var(--angle)) * 45deg));\n  \n  /* Position on circular path */\n  left: calc(cos(var(--angle)) * 100px);\n  top: calc(sin(var(--angle)) * 100px);\n}\n```\n\n**Advanced Mathematical Functions:**\n```css\n.element {\n  /* Square root */\n  width: calc(sqrt(2) * 100px);\n  \n  /* Power function */\n  font-size: calc(pow(1.2, 3) * 1rem);\n  \n  /* Hypotenuse calculation */\n  size: calc(hypot(300px, 400px)); /* 500px */\n  \n  /* Logarithmic scale */\n  opacity: calc(log(var(--value)) / 10);\n}\n```\n\n**Practical Use Cases:**\n```css\n/* Circular motion animation */\n@keyframes orbit {\n  0% {\n    --angle: 0deg;\n  }\n  100% {\n    --angle: 360deg;\n  }\n}\n\n.planet {\n  animation: orbit 10s linear infinite;\n  transform: translate(\n    calc(cos(var(--angle)) * 150px),\n    calc(sin(var(--angle)) * 150px)\n  );\n}\n\n/* Responsive golden ratio */\n.container {\n  width: 100%;\n  height: calc(100% / 1.618); /* Golden ratio */\n}\n\n/* Dynamic spacing based on screen size */\n.card {\n  margin: calc(sin(var(--scroll-progress)) * 20px);\n}\n```\n\n**Benefits:**\n- Complex animations without JavaScript\n- Mathematical layouts\n- Responsive calculations\n- Creative visual effects",
  },
];

interface QnAProps {
  questions: Array<{
    question: string;
    idealAnswer: string;
  }>;
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
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
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

interface CssInterviewQuestionsProps {
  showBackButton?: boolean;
}

export default function CssInterviewQuestions({ showBackButton = true }: CssInterviewQuestionsProps) {
  const [activeTab, setActiveTab] = useState('easy');

  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      <InterviewHeader showBackButton={showBackButton} currentLanguage="CSS" />

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
              <Brain className="w-4 h-4 text-slate-600 dark:text-slate-400" />
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
                <CardDescription>
                  Fundamental CSS concepts every developer should know
                </CardDescription>
              </CardHeader>
            </Card>
            <QnA questions={easyQuestions} />
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Target className="w-5 h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription>
                  Intermediate CSS topics for practical development
                </CardDescription>
              </CardHeader>
            </Card>
            <QnA questions={mediumQuestions} />
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <Brain className="w-5 h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription>
                  Advanced CSS concepts for senior developers
                </CardDescription>
              </CardHeader>
            </Card>
            <QnA questions={hardQuestions} />
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
          <CardDescription>Continue your CSS learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📚 Learning Plan</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                Follow our structured learning path to master CSS from basics to advanced topics.
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
                → Build responsive layouts and animations
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

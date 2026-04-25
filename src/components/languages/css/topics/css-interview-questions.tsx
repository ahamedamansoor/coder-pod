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
  Star,
  Code,
  Play
} from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';
import { WebPlaygroundModal } from '@/components/shared/playground/web-playground-modal';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

const easyQuestions = [
  {
    question: "What is the difference between `class` and `id` selectors in CSS?",
    idealAnswer: "**Class selectors** (`.classname`) can be used on multiple elements and are reusable:\n```css\n.highlight { color: blue; }\n<div class=\"highlight\">Text</div>\n<p class=\"highlight\">Text</p>\n```\n\n**ID selectors** (`#idname`) must be unique and can only be used on one element:\n```css\n#header { font-size: 24px; }\n<div id=\"header\">Header</div>\n```\n\n**Key Differences:**\n- Class: Multiple elements, reusable, lower specificity\n- ID: Single element, unique, higher specificity\n- Best practice: Use classes for styling, IDs for JavaScript hooks or anchors",
    implementation: 'class-id-selectors'
  },
  {
    question: "What are CSS specificity rules?",
    idealAnswer: "CSS specificity determines which styles are applied when multiple rules target the same element:\n\n**Specificity Hierarchy (highest to lowest):**\n1. **Inline styles**: `style=\"color: red;\"` (1000)\n2. **ID selectors**: `#header` (100)\n3. **Class selectors**: `.class` (10)\n4. **Attribute selectors**: `[type=\"text\"]` (10)\n5. **Pseudo-classes**: `:hover` (10)\n6. **Element selectors**: `div` (1)\n7. **Universal selector**: `*` (0)\n\n**Example:**\n```css\n#nav .link { color: blue; } /* Specificity: 100 + 10 = 110 */\n.nav .link { color: red; }   /* Specificity: 10 + 10 = 20 */\n```\nBlue wins due to higher specificity.",
    implementation: 'css-specificity'
  },
  {
    question: "What is the CSS box model?",
    idealAnswer: "The CSS box model describes how elements are structured and sized:\n\n**Components (from inside out):**\n1. **Content**: Actual content (text, images)\n2. **Padding**: Space between content and border\n3. **Border**: Surrounds padding and content\n4. **Margin**: Space outside the border\n\n**Width Calculation:**\n- `box-sizing: content-box` (default): width = content only\n- `box-sizing: border-box`: width = content + padding + border\n\n```css\ndiv {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n  box-sizing: border-box; /* Total width stays 200px */\n}\n```",
    implementation: 'box-model'
  },
  {
    question: "What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?",
    idealAnswer: "**`display: none`**:\n- Element completely removed from document flow\n- No space reserved\n- Not accessible to screen readers\n- `display: block` to show again\n\n**`visibility: hidden`**:\n- Element invisible but space reserved\n- Still in document flow\n- Accessible to screen readers\n- `visibility: visible` to show again\n\n**`opacity: 0`**:\n- Element transparent but space reserved\n- Still interactive (clickable)\n- Accessible to screen readers\n- `opacity: 1` to show again\n\n**Use Cases:**\n- `display: none`: Completely remove elements\n- `visibility: hidden`: Hide but maintain layout\n- `opacity: 0`: Fade effects and animations",
    implementation: 'display-visibility-opacity'
  },
  {
    question: "What are CSS pseudo-classes and pseudo-elements?",
    idealAnswer: "**Pseudo-classes** target elements based on state:\n```css\n/* State-based */\n:hover { } /* Mouse over */\n:focus { } /* Element focused */\n:active { } /* Being clicked */\n\n/* Position-based */\n:first-child { } /* First child */\n:last-child { }  /* Last child */\n:nth-child(2) { } /* 2nd child */\n```\n\n**Pseudo-elements** target specific parts of elements:\n```css\n::before { content: \"★\"; } /* Before content */\n::after { content: \"★\"; }  /* After content */\n::first-letter { } /* First letter */\n::first-line { }   /* First line */\n::selection { }    /* Selected text */\n```\n\n**Syntax:**\n- Pseudo-classes: Single colon (`:`)\n- Pseudo-elements: Double colon (`::`) in CSS3",
    implementation: 'pseudo-classes-elements'
  },
  {
    question: "What is the difference between `em`, `rem`, `px`, and `%` units in CSS?",
    idealAnswer: "**`px` (pixels)**:\n- Absolute unit, fixed size\n- Not scalable, consistent across devices\n```css\nfont-size: 16px;\n```\n\n**`em` (relative to parent)**:\n- Relative to parent element's font-size\n- Can compound unexpectedly\n```css\n.child { font-size: 1.2em; } /* 1.2 × parent font-size */\n```\n\n**`rem` (relative to root)**:\n- Relative to root (`html`) element's font-size\n- Predictable, doesn't compound\n```css\n.child { font-size: 1.2rem; } /* 1.2 × root font-size */\n```\n\n**`%` (percentage)**:\n- Relative to parent element's same property\n- Varies by property (width vs font-size)\n```css\nwidth: 50%; /* 50% of parent width */\nfont-size: 120%; /* 120% of parent font-size */\n```\n\n**Best Practice**: Use `rem` for typography, `%` for layouts.",
  },
  {
    question: "What are CSS combinators?",
    idealAnswer: "CSS combinators define relationships between selectors:\n\n**Descendant selector** (space):\n```css\ndiv p { color: blue; } /* p inside div */\n```\n\n**Child selector** (`>`):\n```css\ndiv > p { color: red; } /* direct child p of div */\n```\n\n**Adjacent sibling selector** (`+`):\n```css\nh1 + p { margin-top: 0; } /* p immediately after h1 */\n```\n\n**General sibling selector** (`~`):\n```css\nh1 ~ p { color: gray; } /* any p after h1 */\n```\n\n**Example Usage:**\n```css\nnav > ul > li > a { /* Direct navigation links */\n  text-decoration: none;\n}\nh2 + p { /* First paragraph after heading */\n  font-weight: bold;\n}\n```",
    implementation: 'css-combinators'
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
    implementation: 'margin-padding'
  },
  {
    question: "What is the CSS `!important` declaration and when should you use it?",
    idealAnswer: "**`!important`** overrides all other CSS declarations:\n```css\n.example {\n  color: red !important; /* This will always win */\n}\n```\n\n**Specificity Order:**\n1. `!important` rules\n2. Inline styles\n3. ID selectors\n4. Class selectors\n5. Element selectors\n\n**When to Use:**\n- Utility classes that must win\n- Overriding third-party CSS\n- Emergency fixes (temporary)\n- Print styles\n\n**When NOT to Use:**\n- Regular styling (bad practice)\n- When specificity works better\n- In component-based development\n\n**Better Alternatives:**\n```css\n/* Use higher specificity instead */\n.parent .child { color: red; }\n\n/* Use CSS Modules or scoped styles */\n```\n\n**Best Practice**: Avoid `!important` unless absolutely necessary.",
  },
  {
    question: "What are CSS attribute selectors?",
    idealAnswer: "Attribute selectors target elements based on their attributes:\n\n**Basic Attribute Selector**:\n```css\n[type=\"text\"] { border: 1px solid #ccc; }\n```\n\n**Attribute Contains Value**:\n```css\n[class*=\"btn\"] { /* class contains \"btn\" */\n  cursor: pointer;\n}\n```\n\n**Attribute Starts With**:\n```css\n[href^=\"https\"] { /* External links */\n  color: #0066cc;\n}\n```\n\n**Attribute Ends With**:\n```css\n[src$=\".pdf\"] { /* PDF files */\n  border: 1px solid red;\n}\n```\n\n**Attribute Contains Word**:\n```css\n[class~=\"active\"] { /* class contains word \"active\" */\n  background: yellow;\n}\n```\n\n**Use Cases:**\n- Styling form inputs by type\n- External/internal link styling\n- File type indicators\n- Component state styling",
    implementation: 'attribute-selectors'
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
    implementation: 'flexbox'
  },
  {
    question: "What is CSS Grid and how does it differ from Flexbox?",
    idealAnswer: "CSS Grid is a two-dimensional layout system for creating complex layouts.\n\n**Grid Container Properties:**\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */\n  grid-template-rows: auto 1fr auto;    /* 3 rows */\n  gap: 20px;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main aside\"\n    \"footer footer footer\";\n}\n```\n\n**Grid Item Properties:**\n```css\n.item {\n  grid-column: 1 / 3;        /* span columns 1-2 */\n  grid-row: 2;               /* row 2 */\n  grid-area: main;           /* named area */\n}\n```\n\n**Grid vs Flexbox:**\n- **Grid**: 2D (rows + columns), complex layouts\n- **Flexbox**: 1D (row OR column), component layout\n- **Use Grid**: Page layouts, card grids\n- **Use Flexbox**: Navigation, form controls, centering",
    implementation: 'css-grid'
  },
  {
    question: "What are CSS custom properties (variables) and how do you use them?",
    idealAnswer: "CSS custom properties allow you to store reusable values:\n\n**Declaration:**\n```css\n:root {\n  --primary-color: #3498db;\n  --font-size-base: 16px;\n  --spacing-unit: 8px;\n  --border-radius: 4px;\n}\n```\n\n**Usage:**\n```css\n.button {\n  background: var(--primary-color);\n  font-size: var(--font-size-base);\n  padding: calc(var(--spacing-unit) * 2);\n  border-radius: var(--border-radius);\n}\n```\n\n**Fallback Values:**\n```css\n.color {\n  color: var(--primary-color, #333); /* Fallback if not defined */\n}\n```\n\n**Dynamic Updates:**\n```css\n.theme-dark {\n  --primary-color: #2ecc71;\n}\n```\n\n**Benefits:**\n- Maintainable theming\n- Dynamic updates with JavaScript\n- Reduced repetition\n- Easy dark/light mode switching",
    implementation: 'css-variables'
  },
  {
    question: "Explain CSS positioning (static, relative, absolute, fixed, sticky).",
    idealAnswer: "CSS positioning controls how elements are placed in the document:\n\n**`position: static`** (default):\n- Normal document flow\n- Not affected by top/left/right/bottom\n```css\n.static { position: static; }\n```\n\n**`position: relative`**:\n- Positioned relative to its normal position\n- Space reserved in document flow\n```css\n.relative {\n  position: relative;\n  top: 10px; /* Move down 10px from normal position */\n  left: 20px; /* Move right 20px from normal position */\n}\n```\n\n**`position: absolute`**:\n- Positioned relative to nearest positioned ancestor\n- Removed from normal document flow\n```css\n.absolute {\n  position: absolute;\n  top: 0; right: 0; /* Top-right corner of parent */\n}\n```\n\n**`position: fixed`**:\n- Positioned relative to viewport\n- Stays in place when scrolling\n```css\n.fixed {\n  position: fixed;\n  bottom: 20px; right: 20px; /* Fixed position */\n}\n```\n\n**`position: sticky`**:\n- Switches between relative and fixed\n- Sticks when reaching scroll position\n```css\n.sticky {\n  position: sticky;\n  top: 0; /* Stick to top when scrolling */\n}",
    implementation: 'css-positioning'
  },
  {
    question: "What are CSS transitions and how do they work?",
    idealAnswer: "CSS transitions provide smooth animations between property changes:\n\n**Basic Syntax:**\n```css\n.button {\n  background: blue;\n  transition: background 0.3s ease;\n}\n.button:hover {\n  background: red; /* Smooth transition over 0.3s */\n}\n```\n\n**Multiple Properties:**\n```css\n.element {\n  transition: \n    background 0.3s ease,\n    transform 0.2s ease-in-out,\n    opacity 0.5s linear;\n}\n```\n\n**Shorthand Properties:**\n```css\n.element {\n  transition: all 0.3s ease; /* All animatable properties */\n  transition: transform 0.2s; /* Duration defaults to 0s */\n}\n```\n\n**Timing Functions:**\n- `ease`: Slow start/end, fast middle (default)\n- `linear`: Constant speed\n- `ease-in`: Slow start\n- `ease-out`: Slow end\n- `ease-in-out`: Slow start and end\n- `cubic-bezier()`: Custom timing curve",
    implementation: 'css-transitions'
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
    implementation: 'css-has'
  },
  {
    question: "Explain CSS `@property` at-rule and custom property registration.",
    idealAnswer: "The `@property` at-rule allows registration of CSS custom properties with type checking and default values.\n\n**Basic Registration:**\n```css\n@property --primary-color {\n  syntax: '<color>';\n  inherits: false;\n  initial-value: #3498db;\n}\n\n@property --spacing-unit {\n  syntax: '<length>';\n  inherits: true;\n  initial-value: 8px;\n}\n```\n\n**Syntax Types:**\n```css\n/* Color values */\n@property --theme-color {\n  syntax: '<color>';\n  inherits: true;\n  initial-value: blue;\n}\n\n/* Length values */\n@property --border-width {\n  syntax: '<length-percentage>';\n  inherits: false;\n  initial-value: 2px;\n}\n\n/* Number values */\n@property --scale {\n  syntax: '<number>';\n  inherits: false;\n  initial-value: 1;\n}\n\n/* Custom syntax */\n@property --direction {\n  syntax: 'left | right | center';\n  inherits: false;\n  initial-value: left;\n}\n```\n\n**Benefits:**\n```css\n/* Type checking prevents invalid values */\n.button {\n  background: var(--primary-color); /* Only accepts colors */\n  transform: scale(var(--scale));   /* Only accepts numbers */\n}\n\n/* Animation support */\n@keyframes pulse {\n  0% { --scale: 1; }\n  100% { --scale: 1.2; }\n}\n\n.element {\n  animation: pulse 2s ease-in-out;\n  transform: scale(var(--scale));\n}\n```\n\n**Use Cases:**\n- Design system tokens\n- Component theming\n- Animation variables\n- Type safety in CSS",
    implementation: 'css-at-rules'
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
  {
    question: "What is the CSS `:where()` pseudo-class and how does it work?",
    idealAnswer: "The `:where()` pseudo-class creates selector lists with zero specificity.\n\n**Basic Syntax:**\n```css\n/* Normal selector - higher specificity */\n.btn.btn-primary { /* Specificity: 20 */\n  background: blue;\n}\n\n/* :where() selector - zero specificity for classes inside */\n.btn:where(.btn-primary) { /* Specificity: 10 */\n  background: blue;\n}\n```\n\n**Key Benefits:**\n```css\n/* Easy to override styles */\n#my-btn { /* Specificity: 100 - overrides :where() */\n  background: red;\n}\n\n/* Multiple selectors with same specificity */\n:where(.btn, .button, .clickable) {\n  padding: 8px 16px;\n  border: none;\n}\n```\n\n**Use Cases:**\n- Reset styles that should be easily overridden\n- Utility classes that need low specificity\n- Component libraries\n- CSS frameworks\n\n**vs :is()**:\n- `:where()` - Zero specificity\n- `:is()` - Takes highest specificity of selector list",
    implementation: 'css-where'
  },
  {
    question: "What is the CSS `:not()` pseudo-class and how do you use it?",
    idealAnswer: "The `:not()` pseudo-class selects elements that don't match specific selectors.\n\n**Basic Syntax:**\n```css\n/* Select all buttons except primary */\nbutton:not(.btn-primary) {\n  background: gray;\n}\n\n/* Select all inputs except disabled */\ninput:not(:disabled) {\n  cursor: pointer;\n}\n```\n\n**Advanced Usage:**\n```css\n/* Chain multiple :not() selectors */\n.card:not(.featured):not(.special) {\n  opacity: 0.8;\n}\n\n/* Exclude by position */\nli:not(:first-child):not(:last-child) {\n  margin: 0 10px;\n}\n\n/* Exclude by attributes */\na:not([target=\"_blank\"]) {\n  color: blue; /* Internal links only */\n}\n```\n\n**Practical Examples:**\n```css\n/* Form validation */\n.form-input:not(:invalid):not(:disabled) {\n  border-color: green;\n}\n\n/* Navigation */\n.nav-item:not(.active):hover {\n  background: #f0f0f0;\n}\n\n/* Exclude complex selectors */\n.container:not(:has(.error)) {\n  border-color: green;\n}\n```\n\n**Browser Support:**\n- Supported in all modern browsers\n- Can now accept selector lists (CSS4)\n- Cannot nest :not() in older browsers",
    implementation: 'css-not'
  },
];

const implementationQuestions = [
  {
    question: "Create a responsive card layout using CSS Grid",
    idealAnswer: "To create a responsive card layout with CSS Grid:\n\n1. Use `display: grid` on the container\n2. Define responsive columns with `repeat(auto-fit, minmax())`\n3. Add gap for spacing\n4. Make cards responsive with media queries\n\n```css\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n  transition: transform 0.2s;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n}\n```",
    implementation: 'responsive-cards'
  },
  {
    question: "Build a navigation bar with Flexbox",
    idealAnswer: "To create a navigation bar using Flexbox:\n\n1. Use `display: flex` on the nav container\n2. Use `justify-content: space-between` for logo/menu alignment\n3. Center items vertically with `align-items: center`\n4. Add responsive behavior with mobile menu\n\n```css\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #333;\n}\n\n.nav-links {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n\n.nav-links a:hover {\n  background: rgba(255,255,255,0.1);\n}\n```",
    implementation: 'flexbox-nav'
  },
  {
    question: "Create CSS animations for a loading spinner",
    idealAnswer: "To create a loading spinner with CSS animations:\n\n1. Use `@keyframes` to define rotation\n2. Apply with `animation` property\n3. Create visual effects with borders\n4. Add smooth transitions\n\n```css\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Pulse spinner variant */\n.pulse-spinner {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.1); opacity: 0.7; }\n}\n```",
    implementation: 'loading-spinner'
  },
  {
    question: "Implement a dark mode toggle with CSS variables",
    idealAnswer: "To implement dark mode using CSS custom properties:\n\n1. Define CSS variables for colors\n2. Create a dark theme class\n3. Use `var()` function throughout\n4. Add smooth transitions\n\n```css\n:root {\n  --bg-color: #ffffff;\n  --text-color: #333333;\n  --primary-color: #3498db;\n  --card-bg: #f8f9fa;\n  --border-color: #dee2e6;\n}\n\nbody.dark-mode {\n  --bg-color: #1a1a1a;\n  --text-color: #ffffff;\n  --primary-color: #5dade2;\n  --card-bg: #2d2d2d;\n  --border-color: #404040;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n  transition: background-color 0.3s, color 0.3s;\n}\n```",
    implementation: 'dark-mode'
  },
  {
    question: "Create a dropdown menu with pure CSS",
    idealAnswer: "To create a dropdown menu without JavaScript:\n\n1. Use checkbox or :hover pseudo-class\n2. Position dropdown absolutely\n3. Hide/show with opacity or display\n4. Add smooth transitions\n\n```css\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: white;\n  min-width: 200px;\n  box-shadow: 0 8px 16px rgba(0,0,0,0.1);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all 0.3s;\n}\n\n.dropdown:hover .dropdown-content {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.dropdown-content a {\n  display: block;\n  padding: 12px 16px;\n  color: #333;\n  text-decoration: none;\n}\n\n.dropdown-content a:hover {\n  background: #f1f1f1;\n}\n```",
    implementation: 'dropdown-menu'
  },
  {
    question: "Build a masonry layout with CSS Grid",
    idealAnswer: "To create a masonry layout:\n\n1. Use CSS Grid with auto-fit\n2. Vary item heights naturally\n3. Use grid-auto-flow: dense\n4. Add responsive breakpoints\n\n```css\n.masonry {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: 20px;\n  gap: 1rem;\n  grid-auto-flow: dense;\n}\n\n.masonry-item {\n  background: #f0f0f0;\n  border-radius: 8px;\n  padding: 1rem;\n}\n\n/* Varying heights */\n.masonry-item:nth-child(2n) {\n  grid-row: span 8;\n}\n\n.masonry-item:nth-child(3n) {\n  grid-row: span 10;\n}\n\n.masonry-item:nth-child(4n) {\n  grid-row: span 6;\n}\n\n.masonry-item:nth-child(5n) {\n  grid-row: span 12;\n}\n```",
    implementation: 'masonry-layout'
  },
  {
    question: "Create a progress bar with CSS animations",
    idealAnswer: "To create an animated progress bar:\n\n1. Use background gradients\n2. Animate with keyframes\n3. Add striped pattern\n4. Include percentage labels\n\n```css\n.progress-bar {\n  width: 100%;\n  height: 30px;\n  background: #e0e0e0;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.progress-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #4CAF50, #45a049);\n  background-size: 20px 20px;\n  background-image: linear-gradient(\n    45deg,\n    rgba(255,255,255,.15) 25%,\n    transparent 25%,\n    transparent 50%,\n    rgba(255,255,255,.15) 50%,\n    rgba(255,255,255,.15) 75%,\n    transparent 75%,\n    transparent\n  );\n  animation: progress-animation 2s linear infinite;\n  border-radius: 15px;\n}\n\n@keyframes progress-animation {\n  0% { background-position: 0 0; }\n  100% { background-position: 20px 0; }\n}\n\n.progress-75 {\n  width: 75%;\n}\n```",
    implementation: 'progress-bar'
  },
  {
    question: "Implement a tooltip component with CSS",
    idealAnswer: "To create a tooltip using only CSS:\n\n1. Use ::before and ::after pseudo-elements\n2. Position absolutely relative to parent\n3. Show on hover with opacity transition\n4. Add arrow with borders\n\n```css\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n```",
    implementation: 'tooltip'
  },
  {
    question: "Create scroll-driven animations with CSS",
    idealAnswer: "To create scroll-driven animations:\n\n1. Use @scroll-timeline for scroll-based animations\n2. Use animation-timeline to link animations to scroll\n3. Create parallax effects with transform\n4. Use view() timeline for element visibility\n\n```css\n@scroll-timeline scroll-x {\n  source: selector(#scroll-container);\n  orientation: horizontal;\n}\n\n.parallax {\n  animation: move 10s linear;\n  animation-timeline: scroll-x;\n}\n\n@keyframes move {\n  to { transform: translateX(-100%); }\n}\n\n.fade-in {\n  animation: fade 1s forwards;\n  animation-timeline: view();\n}\n\n@keyframes fade {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n```",
    implementation: 'scroll-animations'
  },
  {
    question: "Build glassmorphism design elements",
    idealAnswer: "To create glassmorphism effects:\n\n1. Use backdrop-filter: blur() for frosted glass\n2. Use rgba colors with transparency\n3. Add subtle borders and shadows\n4. Combine with gradients for depth\n\n```css\n.glass {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n.glass-dark {\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.glass-card {\n  background: linear-gradient(\n    135deg,\n    rgba(255, 255, 255, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 100%\n  );\n  backdrop-filter: blur(20px);\n}\n```",
    implementation: 'glassmorphism'
  }
];

interface QnAProps {
  questions: Array<{
    question: string;
    idealAnswer: string;
    implementation?: string;
  }>;
}

function QnA({ questions, isImplementation = false }: QnAProps & { isImplementation?: boolean }) {
  const { openWithContent } = useWebPlayground();

  const openPlayground = (type: string) => {
    let html = '';
    let css = '';
    
    switch(type) {
      case 'class-id-selectors':
        html = `<div class="demo-container">
  <h2>Class vs ID Selectors</h2>
  
  <!-- ID Selector Example -->
  <div id="unique-header" class="header-box">
    <h3>ID Selector (#unique-header)</h3>
    <p>This element uses an ID - it should be unique on the page</p>
  </div>
  
  <!-- Class Selector Examples -->
  <div class="highlight-box">
    <h3>Class Selector (.highlight-box)</h3>
    <p>This element uses a class - multiple elements can share this class</p>
  </div>
  
  <div class="highlight-box">
    <h3>Another Class Element</h3>
    <p>This also uses .highlight-box class - classes are reusable!</p>
  </div>
  
  <!-- Combined Selectors -->
  <div id="special" class="highlight-box">
    <h3>Both ID and Class</h3>
    <p>This has both #special and .highlight-box</p>
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --accent-1: #ff6b6b;
  --accent-2: #4ecdc4;
  --accent-3: #95e77e;
  --shadow: rgba(0, 0, 0, 0.1);
  --border: #e0e0e0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.3);
    --border: #404040;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
}

.demo-container h2 {
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

/* ID Selector - Higher specificity */
#unique-header {
  background: var(--accent-1);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid var(--accent-1);
}

/* Class Selector - Lower specificity */
.highlight-box {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid var(--accent-2);
}

.highlight-box:hover {
  border-color: #5ed4cc;
}

/* When both ID and class are present, ID wins */
#special.highlight-box {
  background: var(--accent-3);
  border-color: #6bc55d;
  color: #1a5f1a;
}`;
        break;
        
      case 'box-model':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS Box Model Playground</h1>
    <p class="subtitle">Drag the sliders and watch the box transform in real time.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="box" id="box">
        <div class="box-content">
          <span class="content-label">content</span>
          <span class="content-size" id="contentSize">200 × 120</span>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Content size</h3>
        <div class="row">
          <label>Width <span class="val" id="wVal">200px</span></label>
          <input type="range" id="w" min="60" max="320" value="200">
        </div>
        <div class="row">
          <label>Height <span class="val" id="hVal">120px</span></label>
          <input type="range" id="h" min="40" max="220" value="120">
        </div>
      </div>

      <div class="panel-section">
        <h3>Spacing</h3>
        <div class="row">
          <label class="lbl-padding">Padding <span class="val" id="pVal">20px</span></label>
          <input type="range" id="p" min="0" max="60" value="20">
        </div>
        <div class="row">
          <label class="lbl-border">Border <span class="val" id="bVal">6px</span></label>
          <input type="range" id="b" min="0" max="20" value="6">
        </div>
        <div class="row">
          <label class="lbl-margin">Margin <span class="val" id="mVal">24px</span></label>
          <input type="range" id="m" min="0" max="60" value="24">
        </div>
      </div>

      <div class="panel-section">
        <h3>box-sizing</h3>
        <div class="toggle">
          <button class="toggle-btn active" data-val="content-box">content-box</button>
          <button class="toggle-btn" data-val="border-box">border-box</button>
        </div>
        <p class="hint" id="sizingHint">Width &amp; height apply to the content only.</p>
      </div>

      <div class="panel-section summary">
        <h3>Computed total</h3>
        <div class="total" id="total">280 × 200 px</div>
        <div class="formula" id="formula">200 + 2×(20 + 6 + 24) = 280</div>
      </div>

      <button class="reset" id="reset">Reset to defaults</button>
    </aside>
  </main>
</div>

<script>
(function () {
  var box = document.getElementById('box');
  var w = document.getElementById('w');
  var h = document.getElementById('h');
  var p = document.getElementById('p');
  var b = document.getElementById('b');
  var m = document.getElementById('m');
  var wVal = document.getElementById('wVal');
  var hVal = document.getElementById('hVal');
  var pVal = document.getElementById('pVal');
  var bVal = document.getElementById('bVal');
  var mVal = document.getElementById('mVal');
  var contentSize = document.getElementById('contentSize');
  var total = document.getElementById('total');
  var formula = document.getElementById('formula');
  var sizingHint = document.getElementById('sizingHint');
  var toggleBtns = document.querySelectorAll('.toggle-btn');
  var reset = document.getElementById('reset');

  var sizing = 'content-box';

  function render() {
    var wv = +w.value, hv = +h.value, pv = +p.value, bv = +b.value, mv = +m.value;

    wVal.textContent = wv + 'px';
    hVal.textContent = hv + 'px';
    pVal.textContent = pv + 'px';
    bVal.textContent = bv + 'px';
    mVal.textContent = mv + 'px';
    contentSize.textContent = wv + ' × ' + hv;

    box.style.width = wv + 'px';
    box.style.height = hv + 'px';
    box.style.padding = pv + 'px';
    box.style.borderWidth = bv + 'px';
    box.style.margin = mv + 'px';
    box.style.boxSizing = sizing;

    var totalW, totalH;
    if (sizing === 'content-box') {
      totalW = wv + 2 * (pv + bv);
      totalH = hv + 2 * (pv + bv);
      formula.textContent = wv + ' + 2×(' + pv + ' + ' + bv + ') = ' + totalW + 'px wide';
    } else {
      totalW = wv;
      totalH = hv;
      formula.textContent = 'border-box: width already includes padding + border';
    }
    total.textContent = totalW + ' × ' + totalH + ' px (+ ' + (mv * 2) + 'px margin)';
  }

  [w, h, p, b, m].forEach(function (el) { el.addEventListener('input', render); });

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleBtns.forEach(function (x) { x.classList.remove('active'); });
      btn.classList.add('active');
      sizing = btn.getAttribute('data-val');
      sizingHint.textContent = sizing === 'content-box'
        ? 'Width & height apply to the content only.'
        : 'Width & height include padding and border.';
      render();
    });
  });

  reset.addEventListener('click', function () {
    w.value = 200; h.value = 120; p.value = 20; b.value = 6; m.value = 24;
    sizing = 'content-box';
    toggleBtns.forEach(function (x) {
      x.classList.toggle('active', x.getAttribute('data-val') === 'content-box');
    });
    sizingHint.textContent = 'Width & height apply to the content only.';
    render();
  });

  render();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --content: #fde68a;
  --padding: #86efac;
  --border: #93c5fd;
  --margin: #fdba74;
  --content-deep: #b45309;
  --padding-deep: #166534;
  --border-deep: #1e40af;
  --margin-deep: #9a3412;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1100px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle { margin: 6px 0 0; color: var(--muted); font-size: 0.95rem; }

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 24px;
  align-items: start;
}

/* Stage with the visual box */
.stage {
  background: var(--panel);
  border: 1px solid rgba(148,163,184,0.15);
  border-radius: 16px;
  min-height: 460px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* The visualised box: margin = outer ring via outline trick,
   border = visible border, padding = inner gap, content = inner block. */
.box {
  width: 200px;
  height: 120px;
  padding: 20px;
  border: 6px solid var(--border-deep);
  margin: 24px;
  background: var(--padding);
  /* margin highlight */
  outline: 24px solid var(--margin);
  outline-offset: 0;
  transition: all 0.18s ease;
  position: relative;
}
.box::before {
  content: 'margin';
  position: absolute;
  top: -22px; left: 50%;
  transform: translate(-50%, -100%);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--margin-deep);
  background: var(--margin);
  padding: 2px 8px;
  border-radius: 999px;
}
.box::after {
  content: 'border';
  position: absolute;
  bottom: 100%; right: 0;
  transform: translateY(-26px);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--border-deep);
  background: var(--border);
  padding: 2px 6px;
  border-radius: 4px;
}
.box-content {
  width: 100%;
  height: 100%;
  background: var(--content);
  color: var(--content-deep);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  gap: 4px;
}
.content-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}
.content-size { font-size: 16px; }

/* Side panel */
.panel {
  background: var(--panel);
  border: 1px solid rgba(148,163,184,0.15);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.row { margin-bottom: 10px; }
.row:last-child { margin-bottom: 0; }
.row label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: var(--text);
}
.lbl-padding { color: var(--padding) !important; }
.lbl-border  { color: var(--border) !important; }
.lbl-margin  { color: var(--margin) !important; }
.val {
  font-variant-numeric: tabular-nums;
  font-size: 0.78rem;
  color: var(--muted);
  background: var(--panel-2);
  padding: 2px 8px;
  border-radius: 6px;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: rgba(148,163,184,0.25);
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.35);
  transition: transform 0.15s ease;
}
input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.15); }

.toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--panel-2);
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
}
.toggle-btn {
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 8px 10px;
  font-size: 0.82rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.15s ease;
}
.toggle-btn.active {
  background: var(--accent);
  color: white;
}
.hint {
  margin: 8px 0 0;
  font-size: 0.78rem;
  color: var(--muted);
}

.summary { background: var(--panel-2); padding: 14px; border-radius: 10px; }
.total {
  font-size: 1.25rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  margin-bottom: 4px;
}
.formula {
  font-size: 0.78rem;
  color: var(--muted);
  font-family: 'SF Mono', Menlo, monospace;
}

.reset {
  border: 1px solid rgba(148,163,184,0.25);
  background: transparent;
  color: var(--text);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.15s ease;
}
.reset:hover { background: var(--panel-2); border-color: var(--accent); }

@media (max-width: 880px) {
  .app-main { grid-template-columns: 1fr; }
  .stage { min-height: 360px; }
}`;
        break;
        
      case 'box-model-OLD-DELETE-ME':
        html = `<div class="demo-container">
  <div class="header">
    <h2>🎯 CSS Box Model Ultimate Playground</h2>
    <p>Master the CSS Box Model with interactive visual learning</p>
    <div class="quick-info">
      <div class="info-badge">
        <span class="badge-icon">📦</span>
        <span class="badge-text">Content + Padding + Border + Margin = Total Size</span>
      </div>
    </div>
  </div>
  
  <div class="playground-layout">
    <div class="controls-panel">
      <div class="control-section">
        <h3>📏 Content Dimensions</h3>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text">Width</span>
            <span class="value-display" id="widthValue">200px</span>
          </label>
          <input type="range" id="widthSlider" min="100" max="400" value="200" class="slider">
        </div>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text">Height</span>
            <span class="value-display" id="heightValue">120px</span>
          </label>
          <input type="range" id="heightSlider" min="60" max="250" value="120" class="slider">
        </div>
      </div>
      
      <div class="control-section">
        <h3>🎨 Spacing Layers</h3>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text padding-label">Padding</span>
            <span class="value-display" id="paddingValue">20px</span>
          </label>
          <input type="range" id="paddingSlider" min="0" max="60" value="20" class="slider padding-slider">
        </div>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text border-label">Border</span>
            <span class="value-display" id="borderValue">8px</span>
          </label>
          <input type="range" id="borderSlider" min="0" max="25" value="8" class="slider border-slider">
        </div>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text margin-label">Margin</span>
            <span class="value-display" id="marginValue">25px</span>
          </label>
          <input type="range" id="marginSlider" min="0" max="60" value="25" class="slider margin-slider">
        </div>
      </div>
      
      <div class="control-section">
        <h3>⚙️ Advanced Settings</h3>
        <div class="control-item">
          <label class="control-label">
            <span class="label-text">Box Sizing</span>
          </label>
          <select id="boxSizingSelect" class="select-input">
            <option value="content-box">content-box (default)</option>
            <option value="border-box">border-box</option>
          </select>
        </div>
        <div class="button-group">
          <button id="toggleLabels" class="btn btn-secondary">🏷️ Labels</button>
          <button id="toggleAnimation" class="btn btn-secondary">✨ Animate</button>
          <button id="toggleRulers" class="btn btn-secondary">📏 Rulers</button>
          <button id="resetValues" class="btn btn-primary">🔄 Reset</button>
        </div>
      </div>
      
      <div class="tips-section">
        <h4>💡 Quick Tips</h4>
        <div class="tip-item">
          <span class="tip-icon">🎯</span>
          <span class="tip-text">Content: Actual text/images</span>
        </div>
        <div class="tip-item">
          <span class="tip-icon">🛡️</span>
          <span class="tip-text">Padding: Space inside border</span>
        </div>
        <div class="tip-item">
          <span class="tip-icon">🔲</span>
          <span class="tip-text">Border: Around padding</span>
        </div>
        <div class="tip-item">
          <span class="tip-icon">📤</span>
          <span class="tip-text">Margin: Space outside border</span>
        </div>
      </div>
    </div>
    
    <div class="demo-panel">
      <div class="visual-playground">
        <div class="ruler-horizontal" id="rulerH">
          <div class="ruler-marks"></div>
        </div>
        <div class="ruler-vertical" id="rulerV">
          <div class="ruler-marks"></div>
        </div>
        <div class="box-showcase">
          <div class="margin-zone" id="marginArea">
            <div class="border-zone" id="borderArea">
              <div class="padding-zone" id="paddingArea">
                <div class="content-zone" id="contentArea">
                  <div class="content-text">
                    <h4>CONTENT</h4>
                    <p id="contentSize">200×120</p>
                    <small id="contentInfo">Your content goes here</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dimension-lines">
          <div class="line-horizontal" id="widthLine"></div>
          <div class="line-vertical" id="heightLine"></div>
        </div>
      </div>
      
      <div class="metrics-panel">
        <div class="metric-card">
          <h4>📊 Live Measurements</h4>
          <div class="metric-grid">
            <div class="metric-item">
              <span class="metric-label">Content</span>
              <span class="metric-value" id="contentDim">200×120px</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Padding</span>
              <span class="metric-value" id="paddingDim">20px</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Border</span>
              <span class="metric-value" id="borderDim">8px</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Margin</span>
              <span class="metric-value" id="marginDim">25px</span>
            </div>
          </div>
          <div class="total-size">
            <span class="total-label">📐 Total Size</span>
            <span class="total-value" id="totalDim">306×206px</span>
          </div>
        </div>
        
        <div class="formula-card">
          <h4>🧮 Calculation Breakdown</h4>
          <div class="formula-content" id="formulaDisplay">
            <div class="formula-line">Total Width = 200 + (20×2) + (8×2) + (25×2) = 306px</div>
            <div class="formula-line">Total Height = 120 + (20×2) + (8×2) + (25×2) = 206px</div>
          </div>
          <div class="box-sizing-info" id="boxSizingInfo">
            <strong>content-box:</strong> Width/Height apply to content only
          </div>
        </div>
      </div>
      
      <div class="comparison-panel">
        <h4>🔄 Box Sizing Comparison</h4>
        <div class="comparison-grid">
          <div class="comparison-item">
            <div class="comparison-box content-box-demo">
              <div class="mini-content">Content</div>
            </div>
            <div class="comparison-label">
              <strong>content-box</strong>
              <small>Default behavior</small>
            </div>
          </div>
          <div class="comparison-item">
            <div class="comparison-box border-box-demo">
              <div class="mini-content">Content</div>
            </div>
            <div class="comparison-label">
              <strong>border-box</strong>
              <small>Includes padding & border</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --content-color: #ffd93d;
  --padding-color: #6bcf7f;
  --border-color: #4a90e2;
  --margin-color: #ff9500;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow-intensity: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f0f0f;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow-intensity: 0 0 30px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

.demo-container {
  max-width: 900px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.box-model-demo {
  background: var(--bg-secondary);
  padding: 40px;
  margin: 40px auto;
  border: 5px solid var(--border-color);
  border-radius: 10px;
  position: relative;
}

.box-model-demo::before {
  content: 'MARGIN';
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--margin-color);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.content-box {
  background: var(--content-color);
  padding: 30px;
  border: 3px solid var(--border-color);
  border-radius: 10px;
  text-align: center;
  position: relative;
}

.content-box::before {
  content: 'PADDING';
  position: absolute;
  top: 10px;
  right: -70px;
  background: var(--padding-color);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.content-box::after {
  content: 'CONTENT';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--content-color);
  color: #333;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.explanation {
  margin: 50px 0;
  padding: 30px;
  background: var(--bg-secondary);
  border-radius: 15px;
  box-shadow: 0 5px 20px var(--shadow);
}

.explanation h4 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.explanation ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.layer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 600;
}

.layer-content {
  background: var(--content-color);
  color: #333;
  box-shadow: 0 4px 15px rgba(255, 217, 61, 0.3);
}

.layer-padding {
  background: var(--padding-color);
  color: white;
  box-shadow: 0 4px 15px rgba(107, 207, 127, 0.3);
}

.layer-border {
  background: var(--border-color);
  color: white;
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
}

.layer-margin {
  background: var(--margin-color);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 149, 0, 0.3);
}

.comparison {
  display: flex;
  gap: 30px;
  margin-top: 50px;
  justify-content: center;
  flex-wrap: wrap;
}

.example {
  text-align: center;
}

.example h4 {
  margin-bottom: 15px;
  color: var(--text-primary);
}

.box {
  width: 200px;
  height: 120px;
  padding: 20px;
  border: 5px solid var(--border-color);
  background: var(--bg-secondary);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px var(--shadow);
}

.content-box-model {
  box-sizing: content-box;
}

.border-box-model {
  box-sizing: border-box;
}

.size-indicator {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 3px 10px;
  border-radius: 10px;
  white-space: nowrap;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

// Interactive Box Model JavaScript
const paddingSlider = document.getElementById('paddingSlider');
const borderSlider = document.getElementById('borderSlider');
const marginSlider = document.getElementById('marginSlider');
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const boxSizingSelect = document.getElementById('boxSizingSelect');

const paddingValue = document.getElementById('paddingValue');
const borderValue = document.getElementById('borderValue');
const marginValue = document.getElementById('marginValue');
const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

const paddingArea = document.getElementById('paddingArea');
const borderArea = document.getElementById('borderArea');
const marginArea = document.getElementById('marginArea');
const contentArea = document.getElementById('contentArea');

const contentDim = document.getElementById('contentDim');
const paddingDim = document.getElementById('paddingDim');
const borderDim = document.getElementById('borderDim');
const marginDim = document.getElementById('marginDim');
const totalDim = document.getElementById('totalDim');
const cssCode = document.getElementById('cssCode');

function updateBoxModel() {
  const padding = parseInt(paddingSlider.value);
  const border = parseInt(borderSlider.value);
  const margin = parseInt(marginSlider.value);
  const width = parseInt(widthSlider.value);
  const height = parseInt(heightSlider.value);
  const boxSizing = boxSizingSelect.value;
  
  // Update value displays
  paddingValue.textContent = padding + 'px';
  borderValue.textContent = border + 'px';
  marginValue.textContent = margin + 'px';
  widthValue.textContent = width + 'px';
  heightValue.textContent = height + 'px';
  
  // Update visual demo
  paddingArea.style.padding = padding + 'px';
  borderArea.style.padding = border + 'px';
  marginArea.style.padding = margin + 'px';
  contentArea.style.width = width + 'px';
  contentArea.style.height = height + 'px';
  
  // Calculate dimensions
  let totalWidth, totalHeight;
  if (boxSizing === 'content-box') {
    totalWidth = width + (padding * 2) + (border * 2) + (margin * 2);
    totalHeight = height + (padding * 2) + (border * 2) + (margin * 2);
  } else {
    totalWidth = width + (margin * 2);
    totalHeight = height + (margin * 2);
  }
  
  // Update dimension display
  contentDim.textContent = width + '×' + height + 'px';
  paddingDim.textContent = padding + 'px';
  borderDim.textContent = border + 'px';
  marginDim.textContent = margin + 'px';
  totalDim.textContent = totalWidth + '×' + totalHeight + 'px';
  
  }

// Event listeners
paddingSlider.addEventListener('input', updateBoxModel);
borderSlider.addEventListener('input', updateBoxModel);
marginSlider.addEventListener('input', updateBoxModel);
widthSlider.addEventListener('input', updateBoxModel);
heightSlider.addEventListener('input', updateBoxModel);
boxSizingSelect.addEventListener('change', updateBoxModel);

// Toggle labels
document.getElementById('toggleLabels').addEventListener('click', function() {
  document.querySelector('.visual-demo').classList.toggle('hidden-labels');
});

// Reset values
document.getElementById('resetValues').addEventListener('click', function() {
  paddingSlider.value = 20;
  borderSlider.value = 5;
  marginSlider.value = 30;
  widthSlider.value = 200;
  heightSlider.value = 100;
  boxSizingSelect.value = 'content-box';
  updateBoxModel();
});

// Initialize
updateBoxModel();

// Enhanced functionality for the ultimate playground
const contentSize = document.getElementById('contentSize');
const contentInfo = document.getElementById('contentInfo');
const formulaDisplay = document.getElementById('formulaDisplay');
const boxSizingInfo = document.getElementById('boxSizingInfo');
const rulerH = document.getElementById('rulerH');
const rulerV = document.getElementById('rulerV');
const widthLine = document.getElementById('widthLine');
const heightLine = document.getElementById('heightLine');
let isAnimated = false;
let rulersVisible = true;

function updateUltimateBoxModel() {
  const padding = parseInt(paddingSlider.value);
  const border = parseInt(borderSlider.value);
  const margin = parseInt(marginSlider.value);
  const width = parseInt(widthSlider.value);
  const height = parseInt(heightSlider.value);
  const boxSizing = boxSizingSelect.value;
  
  // Update content size display
  if (contentSize) {
    contentSize.textContent = width + '×' + height;
  }
  
  if (contentInfo) {
    contentInfo.textContent = 'Interactive content area';
  }
  
  // Calculate dimensions
  let totalWidth, totalHeight, actualContentWidth, actualContentHeight;
  
  if (boxSizing === 'content-box') {
    totalWidth = width + (padding * 2) + (border * 2) + (margin * 2);
    totalHeight = height + (padding * 2) + (border * 2) + (margin * 2);
    actualContentWidth = width;
    actualContentHeight = height;
  } else {
    totalWidth = width + (margin * 2);
    totalHeight = height + (margin * 2);
    actualContentWidth = Math.max(0, width - (padding * 2) - (border * 2));
    actualContentHeight = Math.max(0, height - (padding * 2) - (border * 2));
  }
  
  // Update dimension display with actual content size
  if (contentDim) {
    contentDim.textContent = actualContentWidth + '×' + actualContentHeight + 'px';
  }
  
  // Update formula display with detailed breakdown
  if (formulaDisplay) {
    if (boxSizing === 'content-box') {
      formulaDisplay.innerHTML = 
        '<div class="formula-line">Width: ' + width + ' + (' + padding + '×2) + (' + border + '×2) + (' + margin + '×2) = ' + totalWidth + 'px</div>' +
        '<div class="formula-line">Height: ' + height + ' + (' + padding + '×2) + (' + border + '×2) + (' + margin + '×2) = ' + totalHeight + 'px</div>';
    } else {
      formulaDisplay.innerHTML = 
        '<div class="formula-line">Width: ' + width + ' + (' + margin + '×2) = ' + totalWidth + 'px</div>' +
        '<div class="formula-line">Height: ' + height + ' + (' + margin + '×2) = ' + totalHeight + 'px</div>' +
        '<div class="formula-line">Content: ' + actualContentWidth + '×' + actualContentHeight + 'px (after padding & border)</div>';
    }
  }
  
  // Update box sizing info
  if (boxSizingInfo) {
    if (boxSizing === 'content-box') {
      boxSizingInfo.innerHTML = '<strong>content-box:</strong> Width/Height apply to content only<br><small>Padding and border add to the total size</small>';
    } else {
      boxSizingInfo.innerHTML = '<strong>border-box:</strong> Width/Height include padding & border<br><small>More intuitive for responsive design</small>';
    }
  }
  
  // Update dimension lines
  if (widthLine && heightLine) {
    widthLine.style.width = totalWidth + 'px';
    heightLine.style.height = totalHeight + 'px';
  }
}

// Enhanced event listeners
const originalUpdateBoxModel = updateBoxModel;
updateBoxModel = function() {
  originalUpdateBoxModel();
  updateUltimateBoxModel();
};

// Toggle animation
document.getElementById('toggleAnimation')?.addEventListener('click', function() {
  isAnimated = !isAnimated;
  const visualPlayground = document.querySelector('.visual-playground');
  if (visualPlayground) {
    if (isAnimated) {
      visualPlayground.classList.add('animate');
      this.textContent = '⏸️ Stop';
    } else {
      visualPlayground.classList.remove('animate');
      this.textContent = '✨ Animate';
    }
  }
});

// Toggle rulers
document.getElementById('toggleRulers')?.addEventListener('click', function() {
  rulersVisible = !rulersVisible;
  if (rulerH && rulerV) {
    if (rulersVisible) {
      rulerH.style.display = 'block';
      rulerV.style.display = 'block';
      this.textContent = '📏 Rulers';
    } else {
      rulerH.style.display = 'none';
      rulerV.style.display = 'none';
      this.textContent = '📐 Show Rulers';
    }
  }
});

// Update comparison demos
function updateComparisonDemos() {
  const padding = parseInt(paddingSlider.value);
  const border = parseInt(borderSlider.value);
  const width = parseInt(widthSlider.value);
  const height = parseInt(heightSlider.value);
  
  // Update content-box demo
  const contentBoxDemo = document.querySelector('.content-box-demo');
  if (contentBoxDemo) {
    const totalDemoWidth = width + (padding * 2) + (border * 2);
    const totalDemoHeight = height + (padding * 2) + (border * 2);
    contentBoxDemo.style.width = Math.min(totalDemoWidth * 0.3, 120) + 'px';
    contentBoxDemo.style.height = Math.min(totalDemoHeight * 0.3, 80) + 'px';
    contentBoxDemo.style.padding = Math.min(padding * 0.3, 10) + 'px';
    contentBoxDemo.style.border = Math.min(border * 0.3, 3) + 'px solid #3b82f6';
  }
  
  // Update border-box demo
  const borderBoxDemo = document.querySelector('.border-box-demo');
  if (borderBoxDemo) {
    borderBoxDemo.style.width = Math.min(width * 0.3, 120) + 'px';
    borderBoxDemo.style.height = Math.min(height * 0.3, 80) + 'px';
    borderBoxDemo.style.padding = Math.min(padding * 0.3, 10) + 'px';
    borderBoxDemo.style.border = Math.min(border * 0.3, 3) + 'px solid #10b981';
    borderBoxDemo.style.boxSizing = 'border-box';
  }
}

// Add comparison demo updates to the main update function
const enhancedUpdate = updateBoxModel;
updateBoxModel = function() {
  enhancedUpdate();
  updateComparisonDemos();
};

`;
        break;
        
      case 'display-visibility-opacity':
        html = `<div class="demo-container">
  <h2>Display vs Visibility vs Opacity</h2>
  
  <div class="controls">
    <button onclick="toggleDisplay()">Toggle Display</button>
    <button onclick="toggleVisibility()">Toggle Visibility</button>
    <button onclick="toggleOpacity()">Toggle Opacity</button>
  </div>
  
  <div class="boxes">
    <div id="display-box" class="box display-box">
      <h3>display: none</h3>
      <p>Completely removed from layout</p>
    </div>
    
    <div id="visibility-box" class="box visibility-box">
      <h3>visibility: hidden</h3>
      <p>Hidden but space reserved</p>
    </div>
    
    <div id="opacity-box" class="box opacity-box">
      <h3>opacity: 0</h3>
      <p>Transparent but interactive</p>
    </div>
  </div>
  
  <div class="info">
    <p><strong>Display:</strong> Element removed, no space reserved</p>
    <p><strong>Visibility:</strong> Element hidden, space preserved</p>
    <p><strong>Opacity:</strong> Element transparent, still clickable</p>
  </div>
</div>
<script>
  function toggleDisplay() {
    const box = document.getElementById('display-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  }
  
  function toggleVisibility() {
    const box = document.getElementById('visibility-box');
    box.style.visibility = box.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }
  
  function toggleOpacity() {
    const box = document.getElementById('opacity-box');
    box.style.opacity = box.style.opacity === '0' ? '1' : '0';
  }
</script>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --display-color: #ff6b6b;
  --visibility-color: #4ecdc4;
  --opacity-color: #95e77e;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow: 0 0 30px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 900px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.controls {
  text-align: center;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.controls button {
  padding: 12px 30px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.controls button:hover {
  background: #5a67d8;
}

.boxes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 50px 0;
  min-height: 250px;
  flex-wrap: wrap;
}

.box {
  width: 220px;
  height: 180px;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  position: relative;
}

.box h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.box p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.display-box {
  background: var(--display-color);
  color: white;
}

.visibility-box {
  background: var(--visibility-color);
  color: white;
}

.opacity-box {
  background: var(--opacity-color);
  color: #1a5f1a;
}

.info {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin-top: 40px;
}

.info p {
  margin: 10px 0;
  padding: 10px;
  background: var(--bg-primary);
  border-radius: 8px;
}

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.display-icon { background: var(--display-color); }
.visibility-icon { background: var(--visibility-color); }
.opacity-icon { background: var(--opacity-color); color: #1a5f1a; }

@media (max-width: 768px) {
  .boxes {
    flex-direction: column;
    gap: 20px;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .controls button {
    width: 200px;
  }
}`;
        break;
        
      case 'pseudo-classes-elements':
        html = `<div class="demo-container">
  <h2>Pseudo-classes & Pseudo-elements</h2>
  
  <div class="pseudo-demo">
    <h3>Hover over me!</h3>
    <p class="first">I'm the first paragraph</p>
    <p class="second">I'm the second paragraph</p>
    <p class="third">I'm the third paragraph</p>
    <p class="fourth">I'm the fourth paragraph</p>
  </div>
  
  <div class="links">
    <a href="#">Regular Link</a>
    <a href="#" class="visited">Visited Link</a>
    <a href="#">External Link</a>
  </div>
  
  <div class="form-demo">
    <input type="text" placeholder="Focus me!" />
    <input type="email" placeholder="Email field" />
    <button>Click me!</button>
  </div>
  
  <div class="highlight-text">
    Select this text to see the ::selection pseudo-element
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --accent-1: #ff6b6b;
  --accent-2: #4ecdc4;
  --accent-3: #9c27b0;
  --accent-4: #4caf50;
  --accent-5: #ff9800;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow: 0 0 30px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

/* Pseudo-classes Demo */
.pseudo-demo {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.pseudo-demo h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.pseudo-demo p {
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

.pseudo-demo p:first-child {
  color: white;
  background: var(--accent-1);
  font-weight: bold;
}

.pseudo-demo p:last-child {
  color: white;
  background: var(--accent-2);
  font-style: italic;
}

.pseudo-demo p:nth-child(odd) {
  background: var(--bg-primary);
}

/* Links Section */
.links {
  margin: 40px 0;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 10px;
}

.links h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.links a {
  display: block;
  padding: 15px 25px;
  background: var(--accent-1);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.links a:hover {
  background: #ff8787;
}

.links a:visited {
  background: var(--accent-3);
}

/* Form Demo */
.form-demo {
  margin: 40px 0;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 10px;
}

.form-demo h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.form-demo input {
  display: block;
  width: 100%;
  margin: 15px 0;
  padding: 15px 20px;
  background: var(--bg-primary);
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  color: var(--text-primary);
}

.form-demo input::placeholder {
  color: var(--text-secondary);
}

.form-demo input:focus {
  outline: none;
  border-color: var(--accent-4);
}

.form-demo button {
  width: 100%;
  padding: 15px 25px;
  background: var(--accent-4);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
}

.form-demo button:hover {
  background: #66bb6a;
}

/* Highlight Text */
.highlight-text {
  margin: 40px 0;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
}

.highlight-text::selection {
  background: var(--accent-5);
  color: white;
}

.highlight-text::-moz-selection {
  background: var(--accent-5);
  color: white;
}


@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .pseudo-demo p:nth-child(odd):hover {
    transform: translateX(5px);
  }
}`;
        break;
        
      case 'margin-padding':
        html = `<div class="demo-container">
  <h2>Margin vs Padding</h2>
  
  <div class="controls">
    <h3>Adjust Values</h3>
    <div class="control-group">
      <label>
        Margin: <span id="marginValue">40px</span>
        <input type="range" id="marginSlider" min="0" max="80" value="40">
      </label>
      <label>
        Padding: <span id="paddingValue">30px</span>
        <input type="range" id="paddingSlider" min="0" max="60" value="30">
      </label>
          </div>
  </div>
  
  <div class="visual-demo">
    <div class="margin-box" id="marginBox">
      <div class="padding-box" id="paddingBox">
        <div class="content-box" id="contentBox">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="legend">
    <div class="legend-item">
      <div class="color-box margin-color"></div>
      <span>Margin (outside)</span>
    </div>
    <div class="legend-item">
      <div class="color-box padding-color"></div>
      <span>Padding (inside)</span>
    </div>
    <div class="legend-item">
      <div class="color-box border-color"></div>
      <span>Border</span>
    </div>
  </div>
  
  <div class="css-output">
    <h3>Generated CSS</h3>
    <pre id="cssCode">.content {
  margin: 40px;
  padding: 30px;
  border: 5px solid #2196f3;
}</pre>
  </div>
</div>
<script>
  // Global function to update styles
  window.updateStyles = function() {
    const marginSlider = document.getElementById('marginSlider');
    const paddingSlider = document.getElementById('paddingSlider');
    const marginValue = document.getElementById('marginValue');
    const paddingValue = document.getElementById('paddingValue');
    const marginBox = document.getElementById('marginBox');
    const paddingBox = document.getElementById('paddingBox');
    const contentBox = document.getElementById('contentBox');
    
    if (marginSlider && paddingSlider && 
        marginValue && paddingValue && 
        marginBox && paddingBox && contentBox) {
      const margin = marginSlider.value + 'px';
      const padding = paddingSlider.value + 'px';
      
      marginValue.textContent = margin;
      paddingValue.textContent = padding;
      
      marginBox.style.padding = margin;
      paddingBox.style.padding = padding;
    }
  }
  
  // Initialize after DOM is ready
  setTimeout(() => {
    // Add event listeners
    const marginSlider = document.getElementById('marginSlider');
    const paddingSlider = document.getElementById('paddingSlider');
    
    if (marginSlider) {
      marginSlider.addEventListener('input', window.updateStyles);
    }
    if (paddingSlider) {
      paddingSlider.addEventListener('input', window.updateStyles);
    }
    
    // Initialize with default values
    window.updateStyles();
  }, 100);
</script>`;
        css = `:root {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --margin-color: #6c757d;
  --padding-color: #495057;
  --content-color: #343a40;
  --border-color: #dee2e6;
  --shadow: rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1d20;
    --bg-secondary: #212529;
    --text-primary: #e9ecef;
    --text-secondary: #adb5bd;
    --margin-color: #495057;
    --padding-color: #343a40;
    --content-color: #212529;
    --border-color: #343a40;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

/* Interactive Controls */
.controls {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.controls h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.control-group {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.control-group label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
}

.control-group span {
  font-weight: 600;
  color: var(--text-primary);
}

.control-group input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-primary);
  outline: none;
  cursor: pointer;
}

.control-group input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--content-color);
  cursor: pointer;
}

.control-group input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--content-color);
  cursor: pointer;
  border: none;
}

.visual-demo {
  margin: 50px 0;
}

.margin-box {
  background: #e9ecef;
  padding: 40px;
  margin: 40px auto;
  border-radius: 8px;
  position: relative;
  border: 1px solid #dee2e6;
}

.margin-box::before {
  content: 'MARGIN';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #6c757d;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.padding-box {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 6px;
  position: relative;
  border: 1px solid #dee2e6;
}

.padding-box::before {
  content: 'PADDING';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #495057;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.content-box {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 30px;
  text-align: center;
  border-radius: 6px;
  position: relative;
  border: 2px solid var(--border-color);
}

.content::before {
  content: 'CONTENT';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 18px;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 50px 0;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 25px;
  background: var(--bg-secondary);
  border-radius: 15px;
  box-shadow: 0 5px 20px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.legend-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow);
}

.color-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.margin-color {
  background: var(--margin-color);
}

.padding-color {
  background: var(--padding-color);
}

.border-color {
  background: var(--content-color);
}

/* CSS Output */
.css-output {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
}

.css-output h3 {
  color: var(--text-primary);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.css-output pre {
  background: var(--bg-primary);
  padding: 15px;
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
}

.comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.example {
  text-align: center;
  padding: 30px;
  background: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
  transition: all 0.3s ease;
}

.example:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px var(--shadow);
}

.example h4 {
  margin-bottom: 20px;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.demo-box {
  margin: 20px auto;
  border-radius: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.demo-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.demo-box:hover::before {
  opacity: 1;
}

.padding-only {
  background: linear-gradient(135deg, var(--padding-color), #66bb6a);
  color: white;
  padding: 30px;
  box-shadow: var(--glow) var(--padding-color);
}

.padding-only:hover {
  transform: scale(1.05);
}

.margin-only {
  background: linear-gradient(135deg, var(--content-color), #42a5f5);
  color: white;
  margin: 30px;
  padding: 20px;
  box-shadow: var(--glow) var(--content-color);
}

.margin-only:hover {
  transform: scale(1.05);
}

.both {
  background: linear-gradient(135deg, var(--margin-color), #ffb74d);
  color: white;
  padding: 30px;
  margin: 30px;
  box-shadow: var(--glow) var(--margin-color);
}

.both:hover {
  transform: scale(1.05);
}

.size-label {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 11px;
  opacity: 0.8;
  background: rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  border-radius: 5px;
}

@keyframes float3d {
  0%, 100% { 
    transform: rotateX(0deg) rotateY(0deg) translateY(0px);
  }
  25% { 
    transform: rotateX(2deg) rotateY(2deg) translateY(-10px);
  }
  75% { 
    transform: rotateX(-2deg) rotateY(-2deg) translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 768px) {
  .outer-box {
    padding: 40px;
    margin: 20px;
  }
  
  .inner-box {
    padding: 30px;
  }
  
  .content {
    padding: 20px;
  }
  
  .legend {
    gap: 20px;
  }
  
  .comparison {
    grid-template-columns: 1fr;
  }
}`;
        break;
        
      case 'attribute-selectors':
        html = `<div class="demo-container">
  <h2>CSS Attribute Selectors</h2>
  
  <div class="form-section">
    <h3>Form Inputs by Type</h3>
    <input type="text" placeholder="Text input" />
    <input type="email" placeholder="Email input" />
    <input type="password" placeholder="Password" />
    <input type="number" placeholder="Number" />
    <input type="date" />
  </div>
  
  <div class="links-section">
    <h3>Links by Attribute</h3>
    <a href="https://example.com">External Link</a>
    <a href="/internal">Internal Link</a>
    <a href="mailto:test@example.com">Email Link</a>
    <a href="tel:+1234567890">Phone Link</a>
    <a href="#" target="_blank">Opens in New Tab</a>
  </div>
  
  <div class="class-section">
    <h3>Classes by Pattern</h3>
    <div class="btn-primary">Primary Button</div>
    <div class="btn-secondary">Secondary Button</div>
    <div class="btn-icon">Icon Button</div>
    <div class="alert-success">Success Alert</div>
    <div class="alert-warning">Warning Alert</div>
  </div>
  
  <div class="data-section">
    <h3>Data Attributes</h3>
    <div data-role="button">Button Role</div>
    <div data-role="link">Link Role</div>
    <div data-role="menu">Menu Role</div>
    <div data-theme="dark">Dark Theme</div>
    <div data-theme="light">Light Theme</div>
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --accent-blue: #2196f3;
  --accent-green: #4caf50;
  --accent-red: #f44336;
  --accent-orange: #ff9800;
  --accent-purple: #9c27b0;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow: 0 0 30px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 50px;
  font-size: 2rem;
  font-weight: 600;
}

.demo-container h3 {
  color: var(--text-primary);
  margin: 40px 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--accent-blue), var(--accent-purple)) 1;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-container h3::before {
  content: '🎯';
  font-size: 1.5rem;
}

/* Form Section */
.form-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.form-section input {
  width: 100%;
  max-width: 300px;
  padding: 15px 20px;
  margin: 10px;
  background: var(--bg-primary);
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  color: var(--text-primary);
}

.form-section input::placeholder {
  color: var(--text-secondary);
}

.form-section input:focus {
  outline: none;
  transform: translateY(-2px);
}

/* Attribute selector - exact match with enhanced effects */
[type="text"] {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

[type="text"]:focus {
  border-color: var(--accent-blue);
  box-shadow: var(--glow) var(--accent-blue);
}

[type="email"] {
  border-color: var(--accent-green);
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

[type="email"]:focus {
  border-color: var(--accent-green);
  box-shadow: var(--glow) var(--accent-green);
}

[type="password"] {
  border-color: var(--accent-red);
  box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
}

[type="password"]:focus {
  border-color: var(--accent-red);
  box-shadow: var(--glow) var(--accent-red);
}

[type="number"] {
  border-color: var(--accent-orange);
  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
}

[type="number"]:focus {
  border-color: var(--accent-orange);
  box-shadow: var(--glow) var(--accent-orange);
}

[type="date"] {
  border-color: var(--accent-purple);
  box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1);
}

[type="date"]:focus {
  border-color: var(--accent-purple);
  box-shadow: var(--glow) var(--accent-purple);
}

/* Links Section */
.links-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

/* Attribute selector - starts with */
[href^="https"] {
  color: var(--accent-blue);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[href^="https"]::before {
  content: '🔗';
  margin-right: 8px;
}

[href^="https"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.1));
}

[href^="/"] {
  color: var(--accent-green);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="/"]::before {
  content: '🏠';
  margin-right: 8px;
}

[href^="/"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
}

[href^="mailto"] {
  color: var(--accent-orange);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="mailto"]::before {
  content: '✉️';
  margin-right: 8px;
}

[href^="mailto"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 152, 0, 0.2);
}

[href^="tel"] {
  color: var(--accent-purple);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="tel"]::before {
  content: '📞';
  margin-right: 8px;
}

[href^="tel"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(156, 39, 176, 0.2);
}

/* Attribute selector - exact value */
[target="_blank"] {
  position: relative;
}

[target="_blank"]::after {
  content: '↗️';
  margin-left: 5px;
  font-size: 0.9em;
}

/* Class Section */
.class-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.class-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Attribute selector - contains word */
[class~="btn"] {
  background: linear-gradient(135deg, var(--accent-blue), #1976d2);
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
  border: none;
  font-size: 16px;
  position: relative;
  overflow: hidden;
}

[class~="btn"]::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

[class~="btn"]:hover::before {
  width: 300px;
  height: 300px;
}

[class~="btn"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.4);
}

[class~="alert"] {
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

[class~="alert"]:hover {
  transform: translateX(5px);
}

/* Attribute selector - contains substring */
[class*="primary"] {
  background: linear-gradient(135deg, var(--accent-blue), #42a5f5);
}

[class*="secondary"] {
  background: linear-gradient(135deg, #607d8b, #78909c);
}

[class*="icon"] {
  background: linear-gradient(135deg, #795548, #8d6e63);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

[class*="icon"]::before {
  content: '⚡';
}

[class*="success"] {
  background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
  border-left-color: var(--accent-green);
  color: #2e7d32;
}

[class*="warning"] {
  background: linear-gradient(135deg, #fff3cd, #ffe082);
  border-left-color: var(--accent-orange);
  color: #f57c00;
}

/* Data Section */
.data-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Attribute selector - ends with */
[data-role$="button"] {
  background: linear-gradient(135deg, #e1f5fe, #b3e5fc);
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #0277bd;
  border: 2px solid transparent;
}

[data-role$="button"]:hover {
  border-color: var(--accent-blue);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
}

[data-role$="link"] {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: inline-block;
}

[data-role$="link"]:hover {
  background: rgba(33, 150, 243, 0.1);
  transform: translateY(-2px);
}

[data-role$="menu"] {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 20px;
  border-radius: 15px;
  font-weight: 600;
  color: #7b1fa2;
  transition: all 0.3s ease;
}

[data-role$="menu"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(156, 39, 176, 0.2);
}

/* Data attribute selector */
[data-theme="dark"] {
  background: linear-gradient(135deg, #424242, #616161);
  color: white;
  padding: 20px 30px;
  border-radius: 15px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="dark"]::before {
  content: '🌙';
  margin-right: 10px;
}

[data-theme="dark"]:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

[data-theme="light"] {
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  color: #333;
  padding: 20px 30px;
  border-radius: 15px;
  font-weight: 600;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="light"]::before {
  content: '☀️';
  margin-right: 10px;
}

[data-theme="light"]:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-blue);
}

@media (max-width: 768px) {
  .form-section input {
    max-width: 100%;
  }
  
  .links-grid,
  .class-grid,
  .data-grid {
    grid-template-columns: 1fr;
  }
}`;
        break;
        
      case 'attribute-selectors':
        html = `<div class="demo-container">
  <h2>CSS Attribute Selectors</h2>
  
  <div class="form-section">
    <h3>Form Inputs by Type</h3>
    <input type="text" placeholder="Text input" />
    <input type="email" placeholder="Email input" />
    <input type="password" placeholder="Password" />
    <input type="number" placeholder="Number" />
    <input type="date" />
  </div>
  
  <div class="links-section">
    <h3>Links by Attribute</h3>
    <a href="https://example.com">External Link</a>
    <a href="/internal">Internal Link</a>
    <a href="mailto:test@example.com">Email Link</a>
    <a href="tel:+1234567890">Phone Link</a>
    <a href="#" target="_blank">Opens in New Tab</a>
  </div>
  
  <div class="class-section">
    <h3>Classes by Pattern</h3>
    <div class="btn-primary">Primary Button</div>
    <div class="btn-secondary">Secondary Button</div>
    <div class="btn-icon">Icon Button</div>
    <div class="alert-success">Success Alert</div>
    <div class="alert-warning">Warning Alert</div>
  </div>
  
  <div class="data-section">
    <h3>Data Attributes</h3>
    <div data-role="button">Button Role</div>
    <div data-role="link">Link Role</div>
    <div data-role="menu">Menu Role</div>
    <div data-theme="dark">Dark Theme</div>
    <div data-theme="light">Light Theme</div>
  </div>
</div>
<script>
  // Force CSS to apply by adding a class to body
  document.body.classList.add('css-loaded');
</script>`;
        css = `:root {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --accent-blue: #495057;
  --accent-green: #6c757d;
  --accent-red: #dc3545;
  --accent-orange: #fd7e14;
  --accent-purple: #6f42c1;
  --shadow: rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1d20;
    --bg-secondary: #212529;
    --text-primary: #e9ecef;
    --text-secondary: #adb5bd;
    --accent-blue: #6c757d;
    --accent-green: #495057;
    --accent-red: #dc3545;
    --accent-orange: #fd7e14;
    --accent-purple: #6f42c1;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 50px;
  font-size: 2rem;
  font-weight: 600;
}

.demo-container h3 {
  color: var(--text-primary);
  margin: 40px 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--accent-blue), var(--accent-purple)) 1;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-container h3::before {
  content: '🎯';
  font-size: 1.5rem;
}

/* Form Section */
.form-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.form-section input {
  width: 100%;
  max-width: 300px;
  padding: 15px 20px;
  margin: 10px;
  background: var(--bg-primary);
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  color: var(--text-primary);
}

.form-section input::placeholder {
  color: var(--text-secondary);
}

.form-section input:focus {
  outline: none;
  transform: translateY(-2px);
}

/* Attribute selector - exact match with enhanced effects */
[type="text"] {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

[type="text"]:focus {
  border-color: var(--accent-blue);
  box-shadow: var(--glow) var(--accent-blue);
}

[type="email"] {
  border-color: var(--accent-green);
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

[type="email"]:focus {
  border-color: var(--accent-green);
  box-shadow: var(--glow) var(--accent-green);
}

[type="password"] {
  border-color: var(--accent-red);
  box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
}

[type="password"]:focus {
  border-color: var(--accent-red);
  box-shadow: var(--glow) var(--accent-red);
}

[type="number"] {
  border-color: var(--accent-orange);
  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
}

[type="number"]:focus {
  border-color: var(--accent-orange);
  box-shadow: var(--glow) var(--accent-orange);
}

[type="date"] {
  border-color: var(--accent-purple);
  box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1);
}

[type="date"]:focus {
  border-color: var(--accent-purple);
  box-shadow: var(--glow) var(--accent-purple);
}

/* Links Section */
.links-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

/* Attribute selector - starts with */
[href^="https"] {
  color: var(--accent-blue);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[href^="https"]::before {
  content: '🔗';
  margin-right: 8px;
}

[href^="https"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.1));
}

[href^="/"] {
  color: var(--accent-green);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="/"]::before {
  content: '🏠';
  margin-right: 8px;
}

[href^="/"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
}

[href^="mailto"] {
  color: var(--accent-orange);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="mailto"]::before {
  content: '✉️';
  margin-right: 8px;
}

[href^="mailto"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 152, 0, 0.2);
}

[href^="tel"] {
  color: var(--accent-purple);
  font-weight: 600;
  padding: 15px 25px;
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05));
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

[href^="tel"]::before {
  content: '📞';
  margin-right: 8px;
}

[href^="tel"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(156, 39, 176, 0.2);
}

/* Attribute selector - exact value */
[target="_blank"] {
  position: relative;
}

[target="_blank"]::after {
  content: '↗️';
  margin-left: 5px;
  font-size: 0.9em;
}

/* Class Section */
.class-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.class-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Attribute selector - contains word */
[class~="btn"] {
  background: linear-gradient(135deg, var(--accent-blue), #1976d2);
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
  border: none;
  font-size: 16px;
  position: relative;
  overflow: hidden;
}

[class~="btn"]::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

[class~="btn"]:hover::before {
  width: 300px;
  height: 300px;
}

[class~="btn"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.4);
}

[class~="alert"] {
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

[class~="alert"]:hover {
  transform: translateX(5px);
}

/* Attribute selector - contains substring */
[class*="primary"] {
  background: linear-gradient(135deg, var(--accent-blue), #42a5f5);
}

[class*="secondary"] {
  background: linear-gradient(135deg, #607d8b, #78909c);
}

[class*="icon"] {
  background: linear-gradient(135deg, #795548, #8d6e63);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

[class*="icon"]::before {
  content: '⚡';
}

[class*="success"] {
  background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
  border-left-color: var(--accent-green);
  color: #2e7d32;
}

[class*="warning"] {
  background: linear-gradient(135deg, #fff3cd, #ffe082);
  border-left-color: var(--accent-orange);
  color: #f57c00;
}

/* Data Section */
.data-section {
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Attribute selector - ends with */
[data-role$="button"] {
  background: linear-gradient(135deg, #e1f5fe, #b3e5fc);
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #0277bd;
  border: 2px solid transparent;
}

[data-role$="button"]:hover {
  border-color: var(--accent-blue);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
}

[data-role$="link"] {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: inline-block;
}

[data-role$="link"]:hover {
  background: rgba(33, 150, 243, 0.1);
  transform: translateY(-2px);
}

[data-role$="menu"] {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 20px;
  border-radius: 15px;
  font-weight: 600;
  color: #7b1fa2;
  transition: all 0.3s ease;
}

[data-role$="menu"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(156, 39, 176, 0.2);
}

/* Data attribute selector */
[data-theme="dark"] {
  background: linear-gradient(135deg, #424242, #616161);
  color: white;
  padding: 20px 30px;
  border-radius: 15px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="dark"]::before {
  content: '🌙';
  margin-right: 10px;
}

[data-theme="dark"]:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

[data-theme="light"] {
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  color: #333;
  padding: 20px 30px;
  border-radius: 15px;
  font-weight: 600;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

[data-theme="light"]::before {
  content: '☀️';
  margin-right: 10px;
}

[data-theme="light"]:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-blue);
}

@media (max-width: 768px) {
  .form-section input {
    max-width: 100%;
  }
  
  .links-grid,
  .class-grid,
  .data-grid {
    grid-template-columns: 1fr;
  }
}`;
        break;
        
      case 'flexbox':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS Flexbox Playground</h1>
    <p class="subtitle">Tweak container properties on the right and watch items rearrange live.</p>
  </header>

  <main class="app-main">
    <section class="stage" id="stage">
      <div class="flex-container" id="container">
        <div class="flex-item" style="--c:#f87171">1</div>
        <div class="flex-item" style="--c:#fb923c">2</div>
        <div class="flex-item" style="--c:#fbbf24">3</div>
        <div class="flex-item" style="--c:#34d399">4</div>
        <div class="flex-item" style="--c:#60a5fa">5</div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>flex-direction</h3>
        <div class="seg" data-prop="flexDirection">
          <button class="seg-btn active" data-val="row">row</button>
          <button class="seg-btn" data-val="row-reverse">row-reverse</button>
          <button class="seg-btn" data-val="column">column</button>
          <button class="seg-btn" data-val="column-reverse">column-reverse</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>justify-content</h3>
        <div class="seg" data-prop="justifyContent">
          <button class="seg-btn active" data-val="flex-start">flex-start</button>
          <button class="seg-btn" data-val="flex-end">flex-end</button>
          <button class="seg-btn" data-val="center">center</button>
          <button class="seg-btn" data-val="space-between">space-between</button>
          <button class="seg-btn" data-val="space-around">space-around</button>
          <button class="seg-btn" data-val="space-evenly">space-evenly</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>align-items</h3>
        <div class="seg" data-prop="alignItems">
          <button class="seg-btn active" data-val="stretch">stretch</button>
          <button class="seg-btn" data-val="flex-start">flex-start</button>
          <button class="seg-btn" data-val="flex-end">flex-end</button>
          <button class="seg-btn" data-val="center">center</button>
          <button class="seg-btn" data-val="baseline">baseline</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>flex-wrap</h3>
        <div class="seg" data-prop="flexWrap">
          <button class="seg-btn active" data-val="nowrap">nowrap</button>
          <button class="seg-btn" data-val="wrap">wrap</button>
          <button class="seg-btn" data-val="wrap-reverse">wrap-reverse</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>gap <span class="val" id="gapVal">12px</span></h3>
        <input type="range" id="gap" min="0" max="40" value="12">
      </div>

      <div class="panel-section items-section">
        <h3>Items</h3>
        <div class="item-actions">
          <button class="btn" id="addItem">+ Add item</button>
          <button class="btn ghost" id="removeItem">− Remove item</button>
          <button class="btn ghost" id="varySize">Vary sizes</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 12px;
}</pre>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var container = document.getElementById('container');
  var gap = document.getElementById('gap');
  var gapVal = document.getElementById('gapVal');
  var cssOut = document.getElementById('cssOut');
  var addBtn = document.getElementById('addItem');
  var removeBtn = document.getElementById('removeItem');
  var varyBtn = document.getElementById('varySize');

  var state = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    gap: 12
  };

  var palette = ['#f87171','#fb923c','#fbbf24','#34d399','#60a5fa','#a78bfa','#f472b6','#22d3ee'];
  var nextId = 6;

  function apply() {
    container.style.flexDirection = state.flexDirection;
    container.style.justifyContent = state.justifyContent;
    container.style.alignItems = state.alignItems;
    container.style.flexWrap = state.flexWrap;
    container.style.gap = state.gap + 'px';

    cssOut.textContent =
      '.container {\\n' +
      '  display: flex;\\n' +
      '  flex-direction: ' + state.flexDirection + ';\\n' +
      '  justify-content: ' + state.justifyContent + ';\\n' +
      '  align-items: ' + state.alignItems + ';\\n' +
      '  flex-wrap: ' + state.flexWrap + ';\\n' +
      '  gap: ' + state.gap + 'px;\\n' +
      '}';
  }

  document.querySelectorAll('.seg').forEach(function (seg) {
    var prop = seg.getAttribute('data-prop');
    seg.querySelectorAll('.seg-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        seg.querySelectorAll('.seg-btn').forEach(function (x) { x.classList.remove('active'); });
        btn.classList.add('active');
        state[prop] = btn.getAttribute('data-val');
        apply();
      });
    });
  });

  gap.addEventListener('input', function () {
    state.gap = +gap.value;
    gapVal.textContent = state.gap + 'px';
    apply();
  });

  addBtn.addEventListener('click', function () {
    var items = container.querySelectorAll('.flex-item');
    if (items.length >= 12) return;
    var el = document.createElement('div');
    el.className = 'flex-item';
    el.style.setProperty('--c', palette[items.length % palette.length]);
    el.textContent = nextId++;
    container.appendChild(el);
  });

  removeBtn.addEventListener('click', function () {
    var items = container.querySelectorAll('.flex-item');
    if (items.length <= 1) return;
    container.removeChild(items[items.length - 1]);
  });

  varyBtn.addEventListener('click', function () {
    container.querySelectorAll('.flex-item').forEach(function (el, i) {
      var sizes = [56, 80, 56, 100, 56, 72];
      el.style.height = sizes[i % sizes.length] + 'px';
      el.style.minWidth = sizes[i % sizes.length] + 'px';
    });
  });

  apply();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle { margin: 6px 0 0; color: var(--muted); font-size: 0.95rem; }

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  display: flex;
  align-items: stretch;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.flex-container {
  flex: 1;
  display: flex;
  border: 2px dashed rgba(99,102,241,0.4);
  border-radius: 12px;
  padding: 16px;
  min-height: 100%;
  background: rgba(99,102,241,0.04);
  transition: gap 0.2s ease;
}

.flex-item {
  background: var(--c, #6366f1);
  color: rgba(0,0,0,0.7);
  font-weight: 800;
  font-size: 1.1rem;
  min-width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 14px;
}
.flex-item:hover { transform: translateY(-2px) scale(1.05); }

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.val {
  font-variant-numeric: tabular-nums;
  font-size: 0.78rem;
  color: var(--text);
  background: var(--panel-2);
  padding: 2px 8px;
  border-radius: 6px;
  text-transform: none;
  letter-spacing: 0;
}

/* Segmented control */
.seg {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  background: var(--panel-2);
  border-radius: 8px;
  padding: 4px;
}
.seg-btn {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 7px 10px;
  font-size: 0.78rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.seg-btn:hover { color: var(--text); }
.seg-btn.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 2px 6px rgba(99,102,241,0.4);
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: rgba(148,163,184,0.25);
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.35);
}

.item-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.btn {
  flex: 1;
  min-width: 90px;
  border: none;
  background: var(--accent);
  color: white;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.15s ease;
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(99,102,241,0.35); }
.btn.ghost {
  background: transparent;
  border: 1px solid var(--border-soft);
  color: var(--text);
}
.btn.ghost:hover { background: var(--panel-2); border-color: var(--accent); }

.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'flexbox-OLD-DELETE-ME':
        html = `<div class="demo-container">
  <h2>CSS Flexbox - Interactive Demo</h2>
  
  <div class="flex-demo">
    <div class="flex-container" id="flexContainer">
      <div class="flex-item item-1">1</div>
      <div class="flex-item item-2">2</div>
      <div class="flex-item item-3">3</div>
      <div class="flex-item item-4">4</div>
      <div class="flex-item item-5">5</div>
    </div>
  </div>
  
  <div class="controls">
    <h3>Flex Properties</h3>
    
    <div class="control-group">
      <label>
        <span>Direction</span>
        <select id="directionSelect">
          <option value="row">Row</option>
          <option value="row-reverse">Row Reverse</option>
          <option value="column">Column</option>
          <option value="column-reverse">Column Reverse</option>
        </select>
      </label>
      
      <label>
        <span>Wrap</span>
        <select id="wrapSelect">
          <option value="nowrap">No Wrap</option>
          <option value="wrap">Wrap</option>
          <option value="wrap-reverse">Wrap Reverse</option>
        </select>
      </label>
    </div>
    
    <div class="control-group">
      <label>
        <span>Justify Content</span>
        <select id="justifySelect">
          <option value="flex-start">Start</option>
          <option value="center">Center</option>
          <option value="flex-end">End</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="space-evenly">Space Evenly</option>
        </select>
      </label>
      
      <label>
        <span>Align Items</span>
        <select id="alignSelect">
          <option value="stretch">Stretch</option>
          <option value="flex-start">Start</option>
          <option value="center">Center</option>
          <option value="flex-end">End</option>
          <option value="baseline">Baseline</option>
        </select>
      </label>
    </div>
    
    <div class="control-group">
      <label>
        <span>Gap: <span id="gapValue">10px</span></span>
        <input type="range" id="gapSlider" min="0" max="50" value="10">
      </label>
    </div>
  </div>
  
  <div class="css-output">
    <h3>Generated CSS</h3>
    <pre id="flexCSS">.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10px;
}</pre>
  </div>
</div>
<script>
  // Global function to update styles
  window.updateStyles = function() {
    const container = document.getElementById('flexContainer');
    const gapSlider = document.getElementById('gapSlider');
    const gapValue = document.getElementById('gapValue');
    const directionSelect = document.getElementById('directionSelect');
    const wrapSelect = document.getElementById('wrapSelect');
    const justifySelect = document.getElementById('justifySelect');
    const alignSelect = document.getElementById('alignSelect');
    const cssOutput = document.getElementById('flexCSS');
    
    if (container && gapSlider && gapValue && directionSelect && wrapSelect && justifySelect && alignSelect && cssOutput) {
      const gap = gapSlider.value + 'px';
      const direction = directionSelect.value;
      const wrap = wrapSelect.value;
      const justify = justifySelect.value;
      const align = alignSelect.value;
      
      gapValue.textContent = gap;
      
      container.style.gap = gap;
      container.style.flexDirection = direction;
      container.style.flexWrap = wrap;
      container.style.justifyContent = justify;
      container.style.alignItems = align;
      
      cssOutput.textContent = '.flex-container {\n  display: flex;\n  flex-direction: ' + direction + ';\n  flex-wrap: ' + wrap + ';\n  justify-content: ' + justify + ';\n  align-items: ' + align + ';\n  gap: ' + gap + ';\n}';
    }
  }
  
  // Initialize after DOM is ready
  setTimeout(() => {
    // Add event listeners
    const gapSlider = document.getElementById('gapSlider');
    const directionSelect = document.getElementById('directionSelect');
    const wrapSelect = document.getElementById('wrapSelect');
    const justifySelect = document.getElementById('justifySelect');
    const alignSelect = document.getElementById('alignSelect');
    
    if (gapSlider) {
      gapSlider.addEventListener('input', window.updateStyles);
    }
    if (directionSelect) {
      directionSelect.addEventListener('change', window.updateStyles);
    }
    if (wrapSelect) {
      wrapSelect.addEventListener('change', window.updateStyles);
    }
    if (justifySelect) {
      justifySelect.addEventListener('change', window.updateStyles);
    }
    if (alignSelect) {
      alignSelect.addEventListener('change', window.updateStyles);
    }
    
    // Initialize with default values
    window.updateStyles();
  }, 100);
</script>`;
        css = `:root {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --accent-1: #6c757d;
  --accent-2: #495057;
  --accent-3: #343a40;
  --accent-4: #adb5bd;
  --accent-5: #e9ecef;
  --border-color: #dee2e6;
  --shadow: rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1d20;
    --bg-secondary: #212529;
    --text-primary: #e9ecef;
    --text-secondary: #adb5bd;
    --accent-1: #6c757d;
    --accent-2: #495057;
    --accent-3: #343a40;
    --accent-4: #adb5bd;
    --accent-5: #e9ecef;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.controls {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.control-section {
  margin-bottom: 20px;
}

.control-section:last-child {
  margin-bottom: 0;
}

.control-section h3 {
  color: var(--text-primary);
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.controls button {
  padding: 8px 16px;
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.controls button:hover {
  background: var(--accent-1);
  color: white;
  border-color: var(--accent-1);
}

.controls button.active {
  background: var(--accent-1);
  color: white;
  border-color: var(--accent-1);
}

.control-group label {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 15px;
}

.control-group select {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-group select:hover {
  border-color: var(--accent-1);
}

.control-group select:focus {
  outline: none;
  border-color: var(--accent-1);
  box-shadow: 0 0 0 2px rgba(108, 117, 125, 0.1);
}

.control-section input[type="range"] {
  flex: 1;
  max-width: 200px;
  height: 6px;
  border-radius: 3px;
  background: var(--bg-primary);
  outline: none;
  cursor: pointer;
}

.control-section input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent-1);
  cursor: pointer;
}

.control-section input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent-1);
  cursor: pointer;
  border: none;
}

.controls button:nth-child(4n) {
  background: linear-gradient(135deg, var(--accent-2), #5ed4cc);
}

.controls button:nth-child(4n+1) {
  background: linear-gradient(135deg, var(--accent-3), #a8f0a6);
}

.controls button:nth-child(4n+2) {
  background: linear-gradient(135deg, var(--accent-4), #ffe066);
}

.controls button:nth-child(4n+3) {
  background: linear-gradient(135deg, var(--accent-5), #c4b5fd);
}

.flex-demo {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px var(--shadow);
}

.flex-container {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  min-height: 300px;
  display: flex;
  gap: 10px;
  transition: all 0.3s ease;
  border: 2px dashed #dee2e6;
  position: relative;
}

.flex-container::before {
  content: 'Flex Container';
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--bg-secondary);
  padding: 0 10px;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.flex-item {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flex-item.item-1 {
  background: #3498db;
}

.flex-item.item-2 {
  background: #e74c3c;
}

.flex-item.item-3 {
  background: #2ecc71;
}

.flex-item.item-4 {
  background: #f39c12;
}

.flex-item.item-5 {
  background: #9b59b6;
}

.flex-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.flex-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-4), var(--accent-5));
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

.flex-item {
  padding: 30px;
  border-radius: 15px;
  font-weight: 600;
  color: white;
  text-align: center;
  min-width: 120px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.flex-item::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.flex-item:hover::before {
  opacity: 1;
}

.flex-item:hover {
  transform: scale(1.1) rotate(2deg);
  z-index: 10;
}

.item-1 {
  background: linear-gradient(135deg, var(--accent-1), #ff8787);
  box-shadow: var(--glow) var(--accent-1);
  flex: 1;
}

.item-2 {
  background: linear-gradient(135deg, var(--accent-2), #5ed4cc);
  box-shadow: var(--glow) var(--accent-2);
  flex: 2;
}

.item-3 {
  background: linear-gradient(135deg, var(--accent-3), #a8f0a6);
  box-shadow: var(--glow) var(--accent-3);
  flex: 1;
}

.item-4 {
  background: linear-gradient(135deg, var(--accent-4), #ffe066);
  box-shadow: var(--glow) var(--accent-4);
  flex: 1;
}

.item-5 {
  background: linear-gradient(135deg, var(--accent-5), #c4b5fd);
  box-shadow: var(--glow) var(--accent-5);
  flex: 2;
}

.info-panel {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 10px 30px var(--shadow);
}

.info-panel h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.info-panel p {
  margin: 10px 0;
  padding: 10px;
  background: var(--bg-primary);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-panel span {
  font-weight: 600;
  color: var(--accent-1);
  font-family: 'Courier New', monospace;
}

@media (max-width: 768px) {
  .controls {
    padding: 20px;
  }
  
  .controls button {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .flex-container {
    padding: 20px;
    min-height: 300px;
  }
  
  .flex-item {
    padding: 20px;
    min-width: 80px;
    font-size: 14px;
  }
}`;
        break;
        
      case 'css-grid':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS Grid Playground</h1>
    <p class="subtitle">Two-dimensional layout — control rows <em>and</em> columns at once. Unlike Flexbox (one-dimensional), Grid lets you align across both axes simultaneously.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="grid-container" id="container">
        <div class="grid-item" style="--c:#f87171">1</div>
        <div class="grid-item" style="--c:#fb923c">2</div>
        <div class="grid-item" style="--c:#fbbf24">3</div>
        <div class="grid-item" style="--c:#34d399">4</div>
        <div class="grid-item" style="--c:#60a5fa">5</div>
        <div class="grid-item" style="--c:#a78bfa">6</div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>columns <span class="val" id="colsVal">3</span></h3>
        <input type="range" id="cols" min="1" max="6" value="3">
        <p class="hint">grid-template-columns: repeat(N, 1fr)</p>
      </div>

      <div class="panel-section">
        <h3>row height</h3>
        <div class="seg" data-prop="rowSize">
          <button class="seg-btn active" data-val="auto">auto</button>
          <button class="seg-btn" data-val="80px">80px</button>
          <button class="seg-btn" data-val="120px">120px</button>
          <button class="seg-btn" data-val="1fr">1fr</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>gap <span class="val" id="gapVal">12px</span></h3>
        <input type="range" id="gap" min="0" max="40" value="12">
      </div>

      <div class="panel-section">
        <h3>justify-items <small>(item ↔ in cell)</small></h3>
        <div class="seg" data-prop="justifyItems">
          <button class="seg-btn active" data-val="stretch">stretch</button>
          <button class="seg-btn" data-val="start">start</button>
          <button class="seg-btn" data-val="end">end</button>
          <button class="seg-btn" data-val="center">center</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>align-items <small>(item ↕ in cell)</small></h3>
        <div class="seg" data-prop="alignItems">
          <button class="seg-btn active" data-val="stretch">stretch</button>
          <button class="seg-btn" data-val="start">start</button>
          <button class="seg-btn" data-val="end">end</button>
          <button class="seg-btn" data-val="center">center</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>justify-content <small>(grid ↔ in container)</small></h3>
        <div class="seg" data-prop="justifyContent">
          <button class="seg-btn active" data-val="start">start</button>
          <button class="seg-btn" data-val="end">end</button>
          <button class="seg-btn" data-val="center">center</button>
          <button class="seg-btn" data-val="space-between">space-between</button>
          <button class="seg-btn" data-val="space-around">space-around</button>
          <button class="seg-btn" data-val="space-evenly">space-evenly</button>
        </div>
      </div>

      <div class="panel-section items-section">
        <h3>Items</h3>
        <div class="item-actions">
          <button class="btn" id="addItem">+ Add</button>
          <button class="btn ghost" id="removeItem">− Remove</button>
          <button class="btn ghost" id="spanFirst">Span first item 2×2</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 12px;
}</pre>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var container = document.getElementById('container');
  var cols = document.getElementById('cols');
  var colsVal = document.getElementById('colsVal');
  var gap = document.getElementById('gap');
  var gapVal = document.getElementById('gapVal');
  var cssOut = document.getElementById('cssOut');
  var addBtn = document.getElementById('addItem');
  var removeBtn = document.getElementById('removeItem');
  var spanBtn = document.getElementById('spanFirst');

  var state = {
    cols: 3,
    rowSize: 'auto',
    gap: 12,
    justifyItems: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'start'
  };

  var palette = ['#f87171','#fb923c','#fbbf24','#34d399','#60a5fa','#a78bfa','#f472b6','#22d3ee'];
  var nextId = 7;
  var spanned = false;

  function apply() {
    container.style.gridTemplateColumns = 'repeat(' + state.cols + ', 1fr)';
    container.style.gridAutoRows = state.rowSize;
    container.style.gap = state.gap + 'px';
    container.style.justifyItems = state.justifyItems;
    container.style.alignItems = state.alignItems;
    container.style.justifyContent = state.justifyContent;

    cssOut.textContent =
      '.container {\\n' +
      '  display: grid;\\n' +
      '  grid-template-columns: repeat(' + state.cols + ', 1fr);\\n' +
      '  grid-auto-rows: ' + state.rowSize + ';\\n' +
      '  gap: ' + state.gap + 'px;\\n' +
      '  justify-items: ' + state.justifyItems + ';\\n' +
      '  align-items: ' + state.alignItems + ';\\n' +
      '  justify-content: ' + state.justifyContent + ';\\n' +
      '}';
  }

  document.querySelectorAll('.seg').forEach(function (seg) {
    var prop = seg.getAttribute('data-prop');
    seg.querySelectorAll('.seg-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        seg.querySelectorAll('.seg-btn').forEach(function (x) { x.classList.remove('active'); });
        btn.classList.add('active');
        state[prop] = btn.getAttribute('data-val');
        apply();
      });
    });
  });

  cols.addEventListener('input', function () {
    state.cols = +cols.value;
    colsVal.textContent = state.cols;
    apply();
  });

  gap.addEventListener('input', function () {
    state.gap = +gap.value;
    gapVal.textContent = state.gap + 'px';
    apply();
  });

  addBtn.addEventListener('click', function () {
    var items = container.querySelectorAll('.grid-item');
    if (items.length >= 12) return;
    var el = document.createElement('div');
    el.className = 'grid-item';
    el.style.setProperty('--c', palette[items.length % palette.length]);
    el.textContent = nextId++;
    container.appendChild(el);
  });

  removeBtn.addEventListener('click', function () {
    var items = container.querySelectorAll('.grid-item');
    if (items.length <= 1) return;
    container.removeChild(items[items.length - 1]);
  });

  spanBtn.addEventListener('click', function () {
    var first = container.querySelector('.grid-item');
    if (!first) return;
    spanned = !spanned;
    if (spanned) {
      first.style.gridColumn = 'span 2';
      first.style.gridRow = 'span 2';
      spanBtn.textContent = 'Reset span';
    } else {
      first.style.gridColumn = '';
      first.style.gridRow = '';
      spanBtn.textContent = 'Span first item 2×2';
    }
  });

  apply();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}
.subtitle em { color: #c7d2fe; font-style: normal; font-weight: 600; }

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  display: flex;
  align-items: stretch;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.grid-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  border: 2px dashed rgba(99,102,241,0.4);
  border-radius: 12px;
  padding: 16px;
  min-height: 100%;
  background: rgba(99,102,241,0.04);
  transition: gap 0.2s ease;
}

.grid-item {
  background: var(--c, #6366f1);
  color: rgba(0,0,0,0.75);
  font-weight: 800;
  font-size: 1.1rem;
  min-height: 56px;
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 14px;
}
.grid-item:hover { transform: translateY(-2px) scale(1.04); }

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}
.panel-section h3 small {
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
  font-size: 0.7rem;
  opacity: 0.7;
}
.val {
  font-variant-numeric: tabular-nums;
  font-size: 0.78rem;
  color: var(--text);
  background: var(--panel-2);
  padding: 2px 8px;
  border-radius: 6px;
  text-transform: none;
  letter-spacing: 0;
}
.hint {
  margin: 6px 0 0;
  font-size: 0.72rem;
  color: var(--muted);
  font-family: 'SF Mono', Menlo, monospace;
}

/* Segmented control */
.seg {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  background: var(--panel-2);
  border-radius: 8px;
  padding: 4px;
}
.seg-btn {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 7px 10px;
  font-size: 0.78rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.seg-btn:hover { color: var(--text); }
.seg-btn.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 2px 6px rgba(99,102,241,0.4);
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: rgba(148,163,184,0.25);
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.35);
}

.item-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.btn {
  flex: 1;
  min-width: 90px;
  border: none;
  background: var(--accent);
  color: white;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.15s ease;
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(99,102,241,0.35); }
.btn.ghost {
  background: transparent;
  border: 1px solid var(--border-soft);
  color: var(--text);
}
.btn.ghost:hover { background: var(--panel-2); border-color: var(--accent); }

.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-grid-OLD-DELETE-ME':
        html = `<div class="demo-container">
  <h2>CSS Grid - Interactive Demo</h2>
  
  <div class="controls">
    <h3>Adjust Values</h3>
    <div class="control-group">
      <label>
        Columns: <span id="columnsValue">3</span>
        <input type="range" id="columnsSlider" min="1" max="6" value="3">
      </label>
      <label>
        Gap: <span id="gapValue">20px</span>
        <input type="range" id="gapSlider" min="0" max="30" value="20">
      </label>
      <label>
        Rows: <span id="rowsValue">2</span>
        <input type="range" id="rowsSlider" min="1" max="4" value="2">
      </label>
    </div>
  </div>
  
  <div class="visual-demo">
    <div class="grid-container" id="gridContainer">
      <div class="grid-item item-1">1</div>
      <div class="grid-item item-2">2</div>
      <div class="grid-item item-3">3</div>
      <div class="grid-item item-4">4</div>
      <div class="grid-item item-5">5</div>
      <div class="grid-item item-6">6</div>
      <div class="grid-item item-7">7</div>
      <div class="grid-item item-8">8</div>
    </div>
  </div>
  
  <div class="css-output">
    <h3>Generated CSS</h3>
    <pre id="cssCode">.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 20px;
}</pre>
  </div>
</div>
<script>
  // Global function to update styles
  window.updateStyles = function() {
    const container = document.getElementById('gridContainer');
    const columnsSlider = document.getElementById('columnsSlider');
    const columnsValue = document.getElementById('columnsValue');
    const gapSlider = document.getElementById('gapSlider');
    const gapValue = document.getElementById('gapValue');
    const rowsSlider = document.getElementById('rowsSlider');
    const rowsValue = document.getElementById('rowsValue');
    const cssOutput = document.getElementById('cssCode');
    
    if (container && columnsSlider && columnsValue && gapSlider && gapValue && rowsSlider && rowsValue && cssOutput) {
      const columns = columnsSlider.value;
      const gap = gapSlider.value + 'px';
      const rows = rowsSlider.value;
      
      // Update live values
      columnsValue.textContent = columns;
      gapValue.textContent = gap;
      rowsValue.textContent = rows;
      
      container.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
      container.style.gridTemplateRows = 'repeat(' + rows + ', 100px)';
      container.style.gap = gap;
      
      cssOutput.textContent = '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(' + columns + ', 1fr);\n  grid-template-rows: repeat(' + rows + ', 100px);\n  gap: ' + gap + ';\n}';
    }
  }
  
  // Initialize after DOM is ready
  setTimeout(() => {
    // Add event listeners
    const columnsSlider = document.getElementById('columnsSlider');
    const gapSlider = document.getElementById('gapSlider');
    const rowsSlider = document.getElementById('rowsSlider');
    
    if (columnsSlider) {
      columnsSlider.addEventListener('input', window.updateStyles);
    }
    if (gapSlider) {
      gapSlider.addEventListener('input', window.updateStyles);
    }
    if (rowsSlider) {
      rowsSlider.addEventListener('input', window.updateStyles);
    }
    
    // Initialize with default values
    window.updateStyles();
  }, 100);
</script>`;
        css = `:root {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --grid-color-1: #495057;
  --grid-color-2: #6c757d;
  --grid-color-3: #343a40;
  --grid-color-4: #adb5bd;
  --grid-color-5: #e9ecef;
  --shadow: rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1d20;
    --bg-secondary: #212529;
    --text-primary: #e9ecef;
    --text-secondary: #adb5bd;
    --grid-color-1: #495057;
    --grid-color-2: #6c757d;
    --grid-color-3: #343a40;
    --grid-color-4: #adb5bd;
    --grid-color-5: #e9ecef;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.controls {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.controls button {
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--grid-color-1), var(--grid-color-2));
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.controls button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.grid-container {
  background: #f8f9fa;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 40px;
  border-radius: 12px;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 20px;
  transition: all 0.3s ease;
  border: 2px dashed #dee2e6;
  position: relative;
}

.grid-container::before {
  content: 'Grid Container';
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--bg-secondary);
  padding: 0 10px;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.grid-item.item-1 {
  background: #3498db;
}

.grid-item.item-2 {
  background: #e74c3c;
}

.grid-item.item-3 {
  background: #2ecc71;
}

.grid-item.item-4 {
  background: #f39c12;
}

.grid-item.item-5 {
  background: #9b59b6;
}

.grid-item.item-6 {
  background: #1abc9c;
}

.grid-item.item-7 {
  background: #34495e;
}

.grid-item.item-8 {
  background: #e67e22;
}

.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
  border-radius: 20px;
  min-height: 500px;
  box-shadow: 0 10px 30px var(--shadow);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  transition: all 0.5s ease;
  position: relative;
}

.grid-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  opacity: 0.5;
}

.grid-item {
  padding: 30px;
  border-radius: 15px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.grid-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.grid-item:hover::before {
  transform: translateX(100%);
}

.grid-item:hover {
  transform: scale(1.05);
  z-index: 10;
}

.item-1 {
  background: linear-gradient(135deg, var(--grid-color-1), var(--grid-color-2));
  box-shadow: var(--glow) var(--grid-color-1);
}

.item-2 {
  background: linear-gradient(135deg, var(--grid-color-2), var(--grid-color-3));
  box-shadow: var(--glow) var(--grid-color-2);
}

.item-3 {
  background: linear-gradient(135deg, var(--grid-color-3), var(--grid-color-4));
  box-shadow: var(--glow) var(--grid-color-3);
}

.item-4 {
  background: linear-gradient(135deg, var(--grid-color-4), var(--grid-color-5));
  box-shadow: var(--glow) var(--grid-color-4);
}

.item-5 {
  background: linear-gradient(135deg, var(--grid-color-5), var(--grid-color-1));
  box-shadow: var(--glow) var(--grid-color-5);
}

.item-6 {
  background: linear-gradient(135deg, #fa709a, #fee140);
  box-shadow: var(--glow) #fa709a;
}

.item-7 {
  background: linear-gradient(135deg, #30cfd0, #330867);
  box-shadow: var(--glow) #30cfd0;
}

.item-8 {
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  box-shadow: var(--glow) #a8edea;
  color: #333;
}

.layout-presets {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 10px 30px var(--shadow);
  text-align: center;
}

.layout-presets h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.layout-presets button {
  padding: 12px 30px;
  margin: 0 10px;
  background: linear-gradient(135deg, var(--grid-color-3), var(--grid-color-4));
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.layout-presets button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);
}

@media (max-width: 768px) {
  .grid-container {
    padding: 20px;
    min-height: 400px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, minmax(100px, auto));
  }
  
  .grid-item {
    padding: 20px;
    font-size: 14px;
  }
}`;
        break;
        
      case 'css-combinators':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS Combinators Playground</h1>
    <p class="subtitle">Master CSS selector relationships: descendant (space), child (>), adjacent sibling (+), and general sibling (~)</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area">
        <div class="container" id="container">
          <div class="item ancestor">
            <span class="label">Ancestor</span>
            <div class="item parent">
              <span class="label">Parent</span>
              <div class="item child">
                <span class="label">Child</span>
                <div class="item grandchild">
                  <span class="label">Grandchild</span>
                </div>
              </div>
              <div class="item sibling">
                <span class="label">Sibling</span>
              </div>
              <div class="item sibling2">
                <span class="label">Sibling 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Combinator Type</h3>
        <div class="seg" data-prop="combinator">
          <button class="seg-btn active" data-val="descendant">Descendant ( )</button>
          <button class="seg-btn" data-val="child">Child (>)</button>
          <button class="seg-btn" data-val="adjacent">Adjacent (+)</button>
          <button class="seg-btn" data-val="general">General (~)</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Base Selector</h3>
        <div class="seg" data-prop="base">
          <button class="seg-btn active" data-val=".parent">.parent</button>
          <button class="seg-btn" data-val=".child">.child</button>
          <button class="seg-btn" data-val=".ancestor">.ancestor</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Target Selector</h3>
        <div class="seg" data-prop="target">
          <button class="seg-btn active" data-val=".child">.child</button>
          <button class="seg-btn" data-val=".grandchild">.grandchild</button>
          <button class="seg-btn" data-val=".sibling">.sibling</button>
          <button class="seg-btn" data-val=".sibling2">.sibling2</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Current Selector</h3>
        <div class="selector-display" id="selectorDisplay">
          .parent .child
        </div>
        <div class="selector-explanation" id="selectorExplanation">
          Selects any .child that is a descendant of .parent
        </div>
      </div>

      <div class="panel-section">
        <h3>Selected Elements</h3>
        <div class="selected-count" id="selectedCount">1 element selected</div>
        <div class="selected-list" id="selectedList">• Child</div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.parent .child {
  background: #6366f1;
  color: white;
}</pre>
      </div>

      <div class="panel-section">
        <h3>Quick Reference</h3>
        <div class="reference">
          <div class="ref-item">
            <strong>Descendant ( )</strong><br>
            <small>Selects all elements inside</small>
          </div>
          <div class="ref-item">
            <strong>Child (>)</strong><br>
            <small>Direct children only</small>
          </div>
          <div class="ref-item">
            <strong>Adjacent (+)</strong><br>
            <small>Immediately following sibling</small>
          </div>
          <div class="ref-item">
            <strong>General (~)</strong><br>
            <small>Any following sibling</small>
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var container = document.getElementById('container');
  var selectorDisplay = document.getElementById('selectorDisplay');
  var selectorExplanation = document.getElementById('selectorExplanation');
  var selectedCount = document.getElementById('selectedCount');
  var selectedList = document.getElementById('selectedList');
  var cssOut = document.getElementById('cssOut');

  var state = {
    combinator: 'descendant',
    base: '.parent',
    target: '.child'
  };

  var explanations = {
    descendant: {
      'parent-child': 'Selects any .child that is a descendant of .parent',
      'parent-grandchild': 'Selects any .grandchild that is a descendant of .parent',
      'parent-sibling': 'Selects any .sibling that is a descendant of .parent',
      'parent-sibling2': 'Selects any .sibling2 that is a descendant of .parent',
      'child-grandchild': 'Selects any .grandchild that is a descendant of .child',
      'child-sibling': 'Selects any .sibling that is a descendant of .child',
      'ancestor-child': 'Selects any .child that is a descendant of .ancestor'
    },
    child: {
      'parent-child': 'Selects .child that is a direct child of .parent',
      'parent-grandchild': 'Selects .grandchild that is a direct child of .parent',
      'parent-sibling': 'Selects .sibling that is a direct child of .parent',
      'parent-sibling2': 'Selects .sibling2 that is a direct child of .parent',
      'child-grandchild': 'Selects .grandchild that is a direct child of .child',
      'ancestor-child': 'Selects .child that is a direct child of .ancestor'
    },
    adjacent: {
      'child-sibling': 'Selects .sibling that immediately follows .child',
      'sibling-sibling2': 'Selects .sibling2 that immediately follows .sibling'
    },
    general: {
      'child-sibling': 'Selects any .sibling that follows .child',
      'child-sibling2': 'Selects any .sibling2 that follows .child',
      'sibling-sibling2': 'Selects any .sibling2 that follows .sibling'
    }
  };

  function getCombinatorSymbol() {
    switch (state.combinator) {
      case 'descendant': return ' ';
      case 'child': return ' > ';
      case 'adjacent': return ' + ';
      case 'general': return ' ~ ';
      default: return ' ';
    }
  }

  function apply() {
    // Clear previous highlights
    container.querySelectorAll('.item').forEach(el => {
      el.classList.remove('highlighted');
    });

    // Build selector
    var selector = state.base + getCombinatorSymbol() + state.target;
    selectorDisplay.textContent = selector;

    // Get explanation key
    var key = state.base.replace('.', '') + '-' + state.target.replace('.', '');
    var explanation = explanations[state.combinator]?.[key] || 'Invalid combination';
    selectorExplanation.textContent = explanation;

    // Apply highlighting
    var elements = container.querySelectorAll(selector);
    elements.forEach(el => el.classList.add('highlighted'));

    // Update selected info
    selectedCount.textContent = elements.length + ' element' + (elements.length !== 1 ? 's' : '') + ' selected';
    selectedList.innerHTML = Array.from(elements).map(el => {
      var label = el.querySelector('.label')?.textContent || 'Unknown';
      return '• ' + label;
    }).join('<br>') || 'No elements selected';

    // Update CSS output
    cssOut.textContent = selector + ' {\\n  background: #6366f1;\\n  color: white;\\n}';
  }

  document.querySelectorAll('.seg').forEach(function (seg) {
    var prop = seg.getAttribute('data-prop');
    seg.querySelectorAll('.seg-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        seg.querySelectorAll('.seg-btn').forEach(function (x) { x.classList.remove('active'); });
        btn.classList.add('active');
        state[prop] = btn.getAttribute('data-val');
        apply();
      });
    });
  });

  apply();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --highlight: #6366f1;
  --highlight-text: white;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  width: 100%;
  max-width: 500px;
}

.container {
  border: 2px dashed rgba(148,163,184,0.3);
  border-radius: 12px;
  padding: 20px;
  background: rgba(99,102,241,0.02);
}

.item {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 12px 16px;
  margin: 8px 0;
  position: relative;
  transition: all 0.3s ease;
  cursor: default;
}

.item .label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text);
  display: block;
  margin-bottom: 4px;
}

.item .label::before {
  content: attr(data-type);
  font-size: 0.7rem;
  opacity: 0.6;
  margin-right: 6px;
}

.item.highlighted {
  background: var(--highlight);
  color: var(--highlight-text);
  border-color: var(--highlight);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99,102,241,0.4);
}

.item.highlighted .label {
  color: var(--highlight-text);
}

/* Nesting visualization */
.item > .item {
  margin-left: 20px;
  border-left: 2px solid rgba(148,163,184,0.2);
  padding-left: 16px;
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Segmented control */
.seg {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  background: var(--panel-2);
  border-radius: 8px;
  padding: 4px;
}
.seg-btn {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 7px 10px;
  font-size: 0.78rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.seg-btn:hover { color: var(--text); }
.seg-btn.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 2px 6px rgba(99,102,241,0.4);
}

/* Display sections */
.selector-display {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 8px;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.9rem;
  color: #c7d2fe;
  border: 1px solid var(--border-soft);
  margin-bottom: 8px;
}

.selector-explanation {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
}

.selected-count {
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}

.selected-list {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
}

.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
}

.reference {
  display: grid;
  gap: 8px;
}
.ref-item {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
}
.ref-item strong {
  color: var(--text);
  font-size: 0.85rem;
}
.ref-item small {
  color: var(--muted);
  font-size: 0.75rem;
  display: block;
  margin-top: 2px;
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'z-index':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS z-index Playground</h1>
    <p class="subtitle">Master stacking contexts and layer management. z-index only works on positioned elements or elements with opacity, transform, etc.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="stacking-stage" id="stage">
        <div class="layer-context" id="context1">
          <div class="context-label">Context 1 (z-index: 1)</div>
          <div class="box box-a" data-z="10" data-name="A">
            <span class="box-label">A (z: 10)</span>
          </div>
          <div class="box box-b" data-z="5" data-name="B">
            <span class="box-label">B (z: 5)</span>
          </div>
        </div>
        
        <div class="layer-context" id="context2">
          <div class="context-label">Context 2 (z-index: 2)</div>
          <div class="box box-c" data-z="1" data-name="C">
            <span class="box-label">C (z: 1)</span>
          </div>
          <div class="box box-d" data-z="100" data-name="D">
            <span class="box-label">D (z: 100)</span>
          </div>
        </div>
        
        <div class="box box-e" data-z="50" data-name="E">
          <span class="box-label">E (z: 50)</span>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Stacking Order</h3>
        <div class="stacking-list" id="stackingList">
          <div class="stack-item" data-order="1">1. Context 1 (z-index: 1)</div>
          <div class="stack-item" data-order="2">2. Context 2 (z-index: 2)</div>
          <div class="stack-item" data-order="3">3. Box E (z-index: 50)</div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Element Controls</h3>
        <div class="element-controls">
          <div class="control-group">
            <label>Box A <span class="val" id="valA">10</span></label>
            <input type="range" id="zA" min="-10" max="100" value="10">
          </div>
          <div class="control-group">
            <label>Box B <span class="val" id="valB">5</span></label>
            <input type="range" id="zB" min="-10" max="100" value="5">
          </div>
          <div class="control-group">
            <label>Box C <span class="val" id="valC">1</span></label>
            <input type="range" id="zC" min="-10" max="100" value="1">
          </div>
          <div class="control-group">
            <label>Box D <span class="val" id="valD">100</span></label>
            <input type="range" id="zD" min="-10" max="100" value="100">
          </div>
          <div class="control-group">
            <label>Box E <span class="val" id="valE">50</span></label>
            <input type="range" id="zE" min="-10" max="100" value="50">
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Context Controls</h3>
        <div class="context-controls">
          <div class="control-group">
            <label>Context 1 <span class="val" id="valContext1">1</span></label>
            <input type="range" id="zContext1" min="0" max="10" value="1">
          </div>
          <div class="control-group">
            <label>Context 2 <span class="val" id="valContext2">2</span></label>
            <input type="range" id="zContext2" min="0" max="10" value="2">
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Positioning</h3>
        <div class="seg" data-prop="positioning">
          <button class="seg-btn active" data-val="relative">relative</button>
          <button class="seg-btn" data-val="absolute">absolute</button>
          <button class="seg-btn" data-val="fixed">fixed</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Stacking Context Info</h3>
        <div class="info-box">
          <p><strong>Current:</strong> <span id="contextInfo">2 stacking contexts</span></p>
          <p><strong>Rule:</strong> Elements in higher contexts always appear above elements in lower contexts, regardless of individual z-index values.</p>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.box-a { z-index: 10; }
.box-b { z-index: 5; }
.box-c { z-index: 1; }
.box-d { z-index: 100; }
.box-e { z-index: 50; }

#context1 { z-index: 1; }
#context2 { z-index: 2; }</pre>
      </div>

      <div class="panel-section">
        <h3>Quick Tips</h3>
        <div class="tips">
          <div class="tip">
            <strong>🎯 Key Point:</strong> z-index only works on positioned elements
          </div>
          <div class="tip">
            <strong>📦 Contexts:</strong> Elements with z-index create new stacking contexts
          </div>
          <div class="tip">
            <strong>⬆️ Hierarchy:</strong> Higher context z-index beats lower context z-index
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var boxes = {
    A: document.querySelector('.box-a'),
    B: document.querySelector('.box-b'),
    C: document.querySelector('.box-c'),
    D: document.querySelector('.box-d'),
    E: document.querySelector('.box-e')
  };
  
  var contexts = {
    context1: document.getElementById('context1'),
    context2: document.getElementById('context2')
  };

  var state = {
    zValues: { A: 10, B: 5, C: 1, D: 100, E: 50 },
    contextZValues: { context1: 1, context2: 2 },
    positioning: 'relative'
  };

  function updateStackingOrder() {
    // Update z-index values
    Object.keys(boxes).forEach(key => {
      if (boxes[key]) {
        boxes[key].style.zIndex = state.zValues[key];
        boxes[key].setAttribute('data-z', state.zValues[key]);
        boxes[key].querySelector('.box-label').textContent = key + ' (z: ' + state.zValues[key] + ')';
      }
    });

    // Update context z-index
    Object.keys(contexts).forEach(key => {
      if (contexts[key]) {
        contexts[key].style.zIndex = state.contextZValues[key];
        var contextNum = key.replace('context', '');
        contexts[key].querySelector('.context-label').textContent = 'Context ' + contextNum + ' (z-index: ' + state.contextZValues[key] + ')';
      }
    });

    // Calculate stacking order
    var stackingOrder = [];
    
    // Add contexts
    if (state.contextZValues.context1 > 0) {
      stackingOrder.push({ name: 'Context 1', z: state.contextZValues.context1, type: 'context' });
    }
    if (state.contextZValues.context2 > 0) {
      stackingOrder.push({ name: 'Context 2', z: state.contextZValues.context2, type: 'context' });
    }
    
    // Add individual boxes not in contexts
    if (boxes.E) {
      stackingOrder.push({ name: 'Box E', z: state.zValues.E, type: 'box' });
    }
    
    // Sort by z-index
    stackingOrder.sort((a, b) => a.z - b.z);
    
    // Update display
    var stackingList = document.getElementById('stackingList');
    stackingList.innerHTML = stackingOrder.map((item, index) => 
      '<div class="stack-item" data-order="' + (index + 1) + '">' + (index + 1) + '. ' + item.name + ' (z-index: ' + item.z + ')</div>'
    ).join('');

    // Update context info
    var contextCount = Object.values(state.contextZValues).filter(z => z > 0).length;
    document.getElementById('contextInfo').textContent = contextCount + ' stacking context' + (contextCount !== 1 ? 's' : '');

    // Update CSS output
    updateCSSOutput();
  }

  function updateCSSOutput() {
    var css = '';
    Object.keys(boxes).forEach(key => {
      if (boxes[key]) {
        css += '.box-' + key.toLowerCase() + ' { z-index: ' + state.zValues[key] + '; }\\n';
      }
    });
    css += '\\n';
    Object.keys(contexts).forEach(key => {
      if (contexts[key] && state.contextZValues[key] > 0) {
        css += '#' + key + ' { z-index: ' + state.contextZValues[key] + '; }\\n';
      }
    });
    document.getElementById('cssOut').textContent = css.trim();
  }

  // Setup z-index sliders for boxes
  Object.keys(state.zValues).forEach(key => {
    var slider = document.getElementById('z' + key);
    var valueDisplay = document.getElementById('val' + key);
    
    if (slider && valueDisplay) {
      slider.addEventListener('input', function() {
        state.zValues[key] = parseInt(this.value);
        valueDisplay.textContent = this.value;
        updateStackingOrder();
      });
    }
  });

  // Setup z-index sliders for contexts
  Object.keys(state.contextZValues).forEach(key => {
    var slider = document.getElementById('z' + key.charAt(0).toUpperCase() + key.slice(1));
    var valueDisplay = document.getElementById('val' + key.charAt(0).toUpperCase() + key.slice(1));
    
    if (slider && valueDisplay) {
      slider.addEventListener('input', function() {
        state.contextZValues[key] = parseInt(this.value);
        valueDisplay.textContent = this.value;
        updateStackingOrder();
      });
    }
  });

  // Setup positioning controls
  document.querySelectorAll('.seg[data-prop="positioning"] .seg-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.seg[data-prop="positioning"] .seg-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      state.positioning = this.getAttribute('data-val');
      
      // Update all boxes positioning
      Object.values(boxes).forEach(box => {
        if (box) {
          box.style.position = state.positioning;
        }
      });
      
      // Update contexts positioning
      Object.values(contexts).forEach(context => {
        if (context) {
          context.style.position = state.positioning;
        }
      });
    });
  });

  // Initialize
  updateStackingOrder();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --box-a: #f87171;
  --box-b: #fb923c;
  --box-c: #fbbf24;
  --box-d: #34d399;
  --box-e: #60a5fa;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.stacking-stage {
  width: 100%;
  max-width: 500px;
  height: 400px;
  position: relative;
  border: 2px dashed rgba(148,163,184,0.3);
  border-radius: 12px;
  background: rgba(99,102,241,0.02);
}

.layer-context {
  position: relative;
  border: 2px solid rgba(99,102,241,0.6);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  background: rgba(99,102,241,0.05);
}

.context-label {
  position: absolute;
  top: -12px;
  left: 12px;
  background: var(--panel);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.box {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  cursor: move;
  margin: 10px;
  border: 2px solid rgba(0,0,0,0.2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.box:hover { transform: translateY(-2px); }

.box-a { background: var(--box-a); color: white; }
.box-b { background: var(--box-b); color: white; }
.box-c { background: var(--box-c); color: #333; }
.box-d { background: var(--box-d); color: white; }
.box-e { 
  background: var(--box-e); 
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box-label {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.2;
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Stacking list */
.stacking-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stack-item {
  background: var(--panel-2);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid var(--border-soft);
  display: flex;
  align-items: center;
  gap: 8px;
}

.stack-item::before {
  content: attr(data-order);
  background: var(--accent);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
}

/* Controls */
.element-controls, .context-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.control-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text);
  font-weight: 600;
}

.val {
  font-variant-numeric: tabular-nums;
  font-size: 0.78rem;
  color: var(--text);
  background: var(--panel-2);
  padding: 2px 8px;
  border-radius: 6px;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: rgba(148,163,184,0.25);
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.35);
}

/* Segmented control */
.seg {
  display: flex;
  gap: 4px;
  background: var(--panel-2);
  border-radius: 8px;
  padding: 4px;
}

.seg-btn {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 7px 10px;
  font-size: 0.78rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.15s ease;
}

.seg-btn:hover { color: var(--text); }
.seg-btn.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 2px 6px rgba(99,102,241,0.4);
}

/* Info sections */
.info-box {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.info-box p {
  margin: 0 0 8px;
  font-size: 0.85rem;
  line-height: 1.4;
}

.info-box p:last-child { margin-bottom: 0; }

.tips {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tip {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
  font-size: 0.85rem;
  line-height: 1.4;
}

.tip strong {
  color: var(--text);
  display: block;
  margin-bottom: 2px;
}

.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-specificity':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS Specificity Calculator</h1>
    <p class="subtitle">Master CSS specificity rules: Inline styles (1000) > IDs (100) > Classes/Attributes/Pseudo (10) > Elements (1). Universal selector (*) has 0 specificity.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area">
        <div class="target-element" id="target">
          <span class="element-label">Target Element</span>
          <div class="applied-rules" id="appliedRules">
            <div class="rule-item winner">
              <span class="rule-selector">#target</span>
              <span class="rule-specificity">(0,1,0,0)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Selector Builder</h3>
        <div class="selector-parts">
          <div class="part-group">
            <label>Inline Style</label>
            <button class="inline-btn" id="addInline">Add Inline Style</button>
          </div>
          
          <div class="part-group">
            <label>ID Selectors</label>
            <div class="input-group">
              <input type="text" id="idInput" placeholder="#target" value="#target">
              <button class="add-btn" data-type="id">Add</button>
            </div>
            <div class="added-list" id="idList"></div>
          </div>
          
          <div class="part-group">
            <label>Classes/Attributes</label>
            <div class="input-group">
              <input type="text" id="classInput" placeholder=".class">
              <button class="add-btn" data-type="class">Add</button>
            </div>
            <div class="added-list" id="classList"></div>
          </div>
          
          <div class="part-group">
            <label>Elements</label>
            <div class="input-group">
              <input type="text" id="elementInput" placeholder="div">
              <button class="add-btn" data-type="element">Add</button>
            </div>
            <div class="added-list" id="elementList"></div>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Current Selectors</h3>
        <div class="selectors-list" id="selectorsList">
          <div class="selector-item active" data-specificity="100">
            <div class="selector-text">#target</div>
            <div class="specificity-bar">
              <div class="specificity-value">100</div>
              <div class="specificity-visual">
                <div class="bar-part inline" style="width: 0%"></div>
                <div class="bar-part id" style="width: 10%"></div>
                <div class="bar-part class" style="width: 0%"></div>
                <div class="bar-part element" style="width: 0%"></div>
              </div>
            </div>
            <button class="remove-btn">×</button>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Specificity Breakdown</h3>
        <div class="specificity-display">
          <div class="specificity-item">
            <span class="label">Inline:</span>
            <span class="value" id="inlineValue">0</span>
          </div>
          <div class="specificity-item">
            <span class="label">IDs:</span>
            <span class="value" id="idValue">1</span>
          </div>
          <div class="specificity-item">
            <span class="label">Classes:</span>
            <span class="value" id="classValue">0</span>
          </div>
          <div class="specificity-item">
            <span class="label">Elements:</span>
            <span class="value" id="elementValue">0</span>
          </div>
          <div class="specificity-total">
            <span class="label">Total:</span>
            <span class="value total" id="totalValue">100</span>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Visual Comparison</h3>
        <div class="comparison-chart" id="comparisonChart">
          <div class="chart-bar" data-specificity="100">
            <div class="bar-fill" style="width: 10%"></div>
            <span class="bar-label">#target</span>
            <span class="bar-value">100</span>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Quick Rules</h3>
        <div class="rules-list">
          <div class="rule">
            <strong>Inline styles:</strong> 1000 points (always win)
          </div>
          <div class="rule">
            <strong>ID selectors:</strong> 100 points each
          </div>
          <div class="rule">
            <strong>Classes/attributes/pseudos:</strong> 10 points each
          </div>
          <div class="rule">
            <strong>Elements/pseudo-elements:</strong> 1 point each
          </div>
          <div class="rule">
            <strong>Universal (*):</strong> 0 points
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Test Examples</h3>
        <div class="examples">
          <button class="example-btn" data-selector="*">* (0)</button>
          <button class="example-btn" data-selector="li">li (1)</button>
          <button class="example-btn" data-selector=".class">.class (10)</button>
          <button class="example-btn" data-selector="div li">div li (2)</button>
          <button class="example-btn" data-selector="ul li.active">ul li.active (12)</button>
          <button class="example-btn" data-selector="#id">#id (100)</button>
          <button class="example-btn" data-selector="#id.class">#id.class (110)</button>
          <button class="example-btn" data-selector="style=''">Inline (1000)</button>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var state = {
    selectors: [
      { text: '#target', specificity: 100, parts: { inline: 0, id: 1, class: 0, element: 0 } }
    ],
    hasInline: false
  };

  var targetElement = document.getElementById('target');
  var selectorsList = document.getElementById('selectorsList');
  var appliedRules = document.getElementById('appliedRules');
  var comparisonChart = document.getElementById('comparisonChart');

  function calculateSpecificity(selector) {
    var parts = { inline: 0, id: 0, class: 0, element: 0 };
    
    if (selector.includes('style=')) {
      parts.inline = 1;
    }
    
    // Count IDs
    var idMatches = selector.match(/#/g);
    parts.id = idMatches ? idMatches.length : 0;
    
    // Count classes, attributes, and pseudo-classes
    var classMatches = selector.match(/\\./g);
    var attrMatches = selector.match(/\\[/g);
    var pseudoMatches = selector.match(/:/g);
    parts.class = (classMatches ? classMatches.length : 0) + 
                  (attrMatches ? attrMatches.length : 0) + 
                  (pseudoMatches ? pseudoMatches.length : 0);
    
    // Count elements (remove IDs, classes, attributes, pseudo-classes first)
    var cleanSelector = selector.replace(/#[^\\s]+/g, '')
                                .replace(/\\.[^\\s]+/g, '')
                                .replace(/\\[[^\\]]+\\]/g, '')
                                .(/:[^\\s]+/g, '')
                                .replace(/\\s+/g, ' ');
    var elements = cleanSelector.trim().split(/\\s+/).filter(el => el && el !== '>' && el !== '+' && el !== '~');
    parts.element = elements.length;
    
    var total = parts.inline * 1000 + parts.id * 100 + parts.class * 10 + parts.element;
    
    return { total, parts };
  }

  function updateDisplay() {
    // Find winner
    var winner = state.selectors.reduce((prev, current) => 
      prev.specificity > current.specificity ? prev : current
    );
    
    // Update applied rules
    appliedRules.innerHTML = state.selectors.map(selector => 
      '<div class="rule-item' + (selector === winner ? ' winner' : '') + '">' +
        '<span class="rule-selector">' + selector.text + '</span>' +
        '<span class="rule-specificity">(' + 
          selector.parts.inline + ',' + 
          selector.parts.id + ',' + 
          selector.parts.class + ',' + 
          selector.parts.element + ')</span>' +
      '</div>'
    ).join('');
    
    // Update selectors list
    selectorsList.innerHTML = state.selectors.map((selector, index) => 
      '<div class="selector-item' + (selector === winner ? ' active' : '') + '" data-specificity="' + selector.specificity + '">' +
        '<div class="selector-text">' + selector.text + '</div>' +
        '<div class="specificity-bar">' +
          '<div class="specificity-value">' + selector.specificity + '</div>' +
          '<div class="specificity-visual">' +
            '<div class="bar-part inline" style="width: ' + (selector.parts.inline * 10) + '%"></div>' +
            '<div class="bar-part id" style="width: ' + (selector.parts.id * 10) + '%"></div>' +
            '<div class="bar-part class" style="width: ' + (selector.parts.class * 10) + '%"></div>' +
            '<div class="bar-part element" style="width: ' + (selector.parts.element * 10) + '%"></div>' +
          '</div>' +
        '</div>' +
        '<button class="remove-btn" data-index="' + index + '">×</button>' +
      '</div>'
    ).join('');
    
    // Update comparison chart
    var maxSpecificity = Math.max(...state.selectors.map(s => s.specificity), 1000);
    comparisonChart.innerHTML = state.selectors.map(selector => 
      '<div class="chart-bar' + (selector === winner ? ' winner' : '') + '" data-specificity="' + selector.specificity + '">' +
        '<div class="bar-fill" style="width: ' + (selector.specificity / maxSpecificity * 100) + '%"></div>' +
        '<span class="bar-label">' + selector.text + '</span>' +
        '<span class="bar-value">' + selector.specificity + '</span>' +
      '</div>'
    ).join('');
    
    // Update specificity breakdown for winner
    document.getElementById('inlineValue').textContent = winner.parts.inline;
    document.getElementById('idValue').textContent = winner.parts.id;
    document.getElementById('classValue').textContent = winner.parts.class;
    document.getElementById('elementValue').textContent = winner.parts.element;
    document.getElementById('totalValue').textContent = winner.specificity;
    
    // Apply winner style to target
    if (winner.parts.inline > 0) {
      targetElement.style.cssText = 'background: #ff6b6b !important; color: white !important;';
    } else {
      targetElement.style.cssText = 'background: #6366f1; color: white;';
    }
  }

  function addSelector(text) {
    var result = calculateSpecificity(text);
    state.selectors.push({ text, specificity: result.total, parts: result.parts });
    updateDisplay();
  }

  // Add button handlers
  document.getElementById('addInline').addEventListener('click', function() {
    if (!state.hasInline) {
      addSelector('style=""');
      state.hasInline = true;
      this.disabled = true;
    }
  });

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      var type = this.getAttribute('data-type');
      var input = document.getElementById(type + 'Input');
      var value = input.value.trim();
      
      if (value) {
        addSelector(value);
        input.value = '';
      }
    });
  });

  // Remove selector
  selectorsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
      var index = parseInt(e.target.getAttribute('data-index'));
      var removed = state.selectors[index];
      state.selectors.splice(index, 1);
      
      if (removed.text.includes('style=')) {
        state.hasInline = false;
        document.getElementById('addInline').disabled = false;
      }
      
      updateDisplay();
    }
  });

  // Example buttons
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      addSelector(this.getAttribute('data-selector'));
    });
  });

  // Enter key support
  ['idInput', 'classInput', 'elementInput'].forEach(id => {
    document.getElementById(id).addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        var type = id.replace('Input', '');
        var btn = document.querySelector('.add-btn[data-type="' + type + '"]');
        btn.click();
      }
    });
  });

  // Initialize
  updateDisplay();
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --inline: #ef4444;
  --id: #f59e0b;
  --class: #10b981;
  --element: #3b82f6;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  width: 100%;
  max-width: 400px;
}

.target-element {
  background: var(--accent);
  color: white;
  padding: 40px 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(99,102,241,0.3);
  transition: all 0.3s ease;
}

.element-label {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 20px;
}

.applied-rules {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule-item {
  background: rgba(255,255,255,0.1);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.rule-item.winner {
  background: rgba(255,255,255,0.2);
  border-color: white;
  box-shadow: 0 4px 12px rgba(255,255,255,0.2);
}

.rule-selector {
  font-family: 'SF Mono', Menlo, monospace;
  font-weight: 600;
}

.rule-specificity {
  font-size: 0.75rem;
  opacity: 0.8;
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Selector Builder */
.part-group {
  margin-bottom: 16px;
}

.part-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text);
}

.inline-btn, .add-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.15s ease;
}

.inline-btn:hover:not(:disabled), .add-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(99,102,241,0.35);
}

.inline-btn:disabled {
  background: var(--muted);
  cursor: not-allowed;
  opacity: 0.5;
}

.input-group {
  display: flex;
  gap: 8px;
}

.input-group input {
  flex: 1;
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'SF Mono', Menlo, monospace;
}

.input-group input:focus {
  outline: none;
  border-color: var(--accent);
}

.added-list {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--muted);
}

/* Selectors List */
.selectors-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selector-item {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 12px;
  position: relative;
  transition: all 0.2s ease;
}

.selector-item.active {
  border-color: var(--accent);
  box-shadow: 0 4px 12px rgba(99,102,241,0.2);
}

.selector-text {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.specificity-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.specificity-value {
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 30px;
}

.specificity-visual {
  flex: 1;
  height: 6px;
  background: rgba(148,163,184,0.2);
  border-radius: 3px;
  display: flex;
  overflow: hidden;
}

.bar-part {
  height: 100%;
  transition: width 0.3s ease;
}

.bar-part.inline { background: var(--inline); }
.bar-part.id { background: var(--id); }
.bar-part.class { background: var(--class); }
.bar-part.element { background: var(--element); }

.remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(239,68,68,0.2);
  border: none;
  color: #ef4444;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.remove-btn:hover {
  background: #ef4444;
  color: white;
}

/* Specificity Display */
.specificity-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.specificity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--panel-2);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.specificity-total {
  grid-column: 1 / -1;
  background: var(--accent);
  color: white;
  font-weight: 600;
}

.value {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

/* Comparison Chart */
.comparison-chart {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chart-bar {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  padding: 8px 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
}

.chart-bar.winner {
  border-color: var(--accent);
}

.bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--accent);
  opacity: 0.2;
  transition: width 0.3s ease;
}

.chart-bar.winner .bar-fill {
  opacity: 0.4;
}

.bar-label {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.bar-value {
  font-size: 0.8rem;
  font-weight: 600;
  position: absolute;
  right: 12px;
  top: 8px;
  z-index: 1;
}

/* Rules and Examples */
.rules-list, .examples {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  line-height: 1.4;
}

.rule strong {
  color: var(--text);
}

.examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.example-btn {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'SF Mono', Menlo, monospace;
  transition: all 0.15s ease;
}

.example-btn:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-has':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS :has() Pseudo-class Playground</h1>
    <p class="subtitle">Master the "parent selector" power of :has(). Select elements based on their descendants or following siblings.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area" id="demoArea">
        <!-- Parent Selection Examples -->
        <div class="example-section">
          <h3>Parent Selection</h3>
          <div class="card-container">
            <div class="card has-image">
              <img src="https://picsum.photos/seed/card1/60/60.jpg" alt="Card image">
              <h4>Card with Image</h4>
              <p>This card has an image and gets special styling.</p>
            </div>
            <div class="card">
              <h4>Card without Image</h4>
              <p>This card has no image.</p>
            </div>
            <div class="card has-image">
              <img src="https://picsum.photos/seed/card2/60/60.jpg" alt="Card image">
              <h4>Another Card</h4>
              <p>This card also has an image.</p>
            </div>
          </div>
        </div>

        <!-- Form Validation Examples -->
        <div class="example-section">
          <h3>Form Validation</h3>
          <form class="form-demo">
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" required>
              <span class="error">Please enter a valid email</span>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" required>
              <span class="error">Password is required</span>
            </div>
            <div class="form-group">
              <label>Optional Field</label>
              <input type="text" placeholder="Optional">
            </div>
          </form>
        </div>

        <!-- Navigation Examples -->
        <div class="example-section">
          <h3>Navigation States</h3>
          <nav class="nav-demo">
            <a href="#" class="nav-item">Home</a>
            <a href="#" class="nav-item active">Products</a>
            <a href="#" class="nav-item">About</a>
            <a href="#" class="nav-item">Contact</a>
          </nav>
        </div>

        <!-- List Examples -->
        <div class="example-section">
          <h3>List Styling</h3>
          <ul class="list-demo">
            <li class="list-item">
              <span class="item-content">Regular item</span>
            </li>
            <li class="list-item">
              <span class="badge important">Important</span>
              <span class="item-content">Item with important badge</span>
            </li>
            <li class="list-item">
              <span class="badge">Normal</span>
              <span class="item-content">Item with normal badge</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>:has() Selector</h3>
        <div class="selector-builder">
          <input type="text" id="selectorInput" placeholder="e.g., .card:has(img)" value=".card:has(img)">
          <button class="apply-btn" id="applySelector">Apply</button>
        </div>
        <div class="current-selector" id="currentSelector">
          .card:has(img)
        </div>
      </div>

      <div class="panel-section">
        <h3>Quick Examples</h3>
        <div class="example-buttons">
          <button class="example-btn" data-selector=".card:has(img)">Cards with images</button>
          <button class="example-btn" data-selector=".form-group:has(:invalid)">Invalid form groups</button>
          <button class="example-btn" data-selector="nav:has(.active)">Nav with active item</button>
          <button class="example-btn" data-selector=".list-item:has(.important)">Items with important badge</button>
          <button class="example-btn" data-selector=".card:has(h4)">Cards with headings</button>
          <button class="example-btn" data-selector=".form-group:has(.error)">Form groups with errors</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Selected Elements</h3>
        <div class="selected-count" id="selectedCount">3 elements selected</div>
        <div class="selected-list" id="selectedList">
          <div class="selected-item">• Card with Image</div>
          <div class="selected-item">• Another Card</div>
          <div class="selected-item">• Card with Image</div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.card:has(img) {
  border: 2px solid #6366f1;
  box-shadow: 0 4px 12px rgba(99,102,241,0.3);
  transform: translateY(-2px);
}</pre>
      </div>

      <div class="panel-section">
        <h3>:has() Use Cases</h3>
        <div class="use-cases">
          <div class="use-case">
            <strong>🎯 Parent Selection:</strong>
            <small>Style parents based on children</small>
          </div>
          <div class="use-case">
            <strong>✅ Form Validation:</strong>
            <small>Highlight invalid form groups</small>
          </div>
          <div class="use-case">
            <strong>🧭 Navigation:</strong>
            <small>Style nav based on active state</small>
          </div>
          <div class="use-case">
            <strong>📋 List Styling:</strong>
            <small>Format items based on content</small>
          </div>
          <div class="use-case">
            <strong>🔗 Sibling Selection:</strong>
            <small>Select following siblings</small>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Browser Support</h3>
        <div class="support-info">
          <div class="support-item">
            <span class="browser">Chrome</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Firefox</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Safari</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Edge</span>
            <span class="status supported">✓ Supported</span>
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var demoArea = document.getElementById('demoArea');
  var selectorInput = document.getElementById('selectorInput');
  var currentSelector = document.getElementById('currentSelector');
  var selectedCount = document.getElementById('selectedCount');
  var selectedList = document.getElementById('selectedList');
  var cssOut = document.getElementById('cssOut');

  var currentSelectorText = '.card:has(img)';

  function applyCustomSelector(selector) {
    // Clear previous highlights
    demoArea.querySelectorAll('.highlighted').forEach(el => {
      el.classList.remove('highlighted');
    });

    try {
      // Apply new selector
      var elements = document.querySelectorAll(selector);
      elements.forEach(el => el.classList.add('highlighted'));

      // Update displays
      currentSelector.textContent = selector;
      selectorInput.value = selector;
      currentSelectorText = selector;

      // Update selected elements info
      selectedCount.textContent = elements.length + ' element' + (elements.length !== 1 ? 's' : '') + ' selected';
      
      selectedList.innerHTML = elements.length > 0 ? 
        Array.from(elements).map(el => {
          var label = el.querySelector('h4, .item-content, label')?.textContent || 
                     el.textContent.trim().substring(0, 30) || 
                     el.tagName.toLowerCase();
          return '<div class="selected-item">• ' + label + '</div>';
        }).join('') : 
        '<div class="selected-item">No elements selected</div>';

      // Update CSS output
      cssOut.textContent = selector + ' {\\n  border: 2px solid #6366f1;\\n  box-shadow: 0 4px 12px rgba(99,102,241,0.3);\\n  transform: translateY(-2px);\\n}';
      
    } catch (error) {
      selectedCount.textContent = 'Invalid selector';
      selectedList.innerHTML = '<div class="selected-item error">Error: ' + error.message + '</div>';
    }
  }

  // Apply button
  document.getElementById('applySelector').addEventListener('click', function() {
    var selector = selectorInput.value.trim();
    if (selector) {
      applyCustomSelector(selector);
    }
  });

  // Enter key support
  selectorInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('applySelector').click();
    }
  });

  // Example buttons
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      applyCustomSelector(this.getAttribute('data-selector'));
    });
  });

  // Initialize
  applyCustomSelector(currentSelectorText);
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --highlight: #6366f1;
  --error: #ef4444;
  --success: #10b981;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  overflow-y: auto;
  max-height: 80vh;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.example-section h3 {
  margin: 0 0 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

/* Card Examples */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.card {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.card img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Form Examples */
.form-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  position: relative;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group input:invalid {
  border-color: var(--error);
}

.error {
  display: none;
  color: var(--error);
  font-size: 0.75rem;
  margin-top: 4px;
}

.form-group:has(:invalid) .error {
  display: block;
}

/* Navigation Examples */
.nav-demo {
  display: flex;
  gap: 8px;
  background: var(--panel-2);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.nav-item {
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: rgba(99,102,241,0.1);
}

.nav-item.active {
  background: var(--accent);
  color: white;
}

/* List Examples */
.list-demo {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.badge {
  background: var(--accent);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
}

.badge.important {
  background: var(--error);
}

.item-content {
  flex: 1;
  font-size: 0.85rem;
}

/* Highlighted elements */
.highlighted {
  border: 2px solid var(--highlight) !important;
  box-shadow: 0 4px 12px rgba(99,102,241,0.3) !important;
  transform: translateY(-2px) !important;
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Selector Builder */
.selector-builder {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.selector-builder input {
  flex: 1;
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'SF Mono', Menlo, monospace;
}

.selector-builder input:focus {
  outline: none;
  border-color: var(--accent);
}

.apply-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.15s ease;
}

.apply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(99,102,241,0.35);
}

.current-selector {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 6px;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.85rem;
  color: #c7d2fe;
  border: 1px solid var(--border-soft);
}

/* Example Buttons */
.example-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.example-btn {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'SF Mono', Menlo, monospace;
  text-align: left;
  transition: all 0.15s ease;
}

.example-btn:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Selected Elements */
.selected-count {
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.selected-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.selected-item {
  font-size: 0.85rem;
  color: var(--muted);
  padding: 6px 8px;
  background: var(--panel-2);
  border-radius: 4px;
  border: 1px solid var(--border-soft);
}

.selected-item.error {
  color: var(--error);
  border-color: var(--error);
}

/* Code Display */
.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
}

/* Use Cases */
.use-cases {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.use-case {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
}

.use-case strong {
  color: var(--text);
  font-size: 0.85rem;
  display: block;
  margin-bottom: 2px;
}

.use-case small {
  color: var(--muted);
  font-size: 0.75rem;
}

/* Browser Support */
.support-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.support-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--panel-2);
  border-radius: 6px;
  font-size: 0.85rem;
}

.browser {
  font-weight: 600;
}

.status.supported {
  color: var(--success);
  font-weight: 600;
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-where':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS :where() Pseudo-class Playground</h1>
    <p class="subtitle">Master specificity reduction with :where(). Creates a selector list with zero specificity, perfect for utility classes and resets.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area" id="demoArea">
        <!-- Button Examples -->
        <div class="example-section">
          <h3>Button Styling</h3>
          <div class="button-group">
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-danger">Danger Button</button>
            <button class="btn" id="special-btn">Special Button</button>
          </div>
        </div>

        <!-- Card Examples -->
        <div class="example-section">
          <h3>Card Components</h3>
          <div class="card-grid">
            <div class="card card-featured">
              <h4>Featured Card</h4>
              <p>This card has the featured class and special styling.</p>
            </div>
            <div class="card">
              <h4>Regular Card</h4>
              <p>This is a regular card with default styling.</p>
            </div>
            <div class="card card-featured">
              <h4>Another Featured</h4>
              <p>This card is also featured.</p>
            </div>
          </div>
        </div>

        <!-- Form Examples -->
        <div class="example-section">
          <h3>Form Elements</h3>
          <div class="form-demo">
            <input type="text" class="form-input" placeholder="Regular input">
            <input type="email" class="form-input input-error" placeholder="Error input">
            <input type="password" class="form-input input-success" placeholder="Success input">
            <textarea class="form-input" placeholder="Textarea"></textarea>
          </div>
        </div>

        <!-- List Examples -->
        <div class="example-section">
          <h3>Navigation Lists</h3>
          <nav class="nav-demo">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link nav-active">About</a>
            <a href="#" class="nav-link">Services</a>
            <a href="#" class="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Selector Comparison</h3>
        <div class="selector-comparison">
          <div class="selector-group">
            <label>Normal Selector</label>
            <input type="text" id="normalSelector" value=".btn.btn-primary" readonly>
            <div class="specificity-badge normal">Specificity: 20</div>
          </div>
          <div class="vs-divider">VS</div>
          <div class="selector-group">
            <label>:where() Selector</label>
            <input type="text" id="whereSelector" value=".btn:where(.btn-primary)" readonly>
            <div class="specificity-badge where">Specificity: 10</div>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Active Examples</h3>
        <div class="example-buttons">
          <button class="example-btn active" data-example="buttons">Button Styling</button>
          <button class="example-btn" data-example="cards">Card Components</button>
          <button class="example-btn" data-example="forms">Form Elements</button>
          <button class="example-btn" data-example="navigation">Navigation Lists</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Specificity Battle</h3>
        <div class="battle-arena">
          <div class="competitor normal">
            <div class="competitor-name">.btn.btn-primary</div>
            <div class="specificity-bar">
              <div class="bar-fill" style="width: 20%"></div>
            </div>
            <div class="specificity-value">20</div>
          </div>
          <div class="battle-winner">← Wins</div>
          <div class="competitor where">
            <div class="competitor-name">.btn:where(.btn-primary)</div>
            <div class="specificity-bar">
              <div class="bar-fill" style="width: 10%"></div>
            </div>
            <div class="specificity-value">10</div>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">/* Normal selector - higher specificity */
.btn.btn-primary {
  background: #3b82f6;
  color: white;
}

/* :where() selector - zero specificity for classes inside */
.btn:where(.btn-primary) {
  background: #3b82f6;
  color: white;
}

/* This will override :where() but not normal selector */
#special-btn {
  background: #f59e0b !important;
}</pre>
      </div>

      <div class="panel-section">
        <h3>:where() Benefits</h3>
        <div class="benefits">
          <div class="benefit">
            <strong>🎯 Zero Specificity:</strong>
            <small>Classes inside :where() have 0 specificity</small>
          </div>
          <div class="benefit">
            <strong>🔧 Easy Overrides:</strong>
            <small>Simple to override with other selectors</small>
          </div>
          <div class="benefit">
            <strong>📦 Utility Classes:</strong>
            <small>Perfect for utility-first frameworks</small>
          </div>
          <div class="benefit">
            <strong>🎨 Component Libraries:</strong>
            <small>Users can easily customize components</small>
          </div>
          <div class="benefit">
            <strong>🔄 CSS Resets:</strong>
            <small>Great for reset stylesheets</small>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Real Example</h3>
        <div class="real-example">
          <div class="example-title">Button Component</div>
          <div class="example-code">
            <strong>Without :where():</strong><br>
            <code>.btn.btn-primary { specificity: 20 }</code><br><br>
            <strong>With :where():</strong><br>
            <code>.btn:where(.btn-primary) { specificity: 10 }</code><br><br>
            <strong>Result:</strong> Users can easily override with <code>#my-btn { specificity: 100 }</code>
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var examples = {
    buttons: {
      normal: '.btn.btn-primary',
      where: '.btn:where(.btn-primary)',
      normalSpecificity: 20,
      whereSpecificity: 10,
      css: '/* Normal selector - higher specificity */\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n\n/* :where() selector - zero specificity for classes inside */\n.btn:where(.btn-primary) {\n  background: #3b82f6;\n  color: white;\n}\n\n/* This will override :where() but not normal selector */\n#special-btn {\n  background: #f59e0b !important;\n}'
    },
    cards: {
      normal: '.card.card-featured',
      where: '.card:where(.card-featured)',
      normalSpecificity: 20,
      whereSpecificity: 10,
      css: '/* Normal selector */\n.card.card-featured {\n  border: 2px solid #f59e0b;\n  box-shadow: 0 4px 12px rgba(245,158,11,0.3);\n}\n\n/* :where() selector */\n.card:where(.card-featured) {\n  border: 2px solid #f59e0b;\n  box-shadow: 0 4px 12px rgba(245,158,11,0.3);\n}\n\n/* Easy override */\n#featured-card {\n  border-color: #ef4444 !important;\n}'
    },
    forms: {
      normal: '.form-input.input-error',
      where: '.form-input:where(.input-error)',
      normalSpecificity: 20,
      whereSpecificity: 10,
      css: '/* Normal selector */\n.form-input.input-error {\n  border-color: #ef4444;\n  background: rgba(239,68,68,0.1);\n}\n\n/* :where() selector */\n.form-input:where(.input-error) {\n  border-color: #ef4444;\n  background: rgba(239,68,68,0.1);\n}\n\n/* Easy to override */\n.email-input {\n  border-color: #3b82f6 !important;\n}'
    },
    navigation: {
      normal: '.nav-link.nav-active',
      where: '.nav-link:where(.nav-active)',
      normalSpecificity: 20,
      whereSpecificity: 10,
      css: '/* Normal selector */\n.nav-link.nav-active {\n  background: #6366f1;\n  color: white;\n}\n\n/* :where() selector */\n.nav-link:where(.nav-active) {\n  background: #6366f1;\n  color: white;\n}\n\n/* Easy override */\n.main-nav .nav-active {\n  background: #10b981 !important;\n}'
    }
  };

  var currentExample = 'buttons';

  function updateExample(exampleName) {
    var example = examples[exampleName];
    
    // Update selector inputs
    document.getElementById('normalSelector').value = example.normal;
    document.getElementById('whereSelector').value = example.where;
    
    // Update specificity badges
    document.querySelector('.specificity-badge.normal').textContent = 'Specificity: ' + example.normalSpecificity;
    document.querySelector('.specificity-badge.where').textContent = 'Specificity: ' + example.whereSpecificity;
    
    // Update battle arena
    var normalBar = document.querySelector('.competitor.normal .bar-fill');
    var whereBar = document.querySelector('.competitor.where .bar-fill');
    var normalValue = document.querySelector('.competitor.normal .specificity-value');
    var whereValue = document.querySelector('.competitor.where .specificity-value');
    
    normalBar.style.width = (example.normalSpecificity / 2) + '%';
    whereBar.style.width = (example.whereSpecificity / 2) + '%';
    normalValue.textContent = example.normalSpecificity;
    whereValue.textContent = example.whereSpecificity;
    
    // Update CSS output
    document.getElementById('cssOut').textContent = example.css;
    
    // Update active button
    document.querySelectorAll('.example-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-example') === exampleName);
    });
    
    currentExample = exampleName;
  }

  // Example button handlers
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      updateExample(this.getAttribute('data-example'));
    });
  });

  // Initialize
  updateExample(currentExample);
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --primary: #3b82f6;
  --secondary: #6b7280;
  --danger: #ef4444;
  --success: #10b981;
  --warning: #f59e0b;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  overflow-y: auto;
  max-height: 80vh;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.example-section h3 {
  margin: 0 0 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

/* Button Examples */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--border-soft);
}

.btn:hover {
  transform: translateY(-1px);
}

/* Card Examples */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.card {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.card h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Form Examples */
.form-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-input {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

/* Navigation Examples */
.nav-demo {
  display: flex;
  gap: 8px;
  background: var(--panel-2);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.nav-link {
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(99,102,241,0.1);
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Selector Comparison */
.selector-comparison {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.selector-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}

.selector-group input {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'SF Mono', Menlo, monospace;
}

.specificity-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  align-self: flex-start;
}

.specificity-badge.normal {
  background: rgba(59,130,246,0.2);
  color: #60a5fa;
}

.specificity-badge.where {
  background: rgba(16,185,129,0.2);
  color: #34d399;
}

.vs-divider {
  text-align: center;
  font-weight: 700;
  color: var(--muted);
  font-size: 0.85rem;
  padding: 8px;
}

/* Example Buttons */
.example-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.example-btn {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.15s ease;
}

.example-btn:hover {
  background: rgba(99,102,241,0.1);
}

.example-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Battle Arena */
.battle-arena {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--panel-2);
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.competitor {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.competitor-name {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
}

.specificity-bar {
  height: 8px;
  background: rgba(148,163,184,0.2);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--accent);
  transition: width 0.3s ease;
}

.competitor.normal .bar-fill {
  background: var(--primary);
}

.competitor.where .bar-fill {
  background: var(--success);
}

.specificity-value {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.battle-winner {
  font-weight: 700;
  color: var(--primary);
  font-size: 0.85rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* Code Display */
.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.75rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
  line-height: 1.4;
}

/* Benefits */
.benefits {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.benefit {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
}

.benefit strong {
  color: var(--text);
  font-size: 0.85rem;
  display: block;
  margin-bottom: 2px;
}

.benefit small {
  color: var(--muted);
  font-size: 0.75rem;
}

/* Real Example */
.real-example {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.example-title {
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 8px;
  color: var(--text);
}

.example-code {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.75rem;
  line-height: 1.5;
}

.example-code code {
  color: #c7d2fe;
  background: rgba(99,102,241,0.1);
  padding: 2px 4px;
  border-radius: 3px;
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-at-rules':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS @at-rules Playground</h1>
    <p class="subtitle">Master CSS conditional rules: @media, @supports, @container, @import, @keyframes, and more. Control styles based on conditions.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area" id="demoArea">
        <!-- Responsive Demo -->
        <div class="demo-section">
          <h3>Responsive Layout (@media)</h3>
          <div class="responsive-grid" id="responsiveGrid">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
          </div>
          <div class="viewport-info" id="viewportInfo">
            Viewport: <span id="viewportSize">1200px</span>
          </div>
        </div>

        <!-- Feature Support Demo -->
        <div class="demo-section">
          <h3>Feature Detection (@supports)</h3>
          <div class="feature-demo" id="featureDemo">
            <div class="feature-box">
              <h4>Grid Support</h4>
              <p id="gridSupport">Checking CSS Grid support...</p>
            </div>
            <div class="feature-box">
              <h4>Custom Properties</h4>
              <p id="cssVarsSupport">Checking CSS Variables support...</p>
            </div>
            <div class="feature-box">
              <h4>Backdrop Filter</h4>
              <p id="backdropSupport">Checking backdrop-filter support...</p>
            </div>
          </div>
        </div>

        <!-- Container Query Demo -->
        <div class="demo-section">
          <h3>Container Queries (@container)</h3>
          <div class="container-wrapper" id="containerWrapper">
            <div class="container-query-demo">
              <div class="card">
                <h4>Card 1</h4>
                <p>This card adapts to its container size.</p>
              </div>
              <div class="card">
                <h4>Card 2</h4>
                <p>Container queries enable component-level responsiveness.</p>
              </div>
            </div>
          </div>
          <div class="container-controls">
            <label>Container Width: <span id="containerWidth">400px</span></label>
            <input type="range" id="containerSlider" min="200" max="600" value="400">
          </div>
        </div>

        <!-- Animation Demo -->
        <div class="demo-section">
          <h3>Animations (@keyframes)</h3>
          <div class="animation-demo">
            <div class="animated-box" id="animatedBox">
              <span>Animated</span>
            </div>
            <div class="animation-controls">
              <button class="anim-btn" data-animation="pulse">Pulse</button>
              <button class="anim-btn" data-animation="slide">Slide</button>
              <button class="anim-btn" data-animation="rotate">Rotate</button>
              <button class="anim-btn" data-animation="bounce">Bounce</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>Active @at-rule</h3>
        <div class="rule-selector">
          <select id="ruleType">
            <option value="media">@media</option>
            <option value="supports">@supports</option>
            <option value="container">@container</option>
            <option value="keyframes">@keyframes</option>
            <option value="import">@import</option>
            <option value="font-face">@font-face</option>
          </select>
        </div>
      </div>

      <div class="panel-section">
        <h3>Rule Configuration</h3>
        <div class="rule-config" id="ruleConfig">
          <div class="config-group">
            <label>Media Query</label>
            <select id="mediaQuery">
              <option value="screen">screen</option>
              <option value="print">print</option>
              <option value="(max-width: 768px)">max-width: 768px</option>
              <option value="(min-width: 1024px)">min-width: 1024px</option>
              <option value="(orientation: portrait)">orientation: portrait</option>
            </select>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .grid-item {
    padding: 16px;
    font-size: 14px;
  }
}</pre>
      </div>

      <div class="panel-section">
        <h3>Live Conditions</h3>
        <div class="conditions-list">
          <div class="condition-item">
            <span class="condition-name">Viewport Width:</span>
            <span class="condition-value" id="liveViewport">1200px</span>
          </div>
          <div class="condition-item">
            <span class="condition-name">CSS Grid:</span>
            <span class="condition-value supported" id="liveGrid">✓ Supported</span>
          </div>
          <div class="condition-item">
            <span class="condition-name">Container Size:</span>
            <span class="condition-value" id="liveContainer">400px</span>
          </div>
          <div class="condition-item">
            <span class="condition-name">Dark Mode:</span>
            <span class="condition-value" id="liveDarkMode">No</span>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>@at-rule Types</h3>
        <div class="rule-types">
          <div class="rule-type">
            <strong>@media</strong>
            <small>Responsive design based on viewport</small>
          </div>
          <div class="rule-type">
            <strong>@supports</strong>
            <small>Feature detection and fallbacks</small>
          </div>
          <div class="rule-type">
            <strong>@container</strong>
            <small>Component-level responsiveness</small>
          </div>
          <div class="rule-type">
            <strong>@keyframes</strong>
            <small>Animation definitions</small>
          </div>
          <div class="rule-type">
            <strong>@import</strong>
            <small>Import external stylesheets</small>
          </div>
          <div class="rule-type">
            <strong>@font-face</strong>
            <small>Custom font definitions</small>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Browser Support</h3>
        <div class="support-grid">
          <div class="support-item">
            <span class="rule-name">@media</span>
            <span class="support-level">Excellent</span>
          </div>
          <div class="support-item">
            <span class="rule-name">@supports</span>
            <span class="support-level">Excellent</span>
          </div>
          <div class="support-item">
            <span class="rule-name">@container</span>
            <span class="support-level">Good</span>
          </div>
          <div class="support-item">
            <span class="rule-name">@keyframes</span>
            <span class="support-level">Excellent</span>
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var currentRule = 'media';
  var currentAnimation = 'pulse';

  // Update viewport info
  function updateViewportInfo() {
    var width = window.innerWidth;
    document.getElementById('viewportSize').textContent = width + 'px';
    document.getElementById('liveViewport').textContent = width + 'px';
    
    // Update responsive grid classes
    var grid = document.getElementById('responsiveGrid');
    if (width <= 768) {
      grid.classList.add('mobile');
    } else {
      grid.classList.remove('mobile');
    }
  }

  // Check feature support
  function checkFeatureSupport() {
    // CSS Grid
    var gridSupported = CSS.supports('display', 'grid');
    document.getElementById('gridSupport').textContent = gridSupported ? '✓ Supported' : '✗ Not Supported';
    document.getElementById('liveGrid').textContent = gridSupported ? '✓ Supported' : '✗ Not Supported';
    document.getElementById('liveGrid').className = gridSupported ? 'condition-value supported' : 'condition-value not-supported';

    // CSS Variables
    var varsSupported = CSS.supports('color', 'var(--test)');
    document.getElementById('cssVarsSupport').textContent = varsSupported ? '✓ Supported' : '✗ Not Supported';

    // Backdrop Filter
    var backdropSupported = CSS.supports('backdrop-filter', 'blur(10px)');
    document.getElementById('backdropSupport').textContent = backdropSupported ? '✓ Supported' : '✗ Not Supported';
  }

  // Container query demo
  function updateContainerSize() {
    var slider = document.getElementById('containerSlider');
    var wrapper = document.getElementById('containerWrapper');
    var width = slider.value;
    
    wrapper.style.width = width + 'px';
    document.getElementById('containerWidth').textContent = width + 'px';
    document.getElementById('liveContainer').textContent = width + 'px';
  }

  // Animation controls
  function setAnimation(type) {
    var box = document.getElementById('animatedBox');
    box.className = 'animated-box anim-' + type;
    
    // Update CSS output
    var cssOut = document.getElementById('cssOut');
    var animations = {
      pulse: '@keyframes pulse {\\n  0%, 100% { transform: scale(1); }\\n  50% { transform: scale(1.1); }\\n}',
      slide: '@keyframes slide {\\n  0% { transform: translateX(-100%); }\\n  100% { transform: translateX(100%); }\\n}',
      rotate: '@keyframes rotate {\\n  0% { transform: rotate(0deg); }\\n  100% { transform: rotate(360deg); }\\n}',
      bounce: '@keyframes bounce {\\n  0%, 100% { transform: translateY(0); }\\n  50% { transform: translateY(-20px); }\\n}'
    };
    
    cssOut.textContent = animations[type] + '\\n\\n.animated-box {\\n  animation: ' + type + ' 2s infinite;\\n}';
  }

  // Rule type selector
  document.getElementById('ruleType').addEventListener('change', function() {
    currentRule = this.value;
    updateRuleConfig();
  });

  function updateRuleConfig() {
    var config = document.getElementById('ruleConfig');
    var cssOut = document.getElementById('cssOut');
    
    var configs = {
      media: '<div class="config-group">\\n  <label>Media Query</label>\\n  <select id="mediaQuery">\\n    <option value="screen">screen</option>\\n    <option value="print">print</option>\\n    <option value="(max-width: 768px)">max-width: 768px</option>\\n    <option value="(min-width: 1024px)">min-width: 1024px</option>\\n    <option value="(orientation: portrait)">orientation: portrait</option>\\n  </select>\\n</div>',
      supports: '<div class="config-group">\\n  <label>Feature Test</label>\\n  <select id="featureTest">\\n    <option value="display: grid">CSS Grid</option>\\n    <option value="position: sticky">position: sticky</option>\\n    <option value="backdrop-filter: blur()">backdrop-filter</option>\\n  </select>\\n</div>',
      container: '<div class="config-group">\\n  <label>Container Query</label>\\n  <select id="containerQuery">\\n    <option value="(min-width: 300px)">min-width: 300px</option>\\n    <option value="(max-width: 400px)">max-width: 400px</option>\\n    <option value="(orientation: portrait)">orientation: portrait</option>\\n  </select>\\n</div>',
      keyframes: '<div class="config-group">\\n  <label>Animation Type</label>\\n  <select id="animationType">\\n    <option value="fadeIn">Fade In</option>\\n    <option value="slideIn">Slide In</option>\\n    <option value="zoomIn">Zoom In</option>\\n  </select>\\n</div>',
      import: '<div class="config-group">\\n  <label>Import Type</label>\\n  <select id="importType">\\n    <option value="url">URL</option>\\n    <option value="screen">Screen Only</option>\\n    <option value="print">Print Only</option>\\n  </select>\\n</div>',
      'font-face': '<div class="config-group">\\n  <label>Font Format</label>\\n  <select id="fontFormat">\\n    <option value="woff2">WOFF2</option>\\n    <option value="woff">WOFF</option>\\n    <option value="truetype">TrueType</option>\\n  </select>\\n</div>'
    };
    
    var cssExamples = {
      media: '@media (max-width: 768px) {\\n  .responsive-grid {\\n    grid-template-columns: 1fr;\\n    gap: 12px;\\n  }\\n}',
      supports: '@supports (display: grid) {\\n  .layout {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n} else {\\n  .layout {\\n    display: flex;\\n    flex-wrap: wrap;\\n  }\\n}',
      container: '@container (min-width: 300px) {\\n  .card {\\n    grid-column: span 2;\\n  }\\n}',
      keyframes: '@keyframes fadeIn {\\n  0% { opacity: 0; }\\n  100% { opacity: 1; }\\n}\\n\\n.element {\\n  animation: fadeIn 0.5s ease-in;\\n}',
      import: '@import url("styles.css") screen;\\n@import url("print.css") print;',
      'font-face': '@font-face {\\n  font-family: "Custom Font";\\n  src: url("font.woff2") format("woff2");\\n  font-weight: 400;\\n  font-style: normal;\\n}'
    };
    
    config.innerHTML = configs[currentRule];
    cssOut.textContent = cssExamples[currentRule];
  }

  // Event listeners
  window.addEventListener('resize', updateViewportInfo);
  document.getElementById('containerSlider').addEventListener('input', updateContainerSize);
  
  document.querySelectorAll('.anim-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setAnimation(this.getAttribute('data-animation'));
    });
  });

  // Initialize
  updateViewportInfo();
  checkFeatureSupport();
  updateContainerSize();
  setAnimation('pulse');
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --success: #10b981;
  --error: #ef4444;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  overflow-y: auto;
  max-height: 80vh;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section h3 {
  margin: 0 0 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

/* Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  transition: all 0.3s ease;
}

.responsive-grid.mobile {
  grid-template-columns: 1fr;
  gap: 12px;
}

.grid-item {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.viewport-info {
  margin-top: 12px;
  padding: 12px;
  background: var(--panel-2);
  border-radius: 6px;
  font-size: 0.85rem;
  text-align: center;
}

/* Feature Support */
.feature-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.feature-box {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.feature-box h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  font-weight: 600;
}

.feature-box p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
}

/* Container Query Demo */
.container-wrapper {
  width: 400px;
  border: 2px dashed var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  background: rgba(99,102,241,0.02);
  transition: width 0.3s ease;
}

.container-query-demo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.card {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  padding: 12px;
}

.card h4 {
  margin: 0 0 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 0.75rem;
  color: var(--muted);
}

.container-controls {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.container-controls label {
  font-size: 0.85rem;
  font-weight: 600;
}

.container-controls input[type="range"] {
  width: 100%;
}

/* Animation Demo */
.animation-demo {
  text-align: center;
}

.animated-box {
  width: 100px;
  height: 100px;
  background: var(--accent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin: 0 auto 20px;
}

.animation-controls {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.anim-btn {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.15s ease;
}

.anim-btn:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Animations */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes slide {
  0% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(-20px); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.anim-pulse { animation: pulse 2s infinite; }
.anim-slide { animation: slide 2s infinite; }
.anim-rotate { animation: rotate 2s infinite linear; }
.anim-bounce { animation: bounce 1s infinite; }

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Rule Selector */
.rule-selector select {
  width: 100%;
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
}

.rule-selector select:focus {
  outline: none;
  border-color: var(--accent);
}

/* Rule Config */
.rule-config {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.config-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.config-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}

.config-group select {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: inherit;
}

/* Code Display */
.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.75rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
  line-height: 1.4;
}

/* Conditions List */
.conditions-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.condition-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--panel-2);
  border-radius: 6px;
  font-size: 0.85rem;
}

.condition-name {
  font-weight: 600;
}

.condition-value {
  font-variant-numeric: tabular-nums;
}

.condition-value.supported {
  color: var(--success);
}

.condition-value.not-supported {
  color: var(--error);
}

/* Rule Types */
.rule-types {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rule-type {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
}

.rule-type strong {
  color: var(--text);
  font-size: 0.85rem;
  display: block;
  margin-bottom: 2px;
}

.rule-type small {
  color: var(--muted);
  font-size: 0.75rem;
}

/* Support Grid */
.support-grid {
  display: grid;
  gap: 8px;
}

.support-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--panel-2);
  border-radius: 6px;
  font-size: 0.85rem;
}

.rule-name {
  font-weight: 600;
  font-family: 'SF Mono', Menlo, monospace;
}

.support-level {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.support-level:contains("Excellent") {
  background: rgba(16,185,129,0.2);
  color: var(--success);
}

.support-level:contains("Good") {
  background: rgba(245,158,11,0.2);
  color: var(--warning);
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-not':
        html = `<div class="app">
  <header class="app-header">
    <h1>CSS :not() Pseudo-class Playground</h1>
    <p class="subtitle">Master CSS negation with :not(). Select elements that don't match specific selectors. Perfect for exclusion patterns and edge cases.</p>
  </header>

  <main class="app-main">
    <section class="stage">
      <div class="demo-area" id="demoArea">
        <!-- Button Examples -->
        <div class="example-section">
          <h3>Button Styling</h3>
          <div class="button-group">
            <button class="btn btn-primary">Primary</button>
            <button class="btn">Default</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn" disabled>Disabled</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn">Default 2</button>
          </div>
        </div>

        <!-- Form Examples -->
        <div class="example-section">
          <h3>Form Validation</h3>
          <div class="form-demo">
            <input type="text" class="form-input" placeholder="Text input">
            <input type="email" class="form-input" placeholder="Email input">
            <input type="password" class="form-input" placeholder="Password input">
            <input type="text" class="form-input invalid" placeholder="Invalid input">
            <textarea class="form-input" placeholder="Textarea"></textarea>
          </div>
        </div>

        <!-- List Examples -->
        <div class="example-section">
          <h3>List Items</h3>
          <ul class="list-demo">
            <li class="list-item">First item</li>
            <li class="list-item featured">Featured item</li>
            <li class="list-item">Regular item</li>
            <li class="list-item featured">Another featured</li>
            <li class="list-item">Last item</li>
          </ul>
        </div>

        <!-- Card Examples -->
        <div class="example-section">
          <h3>Card Gallery</h3>
          <div class="card-grid">
            <div class="card">
              <h4>Regular Card</h4>
              <p>Standard card content</p>
            </div>
            <div class="card featured">
              <h4>Featured Card</h4>
              <p>This card is featured</p>
            </div>
            <div class="card">
              <h4>Another Card</h4>
              <p>More content here</p>
            </div>
            <div class="card special">
              <h4>Special Card</h4>
              <p>This card is special</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside class="panel">
      <div class="panel-section">
        <h3>:not() Selector</h3>
        <div class="selector-builder">
          <input type="text" id="selectorInput" placeholder="e.g., .btn:not(.btn-primary)" value=".btn:not(.btn-primary)">
          <button class="apply-btn" id="applySelector">Apply</button>
        </div>
        <div class="current-selector" id="currentSelector">
          .btn:not(.btn-primary)
        </div>
      </div>

      <div class="panel-section">
        <h3>Quick Examples</h3>
        <div class="example-buttons">
          <button class="example-btn active" data-selector=".btn:not(.btn-primary)">Buttons (not primary)</button>
          <button class="example-btn" data-selector=".form-input:not(.invalid)">Valid inputs</button>
          <button class="example-btn" data-selector=".list-item:not(.featured)">Regular items</button>
          <button class="example-btn" data-selector=".card:not(.featured):not(.special)">Regular cards</button>
          <button class="example-btn" data-selector="button:not([disabled])">Enabled buttons</button>
          <button class="example-btn" data-selector=".btn:not(:first-child)">Not first button</button>
        </div>
      </div>

      <div class="panel-section">
        <h3>Selected Elements</h3>
        <div class="selected-count" id="selectedCount">4 elements selected</div>
        <div class="selected-list" id="selectedList">
          <div class="selected-item">• Default</div>
          <div class="selected-item">• Secondary</div>
          <div class="selected-item">• Disabled</div>
          <div class="selected-item">• Danger</div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Generated CSS</h3>
        <pre class="code" id="cssOut">.btn:not(.btn-primary) {
  background: #6b7280;
  color: white;
  opacity: 0.8;
}

/* Chaining :not() selectors */
.card:not(.featured):not(.special) {
  border: 1px solid #e5e7eb;
  box-shadow: none;
}</pre>
      </div>

      <div class="panel-section">
        <h3>:not() Patterns</h3>
        <div class="patterns">
          <div class="pattern">
            <strong>🎯 Exclude Classes:</strong>
            <small>.btn:not(.primary) - All buttons except primary</small>
          </div>
          <div class="pattern">
            <strong>🚫 Exclude States:</strong>
            <small>input:not(:disabled) - Only enabled inputs</small>
          </div>
          <div class="pattern">
            <strong>🔗 Chain Multiple:</strong>
            <small>.item:not(.featured):not(.special) - Exclude multiple</small>
          </div>
          <div class="pattern">
            <strong>📍 Positional Exclusion:</strong>
            <small>li:not(:first-child) - All but first item</small>
          </div>
          <div class="pattern">
            <strong>🏷️ Attribute Exclusion:</strong>
            <small>a:not([target="_blank"]) - Internal links only</small>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Advanced Examples</h3>
        <div class="advanced-examples">
          <div class="advanced-example">
            <div class="example-title">Form Validation</div>
            <div class="example-code">
              <code>.form-input:not(:invalid):not(:disabled) { border-color: green; }</code>
            </div>
          </div>
          <div class="advanced-example">
            <div class="example-title">Navigation</div>
            <div class="example-code">
              <code>.nav-item:not(.active):hover { background: #f3f4f6; }</code>
            </div>
          </div>
          <div class="advanced-example">
            <div class="example-title">Complex Exclusion</div>
            <div class="example-code">
              <code>.card:not(.featured):not([data-featured]) { opacity: 0.7; }</code>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-section">
        <h3>Browser Support</h3>
        <div class="support-info">
          <div class="support-item">
            <span class="browser">Chrome</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Firefox</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Safari</span>
            <span class="status supported">✓ Supported</span>
          </div>
          <div class="support-item">
            <span class="browser">Edge</span>
            <span class="status supported">✓ Supported</span>
          </div>
        </div>
      </div>
    </aside>
  </main>
</div>

<script>
(function () {
  var demoArea = document.getElementById('demoArea');
  var selectorInput = document.getElementById('selectorInput');
  var currentSelector = document.getElementById('currentSelector');
  var selectedCount = document.getElementById('selectedCount');
  var selectedList = document.getElementById('selectedList');
  var cssOut = document.getElementById('cssOut');

  var currentSelectorText = '.btn:not(.btn-primary)';

  function applyCustomSelector(selector) {
    // Clear previous highlights
    demoArea.querySelectorAll('.highlighted').forEach(el => {
      el.classList.remove('highlighted');
    });

    try {
      // Apply new selector
      var elements = document.querySelectorAll(selector);
      elements.forEach(el => el.classList.add('highlighted'));

      // Update displays
      currentSelector.textContent = selector;
      selectorInput.value = selector;
      currentSelectorText = selector;

      // Update selected elements info
      selectedCount.textContent = elements.length + ' element' + (elements.length !== 1 ? 's' : '') + ' selected';
      
      selectedList.innerHTML = elements.length > 0 ? 
        Array.from(elements).map(el => {
          var label = el.textContent.trim().substring(0, 30) || 
                     el.getAttribute('placeholder') || 
                     el.tagName.toLowerCase();
          return '<div class="selected-item">• ' + label + '</div>';
        }).join('') : 
        '<div class="selected-item">No elements selected</div>';

      // Update CSS output
      var cssExamples = {
        '.btn:not(.btn-primary)': '.btn:not(.btn-primary) {\\n  background: #6b7280;\\n  color: white;\\n  opacity: 0.8;\\n}',
        '.form-input:not(.invalid)': '.form-input:not(.invalid) {\\n  border-color: #10b981;\\n  background: rgba(16,185,129,0.05);\\n}',
        '.list-item:not(.featured)': '.list-item:not(.featured) {\\n  opacity: 0.7;\\n  font-weight: normal;\\n}',
        '.card:not(.featured):not(.special)': '.card:not(.featured):not(.special) {\\n  border: 1px solid #e5e7eb;\\n  box-shadow: none;\\n}',
        'button:not([disabled])': 'button:not([disabled]) {\\n  cursor: pointer;\\n  opacity: 1;\\n}',
        '.btn:not(:first-child)': '.btn:not(:first-child) {\\n  margin-left: 8px;\\n}'
      };
      
      cssOut.textContent = cssExamples[selector] || selector + ' {\\n  /* Your styles here */\\n}';
      
    } catch (error) {
      selectedCount.textContent = 'Invalid selector';
      selectedList.innerHTML = '<div class="selected-item error">Error: ' + error.message + '</div>';
    }
  }

  // Apply button
  document.getElementById('applySelector').addEventListener('click', function() {
    var selector = selectorInput.value.trim();
    if (selector) {
      applyCustomSelector(selector);
    }
  });

  // Enter key support
  selectorInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('applySelector').click();
    }
  });

  // Example buttons
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      applyCustomSelector(this.getAttribute('data-selector'));
      // Update active button
      document.querySelectorAll('.example-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Initialize
  applyCustomSelector(currentSelectorText);
})();
</script>`;
        css = `*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #0f172a;
  --panel: #1e293b;
  --panel-2: #0b1220;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #6366f1;
  --border-soft: rgba(148,163,184,0.15);
  --highlight: #6366f1;
  --error: #ef4444;
  --success: #10b981;
  --primary: #3b82f6;
  --secondary: #6b7280;
  --danger: #ef4444;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(236,72,153,0.12), transparent 50%),
    var(--bg);
  color: var(--text);
}

.app { max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; }

.app-header { text-align: center; margin-bottom: 28px; }
.app-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #818cf8, #f472b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 6px auto 0; color: var(--muted); font-size: 0.95rem;
  max-width: 640px; line-height: 1.5;
}

.app-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;
}

/* Stage */
.stage {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 460px;
  padding: 24px;
  overflow-y: auto;
  max-height: 80vh;
  background-image:
    linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

.demo-area {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.example-section h3 {
  margin: 0 0 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

/* Button Examples */
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--border-soft);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form Examples */
.form-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-input {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

.form-input.invalid {
  border-color: var(--error);
  background: rgba(239,68,68,0.1);
}

/* List Examples */
.list-demo {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.list-item.featured {
  background: rgba(99,102,241,0.1);
  border-color: var(--accent);
  font-weight: 600;
}

/* Card Examples */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.card {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.card.featured {
  border-color: var(--accent);
  background: rgba(99,102,241,0.1);
}

.card.special {
  border-color: var(--warning);
  background: rgba(245,158,11,0.1);
}

.card h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Highlighted elements */
.highlighted {
  border: 2px solid var(--highlight) !important;
  box-shadow: 0 4px 12px rgba(99,102,241,0.3) !important;
  transform: translateY(-2px) !important;
}

/* Panel */
.panel {
  background: var(--panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.panel::-webkit-scrollbar { width: 6px; }
.panel::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 3px; }

.panel-section h3 {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Selector Builder */
.selector-builder {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.selector-builder input {
  flex: 1;
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'SF Mono', Menlo, monospace;
}

.selector-builder input:focus {
  outline: none;
  border-color: var(--accent);
}

.apply-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.15s ease;
}

.apply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(99,102,241,0.35);
}

.current-selector {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 6px;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.85rem;
  color: #c7d2fe;
  border: 1px solid var(--border-soft);
}

/* Example Buttons */
.example-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.example-btn {
  background: var(--panel-2);
  border: 1px solid var(--border-soft);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'SF Mono', Menlo, monospace;
  text-align: left;
  transition: all 0.15s ease;
}

.example-btn:hover {
  background: rgba(99,102,241,0.1);
}

.example-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* Selected Elements */
.selected-count {
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.selected-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.selected-item {
  font-size: 0.85rem;
  color: var(--muted);
  padding: 6px 8px;
  background: var(--panel-2);
  border-radius: 4px;
  border: 1px solid var(--border-soft);
}

.selected-item.error {
  color: var(--error);
  border-color: var(--error);
}

/* Code Display */
.code {
  margin: 0;
  background: var(--panel-2);
  color: #c7d2fe;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.78rem;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  border: 1px solid var(--border-soft);
  line-height: 1.4;
}

/* Patterns */
.patterns {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pattern {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-soft);
}

.pattern strong {
  color: var(--text);
  font-size: 0.85rem;
  display: block;
  margin-bottom: 2px;
}

.pattern small {
  color: var(--muted);
  font-size: 0.75rem;
  font-family: 'SF Mono', Menlo, monospace;
}

/* Advanced Examples */
.advanced-examples {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.advanced-example {
  background: var(--panel-2);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-soft);
}

.example-title {
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: var(--text);
}

.example-code {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 0.75rem;
}

.example-code code {
  color: #c7d2fe;
  background: rgba(99,102,241,0.1);
  padding: 2px 4px;
  border-radius: 3px;
}

/* Browser Support */
.support-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.support-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--panel-2);
  border-radius: 6px;
  font-size: 0.85rem;
}

.browser {
  font-weight: 600;
}

.status.supported {
  color: var(--success);
  font-weight: 600;
}

@media (max-width: 920px) {
  .app-main { grid-template-columns: 1fr; }
  .panel { max-height: none; }
}`;
        break;
        
      case 'css-variables':
        html = `<div class="demo-container">
  <h2>CSS Variables (Custom Properties)</h2>
  
  <div class="theme-switcher">
    <button onclick="setTheme('light')">☀️ Light</button>
    <button onclick="setTheme('dark')">🌙 Dark</button>
    <button onclick="setTheme('neon')">💜 Neon</button>
    <button onclick="setTheme('ocean')">🌊 Ocean</button>
  </div>
  
  <div class="showcase">
    <div class="card">
      <h3>Theme Card</h3>
      <p>This card adapts to the selected theme using CSS variables.</p>
      <button class="card-btn">Action Button</button>
    </div>
    
    <div class="progress-demo">
      <h4>Progress Bar</h4>
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
    </div>
    
    <div class="grid-demo">
      <div class="grid-item">Item 1</div>
      <div class="grid-item">Item 2</div>
      <div class="grid-item">Item 3</div>
    </div>
  </div>
  
  <div class="controls">
    <h3>Adjust Variables</h3>
    <label>Primary Color: <input type="color" id="primaryColor" value="#3498db"></label>
    <label>Border Radius: <input type="range" id="borderRadius" min="0" max="50" value="10"></label>
    <label>Spacing: <input type="range" id="spacing" min="10" max="50" value="20"></label>
  </div>
</div>
<script>
  function setTheme(theme) {
    const root = document.documentElement;
    const themes = {
      light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f5f5f5',
        '--text-primary': '#333333',
        '--primary-color': '#3498db',
        '--accent-color': '#e74c3c',
        '--border-radius': '10px'
      },
      dark: {
        '--bg-primary': '#1a1a1a',
        '--bg-secondary': '#2d2d2d',
        '--text-primary': '#f0f0f0',
        '--primary-color': '#4fc3f7',
        '--accent-color': '#ff6b6b',
        '--border-radius': '15px'
      },
      neon: {
        '--bg-primary': '#0a0a0a',
        '--bg-secondary': '#1a0033',
        '--text-primary': '#e0e0ff',
        '--primary-color': '#ff00ff',
        '--accent-color': '#00ffff',
        '--border-radius': '20px'
      },
      ocean: {
        '--bg-primary': '#001f3f',
        '--bg-secondary': '#003366',
        '--text-primary': '#e6f3ff',
        '--primary-color': '#00bfff',
        '--accent-color': '#ffa500',
        '--border-radius': '25px'
      }
    };
    
    Object.assign(themes[theme], {
      '--shadow': theme === 'neon' ? '0 0 30px rgba(255, 0, 255, 0.5)' : 'rgba(0, 0, 0, 0.1)',
      '--glow': theme === 'neon' ? '0 0 20px var(--primary-color)' : 'none'
    });
    
    Object.entries(themes[theme]).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
  }
  
  // Live variable updates
  document.getElementById('primaryColor').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
  });
  
  document.getElementById('borderRadius').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--border-radius', e.target.value + 'px');
  });
  
  document.getElementById('spacing').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--spacing', e.target.value + 'px');
  });
</script>`;
        css = `:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #333333;
  --text-secondary: #666666;
  --primary-color: #3498db;
  --accent-color: #e74c3c;
  --border-radius: 10px;
  --spacing: 20px;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: none;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  transition: var(--transition);
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-switcher {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.theme-switcher button {
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px var(--shadow);
}

.theme-switcher button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px var(--shadow);
}

.showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing);
  margin-bottom: 40px;
}

.card {
  background: var(--bg-secondary);
  padding: calc(var(--spacing) * 1.5);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px var(--shadow);
}

.card h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

.card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.card-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: calc(var(--border-radius) / 2);
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
}

.card-btn:hover {
  background: var(--accent-color);
  transform: scale(1.05);
}

.progress-demo {
  background: var(--bg-secondary);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px var(--shadow);
}

.progress-demo h4 {
  margin-bottom: 15px;
  color: var(--text-primary);
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: var(--bg-primary);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  width: 70%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 10px;
  animation: progress 2s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.progress-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes progress {
  0%, 100% { width: 70%; }
  50% { width: 90%; }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.grid-demo {
  background: var(--bg-secondary);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px var(--shadow);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item {
  background: var(--primary-color);
  color: white;
  padding: 15px;
  border-radius: calc(var(--border-radius) / 2);
  text-align: center;
  transition: var(--transition);
  cursor: pointer;
}

.grid-item:hover {
  background: var(--accent-color);
  transform: scale(1.1);
}

.controls {
  background: var(--bg-secondary);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px var(--shadow);
}

.controls h3 {
  margin-bottom: 20px;
  color: var(--text-primary);
}

.controls label {
  display: block;
  margin: 15px 0;
  color: var(--text-secondary);
  font-weight: 500;
}

.controls input {
  margin-left: 10px;
  vertical-align: middle;
}

.controls input[type="color"] {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.controls input[type="range"] {
  width: 200px;
}

/* Neon theme specific styles */
html[style*="--primary-color: #ff00ff"] .card,
html[style*="--primary-color: #ff00ff"] .progress-demo,
html[style*="--primary-color: #ff00ff"] .grid-demo,
html[style*="--primary-color: #ff00ff"] .controls {
  box-shadow: var(--glow);
}

html[style*="--primary-color: #ff00ff"] .card-btn,
html[style*="--primary-color: #ff00ff"] .grid-item {
  box-shadow: 0 0 10px currentColor;
}

@media (max-width: 768px) {
  .showcase {
    grid-template-columns: 1fr;
  }
  
  .controls input[type="range"] {
    width: 100%;
  }
}`;
        break;
        
      case 'css-positioning':
        html = `<div class="demo-container">
  <h2>CSS Positioning Demo</h2>
  
  <div class="viewport">
    <div class="static-box">Static (normal flow)</div>
    
    <div class="relative-container">
      <div class="relative-box">Relative (offset)</div>
      <div class="absolute-box">Absolute (to parent)</div>
    </div>
    
    <div class="fixed-box">Fixed (to viewport)</div>
    
    <div class="scroll-container">
      <div class="sticky-box">Sticky (scroll to see)</div>
      <div class="content">Scroll down to see sticky positioning in action...</div>
      <div class="content">Keep scrolling...</div>
      <div class="content">Almost there...</div>
      <div class="content">The sticky box will stick to top!</div>
    </div>
  </div>
  
  <div class="info-panel">
    <h3>Position Types</h3>
    <div class="info-item">
      <span class="label static">static:</span>
      <span>Default, normal document flow</span>
    </div>
    <div class="info-item">
      <span class="label relative">relative:</span>
      <span>Offset from normal position</span>
    </div>
    <div class="info-item">
      <span class="label absolute">absolute:</span>
      <span>Relative to nearest positioned ancestor</span>
    </div>
    <div class="info-item">
      <span class="label fixed">fixed:</span>
      <span>Relative to viewport</span>
    </div>
    <div class="info-item">
      <span class="label sticky">sticky:</span>
      <span>Relative until scroll threshold</span>
    </div>
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --static-color: #4ecdc4;
  --relative-color: #ff6b6b;
  --absolute-color: #95e77e;
  --fixed-color: #ffd93d;
  --sticky-color: #a78bfa;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow: 0 0 30px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.viewport {
  background: var(--bg-secondary);
  border-radius: 20px;
  padding: 40px;
  min-height: 600px;
  box-shadow: 0 10px 30px var(--shadow);
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.viewport::before {
  content: 'Viewport Container';
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 600;
}

.static-box {
  background: linear-gradient(135deg, var(--static-color), #5ed4cc);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: var(--glow) var(--static-color);
  font-weight: 600;
}

.relative-container {
  background: rgba(255, 107, 107, 0.1);
  border: 2px dashed var(--relative-color);
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
  position: relative;
  min-height: 150px;
}

.relative-container::before {
  content: 'Relative Container (position: relative)';
  position: absolute;
  top: -25px;
  left: 10px;
  background: var(--bg-secondary);
  padding: 0 10px;
  font-size: 12px;
  color: var(--relative-color);
  font-weight: 600;
}

.relative-box {
  background: linear-gradient(135deg, var(--relative-color), #ff8787);
  color: white;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  top: 20px;
  left: 20px;
  box-shadow: var(--glow) var(--relative-color);
  font-weight: 600;
  width: fit-content;
}

.absolute-box {
  background: linear-gradient(135deg, var(--absolute-color), #a8f0a6);
  color: #1a5f1a;
  padding: 20px;
  border-radius: 12px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: var(--glow) var(--absolute-color);
  font-weight: 600;
}

.fixed-box {
  background: linear-gradient(135deg, var(--fixed-color), #ffe066);
  color: #333;
  padding: 20px;
  border-radius: 12px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  box-shadow: var(--glow) var(--fixed-color);
  font-weight: 600;
  z-index: 1000;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.scroll-container {
  height: 300px;
  overflow-y: auto;
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 20px;
  margin-top: 40px;
  border: 2px solid var(--sticky-color);
}

.sticky-box {
  background: linear-gradient(135deg, var(--sticky-color), #c4b5fd);
  color: white;
  padding: 20px;
  border-radius: 12px;
  position: sticky;
  top: 20px;
  box-shadow: var(--glow) var(--sticky-color);
  font-weight: 600;
  margin-bottom: 20px;
  z-index: 100;
}

.content {
  padding: 20px;
  margin: 10px 0;
  background: var(--bg-secondary);
  border-radius: 8px;
  color: var(--text-secondary);
}

.info-panel {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.info-panel h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
  padding: 15px;
  background: var(--bg-primary);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateX(5px);
}

.label {
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  min-width: 80px;
  text-align: center;
}

.label.static { background: var(--static-color); }
.label.relative { background: var(--relative-color); }
.label.absolute { background: var(--absolute-color); color: #1a5f1a; }
.label.fixed { background: var(--fixed-color); color: #333; }
.label.sticky { background: var(--sticky-color); }

@media (max-width: 768px) {
  .fixed-box {
    bottom: 20px;
    right: 20px;
    font-size: 14px;
    padding: 15px;
  }
  
  .viewport {
    padding: 20px;
  }
}`;
        break;
        
      case 'css-transitions':
        html = `<div class="demo-container">
  <h2>CSS Transitions Demo</h2>
  
  <div class="controls">
    <label>
      Duration: 
      <input type="range" id="duration" min="100" max="2000" value="300">
      <span id="durationValue">300ms</span>
    </label>
    <label>
      Timing Function:
      <select id="timingFunction">
        <option value="ease">Ease</option>
        <option value="linear">Linear</option>
        <option value="ease-in">Ease In</option>
        <option value="ease-out">Ease Out</option>
        <option value="ease-in-out">Ease In Out</option>
        <option value="cubic-bezier(0.68,-0.55,0.265,1.55)">Elastic</option>
      </select>
    </label>
  </div>
  
  <div class="showcase">
    <div class="transition-card" id="transitionCard">
      <h3>Hover Me!</h3>
      <p>I'll transition smoothly</p>
    </div>
    
    <div class="button-group">
      <button class="transition-btn">Scale</button>
      <button class="transition-btn rotate">Rotate</button>
      <button class="transition-btn skew">Skew</button>
    </div>
    
    <div class="morph-demo">
      <div class="shape circle" id="morphShape">Circle</div>
    </div>
    
    <div class="color-transition">
      <div class="color-box" id="colorBox">Color Change</div>
    </div>
  </div>
  
  <div class="property-list">
    <h3>Transition Properties</h3>
    <div class="prop-item">
      <code>transition-property</code>
      <span>Specifies which property to animate</span>
    </div>
    <div class="prop-item">
      <code>transition-duration</code>
      <span>How long the transition takes</span>
    </div>
    <div class="prop-item">
      <code>transition-timing-function</code>
      <span>The speed curve of the transition</span>
    </div>
    <div class="prop-item">
      <code>transition-delay</code>
      <span>Wait time before starting</span>
    </div>
  </div>
</div>
<script>
  const duration = document.getElementById('duration');
  const durationValue = document.getElementById('durationValue');
  const timingFunction = document.getElementById('timingFunction');
  const card = document.getElementById('transitionCard');
  const shape = document.getElementById('morphShape');
  const colorBox = document.getElementById('colorBox');
  
  duration.addEventListener('input', (e) => {
    const value = e.target.value + 'ms';
    durationValue.textContent = value;
    card.style.transitionDuration = value;
    shape.style.transitionDuration = value;
    colorBox.style.transitionDuration = value;
  });
  
  timingFunction.addEventListener('change', (e) => {
    card.style.transitionTimingFunction = e.target.value;
    shape.style.transitionTimingFunction = e.target.value;
    colorBox.style.transitionTimingFunction = e.target.value;
  });
  
  // Shape morphing
  let isCircle = true;
  shape.addEventListener('click', () => {
    isCircle = !isCircle;
    shape.className = isCircle ? 'shape circle' : 'shape square';
    shape.textContent = isCircle ? 'Circle' : 'Square';
  });
</script>`;
        css = `:root {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
  --accent-1: #667eea;
  --accent-2: #764ba2;
  --accent-3: #f093fb;
  --accent-4: #f5576c;
  --accent-5: #4facfe;
  --shadow: rgba(0, 0, 0, 0.1);
  --glow: 0 0 20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #b0b0b0;
    --shadow: rgba(0, 0, 0, 0.5);
    --glow: 0 0 30px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
}

.demo-container h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
}

.controls {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px var(--shadow);
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: var(--text-primary);
}

.controls input[type="range"] {
  width: 150px;
}

.controls select {
  padding: 8px 15px;
  border-radius: 8px;
  border: 2px solid var(--accent-1);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-weight: 600;
  cursor: pointer;
}

.showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.transition-card {
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: var(--glow) var(--accent-1);
  transition: all 300ms ease;
  cursor: pointer;
}

.transition-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px var(--shadow);
  background: linear-gradient(135deg, var(--accent-2), var(--accent-3));
}

.transition-card h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.transition-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, var(--accent-3), var(--accent-4));
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease;
  box-shadow: 0 5px 15px var(--shadow);
}

.transition-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px var(--shadow);
}

.transition-btn.rotate:hover {
  transform: scale(1.1) rotate(180deg);
}

.transition-btn.skew:hover {
  transform: scale(1.1) skew(-10deg);
}

.morph-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.shape {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--accent-4), var(--accent-5));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease;
}

.shape.circle {
  border-radius: 50%;
}

.shape.square {
  border-radius: 10px;
}

.color-transition {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: var(--bg-secondary);
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.color-box {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--accent-5), var(--accent-1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: all 300ms ease;
}

.color-box:hover {
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  transform: rotate(180deg) scale(1.1);
}

.property-list {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow);
}

.property-list h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.prop-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 15px 0;
  padding: 15px;
  background: var(--bg-primary);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.prop-item:hover {
  transform: translateX(5px);
}

.prop-item code {
  background: var(--accent-1);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  min-width: 200px;
  text-align: center;
}

.prop-item span {
  color: var(--text-secondary);
  font-style: italic;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .showcase {
    grid-template-columns: 1fr;
  }
}`;
        break;
        
      case 'responsive-cards':
        html = `<div class="card-container">
  <div class="card card-featured">
    <div class="card-icon">🚀</div>
    <h3>Advanced Grid</h3>
    <p>Responsive cards with glassmorphism effect and smooth animations.</p>
    <div class="card-tags">
      <span class="tag">CSS Grid</span>
      <span class="tag">Glassmorphism</span>
    </div>
  </div>
  <div class="card">
    <div class="card-icon">💎</div>
    <h3>Modern Design</h3>
    <p>Cards adapt beautifully to any screen size with container queries.</p>
    <div class="card-tags">
      <span class="tag">Responsive</span>
    </div>
  </div>
  <div class="card">
    <div class="card-icon">✨</div>
    <h3>Dark Mode Ready</h3>
    <p>Seamlessly transitions between light and dark themes.</p>
    <div class="card-tags">
      <span class="tag">Theme</span>
    </div>
  </div>
  <div class="card">
    <div class="card-icon">🎨</div>
    <h3>Creative Layouts</h3>
    <p>Dynamic grid layouts that respond to content and viewport.</p>
    <div class="card-tags">
      <span class="tag">Layout</span>
    </div>
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: #e2e8f0;
  --shadow: rgba(0, 0, 0, 0.1);
  --glass-bg: rgba(255, 255, 255, 0.7);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --accent: #60a5fa;
    --accent-hover: #3b82f6;
    --border: #334155;
    --shadow: rgba(0, 0, 0, 0.3);
    --glass-bg: rgba(30, 41, 59, 0.7);
  }
}

body {
  margin: 0;
  padding: 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #8b5cf6, #ec4899);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px var(--shadow);
  border-color: var(--accent);
}

.card:hover::before {
  transform: scaleX(1);
}

.card-featured {
  background: linear-gradient(135deg, var(--glass-bg), rgba(59, 130, 246, 0.1));
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.card:nth-child(2) .card-icon { animation-delay: 0.2s; }
.card:nth-child(3) .card-icon { animation-delay: 0.4s; }
.card:nth-child(4) .card-icon { animation-delay: 0.6s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card p {
  margin: 0 0 1.5rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--accent);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}`;
        break;
        
      case 'flexbox-nav':
        html = `<nav class="modern-nav">
  <div class="nav-brand">
    <div class="brand-icon">⚡</div>
    <span class="brand-text">FlexFlow</span>
  </div>
  
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="#" class="nav-link active">
        <span class="link-icon">🏠</span>
        <span class="link-text">Home</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span class="link-icon">👤</span>
        <span class="link-text">About</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span class="link-icon">💼</span>
        <span class="link-text">Services</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span class="link-icon">🎨</span>
        <span class="link-text">Portfolio</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span class="link-icon">📧</span>
        <span class="link-text">Contact</span>
      </a>
    </li>
  </ul>
  
  <div class="nav-actions">
    <button class="nav-btn btn-primary">Get Started</button>
    <button class="nav-toggle">
      <span class="hamburger"></span>
    </button>
  </div>
</nav>`;
        css = `:root {
  --nav-bg: #ffffff;
  --nav-text: #1e293b;
  --nav-accent: #3b82f6;
  --nav-accent-hover: #2563eb;
  --nav-border: #e2e8f0;
  --nav-shadow: rgba(0, 0, 0, 0.1);
  --nav-glass: rgba(255, 255, 255, 0.9);
}

@media (prefers-color-scheme: dark) {
  :root {
    --nav-bg: #0f172a;
    --nav-text: #f1f5f9;
    --nav-accent: #60a5fa;
    --nav-accent-hover: #3b82f6;
    --nav-border: #334155;
    --nav-shadow: rgba(0, 0, 0, 0.3);
    --nav-glass: rgba(15, 23, 42, 0.9);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modern-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  background: var(--nav-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--nav-border);
  border-radius: 20px;
  box-shadow: 0 8px 32px var(--nav-shadow);
  position: relative;
  overflow: hidden;
}

.modern-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.modern-nav:hover::before {
  left: 100%;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--nav-text);
  text-decoration: none;
  z-index: 1;
}

.brand-icon {
  font-size: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  color: var(--nav-text);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--nav-accent);
  transition: width 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: white;
  transform: translateY(-2px);
}

.link-icon {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.nav-link:hover .link-icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-primary {
  background: var(--nav-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary:hover {
  background: var(--nav-accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid var(--nav-border);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-toggle:hover {
  background: var(--nav-accent);
  border-color: var(--nav-accent);
}

.hamburger {
  width: 20px;
  height: 2px;
  background: var(--nav-text);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: var(--nav-text);
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  top: 6px;
}

.nav-toggle:hover .hamburger {
  background: white;
}

.nav-toggle:hover .hamburger::before,
.nav-toggle:hover .hamburger::after {
  background: white;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: var(--nav-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid var(--nav-border);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 0.5rem;
    transition: right 0.3s ease;
    z-index: 100;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    padding: 1rem;
    font-size: 1.1rem;
  }

  .nav-toggle {
    display: flex;
    z-index: 101;
  }

  .nav-toggle.active .hamburger {
    background: transparent;
  }

  .nav-toggle.active .hamburger::before {
    top: 0;
    transform: rotate(45deg);
  }

  .nav-toggle.active .hamburger::after {
    top: 0;
    transform: rotate(-45deg);
  }

  .btn-primary {
    display: none;
  }
}`;
        break;
        
      case 'loading-spinner':
        html = `<div class="container">
  <h2>Modern Loading Animations</h2>
  <div class="spinner-grid">
    <div class="spinner-card">
      <div class="morph-spinner">
        <div class="morph-shape"></div>
        <div class="morph-shape"></div>
        <div class="morph-shape"></div>
      </div>
      <p>Morphing Shapes</p>
    </div>
    
    <div class="spinner-card">
      <div class="neural-spinner">
        <div class="neural-core"></div>
        <div class="neural-ring"></div>
        <div class="neural-ring"></div>
        <div class="neural-ring"></div>
      </div>
      <p>Neural Network</p>
    </div>
    
    <div class="spinner-card">
      <div class="liquid-spinner">
        <div class="liquid-drop"></div>
      </div>
      <p>Liquid Motion</p>
    </div>
    
    <div class="spinner-card">
      <div class="quantum-spinner">
        <div class="quantum-orbit">
          <div class="quantum-particle"></div>
        </div>
        <div class="quantum-orbit">
          <div class="quantum-particle"></div>
        </div>
        <div class="quantum-center"></div>
      </div>
      <p>Quantum Field</p>
    </div>
  </div>
</div>`;
        css = `:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --accent-1: #3b82f6;
  --accent-2: #8b5cf6;
  --accent-3: #ec4899;
  --accent-4: #10b981;
  --border: #e2e8f0;
  --shadow: rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --border: #334155;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.spinner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.spinner-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.spinner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px var(--shadow);
}

.spinner-card p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Morphing Shapes Spinner */
.morph-spinner {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.morph-shape {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--accent-1);
  border-radius: 50%;
  animation: morph 2s ease-in-out infinite;
}

.morph-shape:nth-child(2) {
  animation-delay: 0.66s;
  background: var(--accent-2);
}

.morph-shape:nth-child(3) {
  animation-delay: 1.33s;
  background: var(--accent-3);
}

@keyframes morph {
  0%, 100% {
    border-radius: 50%;
    transform: scale(1) rotate(0deg);
  }
  25% {
    border-radius: 0;
    transform: scale(1.3) rotate(90deg);
  }
  50% {
    border-radius: 50%;
    transform: scale(0.8) rotate(180deg);
  }
  75% {
    border-radius: 50% 0;
    transform: scale(1.2) rotate(270deg);
  }
}

/* Neural Network Spinner */
.neural-spinner {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neural-core {
  width: 12px;
  height: 12px;
  background: var(--accent-2);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  animation: pulse 1.5s ease-in-out infinite;
}

.neural-ring {
  position: absolute;
  border: 2px solid var(--accent-2);
  border-radius: 50%;
  opacity: 0;
  animation: neural-ring 2s linear infinite;
}

.neural-ring:nth-child(2) {
  width: 30px;
  height: 30px;
  animation-delay: 0s;
}

.neural-ring:nth-child(3) {
  width: 45px;
  height: 45px;
  animation-delay: 0.5s;
}

.neural-ring:nth-child(4) {
  width: 60px;
  height: 60px;
  animation-delay: 1s;
}

@keyframes neural-ring {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Liquid Spinner */
.liquid-spinner {
  width: 60px;
  height: 60px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.1);
}

.liquid-drop {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--accent-4);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: liquid 2s ease-in-out infinite;
}

@keyframes liquid {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  }
}

/* Quantum Spinner */
.quantum-spinner {
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantum-center {
  width: 16px;
  height: 16px;
  background: radial-gradient(circle, var(--accent-1), var(--accent-2));
  border-radius: 50%;
  position: relative;
  z-index: 2;
  animation: quantum-glow 2s ease-in-out infinite;
}

.quantum-orbit {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: orbit 3s linear infinite;
}

.quantum-orbit:nth-child(2) {
  animation-duration: 2s;
  animation-direction: reverse;
}

.quantum-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--accent-1);
  border-radius: 50%;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px var(--accent-1);
}

.quantum-orbit:nth-child(2) .quantum-particle {
  background: var(--accent-3);
  box-shadow: 0 0 10px var(--accent-3);
}

@keyframes orbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes quantum-glow {
  0%, 100% {
    box-shadow: 0 0 20px var(--accent-1);
  }
  50% {
    box-shadow: 0 0 40px var(--accent-1), 0 0 60px var(--accent-2);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}`;
        break;
        
      case 'dark-mode':
        html = `<div class="theme-container">
  <div class="theme-bg"></div>
  
  <header class="theme-header">
    <div class="header-content">
      <h1 class="theme-title">
        <span class="title-icon">🌓</span>
        Adaptive Themes
      </h1>
      <p class="theme-subtitle">Experience seamless light and dark mode transitions</p>
    </div>
    <button id="theme-toggle" class="theme-switch">
      <div class="switch-track">
        <div class="switch-thumb">
          <span class="thumb-icon sun">☀️</span>
          <span class="thumb-icon moon">🌙</span>
        </div>
      </div>
    </button>
  </header>
  
  <main class="theme-main">
    <section class="card">
      <h2>Card Title</h2>
      <p>This card adapts to the current theme. Try toggling dark mode!</p>
      <button class="btn">Sample Button</button>
    </section>
    <section class="card">
      <h2>Another Card</h2>
      <p>All colors are managed through CSS custom properties.</p>
      <div class="tags">
        <span class="tag">CSS</span>
        <span class="tag">Variables</span>
        <span class="tag">Theme</span>
      </div>
    </section>
  </main>
</div>
<script>
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
</script>`;
        css = `:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f1f5f9;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-tertiary: #94a3b8;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  --accent-tertiary: #ec4899;
  --accent-success: #10b981;
  --border: #e2e8f0;
  --shadow-sm: rgba(0, 0, 0, 0.05);
  --shadow-md: rgba(0, 0, 0, 0.1);
  --shadow-lg: rgba(0, 0, 0, 0.15);
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

body.dark-mode {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-tertiary: #94a3b8;
  --accent-primary: #60a5fa;
  --accent-secondary: #a78bfa;
  --accent-tertiary: #f472b6;
  --accent-success: #34d399;
  --border: #334155;
  --shadow-sm: rgba(0, 0, 0, 0.1);
  --shadow-md: rgba(0, 0, 0, 0.3);
  --shadow-lg: rgba(0, 0, 0, 0.5);
}

/* Also support system preference as fallback */
@media (prefers-color-scheme: dark) {
  body:not(.light-mode) {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
    --accent-primary: #60a5fa;
    --accent-secondary: #a78bfa;
    --accent-tertiary: #f472b6;
    --accent-success: #34d399;
    --border: #334155;
    --shadow-sm: rgba(0, 0, 0, 0.1);
    --shadow-md: rgba(0, 0, 0, 0.3);
    --shadow-lg: rgba(0, 0, 0, 0.5);
  }
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background 0.3s ease, color 0.3s ease;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  margin: 0;
}

.theme-container {
  position: relative;
  min-height: 100vh;
}

.theme-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  opacity: 0.05;
  z-index: -1;
}

.theme-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header-content {
  flex: 1;
}

.theme-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-icon {
  font-size: 3rem;
  -webkit-text-fill-color: initial;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.theme-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-left: 4rem;
}

.theme-switch {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.switch-track {
  width: 80px;
  height: 40px;
  background: var(--bg-tertiary);
  border: 2px solid var(--border);
  border-radius: 40px;
  position: relative;
  transition: all 0.3s ease;
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 30px;
  height: 30px;
  background: var(--accent-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.thumb-icon {
  position: absolute;
  font-size: 18px;
  transition: all 0.3s ease;
}

.sun {
  opacity: 1;
  transform: scale(1);
}

.moon {
  opacity: 0;
  transform: scale(0);
}

body.dark-mode .switch-thumb {
  left: calc(100% - 33px);
  background: var(--accent-tertiary);
}

body.dark-mode .sun {
  opacity: 0;
  transform: scale(0);
}

body.dark-mode .moon {
  opacity: 1;
  transform: scale(1);
}

.theme-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px var(--shadow-md);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px var(--shadow-lg);
}

.card h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: var(--accent-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}`;
        break;
        
      case 'dropdown-menu':
        html = `<div class="dropdown-demo">
  <header class="demo-header">
    <h1>Modern Dropdown Menus</h1>
    <p>Hover over the menu items to see smooth dropdown animations</p>
  </header>
  
  <nav class="demo-nav">
    <div class="nav-brand">
      <span class="brand-icon">⚡</span>
      <span>NavPro</span>
    </div>
    
    <ul class="nav-menu">
      <li class="nav-item dropdown">
        <button class="nav-link">
          <span class="link-text">Services</span>
          <span class="link-arrow">▼</span>
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-header">
            <h3>Our Services</h3>
            <p>Professional solutions for your business</p>
          </div>
          <div class="dropdown-grid">
            <a href="#" class="dropdown-item">
              <div class="item-icon">🎨</div>
              <div class="item-content">
                <h4>Web Design</h4>
                <p>Beautiful, responsive designs</p>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="item-icon">💻</div>
              <div class="item-content">
                <h4>Development</h4>
                <p>Custom software solutions</p>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="item-icon">📈</div>
              <div class="item-content">
                <h4>SEO</h4>
                <p>Boost your search ranking</p>
              </div>
            </a>
            <a href="#" class="dropdown-item">
              <div class="item-icon">📢</div>
              <div class="item-content">
                <h4>Marketing</h4>
                <p>Grow your audience</p>
              </div>
            </a>
          </div>
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <button class="nav-link">
          <span class="link-text">Products</span>
          <span class="link-arrow">▼</span>
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-list">
            <a href="#" class="list-item">
              <span class="item-badge">New</span>
              <span>Software Suite</span>
            </a>
            <a href="#" class="list-item">
              <span>Hardware Solutions</span>
            </a>
            <a href="#" class="list-item">
              <span class="item-badge">Pro</span>
              <span>Support Plans</span>
            </a>
            <a href="#" class="list-item">
              <span>API Access</span>
            </a>
          </div>
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <button class="nav-link">
          <span class="link-text">Resources</span>
          <span class="link-arrow">▼</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <div class="dropdown-columns">
            <div class="column">
              <h4>Learn</h4>
              <a href="#" class="column-item">Documentation</a>
              <a href="#" class="column-item">Tutorials</a>
              <a href="#" class="column-item">Video Courses</a>
            </div>
            <div class="column">
              <h4>Community</h4>
              <a href="#" class="column-item">Blog</a>
              <a href="#" class="column-item">Forum</a>
              <a href="#" class="column-item">Discord</a>
            </div>
            <div class="column">
              <h4>Tools</h4>
              <a href="#" class="column-item">Code Editor</a>
              <a href="#" class="column-item">CLI Tools</a>
              <a href="#" class="column-item">Extensions</a>
            </div>
          </div>
        </div>
      </li>
      
      <li class="nav-item">
        <a href="#" class="nav-link nav-link-btn">
          <span>Get Started</span>
        </a>
      </li>
    </ul>
  </nav>
  
  <main class="demo-content">
    <div class="content-card">
      <h2>Interactive Dropdown Demo</h2>
      <p>Experience modern dropdown menus with smooth animations, multiple layouts, and full dark mode support.</p>
      <div class="feature-list">
        <div class="feature">✨ Smooth Animations</div>
        <div class="feature">🎨 Multiple Layouts</div>
        <div class="feature">🌙 Dark Mode Ready</div>
        <div class="feature">📱 Responsive Design</div>
      </div>
    </div>
  </main>
</div>`;
        css = `:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f1f5f9;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-tertiary: #94a3b8;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  --accent-tertiary: #ec4899;
  --accent-success: #10b981;
  --border: #e2e8f0;
  --shadow-sm: rgba(0, 0, 0, 0.05);
  --shadow-md: rgba(0, 0, 0, 0.1);
  --shadow-lg: rgba(0, 0, 0, 0.15);
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
    --accent-primary: #60a5fa;
    --accent-secondary: #a78bfa;
    --accent-tertiary: #f472b6;
    --accent-success: #34d399;
    --border: #334155;
    --shadow-sm: rgba(0, 0, 0, 0.1);
    --shadow-md: rgba(0, 0, 0, 0.3);
    --shadow-lg: rgba(0, 0, 0, 0.5);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

.dropdown-demo {
  min-height: 100vh;
}

.demo-header {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--gradient-1);
  color: white;
}

.demo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.brand-icon {
  font-size: 1.75rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  background: var(--bg-tertiary);
  color: var(--accent-primary);
}

.link-arrow {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .link-arrow {
  transform: rotate(180deg);
}

.nav-link-btn {
  background: var(--accent-primary);
  color: white;
}

.nav-link-btn:hover {
  background: var(--accent-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 320px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-right {
  left: auto;
  right: 0;
}

.dropdown-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.dropdown-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.dropdown-header p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.dropdown-grid {
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(4px);
}

.item-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.item-content h4 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.item-content p {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.dropdown-list {
  padding: 0.5rem;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.list-item:hover {
  background: var(--bg-tertiary);
}

.item-badge {
  background: var(--accent-primary);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 10px;
  text-transform: uppercase;
}

.dropdown-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1.5rem;
}

.column h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.column-item {
  display: block;
  padding: 0.5rem 0;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.column-item:hover {
  color: var(--accent-primary);
}

.demo-content {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.content-card h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-card p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature {
  padding: 1rem;
  background: var(--bg-tertiary);
  border-radius: 10px;
  font-weight: 500;
  text-align: center;
  transition: transform 0.2s ease;
}

.feature:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .demo-nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav-menu {
    flex-direction: column;
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: var(--bg-tertiary);
    margin-top: 0.5rem;
    display: none;
  }

  .dropdown.active .dropdown-menu {
    display: block;
  }

  .dropdown-columns {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.demo-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.demo-header p {
  font-size: 1.125rem;
  opacity: 0.9;
}
}`;
        break;
        
      case 'masonry-layout':
        html = `<div class="masonry">
  <div class="masonry-item" style="grid-row: span 8;">
    <h3>Tall Item</h3>
    <p>This is a taller masonry item that spans multiple rows. It demonstrates how items can have different heights in a masonry layout.</p>
  </div>
  <div class="masonry-item" style="grid-row: span 6;">
    <h3>Short Item</h3>
    <p>A shorter item.</p>
  </div>
  <div class="masonry-item" style="grid-row: span 10;">
    <h3>Very Tall Item</h3>
    <p>This is the tallest item in the masonry layout. It spans many rows and contains more content to demonstrate the varying heights.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="masonry-item" style="grid-row: span 7;">
    <h3>Medium Item</h3>
    <p>This item has a medium height.</p>
    <p>It contains two paragraphs.</p>
  </div>
  <div class="masonry-item" style="grid-row: span 5;">
    <h3>Small</h3>
    <p>Small content.</p>
  </div>
  <div class="masonry-item" style="grid-row: span 9;">
    <h3>Another Tall</h3>
    <p>This is another tall item showing how the masonry layout handles multiple items with different heights.</p>
    <p>The grid automatically arranges them efficiently.</p>
  </div>
</div>`;
        css = `.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  gap: 1rem;
  grid-auto-flow: dense;
  padding: 2rem;
}

.masonry-item {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.masonry-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.masonry-item h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.masonry-item p {
  margin: 0.5rem 0;
  color: #666;
  line-height: 1.6;
}

/* Alternative: Different heights based on nth-child */
.masonry-item:nth-child(3n+1) {
  background: #e3f2fd;
}

.masonry-item:nth-child(3n+2) {
  background: #f3e5f5;
}

.masonry-item:nth-child(3n+3) {
  background: #e8f5e8;
}`;
        break;
        
      case 'progress-bar':
        html = `<div class="container">
  <h2>Progress Bar Examples</h2>
  
  <div class="progress-section">
    <h3>Basic Progress Bar</h3>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 75%"></div>
    </div>
    <p>75% Complete</p>
  </div>
  
  <div class="progress-section">
    <h3>Animated Striped Progress</h3>
    <div class="progress-bar">
      <div class="progress-fill progress-striped progress-60"></div>
    </div>
    <p>60% Complete</p>
  </div>
  
  <div class="progress-section">
    <h3>Success Progress</h3>
    <div class="progress-bar">
      <div class="progress-fill progress-success progress-90"></div>
    </div>
    <p>90% Complete</p>
  </div>
  
  <div class="progress-section">
    <h3>Warning Progress</h3>
    <div class="progress-bar">
      <div class="progress-fill progress-warning progress-45"></div>
    </div>
    <p>45% Complete</p>
  </div>
</div>`;
        css = `.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.progress-section {
  margin-bottom: 2rem;
}

.progress-section h3 {
  margin-bottom: 0.5rem;
  color: #555;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  border-radius: 15px;
  transition: width 0.5s ease;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

.progress-striped {
  background-size: 20px 20px;
  background-image: linear-gradient(
    45deg,
    rgba(255,255,255,0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0.15) 75%,
    transparent 75%,
    transparent
  );
  animation: progress-animation 2s linear infinite;
}

.progress-success {
  background: linear-gradient(90deg, #4CAF50, #45a049);
}

.progress-warning {
  background: linear-gradient(90deg, #ff9800, #f57c00);
}

.progress-60 {
  width: 60%;
}

.progress-90 {
  width: 90%;
}

.progress-45 {
  width: 45%;
}

@keyframes progress-animation {
  0% { background-position: 0 0; }
  100% { background-position: 20px 0; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

p {
  margin-top: 0.5rem;
  color: #666;
  font-weight: 500;
}`;
        break;
        
      case 'tooltip':
        html = `<div class="container">
  <h2>Tooltip Examples</h2>
  
  <div class="examples">
    <div class="example">
      <p>Hover over the button:</p>
      <div class="tooltip">
        <button class="btn">Hover me</button>
        <span class="tooltiptext">This is a tooltip!</span>
      </div>
    </div>
    
    <div class="example">
      <p>Tooltip on top:</p>
      <div class="tooltip tooltip-top">
        <button class="btn">Top tooltip</button>
        <span class="tooltiptext">This tooltip appears on top</span>
      </div>
    </div>
    
    <div class="example">
      <p>Tooltip on the right:</p>
      <div class="tooltip tooltip-right">
        <button class="btn">Right tooltip</button>
        <span class="tooltiptext">This appears on the right</span>
      </div>
    </div>
    
    <div class="example">
      <p>Tooltip on the left:</p>
      <div class="tooltip tooltip-left">
        <button class="btn">Left tooltip</button>
        <span class="tooltiptext">This appears on the left</span>
      </div>
    </div>
  </div>
</div>`;
        css = `.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 2rem;
}

.examples {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.example {
  text-align: center;
}

.example p {
  margin-bottom: 1rem;
  color: #666;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 14px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* Top tooltip */
.tooltip-top .tooltiptext {
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
}

.tooltip-top .tooltiptext::after {
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-color: #555 transparent transparent transparent;
}

/* Right tooltip */
.tooltip-right .tooltiptext {
  top: 50%;
  left: 125%;
  bottom: auto;
  margin-left: 0;
  margin-top: -16px;
}

.tooltip-right .tooltiptext::after {
  top: 50%;
  right: 100%;
  left: auto;
  margin-left: 0;
  margin-top: -5px;
  border-color: transparent #555 transparent transparent;
}

/* Left tooltip */
.tooltip-left .tooltiptext {
  top: 50%;
  right: 125%;
  left: auto;
  bottom: auto;
  margin-left: 0;
  margin-top: -16px;
}

.tooltip-left .tooltiptext::after {
  top: 50%;
  left: 100%;
  margin-left: 0;
  margin-top: -5px;
  border-color: transparent transparent transparent #555;
}

.btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #2980b9;
}`;
        break;
        
      case 'scroll-animations':
        html = `<div class="scroll-container" id="scroll-container">
  <div class="hero">
    <h1>Scroll-Driven Animations</h1>
    <p>Scroll down to see the magic</p>
  </div>
  
  <div class="parallax-section">
    <div class="parallax-bg"></div>
    <div class="parallax-content">
      <h2>Parallax Background</h2>
      <p>The background moves at a different speed</p>
    </div>
  </div>
  
  <div class="reveal-section">
    <div class="reveal-card fade-in">
      <h3>Reveal on Scroll</h3>
      <p>This card fades in as you scroll</p>
    </div>
    <div class="reveal-card fade-in">
      <h3>Staggered Animation</h3>
      <p>Each card appears at different times</p>
    </div>
    <div class="reveal-card fade-in">
      <h3>Smooth Transitions</h3>
      <p>Using CSS scroll timelines</p>
    </div>
  </div>
  
  <div class="progress-section">
    <div class="progress-indicator"></div>
    <div class="progress-content">
      <h2>Scroll Progress</h2>
      <p>The bar shows your scroll position</p>
    </div>
  </div>
</div>
<script>
  // Parallax effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
    if (parallax) {
      parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
  });

  // Reveal cards on scroll
  const revealCards = document.querySelectorAll('.reveal-card');
  const revealOnScroll = () => {
    revealCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 100) {
        card.classList.add('visible');
      }
    });
  };

  // Progress bar
  const progressBar = document.querySelector('.progress-indicator');
  const updateProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    if (progressBar) {
      progressBar.style.transform = 'scaleX(' + scrollPercent + ')';
    }
  };

  // Initialize
  window.addEventListener('scroll', () => {
    revealOnScroll();
    updateProgress();
  });

  // Initial check
  revealOnScroll();
  updateProgress();
</script>`;
        css = `:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --accent: #3b82f6;
  --accent-2: #8b5cf6;
  --accent-3: #ec4899;
  --border: #e2e8f0;
  --shadow: rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --border: #334155;
    --shadow: rgba(0, 0, 0, 0.3);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll-container {
  min-height: 300vh;
  position: relative;
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3));
  color: white;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: hero-fade 1s ease-out;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
  animation: hero-fade 1s ease-out 0.2s both;
}

@keyframes hero-fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.parallax-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background: url('https://picsum.photos/seed/parallax/1920/1080.jpg') center/cover;
  will-change: transform;
}

.parallax-content {
  position: relative;
  z-index: 1;
  text-align: center;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--border);
}

.parallax-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.reveal-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  align-items: center;
}

.reveal-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px var(--shadow);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.reveal-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-card:nth-child(1) {
  transition-delay: 0.1s;
}

.reveal-card:nth-child(2) {
  transition-delay: 0.2s;
}

.reveal-card:nth-child(3) {
  transition-delay: 0.3s;
}

.reveal-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.progress-section {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
}

.progress-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.1s ease-out;
}

.progress-content {
  text-align: center;
}

.progress-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`;
        break;
        
      case 'glassmorphism':
        html = `<div class="glass-container">
  <div class="glass-bg"></div>
  
  <div class="glass-content">
    <header class="glass-header">
      <h1>Glassmorphism</h1>
      <p>Modern frosted glass effects</p>
    </header>
    
    <div class="glass-grid">
      <div class="glass-card glass-card-featured">
        <div class="glass-icon">✨</div>
        <h3>Frosted Glass</h3>
        <p>Beautiful blur effects with backdrop-filter</p>
        <div class="glass-button">Learn More</div>
      </div>
      
      <div class="glass-card">
        <div class="glass-icon">🎨</div>
        <h3>Transparency</h3>
        <p>Layered translucent elements</p>
        <div class="glass-button">Explore</div>
      </div>
      
      <div class="glass-card">
        <div class="glass-icon">💎</div>
        <h3>Depth</h3>
        <p>Create visual hierarchy with glass</p>
        <div class="glass-button">Discover</div>
      </div>
    </div>
    
    <div class="glass-footer">
      <div class="glass-social">
        <div class="glass-icon-small">📱</div>
        <div class="glass-icon-small">💻</div>
        <div class="glass-icon-small">🎮</div>
      </div>
    </div>
  </div>
</div>`;
        css = `:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: rgba(0, 0, 0, 0.1);
  --glass-text: #ffffff;
  --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.3);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

.glass-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent-gradient);
  z-index: -2;
}

.glass-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://picsum.photos/seed/glass/1920/1080.jpg') center/cover;
  opacity: 0.3;
  z-index: -1;
}

.glass-content {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  z-index: 1;
}

.glass-header {
  text-align: center;
  margin-bottom: 4rem;
}

.glass-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--glass-text);
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.glass-header p {
  font-size: 1.25rem;
  color: var(--glass-text);
  opacity: 0.9;
}

.glass-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.glass-card {
  background: var(--card-gradient);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px var(--glass-shadow);
  border-color: rgba(255, 255, 255, 0.3);
}

.glass-card:hover::before {
  opacity: 1;
}

.glass-card-featured {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
}

.glass-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.glass-card:nth-child(2) .glass-icon { animation-delay: 0.2s; }
.glass-card:nth-child(3) .glass-icon { animation-delay: 0.4s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.glass-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--glass-text);
  margin-bottom: 0.75rem;
}

.glass-card p {
  color: var(--glass-text);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.glass-button {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 0.75rem 2rem;
  color: var(--glass-text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.glass-footer {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.glass-social {
  display: flex;
  gap: 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  padding: 1rem 2rem;
}

.glass-icon-small {
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.glass-icon-small:hover {
  transform: scale(1.2);
}`;
        break;
      default:
        html = '<div>Default content</div>';
        css = 'body { font-family: Arial, sans-serif; }';
        break;
    }
    
    // Ensure we have valid strings
    const finalHtml = typeof html === 'string' ? html : '<div>Default HTML</div>';
    const finalCss = typeof css === 'string' ? css : 'body { font-family: Arial; }';
    
    openWithContent(finalHtml, finalCss, '', 'css');
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
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 flex-shrink-0">
                    Implementation
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
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
              </div>
            </div>
          ) : (
            // For regular questions - keep accordion
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
                  <div className="flex items-center gap-2">
                    {!isImplementation && (
                      <Button
                        onClick={() => {
                          const searchQuery = encodeURIComponent(`${q.question} CSS`);
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
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div 
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
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
              <Code className="w-4 h-4 text-purple-600 dark:text-purple-400 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-purple-800 dark:data-[state=active]:text-purple-200">Implementation</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-300">{implementationQuestions.length} questions • 15-20 min</span>
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
          
          <TabsContent value="implementation" className="space-y-4">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
                  <Code className="w-5 h-5" />
                  Implementation Questions
                </CardTitle>
                <CardDescription className="text-purple-700 dark:text-purple-300">
                  Practical CSS tasks with live playground implementations - Click Playground to see the code in action
                </CardDescription>
              </CardHeader>
            </Card>
            <QnA questions={implementationQuestions} isImplementation={true} />
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

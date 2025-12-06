# 🎨 CSS Component Structure Guidelines

## 📋 **Purpose**
This document defines the standard structure, patterns, and best practices for creating CSS topic components in the CoderPod platform. Follow these guidelines to ensure consistency, maintainability, and an excellent learning experience for beginners.

---

## 🏗️ **Component File Structure**

### **File Location & Naming**
```
/src/components/languages/css/topics/css-[topic-name].tsx
```

**Examples:**
- `css-selectors.tsx`
- `css-flexbox.tsx`
- `css-grid.tsx`
- `css-animations.tsx`
- `css-custom-properties.tsx`

---

## 📦 **Component Template**

```tsx
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Icon1, Icon2, Icon3, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssTopicNameProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTopicName({ onOpenWebPlayground }: CssTopicNameProps) {
  
  // Define all interactive examples as template literals
  const basicExample = `<!-- Full HTML document with embedded CSS -->`
  
  const intermediateExample = `<!-- Another example -->`
  
  const advancedExample = `<!-- Advanced use case -->`

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Icon1}
        category="CSS · Category Name"
        title="Topic Name"
        description="Brief, clear description of what this CSS topic covers"
        colorTheme="blue" // or purple, green, orange, pink, cyan, red
      />

      {/* INTRODUCTION CARD - Enhanced with Animation Style */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Icon1 className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is [Topic Name]?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🚀 Engaging description with emoji that captures attention and explains the core concept!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Interactive Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Key Concept Demonstration
                </h4>
                
                {/* Visual comparison or interactive demo */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Without Feature</div>
                    <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                      {/* Demo visualization */}
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">❌ Limited/Basic</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">With Feature</div>
                    <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                      {/* Demo visualization */}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ Enhanced/Powerful</div>
                  </div>
                </div>

                {/* Interactive hint */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                    <MousePointer className="w-4 h-4" />
                    🎪 Try it yourself!
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Hover or interact with elements to see the feature in action!
                  </div>
                </div>
              </div>

              {/* Feature Capabilities Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  🎨 Key Capabilities
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Icon2 className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Feature 1</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Brief description</div>
                    </div>
                  </div>
                  {/* Repeat for 2-4 capabilities */}
                </div>
              </div>
            </div>

            {/* Side Comparison Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🎯</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">[Topic Name]</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Key Benefit 1
                    </div>
                    {/* More benefits */}
                  </div>
                </div>
              </div>

              {/* Pro Tip Card */}
              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Practical advice or key insight about using this feature effectively
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Code Example */}
          <div className="mt-6 bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-2">[Topic] Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 🎨 Basic syntax example */</div>
              <div className="text-purple-400">selector</div>
              <div className="text-white"> {'{'}</div>
              <div className="text-white">   <span className="text-blue-400">property</span>: <span className="text-yellow-400">value</span>;</div>
              <div className="text-white"> {'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CONCEPT SECTION 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Icon3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. First Major Concept
          </CardTitle>
          <CardDescription>
            What this section teaches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Example Title"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
          
          {/* OPTIONAL: Additional Context */}
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Key Points:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Important point about this concept</span>
              </li>
              {/* More points */}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* REPEAT FOR MORE CONCEPTS (2-5 sections recommended) */}

      {/* COMPARISON OR REFERENCE SECTION */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Common properties and values at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">property-name: value;</code>
              <p className="text-sm text-muted-foreground mt-1">Description of what it does</p>
            </div>
            {/* Repeat for key properties */}
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>CSS Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Tip 1</strong> - Practical advice</li>
            <li><strong>Tip 2</strong> - More guidance</li>
            <li><strong>Tip 3</strong> - Additional recommendations</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT (if relevant) */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Information about browser compatibility and support levels.
        </AlertDescription>
      </Alert>
    </div>
  );
}
```

---

## 🎨 **CSS Example Structure**

Each interactive example should be a **complete, standalone HTML document** with embedded CSS:

```tsx
const exampleName = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Title</title>
  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* Body with gradient background */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    /* DARK MODE SUPPORT - Use @media queries */
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
    }
    
    /* Container */
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    /* Headings */
    h1 {
      color: #3b82f6;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    /* Your CSS demo styles here */
    .demo-element {
      /* Styles to demonstrate the concept */
    }
    
    /* Always provide dark mode alternatives */
    @media (prefers-color-scheme: dark) {
      .demo-element {
        /* Dark mode adjustments */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Example Title</h1>
    <p class="subtitle">Brief description</p>
    
    <!-- Your HTML content demonstrating the CSS concept -->
    <div class="demo-section">
      <!-- Interactive elements -->
    </div>
  </div>
  
  <!-- Optional JavaScript for interactivity -->
  <script>
    // Keep it simple and focused on demonstrating the CSS concept
  </script>
</body>
</html>`;
```

---

## 🎯 **Essential Guidelines**

### **1. Dark Mode Support - CRITICAL**
✅ **ALWAYS use `@media (prefers-color-scheme: dark)` for dark mode**
❌ **NEVER use `:root.dark` selectors** (doesn't work in iframe)

```css
/* ✅ CORRECT */
@media (prefers-color-scheme: dark) {
  .element {
    background: #1e293b;
    color: #e2e8f0;
  }
}

/* ❌ WRONG */
:root.dark .element {
  background: #1e293b;
}
```

### **2. Professional Color Palette**
Use **subtle, professional colors** with reduced saturation:

**IMPORTANT:** Avoid overly vibrant gradients. Use toned-down, professional colors:

```css
/* ✅ GOOD - Professional toned-down gradients */
body {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}
@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  }
}

/* ❌ BAD - Too vibrant */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Recommended Professional Palettes:**
- **Blue:** `#60a5fa` → `#3b82f6` (light), `#1e40af` → `#1e3a8a` (dark)
- **Purple:** `#a78bfa` → `#8b5cf6` (light), `#6b21a8` → `#581c87` (dark)
- **Green:** `#4ade80` → `#22c55e` (light), `#15803d` → `#166534` (dark)
- **Orange:** `#fb923c` → `#f97316` (light), `#c2410c` → `#9a3412` (dark)

### **3. Color Themes by Category**
Use consistent color schemes per CSS category:

| Category | Primary | Secondary | Use Case |
|----------|---------|-----------|----------|
| **Selectors** | Blue (#3b82f6) | Indigo | Basic CSS concepts |
| **Layout** | Purple (#8b5cf6) | Violet | Flexbox, Grid, Position |
| **Typography** | Pink (#ec4899) | Rose | Fonts, Text styling |
| **Colors & Backgrounds** | Orange (#f97316) | Amber | Colors, Gradients |
| **Animations** | Cyan (#06b6d4) | Sky | Transitions, Keyframes |
| **Responsive** | Green (#10b981) | Emerald | Media queries, Mobile |
| **Advanced** | Red (#ef4444) | Crimson | Variables, Functions |

### **3. Component Structure**
Each component should have:
- **1 PageHeader** - Topic introduction
- **1 Introduction Card** - "What is X?" explanation
- **2-5 Concept Cards** - Each with FrontendCodePreview
- **1 Quick Reference** - Properties/values table
- **1-2 Alert Boxes** - Best practices and browser support

### **4. Interactive Examples**
- ✅ Include 3-5 working examples per topic
- ✅ Each example should be self-contained
- ✅ Use realistic, practical scenarios
- ✅ Add visual feedback (hover states, transitions)
- ✅ Keep examples simple but meaningful
- ✅ Add emojis for visual appeal (in moderation)

### **5. Beginner-Friendly Content**
- ✅ Use simple, clear language
- ✅ Explain technical terms when first used
- ✅ Provide real-world analogies
- ✅ Include "Why does this matter?" context
- ✅ Show both simple and practical examples
- ✅ Highlight common mistakes/pitfalls

### **6. Code Quality**
- ✅ Include CSS reset in every example
- ✅ Use semantic class names
- ✅ Comment complex CSS
- ✅ Show mobile-responsive patterns
- ✅ Include smooth transitions
- ✅ Maintain consistent spacing/padding

---

## 📐 **Responsive Design Patterns**

Always include responsive considerations:

```css
/* Mobile-first approach */
.element {
  padding: 20px;
  font-size: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: 30px;
    font-size: 18px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: 40px;
    font-size: 20px;
  }
}
```

---

## 🎯 **Innovative Design Patterns - Animation Style**

### **Key Visual Enhancements (Follow CSS Animations Component Pattern)**

#### **1. Enhanced Card Headers**
Use relative positioning with animated indicators:

```tsx
<CardHeader className="relative">
  <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
    <div className="relative">
      <Film className="w-8 h-8" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
    </div>
    What is [Topic]?
  </CardTitle>
  <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
    🚀 Engaging description with strategically placed emoji!
  </CardDescription>
</CardHeader>
```

#### **2. Backdrop Blur Interactive Cards**
Create glass-morphism effect cards with hover animations:

```tsx
{/* Parent must have overflow-hidden and padding to prevent scale overflow */}
<CardContent className="relative overflow-hidden">
  <div className="grid lg:grid-cols-3 gap-6 p-2">
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer group">
      <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
        <Zap className="w-5 h-5 animate-pulse" />
        🎯 Interactive Feature Name
      </h4>
      {/* Content with visual demonstrations */}
    </div>
  </div>
</CardContent>
```

**⚠️ Important:** 
- Use `hover:scale-[1.01]` (not 1.02) to prevent overflow
- Add `overflow-hidden` to parent `CardContent`
- Add `p-2` padding to grid container for scale breathing room
- Use `duration-300` for smooth, performant animations

#### **3. Side-by-Side Visual Comparisons**
Show before/after or comparison demonstrations:

```tsx
<div className="grid grid-cols-2 gap-4 mb-4">
  <div className="text-center">
    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">⚡ Traditional</div>
    <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
      {/* Visual demo with hover effects */}
    </div>
    <div className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">❌ Limited</div>
  </div>
  
  <div className="text-center">
    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">🎬 Modern</div>
    <div className="relative h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
      {/* Enhanced visual demo */}
    </div>
    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ Powerful</div>
  </div>
</div>
```

#### **4. Animated Emoji Cards**
Use large emojis with pulsing badges for visual impact:

```tsx
<div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
  <div className="text-center space-y-4">
    <div className="relative">
      <div className="text-4xl mb-2 animate-bounce">🎯</div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
    </div>
    <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Feature Name</div>
    {/* Benefits list with CheckCircle icons */}
  </div>
</div>
```

#### **5. Terminal-Style Code Blocks**
MacOS-style terminal windows with syntax highlighting (light/dark mode support):

```tsx
<div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
  <div className="flex items-center gap-2 mb-3">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Code Example</span>
  </div>
  <div className="font-mono text-sm">
    <div className="text-gray-500">/* 🎨 Comment with emoji */</div>
    <div className="text-purple-700 dark:text-purple-400">@keyframes</div>
    <div className="text-gray-900 dark:text-white"> {'{'}</div>
    <div className="text-gray-900 dark:text-white">   <span className="text-blue-600 dark:text-blue-400">0%</span>: <span className="text-yellow-600 dark:text-yellow-400">transform: scale(1)</span>;</div>
    <div className="text-gray-900 dark:text-white"> {'}'}</div>
  </div>
</div>
```

**Light/Dark Mode Colors:**
- Background: `bg-gray-50 dark:bg-gray-900`
- Border: `border-gray-200 dark:border-gray-700`
- Title: `text-gray-600 dark:text-gray-400`
- Code text: `text-gray-900 dark:text-white`
- Selectors: `text-blue-600 dark:text-blue-400`
- Keywords: `text-purple-700 dark:text-purple-400`
- Properties: `text-green-600 dark:text-green-400`
- Values: `text-yellow-600 dark:text-yellow-400`
- Comments: `text-gray-500` (same in both modes)

#### **6. Capability Grid with Icons**
Show features in color-coded grid with icons:

```tsx
<div className="grid grid-cols-2 gap-3">
  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
    <Target className="w-6 h-6 text-blue-500" />
    <div>
      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Capability Name</div>
      <div className="text-xs text-blue-600 dark:text-blue-400">Brief description</div>
    </div>
  </div>
  {/* Repeat for multiple capabilities with different colors */}
</div>
```

#### **7. Pro Tip Gradient Cards**
Highlight important tips with gradient backgrounds:

```tsx
<div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
  <div className="text-center">
    <div className="text-2xl mb-2">🚀</div>
    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
    <div className="text-sm text-orange-600 dark:text-orange-400">
      Practical advice that adds value to the learning experience
    </div>
  </div>
</div>
```

#### **8. Interactive Hover States**
Always include group hover effects for interactivity (with proper overflow handling):

```tsx
{/* Parent container with overflow control */}
<div className="overflow-hidden p-2">
  <div className="group cursor-pointer transition-all duration-300 hover:scale-[1.01]">
    <h4 className="transition-transform duration-300 group-hover:scale-105">
      {/* Content that scales on hover */}
    </h4>
    <div className="group-hover:border-blue-400 transition-colors">
      {/* Elements that change on hover */}
    </div>
  </div>
</div>
```

**Best Practices for Hover Effects:**
- ✅ Use `scale-[1.01]` (1% scale) for card hover - subtle and no overflow
- ✅ Use `scale-105` (5% scale) for text/icons - more noticeable
- ✅ Always add `overflow-hidden` to parent container
- ✅ Add `p-2` padding to give scale breathing room
- ✅ Use `duration-300` for smooth, performant animations
- ❌ Avoid `scale-[1.02]` or higher on cards - causes overflow issues

---

## 🎯 **Additional Interactive Patterns**

For layout and advanced topics (Flexbox, Grid, Positioning, etc.), create **engaging interactive demonstrations**:

### **1. Visual Property Selectors**
Show different values as clickable cards with visual representations:

```tsx
const flexDirections = [
  {
    name: 'row',
    icon: ArrowRight,
    desc: 'Items are placed in a row from left to right',
    visual: '→ → →'
  },
  // ... more options
];

// Render as interactive grid
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
  {flexDirections.map((dir) => (
    <div 
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        selected === dir.name ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => setSelected(dir.name)}
    >
      <dir.icon className="h-5 w-5 mb-2" />
      <h4 className="font-semibold">{dir.name}</h4>
      <p className="text-xs">{dir.desc}</p>
      <div className="mt-2 font-mono text-sm">{dir.visual}</div>
    </div>
  ))}
</div>
```

### **2. Live Preview Sections**
Add sections that update in real-time based on user selections:

```tsx
<Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Zap className="w-5 h-5" />
      Live Demo
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Controls */}
    <div className="flex flex-wrap gap-2 mb-4">
      {options.map((opt) => (
        <Button
          variant={selected === opt ? "default" : "outline"}
          onClick={() => setSelected(opt)}
        >
          {opt}
        </Button>
      ))}
    </div>
    
    {/* Live visualization */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
      {/* Dynamic content based on selection */}
    </div>
  </CardContent>
</Card>
```

### **3. Comparison Grids**
Show multiple variations side by side:

```tsx
<div className="grid md:grid-cols-2 gap-4">
  <div className="demo-card">
    <h3>Option A</h3>
    <div className="demo">/* Visual demo */</div>
    <code>property: value-a;</code>
  </div>
  <div className="demo-card">
    <h3>Option B</h3>
    <div className="demo">/* Visual demo */</div>
    <code>property: value-b;</code>
  </div>
</div>
```

### **4. Interactive State Management**
Use React state to demonstrate dynamic behavior:

```tsx
const [direction, setDirection] = useState('row');
const [justify, setJustify] = useState('flex-start');

// Show current state visually
<div style={{
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify
}}>
  {/* Items */}
</div>
```

### **5. Professional Styling Standards**
- Use **subtle backgrounds** (`bg-blue-50 dark:bg-blue-950/20`)
- Apply **toned-down gradients** for examples
- Include **visual indicators** (arrows, icons, emojis sparingly)
- Add **helpful tooltips** and explanations
- Show **before/after** comparisons
- Use **color-coded sections** by category

**Reference Components:**
- `css-flexbox.tsx` - Interactive property selectors
- `css-box-model.tsx` - Live box-sizing toggle
- `css-positioning.tsx` - Position tester with sliders

---

## 🚀 **Integration Checklist**

Before considering a component complete:

- [ ] Component file created in correct location
- [ ] Import added to `css-content-display.tsx`
- [ ] Slug mapping added to `topicComponentMap`
- [ ] TypeScript errors resolved
- [ ] Dark mode tested and working
- [ ] All examples load and display correctly
- [ ] Mobile responsive verified
- [ ] Icons imported and used correctly
- [ ] Color theme consistent throughout
- [ ] Best practices section included
- [ ] No console errors or warnings
- [ ] Play button opens web playground correctly

---

## 💡 **Example Topics to Follow**

Reference these well-structured components:
- `html-aria-properties.tsx` - Multiple themed sections
- `html-accessibility-basics.tsx` - Dark mode implementation
- `html-block-vs-inline.tsx` - Comparison patterns
- `html-div-span.tsx` - When to use guidance

---

## 🎨 **CSS-Specific Considerations**

### **Visual Demonstrations**
CSS components should be highly visual:
- Show before/after comparisons
- Include color swatches for color topics
- Demonstrate responsive breakpoints
- Animate transitions and transformations
- Use grid layouts to show multiple variations

### **Interactive Elements**
Where appropriate, include:
- Hover effects
- Click interactions
- Form styling examples
- Button states
- Loading animations

### **Property Tables**
For reference sections, use consistent formatting:
```tsx
<div className="p-3 rounded-lg bg-muted border">
  <code className="text-sm font-mono">display: flex;</code>
  <p className="text-sm text-muted-foreground mt-1">
    Creates a flex container
  </p>
</div>
```

---

## 📚 **Content Organization**

### **Progressive Complexity**
1. Start with simplest concept/use case
2. Build up to intermediate examples
3. Show advanced techniques last
4. Always explain "why" not just "how"

### **Section Ordering**
1. **What is it?** - Definition and purpose
2. **Basic Usage** - Simplest syntax
3. **Common Patterns** - Real-world uses
4. **Advanced Techniques** - Complex examples
5. **Quick Reference** - Cheat sheet
6. **Best Practices** - Tips and warnings
7. **Browser Support** - Compatibility info

---

## ✅ **Quality Standards**

Every component must:
- **Be beginner-friendly** - Assume minimal CSS knowledge
- **Support dark mode** - Full `@media (prefers-color-scheme: dark)` support
- **Be mobile-responsive** - Test at 320px, 768px, 1024px widths
- **Include working examples** - No broken or dummy code
- **Have consistent styling** - Match established color themes
- **Load efficiently** - Use lazy loading, optimize performance
- **Be accessible** - Follow WCAG guidelines
- **Have no TypeScript errors** - Type-safe props and exports

---

## 🔗 **Related Documentation**

- Component structure based on HTML component patterns
- See `SEMANTIC_REDESIGN_FINAL_REPORT.md` for structural examples
- Follow `FrontendCodePreview` component API
- Reference `generic-page-header.tsx` for header patterns

---

## 📝 **Notes**

- Don't create unnecessary `.md` files for progress tracking
- Focus on quality over quantity
- Test in both light and dark modes
- Always include the `onOpenWebPlayground` prop
- Keep examples practical and realistic
- Use emojis sparingly but effectively
- Maintain consistent spacing and padding
- Comment complex CSS for learning purposes

---

## ✨ **Animation-Style Component Checklist**

Every CSS component should now follow the enhanced Animation-style pattern:

### **Visual Elements** ✓
- [ ] Enhanced card headers with `text-2xl` titles and animated ping indicators
- [ ] Backdrop blur cards (`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`)
- [ ] Large animated emojis (4xl) with pulsing badges
- [ ] Terminal-style code blocks with MacOS dots
- [ ] Gradient backgrounds for special sections
- [ ] Pro tip cards with gradient borders

### **Interactive Features** ✓
- [ ] Group hover effects with `hover:scale-[1.01]` (not 1.02 to prevent overflow)
- [ ] Parent containers have `overflow-hidden` and `p-2` padding
- [ ] Side-by-side visual comparisons
- [ ] Capability grid with color-coded icons
- [ ] Interactive demonstrations with visual feedback
- [ ] Smooth transitions (`duration-300` for performance)

### **Layout Structure** ✓
- [ ] 3-column grid for introduction (2 columns + sidebar)
- [ ] Space-y-6 spacing for sections
- [ ] Rounded-xl borders with shadows
- [ ] Proper overflow and max-width handling

### **Color & Theme** ✓
- [ ] Professional toned-down gradients
- [ ] Consistent color scheme per category
- [ ] Full dark mode support with `@media (prefers-color-scheme: dark)`
- [ ] Border opacity (`border-blue-200/50`)
- [ ] Background opacity (`bg-blue-50 dark:bg-blue-900/20`)

### **Typography** ✓
- [ ] Strategic emoji placement (in titles, not excessive)
- [ ] Font size hierarchy (`text-2xl` headers, `text-lg` descriptions)
- [ ] Color-coded text (`text-blue-700 dark:text-blue-300`)
- [ ] Mono font for code (`font-mono text-sm`)

### **Reference Components** 📚
**Follow these components for Animation-style patterns:**
- `css-animations.tsx` - Master example with all patterns
- `css-variables.tsx` - Enhanced visual comparisons
- `css-functions.tsx` - Interactive demonstrations
- `css-nesting.tsx` - Live visual examples (NEW)
- `css-cascade-layers.tsx` - Animated layer stack (NEW)
- `css-counters.tsx` - Step-by-step visualization (NEW)
- `css-generated-content.tsx` - Pseudo-element demos (NEW)
- `css-scoping.tsx` - Scope boundary visualization (NEW)

---

**Last Updated:** December 2025
**Version:** 2.0 - Animation Style Enhanced

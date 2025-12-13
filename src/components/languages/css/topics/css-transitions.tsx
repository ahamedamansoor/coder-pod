'use client';

import React from 'react';
import { Zap, ArrowRight, Clock, Move, Target, Layers, Sparkles } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  PropertyTable,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssTransitionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTransitions({ onOpenWebPlayground }: CssTransitionsProps) {
  
  return (
    <CssTopicLayout
      icon={Zap}
      title="CSS Transitions"
      description="Make things change smoothly instead of instantly"
      category="CSS Animations & Effects"
      whatIsIt={{
        title: "What are CSS Transitions?",
        description: "Animations that smoothly change one style to another",
        keyPoints: [
          "Animate changes between two states (A → B)",
          "Perfect for hover effects and interactions",
          "Control speed and timing of animations",
          "Simple syntax - just a few properties",
          "Works on most CSS properties (color, size, position)",
          "Supported in all modern browsers"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Simple Concept">
        Imagine a light switch - CLICK, it's on instantly. Now imagine a dimmer switch - you slide it slowly and the light gradually gets brighter. 
        That's the difference between instant changes and transitions!
      </InfoAlert>

      {/* How It Works */}
      <SectionCard
        title="How Transitions Work"
        description="The building blocks"
        icon={Zap}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "What to Animate",
              description: "Which property changes (color, size, position)",
              example: "transition-property: background"
            },
            {
              title: "How Long",
              description: "Duration of the animation",
              example: "transition-duration: 0.3s"
            },
            {
              title: "Speed Style",
              description: "How fast it starts/ends (ease, linear)",
              example: "transition-timing-function: ease"
            },
            {
              title: "Wait Time",
              description: "Delay before starting (optional)",
              example: "transition-delay: 0.1s"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="Simple one-line transitions"
        icon={Move}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Simple Transition"
            code={`/* Shorthand - easiest way */
.button {
  background: blue;
  transition: background 0.3s ease;
}

/* When you hover, background changes smoothly! */
.button:hover {
  background: red;
}`}
          />

          <SyntaxBlock
            title="Transition Multiple Properties"
            code={`/* Animate multiple things at once */
.box {
  background: blue;
  transform: scale(1);
  transition: all 0.3s ease;
}

.box:hover {
  background: red;
  transform: scale(1.1);
}`}
          />

          <SyntaxBlock
            title="Individual Properties"
            code={`/* More control - animate each property separately */
.element {
  transition-property: background;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}`}
          />
        </div>

        <InfoAlert type="tip" title="Pro Tip">
          Use the shorthand <code>transition: property duration timing-function delay</code> - it's much shorter and easier to read!
        </InfoAlert>
      </SectionCard>

      {/* Example */}
      <SectionCard
        title="Example: Hover Button"
        description="Try hovering over the button!"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 60px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .button {
      display: inline-block;
      padding: 20px 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
      font-size: 18px;
      border-radius: 12px;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    
    .button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.6);
      background: linear-gradient(135deg, #764ba2, #667eea);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Hover Me!</h1>
    <button class="button">Smooth Transition</button>
  </div>
</body>
</html>`}
            title="Basic Transition"
            colorTheme="indigo"
            onOpenPlayground={onOpenWebPlayground}
          />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Transitions"
        description="Common scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Button Hover Effects"
            description="Change color, size, or shadow when users hover over buttons"
            icon={Target}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Focus States"
            description="Highlight form inputs smoothly when users click them"
            icon={Sparkles}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Card Interactions"
            description="Lift cards up or add shadows on hover for visual feedback"
            icon={Layers}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Menu Animations"
            description="Smoothly show/hide dropdowns and navigation menus"
            icon={Move}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Keep It Short:</strong> 0.2-0.5 seconds is usually perfect - fast enough to feel snappy</li>
          <li><strong>Use 'ease' or 'ease-in-out':</strong> These feel most natural to users</li>
          <li><strong>Animate transform & opacity:</strong> These are fast and smooth</li>
          <li><strong>Avoid width/height:</strong> These can cause layout shifts and feel janky</li>
          <li><strong>Don't Overdo It:</strong> Too many transitions can be distracting</li>
        </ul>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ All Modern Browsers:</strong> CSS Transitions work in Chrome, Firefox, Safari, and Edge. 
          They've been supported for many years, so you can use them confidently!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}

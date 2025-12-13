'use client';

import React from 'react';
import { Pause, Sparkles, Target, Layers, CheckCircle, Play } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface ReducedMotionProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function ReducedMotion({ onOpenWebPlayground }: ReducedMotionProps) {
  
  return (
    <CssTopicLayout
      icon={Pause}
      title="Reduced Motion"
      description="Respect user preferences for less animation"
      category="CSS Accessibility"
      whatIsIt={{
        title: "What is prefers-reduced-motion?",
        description: "A CSS media query that detects if users want less animation",
        keyPoints: [
          "Some people get dizzy from animations",
          "Detects user's system preference",
          "Reduce or remove animations for these users",
          "Simple @media query to use",
          "Shows you care about accessibility",
          "Required for inclusive websites"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="Why This Matters">
        Some people have vestibular disorders (inner ear problems) that make them dizzy or nauseous from animations. 
        Users can set a preference in their OS settings, and we can detect it with CSS to turn off or reduce animations!
      </InfoAlert>

      {/* What It Detects */}
      <SectionCard
        title="What Does It Detect?"
        description="Two possible values"
        icon={CheckCircle}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "🎬 no-preference (default)",
              description: "User hasn't set any preference",
              example: "Show normal animations"
            },
            {
              title: "⏸️ reduce",
              description: "User wants less motion",
              example: "Remove or minimize animations"
            },
            {
              title: "♿ Accessibility",
              description: "Respecting this preference is important",
              example: "Makes your site usable for everyone"
            },
            {
              title: "💡 How to Enable",
              description: "Users set this in OS accessibility settings",
              example: "Mac: System Preferences → Accessibility → Display"
            }
          ]}
        />
      </SectionCard>

      {/* Basic Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to use the media query"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Simple Example"
            code={`/* Normal animations for everyone */
.box {
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1) rotate(5deg);
}

/* Remove animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .box {
    transition: none;
  }
  
  .box:hover {
    transform: none;
  }
}`}
          />

          <SyntaxBlock
            title="Disable All Animations"
            code={`/* Universal solution - turns off all animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
          />

          <SyntaxBlock
            title="Subtle Motion Instead"
            code={`/* Instead of removing completely, use subtle motion */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Reduced motion: just fade, no movement */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: opacity 0.3s ease;
  }
  
  .card:hover {
    transform: none;
    opacity: 0.9;
  }
}`}
          />
        </div>

        <InfoAlert type="tip" title="Two Approaches">
          You can either <strong>remove animations completely</strong> or <strong>use more subtle effects</strong> 
          (like opacity changes). Both are valid - choose based on your design!
        </InfoAlert>
      </SectionCard>

      {/* Example 1: Interactive Demo */}
      <SectionCard
        title="Example: Reduced Motion in Action"
        description="See how animations can be controlled"
        icon={Play}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <h2>Hover over these cards</h2>
  <p class="hint">Enable "Reduce Motion" in your OS to see the difference</p>
  
  <div class="cards">
    <div class="card card-1">
      <div class="icon">🎬</div>
      <h3>Normal Motion</h3>
      <p>Scales and rotates on hover</p>
    </div>
    
    <div class="card card-2">
      <div class="icon">✨</div>
      <h3>Bouncy Animation</h3>
      <p>Bounces continuously</p>
    </div>
    
    <div class="card card-3">
      <div class="icon">🌈</div>
      <h3>Slide Effect</h3>
      <p>Slides up on hover</p>
    </div>
  </div>
  
  <div class="info-box">
    <strong>With Reduced Motion:</strong> All animations are disabled or minimized
  </div>
</div>`}
          css={`.container {
  padding: 40px;
  font-family: system-ui, sans-serif;
}

h2 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 24px;
}

.hint {
  margin: 0 0 32px 0;
  color: #6b7280;
  font-size: 14px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.card {
  padding: 32px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.card h3 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 18px;
}

.card p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}

/* Different animations for each card */
.card-1:hover {
  transform: scale(1.05) rotate(2deg);
}

.card-2 {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-3:hover {
  transform: translateY(-10px);
}

/* Reduced Motion: Disable all animations */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
  
  .card-1:hover,
  .card-3:hover {
    transform: none;
    /* Subtle alternative: just opacity */
    opacity: 0.9;
  }
  
  .card-2 {
    animation: none;
  }
}

.info-box {
  padding: 20px;
  background: #eff6ff;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  color: #1e40af;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .container {
    background: #1f2937;
  }
  
  h2 {
    color: #f3f4f6;
  }
  
  .hint {
    color: #9ca3af;
  }
  
  .card {
    background: #374151;
    border-color: #4b5563;
  }
  
  .card h3 {
    color: #f3f4f6;
  }
  
  .card p {
    color: #9ca3af;
  }
  
  .info-box {
    background: #1e3a8a;
    border-color: #3b82f6;
    color: #93c5fd;
  }
}`}
          title="Reduced Motion Demo"
          colorTheme="purple"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Example 2: Scroll Behavior */}
      <SectionCard
        title="Example: Smooth Scroll Control"
        description="Respect reduced motion for scroll animations"
        icon={Target}
        variant="primary"
      >
        <FrontendCodePreview
          html={`<div class="container">
  <nav class="nav">
    <a href="#section1">Section 1</a>
    <a href="#section2">Section 2</a>
    <a href="#section3">Section 3</a>
  </nav>
  
  <section id="section1" class="section">
    <h2>Section 1</h2>
    <p>Click the navigation links above</p>
  </section>
  
  <section id="section2" class="section">
    <h2>Section 2</h2>
    <p>Notice the smooth scroll effect</p>
  </section>
  
  <section id="section3" class="section">
    <h2>Section 3</h2>
    <p>With reduced motion, it jumps instantly</p>
  </section>
</div>`}
          css={`.container {
  font-family: system-ui, sans-serif;
}

/* Smooth scrolling by default */
html {
  scroll-behavior: smooth;
}

/* Instant scrolling for reduced motion users */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

.nav {
  position: sticky;
  top: 0;
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border-bottom: 2px solid #e5e7eb;
  z-index: 10;
}

.nav a {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s ease;
}

.nav a:hover {
  background: #2563eb;
}

.section {
  min-height: 300px;
  padding: 60px 40px;
  border-bottom: 1px solid #e5e7eb;
}

.section h2 {
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 32px;
}

.section p {
  margin: 0;
  color: #6b7280;
  font-size: 16px;
}

@media (prefers-color-scheme: dark) {
  .nav {
    background: #1f2937;
    border-color: #4b5563;
  }
  
  .section {
    background: #1f2937;
    border-color: #374151;
  }
  
  .section h2 {
    color: #f3f4f6;
  }
  
  .section p {
    color: #9ca3af;
  }
}`}
          title="Smooth Scroll Control"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use Reduced Motion"
        description="Always! But especially for..."
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Animations"
            description="All CSS animations and keyframes"
            icon={Play}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Transitions"
            description="Hover effects and state changes"
            icon={Sparkles}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Scroll Behavior"
            description="Smooth scrolling and parallax effects"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Transforms"
            description="Scale, rotate, and translate effects"
            icon={Layers}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Always Include:</strong> Add reduced motion support to all animations</li>
          <li><strong>Test It:</strong> Enable reduced motion in your OS and test your site</li>
          <li><strong>Subtle Alternatives:</strong> Consider using opacity/fade instead of complete removal</li>
          <li><strong>Scroll Behavior:</strong> Always disable smooth scrolling for reduced motion</li>
          <li><strong>Keep Functionality:</strong> Ensure features still work without animations</li>
          <li><strong>Use Important Sparingly:</strong> Only use !important when absolutely necessary</li>
        </ul>
      </InfoAlert>

      {/* How to Enable */}
      <InfoAlert type="info" title="How to Enable Reduced Motion">
        <div className="mt-2 space-y-2">
          <p><strong>🍎 Mac:</strong> System Preferences → Accessibility → Display → Reduce motion</p>
          <p><strong>🪟 Windows:</strong> Settings → Ease of Access → Display → Show animations</p>
          <p><strong>🤖 Android:</strong> Settings → Accessibility → Remove animations</p>
          <p><strong>🍏 iOS:</strong> Settings → Accessibility → Motion → Reduce Motion</p>
        </div>
      </InfoAlert>

      {/* Browser Support */}
      <InfoAlert type="info" title="Browser Support">
        <p className="mt-2">
          <strong>✅ Excellent Support:</strong> <code>prefers-reduced-motion</code> works in all modern browsers 
          including Chrome, Firefox, Safari, and Edge. It's widely supported and safe to use!
        </p>
      </InfoAlert>

    </CssTopicLayout>
  );
}

'use client';

import React from 'react';
import { Film, Play, Repeat, Sparkles, MousePointer, Layers } from 'lucide-react';
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

interface CssAnimationsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAnimations({ onOpenWebPlayground }: CssAnimationsProps) {
  return (
    <CssTopicLayout
      icon={Film}
      title="CSS Animations"
      description="Create complex multi-step animations with keyframes"
      category="Animations & Effects"
      whatIsIt={{
        title: "What are CSS Animations?",
        description: "Multi-step keyframe animations with complete control",
        keyPoints: [
          "Define animation sequences with @keyframes",
          "Control timing, duration, and iteration",
          "Create complex multi-step animations",
          "No JavaScript required",
          "Hardware accelerated for performance",
          "Support for multiple animations"
        ]
      }}
    >
      {/* Quick Comparison */}
      <InfoAlert type="info" title="Animations vs Transitions">
        <div className="space-y-2">
          <p><strong>Transitions:</strong> Simple A → B changes (hover effects)</p>
          <p><strong>Animations:</strong> Complex multi-step sequences with full control (keyframes)</p>
        </div>
      </InfoAlert>

      {/* Visual Example */}
      <SectionCard
        title="See It In Action"
        description="Interactive animation example"
        icon={Play}
        variant="primary"
      >
        <FrontendCodePreview
          title="Bouncing Ball Animation"
          html={`<div class="container">
  <div class="ball"></div>
</div>`}
          css={`.container {
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(to bottom, #e0f2fe, #bae6fd);
  border-radius: 12px;
  overflow: hidden;
}

.ball {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f43f5e, #ec4899);
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(-200px);
    animation-timing-function: ease-out;
  }
}`}
          colorTheme="indigo"
        />
      </SectionCard>

      {/* How It Works */}
      <SectionCard
        title="How CSS Animations Work"
        description="Two-step process"
        icon={Layers}
        variant="success"
      >
        <ConceptGrid
          concepts={[
            {
              title: "Step 1: Define @keyframes",
              description: "Create animation sequence with multiple steps (0%, 50%, 100%)",
              example: "@keyframes slide { 0% { left: 0; } 100% { left: 100px; } }"
            },
            {
              title: "Step 2: Apply Animation",
              description: "Use animation property on element to run the sequence",
              example: ".box { animation: slide 2s ease infinite; }"
            }
          ]}
        />
      </SectionCard>

      {/* Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to write animations"
        icon={Film}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Define Keyframes"
            code={`@keyframes animationName {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100px);
  }
}`}
          />

          <SyntaxBlock
            title="Apply to Element"
            code={`.element {
  animation: animationName 2s ease-in-out infinite;
  
  /* Or use individual properties */
  animation-name: animationName;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}`}
          />
        </div>

        <InfoAlert type="tip" title="Pro Tip">
          Use percentages or keywords <code>from</code> (0%) and <code>to</code> (100%) to define keyframe steps.
        </InfoAlert>
      </SectionCard>

      {/* Animation Properties */}
      <SectionCard
        title="Animation Properties"
        description="Complete control over animations"
        icon={Repeat}
      >
        <PropertyTable
          properties={[
            {
              property: 'animation-name',
              values: 'keyframe-name',
              description: 'Name of the @keyframes animation'
            },
            {
              property: 'animation-duration',
              values: 'time (2s, 500ms)',
              description: 'How long the animation takes'
            },
            {
              property: 'animation-timing-function',
              values: 'ease, linear, ease-in, ease-out, cubic-bezier()',
              description: 'Speed curve of the animation'
            },
            {
              property: 'animation-delay',
              values: 'time (1s, 200ms)',
              description: 'Delay before animation starts'
            },
            {
              property: 'animation-iteration-count',
              values: 'number, infinite',
              description: 'How many times to play'
            },
            {
              property: 'animation-direction',
              values: 'normal, reverse, alternate, alternate-reverse',
              description: 'Direction of animation playback'
            },
            {
              property: 'animation-fill-mode',
              values: 'none, forwards, backwards, both',
              description: 'Style before/after animation'
            },
            {
              property: 'animation-play-state',
              values: 'running, paused',
              description: 'Play or pause animation'
            }
          ]}
        />
      </SectionCard>

      {/* Advanced Example */}
      <SectionCard
        title="Advanced Example"
        description="Multiple animations combined"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          title="Spinning and Pulsing Card"
          html={`<div class="card">
  <div class="icon">✨</div>
  <h3>Animated Card</h3>
  <p>Hover me!</p>
</div>`}
          css={`.card {
  width: 200px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  text-align: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
  animation-play-state: paused;
}

.icon {
  font-size: 48px;
  animation: spin 4s linear infinite;
}

h3 {
  margin: 10px 0 5px;
  font-size: 20px;
}

p {
  margin: 0;
  opacity: 0.9;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}
          colorTheme="indigo"
        />
      </SectionCard>

      {/* Timing Functions */}
      <SectionCard
        title="Animation Timing Functions"
        description="Control animation speed curves"
        icon={Play}
      >
        <FrontendCodePreview
          title="Timing Functions Comparison"
          html={`<div class="timing-demo">
  <div class="box linear">linear</div>
  <div class="box ease">ease</div>
  <div class="box ease-in">ease-in</div>
  <div class="box ease-out">ease-out</div>
  <div class="box ease-in-out">ease-in-out</div>
</div>`}
          css={`.timing-demo {
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
}

.box {
  margin: 10px 0;
  padding: 15px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  animation: slide 3s infinite;
  width: fit-content;
}

.linear { animation-timing-function: linear; }
.ease { animation-timing-function: ease; }
.ease-in { animation-timing-function: ease-in; }
.ease-out { animation-timing-function: ease-out; }
.ease-in-out { animation-timing-function: ease-in-out; }

@keyframes slide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(300px);
  }
}`}
          colorTheme="indigo"
        />
      </SectionCard>

      {/* Common Use Cases */}
      <SectionCard
        title="Common Use Cases"
        description="When to use CSS animations"
        icon={MousePointer}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Loading Spinners"
            description="Infinite rotating animations for loading indicators"
            icon={Repeat}
            gradient="from-blue-500 to-cyan-600"
          />
          <UseCaseCard
            title="Attention Seekers"
            description="Pulse, bounce, shake animations to draw attention"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Page Transitions"
            description="Smooth entrance and exit animations for content"
            icon={Layers}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Interactive Feedback"
            description="Visual responses to user actions and states"
            icon={MousePointer}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <SectionCard
        title="Best Practices"
        description="Tips for better animations"
        icon={Sparkles}
        variant="success"
      >
        <div className="space-y-4">
          <InfoAlert type="success" title="Do's">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use <code>transform</code> and <code>opacity</code> for performance</li>
              <li>Keep animations short (200-500ms for UI)</li>
              <li>Use <code>prefers-reduced-motion</code> media query</li>
              <li>Test on different devices and browsers</li>
            </ul>
          </InfoAlert>

          <InfoAlert type="warning" title="Don'ts">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Avoid animating <code>width</code>, <code>height</code>, or <code>top/left</code></li>
              <li>Don't make animations too long or distracting</li>
              <li>Don't use too many simultaneous animations</li>
              <li>Avoid infinite animations that can't be stopped</li>
            </ul>
          </InfoAlert>
        </div>

        <SyntaxBlock
          title="Respect User Preferences"
          code={`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
        />
      </SectionCard>

      {/* Performance Tip */}
      <InfoAlert type="tip" title="Performance Tip">
        Use <code>will-change: transform</code> to hint the browser about upcoming animations, 
        but remove it after the animation completes to avoid memory issues.
      </InfoAlert>

    </CssTopicLayout>
  );
}

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

      {/* Fade Animations */}
      <SectionCard
        title="Fade Animations"
        description="Smooth entrance and exit effects"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          title="Fade In & Fade Out Effects"
          html={`<div class="demo-container">
  <div class="box fade-in">
    <h4>Fade In</h4>
    <p>Smooth entrance</p>
  </div>
  
  <div class="box fade-in-up">
    <h4>Fade In Up</h4>
    <p>From bottom</p>
  </div>
  
  <div class="box fade-in-down">
    <h4>Fade In Down</h4>
    <p>From top</p>
  </div>
  
  <div class="box fade-in-left">
    <h4>Fade In Left</h4>
    <p>From left side</p>
  </div>
</div>`}
          css={`.demo-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
}

.box {
  padding: 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.box h4 {
  margin: 0 0 8px;
  color: #667eea;
  font-size: 16px;
}

.box p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.fade-in {
  animation: fadeIn 1.5s ease-in;
}

.fade-in-up {
  animation: fadeInUp 1.5s ease-out 0.3s backwards;
}

.fade-in-down {
  animation: fadeInDown 1.5s ease-out 0.6s backwards;
}

.fade-in-left {
  animation: fadeInLeft 1.5s ease-out 0.9s backwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`}
          colorTheme="indigo"
        />
      </SectionCard>

      {/* Attention Seekers */}
      <SectionCard
        title="Attention Animations"
        description="Draw user attention with motion"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          title="Pulse, Shake, and Bounce Effects"
          html={`<div class="attention-grid">
  <button class="btn pulse-btn">
    💓 Pulse
  </button>
  
  <button class="btn shake-btn">
    🔔 Shake
  </button>
  
  <button class="btn bounce-btn">
    ⬆️ Bounce
  </button>
  
  <button class="btn wiggle-btn">
    🎵 Wiggle
  </button>
</div>`}
          css={`.attention-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
}

.btn {
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 12px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.pulse-btn {
  animation: pulse 2s ease-in-out infinite;
}

.shake-btn {
  animation: shake 3s ease-in-out infinite;
}

.bounce-btn {
  animation: bounce 2s ease-in-out infinite;
}

.wiggle-btn {
  animation: wiggle 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}`}
          colorTheme="indigo"
        />
      </SectionCard>

      {/* Loading Animations */}
      <SectionCard
        title="Loading Animations"
        description="Spinners and progress indicators"
        icon={Repeat}
        variant="primary"
      >
        <FrontendCodePreview
          title="Various Loading Spinners"
          html={`<div class="loader-grid">
  <div class="loader-item">
    <div class="spinner"></div>
    <p>Classic Spinner</p>
  </div>
  
  <div class="loader-item">
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <p>Bouncing Dots</p>
  </div>
  
  <div class="loader-item">
    <div class="pulse-ring"></div>
    <p>Pulse Ring</p>
  </div>
  
  <div class="loader-item">
    <div class="bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <p>Sound Bars</p>
  </div>
</div>`}
          css={`.loader-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 12px;
}

.loader-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.loader-item p {
  margin: 0;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

/* Classic Spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Bouncing Dots */
.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  animation: bounce-dot 1.4s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce-dot {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
}

/* Pulse Ring */
.pulse-ring {
  width: 40px;
  height: 40px;
  border: 4px solid white;
  border-radius: 50%;
  animation: pulse-ring 1.5s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

/* Sound Bars */
.bars {
  display: flex;
  gap: 5px;
  align-items: flex-end;
  height: 40px;
}

.bar {
  width: 6px;
  background: white;
  border-radius: 3px;
  animation: sound-bar 1.2s ease-in-out infinite;
}

.bar:nth-child(2) {
  animation-delay: 0.1s;
}

.bar:nth-child(3) {
  animation-delay: 0.2s;
}

.bar:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes sound-bar {
  0%, 100% {
    height: 10px;
  }
  50% {
    height: 40px;
  }
}`}
          colorTheme="indigo"
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
          title="Interactive Notification Card"
          html={`<div class="notification-card">
  <div class="icon-wrapper">
    <div class="icon">✨</div>
    <div class="glow"></div>
  </div>
  <div class="content">
    <h3>Success!</h3>
    <p>Your animation is working perfectly</p>
  </div>
  <div class="progress-bar">
    <div class="progress"></div>
  </div>
</div>`}
          css={`.notification-card {
  position: relative;
  width: 320px;
  margin: 20px auto;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  animation: slideInRight 0.6s ease-out, float 3s ease-in-out 0.6s infinite;
  overflow: hidden;
}

.notification-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shimmer 3s infinite;
}

.icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
}

.icon {
  position: relative;
  z-index: 2;
  font-size: 40px;
  animation: bounceRotate 2s ease-in-out infinite;
  text-align: center;
  line-height: 60px;
}

.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: glow-pulse 2s ease-in-out infinite;
}

.content {
  text-align: center;
  margin-bottom: 16px;
}

.content h3 {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 700;
}

.content p {
  margin: 0;
  opacity: 0.9;
  font-size: 14px;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: white;
  border-radius: 2px;
  animation: progress 3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounceRotate {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%);
  }
  100% {
    transform: translateX(100%) translateY(100%);
  }
}

@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
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

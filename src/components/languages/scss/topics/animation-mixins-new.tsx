'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Zap, 
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Info,
  Play,
  RefreshCw,
  TrendingUp,
  Wind
} from 'lucide-react';

interface AnimationMixinsNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function AnimationMixinsNew({ onOpenWebPlayground }: AnimationMixinsNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="Sass/SCSS · Mixins Library"
        title="Animation Mixins"
        description="Keyframe generation, transition utilities, and reusable animation patterns."
        colorTheme="pink"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Animation Mixins"
            description="Reusable animation patterns"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Animation mixins help you create <strong>smooth transitions</strong>, generate <strong>keyframe animations</strong>, and apply <strong>consistent motion</strong> throughout your project!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Transitions</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Smooth property changes</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Keyframes</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Complex animations</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Loops</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Infinite animations</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">Easing</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Timing functions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transition Mixins */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Transition Mixins"
            description="Smooth property changes"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Basic Transition"
              code={`@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

// Usage
.button {
  background: #3b82f6;
  @include transition(background, 0.3s, ease-in-out);
  
  &:hover {
    background: #2563eb;
  }
}

.card {
  @include transition(transform, 0.4s, ease-out);
  
  &:hover {
    transform: translateY(-8px);
  }
}`}
              output={[
                '.button {',
                '  background: #3b82f6;',
                '  transition: background 0.3s ease-in-out;',
                '}',
                '.button:hover { background: #2563eb; }',
                '.card { transition: transform 0.4s ease-out; }',
                '.card:hover { transform: translateY(-8px); }'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Multiple Property Transitions"
              code={`@mixin transitions($transitions...) {
  transition: $transitions;
}

// Usage
.box {
  @include transitions(
    transform 0.3s ease-out,
    opacity 0.3s ease-in,
    box-shadow 0.3s ease
  );
  
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
}`}
              output={[
                '.box {',
                '  transition: transform 0.3s ease-out, opacity 0.3s ease-in, box-shadow 0.3s ease;',
                '}',
                '.box:hover {',
                '  transform: scale(1.05);',
                '  opacity: 0.9;',
                '  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);',
                '}'
              ]}
              language="scss"
              colorTheme="blue"
            />

            <CodeSnippetWithOutput
              title="Transition with Delay"
              code={`@mixin transition-delayed($property, $duration, $delay, $timing: ease) {
  transition: $property $duration $timing $delay;
}

// Usage - Staggered animations
.menu-item {
  @include transition-delayed(opacity, 0.3s, 0s);
  
  &:nth-child(2) {
    @include transition-delayed(opacity, 0.3s, 0.1s);
  }
  
  &:nth-child(3) {
    @include transition-delayed(opacity, 0.3s, 0.2s);
  }
}`}
              output={[
                '.menu-item { transition: opacity 0.3s ease 0s; }',
                '.menu-item:nth-child(2) { transition: opacity 0.3s ease 0.1s; }',
                '.menu-item:nth-child(3) { transition: opacity 0.3s ease 0.2s; }'
              ]}
              language="scss"
              colorTheme="blue"
            />
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Performance Tip</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              For best performance, animate <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">transform</code> and <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">opacity</code> instead of layout properties!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Keyframe Mixins */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Keyframe Animations"
            description="Complex animation sequences"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Keyframe Generation Mixin"
              code={`@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

// Usage
@include keyframes(fadeIn) {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeIn 0.6s ease-out;
}`}
              output={[
                '@keyframes fadeIn {',
                '  from { opacity: 0; transform: translateY(20px); }',
                '  to { opacity: 1; transform: translateY(0); }',
                '}',
                '.element { animation: fadeIn 0.6s ease-out; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Animation Application Mixin"
              code={`@mixin animate($name, $duration: 1s, $timing: ease, $delay: 0s, $iteration: 1, $direction: normal, $fill: forwards) {
  animation-name: $name;
  animation-duration: $duration;
  animation-timing-function: $timing;
  animation-delay: $delay;
  animation-iteration-count: $iteration;
  animation-direction: $direction;
  animation-fill-mode: $fill;
}

// Usage
.fade-in {
  @include animate(fadeIn, 0.5s, ease-out);
}

.bounce-forever {
  @include animate(bounce, 1s, ease-in-out, 0s, infinite);
}`}
              output={[
                '.fade-in {',
                '  animation-name: fadeIn;',
                '  animation-duration: 0.5s;',
                '  animation-timing-function: ease-out;',
                '  animation-delay: 0s;',
                '  animation-iteration-count: 1;',
                '  animation-direction: normal;',
                '  animation-fill-mode: forwards;',
                '}',
                '.bounce-forever { animation-name: bounce; animation-duration: 1s; ... animation-iteration-count: infinite; }'
              ]}
              language="scss"
              colorTheme="purple"
            />

            <CodeSnippetWithOutput
              title="Common Animation Keyframes"
              code={`@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

// Slide In
@include keyframes(slideInLeft) {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

// Scale Up
@include keyframes(scaleUp) {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

// Rotate
@include keyframes(rotate360) {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}
              output={[
                '@keyframes slideInLeft { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }',
                '@keyframes scaleUp { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }',
                '@keyframes rotate360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'
              ]}
              language="scss"
              colorTheme="purple"
            />
          </div>
        </CardContent>
      </Card>

      {/* Easing Functions */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Wind className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Easing Functions"
            description="Custom timing curves"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Custom Easing Variables"
              code={`// Easing function library
$ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
$ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
$ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
$ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);

// Bouncy easing
$ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);
$ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);

// Usage
.smooth {
  transition: transform 0.3s $ease-out-cubic;
}

.bouncy {
  transition: transform 0.5s $ease-out-back;
}`}
              output={[
                '.smooth { transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1); }',
                '.bouncy { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }'
              ]}
              language="scss"
              colorTheme="green"
            />

            <CodeSnippetWithOutput
              title="Easing Mixin"
              code={`$easing: (
  linear: linear,
  ease: ease,
  ease-in: ease-in,
  ease-out: ease-out,
  ease-in-out: ease-in-out,
  smooth: cubic-bezier(0.4, 0, 0.2, 1),
  bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
);

@mixin ease($name: smooth) {
  transition-timing-function: map-get($easing, $name);
}

// Usage
.box {
  transition: transform 0.3s;
  @include ease(smooth);
}

.button {
  transition: all 0.3s;
  @include ease(bounce);
}`}
              output={[
                '.box { transition: transform 0.3s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }',
                '.button { transition: all 0.3s; transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }'
              ]}
              language="scss"
              colorTheme="green"
            />
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Cubic Bezier</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <strong>cubic-bezier.com</strong> to visually create custom easing curves!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Pre-built Animation Library */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Animation Library"
            description="Pre-built animation utilities"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="Fade Animations"
              code={`@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@mixin fade-in {
  @include keyframes(fadeIn) {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation: fadeIn 0.5s ease-out;
}

@mixin fade-out {
  @include keyframes(fadeOut) {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  animation: fadeOut 0.5s ease-out;
}

// Usage
.modal-enter {
  @include fade-in;
}

.modal-exit {
  @include fade-out;
}`}
              output={[
                '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }',
                '.modal-enter { animation: fadeIn 0.5s ease-out; }',
                '@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }',
                '.modal-exit { animation: fadeOut 0.5s ease-out; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Slide Animations"
              code={`@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@mixin slide-in-up {
  @include keyframes(slideInUp) {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: slideInUp 0.4s ease-out;
}

@mixin slide-in-down {
  @include keyframes(slideInDown) {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: slideInDown 0.4s ease-out;
}

.notification {
  @include slide-in-down;
}`}
              output={[
                '@keyframes slideInUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
                '@keyframes slideInDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
                '.notification { animation: slideInDown 0.4s ease-out; }'
              ]}
              language="scss"
              colorTheme="orange"
            />

            <CodeSnippetWithOutput
              title="Pulse & Bounce"
              code={`@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@mixin pulse {
  @include keyframes(pulse) {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
  animation: pulse 2s ease-in-out infinite;
}

@mixin bounce {
  @include keyframes(bounce) {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  animation: bounce 1s ease-in-out infinite;
}

.notification-badge {
  @include pulse;
}

.arrow-down {
  @include bounce;
}`}
              output={[
                '@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.9; } }',
                '.notification-badge { animation: pulse 2s ease-in-out infinite; }',
                '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }',
                '.arrow-down { animation: bounce 1s ease-in-out infinite; }'
              ]}
              language="scss"
              colorTheme="orange"
            />
          </div>
        </CardContent>
      </Card>

      {/* Complete Animation Library */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Animation Library"
            description="All animation utilities together"
            size="lg"
          />

          <div className="space-y-6">
            <CodeSnippetWithOutput
              title="animations.scss"
              code={`// ===== Keyframes Helper =====
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

// ===== Transitions =====
@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

@mixin transitions($transitions...) {
  transition: $transitions;
}

// ===== Animation Application =====
@mixin animate($name, $duration: 1s, $timing: ease, $iteration: 1) {
  animation: $name $duration $timing $iteration;
}

// ===== Easing Variables =====
$ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
$ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

// ===== Pre-built Animations =====
@mixin fade-in {
  @include keyframes(fadeIn) {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  animation: fadeIn 0.5s ease-out;
}

@mixin slide-in-up {
  @include keyframes(slideInUp) {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  animation: slideInUp 0.4s ease-out;
}

@mixin pulse {
  @include keyframes(pulse) {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  animation: pulse 2s ease-in-out infinite;
}`}
              output={[
                '// Complete animation mixin library!',
                '// Import: @use "animations" as *;',
                '',
                '.button { @include transition(all, 0.3s); }',
                '.modal { @include fade-in; }',
                '.notification { @include slide-in-up; }',
                '.badge { @include pulse; }'
              ]}
              language="scss"
              colorTheme="pink"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
          title="Animation Showcase"
          description="Interactive animation demos"
          size="lg"
        />

        <FrontendCodePreview
          html={`<div class="container">
  <h1>Animation Mixins</h1>
  
  <div class="grid">
    <div class="card fade-in">
      <h3>Fade In</h3>
      <p>Smooth opacity transition</p>
    </div>
    
    <div class="card slide-up">
      <h3>Slide Up</h3>
      <p>Enters from bottom</p>
    </div>
    
    <div class="card scale-up">
      <h3>Scale Up</h3>
      <p>Grows from small</p>
    </div>
    
    <div class="card pulse">
      <span class="badge">🔔</span>
      <h3>Pulse</h3>
      <p>Infinite loop</p>
    </div>
  </div>
  
  <button class="button">Hover Me!</button>
</div>`}
          css={`// SCSS Animation Mixins
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1000px;
  width: 100%;
  
  h1 {
    color: white;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  
  h3 {
    color: #667eea;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    font-size: 0.875rem;
  }
  
  .badge {
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
  }
}

@include keyframes(fadeIn) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@include keyframes(slideInUp) {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@include keyframes(scaleUp) {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@include keyframes(pulse) {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-up {
  animation: slideInUp 0.6s ease-out 0.2s backwards;
}

.scale-up {
  animation: scaleUp 0.6s ease-out 0.4s backwards;
}

.pulse {
  animation: slideInUp 0.6s ease-out 0.6s backwards;
  
  .badge {
    animation: pulse 2s ease-in-out infinite;
  }
}

.button {
  display: block;
  margin: 0 auto;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  @include transition(all, 0.3s, cubic-bezier(0.68, -0.55, 0.265, 1.55));
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1e293b;
    
    h3 {
      color: #8b9aef;
    }
    
    p {
      color: #94a3b8;
    }
  }
}`}
          title="Animation Library Demo"
          description="Fade, slide, scale, and pulse animations"
          colorTheme="indigo"
          styleLanguage="scss"
          onOpenWebPlayground={onOpenWebPlayground}
        />
      </div>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Transitions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smooth property changes with duration & easing
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Keyframes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Complex animations with @keyframes
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Easing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Custom timing with cubic-bezier
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Library</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pre-built fade, slide, pulse animations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

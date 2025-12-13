'use client';

import React from 'react';
import { Code, Sparkles, Target, Layers, CheckCircle, Zap } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  CssTopicLayout,
  SectionCard,
  SyntaxBlock,
  ConceptGrid,
  InfoAlert,
  UseCaseCard
} from '../shared/css-topic-layout';

interface CssInJsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssInJs({ onOpenWebPlayground }: CssInJsProps) {
  
  return (
    <CssTopicLayout
      icon={Code}
      title="CSS-in-JS"
      description="Write CSS directly in JavaScript/React components"
      category="CSS Tools & Workflow"
      whatIsIt={{
        title: "What is CSS-in-JS?",
        description: "A pattern where you write CSS styles inside JavaScript files, typically within React components",
        keyPoints: [
          "Write CSS as JavaScript objects or template literals",
          "Styles scoped to components automatically",
          "Dynamic styling based on props/state",
          "Popular libraries: styled-components, Emotion",
          "No separate CSS files needed",
          "Used by major companies (Netflix, Airbnb)"
        ]
      }}
    >

      {/* Simple Explanation */}
      <InfoAlert type="info" title="CSS-in-JS in Simple Terms">
        Instead of writing CSS in separate <code>.css</code> files, you write it directly in your JavaScript. 
        <strong> This keeps styles right next to the components they style</strong>, 
        makes styles dynamic, and automatically scopes them to prevent conflicts!
      </InfoAlert>

      {/* Comparison */}
      <SectionCard
        title="Traditional CSS vs CSS-in-JS"
        description="What's the difference?"
        icon={Target}
        variant="primary"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Traditional CSS</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Separate <code>.css</code> files</li>
              <li>• Global scope (risk of conflicts)</li>
              <li>• Static styles</li>
              <li>• Manual class name management</li>
              <li>• Hard to delete unused styles</li>
            </ul>
            <SyntaxBlock
              title="button.css"
              code={`.button {
  background: blue;
  padding: 10px;
}`}
            />
          </div>

          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">CSS-in-JS</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Styles in JavaScript files</li>
              <li>• Scoped automatically</li>
              <li>• Dynamic styles (props/state)</li>
              <li>• Auto-generated class names</li>
              <li>• Unused styles removed automatically</li>
            </ul>
            <SyntaxBlock
              title="Button.js"
              code={`const Button = styled.button\`
  background: blue;
  padding: 10px;
\`;`}
            />
          </div>
        </div>
      </SectionCard>

      {/* Popular Libraries */}
      <SectionCard
        title="Popular CSS-in-JS Libraries"
        description="The main players"
        icon={Layers}
        variant="primary"
      >
        <div className="space-y-4">
          <div className="p-5 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">styled-components</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Most popular CSS-in-JS library. Uses tagged template literals.
            </p>
            <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded">
              40M+ downloads/month
            </code>
          </div>

          <div className="p-5 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Emotion</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              High-performance CSS-in-JS. Similar to styled-components but faster.
            </p>
            <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
              15M+ downloads/month
            </code>
          </div>

          <div className="p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">JSS (CSS Modules)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Used by Material-UI. CSS as JavaScript objects.
            </p>
            <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              10M+ downloads/month
            </code>
          </div>

          <div className="p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Vanilla Extract</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Zero-runtime CSS-in-TypeScript. Generates static CSS.
            </p>
            <code className="text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
              Modern, type-safe
            </code>
          </div>
        </div>
      </SectionCard>

      {/* styled-components Example */}
      <SectionCard
        title="styled-components - Most Popular"
        description="How it works"
        icon={Sparkles}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Installation"
            code={`npm install styled-components

# TypeScript users
npm install @types/styled-components -D`}
          />

          <SyntaxBlock
            title="Basic Usage"
            code={`import styled from 'styled-components';

// Create a styled button
const Button = styled.button\`
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
  }
\`;

// Use it like a regular component
function App() {
  return (
    <Button>Click Me</Button>
  );
}`}
          />

          <SyntaxBlock
            title="Dynamic Styling with Props"
            code={`// Button that changes based on props
const Button = styled.button\`
  background: \${props => props.primary ? '#3b82f6' : '#6b7280'};
  color: white;
  padding: \${props => props.large ? '16px 32px' : '12px 24px'};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

// Usage with different props
function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button primary large>Large Primary</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}`}
          />

          <SyntaxBlock
            title="Extending Styles"
            code={`// Base button
const Button = styled.button\`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
\`;

// Extend the base button
const PrimaryButton = styled(Button)\`
  background: #3b82f6;
  color: white;
\`;

const DangerButton = styled(Button)\`
  background: #ef4444;
  color: white;
\`;

// Usage
function App() {
  return (
    <>
      <PrimaryButton>Save</PrimaryButton>
      <DangerButton>Delete</DangerButton>
    </>
  );
}`}
          />
        </div>
      </SectionCard>

      {/* Emotion Example */}
      <SectionCard
        title="Emotion - High Performance"
        description="Alternative to styled-components"
        icon={Zap}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Installation & Setup"
            code={`npm install @emotion/react @emotion/styled

# Usage with styled API (similar to styled-components)
import styled from '@emotion/styled';

const Button = styled.button\`
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
\`;`}
          />

          <SyntaxBlock
            title="Using the css Prop"
            code={`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Use css prop directly on elements
function Button() {
  return (
    <button
      css={css\`
        background: #3b82f6;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        
        &:hover {
          background: #2563eb;
        }
      \`}
    >
      Click Me
    </button>
  );
}`}
          />
        </div>
      </SectionCard>

      {/* Practical Example */}
      <SectionCard
        title="Real-World Example"
        description="Complete component with CSS-in-JS"
        icon={Code}
        variant="primary"
      >
        <SyntaxBlock
          title="Card Component with styled-components"
          code={`import styled from 'styled-components';

// Styled components
const CardContainer = styled.div\`
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
\`;

const CardTitle = styled.h3\`
  margin: 0 0 12px 0;
  font-size: 20px;
  color: #1f2937;
\`;

const CardContent = styled.p\`
  margin: 0 0 16px 0;
  color: #6b7280;
  line-height: 1.6;
\`;

const CardButton = styled.button\`
  background: \${props => props.variant === 'primary' ? '#3b82f6' : '#6b7280'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
\`;

// Use the styled components
function Card({ title, content }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <CardButton variant="primary">Read More</CardButton>
    </CardContainer>
  );
}

export default Card;`}
        />
      </SectionCard>

      {/* Advantages & Disadvantages */}
      <SectionCard
        title="Pros and Cons"
        description="Should you use CSS-in-JS?"
        icon={CheckCircle}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-950/20">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Advantages</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ <strong>Scoped Styles:</strong> No name conflicts</li>
              <li>✓ <strong>Dynamic:</strong> Styles based on props/state</li>
              <li>✓ <strong>Colocation:</strong> Styles with component</li>
              <li>✓ <strong>Dead Code Elimination:</strong> Unused styles removed</li>
              <li>✓ <strong>TypeScript:</strong> Type-safe props</li>
              <li>✓ <strong>No Class Names:</strong> Auto-generated</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-amber-200 dark:border-amber-800 rounded-xl bg-amber-50 dark:bg-amber-950/20">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Disadvantages</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>⚠ <strong>Bundle Size:</strong> Adds library weight</li>
              <li>⚠ <strong>Runtime:</strong> Styles generated at runtime</li>
              <li>⚠ <strong>Learning Curve:</strong> New syntax to learn</li>
              <li>⚠ <strong>Debugging:</strong> Auto-generated class names</li>
              <li>⚠ <strong>SSR Complexity:</strong> Needs server setup</li>
              <li>⚠ <strong>Performance:</strong> Can be slower than CSS</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            💡 <strong>Modern Alternative:</strong> Consider Tailwind CSS or CSS Modules for simpler projects. 
            Use CSS-in-JS when you need highly dynamic styling based on props/state.
          </p>
        </div>
      </SectionCard>

      {/* Theming */}
      <SectionCard
        title="Theming with CSS-in-JS"
        description="Dark mode and themes made easy"
        icon={Sparkles}
      >
        <SyntaxBlock
          title="Theme Provider with styled-components"
          code={`import { ThemeProvider } from 'styled-components';

// Define your theme
const lightTheme = {
  colors: {
    primary: '#3b82f6',
    background: '#ffffff',
    text: '#1f2937',
  },
};

const darkTheme = {
  colors: {
    primary: '#3b82f6',
    background: '#1f2937',
    text: '#f3f4f6',
  },
};

// Styled component using theme
const Button = styled.button\`
  background: \${props => props.theme.colors.primary};
  color: white;
  padding: 12px 24px;
\`;

const Container = styled.div\`
  background: \${props => props.theme.colors.background};
  color: \${props => props.theme.colors.text};
  min-height: 100vh;
\`;

// Use ThemeProvider
function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}`}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="When to Use CSS-in-JS"
        description="Best scenarios"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="React Applications"
            description="Component-based styling works great with React"
            icon={Code}
            gradient="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            title="Dynamic UIs"
            description="Styles that change based on props/state"
            icon={Sparkles}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Design Systems"
            description="Themeable component libraries"
            icon={Layers}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="TypeScript Projects"
            description="Type-safe styling with prop validation"
            icon={CheckCircle}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Best Practices */}
      <InfoAlert type="success" title="CSS-in-JS Best Practices">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Keep Styles Close:</strong> Define styled components near where they're used</li>
          <li><strong>Use Theme:</strong> Store colors, spacing in a theme object</li>
          <li><strong>Avoid Inline Styles:</strong> Use styled-components, not inline styles</li>
          <li><strong>Name Components:</strong> Give styled components descriptive names</li>
          <li><strong>Reuse Styles:</strong> Extend base components instead of duplicating</li>
          <li><strong>Performance:</strong> Use <code>shouldForwardProp</code> to avoid prop forwarding</li>
          <li><strong>SSR:</strong> Configure properly for server-side rendering</li>
        </ul>
      </InfoAlert>

      {/* When NOT to Use */}
      <InfoAlert type="warning" title="When to Avoid CSS-in-JS">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>❌ <strong>Static Sites:</strong> Plain CSS is faster and simpler</li>
          <li>❌ <strong>Performance Critical:</strong> CSS-in-JS has runtime overhead</li>
          <li>❌ <strong>Simple Projects:</strong> Overkill for basic styling needs</li>
          <li>❌ <strong>Team Unfamiliar:</strong> Learning curve can slow development</li>
          <li>❌ <strong>Non-React:</strong> Better alternatives exist for other frameworks</li>
        </ul>
      </InfoAlert>

      {/* Alternatives */}
      <InfoAlert type="info" title="Modern Alternatives to Consider">
        <div className="mt-2 space-y-2">
          <p><strong>Tailwind CSS:</strong> Utility-first CSS (no runtime, static)</p>
          <p><strong>CSS Modules:</strong> Scoped CSS without JavaScript (built into Next.js)</p>
          <p><strong>Vanilla Extract:</strong> Zero-runtime CSS-in-TypeScript</p>
          <p><strong>Panda CSS:</strong> Build-time CSS-in-JS (no runtime)</p>
        </div>
      </InfoAlert>

    </CssTopicLayout>
  );
}

'use client';

import React from 'react';
import { Anchor, Link2, Target, Layers, AlertTriangle, Sparkles } from 'lucide-react';
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

interface CssAnchorPositioningProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAnchorPositioning({ onOpenWebPlayground }: CssAnchorPositioningProps) {

  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Anchor Positioning - Basic</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #9f1239 100%); }
    }
    
    .container {
      max-width: 800px;
      width: 100%;
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      position: relative;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
      font-size: 0.95rem;
    }
    
    .demo-wrapper {
      position: relative;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
    }
    
    /* THE ANCHOR - Define anchor element */
    .anchor-button {
      /* NEW: Define this element as an anchor */
      anchor-name: --my-anchor;
      
      background: linear-gradient(135deg, #ec4899, #db2777);
      color: white;
      padding: 16px 32px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
      transition: transform 0.2s;
    }
    
    .anchor-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
    }
    
    @media (prefers-color-scheme: dark) {
      .anchor-button {
        background: linear-gradient(135deg, #f9a8d4, #ec4899);
        color: #1e293b;
      }
    }
    
    /* THE POSITIONED ELEMENT - Links to anchor */
    .popup {
      /* NEW: Link to the anchor */
      position-anchor: --my-anchor;
      
      /* NEW: Position above the anchor */
      inset-area: top;
      
      /* Traditional positioning (fallback) */
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      
      /* Styling */
      background: #1e293b;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 0.875rem;
      white-space: nowrap;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      animation: fadeIn 0.3s ease-out;
    }
    
    @media (prefers-color-scheme: dark) {
      .popup { background: #f9a8d4; color: #1e293b; font-weight: 600; }
    }
    
    /* Arrow pointing to anchor */
    .popup::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 8px solid transparent;
      border-top-color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .popup::after { border-top-color: #f9a8d4; }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateX(-50%) translateY(-5px); }
      to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    
    .code-display {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-display { background: #0f172a; border-color: #334155; color: #e2e8f0; }
    }
    
    .code-display .comment {
      color: #64748b;
      font-style: italic;
    }
    
    .code-display .property {
      color: #ec4899;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚓ CSS Anchor Positioning</h1>
    <p class="subtitle">The popup is positioned relative to the button!</p>
    
    <div class="demo-wrapper">
      <button class="anchor-button">
        I'm the Anchor
      </button>
      <div class="popup">
        📍 Positioned with anchor-name & position-anchor
      </div>
    </div>
    
    <div class="code-display">
      <div><span class="comment">/* Define the anchor */</span></div>
      <div>.anchor-button {</div>
      <div>  <span class="property">anchor-name</span>: --my-anchor;</div>
      <div>}</div>
      <br>
      <div><span class="comment">/* Position relative to anchor */</span></div>
      <div>.popup {</div>
      <div>  <span class="property">position-anchor</span>: --my-anchor;</div>
      <div>  <span class="property">inset-area</span>: top;</div>
      <div>}</div>
    </div>
  </div>
</body>
</html>`;

  const tooltipExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Anchor Positioning - Interactive Tooltip</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #9f1239 100%); }
    }
    
    .container {
      max-width: 900px;
      width: 100%;
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #ec4899;
      text-align: center;
      margin-bottom: 15px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
      font-size: 0.95rem;
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
      padding: 40px;
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-grid { background: linear-gradient(135deg, #831843 0%, #881337 100%); }
    }
    
    .button-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
    }
    
    /* Define anchors for each button */
    .btn-1 { anchor-name: --btn-1; }
    .btn-2 { anchor-name: --btn-2; }
    .btn-3 { anchor-name: --btn-3; }
    
    .action-button {
      background: linear-gradient(135deg, #ec4899, #db2777);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.95rem;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
    }
    
    .action-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(236, 72, 153, 0.5);
    }
    
    @media (prefers-color-scheme: dark) {
      .action-button {
        background: linear-gradient(135deg, #f9a8d4, #ec4899);
        color: #1e293b;
      }
    }
    
    /* Tooltips - positioned relative to their anchors */
    .tooltip {
      position: absolute;
      background: #1e293b;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.8rem;
      white-space: nowrap;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
      .tooltip { background: #f9a8d4; color: #1e293b; font-weight: 600; }
    }
    
    .button-wrapper:hover .tooltip {
      opacity: 1;
    }
    
    /* Position tooltips using anchor positioning with fallback */
    .tooltip-1 {
      position-anchor: --btn-1;
      inset-area: top;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
    
    .tooltip-2 {
      position-anchor: --btn-2;
      inset-area: right;
      left: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
    }
    
    .tooltip-3 {
      position-anchor: --btn-3;
      inset-area: bottom;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
    
    /* Tooltip arrows */
    .tooltip-1::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-top-color: #1e293b;
    }
    
    .tooltip-2::after {
      content: '';
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 6px solid transparent;
      border-right-color: #1e293b;
    }
    
    .tooltip-3::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-bottom-color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .tooltip-1::after { border-top-color: #f9a8d4; }
      .tooltip-2::after { border-right-color: #f9a8d4; }
      .tooltip-3::after { border-bottom-color: #f9a8d4; }
    }
    
    .info-banner {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
      font-size: 0.9rem;
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-banner {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        color: #fef3c7;
        border-left-color: #fbbf24;
      }
    }
    
    .info-banner strong {
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-banner strong { color: #fde68a; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚓ Interactive Tooltips</h1>
    <p class="subtitle">Hover over buttons to see anchor-positioned tooltips!</p>
    
    <div class="demo-grid">
      <div class="button-wrapper">
        <button class="action-button btn-1">Top Tooltip</button>
        <div class="tooltip tooltip-1">Positioned above 👆</div>
      </div>
      
      <div class="button-wrapper">
        <button class="action-button btn-2">Right Tooltip</button>
        <div class="tooltip tooltip-2">Positioned right 👉</div>
      </div>
      
      <div class="button-wrapper">
        <button class="action-button btn-3">Bottom Tooltip</button>
        <div class="tooltip tooltip-3">Positioned below 👇</div>
      </div>
    </div>
    
    <div class="info-banner">
      <strong>💡 How it works:</strong> Each button has an <code>anchor-name</code>, 
      and its tooltip uses <code>position-anchor</code> to link to it. The <code>inset-area</code> 
      property positions the tooltip (top, right, bottom). Traditional positioning is used as fallback 
      for browsers without anchor positioning support.
    </div>
  </div>
</body>
</html>`;

  return (
    <CssTopicLayout
      icon={Anchor}
      title="CSS Anchor Positioning"
      description="Position elements relative to other elements without JavaScript"
      category="Modern CSS (2024)"
      whatIsIt={{
        title: "What is Anchor Positioning?",
        description: "Revolutionary CSS feature for element-to-element positioning",
        keyPoints: [
          "Position elements relative to other elements (anchors)",
          "Pure CSS solution - no JavaScript calculations needed",
          "Perfect for tooltips, dropdowns, and popovers",
          "Automatically adapts to anchor element position",
          "Part of CSS Anchoring Module Level 1",
          "Cutting-edge feature with evolving browser support"
        ]
      }}
    >

      {/* Browser Support Warning */}
      <InfoAlert type="warning" title="⚠️ Limited Browser Support (2024)">
        <div className="space-y-2">
          <p><strong>Chrome 125+:</strong> Experimental support (flag required)</p>
          <p><strong>Firefox:</strong> Under development</p>
          <p><strong>Safari:</strong> Under consideration</p>
          <p className="mt-3 pt-3 border-t border-amber-200 dark:border-amber-700">
            <strong>💡 Recommendation:</strong> Use as progressive enhancement with JavaScript fallback
          </p>
        </div>
      </InfoAlert>

      {/* How It Works */}
      <SectionCard
        title="How Anchor Positioning Works"
        description="Understanding the relationship between anchors and positioned elements"
        icon={Link2}
        variant="primary"
      >
        <ConceptGrid
          concepts={[
            {
              title: "Define Anchor",
              description: "Name an element as an anchor point for other elements to reference",
              example: "anchor-name: --my-anchor;"
            },
            {
              title: "Link to Anchor",
              description: "Connect a positioned element to the anchor using its name",
              example: "position-anchor: --my-anchor;"
            },
            {
              title: "Set Position",
              description: "Specify where to position relative to the anchor (top, bottom, left, right)",
              example: "inset-area: top;"
            },
            {
              title: "Auto-Adjust",
              description: "Browser automatically updates position when anchor moves or resizes",
              example: "/* No JavaScript needed! */"
            }
          ]}
        />
      </SectionCard>

      {/* Syntax */}
      <SectionCard
        title="Basic Syntax"
        description="How to implement anchor positioning"
        icon={Layers}
      >
        <div className="space-y-6">
          <SyntaxBlock
            title="Step 1: Define the Anchor"
            code={`.button {
  /* Define this element as an anchor */
  anchor-name: --my-button;
  
  /* Position it normally */
  position: relative;
}`}
          />

          <SyntaxBlock
            title="Step 2: Position Element Relative to Anchor"
            code={`.tooltip {
  /* Link to the anchor */
  position-anchor: --my-button;
  
  /* Must use absolute positioning */
  position: absolute;
  
  /* Position above the anchor */
  inset-area: top;
  
  /* Optional: Add margin */
  margin-bottom: 10px;
}`}
          />

          <SyntaxBlock
            title="Complete Example"
            code={`/* Anchor element */
.button {
  anchor-name: --my-button;
}

/* Positioned element */
.tooltip {
  position: absolute;
  position-anchor: --my-button;
  inset-area: top;
  margin-bottom: 10px;
  
  /* Styling */
  background: #1e293b;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
}`}
          />
        </div>

        <InfoAlert type="tip" title="Pro Tip">
          The positioned element will automatically move when the anchor element moves or scrolls. 
          No JavaScript or scroll listeners needed!
        </InfoAlert>
      </SectionCard>

      {/* Properties */}
      <SectionCard
        title="Anchor Properties"
        description="Key properties for anchor positioning"
        icon={Target}
      >
        <PropertyTable
          properties={[
            {
              property: 'anchor-name',
              values: '--custom-name',
              description: 'Defines an element as an anchor with a custom name'
            },
            {
              property: 'position-anchor',
              values: '--custom-name',
              description: 'Links positioned element to a specific anchor'
            },
            {
              property: 'inset-area',
              values: 'top, bottom, left, right, center, etc.',
              description: 'Specifies position relative to anchor'
            },
            {
              property: 'anchor()',
              values: 'function',
              description: 'Function to reference anchor positions in calculations'
            },
            {
              property: 'position-fallback',
              values: 'fallback-name',
              description: 'Defines fallback positions if primary doesn\'t fit'
            }
          ]}
        />
      </SectionCard>

      {/* Basic Example */}
      <SectionCard
        title="Basic Example"
        description="Understanding anchor positioning"
        icon={Anchor}
        variant="primary"
      >
        <FrontendCodePreview
          html={basicExample}
          title="Basic Anchor Positioning"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Tooltip Example */}
      <SectionCard
        title="Tooltip Example"
        description="Practical use case with tooltips"
        icon={Sparkles}
        variant="primary"
      >
        <FrontendCodePreview
          html={tooltipExample}
          title="Tooltip with Anchor"
          colorTheme="indigo"
          onOpenPlayground={onOpenWebPlayground}
        />
      </SectionCard>

      {/* Use Cases */}
      <SectionCard
        title="Common Use Cases"
        description="When to use anchor positioning"
        icon={Target}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <UseCaseCard
            title="Tooltips"
            description="Position tooltips precisely relative to buttons and interactive elements"
            icon={Sparkles}
            gradient="from-blue-500 to-cyan-600"
          />
          <UseCaseCard
            title="Dropdown Menus"
            description="Align dropdown menus perfectly with trigger buttons"
            icon={Layers}
            gradient="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            title="Popovers"
            description="Context menus and popup content positioned dynamically"
            icon={Target}
            gradient="from-green-500 to-emerald-600"
          />
          <UseCaseCard
            title="Floating Labels"
            description="Dynamic form field labels that follow input elements"
            icon={Anchor}
            gradient="from-amber-500 to-orange-600"
          />
        </div>
      </SectionCard>

      {/* Benefits & Considerations */}
      <SectionCard
        title="Benefits & Best Practices"
        description="Why and how to use anchor positioning"
        icon={AlertTriangle}
        variant="success"
      >
        <div className="space-y-4">
          <InfoAlert type="success" title="✅ Key Benefits">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>No JavaScript:</strong> Pure CSS solution for complex positioning</li>
              <li><strong>Performant:</strong> Browser-optimized with no calculation overhead</li>
              <li><strong>Responsive:</strong> Automatically adapts to viewport and anchor changes</li>
              <li><strong>Accessible:</strong> Works seamlessly with screen readers</li>
              <li><strong>Maintainable:</strong> Cleaner code without positioning scripts</li>
            </ul>
          </InfoAlert>

          <InfoAlert type="warning" title="⚠️ Important Considerations">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Browser Support:</strong> Very limited - use with caution in production</li>
              <li><strong>Fallback Required:</strong> Always provide JavaScript fallback for unsupported browsers</li>
              <li><strong>Progressive Enhancement:</strong> Treat as an enhancement, not core functionality</li>
              <li><strong>Testing:</strong> Test thoroughly across different browsers and devices</li>
              <li><strong>Polyfills:</strong> Consider using polyfills for wider compatibility</li>
            </ul>
          </InfoAlert>
        </div>
      </SectionCard>

      {/* Final Info */}
      <InfoAlert type="info" title="CSS Anchoring Module Level 1">
        CSS Anchor Positioning is part of the CSS Anchoring Module Level 1 specification. 
        Check the latest browser compatibility at <strong>caniuse.com</strong> before using in production. 
        Consider using polyfills or JavaScript fallbacks for broader support. This is a cutting-edge 
        feature that will revolutionize UI component positioning once widely supported!
      </InfoAlert>

    </CssTopicLayout>
  );
}

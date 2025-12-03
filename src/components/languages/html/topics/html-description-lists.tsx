'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  BookText,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlDescriptionListsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicDescriptionListExample = {
  html: `<h3>Web Development Glossary</h3>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - the standard markup language for web pages</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - used for styling and layout of web pages</dd>
  
  <dt>JavaScript</dt>
  <dd>A programming language that makes web pages interactive</dd>
</dl>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

dl {
  background: white;
  border-left: 4px solid #8b5cf6;
  border-radius: 8px;
  padding: 2rem;
  max-width: 700px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  dl {
    background: #1e293b;
    border-color: #c4b5fd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

dt {
  font-weight: bold;
  color: #8b5cf6;
  margin-top: 1rem;
  font-size: 1.1rem;
}

dt:first-of-type {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  dt {
    color: #c4b5fd;
  }
}

dd {
  color: #475569;
  margin: 0.5rem 0 0 1.5rem;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  dd {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const contactInfoExample = {
  html: `<h3>Contact Information</h3>
<dl>
  <dt>Email</dt>
  <dd><a href="mailto:info@example.com">info@example.com</a></dd>
  
  <dt>Phone</dt>
  <dd>+1 (555) 123-4567</dd>
  
  <dt>Address</dt>
  <dd>
    123 Main Street<br>
    New York, NY 10001<br>
    USA
  </dd>
  
  <dt>Business Hours</dt>
  <dd>Monday to Friday: 9 AM - 5 PM</dd>
  <dd>Saturday: 10 AM - 3 PM</dd>
  <dd>Sunday: Closed</dd>
</dl>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

dl {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  dl {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

dt {
  font-weight: bold;
  color: #06b6d4;
  margin-top: 1.25rem;
  font-size: 1rem;
}

dt:first-of-type {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  dt {
    color: #22d3ee;
  }
}

dd {
  color: #475569;
  margin: 0.5rem 0 0 1.5rem;
  line-height: 1.6;
}

dd a {
  color: #3b82f6;
  text-decoration: none;
}

dd a:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  dd {
    color: #cbd5e1;
  }
  
  dd a {
    color: #60a5fa;
  }
}`,
  js: ``,
};

const productSpecsExample = {
  html: `<h3>Product Specifications</h3>
<dl>
  <dt>Model</dt>
  <dd>Pro X1000</dd>
  
  <dt>Color Options</dt>
  <dd>Black</dd>
  <dd>White</dd>
  <dd>Silver</dd>
  
  <dt>Dimensions</dt>
  <dd>25cm × 15cm × 8cm</dd>
  
  <dt>Weight</dt>
  <dd>450 grams</dd>
  
  <dt>Warranty</dt>
  <dd>2 years limited warranty</dd>
  
  <dt>Price</dt>
  <dd>$299.99</dd>
</dl>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

dl {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  dl {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

dt {
  font-weight: bold;
  color: #ec4899;
  margin-top: 1.25rem;
  font-size: 1rem;
}

dt:first-of-type {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  dt {
    color: #f472b6;
  }
}

dd {
  color: #475569;
  margin: 0.35rem 0 0 1.5rem;
  line-height: 1.4;
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  dd {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

const definitionsExample = {
  html: `<h3>Technical Definitions</h3>
<dl>
  <dt>API</dt>
  <dd>Application Programming Interface - a set of protocols for building software</dd>
  
  <dt>REST</dt>
  <dd>Representational State Transfer - an architectural style for web services</dd>
  
  <dt>JSON</dt>
  <dd>JavaScript Object Notation - a lightweight data exchange format</dd>
  
  <dt>CORS</dt>
  <dd>Cross-Origin Resource Sharing - a mechanism that allows restricted resources</dd>
  
  <dt>SSL/TLS</dt>
  <dd>Secure Sockets Layer/Transport Layer Security - cryptographic protocols for security</dd>
</dl>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h3 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

dl {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 700px;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  dl {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

dt {
  font-weight: bold;
  color: #3b82f6;
  margin-top: 1rem;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
}

dt:first-of-type {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  dt {
    color: #60a5fa;
  }
}

dd {
  color: #475569;
  margin: 0.5rem 0 0 1.5rem;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  dd {
    color: #cbd5e1;
  }
}`,
  js: ``,
};

export default function HtmlDescriptionLists({ onOpenWebPlayground }: HtmlDescriptionListsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={BookText}
        category="HTML · Lists"
        title="Description Lists"
        description="Learn to create definition lists with HTML"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <BookText className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Description Lists?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Lists for terms and their descriptions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            A description list is used to display a list of terms and their definitions or descriptions. It's also called a definition list or association list.
            Use the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dl&gt;</code> element for the list,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dt&gt;</code> for terms, and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dd&gt;</code> for descriptions.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                When to Use
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Glossaries</li>
                <li>✓ Definitions</li>
                <li>✓ Specifications</li>
                <li>✓ Contact information</li>
                <li>✓ Product details</li>
                <li>✓ Q&A formats</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Syntax Example
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<dl>
  <dt>Term</dt>
  <dd>Definition or description</dd>
</dl>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Description lists are perfect for glossaries, specifications, and any term-definition pairs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Description List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <BookText className="w-7 h-7" />
            Basic Description List
          </CardTitle>
          <CardDescription className="text-base">
            Simple term and definition pairs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The most basic description list uses the <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dl&gt;</code> tag
            with <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dt&gt;</code> for terms and <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;dd&gt;</code> for definitions.
          </p>

          <FrontendCodePreview
            title="Web Development Glossary"
            description="Basic description list with terms and definitions"
            html={basicDescriptionListExample.html}
            css={basicDescriptionListExample.css}
            js={basicDescriptionListExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Description List Elements
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the three key elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3">
            {[
              {
                element: '<dl>',
                name: 'Description List',
                desc: 'Container for all terms and descriptions',
                color: 'orange',
              },
              {
                element: '<dt>',
                name: 'Description Term',
                desc: 'The term or name being defined',
                color: 'emerald',
              },
              {
                element: '<dd>',
                name: 'Description Details',
                desc: 'The definition or description of the term',
                color: 'purple',
              },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <div className="flex items-start gap-3">
                    <code className="text-lg font-mono font-bold">{item.element}</code>
                    <div>
                      <h4 className="font-semibold mb-1">{item.name}</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Point</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              You can have multiple <code className="bg-white dark:bg-slate-900 px-1 rounded text-xs">&lt;dd&gt;</code> elements for one <code className="bg-white dark:bg-slate-900 px-1 rounded text-xs">&lt;dt&gt;</code> element!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Multiple Descriptions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Multiple Descriptions Per Term
          </CardTitle>
          <CardDescription className="text-base">
            One term can have multiple descriptions or values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            A single term can have multiple descriptions. This is useful for listing multiple values, addresses, or definitions for one term.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">HTML Structure</h4>
            <pre className="text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-200">{`<dl>
  <dt>Colors</dt>
  <dd>Red</dd>
  <dd>Blue</dd>
  <dd>Green</dd>
  
  <dt>Size</dt>
  <dd>Small</dd>
  <dd>Large</dd>
</dl>`}</code>
            </pre>
          </div>

          <FrontendCodePreview
            title="Contact Information"
            description="Multiple descriptions for one term (business hours)"
            html={contactInfoExample.html}
            css={contactInfoExample.css}
            js={contactInfoExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Product Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Product Specifications
          </CardTitle>
          <CardDescription className="text-base">
            Real-world example with product details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Description lists are perfect for displaying product specifications and details in an organized way.
          </p>

          <FrontendCodePreview
            title="Product Details"
            description="Using description lists for product specifications"
            html={productSpecsExample.html}
            css={productSpecsExample.css}
            js={productSpecsExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Technical Definitions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Technical Glossary
          </CardTitle>
          <CardDescription className="text-base">
            Organizing technical terms and definitions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Description lists are ideal for technical documentation and glossaries where you need to define many terms.
          </p>

          <FrontendCodePreview
            title="Technical Definitions"
            description="Acronyms and technical terms with explanations"
            html={definitionsExample.html}
            css={definitionsExample.css}
            js={definitionsExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use for term-definition pairs</li>
                <li>✓ Use for specifications</li>
                <li>✓ Maintain semantic meaning</li>
                <li>✓ Group related definitions</li>
                <li>✓ Style with CSS appropriately</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Don't overuse for non-definition content</li>
                <li>✗ Don't use for complex structures</li>
                <li>✗ Don't nest other lists inside</li>
                <li>✗ Don't forget proper indentation</li>
                <li>✗ Don't mix definitions randomly</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Note</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Description lists provide semantic meaning that screen readers can properly announce, improving accessibility for users.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Glossary', desc: 'Technical or domain terms', emoji: '📖' },
              { title: 'FAQ', desc: 'Questions and answers', emoji: '❓' },
              { title: 'Specs', desc: 'Product or feature details', emoji: '⚙️' },
              { title: 'Metadata', desc: 'Document properties', emoji: '📋' },
              { title: 'Contact', desc: 'Contact details and info', emoji: '📞' },
              { title: 'Definitions', desc: 'Term explanations', emoji: '📚' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <div className="text-3xl mb-2">{useCase.emoji}</div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{useCase.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


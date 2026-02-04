'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Eye, Accessibility, Heart } from 'lucide-react';

export default function AriaAndAccessibilityPattern() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Accessibility}
        category="React · Advanced Patterns"
        title="ARIA and Accessibility"
        description="Learn best practices for making your React components accessible to everyone using semantic HTML and ARIA attributes."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Heart className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Accessibility Matters"
              description="Building for everyone"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Accessibility (a11y)</strong> ensures your React apps are usable by everyone, including people with disabilities. This includes screen reader users, keyboard navigation, and more!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">👁️ Visual</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Blind, low vision, color blind users
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">⌨️ Motor</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keyboard-only, mobility impairments
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">🎯 Cognitive</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Learning disabilities, memory issues
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Everyone Benefits!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Accessible design improves usability for ALL users, not just those with disabilities. It's also often required by law!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Semantic HTML"
            description="Use the right HTML elements"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Semantic HTML - Live Demo"
            description="See the difference! Right-click and inspect to see proper semantic structure"
            colorTheme="green"
            react={`function SemanticDemo() {
  const [section, setSection] = React.useState('home');
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <div className="page">
      {/* ✅ Semantic header with navigation */}
      <header role="banner">
        <h1>My Accessible App</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); setSection('home'); }}
                aria-current={section === 'home' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); setSection('about'); }}
                aria-current={section === 'about' ? 'page' : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); setSection('contact'); }}
                aria-current={section === 'contact' ? 'page' : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ✅ Semantic main content */}
      <main id="main-content" role="main">
        <article>
          <h2>Welcome to {section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <p>This page uses proper semantic HTML elements.</p>
          
          {/* ✅ Proper button vs div comparison */}
          <div className="comparison">
            <div className="bad-example">
              <p><strong>❌ Bad:</strong> Div as button</p>
              <div 
                className="fake-button"
                onClick={() => alert('This is NOT accessible!')}
              >
                Click me (div)
              </div>
            </div>

            <div className="good-example">
              <p><strong>✅ Good:</strong> Real button</p>
              <button onClick={() => setClickCount(clickCount + 1)}>
                Click me (button)
              </button>
              <p className="counter">Clicked: {clickCount} times</p>
            </div>
          </div>
        </article>

        {/* ✅ Semantic aside */}
        <aside aria-label="Related information">
          <h3>Did You Know?</h3>
          <ul>
            <li>Screen readers announce semantic elements</li>
            <li>Buttons are keyboard accessible</li>
            <li>Links should navigate pages</li>
          </ul>
        </aside>
      </main>

      {/* ✅ Semantic footer */}
      <footer role="contentinfo">
        <p>© 2024 Accessible Web App</p>
        <p className="tip">💡 Try tabbing through this page!</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SemanticDemo />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  padding: 20px;
}

.page {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 30px 40px;
}

header h1 {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.2s;
}

nav a:hover,
nav a:focus {
  background: rgba(255, 255, 255, 0.2);
  outline: 2px solid white;
  outline-offset: 2px;
}

nav a[aria-current="page"] {
  background: rgba(255, 255, 255, 0.3);
  font-weight: 600;
}

main {
  padding: 40px;
}

article h2 {
  color: #10b981;
  margin-bottom: 15px;
}

article p {
  color: #6b7280;
  margin-bottom: 30px;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
}

.bad-example,
.good-example {
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.bad-example {
  background: #fef2f2;
  border: 2px solid #ef4444;
}

.good-example {
  background: #d1fae5;
  border: 2px solid #10b981;
}

.fake-button {
  padding: 12px 24px;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
}

button {
  padding: 12px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s;
}

button:hover {
  background: #059669;
}

button:focus {
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

.counter {
  margin-top: 10px;
  font-size: 14px;
  color: #059669;
  font-weight: 600;
}

aside {
  margin-top: 30px;
  padding: 20px;
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
}

aside h3 {
  color: #3b82f6;
  margin-bottom: 15px;
}

aside ul {
  list-style: none;
  padding-left: 0;
}

aside li {
  padding: 8px 0;
  color: #4b5563;
}

aside li:before {
  content: "✓ ";
  color: #10b981;
  font-weight: bold;
  margin-right: 8px;
}

footer {
  background: #f9fafb;
  padding: 30px 40px;
  text-align: center;
  border-top: 1px solid #e5e7eb;
}

footer p {
  color: #6b7280;
  margin: 5px 0;
}

.tip {
  color: #10b981;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .page {
    background: #1f2937;
  }

  main {
    color: #e5e7eb;
  }

  article p {
    color: #9ca3af;
  }

  aside {
    background: #1e3a8a;
  }

  aside li {
    color: #d1d5db;
  }

  footer {
    background: #111827;
    border-top-color: #374151;
  }
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Accessibility className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="ARIA Attributes"
            description="Enhancing HTML with ARIA"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Accessible Modal Dialog"
            description="Interactive modal with proper ARIA attributes"
            colorTheme="blue"
            react={`function AccessibleModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="demo">
      <button 
        onClick={() => setIsOpen(true)}
        aria-label="Open settings dialog"
      >
        Open Settings
      </button>

      {isOpen && (
        <>
          <div 
            className="backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            className="modal"
          >
            <h2 id="dialog-title">Settings</h2>
            <p id="dialog-desc">Configure your preferences</p>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                id="username" 
                type="text"
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <select id="theme" aria-label="Choose theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccessibleModal />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.demo {
  text-align: center;
}

button {
  padding: 12px 24px;
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

button:focus {
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal h2 {
  color: #3b82f6;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.modal p {
  color: #6b7280;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal button {
  width: 100%;
  margin-top: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

@media (prefers-color-scheme: dark) {
  .modal {
    background: #1f2937;
  }

  .modal h2 {
    color: #60a5fa;
  }

  .modal p {
    color: #9ca3af;
  }

  .form-group label {
    color: #e5e7eb;
  }

  .form-group input,
  .form-group select {
    background: #111827;
    border-color: #374151;
    color: #f3f4f6;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Accessibility className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Keyboard Navigation"
            description="Essential for accessibility"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Keyboard Accessible Dropdown - Live Demo"
            description="Try using Tab, Arrow keys, Enter, and Escape! Full keyboard support"
            colorTheme="purple"
            react={`function KeyboardAccessibleMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [action, setAction] = React.useState('');
  const buttonRef = React.useRef();
  const menuRef = React.useRef();

  const menuItems = ['Profile', 'Settings', 'Help', 'Logout'];

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % menuItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setAction(\`Selected: \${menuItems[selectedIndex]}\`);
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div className="keyboard-demo">
      <div className="info-panel">
        <h2>⌨️ Keyboard Navigation Demo</h2>
        <p>Try these keyboard shortcuts:</p>
        <ul className="shortcuts">
          <li><kbd>Tab</kbd> - Focus menu button</li>
          <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Open menu</li>
          <li><kbd>↑</kbd> <kbd>↓</kbd> - Navigate menu items</li>
          <li><kbd>Enter</kbd> - Select item</li>
          <li><kbd>Esc</kbd> - Close menu</li>
        </ul>
      </div>

      <div className="menu-container">
        <button
          ref={buttonRef}
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label="User menu"
        >
          User Menu {isOpen ? '▲' : '▼'}
        </button>

        {isOpen && (
          <ul
            ref={menuRef}
            className="dropdown-menu"
            role="menu"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="User menu options"
          >
            {menuItems.map((item, index) => (
              <li
                key={item}
                role="menuitem"
                className={\`menu-item \${index === selectedIndex ? 'selected' : ''}\`}
                onClick={() => {
                  setAction(\`Selected: \${item}\`);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {action && (
        <div className="action-result">
          ✅ {action}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<KeyboardAccessibleMenu />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.keyboard-demo {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.info-panel {
  margin-bottom: 30px;
}

.info-panel h2 {
  color: #8b5cf6;
  margin-bottom: 15px;
  font-size: 1.6rem;
}

.info-panel p {
  color: #6b7280;
  margin-bottom: 15px;
  font-weight: 600;
}

.shortcuts {
  list-style: none;
  padding: 0;
}

.shortcuts li {
  padding: 8px 0;
  color: #4b5563;
  font-size: 14px;
}

kbd {
  display: inline-block;
  padding: 3px 8px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  margin-right: 4px;
  box-shadow: 0 2px 0 #d1d5db;
}

.menu-container {
  position: relative;
  margin: 30px 0;
}

.menu-button {
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.menu-button:focus {
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 8px;
  z-index: 100;
}

.dropdown-menu:focus {
  outline: 3px solid #fbbf24;
  outline-offset: 2px;
}

.menu-item {
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #374151;
}

.menu-item:hover,
.menu-item.selected {
  background: #ede9fe;
  color: #8b5cf6;
}

.action-result {
  margin-top: 20px;
  padding: 15px;
  background: #d1fae5;
  border-radius: 12px;
  color: #059669;
  font-weight: 600;
  text-align: center;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-color-scheme: dark) {
  .keyboard-demo {
    background: #1f2937;
  }

  .info-panel h2 {
    color: #c4b5fd;
  }

  .info-panel p {
    color: #9ca3af;
  }

  .shortcuts li {
    color: #d1d5db;
  }

  kbd {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
    box-shadow: 0 2px 0 #4b5563;
  }

  .dropdown-menu {
    background: #111827;
  }

  .menu-item {
    color: #e5e7eb;
  }

  .menu-item:hover,
  .menu-item.selected {
    background: #4c1d95;
    color: #c4b5fd;
  }

  .action-result {
    background: #064e3b;
    color: #6ee7b7;
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Semantic HTML First</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use proper HTML elements before adding ARIA
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Keyboard Support</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All functionality must work with keyboard only
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">ARIA Labels</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use aria-label, aria-describedby for context
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Test With Users</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use screen readers and test with real users
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Build for Everyone!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Accessibility is not optional - it's a fundamental part of good web development. Test your apps with screen readers and keyboard navigation!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

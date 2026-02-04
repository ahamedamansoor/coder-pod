'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Settings, Play, Fingerprint, Tags, Type, Link2,
  Image, FormInput, MousePointer, Accessibility,
  Database, Eye, CheckCircle, Info, AlertCircle
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlAttributes({
  onOpenWebPlaygroundAction,
  onOpenWebPlayground
}: {
  onOpenWebPlaygroundAction?: (html: string, css: string, js: string) => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}) {
  const openPlayground = (html: string, css: string, js: string) => {
    (onOpenWebPlaygroundAction || onOpenWebPlayground)?.(html, css, js);
  };

  // ==================== PLAYGROUND EXAMPLES ====================

  const globalAttributesDemo = {
    html: `<!-- Global Attributes Demo -->
<div id="main-container" class="container primary" title="Main content area">
  <h1 id="page-title" class="title">Understanding Attributes</h1>
  <p class="intro highlight" style="font-size: 1.2rem;">
    This paragraph uses multiple global attributes.
  </p>
  
  <!-- Custom Data Attributes -->
  <button 
    id="action-btn"
    class="btn primary"
    data-user-id="12345"
    data-action="submit"
    data-track="click-event"
    title="Click to submit">
    Submit Form
  </button>
  
  <!-- Lang and Dir -->
  <p lang="es" dir="ltr">Hola Mundo!</p>
  <p lang="ar" dir="rtl">مرحبا بالعالم</p>
</div>`,
    css: `#main-container { padding: 2rem; background: rgba(30, 41, 59, 0.6); border-radius: 8px; border: 1px solid #374151; }
#page-title { color: #60a5fa; margin-bottom: 1rem; }
.container { max-width: 800px; margin: 0 auto; }
.intro { font-style: italic; color: #e2e8f0; }
.highlight { background: rgba(251, 191, 36, 0.2); padding: 0.5rem; border-left: 4px solid #f59e0b; color: #fbbf24; }
.btn { padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
.primary { background: #3b82f6; color: white; }
.btn:hover { background: #2563eb; }
[title] { position: relative; }`,
    js: `const btn = document.getElementById('action-btn');
btn.addEventListener('click', function() {
  const userId = this.dataset.userId;
  const action = this.dataset.action;
  alert('User ID: ' + userId + '\\nAction: ' + action);
});`
  };

  const linkAttributesDemo = {
    html: `<!-- Link Attributes -->
<nav>
  <!-- Hidden anchor targets placed before usage -->
  <section id="home" hidden></section>
  <section id="about" hidden></section>
  <section id="contact" hidden></section>
  
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Site (New Tab)
  </a>
  
  <a href="#section1">Jump to Section 1</a>
  
  <a href="mailto:info@example.com">Email Us</a>
  
  <a href="tel:+1234567890">Call: (123) 456-7890</a>
  
  <!-- <a href="document.pdf" download="my-document.pdf">Download PDF</a> -->
</nav>

<section id="section1">
  <h2>Section 1 Content</h2>
  <p>You jumped here from the navigation link!</p>
</section>`,
    css: `nav { background: #1e3a8a; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border-radius: 8px; border: 1px solid #3730a3; }
a { color: white; text-decoration: none; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; display: inline-block; }
a:hover { background: rgba(255,255,255,0.2); }
section { margin-top: 2rem; padding: 2rem; background: rgba(31, 41, 55, 0.6); border-radius: 8px; border: 1px solid #374151; }`,
    js: ''
  };

  const imageAttributesDemo = {
    html: `<!-- Image Attributes -->
<div class="image-gallery">
  <!-- Basic Image -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop"
    alt="Basic image showing web development workspace"
    width="300"
    height="200"
  />
  
  <!-- Lazy Loading -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop"
    alt="Lazy loaded image showing code editor"
    loading="lazy"
    width="300"
    height="200"
  />
  
  <!-- Responsive with srcset -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    srcset="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop 400w, https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop 800w"
    sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
    alt="Responsive image showing modern workspace"
    width="800"
    height="600"
  />
</div>`,
    css: `.image-gallery { display: flex; flex-wrap: wrap; gap: 1rem; padding: 1rem; background: rgba(30, 41, 59, 0.6); border-radius: 8px; border: 1px solid #374151; }
img { border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); max-width: 100%; height: auto; }`,
    js: ''
  };

  const formAttributesDemo = {
    html: `<form id="demo-form">
  <!-- Text Input -->
  <label for="username">Username:</label>
  <input 
    type="text" 
    id="username" 
    name="username" 
    placeholder="Enter your username"
    required
    minlength="3"
    maxlength="20"
    autocomplete="username"
  />
  
  <!-- Email Input -->
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="you@example.com"
    required
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  />
  
  <!-- Number Input -->
  <label for="age">Age:</label>
  <input 
    type="number" 
    id="age" 
    name="age" 
    min="1" 
    max="120"
    step="1"
    value="25"
  />
  
  <!-- Select Dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country" required>
    <option value="">Select...</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
  
  <!-- Checkbox -->
  <label>
    <input type="checkbox" name="terms" required />
    I agree to the terms
  </label>
  
  <!-- Radio Buttons -->
  <fieldset>
    <legend>Subscription:</legend>
    <label><input type="radio" name="plan" value="free" checked /> Free</label>
    <label><input type="radio" name="plan" value="pro" /> Pro</label>
  </fieldset>
  
  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea 
    id="message" 
    name="message" 
    rows="4"
    placeholder="Your message here..."
    maxlength="500"
  ></textarea>
  
  <!-- Submit Button -->
  <button type="submit">Submit Form</button>
  <button type="reset">Reset</button>
</form>`,
    css: `form { max-width: 500px; margin: 0 auto; padding: 2rem; background: rgba(30, 41, 59, 0.6); border-radius: 8px; border: 1px solid #374151; }
label { display: block; margin-top: 1rem; font-weight: 600; color: #e2e8f0; }
input, select, textarea { width: 100%; padding: 0.5rem; margin-top: 0.25rem; border: 1px solid #4b5563; border-radius: 4px; font-size: 1rem; background: #1f2937; color: #f1f5f9; }
input:focus, select:focus, textarea:focus { outline: none; border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2); }
fieldset { border: 1px solid #4b5563; border-radius: 4px; padding: 1rem; margin-top: 1rem; background: rgba(31, 41, 55, 0.3); }
legend { font-weight: 600; padding: 0 0.5rem; color: #e2e8f0; }
button { margin-top: 1rem; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; margin-right: 0.5rem; }
button[type="submit"] { background: #3b82f6; color: white; }
button[type="reset"] { background: #6b7280; color: white; }
button:hover { opacity: 0.9; }`,
    js: `document.getElementById('demo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted! Check console for data.');
  console.log('Form Data:', new FormData(this));
});`
  };

  const ariaAttributesDemo = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced ARIA Accessibility Showcase</title>
</head>
<body>
  <div class="accessibility-showcase">
    <!-- Skip to Main Content Link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Accessible Navigation with Keyboard Support -->
    <header role="banner">
      <nav aria-label="Main navigation" role="navigation">
        <button 
          class="menu-toggle" 
          aria-expanded="false" 
          aria-controls="primary-menu"
          aria-label="Toggle navigation menu"
        >
          <span aria-hidden="true">☰</span>
          Menu
        </button>
        
        <ul id="primary-menu" class="nav-menu" hidden>
          <li><a href="#" aria-current="page">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main id="main-content" role="main">
      <!-- Accessible Search with Live Regions -->
      <section aria-labelledby="search-heading">
        <h2 id="search-heading">Smart Search</h2>
        <div class="search-container">
          <label for="search-input" class="visually-hidden">Search products</label>
          <input 
            type="search" 
            id="search-input"
            aria-label="Search products"
            aria-describedby="search-help search-results-count"
            placeholder="Search for products..."
            autocomplete="off"
          />
          <div id="search-help" class="help-text">
            Type to search products. Use arrow keys to navigate results.
          </div>
          
          <!-- Live Region for Search Results -->
          <div 
            id="search-results-count" 
            aria-live="polite" 
            aria-atomic="true"
            class="results-count"
          ></div>
          
          <!-- Search Results Listbox -->
          <ul 
            id="search-results" 
            role="listbox"
            aria-label="Search results"
            class="search-results"
            hidden
          ></ul>
        </div>
      </section>

      <!-- Accessible Data Table -->
      <section aria-labelledby="table-heading">
        <h2 id="table-heading">Product Comparison</h2>
        <div class="table-container">
          <table 
            role="table" 
            aria-label="Product features comparison"
            aria-rowcount="4"
          >
            <thead>
              <tr role="row">
                <th scope="col" aria-sort="none">Product</th>
                <th scope="col" aria-sort="none">Price</th>
                <th scope="col" aria-sort="none">Rating</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <tr role="row" aria-rowindex="2">
                <td role="gridcell">Premium Plan</td>
                <td role="gridcell">$29/month</td>
                <td role="gridcell">
                  <div role="img" aria-label="4.5 out of 5 stars">⭐⭐⭐⭐⭐</div>
                </td>
                <td role="gridcell">
                  <button aria-label="Select Premium Plan">Select</button>
                </td>
              </tr>
              <tr role="row" aria-rowindex="3">
                <td role="gridcell">Basic Plan</td>
                <td role="gridcell">$9/month</td>
                <td role="gridcell">
                  <div role="img" aria-label="3 out of 5 stars">⭐⭐⭐</div>
                </td>
                <td role="gridcell">
                  <button aria-label="Select Basic Plan">Select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Accessible Form with Validation -->
      <section aria-labelledby="form-heading">
        <h2 id="form-heading">Contact Form</h2>
        <form 
          id="contact-form" 
          novalidate
          aria-labelledby="form-heading"
        >
          <!-- Form Validation Status -->
          <div 
            id="form-status" 
            role="status" 
            aria-live="polite" 
            aria-atomic="true"
            class="form-status"
          ></div>
          
          <!-- Text Input with Error Messaging -->
          <div class="form-group">
            <label for="fullname">Full Name *</label>
            <input 
              type="text" 
              id="fullname" 
              name="fullname"
              required
              aria-required="true"
              aria-describedby="fullname-error fullname-help"
              aria-invalid="false"
            />
            <div id="fullname-help" class="help-text">
              Enter your first and last name
            </div>
            <div id="fullname-error" class="error-message" role="alert"></div>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              aria-required="true"
              aria-describedby="email-error email-help"
              aria-invalid="false"
            />
            <div id="email-help" class="help-text">
              We'll never share your email
            </div>
            <div id="email-error" class="error-message" role="alert"></div>
          </div>

          <!-- Accessible Dropdown -->
          <div class="form-group">
            <label for="topic">Topic</label>
            <select 
              id="topic" 
              name="topic"
              aria-describedby="topic-help"
            >
              <option value="">Select a topic</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
            </select>
            <div id="topic-help" class="help-text">
              Choose the most relevant topic
            </div>
          </div>

          <!-- Multi-Select with Checkboxes -->
          <fieldset class="checkbox-group">
            <legend>Preferred Contact Methods</legend>
            <div class="checkbox-options">
              <label>
                <input type="checkbox" name="contact[]" value="email" />
                <span class="checkmark"></span>
                Email
              </label>
              <label>
                <input type="checkbox" name="contact[]" value="phone" />
                <span class="checkmark"></span>
                Phone
              </label>
              <label>
                <input type="checkbox" name="contact[]" value="sms" />
                <span class="checkmark"></span>
                SMS
              </label>
            </div>
          </fieldset>

          <!-- Accessible Textarea -->
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows="4"
              aria-describedby="message-help char-count"
              maxlength="500"
            ></textarea>
            <div id="message-help" class="help-text">
              Tell us more about your inquiry
            </div>
            <div id="char-count" class="char-count" aria-live="polite">
              0 / 500 characters
            </div>
          </div>

          <!-- Form Actions -->
          <div class="form-actions">
            <button type="submit" class="btn-primary">
              Send Message
            </button>
            <button type="reset" class="btn-secondary">
              Clear Form
            </button>
          </div>
        </form>
      </section>

      <!-- Accessible Tabs -->
      <section aria-labelledby="tabs-heading">
        <h2 id="tabs-heading">Product Features</h2>
        <div class="tabs-container">
          <!-- Tab List -->
          <div 
            role="tablist" 
            aria-label="Product features"
            class="tab-list"
          >
            <button 
              role="tab" 
              aria-selected="true" 
              aria-controls="features-panel"
              id="features-tab"
              class="tab-button"
            >
              Features
            </button>
            <button 
              role="tab" 
              aria-selected="false" 
              aria-controls="pricing-panel"
              id="pricing-tab"
              class="tab-button"
            >
              Pricing
            </button>
            <button 
              role="tab" 
              aria-selected="false" 
              aria-controls="support-panel"
              id="support-tab"
              class="tab-button"
            >
              Support
            </button>
          </div>

          <!-- Tab Panels -->
          <div 
            role="tabpanel" 
            id="features-panel"
            aria-labelledby="features-tab"
            class="tab-panel"
          >
            <h3>Features</h3>
            <ul>
              <li>Advanced analytics dashboard</li>
              <li>Real-time collaboration tools</li>
              <li>Unlimited storage and bandwidth</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          <div 
            role="tabpanel" 
            id="pricing-panel"
            aria-labelledby="pricing-tab"
            class="tab-panel"
            hidden
          >
            <h3>Pricing Plans</h3>
            <div class="pricing-cards">
              <div class="price-card">
                <h4>Starter</h4>
                <p class="price">$9/month</p>
                <p>Perfect for individuals</p>
              </div>
              <div class="price-card">
                <h4>Professional</h4>
                <p class="price">$29/month</p>
                <p>Great for teams</p>
              </div>
            </div>
          </div>

          <div 
            role="tabpanel" 
            id="support-panel"
            aria-labelledby="support-tab"
            class="tab-panel"
            hidden
          >
            <h3>Support Options</h3>
            <div class="support-grid">
              <div class="support-item">
                <h4>Documentation</h4>
                <p>Comprehensive guides and tutorials</p>
              </div>
              <div class="support-item">
                <h4>Community Forum</h4>
                <p>Get help from other users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Accessible Progress Bar -->
      <section aria-labelledby="progress-heading">
        <h2 id="progress-heading">Upload Progress</h2>
        <div class="progress-demo">
          <button id="start-upload" class="btn-primary">
            Start File Upload
          </button>
          
          <div 
            role="progressbar" 
            aria-valuenow="0" 
            aria-valuemin="0" 
            aria-valuemax="100" 
            aria-labelledby="progress-heading"
            class="progress-bar"
          >
            <div class="progress-fill"></div>
          </div>
          
          <div id="upload-status" class="upload-status" aria-live="polite">
            Ready to upload
          </div>
        </div>
      </section>

      <!-- Accessible Modal Dialog -->
      <div 
        id="confirm-dialog" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        class="modal-dialog"
        hidden
      >
        <div class="modal-content">
          <h3 id="dialog-title">Confirm Action</h3>
          <p id="dialog-description">
            Are you sure you want to proceed with this action? This cannot be undone.
          </p>
          <div class="modal-actions">
            <button id="confirm-yes" class="btn-primary">
              Yes, proceed
            </button>
            <button id="confirm-no" class="btn-secondary" aria-label="Cancel action">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Screen Reader Only Announcements -->
    <div 
      id="announcements" 
      aria-live="assertive" 
      aria-atomic="true"
      class="visually-hidden"
    ></div>
  </div>
</body>
</html>`,
    css: `/* Accessibility Showcase Styles */
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f1f5f9;
  margin: 0;
  padding: 0;
}

.accessibility-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Header & Navigation */
header {
  background: rgba(30, 41, 59, 0.8);
  border-bottom: 2px solid #374151;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.menu-toggle {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: #2563eb;
}

.menu-toggle[aria-expanded="true"] {
  background: #10b981;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 1rem;
  display: flex;
  gap: 1rem;
}

.nav-menu a {
  color: #e2e8f0;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a:focus {
  background: rgba(59, 130, 246, 0.2);
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
}

.nav-menu a[aria-current="page"] {
  background: #3b82f6;
  color: white;
}

/* Sections */
section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  border: 1px solid #374151;
}

h2 {
  color: #60a5fa;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  border-bottom: 2px solid #374151;
  padding-bottom: 0.5rem;
}

/* Search Component */
.search-container {
  max-width: 600px;
  margin: 0 auto;
}

#search-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #4b5563;
  border-radius: 8px;
  background: #1f2937;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
}

#search-input:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}

.help-text {
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.results-count {
  font-size: 0.875rem;
  color: #60a5fa;
  margin-bottom: 0.5rem;
  min-height: 1.2em;
}

.search-results {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background: #1f2937;
  max-height: 200px;
  overflow-y: auto;
}

.search-results li {
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #374151;
}

.search-results li:hover,
.search-results li:focus {
  background: rgba(59, 130, 246, 0.2);
  outline: none;
}

.search-results li[aria-selected="true"] {
  background: #3b82f6;
  color: white;
}

/* Data Table */
.table-container {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #4b5563;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #1f2937;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #374151;
}

th {
  background: rgba(30, 41, 59, 0.8);
  font-weight: 600;
  color: #e2e8f0;
  cursor: pointer;
  user-select: none;
}

th:hover {
  background: rgba(59, 130, 246, 0.2);
}

th[aria-sort="ascending"]::after {
  content: " ↑";
  color: #60a5fa;
}

th[aria-sort="descending"]::after {
  content: " ↓";
  color: #60a5fa;
}

tr:hover {
  background: rgba(59, 130, 246, 0.1);
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #e2e8f0;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #4b5563;
  border-radius: 6px;
  background: #1f2937;
  color: #f1f5f9;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}

input[aria-invalid="true"], select[aria-invalid="true"], textarea[aria-invalid="true"] {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.error-message {
  color: #f87171;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  min-height: 1.2em;
}

.form-status {
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.form-status.success {
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
  border: 1px solid #16a34a;
}

.form-status.error {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
  border: 1px solid #dc2626;
}

/* Checkbox Group */
.checkbox-group {
  border: 2px solid #4b5563;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(31, 41, 55, 0.3);
}

.checkbox-group legend {
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
  padding: 0;
}

.checkbox-options label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-options input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.char-count {
  font-size: 0.875rem;
  color: #94a3b8;
  text-align: right;
  margin-top: 0.25rem;
}

/* Buttons */
.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 0.5rem;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

button:focus {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Tabs */
.tabs-container {
  border: 1px solid #4b5563;
  border-radius: 8px;
  overflow: hidden;
}

.tab-list {
  display: flex;
  background: rgba(30, 41, 59, 0.8);
  border-bottom: 1px solid #4b5563;
}

.tab-button {
  flex: 1;
  padding: 1rem;
  border: none;
  background: transparent;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.tab-button:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #e2e8f0;
}

.tab-button[aria-selected="true"] {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

.tab-panel {
  padding: 2rem;
  background: #1f2937;
  min-height: 200px;
}

.tab-panel h3 {
  color: #60a5fa;
  margin-top: 0;
}

/* Progress Bar */
.progress-demo {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 2rem;
  background: #374151;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem 0;
  border: 1px solid #4b5563;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 1rem;
}

.upload-status {
  font-size: 0.875rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}

/* Modal Dialog */
.modal-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #1e293b;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.modal-content h3 {
  color: #60a5fa;
  margin-top: 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: flex-end;
}

/* Utility Classes */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .accessibility-showcase {
    padding: 1rem;
  }
  
  section {
    padding: 1rem;
  }
  
  .nav-menu {
    flex-direction: column;
  }
  
  .tab-list {
    flex-direction: column;
  }
  
  .modal-content {
    width: 95%;
    padding: 1rem;
  }
}`,
    js: `// Advanced ARIA Accessibility JavaScript

// Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const primaryMenu = document.getElementById('primary-menu');

menuToggle.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  primaryMenu.hidden = isExpanded;
  
  // Announce to screen readers
  announceToScreenReader(isExpanded ? 'Menu collapsed' : 'Menu expanded');
});

// Search Functionality with Keyboard Navigation
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const resultsCount = document.getElementById('search-results-count');
let selectedIndex = -1;

// Sample search data
const products = [
  'Premium Analytics Dashboard',
  'Real-time Collaboration Tools',
  'Advanced Security Features',
  'Mobile App Integration',
  'API Access and Documentation',
  'Custom Reporting Tools',
  'Team Management System',
  'Cloud Storage Solution'
];

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  
  if (query.length < 2) {
    searchResults.hidden = true;
    resultsCount.textContent = '';
    return;
  }
  
  const matches = products.filter(product => 
    product.toLowerCase().includes(query)
  );
  
  displaySearchResults(matches);
  selectedIndex = -1;
});

function displaySearchResults(matches) {
  searchResults.innerHTML = '';
  
  if (matches.length === 0) {
    searchResults.innerHTML = '<li>No results found</li>';
    resultsCount.textContent = 'No results found';
  } else {
    matches.forEach((product, index) => {
      const li = document.createElement('li');
      li.textContent = product;
      li.setAttribute('role', 'option');
      li.setAttribute('id', 'result-' + index);
      li.addEventListener('click', () => selectResult(product));
      li.addEventListener('keydown', (e) => handleResultKeydown(e, index));
      searchResults.appendChild(li);
    });
    resultsCount.textContent = \`\${matches.length} result\${matches.length !== 1 ? 's' : ''} found\`;
  }
  
  searchResults.hidden = false;
}

searchInput.addEventListener('keydown', function(e) {
  if (searchResults.hidden) return;
  
  const results = searchResults.querySelectorAll('li[role="option"]');
  
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
      updateSelectedResult(results);
      break;
    case 'ArrowUp':
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelectedResult(results);
      break;
    case 'Enter':
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        selectResult(results[selectedIndex].textContent);
      }
      break;
    case 'Escape':
      searchResults.hidden = true;
      searchInput.focus();
      break;
  }
});

function updateSelectedResult(results) {
  results.forEach((result, index) => {
    result.setAttribute('aria-selected', index === selectedIndex);
    if (index === selectedIndex) {
      result.scrollIntoView({ block: 'nearest' });
    }
  });
}

function handleResultKeydown(e, index) {
  if (e.key === 'Enter') {
    e.preventDefault();
    selectResult(e.target.textContent);
  }
}

function selectResult(product) {
  searchInput.value = product;
  searchResults.hidden = true;
  announceToScreenReader(\`Selected: \${product}\`);
}

// Table Sorting
const table = document.querySelector('table');
const headers = table.querySelectorAll('th[aria-sort]');

headers.forEach(header => {
  header.addEventListener('click', function() {
    const currentSort = this.getAttribute('aria-sort');
    const newSort = currentSort === 'none' ? 'ascending' : 
                   currentSort === 'ascending' ? 'descending' : 'none';
    
    // Reset all headers
    headers.forEach(h => h.setAttribute('aria-sort', 'none'));
    
    // Set new sort
    this.setAttribute('aria-sort', newSort);
    
    announceToScreenReader(\`Column \${this.textContent} sorted \${newSort}\`);
  });
});

// Form Validation and Accessibility
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Real-time validation
const requiredFields = contactForm.querySelectorAll('[required]');
requiredFields.forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') {
      validateField(field);
    }
  });
});

function validateField(field) {
  const errorElement = document.getElementById(field.id + '-error');
  let isValid = true;
  let errorMessage = '';
  
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    errorMessage = 'This field is required';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  field.setAttribute('aria-invalid', !isValid);
  errorElement.textContent = errorMessage;
  
  return isValid;
}

// Character counter for textarea
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('char-count');

messageTextarea.addEventListener('input', function() {
  const length = this.value.length;
  const maxLength = this.getAttribute('maxlength');
  charCount.textContent = \`\${length} / \${maxLength} characters\`;
  
  if (length > maxLength * 0.9) {
    charCount.style.color = '#fbbf24';
  } else {
    charCount.style.color = '#94a3b8';
  }
});

// Form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate all fields
  let isFormValid = true;
  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });
  
  if (isFormValid) {
    formStatus.textContent = 'Form submitted successfully! We'll get back to you soon.';
    formStatus.className = 'form-status success';
    announceToScreenReader('Form submitted successfully');
    
    // Reset form after delay
    setTimeout(() => {
      contactForm.reset();
      formStatus.textContent = '';
      charCount.textContent = '0 / 500 characters';
      requiredFields.forEach(field => {
        field.setAttribute('aria-invalid', 'false');
        document.getElementById(field.id + '-error').textContent = '';
      });
    }, 3000);
  } else {
    formStatus.textContent = 'Please fix the errors below and try again.';
    formStatus.className = 'form-status error';
    announceToScreenReader('Form contains errors. Please review and fix.');
  }
});

// Accessible Tabs
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetPanel = document.getElementById(this.getAttribute('aria-controls'));
    
    // Update tab states
    tabButtons.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    this.setAttribute('aria-selected', 'true');
    
    // Update panel visibility
    tabPanels.forEach(panel => panel.hidden = true);
    targetPanel.hidden = false;
    
    announceToScreenReader(\`Switched to \${this.textContent} tab\`);
  });
  
  // Keyboard navigation for tabs
  button.addEventListener('keydown', function(e) {
    const currentIndex = Array.from(tabButtons).indexOf(this);
    let newIndex;
    
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabButtons.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = currentIndex < tabButtons.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabButtons.length - 1;
        break;
      default:
        return;
    }
    
    tabButtons[newIndex].focus();
    tabButtons[newIndex].click();
  });
});

// Progress Bar Demo
const startUploadBtn = document.getElementById('start-upload');
const progressBar = document.querySelector('[role="progressbar"]');
const progressFill = document.querySelector('.progress-fill');
const uploadStatus = document.getElementById('upload-status');

startUploadBtn.addEventListener('click', function() {
  this.disabled = true;
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      uploadStatus.textContent = 'Upload completed successfully!';
      this.disabled = false;
      announceToScreenReader('Upload completed');
    } else {
      uploadStatus.textContent = \`Uploading... \${Math.round(progress)}%\`;
    }
    
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
    progressFill.style.width = \`\${progress}%\`;
  }, 300);
});

// Modal Dialog
const confirmDialog = document.getElementById('confirm-dialog');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');

// Trigger modal (example: after form submission)
setTimeout(() => {
  // Uncomment to show modal
  // confirmDialog.hidden = false;
  // document.body.style.overflow = 'hidden';
}, 5000);

confirmYes.addEventListener('click', function() {
  announceToScreenReader('Action confirmed');
  confirmDialog.hidden = true;
  document.body.style.overflow = '';
});

confirmNo.addEventListener('click', function() {
  announceToScreenReader('Action cancelled');
  confirmDialog.hidden = true;
  document.body.style.overflow = '';
});

// Escape key closes modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !confirmDialog.hidden) {
    confirmNo.click();
  }
});

// Utility function for screen reader announcements
function announceToScreenReader(message) {
  const announcements = document.getElementById('announcements');
  announcements.textContent = message;
  
  // Clear after announcement
  setTimeout(() => {
    announcements.textContent = '';
  }, 1000);
}

// Initialize focus management
document.addEventListener('DOMContentLoaded', function() {
  // Add focus indicators for better keyboard navigation
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
});`
  };

  const eventAttributesDemo = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced Event Attributes Showcase</title>
</head>
<body>
  <div class="event-showcase">
    <!-- Header -->
    <header class="showcase-header">
      <h1>🎯 Interactive Event Attributes</h1>
      <p class="subtitle">Explore HTML event handling with live demonstrations</p>
    </header>

    <!-- Click Events Section -->
    <section class="demo-section">
      <h2>🖱️ Click & Mouse Events</h2>
      
      <div class="event-grid">
        <div class="event-card">
          <h3>Click Counter</h3>
          <button 
            id="click-counter"
            onclick="updateCounter()"
            class="demo-btn primary"
          >
            Click Me! <span id="count">0</span>
          </button>
          <p class="event-info">Times clicked: <span id="total-clicks">0</span></p>
        </div>

        <div class="event-card">
          <h3>Double Click Magic</h3>
          <div 
            ondblclick="handleDoubleClick(this)"
            class="double-click-area"
          >
            <p>Double-click me!</p>
            <span class="magic-text">✨</span>
          </div>
        </div>

        <div class="event-card">
          <h3>Right Click Menu</h3>
          <div 
            oncontextmenu="showContextMenu(event); return false;"
            class="context-area"
          >
            <p>Right-click here</p>
            <div id="context-menu" class="context-menu" hidden>
              <div onclick="alert('Option 1')">Option 1</div>
              <div onclick="alert('Option 2')">Option 2</div>
              <div onclick="alert('Option 3')">Option 3</div>
            </div>
          </div>
        </div>

        <div class="event-card">
          <h3>Mouse Coordinates</h3>
          <div 
            onmousemove="trackMouse(event)"
            onmouseleave="clearMouseCoords()"
            class="mouse-tracker"
          >
            <p>Move your mouse here</p>
            <div class="coords">
              X: <span id="mouse-x">0</span> | 
              Y: <span id="mouse-y">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keyboard Events Section -->
    <section class="demo-section">
      <h2>⌨️ Keyboard Events</h2>
      
      <div class="event-grid">
        <div class="event-card">
          <h3>Key Logger</h3>
          <input 
            type="text" 
            id="key-logger"
            onkeydown="logKey('down', event)"
            onkeyup="logKey('up', event)"
            onkeypress="logKey('press', event)"
            placeholder="Type anything..."
            class="demo-input"
          />
          <div class="key-display">
            Last key: <span id="last-key">None</span>
          </div>
        </div>

        <div class="event-card">
          <h3>Shortcut Detector</h3>
          <div 
            tabindex="0"
            onkeydown="checkShortcut(event)"
            class="shortcut-area"
          >
            <p>Try shortcuts:</p>
            <ul class="shortcut-list">
              <li><kbd>Ctrl</kbd> + <kbd>S</kbd> (Save)</li>
              <li><kbd>Ctrl</kbd> + <kbd>Z</kbd> (Undo)</li>
              <li><kbd>Ctrl</kbd> + <kbd>C</kbd> (Copy)</li>
            </ul>
            <div id="shortcut-result" class="shortcut-result"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Events Section -->
    <section class="demo-section">
      <h2>📝 Form Events</h2>
      
      <div class="event-grid">
        <div class="event-card">
          <h3>Live Validation</h3>
          <form id="validation-form" onsubmit="return false;">
            <input 
              type="email" 
              id="email-input"
              oninput="validateEmail(this)"
              placeholder="Enter email..."
              class="demo-input"
            />
            <div id="email-status" class="validation-status"></div>
            
            <input 
              type="password" 
              id="password-input"
              oninput="validatePassword(this)"
              placeholder="Enter password..."
              class="demo-input"
            />
            <div id="password-status" class="validation-status"></div>
            
            <button type="submit" class="demo-btn success">Submit</button>
          </form>
        </div>

        <div class="event-card">
          <h3>Focus Tracker</h3>
          <div class="focus-demo">
            <input 
              type="text" 
              onfocus="showFocus('input1')"
              onblur="hideFocus('input1')"
              placeholder="Input 1"
              class="demo-input"
            />
            <input 
              type="text" 
              onfocus="showFocus('input2')"
              onblur="hideFocus('input2')"
              placeholder="Input 2"
              class="demo-input"
            />
            <input 
              type="text" 
              onfocus="showFocus('input3')"
              onblur="hideFocus('input3')"
              placeholder="Input 3"
              class="demo-input"
            />
            <div id="focus-indicator" class="focus-indicator">
              Currently focused: <span id="focused-element">None</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Window & Document Events -->
    <section class="demo-section">
      <h2>🖼️ Window & Document Events</h2>
      
      <div class="event-grid">
        <div class="event-card">
          <h3>Window Size Tracker</h3>
          <div class="size-display">
            <div>Width: <span id="window-width">0</span>px</div>
            <div>Height: <span id="window-height">0</span>px</div>
            <div>Orientation: <span id="orientation">Unknown</span></div>
          </div>
        </div>

        <div class="event-card">
          <h3>Scroll Progress</h3>
          <div class="scroll-container">
            <div class="scroll-content">
              <p>Scroll down to see progress!</p>
              <div style="height: 200px;">More content...</div>
              <p>Keep scrolling...</p>
              <div style="height: 200px;">Even more content...</div>
              <p>Almost there...</p>
            </div>
            <div class="scroll-progress">
              <div id="progress-bar" class="progress-fill"></div>
              <span id="scroll-percent">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drag & Drop Events -->
    <section class="demo-section">
      <h2>🎯 Drag & Drop Events</h2>
      
      <div class="event-grid">
        <div class="event-card">
          <h3>File Drop Zone</h3>
          <div 
            id="drop-zone"
            ondrop="handleDrop(event)"
            ondragover="handleDragOver(event)"
            ondragleave="handleDragLeave(event)"
            class="drop-zone"
          >
            <p>📁 Drag files here</p>
            <div id="file-list" class="file-list"></div>
          </div>
        </div>

        <div class="event-card">
          <h3>Drag Items Around</h3>
          <div class="drag-container">
            <div 
              draggable="true"
              ondragstart="handleDragStart(event)"
              ondragend="handleDragEnd(event)"
              class="draggable-item"
              id="item1"
            >
              📦 Item 1
            </div>
            <div 
              draggable="true"
              ondragstart="handleDragStart(event)"
              ondragend="handleDragEnd(event)"
              class="draggable-item"
              id="item2"
            >
              📦 Item 2
            </div>
            <div 
              ondrop="handleItemDrop(event)"
              ondragover="handleDragOver(event)"
              class="drop-target"
            >
              Drop here
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Log -->
    <section class="demo-section">
      <h2>📊 Event Log</h2>
      <div class="log-container">
        <button onclick="clearLog()" class="demo-btn secondary">Clear Log</button>
        <div id="event-log" class="event-log">
          <div class="log-entry">Event log will appear here...</div>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`,
    css: `/* Advanced Event Attributes Showcase */
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f1f5f9;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.event-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.showcase-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.8);
  border-radius: 16px;
  border: 1px solid #374151;
  backdrop-filter: blur(10px);
}

.showcase-header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin: 0;
}

/* Sections */
.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 16px;
  border: 1px solid #374151;
  backdrop-filter: blur(10px);
}

.demo-section h2 {
  color: #60a5fa;
  margin: 0 0 1.5rem 0;
  font-size: 1.75rem;
  border-bottom: 2px solid #374151;
  padding-bottom: 0.5rem;
}

/* Event Grid */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.event-card {
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid #4b5563;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: #60a5fa;
}

.event-card h3 {
  color: #e2e8f0;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

/* Buttons */
.demo-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem 0.5rem 0.5rem 0;
}

.demo-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}

.demo-btn.primary:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.demo-btn.success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.demo-btn.success:hover {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.demo-btn.secondary {
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
}

.demo-btn.secondary:hover {
  background: linear-gradient(135deg, #4b5563, #374151);
  transform: translateY(-1px);
}

/* Input Fields */
.demo-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #4b5563;
  border-radius: 8px;
  background: #1f2937;
  color: #f1f5f9;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 0.5rem 0;
}

.demo-input:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
  background: rgba(31, 41, 55, 0.9);
}

.demo-input::placeholder {
  color: #6b7280;
}

/* Click Events */
#count {
  background: rgba(251, 191, 36, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  color: #fbbf24;
}

.event-info {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
}

.double-click-area {
  padding: 2rem;
  border: 2px dashed #4b5563;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.double-click-area:hover {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.double-click-area.activated {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
  border-color: #a855f7;
  animation: pulse 0.6s ease;
}

.magic-text {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.double-click-area.activated .magic-text {
  opacity: 1;
  animation: sparkle 1s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes sparkle {
  0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); }
  50% { transform: translate(-50%, -50%) scale(1.5) rotate(180deg); }
  100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
}

/* Context Menu */
.context-area {
  padding: 2rem;
  border: 2px solid #4b5563;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.context-area:hover {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.context-menu {
  position: absolute;
  background: #1e293b;
  border: 1px solid #4b5563;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  min-width: 150px;
}

.context-menu div {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.context-menu div:hover {
  background: #374151;
}

/* Mouse Tracker */
.mouse-tracker {
  padding: 2rem;
  border: 2px solid #4b5563;
  border-radius: 8px;
  text-align: center;
  cursor: crosshair;
  background: rgba(31, 41, 55, 0.5);
}

.mouse-tracker:hover {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.coords {
  margin-top: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #60a5fa;
  font-weight: bold;
}

/* Keyboard Events */
.key-display {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(96, 165, 250, 0.2);
  border-radius: 6px;
  border: 1px solid #60a5fa;
  color: #93c5fd;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

#last-key {
  color: #fbbf24;
  font-weight: bold;
}

/* Shortcuts */
.shortcut-area {
  padding: 1.5rem;
  border: 2px solid #4b5563;
  border-radius: 8px;
  background: rgba(31, 41, 55, 0.5);
  outline: none;
}

.shortcut-area:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}

.shortcut-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.shortcut-list li {
  margin: 0.5rem 0;
  color: #94a3b8;
}

kbd {
  background: #374151;
  color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #4b5563;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.875rem;
}

.shortcut-result {
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 6px;
  border: 1px solid #10b981;
  color: #86efac;
  font-weight: 500;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Form Validation */
.validation-status {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  min-height: 1.5rem;
  display: flex;
  align-items: center;
}

.validation-status.valid {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #10b981;
  color: #86efac;
}

.validation-status.invalid {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid #ef4444;
  color: #f87171;
}

/* Focus Tracker */
.focus-demo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.focus-indicator {
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(96, 165, 250, 0.2);
  border-radius: 6px;
  border: 1px solid #60a5fa;
  color: #93c5fd;
  text-align: center;
}

#focused-element {
  color: #fbbf24;
  font-weight: bold;
}

/* Window Size */
.size-display {
  background: rgba(31, 41, 55, 0.8);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #4b5563;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.size-display div {
  margin: 0.5rem 0;
  color: #e2e8f0;
}

.size-display span {
  color: #60a5fa;
  font-weight: bold;
}

/* Scroll Progress */
.scroll-container {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background: rgba(31, 41, 55, 0.5);
  position: relative;
}

.scroll-content {
  padding: 1rem;
}

.scroll-progress {
  position: sticky;
  bottom: 0;
  background: rgba(30, 41, 59, 0.9);
  padding: 1rem;
  border-top: 1px solid #4b5563;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-fill {
  height: 8px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 4px;
  transition: width 0.3s ease;
  min-width: 0;
}

#scroll-percent {
  color: #60a5fa;
  font-weight: bold;
  min-width: 40px;
}

/* Drag & Drop */
.drop-zone {
  border: 2px dashed #4b5563;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgba(31, 41, 55, 0.3);
}

.drop-zone:hover {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.drop-zone.drag-over {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.2);
  transform: scale(1.02);
}

.file-list {
  margin-top: 1rem;
  text-align: left;
}

.file-item {
  background: rgba(31, 41, 55, 0.8);
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #e2e8f0;
}

.drag-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.draggable-item {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  transition: all 0.3s ease;
}

.draggable-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.draggable-item.dragging {
  opacity: 0.5;
  cursor: grabbing;
}

.drop-target {
  border: 2px dashed #4b5563;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  min-width: 150px;
  transition: all 0.3s ease;
}

.drop-target.drag-over {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.2);
}

/* Event Log */
.log-container {
  background: rgba(31, 41, 55, 0.8);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #4b5563;
}

.event-log {
  max-height: 300px;
  overflow-y: auto;
  background: #1f2937;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.875rem;
}

.log-entry {
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-left: 3px solid #374151;
  background: rgba(30, 41, 59, 0.5);
  color: #94a3b8;
}

.log-entry.click {
  border-left-color: #3b82f6;
  color: #93c5fd;
}

.log-entry.keyboard {
  border-left-color: #10b981;
  color: #86efac;
}

.log-entry.form {
  border-left-color: #f59e0b;
  color: #fbbf24;
}

.log-entry.window {
  border-left-color: #a855f7;
  color: #c4b5fd;
}

.log-entry.drag {
  border-left-color: #ef4444;
  color: #f87171;
}

/* Responsive Design */
@media (max-width: 768px) {
  .event-showcase {
    padding: 1rem;
  }
  
  .event-grid {
    grid-template-columns: 1fr;
  }
  
  .showcase-header h1 {
    font-size: 2rem;
  }
  
  .drag-container {
    flex-direction: column;
  }
}`,
    js: `// Advanced Event Attributes JavaScript

// Global variables
let clickCount = 0;
let totalClicks = 0;
let draggedElement = null;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Window resize event
  window.addEventListener('resize', updateWindowSize);
  updateWindowSize();
  
  // Scroll event
  const scrollContainer = document.querySelector('.scroll-container');
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', updateScrollProgress);
  }
  
  // Log all events
  logEvent('Page loaded', 'window');
});

// Click Events
function updateCounter() {
  clickCount++;
  totalClicks++;
  document.getElementById('count').textContent = clickCount;
  document.getElementById('total-clicks').textContent = totalClicks;
  logEvent(\`Button clicked (count: \${clickCount})\`, 'click');
}

function handleDoubleClick(element) {
  element.classList.add('activated');
  setTimeout(() => {
    element.classList.remove('activated');
  }, 1000);
  logEvent('Double click detected', 'click');
}

function showContextMenu(event) {
  event.preventDefault();
  const menu = document.getElementById('context-menu');
  menu.style.left = event.pageX + 'px';
  menu.style.top = event.pageY + 'px';
  menu.hidden = false;
  logEvent('Context menu opened', 'click');
  
  // Hide menu when clicking elsewhere
  document.addEventListener('click', function hideMenu() {
    menu.hidden = true;
    document.removeEventListener('click', hideMenu);
  });
}

// Mouse Events
function trackMouse(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);
  document.getElementById('mouse-x').textContent = x;
  document.getElementById('mouse-y').textContent = y;
}

function clearMouseCoords() {
  document.getElementById('mouse-x').textContent = '0';
  document.getElementById('mouse-y').textContent = '0';
}

// Keyboard Events
function logKey(type, event) {
  const keyInfo = \`\${type}: \${event.key} (code: \${event.code})\`;
  document.getElementById('last-key').textContent = keyInfo;
  logEvent(keyInfo, 'keyboard');
}

function checkShortcut(event) {
  const key = event.key.toLowerCase();
  const ctrlKey = event.ctrlKey || event.metaKey;
  
  if (ctrlKey) {
    let shortcut = '';
    switch(key) {
      case 's':
        shortcut = 'Save (Ctrl+S)';
        break;
      case 'z':
        shortcut = 'Undo (Ctrl+Z)';
        break;
      case 'c':
        shortcut = 'Copy (Ctrl+C)';
        break;
      case 'v':
        shortcut = 'Paste (Ctrl+V)';
        break;
    }
    
    if (shortcut) {
      event.preventDefault();
      const result = document.getElementById('shortcut-result');
      result.textContent = \`✓ \${shortcut} detected!\`;
      logEvent(\`Shortcut: \${shortcut}\`, 'keyboard');
      
      setTimeout(() => {
        result.textContent = '';
      }, 2000);
    }
  }
}

// Form Events
function validateEmail(input) {
  const email = input.value;
  const status = document.getElementById('email-status');
  
  if (email.length === 0) {
    status.textContent = '';
    status.className = 'validation-status';
  } else if (email.includes('@') && email.includes('.')) {
    status.textContent = '✓ Valid email address';
    status.className = 'validation-status valid';
    logEvent('Email validation: valid', 'form');
  } else {
    status.textContent = '✗ Invalid email format';
    status.className = 'validation-status invalid';
    logEvent('Email validation: invalid', 'form');
  }
}

function validatePassword(input) {
  const password = input.value;
  const status = document.getElementById('password-status');
  
  if (password.length === 0) {
    status.textContent = '';
    status.className = 'validation-status';
  } else if (password.length >= 8) {
    status.textContent = '✓ Strong password';
    status.className = 'validation-status valid';
    logEvent('Password validation: strong', 'form');
  } else {
    status.textContent = '✗ Password too short (min 8 characters)';
    status.className = 'validation-status invalid';
    logEvent('Password validation: too short', 'form');
  }
}

function showFocus(inputId) {
  document.getElementById('focused-element').textContent = inputId;
  logEvent(\`Focus: \${inputId}\`, 'form');
}

function hideFocus(inputId) {
  document.getElementById('focused-element').textContent = 'None';
  logEvent(\`Blur: \${inputId}\`, 'form');
}

// Window Events
function updateWindowSize() {
  document.getElementById('window-width').textContent = window.innerWidth;
  document.getElementById('window-height').textContent = window.innerHeight;
  
  const orientation = window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait';
  document.getElementById('orientation').textContent = orientation;
  
  logEvent(\`Window resized: \${window.innerWidth}x\${window.innerHeight}\`, 'window');
}

function updateScrollProgress() {
  const container = document.querySelector('.scroll-container');
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight - container.clientHeight;
  const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
  
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
  document.getElementById('scroll-percent').textContent = scrollPercent + '%';
  
  if (scrollPercent === 100) {
    logEvent('Scroll: 100% completed', 'window');
  }
}

// Drag & Drop Events
function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add('drag-over');
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  
  const files = event.dataTransfer.files;
  const fileList = document.getElementById('file-list');
  
  if (files.length > 0) {
    fileList.innerHTML = '';
    for (let file of files) {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.textContent = \`📄 \${file.name} (\${formatFileSize(file.size)})\`;
      fileList.appendChild(file);
    }
    logEvent(\`\${files.length} file(s) dropped\`, 'drag');
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Drag Items
function handleDragStart(event) {
  draggedElement = event.target;
  event.target.classList.add('dragging');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', event.target.innerHTML);
  logEvent(\`Started dragging: \${event.target.id}\`, 'drag');
}

function handleDragEnd(event) {
  event.target.classList.remove('dragging');
  logEvent(\`Stopped dragging: \${event.target.id}\`, 'drag');
}

function handleItemDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  
  if (draggedElement) {
    event.currentTarget.appendChild(draggedElement);
    logEvent(\`Dropped \${draggedElement.id} in target\`, 'drag');
    draggedElement = null;
  }
}

// Event Logging
function logEvent(message, category = 'info') {
  const log = document.getElementById('event-log');
  const timestamp = new Date().toLocaleTimeString();
  const entry = document.createElement('div');
  entry.className = \`log-entry \${category}\`;
  entry.textContent = \`[\${timestamp}] \${message}\`;
  
  // Add to top of log
  log.insertBefore(entry, log.firstChild);
  
  // Keep only last 50 entries
  while (log.children.length > 50) {
    log.removeChild(log.lastChild);
  }
}

function clearLog() {
  const log = document.getElementById('event-log');
  log.innerHTML = '<div class="log-entry">Event log cleared...</div>';
}`,
  js: ''
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="HTML Basics"
        title="HTML Attributes"
        description="Customizing your HTML elements with extra information and features"
        colorTheme="blue"
      />

      {/* ==================== ATTRIBUTE SYNTAX ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-blue-600" />
            Attribute Syntax
          </CardTitle>
          <CardDescription className="text-base">
            Understanding how to write and use HTML attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visual Syntax Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
            <div className="text-center mb-4">
              <h4 className="font-bold text-lg mb-3">Complete Attribute Structure</h4>
              <div className="bg-muted p-6 rounded-lg inline-block">
                <code className="text-lg font-mono">
                  <span className="text-blue-600 dark:text-blue-400">&lt;element</span>
                  {' '}
                  <span className="text-orange-600 dark:text-orange-400">attribute</span>
                  <span className="text-foreground">=</span>
                  <span className="text-green-600 dark:text-green-400">"value"</span>
                  <span className="text-blue-600 dark:text-blue-400">&gt;</span>
                  <span className="text-foreground">content</span>
                  <span className="text-red-600 dark:text-red-400">&lt;/element&gt;</span>
                </code>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg border-2 border-orange-300 dark:border-orange-700 text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">attribute</div>
                <p className="text-sm font-semibold">Name</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900/30 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-center">
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">=</div>
                <p className="text-sm font-semibold">Equals Sign</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-300 dark:border-green-700 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">"value"</div>
                <p className="text-sm font-semibold">Value in Quotes</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-300 dark:border-purple-700 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Multiple</div>
                <p className="text-sm font-semibold">Separate with Space</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Correct Usage
              </h4>
              <div className="space-y-2 text-sm">
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;a href="page.html"&gt;Link&lt;/a&gt;
                </code>
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;img src="photo.jpg" alt="Photo"&gt;
                </code>
                <code className="block bg-muted p-2 rounded font-mono">
                  &lt;div class="main container"&gt;
                </code>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Common Mistakes
              </h4>
              <div className="space-y-2 text-sm">
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;a href=page.html&gt; {/* Missing quotes */}
                </code>
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;img src = "photo.jpg"&gt; {/* Spaces around = */}
                </code>
                <code className="block bg-muted p-2 rounded font-mono text-red-600">
                  &lt;div CLASS="main"&gt; {/* Uppercase */}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== ATTRIBUTES IN ACTION ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3"><Tags className="w-6 h-6 text-blue-600" /> HTML Attributes in Action</CardTitle>
          <CardDescription className="text-base">See how different attributes enhance HTML elements with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Common Attributes Example"
            description="Practical examples of essential HTML attributes working together"
            html={`<div id="main-content" class="container">
  <h2 class="title">HTML Attributes Demo</h2>
  
  <!-- Link with multiple attributes -->
  <a 
    href="https://developer.mozilla.org" 
    target="_blank" 
    rel="noopener noreferrer"
    title="Visit MDN Web Docs">
    MDN Web Docs
  </a>
  
  <!-- Image with accessibility -->
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
    alt="Professional web development workspace showing HTML attributes in practice"
    width="400"
    height="200"
    loading="lazy" />
  
  <!-- Form with validation -->
  <form class="contact-form">
    <input 
      type="email" 
      name="email"
      placeholder="Enter your email"
      required
      aria-label="Email address" />
    
    <button type="submit" class="btn-primary">
      Subscribe
    </button>
  </form>
  
  <!-- Data attributes -->
  <div 
    class="product-card"
    data-product-id="12345"
    data-category="tech"
    data-price="99.99">
    <h3>Product with Data Attributes</h3>
    <p>Check the HTML to see custom data-* attributes!</p>
  </div>
</div>`}
            css={`body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

#main-content {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  transition: background-color 0.3s;
}

html.dark .container {
  background: #1e293b;
}

.title {
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

html.dark .title {
  color: #60a5fa;
}

a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin: 1rem 0;
  transition: color 0.3s;
}

html.dark a {
  color: #93c5fd;
}

a:hover {
  text-decoration: underline;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.contact-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  transition: background-color 0.3s;
}

html.dark .contact-form {
  background: #334155;
}

input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s, background-color 0.3s;
}

html.dark input[type="email"] {
  background: #1e293b;
  border-color: #475569;
  color: #e2e8f0;
}

input[type="email"]:focus {
  outline: none;
  border-color: #3b82f6;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .btn-primary {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-primary:hover {
  background: #93c5fd;
}

.product-card {
  background: #e0f2fe;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0284c7;
  margin-top: 1.5rem;
  transition: background-color 0.3s, border-color 0.3s;
}

html.dark .product-card {
  background: #1e3a5f;
  border-left-color: #38bdf8;
}

.product-card h3 {
  color: #0369a1;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .product-card h3 {
  color: #7dd3fc;
}

.product-card p {
  color: #64748b;
  font-size: 0.875rem;
  transition: color 0.3s;
}

html.dark .product-card p {
  color: #cbd5e1;
}`}
            colorTheme="blue"
            icon={Tags}
            previewHeight="1000px"
          />
        </CardContent>
      </Card>

      {/* ==================== GLOBAL ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Tags className="w-6 h-6 text-purple-600" />
            Global Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Attributes that work on any HTML element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* ID */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3 mb-3">
                <Fingerprint className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">id</h4>
                  <p className="text-sm text-muted-foreground">Unique identifier for an element</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• CSS styling: <code className="bg-background px-1 rounded">#main</code></li>
                  <li>• JavaScript selection</li>
                  <li>• Link anchors: <code className="bg-background px-1 rounded">#section1</code></li>
                  <li>• Form label association</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;div id="header"&gt;...&lt;/div&gt;
                </code>
              </div>
            </div>

            {/* Class */}
            <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3 mb-3">
                <Tags className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">class</h4>
                  <p className="text-sm text-muted-foreground">One or more class names (space-separated)</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• CSS styling: <code className="bg-background px-1 rounded">.btn</code></li>
                  <li>• JavaScript selection</li>
                  <li>• Multiple classes allowed</li>
                  <li>• Reusable across elements</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p class="text intro highlight"&gt;
                </code>
              </div>
            </div>

            {/* Style */}
            <div className="bg-purple-50 dark:bg-purple-950/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3 mb-3">
                <Type className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">style</h4>
                  <p className="text-sm text-muted-foreground">Inline CSS styles</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Quick styling</li>
                  <li>• Dynamic styles</li>
                  <li>• Highest CSS specificity</li>
                  <li>• Avoid for maintainability</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p style="color: blue; font-size: 16px;"&gt;
                </code>
              </div>
            </div>

            {/* Title */}
            <div className="bg-orange-50 dark:bg-orange-950/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-3 mb-3">
                <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">title</h4>
                  <p className="text-sm text-muted-foreground">Tooltip text on hover</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Additional information</li>
                  <li>• Abbreviation explanations</li>
                  <li>• Icon descriptions</li>
                  <li>• Link previews</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;abbr title="World Wide Web"&gt;WWW&lt;/abbr&gt;
                </code>
              </div>
            </div>

            {/* Data Attributes */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-3 mb-3">
                <Database className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">data-*</h4>
                  <p className="text-sm text-muted-foreground">Custom data attributes</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Store custom data</li>
                  <li>• JavaScript access via dataset</li>
                  <li>• Any name after data-</li>
                  <li>• Configuration values</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;div data-user-id="123" data-role="admin"&gt;
                </code>
              </div>
            </div>

            {/* Lang & Dir */}
            <div className="bg-pink-50 dark:bg-pink-950/20 p-5 rounded-lg border border-pink-200 dark:border-pink-800">
              <div className="flex items-start gap-3 mb-3">
                <Eye className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">lang & dir</h4>
                  <p className="text-sm text-muted-foreground">Language and text direction</p>
                </div>
              </div>
              <div className="bg-muted p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Use Cases:</p>
                <ul className="text-sm space-y-1">
                  <li>• Screen readers</li>
                  <li>• Search engines</li>
                  <li>• dir: ltr (left-right) or rtl</li>
                  <li>• lang: ISO language codes</li>
                </ul>
                <code className="block bg-background p-2 rounded mt-2 font-mono text-sm">
                  &lt;p lang="es" dir="ltr"&gt;Hola&lt;/p&gt;
                </code>
              </div>
            </div>
          </div>

          <InteractivePlayground
            title="Global Attributes Playground"
            description="Explore id, class, title, style, data-* and other global attributes"
            features={[
              'ID & Class',
              'Data Attributes',
              'Lang & Dir',
              'Custom Styling'
            ]}
            buttonText="Explore Global Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: globalAttributesDemo.html,
              css: globalAttributesDemo.css,
              js: globalAttributesDemo.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== LINK ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Link2 className="w-6 h-6 text-blue-600" />
            Link Attributes (&lt;a&gt;)
          </CardTitle>
          <CardDescription className="text-base">
            Attributes for hyperlinks and navigation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'href', desc: 'URL destination (required)', example: 'href="https://example.com"' },
              { attr: 'target', desc: '_blank (new tab), _self (same tab)', example: 'target="_blank"' },
              { attr: 'rel', desc: 'Relationship: noopener, noreferrer, nofollow', example: 'rel="noopener noreferrer"' },
              { attr: 'download', desc: 'Downloads link instead of navigating', example: 'download="file.pdf"' },
              { attr: 'hreflang', desc: 'Language of linked document', example: 'hreflang="es"' },
              { attr: 'type', desc: 'MIME type of linked resource', example: 'type="application/pdf"' },
            ].map(({ attr, desc, example }) => (
              <div key={attr} className="bg-muted p-4 rounded-lg border">
                <code className="text-base font-mono font-bold text-blue-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <InteractivePlayground
            title="Link Attributes Playground"
            description="Master href, target, rel, download and other link attributes"
            features={[
              'Navigation Links',
              'External Links',
              'Download Links',
              'Security Attributes'
            ]}
            buttonText="Try Link Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: linkAttributesDemo.html,
              css: linkAttributesDemo.css,
              js: linkAttributesDemo.js
            }}
            colorTheme="emerald"
          />
        </CardContent>
      </Card>

      {/* ==================== IMAGE ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Image className="w-6 h-6 text-green-600" />
            Image Attributes (&lt;img&gt;)
          </CardTitle>
          <CardDescription className="text-base">
            Essential attributes for images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'src', desc: 'Image source URL (required)', example: 'src="photo.jpg"', required: true },
              { attr: 'alt', desc: 'Alternative text for accessibility (required)', example: 'alt="Sunset photo"', required: true },
              { attr: 'width', desc: 'Image width in pixels', example: 'width="300"', required: false },
              { attr: 'height', desc: 'Image height in pixels', example: 'height="200"', required: false },
              { attr: 'loading', desc: 'lazy (defer), eager (immediate)', example: 'loading="lazy"', required: false },
              { attr: 'srcset', desc: 'Responsive image sources', example: 'srcset="img-400.jpg 400w"', required: false },
              { attr: 'sizes', desc: 'Image sizes for different viewports', example: 'sizes="(max-width: 600px) 100vw"', required: false },
              { attr: 'decoding', desc: 'async, sync, auto', example: 'decoding="async"', required: false },
            ].map(({ attr, desc, example, required }) => (
              <div key={attr} className={`bg-muted p-4 rounded-lg border ${required ? 'border-red-300 dark:border-red-800' : ''}`}>
                <div className="flex items-center gap-2">
                  <code className="text-base font-mono font-bold text-green-600">{attr}</code>
                  {required && <span className="text-sm bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded font-semibold">REQUIRED</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <InteractivePlayground
            title="Image Attributes Playground"
            description="Learn src, alt, width, height, loading and responsive image attributes"
            features={[
              'Image Sources',
              'Alt Text',
              'Dimensions',
              'Lazy Loading'
            ]}
            buttonText="See Image Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: imageAttributesDemo.html,
              css: imageAttributesDemo.css,
              js: imageAttributesDemo.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* ==================== FORM ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FormInput className="w-6 h-6 text-orange-600" />
            Form & Input Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Attributes for interactive form elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Attributes */}
          <div>
            <h4 className="font-bold text-lg mb-3">&lt;form&gt; Attributes</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { attr: 'action', desc: 'URL to submit form data', example: 'action="/submit"' },
                { attr: 'method', desc: 'GET or POST', example: 'method="post"' },
                { attr: 'enctype', desc: 'Encoding type for file uploads', example: 'enctype="multipart/form-data"' },
                { attr: 'autocomplete', desc: 'on or off', example: 'autocomplete="off"' },
                { attr: 'novalidate', desc: 'Skip HTML5 validation', example: 'novalidate' },
                { attr: 'target', desc: 'Where to display response', example: 'target="_blank"' },
              ].map(({ attr, desc, example }) => (
                <div key={attr} className="bg-muted p-3 rounded text-sm">
                  <code className="font-mono font-bold">{attr}</code>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  <code className="text-sm bg-background px-1.5 py-0.5 rounded mt-1 inline-block font-mono">{example}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Input Attributes */}
          <div>
            <h4 className="font-bold text-lg mb-3">&lt;input&gt; Attributes</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { attr: 'type', desc: 'text, email, password, number, etc.', example: 'type="email"' },
                { attr: 'name', desc: 'Form field name (required)', example: 'name="username"' },
                { attr: 'value', desc: 'Initial/default value', example: 'value="default"' },
                { attr: 'placeholder', desc: 'Hint text', example: 'placeholder="Enter email"' },
                { attr: 'required', desc: 'Field must be filled', example: 'required' },
                { attr: 'disabled', desc: 'Field cannot be edited', example: 'disabled' },
                { attr: 'readonly', desc: 'Can view but not edit', example: 'readonly' },
                { attr: 'min / max', desc: 'Range for numbers/dates', example: 'min="1" max="100"' },
                { attr: 'minlength / maxlength', desc: 'Text length constraints', example: 'maxlength="50"' },
                { attr: 'pattern', desc: 'Regex validation', example: 'pattern="[0-9]{3}"' },
                { attr: 'autocomplete', desc: 'Browser autofill hints', example: 'autocomplete="email"' },
                { attr: 'autofocus', desc: 'Auto-focus on page load', example: 'autofocus' },
              ].map(({ attr, desc, example }) => (
                <div key={attr} className="bg-muted p-3 rounded text-sm">
                  <code className="font-mono font-bold">{attr}</code>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  <code className="text-sm bg-background px-1.5 py-0.5 rounded mt-1 inline-block font-mono">{example}</code>
                </div>
              ))}
            </div>
          </div>

          <InteractivePlayground
            title="Form Attributes Playground"
            description="Explore action, method, name, placeholder, required and form validation attributes"
            features={[
              'Form Action & Method',
              'Input Attributes',
              'Validation',
              'Required Fields'
            ]}
            buttonText="Interactive Form Demo"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: formAttributesDemo.html,
              css: formAttributesDemo.css,
              js: formAttributesDemo.js
            }}
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* ==================== ARIA ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-purple-600" />
            ARIA Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Accessibility attributes for screen readers and assistive technology
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { attr: 'role', desc: 'Element purpose: button, navigation, alert', example: 'role="navigation"' },
              { attr: 'aria-label', desc: 'Accessible name for element', example: 'aria-label="Close dialog"' },
              { attr: 'aria-labelledby', desc: 'ID of labeling element', example: 'aria-labelledby="heading1"' },
              { attr: 'aria-describedby', desc: 'ID of describing element', example: 'aria-describedby="hint1"' },
              { attr: 'aria-hidden', desc: 'Hide from screen readers', example: 'aria-hidden="true"' },
              { attr: 'aria-expanded', desc: 'Collapsed/expanded state', example: 'aria-expanded="false"' },
              { attr: 'aria-pressed', desc: 'Toggle button state', example: 'aria-pressed="true"' },
              { attr: 'aria-current', desc: 'Current item in navigation', example: 'aria-current="page"' },
              { attr: 'aria-live', desc: 'Announce dynamic changes', example: 'aria-live="polite"' },
              { attr: 'aria-controls', desc: 'ID of controlled element', example: 'aria-controls="menu1"' },
            ].map(({ attr, desc, example }) => (
              <div key={attr} className="bg-muted p-4 rounded-lg border">
                <code className="text-base font-mono font-bold text-purple-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <code className="text-sm bg-background px-2 py-1 rounded mt-2 inline-block font-mono">{example}</code>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-base flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              ARIA Best Practices
            </h4>
            <ul className="space-y-1 text-base">
              <li>• Use semantic HTML first (nav, button, header)</li>
              <li>• Add ARIA only when semantic HTML isn't enough</li>
              <li>• Test with screen readers</li>
              <li>• Keep ARIA attributes updated with state changes</li>
            </ul>
          </div>

          <InteractivePlayground
            title="ARIA Attributes Playground"
            description="Master aria-label, aria-describedby, role and other accessibility attributes"
            features={[
              'ARIA Labels',
              'Roles',
              'Live Regions',
              'Screen Reader Support'
            ]}
            buttonText="ARIA Accessibility Demo"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: ariaAttributesDemo.html,
              css: ariaAttributesDemo.css,
              js: ariaAttributesDemo.js
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* ==================== EVENT ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MousePointer className="w-6 h-6 text-red-600" />
            Event Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Inline JavaScript event handlers (use with caution)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mb-4">
            <p className="text-base flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <strong>Note:</strong> Modern practice prefers addEventListener() in external JavaScript files for better separation of concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { attr: 'onclick', desc: 'Element clicked' },
              { attr: 'ondblclick', desc: 'Double-clicked' },
              { attr: 'onmouseover', desc: 'Mouse enters' },
              { attr: 'onmouseout', desc: 'Mouse leaves' },
              { attr: 'onmousedown', desc: 'Mouse button pressed' },
              { attr: 'onmouseup', desc: 'Mouse button released' },
              { attr: 'onkeydown', desc: 'Key pressed down' },
              { attr: 'onkeyup', desc: 'Key released' },
              { attr: 'onkeypress', desc: 'Key pressed' },
              { attr: 'onchange', desc: 'Value changed' },
              { attr: 'oninput', desc: 'Input value changing' },
              { attr: 'onsubmit', desc: 'Form submitted' },
              { attr: 'onfocus', desc: 'Element focused' },
              { attr: 'onblur', desc: 'Element lost focus' },
              { attr: 'onload', desc: 'Element loaded' },
            ].map(({ attr, desc }) => (
              <div key={attr} className="bg-muted p-3 rounded text-sm">
                <code className="font-mono font-bold text-red-600">{attr}</code>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <InteractivePlayground
            title="Event Attributes Playground"
            description="Experiment with onclick, onmouseover, onchange and other event handlers"
            features={[
              'Click Events',
              'Mouse Events',
              'Form Events',
              'Keyboard Events'
            ]}
            buttonText="Try Event Attributes"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: eventAttributesDemo.html,
              css: eventAttributesDemo.css,
              js: eventAttributesDemo.js
            }}
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* ==================== OTHER IMPORTANT ATTRIBUTES ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-600" />
            Other Important Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Additional attributes for specific use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Media Attributes */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-base mb-3">Media (video/audio)</h4>
              <div className="space-y-2 text-sm">
                {['controls', 'autoplay', 'loop', 'muted', 'poster', 'preload'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Table Attributes */}
            <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-bold text-base mb-3">Tables</h4>
              <div className="space-y-2 text-sm">
                {['colspan', 'rowspan', 'scope', 'headers'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Meta Attributes */}
            <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
              <h4 className="font-bold text-base mb-3">Meta Tags</h4>
              <div className="space-y-2 text-sm">
                {['charset', 'name', 'content', 'http-equiv', 'property'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>

            {/* Boolean Attributes */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-base mb-3">Boolean (No Value Needed)</h4>
              <div className="space-y-2 text-sm">
                {['checked', 'selected', 'disabled', 'readonly', 'required', 'hidden'].map(attr => (
                  <code key={attr} className="block bg-muted px-2 py-1 rounded font-mono">{attr}</code>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== QUICK REFERENCE ==================== */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl">🎯 Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Most Used</h4>
              <ul className="text-sm space-y-1">
                <li>• id, class, style</li>
                <li>• href, target, rel</li>
                <li>• src, alt</li>
                <li>• type, name, value</li>
                <li>• placeholder, required</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Remember</h4>
              <ul className="text-sm space-y-1">
                <li>• Lowercase names</li>
                <li>• Quote values</li>
                <li>• alt required for images</li>
                <li>• Use data-* for custom</li>
                <li>• ARIA for accessibility</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
              <h4 className="font-bold text-base mb-2">Best Practices</h4>
              <ul className="text-sm space-y-1">
                <li>• Validate your HTML</li>
                <li>• Use semantic attributes</li>
                <li>• Accessibility first</li>
                <li>• External CSS/JS preferred</li>
                <li>• Test across browsers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==================== FRONTEND CODE PREVIEW EXAMPLES ==================== */}

      {/* Example 1: Image Attributes in Action */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="1. Image Attributes Showcase"
            description="Essential attributes for embedding and optimizing images"
            html={`<!-- Basic Image with alt -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    alt="Modern web development workspace with multiple monitors"
    width="400"
    height="300"
    title="Hover for more info - Web Development"
  />
  <figcaption>Standard image with dimensions</figcaption>
</figure>

<!-- Lazy Loading -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    alt="Code editor with lazy loading demonstration"
    loading="lazy"
    width="400"
    height="300"
  />
  <figcaption>Image with lazy loading enabled</figcaption>
</figure>

<!-- Responsive with srcset (simulated) -->
<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    alt="Responsive image that adapts to different screen sizes"
    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 90vw, 80vw"
    width="800"
    height="600"
  />
  <figcaption>Image adapts based on viewport size</figcaption>
</figure>`}
            css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #2d1b69 100%);
}

h2 {
  color: #1e40af;
  margin-bottom: 2rem;
  text-align: center;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

figure {
  display: inline-block;
  margin: 1rem;
  text-align: center;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, background-color 0.3s, box-shadow 0.3s;
}

html.dark figure {
  background: #1e293b;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

figure:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

html.dark figure:hover {
  box-shadow: 0 8px 12px rgba(0,0,0,0.5);
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  display: block;
}

figcaption {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

html.dark figcaption {
  color: #cbd5e1;
}`}
            colorTheme="blue"
            previewHeight="800px"
          />
        </CardContent>
      </Card>

      {/* Example 2: Form Attributes in Action */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="2. Form Attributes & Validation"
            description="Interactive form with validation, autocomplete, and input constraints"
            html={`<h2>Form Attributes Example</h2>

<form class="demo-form">
  <!-- Text with constraints -->
  <div class="form-group">
    <label for="username">Username (3-20 chars):</label>
    <input 
      type="text"
      id="username"
      name="username"
      placeholder="Enter username"
      minlength="3"
      maxlength="20"
      required
      autocomplete="username"
      pattern="[a-zA-Z0-9_-]+"
      title="Only letters, numbers, underscore, hyphen"
    />
  </div>

  <!-- Email validation -->
  <div class="form-group">
    <label for="email">Email:</label>
    <input 
      type="email"
      id="email"
      name="email"
      placeholder="you@example.com"
      required
      autocomplete="email"
    />
  </div>

  <!-- Number with range -->
  <div class="form-group">
    <label for="age">Age (18-120):</label>
    <input 
      type="number"
      id="age"
      name="age"
      min="18"
      max="120"
      step="1"
      value="25"
    />
  </div>

  <!-- Select dropdown -->
  <div class="form-group">
    <label for="country">Country:</label>
    <select id="country" name="country" required>
      <option value="">-- Select --</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
  </div>

  <!-- Checkbox -->
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox" name="subscribe" />
      Subscribe to newsletter
    </label>
  </div>

  <!-- Radio buttons -->
  <div class="form-group">
    <fieldset>
      <legend>Plan:</legend>
      <label class="radio">
        <input type="radio" name="plan" value="free" checked />
        Free
      </label>
      <label class="radio">
        <input type="radio" name="plan" value="pro" />
        Pro
      </label>
    </fieldset>
  </div>

  <!-- Buttons -->
  <div class="button-group">
    <button type="submit" class="btn-primary">Submit</button>
    <button type="reset" class="btn-secondary">Reset</button>
  </div>
</form>`}
            css={`h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.demo-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

html.dark .demo-form {
  background: #1e293b;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  transition: color 0.3s;
}

html.dark label {
  color: #e2e8f0;
}

input[type="text"],
input[type="email"],
input[type="number"],
select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  background-color: white;
  color: #1f2937;
}

html.dark input[type="text"],
html.dark input[type="email"],
html.dark input[type="number"],
html.dark select {
  background-color: #0f172a;
  color: #e2e8f0;
  border-color: #334155;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

html.dark input[type="text"]:focus,
html.dark input[type="email"]:focus,
html.dark input[type="number"]:focus,
html.dark select:focus {
  box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
}

input[type="text"]:invalid {
  border-color: #ef4444;
}

input[type="text"]:valid {
  border-color: #10b981;
}

.checkbox,
.radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0;
  color: #374151;
  transition: color 0.3s;
}

html.dark .checkbox,
html.dark .radio {
  color: #e2e8f0;
}

input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
  width: auto;
}

fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 1rem;
  transition: border-color 0.3s;
}

html.dark fieldset {
  border-color: #334155;
}

legend {
  font-weight: 600;
  padding: 0 0.5rem;
  color: #374151;
  transition: color 0.3s;
}

html.dark legend {
  color: #e2e8f0;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .btn-primary {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn-primary:hover {
  background: #93c5fd;
}

.btn-secondary {
  background: #e5e7eb;
  color: #374151;
}

.btn-secondary:hover {
  background: #d1d5db;
}

html.dark .btn-secondary {
  background: #334155;
  color: #e2e8f0;
}

html.dark .btn-secondary:hover {
  background: #475569;
}`}
            colorTheme="purple"
            previewHeight="900px"
          />
        </CardContent>
      </Card>

      {/* Example 3: Data Attributes & Custom Data */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="3. Data Attributes (Custom Data Storage)"
            description="Using data-* attributes to store and manipulate custom information"
            html={`<h2>Product Cards with Data Attributes</h2>

<div class="products">
  <div class="product-card" 
    data-product-id="101"
    data-price="29.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.5"
    title="Click to view details"
  >
    <div class="product-image">📱</div>
    <h3>Smartphone</h3>
    <p class="price">$29.99</p>
    <p class="rating">⭐ 4.5/5</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>

  <div class="product-card"
    data-product-id="102"
    data-price="49.99"
    data-category="electronics"
    data-in-stock="true"
    data-rating="4.8"
  >
    <div class="product-image">💻</div>
    <h3>Laptop</h3>
    <p class="price">$49.99</p>
    <p class="rating">⭐ 4.8/5</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>

  <div class="product-card"
    data-product-id="103"
    data-price="19.99"
    data-category="accessories"
    data-in-stock="false"
    data-rating="4.2"
  >
    <div class="product-image">🎧</div>
    <h3>Headphones</h3>
    <p class="price">$19.99</p>
    <p class="rating">⭐ 4.2/5</p>
    <button class="add-to-cart" disabled>Out of Stock</button>
  </div>
</div>

<div id="info-panel" class="info-panel">
  <p>Click a product to see its data attributes</p>
</div>`}
            css={`h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

html.dark .product-card {
  background: #1e293b;
  border-color: #334155;
}

.product-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 16px rgba(59,130,246,0.2);
  transform: translateY(-4px);
}

html.dark .product-card:hover {
  border-color: #60a5fa;
  box-shadow: 0 8px 16px rgba(96,165,250,0.2);
}

.product-image {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .product-card h3 {
  color: #e2e8f0;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
  transition: color 0.3s;
}

html.dark .price {
  color: #fbbf24;
}

.rating {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: #6b7280;
  transition: color 0.3s;
}

html.dark .rating {
  color: #cbd5e1;
}

.add-to-cart {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-cart:hover:not(:disabled) {
  background: #2563eb;
}

.add-to-cart:disabled {
  background: #d1d5db;
  cursor: not-allowed;
}

html.dark .add-to-cart {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .add-to-cart:hover:not(:disabled) {
  background: #93c5fd;
}

html.dark .add-to-cart:disabled {
  background: #475569;
  color: #9ca3af;
}

.info-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f3f4f6;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background-color 0.3s, border-left-color 0.3s, color 0.3s;
  color: #374151;
}

html.dark .info-panel {
  background: #1e293b;
  border-left-color: #60a5fa;
  color: #cbd5e1;
}`}
            colorTheme="amber"
            previewHeight="800px"
          />
        </CardContent>
      </Card>

      {/* Example 4: Semantic & Accessibility Attributes */}
      <Card>
        <CardContent className="pt-6">
          <FrontendCodePreview
            title="4. Semantic & Accessibility Attributes"
            description="ARIA, role, and semantic attributes for better accessibility"
            html={`<h2>Accessible Interactive Component</h2>

<button 
  id="menu-toggle"
  aria-expanded="false"
  aria-controls="navigation-menu"
  aria-label="Toggle navigation menu"
  class="menu-button"
>
  ☰ Menu
</button>

<nav 
  id="navigation-menu"
  role="navigation"
  aria-label="Main navigation"
  hidden
  class="navigation"
>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<div role="alert" aria-live="polite" aria-atomic="true" id="status" class="status-message">
  Ready
</div>

<div class="form-section">
  <label for="search">Search:</label>
  <input 
    type="text"
    id="search"
    aria-label="Search products"
    aria-describedby="search-hint"
    placeholder="Type to search..."
  />
  <p id="search-hint" class="hint">
    Enter product name or category
  </p>
</div>`}
            css={`h2 {
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

html.dark h2 {
  color: #60a5fa;
}

.menu-button {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-button:hover {
  background: #2563eb;
  transform: scale(1.05);
}

.menu-button[aria-expanded="true"] {
  background: #10b981;
}

html.dark .menu-button {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .menu-button:hover {
  background: #93c5fd;
}

html.dark .menu-button[aria-expanded="true"] {
  background: #34d399;
}

.navigation {
  margin-top: 1rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .navigation {
  background: #1e293b;
}

.navigation ul {
  list-style: none;
  padding: 0;
}

.navigation li {
  margin: 0.5rem 0;
}

.navigation a {
  color: #1e40af;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, text-decoration 0.3s;
}

html.dark .navigation a {
  color: #93c5fd;
}

.navigation a:hover {
  text-decoration: underline;
}

.status-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  border-left: 4px solid #10b981;
  transition: background-color 0.3s, color 0.3s, border-left-color 0.3s;
}

html.dark .status-message {
  background: #064e3b;
  color: #a7f3d0;
  border-left-color: #34d399;
}

.form-section {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 6px;
  transition: background-color 0.3s;
}

html.dark .form-section {
  background: #1e293b;
}

.form-section label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  transition: color 0.3s;
}

html.dark .form-section label {
  color: #e2e8f0;
}

.form-section input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  background-color: white;
  color: #1f2937;
}

html.dark .form-section input {
  background-color: #0f172a;
  color: #e2e8f0;
  border-color: #334155;
}

.form-section input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

html.dark .form-section input:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96,165,250,0.2);
}

.hint {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  transition: color 0.3s;
}

html.dark .hint {
  color: #cbd5e1;
}`}
            colorTheme="emerald"
            previewHeight="500px"
          />
        </CardContent>
      </Card>

      {/* Comprehensive Attributes Showcase Playground */}
      <Card>
        <CardHeader>
          <CardTitle>🎨 Comprehensive Attributes Showcase</CardTitle>
          <CardDescription>Interactive showcase featuring all attribute categories with beautiful styling</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete HTML Attributes Showcase"
            description="Explore global attributes, link attributes, image attributes, form attributes, ARIA, and data attributes in one comprehensive interactive playground"
            features={[
              'Global Attributes',
              'Link Attributes',
              'Image Attributes',
              'Form Attributes',
              'Data Attributes',
              'ARIA Accessibility'
            ]}
            buttonText="Open Complete Showcase"
            onLaunchPlayground={openPlayground}
            playgroundData={{
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Attributes Showcase</title>
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1>✨ HTML Attributes Masterclass</h1>
      <p class="subtitle">Master every HTML attribute category</p>
    </header>

    <section class="showcase-section">
      <h2 class="section-title">🌍 Global Attributes</h2>
      <p>Attributes available on all HTML elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>id</strong>
          <p>Unique identifier</p>
        </div>
        <div class="attr-card">
          <strong>class</strong>
          <p>CSS class names</p>
        </div>
        <div class="attr-card">
          <strong>style</strong>
          <p>Inline CSS styles</p>
        </div>
        <div class="attr-card">
          <strong>title</strong>
          <p>Tooltip text</p>
        </div>
        <div class="attr-card">
          <strong>data-*</strong>
          <p>Custom data storage</p>
        </div>
        <div class="attr-card">
          <strong>lang</strong>
          <p>Language code</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">🔗 Link Attributes</h2>
      <p>Attributes specific to &lt;a&gt; elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>href</strong>
          <p>Link destination URL</p>
        </div>
        <div class="attr-card">
          <strong>target</strong>
          <p>_blank, _self, _parent</p>
        </div>
        <div class="attr-card">
          <strong>rel</strong>
          <p>Relationship type</p>
        </div>
        <div class="attr-card">
          <strong>download</strong>
          <p>Force download</p>
        </div>
        <div class="attr-card">
          <strong>hreflang</strong>
          <p>Language of linked page</p>
        </div>
        <div class="attr-card">
          <strong>type</strong>
          <p>MIME type hint</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">🖼️ Image Attributes</h2>
      <p>Attributes for &lt;img&gt; elements:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>src</strong>
          <p>Image file path (required)</p>
        </div>
        <div class="attr-card">
          <strong>alt</strong>
          <p>Alternative text (required)</p>
        </div>
        <div class="attr-card">
          <strong>width/height</strong>
          <p>Image dimensions</p>
        </div>
        <div class="attr-card">
          <strong>loading</strong>
          <p>lazy or eager</p>
        </div>
        <div class="attr-card">
          <strong>srcset</strong>
          <p>Responsive images</p>
        </div>
        <div class="attr-card">
          <strong>sizes</strong>
          <p>Viewport sizes</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">📝 Form Attributes</h2>
      <p>Attributes for form controls:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>name</strong>
          <p>Form field identifier</p>
        </div>
        <div class="attr-card">
          <strong>value</strong>
          <p>Default/selected value</p>
        </div>
        <div class="attr-card">
          <strong>required</strong>
          <p>Field mandatory</p>
        </div>
        <div class="attr-card">
          <strong>placeholder</strong>
          <p>Hint text</p>
        </div>
        <div class="attr-card">
          <strong>minlength/maxlength</strong>
          <p>String length validation</p>
        </div>
        <div class="attr-card">
          <strong>pattern</strong>
          <p>Regex validation</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">💾 Data Attributes</h2>
      <p>Custom data storage with data-* prefix:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>data-id</strong>
          <p>Unique identifier</p>
        </div>
        <div class="attr-card">
          <strong>data-type</strong>
          <p>Data type/category</p>
        </div>
        <div class="attr-card">
          <strong>data-value</strong>
          <p>Custom value storage</p>
        </div>
        <div class="attr-card">
          <strong>data-config</strong>
          <p>Configuration data</p>
        </div>
        <div class="attr-card">
          <strong>data-state</strong>
          <p>Element state tracking</p>
        </div>
        <div class="attr-card">
          <strong>dataset API</strong>
          <p>JavaScript access</p>
        </div>
      </div>
    </section>

    <section class="showcase-section">
      <h2 class="section-title">♿ ARIA Attributes</h2>
      <p>Accessibility Rich Internet Applications:</p>
      <div class="attribute-grid">
        <div class="attr-card">
          <strong>role</strong>
          <p>Element semantic role</p>
        </div>
        <div class="attr-card">
          <strong>aria-label</strong>
          <p>Accessible name</p>
        </div>
        <div class="attr-card">
          <strong>aria-expanded</strong>
          <p>Expanded state</p>
        </div>
        <div class="attr-card">
          <strong>aria-live</strong>
          <p>Live region updates</p>
        </div>
        <div class="attr-card">
          <strong>aria-describedby</strong>
          <p>Description reference</p>
        </div>
        <div class="attr-card">
          <strong>aria-hidden</strong>
          <p>Hide from screen readers</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>Master HTML attributes to create <strong>semantic</strong>, <em>accessible</em>, and <mark>interactive</mark> web content.</p>
    </footer>
  </div>
</body>
</html>`,
              css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.8;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
  color: #1e293b;
}

html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: #e2e8f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(120deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  border-radius: 12px;
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

.showcase-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e7ff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: all 0.3s;
}

html.dark .showcase-section {
  background: #1e293b;
  border-color: #334155;
}

.showcase-section:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}

.section-title {
  font-size: 1.75rem;
  color: #1e40af;
  margin-bottom: 1rem;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
}

html.dark .section-title {
  color: #93c5fd;
  border-bottom-color: #60a5fa;
}

.attribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.attr-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
  border: 2px solid #dbeafe;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

html.dark .attr-card {
  background: linear-gradient(135deg, #1e3a8a20 0%, #2d1b6920 100%);
  border-color: #3730a3;
}

.attr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(59,130,246,0.2);
}

.attr-card strong {
  display: block;
  font-size: 1.2rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

html.dark .attr-card strong {
  color: #93c5fd;
}

.attr-card p {
  font-size: 0.85rem;
  color: #6b7280;
}

html.dark .attr-card p {
  color: #cbd5e1;
}

.footer {
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #e0e7ff;
  margin-top: 3rem;
}

html.dark .footer {
  border-top-color: #334155;
}

strong {
  color: #3b82f6;
  font-weight: 600;
}

em {
  color: #7c3aed;
  font-style: italic;
}

mark {
  background: #fef08a;
  color: #78350f;
  padding: 0.125rem 0.25rem;
  border-radius: 2px;
}

html.dark mark {
  background: #854d0e;
  color: #fef08a;
}`,
              js: ''
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>
    </div>
  );
}

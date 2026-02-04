'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { Settings, Type, Tags, Link, Image, FileText, MousePointer, Users, Cpu } from 'lucide-react';

export default function HtmlAttributes() {
  const [playgroundOpen, setPlaygroundOpen] = useState(false);

  const openPlayground = () => {
    setPlaygroundOpen(true);
  };

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
.primary:hover { background: #2563eb; }`,
    js: `// Data attributes access
const button = document.getElementById('action-btn');
console.log('User ID:', button.dataset.userId);
console.log('Action:', button.dataset.action);

// Language detection
const spanishElement = document.querySelector('[lang="es"]');
console.log('Spanish text:', spanishElement.textContent);`
  };

  const linkAttributesDemo = {
    html: `<!-- Link Attributes Demo -->
<nav class="navigation">
  <a href="https://example.com" 
     target="_blank" 
     rel="noopener noreferrer"
     class="nav-link external">
    External Link
  </a>
  
  <a href="#section1" 
     class="nav-link anchor">
    Jump to Section
  </a>
  
  <a href="documents/report.pdf" 
     download="annual-report.pdf"
     class="nav-link download">
    Download PDF
  </a>
  
  <a href="mailto:contact@example.com" 
     class="nav-link email">
    Send Email
  </a>
  
  <a href="tel:+1234567890" 
     class="nav-link phone">
    Call Us
  </a>
</nav>

<section id="section1">
  <h2>Target Section</h2>
  <p>This is where the anchor link jumps to.</p>
</section>`,
    css: `.navigation { display: flex; gap: 1rem; padding: 1rem; background: rgba(30, 41, 59, 0.6); border-radius: 8px; }
.nav-link { 
  padding: 0.5rem 1rem; 
  text-decoration: none; 
  border-radius: 4px; 
  transition: all 0.3s; 
  color: #e2e8f0;
}
.external { background: #10b981; }
.external:hover { background: #059669; }
.anchor { background: #3b82f6; }
.anchor:hover { background: #2563eb; }
.download { background: #f59e0b; }
.download:hover { background: #d97706; }
.email { background: #8b5cf6; }
.email:hover { background: #7c3aed; }
.phone { background: #ef4444; }
.phone:hover { background: #dc2626; }
#section1 { margin-top: 2rem; padding: 2rem; background: rgba(30, 41, 59, 0.3); border-radius: 8px; }`,
    js: `// Link click tracking
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    console.log('Link clicked:', href, 'Target:', target);
    
    // Track external links
    if (target === '_blank') {
      console.log('External link opened');
    }
  });
});`
  };

  const imageAttributesDemo = {
    html: `<!-- Image Attributes Demo -->
<div class="image-gallery">
  <!-- Basic image with alt text -->
  <img src="https://picsum.photos/300/200?random=1" 
       alt="Beautiful mountain landscape"
       width="300"
       height="200"
       class="gallery-image" />
  
  <!-- Lazy loaded image -->
  <img src="https://picsum.photos/300/200?random=2" 
       alt="Ocean sunset view"
       width="300"
       height="200"
       loading="lazy"
       class="gallery-image" />
  
  <!-- Responsive image -->
  <img src="https://picsum.photos/300/200?random=3" 
       alt="City skyline at night"
       width="300"
       height="200"
       loading="lazy"
       decoding="async"
       class="gallery-image responsive" />
  
  <!-- Image with long description -->
  <img src="https://picsum.photos/300/200?random=4" 
       alt="Group of diverse professionals collaborating in modern office"
       longdesc="image-description.html"
       width="300"
       height="200"
       class="gallery-image" />
</div>

<figure class="featured-image">
  <img src="https://picsum.photos/600/400?random=5" 
       alt="Team working together on project"
       width="600"
       height="400"
       loading="lazy"
       class="main-image" />
  <figcaption>
    Our team collaborating on the latest project initiatives
  </figcaption>
</figure>`,
    css: `.image-gallery { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 1rem; 
  margin-bottom: 2rem; 
}
.gallery-image { 
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
  border-radius: 8px; 
  transition: transform 0.3s; 
  cursor: pointer;
}
.gallery-image:hover { transform: scale(1.05); }
.featured-image { 
  text-align: center; 
  background: rgba(30, 41, 59, 0.3); 
  padding: 2rem; 
  border-radius: 8px; 
}
.main-image { 
  width: 100%; 
  max-width: 600px; 
  height: 400px; 
  object-fit: cover; 
  border-radius: 8px; 
  margin-bottom: 1rem; 
}
figcaption { 
  color: #9ca3af; 
  font-style: italic; 
  font-size: 0.9rem; 
}`,
    js: `// Image load events
document.querySelectorAll('.gallery-image').forEach(img => {
  img.addEventListener('load', function() {
    console.log('Image loaded:', this.alt);
  });
  
  img.addEventListener('error', function() {
    console.error('Image failed to load:', this.src);
    this.alt = 'Image failed to load';
  });
  
  img.addEventListener('click', function() {
    console.log('Image clicked:', this.alt);
  });
});`
  };

  const formAttributesDemo = {
    html: `<!-- Form Attributes Demo -->
<form class="demo-form" 
      action="/submit" 
      method="post" 
      enctype="multipart/form-data"
      novalidate>
  
  <fieldset>
    <legend>User Information</legend>
    
    <!-- Text input with validation -->
    <div class="form-group">
      <label for="fullname">Full Name:</label>
      <input type="text" 
             id="fullname" 
             name="fullname" 
             required 
             placeholder="Enter your full name"
             minlength="2"
             maxlength="50"
             pattern="[A-Za-z\\s]+"
             title="Please enter only letters and spaces" />
    </div>
    
    <!-- Email input -->
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" 
             id="email" 
             name="email" 
             required 
             placeholder="your@email.com"
             title="Please enter a valid email address" />
    </div>
    
    <!-- Number input -->
    <div class="form-group">
      <label for="age">Age:</label>
      <input type="number" 
             id="age" 
             name="age" 
             min="18" 
             max="120" 
             step="1"
             placeholder="Enter your age" />
    </div>
    
    <!-- Select dropdown -->
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" 
              name="country" 
              required>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
    </div>
    
    <!-- Textarea -->
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" 
                name="message" 
                rows="4" 
                cols="50"
                placeholder="Enter your message here"
                maxlength="500"
                required></textarea>
    </div>
    
    <!-- File upload -->
    <div class="form-group">
      <label for="resume">Resume:</label>
      <input type="file" 
             id="resume" 
             name="resume" 
             accept=".pdf,.doc,.docx"
             multiple />
    </div>
    
    <!-- Checkboxes -->
    <div class="form-group">
      <fieldset>
        <legend>Interests:</legend>
        <label>
          <input type="checkbox" name="interests" value="coding" checked />
          Coding
        </label>
        <label>
          <input type="checkbox" name="interests" value="design" />
          Design
        </label>
        <label>
          <input type="checkbox" name="interests" value="marketing" />
          Marketing
        </label>
      </fieldset>
    </div>
    
    <!-- Radio buttons -->
    <div class="form-group">
      <fieldset>
        <legend>Experience Level:</legend>
        <label>
          <input type="radio" name="experience" value="beginner" />
          Beginner
        </label>
        <label>
          <input type="radio" name="experience" value="intermediate" checked />
          Intermediate
        </label>
        <label>
          <input type="radio" name="experience" value="expert" />
          Expert
        </label>
      </fieldset>
    </div>
  </fieldset>
  
  <!-- Form buttons -->
  <div class="form-actions">
    <button type="submit" class="btn btn-primary">Submit Form</button>
    <button type="reset" class="btn btn-secondary">Reset</button>
    <button type="button" class="btn btn-tertiary">Cancel</button>
  </div>
</form>`,
    css: `.demo-form { 
  max-width: 600px; 
  margin: 0 auto; 
  padding: 2rem; 
  background: rgba(30, 41, 59, 0.6); 
  border-radius: 8px; 
  border: 1px solid #374151; 
}
.form-group { 
  margin-bottom: 1.5rem; 
}
label { 
  display: block; 
  margin-bottom: 0.5rem; 
  color: #e2e8f0; 
  font-weight: 500; 
}
input, select, textarea { 
  width: 100%; 
  padding: 0.75rem; 
  border: 2px solid #374151; 
  border-radius: 6px; 
  background: rgba(15, 23, 42, 0.6); 
  color: #e2e8f0; 
  font-size: 1rem; 
}
input:focus, select:focus, textarea:focus { 
  outline: none; 
  border-color: #3b82f6; 
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); 
}
input:invalid { 
  border-color: #ef4444; 
}
fieldset { 
  border: 1px solid #374151; 
  border-radius: 6px; 
  padding: 1rem; 
  margin-bottom: 1rem; 
}
legend { 
  color: #60a5fa; 
  font-weight: 600; 
  padding: 0 0.5rem; 
}
.form-actions { 
  display: flex; 
  gap: 1rem; 
  justify-content: flex-end; 
}
.btn { 
  padding: 0.75rem 1.5rem; 
  border: none; 
  border-radius: 6px; 
  font-weight: 600; 
  cursor: pointer; 
  transition: all 0.3s; 
}
.btn-primary { background: #3b82f6; color: white; }
.btn-primary:hover { background: #2563eb; }
.btn-secondary { background: #6b7280; color: white; }
.btn-secondary:hover { background: #4b5563; }
.btn-tertiary { background: transparent; color: #9ca3af; border: 1px solid #4b5563; }
.btn-tertiary:hover { background: #4b5563; color: white; }`,
    js: `// Form validation and submission
const form = document.querySelector('.demo-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  console.log('Form data:', data);
  
  // Show success message
  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = 'Form submitted successfully!';
  form.appendChild(message);
  
  setTimeout(() => message.remove(), 3000);
});

// Real-time validation
document.querySelectorAll('input[required]').forEach(input => {
  input.addEventListener('blur', function() {
    if (!this.validity.valid) {
      this.style.borderColor = '#ef4444';
    } else {
      this.style.borderColor = '#10b981';
    }
  });
});`
  };

  const ariaAttributesDemo = {
    html: `<!-- ARIA Attributes Demo -->
<div class="accessibility-demo">
  <!-- Accessible button with icon -->
  <button class="btn-icon" 
          aria-label="Close dialog"
          aria-describedby="close-help">
    <span aria-hidden="true">×</span>
  </button>
  <p id="close-help" class="sr-only">Closes the current dialog window</p>
  
  <!-- Accessible navigation -->
  <nav role="navigation" aria-label="Main navigation">
    <ul>
      <li><a href="#" aria-current="page">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  
  <!-- Live regions for dynamic content -->
  <div class="status-container">
    <h2>Application Status</h2>
    <div role="status" 
         aria-live="polite" 
         aria-atomic="true"
         class="status-message">
      Ready
    </div>
    <div role="alert" 
         aria-live="assertive"
         class="alert-message"
         style="display: none;">
      Error occurred
    </div>
  </div>
  
  <!-- Accessible form with ARIA -->
  <form class="accessible-form">
    <div class="form-group">
      <label for="search">Search:</label>
      <input type="search" 
             id="search" 
             aria-describedby="search-help"
             aria-required="true"
             placeholder="Search products..." />
      <p id="search-help" class="help-text">
        Enter keywords to find products
      </p>
    </div>
    
    <div class="form-group">
      <label for="priority">Priority:</label>
      <select id="priority" 
              aria-label="Select task priority"
              required>
        <option value="">Choose priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    
    <!-- Progress indicator -->
    <div class="progress-container">
      <label id="progress-label">Upload Progress:</label>
      <div role="progressbar" 
           aria-labelledby="progress-label"
           aria-valuenow="0"
           aria-valuemin="0"
           aria-valuemax="100"
           class="progress-bar">
        <span class="progress-text">0%</span>
      </div>
    </div>
  </form>
  
  <!-- Accessible tabs -->
  <div class="tabs" role="tablist">
    <button role="tab" 
            aria-selected="true" 
            aria-controls="panel1"
            id="tab1"
            class="tab-button active">
      Overview
    </button>
    <button role="tab" 
            aria-selected="false" 
            aria-controls="panel2"
            id="tab2"
            class="tab-button">
      Details
    </button>
    <button role="tab" 
            aria-selected="false" 
            aria-controls="panel3"
            id="tab3"
            class="tab-button">
      Settings
    </button>
  </div>
  
  <div class="tab-panels">
    <div role="tabpanel" 
         id="panel1" 
         aria-labelledby="tab1"
         class="tab-panel active">
      <h3>Overview</h3>
      <p>This is the overview content.</p>
    </div>
    <div role="tabpanel" 
         id="panel2" 
         aria-labelledby="tab2"
         class="tab-panel"
         hidden>
      <h3>Details</h3>
      <p>This is the details content.</p>
    </div>
    <div role="tabpanel" 
         id="panel3" 
         aria-labelledby="tab3"
         class="tab-panel"
         hidden>
      <h3>Settings</h3>
      <p>This is the settings content.</p>
    </div>
  </div>
</div>`,
    css: `.accessibility-demo { 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 2rem; 
  background: rgba(30, 41, 59, 0.6); 
  border-radius: 8px; 
  border: 1px solid #374151; 
}
.btn-icon { 
  background: #ef4444; 
  color: white; 
  border: none; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px; 
  cursor: pointer; 
  font-size: 1.2rem; 
  margin-bottom: 2rem; 
}
.sr-only { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  white-space: nowrap; 
  border: 0; 
}
nav ul { 
  list-style: none; 
  padding: 0; 
  display: flex; 
  gap: 1rem; 
  margin-bottom: 2rem; 
}
nav a { 
  color: #e2e8f0; 
  text-decoration: none; 
  padding: 0.5rem 1rem; 
  border-radius: 4px; 
  transition: background-color 0.3s; 
}
nav a:hover, nav a[aria-current="page"] { 
  background: #3b82f6; 
}
.status-container { 
  margin-bottom: 2rem; 
  padding: 1rem; 
  background: rgba(15, 23, 42, 0.6); 
  border-radius: 6px; 
}
.status-message { 
  color: #10b981; 
  font-weight: 500; 
}
.alert-message { 
  color: #ef4444; 
  font-weight: 500; 
}
.accessible-form { 
  margin-bottom: 2rem; 
}
.form-group { 
  margin-bottom: 1rem; 
}
label { 
  display: block; 
  margin-bottom: 0.5rem; 
  color: #e2e8f0; 
  font-weight: 500; 
}
input, select { 
  width: 100%; 
  padding: 0.75rem; 
  border: 2px solid #374151; 
  border-radius: 6px; 
  background: rgba(15, 23, 42, 0.6); 
  color: #e2e8f0; 
}
.help-text { 
  font-size: 0.875rem; 
  color: #9ca3af; 
  margin-top: 0.25rem; 
}
.progress-container { 
  margin-top: 1rem; 
}
.progress-bar { 
  width: 100%; 
  height: 20px; 
  background: #374151; 
  border-radius: 10px; 
  overflow: hidden; 
  position: relative; 
}
.progress-bar::before { 
  content: ''; 
  position: absolute; 
  top: 0; 
  left: 0; 
  height: 100%; 
  width: 0%; 
  background: #10b981; 
  transition: width 0.3s; 
}
.progress-text { 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: white; 
  font-size: 0.75rem; 
  font-weight: 500; 
}
.tabs { 
  display: flex; 
  border-bottom: 2px solid #374151; 
  margin-bottom: 1rem; 
}
.tab-button { 
  background: none; 
  border: none; 
  color: #9ca3af; 
  padding: 1rem 1.5rem; 
  cursor: pointer; 
  border-bottom: 2px solid transparent; 
  transition: all 0.3s; 
}
.tab-button.active, 
.tab-button:hover { 
  color: #e2e8f0; 
  border-bottom-color: #3b82f6; 
}
.tab-panel { 
  padding: 1rem; 
  background: rgba(15, 23, 42, 0.6); 
  border-radius: 6px; 
}
.tab-panel h3 { 
  color: #60a5fa; 
  margin-bottom: 0.5rem; 
}`,
    js: `// Tab functionality
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide all panels
    tabPanels.forEach(panel => {
      panel.hidden = true;
    });
    
    // Remove active state from all buttons
    tabButtons.forEach(btn => {
      btn.setAttribute('aria-selected', 'false');
      btn.classList.remove('active');
    });
    
    // Show selected panel
    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    panel.hidden = false;
    
    // Set active state on clicked button
    button.setAttribute('aria-selected', 'true');
    button.classList.add('active');
  });
});

// Progress bar simulation
let progress = 0;
const progressBar = document.querySelector('[role="progressbar"]');
const progressText = document.querySelector('.progress-text');

const interval = setInterval(() => {
  progress += 5;
  if (progress > 100) progress = 0;
  
  progressBar.setAttribute('aria-valuenow', progress);
  progressText.textContent = progress + '%';
  progressBar.style.setProperty('--progress', progress + '%');
}, 200);

// Status updates
const statusMessage = document.querySelector('[role="status"]');
const alertMessage = document.querySelector('[role="alert"]');

setTimeout(() => {
  statusMessage.textContent = 'Processing your request...';
}, 2000);

setTimeout(() => {
  statusMessage.textContent = 'Almost done...';
}, 4000);

setTimeout(() => {
  statusMessage.textContent = 'Complete!';
  alertMessage.style.display = 'block';
  alertMessage.textContent = 'Task completed successfully!';
  
  setTimeout(() => {
    alertMessage.style.display = 'none';
    statusMessage.textContent = 'Ready';
  }, 3000);
}, 6000);

// Form validation
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  if (e.target.value.length >= 3) {
    statusMessage.textContent = 'Searching...';
  } else {
    statusMessage.textContent = 'Ready';
  }
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

    <!-- Mouse Events -->
    <section class="event-section">
      <h2>🖱️ Mouse Events</h2>
      <div class="demo-area">
        <div class="mouse-demo-box" 
             onmouseover="this.style.background='#3b82f6'"
             onmouseout="this.style.background='#1e293b'"
             onmousedown="this.style.transform='scale(0.95)'"
             onmouseup="this.style.transform='scale(1)'"
             onclick="logEvent('Box clicked!', 'click')"
             ondblclick="logEvent('Box double-clicked!', 'click')"
             oncontextmenu="logEvent('Right-clicked!', 'context'); return false">
          <p>Hover, Click, Double-click, Right-click</p>
        </div>
        
        <button class="demo-btn" 
                onclick="logEvent('Button clicked!', 'click')"
                onmousedown="logEvent('Mouse down', 'mouse')"
                onmouseup="logEvent('Mouse up', 'mouse')"
                onmouseover="logEvent('Mouse over', 'mouse')"
                onmouseout="logEvent('Mouse out', 'mouse')">
          Interactive Button
        </button>
      </div>
    </section>

    <!-- Keyboard Events -->
    <section class="event-section">
      <h2>⌨️ Keyboard Events</h2>
      <div class="demo-area">
        <input type="text" 
               class="keyboard-input"
               placeholder="Type here to see keyboard events..."
               onkeydown="logEvent('Key down: ' + event.key, 'keyboard')"
               onkeyup="logEvent('Key up: ' + event.key, 'keyboard')"
               onkeypress="logEvent('Key pressed: ' + event.key, 'keyboard')"
               onfocus="logEvent('Input focused', 'focus')"
               onblur="logEvent('Input blurred', 'focus')" />
        
        <div class="keyboard-shortcuts" 
             tabindex="0"
             onkeydown="handleKeyboardShortcuts(event)">
          <p>Click here and try:</p>
          <ul>
            <li>Ctrl+S: Save</li>
            <li>Ctrl+Z: Undo</li>
            <li>Enter: Submit</li>
            <li>Esc: Cancel</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Form Events -->
    <section class="event-section">
      <h2>📝 Form Events</h2>
      <div class="demo-area">
        <form class="event-form"
              onsubmit="handleFormSubmit(event)"
              onreset="logEvent('Form reset', 'form')">
          
          <input type="text" 
                 name="username"
                 placeholder="Username"
                 oninput="logEvent('Input changed: ' + this.value, 'form')"
                 onchange="logEvent('Input changed (blur): ' + this.value, 'form')"
                 onfocus="logEvent('Username field focused', 'focus')"
                 onblur="logEvent('Username field blurred', 'focus')" />
          
          <select name="options"
                  onchange="logEvent('Option changed: ' + this.value, 'form')"
                  onfocus="logEvent('Select focused', 'focus')">
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          
          <textarea placeholder="Your message..."
                    oninput="logEvent('Textarea: ' + this.value.length + ' characters', 'form')"
                    onselect="logEvent('Text selected', 'form')"></textarea>
          
          <div class="form-actions">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </section>

    <!-- Window Events -->
    <section class="event-section">
      <h2>🪟 Window Events</h2>
      <div class="demo-area">
        <div class="window-info">
          <p>Window size: <span id="window-size">-</span></p>
          <p>Scroll position: <span id="scroll-position">-</span></p>
          <p>Page visibility: <span id="page-visibility">-</span></p>
        </div>
        
        <div class="scroll-demo">
          <p>Scroll this area to see scroll events:</p>
          <div class="scroll-content"
               onscroll="logEvent('Scrolled to: ' + this.scrollTop + 'px', 'scroll')">
            <div class="scroll-box">Scroll me!</div>
            <div class="scroll-box">Keep scrolling!</div>
            <div class="scroll-box">Almost there...</div>
            <div class="scroll-box">Great job!</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drag and Drop -->
    <section class="event-section">
      <h2>🎯 Drag & Drop Events</h2>
      <div class="demo-area">
        <div class="drag-container">
          <div class="drag-source">
            <h3>Drag these items:</h3>
            <div class="draggable-item" 
                 draggable="true"
                 ondragstart="handleDragStart(event)"
                 ondragend="handleDragEnd(event)">
              📦 Package 1
            </div>
            <div class="draggable-item" 
                 draggable="true"
                 ondragstart="handleDragStart(event)"
                 ondragend="handleDragEnd(event)">
              📦 Package 2
            </div>
            <div class="draggable-item" 
                 draggable="true"
                 ondragstart="handleDragStart(event)"
                 ondragend="handleDragEnd(event)">
              📦 Package 3
            </div>
          </div>
          
          <div class="drop-zone"
               ondragover="handleDragOver(event)"
               ondrop="handleItemDrop(event)"
               ondragenter="logEvent('Item entered drop zone', 'drag')"
               ondragleave="logEvent('Item left drop zone', 'drag')">
            <h3>Drop Zone</h3>
            <p>Drop items here</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Log -->
    <section class="event-section">
      <h2>📋 Event Log</h2>
      <div class="log-container">
        <div id="event-log" class="event-log">
          <div class="log-entry">Event log will appear here...</div>
        </div>
        <button class="clear-btn" onclick="clearLog()">Clear Log</button>
      </div>
    </section>
  </div>

  <script>
    // Global variables
    let draggedElement = null;

    // Window event listeners
    window.addEventListener('resize', updateWindowSize);
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('visibilitychange', updatePageVisibility);
    window.addEventListener('load', () => logEvent('Page fully loaded', 'system'));
    window.addEventListener('beforeunload', (e) => {
      logEvent('Page is unloading', 'system');
    });

    // Initialize window info
    updateWindowSize();
    updateScrollPosition();
    updatePageVisibility();

    // Keyboard shortcuts handler
    function handleKeyboardShortcuts(event) {
      if (event.ctrlKey || event.metaKey) {
        switch(event.key) {
          case 's':
            event.preventDefault();
            logEvent('Ctrl+S: Save triggered', 'keyboard');
            break;
          case 'z':
            event.preventDefault();
            logEvent('Ctrl+Z: Undo triggered', 'keyboard');
            break;
        }
      } else {
        switch(event.key) {
          case 'Enter':
            logEvent('Enter: Submit triggered', 'keyboard');
            break;
          case 'Escape':
            logEvent('Esc: Cancel triggered', 'keyboard');
            break;
        }
      }
    }

    // Form submission handler
    function handleFormSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      logEvent('Form submitted with data: ' + JSON.stringify(data), 'form');
    }

    // Window info updates
    function updateWindowSize() {
      const sizeElement = document.getElementById('window-size');
      sizeElement.textContent = window.innerWidth + 'x' + window.innerHeight;
    }

    function updateScrollPosition() {
      const scrollElement = document.getElementById('scroll-position');
      scrollElement.textContent = window.pageYOffset + 'px';
    }

    function updatePageVisibility() {
      const visibilityElement = document.getElementById('page-visibility');
      visibilityElement.textContent = document.hidden ? 'hidden' : 'visible';
    }

    // Drag and Drop handlers
    function handleDragStart(event) {
      draggedElement = event.target;
      event.target.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', event.target.innerHTML);
      logEvent('Started dragging: ' + event.target.id, 'drag');
    }

    function handleDragEnd(event) {
      event.target.classList.remove('dragging');
      logEvent('Stopped dragging: ' + event.target.id, 'drag');
    }

    function handleDragOver(event) {
      event.preventDefault();
      event.currentTarget.classList.add('drag-over');
    }

    function handleItemDrop(event) {
      event.preventDefault();
      event.currentTarget.classList.remove('drag-over');
      
      if (draggedElement) {
        event.currentTarget.appendChild(draggedElement);
        logEvent('Dropped ' + draggedElement.id + ' in target', 'drag');
        draggedElement = null;
      }
    }

    // Event Logging
    function logEvent(message, category = 'info') {
      const log = document.getElementById('event-log');
      const timestamp = new Date().toLocaleTimeString();
      const entry = document.createElement('div');
      entry.className = 'log-entry ' + category;
      entry.textContent = '[' + timestamp + '] ' + message;
      
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
    }
  </script>
</body>
</html>`,
    css: `.event-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
}

.showcase-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  border: 1px solid #374151;
}

.showcase-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #60a5fa;
}

.subtitle {
  font-size: 1.2rem;
  color: #9ca3af;
}

.event-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  border: 1px solid #374151;
}

.event-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #60a5fa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-area {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.mouse-demo-box {
  width: 200px;
  height: 150px;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.mouse-demo-box p {
  margin: 0;
  font-size: 0.9rem;
}

.demo-btn {
  padding: 1rem 2rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.keyboard-input {
  width: 300px;
  padding: 0.75rem;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 1rem;
}

.keyboard-shortcuts {
  padding: 1.5rem;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.keyboard-shortcuts:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.keyboard-shortcuts ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.5rem;
}

.keyboard-shortcuts li {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #9ca3af;
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
}

.event-form input,
.event-form select,
.event-form textarea {
  padding: 0.75rem;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 1rem;
}

.event-form input:focus,
.event-form select:focus,
.event-form textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-actions {
  display: flex;
  gap: 1rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-actions button[type="submit"] {
  background: #10b981;
  color: white;
}

.form-actions button[type="reset"] {
  background: #6b7280;
  color: white;
}

.window-info {
  padding: 1.5rem;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
}

.window-info p {
  margin: 0.5rem 0;
  font-family: monospace;
}

.window-info span {
  color: #60a5fa;
  font-weight: bold;
}

.scroll-demo {
  flex: 1;
}

.scroll-content {
  height: 200px;
  overflow-y: auto;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
  padding: 1rem;
}

.scroll-box {
  height: 80px;
  background: #374151;
  border-radius: 6px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.drag-container {
  display: flex;
  gap: 2rem;
  width: 100%;
}

.drag-source,
.drop-zone {
  flex: 1;
  padding: 1.5rem;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
  min-height: 200px;
}

.draggable-item {
  background: #3b82f6;
  color: white;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 6px;
  cursor: move;
  transition: all 0.3s ease;
  user-select: none;
}

.draggable-item:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.draggable-item.dragging {
  opacity: 0.5;
  transform: rotate(5deg);
}

.drop-zone.drag-over {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.log-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-log {
  height: 300px;
  overflow-y: auto;
  background: #1e293b;
  border: 2px solid #374151;
  border-radius: 8px;
  padding: 1rem;
  font-family: monospace;
  font-size: 0.9rem;
}

.log-entry {
  padding: 0.25rem 0;
  border-bottom: 1px solid #374151;
}

.log-entry:last-child {
  border-bottom: none;
}

.log-entry.click {
  color: #60a5fa;
}

.log-entry.keyboard {
  color: #10b981;
}

.log-entry.form {
  color: #f59e0b;
}

.log-entry.focus {
  color: #8b5cf6;
}

.log-entry.mouse {
  color: #ef4444;
}

.log-entry.drag {
  color: #06b6d4;
}

.log-entry.scroll {
  color: #84cc16;
}

.log-entry.system {
  color: #f97316;
}

.clear-btn {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.clear-btn:hover {
  background: #dc2626;
}

/* Responsive design */
@media (max-width: 768px) {
  .demo-area {
    flex-direction: column;
  }
  
  .drag-container {
    flex-direction: column;
  }
  
  .keyboard-input {
    width: 100%;
  }
}`,
    js: ''
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="HTML Basics"
        title="HTML Attributes"
        subtitle="Customizing your HTML elements with extra information and features"
      />

      {/* ==================== ATTRIBUTE SYNTAX ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-blue-600" />
            Attribute Syntax
          </CardTitle>
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
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  transition: all 0.3s;
  display: inline-block;
  margin: 1rem 0;
}

a:hover {
  background: #3b82f6;
  color: white;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background: #2563eb;
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
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'ID & Class Selectors',
              'Custom Data Storage',
              'Language & Direction',
              'Styling & Tooltips'
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
            <Link className="w-6 h-6 text-emerald-600" />
            Link Attributes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'External Links',
              'Anchor Navigation',
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
            <Image className="w-6 h-6 text-purple-600" />
            Image Attributes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'Alt Text & Accessibility',
              'Responsive Images',
              'Lazy Loading',
              'Dimensions'
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
            <FileText className="w-6 h-6 text-amber-600" />
            Form Attributes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'Input Validation',
              'Form Submission',
              'File Upload',
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
            <Users className="w-6 h-6 text-blue-600" />
            ARIA Accessibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'Screen Reader Support',
              'Live Regions',
              'Keyboard Navigation',
              'Semantic Roles'
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
            <MousePointer className="w-6 h-6 text-purple-600" />
            Event Attributes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            features={[
              'Mouse Events',
              'Keyboard Events',
              'Form Events',
              'Window Events'
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

      {/* ==================== COMPREHENSIVE SHOWCASE ==================== */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-600" />
            Comprehensive Attributes Showcase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🌍 Global Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">id, class, style, title, data-*, lang, dir</p>
              </div>
              <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">🔗 Link Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">href, target, rel, download, type, media</p>
              </div>
              <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">🖼️ Image Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">src, alt, width, height, loading, decoding</p>
              </div>
              <div className="p-4 border border-amber-200 dark:border-amber-800 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">📝 Form Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">action, method, enctype, required, placeholder</p>
              </div>
              <div className="p-4 border border-cyan-200 dark:border-cyan-800 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">💾 Data Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">data-*, custom data storage for JavaScript</p>
              </div>
              <div className="p-4 border border-indigo-200 dark:border-indigo-800 rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">♿ ARIA Attributes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">role, aria-*, accessibility enhancement</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                💡 Pro Tips for HTML Attributes
              </h4>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Always include descriptive <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">alt</code> attributes for images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">data-*</code> attributes to store custom data for JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Implement ARIA attributes for better accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">loading="lazy"</code> for better performance with images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Combine multiple attributes to create rich, interactive experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

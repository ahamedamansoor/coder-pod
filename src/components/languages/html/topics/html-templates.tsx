'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileCode, Copy, Layers, Sparkles, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlTemplatesProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlTemplates({ onOpenWebPlayground }: HtmlTemplatesProps) {
  const basicTemplateWithWebComponentExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Templates in Web Components</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
      }
    }
    
    h1 {
      color: #667eea;
      text-align: center;
      margin-bottom: 30px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a5b4fc;
      }
    }
    
    button {
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      margin: 10px 5px;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    .info {
      margin-top: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 12px;
      border-left: 4px solid #f59e0b;
    }

    @media (prefers-color-scheme: dark) {
      .info {
        background: linear-gradient(135deg, #78350f 0%, #5a2e0d 100%);
      }
    }
    
    .info strong {
      color: #92400e;
      display: block;
      margin-bottom: 8px;
    }

    @media (prefers-color-scheme: dark) {
      .info strong {
        color: #fcd34d;
      }
    }
    
    .info p {
      color: #78350f;
      font-size: 14px;
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .info p {
        color: #fde68a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Templates + Web Components</h1>
    
    <!-- Template stored in HTML -->
    <template id="product-card-template">
      <style>
        .product-card {
          padding: 24px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          border-left: 4px solid #3b82f6;
          margin: 16px 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        @media (prefers-color-scheme: dark) {
          .product-card {
            background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
          }
        }
        
        .product-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 8px;
        }

        @media (prefers-color-scheme: dark) {
          .product-name {
            color: #93c5fd;
          }
        }
        
        .product-price {
          font-size: 1.25rem;
          color: #10b981;
          font-weight: bold;
          margin-bottom: 12px;
        }

        @media (prefers-color-scheme: dark) {
          .product-price {
            color: #6ee7b7;
          }
        }
        
        .product-description {
          color: #475569;
          line-height: 1.6;
        }

        @media (prefers-color-scheme: dark) {
          .product-description {
            color: #cbd5e1;
          }
        }
      </style>
      
      <div class="product-card">
        <div class="product-name"></div>
        <div class="product-price"></div>
        <div class="product-description"></div>
      </div>
    </template>
    
    <!-- Use the custom element -->
    <div id="products"></div>
    
    <button onclick="addProduct('Laptop', 999.99, 'High-performance laptop with 16GB RAM')">
      Add Laptop
    </button>
    <button onclick="addProduct('Mouse', 29.99, 'Wireless ergonomic mouse')">
      Add Mouse
    </button>
    <button onclick="addProduct('Keyboard', 79.99, 'Mechanical RGB keyboard')">
      Add Keyboard
    </button>
    
    <div class="info">
      <strong>💡 How It Works:</strong>
      <p>
        The template defines reusable HTML structure. The Web Component clones it,
        fills in the data, and uses Shadow DOM for style encapsulation!
      </p>
    </div>
  </div>

  <script>
    class ProductCard extends HTMLElement {
      connectedCallback() {
        // Get the template
        const template = document.getElementById('product-card-template');
        
        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Clone template content
        const content = template.content.cloneNode(true);
        
        // Fill in the data from attributes
        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        const description = this.getAttribute('description');
        
        content.querySelector('.product-name').textContent = name;
        content.querySelector('.product-price').textContent = '$' + price;
        content.querySelector('.product-description').textContent = description;
        
        // Attach to Shadow DOM
        shadow.appendChild(content);
      }
    }
    
    // Register the custom element
    customElements.define('product-card', ProductCard);
    
    // Helper function to add products
    function addProduct(name, price, description) {
      const container = document.getElementById('products');
      const card = document.createElement('product-card');
      card.setAttribute('name', name);
      card.setAttribute('price', price);
      card.setAttribute('description', description);
      container.appendChild(card);
    }
  </script>
</body>
</html>`;

  const externalTemplateExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template Inside Web Component</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #0a2e1a 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .controls {
      background: white;
      padding: 24px;
      border-radius: 16px;
      margin-bottom: 24px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .controls {
        background: #1e293b;
      }
    }
    
    input, select {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
    }

    @media (prefers-color-scheme: dark) {
      input, select {
        background: #0f172a;
        color: #f1f5f9;
        border-color: #334155;
      }
    }
    
    input:focus, select:focus {
      outline: none;
      border-color: #10b981;
    }
    
    button {
      width: 100%;
      padding: 14px;
      margin-top: 16px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    #alerts {
      display: grid;
      gap: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚨 Alert System</h1>
    
    <div class="controls">
      <h3 style="color: #10b981; margin-bottom: 16px;">Create New Alert</h3>
      <input type="text" id="alert-title" placeholder="Alert Title">
      <input type="text" id="alert-message" placeholder="Alert Message">
      <select id="alert-type">
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
        <option value="info">Info</option>
      </select>
      <button onclick="createAlert()">Create Alert</button>
    </div>
    
    <div id="alerts"></div>
  </div>

  <script>
    class AlertBox extends HTMLElement {
      connectedCallback() {
        // Template defined INSIDE the component
        const template = document.createElement('template');
        template.innerHTML = \`
          <style>
            :host {
              display: block;
              animation: slideIn 0.3s ease;
            }
            
            @keyframes slideIn {
              from { opacity: 0; transform: translateX(-20px); }
              to { opacity: 1; transform: translateX(0); }
            }
            
            .alert {
              padding: 20px;
              border-radius: 12px;
              border-left: 4px solid;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              display: flex;
              justify-content: space-between;
              align-items: start;
            }
            
            .alert.success {
              background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
              border-color: #10b981;
            }
            
            .alert.warning {
              background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
              border-color: #f59e0b;
            }
            
            .alert.error {
              background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
              border-color: #ef4444;
            }
            
            .alert.info {
              background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
              border-color: #3b82f6;
            }
            
            .content {
              flex: 1;
            }
            
            .title {
              font-size: 1.125rem;
              font-weight: bold;
              margin-bottom: 4px;
            }
            
            .success .title { color: #065f46; }
            .warning .title { color: #92400e; }
            .error .title { color: #991b1b; }
            .info .title { color: #1e40af; }
            
            .message {
              font-size: 0.875rem;
              line-height: 1.6;
            }
            
            .success .message { color: #047857; }
            .warning .message { color: #78350f; }
            .error .message { color: #b91c1c; }
            .info .message { color: #1e40af; }
            
            .close-btn {
              background: none;
              border: none;
              font-size: 1.5rem;
              cursor: pointer;
              opacity: 0.6;
              padding: 0 8px;
              transition: opacity 0.2s;
            }
            
            .close-btn:hover {
              opacity: 1;
            }
          </style>
          
          <div class="alert">
            <div class="content">
              <div class="title"></div>
              <div class="message"></div>
            </div>
            <button class="close-btn">×</button>
          </div>
        \`;
        
        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Clone template
        const content = template.content.cloneNode(true);
        
        // Get attributes
        const type = this.getAttribute('type') || 'info';
        const title = this.getAttribute('title') || 'Alert';
        const message = this.getAttribute('message') || '';
        
        // Fill in data
        const alertDiv = content.querySelector('.alert');
        alertDiv.classList.add(type);
        content.querySelector('.title').textContent = title;
        content.querySelector('.message').textContent = message;
        
        // Add close functionality
        content.querySelector('.close-btn').addEventListener('click', () => {
          this.remove();
        });
        
        // Attach to Shadow DOM
        shadow.appendChild(content);
      }
    }
    
    customElements.define('alert-box', AlertBox);
    
    // Create alert function
    function createAlert() {
      const title = document.getElementById('alert-title').value;
      const message = document.getElementById('alert-message').value;
      const type = document.getElementById('alert-type').value;
      
      if (!title || !message) {
        alert('Please fill in all fields!');
        return;
      }
      
      const container = document.getElementById('alerts');
      const alertBox = document.createElement('alert-box');
      alertBox.setAttribute('type', type);
      alertBox.setAttribute('title', title);
      alertBox.setAttribute('message', message);
      
      container.prepend(alertBox);
      
      // Clear inputs
      document.getElementById('alert-title').value = '';
      document.getElementById('alert-message').value = '';
    }
  </script>
</body>
</html>`;

  const multipleTemplatesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Templates Pattern</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 40px;
    }
    
    button {
      padding: 14px 28px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
      font-size: 16px;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    .btn-user {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
    }
    
    .btn-product {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
    }
    
    .btn-message {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
    }
    
    .grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 Multi-Template Component System</h1>
    
    <div class="controls">
      <button class="btn-user" onclick="addCard('user')">Add User Card</button>
      <button class="btn-product" onclick="addCard('product')">Add Product Card</button>
      <button class="btn-message" onclick="addCard('message')">Add Message Card</button>
    </div>
    
    <div class="grid" id="cards"></div>
  </div>

  <script>
    // Multi-template web component
    class UniversalCard extends HTMLElement {
      // Store templates as static property
      static templates = {
        user: \`
          <style>
            .card {
              background: white;
              padding: 24px;
              border-radius: 16px;
              border-top: 4px solid #3b82f6;
              box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
            }
            .icon { font-size: 3rem; text-align: center; margin-bottom: 16px; }
            .title { color: #1e40af; font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; }
            .subtitle { color: #3b82f6; font-size: 0.875rem; margin-bottom: 12px; }
            .content { color: #64748b; line-height: 1.6; }
          </style>
          <div class="card">
            <div class="icon">👤</div>
            <div class="title">User Name</div>
            <div class="subtitle">user@example.com</div>
            <div class="content">Active since 2024</div>
          </div>
        \`,
        
        product: \`
          <style>
            .card {
              background: white;
              padding: 24px;
              border-radius: 16px;
              border-top: 4px solid #10b981;
              box-shadow: 0 8px 24px rgba(16, 185, 129, 0.2);
            }
            .icon { font-size: 3rem; text-align: center; margin-bottom: 16px; }
            .title { color: #065f46; font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; }
            .subtitle { color: #10b981; font-size: 1.25rem; font-weight: bold; margin-bottom: 12px; }
            .content { color: #64748b; line-height: 1.6; }
          </style>
          <div class="card">
            <div class="icon">🛍️</div>
            <div class="title">Product Name</div>
            <div class="subtitle">$99.99</div>
            <div class="content">High quality product with excellent features</div>
          </div>
        \`,
        
        message: \`
          <style>
            .card {
              background: white;
              padding: 24px;
              border-radius: 16px;
              border-top: 4px solid #8b5cf6;
              box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2);
            }
            .icon { font-size: 3rem; text-align: center; margin-bottom: 16px; }
            .title { color: #5b21b6; font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; }
            .subtitle { color: #8b5cf6; font-size: 0.875rem; margin-bottom: 12px; }
            .content { color: #64748b; line-height: 1.6; }
          </style>
          <div class="card">
            <div class="icon">💬</div>
            <div class="title">Message Title</div>
            <div class="subtitle">2 minutes ago</div>
            <div class="content">This is a sample message with interesting content!</div>
          </div>
        \`
      };
      
      connectedCallback() {
        const type = this.getAttribute('type') || 'user';
        
        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Get the appropriate template
        const templateHTML = UniversalCard.templates[type];
        
        if (templateHTML) {
          shadow.innerHTML = templateHTML;
        } else {
          shadow.innerHTML = '<div>Unknown card type</div>';
        }
      }
    }
    
    customElements.define('universal-card', UniversalCard);
    
    let cardCount = { user: 1, product: 1, message: 1 };
    
    function addCard(type) {
      const container = document.getElementById('cards');
      const card = document.createElement('universal-card');
      card.setAttribute('type', type);
      
      container.appendChild(card);
      
      // Animate in
      card.style.animation = 'fadeIn 0.5s ease';
      cardCount[type]++;
    }
    
    // Add initial cards
    addCard('user');
    addCard('product');
    addCard('message');
  </script>
  
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
  </style>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="12. Web Components"
        title="HTML Templates in Web Components"
        description="Learn how to use HTML templates with Web Components for powerful, reusable patterns"
        colorTheme="blue"
      />

      {/* What are Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Templates + Web Components
          </CardTitle>
          <CardDescription>
            Combining templates with custom elements for maximum reusability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            HTML templates work perfectly with Web Components. You can define a template once in your HTML,
            then clone and use it multiple times within your custom elements. When combined with Shadow DOM,
            you get truly encapsulated, reusable components.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Perfect Partnership 🤝</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Templates provide the structure, Custom Elements add the behavior, and Shadow DOM provides
              encapsulation. Together, they create powerful, self-contained components!
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Template</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Defines reusable HTML structure
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Copy className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Clone & Fill</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Clone template and populate with data
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Shadow DOM</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Encapsulates styles and markup
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pattern 1: External Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. External Template Pattern
          </CardTitle>
          <CardDescription>
            Template defined in HTML, used by Web Component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicTemplateWithWebComponentExample}
            css=""
            title="External Template"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎯 How It Works:</h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200 list-decimal list-inside">
              <li>Define <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">&lt;template&gt;</code> in HTML with ID</li>
              <li>Custom element finds template by ID</li>
              <li>Clones template content with <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">cloneNode(true)</code></li>
              <li>Fills cloned content with dynamic data</li>
              <li>Attaches to Shadow DOM for encapsulation</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Pattern 2: Internal Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Copy className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Internal Template Pattern
          </CardTitle>
          <CardDescription>
            Template created inside the Web Component class
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={externalTemplateExample}
            css=""
            title="Internal Template"
            colorTheme="green"
          />
          
          <div className="mt-4 space-y-3">
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900 dark:text-green-100">Advantages</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200 text-sm">
                • Self-contained - no external HTML needed<br/>
                • Easier to distribute as a library<br/>
                • Template logic stays with component<br/>
                • Can use template literals for dynamic templates
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Pattern 3: Multiple Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <Layers className="h-5 w-5" />
            </div>
            3. Multiple Templates Pattern
          </CardTitle>
          <CardDescription>
            One component with different template variations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multipleTemplatesExample}
            css=""
            title="Multi-Template Component"
            colorTheme="purple"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🎨 When to Use:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Card variants:</strong> Different card types with same structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Alert types:</strong> Success, warning, error, info alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Button styles:</strong> Primary, secondary, danger buttons</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use external templates for simple, static structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use internal templates for self-contained components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Always use <code>cloneNode(true)</code> for deep clones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Include styles in template for encapsulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use templates with Shadow DOM for best results</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Modifying the original template (always clone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using innerHTML for dynamic content (XSS risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Creating templates without IDs (hard to find)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting to attach cloned content to Shadow DOM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using templates without Web Components</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Template Patterns Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold">Pattern</th>
                  <th className="text-left py-3 px-4 font-semibold">Pros</th>
                  <th className="text-left py-3 px-4 font-semibold">Cons</th>
                  <th className="text-left py-3 px-4 font-semibold">Use When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">External</td>
                  <td className="py-3 px-4 text-muted-foreground">Easy to update, Visible in HTML</td>
                  <td className="py-3 px-4 text-muted-foreground">Requires HTML setup</td>
                  <td className="py-3 px-4 text-muted-foreground">Simple, static templates</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-green-600 dark:text-green-400">Internal</td>
                  <td className="py-3 px-4 text-muted-foreground">Self-contained, Portable</td>
                  <td className="py-3 px-4 text-muted-foreground">Harder to modify</td>
                  <td className="py-3 px-4 text-muted-foreground">Library components</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-purple-600 dark:text-purple-400">Multiple</td>
                  <td className="py-3 px-4 text-muted-foreground">Flexible, DRY code</td>
                  <td className="py-3 px-4 text-muted-foreground">More complex</td>
                  <td className="py-3 px-4 text-muted-foreground">Variants needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          HTML templates with Web Components are supported in all modern browsers.
          For maximum compatibility, use both features together with Shadow DOM.
        </AlertDescription>
      </Alert>
    </div>
  );
}

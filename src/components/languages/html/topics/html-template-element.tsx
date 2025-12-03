'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileCode, Copy, Layers, Code, CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlTemplateElementProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlTemplateElement({ onOpenWebPlayground }: HtmlTemplateElementProps) {
  const basicTemplateExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template Element Basics</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #667eea;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .controls {
      text-align: center;
      margin: 30px 0;
    }
    
    button {
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    #card-container {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      margin-top: 30px;
    }
    
    .card {
      padding: 24px;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border-radius: 12px;
      border-left: 4px solid #667eea;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .card h3 {
      color: #667eea;
      margin-bottom: 12px;
      font-size: 1.3rem;
    }
    
    .card p {
      color: #4b5563;
      line-height: 1.6;
    }
    
    .info {
      padding: 16px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      margin-top: 20px;
      border-left: 4px solid #f59e0b;
    }
    
    .info strong {
      color: #92400e;
      display: block;
      margin-bottom: 4px;
    }
    
    .info p {
      color: #78350f;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7c2d12 0%, #92400e 100%);
      }
      
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #fbbf24;
      }
      
      .demo-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .demo-box h2 {
        color: #f3f4f6;
      }
      
      .info {
        background: #78350f;
        border-left-color: #fbbf24;
      }
      
      .info strong {
        color: #fde68a;
      }
      
      .info p {
        color: #fed7aa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📋 Template Element Demo</h1>
    <p style="text-align: center; color: #6b7280; margin-bottom: 20px;">
      Click the button to create cards from the template!
    </p>
    
    <div class="controls">
      <button onclick="addCard()">✨ Add Card from Template</button>
    </div>
    
    <!-- Template - Not rendered on page load -->
    <template id="card-template">
      <div class="card">
        <h3>Card Title</h3>
        <p>This content was cloned from a template element!</p>
      </div>
    </template>
    
    <!-- Container for cloned cards -->
    <div id="card-container"></div>
    
    <div class="info">
      <strong>💡 How It Works:</strong>
      <p>The template element's content is hidden but can be cloned and inserted into the DOM using JavaScript.</p>
    </div>
  </div>

  <script>
    let cardCount = 0;
    
    function addCard() {
      // Get the template
      const template = document.getElementById('card-template');
      
      // Clone the template content
      const clone = template.content.cloneNode(true);
      
      // Customize the cloned content
      cardCount++;
      const card = clone.querySelector('.card');
      card.querySelector('h3').textContent = \`Card #\${cardCount}\`;
      card.querySelector('p').textContent = \`This is card number \${cardCount} created from the template!\`;
      
      // Add to the container
      document.getElementById('card-container').appendChild(clone);
    }
  </script>
</body>
</html>`;

  const dynamicListExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic List with Template</title>
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
    
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    
    .form-card {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      margin-bottom: 24px;
    }
    
    .form-group {
      margin-bottom: 16px;
    }
    
    label {
      display: block;
      color: #1f2937;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    input, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      transition: border-color 0.2s;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #10b981;
    }
    
    textarea {
      resize: vertical;
      min-height: 80px;
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
    }
    
    .list-container {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .list-container h2 {
      color: #10b981;
      margin-bottom: 20px;
    }
    
    .empty-state {
      text-align: center;
      padding: 40px;
      color: #9ca3af;
    }
    
    .product-item {
      padding: 20px;
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      border-radius: 12px;
      border-left: 4px solid #10b981;
      margin-bottom: 16px;
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 12px;
    }
    
    .product-name {
      color: #065f46;
      font-size: 1.3rem;
      font-weight: bold;
    }
    
    .product-price {
      background: #10b981;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 1.1rem;
    }
    
    .product-description {
      color: #047857;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: #059669;
    }
    
    .delete-btn {
      padding: 6px 16px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      transition: background 0.2s;
    }
    
    .delete-btn:hover {
      background: #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
      
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #34d399;
      }
      
      .form-card, .product-list-container {
        background: #0f172a;
        border-color: #475569;
      }
      
      input {
        background: #1e293b;
        border-color: #475569;
        color: #e2e8f0;
      }
      
      input::placeholder {
        color: #64748b;
      }
      
      .add-btn {
        background: linear-gradient(135deg, #047857 0%, #059669 100%);
      }
      
      .product-item {
        background: #1e293b;
        border-color: #475569;
      }
      
      .product-item h3 {
        color: #f3f4f6;
      }
      
      .product-item p {
        color: #94a3b8;
      }
      
      .delete-btn {
        background: #991b1b;
      }
      
      .delete-btn:hover {
        background: #dc2626;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛍️ Product List Manager</h1>
    
    <div class="form-card">
      <h2 style="color: #10b981; margin-bottom: 20px;">Add New Product</h2>
      <form id="product-form">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input type="text" id="name" placeholder="Enter product name" required>
        </div>
        
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" placeholder="0.00" step="0.01" required>
        </div>
        
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" placeholder="Enter product description" required></textarea>
        </div>
        
        <button type="submit">➕ Add Product</button>
      </form>
    </div>
    
    <!-- Product Template -->
    <template id="product-template">
      <div class="product-item">
        <div class="product-header">
          <div class="product-name"></div>
          <div class="product-price"></div>
        </div>
        <div class="product-description"></div>
        <div class="product-footer">
          <span class="product-id"></span>
          <button class="delete-btn" onclick="deleteProduct(this)">🗑️ Delete</button>
        </div>
      </div>
    </template>
    
    <div class="list-container">
      <h2>📦 Product List</h2>
      <div id="products">
        <div class="empty-state">
          No products yet. Add one above! 👆
        </div>
      </div>
    </div>
  </div>

  <script>
    let productId = 0;
    const form = document.getElementById('product-form');
    const productsContainer = document.getElementById('products');
    const template = document.getElementById('product-template');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Remove empty state if exists
      const emptyState = productsContainer.querySelector('.empty-state');
      if (emptyState) emptyState.remove();
      
      // Get form values
      const name = document.getElementById('name').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
      
      // Clone template
      const clone = template.content.cloneNode(true);
      
      // Fill in the data
      productId++;
      clone.querySelector('.product-name').textContent = name;
      clone.querySelector('.product-price').textContent = '$' + parseFloat(price).toFixed(2);
      clone.querySelector('.product-description').textContent = description;
      clone.querySelector('.product-id').textContent = 'ID: #' + productId;
      
      // Add to DOM
      productsContainer.appendChild(clone);
      
      // Reset form
      form.reset();
    });
    
    function deleteProduct(btn) {
      btn.closest('.product-item').remove();
      
      // Show empty state if no products
      if (productsContainer.children.length === 0) {
        productsContainer.innerHTML = '<div class="empty-state">No products yet. Add one above! 👆</div>';
      }
    }
  </script>
</body>
</html>`;

  const webComponentExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template with Web Components</title>
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
    
    .grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    
    /* User Card Shadow DOM Styles */
    .user-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    
    .user-card:hover {
      transform: translateY(-4px);
    }
    
    .card-header {
      padding: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }
    
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: white;
      color: #667eea;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: bold;
      margin: 0 auto 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .user-name {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 4px;
    }
    
    .user-role {
      opacity: 0.9;
      font-size: 14px;
    }
    
    .card-body {
      padding: 24px;
    }
    
    .info-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: #f9fafb;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    
    .info-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
    
    .info-content {
      flex: 1;
    }
    
    .info-label {
      font-size: 12px;
      color: #6b7280;
      margin-bottom: 2px;
    }
    
    .info-value {
      color: #1f2937;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
      
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #60a5fa;
      }
      
      p {
        color: #94a3b8;
      }
      
      .user-card {
        background: #0f172a;
        border-color: #475569;
      }
      
      .card-header {
        background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
      }
      
      .avatar {
        background: #1e293b;
        color: #60a5fa;
      }
      
      .user-name {
        color: #f3f4f6;
      }
      
      .info-row {
        background: #1e293b;
      }
      
      .info-label {
        color: #94a3b8;
      }
      
      .info-value {
        color: #f3f4f6;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👥 Team Members</h1>
    
    <!-- User Card Template -->
    <template id="user-card-template">
      <div class="user-card">
        <div class="card-header">
          <div class="avatar"></div>
          <div class="user-name"></div>
          <div class="user-role"></div>
        </div>
        <div class="card-body">
          <div class="info-row">
            <div class="info-icon">📧</div>
            <div class="info-content">
              <div class="info-label">Email</div>
              <div class="info-value user-email"></div>
            </div>
          </div>
          <div class="info-row">
            <div class="info-icon">📱</div>
            <div class="info-content">
              <div class="info-label">Phone</div>
              <div class="info-value user-phone"></div>
            </div>
          </div>
          <div class="info-row">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <div class="info-label">Location</div>
              <div class="info-value user-location"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <div class="grid" id="team-container"></div>
  </div>

  <script>
    // Sample team data
    const teamMembers = [
      {
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        email: 'sarah@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        initials: 'SJ'
      },
      {
        name: 'Michael Chen',
        role: 'Backend Developer',
        email: 'michael@example.com',
        phone: '+1 (555) 234-5678',
        location: 'Austin, TX',
        initials: 'MC'
      },
      {
        name: 'Emma Williams',
        role: 'UI/UX Designer',
        email: 'emma@example.com',
        phone: '+1 (555) 345-6789',
        location: 'Seattle, WA',
        initials: 'EW'
      },
      {
        name: 'James Brown',
        role: 'DevOps Engineer',
        email: 'james@example.com',
        phone: '+1 (555) 456-7890',
        location: 'Boston, MA',
        initials: 'JB'
      }
    ];
    
    const template = document.getElementById('user-card-template');
    const container = document.getElementById('team-container');
    
    // Create cards from template
    teamMembers.forEach(member => {
      const clone = template.content.cloneNode(true);
      
      // Fill in user data
      clone.querySelector('.avatar').textContent = member.initials;
      clone.querySelector('.user-name').textContent = member.name;
      clone.querySelector('.user-role').textContent = member.role;
      clone.querySelector('.user-email').textContent = member.email;
      clone.querySelector('.user-phone').textContent = member.phone;
      clone.querySelector('.user-location').textContent = member.location;
      
      container.appendChild(clone);
    });
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileCode}
        category="12. Web Components"
        title="Template Element"
        description="Learn how to use the HTML template element for reusable content patterns"
        colorTheme="blue"
      />

      {/* What is Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is the Template Element?
          </CardTitle>
          <CardDescription>
            A mechanism for holding HTML that should not be rendered immediately
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">&lt;template&gt;</code> element holds HTML content 
            that is not rendered when the page loads but can be cloned and inserted into the document using JavaScript.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Copy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Hidden Content</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Content inside template is not rendered on page load
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Reusable</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Clone the template multiple times for repeating patterns
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Efficient</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Better performance than creating HTML from strings
              </p>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Key Benefits</AlertTitle>
            <AlertDescription>
              Templates are parsed once, stored in the DOM as inert fragments, and can be activated (cloned) multiple times. 
              Scripts don't run, images don't load, and styles don't apply until the template is cloned and inserted.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How it Works Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            How Template Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Define Template in HTML</h4>
                  <div className="p-3 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800">
                    <code className="text-xs text-blue-700 dark:text-blue-300">&lt;template id="my-template"&gt;...content...&lt;/template&gt;</code>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Clone with JavaScript</h4>
                  <div className="p-3 rounded bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800">
                    <code className="text-xs text-purple-700 dark:text-purple-300">const clone = template.content.cloneNode(true)</code>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Customize & Insert</h4>
                  <div className="p-3 rounded bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800">
                    <code className="text-xs text-green-700 dark:text-green-300">container.appendChild(clone)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Template Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Copy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Basic Template Usage
          </CardTitle>
          <CardDescription>
            Simple example showing how to clone and insert template content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicTemplateExample}
            css=""
            title="Basic Template"
            colorTheme="blue"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Key Steps:</h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200 list-decimal list-inside">
              <li>Define template with <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">id</code></li>
              <li>Get template reference: <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">getElementById()</code></li>
              <li>Clone content: <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">template.content.cloneNode(true)</code></li>
              <li>Modify clone as needed</li>
              <li>Insert into DOM: <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">appendChild()</code></li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic List Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Dynamic List with Form
          </CardTitle>
          <CardDescription>
            Real-world example: Product list manager using templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={dynamicListExample}
            css=""
            title="Dynamic Product List"
            colorTheme="green"
          />
          
          <div className="mt-4 space-y-3">
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Real-World Pattern</AlertTitle>
              <AlertDescription className="text-sm">
                This pattern is commonly used in:
                • Todo lists and task managers
                • Shopping carts and product catalogs
                • Comment sections and social feeds
                • Dashboard widgets and cards
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Web Component Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
              <Code className="h-5 w-5" />
            </div>
            3. Templates with Data Binding
          </CardTitle>
          <CardDescription>
            Advanced example: Team member cards with data binding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={webComponentExample}
            css=""
            title="Team Member Cards"
            colorTheme="purple"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Template + Data = Power 🚀</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Separate data from presentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Loop through data arrays easily</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Foundation for component-based architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Works great with Web Components</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Template vs String */}
      <Card>
        <CardHeader>
          <CardTitle>Template vs String Concatenation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                ❌ String Concatenation
              </h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-red-700 dark:text-red-300">{`// Dangerous and slow
const html = '<div>' + 
  '<h3>' + title + '</h3>' +
  '<p>' + text + '</p>' +
'</div>';
container.innerHTML = html;`}</code>
              </pre>
              <ul className="mt-3 space-y-1 text-xs text-red-800 dark:text-red-200">
                <li>• XSS vulnerabilities</li>
                <li>• Slower parsing</li>
                <li>• Hard to maintain</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                ✅ Template Element
              </h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
<code className="text-green-700 dark:text-green-300">{`// Safe and fast
const clone = template
  .content.cloneNode(true);
clone.querySelector('h3')
  .textContent = title;
container.appendChild(clone);`}</code>
              </pre>
              <ul className="mt-3 space-y-1 text-xs text-green-800 dark:text-green-200">
                <li>• XSS protected</li>
                <li>• Better performance</li>
                <li>• Cleaner code</li>
              </ul>
            </div>
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
                  <span>Use templates for repeating HTML patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Always use <code>cloneNode(true)</code> for deep clones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use <code>textContent</code> to prevent XSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Give templates meaningful IDs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Place templates before closing body tag</span>
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
                  <span>Using <code>innerHTML</code> for dynamic content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting to clone (modifies original)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using <code>cloneNode(false)</code> for shallow clones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Storing state in template element</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using for static content (just use HTML)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Perfect Use Cases for Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📋 Dynamic Lists</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">Todo lists, shopping carts, comment threads</p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎴 Card Components</h4>
              <p className="text-sm text-green-800 dark:text-green-200">Product cards, user profiles, blog posts</p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📊 Data Tables</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">Dynamic table rows from API data</p>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">🧩 Web Components</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">Shadow DOM content, custom elements</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          The <code>&lt;template&gt;</code> element is supported in all modern browsers: 
          Chrome 26+, Firefox 22+, Safari 8+, Edge 13+. IE does not support it. 
          For older browsers, use a <a href="https://github.com/webcomponents/polyfills/tree/master/packages/template" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">polyfill</a>.
        </AlertDescription>
      </Alert>
    </div>
  );
}

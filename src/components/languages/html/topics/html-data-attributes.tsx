'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Database, 
  Info, 
  Code2, 
  Palette, 
  Tag,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Settings,
  FileCode,
  BarChart3
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlDataAttributesProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<div class="product-card" 
     data-product-id="12345" 
     data-category="electronics" 
     data-price="299">
  <h3>Wireless Headphones</h3>
  <button class="buy-btn">Buy Now</button>
</div>
<div id="output"></div>`,
  css: `.product-card {
  border: 2px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8fafc;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .product-card {
    background: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }
  
  #output {
    color: #e2e8f0 !important;
  }
}

.buy-btn {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`,
  js: `document.querySelector('.buy-btn').addEventListener('click', function() {
  const card = this.closest('.product-card');
  const output = document.getElementById('output');
  output.innerHTML = \`
    <strong>Product Details:</strong><br>
    ID: \${card.dataset.productId}<br>
    Category: \${card.dataset.category}<br>
    Price: $\${card.dataset.price}
  \`;
});`
};

export default function HtmlDataAttributes({ onOpenWebPlayground }: HtmlDataAttributesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Database} 
        category='Interactive & Components' 
        title='Custom Data Attributes' 
        description='Store custom data directly in HTML elements using data-* attributes'
        colorTheme='blue'
      />

      {/* What are Data Attributes? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are Data Attributes?
          </CardTitle>
          <CardDescription>
            Store private custom data in HTML elements
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            <strong>Data attributes</strong> (also called <code className='px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-blue-600'>data-*</code> attributes) let you store custom data directly in HTML elements without using extra hidden fields or JavaScript objects. They're perfect for storing metadata, configuration, state information, and any custom data your app needs.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Key Features Card */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Tag className='w-4 h-4' />
                Key Features
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Any name</strong> - Use data-* with any suffix</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Easy access</strong> - Via JavaScript dataset API</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>CSS selectors</strong> - Target with [data-*]</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Valid HTML</strong> - Standards-compliant</span>
                </li>
              </ul>
            </div>

            {/* Use Cases Card */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Settings className='w-4 h-4' />
                Common Use Cases
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Configuration & settings</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Analytics & tracking IDs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>State management flags</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Dynamic styling with CSS</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Basic Syntax
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<!-- HTML -->
<div data-user-id="123" data-role="admin">User Info</div>

<!-- JavaScript Access -->
element.dataset.userId;    // "123"
element.dataset.role;      // "admin"

<!-- CSS Selector -->
[data-role="admin"] { color: red; }`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Naming Convention
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Data attributes must start with <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>data-</code> followed by lowercase letters, numbers, dashes, dots, colons, or underscores. In JavaScript, camelCase is used: <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>data-user-name</code> becomes <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>dataset.userName</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How It Works - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            How Data Attributes Work
          </CardTitle>
          <CardDescription>From HTML to JavaScript access</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            {[
              {
                step: '1',
                icon: FileCode,
                title: 'Add to HTML',
                desc: 'Add data-* attributes to your HTML elements',
                color: 'blue'
              },
              {
                step: '2',
                icon: Code2,
                title: 'Access in JS',
                desc: 'Use element.dataset to read/write values',
                color: 'purple'
              },
              {
                step: '3',
                icon: Palette,
                title: 'Style with CSS',
                desc: 'Target elements using [data-*] selectors',
                color: 'emerald'
              }
            ].map((item, index) => (
              <div key={index} className='relative'>
                <div className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 p-4 rounded-lg border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                  <div className={`w-8 h-8 rounded-full bg-${item.color}-600 text-white flex items-center justify-center font-bold mb-3`}>
                    {item.step}
                  </div>
                  <item.icon className={`w-5 h-5 text-${item.color}-600 mb-2`} />
                  <h3 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 mb-2`}>
                    {item.title}
                  </h3>
                  <p className='text-xs text-slate-600 dark:text-slate-400'>
                    {item.desc}
                  </p>
                </div>
                {index < 2 && (
                  <ArrowRight className='hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400' />
                )}
              </div>
            ))}
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2'>
              <Info className='w-4 h-4 text-blue-600' />
              Key Concept: CamelCase Conversion
            </h4>
            <p className='text-sm text-slate-600 dark:text-slate-400 mb-2'>
              When accessing data attributes via JavaScript, dashes are automatically converted to camelCase:
            </p>
            <div className='grid md:grid-cols-2 gap-4 text-xs'>
              <div className='bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-700'>
                <div className='text-blue-600 font-semibold mb-1'>HTML</div>
                <code className='text-slate-700 dark:text-slate-300'>data-user-name</code><br/>
                <code className='text-slate-700 dark:text-slate-300'>data-product-id</code><br/>
                <code className='text-slate-700 dark:text-slate-300'>data-is-active</code>
              </div>
              <div className='bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-700'>
                <div className='text-purple-600 font-semibold mb-1'>JavaScript</div>
                <code className='text-slate-700 dark:text-slate-300'>dataset.userName</code><br/>
                <code className='text-slate-700 dark:text-slate-300'>dataset.productId</code><br/>
                <code className='text-slate-700 dark:text-slate-300'>dataset.isActive</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Usage */}
      <FrontendCodePreview
        title='Basic Data Attributes'
        description='Store and retrieve custom data with the dataset API'
        html={`<div class="user-card" 
     data-user-id="42" 
     data-username="johndoe" 
     data-role="admin">
  <h3>John Doe</h3>
  <button onclick="showUserInfo(this)">Show Info</button>
  <div id="info"></div>
</div>`}
        css={`.user-card {
  border: 2px solid #3b82f6;
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8fafc;
  max-width: 300px;
}

@media (prefers-color-scheme: dark) {
  .user-card {
    background: #1e293b;
  }
  
  .user-card h3 {
    color: #e2e8f0 !important;
  }
  
  #info {
    background: #0f172a !important;
    color: #e2e8f0;
  }
}

.user-card h3 {
  margin: 0 0 1rem 0;
  color: #1e293b;
}

.user-card button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.user-card button:hover {
  background: #2563eb;
}

#info {
  margin-top: 1rem;
  padding: 1rem;
  background: #e0f2fe;
  border-radius: 6px;
  font-size: 0.875rem;
  display: none;
}

#info.show {
  display: block;
}`}
        js={`function showUserInfo(button) {
  // Get parent card element
  const card = button.closest('.user-card');
  
  // Access data attributes via dataset
  const userId = card.dataset.userId;
  const username = card.dataset.username;
  const role = card.dataset.role;
  
  // Display the information
  const info = document.getElementById('info');
  info.innerHTML = \`
    <strong>User Information:</strong><br>
    ID: \${userId}<br>
    Username: \${username}<br>
    Role: \${role}
  \`;
  info.classList.add('show');
}`}
        colorTheme='blue'
        icon={Database}
        previewHeight='350px'
      />

      {/* Example 2: CSS Styling with Data Attributes */}
      <FrontendCodePreview
        title='Dynamic CSS Styling'
        description='Use data attributes as CSS selectors for conditional styling'
        html={`<div class="status-container">
  <div class="status-card" data-status="success">
    <h4>Payment Successful</h4>
    <p>Your order has been confirmed</p>
  </div>
  
  <div class="status-card" data-status="warning">
    <h4>Pending Review</h4>
    <p>Your submission is under review</p>
  </div>
  
  <div class="status-card" data-status="error">
    <h4>Action Required</h4>
    <p>Please update your payment method</p>
  </div>
</div>`}
        css={`.status-container {
  display: grid;
  gap: 1rem;
}

.status-card {
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid;
}

/* Success state */
.status-card[data-status="success"] {
  background: #ecfdf5;
  border-color: #10b981;
  color: #065f46;
}

/* Warning state */
.status-card[data-status="warning"] {
  background: #fefce8;
  border-color: #f59e0b;
  color: #78350f;
}

/* Error state */
.status-card[data-status="error"] {
  background: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
}

@media (prefers-color-scheme: dark) {
  .status-card[data-status="success"] {
    background: #064e3b;
    color: #6ee7b7;
  }
  
  .status-card[data-status="warning"] {
    background: #78350f;
    color: #fcd34d;
  }
  
  .status-card[data-status="error"] {
    background: #7f1d1d;
    color: #fca5a5;
  }
}

.status-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.status-card p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}`}
        js=''
        colorTheme='purple'
        icon={Palette}
        previewHeight='400px'
      />

      {/* Example 3: Filtering & Sorting */}
      <FrontendCodePreview
        title='Product Filter with Data Attributes'
        description='Filter elements based on their data attributes'
        html={`<div class="filter-demo">
  <div class="filters">
    <button onclick="filterProducts('all')">All</button>
    <button onclick="filterProducts('electronics')">Electronics</button>
    <button onclick="filterProducts('clothing')">Clothing</button>
    <button onclick="filterProducts('books')">Books</button>
  </div>
  
  <div class="products">
    <div class="product" data-category="electronics" data-price="299">
      <strong>Wireless Mouse</strong>
      <span>$299</span>
    </div>
    <div class="product" data-category="clothing" data-price="49">
      <strong>Cotton T-Shirt</strong>
      <span>$49</span>
    </div>
    <div class="product" data-category="electronics" data-price="599">
      <strong>Keyboard</strong>
      <span>$599</span>
    </div>
    <div class="product" data-category="books" data-price="25">
      <strong>JavaScript Guide</strong>
      <span>$25</span>
    </div>
    <div class="product" data-category="clothing" data-price="89">
      <strong>Denim Jeans</strong>
      <span>$89</span>
    </div>
    <div class="product" data-category="books" data-price="35">
      <strong>CSS Mastery</strong>
      <span>$35</span>
    </div>
  </div>
</div>`}
        css={`.filter-demo {
  padding: 1rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.filters button {
  padding: 0.5rem 1rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

@media (prefers-color-scheme: dark) {
  .filters button {
    background: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }
  
  .filters button:hover {
    background: #334155 !important;
  }
  
  .product {
    background: #1e293b !important;
    border-color: #334155 !important;
  }
  
  .product strong {
    color: #e2e8f0 !important;
  }
}

.filters button:hover {
  background: #f1f5f9;
}

.filters button.active {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.product {
  padding: 1rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s;
}

.product.hidden {
  display: none;
}

.product strong {
  color: #1e293b;
}

.product span {
  color: #10b981;
  font-weight: 600;
}`}
        js={`function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.filters button');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter products
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });
}`}
        colorTheme='emerald'
        icon={BarChart3}
        previewHeight='500px'
      />

      {/* Example 4: Analytics Tracking */}
      <FrontendCodePreview
        title='Analytics & Event Tracking'
        description='Track user interactions with data attributes'
        html={`<div class="tracking-demo">
  <h3>E-commerce Actions</h3>
  
  <button class="track-btn" 
          data-event="click" 
          data-category="product" 
          data-action="view" 
          data-label="Laptop Pro">
    View Product
  </button>
  
  <button class="track-btn" 
          data-event="click" 
          data-category="cart" 
          data-action="add" 
          data-label="Laptop Pro">
    Add to Cart
  </button>
  
  <button class="track-btn" 
          data-event="click" 
          data-category="checkout" 
          data-action="proceed" 
          data-label="Purchase">
    Checkout
  </button>
  
  <div id="tracking-log">
    <strong>Event Log:</strong>
    <div id="log-entries"></div>
  </div>
</div>`}
        css={`.tracking-demo {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .tracking-demo {
    background: #0f172a;
  }
  
  .tracking-demo h3 {
    color: #e2e8f0 !important;
  }
  
  #tracking-log {
    background: #1e293b !important;
    border-color: #334155 !important;
  }
  
  #tracking-log strong {
    color: #e2e8f0 !important;
  }
  
  #log-entries {
    color: #94a3b8 !important;
  }
  
  .log-entry {
    background: #0f172a !important;
  }
}

.tracking-demo h3 {
  margin: 0 0 1rem 0;
  color: #1e293b;
}

.track-btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.track-btn:hover {
  background: #d97706;
}

#tracking-log {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
}

#tracking-log strong {
  color: #1e293b;
  display: block;
  margin-bottom: 0.5rem;
}

#log-entries {
  font-size: 0.875rem;
  color: #64748b;
  max-height: 150px;
  overflow-y: auto;
}

.log-entry {
  padding: 0.5rem;
  background: #f1f5f9;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-family: monospace;
}`}
        js={`// Add click tracking to all buttons
document.querySelectorAll('.track-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Extract tracking data
    const eventData = {
      event: this.dataset.event,
      category: this.dataset.category,
      action: this.dataset.action,
      label: this.dataset.label,
      timestamp: new Date().toLocaleTimeString()
    };
    
    // Log the event
    logEvent(eventData);
    
    // In production, send to analytics service
    // analytics.track(eventData);
  });
});

function logEvent(data) {
  const logEntries = document.getElementById('log-entries');
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = \`[\${data.timestamp}] \${data.category}.\${data.action} - \${data.label}\`;
  logEntries.insertBefore(entry, logEntries.firstChild);
}`}
        colorTheme='amber'
        icon={BarChart3}
        previewHeight='500px'
      />

      {/* JavaScript Methods */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code2 className='w-5 h-5 text-blue-600' />
            Working with Data Attributes in JavaScript
          </CardTitle>
          <CardDescription>Different ways to access and manipulate data attributes</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Reading */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3'>
                Reading Data Attributes
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Using dataset (recommended)
element.dataset.userId;

// Using getAttribute
element.getAttribute('data-user-id');

// Check if exists
'userId' in element.dataset;`}</code>
              </pre>
            </div>

            {/* Writing */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3'>
                Writing Data Attributes
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Using dataset (recommended)
element.dataset.userId = '123';

// Using setAttribute
element.setAttribute('data-user-id', '123');

// Delete attribute
delete element.dataset.userId;`}</code>
              </pre>
            </div>

            {/* CSS Selectors */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3'>
                CSS Attribute Selectors
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-purple-200 dark:border-purple-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`/* Exact match */
[data-status="active"] { }

/* Contains value */
[data-role~="admin"] { }

/* Starts with */
[data-id^="user"] { }

/* Ends with */
[data-file$=".pdf"] { }`}</code>
              </pre>
            </div>

            {/* Querying */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-2 border-amber-200 dark:border-amber-800'>
              <h3 className='font-semibold text-amber-700 dark:text-amber-300 mb-3'>
                Querying Elements
              </h3>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-amber-200 dark:border-amber-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Find by data attribute
document.querySelector('[data-id="123"]');

// Find all with attribute
document.querySelectorAll('[data-active]');

// Complex selector
document.querySelectorAll('[data-role="admin"][data-verified="true"]');`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-emerald-600' />
            Best Practices
          </CardTitle>
          <CardDescription>Guidelines for using data attributes effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Do This */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Do This
              </h3>
              {[
                'Use for small, simple data values',
                'Use descriptive, semantic attribute names',
                'Use dataset API for JavaScript access',
                'Store IDs, flags, and configuration',
                'Use kebab-case in HTML (data-user-name)',
                'Keep data private to your application'
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <CheckCircle className='w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
            </div>

            {/* Avoid This */}
            <div className='space-y-3'>
              <h3 className='font-semibold text-red-700 dark:text-red-300 flex items-center gap-2'>
                <XCircle className='w-4 h-4' />
                Avoid This
              </h3>
              {[
                "Don't store large objects or arrays",
                "Don't use for sensitive information",
                "Don't store data that changes frequently",
                "Don't use as a database replacement",
                "Don't forget data is visible in HTML source",
                "Don't use special characters in names"
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-2 text-sm'>
                  <XCircle className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0' />
                  <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-purple-600' />
            Browser Support
          </CardTitle>
          <CardDescription>Data attributes support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Data Attributes</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>dataset API</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>CSS Selectors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', data: '8+', dataset: '8+', css: 'Full' },
                  { browser: 'Firefox', data: '6+', dataset: '6+', css: 'Full' },
                  { browser: 'Safari', data: '6+', dataset: '6+', css: 'Full' },
                  { browser: 'Edge', data: '12+', dataset: '12+', css: 'Full' },
                  { browser: 'Opera', data: '11+', dataset: '11+', css: 'Full' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-emerald-600 hover:bg-emerald-700'>{row.data}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.dataset}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-purple-600 hover:bg-purple-700'>{row.css}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Universal Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Data attributes have been part of HTML5 since 2011 and are supported by all modern browsers. The <code className='px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 rounded'>dataset</code> API provides a clean, convenient way to access them in JavaScript.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Data Attributes Playground</CardTitle>
          <CardDescription>Experiment with data attributes and see them in action</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Data Attributes Playground'
            description='Create custom data attributes and access them with JavaScript'
            features={[
              'Store Custom Data',
              'JavaScript Access',
              'CSS Selectors',
              'Real-World Examples'
            ]}
            buttonText='Open Data Attributes Playground'
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: demo.html,
              css: demo.css,
              js: demo.js
            }}
            colorTheme='blue'
          />
        </CardContent>
      </Card>
    </div>
  );
}


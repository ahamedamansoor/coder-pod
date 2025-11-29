'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Settings, 
  Info, 
  Code2, 
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Zap,
  FileCode,
  Link2,
  Eye,
  Database
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlAttributesPropertiesProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<user-profile 
  username="johndoe" 
  email="john@example.com"
  verified="true"
  followers="1250">
</user-profile>

<div style="margin-top: 1rem;">
  <button onclick="changeViaAttribute()">Change via Attribute</button>
  <button onclick="changeViaProperty()">Change via Property</button>
  <button onclick="showData()">Show All Data</button>
</div>

<pre id="output" style="margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 6px; font-family: monospace; font-size: 0.75rem;"></pre>`,
  css: `user-profile {
  display: block;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-family: system-ui;
}

#output {
  background: #f8fafc;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  #output {
    background: #0f172a !important;
    color: #e2e8f0 !important;
    border: 1px solid #334155;
  }
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`,
  js: `class UserProfile extends HTMLElement {
  static get observedAttributes() {
    return ['username', 'email', 'verified', 'followers'];
  }
  
  constructor() {
    super();
    // Properties (JavaScript-only, not reflected)
    this._internalData = {
      lastUpdated: new Date(),
      visitCount: 0
    };
  }
  
  connectedCallback() {
    this.render();
    this._internalData.visitCount++;
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected) {
      this.render();
    }
  }
  
  // Property getters/setters
  get username() {
    return this.getAttribute('username');
  }
  
  set username(value) {
    this.setAttribute('username', value);
  }
  
  get internalData() {
    return this._internalData;
  }
  
  set internalData(value) {
    this._internalData = { ...this._internalData, ...value };
  }
  
  render() {
    const username = this.getAttribute('username') || 'Anonymous';
    const email = this.getAttribute('email') || 'no-email';
    const verified = this.getAttribute('verified') === 'true';
    const followers = parseInt(this.getAttribute('followers')) || 0;
    
    this.innerHTML = \`
      <h3 style="margin: 0 0 0.5rem 0;">\${verified ? '✓' : ''} @\${username}</h3>
      <p style="margin: 0 0 0.5rem 0; opacity: 0.9; font-size: 0.875rem;">\${email}</p>
      <p style="margin: 0; font-weight: bold;">\${followers} followers</p>
    \`;
  }
}

customElements.define('user-profile', UserProfile);

const profile = document.querySelector('user-profile');
const output = document.getElementById('output');

function changeViaAttribute() {
  profile.setAttribute('username', 'janedoe');
  profile.setAttribute('followers', '2500');
  output.textContent = 'Changed via setAttribute()\\nAttributes are reflected in HTML!';
}

function changeViaProperty() {
  profile.internalData = { lastUpdated: new Date(), visitCount: 99 };
  output.textContent = 'Changed property (not in HTML)\\nData: ' + JSON.stringify(profile.internalData, null, 2);
}

function showData() {
  output.textContent = \`
ATTRIBUTES (visible in HTML):
  username: \${profile.getAttribute('username')}
  email: \${profile.getAttribute('email')}
  followers: \${profile.getAttribute('followers')}

PROPERTIES (JavaScript only):
  internalData: \${JSON.stringify(profile.internalData, null, 2)}
  \`;
}`
};

export default function HtmlAttributesProperties({ onOpenWebPlayground }: HtmlAttributesPropertiesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Settings} 
        category='Web Components' 
        title='Attributes & Properties' 
        description='Manage component data with HTML attributes and JavaScript properties'
        colorTheme='blue'
      />

      {/* What are Attributes & Properties? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            Attributes vs Properties
          </CardTitle>
          <CardDescription>
            Understanding the difference between HTML attributes and JavaScript properties
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Custom Elements can receive data through <strong>HTML attributes</strong> (visible in markup) and <strong>JavaScript properties</strong> (accessible only via JavaScript). Understanding when to use each is crucial for building flexible, user-friendly components. Attributes are strings in HTML, while properties can be any JavaScript type.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Attributes */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <FileCode className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Attributes
                </h3>
              </div>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Visible in HTML markup</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Always strings</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Set via HTML or <code className='text-xs bg-white dark:bg-slate-950 px-1 rounded'>setAttribute()</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Trigger <code className='text-xs bg-white dark:bg-slate-950 px-1 rounded'>attributeChangedCallback</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Good for: simple configuration</span>
                </li>
              </ul>
            </div>

            {/* Properties */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Database className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>
                  Properties
                </h3>
              </div>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>JavaScript-only access</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Any data type (objects, arrays, functions)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Set via <code className='text-xs bg-white dark:bg-slate-950 px-1 rounded'>element.prop = value</code></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Can use getters/setters</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-500 mt-0.5'>•</span>
                  <span>Good for: complex data, callbacks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Key Difference
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`// Attributes - strings in HTML
<my-element color="blue" count="5"></my-element>
element.setAttribute('color', 'red');
element.getAttribute('color'); // "red" (string)

// Properties - any JavaScript type
element.userData = { name: 'John', age: 30 };
element.callback = () => console.log('clicked');
element.items = [1, 2, 3];`}</code>
            </pre>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>
              Best Practice
            </AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400'>
              Use <strong>attributes</strong> for simple, string-based configuration that should be visible in HTML. Use <strong>properties</strong> for complex data structures, callbacks, or data that doesn't need to be serialized.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How They Work - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            Attribute & Property Flow
          </CardTitle>
          <CardDescription>How attributes and properties interact with your component</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Attribute Flow */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2'>
                <FileCode className='w-4 h-4' />
                Attribute Flow
              </h3>
              <div className='space-y-3'>
                {[
                  { step: '1', text: 'Set in HTML or via setAttribute()', icon: '📝' },
                  { step: '2', text: 'observedAttributes declares watched attrs', icon: '👁️' },
                  { step: '3', text: 'attributeChangedCallback fires', icon: '🔔' },
                  { step: '4', text: 'Component re-renders', icon: '🔄' }
                ].map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm'>
                      {item.step}
                    </div>
                    <div className='flex-1 pt-1'>
                      <span className='text-lg mr-2'>{item.icon}</span>
                      <span className='text-sm text-slate-700 dark:text-slate-300'>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Flow */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-2'>
                <Database className='w-4 h-4' />
                Property Flow
              </h3>
              <div className='space-y-3'>
                {[
                  { step: '1', text: 'Set via JavaScript (element.prop)', icon: '💻' },
                  { step: '2', text: 'Stored in instance (private/public)', icon: '📦' },
                  { step: '3', text: 'Getter/setter can add logic', icon: '⚙️' },
                  { step: '4', text: 'Manual re-render if needed', icon: '🎨' }
                ].map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-sm'>
                      {item.step}
                    </div>
                    <div className='flex-1 pt-1'>
                      <span className='text-lg mr-2'>{item.icon}</span>
                      <span className='text-sm text-slate-700 dark:text-slate-300'>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <h3 className='font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2'>
              <Link2 className='w-4 h-4' />
              Reflecting Properties to Attributes
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
              You can create properties that automatically sync with attributes using getters/setters:
            </p>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`// Property reflects to attribute
get color() {
  return this.getAttribute('color');
}

set color(value) {
  this.setAttribute('color', value); // Triggers attributeChangedCallback
}

// Usage
element.color = 'blue'; // Updates both property AND attribute`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Attributes */}
      <FrontendCodePreview
        title='Working with Attributes'
        description='Reading and observing HTML attributes'
        html={`<product-card 
  name="Wireless Mouse" 
  price="29.99" 
  stock="15"
  category="electronics">
</product-card>

<div style="margin-top: 1rem;">
  <button onclick="updatePrice()">Update Price</button>
  <button onclick="updateStock()">Decrease Stock</button>
  <button onclick="changeCategory()">Change Category</button>
</div>`}
        css={`product-card {
  display: block;
  padding: 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: system-ui;
}

@media (prefers-color-scheme: dark) {
  product-card {
    background: #1e293b;
    border-color: #334155;
  }
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class ProductCard extends HTMLElement {
  // Declare which attributes to observe
  static get observedAttributes() {
    return ['name', 'price', 'stock', 'category'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Attribute "\${name}" changed: \${oldValue} → \${newValue}\`);
    
    if (this.isConnected) {
      this.render();
    }
  }
  
  render() {
    // Read attributes as strings
    const name = this.getAttribute('name') || 'Unknown Product';
    const price = parseFloat(this.getAttribute('price')) || 0;
    const stock = parseInt(this.getAttribute('stock')) || 0;
    const category = this.getAttribute('category') || 'general';
    
    // Determine stock status
    const stockStatus = stock > 10 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock';
    const stockColor = stock > 10 ? '#10b981' : stock > 0 ? '#f59e0b' : '#ef4444';
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const mutedColor = isDark ? '#94a3b8' : '#64748b';
    
    this.innerHTML = \`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <div>
            <h3 style="margin: 0 0 0.25rem 0; color: \${textColor}; font-size: 1.25rem;">\${name}</h3>
            <span style="font-size: 0.75rem; color: \${mutedColor}; text-transform: uppercase;">\${category}</span>
          </div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #3b82f6;">$\${price.toFixed(2)}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.875rem; color: \${stockColor}; font-weight: 600;">● \${stockStatus}</span>
          <span style="font-size: 0.875rem; color: #94a3b8;">(\${stock} available)</span>
        </div>
      </div>
    \`;
  }
}

customElements.define('product-card', ProductCard);

const card = document.querySelector('product-card');

function updatePrice() {
  const newPrice = (Math.random() * 50 + 10).toFixed(2);
  card.setAttribute('price', newPrice);
}

function updateStock() {
  const currentStock = parseInt(card.getAttribute('stock'));
  if (currentStock > 0) {
    card.setAttribute('stock', (currentStock - 1).toString());
  }
}

function changeCategory() {
  const categories = ['electronics', 'accessories', 'peripherals', 'gaming'];
  const current = card.getAttribute('category');
  const currentIndex = categories.indexOf(current);
  const nextIndex = (currentIndex + 1) % categories.length;
  card.setAttribute('category', categories[nextIndex]);
}`}
        colorTheme='blue'
        icon={FileCode}
        previewHeight='450px'
      />

      {/* Example 2: Properties with Getters/Setters */}
      <FrontendCodePreview
        title='Properties with Getters & Setters'
        description='Create properties that reflect to attributes'
        html={`<slider-control value="50" min="0" max="100"></slider-control>

<div style="margin-top: 1rem;">
  <button onclick="setValue(0)">Set to 0</button>
  <button onclick="setValue(50)">Set to 50</button>
  <button onclick="setValue(100)">Set to 100</button>
  <button onclick="incrementValue()">Increment +10</button>
</div>`}
        css={`slider-control {
  display: block;
  padding: 1.5rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  font-family: system-ui;
}

@media (prefers-color-scheme: dark) {
  slider-control {
    background: #1e293b;
    border-color: #3b82f6;
  }
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class SliderControl extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'min', 'max'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected) {
      this.render();
    }
  }
  
  // Property getter - reads from attribute
  get value() {
    return parseInt(this.getAttribute('value')) || 0;
  }
  
  // Property setter - updates attribute (triggers callback)
  set value(val) {
    const min = this.min;
    const max = this.max;
    const clamped = Math.max(min, Math.min(max, val));
    this.setAttribute('value', clamped.toString());
  }
  
  get min() {
    return parseInt(this.getAttribute('min')) || 0;
  }
  
  set min(val) {
    this.setAttribute('min', val.toString());
  }
  
  get max() {
    return parseInt(this.getAttribute('max')) || 100;
  }
  
  set max(val) {
    this.setAttribute('max', val.toString());
  }
  
  render() {
    const value = this.value;
    const min = this.min;
    const max = this.max;
    const percentage = ((value - min) / (max - min)) * 100;
    
    this.innerHTML = \`
      <div style="text-align: center;">
        <div style="font-size: 3rem; font-weight: bold; color: #3b82f6; margin-bottom: 1rem;">
          \${value}
        </div>
        <div style="position: relative; height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden;">
          <div style="position: absolute; left: 0; top: 0; height: 100%; width: \${percentage}%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); transition: width 0.3s ease;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem; color: #64748b;">
          <span>\${min}</span>
          <span>\${max}</span>
        </div>
      </div>
    \`;
  }
}

customElements.define('slider-control', SliderControl);

const slider = document.querySelector('slider-control');

function setValue(val) {
  slider.value = val; // Uses property setter
}

function incrementValue() {
  slider.value = slider.value + 10; // Uses getter and setter
}`}
        colorTheme='purple'
        icon={Settings}
        previewHeight='400px'
      />

      {/* Example 3: Complex Properties (Non-Reflected) */}
      <FrontendCodePreview
        title='Complex Properties'
        description='Properties for objects, arrays, and functions'
        html={`<data-table id="myTable"></data-table>

<div style="margin-top: 1rem;">
  <button onclick="setData()">Load Data</button>
  <button onclick="sortData()">Sort by Age</button>
  <button onclick="addRow()">Add Row</button>
</div>`}
        css={`data-table {
  display: block;
  padding: 1rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: system-ui;
}

@media (prefers-color-scheme: dark) {
  data-table {
    background: #1e293b;
    border-color: #334155;
  }
  
  th {
    background: #0f172a !important;
    color: #cbd5e1 !important;
  }
  
  td {
    color: #e2e8f0 !important;
  }
  
  th, td {
    border-bottom-color: #334155 !important;
  }
  
  tr:hover {
    background: #334155 !important;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background: #f8fafc;
  font-weight: 600;
  color: #475569;
  font-size: 0.875rem;
}

td {
  color: #1e293b;
  font-size: 0.875rem;
}

tr:hover {
  background: #f8fafc;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class DataTable extends HTMLElement {
  constructor() {
    super();
    // Private property - complex data (not reflected to attribute)
    this._data = [];
    this._sortColumn = null;
    this._sortDirection = 'asc';
  }
  
  connectedCallback() {
    this.render();
  }
  
  // Property getter/setter for data (array)
  get data() {
    return this._data;
  }
  
  set data(value) {
    if (!Array.isArray(value)) {
      console.error('Data must be an array');
      return;
    }
    this._data = value;
    this.render();
  }
  
  // Method property (function)
  set onRowClick(callback) {
    this._onRowClick = callback;
  }
  
  sortBy(column) {
    this._sortColumn = column;
    this._sortDirection = this._sortDirection === 'asc' ? 'desc' : 'asc';
    
    this._data.sort((a, b) => {
      const aVal = a[column];
      const bVal = b[column];
      
      if (this._sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
    
    this.render();
  }
  
  render() {
    if (this._data.length === 0) {
      this.innerHTML = '<p style="text-align: center; color: #94a3b8;">No data loaded</p>';
      return;
    }
    
    const headers = Object.keys(this._data[0]);
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mutedColor = isDark ? '#94a3b8' : '#64748b';
    
    this.innerHTML = \`
      <table>
        <thead>
          <tr>
            \${headers.map(h => \`<th>\${h.toUpperCase()}</th>\`).join('')}
          </tr>
        </thead>
        <tbody>
          \${this._data.map((row, idx) => \`
            <tr onclick="handleRowClick(\${idx})">
              \${headers.map(h => \`<td>\${row[h]}</td>\`).join('')}
            </tr>
          \`).join('')}
        </tbody>
      </table>
      <div style="margin-top: 0.5rem; font-size: 0.75rem; color: \${mutedColor};">
        \${this._data.length} rows | Sorted by: \${this._sortColumn || 'none'} (\${this._sortDirection})
      </div>
    \`;
  }
}

customElements.define('data-table', DataTable);

const table = document.getElementById('myTable');

// Set callback property
table.onRowClick = (index) => {
  alert(\`Clicked row \${index}\`);
};

function handleRowClick(index) {
  if (table._onRowClick) {
    table._onRowClick(index);
  }
}

function setData() {
  // Set complex data via property (can't use attribute for this!)
  table.data = [
    { name: 'Alice', age: 28, role: 'Developer' },
    { name: 'Bob', age: 35, role: 'Designer' },
    { name: 'Charlie', age: 24, role: 'Manager' }
  ];
}

function sortData() {
  table.sortBy('age');
}

function addRow() {
  const newData = [...table.data];
  newData.push({
    name: 'User' + (newData.length + 1),
    age: Math.floor(Math.random() * 40 + 20),
    role: 'Employee'
  });
  table.data = newData;
}`}
        colorTheme='emerald'
        icon={Database}
        previewHeight='550px'
      />

      {/* Example 4: Attribute-Property Sync */}
      <FrontendCodePreview
        title='Keeping Attributes & Properties in Sync'
        description='Best practice pattern for syncing attributes and properties'
        html={`<toggle-switch checked label="Enable notifications"></toggle-switch>
<toggle-switch label="Dark mode"></toggle-switch>

<div style="margin-top: 1rem;">
  <button onclick="toggleFirst()">Toggle First</button>
  <button onclick="toggleViaProperty()">Toggle via Property</button>
  <button onclick="toggleViaAttribute()">Toggle via Attribute</button>
</div>`}
        css={`toggle-switch {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin: 0.5rem 0;
  font-family: system-ui;
  cursor: pointer;
  transition: all 0.2s;
}

@media (prefers-color-scheme: dark) {
  toggle-switch {
    background: #1e293b;
    border-color: #334155;
  }
  
  toggle-switch:hover {
    border-color: #3b82f6;
    background: #0f172a;
  }
}

toggle-switch:hover {
  border-color: #3b82f6;
  background: #f8fafc;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: #2563eb;
}`}
        js={`class ToggleSwitch extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'label'];
  }
  
  connectedCallback() {
    this.render();
    this.addEventListener('click', () => {
      this.checked = !this.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: { checked: this.checked }
      }));
    });
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected) {
      this.render();
    }
  }
  
  // Property that reflects to attribute
  get checked() {
    return this.hasAttribute('checked');
  }
  
  set checked(value) {
    // Sync property to attribute
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }
  
  get label() {
    return this.getAttribute('label') || '';
  }
  
  set label(value) {
    this.setAttribute('label', value);
  }
  
  render() {
    const checked = this.checked;
    const label = this.label;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const bgColor = checked ? '#10b981' : (isDark ? '#334155' : '#e2e8f0');
    const thumbPos = checked ? '28px' : '4px';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const mutedColor = isDark ? '#94a3b8' : '#64748b';
    
    this.innerHTML = \`
      <div style="position: relative; width: 52px; height: 28px; background: \${bgColor}; border-radius: 14px; transition: background 0.3s;">
        <div style="position: absolute; left: \${thumbPos}; top: 4px; width: 20px; height: 20px; background: white; border-radius: 50%; transition: left 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
      </div>
      <span style="font-size: 0.875rem; color: \${textColor}; font-weight: 500;">\${label}</span>
      <span style="margin-left: auto; font-size: 0.75rem; color: \${mutedColor};">\${checked ? 'ON' : 'OFF'}</span>
    \`;
  }
}

customElements.define('toggle-switch', ToggleSwitch);

const switches = document.querySelectorAll('toggle-switch');

switches.forEach(sw => {
  sw.addEventListener('change', (e) => {
    console.log(\`Toggle changed: \${e.detail.checked}\`);
  });
});

function toggleFirst() {
  const first = switches[0];
  first.checked = !first.checked;
}

function toggleViaProperty() {
  const first = switches[0];
  first.checked = !first.checked; // Property updates attribute
  console.log('Toggled via property');
}

function toggleViaAttribute() {
  const first = switches[0];
  if (first.hasAttribute('checked')) {
    first.removeAttribute('checked');
  } else {
    first.setAttribute('checked', '');
  }
  console.log('Toggled via attribute');
}`}
        colorTheme='amber'
        icon={Link2}
        previewHeight='450px'
      />

      {/* When to Use What */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Eye className='w-5 h-5 text-blue-600' />
            When to Use Attributes vs Properties
          </CardTitle>
          <CardDescription>Choosing the right approach for your data</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Use Attributes For */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <FileCode className='w-4 h-4' />
                Use Attributes For:
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Simple string values (names, IDs, labels)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Boolean flags (disabled, checked, hidden)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Numbers that can be strings ("10", "3.14")</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Configuration visible in HTML</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>SEO-relevant data</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                  <span>Values that should trigger re-renders</span>
                </li>
              </ul>
            </div>

            {/* Use Properties For */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2'>
                <Database className='w-4 h-4' />
                Use Properties For:
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Complex data (objects, arrays)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Functions and callbacks</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Large datasets that shouldn't be in HTML</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Internal component state</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>DOM references</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                  <span>Values that change frequently</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-4'>
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm'>
                ✅ Good: Attribute
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block'>
                &lt;my-el name="John"&gt;
              </code>
            </div>

            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm'>
                ✅ Good: Property
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block'>
                el.data = {'{'} ... {'}'}
              </code>
            </div>

            <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-2 border-red-200 dark:border-red-800'>
              <h4 className='font-semibold text-red-700 dark:text-red-300 mb-2 text-sm'>
                ❌ Bad: Attribute
              </h4>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block'>
                data="[1,2,3]"
              </code>
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
          <CardDescription>Guidelines for managing attributes and properties</CardDescription>
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
                'Reflect simple properties to attributes with getters/setters',
                'Declare observedAttributes for reactive attributes',
                'Use properties for complex data structures',
                'Provide sensible defaults for missing attributes',
                'Document which properties reflect to attributes',
                'Keep attribute names lowercase and kebab-case'
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
                "Don't serialize complex objects as attributes",
                "Don't forget to parse attribute strings to numbers/booleans",
                "Don't make all properties reflect to attributes",
                "Don't use camelCase attribute names",
                "Don't forget observedAttributes won't see all changes",
                "Don't store functions or DOM nodes in attributes"
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
          <CardDescription>Attributes & properties support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Version</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Status</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', version: '54+', status: '✅', notes: 'Full support' },
                  { browser: 'Firefox', version: '63+', status: '✅', notes: 'Full support' },
                  { browser: 'Safari', version: '10.1+', status: '✅', notes: 'Full support' },
                  { browser: 'Edge', version: '79+', status: '✅', notes: 'Chromium-based' },
                  { browser: 'Opera', version: '41+', status: '✅', notes: 'Full support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.version}</Badge>
                    </td>
                    <td className='py-3 px-4 text-2xl'>{row.status}</td>
                    <td className='py-3 px-4 text-slate-600 dark:text-slate-400 text-xs'>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Excellent Browser Support
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Attribute observation and property management are core features of Custom Elements v1, supported in all modern browsers without polyfills.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Attributes & Properties Playground</CardTitle>
          <CardDescription>Experiment with attributes and properties in Web Components</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='Attributes & Properties Playground'
            description='See how attributes and properties work together'
            features={[
              'Attribute Updates',
              'Property Setters',
              'Data Reflection',
              'Real-time Changes'
            ]}
            buttonText='Open Attributes Playground'
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

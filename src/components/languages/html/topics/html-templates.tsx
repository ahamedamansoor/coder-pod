'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  FileCode, 
  Info, 
  Code2, 
  Copy,
  Repeat,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Layers,
  Zap,
  Package,
  Layout
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlTemplatesProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<!-- Define template -->
<template id="user-card-template">
  <div class="user-card">
    <img class="avatar" src="" alt="">
    <div class="info">
      <h3 class="name"></h3>
      <p class="role"></p>
      <button class="contact-btn">Contact</button>
    </div>
  </div>
</template>

<!-- Container for cloned templates -->
<div id="users-container"></div>

<button onclick="addUser()">Add User</button>`,
  css: `#users-container {
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
}

.user-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .user-card {
    background: #1e293b;
  }
  
  .name {
    color: #e2e8f0 !important;
  }
  
  .role {
    color: #94a3b8 !important;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.info {
  flex: 1;
}

.name {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.role {
  margin: 0 0 0.75rem 0;
  color: #64748b;
  font-size: 0.875rem;
}

.contact-btn {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.contact-btn:hover {
  background: #2563eb;
}`,
  js: `const users = [
  { name: 'Alice Johnson', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Bob Smith', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Carol White', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=3' }
];

let userIndex = 0;

function addUser() {
  if (userIndex >= users.length) {
    alert('No more users to add!');
    return;
  }
  
  const template = document.getElementById('user-card-template');
  const container = document.getElementById('users-container');
  
  // Clone the template
  const clone = template.content.cloneNode(true);
  
  // Fill in the data
  const user = users[userIndex];
  clone.querySelector('.avatar').src = user.avatar;
  clone.querySelector('.name').textContent = user.name;
  clone.querySelector('.role').textContent = user.role;
  
  // Add event listener
  clone.querySelector('.contact-btn').addEventListener('click', () => {
    alert(\`Contacting \${user.name}...\`);
  });
  
  // Add to DOM
  container.appendChild(clone);
  userIndex++;
}`
};

export default function HtmlTemplates({ onOpenWebPlayground }: HtmlTemplatesProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={FileCode} 
        category='Web Components' 
        title='HTML Templates' 
        description='Define reusable markup structures with the <template> element'
        colorTheme='blue'
      />

      {/* What are HTML Templates? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What are HTML Templates?
          </CardTitle>
          <CardDescription>
            Declare fragments of markup that can be cloned and inserted into the document
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded'>&lt;template&gt;</code> element holds HTML markup that is <strong>not rendered</strong> when the page loads. Instead, it can be cloned and inserted into the document using JavaScript. Templates are perfect for creating reusable UI components, list items, or any markup you need to instantiate multiple times.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            {/* Inert */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Layout className='w-5 h-5 text-blue-600' />
                <h3 className='font-semibold text-blue-700 dark:text-blue-300'>
                  Inert Content
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Template content is not rendered, scripts don't run, images don't load
              </p>
            </div>

            {/* Cloneable */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Copy className='w-5 h-5 text-purple-600' />
                <h3 className='font-semibold text-purple-700 dark:text-purple-300'>
                  Cloneable
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Can be cloned and reused multiple times without affecting the original
              </p>
            </div>

            {/* Reusable */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Repeat className='w-5 h-5 text-emerald-600' />
                <h3 className='font-semibold text-emerald-700 dark:text-emerald-300'>
                  Reusable
                </h3>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                Perfect for lists, cards, dialogs, or any repeated UI pattern
              </p>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
            <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <Code2 className='w-4 h-4' />
              Basic Template Structure
            </h3>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<!-- Define the template (not rendered) -->
<template id="my-template">
  <div class="card">
    <h2>Title</h2>
    <p>Content goes here</p>
  </div>
</template>

<!-- Clone and use it -->
<script>
  const template = document.getElementById('my-template');
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);
</script>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Key Difference from innerHTML
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Unlike using <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded'>innerHTML</code>, templates are <strong>parsed once</strong> and can be cloned efficiently. They also preserve event listeners and maintain proper DOM structure, making them more performant for repeated content.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Templates Work - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            How Templates Work
          </CardTitle>
          <CardDescription>The template lifecycle from definition to DOM insertion</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
            <div className='space-y-4'>
              {[
                {
                  step: '1',
                  title: 'Define Template',
                  desc: 'Create <template> tag with markup',
                  code: '<template id="card">...</template>',
                  color: 'blue'
                },
                {
                  step: '2',
                  title: 'Get Template Reference',
                  desc: 'Access the template element',
                  code: 'const tpl = document.getElementById("card")',
                  color: 'purple'
                },
                {
                  step: '3',
                  title: 'Clone Content',
                  desc: 'Clone the template.content',
                  code: 'const clone = tpl.content.cloneNode(true)',
                  color: 'emerald'
                },
                {
                  step: '4',
                  title: 'Customize Clone',
                  desc: 'Modify the cloned elements',
                  code: 'clone.querySelector("h2").textContent = "New"',
                  color: 'amber'
                },
                {
                  step: '5',
                  title: 'Insert into DOM',
                  desc: 'Append to the document',
                  code: 'document.body.appendChild(clone)',
                  color: 'rose'
                }
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-950 border-2 border-${item.color}-500 flex items-center justify-center font-bold text-${item.color}-700 dark:text-${item.color}-300`}>
                    {item.step}
                  </div>
                  <div className='flex-1'>
                    <h4 className={`font-semibold text-${item.color}-700 dark:text-${item.color}-300 mb-1`}>
                      {item.title}
                    </h4>
                    <p className='text-sm text-slate-600 dark:text-slate-400 mb-2'>
                      {item.desc}
                    </p>
                    <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'>
                      {item.code}
                    </code>
                  </div>
                  {index < 4 && (
                    <ArrowRight className='w-5 h-5 text-slate-400 absolute left-5 mt-12' />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                Template Properties
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>template.content</code> - DocumentFragment with template contents</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><code className='text-xs bg-white dark:bg-slate-950 px-1.5 py-0.5 rounded'>cloneNode(true)</code> - Deep clone with all descendants</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Template itself is <strong>never</strong> rendered in the page</span>
                </li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Zap className='w-4 h-4' />
                Performance Benefits
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Parsed once, cloned many times</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>More efficient than string concatenation</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Preserves proper DOM structure</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Template */}
      <FrontendCodePreview
        title='Basic Template Usage'
        description='Simple template cloning for repeated elements'
        html={`<!-- Define the template -->
<template id="notification-template">
  <div class="notification">
    <span class="icon">🔔</span>
    <p class="message"></p>
    <button class="close-btn">×</button>
  </div>
</template>

<!-- Container for notifications -->
<div id="notifications"></div>

<button onclick="showNotification('Welcome to Coder Pod!')">
  Show Notification
</button>
<button onclick="showNotification('New course available!')">
  Show Another
</button>`}
        css={`#notifications {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .notification {
    background: #1e293b;
  }
  
  .notification .message {
    color: #e2e8f0 !important;
  }
  
  .notification .close-btn {
    color: #94a3b8 !important;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification .icon {
  font-size: 1.5rem;
}

.notification .message {
  flex: 1;
  margin: 0;
  font-size: 0.875rem;
  color: #1e293b;
}

.notification .close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  line-height: 1;
}

.notification .close-btn:hover {
  color: #ef4444;
}`}
        js={`function showNotification(message) {
  // Get the template
  const template = document.getElementById('notification-template');
  
  // Clone the template content
  const clone = template.content.cloneNode(true);
  
  // Customize the clone
  clone.querySelector('.message').textContent = message;
  
  // Add close functionality
  const closeBtn = clone.querySelector('.close-btn');
  const notification = clone.querySelector('.notification');
  
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
  
  // Add to DOM
  document.getElementById('notifications').appendChild(clone);
}`}
        colorTheme='blue'
        icon={FileCode}
        previewHeight='450px'
      />

      {/* Example 2: List with Templates */}
      <FrontendCodePreview
        title='Dynamic List Generation'
        description='Creating multiple items from a template with data'
        html={`<template id="product-template">
  <div class="product">
    <img class="product-image" src="" alt="">
    <h3 class="product-name"></h3>
    <p class="product-price"></p>
    <button class="add-to-cart">Add to Cart</button>
  </div>
</template>

<div id="products-grid"></div>`}
        css={`#products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.product {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s;
}

@media (prefers-color-scheme: dark) {
  .product {
    background: #1e293b;
    border-color: #334155;
  }
  
  .product-name {
    color: #e2e8f0 !important;
  }
}

.product:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.product-name {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: 1rem;
}

.product-price {
  margin: 0 0 0.75rem 0;
  color: #3b82f6;
  font-size: 1.25rem;
  font-weight: bold;
}

.add-to-cart {
  width: 100%;
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.add-to-cart:hover {
  background: #2563eb;
}`}
        js={`const products = [
  { 
    id: 1, 
    name: 'Wireless Mouse', 
    price: 29.99, 
    image: 'https://picsum.photos/200/150?random=1' 
  },
  { 
    id: 2, 
    name: 'Mechanical Keyboard', 
    price: 89.99, 
    image: 'https://picsum.photos/200/150?random=2' 
  },
  { 
    id: 3, 
    name: 'USB-C Cable', 
    price: 12.99, 
    image: 'https://picsum.photos/200/150?random=3' 
  },
  { 
    id: 4, 
    name: 'Laptop Stand', 
    price: 45.99, 
    image: 'https://picsum.photos/200/150?random=4' 
  }
];

const template = document.getElementById('product-template');
const grid = document.getElementById('products-grid');

// Create product cards from template
products.forEach(product => {
  // Clone the template
  const clone = template.content.cloneNode(true);
  
  // Fill in product data
  clone.querySelector('.product-image').src = product.image;
  clone.querySelector('.product-name').textContent = product.name;
  clone.querySelector('.product-price').textContent = \`$\${product.price}\`;
  
  // Add click handler
  clone.querySelector('.add-to-cart').addEventListener('click', () => {
    alert(\`Added \${product.name} to cart!\`);
  });
  
  // Add to grid
  grid.appendChild(clone);
});`}
        colorTheme='purple'
        icon={Package}
        previewHeight='550px'
      />

      {/* Example 3: Nested Templates */}
      <FrontendCodePreview
        title='Nested Templates'
        description='Using templates within templates for complex structures'
        html={`<!-- Template for individual comment -->
<template id="comment-template">
  <div class="comment">
    <img class="avatar" src="" alt="">
    <div class="content">
      <strong class="author"></strong>
      <p class="text"></p>
      <span class="time"></span>
    </div>
  </div>
</template>

<!-- Template for post with comments -->
<template id="post-template">
  <div class="post">
    <h3 class="title"></h3>
    <p class="body"></p>
    <div class="comments-section">
      <h4>Comments:</h4>
      <div class="comments"></div>
    </div>
  </div>
</template>

<div id="feed"></div>`}
        css={`.post {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  .post {
    background: #1e293b;
    border-color: #334155;
  }
  
  .post .title {
    color: #e2e8f0 !important;
  }
  
  .post .body {
    color: #94a3b8 !important;
  }
  
  .comments-section h4 {
    color: #94a3b8 !important;
  }
  
  .comment {
    background: #0f172a !important;
  }
  
  .comment .text {
    color: #e2e8f0 !important;
  }
}

.post .title {
  margin: 0 0 0.75rem 0;
  color: #1e293b;
}

.post .body {
  margin: 0 0 1.5rem 0;
  color: #475569;
  line-height: 1.6;
}

.comments-section h4 {
  margin: 0 0 1rem 0;
  color: #64748b;
  font-size: 0.875rem;
  text-transform: uppercase;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
}

.comment .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}

.comment .content {
  flex: 1;
}

.comment .author {
  color: #3b82f6;
  font-size: 0.875rem;
}

.comment .text {
  margin: 0.25rem 0;
  color: #1e293b;
  font-size: 0.875rem;
}

.comment .time {
  color: #94a3b8;
  font-size: 0.75rem;
}`}
        js={`const posts = [
  {
    title: 'Learning Web Components',
    body: 'HTML Templates make it so easy to create reusable markup!',
    comments: [
      { 
        author: 'Alice', 
        text: 'Great post! Very helpful.', 
        time: '2 hours ago',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      { 
        author: 'Bob', 
        text: 'Thanks for sharing!', 
        time: '1 hour ago',
        avatar: 'https://i.pravatar.cc/150?img=2'
      }
    ]
  }
];

const postTemplate = document.getElementById('post-template');
const commentTemplate = document.getElementById('comment-template');
const feed = document.getElementById('feed');

posts.forEach(post => {
  // Clone post template
  const postClone = postTemplate.content.cloneNode(true);
  
  // Fill post data
  postClone.querySelector('.title').textContent = post.title;
  postClone.querySelector('.body').textContent = post.body;
  
  const commentsContainer = postClone.querySelector('.comments');
  
  // Clone comment template for each comment
  post.comments.forEach(comment => {
    const commentClone = commentTemplate.content.cloneNode(true);
    
    commentClone.querySelector('.avatar').src = comment.avatar;
    commentClone.querySelector('.author').textContent = comment.author;
    commentClone.querySelector('.text').textContent = comment.text;
    commentClone.querySelector('.time').textContent = comment.time;
    
    commentsContainer.appendChild(commentClone);
  });
  
  feed.appendChild(postClone);
});`}
        colorTheme='emerald'
        icon={Layers}
        previewHeight='550px'
      />

      {/* Example 4: Template with Custom Elements */}
      <FrontendCodePreview
        title='Templates in Custom Elements'
        description='Combining templates with Web Components'
        html={`<!-- Templates work great with Custom Elements! -->
<user-profile 
  name="Sarah Johnson" 
  role="Software Engineer"
  avatar="https://i.pravatar.cc/150?img=5">
</user-profile>

<user-profile 
  name="Mike Chen" 
  role="Product Designer"
  avatar="https://i.pravatar.cc/150?img=7">
</user-profile>`}
        css={`user-profile {
  display: block;
  margin: 1rem 0;
}`}
        js={`// Define template inside the custom element class
class UserProfile extends HTMLElement {
  constructor() {
    super();
    
    // Create template
    const template = document.createElement('template');
    template.innerHTML = \`
      <style>
        .profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid white;
        }
        .info h2 {
          margin: 0 0 0.25rem 0;
          font-size: 1.5rem;
        }
        .info p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.875rem;
        }
      </style>
      
      <div class="profile">
        <img class="avatar" src="" alt="">
        <div class="info">
          <h2 class="name"></h2>
          <p class="role"></p>
        </div>
      </div>
    \`;
    
    this.template = template;
  }
  
  connectedCallback() {
    // Clone the template
    const content = this.template.content.cloneNode(true);
    
    // Fill in attributes
    content.querySelector('.avatar').src = 
      this.getAttribute('avatar') || 'https://i.pravatar.cc/150';
    content.querySelector('.name').textContent = 
      this.getAttribute('name') || 'Anonymous';
    content.querySelector('.role').textContent = 
      this.getAttribute('role') || 'User';
    
    // Append to element
    this.appendChild(content);
  }
}

customElements.define('user-profile', UserProfile);`}
        colorTheme='amber'
        icon={Copy}
        previewHeight='450px'
      />

      {/* Template vs innerHTML */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Zap className='w-5 h-5 text-blue-600' />
            Template vs innerHTML
          </CardTitle>
          <CardDescription>Why templates are better for dynamic content</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Using innerHTML */}
            <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-2 border-red-200 dark:border-red-800'>
              <Badge className='bg-red-600 hover:bg-red-700 mb-3'>
                ❌ Using innerHTML
              </Badge>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-red-200 dark:border-red-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Parsed EVERY time
container.innerHTML = \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${text}</p>
  </div>
\`;

// Issues:
// - Parsed repeatedly
// - Event listeners lost
// - Potential XSS risks
// - Slower performance`}</code>
              </pre>
            </div>

            {/* Using Template */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <Badge className='bg-emerald-600 hover:bg-emerald-700 mb-3'>
                ✅ Using Template
              </Badge>
              <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
                <code className='text-slate-800 dark:text-slate-200'>{`// Parsed ONCE
const clone = 
  template.content.cloneNode(true);

clone.querySelector('h2')
  .textContent = title;
clone.querySelector('p')
  .textContent = text;

// Benefits:
// - Parsed once
// - Event listeners work
// - Safe from XSS
// - Better performance`}</code>
              </pre>
            </div>
          </div>

          <Alert className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
            <CheckCircle className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <AlertTitle className='text-emerald-700 dark:text-emerald-300'>
              Performance Winner
            </AlertTitle>
            <AlertDescription className='text-emerald-600 dark:text-emerald-400'>
              Templates are parsed once and cloned multiple times, making them <strong>much faster</strong> than innerHTML for repeated content. They also maintain proper event listeners and avoid security issues.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-5 h-5 text-emerald-600' />
            Best Practices
          </CardTitle>
          <CardDescription>Guidelines for effective template usage</CardDescription>
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
                'Use templates for repeated UI patterns',
                'Clone with cloneNode(true) for deep clones',
                'Store template references for reuse',
                'Use meaningful IDs for templates',
                'Combine templates with Custom Elements',
                'Keep templates semantic and accessible'
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
                "Don't use innerHTML for repeated content",
                "Don't forget to clone before modifying",
                "Don't put templates inside templates (nest content instead)",
                "Don't rely on styles in template without encapsulation",
                "Don't use template for single-use markup",
                "Don't forget the 'true' parameter in cloneNode()"
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
          <CardDescription>HTML Template support across major browsers</CardDescription>
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
                  { browser: 'Chrome', version: '26+', status: '✅', notes: 'Full support since 2013' },
                  { browser: 'Firefox', version: '22+', status: '✅', notes: 'Full support' },
                  { browser: 'Safari', version: '8+', status: '✅', notes: 'Full support' },
                  { browser: 'Edge', version: '13+', status: '✅', notes: 'Full support' },
                  { browser: 'Opera', version: '15+', status: '✅', notes: 'Full support' }
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
              HTML Templates have been supported by all major browsers for over 10 years. They're safe to use in production without polyfills for modern browsers.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Templates Playground</CardTitle>
          <CardDescription>Experiment with HTML templates and dynamic content generation</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='HTML Templates Playground'
            description='Clone and customize templates to create dynamic UI'
            features={[
              'Template Cloning',
              'Dynamic Content',
              'Event Handling',
              'Performance Benefits'
            ]}
            buttonText='Open Templates Playground'
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

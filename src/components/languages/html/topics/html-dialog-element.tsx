'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { File, MessageSquare, Play, Code, CheckCircle, XCircle, Lightbulb, Globe, Square, Maximize2, Settings, ArrowRight, Info, X, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlDialogElementProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<button id='open'>Open Dialog</button>
<dialog id='dlg'>
  <form method='dialog'>
    <p><strong>Hello!</strong> I am a native dialog.</p>
    <button>Close</button>
  </form>
</dialog>`,
  css: `dialog{border:1px solid #ccc;border-radius:8px;padding:1rem;}`,
  js: `const d=document.getElementById('dlg');document.getElementById('open').onclick=()=>d.showModal();`
};

export default function HtmlDialogElement({ onOpenWebPlayground }: HtmlDialogElementProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={MessageSquare} 
        category='HTML Basics' 
        title='Native Dialog Element' 
        description='Native modal and non-modal dialogs without external libraries'
        colorTheme='blue'
      />

      {/* What is Dialog Element? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What is the Dialog Element?
          </CardTitle>
          <CardDescription>Native HTML element for creating modals, popups, and dialog boxes</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;dialog&gt;</code> element provides a <strong>native way to create dialogs</strong> - no libraries needed! It supports both modal (blocks interaction with page) and non-modal (allows interaction) modes.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Modal */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Maximize2 className='w-4 h-4' />
                Modal Dialog
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Blocks page interaction</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Backdrop overlay</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>ESC key closes</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-xs'>showModal()</code></span>
                </li>
              </ul>
            </div>
            
            {/* Non-modal */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <Square className='w-4 h-4' />
                Non-Modal Dialog
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Page remains interactive</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>No backdrop</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span><strong>Must close manually</strong></span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-xs'>show()</code></span>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
            <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Basic Structure</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>Dialog content goes here...</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>

<script>
  document.getElementById('myDialog').showModal();
</script>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>Why Use Native Dialog?</AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              <strong>Built-in accessibility</strong> (focus trapping, ARIA roles), <strong>no dependencies</strong>, <strong>semantic HTML</strong>, and <strong>keyboard support</strong> out of the box!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Methods */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-purple-600' />
            Dialog Methods
          </CardTitle>
          <CardDescription>JavaScript methods to control dialog behavior</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* showModal() */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Badge className='bg-blue-600 hover:bg-blue-700'>showModal()</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Opens dialog as <strong>modal</strong> with backdrop
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700'>
                dialog.showModal();
              </code>
              <ul className='text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1'>
                <li>• Blocks page interaction</li>
                <li>• Traps focus inside</li>
                <li>• ESC closes dialog</li>
              </ul>
            </div>

            {/* show() */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Badge className='bg-emerald-600 hover:bg-emerald-700'>show()</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Opens dialog as <strong>non-modal</strong>
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-emerald-200 dark:border-emerald-700'>
                dialog.show();
              </code>
              <ul className='text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1'>
                <li>• Page remains interactive</li>
                <li>• No backdrop</li>
                <li>• Manual close only</li>
              </ul>
            </div>

            {/* close() */}
            <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800'>
              <div className='flex items-center gap-2 mb-3'>
                <Badge className='bg-red-600 hover:bg-red-700'>close()</Badge>
              </div>
              <p className='text-sm text-slate-700 dark:text-slate-300 mb-3'>
                Closes the dialog
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-red-200 dark:border-red-700'>
                dialog.close('returnValue');
              </code>
              <ul className='text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1'>
                <li>• Optional return value</li>
                <li>• Triggers close event</li>
                <li>• Removes from top layer</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5 text-amber-600' />
            Dialog Events
          </CardTitle>
          <CardDescription>Listen for dialog state changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* close event */}
            <div className='bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800'>
              <h4 className='font-semibold text-amber-700 dark:text-amber-300 mb-2 text-sm flex items-center gap-2'>
                <X className='w-4 h-4' />
                close Event
              </h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Fired when dialog is closed</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-amber-200 dark:border-amber-700'>
                <code>{`dialog.addEventListener('close', () => {
  console.log(dialog.returnValue);
});`}</code>
              </pre>
            </div>

            {/* cancel event */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm flex items-center gap-2'>
                <XCircle className='w-4 h-4' />
                cancel Event
              </h4>
              <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>Fired when ESC is pressed (modal only)</p>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-purple-200 dark:border-purple-700'>
                <code>{`dialog.addEventListener('cancel', (e) => {
  e.preventDefault(); // Prevent close
});`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form method="dialog" */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Code className='w-5 h-5 text-emerald-600' />
            Form method="dialog"
          </CardTitle>
          <CardDescription>Special form behavior for dialogs</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            When a <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>&lt;form&gt;</code> inside a dialog has <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>method="dialog"</code>, submitting it <strong>closes the dialog</strong> without page reload.
          </p>

          <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
            <h4 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-2 text-sm'>Example with Form</h4>
            <pre className='text-xs bg-white dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-700 overflow-x-auto'>
              <code className='text-slate-800 dark:text-slate-200'>{`<dialog id="confirmDialog">
  <form method="dialog">
    <p>Are you sure you want to delete?</p>
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<script>
  const dialog = document.getElementById('confirmDialog');
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
      console.log('User confirmed!');
    }
  });
</script>`}</code>
            </pre>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertDescription className='text-blue-700 dark:text-blue-300'>
              <strong>Button value becomes returnValue:</strong> The <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>value</code> attribute of the clicked button becomes <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm'>dialog.returnValue</code>.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Backdrop Styling */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Layers className='w-5 h-5 text-purple-600' />
            Backdrop Styling
          </CardTitle>
          <CardDescription>Style the overlay behind modal dialogs</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            Use the <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded'>::backdrop</code> pseudo-element to style the overlay that appears behind modal dialogs.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Dark Backdrop</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Blur Effect</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`dialog::backdrop {
  backdrop-filter: blur(5px);
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Gradient Backdrop</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`dialog::backdrop {
  background: linear-gradient(
    45deg, 
    rgba(59,130,246,0.5), 
    rgba(147,51,234,0.5)
  );
}`}</code>
              </pre>
            </div>

            <div className='bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
              <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm'>Animated Backdrop</h4>
              <pre className='text-xs bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800'>
                <code>{`dialog::backdrop {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Globe className='w-5 h-5 text-amber-600' />
            Common Use Cases
          </CardTitle>
          <CardDescription>Real-world scenarios for dialog elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { 
                title: 'Confirmation Dialogs', 
                desc: 'Ask user to confirm destructive actions',
                example: 'Delete, Logout, Discard changes',
                icon: CheckCircle,
                color: 'blue'
              },
              { 
                title: 'Alert Messages', 
                desc: 'Show important notifications',
                example: 'Success, Error, Warning messages',
                icon: Info,
                color: 'emerald'
              },
              { 
                title: 'Forms & Inputs', 
                desc: 'Collect user input in focused context',
                example: 'Login, Sign up, Settings forms',
                icon: Code,
                color: 'purple'
              },
              { 
                title: 'Image Lightbox', 
                desc: 'Display media in full view',
                example: 'Photo gallery, Video player',
                icon: Maximize2,
                color: 'amber'
              },
              { 
                title: 'Cookie Consent', 
                desc: 'Privacy notices (non-modal)',
                example: 'GDPR compliance banners',
                icon: Settings,
                color: 'red'
              },
              { 
                title: 'Help & Tooltips', 
                desc: 'Contextual information',
                example: 'Feature tours, Help docs',
                icon: Lightbulb,
                color: 'cyan'
              },
            ].map((useCase, index) => (
              <div key={index} className={`bg-${useCase.color}-50 dark:bg-${useCase.color}-950/20 p-4 rounded-lg border border-${useCase.color}-200 dark:border-${useCase.color}-800`}>
                <div className='flex items-center gap-2 mb-2'>
                  <useCase.icon className={`w-5 h-5 text-${useCase.color}-600`} />
                  <h3 className={`font-semibold text-${useCase.color}-700 dark:text-${useCase.color}-300`}>{useCase.title}</h3>
                </div>
                <p className='text-sm text-slate-700 dark:text-slate-300 mb-2'>{useCase.desc}</p>
                <code className='text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 block'>
                  {useCase.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <MessageSquare className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Dialog in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See modal and non-modal dialogs with different styles and behaviors
        </p>

        {/* Example 1: Simple Modal Dialog */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title='1. Simple Modal Dialog'
              description='Basic modal with backdrop and ESC to close'
            html={`<div class="dialog-container">
  <h3>Simple Modal Dialog</h3>
  <p class="description">Basic modal with backdrop and ESC to close</p>
  
  <button class="open-btn" id="openModal1">Open Simple Modal</button>
    
    <dialog id="modal1" class="simple-dialog">
      <div class="dialog-header">
        <h3>Welcome! 👋</h3>
        <button class="close-btn" id="closeModal1">×</button>
      </div>
      <div class="dialog-content">
        <p>This is a simple modal dialog. Click the X button, press ESC, or click outside to close.</p>
      </div>
    </dialog>
  
  <div class="info-badge">
    ⌨️ Press ESC to close
  </div>
</div>

<p class="note">💡 showModal() displays the dialog as a modal with a backdrop</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.dialog-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .dialog-container {
  background: #1e293b;
}

h3 {
  color: #3b82f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #60a5fa;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.open-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #3b82f6;
  color: white;
}

.open-btn:hover {
  background: #2563eb;
}

dialog {
  border: none;
  border-radius: 12px;
  padding: 0;
  max-width: 500px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

html.dark dialog {
  background: #1e293b;
  color: #f1f5f9;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

.dialog-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

html.dark .dialog-header {
  border-bottom-color: #374151;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
}

.close-btn:hover {
  color: #1f2937;
}

.dialog-content {
  padding: 1.5rem;
}

.dialog-content p {
  color: #4b5563;
}

html.dark .dialog-content p {
  color: #d1d5db;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #93c5fd;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #1e3a8a;
  color: #bfdbfe;
  border-color: #2563eb;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}`}
            js={`const modal1 = document.getElementById('modal1');
const openModal1 = document.getElementById('openModal1');
const closeModal1 = document.getElementById('closeModal1');

openModal1.addEventListener('click', () => {
  modal1.showModal();
});

closeModal1.addEventListener('click', () => {
  modal1.close();
});

// Click backdrop to close
modal1.addEventListener('click', (e) => {
  if (e.target === modal1) {
    modal1.close();
  }
});`}
            colorTheme='blue'
            icon={MessageSquare}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 2: Confirmation Dialog */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='2. Confirmation Dialog'
            description='Modal with form method="dialog" for return values'
            html={`<div class="dialog-container">
  <h3>Confirmation Dialog</h3>
  <p class="description">Get user confirmation with return values</p>
  
  <button class="open-btn" id="openConfirm">Delete Item</button>
  <p class="result" id="confirmResult"></p>
  
  <dialog id="confirmDialog" class="confirm-dialog">
    <form method="dialog">
      <div class="dialog-header">
        <h3>⚠️ Confirm Deletion</h3>
      </div>
      <div class="dialog-content">
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </div>
      <div class="dialog-actions">
        <button value="cancel" class="btn-secondary">Cancel</button>
        <button value="confirm" class="btn-danger">Delete</button>
      </div>
    </form>
  </dialog>
  
  <div class="info-badge">
    ✓ Form method="dialog" returns value
  </div>
</div>

<p class="note">💡 form method="dialog" closes the dialog and returns the button value</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.dialog-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .dialog-container {
  background: #1e293b;
}

h3 {
  color: #ef4444;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #f87171;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.open-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #ef4444;
  color: white;
}

.open-btn:hover {
  background: #dc2626;
}

dialog {
  border: none;
  border-radius: 12px;
  padding: 0;
  max-width: 500px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

html.dark dialog {
  background: #1e293b;
  color: #f1f5f9;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

.dialog-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

html.dark .dialog-header {
  border-bottom-color: #374151;
}

.dialog-content {
  padding: 1.5rem;
}

.dialog-content p {
  color: #4b5563;
}

html.dark .dialog-content p {
  color: #d1d5db;
}

.dialog-actions {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

html.dark .dialog-actions {
  border-top-color: #374151;
}

.btn-secondary,
.btn-danger {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary {
  background: #e5e7eb;
  color: #374151;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.result {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  display: none;
}

.result.show {
  display: block;
}

.result.success {
  background: #d1fae5;
  color: #065f46;
  border: 2px solid #6ee7b7;
}

.result.cancel {
  background: #fee2e2;
  color: #991b1b;
  border: 2px solid #fca5a5;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #fca5a5;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #7f1d1d;
  color: #fecaca;
  border-color: #dc2626;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #7f1d1d;
  color: #fecaca;
}`}
            js={`const confirmDialog = document.getElementById('confirmDialog');
const openConfirm = document.getElementById('openConfirm');
const confirmResult = document.getElementById('confirmResult');

openConfirm.addEventListener('click', () => {
  confirmDialog.showModal();
});

confirmDialog.addEventListener('close', () => {
  confirmResult.classList.remove('success', 'cancel');
  
  if (confirmDialog.returnValue === 'confirm') {
    confirmResult.textContent = '✓ Item deleted successfully';
    confirmResult.classList.add('show', 'success');
  } else {
    confirmResult.textContent = '✗ Deletion cancelled';
    confirmResult.classList.add('show', 'cancel');
  }
  
  setTimeout(() => {
    confirmResult.classList.remove('show');
  }, 3000);
});`}
            colorTheme='purple'
            icon={X}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 3: Non-Modal Dialog */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='3. Non-Modal Dialog'
            description='Page remains interactive, no backdrop'
            html={`<div class="dialog-container">
  <h3>Non-Modal Dialog</h3>
  <p class="description">Dialog doesn't block page interaction</p>
  
  <button class="open-btn" id="openNonModal">Open Non-Modal</button>
  <p class="note-inline">Try clicking this text while dialog is open!</p>
  
  <dialog id="nonModal" class="non-modal-dialog">
    <div class="dialog-header">
      <h3>📝 Info Panel</h3>
      <button class="close-btn" id="closeNonModal">×</button>
    </div>
    <div class="dialog-content">
      <p>This is a non-modal dialog. You can still interact with the page behind it!</p>
    </div>
  </dialog>
  
  <div class="info-badge">
    🖱️ Page remains interactive
  </div>
</div>

<p class="note">💡 show() displays the dialog without a backdrop</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.dialog-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .dialog-container {
  background: #1e293b;
}

h3 {
  color: #10b981;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #6ee7b7;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.open-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #10b981;
  color: white;
}

.open-btn:hover {
  background: #059669;
}

.note-inline {
  color: #6b7280;
  font-style: italic;
  margin-top: 1rem;
}

html.dark .note-inline {
  color: #9ca3af;
}

dialog {
  border: none;
  border-radius: 12px;
  padding: 0;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

html.dark dialog {
  background: #1e293b;
  color: #f1f5f9;
}

.non-modal-dialog {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
}

.dialog-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

html.dark .dialog-header {
  border-bottom-color: #374151;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
}

.close-btn:hover {
  color: #1f2937;
}

.dialog-content {
  padding: 1.5rem;
}

.dialog-content p {
  color: #4b5563;
}

html.dark .dialog-content p {
  color: #d1d5db;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #a7f3d0;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #064e3b;
  color: #a7f3d0;
  border-color: #10b981;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
            js={`const nonModal = document.getElementById('nonModal');
const openNonModal = document.getElementById('openNonModal');
const closeNonModal = document.getElementById('closeNonModal');

openNonModal.addEventListener('click', () => {
  nonModal.show(); // Use show() for non-modal
});

closeNonModal.addEventListener('click', () => {
  nonModal.close();
});`}
            colorTheme='emerald'
            icon={Square}
            previewHeight='450px'
          />
        </CardContent>
      </Card>

      {/* Example 4: Styled Dialog with Backdrop */}
      <Card>
        <CardContent className='pt-6'>
          <FrontendCodePreview
            title='4. Styled Dialog with Custom Backdrop'
            description='Custom styling with gradient header and blur backdrop'
            html={`<div class="dialog-container">
  <h3>Styled Dialog</h3>
  <p class="description">Custom styles and backdrop effects</p>
  
  <button class="open-btn" id="openStyled">Open Styled Dialog</button>
  
  <dialog id="styledDialog" class="styled-dialog">
    <div class="dialog-header gradient">
      <h3>✨ Premium Feature</h3>
      <button class="close-btn white" id="closeStyled">×</button>
    </div>
    <div class="dialog-content">
      <p>This dialog has custom styling including gradient header and blur backdrop.</p>
      <ul>
        <li>✓ Gradient header</li>
        <li>✓ Blur backdrop</li>
        <li>✓ Smooth animations</li>
      </ul>
    </div>
    <div class="dialog-actions">
      <button class="btn-primary">Get Started</button>
    </div>
  </dialog>
  
  <div class="info-badge">
    🎨 Custom backdrop with blur
  </div>
</div>

<p class="note">💡 Use ::backdrop pseudo-element for custom backdrop styling</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.dialog-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .dialog-container {
  background: #1e293b;
}

h3 {
  color: #8b5cf6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

html.dark h3 {
  color: #c4b5fd;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

html.dark .description {
  color: #94a3b8;
}

.open-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #8b5cf6;
  color: white;
}

.open-btn:hover {
  background: #7c3aed;
}

dialog {
  border: none;
  border-radius: 12px;
  padding: 0;
  max-width: 500px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

html.dark dialog {
  background: #1e293b;
  color: #f1f5f9;
}

.styled-dialog::backdrop {
  backdrop-filter: blur(5px);
  background: rgba(139, 92, 246, 0.2);
}

.dialog-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-header.gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
}

.dialog-header h3 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
}

.close-btn.white {
  color: white;
}

.close-btn:hover {
  opacity: 0.8;
}

.dialog-content {
  padding: 1.5rem;
}

.dialog-content p {
  color: #4b5563;
  margin-bottom: 1rem;
}

html.dark .dialog-content p {
  color: #d1d5db;
}

.dialog-content ul {
  list-style: none;
  padding: 0;
}

.dialog-content li {
  padding: 0.5rem 0;
  color: #6b7280;
}

html.dark .dialog-content li {
  color: #9ca3af;
}

.dialog-actions {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

html.dark .dialog-actions {
  border-top-color: #374151;
}

.btn-primary {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background: #8b5cf6;
  color: white;
}

.btn-primary:hover {
  background: #7c3aed;
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid #d8b4fe;
  margin-top: 1rem;
}

html.dark .info-badge {
  background: #581c87;
  color: #e9d5ff;
  border-color: #a855f7;
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}`}
            js={`const styledDialog = document.getElementById('styledDialog');
const openStyled = document.getElementById('openStyled');
const closeStyled = document.getElementById('closeStyled');

openStyled.addEventListener('click', () => {
  styledDialog.showModal();
});

closeStyled.addEventListener('click', () => {
  styledDialog.close();
});

styledDialog.addEventListener('click', (e) => {
  if (e.target === styledDialog) {
    styledDialog.close();
  }
});`}
            colorTheme='amber'
            icon={Maximize2}
            previewHeight='500px'
          />
        </CardContent>
      </Card>
    </div>

    {/* Best Practices */}
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CheckCircle className='w-5 h-5 text-green-600' />
          Best Practices
        </CardTitle>
        <CardDescription>Tips for using dialog elements effectively</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Do This */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 pb-2 border-b-2 border-green-200 dark:border-green-800'>
              <CheckCircle className='w-5 h-5 text-green-600' />
              <span className='font-semibold text-green-700 dark:text-green-400'>✅ Do This</span>
            </div>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>showModal()</code> for important dialogs</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Add descriptive <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>aria-label</code> attributes</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Use <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>method="dialog"</code> for forms</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Style <code className='bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs'>::backdrop</code> for better UX</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Provide clear close buttons</span>
              </li>
            </ul>
          </div>

          {/* Avoid This */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 pb-2 border-b-2 border-red-200 dark:border-red-800'>
              <XCircle className='w-5 h-5 text-red-600' />
              <span className='font-semibold text-red-700 dark:text-red-400'>❌ Avoid This</span>
            </div>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't use for non-critical notifications</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't prevent ESC key closing (bad UX)</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't nest dialogs inside dialogs</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't make dialogs too large</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Don't forget mobile responsiveness</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Browser Support */}
    <Card className='border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-emerald-700 dark:text-emerald-300'>
          <Globe className='w-5 h-5' />
          Browser Support
        </CardTitle>
        <CardDescription>Native dialog element has excellent modern browser support</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { name: 'Chrome', version: '37+', supported: true },
            { name: 'Firefox', version: '98+', supported: true },
            { name: 'Safari', version: '15.4+', supported: true },
            { name: 'Edge', version: '79+', supported: true },
          ].map((browser, index) => (
            <div key={index} className='bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 text-center'>
              <div className='font-semibold text-slate-700 dark:text-slate-200'>{browser.name}</div>
              <div className='text-sm text-slate-600 dark:text-slate-400 mt-1'>{browser.version}</div>
              <Badge className='mt-2 bg-emerald-600 hover:bg-emerald-700'>✓ Supported</Badge>
            </div>
          ))}
        </div>
        <Alert className='mt-4 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
          <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
          <AlertDescription className='text-blue-700 dark:text-blue-300'>
            <strong>Good Support:</strong> Dialog element is well-supported in modern browsers. Safari added support in 2022. For older browsers, consider a <a href="https://github.com/GoogleChrome/dialog-polyfill" className="underline">polyfill</a>.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Interactive Playground */}
    <Card>
      <CardHeader>
        <CardTitle>Interactive Dialog Playground</CardTitle>
        <CardDescription>Experiment with native dialogs in a live code editor.</CardDescription>
      </CardHeader>
      <CardContent>
        <InteractivePlayground
          title='Dialog Playground'
          description='Play around with modal and non-modal dialog examples'
          features={[
            'showModal() & show()',
            'Form method="dialog"',
            'Backdrop Styling',
            'Event Handling'
          ]}
          buttonText='Open Dialog Playground'
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


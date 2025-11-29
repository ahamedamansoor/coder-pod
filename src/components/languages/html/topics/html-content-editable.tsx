'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Edit3, 
  Info, 
  Type, 
  CheckSquare, 
  Table, 
  Palette,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  MousePointer,
  Keyboard,
  Save
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlContentEditableProps { 
  onOpenWebPlayground?: (h:string,c:string,j:string)=>void 
}

const demo = {
  html: `<div contenteditable="true" class="editor">
  <h2>Try editing this!</h2>
  <p>Click anywhere and start typing...</p>
</div>`,
  css: `.editor {
  border: 2px dashed #3b82f6;
  padding: 1.5rem;
  border-radius: 8px;
  font-family: system-ui;
  min-height: 150px;
  background: #f8fafc;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .editor {
    background: #0f172a;
    color: #e2e8f0;
  }
  
  .editor:focus {
    background: #1e293b !important;
  }
}

.editor:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  background: white;
}`,
  js: ''
};

export default function HtmlContentEditable({ onOpenWebPlayground }: HtmlContentEditableProps) {
  return (
    <div className='space-y-10 pb-16'>
      <PageHeader 
        icon={Edit3} 
        category='Interactive & Components' 
        title='ContentEditable Attribute' 
        description='Make any HTML element editable by users without complex JavaScript'
        colorTheme='blue'
      />

      {/* What is ContentEditable? */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            What is ContentEditable?
          </CardTitle>
          <CardDescription>
            Native HTML attribute for inline content editing
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-slate-700 dark:text-slate-300'>
            The <code className='px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-blue-600'>contenteditable</code> attribute makes any HTML element's content editable by the user. It's perfect for creating rich text editors, inline editing interfaces, note-taking apps, and collaborative editing tools—all without heavy JavaScript frameworks.
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Features Card 1 */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2'>
                <Type className='w-4 h-4' />
                Key Features
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>No JavaScript required</strong> for basic editing</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Native browser support</strong> - works everywhere</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Preserves formatting</strong> like bold, italic, lists</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5'>•</span>
                  <span><strong>Keyboard shortcuts</strong> work automatically</span>
                </li>
              </ul>
            </div>

            {/* Use Cases Card */}
            <div className='bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-800'>
              <h3 className='font-semibold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2'>
                <MousePointer className='w-4 h-4' />
                Common Use Cases
              </h3>
              <ul className='text-sm space-y-2 text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Rich text editors & WYSIWYG tools</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Inline editing (click-to-edit)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Note-taking and document apps</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-0.5'>•</span>
                  <span>Collaborative editing interfaces</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className='border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20'>
            <Lightbulb className='h-4 w-4 text-blue-600 dark:text-blue-400' />
            <AlertTitle className='text-blue-700 dark:text-blue-300'>
              Quick Start
            </AlertTitle>
            <AlertDescription className='text-blue-600 dark:text-blue-400'>
              Simply add <code className='px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-blue-700 dark:text-blue-300'>contenteditable="true"</code> to any element to make it instantly editable. Try it with divs, paragraphs, or even table cells!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How It Works - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ArrowRight className='w-5 h-5 text-purple-600' />
            How ContentEditable Works
          </CardTitle>
          <CardDescription>From static content to editable interface</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='grid md:grid-cols-3 gap-4'>
            {[
              {
                step: '1',
                icon: Type,
                title: 'Add Attribute',
                desc: 'Add contenteditable="true" to any HTML element',
                color: 'blue'
              },
              {
                step: '2',
                icon: Keyboard,
                title: 'User Edits',
                desc: 'User clicks and types directly in the element',
                color: 'purple'
              },
              {
                step: '3',
                icon: Save,
                title: 'Save Changes',
                desc: 'Use JavaScript to capture and persist the edited content',
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
              Key Concept
            </h4>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              When an element has <code className='px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-blue-600'>contenteditable="true"</code>, the browser automatically:
            </p>
            <ul className='text-sm text-slate-600 dark:text-slate-400 mt-2 space-y-1 ml-4'>
              <li>• Makes text selectable and editable</li>
              <li>• Enables cursor placement and text selection</li>
              <li>• Supports keyboard shortcuts (Ctrl+B, Ctrl+I, etc.)</li>
              <li>• Allows copy, cut, and paste operations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic ContentEditable */}
      <FrontendCodePreview
        title='Basic ContentEditable'
        description='Simple editable div with styling and focus effects'
        html={`<!-- Basic editable element -->
<div contenteditable="true" class="editable-box">
  <h3>Click to Edit</h3>
  <p>Try clicking here and typing some text. You can format it, add new lines, and edit freely!</p>
</div>`}
        css={`.editable-box {
  border: 2px dashed #3b82f6;
  padding: 1.5rem;
  border-radius: 8px;
  font-family: system-ui;
  min-height: 120px;
  background: #f8fafc;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .editable-box {
    background: #0f172a;
  }
  
  .editable-box:focus {
    background: #1e293b !important;
  }
  
  .editable-box h3 {
    color: #e2e8f0 !important;
  }
  
  .editable-box p {
    color: #94a3b8 !important;
  }
}

.editable-box:focus {
  outline: none;
  border-color: #2563eb;
  background: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.editable-box h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.editable-box p {
  color: #64748b;
  line-height: 1.6;
}`}
        js=''
        colorTheme='blue'
        icon={Edit3}
        previewHeight='300px'
      />

      {/* Example 2: Rich Text Editor */}
      <FrontendCodePreview
        title='Rich Text Editor with Toolbar'
        description='WYSIWYG editor with formatting buttons using execCommand'
        html={`<div class="editor-container">
  <!-- Toolbar -->
  <div class="toolbar">
    <button onclick="document.execCommand('bold')">
      <strong>B</strong>
    </button>
    <button onclick="document.execCommand('italic')">
      <em>I</em>
    </button>
    <button onclick="document.execCommand('underline')">
      <u>U</u>
    </button>
    <button onclick="document.execCommand('insertUnorderedList')">
      • List
    </button>
  </div>
  
  <!-- Editor -->
  <div contenteditable="true" class="rich-editor" id="editor">
    <p>Try using the toolbar buttons above to format this text!</p>
    <p>You can make text <strong>bold</strong>, <em>italic</em>, or <u>underlined</u>.</p>
  </div>
</div>`}
        css={`.editor-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

@media (prefers-color-scheme: dark) {
  .editor-container {
    background: #1e293b;
    border-color: #334155;
  }
  
  .toolbar {
    background: #0f172a !important;
    border-bottom-color: #334155 !important;
  }
  
  .toolbar button {
    background: #1e293b !important;
    border-color: #475569 !important;
    color: #e2e8f0 !important;
  }
  
  .rich-editor {
    color: #e2e8f0;
  }
  
  .rich-editor:focus {
    background: #0f172a !important;
  }
}

.toolbar {
  display: flex;
  gap: 4px;
  padding: 8px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.toolbar button {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.toolbar button:hover {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.rich-editor {
  padding: 1rem;
  min-height: 150px;
  outline: none;
  font-family: system-ui;
  line-height: 1.6;
}

.rich-editor:focus {
  background: #fefce8;
}`}
        js={`// Focus editor on load
document.getElementById('editor').focus();`}
        colorTheme='purple'
        icon={Palette}
        previewHeight='350px'
      />

      {/* Example 3: Editable Table */}
      <FrontendCodePreview
        title='Editable Table Cells'
        description='Make table cells editable for inline data entry'
        html={`<div class="table-container">
  <h4>Employee Directory (Click to Edit)</h4>
  <table class="editable-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td contenteditable="true">Alice Johnson</td>
        <td contenteditable="true">Designer</td>
        <td contenteditable="true">alice@example.com</td>
      </tr>
      <tr>
        <td contenteditable="true">Bob Smith</td>
        <td contenteditable="true">Developer</td>
        <td contenteditable="true">bob@example.com</td>
      </tr>
      <tr>
        <td contenteditable="true">Carol Davis</td>
        <td contenteditable="true">Manager</td>
        <td contenteditable="true">carol@example.com</td>
      </tr>
    </tbody>
  </table>
  <p class="hint">💡 Click any cell to edit</p>
</div>`}
        css={`.table-container {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .table-container {
    background: #0f172a;
  }
  
  .table-container h4 {
    color: #e2e8f0 !important;
  }
  
  .editable-table {
    background: #1e293b !important;
  }
  
  .editable-table td {
    border-bottom-color: #334155 !important;
    color: #e2e8f0;
  }
  
  .editable-table td:focus {
    background: #0f172a !important;
  }
  
  .hint {
    color: #94a3b8 !important;
  }
}

.table-container h4 {
  margin-bottom: 1rem;
  color: #1e293b;
}

.editable-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.editable-table th {
  background: #10b981;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
}

.editable-table td {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.2s;
}

.editable-table td:focus {
  outline: 2px solid #10b981;
  outline-offset: -2px;
  background: #ecfdf5;
}

.hint {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
}`}
        js=''
        colorTheme='emerald'
        icon={Table}
        previewHeight='400px'
      />

      {/* Example 4: To-Do List */}
      <FrontendCodePreview
        title='Editable To-Do List'
        description='Interactive checklist with editable tasks'
        html={`<div class="todo-container">
  <h3>My Tasks</h3>
  <div class="todo-list">
    <div class="todo-item">
      <input type="checkbox" id="task1">
      <label for="task1">
        <span contenteditable="true" class="task-text">
          Complete project documentation
        </span>
      </label>
    </div>
    <div class="todo-item">
      <input type="checkbox" id="task2">
      <label for="task2">
        <span contenteditable="true" class="task-text">
          Review pull requests
        </span>
      </label>
    </div>
    <div class="todo-item">
      <input type="checkbox" id="task3" checked>
      <label for="task3">
        <span contenteditable="true" class="task-text">
          Update dependencies
        </span>
      </label>
    </div>
  </div>
  <button class="add-task">+ Add Task</button>
</div>`}
        css={`.todo-container {
  max-width: 400px;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .todo-container {
    background: #1e293b;
  }
  
  .todo-container h3 {
    color: #e2e8f0 !important;
  }
  
  .todo-item {
    background: #0f172a !important;
  }
  
  .todo-item:hover {
    background: #334155 !important;
  }
  
  .task-text {
    color: #e2e8f0;
  }
  
  .task-text:focus {
    background: #422006 !important;
  }
}

.todo-container h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
  transition: background 0.2s;
}

.todo-item:hover {
  background: #f1f5f9;
}

.todo-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 0.75rem;
  cursor: pointer;
}

.task-text {
  flex: 1;
  outline: none;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
}

.task-text:focus {
  background: #fef3c7;
}

input[type="checkbox"]:checked + label .task-text {
  text-decoration: line-through;
  color: #94a3b8;
}

.add-task {
  width: 100%;
  padding: 0.75rem;
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.add-task:hover {
  background: #d97706;
}`}
        js={`document.querySelector('.add-task').addEventListener('click', function() {
  const list = document.querySelector('.todo-list');
  const newTask = document.createElement('div');
  newTask.className = 'todo-item';
  const id = 'task' + Date.now();
  newTask.innerHTML = \`
    <input type="checkbox" id="\${id}">
    <label for="\${id}">
      <span contenteditable="true" class="task-text">
        New task...
      </span>
    </label>
  \`;
  list.appendChild(newTask);
  newTask.querySelector('.task-text').focus();
});`}
        colorTheme='amber'
        icon={CheckSquare}
        previewHeight='450px'
      />

      {/* Key Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            ContentEditable Attribute Values
          </CardTitle>
          <CardDescription>Different modes and behaviors</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {/* True */}
            <div className='bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800'>
              <Badge className='bg-blue-600 hover:bg-blue-700 mb-3'>
                contenteditable="true"
              </Badge>
              <h3 className='font-semibold text-blue-700 dark:text-blue-300 mb-2'>
                Editable
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Element content is fully editable by the user
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-blue-200 dark:border-blue-700 mt-3'>
                &lt;div contenteditable="true"&gt;
              </code>
            </div>

            {/* False */}
            <div className='bg-slate-50 dark:bg-slate-900/20 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700'>
              <Badge className='bg-slate-600 hover:bg-slate-700 mb-3'>
                contenteditable="false"
              </Badge>
              <h3 className='font-semibold text-slate-700 dark:text-slate-300 mb-2'>
                Not Editable
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Element content cannot be edited (default behavior)
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-slate-200 dark:border-slate-700 mt-3'>
                &lt;div contenteditable="false"&gt;
              </code>
            </div>

            {/* Inherit */}
            <div className='bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800'>
              <Badge className='bg-purple-600 hover:bg-purple-700 mb-3'>
                contenteditable="inherit"
              </Badge>
              <h3 className='font-semibold text-purple-700 dark:text-purple-300 mb-2'>
                Inherit
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Inherits editable state from parent element
              </p>
              <code className='text-xs bg-white dark:bg-slate-950 p-2 rounded block border border-purple-200 dark:border-purple-700 mt-3'>
                &lt;span contenteditable="inherit"&gt;
              </code>
            </div>
          </div>

          <Alert className='border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20'>
            <Lightbulb className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <AlertTitle className='text-amber-700 dark:text-amber-300'>
              Related Attributes
            </AlertTitle>
            <AlertDescription className='text-amber-600 dark:text-amber-400 space-y-2'>
              <div><code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>spellcheck="true"</code> - Enable spell checking</div>
              <div><code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>inputmode="text"</code> - Hint keyboard type on mobile</div>
              <div><code className='px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900 rounded'>autocorrect="on"</code> - Enable auto-correction (Safari)</div>
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
          <CardDescription>Guidelines for using contenteditable effectively</CardDescription>
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
                'Provide clear visual feedback when element is focused',
                'Save content changes to prevent data loss',
                'Sanitize user input before storing or displaying',
                'Add aria-label for accessibility context',
                'Use proper keyboard navigation and shortcuts',
                'Show save/cancel buttons for important edits'
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
                "Don't make entire pages contenteditable",
                "Don't trust user input without sanitization",
                "Don't forget to handle paste events properly",
                "Don't rely solely on contenteditable for forms",
                "Don't ignore browser inconsistencies",
                "Don't forget to disable spell check when needed"
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
          <CardDescription>ContentEditable support across major browsers</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-slate-200 dark:border-slate-700'>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Browser</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Basic Support</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>execCommand</th>
                  <th className='text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome', version: '4+', exec: 'Full', notes: 'Excellent support' },
                  { browser: 'Firefox', version: '3+', exec: 'Full', notes: 'Excellent support' },
                  { browser: 'Safari', version: '3.1+', exec: 'Full', notes: 'Some quirks in older versions' },
                  { browser: 'Edge', version: '12+', exec: 'Full', notes: 'Consistent with Chrome' },
                  { browser: 'Opera', version: '9+', exec: 'Full', notes: 'Excellent support' }
                ].map((row, index) => (
                  <tr key={index} className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3 px-4 font-medium text-slate-700 dark:text-slate-300'>{row.browser}</td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-emerald-600 hover:bg-emerald-700'>{row.version}</Badge>
                    </td>
                    <td className='py-3 px-4'>
                      <Badge className='bg-blue-600 hover:bg-blue-700'>{row.exec}</Badge>
                    </td>
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
              ContentEditable has been supported since the early 2000s and works reliably across all modern browsers. The <code>execCommand</code> API is being replaced by the newer <strong>Input Events</strong> API for better control.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive ContentEditable Playground</CardTitle>
          <CardDescription>Experiment with editable content and see how it works in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title='ContentEditable Playground'
            description='Try making any element editable in real-time'
            features={[
              'Live Editing',
              'Rich Formatting',
              'Real-World Examples',
              'Instant Preview'
            ]}
            buttonText='Open ContentEditable Playground'
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


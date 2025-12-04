'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Move, Lightbulb, Sparkles, Hand } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlDraggableProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicDraggableExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Draggable</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem;
      background: #f0f9ff;
      text-align: center;
      margin: 0;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0c4a6e;
        color: #e0f2fe;
      }
    }
    
    h1 {
      color: #0369a1;
      margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #7dd3fc;
      }
    }
    
    .items {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .box {
      background: #2563eb;
      color: #fff;
      padding: 1.5rem;
      border-radius: 8px;
      cursor: move;
      user-select: none;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .box:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
    }
    
    .box[draggable="false"] {
      background: #94a3b8;
      cursor: not-allowed;
    }
    
    @media (prefers-color-scheme: dark) {
      .box[draggable="false"] {
        background: #64748b;
      }
    }
    
    .note {
      color: #64748b;
      font-style: italic;
      margin-top: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <h1>Drag These Elements</h1>
  
  <div class="items">
    <div class="box" draggable="true">📦 Draggable Box</div>
    <div class="box" draggable="true">🎁 Draggable Gift</div>
    <div class="box" draggable="false">🔒 Not Draggable</div>
  </div>
  
  <p class="note">Try dragging the boxes!</p>
</body>
</html>`,
  css: ``,
  js: ``,
};

const dragDropExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag and Drop</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem;
      background: #f0f9ff;
      text-align: center;
      margin: 0;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0c4a6e;
        color: #e0f2fe;
      }
    }
    
    h1 {
      color: #0369a1;
      margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #7dd3fc;
      }
    }
    
    .source {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .item {
      background: #2563eb;
      color: #fff;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      cursor: move;
      user-select: none;
      font-weight: 600;
      transition: opacity 0.2s, transform 0.2s;
    }
    
    .item:hover {
      transform: scale(1.05);
    }
    
    @media (prefers-color-scheme: dark) {
      .item {
        background: #3b82f6;
      }
    }
    
    .dropzone {
      margin: 2rem auto;
      max-width: 400px;
      min-height: 150px;
      background: #f1f5f9;
      border: 3px dashed #94a3b8;
      border-radius: 12px;
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      color: #64748b;
      font-size: 1.1rem;
      transition: all 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
      .dropzone {
        background: #1e293b;
        border-color: #475569;
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <h1>Drag Items to Drop Zone</h1>
  
  <div class="source">
    <div class="item" draggable="true" id="item1">🍎 Apple</div>
    <div class="item" draggable="true" id="item2">🍌 Banana</div>
    <div class="item" draggable="true" id="item3">🍊 Orange</div>
  </div>
  
  <div class="dropzone" id="dropzone">
    Drop items here
  </div>
  
  <script>
    const items = document.querySelectorAll('.item');
    const dropzone = document.getElementById('dropzone');
    
    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.style.opacity = '0.5';
      });
      
      item.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
      });
    });
    
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dropzone.style.background = isDark ? '#334155' : '#dbeafe';
    });
    
    dropzone.addEventListener('dragleave', () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dropzone.style.background = isDark ? '#1e293b' : '#f1f5f9';
    });
    
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const item = document.getElementById(id);
      dropzone.appendChild(item);
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dropzone.style.background = isDark ? '#1e293b' : '#f1f5f9';
    });
  </script>
</body>
</html>`,
  css: ``,
  js: ``,
};

const sortableListExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sortable List</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem;
      background: #f0f9ff;
      text-align: center;
      margin: 0;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0c4a6e;
        color: #e0f2fe;
      }
    }
    
    h1 {
      color: #0369a1;
      margin-bottom: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #7dd3fc;
      }
    }
    
    .task-list {
      list-style: none;
      padding: 0;
      max-width: 400px;
      margin: 2rem auto;
    }
    
    li {
      background: #fff;
      padding: 1.25rem;
      margin: 0.75rem 0;
      border-radius: 8px;
      cursor: move;
      user-select: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #2563eb;
      font-size: 1.05rem;
      transition: all 0.2s;
    }
    
    li:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    @media (prefers-color-scheme: dark) {
      li {
        background: #1e293b;
        border-color: #60a5fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      li:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      }
    }
  </style>
</head>
<body>
  <h1>Drag to Reorder Tasks</h1>
  
  <ul class="task-list" id="tasks">
    <li draggable="true">✅ Learn HTML</li>
    <li draggable="true">📝 Practice CSS</li>
    <li draggable="true">⚡ Master JavaScript</li>
    <li draggable="true">🚀 Build Projects</li>
  </ul>
  
  <script>
    const list = document.getElementById('tasks');
    let draggedItem = null;
    
    list.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
      e.target.style.opacity = '0.5';
    });
    
    list.addEventListener('dragend', (e) => {
      e.target.style.opacity = '1';
    });
    
    list.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(list, e.clientY);
      if (afterElement == null) {
        list.appendChild(draggedItem);
      } else {
        list.insertBefore(draggedItem, afterElement);
      }
    });
    
    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
      
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
  </script>
</body>
</html>`,
  css: ``,
  js: ``,
};

const diagramExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag Event Flow</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      padding: 1rem;
      background: #f8fafc;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .drag-flow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      flex-wrap: wrap;
    }
    
    .step {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      min-width: 120px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, box-shadow 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .step {
        background: #1e293b;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
    }
    
    .num {
      background: #2563eb;
      color: #fff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 0.5rem;
      font-weight: 700;
    }
    
    @media (prefers-color-scheme: dark) {
      .num {
        background: #60a5fa;
      }
    }
    
    .label {
      font-weight: 600;
      color: #1e293b;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #f1f5f9;
      }
    }
    
    .desc {
      font-size: 0.75rem;
      color: #64748b;
    }
    
    @media (prefers-color-scheme: dark) {
      .desc {
        color: #94a3b8;
      }
    }
    
    .arrow {
      font-size: 1.5rem;
      color: #94a3b8;
    }
    
    @media (prefers-color-scheme: dark) {
      .arrow {
        color: #64748b;
      }
    }
  </style>
</head>
<body>
  <div class="drag-flow">
    <div class="step">
      <div class="num">1</div>
      <div class="label">dragstart</div>
      <div class="desc">User starts dragging</div>
    </div>
    <div class="arrow">→</div>
    <div class="step">
      <div class="num">2</div>
      <div class="label">drag</div>
      <div class="desc">Element is being dragged</div>
    </div>
    <div class="arrow">→</div>
    <div class="step">
      <div class="num">3</div>
      <div class="label">dragover</div>
      <div class="desc">Dragged over drop zone</div>
    </div>
    <div class="arrow">→</div>
    <div class="step">
      <div class="num">4</div>
      <div class="label">drop</div>
      <div class="desc">Released in drop zone</div>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``,
};

export default function HtmlDraggable({ onOpenWebPlayground }: HtmlDraggableProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Move}
        category="HTML · Interactive Elements"
        title="Draggable Attribute"
        description="Make elements draggable with HTML5 Drag and Drop API"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Hand className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is Draggable?</CardTitle>
              <CardDescription className="text-base mt-1">Enable drag and drop interactions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">draggable</code> attribute 
            makes any HTML element draggable. Combined with JavaScript event listeners, you can create powerful drag-and-drop interfaces.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">👆</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Click & Hold</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">🖱️</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Move Element</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">📍</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Drop Target</p>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Syntax</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">draggable="true"</code> enables dragging, 
              <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">draggable="false"</code> disables it
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Drag Event Flow</CardTitle>
          <CardDescription>Sequence of events during drag operation</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Drag Lifecycle"
            description="Understanding the drag event sequence"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="200px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Move className="w-7 h-7" />
            Basic Draggable
          </CardTitle>
          <CardDescription>Making elements draggable</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Simple Draggable Elements"
            description="Try dragging the boxes around"
            html={basicDraggableExample.html}
            css={basicDraggableExample.css}
            js={basicDraggableExample.js}
            colorTheme="blue"
            previewHeight="340px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              <strong>Note:</strong> Links and images are draggable by default. Use <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">draggable="false"</code> to prevent dragging.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Drag and Drop */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Drag and Drop
          </CardTitle>
          <CardDescription>Complete drag and drop implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Drag Items to Drop Zone"
            description="Full drag and drop with event handlers"
            html={dragDropExample.html}
            css={dragDropExample.css}
            js={dragDropExample.js}
            colorTheme="blue"
            previewHeight="480px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Key Events</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              <strong>dragstart:</strong> Store data | <strong>dragover:</strong> Prevent default to allow drop | <strong>drop:</strong> Handle dropped element
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sortable List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Hand className="w-7 h-7" />
            Sortable List
          </CardTitle>
          <CardDescription>Reorder items by dragging</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Drag to Reorder"
            description="Interactive sortable task list"
            html={sortableListExample.html}
            css={sortableListExample.css}
            js={sortableListExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Drag Events Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Drag Events Reference</CardTitle>
          <CardDescription>Complete list of drag and drop events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { event: 'dragstart', desc: 'User starts dragging an element', target: 'Dragged element' },
              { event: 'drag', desc: 'Element is being dragged', target: 'Dragged element' },
              { event: 'dragend', desc: 'Drag operation ends', target: 'Dragged element' },
              { event: 'dragenter', desc: 'Dragged element enters drop zone', target: 'Drop zone' },
              { event: 'dragover', desc: 'Dragged element is over drop zone', target: 'Drop zone' },
              { event: 'dragleave', desc: 'Dragged element leaves drop zone', target: 'Drop zone' },
              { event: 'drop', desc: 'Element is dropped', target: 'Drop zone' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start mb-1">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono font-bold">{item.event}</code>
                  <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">{item.target}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">✅ Do</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Provide visual feedback (opacity, cursors)</li>
                <li>• Use e.preventDefault() in dragover</li>
                <li>• Clear drop zone highlights on drop</li>
                <li>• Add user-select: none to draggables</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">❌ Avoid</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Making text content draggable</li>
                <li>• Forgetting preventDefault in dragover</li>
                <li>• No visual feedback during drag</li>
                <li>• Dragging without cursor: move</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

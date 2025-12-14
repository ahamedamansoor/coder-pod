'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Move,
  CheckCircle,
  Hand,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptDragDropAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Move}
        category="JavaScript Browser APIs"
        title="Drag and Drop API"
        description="Make elements draggable and droppable"
        colorTheme="green"
      />

      {/* What is Drag and Drop API */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Move className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Drag and Drop API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Drag and Drop API lets you make elements <strong className="text-green-700 dark:text-green-400">draggable</strong> and create <strong className="text-emerald-700 dark:text-emerald-400">drop zones</strong>. Perfect for file uploads, sortable lists, or kanban boards!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Simple Concept:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>draggable="true"</strong> makes elements draggable<br/>
              <strong>Events:</strong> dragstart, dragover, drop
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive Demo: Drag and Drop"
        description="Drag items between boxes!"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: sans-serif;">
  <h2 style="color: #10b981; margin-bottom: 20px;">🎯 Drag & Drop Demo</h2>
  
  <p style="color: #64748b; margin-bottom: 20px;">Try dragging items between the boxes:</p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <!-- Source Box -->
    <div class="drop-zone" id="box1" style="min-height: 200px; padding: 20px; background: #d1fae5; border: 3px dashed #10b981; border-radius: 8px;">
      <h3 style="color: #065f46; margin-top: 0;">📦 Source</h3>
      <div class="drag-item" draggable="true" style="padding: 12px; margin-bottom: 10px; background: white; border-radius: 6px; cursor: move; border: 2px solid #10b981;">
        📄 Item 1
      </div>
      <div class="drag-item" draggable="true" style="padding: 12px; margin-bottom: 10px; background: white; border-radius: 6px; cursor: move; border: 2px solid #10b981;">
        📄 Item 2
      </div>
      <div class="drag-item" draggable="true" style="padding: 12px; background: white; border-radius: 6px; cursor: move; border: 2px solid #10b981;">
        📄 Item 3
      </div>
    </div>
    
    <!-- Target Box -->
    <div class="drop-zone" id="box2" style="min-height: 200px; padding: 20px; background: #dbeafe; border: 3px dashed #3b82f6; border-radius: 8px;">
      <h3 style="color: #1e40af; margin-top: 0;">🎯 Target</h3>
      <p style="color: #64748b; font-size: 14px;">Drop items here!</p>
    </div>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
    <strong style="color: #92400e;">💡 Tip:</strong>
    <span style="color: #78350f;"> Drag items back and forth between boxes!</span>
  </div>
</div>`}
        css={`.drag-item:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.drag-item.dragging {
  opacity: 0.5;
}

.drop-zone.drag-over {
  background: #a7f3d0 !important;
  border-color: #059669 !important;
  transform: scale(1.02);
}`}
        js={`// Get all draggable items
const dragItems = document.querySelectorAll('.drag-item');
const dropZones = document.querySelectorAll('.drop-zone');

// Drag start - item being dragged
dragItems.forEach(item => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.textContent);
    e.target.classList.add('dragging');
  });
  
  item.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
  });
});

// Drop zones
dropZones.forEach(zone => {
  // Allow drop by preventing default
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });
  
  // Remove highlight when leaving
  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });
  
  // Handle drop
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    
    // Get the dragged element
    const draggingItem = document.querySelector('.dragging');
    
    if (draggingItem) {
      // Move element to new zone
      zone.appendChild(draggingItem);
    }
  });
});`}
        colorTheme="green"
      />

      {/* Example 1: Basic Draggable */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Make Element Draggable</CardTitle>
          <CardDescription>Simple drag setup</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// HTML: Add draggable attribute
<div id="item" draggable="true">Drag me!</div>

// JavaScript: Handle drag start
const item = document.getElementById('item');

item.addEventListener('dragstart', (e) => {
  // Store data to transfer
  e.dataTransfer.setData('text/plain', e.target.id);
  
  // Optional: Add visual feedback
  e.target.style.opacity = '0.5';
});

item.addEventListener('dragend', (e) => {
  // Reset visual feedback
  e.target.style.opacity = '1';
});

// 🎯 That's it! Element is now draggable`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Drop Zone */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Create Drop Zone</CardTitle>
          <CardDescription>Accept dropped items</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// HTML
<div id="dropZone">Drop here</div>

// JavaScript: Set up drop zone
const dropZone = document.getElementById('dropZone');

// 1. Allow dropping (important!)
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Must prevent default to allow drop
  dropZone.style.background = '#d1fae5';
});

// 2. Handle drop
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  
  // Get dropped data
  const data = e.dataTransfer.getData('text/plain');
  console.log('Dropped:', data);
  
  // Get the dragged element
  const draggedElement = document.getElementById(data);
  
  // Move element to drop zone
  dropZone.appendChild(draggedElement);
});

// 3. Reset styling when drag leaves
dropZone.addEventListener('dragleave', () => {
  dropZone.style.background = 'white';
});

// 🎯 preventDefault() is crucial for drops to work!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>When to use Drag and Drop</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">📋 Kanban Boards</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Drag tasks between columns
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">📁 File Upload</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Drag files from desktop to upload
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">📊 Sortable Lists</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reorder items by dragging
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">🎨 Visual Builders</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Drag components to build layouts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Quick Reference</CardTitle>
              <CardDescription>Drag and Drop API cheat sheet</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✋ Make Element Draggable</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`<div draggable="true">Drag me</div>

element.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text', data);
});`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎯 Create Drop Zone</h4>
              <pre className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-sm overflow-x-auto">
                <code className="text-slate-900 dark:text-slate-100">{`dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Enable dropping
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
});`}</code>
              </pre>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>⚡ Key:</strong> Always call preventDefault() in dragover!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">draggable="true"</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add to HTML element<br/>
                    Makes it draggable
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">preventDefault()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Call in dragover<br/>
                    Enables dropping
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">dataTransfer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store/retrieve data<br/>
                    Pass info on drop
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Visual Feedback</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Change opacity/style<br/>
                    Show drag state
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <Hand className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Native Drag and Drop</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The Drag and Drop API provides <strong>native drag functionality</strong> with full touch support. Remember to always call <code className="text-xs bg-white dark:bg-slate-800 px-1 rounded">preventDefault()</code> in dragover!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

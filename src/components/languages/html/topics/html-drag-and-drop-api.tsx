'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, Hand, GripVertical, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlDragAndDropApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlDragAndDropApi({ onOpenWebPlayground }: HtmlDragAndDropApiProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag and Drop</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #8b5cf6;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    .drag-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 30px;
    }
    
    .drag-item {
      padding: 20px;
      background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
      color: white;
      border-radius: 8px;
      text-align: center;
      cursor: grab;
      font-weight: 600;
      transition: all 0.2s;
      border: 2px solid transparent;
    }
    
    .drag-item:active {
      cursor: grabbing;
    }
    
    .drag-item.dragging {
      opacity: 0.5;
      transform: scale(0.95);
    }
    
    .drop-zone {
      min-height: 200px;
      border: 3px dashed #d1d5db;
      border-radius: 12px;
      padding: 20px;
      background: #f9fafb;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }
    
    .drop-zone.drag-over {
      background: #ddd6fe;
      border-color: #8b5cf6;
      border-style: solid;
    }
    
    .drop-zone-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }
    
    .drop-zone-text {
      color: #6b7280;
      text-align: center;
    }
    
    .dropped-items {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      min-height: 100px;
    }
    
    .dropped-item {
      padding: 16px 20px;
      background: #8b5cf6;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      animation: dropIn 0.3s ease;
    }
    
    @keyframes dropIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .reset-btn {
      width: 100%;
      padding: 12px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
      transition: background 0.2s;
    }
    
    .reset-btn:hover {
      background: #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #a78bfa;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .drop-zone {
        background: #0f172a;
        border-color: #475569;
      }
      
      .drop-zone.drag-over {
        background: #312e81;
        border-color: #a78bfa;
      }
      
      .drop-zone-text {
        color: #94a3b8;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #a78bfa;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .drop-zone {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .drop-zone.drag-over {
      background: #312e81;
      border-color: #a78bfa;
    }
    
    :root.dark .drop-zone-text {
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Drag & Drop Demo</h1>
    <p class="subtitle">Drag the colored boxes into the drop zone below</p>
    
    <div class="drag-items" id="dragItems">
      <div class="drag-item" draggable="true" data-id="item-1">📦 Item 1</div>
      <div class="drag-item" draggable="true" data-id="item-2">📦 Item 2</div>
      <div class="drag-item" draggable="true" data-id="item-3">📦 Item 3</div>
      <div class="drag-item" draggable="true" data-id="item-4">📦 Item 4</div>
      <div class="drag-item" draggable="true" data-id="item-5">📦 Item 5</div>
      <div class="drag-item" draggable="true" data-id="item-6">📦 Item 6</div>
    </div>
    
    <div class="drop-zone" id="dropZone">
      <div class="drop-zone-icon">⬇️</div>
      <div class="drop-zone-text">
        <strong>Drop Zone</strong><br>
        Drag items here
      </div>
      <div class="dropped-items" id="droppedItems"></div>
    </div>
    
    <button class="reset-btn" onclick="resetAll()">🔄 Reset All</button>
  </div>
  
  <script>
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZone = document.getElementById('dropZone');
    const droppedItems = document.getElementById('droppedItems');
    
    let draggedElement = null;
    
    // Drag start
    dragItems.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
      });
      
      item.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
      });
    });
    
    // Drop zone events
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      
      if (draggedElement) {
        // Create dropped item
        const droppedItem = document.createElement('div');
        droppedItem.className = 'dropped-item';
        droppedItem.textContent = draggedElement.textContent;
        droppedItems.appendChild(droppedItem);
        
        // Remove from original location
        draggedElement.style.opacity = '0';
        setTimeout(() => {
          draggedElement.remove();
        }, 300);
        
        draggedElement = null;
      }
    });
    
    function resetAll() {
      location.reload();
    }
  </script>
</body>
</html>`;

  const fileUploadExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Drop Upload</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #06b6d4;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    .upload-zone {
      border: 3px dashed #d1d5db;
      border-radius: 12px;
      padding: 60px 30px;
      text-align: center;
      background: #f9fafb;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .upload-zone.drag-over {
      background: #cffafe;
      border-color: #06b6d4;
      border-style: solid;
      transform: scale(1.02);
    }
    
    .upload-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }
    
    .upload-text {
      color: #374151;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .upload-hint {
      color: #6b7280;
      font-size: 14px;
    }
    
    .file-list {
      margin-top: 30px;
    }
    
    .file-item {
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .file-icon {
      font-size: 32px;
    }
    
    .file-info {
      flex: 1;
    }
    
    .file-name {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 4px;
    }
    
    .file-size {
      font-size: 12px;
      color: #6b7280;
    }
    
    .clear-btn {
      padding: 8px 16px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
    }
    
    .clear-btn:hover {
      background: #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #22d3ee;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .upload-zone {
        background: #0f172a;
        border-color: #475569;
      }
      
      .upload-zone.drag-over {
        background: #164e63;
        border-color: #22d3ee;
      }
      
      .upload-text {
        color: #e2e8f0;
      }
      
      .upload-hint {
        color: #94a3b8;
      }
      
      .file-item {
        background: #0f172a;
      }
      
      .file-name {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #22d3ee;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .upload-zone {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .upload-zone.drag-over {
      background: #164e63;
      border-color: #22d3ee;
    }
    
    :root.dark .upload-text {
      color: #e2e8f0;
    }
    
    :root.dark .upload-hint {
      color: #94a3b8;
    }
    
    :root.dark .file-item {
      background: #0f172a;
    }
    
    :root.dark .file-name {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📁 File Drop Upload</h1>
    <p class="subtitle">Drag and drop files here to upload</p>
    
    <div class="upload-zone" id="uploadZone">
      <div class="upload-icon">☁️</div>
      <div class="upload-text">Drop files here</div>
      <div class="upload-hint">or click to browse</div>
    </div>
    
    <div class="file-list" id="fileList"></div>
    
    <input type="file" id="fileInput" multiple style="display: none;">
  </div>
  
  <script>
    const uploadZone = document.getElementById('uploadZone');
    const fileList = document.getElementById('fileList');
    const fileInput = document.getElementById('fileInput');
    const files = [];
    
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Highlight drop zone
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, () => {
        uploadZone.classList.add('drag-over');
      }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, () => {
        uploadZone.classList.remove('drag-over');
      }, false);
    });
    
    // Handle dropped files
    uploadZone.addEventListener('drop', (e) => {
      const droppedFiles = e.dataTransfer.files;
      handleFiles(droppedFiles);
    });
    
    // Click to browse
    uploadZone.addEventListener('click', () => {
      fileInput.click();
    });
    
    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });
    
    function handleFiles(fileObjects) {
      [...fileObjects].forEach(file => {
        files.push(file);
        addFileToList(file);
      });
    }
    
    function addFileToList(file) {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      
      const sizeInKB = (file.size / 1024).toFixed(2);
      const icon = getFileIcon(file.type);
      
      fileItem.innerHTML = \`
        <div class="file-icon">\${icon}</div>
        <div class="file-info">
          <div class="file-name">\${file.name}</div>
          <div class="file-size">\${sizeInKB} KB</div>
        </div>
        <button class="clear-btn" onclick="removeFile(this)">✕</button>
      \`;
      
      fileList.appendChild(fileItem);
    }
    
    function getFileIcon(type) {
      if (type.startsWith('image/')) return '🖼️';
      if (type.startsWith('video/')) return '🎥';
      if (type.startsWith('audio/')) return '🎵';
      if (type.includes('pdf')) return '📄';
      if (type.includes('zip')) return '📦';
      return '📄';
    }
    
    function removeFile(btn) {
      btn.parentElement.remove();
    }
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="HTML · APIs"
        title="Drag and Drop API"
        description="Create interactive drag-and-drop interfaces with native HTML5"
        colorTheme="purple"
      />

      {/* What is Drag and Drop API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <GripVertical className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is the Drag and Drop API?
          </CardTitle>
          <CardDescription>
            A built-in HTML5 API for creating draggable elements and drop zones
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">Drag and Drop API</code> enables users to drag elements around the page and drop them into designated areas. It's perfect for file uploads, sortable lists, and interactive interfaces.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Hand className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Draggable Attribute</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Add draggable="true" to any element
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Move className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">DataTransfer</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Pass data during drag operations
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">File Support</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Handle file drops for uploads
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Drag & Drop */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Move className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Basic Drag & Drop
          </CardTitle>
          <CardDescription>
            Drag items into a drop zone with visual feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Interactive Drag & Drop Demo"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* File Upload Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Hand className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            File Drop Upload
          </CardTitle>
          <CardDescription>
            Real-world example: drag and drop files for upload
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={fileUploadExample}
            title="File Upload with Drag & Drop"
            colorTheme="cyan"
          />
        </CardContent>
      </Card>

      {/* Drag Events */}
      <Card>
        <CardHeader>
          <CardTitle>Drag Events</CardTitle>
          <CardDescription>
            Key events fired during drag operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">dragstart</code>
              <p className="text-sm text-muted-foreground">Fired when drag begins</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">dragover</code>
              <p className="text-sm text-muted-foreground">Fired while dragging over drop zone</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">drop</code>
              <p className="text-sm text-muted-foreground">Fired when item is dropped</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">dragend</code>
              <p className="text-sm text-muted-foreground">Fired when drag completes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Always call <code>e.preventDefault()</code> in dragover to enable dropping</li>
            <li>Provide visual feedback during drag (cursor changes, hover states)</li>
            <li>Use <code>dataTransfer</code> to pass data between drag and drop</li>
            <li>Set <code>draggable="true"</code> attribute on elements you want to drag</li>
            <li>Handle both file drops and element drops if needed</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Use Cases */}
      <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
        <AlertCircle className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>File Uploads:</strong> Drag & drop files instead of clicking browse</li>
            <li><strong>Sortable Lists:</strong> Reorder items by dragging (Trello, Kanban boards)</li>
            <li><strong>Form Builders:</strong> Drag components to build interfaces</li>
            <li><strong>Image Galleries:</strong> Organize photos by dragging</li>
            <li><strong>Dashboard Widgets:</strong> Rearrange dashboard layouts</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}


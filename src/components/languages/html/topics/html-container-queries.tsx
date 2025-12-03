'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared';
import { FrontendCodePreview } from '@/components/shared';
import { Container, Maximize2, Smartphone, Monitor, Layout, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HtmlContainerQueries() {
  const basicContainerExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Container Queries Basic</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    /* Define container */
    .sidebar {
      container-name: sidebar;
      container-type: inline-size;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      width: 300px;
      margin: 0 auto;
    }
    
    @media (prefers-color-scheme: dark) {
      .sidebar {
        background: #1e293b;
      }
    }
    
    .card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      border-radius: 12px;
      color: white;
    }
    
    .card h2 {
      font-size: 1.2rem;
      margin-bottom: 8px;
    }
    
    .card p {
      font-size: 0.9rem;
      opacity: 0.9;
      display: none;
    }
    
    .card-image {
      width: 100%;
      height: 100px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    
    /* Container Query - When sidebar is 400px or wider */
    @container sidebar (min-width: 400px) {
      .card {
        padding: 30px;
      }
      
      .card h2 {
        font-size: 1.8rem;
      }
      
      .card p {
        display: block;
        font-size: 1rem;
      }
      
      .card-image {
        height: 150px;
        font-size: 3rem;
      }
    }
    
    .resize-note {
      text-align: center;
      color: white;
      margin-top: 20px;
      font-size: 14px;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
  </style>
</head>
<body>
  <h1 style="text-align: center; color: white; margin-bottom: 30px; font-size: 2.5rem;">
    📦 Container Query Demo
  </h1>
  
  <div class="sidebar">
    <div class="card">
      <h2>Product Card</h2>
      <p>This description appears when the container is wide enough!</p>
      <div class="card-image">📦</div>
    </div>
  </div>
  
  <p class="resize-note">
    Try resizing the browser window to see the card adapt! ↔️
  </p>
</body>
</html>`;

  const responsiveLayoutExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout with Container Queries</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f3f4f6;
      padding: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .layout {
      display: grid;
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* Main content area */
    .main-content {
      container-name: main;
      container-type: inline-size;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .main-content {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    /* Sidebar */
    .sidebar {
      container-name: sidebar;
      container-type: inline-size;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .sidebar {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    /* Product card - adapts to its container */
    .product {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 16px;
      border-radius: 12px;
      color: white;
      margin-bottom: 20px;
    }
    
    .product-title {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
    
    .product-description {
      font-size: 0.85rem;
      opacity: 0.9;
      display: none;
    }
    
    .product-image {
      width: 100%;
      height: 80px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    
    .product-price {
      margin-top: 12px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .product-button {
      margin-top: 12px;
      padding: 8px 16px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
    }
    
    /* When main container is 500px+ wide */
    @container main (min-width: 500px) {
      .product {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 20px;
        padding: 20px;
      }
      
      .product-title {
        font-size: 1.3rem;
      }
      
      .product-description {
        display: block;
        font-size: 0.95rem;
      }
      
      .product-image {
        height: 100px;
        grid-row: 1 / 4;
      }
      
      .product-button {
        width: auto;
      }
    }
    
    /* When main container is 700px+ wide */
    @container main (min-width: 700px) {
      .product {
        grid-template-columns: 150px 1fr;
        padding: 24px;
      }
      
      .product-title {
        font-size: 1.5rem;
      }
      
      .product-image {
        height: 120px;
        font-size: 3rem;
      }
    }
    
    /* When sidebar container is 300px+ wide */
    @container sidebar (min-width: 300px) {
      .sidebar-item {
        padding: 16px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border-radius: 8px;
        margin-bottom: 12px;
        font-weight: 500;
      }
    }
    
    .sidebar-item {
      padding: 12px;
      background: #f3f4f6;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .sidebar-item {
        background: #374151;
        color: #e2e8f0;
      }
    }
    
    h1 {
      text-align: center;
      color: #1f2937;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f3f4f6;
      }
      
      h2 {
        color: #60a5fa !important;
      }
      
      h3 {
        color: #60a5fa !important;
      }
    }
    
    /* Desktop layout */
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 1fr 300px;
      }
    }
  </style>
</head>
<body>
  <h1>🎯 Container Queries in Action</h1>
  
  <div class="layout">
    <div class="main-content">
      <h2 style="color: #667eea; margin-bottom: 20px;">Featured Products</h2>
      
      <div class="product">
        <div class="product-image">🎧</div>
        <div>
          <div class="product-title">Wireless Headphones</div>
          <div class="product-description">
            Premium noise-cancelling headphones with 30-hour battery life.
            Perfect for music lovers and travelers.
          </div>
          <div class="product-price">$199.99</div>
          <button class="product-button">Add to Cart</button>
        </div>
      </div>
      
      <div class="product">
        <div class="product-image">⌚</div>
        <div>
          <div class="product-title">Smart Watch</div>
          <div class="product-description">
            Track your fitness, monitor health, and stay connected on the go.
            Water-resistant with GPS.
          </div>
          <div class="product-price">$299.99</div>
          <button class="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
    
    <div class="sidebar">
      <h3 style="color: #667eea; margin-bottom: 16px;">Categories</h3>
      <div class="sidebar-item">🎧 Electronics</div>
      <div class="sidebar-item">👕 Fashion</div>
      <div class="sidebar-item">🏠 Home</div>
      <div class="sidebar-item">📚 Books</div>
    </div>
  </div>
</body>
</html>`;

  const componentBasedExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component-Based Design</title>
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
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .grid {
      display: grid;
      gap: 24px;
      max-width: 1400px;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    /* Card Container */
    .card-container {
      container-name: card;
      container-type: inline-size;
    }
    
    .card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .card:hover {
      transform: translateY(-4px);
    }
    
    .card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
    }
    
    .card-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 4px;
    }
    
    .card-subtitle {
      font-size: 0.85rem;
      opacity: 0.9;
    }
    
    .card-body {
      padding: 20px;
    }
    
    .card-image {
      width: 100%;
      height: 150px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      margin-bottom: 16px;
      border-radius: 8px;
    }
    
    .card-text {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    
    .card-stats {
      display: none;
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .stat {
      flex: 1;
      padding: 12px;
      background: #f3f4f6;
      border-radius: 8px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .stat {
        background: #374151;
      }
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .stat-label {
      font-size: 0.75rem;
      color: #6b7280;
      margin-top: 4px;
    }
    
    .card-footer {
      display: flex;
      gap: 8px;
    }
    
    .btn {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .btn-secondary {
      background: #f3f4f6;
      color: #667eea;
      display: none;
    }
    
    @media (prefers-color-scheme: dark) {
      .btn-secondary {
        background: #374151;
        color: #a78bfa;
      }
    }
    
    /* Container Query: Small (300px+) */
    @container card (min-width: 300px) {
      .card-body {
        padding: 24px;
      }
    }
    
    /* Container Query: Medium (400px+) */
    @container card (min-width: 400px) {
      .card-title {
        font-size: 1.5rem;
      }
      
      .card-stats {
        display: flex;
      }
      
      .btn-secondary {
        display: block;
      }
      
      .card-image {
        height: 180px;
        font-size: 4rem;
      }
    }
    
    /* Container Query: Large (500px+) */
    @container card (min-width: 500px) {
      .card {
        display: grid;
        grid-template-columns: 200px 1fr;
      }
      
      .card-header {
        grid-column: 1 / -1;
      }
      
      .card-image {
        grid-row: 2 / 4;
        height: 100%;
        margin: 0;
        border-radius: 0;
      }
      
      .card-body {
        display: flex;
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <h1>✨ Reusable Card Components</h1>
  
  <div class="grid">
    <div class="card-container">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Dashboard</div>
          <div class="card-subtitle">Analytics Overview</div>
        </div>
        <div class="card-image">📊</div>
        <div class="card-body">
          <div class="card-text">
            Track your performance metrics and insights in real-time.
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="stat-value">2.5K</div>
              <div class="stat-label">Views</div>
            </div>
            <div class="stat">
              <div class="stat-value">89%</div>
              <div class="stat-label">Rate</div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">View Details</button>
            <button class="btn btn-secondary">Share</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card-container">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Projects</div>
          <div class="card-subtitle">Active Work</div>
        </div>
        <div class="card-image">🚀</div>
        <div class="card-body">
          <div class="card-text">
            Manage and organize your projects efficiently.
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="stat-value">12</div>
              <div class="stat-label">Active</div>
            </div>
            <div class="stat">
              <div class="stat-value">45</div>
              <div class="stat-label">Total</div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Open</button>
            <button class="btn btn-secondary">Create New</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card-container">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Messages</div>
          <div class="card-subtitle">Unread: 3</div>
        </div>
        <div class="card-image">💬</div>
        <div class="card-body">
          <div class="card-text">
            Stay connected with your team and clients.
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="stat-value">128</div>
              <div class="stat-label">Total</div>
            </div>
            <div class="stat">
              <div class="stat-value">3</div>
              <div class="stat-label">New</div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Read All</button>
            <button class="btn btn-secondary">Compose</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Container Queries"
        description="Build truly responsive components that adapt based on their container size, not just the viewport"
      />

      {/* What are Container Queries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Container className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What are Container Queries?
          </CardTitle>
          <CardDescription>
            Container queries let elements respond to the size of their parent container, not the viewport
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Traditional media queries respond to the viewport size. But what if you want a card to look different 
            based on where it's placed? That's where container queries shine!
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Media Queries</h4>
              </div>
              <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-xs font-mono">
                  @media (min-width: 768px)
                </div>
                <p>Responds to <strong>viewport width</strong></p>
                <p className="text-xs opacity-75">Same component looks identical everywhere</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-3">
                <Layout className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Container Queries</h4>
              </div>
              <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded text-xs font-mono">
                  @container (min-width: 400px)
                </div>
                <p>Responds to <strong>container size</strong></p>
                <p className="text-xs opacity-75">Same component adapts to its space</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Container vs Media Query Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Media Query Example */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Media Query (Viewport-based)
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-3 bg-blue-200 dark:bg-blue-900 rounded text-center text-sm font-semibold">
                    Card in Sidebar
                  </div>
                  <div className="flex-1 p-3 bg-blue-200 dark:bg-blue-900 rounded text-center text-sm font-semibold">
                    Card in Main
                  </div>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  ❌ Both cards look the same because media query only checks viewport
                </p>
              </div>
            </div>

            {/* Container Query Example */}
            <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Container Query (Container-based)
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-32 p-3 bg-purple-200 dark:bg-purple-900 rounded text-center text-xs font-semibold">
                    Small Card
                  </div>
                  <div className="flex-1 p-6 bg-purple-300 dark:bg-purple-800 rounded text-center text-sm font-semibold">
                    Large Card with More Details
                  </div>
                </div>
                <p className="text-xs text-purple-700 dark:text-purple-300">
                  ✓ Each card adapts to its container size independently
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Container Query Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Container className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Basic Container Query
          </CardTitle>
          <CardDescription>
            Simple example showing how a card adapts to its container size
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicContainerExample}
            css=""
            title="Basic Container Query"
            colorTheme="blue"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">How It Works:</h4>
              <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-2 list-decimal list-inside">
                <li>Define container with <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">container-type: inline-size</code></li>
                <li>Give it a name with <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">container-name: sidebar</code></li>
                <li>Write queries like <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">@container sidebar (min-width: 400px)</code></li>
                <li>Styles apply when container reaches that width</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Layout Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Responsive Layout with Multiple Containers
          </CardTitle>
          <CardDescription>
            Product cards that adapt differently in main content vs sidebar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveLayoutExample}
            css=""
            title="Multiple Container Queries"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Smart Adaptation</AlertTitle>
              <AlertDescription className="text-sm">
                The same product card component looks different in the main area vs sidebar. 
                In wide containers, it shows horizontal layout with full details. 
                In narrow containers, it stacks vertically with essential info only.
              </AlertDescription>
            </Alert>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Multiple Breakpoints:</h4>
              <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <div><code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">@container main (min-width: 500px)</code> - Show horizontal layout</div>
                <div><code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">@container main (min-width: 700px)</code> - Larger images & text</div>
                <div><code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">@container sidebar (min-width: 300px)</code> - Enhanced sidebar items</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component-Based Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
              <Sparkles className="h-5 w-5" />
            </div>
            3. Component-Based Design
          </CardTitle>
          <CardDescription>
            Build truly reusable components that work anywhere - sidebar, main, grid, anywhere!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={componentBasedExample}
            css=""
            title="Reusable Components"
            colorTheme="purple"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Three Responsive States:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold">S</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Small (300px+):</strong> Stacked layout, basic info only
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold">M</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Medium (400px+):</strong> Stats visible, two buttons
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold">L</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Large (500px+):</strong> Horizontal grid, full details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Container Types */}
      <Card>
        <CardHeader>
          <CardTitle>Container Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-muted">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">container-type: inline-size</code>
              <p className="text-sm text-muted-foreground mt-2">
                Queries based on container's width. Most common and useful for responsive design.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">container-type: size</code>
              <p className="text-sm text-muted-foreground mt-2">
                Queries based on both width and height. Use when vertical space matters.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">container-type: normal</code>
              <p className="text-sm text-muted-foreground mt-2">
                No container queries. Default value.
              </p>
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
                  <span>Use descriptive container names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Start with mobile-first approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Combine with CSS Grid/Flexbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use container units (cqw, cqh, cqi, cqb)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Test across different container sizes</span>
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
                  <span>Nesting containers unnecessarily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using without fallback for old browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Querying containers in the same element</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Overcomplicating with too many breakpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Forgetting to name containers</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Container Units */}
      <Card>
        <CardHeader>
          <CardTitle>Container Query Units</CardTitle>
          <CardDescription>
            Special units for sizing based on container dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">cqw</code>
              <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                1% of container's width
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">cqh</code>
              <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                1% of container's height
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">cqi</code>
              <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                1% of inline size (width in horizontal text)
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">cqb</code>
              <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                1% of block size (height in horizontal text)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Sparkles className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          Container Queries are supported in all modern browsers: Chrome 105+, Edge 105+, Safari 16+, Firefox 110+. 
          For older browsers, use <code className="px-1.5 py-0.5 bg-muted rounded">@supports (container-type: inline-size)</code> to provide fallbacks.
        </AlertDescription>
      </Alert>
    </div>
  );
}

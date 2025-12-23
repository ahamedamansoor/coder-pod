'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MousePointer, Hand, Move, Copy, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActionType = 'click' | 'doubleClick' | 'rightClick' | 'hover' | 'dragDrop';

export function ActionsDemo() {
  const [selectedAction, setSelectedAction] = useState<ActionType>('click');
  const [actionLog, setActionLog] = useState<string[]>([]);
  const [dragPosition, setDragPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const logAction = (action: string) => {
    setActionLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${action}`]);
  };

  const handleClick = (elementName: string) => {
    logAction(`Clicked on ${elementName}`);
  };

  const handleDoubleClick = (elementName: string) => {
    logAction(`Double-clicked on ${elementName}`);
  };

  const handleRightClick = (e: React.MouseEvent, elementName: string) => {
    e.preventDefault();
    logAction(`Right-clicked on ${elementName}`);
  };

  const handleHover = (elementName: string) => {
    setHoveredElement(elementName);
    logAction(`Hovered over ${elementName}`);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    logAction('Started dragging element');
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;
    setDragPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    logAction(`Dropped element at position (${dragPosition.x.toFixed(0)}%, ${dragPosition.y.toFixed(0)}%)`);
  };

  const getSeleniumCode = () => {
    const codes = {
      click: {
        python: `from selenium.webdriver.common.action_chains import ActionChains

element = driver.find_element(By.ID, "myButton")
ActionChains(driver).click(element).perform()`,
        java: `Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("myButton"));
actions.click(element).perform();`,
        javascript: `const actions = driver.actions();
const element = await driver.findElement(By.id('myButton'));
await actions.click(element).perform();`,
      },
      doubleClick: {
        python: `ActionChains(driver).double_click(element).perform()`,
        java: `actions.doubleClick(element).perform();`,
        javascript: `await actions.doubleClick(element).perform();`,
      },
      rightClick: {
        python: `ActionChains(driver).context_click(element).perform()`,
        java: `actions.contextClick(element).perform();`,
        javascript: `await actions.contextClick(element).perform();`,
      },
      hover: {
        python: `ActionChains(driver).move_to_element(element).perform()`,
        java: `actions.moveToElement(element).perform();`,
        javascript: `await actions.move({ origin: element }).perform();`,
      },
      dragDrop: {
        python: `source = driver.find_element(By.ID, "draggable")
target = driver.find_element(By.ID, "droppable")
ActionChains(driver).drag_and_drop(source, target).perform()`,
        java: `WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));
actions.dragAndDrop(source, target).perform();`,
        javascript: `const source = await driver.findElement(By.id('draggable'));
const target = await driver.findElement(By.id('droppable'));
await actions.dragAndDrop(source, target).perform();`,
      },
    };
    return codes[selectedAction];
  };

  const code = getSeleniumCode();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Actions Class Demo</h3>
        <p className="text-sm text-muted-foreground">
          Practice complex user interactions using Selenium's Actions class. Try different mouse and keyboard actions!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Action Selection */}
        <div className="space-y-4">
          <Card className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Select Action Type</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={selectedAction === 'click' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAction('click')}
                  className="justify-start"
                >
                  <MousePointer className="w-4 h-4 mr-2" />
                  Click
                </Button>
                <Button
                  variant={selectedAction === 'doubleClick' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAction('doubleClick')}
                  className="justify-start"
                >
                  <MousePointer className="w-4 h-4 mr-2" />
                  Double Click
                </Button>
                <Button
                  variant={selectedAction === 'rightClick' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAction('rightClick')}
                  className="justify-start"
                >
                  <MousePointer className="w-4 h-4 mr-2" />
                  Right Click
                </Button>
                <Button
                  variant={selectedAction === 'hover' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAction('hover')}
                  className="justify-start"
                >
                  <Hand className="w-4 h-4 mr-2" />
                  Hover
                </Button>
                <Button
                  variant={selectedAction === 'dragDrop' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedAction('dragDrop')}
                  className="justify-start col-span-2"
                >
                  <Move className="w-4 h-4 mr-2" />
                  Drag & Drop
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Action Instructions</Label>
              <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                {selectedAction === 'click' && 'Click on any button in the practice area'}
                {selectedAction === 'doubleClick' && 'Double-click on any element to trigger the action'}
                {selectedAction === 'rightClick' && 'Right-click on elements to see context menu simulation'}
                {selectedAction === 'hover' && 'Hover over elements to see hover effects'}
                {selectedAction === 'dragDrop' && 'Click and drag the green box to move it around'}
              </div>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Action Log</Label>
            <div className="space-y-1 max-h-64 overflow-auto">
              {actionLog.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No actions performed yet
                </p>
              ) : (
                actionLog.slice(-10).reverse().map((log, idx) => (
                  <div key={idx} className="text-xs font-mono p-2 bg-muted rounded">
                    {log}
                  </div>
                ))
              )}
            </div>
            {actionLog.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActionLog([])}
                className="w-full"
              >
                Clear Log
              </Button>
            )}
          </Card>
        </div>

        {/* Right Panel - Interactive Area */}
        <div className="space-y-4">
          <Card className="p-4">
            <Label className="mb-3 block">Practice Area</Label>
            
            {selectedAction === 'dragDrop' ? (
              <div
                className="relative h-80 border-2 border-dashed rounded-lg bg-muted/30 overflow-hidden"
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                <div
                  ref={dragRef}
                  className={cn(
                    "absolute w-16 h-16 bg-green-500 rounded-lg cursor-move flex items-center justify-center text-white font-semibold shadow-lg transition-shadow",
                    isDragging && "shadow-2xl scale-110"
                  )}
                  style={{
                    left: `calc(${dragPosition.x}% - 2rem)`,
                    top: `calc(${dragPosition.y}% - 2rem)`,
                  }}
                  onMouseDown={handleDragStart}
                >
                  <Move className="w-6 h-6" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-muted-foreground">
                  Click and drag the box
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="default"
                    onClick={() => handleClick('Primary Button')}
                    onDoubleClick={() => handleDoubleClick('Primary Button')}
                    onContextMenu={(e) => handleRightClick(e, 'Primary Button')}
                    onMouseEnter={() => selectedAction === 'hover' && handleHover('Primary Button')}
                    className="h-20"
                  >
                    Primary Button
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleClick('Secondary Button')}
                    onDoubleClick={() => handleDoubleClick('Secondary Button')}
                    onContextMenu={(e) => handleRightClick(e, 'Secondary Button')}
                    onMouseEnter={() => selectedAction === 'hover' && handleHover('Secondary Button')}
                    className="h-20"
                  >
                    Secondary Button
                  </Button>
                </div>

                <div
                  className={cn(
                    "p-6 border-2 rounded-lg text-center transition-all cursor-pointer",
                    hoveredElement === 'Hover Card' && selectedAction === 'hover'
                      ? "border-primary bg-primary/10 scale-105"
                      : "border-border"
                  )}
                  onClick={() => handleClick('Hover Card')}
                  onDoubleClick={() => handleDoubleClick('Hover Card')}
                  onContextMenu={(e) => handleRightClick(e, 'Hover Card')}
                  onMouseEnter={() => selectedAction === 'hover' && handleHover('Hover Card')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <h4 className="font-semibold mb-2">Interactive Card</h4>
                  <p className="text-sm text-muted-foreground">
                    Try different actions on this card
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {['Item 1', 'Item 2', 'Item 3'].map((item) => (
                    <div
                      key={item}
                      className={cn(
                        "p-4 border rounded text-center text-sm cursor-pointer transition-all",
                        hoveredElement === item && selectedAction === 'hover'
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                      onClick={() => handleClick(item)}
                      onDoubleClick={() => handleDoubleClick(item)}
                      onContextMenu={(e) => handleRightClick(e, item)}
                      onMouseEnter={() => selectedAction === 'hover' && handleHover(item)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Current mode: <strong>{selectedAction.replace(/([A-Z])/g, ' $1').trim()}</strong>
                  </p>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Label>Selenium Code</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(code.python);
                  logAction('Copied Python code to clipboard');
                }}
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">Python</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{code.python}</code>
              </pre>
              <div className="text-xs font-semibold text-muted-foreground mt-3">Java</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{code.java}</code>
              </pre>
              <div className="text-xs font-semibold text-muted-foreground mt-3">JavaScript</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{code.javascript}</code>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

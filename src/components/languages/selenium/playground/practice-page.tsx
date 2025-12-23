'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export function PracticePage() {
  const [showAlert, setShowAlert] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const toggleElement = () => {
    setShowElement(!showElement);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Practice Page</h3>
        <p className="text-sm text-muted-foreground">
          A comprehensive page with various HTML elements to practice Selenium automation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Buttons Section */}
        <Card className="p-4 space-y-3">
          <Label>Buttons & Clicks</Label>
          <div className="space-y-2">
            <Button
              id="simple-button"
              onClick={() => setButtonClicks(buttonClicks + 1)}
              className="w-full"
            >
              Click Me (Clicked: {buttonClicks})
            </Button>
            <Button
              id="disabled-button"
              disabled
              className="w-full"
            >
              Disabled Button
            </Button>
            <Button
              id="hidden-button"
              onClick={toggleElement}
              variant="secondary"
              className="w-full"
            >
              Toggle Hidden Element
            </Button>
            {showElement && (
              <div id="hidden-element" className="p-3 bg-green-100 dark:bg-green-950 border border-green-500 rounded text-sm">
                This element was hidden and now visible!
              </div>
            )}
          </div>
        </Card>

        {/* Alerts Section */}
        <Card className="p-4 space-y-3">
          <Label>Alerts & Notifications</Label>
          <div className="space-y-2">
            <Button
              id="show-alert"
              onClick={handleAlert}
              variant="outline"
              className="w-full"
            >
              Show Alert
            </Button>
            {showAlert && (
              <div className="flex items-center gap-2 p-3 bg-yellow-100 dark:bg-yellow-950 border border-yellow-500 rounded">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm">This is an alert message!</span>
              </div>
            )}
            <Button
              id="show-success"
              onClick={() => alert('Success!')}
              variant="default"
              className="w-full"
            >
              JavaScript Alert
            </Button>
          </div>
        </Card>

        {/* Links Section */}
        <Card className="p-4 space-y-3">
          <Label>Links & Navigation</Label>
          <div className="space-y-2">
            <a
              id="external-link"
              href="https://selenium.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-blue-600 hover:underline"
            >
              External Link (Selenium.dev)
            </a>
            <a
              id="internal-link"
              href="#section"
              className="block p-2 text-blue-600 hover:underline"
            >
              Internal Link
            </a>
            <a
              id="broken-link"
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block p-2 text-gray-400 line-through"
            >
              Broken Link
            </a>
          </div>
        </Card>

        {/* Text Elements */}
        <Card className="p-4 space-y-3">
          <Label>Text Elements</Label>
          <div className="space-y-2">
            <h4 id="heading" className="text-lg font-bold">This is a Heading</h4>
            <p id="paragraph" className="text-sm text-muted-foreground">
              This is a paragraph with some text content for testing.
            </p>
            <span id="span-element" className="text-xs">This is a span element</span>
            <div id="div-element" className="p-2 bg-muted rounded">
              This is a div element
            </div>
          </div>
        </Card>

        {/* Images Section */}
        <Card className="p-4 space-y-3">
          <Label>Images</Label>
          <div className="space-y-2">
            <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white">
              <span>Placeholder Image</span>
            </div>
            <img
              id="test-image"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3C/svg%3E"
              alt="Test Image"
              className="w-24 h-24 border rounded"
            />
          </div>
        </Card>

        {/* Lists Section */}
        <Card className="p-4 space-y-3">
          <Label>Lists</Label>
          <div className="space-y-3">
            <div>
              <div className="text-sm font-semibold mb-1">Unordered List</div>
              <ul id="unordered-list" className="list-disc list-inside space-y-1">
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Ordered List</div>
              <ol id="ordered-list" className="list-decimal list-inside space-y-1">
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Status Badges */}
        <Card className="p-4 space-y-3">
          <Label>Status Badges</Label>
          <div className="flex flex-wrap gap-2">
            <Badge id="badge-success" variant="default">Success</Badge>
            <Badge id="badge-warning" variant="secondary">Warning</Badge>
            <Badge id="badge-error" variant="destructive">Error</Badge>
            <Badge id="badge-info" variant="outline">Info</Badge>
          </div>
        </Card>

        {/* Dynamic Content */}
        <Card className="p-4 space-y-3">
          <Label>Dynamic Content</Label>
          <div className="space-y-2">
            <div id="dynamic-text" className="p-3 bg-muted rounded text-sm">
              Current Time: {new Date().toLocaleTimeString()}
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded">
              <Info className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">This content updates dynamically</span>
            </div>
          </div>
        </Card>

        {/* Nested Elements */}
        <Card className="p-4 space-y-3">
          <Label>Nested Elements</Label>
          <div id="parent-div" className="p-3 border rounded space-y-2">
            <div id="child-div-1" className="p-2 bg-muted rounded">
              Child Div 1
              <div id="grandchild-div" className="p-2 bg-background rounded mt-2">
                Grandchild Div
              </div>
            </div>
            <div id="child-div-2" className="p-2 bg-muted rounded">
              Child Div 2
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200 dark:border-green-800">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-green-900 dark:text-green-100">Practice Tips</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Use the Locator Tester tab to practice finding these elements</li>
              <li>• Try different locator strategies (ID, Class, XPath, CSS)</li>
              <li>• Experiment with the Wait Visualizer for dynamic elements</li>
              <li>• Use the Actions Demo to practice complex interactions</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

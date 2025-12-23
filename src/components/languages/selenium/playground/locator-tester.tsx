'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, CheckCircle, AlertCircle, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LocatorTester() {
  const [locatorType, setLocatorType] = useState<'css' | 'xpath'>('css');
  const [locatorValue, setLocatorValue] = useState('');
  const [matchedElements, setMatchedElements] = useState<Element[]>([]);
  const [error, setError] = useState('');
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null);

  const testLocator = () => {
    setError('');
    setMatchedElements([]);
    
    try {
      const container = document.getElementById('practice-container');
      if (!container) return;

      let elements: Element[] = [];
      
      if (locatorType === 'css') {
        elements = Array.from(container.querySelectorAll(locatorValue));
      } else {
        const result = document.evaluate(
          locatorValue,
          container,
          null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        for (let i = 0; i < result.snapshotLength; i++) {
          const node = result.snapshotItem(i);
          if (node instanceof Element) {
            elements.push(node);
          }
        }
      }

      if (elements.length === 0) {
        setError('No elements found matching this locator');
      } else {
        setMatchedElements(elements);
      }
    } catch (err) {
      setError(`Invalid ${locatorType.toUpperCase()} selector: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const copySeleniumCode = (language: 'python' | 'java' | 'javascript') => {
    let code = '';
    const method = locatorType === 'css' ? 'css_selector' : 'xpath';
    
    if (language === 'python') {
      code = `driver.find_element(By.${method.toUpperCase()}, "${locatorValue}")`;
    } else if (language === 'java') {
      const javaMethod = locatorType === 'css' ? 'cssSelector' : 'xpath';
      code = `driver.findElement(By.${javaMethod}("${locatorValue}"))`;
    } else {
      const jsMethod = locatorType === 'css' ? 'css' : 'xpath';
      code = `await driver.findElement(By.${jsMethod}("${locatorValue}"))`;
    }
    
    navigator.clipboard.writeText(code);
  };

  const exampleLocators = {
    css: [
      { label: 'ID', value: '#username' },
      { label: 'Class', value: '.btn-primary' },
      { label: 'Attribute', value: '[type="email"]' },
      { label: 'Descendant', value: 'form input' },
      { label: 'Nth Child', value: 'li:nth-child(2)' },
    ],
    xpath: [
      { label: 'ID', value: '//*[@id="username"]' },
      { label: 'Class', value: '//*[@class="btn-primary"]' },
      { label: 'Text', value: '//button[text()="Submit"]' },
      { label: 'Contains', value: '//div[contains(@class, "card")]' },
      { label: 'Ancestor', value: '//input[@id="email"]//ancestor::form' },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Locator Strategy Tester</h3>
        <p className="text-sm text-muted-foreground">
          Practice writing CSS selectors and XPath expressions. See which elements match in real-time!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Locator Input */}
        <div className="space-y-4">
          <Card className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Locator Type</Label>
              <Tabs value={locatorType} onValueChange={(v) => setLocatorType(v as any)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="css">CSS Selector</TabsTrigger>
                  <TabsTrigger value="xpath">XPath</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label>Locator Expression</Label>
              <div className="flex gap-2">
                <Input
                  value={locatorValue}
                  onChange={(e) => setLocatorValue(e.target.value)}
                  placeholder={locatorType === 'css' ? 'e.g., .btn-primary' : 'e.g., //button[@class="btn-primary"]'}
                  onKeyDown={(e) => e.key === 'Enter' && testLocator()}
                  className="font-mono text-sm"
                />
                <Button onClick={testLocator} size="icon">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {matchedElements.length > 0 && (
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <p className="text-sm text-green-600 dark:text-green-400">
                  Found {matchedElements.length} element{matchedElements.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}

            {matchedElements.length > 0 && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Generate Selenium Code
                </Label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copySeleniumCode('python')}
                    className="flex-1"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Python
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copySeleniumCode('java')}
                    className="flex-1"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Java
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copySeleniumCode('javascript')}
                    className="flex-1"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    JavaScript
                  </Button>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Quick Examples</Label>
            <div className="space-y-2">
              {exampleLocators[locatorType].map((example, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocatorValue(example.value)}
                  className="w-full justify-start font-mono text-xs"
                >
                  <Badge variant="outline" className="mr-2">{example.label}</Badge>
                  {example.value}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Panel - Practice Elements */}
        <div className="space-y-4">
          <Card className="p-4">
            <Label className="mb-3 block">Practice Elements</Label>
            <div id="practice-container" className="space-y-4 p-4 border rounded-lg bg-muted/30">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Login Form</h4>
                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <button type="submit" className="btn-primary px-4 py-2 bg-blue-600 text-white rounded">
                    Submit
                  </button>
                </form>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Navigation Menu</h4>
                <ul className="space-y-1">
                  <li className="menu-item p-2 hover:bg-muted rounded">Home</li>
                  <li className="menu-item p-2 hover:bg-muted rounded">About</li>
                  <li className="menu-item p-2 hover:bg-muted rounded">Contact</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Product Cards</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="card border rounded p-3">
                    <h5 className="font-medium">Product 1</h5>
                    <p className="text-sm text-muted-foreground">$99</p>
                    <button className="btn-buy mt-2 px-3 py-1 bg-green-600 text-white rounded text-sm">
                      Buy Now
                    </button>
                  </div>
                  <div className="card border rounded p-3">
                    <h5 className="font-medium">Product 2</h5>
                    <p className="text-sm text-muted-foreground">$149</p>
                    <button className="btn-buy mt-2 px-3 py-1 bg-green-600 text-white rounded text-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Data Attributes</h4>
                <div className="space-y-1">
                  <div data-testid="user-profile" className="p-2 border rounded">
                    User Profile
                  </div>
                  <div data-automation="settings-btn" className="p-2 border rounded">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {matchedElements.length > 0 && (
            <Card className="p-4">
              <Label className="mb-3 block">Matched Elements Details</Label>
              <div className="space-y-2 max-h-64 overflow-auto">
                {matchedElements.map((el, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "p-3 border rounded-lg text-sm space-y-1 transition-colors",
                      hoveredElement === el && "bg-primary/10 border-primary"
                    )}
                    onMouseEnter={() => {
                      setHoveredElement(el);
                      el.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                    }}
                    onMouseLeave={() => {
                      setHoveredElement(null);
                      el.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
                    }}
                  >
                    <div className="font-mono text-xs text-muted-foreground">
                      Element {idx + 1}: &lt;{el.tagName.toLowerCase()}&gt;
                    </div>
                    {el.id && (
                      <div className="text-xs">
                        <span className="text-muted-foreground">ID:</span> {el.id}
                      </div>
                    )}
                    {el.className && (
                      <div className="text-xs">
                        <span className="text-muted-foreground">Class:</span> {el.className}
                      </div>
                    )}
                    {el.textContent && (
                      <div className="text-xs truncate">
                        <span className="text-muted-foreground">Text:</span> {el.textContent.trim()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

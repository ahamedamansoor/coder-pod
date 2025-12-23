'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Clock, Play, RotateCcw, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type WaitType = 'implicit' | 'explicit' | 'fluent';
type ElementState = 'hidden' | 'appearing' | 'visible' | 'clickable';

export function WaitVisualizer() {
  const [waitType, setWaitType] = useState<WaitType>('explicit');
  const [waitTime, setWaitTime] = useState(5);
  const [elementDelay, setElementDelay] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [elementState, setElementState] = useState<ElementState>('hidden');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [waitResult, setWaitResult] = useState<'success' | 'timeout' | null>(null);
  const [pollingInterval, setPollingInterval] = useState(500);

  useEffect(() => {
    if (!isRunning) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setElapsedTime(elapsed);

      if (elapsed >= elementDelay && elementState === 'hidden') {
        setElementState('appearing');
        setTimeout(() => setElementState('visible'), 500);
        setTimeout(() => setElementState('clickable'), 1000);
      }

      if (elementState === 'clickable') {
        setWaitResult('success');
        setIsRunning(false);
      }

      if (elapsed >= waitTime && elementState !== 'clickable') {
        setWaitResult('timeout');
        setIsRunning(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isRunning, elementState, elementDelay, waitTime]);

  const startWait = () => {
    setIsRunning(true);
    setElementState('hidden');
    setElapsedTime(0);
    setWaitResult(null);
  };

  const reset = () => {
    setIsRunning(false);
    setElementState('hidden');
    setElapsedTime(0);
    setWaitResult(null);
  };

  const getSeleniumCode = () => {
    if (waitType === 'implicit') {
      return {
        python: `driver.implicitly_wait(${waitTime})`,
        java: `driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(${waitTime}));`,
        javascript: `await driver.manage().setTimeouts({ implicit: ${waitTime * 1000} });`,
      };
    } else if (waitType === 'explicit') {
      return {
        python: `from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, ${waitTime})
element = wait.until(EC.element_to_be_clickable((By.ID, "myElement")))`,
        java: `WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(${waitTime}));
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("myElement")));`,
        javascript: `const { until } = require('selenium-webdriver');
await driver.wait(until.elementIsVisible(element), ${waitTime * 1000});`,
      };
    } else {
      return {
        python: `from selenium.webdriver.support.ui import WebDriverWait

wait = WebDriverWait(driver, ${waitTime}, poll_frequency=${pollingInterval / 1000})
element = wait.until(EC.element_to_be_clickable((By.ID, "myElement")))`,
        java: `FluentWait<WebDriver> wait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(${waitTime}))
    .pollingEvery(Duration.ofMillis(${pollingInterval}))
    .ignoring(NoSuchElementException.class);`,
        javascript: `await driver.wait(until.elementIsVisible(element), ${waitTime * 1000}, '', ${pollingInterval});`,
      };
    }
  };

  const code = getSeleniumCode();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Wait Strategy Visualizer</h3>
        <p className="text-sm text-muted-foreground">
          Understand how different wait strategies work in Selenium. See implicit, explicit, and fluent waits in action!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Configuration */}
        <div className="space-y-4">
          <Card className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Wait Strategy</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={waitType === 'implicit' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setWaitType('implicit')}
                  disabled={isRunning}
                >
                  Implicit
                </Button>
                <Button
                  variant={waitType === 'explicit' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setWaitType('explicit')}
                  disabled={isRunning}
                >
                  Explicit
                </Button>
                <Button
                  variant={waitType === 'fluent' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setWaitType('fluent')}
                  disabled={isRunning}
                >
                  Fluent
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Wait Timeout: {waitTime}s</Label>
              <Slider
                value={[waitTime]}
                onValueChange={(v) => setWaitTime(v[0])}
                min={1}
                max={10}
                step={1}
                disabled={isRunning}
              />
            </div>

            <div className="space-y-2">
              <Label>Element Appears After: {elementDelay}s</Label>
              <Slider
                value={[elementDelay]}
                onValueChange={(v) => setElementDelay(v[0])}
                min={1}
                max={10}
                step={1}
                disabled={isRunning}
              />
            </div>

            {waitType === 'fluent' && (
              <div className="space-y-2">
                <Label>Polling Interval: {pollingInterval}ms</Label>
                <Slider
                  value={[pollingInterval]}
                  onValueChange={(v) => setPollingInterval(v[0])}
                  min={100}
                  max={2000}
                  step={100}
                  disabled={isRunning}
                />
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={startWait}
                disabled={isRunning}
                className="flex-1"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Wait
              </Button>
              <Button
                onClick={reset}
                variant="outline"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Wait Strategy Explanation
            </Label>
            <div className="text-sm space-y-2">
              {waitType === 'implicit' && (
                <p className="text-muted-foreground">
                  <strong>Implicit Wait:</strong> Sets a default wait time for all element lookups. 
                  WebDriver will poll the DOM for the specified time when trying to find elements.
                </p>
              )}
              {waitType === 'explicit' && (
                <p className="text-muted-foreground">
                  <strong>Explicit Wait:</strong> Waits for a specific condition to be met before proceeding. 
                  More flexible and recommended for most scenarios.
                </p>
              )}
              {waitType === 'fluent' && (
                <p className="text-muted-foreground">
                  <strong>Fluent Wait:</strong> Similar to explicit wait but allows custom polling intervals 
                  and can ignore specific exceptions during the wait period.
                </p>
              )}
            </div>
          </Card>
        </div>

        {/* Right Panel - Visualization */}
        <div className="space-y-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Label>Wait Progress</Label>
              <Badge variant={isRunning ? 'default' : 'secondary'}>
                {isRunning ? 'Running' : 'Idle'}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Elapsed Time</span>
                <span className="font-mono font-semibold">{elapsedTime.toFixed(1)}s / {waitTime}s</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full transition-all duration-100",
                    waitResult === 'success' ? "bg-green-500" :
                    waitResult === 'timeout' ? "bg-red-500" :
                    "bg-blue-500"
                  )}
                  style={{ width: `${Math.min((elapsedTime / waitTime) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="border-2 border-dashed rounded-lg p-8 min-h-[200px] flex items-center justify-center bg-muted/30">
              {elementState === 'hidden' && (
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto border-4 border-muted rounded-lg opacity-30" />
                  <p className="text-sm text-muted-foreground">Element not yet visible</p>
                </div>
              )}
              
              {elementState === 'appearing' && (
                <div className="text-center space-y-2 animate-pulse">
                  <div className="w-16 h-16 mx-auto border-4 border-blue-500 rounded-lg bg-blue-100 dark:bg-blue-950" />
                  <p className="text-sm text-blue-600">Element appearing...</p>
                </div>
              )}
              
              {elementState === 'visible' && (
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto border-4 border-yellow-500 rounded-lg bg-yellow-100 dark:bg-yellow-950 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-yellow-600 animate-spin" />
                  </div>
                  <p className="text-sm text-yellow-600">Element visible, becoming clickable...</p>
                </div>
              )}
              
              {elementState === 'clickable' && (
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto border-4 border-green-500 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-green-600 font-semibold">Element is clickable!</p>
                </div>
              )}
            </div>

            {waitResult && (
              <div className={cn(
                "p-4 rounded-lg border-2",
                waitResult === 'success' 
                  ? "bg-green-50 dark:bg-green-950/20 border-green-500" 
                  : "bg-red-50 dark:bg-red-950/20 border-red-500"
              )}>
                <div className="flex items-center gap-2">
                  {waitResult === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-600">Wait Successful!</p>
                        <p className="text-sm text-green-600/80">Element found and ready in {elapsedTime.toFixed(1)}s</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold text-red-600">Timeout Exception</p>
                        <p className="text-sm text-red-600/80">Element not found within {waitTime}s</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Selenium Code Example</Label>
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


'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitCommitHorizontal, PencilRuler, Braces, Code, Play, ArrowRight } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaTypeCasting({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const wideningExample = {
      title: 'Widening Casting (Automatic)',
      description: 'This happens when you pass a smaller data type to a larger one. Java does this for you automatically because there is no risk of losing data.',
      code: 'int myInt = 9;\ndouble myDouble = myInt; // Automatic casting: int to double\n\nSystem.out.println(myInt);      // Outputs 9\nSystem.out.println(myDouble);   // Outputs 9.0',
      order: 'byte -> short -> char -> int -> long -> float -> double'
    };
  
    const narrowingExample = {
      title: 'Narrowing Casting (Manual)',
      description: 'This happens when you pass a larger data type to a smaller one. You must do this manually by placing the type in parentheses. Be careful, you might lose data!',
      code: 'double myDouble = 9.78;\nint myInt = (int) myDouble; // Manual casting: double to int\n\nSystem.out.println(myDouble);   // Outputs 9.78\nSystem.out.println(myInt);      // Outputs 9 (the decimal part is lost)',
      order: 'double -> float -> long -> int -> char -> short -> byte'
    };
  
    return (
      <div id="java-type-casting-page" data-test="java-type-casting-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GitCommitHorizontal className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Type Casting</h1>
          </div>
          <p className="text-muted-foreground text-lg">Changing a variable from one data type to another.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Why and When to Use Type Casting</CardTitle>
            <CardDescription>
              Type casting allows you to convert a variable from one data type to another, which is essential for managing data and performing operations correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <PencilRuler className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">For Calculations</h3>
                      <p className="text-muted-foreground text-sm">To perform math operations between different numeric types, you often need to convert them to a common type first (usually a larger one to avoid losing data).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Braces className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Assigning Values</h3>
                      <p className="text-muted-foreground text-sm">It's required when you want to put a value from a "larger" data type into a "smaller" one, like saving a `double` (e.g., 9.78) into an `int` (which can only hold whole numbers).</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Code className="w-5 h-5"/>
                  </div>
                  <div>
                      <h3 className="font-semibold">Working with APIs/Libraries</h3>
                      <p className="text-muted-foreground text-sm">Sometimes, a method or function you want to use requires a specific data type. You'll need to cast your variable to match what the method expects.</p>
                  </div>
              </div>
          </CardContent>
        </Card>
  
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Widening Casting</CardTitle>
            <CardDescription>{wideningExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="bg-background rounded-lg p-4 overflow-x-auto">
                <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{wideningExample.code}</code></pre>
              </div>
              <Button onClick={() => onOpenEditor(wrapInMain(wideningExample.code))} variant="ghost" size="sm" className="mt-2">
                  <Play className="mr-2 h-4 w-4" /> Try it
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-primary mb-2">SAFE & AUTOMATIC</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {wideningExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-primary/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Smaller type to larger type</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-muted/30 border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Narrowing Casting</CardTitle>
            <CardDescription>{narrowingExample.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <div className="bg-background rounded-lg p-4 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{narrowingExample.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(narrowingExample.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </div>
             <div className="flex flex-col items-center text-center">
                <p className="font-semibold text-destructive mb-2">UNSAFE & MANUAL</p>
                <div className="font-mono text-sm bg-foreground/5 p-3 rounded-md">
                    {narrowingExample.order.split('->').map((type, index, arr) => (
                        <React.Fragment key={type}>
                            <span className="text-foreground/80">{type.trim()}</span>
                            {index < arr.length - 1 && <ArrowRight className="inline w-4 h-4 mx-1 text-destructive/50" />}
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Larger type to smaller type (potential data loss)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

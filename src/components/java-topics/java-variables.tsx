
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PencilRuler, Play, ChevronRight } from 'lucide-react';
import React from 'react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaVariables({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const declarationSteps = [
      {
        step: 1,
        title: 'Choose a Data Type',
        description: "Decide what kind of data the variable will hold (e.g., `int` for integers, `String` for text).",
        code: 'int',
      },
      {
        step: 2,
        title: 'Give it a Name',
        description: 'Choose a descriptive name for your variable (e.g., `userAge`, `firstName`).',
        code: 'userAge',
      },
      {
        step: 3,
        title: 'Combine Them',
        description: 'Put the type and name together, followed by a semicolon.',
        code: 'int userAge;',
      },
    ];
  
    const initializationExamples = [
      {
        id: 'declare-init',
        title: 'Declare then Initialize',
        description: 'You can declare a variable first and then assign a value to it on a separate line.',
        code: 'int score;\nscore = 100;\nSystem.out.println(score);',
      },
      {
        id: 'declare-and-init',
        title: 'Declare and Initialize',
        description: 'A common shortcut is to assign a value at the same time you declare the variable.',
        code: 'int score = 100;\nSystem.out.println(score);',
      },
      {
        id: 'multiple',
        title: 'Multiple Variables',
        description: 'You can declare multiple variables of the same type on one line, separated by commas.',
        code: 'int x = 5, y = 10, z = 15;\nSystem.out.println(x + y + z);',
      },
      {
        id: 'final',
        title: 'Final (Constants)',
        description: 'Use the `final` keyword to create a constant, whose value cannot be changed.',
        code: 'final double PI = 3.14159;\nSystem.out.println(PI);',
      },
    ];
  
    return (
      <div id="java-variables-page" data-test="java-variables-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PencilRuler className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Variables Basics</h1>
          </div>
          <p className="text-muted-foreground text-lg">The first step to storing data in Java</p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Declaring a Variable?</CardTitle>
            <CardDescription>Declaration tells the compiler the variable's name and the type of data it will hold.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6 p-8">
            {declarationSteps.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="bg-muted rounded p-2 w-full overflow-x-auto">
                    <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{item.code}</code></pre>
                  </div>
                  <Button onClick={() => onOpenEditor(wrapInMain('// This is just a declaration, it doesn\'t print anything by itself\n' + item.code))} variant="ghost" size="sm" className="mt-2">
                      <Play className="mr-2 h-4 w-4" /> Try it
                  </Button>
                </div>
                {index < declarationSteps.length - 1 && (
                  <ChevronRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">What is Initializing a Variable?</CardTitle>
            <CardDescription>Initialization is the process of assigning an initial value to a declared variable.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {initializationExamples.map((ex) => (
              <div key={ex.id} className="bg-muted border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">{ex.title}</h3>
                <p className="text-sm text-foreground mb-3 h-12">{ex.description}</p>
                <div className="bg-background/50 rounded p-3 overflow-x-auto">
                  <pre className="whitespace-pre-wrap"><code className="text-sm text-foreground font-code">{ex.code}</code></pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(ex.code))} variant="ghost" size="sm" className="mt-2">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
}

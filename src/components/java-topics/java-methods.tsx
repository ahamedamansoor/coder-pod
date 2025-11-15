
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FunctionSquare, Play, Puzzle, Recycle, CheckCircle2 } from 'lucide-react';

function wrapInMain(code: string): string {
    // If the code already has a class structure, don't wrap it.
    if (code.trim().startsWith('public class')) {
        return code;
    }
    // If it's just a method definition, wrap it in a class with a main method to call it.
    // This is a simple heuristic and might need adjustment for more complex snippets.
    const methodNameMatch = code.match(/static\s+\w+\s+(\w+)\s*\(/);
    if (methodNameMatch) {
        const methodName = methodNameMatch[1];
        let callMethod = `${methodName}();`;
        if (code.includes('String name')) {
             callMethod = `${methodName}("John");`;
        } else if (code.includes('int x, int y')) {
             callMethod = `${methodName}(5, 3);`;
        }

        return `public class Main {\n  ${code.split('\n').map(line => '  ' + line).join('\n')}\n\n  public static void main(String[] args) {\n    ${callMethod}\n  }\n}`;
    }
    
    // Default fallback for simple lines of code
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}


export function JavaMethods({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {

    const anatomyParts = [
        { name: 'Access Modifier', example: 'public', description: 'Controls the visibility of the method (e.g., `public`, `private`).' },
        { name: 'Static (Optional)', example: 'static', description: 'If present, the method belongs to the class itself, not an object of the class.' },
        { name: 'Return Type', example: 'void', description: 'The data type of the value the method returns. `void` means it returns nothing.' },
        { name: 'Method Name', example: 'myMethod', description: 'A unique name that identifies the method. Follows camelCase convention.' },
        { name: 'Parameters', example: '( )', description: 'A list of input values (arguments) that can be passed to the method. Can be empty.' },
    ];

    const createMethodExample = `static void myMethod() {
  System.out.println("I just got executed!");
}`;
    
    const callMethodExample = `public class Main {
  // Create a method
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    // Call the method
    myMethod();
  }
}`;

    return (
        <div id="java-methods-page" data-test="java-methods-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FunctionSquare className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Methods</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable blocks of code, also known as functions.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Method?</CardTitle>
                    <CardDescription>
                        A method is a block of code that runs only when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                     <div className="flex items-center gap-3">
                       <Recycle className="w-6 h-6 text-primary"/>
                       <CardTitle>Why Use Methods?</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">Code Reusability</h3>
                        <p className="text-sm text-muted-foreground">Write the code once and use it many times. This saves time and effort.</p>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">Better Organization</h3>
                        <p className="text-sm text-muted-foreground">Break down complex problems into smaller, manageable pieces, making your code easier to read and maintain.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Puzzle className="w-6 h-6 text-primary"/>
                       <CardTitle>The Anatomy of a Method</CardTitle>
                    </div>
                    <CardDescription>Let's break down the different parts of a method declaration.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-center text-md mb-6">
                        <span className="text-blue-500">public</span> <span className="text-purple-500">static</span> <span className="text-green-500">void</span> <span className="text-red-500">myMethod</span><span className="text-orange-500">( )</span> &#123; ... &#125;
                    </div>
                    <div className="space-y-4">
                        {anatomyParts.map((part) => (
                           <div key={part.name} className="flex items-start gap-4">
                               <div className="w-32 text-right shrink-0">
                                   <span className={`font-semibold text-sm text-${['blue', 'purple', 'green', 'red', 'orange'][anatomyParts.indexOf(part)]}-500`}>{part.name}</span>
                               </div>
                               <div className="flex-1 border-l-2 border-dashed pl-4">
                                   <p className="text-sm text-muted-foreground">{part.description}</p>
                                   <code className="font-mono text-xs bg-foreground/10 p-1 rounded-md">{part.example}</code>
                               </div>
                           </div>
                        ))}
                    </div>
                </CardContent>
            </Card>


            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Creating and Calling a Method</CardTitle>
                    <CardDescription>A method is defined inside a class. To use it, you have to "call" it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3 className="text-lg font-semibold mb-2">1. Create the method:</h3>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{createMethodExample}</pre>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 mt-6">2. Call the method from `main`:</h3>
                    <p className="text-sm text-muted-foreground mb-4">The `main` method is the entry point of your program. From here, you can call other methods.</p>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{callMethodExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(callMethodExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}


'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VenetianMask, Play, Puzzle, Package, GitCommitHorizontal, CheckCircle2 } from 'lucide-react';

function wrapInMain(code: string): string {
    // If the code already has a class structure, don't wrap it.
    if (code.trim().startsWith('public class')) {
        return code;
    }
    // If it's just a method definition, wrap it in a class with a main method to call it.
    const methodNameMatch = code.match(/static\s+\w+\s+(\w+)\s*\(/);
    if (methodNameMatch) {
        const methodName = methodNameMatch[1];
        let callMethod = `${methodName}();`; // Default call

        if (code.includes('String fname')) {
            callMethod = `${methodName}("John");`;
        } else if (code.includes('int x, int y')) {
            callMethod = `int result = ${methodName}(5, 3);\n    System.out.println(result);`;
        } else if (code.includes('String fname, int age')) {
            callMethod = `${methodName}("Jane", 25);`;
        }


        return `public class Main {\n  ${code.split('\n').map(line => '  ' + line).join('\n')}\n\n  public static void main(String[] args) {\n    ${callMethod}\n  }\n}`;
    }
    
    // Default fallback for simple lines of code
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}


export function JavaMethodParameters({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    
    const singleParamExample = `static void greetUser(String fname) {
  System.out.println("Hello, " + fname + "!");
}`;

    const multiParamExample = `static void checkAge(String name, int age) {
  if (age < 18) {
    System.out.println("Sorry " + name + ", you are not old enough.");
  } else {
    System.out.println("Welcome " + name + ", you are old enough!");
  }
}`;
    
    const returnExample = `static int add(int x, int y) {
  return x + y;
}`;

    return (
        <div id="java-method-params-page" data-test="java-method-params-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Package className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Method Parameters</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Passing "ingredients" to your methods to make them more dynamic.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are Parameters?</CardTitle>
                    <CardDescription>
                       Parameters are variables that act as placeholders for the values (arguments) that you pass to a method when you call it. Think of a method as a recipe and parameters as the ingredients you need to provide.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Puzzle className="w-6 h-6 text-primary"/>
                       <CardTitle>Syntax</CardTitle>
                    </div>
                    <CardDescription>Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want; just separate them with a comma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-center text-md">
                       <span className="text-green-500">returnType</span> <span className="text-red-500">methodName</span>(<span className="text-blue-500">type</span> <span className="text-purple-500">parameter1</span>, <span className="text-blue-500">type</span> <span className="text-purple-500">parameter2</span>) &#123; ... &#125;
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                        <p><strong className="text-purple-500">Parameters</strong> are the variables declared in the method signature (`parameter1`, `parameter2`).</p>
                        <p><strong className="text-purple-500">Arguments</strong> are the actual values you pass to the method when you call it (e.g., `myMethod("hello", 5)`).</p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Single Parameter</CardTitle>
                        <CardDescription>Here's a method that takes one `String` parameter called `fname`.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{singleParamExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(singleParamExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle2 className="text-primary"/> Multiple Parameters</CardTitle>
                        <CardDescription>You can have as many parameters as you need.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{multiParamExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(multiParamExample))}>
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <GitCommitHorizontal className="w-6 h-6 text-primary"/>
                       <CardTitle>Return Values</CardTitle>
                    </div>
                    <CardDescription>If you want the method to return a value, you can use a primitive data type (like `int`, `char`, etc.) instead of `void`, and use the `return` keyword inside the method.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-2">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{returnExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(returnExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}

    
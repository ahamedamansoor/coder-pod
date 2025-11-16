
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Repeat, Play, AlertTriangle, Lightbulb, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

interface JavaRecursionProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    // If the code already has a class structure, don't wrap it.
    if (code.trim().startsWith('public class')) {
        return code;
    }
    
    // Check if it is a method to wrap it correctly to be runnable
    const methodNameMatch = code.match(/static\s+\w+\s+(\w+)\s*\(/);
    if (methodNameMatch) {
      const methodName = methodNameMatch[1];
      let callMethod = `long result = ${methodName}(5);\n    System.out.println("Factorial of 5 is: " + result);`;
      
      return `public class Main {\n  ${code.split('\n').map(line => '  ' + line).join('\n')}\n\n  public static void main(String[] args) {\n    ${callMethod}\n  }\n}`;
    }

    // Default fallback for simple lines of code
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}


export function JavaRecursion({ onOpenEditor }: JavaRecursionProps) {

    const factorialExample = `public static long factorial(int n) {
    if (n <= 1) {
        return 1; // Base Case: the stopping condition
    } 
    else {
        return n * factorial(n - 1); // Recursive Step: the function calls itself
    }
}`;
    
    const callStackDiagram = [
        { call: 'factorial(5)', returns: '5 * factorial(4)', step: 1, color: 'border-blue-500/20 bg-blue-500/5' },
        { call: 'factorial(4)', returns: '4 * factorial(3)', step: 2, color: 'border-green-500/20 bg-green-500/5' },
        { call: 'factorial(3)', returns: '3 * factorial(2)', step: 3, color: 'border-yellow-500/20 bg-yellow-500/5' },
        { call: 'factorial(2)', returns: '2 * factorial(1)', step: 4, color: 'border-purple-500/20 bg-purple-500/5' },
        { call: 'factorial(1)', returns: '1 (Base Case Hit!)', step: 5, color: 'border-red-500/20 bg-red-500/5' },
    ];
    
    const windingBack = [
        { step: 1, calculation: 'Return from factorial(1) is 1', result: '1', color: 'border-red-500/20 bg-red-500/5' },
        { step: 2, calculation: 'Return from factorial(2) is 2 * 1', result: '2', color: 'border-purple-500/20 bg-purple-500/5' },
        { step: 3, calculation: 'Return from factorial(3) is 3 * 2', result: '6', color: 'border-yellow-500/20 bg-yellow-500/5' },
        { step: 4, calculation: 'Return from factorial(4) is 4 * 6', result: '24', color: 'border-green-500/20 bg-green-500/5' },
        { step: 5, calculation: 'Return from factorial(5) is 5 * 24', result: '120', color: 'border-blue-500/20 bg-blue-500/5' },
    ];

    return (
        <div id="java-recursion-page" data-test="java-recursion-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Repeat className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Recursion</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The art of a function calling itself to solve a problem.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is Recursion?</CardTitle>
                    <CardDescription>
                       Imagine you have a set of Russian nesting dolls. To find the smallest doll, you open one doll, which reveals another slightly smaller doll inside. You repeat this process—opening each doll—until you reach the final, solid doll that can't be opened. This is recursion in a nutshell!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>In programming, recursion is a technique where a function calls itself to solve smaller and smaller instances of the same problem, until it reaches a "base case" where the problem can be solved directly.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The Two Pillars of Recursion</CardTitle>
                    <CardDescription>Every recursive function must have these two parts to avoid running forever.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5"/>The Base Case</h3>
                        <p className="text-sm text-muted-foreground">This is the simplest version of the problem that the function knows how to solve directly, without calling itself again. It's the "stopping condition" that prevents an infinite loop.</p>
                    </div>
                     <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2"><Repeat className="w-5 h-5"/>The Recursive Step</h3>
                        <p className="text-sm text-muted-foreground">This is where the function calls itself with a slightly modified input, moving it closer to the base case. It breaks the big problem down into smaller, identical problems.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Calculating a Factorial</CardTitle>
                    <CardDescription>A classic recursion example. The factorial of a number `n` (written as `n!`) is the product of all positive integers up to `n`. For example, `5! = 5 * 4 * 3 * 2 * 1 = 120`.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{factorialExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(factorialExample)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Visualizing the Call Stack</CardTitle>
                    <CardDescription>Let's see how `factorial(5)` works step-by-step.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-center">1. The Calls Go "Down"</h3>
                        <div className="space-y-2">
                        {callStackDiagram.map((item, index) => (
                             <div key={index} className={`relative p-3 rounded-lg border-2 border-dashed ${item.color}`} style={{ marginLeft: `${index * 15}px` }}>
                                <p className="font-mono text-sm"><span className="font-bold">{item.call}</span> which needs to return <span className="font-bold text-primary">{item.returns}</span></p>
                            </div>
                        ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-4 text-center">2. The Returns Come "Up"</h3>
                        <div className="space-y-2">
                        {windingBack.map((item, index) => (
                             <div key={index} className={`relative p-3 rounded-lg border-2 ${item.color}`} style={{ marginLeft: `${(4-index) * 15}px` }}>
                                <p className="font-mono text-sm"><span className="text-muted-foreground">{item.calculation}</span> → Returns <span className="font-bold text-primary">{item.result}</span></p>
                            </div>
                        ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-yellow-500/50 bg-yellow-500/5">
                 <CardHeader>
                    <CardTitle className="text-yellow-700 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Pros vs. Cons
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-green-600 flex items-center gap-2"><CheckCircle/>Pros</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Elegant solution for problems that are naturally recursive (e.g., tree traversal, sorting algorithms).</li>
                            <li>Can result in cleaner, more readable code.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-destructive flex items-center gap-2"><XCircle/>Cons</h3>
                         <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Can be less efficient due to the overhead of multiple function calls.</li>
                            <li>Risk of `StackOverflowError` if the recursion is too deep and exhausts memory.</li>
                            <li>Can be harder to debug than an iterative (loop-based) solution.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

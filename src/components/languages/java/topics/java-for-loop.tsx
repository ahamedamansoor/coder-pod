
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Repeat, Play, ArrowRight, Layers } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaForLoop({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const basicLoop = `for (int i = 0; i < 5; i++) {
  System.out.println("Current count: " + i);
}`;

    const nestedLoop = `for (int i = 1; i <= 3; i++) {
  for (int j = 1; j <= 2; j++) {
    System.out.println("i = " + i + "; j = " + j);
  }
}`;

    const syntaxParts = [
        { name: "Initialization", description: "Executed one time before the execution of the code block. Usually used to initialize a counter variable.", code: "int i = 0" },
        { name: "Condition", description: "Defines the condition for executing the code block. The loop continues as long as this condition is true.", code: "i < 5" },
        { name: "Increment / Decrement", description: "Executed every time after the code block has been executed. Usually used to change the value of the counter variable.", code: "i++" }
    ];

    return (
        <div id="java-for-loop-page" data-test="java-for-loop-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Repeat className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">For Loop</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">When you know exactly how many times you want to loop through a block of code.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Anatomy of a `for` Loop</CardTitle>
                    <CardDescription>A `for` loop combines initialization, condition, and increment/decrement into one line.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-center text-lg mb-6">
                        for ( <span className="text-blue-500">Initialization</span>; <span className="text-green-500">Condition</span>; <span className="text-purple-500">Increment/Decrement</span> )
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {syntaxParts.map((part, index) => (
                           <div key={part.name} className="flex flex-col items-center">
                                <div className="flex-1">
                                    <h3 className={`font-bold text-lg text-${['blue', 'green', 'purple'][index]}-500`}>{part.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1 mb-3">{part.description}</p>
                                </div>
                                <code className="font-mono text-sm bg-foreground/10 p-2 rounded-md">{part.code}</code>
                           </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Counting from 0 to 4</CardTitle>
                    <CardDescription>This is a classic `for` loop that prints numbers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{basicLoop}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(basicLoop))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Layers className="w-6 h-6 text-primary"/>
                        <CardTitle>Nested Loops</CardTitle>
                    </div>
                    <CardDescription>You can put one loop inside of another. For each iteration of the outer loop, the inner loop will complete its full cycle.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{nestedLoop}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(nestedLoop))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}


'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Repeat, Repeat1, Play, AlertTriangle } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaWhileLoop({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const whileLoopExample = `int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}`;

    const doWhileLoopExample = `int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);`;

    const infiniteLoopExample = `int i = 0;
while (i < 5) {
  System.out.println("This will run forever!");
  // The counter 'i' is never incremented, so the condition 'i < 5' is always true.
}`;

    return (
        <div id="java-while-loop-page" data-test="java-while-loop-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Repeat className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">While Loop</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Repeating a block of code as long as a condition is true.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The `while` Loop</CardTitle>
                    <CardDescription>The `while` loop checks the condition *before* executing the code block. If the condition is false initially, the loop will never run.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 w-full bg-muted p-4 rounded-lg">
                           <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`while (condition) {
  // code block to be executed
}`}</pre>
                        </div>
                        <div className="flex-1">
                            <div className="bg-muted rounded-md p-4 mb-4">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{whileLoopExample}</pre>
                            </div>
                            <Button onClick={() => onOpenEditor(wrapInMain(whileLoopExample))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                      <Repeat1 className="w-6 h-6 text-primary"/>
                      <CardTitle>The `do-while` Loop</CardTitle>
                    </div>
                    <CardDescription>The `do-while` loop is a variant that executes the code block *at least once*, and then checks the condition to decide if it should run again.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 w-full bg-muted p-4 rounded-lg">
                           <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`do {
  // code block to be executed
} while (condition);`}</pre>
                        </div>
                        <div className="flex-1">
                            <div className="bg-muted rounded-md p-4 mb-4">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{doWhileLoopExample}</pre>
                            </div>
                            <Button onClick={() => onOpenEditor(wrapInMain(doWhileLoopExample))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6"/>
                        Beware of Infinite Loops!
                    </CardTitle>
                    <CardDescription>
                        A loop becomes infinite if its condition never becomes false. This can happen if you forget to update the variable used in the condition. An infinite loop will cause your program to run forever and may crash it.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-card rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{infiniteLoopExample}</pre>
                    </div>
                    <p className="text-xs text-muted-foreground">This code will not be runnable in the editor to prevent crashes.</p>
                </CardContent>
            </Card>
        </div>
    );
}

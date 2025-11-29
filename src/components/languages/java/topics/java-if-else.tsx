
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waypoints, ChevronRight, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaIfElse({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const ifExample = 'int age = 20;\n\nif (age >= 18) {\n  System.out.println("You are an adult.");\n}';
    const ifElseExample = 'int time = 22;\n\nif (time < 18) {\n  System.out.println("Good day.");\n} else {\n  System.out.println("Good evening.");\n}';
    const elseIfExample = 'int score = 85;\n\nif (score >= 90) {\n  System.out.println("Grade: A");\n} else if (score >= 80) {\n  System.out.println("Grade: B");\n} else {\n  System.out.println("Grade: C or lower");\n}';

    return (
        <div id="java-if-else-page" data-test="java-if-else-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Waypoints className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">If-Else Statement</h1>
                </div>
                <p className="text-muted-foreground text-lg">Making decisions in your code.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><ChevronRight className="w-6 h-6 text-primary"/>The `if` Statement</CardTitle>
                    <CardDescription>The `if` statement executes a block of code only if a specified condition is true.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{ifExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(ifExample))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><ChevronRight className="w-6 h-6 text-primary"/>The `else` Statement</CardTitle>
                    <CardDescription>The `else` statement specifies a block of code to be executed if the condition in the `if` statement is false.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{ifElseExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(ifElseExample))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><ChevronRight className="w-6 h-6 text-primary"/>The `else if` Statement</CardTitle>
                    <CardDescription>Use `else if` to specify a new condition to test, if the first condition is false. You can have multiple `else if` statements.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{elseIfExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(elseIfExample))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                </CardContent>
            </Card>
        </div>
    );
}

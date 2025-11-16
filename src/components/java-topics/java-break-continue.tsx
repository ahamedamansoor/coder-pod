'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, SkipForward, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaBreakContinue({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const breakExample = `for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break; // Exit the loop when i is 4
  }
  System.out.println(i);
}`;
    const breakOutput = "0\n1\n2\n3";

    const continueExample = `for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue; // Skip this iteration when i is 4
  }
  System.out.println(i);
}`;
    const continueOutput = "0\n1\n2\n3\n5\n6\n7\n8\n9";

    return (
        <div id="java-break-continue-page" data-test="java-break-continue-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <SkipForward className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Break and Continue</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Controlling the flow of your loops.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <LogOut className="w-8 h-8 text-destructive"/>
                            <CardTitle className="text-3xl">The `break` Statement</CardTitle>
                        </div>
                        <CardDescription>The `break` statement is used to exit a loop (or a `switch` statement) completely.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">When the `break` keyword is encountered inside a loop, the loop is immediately terminated, and program control resumes at the next statement following the loop.</p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                                <div className="bg-muted rounded-md p-4">
                                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{breakExample}</pre>
                                </div>
                                <Button onClick={() => onOpenEditor(wrapInMain(breakExample))} variant="ghost" size="sm" className="mt-2">
                                    <Play className="mr-2 h-4 w-4" /> Try it
                                </Button>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Resulting Output:</h4>
                                <div className="bg-foreground/5 rounded-md p-4">
                                    <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{breakOutput}</pre>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <SkipForward className="w-8 h-8 text-primary"/>
                            <CardTitle className="text-3xl">The `continue` Statement</CardTitle>
                        </div>
                        <CardDescription>The `continue` statement is used to skip the current iteration of a loop and move to the next one.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">When `continue` is encountered, the code inside the loop for the current iteration is skipped, and the loop proceeds with the next iteration.</p>
                         <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                                <div className="bg-muted rounded-md p-4">
                                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{continueExample}</pre>
                                </div>
                                <Button onClick={() => onOpenEditor(wrapInMain(continueExample))} variant="ghost" size="sm" className="mt-2">
                                    <Play className="mr-2 h-4 w-4" /> Try it
                                </Button>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-2">Resulting Output:</h4>
                                <div className="bg-foreground/5 rounded-md p-4">
                                    <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{continueOutput}</pre>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

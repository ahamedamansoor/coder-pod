
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitBranch, Play, AlertTriangle, CheckSquare, XSquare } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaSwitch({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const basicSwitch = `int day = 4;
String dayString;

switch (day) {
  case 1:
    dayString = "Monday";
    break;
  case 2:
    dayString = "Tuesday";
    break;
  case 3:
    dayString = "Wednesday";
    break;
  case 4:
    dayString = "Thursday";
    break;
  case 5:
    dayString = "Friday";
    break;
  case 6:
    dayString = "Saturday";
    break;
  case 7:
    dayString = "Sunday";
    break;
  default:
    dayString = "Invalid day";
    break;
}
System.out.println(dayString);`;

    const noBreakExample = `int day = 4;
switch (day) {
  case 4:
    System.out.println("Thursday");
    // No break!
  case 5:
    System.out.println("Friday");
  default:
    System.out.println("Weekend is near!");
}`;

    return (
        <div id="java-switch-page" data-test="java-switch-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <GitBranch className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Switch Statement</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A clean alternative to a long chain of `if-else if` statements.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a `switch` statement?</CardTitle>
                    <CardDescription>The `switch` statement allows a variable to be tested for equality against a list of values. Each value is called a `case`, and the variable being switched on is checked for each `case`.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">Syntax Breakdown</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                                    <span>`switch (expression)`: The `expression` (often a variable) is evaluated once.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                                    <span>`case value:`: The value of the expression is compared with the values of each `case`.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                                    <span>`break;`: When Java reaches a `break` keyword, it breaks out of the switch block. This stops the execution of more code.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XSquare className="w-5 h-5 text-destructive mt-0.5" />
                                    <span>`default:`: The `default` keyword specifies some code to run if there is no `case` match.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full bg-muted p-4 rounded-lg">
                           <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Example: Day of the Week</CardTitle>
                    <CardDescription>Let's see how a `switch` statement works in practice.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{basicSwitch}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(basicSwitch))}><Play className="mr-2 h-4 w-4" /> Try it</Button>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6"/>
                        The Importance of `break`
                    </CardTitle>
                    <CardDescription>If you forget a `break` statement, the code will "fall through" and continue to execute the code of the next case, regardless of whether the case matches, until a `break` is found or the `switch` block ends.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">In this example, since there is no `break` in `case 4`, the output will include the `println` statements from case 5 and default as well.</p>
                     <div className="bg-card rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{noBreakExample}</pre>
                    </div>
                    <Button variant="destructive" onClick={() => onOpenEditor(wrapInMain(noBreakExample))}><Play className="mr-2 h-4 w-4" /> Try it & See the Fall-Through</Button>
                </CardContent>
            </Card>
        </div>
    );
}

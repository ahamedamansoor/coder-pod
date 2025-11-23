
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandMetal, Code, Play, Puzzle, CheckCircle2, Rocket } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function FirstJavaProgram({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const helloWorldCode = 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!"); // This line prints the text\n  }\n}';
    
    const codeBreakdown = [
        { part: 'public class Main', explanation: 'This defines a class named `Main`. In Java, every application must contain at least one class definition. The `public` keyword means it is accessible by anyone.' },
        { part: 'public static void main(String[] args)', explanation: 'This is the main method, the entry point of any Java application. It\'s what gets executed when you run your program.' },
        { part: 'System.out.println("Hello, World!");', explanation: 'This is the statement that prints the text "Hello, World!" to the console, followed by a new line.' },
        { part: '{ }', explanation: 'Curly braces are used to group blocks of code together, defining the scope of classes and methods.' },
    ];

    return (
        <div id="first-java-program-page" data-test="first-java-program-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <HandMetal className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Hello World</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Let's write the traditional "Hello, World!" program. It's a rite of passage for every programmer!</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Code className="w-6 h-6 text-primary" />
                        The "Hello, World!" Code
                    </CardTitle>
                    <CardDescription>This is what the simplest Java program looks like.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{helloWorldCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(helloWorldCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Code Editor
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Puzzle className="w-6 h-6 text-primary" />
                        Breaking It Down
                    </CardTitle>
                    <CardDescription>Let's look at what each piece of the code does.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {codeBreakdown.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-2 rounded-lg mt-1">
                               <CheckCircle2 className="w-5 h-5"/>
                            </div>
                            <div>
                                <code className="font-mono text-sm font-semibold bg-muted p-1 rounded">{item.part}</code>
                                <p className="text-muted-foreground text-sm mt-1">{item.explanation}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="flex-row items-center gap-4">
                    <Rocket className="w-8 h-8 text-primary"/>
                    <div>
                        <CardTitle className="text-primary">You've Done It!</CardTitle>
                        <CardDescription className="text-primary/80">You've just seen the fundamental structure of a Java program. Click the button above to run it yourself in our code editor!</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

    
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CornerDownLeft, ArrowRight, Combine, Asterisk, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaEscapeSequences({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const sequences = [
      {
        name: "New Line",
        sequence: "\\n",
        description: "Moves the cursor to the beginning of the next line.",
        example: 'System.out.println("Hello\\nWorld!");',
        output: 'Hello\nWorld!',
        icon: CornerDownLeft,
      },
      {
        name: "Tab",
        sequence: "\\t",
        description: "Inserts a horizontal tab space.",
        example: 'System.out.println("Column 1\\tColumn 2");',
        output: 'Column 1\tColumn 2',
        icon: ArrowRight,
      },
      {
        name: "Double Quote",
        sequence: '\\"',
        description: "Allows you to include a double quote character inside a string literal.",
        example: 'System.out.println("She said, \\"Hello!\\"");',
        output: 'She said, "Hello!"',
        icon: Combine,
      },
      {
        name: "Backslash",
        sequence: "\\\\",
        description: "Allows you to include a backslash character itself.",
        example: 'System.out.println("The path is C:\\\\Users\\\\John");',
        output: 'The path is C:\\Users\\John',
        icon: Asterisk,
      },
    ];

    return (
        <div id="java-escape-sequences-page" data-test="java-escape-sequences-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Combine className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Escape Sequences</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Special characters that control how your text is formatted.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What are they?</CardTitle>
                    <CardDescription>
                        An escape sequence is a character that starts with a backslash (`\`) and is followed by another character. Java uses them inside `String` literals to represent special characters that would otherwise be difficult or impossible to type directly.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                {sequences.map((seq) => (
                    <Card key={seq.name} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <seq.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">{seq.name}</CardTitle>
                                    <p className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">{seq.sequence}</p>
                                </div>
                            </div>
                            <CardDescription className="pt-2">{seq.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                                    <div className="bg-muted rounded-md p-4">
                                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{seq.example}</pre>
                                    </div>
                                    <Button onClick={() => onOpenEditor(wrapInMain(seq.example))} variant="ghost" size="sm" className="mt-2">
                                        <Play className="mr-2 h-4 w-4" /> Try it
                                    </Button>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Resulting Output:</h4>
                                    <div className="bg-foreground/5 rounded-md p-4">
                                        <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{seq.output}</pre>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

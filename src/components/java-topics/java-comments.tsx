
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Book, DraftingCompass, Play, Lightbulb } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaComments({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const commentTypes = [
      {
        name: "Single-Line Comment",
        syntax: "// This is a single-line comment",
        description: "Starts with `//`. Anything after `//` on the same line is ignored by the compiler. It's perfect for short explanations or quick notes.",
        example: `// Calculate the sum of two numbers
int sum = 5 + 10; // Adds 5 and 10 together
System.out.println(sum);`,
        icon: MessageSquare
      },
      {
        name: "Multi-Line Comment",
        syntax: "/* ... */",
        description: "Starts with `/*` and ends with `*/`. You can write multiple lines of comments between them. Ideal for longer explanations or temporarily disabling a block of code.",
        example: `/*
  This code calculates the area of a rectangle.
  It takes width and height as input
  and returns the calculated area.
*/
int width = 10;
int height = 5;
int area = width * height;
System.out.println("Area: " + area);`,
        icon: Book
      },
      {
        name: "Documentation Comment (Javadoc)",
        syntax: "/** ... */",
        description: "Starts with `/**` and ends with `*/`. This is a special type of comment used to generate official API documentation for your code. It's used to describe classes, methods, and variables.",
        example: `/**
 * The main method to run this example program.
 * @param args Command line arguments (not used).
 */
public static void main(String[] args) {
    // This is the main function, so the Javadoc comment would typically be on a class or method.
    // For demonstration, we'll just print a message.
    System.out.println("Javadoc comments are for documentation!");
}`,
        icon: DraftingCompass
      }
    ];
  
    return (
      <div id="java-comments-page" data-test="java-comments-page" className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <MessageSquare className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Comments in Java</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Leaving notes for yourself and others in your code.</p>
        </div>
  
        <Card>
            <CardHeader>
                <CardTitle>Why Use Comments?</CardTitle>
                <CardDescription>Comments are ignored by the computer but are crucial for humans.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p>✓ <strong>Explain Code:</strong> Clarify what your code does, especially the complex parts.</p>
                <p>✓ <strong>Make Code Readable:</strong> Help other developers (and your future self!) understand your logic.</p>
                <p>✓ <strong>Temporarily Disable Code:</strong> "Comment out" lines of code to prevent them from running without deleting them.</p>
            </CardContent>
        </Card>

        <div className="space-y-6">
            {commentTypes.map((comment) => (
                <Card key={comment.name} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <comment.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-2xl">{comment.name}</CardTitle>
                        </div>
                        <CardDescription>{comment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{comment.example}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(comment.example))} variant="ghost" size="sm" className="mt-2">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <CardHeader className="flex-row items-center gap-4">
                <Lightbulb className="w-8 h-8 text-yellow-600"/>
                <div>
                    <CardTitle className="text-yellow-800 dark:text-yellow-300">Best Practice</CardTitle>
                    <CardDescription className="text-yellow-700 dark:text-yellow-400">
                        Write comments to explain <em>why</em> your code is doing something, not just <em>what</em> it is doing. Good code should be self-explanatory about what it does.
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
      </div>
    );
}

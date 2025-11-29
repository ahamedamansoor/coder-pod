
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileQuestion } from 'lucide-react';

export function JavaReadingDifferentTypes() {
    const methods = [
        { method: "next()", reads: "A single word (until a space is found)", example: 'String word = myScanner.next();' },
        { method: "nextLine()", reads: "The entire line of text (until the user hits Enter)", example: 'String line = myScanner.nextLine();' },
        { method: "nextInt()", reads: "An integer (`int`)", example: 'int number = myScanner.nextInt();' },
        { method: "nextDouble()", reads: "A double-precision number (`double`)", example: 'double decimal = myScanner.nextDouble();' },
        { method: "nextBoolean()", reads: "A boolean value (`true` or `false`)", example: 'boolean choice = myScanner.nextBoolean();' },
        { method: "nextFloat()", reads: "A floating-point number (`float`)", example: 'float price = myScanner.nextFloat();' },
        { method: "nextLong()", reads: "A long integer (`long`)", example: 'long largeNumber = myScanner.nextLong();' },
    ];
    
    const fullExample = `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner myScanner = new Scanner(System.in);

    System.out.println("Enter name, age and salary:");

    // String input
    String name = myScanner.nextLine();

    // Numerical input
    int age = myScanner.nextInt();
    double salary = myScanner.nextDouble();

    // Output input by user
    System.out.println("Name: " + name); 
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}`;

    return (
        <div id="java-reading-types-page" data-test="java-reading-types-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <FileQuestion className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Reading Different Data Types</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The `Scanner` class has different methods for reading different types of data.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Scanner Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Method</TableHead>
                                <TableHead>What it Reads</TableHead>
                                <TableHead>Example Usage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {methods.map(m => (
                                <TableRow key={m.method}>
                                    <TableCell><code className="font-mono text-primary font-semibold">{m.method}</code></TableCell>
                                    <TableCell>{m.reads}</TableCell>
                                    <TableCell><code className="font-mono bg-muted p-1 rounded text-sm">{m.example}</code></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Full Example</CardTitle>
                    <CardDescription>
                        This program asks for a name, age, and salary, and then prints them out. Note that this example will not run in the browser editor.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{fullExample}</pre>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="border-yellow-500/50 bg-yellow-500/5">
                <CardHeader>
                    <CardTitle className="text-yellow-700">A Common Pitfall: `nextInt()` and `nextLine()`</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-yellow-600 mb-4">When you use `nextInt()` (or any other `next...()` method besides `nextLine()`), it only reads the number, not the "new line" character that's created when you press Enter. This leftover newline character is then immediately consumed by the next `nextLine()` call, causing it to skip the input you intended for it.</p>
                    <p className="text-yellow-600 mb-2 font-semibold">The Fix:</p>
                    <p className="text-yellow-600 mb-4">If you use a method like `nextInt()` and you know you're going to use `nextLine()` after it, add an extra `myScanner.nextLine();` call in between to consume the leftover newline character.</p>
                    <div className="bg-background rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
{`int age = myScanner.nextInt();
// Consume the leftover newline
myScanner.nextLine(); 
String name = myScanner.nextLine();`}
                        </pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

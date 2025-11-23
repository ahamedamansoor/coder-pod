
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function JavaInputValidation() {
    const example = `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Please enter an integer:");

    if (sc.hasNextInt()) {
        int number = sc.nextInt();
        System.out.println("You entered the integer: " + number);
    } else {
        System.out.println("That's not an integer! Please run the program again.");
    }
  }
}`;

    return (
        <div id="java-input-validation-page" data-test="java-input-validation-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Input Validation</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Checking if the user has entered the correct type of data before you try to use it.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Why Validate Input?</CardTitle>
                    <CardDescription>
                        If you ask for an integer and the user types "hello", your program will crash with an `InputMismatchException`. To prevent this, you can check the input type first.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The `Scanner` class provides `hasNext...()` methods that check if the next input token can be interpreted as the specified type without actually consuming it.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>The `hasNextInt()` Method</CardTitle>
                    <CardDescription>
                        This method returns `true` if the next token in the scanner's input can be interpreted as an `int` value.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example}</pre>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">This example will not run correctly in the browser editor because it requires user input.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Other `hasNext...()` Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Just like there are different `next...()` methods, there's a corresponding `hasNext...()` method for each:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextDouble()</code></li>
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextFloat()</code></li>
                        <li><code className="font-mono bg-muted p-1 rounded">hasNextBoolean()</code></li>
                        <li>...and so on.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

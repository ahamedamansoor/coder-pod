
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Table, Rows, Repeat } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaMultiDimensionalArrays({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {

    const declarationExample = `// A 2D array of integers
int[][] myNumbers;`;

    const initializationExample = `// Initialize a 2x3 array (2 rows, 3 columns)
myNumbers = new int[2][3];

// Initialize with values directly
int[][] myNumbersLiteral = { {1, 2, 3}, {4, 5, 6} };`;

    const accessExample = `int[][] myNumbers = { {1, 2, 3}, {4, 5, 6} };
// Access the element in the 2nd row (index 1) and 3rd column (index 2)
int x = myNumbers[1][2]; 
System.out.println(x); // Output: 6`;

    const changeExample = `int[][] myNumbers = { {1, 2, 3}, {4, 5, 6} };
// Change the element in the 1st row, 1st column to 9
myNumbers[0][0] = 9;
System.out.println(myNumbers[0][0]); // Output: 9`;

    const loopExample = `int[][] myNumbers = { {1, 2, 3}, {4, 5, 6} };
// Loop through rows
for (int i = 0; i < myNumbers.length; i++) {
  // Loop through columns
  for(int j = 0; j < myNumbers[i].length; j++) {
    System.out.println(myNumbers[i][j]);
  }
}`;

    return (
        <div id="java-multi-dim-arrays-page" data-test="java-multi-dim-arrays-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Table className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Multi-Dimensional Arrays</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating an "array of arrays" to store data in a grid or table format.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a 2D Array?</CardTitle>
                    <CardDescription>
                        A multi-dimensional array is essentially an array where each element is another array. The most common type is a 2D array, which you can think of as a table or a grid with rows and columns.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                     <div className="bg-muted p-4 rounded-lg">
                        <p className="text-center font-semibold mb-2">int[][] myNumbers = &#123; &#123;1, 2, 3&#125;, &#123;4, 5, 6&#125; &#125;;</p>
                        <table className="border-collapse border border-border">
                            <tbody>
                                <tr>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[0][0]<br/>(1)</td>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[0][1]<br/>(2)</td>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[0][2]<br/>(3)</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[1][0]<br/>(4)</td>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[1][1]<br/>(5)</td>
                                    <td className="border border-border p-2 font-mono text-center bg-background">myNumbers[1][2]<br/>(6)</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Rows className="w-6 h-6 text-primary"/>
                       <CardTitle>Declaration and Initialization</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Declaration</h3>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`DataType[][] arrayName;`}</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Initialization</h3>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{initializationExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(`int[][] myNumbersLiteral = { {1, 2, 3}, {4, 5, 6} };\nSystem.out.println(myNumbersLiteral[0][0]);`))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Rows className="w-6 h-6 text-primary"/>
                       <CardTitle>Accessing and Changing Elements</CardTitle>
                    </div>
                    <CardDescription>You use two index numbers: the first for the row and the second for the column. Remember, indexes start at 0!</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-2">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{accessExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(accessExample))} variant="ghost" size="sm">
                        <Play className="mr-2 h-4 w-4" /> Try Accessing
                    </Button>
                     <div className="bg-muted rounded-md p-4 mb-2 mt-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{changeExample}</pre>
                    </div>
                     <Button onClick={() => onOpenEditor(wrapInMain(changeExample))} variant="ghost" size="sm">
                        <Play className="mr-2 h-4 w-4" /> Try Changing
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Repeat className="text-primary"/>Looping Through a 2D Array</CardTitle>
                    <CardDescription>You can use a `for` loop inside another `for` loop (a nested loop) to get all the elements of a 2D array.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-2">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{loopExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(loopExample))} variant="ghost" size="sm">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}

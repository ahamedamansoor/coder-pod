
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileType, Play, Lightbulb } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    const fullCode = `String str = "Hello, World!";\n${code}`;
    return `public class Main {\n  public static void main(String[] args) {\n    ${fullCode.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaStringMethods({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const methods = [
        { name: "length()", description: "Returns the number of characters in the string.", example: "System.out.println(str.length());", output: "13" },
        { name: "toUpperCase()", description: "Converts all characters to uppercase.", example: "System.out.println(str.toUpperCase());", output: "HELLO, WORLD!" },
        { name: "toLowerCase()", description: "Converts all characters to lowercase.", example: "System.out.println(str.toLowerCase());", output: "hello, world!" },
        { name: "indexOf()", description: "Returns the index of the first occurrence of a specified text.", example: "System.out.println(str.indexOf(\"World\"));", output: "7" },
        { name: "charAt()", description: "Returns the character at a specified index.", example: "System.out.println(str.charAt(0));", output: "H" },
        { name: "substring()", description: "Extracts the characters from a string, between two specified indices.", example: "System.out.println(str.substring(7, 12));", output: "World" },
        { name: "equals()", description: "Compares two strings. Returns true if the strings are equal, and false if not.", example: 'System.out.println(str.equals("Hello, World!"));', output: "true" },
        { name: "equalsIgnoreCase()", description: "Compares two strings, ignoring case differences.", example: 'System.out.println(str.equalsIgnoreCase("hello, world!"));', output: "true" },
        { name: "replace()", description: "Searches a string for a specified value, and returns a new string where the specified values are replaced.", example: 'System.out.println(str.replace("World", "Java"));', output: "Hello, Java!" },
        { name: "trim()", description: "Removes whitespace from both ends of a string.", example: 'String spaced = "   Hello   ";\nSystem.out.println(spaced.trim());', output: "Hello" },
        { name: "concat()", description: "Appends a string to the end of another string.", example: 'System.out.println(str.concat(" Have a great day!"));', output: "Hello, World! Have a great day!" },
    ];

  return (
    <div id="java-string-methods-page" data-test="java-string-methods-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <FileType className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">String Methods</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Common methods for working with and manipulating strings.</p>
      </div>

      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardHeader className="flex-row items-center gap-4">
            <Lightbulb className="w-8 h-8 text-yellow-600"/>
            <div>
                <CardTitle className="text-yellow-700">Strings are Immutable</CardTitle>
                <CardDescription className="text-yellow-600">
                    An important concept in Java is that `String` objects are **immutable**, which means they cannot be changed after they are created. Methods like `toUpperCase()` or `replace()` don't change the original string; they return a **new** string with the changes.
                </CardDescription>
            </div>
        </CardHeader>
      </Card>

      <Card>
          <CardHeader>
            <CardTitle>Common `String` Methods</CardTitle>
            <CardDescription>
                All examples below are run using the base string: <code className="font-mono bg-muted p-1 rounded">String str = "Hello, World!";</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {methods.map(method => (
                  <TableRow key={method.name}>
                    <TableCell className="font-mono font-bold text-primary">{method.name}</TableCell>
                    <TableCell>{method.description}</TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{method.example}</code></pre>
                    </TableCell>
                     <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{method.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(method.example))} variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}

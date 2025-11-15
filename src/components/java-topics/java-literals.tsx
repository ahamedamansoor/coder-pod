
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaLiterals({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const literalTypes = [
      {
        name: "Integer Literals",
        description: "Represents whole numbers. Can be decimal (base 10), hexadecimal (base 16, prefix `0x`), or binary (base 2, prefix `0b`).",
        example: "int decimal = 100;\nint hex = 0x64;\nint binary = 0b1100100;\nSystem.out.println(decimal);",
      },
      {
        name: "Floating-Point Literals",
        description: "Represents numbers with fractional parts. By default, they are of type `double`. Add an `f` or `F` for `float`.",
        example: "double pi = 3.14159;\nfloat price = 19.99f;\nSystem.out.println(price);",
      },
      {
        name: "Character Literals",
        description: "Represents a single character and is enclosed in single quotes.",
        example: "char grade = 'A';\nchar symbol = '$';\nSystem.out.println(grade);",
      },
      {
        name: "String Literals",
        description: "Represents a sequence of characters and is enclosed in double quotes.",
        example: 'String greeting = "Hello, Java!";\nSystem.out.println(greeting);',
      },
      {
        name: "Boolean Literals",
        description: "Represents a truth value. It can only be `true` or `false`.",
        example: "boolean isLoggedIn = true;\nboolean isComplete = false;\nSystem.out.println(isLoggedIn);",
      },
      {
        name: "Null Literal",
        description: "Represents a null reference, meaning the variable does not point to any object.",
        example: "String name = null;\nSystem.out.println(name);",
      },
    ];
  
    return (
      <div id="java-literals-page" data-test="java-literals-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Award className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Literals</h1>
          </div>
          <p className="text-muted-foreground text-lg">The fixed values you assign to your variables.</p>
        </div>
  
        <Card>
            <CardHeader>
                <CardTitle>What is a Literal?</CardTitle>
                <CardDescription>
                    In programming, a literal is a source code representation of a fixed value. It's the actual data you're assigning to a variable. For example, in `int x = 10;`, the `10` is the literal.
                </CardDescription>
            </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {literalTypes.map((literal) => (
                <Card key={literal.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle>{literal.name}</CardTitle>
                        <CardDescription>{literal.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{literal.example}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(literal.example))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    );
}

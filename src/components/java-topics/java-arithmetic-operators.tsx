
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusSquare, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaArithmeticOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "+", name: "Addition", example: "int sum = 10 + 5;", output: "15" },
        { op: "-", name: "Subtraction", example: "int diff = 10 - 5;", output: "5" },
        { op: "*", name: "Multiplication", example: "int prod = 10 * 5;", output: "50" },
        { op: "/", name: "Division", example: "int quot = 10 / 5;", output: "2" },
        { op: "%", name: "Modulus (Remainder)", example: "int rem = 10 % 3;", output: "1" },
        { op: "++", name: "Increment", example: "int i = 5; i++;", output: "i will be 6" },
        { op: "--", name: "Decrement", example: "int i = 5; i--;", output: "i will be 4" },
      ];

  return (
    <div id="java-arithmetic-operators-page" data-test="java-arithmetic-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <PlusSquare className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Arithmetic Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to perform common mathematical operations.</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Example</TableHead>
                   <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>{op.name}</TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                     <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(`${op.example}\nSystem.out.println(${op.example.match(/(\w+)\s*=/)?.[1] || 'i'});`))} variant="ghost" size="icon">
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

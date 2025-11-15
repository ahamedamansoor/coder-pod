
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronsRight, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaBitwiseOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const operators = [
    { op: "&", name: "Bitwise AND", example: "int result = 5 & 3; // 0101 & 0011", output: "1" },
    { op: "|", name: "Bitwise OR", example: "int result = 5 | 3; // 0101 | 0011", output: "7" },
    { op: "^", name: "Bitwise XOR", example: "int result = 5 ^ 3; // 0101 ^ 0011", output: "6" },
    { op: "~", name: "Bitwise NOT (Complement)", example: "int result = ~5; // ~0101", output: "-6" },
    { op: "<<", name: "Left Shift", example: "int result = 5 << 1; // 0101 << 1", output: "10" },
    { op: ">>", name: "Right Shift", example: "int result = 5 >> 1; // 0101 >> 1", output: "2" },
    { op: ">>>", name: "Unsigned Right Shift", example: "int result = -5 >>> 1;", output: "2147483645" },
  ];

  return (
    <div id="java-bitwise-operators-page" data-test="java-bitwise-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <ChevronsRight className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Bitwise Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Perform operations on individual bits of integer types.</p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Understanding Bits</CardTitle>
            <CardDescription>
                Bitwise operators work on `int` and `long` data types at the binary level. For example, the number 5 is represented in binary as `0101`, and 3 is `0011`.
            </CardDescription>
        </CardHeader>
        <CardContent>
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
                    <Button onClick={() => onOpenEditor(wrapInMain(`${op.example}\nSystem.out.println(result);`))} variant="ghost" size="icon">
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

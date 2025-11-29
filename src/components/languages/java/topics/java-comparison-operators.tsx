
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Scale, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaComparisonOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "==", name: "Equal to", example: "10 == 5", output: "false" },
        { op: "!=", name: "Not equal to", example: "10 != 5", output: "true" },
        { op: ">", name: "Greater than", example: "10 > 5", output: "true" },
        { op: "<", name: "Less than", example: "10 < 5", output: "false" },
        { op: ">=", name: "Greater than or equal to", example: "10 >= 10", output: "true" },
        { op: "<=", name: "Less than or equal to", example: "10 <= 5", output: "false" },
      ];

  return (
    <div id="java-comparison-operators-page" data-test="java-comparison-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Scale className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Comparison Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to compare two values, returns a boolean (`true` or `false`).</p>
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
                      <Button onClick={() => onOpenEditor(wrapInMain(`System.out.println(${op.example});`))} variant="ghost" size="icon">
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

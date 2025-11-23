
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GitCompareArrows, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaLogicalOperators({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const operators = [
        { op: "&&", name: "Logical AND", description: "Returns `true` if both statements are true.", example: "int x = 5;\nSystem.out.println(x > 3 && x < 10);", output: "true" },
        { op: "||", name: "Logical OR", description: "Returns `true` if one of the statements is true.", example: "int x = 5;\nSystem.out.println(x > 3 || x < 4);", output: "true" },
        { op: "!", name: "Logical NOT", description: "Reverse the result, returns `false` if the result is true.", example: "int x = 5;\nSystem.out.println(!(x > 3 && x < 10));", output: "false" },
      ];

  return (
    <div id="java-logical-operators-page" data-test="java-logical-operators-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <GitCompareArrows className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Logical Operators</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Used to determine the logic between variables or values.</p>
      </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Operator</TableHead>
                  <TableHead>Name & Description</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Output</TableHead>
                  <TableHead className="text-right">Try it</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operators.map(op => (
                  <TableRow key={op.op}>
                    <TableCell className="font-mono font-bold text-primary text-lg">{op.op}</TableCell>
                    <TableCell>
                        <p className="font-semibold">{op.name}</p>
                        <p className="text-xs text-muted-foreground">{op.description}</p>
                    </TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.example}</code></pre>
                    </TableCell>
                    <TableCell>
                      <pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{op.output}</code></pre>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => onOpenEditor(wrapInMain(op.example))} variant="ghost" size="icon">
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

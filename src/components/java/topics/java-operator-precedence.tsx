
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sigma, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaOperatorPrecedence({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
  const precedenceTable = [
    { level: 1, operators: "() [] .", name: "Parentheses, Array Subscript, Member Selection" },
    { level: 2, operators: "++ -- ! ~", name: "Unary (pre-increment, pre-decrement), Logical NOT, Bitwise Complement" },
    { level: 3, operators: "* / %", name: "Multiplication, Division, Modulus" },
    { level: 4, operators: "+ -", name: "Addition, Subtraction" },
    { level: 5, operators: "<< >> >>>", name: "Bitwise Shift" },
    { level: 6, operators: "< > <= >=", name: "Relational" },
    { level: 7, operators: "== !=", name: "Equality" },
    { level: 8, operators: "&", name: "Bitwise AND" },
    { level: 9, operators: "^", name: "Bitwise XOR" },
    { level: 10, operators: "|", name: "Bitwise OR" },
    { level: 11, operators: "&&", name: "Logical AND" },
    { level: 12, operators: "||", name: "Logical OR" },
    { level: 13, operators: "?:", name: "Ternary" },
    { level: 14, operators: "= += -= *= /= %= &= ^= |= <<= >>= >>>=", name: "Assignment" },
  ];

  const example1 = "int result1 = 10 + 20 * 30;";
  const output1 = "610";
  const example2 = "int result2 = (10 + 20) * 30;";
  const output2 = "900";


  return (
    <div id="java-operator-precedence-page" data-test="java-operator-precedence-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sigma className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Operator Precedence</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The order in which operators are evaluated in Java.</p>
      </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Example</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground mb-2">Multiplication (`*`) has higher precedence than addition (`+`).</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example1}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(`${example1}\nSystem.out.println(result1);`))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    <p className="text-sm font-semibold mt-2">Output: {output1}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground mb-2">Parentheses `()` have the highest precedence.</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example2}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(`${example2}\nSystem.out.println(result2);`))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    <p className="text-sm font-semibold mt-2">Output: {output2}</p>
                </div>
            </CardContent>
        </Card>

      <Card>
        <CardHeader>
            <CardTitle>Precedence Table</CardTitle>
            <CardDescription>Operators with higher precedence are evaluated before operators with lower precedence. Operators on the same level are evaluated from left to right.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Precedence</TableHead>
                <TableHead>Operator</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {precedenceTable.map(row => (
                <TableRow key={row.level}>
                  <TableCell className="font-semibold">{row.level}</TableCell>
                  <TableCell><pre className="font-mono text-sm bg-muted p-2 rounded-md"><code>{row.operators}</code></pre></TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

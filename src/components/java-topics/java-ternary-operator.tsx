
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FunctionSquare, Play } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaTernaryOperator({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const example = "int time = 20;\nString result = (time < 18) ? \"Good day.\" : \"Good evening.\";\nSystem.out.println(result);";
    const output = "Good evening.";

  return (
    <div id="java-ternary-operator-page" data-test="java-ternary-operator-page" className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <FunctionSquare className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Ternary Operator</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">A shorthand for an if-else statement.</p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Syntax</CardTitle>
            <CardDescription>
                The ternary operator consists of a condition, a value to return if the condition is true, and a value to return if it's false.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <pre className="font-mono text-sm bg-muted p-4 rounded-md"><code>variable = (condition) ? valueIfTrue : valueIfFalse;</code></pre>
        </CardContent>
      </Card>

      <Card>
          <CardHeader>
              <CardTitle>Example</CardTitle>
          </CardHeader>
          <CardContent>
                <div>
                    <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{example}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(example))} variant="ghost" size="sm" className="mt-2">
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-2 mt-4">Resulting Output:</h4>
                    <div className="bg-foreground/5 rounded-md p-4">
                        <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">{output}</pre>
                    </div>
                </div>
          </CardContent>
      </Card>
    </div>
  );
}

'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pin, Play, BadgeHelp } from 'lucide-react';

function wrapInMain(code: string): string {
    if (code.trim().startsWith('public class')) {
        return code;
    }
    return `public class Main {\n  public static void main(String[] args) {\n    ${code.split('\n').map(line => '  ' + line).join('\n')}\n  }\n}`;
}

export function JavaConstants({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    const codeExample = {
      correct: 'final int WEEKS_IN_YEAR = 52; // This value cannot be changed\nSystem.out.println("Weeks in a year: " + WEEKS_IN_YEAR);',
      incorrect: 'final int WEEKS_IN_YEAR = 52;\nWEEKS_IN_YEAR = 53; // This will cause a compilation error!',
    };
  
    return (
      <div id="java-constants-page" data-test="java-constants-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Pin className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Constants</h1>
          </div>
          <p className="text-muted-foreground text-lg">Creating variables with unchangeable values.</p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle>What is a Constant?</CardTitle>
            <CardDescription>
              A constant is a variable whose value cannot be changed once it has been assigned. In Java, you create a constant by using the `final` keyword.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How to Declare a Constant:</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                final type VARIABLE_NAME = value;
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Naming Convention:</h3>
              <p className="text-sm text-muted-foreground">It is a common convention to write constant names in all uppercase letters with underscores separating words (e.g., `MAX_SIZE`). This makes them easy to identify in the code.</p>
            </div>
          </CardContent>
        </Card>
  
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle>Example in Action</CardTitle>
                <CardDescription>Here is how you declare and use a constant.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-2">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{codeExample.correct}</pre>
                </div>
                <Button onClick={() => onOpenEditor(wrapInMain(codeExample.correct))} variant="ghost" size="sm">
                    <Play className="mr-2 h-4 w-4" /> Try it
                </Button>
            </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                    <BadgeHelp className="w-6 h-6"/>
                    What Happens If You Try to Change It?
                </CardTitle>
                <CardDescription>If you try to assign a new value to a `final` variable after it has been initialized, the compiler will give you an error.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-card rounded-md p-4 mb-2">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{codeExample.incorrect}</pre>
                </div>
                 <Button onClick={() => onOpenEditor(wrapInMain(codeExample.incorrect))} variant="ghost" size="sm">
                    <Play className="mr-2 h-4 w-4" /> Try it & See the Error
                </Button>
            </CardContent>
        </Card>
      </div>
    );
}

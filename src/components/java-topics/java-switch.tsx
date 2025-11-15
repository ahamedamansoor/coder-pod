
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function JavaSwitch() {
    return (
        <div id="java-switch-page" className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Switch Statement</h1>
                <p className="text-lg text-muted-foreground">Select one of many code blocks to be executed.</p>
            </div>
            <Card>
                <CardHeader><CardTitle>Switch</CardTitle></CardHeader>
                <CardContent>
                    <p>The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.</p>
                    <pre><code>{`switch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n    // code block\n    break;\n  default:\n    // code block\n}`}</code></pre>
                </CardContent>
            </Card>
        </div>
    );
}

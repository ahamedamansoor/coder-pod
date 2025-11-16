'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Search, Sigma, VenetianMask, Lightbulb, Rows } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

interface JavaRegexProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaRegex({ onOpenEditor }: JavaRegexProps) {

    const basicExample = `String text = "The quick brown fox jumps over the lazy dog.";
Pattern pattern = Pattern.compile("fox", Pattern.CASE_INSENSITIVE);
Matcher matcher = pattern.matcher(text);
boolean matchFound = matcher.find();

if(matchFound) {
  System.out.println("Match found!");
} else {
  System.out.println("Match not found.");
}`;

    const metacharacters = [
        { char: ".", meaning: "Any single character." },
        { char: "\\d", meaning: "Any digit (0-9)." },
        { char: "\\s", meaning: "Any whitespace character (space, tab, newline)." },
        { char: "\\w", meaning: "Any word character (a-z, A-Z, 0-9, _)." },
        { char: "^", meaning: "Start of a line." },
        { char: "$", meaning: "End of a line." },
        { char: "|", meaning: "OR operator (e.g., `cat|dog`)." },
    ];
    
    const quantifiers = [
        { char: "*", meaning: "Zero or more occurrences." },
        { char: "+", meaning: "One or more occurrences." },
        { char: "?", meaning: "Zero or one occurrence." },
        { char: "{n}", meaning: "Exactly n occurrences." },
        { char: "{n,}", meaning: "n or more occurrences." },
        { char: "{n,m}", meaning: "Between n and m occurrences." },
    ];

    const brackets = [
        { char: "[abc]", meaning: "Find one character from the options between the brackets (a, b, or c)." },
        { char: "[^abc]", meaning: "Find one character NOT between the brackets." },
        { char: "[0-9]", meaning: "Find one character from the range 0 to 9." },
    ];

    return (
        <div id="java-regex-page" data-test="java-regex-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Search className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Regular Expressions (Regex)</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating powerful search patterns for text.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Regular Expression?</CardTitle>
                    <CardDescription>
                       A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are looking for. It's like a super-powered "find" tool for strings.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Rows className="w-6 h-6 text-primary"/>Core Classes: `Pattern` and `Matcher`</CardTitle>
                    <CardDescription>Java provides two main classes in the `java.util.regex` package for handling regular expressions.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2">`Pattern` Class</h3>
                        <p className="text-sm text-muted-foreground">Represents the compiled version of your regular expression. You create it using `Pattern.compile(regex)`. Compiling the pattern first improves performance if you use the same pattern multiple times.</p>
                    </div>
                     <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary mb-2">`Matcher` Class</h3>
                        <p className="text-sm text-muted-foreground">This is the engine that interprets the pattern and performs match operations on an input string. You get a `Matcher` object by calling `pattern.matcher(text)`.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>A Simple Example</CardTitle>
                    <CardDescription>Let's see how `Pattern` and `Matcher` work together to find the word "fox" in a sentence.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{basicExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(basicExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                         <CardTitle className="flex items-center gap-2"><VenetianMask className="text-primary"/>Metacharacters</CardTitle>
                        <CardDescription>Special characters that have a specific meaning in the regex engine.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader><TableRow><TableHead>Char</TableHead><TableHead>Meaning</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {metacharacters.map(m => (<TableRow key={m.char}><TableCell className="font-mono text-primary">{m.char}</TableCell><TableCell>{m.meaning}</TableCell></TableRow>))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Sigma className="text-primary"/>Quantifiers</CardTitle>
                        <CardDescription>Specify how many times a character or group should occur.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader><TableRow><TableHead>Char</TableHead><TableHead>Meaning</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {quantifiers.map(q => (<TableRow key={q.char}><TableCell className="font-mono text-primary">{q.char}</TableCell><TableCell>{q.meaning}</TableCell></TableRow>))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Character Classes (Brackets)
                    </CardTitle>
                    <CardDescription>Brackets are used to find a range of characters.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Expression</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {brackets.map(b => (<TableRow key={b.char}><TableCell className="font-mono text-primary">{b.char}</TableCell><TableCell>{b.meaning}</TableCell></TableRow>))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}

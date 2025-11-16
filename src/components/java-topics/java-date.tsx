
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock, CalendarClock, PenLine, Lightbulb } from 'lucide-react';
import React from 'react';

interface JavaDateProps {
  onOpenEditor: (code: string) => void;
}

function wrapInMain(code: string): string {
    return `import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
  public static void main(String[] args) {
    ${code.split('\n').map(line => '    ' + line).join('\n')}
  }
}`;
}

export function JavaDate({ onOpenEditor }: JavaDateProps) {

    const localDateExample = `// Gets the current date
LocalDate today = LocalDate.now(); 
System.out.println("Today's date: " + today);`;

    const localTimeExample = `// Gets the current time
LocalTime now = LocalTime.now();
System.out.println("Current time: " + now);`;

    const localDateTimeExample = `// Gets the current date and time
LocalDateTime currentDateTime = LocalDateTime.now();
System.out.println("Current date and time: " + currentDateTime);`;

    const formattingExample = `LocalDateTime myDateObj = LocalDateTime.now();
System.out.println("Before formatting: " + myDateObj);

// Create a formatter with a specific pattern
DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

String formattedDate = myDateObj.format(myFormatObj);
System.out.println("After formatting: " + formattedDate);`;

    return (
        <div id="java-date-page" data-test="java-date-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <CalendarClock className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Date and Time</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Working with the modern \`java.time\` API.</p>
            </div>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        A Modern Approach
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Java 8 introduced a completely new Date and Time API, located in the \`java.time\` package, to fix the problems of the old \`java.util.Date\` and \`java.util.Calendar\` classes.</p>
                    <p className="text-muted-foreground mt-2">The new API is immutable, thread-safe, and much more intuitive. **You should always prefer the \`java.time\` package for new projects.**</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Core Classes in \`java.time\`</CardTitle>
                    <CardDescription>
                       The new API separates concepts of date and time into distinct classes.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary"/>\`LocalDate\`</h3>
                        <p className="text-sm text-muted-foreground mb-4">Represents a date (year, month, day) without time.</p>
                        <div className="bg-background border rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{localDateExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(localDateExample))} variant="ghost" size="sm">
                           <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                     <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-primary"/>\`LocalTime\`</h3>
                        <p className="text-sm text-muted-foreground mb-4">Represents a time (hour, minute, second) without a date.</p>
                        <div className="bg-background border rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{localTimeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(localTimeExample))} variant="ghost" size="sm">
                           <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                     <div className="bg-muted p-6 rounded-lg">
                        <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2"><CalendarClock className="w-5 h-5 text-primary"/>\`LocalDateTime\`</h3>
                        <p className="text-sm text-muted-foreground mb-4">Represents both a date and a time, without a timezone.</p>
                        <div className="bg-background border rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{localDateTimeExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(localDateTimeExample))} variant="ghost" size="sm">
                           <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <PenLine className="w-6 h-6 text-primary"/>
                        <CardTitle>Formatting Dates and Times</CardTitle>
                    </div>
                    <CardDescription>
                        The \`DateTimeFormatter\` class is used to convert date/time objects into strings (formatting) or strings into date/time objects (parsing).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">You can create a formatter by providing a specific pattern.</p>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{formattingExample}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(wrapInMain(formattingExample))}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}

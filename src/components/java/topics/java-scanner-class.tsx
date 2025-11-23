
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Keyboard, Import, PlusSquare, FileQuestion, PlayCircle } from 'lucide-react';

export function JavaScannerClass() {
    const steps = [
      {
        icon: Import,
        title: "1. Import the Scanner",
        description: "First, you need to tell Java you want to use the `Scanner` class. It lives in the `java.util` package.",
        code: "import java.util.Scanner;"
      },
      {
        icon: PlusSquare,
        title: "2. Create a Scanner Object",
        description: "Create a new `Scanner` object that reads from the standard input stream, which is your keyboard.",
        code: "Scanner myObj = new Scanner(System.in);"
      },
      {
        icon: FileQuestion,
        title: "3. Prompt the User",
        description: "Print a message to the console to tell the user what you want them to enter.",
        code: 'System.out.println("Enter your name");'
      },
      {
        icon: Keyboard,
        title: "4. Read the Input",
        description: "Use a method like `nextLine()` to read the user's input as a string.",
        code: "String userName = myObj.nextLine();"
      },
      {
        icon: PlayCircle,
        title: "5. Use the Input",
        description: "Now you can use the variable that holds the user's input in your program!",
        code: 'System.out.println("Username is: " + userName);'
      }
    ];

    const fullExample = `import java.util.Scanner;  // 1. Import

public class Main {
  public static void main(String[] args) {
    // 2. Create a Scanner object
    Scanner myObj = new Scanner(System.in);
    
    // 3. Prompt the user
    System.out.println("Enter username");

    // 4. Read user input
    String userName = myObj.nextLine(); 
    
    // 5. Use the input
    System.out.println("Username is: " + userName); 
  }
}`;
  
    return (
      <div id="java-scanner-class-page" data-test="java-scanner-class-page" className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Keyboard className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">The Scanner Class</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Making your Java programs interactive by reading user input.</p>
        </div>
  
        <div className="relative">
          <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-border -z-10"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="bg-muted rounded-md p-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{step.code}</pre>
                    </div>
                </div>
                 <div className={`w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shrink-0 md:order-1 ${index % 2 === 0 ? '' : 'md:-ml-6'} ${index % 2 !== 0 ? '' : 'md:mr-[-25px]'} z-10`}>
                    {index + 1}
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Full Example</CardTitle>
                <CardDescription>
                    Here's how all the steps look together in a single program. Note that you can't run this example here because it requires real-time user input.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{fullExample}</pre>
                </div>
                <p className="text-xs text-muted-foreground mt-2">To try this, you'll need to run it in a local development environment like VS Code or IntelliJ.</p>
            </CardContent>
        </Card>
      </div>
    );
}

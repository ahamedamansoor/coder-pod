
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Folder, Library, CheckCircle2, Import, Lightbulb, Box } from 'lucide-react';

export function JavaPackages() {
    
    const whyUsePackages = [
        {
            title: "Organization",
            description: "Just like folders for files, packages group related classes together, making your project easier to navigate and maintain.",
            icon: Folder
        },
        {
            title: "Prevent Naming Conflicts",
            description: "Two classes can have the same name as long as they are in different packages. For example, `com.mycompany.Date` and `java.util.Date` can coexist.",
            icon: Box
        },
        {
            title: "Access Control",
            description: "Packages provide a level of access control. `default` and `protected` members are accessible only by classes within the same package.",
            icon: CheckCircle2
        }
    ];

    return (
        <div id="java-packages-page" data-test="java-packages-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Package className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Packages and API</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Organizing your code and using Java's built-in library.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What is a Package?</CardTitle>
                    <CardDescription>
                       In Java, a package is simply a way of grouping related classes, interfaces, and other packages together. Think of it as a **folder or directory** for your Java files.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                        {whyUsePackages.map(reason => (
                             <div key={reason.title} className="bg-muted p-6 rounded-lg">
                                <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                                    <reason.icon className="w-5 h-5 text-primary"/>
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <Library className="w-6 h-6 text-primary"/>
                       <CardTitle>Built-in Packages (The Java API)</CardTitle>
                    </div>
                    <CardDescription>Java comes with a huge collection of pre-written code, organized into packages. This collection is known as the **Java API (Application Programming Interface)**.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">You don't have to write everything from scratch! You can use these built-in classes to perform common tasks.</p>
                    <div className="space-y-2">
                        <p><strong className="text-primary">Examples of popular packages:</strong></p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>`java.lang` - Fundamental classes like `String` and `System`. (This package is automatically imported for you in every Java program).</li>
                            <li>`java.util` - Contains utility classes like `Scanner`, `ArrayList`, and `Date`.</li>
                            <li>`java.io` - Classes for input and output operations, like reading and writing files.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Import className="w-6 h-6 text-primary"/>
                        Using Packages with `import`
                    </CardTitle>
                    <CardDescription>To use a class from a built-in package (or any other package), you need to import it using the `import` keyword at the top of your file.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Import a Single Class</h3>
                        <p className="text-sm text-muted-foreground mb-4">This is the most common and recommended approach. It clearly states which class you are using.</p>
                         <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">import java.util.Scanner;</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Import an Entire Package</h3>
                        <p className="text-sm text-muted-foreground mb-4">You can import all the classes from a package using an asterisk `*`. This can be convenient but might make it less clear where a class is coming from.</p>
                         <div className="bg-muted rounded-md p-4">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">import java.util.*;</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Creating Your Own Packages
                    </CardTitle>
                    <CardDescription>
                        To place a class in a package, you simply state the package name at the very top of your source file using the `package` keyword.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Package names are written in all lowercase to avoid conflict with class names. By convention, companies use their reversed internet domain name (e.g., `com.google.myproject`). The folder structure on your file system must match the package name.</p>
                    <div className="bg-background border rounded-md p-4">
                         <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`// Save this file as MyClass.java inside a folder structure: my_project/com/mycompany/
package com.mycompany;

public class MyClass {
  // ...
}`}</pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

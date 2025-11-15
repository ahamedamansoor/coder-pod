
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, File, FilePlus, FileText, FilePen, FileX } from 'lucide-react';
import React from 'react';

function onOpenEditor(code: string) {
    // Dummy function for now, will be replaced by the real one
    console.log("Opening editor with code:", code);
}

function wrapInMain(code: string): string {
    return `import java.io.File;
import java.io.IOException;
import java.io.FileWriter;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Note: File operations might not work as expected in a browser-based editor.
    // They rely on the local file system.
    try {
        ${code.split('\n').map(line => '    ' + line).join('\n')}
    } catch (IOException e) {
        System.out.println("An error occurred.");
        e.printStackTrace();
    }
  }
}`;
}

export function JavaFileHandling() {

    const createFileExample = `File myObj = new File("filename.txt");
if (myObj.createNewFile()) {
    System.out.println("File created: " + myObj.getName());
} else {
    System.out.println("File already exists.");
}`;

    const writeFileExample = `FileWriter myWriter = new FileWriter("filename.txt");
myWriter.write("Files in Java might be tricky, but it is fun enough!");
myWriter.close(); // Don't forget to close the writer!
System.out.println("Successfully wrote to the file.");`;

    const readFileExample = `File myObj = new File("filename.txt");
Scanner myReader = new Scanner(myObj);
while (myReader.hasNextLine()) {
    String data = myReader.nextLine();
    System.out.println(data);
}
myReader.close();`;

    const deleteFileExample = `File myObj = new File("filename.txt"); 
if (myObj.delete()) { 
    System.out.println("Deleted the file: " + myObj.getName());
} else {
    System.out.println("Failed to delete the file.");
}`;

    return (
        <div id="java-file-handling-page" data-test="java-file-handling-page" className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <File className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">File Handling</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating, reading, writing, and deleting files in Java.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The `File` Class</CardTitle>
                    <CardDescription>
                       The `File` class from the `java.io` package is the cornerstone of file handling in Java. It allows us to work with files and directories on the local file system. To use it, you must import it: `import java.io.File;`
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Note: File I/O (Input/Output) operations can cause errors (e.g., file not found, permission denied). These are "checked exceptions," which means Java requires you to handle them, usually with a `try...catch` block.</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><FilePlus className="text-primary"/>Create a File</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-sm text-muted-foreground mb-4">Use the `createNewFile()` method. It returns `true` if the file was created, and `false` if the file already exists.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{createFileExample}</pre>
                        </div>
                         <Button onClick={() => onOpenEditor(wrapInMain(createFileExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><FilePen className="text-primary"/>Write to a File</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Use the `FileWriter` class with its `write()` method. It's crucial to `close()` the writer to save the changes.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{writeFileExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(writeFileExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><FileText className="text-primary"/>Read a File</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">A simple way to read a file is to use the `Scanner` class, just like you would for user input, but passing a `File` object to its constructor.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{readFileExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(readFileExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><FileX className="text-primary"/>Delete a File</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Use the `delete()` method of the `File` object. It returns `true` if the file was successfully deleted.</p>
                        <div className="bg-muted rounded-md p-4 mb-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{deleteFileExample}</pre>
                        </div>
                        <Button onClick={() => onOpenEditor(wrapInMain(deleteFileExample))} variant="ghost" size="sm">
                            <Play className="mr-2 h-4 w-4" /> Try it
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

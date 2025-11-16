
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { File, Bone, Paintbrush, Zap, Plus, Minus, FileCode } from 'lucide-react';

export default function HtmlIntroduction() {
    const roles = [
      {
        icon: Bone,
        title: "HTML (The Skeleton)",
        description: "HyperText Markup Language is the standard for creating web pages. It defines the structure and content, like the skeleton of a body.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
      },
      {
        icon: Paintbrush,
        title: "CSS (The Appearance)",
        description: "Cascading Style Sheets is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
      },
      {
        icon: Zap,
        title: "JavaScript (The Brains)",
        description: "JavaScript is the programming language that adds interactivity to a web page, from simple animations to complex web applications.",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10"
      },
    ];

    const simpleHtml = `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`;

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <File className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">HTML Introduction</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">The fundamental building block of the World Wide Web.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is HTML?</CardTitle>
                <CardDescription>HTML is not a programming language; it's a **markup language**. Its job is to describe the structure of a web page using a system of "tags".</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Roles of Web Technologies</CardTitle>
                <CardDescription>Think of building a website like building a house. Each technology plays a crucial role.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                 {roles.map((role) => (
                    <div key={role.title} className={`p-6 rounded-lg border-2 ${role.bgColor.replace('bg-', 'border-')} flex flex-col items-center text-center`}>
                        <role.icon className={`w-10 h-10 mb-4 ${role.color}`} />
                        <h3 className={`text-xl font-bold mb-2 ${role.color}`}>{role.title}</h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                 ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Anatomy of an HTML Element</CardTitle>
                <CardDescription>Most HTML elements consist of an opening tag, content, and a closing tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 font-mono text-lg text-center">
                    <div className="flex items-center gap-2">
                        <Plus className="w-5 h-5 text-green-500" />
                        <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-blue-500">&lt;p&gt;</span>
                        </div>
                         <p className="text-sm text-muted-foreground hidden md:block">Opening Tag</p>
                    </div>
                     <p className="text-sm text-muted-foreground md:hidden">Opening Tag</p>

                    <div className="flex items-center gap-2">
                         <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-foreground">Hello, World!</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">Content</p>
                    </div>
                     <p className="text-sm text-muted-foreground md:hidden">Content</p>
                    
                    <div className="flex items-center gap-2">
                         <div className="p-3 bg-background border rounded-md shadow-sm">
                            <span className="text-blue-500">&lt;/p&gt;</span>
                        </div>
                        <p className="text-sm text-muted-foreground hidden md:block">Closing Tag</p>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">Closing Tag</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3"><FileCode className="w-6 h-6 text-primary"/>A Basic HTML Document</CardTitle>
                <CardDescription>This is the basic structure that every HTML page follows.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{simpleHtml}</pre>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>The `&lt;!DOCTYPE html&gt;` declaration defines that this document is an HTML5 document.</li>
                    <li>The `&lt;html&gt;` element is the root element of an HTML page.</li>
                    <li>The `&lt;head&gt;` element contains meta information about the HTML page (like the title).</li>
                    <li>The `&lt;body&gt;` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, etc.</li>
                    <li>The `&lt;h1&gt;` element defines a large heading.</li>
                    <li>The `&lt;p&gt;` element defines a paragraph.</li>
                </ul>
            </CardContent>
        </Card>
      </div>
    );
}

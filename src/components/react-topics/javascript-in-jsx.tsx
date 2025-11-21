
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Brackets, 
  Lightbulb,
  CurlyBraces,
  Sparkles,
  FunctionSquare,
  Repeat,
  Binary,
  Image,
  Paintbrush,
  AlertTriangle
} from 'lucide-react';
import React from 'react';

export default function JavaScriptInJSX({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {

    const displayDataCode = `function UserProfile() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOS.jpg',
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}`;

    const eventHandlerCode = `function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}`;

    const conditionalRenderingCode = `function AdminPanel({ isAdmin }) {
  let content;
  if (isAdmin) {
    content = <p>Welcome, Admin!</p>;
  } else {
    content = <p>Welcome, User!</p>;
  }

  return (
    <div>
      {content}
      
      {/* Or using a ternary operator */}
      {isAdmin ? (
        <p>You have admin privileges.</p>
      ) : (
        <p>You have user privileges.</p>
      )}

      {/* Or using logical && for "render if true" */}
      {isAdmin && <button>Admin Actions</button>}
    </div>
  );
}`;

    const listRenderingCode = `const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Brackets className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Using JavaScript in JSX</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Bringing your components to life with dynamic data, logic, and interactivity.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><CurlyBraces className="w-6 h-6 text-primary"/>The Magic of Curly Braces</CardTitle>
                    <CardDescription>
                        Curly braces `{}` are your portal to JavaScript land while inside JSX. They let you "escape" back into JavaScript so you can embed variables, expressions, or function calls directly within your markup.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-6 rounded-lg text-center border">
                        <p className="font-mono text-lg">`<p>Hello, {`{user.name}`}</p>`</p>
                        <p className="text-sm text-muted-foreground mt-2">The expression inside the curly braces will be evaluated, and the result will be rendered in the DOM.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Displaying Dynamic Data</CardTitle>
                    <CardDescription>You can embed any JavaScript expression in JSX. This includes accessing object properties, calling functions, or performing calculations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{displayDataCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(displayDataCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                            <Sparkles className="w-5 h-5 text-green-600 mt-1"/>
                            <div>
                                <h4 className="font-semibold text-green-700 dark:text-green-300">Passing Attributes</h4>
                                <p className="text-sm text-muted-foreground">You can use curly braces for attributes too! Use strings for static values (`className="avatar"`) and curly braces for dynamic values (`src={user.imageUrl}`).</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                            <Paintbrush className="w-5 h-5 text-purple-600 mt-1"/>
                            <div>
                                <h4 className="font-semibold text-purple-700 dark:text-purple-300">Inline CSS Styling</h4>
                                <p className="text-sm text-muted-foreground">The `style` attribute takes a JavaScript object with camelCased CSS properties, e.g., `style={{backgroundColor: 'blue'}}`.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FunctionSquare className="w-6 h-6 text-primary"/>Event Handlers</CardTitle>
                    <CardDescription>To respond to user interactions like clicks, you pass a function to event handler props like `onClick`.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{eventHandlerCode}</pre>
                    </div>
                     <p className="text-sm text-muted-foreground mb-4">Note that you are passing the function itself (`handleClick`), not the result of calling it (`handleClick()`).</p>
                    <Button onClick={() => onOpenEditor(eventHandlerCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Binary className="w-6 h-6 text-primary"/>Conditional Rendering</CardTitle>
                    <CardDescription>You can't use `if` statements directly inside JSX, but you can use them outside or use other JavaScript expressions like ternary operators.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{conditionalRenderingCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(conditionalRenderingCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Repeat className="w-6 h-6 text-primary"/>Rendering Lists</CardTitle>
                    <CardDescription>You can render a list of components from an array using JavaScript's `map()` function. Remember to give each item a unique `key`.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{listRenderingCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(listRenderingCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><AlertTriangle className="w-6 h-6"/>Rules of Curly Braces</CardTitle>
                </CardHeader>
                 <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>You can only embed **expressions** inside curly braces, not statements. `if`, `for`, `let x = ...` are statements and are not allowed.</li>
                        <li>You cannot put curly braces inside the quotes of a string attribute: `<p className="{myClass}">` is wrong. `<p className={myClass}>` is correct.</li>
                    </ul>
                 </CardContent>
            </Card>
        </div>
    );
}


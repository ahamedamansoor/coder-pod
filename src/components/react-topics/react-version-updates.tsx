'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Rss, GitBranch, Lightbulb, Zap, Rocket, Activity, Code, Settings, Check, X, Share2, Layers, VenetianMask, Cpu, FileText, Anchor } from 'lucide-react';
import React from 'react';

const updates = [
  {
    version: "React 19",
    date: "Dec 2024",
    features: [
      { title: "Actions", description: "Async functions in transitions for streamlined data submission and form handling.", icon: Zap },
      { title: "React Server Components", description: "Stable release for server-side rendering with components to reduce client-side JavaScript.", icon: Rocket },
      { title: "ref as Prop", description: "Function components now receive the `ref` prop directly, removing the need for `forwardRef`.", icon: GitBranch },
      { title: "use() API", description: "A new hook to read promises and context in render, enabling conditional context access.", icon: Lightbulb },
      { title: "DocumentHead Component", description: "A built-in component to manage document head tags like title and meta for better SEO.", icon: FileText },
      { title: "Web Components Integration", description: "Improved support for using Web Components within React applications.", icon: Code },
    ],
  },
  {
    version: "React 18",
    date: "Mar 2022",
    features: [
      { title: "Concurrent Features", description: "Introduced interruptible rendering, laying the foundation for all new features.", icon: Zap },
      { title: "Automatic Batching", description: "Automatically groups multiple state updates into a single re-render for better performance.", icon: Rocket },
      { title: "Transitions (useTransition)", description: "Mark state updates as non-urgent to prevent blocking user input.", icon: Lightbulb },
      { title: "New Hooks", description: "Added `useId`, `useTransition`, `useDeferredValue`, and `useSyncExternalStore`.", icon: Lightbulb },
      { title: "New Root API (createRoot)", description: "Modern API for rendering and hydrating apps, replacing `ReactDOM.render()`.", icon: Code },
    ],
  },
  {
    version: "React 17",
    date: "Oct 2020",
    features: [
      { title: "No New Features", description: "A unique \"stepping stone\" release focused on making future upgrades easier.", icon: Anchor },
      { title: "New JSX Transform", description: "Removed the need to `import React from 'react'` in every file that uses JSX.", icon: Code },
      { title: "Gradual Upgrades", description: "Enabled different parts of an application to use different versions of React.", icon: Layers },
      { title: "Event Delegation Changes", description: "Changed how event delegation works under the hood for better compatibility with other libraries.", icon: Settings },
    ],
  },
  {
    version: "React 16.8",
    date: "Feb 2019",
    features: [
      { title: "Hooks Introduced", description: "The revolutionary feature that let function components use state and other React features.", icon: Zap },
      { title: "useState & useEffect", description: "Introduced the most fundamental hooks for state management and side effects.", icon: Lightbulb },
    ],
  },
  {
    version: "React 16.3",
    date: "Mar 2018",
    features: [
      { title: "New Context API", description: "A stable and more ergonomic API (`React.createContext`) for passing data through the component tree.", icon: Share2 },
      { title: "forwardRef API", description: "A way to pass refs through components to child DOM elements.", icon: GitBranch },
    ],
  },
  {
    version: "React 16",
    date: "Sep 2017",
    features: [
      { title: "Fiber Reconciler", description: "A complete rewrite of React's core algorithm for faster, incremental rendering.", icon: Cpu },
      { title: "Error Boundaries", description: "A new way to catch JavaScript errors in components and display a fallback UI.", icon: VenetianMask },
      { title: "Portals", description: "The ability to render components into a different DOM node, useful for modals and tooltips.", icon: Layers },
      { title: "Fragments", description: "Render multiple elements without adding an extra wrapper node to the DOM.", icon: Layers },
    ],
  },
  {
    version: "React 15",
    date: "Apr 2016",
    features: [
      { title: "Improved SVG Support", description: "Full support for all SVG attributes.", icon: Code },
      { title: "Cleaner DOM", description: "Removed unnecessary `<span>` wrappers that React used to insert around text.", icon: Settings },
    ],
  },
   {
    version: "React 0.14",
    date: "Oct 2014",
    features: [
      { title: "React & ReactDOM Split", description: "The core React library was split from the DOM renderer, paving the way for React Native.", icon: GitBranch },
    ],
  },
];

const comparisonData = [
    { feature: 'React/DOM Split', v0_14: true, v15: true, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Hooks', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Fiber', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Error Boundaries', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Fragments', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'New Context API', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Suspense', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Concurrent Mode', v0_14: false, v15: false, v16: true, v17: true, v18: true, v19: true },
    { feature: 'Automatic Batching', v0_14: false, v15: false, v16: false, v17: false, v18: true, v19: true },
    { feature: 'Actions', v0_14: false, v15: false, v16: false, v17: false, v18: false, v19: true },
    { feature: 'Server Components', v0_14: false, v15: false, v16: false, v17: false, v18: false, v19: true },
    { feature: 'ref as Prop', v0_14: false, v15: false, v16: false, v17: false, v18: false, v19: true },
];

export default function ReactVersionUpdates() {
    return (
        <div className="space-y-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Rss className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">React Version History</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    A look back at the major features and architectural shifts that have shaped modern React.
                </p>
            </div>

            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-6">
                {updates.map((update, index) => (
                    <div key={update.version} className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-12 mb-12">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                            <GitBranch className="h-6 w-6 text-primary" />
                        </div>
                        <div className="pt-2">
                            <Badge variant="outline" className="mb-2">{update.date}</Badge>
                            <h2 className="text-3xl font-bold">{update.version}</h2>
                             <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {update.features.map(feature => (
                                    <div key={feature.title} className="bg-muted p-4 rounded-lg border">
                                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                                            <feature.icon className="w-5 h-5 text-primary"/>
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Major Feature Comparison</CardTitle>
                    <CardDescription>A quick overview of when key features were introduced or stabilized.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>v0.14</TableHead>
                                <TableHead>v15</TableHead>
                                <TableHead>v16</TableHead>
                                <TableHead>v17</TableHead>
                                <TableHead>v18</TableHead>
                                <TableHead>v19</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((row) => (
                                <TableRow key={row.feature}>
                                    <TableCell className="font-medium">{row.feature}</TableCell>
                                    <TableCell>{row.v0_14 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                    <TableCell>{row.v15 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                    <TableCell>{row.v16 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                    <TableCell>{row.v17 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                    <TableCell>{row.v18 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                    <TableCell>{row.v19 ? <Check className="text-green-500"/> : <X className="text-muted-foreground"/>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

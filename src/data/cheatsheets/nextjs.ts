import { Layers } from 'lucide-react';

export const nextjsCheatsheet = {
    id: 'nextjs',
    name: 'Next.js',
    description: 'App Router, Components, and Data Fetching',
    icon: Layers,
    colorTheme: 'slate' as const,
    sections: [
        {
            title: 'Routing (App Router)',
            commands: [
                {
                    command: 'Page',
                    description: 'UI for a route segment',
                    usage: 'page.tsx',
                    example: '// app/blog/page.tsx\nexport default function Page() {\n  return <h1>Blog</h1>;\n}',
                },
                {
                    command: 'Layout',
                    description: 'Shared UI for subtree',
                    usage: 'layout.tsx',
                    example: 'export default function Layout({ children }) {\n  return <div>{children}</div>;\n}',
                },
                {
                    command: 'Dynamic Route',
                    description: 'Variable path segment',
                    usage: '[slug]/page.tsx',
                    example: '// app/blog/[slug]/page.tsx\nparams.slug // Access the parameter',
                },
            ],
        },
        {
            title: 'Components',
            commands: [
                {
                    command: 'Server Component',
                    description: 'Default, rendered on server',
                    usage: 'async function',
                    example: 'async function Post() {\n  const data = await getData();\n  return <div>{data.title}</div>;\n}',
                },
                {
                    command: 'Client Component',
                    description: 'Interactive, rendered on client',
                    usage: '"use client"',
                    example: '"use client";\nimport { useState } from "react";\n...',
                },
            ],
        },
        {
            title: 'Data Fetching',
            commands: [
                {
                    command: 'fetch()',
                    description: 'Enhanced Web API fetch',
                    usage: 'fetch(url, options)',
                    example: 'await fetch("...", { cache: "force-cache" }); // Static\nawait fetch("...", { cache: "no-store" }); // Dynamic',
                },
                {
                    command: 'Revalidation',
                    description: 'Update cached data',
                    usage: 'next: { revalidate: N }',
                    example: 'fetch("...", { next: { revalidate: 60 } });\n// Revalidate every 60 seconds',
                },
            ],
        },
        {
            title: 'Key Components',
            commands: [
                {
                    command: 'Link',
                    description: 'Client-side navigation',
                    usage: '<Link href="...">',
                    example: 'import Link from "next/link";\n<Link href="/about">About</Link>',
                },
                {
                    command: 'Image',
                    description: 'Optimized images',
                    usage: '<Image src="..." />',
                    example: '<Image src="/pic.jpg" width={500} height={300} alt="Pic" />',
                },
            ],
        },
        {
            title: 'Metadata (SEO)',
            commands: [
                {
                    command: 'Static Metadata',
                    description: 'Define page metadata in layout.tsx or page.tsx',
                    usage: 'export const metadata: Metadata = { ... }',
                    example: 'export const metadata = {\n  title: "My Blog",\n  description: "Tech thoughts",\n};',
                },
                {
                    command: 'Dynamic Metadata',
                    description: 'Generate metadata based on params',
                    usage: 'generateMetadata({ params })',
                    example: 'export async function generateMetadata({ params }) {\n  return { title: `Post ${params.id}` };\n}',
                },
            ],
        },
        {
            title: 'Route Handlers (API)',
            commands: [
                {
                    command: 'API Route',
                    description: 'Server-side API endpoint',
                    usage: 'route.ts with GET/POST functions',
                    example: '// app/api/users/route.ts\nexport async function GET(request) {\n  return Response.json({ data });\n}',
                },
                {
                    command: 'Dynamic Route Handler',
                    description: 'API with parameters',
                    usage: '[id]/route.ts',
                    example: 'export async function GET(req, { params }) {\n  const id = params.id;\n}',
                },
            ],
        },
        {
            title: 'Middleware',
            commands: [
                {
                    command: 'Middleware',
                    description: 'Trapped requests before completion',
                    usage: 'middleware.ts in root',
                    example: 'export function middleware(request) {\n  return NextResponse.redirect(new URL("/home", request.url));\n}',
                },
                {
                    command: 'Matcher',
                    description: 'Filter middleware paths',
                    usage: 'config = { matcher: ... }',
                    example: 'export const config = {\n  matcher: "/about/:path*",\n};',
                },
            ],
        },
        {
            title: 'Optimization',
            commands: [
                {
                    command: 'Fonts',
                    description: 'Self-hosted Google fonts',
                    usage: 'next/font/google',
                    example: 'import { Inter } from "next/font/google";\nconst inter = Inter({ subsets: ["latin"] });',
                },
                {
                    command: 'Scripts',
                    description: 'Load 3rd party scripts',
                    usage: '<Script src="..." strategy="..." />',
                    example: '<Script src="https://example.com/script.js" strategy="lazyOnload" />',
                },
                {
                    command: 'Lazy Loading',
                    description: 'Delay loading components',
                    usage: 'next/dynamic',
                    example: 'const DynamicHeader = dynamic(() => import("../components/header"));',
                },
            ],
        },
        {
            title: 'Environment',
            commands: [
                {
                    command: 'Environment Variables',
                    description: 'Access env vars',
                    usage: 'process.env.VAR',
                    example: '// .env.local\nAPI_KEY=123\n// In code\nconst key = process.env.API_KEY;',
                },
                {
                    command: 'Public Env Vars',
                    description: 'Expose to browser (prefix NEXT_PUBLIC_)',
                    usage: 'NEXT_PUBLIC_VAR',
                    example: 'console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);',
                },
            ],
        },
    ],
};

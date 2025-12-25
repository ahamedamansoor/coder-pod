import { Layers } from 'lucide-react';

export const nextjsCheatsheet = {
  id: 'nextjs',
  name: 'Next.js',
  description: 'Comprehensive Next.js cheatsheet from beginner to expert (Next.js 13 & 14)',
  icon: Layers,
  colorTheme: 'slate' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Next.js',
      commands: [
        {
          command: 'Next.js Installation',
          description: 'Create new Next.js application',
          usage: 'npx create-next-app@latest my-app',
          example: `# Create with TypeScript and Tailwind
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Navigate and run
cd my-app
npm run dev

# Build for production
npm run build
npm start`,
        },
        {
          command: 'Project Structure',
          description: 'Understanding Next.js folder structure',
          usage: 'app/, pages/, public/, components/',
          example: `my-app/
├── app/              # App Router (Next.js 13+)
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── pages/            # Pages Router (Legacy)
│   ├── _app.tsx      # App component
│   ├── _document.tsx # Document
│   └── index.tsx     # Home page
├── components/       # Reusable components
├── public/           # Static assets
├── styles/           # CSS files
└── next.config.js    # Next.js config`,
        },
        {
          command: 'Basic Page Component',
          description: 'Create a simple page component',
          usage: 'page.tsx in app/ directory',
          example: `// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Get started by editing this page.</p>
    </div>
  );
}`,
        },
        {
          command: 'Next.js CLI Commands',
          description: 'Essential development commands',
          usage: 'npm run dev, build, start, lint',
          example: `# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check`,
        },
        {
          command: 'Pages Router Basics',
          description: 'Traditional pages directory routing',
          usage: 'pages/index.tsx, pages/about.tsx',
          example: `// pages/index.tsx
export default function Home() {
  return <h1>Home Page</h1>;
}

// pages/about.tsx
export default function About() {
  return <h1>About Page</h1>;
}

// pages/posts/[id].tsx
export default function Post({ params }) {
  return <h1>Post: {params.id}</h1>;
}`,
        },
        {
          command: 'App Router Basics',
          description: 'Modern app directory routing',
          usage: 'app/page.tsx, app/about/page.tsx',
          example: `// app/page.tsx
export default function Home() {
  return <h1>Home Page</h1>;
}

// app/about/page.tsx
export default function About() {
  return <h1>About Page</h1>;
}

// app/posts/[slug]/page.tsx
export default function Post({ params }) {
  return <h1>Post: {params.slug}</h1>;
}`,
        },
      ],
    },
    {
      title: 'Navigation and Routing',
      commands: [
        {
          command: 'Link Component',
          description: 'Client-side navigation between pages',
          usage: '<Link href="...">',
          example: `import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}`,
        },
        {
          command: 'Dynamic Routes',
          description: 'Create pages with dynamic parameters',
          usage: '[slug]/page.tsx or [id].tsx',
          example: `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return (
    <article>
      <h1>Blog Post: {params.slug}</h1>
      <p>Content for {params.slug}</p>
    </article>
  );
}

// Get static paths for SSG
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}`,
        },
        {
          command: 'Route Groups',
          description: 'Organize routes without affecting URL',
          usage: '(group)/page.tsx',
          example: `app/
├── (marketing)/
│   ├── page.tsx      # /
│   └── about/page.tsx # /about
├── (dashboard)/
│   ├── layout.tsx    # Dashboard layout
│   └── page.tsx      # /dashboard
└── (auth)/
    ├── login/page.tsx  # /login
    └── register/page.tsx # /register`,
        },
        {
          command: 'Parallel Routes',
          description: 'Render multiple pages within the same layout',
          usage: '@folder/page.tsx',
          example: `// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}) {
  return (
    <section>
      {children}
      {analytics}
      {team}
    </section>
  );
}

// app/@analytics/page.tsx
export default function Analytics() {
  return <div>Analytics Dashboard</div>;
}

// app/@team/page.tsx
export default function Team() {
  return <div>Team Members</div>;
}`,
        },
        {
          command: 'Programmatic Navigation',
          description: 'Navigate programmatically',
          usage: 'useRouter, redirect',
          example: `"use client";
import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();
  
  const handleLogin = () => {
    // After successful login
    router.push("/dashboard");
  };
  
  return <button onClick={handleLogin}>Login</button>;
}

// Server components
import { redirect } from "next/navigation";

export default function ServerAction() {
  async function handleSubmit() {
    "use server";
    redirect("/success");
  }
}`,
        },
      ],
    },
    {
      title: 'Components and Styling',
      commands: [
        {
          command: 'Server Components',
          description: 'Default components rendered on server',
          usage: 'async function components',
          example: `async function UserProfile({ userId }) {
  const user = await fetchUser(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Usage in page
export default function Page({ params }) {
  return <UserProfile userId={params.id} />;
}`,
        },
        {
          command: 'Client Components',
          description: 'Interactive components with state and events',
          usage: '"use client" directive',
          example: `"use client";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
        },
        {
          command: 'CSS Modules',
          description: 'Component-scoped CSS',
          usage: 'module.css files',
          example: `// styles.module.css
.container {
  padding: 20px;
  background: #f0f0f0;
}

.title {
  color: #333;
  font-size: 24px;
}

// component.tsx
import styles from "./styles.module.css";

export default function Component() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}`,
        },
        {
          command: 'Tailwind CSS',
          description: 'Utility-first CSS framework',
          usage: 'className with Tailwind classes',
          example: `export default function Card() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
      <p className="mt-2 text-gray-600">Card description goes here.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click me
      </button>
    </div>
  );
}`,
        },
        {
          command: 'Layout Components',
          description: 'Shared layouts for routes',
          usage: 'layout.tsx files',
          example: `// app/layout.tsx (Root layout)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>Global Navigation</nav>
        </header>
        <main>{children}</main>
        <footer>Global Footer</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside>Dashboard Sidebar</aside>
      <div className="content">{children}</div>
    </div>
  );
}`,
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Data Fetching and Caching',
      commands: [
        {
          command: 'Server-Side Rendering',
          description: 'Fetch data on server for each request',
          usage: 'fetch() in server components',
          example: `async function Page() {
  const data = await fetch("https://api.example.com/data");
  const posts = await data.json();
  
  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}`,
        },
        {
          command: 'Static Site Generation',
          description: 'Generate static pages at build time',
          usage: 'fetch with cache: "force-cache"',
          example: `async function BlogPage() {
  // Cached indefinitely (static)
  const posts = await fetch("https://api.example.com/posts", {
    cache: "force-cache",
  });
  const data = await posts.json();
  
  return <BlogList posts={data} />;
}

// Generate static params
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts");
  const data = await posts.json();
  
  return data.map((post) => ({
    slug: post.slug,
  }));
}`,
        },
        {
          command: 'Incremental Static Regeneration',
          description: 'Update static content periodically',
          usage: 'next: { revalidate: seconds }',
          example: `async function Page() {
  // Revalidate every 60 seconds
  const data = await fetch("https://api.example.com/data", {
    next: { revalidate: 60 },
  });
  const posts = await data.json();
  
  return <PostList posts={posts} />;
}

// Page-level revalidation
export const revalidate = 3600; // Revalidate every hour`,
        },
        {
          command: 'Client-Side Data Fetching',
          description: 'Fetch data in client components',
          usage: 'useEffect, SWR, or React Query',
          example: `"use client";
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`,
        },
        {
          command: 'Caching Strategies',
          description: 'Different caching approaches',
          usage: 'force-cache, no-store, revalidate',
          example: `// Force cache (static)
const staticData = await fetch("/api/static", {
  cache: "force-cache",
});

// No cache (dynamic)
const dynamicData = await fetch("/api/dynamic", {
  cache: "no-store",
});

// Time-based revalidation
const revalidatedData = await fetch("/api/data", {
  next: { revalidate: 3600 }, // 1 hour
});

// Tag-based revalidation
const taggedData = await fetch("/api/posts", {
  next: { tags: ["posts"] },
});

// Revalidate on demand
// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("posts");
  return Response.json({ revalidated: true });
}`,
        },
      ],
    },
    {
      title: 'API Routes and Server Actions',
      commands: [
        {
          command: 'Route Handlers',
          description: 'Build API endpoints with Next.js',
          usage: 'route.ts files in app/api/',
          example: `// app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const users = await fetchUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await createUser(body);
  return NextResponse.json(user, { status: 201 });
}`,
        },
        {
          command: 'Server Actions',
          description: 'Server-side functions for mutations',
          usage: '"use server" directive',
          example: `"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  
  await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
  });
  
  revalidatePath("/posts");
  redirect("/posts");
}`,
        },
        {
          command: 'Form Handling with Server Actions',
          description: 'Process forms on the server',
          usage: 'action prop on form elements',
          example: `"use server";

export async function updateProfile(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  
  // Validation
  if (!name || !email) {
    return { error: "Name and email are required" };
  }
  
  try {
    await updateUserData({ name, email });
    return { success: true };
  } catch (error) {
    return { error: "Failed to update profile" };
  }
}

// Client component
"use client";
import { useFormState } from "react-dom";
import { updateProfile } from "./actions";

export default function ProfileForm({ user }) {
  const [state, formAction] = useFormState(updateProfile, null);
  
  return (
    <form action={formAction}>
      <input name="name" defaultValue={user.name} />
      <input name="email" defaultValue={user.email} />
      <button type="submit">Update</button>
      {state?.error && <p className="error">{state.error}</p>}
      {state?.success && <p className="success">Updated!</p>}
    </form>
  );
}`,
        },
      ],
    },
    {
      title: 'Middleware and Authentication',
      commands: [
        {
          command: 'Middleware Configuration',
          description: 'Run code before a request is completed',
          usage: 'middleware.ts in root',
          example: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Add custom header
  const response = NextResponse.next();
  response.headers.set("x-custom-header", "custom-value");
  
  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};`,
        },
        {
          command: 'Authentication Middleware',
          description: 'Protect routes with authentication',
          usage: 'Check tokens in middleware',
          example: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};`,
        },
        {
          command: 'Route Protection',
          description: 'Protect specific routes and API endpoints',
          usage: 'Higher-order components or middleware',
          example: `// app/dashboard/layout.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  
  if (!session) {
    redirect("/login");
  }
  
  return (
    <div className="dashboard">
      <aside>Dashboard Navigation</aside>
      <main>{children}</main>
    </div>
  );
}

// Client-side protection
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function ProtectedComponent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  if (status === "loading") return <div>Loading...</div>;
  if (!session) {
    router.push("/login");
    return null;
  }
  
  return <div>Protected Content</div>;
}`,
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Image Optimization',
          description: 'Optimize images with next/image',
          usage: '<Image> component with optimization',
          example: `import Image from "next/image";

function ProductImage({ product }) {
  return (
    <Image
      src={product.imageUrl}
      alt={product.name}
      width={300}
      height={200}
      priority // Load above the fold
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}`,
        },
        {
          command: 'Code Splitting and Lazy Loading',
          description: 'Split code and load components on demand',
          usage: 'next/dynamic for components',
          example: `import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import with loading
const DynamicComponent = dynamic(
  () => import("../components/HeavyComponent"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false, // Client-side only
  }
);

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}`,
        },
      ],
    },
    {
      title: 'SEO and Metadata',
      commands: [
        {
          command: 'Static Metadata',
          description: 'Define static SEO metadata',
          usage: 'export const metadata',
          example: `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Awesome Blog",
  description: "Learn about web development and coding",
  keywords: ["blog", "web development", "coding"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "My Awesome Blog",
    description: "Learn about web development",
    type: "website",
    locale: "en_US",
    url: "https://myblog.com",
    siteName: "My Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Blog",
    description: "Learn about web development",
    creator: "@johndoe",
  },
};`,
        },
        {
          command: 'Dynamic Metadata',
          description: 'Generate metadata based on data',
          usage: 'generateMetadata function',
          example: `import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}`,
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Next.js 14+ Latest Features',
      commands: [
        {
          command: 'Turbopack',
          description: 'Next.js bundler for faster development',
          usage: 'npm run dev -- --turbo',
          example: `# Enable Turbopack
npm run dev -- --turbo

# In next.config.js
module.exports = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};`,
        },
        {
          command: 'Server Actions Enhancements',
          description: 'Improved server actions in Next.js 14',
          usage: 'Enhanced form handling and validation',
          example: `"use server";

import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";

const schema = z.object({
  title: z.string().min(1),
  content: z.string().min(10),
  published: z.boolean().optional(),
});

export async function createPost(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    published: formData.get("published") === "on",
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const post = await createPostInDB(validatedFields.data);
    revalidatePath("/posts");
    revalidateTag("posts");
    
    return { success: true, post };
  } catch (error) {
    return { error: "Failed to create post" };
  }
}`,
        },
        {
          command: 'Partial Prerendering',
          description: 'Hybrid static and dynamic rendering',
          usage: 'Experimental partial prerendering',
          example: `// next.config.js
module.exports = {
  experimental: {
    ppr: "incremental", // or "true"
  },
};

// Dynamic imports in static pages
import dynamic from "next/dynamic";

const DynamicComments = dynamic(() => import("./Comments"), {
  ssr: false,
});

export default function BlogPost({ post }) {
  return (
    <article>
      {/* Static content */}
      <h1>{post.title}</h1>
      <div>{post.content}</div>
      
      {/* Dynamic shell */}
      <DynamicComments postId={post.id} />
    </article>
  );
}`,
        },
      ],
    },
    {
      title: 'Next.js Ecosystem and Tools',
      commands: [
        {
          command: 'Styling Solutions',
          description: 'Popular styling options',
          usage: 'Tailwind CSS, CSS Modules, Styled Components',
          example: `# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Styled Components
npm install styled-components
npm install -D @types/styled-components

# Emotion
npm install @emotion/react @emotion/styled`,
        },
        {
          command: 'State Management',
          description: 'State management libraries',
          usage: 'Zustand, Redux Toolkit, Jotai',
          example: `# Zustand
npm install zustand

// store.ts
import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

# Redux Toolkit
npm install @reduxjs/toolkit react-redux`,
        },
        {
          command: 'Form Handling',
          description: 'Form libraries for Next.js',
          usage: 'React Hook Form, Zod, Formik',
          example: `# React Hook Form with Zod
npm install react-hook-form @hookform/resolvers zod

'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`,
        },
        {
          command: 'Database Integration',
          description: 'Database options for Next.js',
          usage: 'Prisma, Drizzle ORM, Supabase',
          example: `# Prisma
npm install prisma --save-dev
npm install @prisma/client

# Initialize
npx prisma init

# Generate client
npx prisma generate

# Drizzle ORM
npm install drizzle-orm
npm install -D drizzle-kit
npm install pg # or mysql2, better-sqlite3`,
        },
        {
          command: 'Authentication Solutions',
          description: 'Auth libraries for Next.js',
          usage: 'NextAuth.js, Lucia Auth, Clerk',
          example: `# NextAuth.js
npm install next-auth

# app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };`,
        },
        {
          command: 'Deployment Platforms',
          description: 'Deploy Next.js applications',
          usage: 'Vercel, Netlify, AWS, Docker',
          example: `# Vercel (Recommended)
npx vercel

# Netlify
npm install -D netlify-cli
netlify deploy --prod

# Dockerfile example
FROM node:18-alpine AS base
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]`,
        },
        {
          command: 'Development Tools',
          description: 'Essential dev tools for Next.js',
          usage: 'ESLint, Prettier, TypeScript, Husky',
          example: `# ESLint and Prettier
npm install -D eslint prettier eslint-config-next

# .eslintrc.json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

# .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}

# Husky and lint-staged
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"`,
        },
      ],
    },
  ],
};

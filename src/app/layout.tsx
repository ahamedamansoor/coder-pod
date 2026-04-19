
import type { Metadata } from "next";

import { cn } from "@/lib/utils"
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://coderpod.org'),
  title: "Coder Pod - Learn Programming Online | AI Coding Tutor & Interview Practice",
  description: "Master coding with AI-powered tutorials, interactive courses, and mock interviews. Learn JavaScript, React, Python, Java, HTML, CSS & more. Get hired faster with personalized coding practice and real-time feedback.",
  manifest: "/manifest.json",
  applicationName: "Coder Pod",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Coder Pod",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/logo.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Coder Pod - Learn Programming Online | AI Coding Tutor & Interview Practice",
    description: "Master coding with AI-powered tutorials, interactive courses, and mock interviews. Learn JavaScript, React, Python, Java, HTML, CSS & more. Get hired faster with personalized coding practice and real-time feedback.",
    url: "https://coderpod.org",
    siteName: "Coder Pod",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coder Pod - Learn Programming Online | AI Coding Tutor & Interview Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coder Pod - Learn Programming Online | AI Coding Tutor & Interview Practice",
    description: "Master coding with AI-powered tutorials, interactive courses, and mock interviews. Learn JavaScript, React, Python, Java, HTML, CSS & more. Get hired faster with personalized coding practice and real-time feedback.",
    images: ["/og-image.png"],
  },
  keywords: [
    "learn programming online",
    "coding bootcamp",
    "programming courses",
    "web development tutorial",
    "JavaScript tutorial",
    "React tutorial",
    "Python course",
    "Java tutorial",
    "HTML CSS course",
    "TypeScript learning",
    "coding interview practice",
    "technical interview preparation",
    "FAANG interview prep",
    "software engineer interview",
    "coding challenge practice",
    "algorithm practice",
    "data structures tutorial",
    "system design interview",
    "AI coding tutor",
    "programming assistant",
    "code review AI",
    "interactive coding platform",
    "online code editor",
    "live coding practice",
    "pair programming online",
    "collaborative coding",
    "programming cheatsheets",
    "coding reference",
    "developer tools",
    "coding resources",
    "learn to code free",
    "best coding platform",
    "programming for beginners",
    "advanced coding tutorials",
    "full stack development",
    "frontend development",
    "backend development",
    "mobile app development",
    "software development course",
    "coding career path",
    "software engineer training",
    "programming certification",
    "coding portfolio builder",
    "GitHub tutorial",
    "Git version control",
    "API development",
    "REST API tutorial",
    "database design",
    "SQL tutorial",
    "MongoDB tutorial",
    "deployment tutorial",
    "DevOps basics",
    "cloud computing",
    "AWS tutorial",
    "Docker tutorial",
    "Kubernetes basics",
    "web security",
    "cybersecurity basics",
    "performance optimization",
    "code optimization",
    "best coding practices",
    "clean code tutorial",
    "software architecture",
    "design patterns",
    "agile development",
    "scrum methodology",
    "project management for developers",
    "tech interview questions",
    "coding assessment",
    "programming test",
    "coding challenge solutions",
    "algorithm visualization",
    "coding games",
    "learn by coding",
    "hands-on programming",
    "practical coding experience",
    "real-world projects",
    "portfolio projects",
    "coding mentorship",
    "programming community",
    "developer network",
    "tech skills upgrade",
    "career change to tech",
    "programming job training",
    "software development jobs",
    "remote coding jobs",
    "freelance developer",
    "coding side hustle",
    "tech entrepreneurship",
    "startup development",
    "MVP development",
    "product development",
    "coding productivity",
    "developer workflow",
    "coding efficiency",
    "automation tools",
    "coding shortcuts",
    "debugging techniques",
    "error handling",
    "testing tutorial",
    "unit testing",
    "integration testing",
    "E2E testing",
    "quality assurance",
    "code documentation",
    "technical writing",
    "API documentation",
    "coding standards",
    "code review process",
    "team collaboration",
    "remote development",
    "distributed teams",
    "coding best practices 2024",
    "modern web development",
    "progressive web apps",
    "responsive design",
    "mobile-first development",
    "cross-platform development",
    "native app development",
    "game development",
    "AI development",
    "machine learning tutorial",
    "data science programming",
    "blockchain development",
    "Web3 programming",
    "smart contracts",
    "NFT development",
    "metaverse development",
    "AR VR development",
    "IoT programming",
    "embedded systems",
    "robotics programming",
    "quantum computing basics"
  ],
  authors: [{ name: "Coder Pod Team" }],
  creator: "Ahamed Mansoor A",
  publisher: "Ahamed Mansoor A",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Coder Pod" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Coder Pod",
              "url": "https://coderpod.org",
              "logo": "https://coderpod.org/icon-192.png",
              "description": "AI-powered programming platform offering interactive courses, AI interview practice, collaborative coding, learning paths, cheatsheets, personal notes, and AI tools for developers.",
              "sameAs": [
                "https://www.linkedin.com/company/coderpod",
                "https://twitter.com/coderpod"
              ],
              "offers": [
                {
                  "@type": "Course",
                  "name": "Interactive Programming Courses",
                  "description": "Learn HTML, CSS, JavaScript, React, Java, Spring Boot and more with hands-on examples",
                  "provider": {
                    "@type": "Organization",
                    "name": "Coder Pod"
                  }
                },
                {
                  "@type": "Service",
                  "name": "AI Interview Practice",
                  "description": "Prepare for technical interviews with our AI-powered interviewer. Get real-time feedback and improve your skills."
                },
                {
                  "@type": "Service",
                  "name": "Collaborative Coding",
                  "description": "Practice coding with a partner in real-time. Perfect for mock interviews."
                },
                {
                  "@type": "Service",
                  "name": "AI Tools for Developers",
                  "description": "Access powerful AI-powered development tools and utilities to enhance your coding productivity."
                }
              ],
              "educationalLevel": "Beginner to Advanced",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student"
              },
              "mainEntity": {
                "@type": "WebSite",
                "name": "Coder Pod",
                "url": "https://coderpod.org",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://coderpod.org/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            }),
          }}
        />
        
        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Coder Pod",
              "url": "https://coderpod.org",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              },
              "featureList": [
                "Interactive Programming Courses",
                "AI Interview Practice",
                "Collaborative Coding",
                "Learning Paths",
                "Programming Cheatsheets",
                "Personal Notes",
                "AI Tools for Developers",
                "Real-time Code Editor",
                "Progress Tracking",
                "Achievement System"
              ]
            }),
          }}
        />
        
        {/* Sass.js for SCSS compilation in browser */}
        <script src="https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js" async></script>
        <script src="/register-sw.js" defer></script>
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

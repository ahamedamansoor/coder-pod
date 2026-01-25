
import type { Metadata } from "next";

import { cn } from "@/lib/utils"
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Coder Pod - Ultimate Coder Platform | AI-Powered Coding Ecosystem",
  description: "The complete platform for coders: AI-powered learning, interview practice, collaborative coding, cheatsheets, system design, and career growth. Your coding journey from beginner to senior developer.",
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
    title: "Coder Pod - Ultimate Coder Platform",
    description: "The complete platform for coders: AI-powered learning, interview practice, collaborative coding, cheatsheets, system design, and career growth. Your coding journey from beginner to senior developer.",
    url: "https://coder-pod.com",
    siteName: "Coder Pod",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coder Pod - Ultimate Coder Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coder Pod - Ultimate Coder Platform",
    description: "The complete platform for coders: AI-powered learning, interview practice, collaborative coding, cheatsheets, system design, and career growth. Your coding journey from beginner to senior developer.",
    images: ["/og-image.png"],
  },
  keywords: [
    "coder platform",
    "ultimate coder",
    "coder tools",
    "coder learning",
    "coder interview",
    "coder cheatsheets",
    "coder career",
    "complete developer platform",
    "AI-powered coding ecosystem",
    "learn programming",
    "AI interview practice",
    "coding interview",
    "interactive coding",
    "collaborative coding",
    "programming cheatsheets",
    "AI tools for coders",
    "system design patterns",
    "frontend architecture",
    "backend development",
    "cloud deployment",
    "career growth",
    "tech job preparation",
    "JavaScript tutorial",
    "React course",
    "HTML CSS learning",
    "Java Spring Boot",
    "Vue tutorial",
    "Angular development",
    "API integration",
    "state management",
    "performance optimization",
    "developer productivity",
    "coding reference",
    "programming tutorials"
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
              "url": "https://coderpod.io",
              "logo": "https://coderpod.io/icon-192.png",
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
                "url": "https://coderpod.io",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://coderpod.io/search?q={search_term_string}",
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
              "url": "https://coderpod.io",
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


import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import "./globals.css";
import { Providers } from './providers';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Coder Pod - Learn Programming",
  description: "Interactive platform to learn HTML, CSS, JavaScript, React, Java, Spring Boot and more with hands-on examples",
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
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
        {/* Sass.js for SCSS compilation in browser */}
        <script src="https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js" async></script>
        <script src="/register-sw.js" defer></script>
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

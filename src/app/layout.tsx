
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
  title: "Code Learning App",
  description: "Learn to code in your favorite languages with interactive lessons and AI-powered feedback.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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

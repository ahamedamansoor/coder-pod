
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { FirebaseClientProvider } from '@/firebase';
import { WebPlaygroundProvider } from '@/components/web-playground-context';
import { LoadingProvider } from '@/hooks/use-loading';
import { PageLoader } from '@/components/page-loader';

export const metadata: Metadata = {
  title: 'Coder Pod - Your Launchpad For Learning',
  description: 'Your Launchpad For Learning - Master programming with AI-powered tutorials, interactive code editor, and personalized learning paths.',
  keywords: ['programming', 'learning', 'coding', 'tutorials', 'AI tutor', 'web development', 'HTML', 'CSS', 'JavaScript', 'React'],
  authors: [{ name: 'Coder Pod' }],
  openGraph: {
    title: 'Coder Pod - Your Launchpad For Learning',
    description: 'Master programming with AI-powered tutorials and interactive learning.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        {/* Preload SCSS compiler for web playground */}
        <script src="https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.js" async></script>
      </head>
      <body className="font-body antialiased h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <WebPlaygroundProvider>
                  <LoadingProvider>
                    <PageLoader />
                    {children}
                    <Toaster />
                  </LoadingProvider>
            </WebPlaygroundProvider>
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

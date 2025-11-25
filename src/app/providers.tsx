
'use client';

import { ThemeProvider } from '@/components/shared/theme-provider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { LoadingProvider, useLoading } from '@/hooks/use-loading';
import { Loader2 } from 'lucide-react';
import { FirebaseProvider } from '@/firebase';

function GlobalLoadingIndicator() {
    const { isLoading } = useLoading();
  
    return (
      <>
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
          </div>
        )}
      </>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <FirebaseProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <TooltipProvider>
                    <SidebarProvider>
                        <LoadingProvider>
                            {children}
                            <GlobalLoadingIndicator />
                            <Toaster />
                        </LoadingProvider>
                    </SidebarProvider>
                </TooltipProvider>
            </ThemeProvider>
        </FirebaseProvider>
    )
}

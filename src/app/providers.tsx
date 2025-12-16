
'use client';

import { ThemeProvider } from '@/components/shared/layout/theme-provider';
import { 
  WebPlaygroundProvider, 
  ReactPlaygroundProvider, 
  AngularPlaygroundProvider 
} from '@/components/shared/playground';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { SupabaseAuthProvider } from '@/contexts/SupabaseAuthContext';
import { LoadingProvider, useLoading } from '@/hooks/use-loading';
import { PlayerProvider } from '@/contexts/PlayerContext';
import { FloatingPlayer } from '@/components/shared/FloatingPlayer';
import { MotivationalLoaderProvider } from '@/contexts/motivational-loader-context';
import { Loader2 } from 'lucide-react';

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
        <SupabaseAuthProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                <TooltipProvider>
                    <SidebarProvider>
                        <LoadingProvider>
                            <MotivationalLoaderProvider>
                                <PlayerProvider>
                                    <WebPlaygroundProvider>
                                        <ReactPlaygroundProvider>
                                            <AngularPlaygroundProvider>
                                                {children}
                                            </AngularPlaygroundProvider>
                                        </ReactPlaygroundProvider>
                                    </WebPlaygroundProvider>
                                    <FloatingPlayer />
                                    <GlobalLoadingIndicator />
                                    <Toaster />
                                </PlayerProvider>
                            </MotivationalLoaderProvider>
                        </LoadingProvider>
                    </SidebarProvider>
                </TooltipProvider>
            </ThemeProvider>
        </SupabaseAuthProvider>
    )
}

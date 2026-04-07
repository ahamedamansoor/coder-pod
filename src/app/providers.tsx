
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
import { EnhancedAuthProvider } from '@/lib/auth/enhanced-auth-context';
import { LoadingProvider, useLoading } from '@/hooks/use-loading';
import { PlayerProvider } from '@/contexts/PlayerContext';
import { FloatingPlayer } from '@/components/shared/FloatingPlayer';
import { MotivationalLoaderProvider } from '@/contexts/motivational-loader-context';
import { Loader2, Sparkles, Rocket } from 'lucide-react';

function GlobalLoadingIndicator() {
    const { isLoading, loaderText } = useLoading();
  
    if (!isLoading) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Ambient orbs */}
        <div className="absolute w-[460px] h-[460px] bg-emerald-500/10 blur-3xl rounded-full -left-24 -top-24 animate-pulse" />
        <div className="absolute w-[520px] h-[520px] bg-cyan-500/10 blur-3xl rounded-full -right-24 -bottom-28 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.16),transparent_32%)]" />

        {/* Content */}
        <div className="relative flex flex-col items-center gap-6 text-center px-6">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur shadow-lg shadow-emerald-500/10">
            <Loader2 className="h-5 w-5 animate-spin text-emerald-200" />
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-emerald-100">
              Loading Coder Pod
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-emerald-200 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-300 drop-shadow-[0_10px_30px_rgba(16,185,129,0.35)]">
              {loaderText.title || 'Loading Coder Pod...'}
            </h2>
            <Sparkles className="h-5 w-5 text-cyan-200 animate-pulse" />
          </div>

          <p className="text-sm sm:text-base text-slate-200/80 max-w-xl">
            {loaderText.subtitle || 'Warming up workspaces and creative engines'}
          </p>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-emerald-100">
            <span className="animate-[pulse_1.6s_ease-in-out_infinite]">Compiling</span>
            <span className="text-slate-500">•</span>
            <span className="animate-[pulse_1.6s_ease-in-out_infinite] [animation-delay:0.18s]">Linking</span>
            <span className="text-slate-500">•</span>
            <span className="animate-[pulse_1.6s_ease-in-out_infinite] [animation-delay:0.36s]">Launching</span>
          </div>
        </div>
      </div>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <EnhancedAuthProvider>
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
        </EnhancedAuthProvider>
    )
}

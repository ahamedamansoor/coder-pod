
'use client';

import { BrainCircuit, Rocket } from 'lucide-react';
import { useLoading } from '@/hooks/use-loading';
import { cn } from '@/lib/utils';

export function PageLoader() {
  const { isLoading } = useLoading();

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative">
            <Rocket className="w-20 h-20 text-primary animate-bounce" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <BrainCircuit className="w-10 h-10 text-primary/50 animate-spin" />
            </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 animate-pulse">Loading Your Learning Module...</h2>
        <p className="text-muted-foreground mt-2">Just a moment!</p>
      </div>
    </div>
  );
}

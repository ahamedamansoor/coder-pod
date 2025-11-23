
'use client';

import { Rocket } from 'lucide-react';
import { useLoading } from '@/hooks/use-loading';
import { cn } from '@/lib/utils';

export function PageLoader() {
  const { isLoading, loaderText } = useLoading();

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex flex-col items-center justify-center">
        <Rocket className="w-20 h-20 text-primary animate-bounce" />
        <h2 className="text-2xl font-semibold mt-8 animate-pulse">{loaderText.title}</h2>
        <p className="text-muted-foreground mt-2">{loaderText.subtitle}</p>
      </div>
    </div>
  );
}

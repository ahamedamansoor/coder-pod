'use client';

import { BrainCircuit, Loader2, Rocket } from 'lucide-react';

export function InteractiveLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-background text-foreground">
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative">
            <Rocket className="w-20 h-20 text-primary animate-bounce" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <BrainCircuit className="w-10 h-10 text-primary/50 animate-spin" />
            </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 animate-pulse">Building Your Learning Module...</h2>
        <p className="text-muted-foreground mt-2">Getting things ready for you!</p>
      </div>
    </div>
  );
}

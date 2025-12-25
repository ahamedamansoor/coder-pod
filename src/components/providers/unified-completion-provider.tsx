'use client';

import React, { ReactNode } from 'react';
import { useUnifiedCompletion } from '@/hooks/use-unified-completion';

interface UnifiedCompletionProviderProps {
  children: ReactNode;
}

export function UnifiedCompletionProvider({ children }: UnifiedCompletionProviderProps) {
  // Initialize the unified completion service
  useUnifiedCompletion();

  return <>{children}</>;
}

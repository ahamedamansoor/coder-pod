'use client';

import { useMemo, DependencyList } from 'react';

/**
 * A custom useMemo hook that adds a __memo flag to the returned value.
 * This is used to ensure Firebase references/queries are properly memoized
 * before being passed to useCollection or useDoc hooks.
 */
export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): T & { __memo?: boolean } {
  const memoizedValue = useMemo(factory, deps);
  
  if (memoizedValue && typeof memoizedValue === 'object') {
    // Add __memo flag to indicate this was properly memoized
    Object.defineProperty(memoizedValue, '__memo', {
      value: true,
      writable: false,
      enumerable: false,
      configurable: true
    });
  }
  
  return memoizedValue as T & { __memo?: boolean };
}

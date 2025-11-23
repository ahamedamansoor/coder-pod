/**
 * Type declarations for sass.js
 */

declare global {
  interface Window {
    Sass?: {
      new (): SassInstance;
    };
  }
}

interface SassInstance {
  compile(
    source: string,
    callback: (result: SassCompileResult) => void
  ): void;
}

interface SassCompileResult {
  status: number;
  text?: string;
  message?: string;
  formatted?: string;
  line?: number;
  column?: number;
  file?: string;
}

export {};

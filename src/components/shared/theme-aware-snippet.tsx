'use client';

import React from 'react';

interface ThemeAwareSnippetProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

export const ThemeAwareSnippet = React.memo(function ThemeAwareSnippet({ 
  children, 
  className = "", 
  language 
}: ThemeAwareSnippetProps) {
  return (
    <div 
      className={`
        w-screen max-w-full rounded-lg border p-4 font-mono text-sm
        bg-gray-100 dark:bg-gray-900 
        border-gray-300 dark:border-gray-700
        text-gray-800 dark:text-gray-100
        transition-colors duration-200
        ${className}
      `}
    >
      {language && (
        <div className="mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          {language}
        </div>
      )}
      <pre className="whitespace-pre-wrap break-words">
        {children}
      </pre>
    </div>
  );
});
